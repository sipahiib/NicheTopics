import {execFileSync} from "node:child_process";
import {mkdirSync, readFileSync, writeFileSync} from "node:fs";
import {resolve} from "node:path";

const root = resolve(import.meta.dirname, "..");
const scenes = JSON.parse(readFileSync(resolve(root, "src/content.json"), "utf8"));
const tts = process.env.EDGE_TTS_BIN ?? resolve(root, "../.venv-tts/bin/edge-tts");
const audioDir = resolve(root, "public/audio");
mkdirSync(audioDir, {recursive: true});

const timing = [];
const captions = [];
let cursorMs = 0;

function clockToMs(value) {
  const [h, m, rest] = value.split(":");
  const [s, ms] = rest.split(",");
  return Number(h) * 3600000 + Number(m) * 60000 + Number(s) * 1000 + Number(ms);
}

for (const scene of scenes) {
  const audio = resolve(audioDir, `${scene.id}.mp3`);
  const srt = resolve(audioDir, `${scene.id}.srt`);
  execFileSync(tts, ["--voice", "en-GB-RyanNeural", "--rate=-2%", "--text", scene.narration, "--write-media", audio, "--write-subtitles", srt], {stdio: "inherit"});
  const seconds = Number(execFileSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "default=noprint_wrappers=1:nokey=1", audio], {encoding: "utf8"}).trim());
  const durationMs = Math.ceil(seconds * 1000) + 500;
  timing.push({id: scene.id, startMs: cursorMs, durationMs});
  const blocks = readFileSync(srt, "utf8").trim().split(/\r?\n\r?\n/);
  for (const block of blocks) {
    const lines = block.split(/\r?\n/);
    const range = lines.find((line) => line.includes(" --> "));
    if (!range) continue;
    const [start, end] = range.split(" --> ");
    const value = lines.slice(lines.indexOf(range) + 1).join(" ").replace(/<[^>]+>/g, "").trim();
    if (value) captions.push({text: value, startMs: cursorMs + clockToMs(start), endMs: cursorMs + clockToMs(end), timestampMs: null, confidence: null});
  }
  cursorMs += durationMs;
}

writeFileSync(resolve(root, "public/timing.json"), JSON.stringify(timing, null, 2) + "\n");
writeFileSync(resolve(root, "public/duration.json"), JSON.stringify({durationMs: cursorMs}, null, 2) + "\n");
writeFileSync(resolve(root, "public/captions.json"), JSON.stringify(captions, null, 2) + "\n");
console.log(`Duration: ${(cursorMs / 1000).toFixed(1)} seconds; caption cues: ${captions.length}`);
