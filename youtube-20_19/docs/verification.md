# Verification

14 independently editable scenes, 6427 frames, 214.2333 seconds, 1920×1080 at 30 fps. Edge TTS en-GB-RyanNeural at -2%.

TypeScript and ESLint pass. Two delivery-invariant tests pass using the actual MP3 durations: continuous shot timing and at least 0.59 seconds of audio headroom per scene. Narration begins 0.2 seconds into each scene.

A complete MP4 export was requested and produced on 5 October 2026. The user approved publication, and the video was published publicly on YouTube and as an Instagram Reel on @newhorizons_21. Publication links and verification are in publishing.md. No source-code coverage percentage is asserted.

Rendered one sampled frame from each of the 14 scenes and inspected the contact sheet, plus the full-resolution hook and thumbnail. No clipped titles or overlapping critical text were observed in those sampled frames. A full real-time playback/audio listening pass has not been performed.

Final file: build/ai-photo-rights-master.mp4, 26,977,318 bytes, 214.300 seconds container duration (6427 video frames = 214.233 seconds; AAC padding accounts for the difference). H.264 1920×1080 30 fps, AAC 48 kHz stereo. Full FFmpeg decode passes with no errors. Final audio measured -16.09 LUFS, -1.50 dBTP, LRA 3.20 after loudness normalisation. Visual QA from the preceding sampled-frame review remains applicable; video was stream-copied during audio normalisation.
