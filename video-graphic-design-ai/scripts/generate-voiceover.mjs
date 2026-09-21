import {mkdirSync, readFileSync, writeFileSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
import path from 'node:path';

const root = process.cwd();
const scenes = JSON.parse(readFileSync(path.join(root, 'src/content.json'), 'utf8'));
const outputDir = path.join(root, 'public/voiceover');
mkdirSync(outputDir, {recursive: true});

const run = (command, args) => {
  const result = spawnSync(command, args, {encoding: 'utf8'});
  if (result.status !== 0) throw new Error(`${command} failed: ${result.stderr}`);
  return result.stdout.trim();
};

const localEdgeTts = path.join(root, '.venv-tts/bin/edge-tts');
const timing = [];
const captions = [];
let offsetMs = 0;

for (const scene of scenes) {
  const mp3 = path.join(outputDir, `${scene.id}.mp3`);
  run(localEdgeTts, ['--voice', 'en-GB-RyanNeural', '--rate=-2%', '--text', scene.voiceover, '--write-media', mp3]);
  const durationSeconds = Number(run('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'default=noprint_wrappers=1:nokey=1', mp3]));
  const durationMs = Math.round(durationSeconds * 1000);
  timing.push({id: scene.id, startMs: offsetMs, durationMs});

  const words = scene.voiceover.split(/\s+/).filter(Boolean);
  const lead = 150;
  const usable = Math.max(1, durationMs - 300);
  words.forEach((word, index) => {
    const startMs = offsetMs + lead + Math.round((index / words.length) * usable);
    const endMs = offsetMs + lead + Math.round(((index + 1) / words.length) * usable);
    captions.push({text: `${index === 0 ? '' : ' '}${word}`, startMs, endMs, timestampMs: startMs, confidence: 1});
  });
  offsetMs += durationMs;
}

writeFileSync(path.join(root, 'public/timing.json'), `${JSON.stringify(timing, null, 2)}\n`);
writeFileSync(path.join(root, 'public/duration.json'), `${JSON.stringify({durationMs: offsetMs}, null, 2)}\n`);
writeFileSync(path.join(root, 'public/captions.json'), `${JSON.stringify(captions, null, 2)}\n`);

run('ffmpeg', ['-y', '-f', 'lavfi', '-i', `sine=frequency=55:duration=${offsetMs / 1000}:sample_rate=44100`, '-f', 'lavfi', '-i', `sine=frequency=82.41:duration=${offsetMs / 1000}:sample_rate=44100`, '-filter_complex', '[0:a]volume=0.035[a0];[1:a]volume=0.018,tremolo=f=0.1:d=0.25[a1];[a0][a1]amix=inputs=2,lowpass=f=900,afade=t=in:st=0:d=2,afade=t=out:st=' + Math.max(0, offsetMs / 1000 - 3) + ':d=3', '-q:a', '5', path.join(root, 'public/score.mp3')]);

console.log(`Generated ${scenes.length} scenes (${(offsetMs / 1000).toFixed(1)} seconds).`);
