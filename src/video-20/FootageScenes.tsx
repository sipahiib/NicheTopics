import React from 'react';
import {
  AbsoluteFill,
  staticFile,
  useCurrentFrame,
  interpolate,
} from 'remotion';
import { Video } from '@remotion/media';
import { C, clamp, progress } from './Visuals';
export const HumanScene = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill
      style={{ background: C.ink, fontFamily: 'Helvetica Neue, Arial' }}
    >
      <Video
        src={staticFile('footage/office-team.mp4')}
        muted
        playbackRate={0.9}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          scale: 1.05 + f * 0.0002,
        }}
      />
      <AbsoluteFill
        style={{
          background:
            'linear-gradient(90deg,rgba(16,24,32,.95),rgba(16,24,32,.25) 75%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 110,
          top: 150,
          color: C.teal,
          fontSize: 28,
          letterSpacing: 5,
        }}
      >
        THE HUMAN TEST
      </div>
      <div
        style={{
          position: 'absolute',
          left: 110,
          top: 330,
          color: C.paper,
          fontSize: 115,
          lineHeight: 1.04,
          fontWeight: 750,
          letterSpacing: -5,
        }}
      >
        Does it
        <br />
        actually help?
      </div>
      <div
        style={{
          position: 'absolute',
          left: 110,
          bottom: 80,
          color: C.paper,
          fontSize: 32,
        }}
      >
        A useful outcome matters more than a futuristic interface.
      </div>
    </AbsoluteFill>
  );
};
export const FutureScene = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill
      style={{ background: C.ink, fontFamily: 'Helvetica Neue, Arial' }}
    >
      <Video
        src={staticFile('footage/city-timelapse.mp4')}
        muted
        playbackRate={0.8}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          scale: 1.04 + f * 0.0001,
        }}
      />
      <AbsoluteFill
        style={{ background: 'linear-gradient(90deg,#101820EF,#10182077)' }}
      />
      <div
        style={{
          position: 'absolute',
          left: 110,
          top: 170,
          color: C.teal,
          fontSize: 28,
          letterSpacing: 5,
        }}
      >
        WHAT SHOULD LAST
      </div>
      <div
        style={{
          position: 'absolute',
          left: 110,
          top: 300,
          color: C.paper,
          fontSize: 95,
          fontWeight: 750,
          lineHeight: 1.25,
          letterSpacing: -4,
        }}
      >
        {['Check evidence.', 'Test usefulness.', 'Protect attention.'].map(
          (s, i) => (
            <div
              key={s}
              style={{
                opacity: progress(f, i * 50, i * 50 + 20),
                translate: `${30 * (1 - progress(f, i * 50, i * 50 + 20))}px 0`,
              }}
            >
              {s}
            </div>
          ),
        )}
      </div>
    </AbsoluteFill>
  );
};
