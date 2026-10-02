import React from 'react';
import { useCurrentFrame } from 'remotion';
import { Shell, Title, Passport, C, progress } from './Visuals';
export const DrawerScene = () => {
  const f = useCurrentFrame();
  const open = progress(f, 35, 85);
  const recall = f > 160;
  return (
    <Shell
      kicker="FROM A MEMORY TO A LOCATION"
      light
      source="Illustrative animation · Not a product recording"
    >
      <Title
        sub={recall ? 'Bedroom drawer.' : 'Remember where I put my passport.'}
      >
        {recall ? (
          <>
            Ask later.
            <br />
            Find it.
          </>
        ) : (
          <>Tell it once.</>
        )}
      </Title>
      <div
        style={{
          position: 'absolute',
          left: 1040,
          top: 340,
          width: 680,
          height: 430,
          background: '#B9A68B',
          borderRadius: 15,
          boxShadow: '22px 35px 40px #0002',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 30,
            right: 30,
            top: 30,
            height: 230,
            background: '#776750',
            borderRadius: 10,
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 240,
            top: 15 + open * 45,
            rotate: '16deg',
            scale: 0.72,
          }}
        >
          <Passport />
        </div>
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 60 + open * 180,
            width: 680,
            height: 235,
            background: '#D5C2A2',
            borderRadius: 12,
            borderTop: '8px solid #E9D9BF',
            boxShadow: '0 25px 30px #0002',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: 250,
              top: 70,
              width: 180,
              height: 18,
              background: '#73634F',
              borderRadius: 10,
            }}
          />
        </div>
        <div
          style={{
            position: 'absolute',
            left: 45,
            top: 430,
            width: 30,
            height: 70,
            background: '#776750',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: 45,
            top: 430,
            width: 30,
            height: 70,
            background: '#776750',
          }}
        />
      </div>
      {recall && (
        <div
          style={{
            position: 'absolute',
            left: 1110,
            top: 230,
            padding: '20px 30px',
            borderRadius: 30,
            background: C.teal,
            fontSize: 32,
            scale: 1 + 0.02 * Math.sin(f / 12),
          }}
        >
          ✓ Location remembered
        </div>
      )}
    </Shell>
  );
};
