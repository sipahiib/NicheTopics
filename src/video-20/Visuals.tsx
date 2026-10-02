import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
export const C = {
  ink: '#101820',
  paper: '#F3EFE6',
  teal: '#3AD6C5',
  amber: '#FFB454',
  muted: '#A7B5B4',
};
export const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};
export const progress = (f: number, a: number, b: number) =>
  interpolate(f, [a, b], [0, 1], clamp);
export const Shell = ({
  children,
  kicker,
  source,
  light = false,
}: {
  children: React.ReactNode;
  kicker: string;
  source?: string;
  light?: boolean;
}) => (
  <AbsoluteFill
    style={{
      background: light ? C.paper : C.ink,
      color: light ? C.ink : C.paper,
      fontFamily: 'Helvetica Neue, Arial',
      overflow: 'hidden',
    }}
  >
    <div
      style={{
        position: 'absolute',
        left: 110,
        top: 86,
        fontSize: 28,
        letterSpacing: 5,
        color: light ? '#45877E' : C.teal,
      }}
    >
      {kicker}
    </div>
    {children}
    {source && (
      <div
        style={{
          position: 'absolute',
          left: 110,
          bottom: 60,
          fontSize: 28,
          color: light ? '#566562' : C.muted,
        }}
      >
        {source}
      </div>
    )}
  </AbsoluteFill>
);
export const Title = ({
  children,
  sub,
}: {
  children: React.ReactNode;
  sub?: string;
}) => {
  const f = useCurrentFrame();
  return (
    <div
      style={{
        position: 'absolute',
        left: 110,
        top: 245,
        width: 820,
        opacity: progress(f, 0, 14),
        translate: `0 ${28 * (1 - progress(f, 0, 20))}px`,
      }}
    >
      <div
        style={{
          fontSize: 105,
          lineHeight: 1.06,
          fontWeight: 750,
          letterSpacing: -5,
        }}
      >
        {children}
      </div>
      {sub && (
        <div
          style={{
            fontSize: 38,
            lineHeight: 1.4,
            marginTop: 38,
            color: '#7B9790',
            maxWidth: 720,
          }}
        >
          {sub}
        </div>
      )}
    </div>
  );
};
export const Paper = ({
  x = 1100,
  y = 250,
  children,
  rotate = -5,
  width = 560,
  height = 620,
}: {
  x?: number;
  y?: number;
  children: React.ReactNode;
  rotate?: number;
  width?: number;
  height?: number;
}) => {
  const f = useCurrentFrame();
  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width,
        height,
        background: '#FFFDF8',
        color: C.ink,
        borderRadius: 24,
        padding: 46,
        boxShadow: '20px 30px 0 #3AD6C535, 20px 40px 70px #0002',
        rotate: `${rotate + Math.sin(f / 65) * 1.5}deg`,
      }}
    >
      {children}
    </div>
  );
};
export const Passport = () => (
  <svg width="190" height="255" viewBox="0 0 190 255">
    <rect x="4" y="4" width="180" height="246" rx="15" fill="#253D56" />
    <text
      x="94"
      y="53"
      textAnchor="middle"
      fill="#EBC987"
      fontSize="20"
      letterSpacing="3"
    >
      PASSPORT
    </text>
    <circle
      cx="94"
      cy="132"
      r="40"
      fill="none"
      stroke="#EBC987"
      strokeWidth="3"
    />
    <ellipse
      cx="94"
      cy="132"
      rx="20"
      ry="40"
      fill="none"
      stroke="#EBC987"
      strokeWidth="2"
    />
    <path
      d="M54 132H134M64 106H125M64 158H125"
      stroke="#EBC987"
      strokeWidth="2"
    />
  </svg>
);
export const Phone = ({ children }: { children: React.ReactNode }) => {
  const f = useCurrentFrame();
  return (
    <div
      style={{
        position: 'absolute',
        left: 1150,
        top: 195,
        width: 460,
        height: 745,
        padding: 19,
        borderRadius: 64,
        background: '#27353D',
        border: '3px solid #7D908F',
        rotate: `${-3 + Math.sin(f / 90) * 2}deg`,
        boxShadow: '35px 40px 80px #0004',
      }}
    >
      <div
        style={{
          height: '100%',
          borderRadius: 43,
          background: C.paper,
          color: C.ink,
          padding: '72px 30px 30px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 18,
            left: 140,
            width: 140,
            height: 29,
            background: C.ink,
            borderRadius: 22,
          }}
        />
        {children}
      </div>
    </div>
  );
};
export const Headline = ({ text }: { text: string }) => (
  <div style={{ fontSize: 38, fontWeight: 650, lineHeight: 1.2 }}>{text}</div>
);
export const Bubbles = ({ quiet = false }: { quiet?: boolean }) => {
  const f = useCurrentFrame();
  return (
    <>
      {[
        'NEW RELEASE',
        'A BIG UPDATE',
        'TRY THIS NOW',
        'NEXT GENERATION',
        'JUST ANNOUNCED',
        'NEW FEATURES',
      ].map((s, i) => {
        const y = ((i * 154 + f * (quiet ? 0.2 : 2)) % 950) - 100;
        return (
          <div
            key={s}
            style={{
              position: 'absolute',
              left: 1030 + (i % 2) * 90,
              top: y,
              width: 600,
              padding: '27px 38px',
              borderRadius: 22,
              background: i % 2 ? '#24323A' : '#314942',
              border: '1px solid #526660',
              fontSize: 31,
              letterSpacing: 2,
              opacity: quiet ? 0.28 : 1,
              rotate: `${i % 2 ? 5 : -5}deg`,
            }}
          >
            <span style={{ color: C.teal, marginRight: 20 }}>↗</span>
            {s}
          </div>
        );
      })}
    </>
  );
};
export const StageProgress = () => {
  const f = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        height: 5,
        width: `${(f / durationInFrames) * 100}%`,
        background: C.teal,
      }}
    />
  );
};
