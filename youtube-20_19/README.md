# youtube-20_19 — Can AI Copy Your Photos?

A single-topic English explainer based on item 19 in youtube-20-video-plani.md. Original animated 1920×1080 scenes with Edge TTS en-GB-RyanNeural at -2%. The narrated 16:9 MP4 master is exported in build/ai-photo-rights-master.mp4. Published on YouTube and Instagram after user approval; links are in assets/publishing.json.

Pinned JavaScript dependencies and package-lock.json are inherited from the parent video-ai-agents repository (Remotion 4.0.524, React 19.2.3). Python TTS dependency is pinned in requirements-tts.txt; FFmpeg/ffprobe must be installed.

Run from this directory:

```bash
# setup
(cd .. && npm ci)
python3 -m venv .venv
.venv/bin/pip install -r requirements-tts.txt
# prepare narration and independent scene registrations
.venv/bin/python src/prepare.py
# lint and tests
../node_modules/.bin/tsc -p src/tsconfig.json
../node_modules/.bin/eslint src --config src/eslint.config.mjs
python3 -m unittest discover -s tests -v
# run
../node_modules/.bin/remotion studio src/index.tsx --public-dir="$PWD/build/public" --no-open
# build / explicit MP4 export
../node_modules/.bin/remotion render src/index.tsx AiPhotoRights build/ai-photo-rights-master.mp4 --public-dir="$PWD/build/public"
../node_modules/.bin/remotion still src/index.tsx PhotoThumbnail build/thumbnail.png
```

Edit assets/narration.json and assets/shots.json, then run prepare.py. Each scene has a separate editable JSX node and a registered standalone composition. Shared original illustrations live in src/scenes/Visual.tsx. All motion follows the Remotion frame clock.

Tests check continuous timing and prevent narration truncation. This media-specific suite has no line-coverage threshold; it checks delivery invariants instead. Generated audio, video and previews stay in ignored build/. No credentials or transfer metadata belong in source control.

After rendering, normalise the audio without re-encoding the visuals:

```bash
ffmpeg -y -i build/ai-photo-rights-master.mp4 -c:v copy -af loudnorm=I=-16:TP=-1.5:LRA=11 -ar 48000 -c:a aac -b:a 192k -movflags +faststart build/ai-photo-rights-final.mp4
mv build/ai-photo-rights-final.mp4 build/ai-photo-rights-master.mp4
```
