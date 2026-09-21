import './style.css';
import {Composition, Still} from 'remotion';
import duration from '../public/duration.json';
import {GraphicDesignVideo} from './Video';
import {Poster} from './Poster';

export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="Graphic-Design-AI"
      component={GraphicDesignVideo}
      durationInFrames={Math.ceil((duration.durationMs / 1000) * 30)}
      fps={30}
      width={1920}
      height={1080}
    />
    <Still id="Graphic-Design-AI-Poster" component={Poster} width={1280} height={720} />
  </>
);
