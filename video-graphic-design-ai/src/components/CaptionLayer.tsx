import {createTikTokStyleCaptions, type Caption, type TikTokPage} from '@remotion/captions';
import {AbsoluteFill, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import captionsJson from '../../public/captions.json';

const SWITCH_MS = 1450;
const captions = captionsJson as Caption[];
const {pages} = createTikTokStyleCaptions({captions, combineTokensWithinMilliseconds: SWITCH_MS});

const CaptionPage: React.FC<{page: TikTokPage}> = ({page}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const now = page.startMs + (frame / fps) * 1000;
  return (
    <div className="caption-pill">
      {page.tokens.map((token) => (
        <span key={token.fromMs} className={token.fromMs <= now && token.toMs > now ? 'active-word' : ''}>
          {token.text}
        </span>
      ))}
    </div>
  );
};

export const CaptionLayer: React.FC = () => {
  const {fps} = useVideoConfig();
  return (
    <AbsoluteFill className="caption-layer">
      {pages.map((page, index) => {
        const next = pages[index + 1];
        const from = Math.round((page.startMs / 1000) * fps);
        const until = Math.min(next ? (next.startMs / 1000) * fps : Infinity, from + (SWITCH_MS / 1000) * fps);
        const durationInFrames = Math.max(1, Math.round(until - from));
        return (
          <Sequence key={`${page.startMs}-${index}`} from={from} durationInFrames={durationInFrames} layout="none">
            <CaptionPage page={page} />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
