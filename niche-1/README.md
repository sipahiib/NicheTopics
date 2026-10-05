# niche-1 — Meta Muse

Single-topic English AI This Week video: Meta Muse for Small Business and the boundary between drafting and taking action. Published publicly: https://www.youtube.com/watch?v=WjD-TqZpx-M

201.8667 seconds, 1920×1080, 30 fps. RyanNeural narration at -2%. The original animated illustrations, narration, English captions, publishing metadata, research and verification notes are included. MP3/MP4 outputs and temporary upload credentials are excluded.

## Reproduce

Run from this directory. Node dependencies and their pinned lockfile live in the parent repository (Remotion 4.0.524, React 19.2.3). Python 3 and FFmpeg must be installed.

```bash
(cd .. && npm ci)
python3 -m venv .venv
.venv/bin/pip install -r requirements-tts.txt
mkdir -p build/weekly-ai-muse/public/footage
curl -L --fail -o build/weekly-ai-muse/public/footage/office-team.mp4 https://www.pexels.com/download/video/7165691/
cp assets/static/next-video.png build/weekly-ai-muse/public/next-video.png
.venv/bin/python src/weekly-ai-muse/voiceover.py
python3 src/weekly-ai-muse/build.py
../node_modules/.bin/tsc -p src/weekly-ai-muse/tsconfig.json
../node_modules/.bin/eslint src/weekly-ai-muse --config src/weekly-ai-muse/eslint.config.mjs
python3 -m unittest discover -s tests/weekly-ai-muse -v
../node_modules/.bin/remotion studio src/weekly-ai-muse/index.tsx --public-dir=build/weekly-ai-muse/public --no-open
../node_modules/.bin/remotion render src/weekly-ai-muse/index.tsx WeeklyAiMuse build/weekly-ai-muse/silent.mp4 --public-dir=build/weekly-ai-muse/public --concurrency=3
ffmpeg -y -i build/weekly-ai-muse/silent.mp4 -i build/weekly-ai-muse/narration.wav -map 0:v:0 -map 1:a:0 -c:v copy -c:a aac -b:a 192k -shortest -movflags +faststart build/weekly-ai-muse/meta-muse-master.mp4
../node_modules/.bin/remotion still src/weekly-ai-muse/index.tsx MuseThumbnail build/weekly-ai-muse/thumbnail.png
```

Tests validate the committed caption timings, frame continuity, narration headroom, chapter lengths and language metadata without network access. Source provenance and separate YouTube/Instagram hashtags are in docs/weekly-ai-muse/. Verification notes describe the original delivery and its limitations. transfer.py is an optional temporary-storage helper; its signed upload metadata is never committed.
