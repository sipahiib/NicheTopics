import {Audio} from "@remotion/media";
import {AbsoluteFill, Sequence, staticFile, useVideoConfig} from "remotion";
import contentJson from "./content.json";
import timingJson from "../public/timing.json";
import type {SceneContent, Timing, VideoProps} from "./types";
import {BrandBug} from "./shared/BrandBug";
import {SceneFrame} from "./shared/SceneFrame";

const scenes = contentJson as SceneContent[];
const timing = timingJson as Timing[];

export const AgentRealityVideo: React.FC<VideoProps> = ({channelName}) => {
  const {fps} = useVideoConfig();
  return (
    <AbsoluteFill style={{background: "#02050a"}}>
      {scenes.map((scene, index) => {
        const sceneTiming = timing.find((item) => item.id === scene.id);
        if (!sceneTiming) return null;
        const from = Math.round((sceneTiming.startMs / 1000) * fps);
        const durationInFrames = Math.ceil((sceneTiming.durationMs / 1000) * fps);
        return (
          <Sequence key={scene.id} name={scene.eyebrow} from={from} durationInFrames={durationInFrames}>
            <SceneFrame scene={scene} index={index} />
            <Audio src={staticFile(`voiceover/${scene.id}.mp3`)} volume={1} />
          </Sequence>
        );
      })}
      <Audio src={staticFile("score.mp3")} volume={0.34} />
      <BrandBug channelName={channelName} />
    </AbsoluteFill>
  );
};
