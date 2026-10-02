import React from 'react';
import {
  AbsoluteFill,
  Composition,
  Folder,
  Sequence,
  Still,
  registerRoot,
  useCurrentFrame,
} from 'remotion';
import { Calendar } from './Calendar';
import { DateScene } from './DateScene';
import { NewsScene } from './NewsScene';
import { SonnetScene } from './ModelScene';
import { FableScene } from './ModelScene';
import { ChoiceScene } from './ChoiceScene';
import { GoogleScene } from './PhoneScene';
import { DrawerScene } from './DrawerScene';
import { LimitsScene } from './PhoneScene';
import { HumanScene } from './FootageScenes';
import { NoiseScene } from './NewsScene';
import { SourceScene } from './SourceScene';
import { TestScene } from './TestScene';
import { WeeklyScene } from './WeeklyScene';
import { FutureScene } from './FootageScenes';
import { Closing } from './Closing';
const FullVideo = () => (
  <>
    <Sequence name="opening" from={0} durationInFrames={313}>
      <Calendar />
    </Sequence>
    <Sequence name="timestamp" from={313} durationInFrames={290}>
      <DateScene />
    </Sequence>
    <Sequence name="churn" from={603} durationInFrames={277}>
      <NewsScene />
    </Sequence>
    <Sequence name="sonnet" from={880} durationInFrames={325}>
      <SonnetScene />
    </Sequence>
    <Sequence name="fable" from={1205} durationInFrames={314}>
      <FableScene />
    </Sequence>
    <Sequence name="meaning" from={1519} durationInFrames={267}>
      <ChoiceScene />
    </Sequence>
    <Sequence name="google" from={1786} durationInFrames={319}>
      <GoogleScene />
    </Sequence>
    <Sequence name="passport" from={2105} durationInFrames={337}>
      <DrawerScene />
    </Sequence>
    <Sequence name="limits" from={2442} durationInFrames={333}>
      <LimitsScene />
    </Sequence>
    <Sequence name="human" from={2775} durationInFrames={300}>
      <HumanScene />
    </Sequence>
    <Sequence name="noise" from={3075} durationInFrames={303}>
      <NoiseScene />
    </Sequence>
    <Sequence name="date" from={3378} durationInFrames={303}>
      <SourceScene />
    </Sequence>
    <Sequence name="test" from={3681} durationInFrames={402}>
      <TestScene />
    </Sequence>
    <Sequence name="weekly" from={4083} durationInFrames={346}>
      <WeeklyScene />
    </Sequence>
    <Sequence name="future" from={4429} durationInFrames={333}>
      <FutureScene />
    </Sequence>
    <Sequence name="close" from={4762} durationInFrames={348}>
      <Closing />
    </Sequence>
  </>
);
const Thumbnail = () => (
  <AbsoluteFill
    style={{
      background: '#101820',
      fontFamily: 'Helvetica Neue, Arial',
      color: '#F3EFE6',
    }}
  >
    <div
      style={{
        position: 'absolute',
        left: 110,
        top: 260,
        fontSize: 155,
        lineHeight: 1,
        fontWeight: 750,
        letterSpacing: -8,
      }}
    >
      ALREADY
      <br />
      <span style={{ color: '#FFB454' }}>OUTDATED?</span>
    </div>
    <div
      style={{
        position: 'absolute',
        left: 1230,
        top: 230,
        width: 510,
        height: 590,
        background: '#F3EFE6',
        color: '#101820',
        borderRadius: 28,
        rotate: '8deg',
        boxShadow: '25px 35px 0 #3AD6C5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ fontSize: 50 }}>2026</div>
      <div style={{ fontSize: 90, color: '#45877E' }}>↓</div>
      <div style={{ fontSize: 120, fontWeight: 750 }}>2027</div>
    </div>
  </AbsoluteFill>
);
const Root = () => (
  <>
    <Composition
      id="Video20"
      component={FullVideo}
      width={1920}
      height={1080}
      fps={30}
      durationInFrames={5110}
    />
    <Still id="Thumbnail20" component={Thumbnail} width={1920} height={1080} />
    <Folder name="Scenes">
      <Composition
        id="Calendar"
        component={Calendar}
        width={1920}
        height={1080}
        fps={30}
        durationInFrames={313}
      />
      <Composition
        id="DateScene"
        component={DateScene}
        width={1920}
        height={1080}
        fps={30}
        durationInFrames={290}
      />
      <Composition
        id="NewsScene"
        component={NewsScene}
        width={1920}
        height={1080}
        fps={30}
        durationInFrames={277}
      />
      <Composition
        id="SonnetScene"
        component={SonnetScene}
        width={1920}
        height={1080}
        fps={30}
        durationInFrames={325}
      />
      <Composition
        id="FableScene"
        component={FableScene}
        width={1920}
        height={1080}
        fps={30}
        durationInFrames={314}
      />
      <Composition
        id="ChoiceScene"
        component={ChoiceScene}
        width={1920}
        height={1080}
        fps={30}
        durationInFrames={267}
      />
      <Composition
        id="GoogleScene"
        component={GoogleScene}
        width={1920}
        height={1080}
        fps={30}
        durationInFrames={319}
      />
      <Composition
        id="DrawerScene"
        component={DrawerScene}
        width={1920}
        height={1080}
        fps={30}
        durationInFrames={337}
      />
      <Composition
        id="LimitsScene"
        component={LimitsScene}
        width={1920}
        height={1080}
        fps={30}
        durationInFrames={333}
      />
      <Composition
        id="HumanScene"
        component={HumanScene}
        width={1920}
        height={1080}
        fps={30}
        durationInFrames={300}
      />
      <Composition
        id="NoiseScene"
        component={NoiseScene}
        width={1920}
        height={1080}
        fps={30}
        durationInFrames={303}
      />
      <Composition
        id="SourceScene"
        component={SourceScene}
        width={1920}
        height={1080}
        fps={30}
        durationInFrames={303}
      />
      <Composition
        id="TestScene"
        component={TestScene}
        width={1920}
        height={1080}
        fps={30}
        durationInFrames={402}
      />
      <Composition
        id="WeeklyScene"
        component={WeeklyScene}
        width={1920}
        height={1080}
        fps={30}
        durationInFrames={346}
      />
      <Composition
        id="FutureScene"
        component={FutureScene}
        width={1920}
        height={1080}
        fps={30}
        durationInFrames={333}
      />
      <Composition
        id="Closing"
        component={Closing}
        width={1920}
        height={1080}
        fps={30}
        durationInFrames={348}
      />
    </Folder>
  </>
);
registerRoot(Root);
