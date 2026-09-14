# AI Agents: Danger or Opportunity?

An English technology explainer produced for `newhorizons_21` with Remotion. The project includes one 16:9 YouTube-format MP4 master, calm male narration, a copyright-safe synthesized score, and a YouTube thumbnail. The video intentionally contains no subtitles.

## Commands

```bash
npm install
npm run lint
npm run voiceover
npm run dev
npm run render:master
npm run render:thumbnail
```

The voiceover generator uses Microsoft Edge TTS `en-GB-RyanNeural` at `-2%` speed. Create `.venv-tts`, install `requirements-tts.txt`, then run `npm run voiceover`. The generator also requires `ffprobe`. Finished files are written to `output/`.

## Structure

- `src/content.json` — final English narration and on-screen copy
- `src/shared/` — reusable scene and branding components
- `public/assets/` — logo and generated cinematic art
- `public/voiceover/` — scene-level narration
- `docs/` — research, storyboard, and publishing copy
- `output/` — rendered deliverables
