import React from 'react';
import { useCurrentFrame } from 'remotion';
import { Shell, C, progress } from './Visuals';
export const TestScene = () => {
  const f = useCurrentFrame();
  const review = f > 165;
  return (
    <Shell
      kicker="HABIT TWO / REPEAT A REAL TASK"
      source="Illustrative comparison · No benchmark or measured result implied"
    >
      <div
        style={{
          position: 'absolute',
          left: 110,
          top: 180,
          fontSize: 85,
          fontWeight: 750,
          letterSpacing: -4,
        }}
      >
        {review ? 'Which result needs less checking?' : 'Same task. Two tools.'}
      </div>
      {['TOOL A', 'TOOL B'].map((s, i) => (
        <div
          key={s}
          style={{
            position: 'absolute',
            left: 110 + i * 870,
            top: 345,
            width: 815,
            height: 520,
            borderRadius: 25,
            padding: 40,
            background: i ? '#F3EFE6' : '#24343E',
            color: i ? C.ink : C.paper,
            boxShadow: '0 30px 50px #0003',
          }}
        >
          <div
            style={{
              fontSize: 25,
              letterSpacing: 5,
              color: i ? '#45877E' : C.teal,
            }}
          >
            {s}
          </div>
          <div style={{ fontSize: 34, marginTop: 24 }}>Plan a useful week.</div>
          {[0.9, 0.72, 0.83, 0.6].map((w, j) => (
            <div
              key={j}
              style={{
                marginTop: 28,
                height: 13,
                width: `${w * progress(f, 30 + j * 15 + i * 12, 65 + j * 15 + i * 12) * 100}%`,
                background: i ? '#B0C5B9' : '#6A828A',
                borderRadius: 6,
              }}
            />
          ))}
          <div
            style={{
              marginTop: 45,
              fontSize: 29,
              color: i ? '#45877E' : C.teal,
              opacity: progress(f, 150, 175),
            }}
          >
            {i ? 'Check the evidence' : 'Check the assumptions'}
          </div>
        </div>
      ))}
    </Shell>
  );
};
