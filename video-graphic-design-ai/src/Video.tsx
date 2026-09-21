import {Audio} from '@remotion/media';
import {AbsoluteFill, Sequence, staticFile, useVideoConfig} from 'remotion';
import scenesJson from './content.json';
import timingJson from '../public/timing.json';
import type {SceneContent, Timing} from './types';
import {SceneFrame} from './components/SceneFrame';
import {CaptionLayer} from './components/CaptionLayer';

const scenes = scenesJson as SceneContent[];
const timing = timingJson as Timing[];

export const GraphicDesignVideo: React.FC = () => {
  const {fps} = useVideoConfig();
  return (
    <AbsoluteFill style={{backgroundColor: '#08090d'}}>
      {scenes.map((scene, index) => {
        const t = timing.find((item) => item.id === scene.id);
        if (!t) return null;
        return (
          <Sequence
            key={scene.id}
            name={scene.label}
            from={Math.round((t.startMs / 1000) * fps)}
            durationInFrames={Math.ceil((t.durationMs / 1000) * fps)}
          >
            <SceneFrame scene={scene} index={index} />
            <Audio src={staticFile(`voiceover/${scene.id}.mp3`)} volume={1} />
          </Sequence>
        );
      })}
      <Audio src={staticFile('score.mp3')} volume={0.42} />
      <CaptionLayer />
      <div className="brand-bug"><span>NH</span> NEW HORIZONS <b>21</b></div>
      <div className="progress" />
    </AbsoluteFill>
  );
};
