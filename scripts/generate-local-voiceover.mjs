import {mkdirSync, readFileSync, writeFileSync} from "node:fs";
import {spawnSync} from "node:child_process";
import path from "node:path";

const root = process.cwd();
const scenes = JSON.parse(readFileSync(path.join(root, "src/content.json"), "utf8"));
const outputDir = path.join(root, "public/voiceover");
mkdirSync(outputDir, {recursive: true});

const run = (command, args) => {
  const result = spawnSync(command, args, {encoding: "utf8"});
  if (result.status !== 0) {
    throw new Error(`${command} failed: ${result.stderr}`);
  }
  return result.stdout.trim();
};

const timing = [];
let offsetMs = 0;

for (const scene of scenes) {
  const mp3 = path.join(outputDir, `${scene.id}.mp3`);

  run(path.join(root, ".venv-tts/bin/edge-tts"), [
    "--voice", "en-GB-RyanNeural",
    "--rate=-2%",
    "--text", scene.voiceover,
    "--write-media", mp3,
  ]);

  const durationSeconds = Number(run("ffprobe", [
    "-v", "error",
    "-show_entries", "format=duration",
    "-of", "default=noprint_wrappers=1:nokey=1",
    mp3,
  ]));
  const durationMs = Math.round(durationSeconds * 1000);
  timing.push({id: scene.id, startMs: offsetMs, durationMs});

  offsetMs += durationMs;
}

writeFileSync(path.join(root, "public/timing.json"), `${JSON.stringify(timing, null, 2)}\n`);
writeFileSync(path.join(root, "public/duration.json"), `${JSON.stringify({durationMs: offsetMs}, null, 2)}\n`);

console.log(`Generated ${scenes.length} scenes (${(offsetMs / 1000).toFixed(1)} seconds).`);
