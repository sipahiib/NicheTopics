export type SceneContent = {
  id: string;
  eyebrow: string;
  headline: string;
  accent: string;
  voiceover: string;
};

export type Timing = {
  id: string;
  startMs: number;
  durationMs: number;
};

export type VideoProps = {
  channelName: string;
};
