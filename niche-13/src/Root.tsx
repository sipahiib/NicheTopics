import {Composition, Still} from "remotion";
import {StudentAiToolsVideo, Thumbnail} from "./Video";

export const RemotionRoot: React.FC = () => <>
  <Composition id="StudentAiTools" component={StudentAiToolsVideo} durationInFrames={5400} fps={30} width={1920} height={1080} />
  <Still id="StudentAiToolsThumbnail" component={Thumbnail} width={1280} height={720} />
</>;
