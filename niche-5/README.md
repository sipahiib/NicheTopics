# Realistic ways to make money with AI

A four-minute New Horizons English explainer for niche.md item 5. Eight editable scenes cover content repurposing, product copy, automation, project economics and a first paid pilot. One shared 16:9 master composition for YouTube and Instagram.

## Commands

- `npm ci` — install pinned dependencies.
- `npm run voiceover` — generate RyanNeural narration at -2%; requires ../.venv-tts and ffprobe.
- `npm run dev` — start the interactive Studio.
- `npm run lint` — ESLint and TypeScript checks.
- `npm run render` — export one local MP4 master into build/.
- `npm run thumbnail` — export the cover image.

The composition is exactly 240 seconds. Voiceover generation checks every audio clip fits its scene with at least 500 ms spare. Media and build outputs are ignored. Research and publishing copy are in docs/. No publishing actions are performed.

`npm test` checks the complete 240-second timeline and every narration slot. The initial test scope is timeline integrity; no source coverage threshold is set for this presentation-only composition.

Visual update: original animated vector illustrations now fill every scene, including editing equipment, a product storefront, a message-routing robot, a wallet, a client call and a launch. On-screen branding and chapter labels are removed. Artwork is reproducible from src/MovingIllustration.tsx.
