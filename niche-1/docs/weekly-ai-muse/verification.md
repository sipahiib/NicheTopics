# Delivery and publication verification

Date: 5 October 2026.

## Local deliverables

- Master: build/weekly-ai-muse/meta-muse-master.mp4 . H.264 video, AAC stereo audio, 1920×1080, 30 fps, 6,056 frames.
- Both streams: 201.866667 seconds (3:21.87). Size: 37,155,662 bytes.
- Complete FFmpeg decode succeeded. No black intervals detected at minimum duration 0.3 s / pixel threshold 0.05.
- Final audio measured at -16.07 LUFS integrated, -1.08 dBTP true peak, 4.0 LU loudness range.
- Thumbnail: build/weekly-ai-muse/thumbnail.png ; 1280×720, 67,312 bytes, visually inspected.
- Optional English captions: build/weekly-ai-muse/captions.en.srt . Timed from Edge TTS sentence boundaries with the same 200 ms audio offset used in the mix.
- TypeScript and ESLint passed. Delivery tests cover timeline continuity, narration headroom, caption bounds, manual chapter spacing, English language metadata and the next-video link.
- Visual QA: thirteen authored preview frames plus a full-master contact sheet at five-second intervals inspected. The contact-sheet padding cells are not video black frames. No overflow or banned branding observed in the samples.
- Listening review was not performed through an audio playback inspection tool. Audio checks cover synthesis provenance, sentence timings, duration, full decode and loudness; pronunciation has not been independently reviewed by listening.

## YouTube

- Connected account: New Horizons / @newhorizons_21 / UCw23gW3re0GytGHm0De3_1Q.
- Video ID: WjD-TqZpx-M.
- URL: https://www.youtube.com/watch?v=WjD-TqZpx-M .
- User explicitly requested immediate public publication. Upload staged privately for metadata preparation; subsequent readback confirmed public visibility and succeeded processing. No duplicate video upload was performed.
- Custom thumbnail confirmed by API readback.
- Metadata language: en. Audio language: en-GB. Not made for kids.
- Synthetic-media disclosure set during metadata preparation and again in a status-only update after publication. Both write responses confirm containsSyntheticMedia=true; subsequent GET responses omit this field, so persistence is not independently verified by readback. Synthetic narration is also explicitly declared in the description.
- English standard caption track uploaded through resumable captions.insert after the proxy multipart attempt failed with HTTP 400 and no caption resource. The successful track is named English, language en, isDraft false, status serving. Auto-generated English captions also exist.
- Ten manual chapter timestamps included, starting at 00:00. YouTube may decide whether to show chapter navigation based on channel eligibility.
- Description includes the direct next-video link to 71DQ6sR1wl0; its original cover also appears in the final frame. A clickable end-screen widget was not configured because browser control permissions were unavailable.
- No changes to older videos or channel-wide settings; no Instagram publication, paid generation, commit or push.

## Reproducibility

Narration, shot definitions, sources, platform copy and tests remain in the source tree. Generated media and temporary upload metadata remain in ignored build paths. Remotion preview was started at http://localhost:3105/WeeklyAiMuse .
