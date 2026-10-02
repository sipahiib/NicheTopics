# Video 20 demo

Original 10-second calendar / interface / title animation. 1920×1080, 30 fps.
Uses the existing local Remotion 4.0.524 / React 19.2.3 installation in
`package.json` and `package-lock.json` in this repository.
No stock or paid assets are used. System Helvetica Neue / Arial fonts are referenced,
not redistributed. The interface is an illustrative concept, not a real product.

From the repository root:

```bash
node_modules/.bin/remotion render src/video-20/index.tsx Demo20 build/video-20/demo-silent.mp4 --concurrency=2
```

Narration: Edge TTS 7.2.3, en-GB-RyanNeural, -2%.
Text: “One year from now, how much of this video will be outdated? The tools change. The questions still matter.”
Final output and intermediate media remain in ignored `build/video-20/`.

## Full video

Final master: `build/video-20/video-20-final.mp4` (170.333 seconds).
Thumbnail: `build/video-20/thumbnail.png`.
Script and measured timeline: `assets/video-20/`.
Research, narration, and publishing text: `docs/video-20/`.

Run from the repository root:

```bash
# Generate narration (requires network and the local edge-tts environment).
build/video-20/venv/bin/python src/video-20/voiceover.py
# Generate timeline source and mix narration.
python3 src/video-20/assemble.py
# Render locally.
node_modules/.bin/remotion render src/video-20/full.tsx Video20 build/video-20/full-silent.mp4 --public-dir=build/video-20/public --concurrency=3
# Combine narration and picture.
ffmpeg -y -i build/video-20/full-silent.mp4 -i build/video-20/narration-full.wav -map 0:v:0 -map 1:a:0 -c:v copy -c:a aac -b:a 192k -shortest -movflags +faststart build/video-20/video-20-final.mp4
# Check timeline invariants.
python3 -m unittest discover -s tests/video-20 -v
# Check TypeScript.
node_modules/.bin/tsc --noEmit --jsx react-jsx --esModuleInterop --resolveJsonModule --moduleResolution node --target ES2020 --skipLibCheck src/video-20/full.tsx
```

`assemble.py` regenerates `full.tsx`; edit its template before regenerating if changing registrations or the thumbnail. Scene components remain independently editable.
If changing narration, delete only the affected cached MP3 before running voiceover.py.
Footage preparation uses the two local Pexels clips listed in sources-and-assets.md,
copied into `build/video-20/public/footage/`.

The source uses pinned packages from the existing `package-lock.json`.
No new Node dependency was added. No full-project coverage threshold was introduced;
the focused deterministic test guards duration, audio headroom and sequence continuity.

## Fresh checkout setup

Install Node.js, Python 3, FFmpeg (including ffprobe), and then run from repository root:

```bash
npm ci
mkdir -p build/video-20/public/footage
python3 -m venv build/video-20/venv
build/video-20/venv/bin/pip install -r src/video-20/requirements-tts.txt
curl -L --fail -o build/video-20/public/footage/office-team.mp4 https://www.pexels.com/download/video/7165691/
curl -L --fail -o build/video-20/public/footage/city-timelapse.mp4 https://www.pexels.com/download/video/30397327/
```

Pexels downloads and Edge TTS require network access. Remotion can download its browser on first render. Generated audio/video and caches remain ignored.
