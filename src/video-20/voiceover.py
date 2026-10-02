"""Generate the approved English narration and a frame-aligned 160s timeline."""
import asyncio
import json
import math
import subprocess
from pathlib import Path
import edge_tts

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / 'build/video-20'
OUT.mkdir(parents=True, exist_ok=True)
PARTS = json.loads((ROOT / 'assets/video-20/narration.json').read_text())

async def main():
    semaphore = asyncio.Semaphore(3)
    async def generate(part):
        async with semaphore:
            target = OUT / (part['id'] + '.mp3')
            if not target.exists():
                await edge_tts.Communicate(part['text'], 'en-GB-RyanNeural', rate='-2%').save(str(target))
            seconds = float(subprocess.check_output(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', str(target)]))
            return math.ceil(seconds * 30)
    lengths = await asyncio.gather(*(generate(p) for p in PARTS))
    minimum = sum(n + 18 for n in lengths)
    total = max(4800, minimum)
    if total > 5400:
        raise RuntimeError(f'Narration exceeds 3 minutes: {total / 30:.2f}s')
    spare = total - minimum
    cursor = 0
    timeline = []
    for i, (part, length) in enumerate(zip(PARTS, lengths)):
        frames = length + 18 + spare // len(PARTS) + (i < spare % len(PARTS))
        timeline.append({**part, 'start': cursor, 'frames': frames, 'audioFrames': length})
        cursor += frames
    (ROOT / 'assets/video-20/timeline.json').write_text(json.dumps(timeline, indent=2) + '\n')
    print(f'{sum(len(p["text"].split()) for p in PARTS)} words, {cursor / 30:.2f}s, {len(PARTS)} segments')

asyncio.run(main())
