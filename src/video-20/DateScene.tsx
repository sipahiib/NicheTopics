import React from 'react';
import { useCurrentFrame } from 'remotion';
import { Shell, Title, Paper, C, progress } from './Visuals';
export const DateScene = () => {
  const f = useCurrentFrame();
  const later = f > 155;
  return (
    <Shell kicker="A SNAPSHOT, NOT A PREDICTION" light>
      <Title sub="Save it. Come back in one year.">
        {later ? (
          <>
            What really
            <br />
            changed?
          </>
        ) : (
          <>
            Today has
            <br />a timestamp.
          </>
        )}
      </Title>
      <Paper>
        <div style={{ fontSize: 30, letterSpacing: 6, color: '#45877E' }}>
          OCTOBER
        </div>
        <div
          style={{
            fontSize: 220,
            lineHeight: 1.3,
            fontWeight: 750,
            letterSpacing: -12,
          }}
        >
          02
        </div>
        <div style={{ fontSize: 64, letterSpacing: 8 }}>
          {later ? '2027' : '2026'}
        </div>
        <div
          style={{
            marginTop: 30,
            width: `${progress(f, 30, 140) * 100}%`,
            height: 7,
            background: C.teal,
          }}
        />
      </Paper>
    </Shell>
  );
};
