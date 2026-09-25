# Three real AI mistakes

English narrated, 1920×1080, 30 fps video for YouTube and Instagram. The scenes are original motion graphics; they are illustrations, not screenshots of the original search results or court documents.

## Produce locally

From this directory:

```bash
npm install
npm run voiceover
npm run dev
npm run lint
npm run render
npm run thumbnail
```

Voiceover uses Microsoft Edge TTS `en-GB-RyanNeural` at `-2%`. Set `EDGE_TTS_BIN` if the executable is elsewhere. Narration MP3s, SRTs, the master MP4, and the PNG thumbnail are generated locally. MP3 and MP4 files are ignored by Git.

The script, scene graphics, and timings are editable. The video does not display subtitles or a scene counter. Run `npm run voiceover` after changing narration; that updates scene timing and generates subtitle metadata for possible future use.

See [research notes](docs/research-notes.md) for the source and claim checks, and [publishing copy](docs/publishing-copy.md) for title, description, and platform-specific hashtags.
