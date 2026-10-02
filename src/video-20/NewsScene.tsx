import React from 'react';
import { useCurrentFrame } from 'remotion';
import { Shell, Title, Bubbles, Paper, C, progress } from './Visuals';
export const NewsScene = () => {
  const f = useCurrentFrame();
  return (
    <Shell kicker="THE RELEASE CYCLE">
      <Bubbles />
      <Title
        sub={
          f > 150
            ? 'A name. A capability. A useful improvement.'
            : 'Every update wants your attention.'
        }
      >
        {f > 150 ? (
          <>
            Three different
            <br />
            <span style={{ color: C.amber }}>things.</span>
          </>
        ) : (
          <>
            New does not
            <br />
            always mean
            <br />
            <span style={{ color: C.teal }}>useful.</span>
          </>
        )}
      </Title>
    </Shell>
  );
};
export const NoiseScene = () => {
  const f = useCurrentFrame();
  return (
    <Shell kicker="PROTECT YOUR ATTENTION">
      <Bubbles quiet={f > 90} />
      <Title sub="Keep three habits. Let the rest pass.">
        Filter the noise.
      </Title>
      <div
        style={{
          position: 'absolute',
          left: 1170,
          top: 355,
          width: 450,
          height: 260,
          border: '3px solid #3AD6C5',
          borderRadius: 28,
          background: C.ink,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 110,
          fontWeight: 700,
          scale: 1 + 0.03 * Math.sin(f / 40),
        }}
      >
        3 habits
      </div>
    </Shell>
  );
};
