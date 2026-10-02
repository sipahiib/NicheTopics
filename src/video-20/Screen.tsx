import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};
export const Screen = () => {
  const f = useCurrentFrame();
  const updated = f > 43;
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
          width: 1000,
          height: 1000,
          borderRadius: '50%',
          background: 'radial-gradient(circle,#3AD6C522,transparent 68%)',
          left: 490,
          top: -80,
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 110,
          top: 93,
          fontSize: 28,
          letterSpacing: 7,
          color: '#3AD6C5',
        }}
      >
        SAME SCREEN. NEW POSSIBILITIES.
      </div>
      <div
        style={{
          position: 'absolute',
          left: 290,
          top: 225,
          width: 1340,
          height: 650,
          background: '#25323A',
          border: '2px solid #718187',
          borderRadius: 29,
          padding: 18,
          boxShadow: '0 60px 80px #0006',
          transform: `perspective(1800px) rotateY(${interpolate(f, [0, 85], [-7, 3], clamp)}deg) scale(${interpolate(f, [0, 85], [0.91, 1], clamp)})`,
        }}
      >
        <div
          style={{
            height: '100%',
            borderRadius: 15,
            background: updated ? '#F3EFE6' : '#182229',
            overflow: 'hidden',
            color: updated ? '#101820' : '#F3EFE6',
          }}
        >
          <div
            style={{
              height: 70,
              borderBottom: '1px solid #73807944',
              display: 'flex',
              alignItems: 'center',
              padding: '0 30px',
              gap: 12,
            }}
          >
            {['#FFB454', '#718187', '#3AD6C5'].map((c) => (
              <span
                key={c}
                style={{
                  width: 13,
                  height: 13,
                  borderRadius: 10,
                  background: c,
                }}
              />
            ))}
            <span style={{ marginLeft: 30, fontSize: 21, letterSpacing: 3 }}>
              WORKSPACE
            </span>
            <span style={{ marginLeft: 'auto', fontSize: 21 }}>
              CONCEPT DEMONSTRATION
            </span>
          </div>
          <div style={{ padding: '48px 65px' }}>
            <div
              style={{
                fontSize: 24,
                letterSpacing: 4,
                color: updated ? '#45877E' : '#9BAAB0',
              }}
            >
              {updated ? 'A WORKFLOW IN MOTION' : 'A SIMPLE CONVERSATION'}
            </div>
            <div
              style={{
                fontSize: 64,
                fontWeight: 650,
                letterSpacing: -2,
                marginTop: 22,
              }}
            >
              {updated ? 'From question to action.' : 'Ask a question.'}
            </div>
            <div style={{ marginTop: 40, display: 'flex', gap: 26 }}>
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    height: 190,
                    flex: 1,
                    borderRadius: 16,
                    background: updated ? '#FFFFFF' : '#25333D',
                    padding: 26,
                    opacity: updated
                      ? interpolate(f, [44 + i * 7, 55 + i * 7], [0, 1], clamp)
                      : 0.8,
                    translate: `0 ${updated ? interpolate(f, [44 + i * 7, 55 + i * 7], [30, 0], clamp) : 0}px`,
                  }}
                >
                  <div
                    style={{ fontSize: 40, color: '#45877E', marginBottom: 25 }}
                  >
                    {updated ? ['↗', '◎', '✓'][i] : '—'}
                  </div>
                  <div style={{ fontSize: 27 }}>
                    {updated
                      ? ['Explore', 'Organise', 'Create'][i]
                      : ['Your prompt', 'A response', 'Next question'][i]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          left: 90 + f * 18,
          top: 180,
          width: 3,
          height: 760,
          background: '#3AD6C5',
          opacity: interpolate(f, [35, 44, 53], [0, 0.8, 0], clamp),
          boxShadow: '0 0 60px 25px #3AD6C544',
        }}
      />
    </AbsoluteFill>
  );
};
