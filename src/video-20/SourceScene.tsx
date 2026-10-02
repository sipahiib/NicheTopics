import React from 'react';
import { useCurrentFrame } from 'remotion';
import { Shell, Title, Paper, C, progress } from './Visuals';
export const SourceScene = () => {
  const f = useCurrentFrame();
  return (
    <Shell kicker="HABIT ONE / TRACE THE CLAIM" light>
      <Title sub="Demo → announcement → available product">
        Check the date.
        <br />
        Find the source.
      </Title>
      <Paper rotate={-3} width={560} height={590}>
        <div style={{ fontSize: 29, color: '#45877E', letterSpacing: 3 }}>
          ORIGINAL ANNOUNCEMENT
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            marginTop: 45,
            lineHeight: 1.1,
          }}
        >
          A feature
          <br />
          worth checking.
        </div>
        <div
          style={{
            marginTop: 36,
            padding: 15,
            background: f > 60 ? '#3AD6C5' : 'transparent',
            fontSize: 33,
          }}
        >
          01 SEPTEMBER 2026
        </div>
        {[1, 0.9, 0.68].map((w, i) => (
          <div
            key={i}
            style={{
              height: 12,
              marginTop: 26,
              width: `${w * 100}%`,
              background: '#CED7D1',
            }}
          />
        ))}
      </Paper>
      <div
        style={{
          position: 'absolute',
          left: 1420 + 60 * Math.sin(f / 55),
          top: 550,
          width: 175,
          height: 175,
          border: '10px solid #45877E',
          borderRadius: '50%',
          background: '#3AD6C51A',
          boxShadow: '0 0 0 5px #FFFFFF66',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 135,
            top: 140,
            width: 95,
            height: 18,
            rotate: '45deg',
            background: '#45877E',
            borderRadius: 10,
          }}
        />
      </div>
    </Shell>
  );
};
