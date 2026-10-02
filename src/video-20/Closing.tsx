import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};
export const Closing = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill
      style={{
        background: '#101820',
        color: '#F3EFE6',
        fontFamily: 'Helvetica Neue, Arial',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: 740,
          height: 740,
          left: 1080,
          top: 170,
          border: '1px solid #3AD6C54D',
          borderRadius: '50%',
          scale: 1 + f * 0.002,
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: 580,
          height: 580,
          left: 1160,
          top: 250,
          border: '1px solid #3AD6C530',
          borderRadius: '50%',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 1130,
          top: 365,
          width: 490,
          height: 350,
          borderRadius: 24,
          background: '#F3EFE6',
          color: '#101820',
          rotate: `${7 - f * 0.035}deg`,
          boxShadow: '20px 30px 0 #3AD6C5',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ fontSize: 25, letterSpacing: 6 }}>ONE YEAR LATER</div>
        <div style={{ fontSize: 124, fontWeight: 750, letterSpacing: -8 }}>
          2027
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          left: 110,
          top: 270,
          opacity: interpolate(f, [0, 14], [0, 1], clamp),
          translate: `0 ${interpolate(f, [0, 20], [35, 0], clamp)}px`,
        }}
      >
        <div
          style={{
            color: '#3AD6C5',
            fontSize: 28,
            letterSpacing: 7,
            marginBottom: 38,
          }}
        >
          EVEN THIS VIDEO.
        </div>
        <div
          style={{
            fontSize: 146,
            lineHeight: 0.98,
            fontWeight: 750,
            letterSpacing: -8,
          }}
        >
          Already
          <br />
          <span style={{ color: '#FFB454' }}>outdated?</span>
        </div>
        <div style={{ marginTop: 48, fontSize: 34, color: '#ADBBB9' }}>
          What changes. What stays useful.
        </div>
      </div>
    </AbsoluteFill>
  );
};
