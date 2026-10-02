import React from 'react';
import { Composition, Sequence, registerRoot } from 'remotion';
import { Calendar } from './Calendar';
import { Screen } from './Screen';
import { Closing } from './Closing';
const Demo = () => (
  <>
    <Sequence name="Calendar" durationInFrames={105}>
      <Calendar />
    </Sequence>
    <Sequence name="Evolving screen" from={105} durationInFrames={90}>
      <Screen />
    </Sequence>
    <Sequence name="One year later" from={195} durationInFrames={105}>
      <Closing />
    </Sequence>
  </>
);
const Root = () => (
  <>
    <Composition
      id="Demo20"
      component={Demo}
      width={1920}
      height={1080}
      fps={30}
      durationInFrames={300}
    />
    <Composition
      id="Calendar"
      component={Calendar}
      width={1920}
      height={1080}
      fps={30}
      durationInFrames={105}
    />
    <Composition
      id="Screen"
      component={Screen}
      width={1920}
      height={1080}
      fps={30}
      durationInFrames={90}
    />
    <Composition
      id="Closing"
      component={Closing}
      width={1920}
      height={1080}
      fps={30}
      durationInFrames={105}
    />
  </>
);
registerRoot(Root);
