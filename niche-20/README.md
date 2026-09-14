# A Day in 2031

An English, subtitle-free YouTube documentary for `newhorizons_21`, built with Remotion in 1920×1080. It uses real Pexels footage and evidence from WEF, IEA, WHO, and IFR.

## Setup

```bash
npm install
python3 -m venv .venv-tts
.venv-tts/bin/pip install -r requirements-tts.txt
./scripts/download-footage.sh
npm run voiceover
npm run lint
npm run render
```

Narration uses Microsoft Edge TTS `en-GB-RyanNeural` at `-2%`. Research and footage credits are documented in `docs/sources-and-assets.md`. Rendered MP3 and MP4 files are intentionally excluded from Git.
