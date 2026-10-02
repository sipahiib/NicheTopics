import {execFileSync} from "node:child_process";
import {mkdirSync, readFileSync, writeFileSync} from "node:fs";
import {resolve} from "node:path";

const root = resolve(import.meta.dirname, "..");
const scenes = JSON.parse(readFileSync(resolve(root, "src/content.json"), "utf8"));
const tts = process.env.EDGE_TTS_BIN ?? resolve(root, "../.venv-tts/bin/edge-tts");
const audioDir = resolve(root, "public/audio");
mkdirSync(audioDir, {recursive: true});

let cursorMs = 0;
const timing = [];
for (const scene of scenes) {
  const audio = resolve(audioDir, `${scene.id}.mp3`);
  execFileSync(tts, ["--voice", "en-GB-RyanNeural", "--rate=-2%", "--text", scene.narration, "--write-media", audio], {stdio: "inherit"});
  const seconds = Number(execFileSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "default=noprint_wrappers=1:nokey=1", audio], {encoding: "utf8"}).trim());
  const slotMs = scene.seconds * 1000;
  if (seconds * 1000 > slotMs - 500) throw new Error(`${scene.id}: narration ${seconds.toFixed(1)}s exceeds ${scene.seconds}s scene`);
  timing.push({id: scene.id, startMs: cursorMs, durationMs: slotMs, audioDurationMs: Math.round(seconds * 1000)});
  cursorMs += slotMs;
}
writeFileSync(resolve(root, "public/timing.json"), JSON.stringify(timing, null, 2) + "\n");
writeFileSync(resolve(root, "public/duration.json"), JSON.stringify({durationMs: cursorMs}, null, 2) + "\n");
console.log(`Video duration: ${(cursorMs / 1000).toFixed(0)}s`);
