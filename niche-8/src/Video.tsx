import {Audio} from "@remotion/media";
import {AbsoluteFill, Sequence, staticFile, useVideoConfig} from "remotion";
import scenesJson from "./content.json";
import timingJson from "../public/timing.json";
import {Scene, type SceneData} from "./Scene";

type Timing = {id: string; startMs: number; durationMs: number};
const scenes = scenesJson as SceneData[];
const timing = timingJson as Timing[];

export const AiMistakesVideo: React.FC = () => {
  const {fps} = useVideoConfig();
  return <AbsoluteFill style={{backgroundColor: "#101526"}}>
    {timing.map((part, index) => <Sequence key={part.id} from={Math.round(part.startMs / 1000 * fps)} durationInFrames={Math.ceil(part.durationMs / 1000 * fps)} name={part.id}>
      <Scene data={scenes[index]} />
      <Audio src={staticFile(`audio/${part.id}.mp3`)} />
    </Sequence>)}
  </AbsoluteFill>;
};
