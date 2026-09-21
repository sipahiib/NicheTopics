export type SceneContent = {
  id: string;
  label: string;
  headline: string;
  subhead: string;
  voiceover: string;
  visual: 'hook' | 'speed' | 'risk' | 'data' | 'human' | 'future' | 'outro';
};

export type Timing = {id: string; startMs: number; durationMs: number};
