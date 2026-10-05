"""Generate cached Ryan narration, true sentence timings, and a gap-free timeline."""
import asyncio
import hashlib
import json
import math
import subprocess
from pathlib import Path

import edge_tts

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "build/weekly-ai-muse"
ASSETS = ROOT / "assets/weekly-ai-muse"


async def generate(part):
    path = OUT / f"{part['id']}.mp3"
    digest = hashlib.sha256(part["text"].encode()).hexdigest()
    metadata = OUT / f"{part['id']}.json"
    if not metadata.exists() or json.loads(metadata.read_text())["hash"] != digest:
        cues = []
        with path.open("wb") as audio:
            async for chunk in edge_tts.Communicate(
                part["text"], "en-GB-RyanNeural", rate="-2%"
            ).stream():
                if chunk["type"] == "audio":
                    audio.write(chunk["data"])
                elif chunk["type"] == "SentenceBoundary":
                    cues.append({"start": chunk["offset"] / 10_000_000,
                                 "end": (chunk["offset"] + chunk["duration"]) / 10_000_000,
                                 "text": chunk["text"]})
        metadata.write_text(json.dumps({"hash": digest, "cues": cues}, indent=2) + "\n")
    seconds = float(subprocess.check_output([
        "ffprobe", "-v", "error", "-show_entries", "format=duration",
        "-of", "csv=p=0", str(path)
    ]))
    return math.ceil(seconds * 30), json.loads(metadata.read_text())["cues"]


def timestamp(seconds):
    ms = round(seconds * 1000)
    return f"{ms // 3600000:02}:{ms // 60000 % 60:02}:{ms // 1000 % 60:02},{ms % 1000:03}"


async def main():
    OUT.mkdir(parents=True, exist_ok=True)
    parts = json.loads((ASSETS / "narration.json").read_text())
    semaphore = asyncio.Semaphore(3)

    async def limited(part):
        async with semaphore:
            return await generate(part)

    results = await asyncio.gather(*(limited(p) for p in parts))
    timeline, captions, cursor = [], [], 0
    for part, (audio_frames, cues) in zip(parts, results):
        frames = audio_frames + 18
        if part["id"] == "end":
            frames = max(frames, 600)
        timeline.append({**part, "start": cursor, "frames": frames, "audioFrames": audio_frames})
        for cue in cues:
            start, end = cursor / 30 + 0.2 + cue["start"], cursor / 30 + 0.2 + cue["end"]
            captions.append(f"{len(captions) + 1}\n{timestamp(start)} --> {timestamp(end)}\n{cue['text']}\n")
        cursor += frames
    (ASSETS / "timeline.json").write_text(json.dumps(timeline, indent=2) + "\n")
    (OUT / "captions.en.srt").write_text("\n".join(captions))
    (ASSETS / "captions.en.srt").write_text("\n".join(captions))
    print(f"{sum(len(p['text'].split()) for p in parts)} words; {cursor / 30:.2f} seconds; {len(parts)} shots")


if __name__ == "__main__":
    asyncio.run(main())
