# Five AI tools for students

Remotion video project for item 13 of `niche.md`: **Öğrenciler için en iyi 5 AI aracı**.

The video is a 180-second English explainer for `newhorizons_21`, with one shared 1920×1080, 16:9 master for YouTube and Instagram. Narration uses Microsoft Edge TTS `en-GB-RyanNeural` at `-2%`. The selection is by use case, not a measured ranking or a claim that every tool is free. Each tool has an original animated, clearly labeled illustrative interface, using one sample assignment throughout.

- [Research and claim checks](docs/research-notes.md)
- [Narration and storyboard](docs/storyboard.md)
- [Publishing copy](docs/publishing-copy.md)

## Commands

```bash
npm ci
npm run voiceover
npm run lint
npm run dev
npm run render
npm run thumbnail
```

The voiceover command needs Microsoft Edge TTS network access and `ffprobe`. It checks that every audio clip fits its fixed scene. `src/content.json` holds the editable narration; `src/Video.tsx` holds the tool-specific animated visuals. The full timeline is 15 + (5 × 30) + 15 seconds. Rendered MP3 and MP4 files stay local and are excluded from Git. Check feature availability again before publication.
