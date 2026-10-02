import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};
export const Calendar = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill
      style={{
        background: '#F3EFE6',
        color: '#101820',
        fontFamily: 'Helvetica Neue, Arial',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: 110,
          top: 94,
          fontSize: 28,
          letterSpacing: 7,
        }}
      >
        THE SPEED OF CHANGE
      </div>
      <div
        style={{
          position: 'absolute',
          left: 110,
          top: 305,
          fontSize: 112,
          fontWeight: 750,
          letterSpacing: -6,
          lineHeight: 1.02,
          opacity: interpolate(f, [0, 15], [0, 1], clamp),
          translate: `0 ${interpolate(f, [0, 25], [45, 0], clamp)}px`,
        }}
      >
        One year.
        <br />
        <span style={{ color: '#45877E' }}>
          Everything
          <br />
          changes?
        </span>
      </div>
      <div
        style={{
          position: 'absolute',
          left: 114,
          bottom: 100,
          fontSize: 29,
          color: '#616966',
        }}
      >
        A thought experiment about technology.
      </div>
      <div
        style={{
          position: 'absolute',
          left: 1100,
          top: 240,
          width: 570,
          height: 590,
          perspective: 1500,
          rotate: `${-8 + f * 0.055}deg`,
          scale: 1 + f * 0.001,
        }}
      >
        {[4, 3, 2, 1, 0].map((i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              inset: 0,
              translate: `${i * 6}px ${i * 8}px`,
              background: '#E0DCD4',
              borderRadius: 26,
              border: '1px solid #C8C4BB',
              boxShadow: i === 4 ? '30px 45px 80px #10182025' : undefined,
            }}
          />
        ))}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: '#FFFDF8',
            borderRadius: 26,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              background: '#101820',
              color: '#F3EFE6',
              padding: '37px 45px',
              fontSize: 34,
              letterSpacing: 9,
            }}
          >
            OCTOBER
          </div>
          <div
            style={{
              fontSize: 280,
              fontWeight: 700,
              textAlign: 'center',
              lineHeight: 1.25,
              letterSpacing: -20,
            }}
          >
            02
          </div>
          <div style={{ textAlign: 'center', fontSize: 43, letterSpacing: 13 }}>
            2026
          </div>
        </div>
        {[0, 1, 2, 3, 4].map((i) => {
          const p = interpolate(f, [30 + i * 10, 60 + i * 10], [0, 1], clamp);
          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                inset: 0,
                background: '#FFFDF8',
                borderRadius: 26,
                overflow: 'hidden',
                transformOrigin: '50% 0',
                transform: `translate(${p * 280}px, ${-p * 800}px) rotate(${p * 35}deg) rotateX(${-p * 70}deg)`,
                opacity: f < 30 + i * 10 ? 0 : 1 - p,
                boxShadow: '0 8px 20px #0002',
              }}
            >
              <div style={{ height: 110, background: '#3AD6C5' }} />
              <div
                style={{
                  fontSize: 240,
                  fontWeight: 750,
                  textAlign: 'center',
                  paddingTop: 25,
                }}
              >
                {['03', '17', '28', '09', '31'][i]}
              </div>
            </div>
          );
        })}
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: 9,
          width: `${(f / 105) * 100}%`,
          background: '#3AD6C5',
        }}
      />
    </AbsoluteFill>
  );
};
