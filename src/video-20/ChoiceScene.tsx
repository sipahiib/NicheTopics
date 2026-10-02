import React from 'react';
import { useCurrentFrame } from 'remotion';
import { Shell, Title, C, progress } from './Visuals';
export const ChoiceScene = () => {
  const f = useCurrentFrame();
  return (
    <Shell kicker="NEW RELEASE ≠ PERSONAL UPGRADE" light>
      <Title sub="Choose for your task, not the label.">
        Your old tool
        <br />
        still works.
      </Title>
      <div style={{ position: 'absolute', left: 1050, top: 295, width: 640 }}>
        {['Familiar tool', 'Newest release', 'The right fit'].map((s, i) => (
          <div
            key={s}
            style={{
              padding: '30px 35px',
              marginBottom: 24,
              borderRadius: 20,
              fontSize: 37,
              background: i === 2 && f > 110 ? '#3AD6C5' : '#FFFDFA',
              boxShadow: '0 12px 22px #0001',
              translate: `${40 * (1 - progress(f, i * 18, i * 18 + 30))}px 0`,
              opacity: progress(f, i * 18, i * 18 + 30),
            }}
          >
            <span style={{ marginRight: 25, color: '#45877E' }}>
              {i === 2 && f > 110 ? '✓' : '○'}
            </span>
            {s}
          </div>
        ))}
      </div>
    </Shell>
  );
};
