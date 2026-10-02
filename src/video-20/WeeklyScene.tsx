import React from 'react';
import { useCurrentFrame } from 'remotion';
import { Shell, Title, Paper, C, progress } from './Visuals';
export const WeeklyScene = () => {
  const f = useCurrentFrame();
  return (
    <Shell kicker="HABIT THREE / SET A RHYTHM" light>
      <Title sub="Keep only the changes that solve your problems.">
        Review weekly.
        <br />
        Live daily.
      </Title>
      <Paper width={610} x={1040} rotate={3}>
        <div style={{ fontSize: 32, letterSpacing: 5, marginBottom: 35 }}>
          YOUR WEEK
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7,1fr)',
            gap: 10,
          }}
        >
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((v, i) => (
            <div
              key={i}
              style={{ fontSize: 21, textAlign: 'center', color: '#45877E' }}
            >
              {v}
            </div>
          ))}
          {Array.from({ length: 28 }, (_, i) => (
            <div
              key={i}
              style={{
                height: 60,
                borderRadius: 10,
                background: i === 4 && f > 60 ? C.teal : '#E6E8E0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 25,
              }}
            >
              {i + 1}
            </div>
          ))}
        </div>
        <div
          style={{ marginTop: 32, fontSize: 28, opacity: progress(f, 60, 90) }}
        >
          Friday: What actually matters?
        </div>
      </Paper>
    </Shell>
  );
};
