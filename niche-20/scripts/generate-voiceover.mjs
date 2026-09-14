import {execFileSync} from "node:child_process";
import {mkdirSync, readFileSync, writeFileSync} from "node:fs";
import {resolve} from "node:path";

const projectRoot = resolve(import.meta.dirname, "..");
const scenes = JSON.parse(readFileSync(resolve(projectRoot, "src/content.json"), "utf8"));
const outputDir = resolve(projectRoot, "public/audio");
const edgeTts = process.env.EDGE_TTS_BIN ?? resolve(projectRoot, ".venv-tts/bin/edge-tts");

mkdirSync(outputDir, {recursive: true});
const timing = [];
let cursorMs = 0;

for (const scene of scenes) {
  const output = resolve(outputDir, `${scene.id}.mp3`);
  execFileSync(edgeTts, ["--voice", "en-GB-RyanNeural", "--rate=-2%", "--text", scene.narration, "--write-media", output], {stdio: "inherit"});
  const seconds = Number(execFileSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "default=noprint_wrappers=1:nokey=1", output], {encoding: "utf8"}).trim());
  const durationMs = Math.ceil(seconds * 1000) + 450;
  timing.push({id: scene.id, startMs: cursorMs, durationMs});
  cursorMs += durationMs;
}

writeFileSync(resolve(projectRoot, "public/timing.json"), JSON.stringify(timing, null, 2));
writeFileSync(resolve(projectRoot, "public/duration.json"), JSON.stringify({durationMs: cursorMs}, null, 2));
console.log(`Narration duration: ${(cursorMs / 1000).toFixed(1)} seconds`);
