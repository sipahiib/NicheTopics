import React from 'react';
import { useCurrentFrame } from 'remotion';
import { Shell, Title, Paper, C, progress } from './Visuals';
export const SonnetScene = () => {
  const f = useCurrentFrame();
  return (
    <Shell
      kicker="EXAMPLE ONE / THE NAMES CHANGE"
      light
      source="Source: Anthropic · 29 September 2025"
    >
      <Title sub="Our historical starting point.">
        Just over
        <br />a year ago.
      </Title>
      <Paper rotate={-4}>
        <div style={{ fontSize: 28, letterSpacing: 4 }}>ANTHROPIC</div>
        <div style={{ fontSize: 62, fontWeight: 650, marginTop: 70 }}>
          Claude Sonnet
        </div>
        <div style={{ fontSize: 180, fontWeight: 750, letterSpacing: -10 }}>
          4.5
        </div>
        <div style={{ fontSize: 32, color: '#45877E' }}>29 SEPTEMBER 2025</div>
      </Paper>
      <div
        style={{
          position: 'absolute',
          left: 110,
          top: 760,
          width: 780 * progress(f, 30, 180),
          height: 5,
          background: '#45877E',
        }}
      />
    </Shell>
  );
};
export const FableScene = () => {
  const f = useCurrentFrame();
  return (
    <Shell
      kicker="EXAMPLE ONE / A NEW MENU"
      source="Source: Anthropic · Fable announcement listing · 1 September 2026"
    >
      <Title sub="A recommendation can need another look.">
        Less than
        <br />a year later.
      </Title>
      <Paper rotate={4}>
        <div style={{ fontSize: 28, letterSpacing: 4 }}>ANTHROPIC</div>
        <div style={{ fontSize: 65, fontWeight: 650, marginTop: 65 }}>
          Claude Fable
        </div>
        <div style={{ fontSize: 180, fontWeight: 750, letterSpacing: -10 }}>
          5.1
        </div>
        <div style={{ fontSize: 32, color: '#45877E' }}>01 SEPTEMBER 2026</div>
      </Paper>
    </Shell>
  );
};
