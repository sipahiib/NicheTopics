import React from 'react';
import { useCurrentFrame } from 'remotion';
import {
  Shell,
  Title,
  Phone,
  Headline,
  Passport,
  C,
  progress,
} from './Visuals';
export const GoogleScene = () => {
  const f = useCurrentFrame();
  return (
    <Shell
      kicker="EXAMPLE TWO / EVERYDAY MEMORY"
      source="Source: Google Android Drop · 1 September 2026 · Illustrative interface"
    >
      <Title sub="Gemini + Find Hub · announced September 2026">
        Where did
        <br />I put it?
      </Title>
      <Phone>
        <div style={{ fontSize: 24, color: '#45877E', letterSpacing: 3 }}>
          REMEMBERED ITEMS
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 35,
            scale: 0.8,
          }}
        >
          <Passport />
        </div>
        <div
          style={{
            padding: 22,
            borderRadius: 18,
            background: '#DDE9E3',
            marginTop: 10,
            opacity: progress(f, 65, 100),
          }}
        >
          <Headline text="Passport" />
          <div style={{ fontSize: 28, marginTop: 16 }}>Bedroom drawer</div>
        </div>
      </Phone>
    </Shell>
  );
};
export const LimitsScene = () => {
  const f = useCurrentFrame();
  return (
    <Shell
      kicker="READ THE SMALL PRINT"
      light
      source="Source: Google Android Drop · Android 16+ · Supported countries"
    >
      <Title sub="Check your device and your region.">
        Announced.
        <br />
        Not everywhere.
      </Title>
      <Phone>
        <Headline text="Is it available?" />
        {['Android 16+', 'Supported country', 'Rollout status'].map((s, i) => (
          <div
            key={s}
            style={{
              padding: '28px 0',
              borderBottom: '1px solid #BAC7C1',
              fontSize: 29,
              opacity: progress(f, 25 + i * 35, 45 + i * 35),
            }}
          >
            <span style={{ color: '#45877E', marginRight: 15 }}>✓</span>
            {s}
          </div>
        ))}
        <div
          style={{
            marginTop: 35,
            fontSize: 25,
            lineHeight: 1.4,
            color: '#61756E',
          }}
        >
          An announcement is a starting point. Check the current details.
        </div>
      </Phone>
    </Shell>
  );
};
