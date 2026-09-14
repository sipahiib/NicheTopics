import {Audio} from "@remotion/media";
import {AbsoluteFill, Sequence, staticFile, useVideoConfig} from "remotion";
import timingJson from "../public/timing.json";
import type {Timing} from "./types";
import {Opening} from "./scenes/Opening";
import {Morning} from "./scenes/Morning";
import {Commute} from "./scenes/Commute";
import {Work} from "./scenes/Work";
import {Robots} from "./scenes/Robots";
import {Energy} from "./scenes/Energy";
import {Choice} from "./scenes/Choice";

const timing = timingJson as Timing[];
const sceneComponents = [Opening, Morning, Commute, Work, Robots, Energy, Choice];

export const LifeIn2031: React.FC = () => {
  const {fps} = useVideoConfig();
  return <AbsoluteFill style={{background: "#020711"}}>
    {timing.map((item, index) => {
      const Scene = sceneComponents[index];
      const from = Math.round(item.startMs / 1000 * fps);
      const durationInFrames = Math.ceil(item.durationMs / 1000 * fps);
      return <Sequence key={item.id} from={from} durationInFrames={durationInFrames} name={item.id}>
        <Scene />
        <Audio src={staticFile(`audio/${item.id}.mp3`)} volume={1} />
      </Sequence>;
    })}
    <Audio src={staticFile("audio/score.mp3")} volume={0.12} />
  </AbsoluteFill>;
};
