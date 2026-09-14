import {Composition, Still} from "remotion";
import duration from "../public/duration.json";
import {LifeIn2031} from "./Video";
import {Thumbnail} from "./Thumbnail";

export const RemotionRoot: React.FC = () => <>
  <Composition id="LifeIn2031" component={LifeIn2031} durationInFrames={Math.ceil(duration.durationMs / 1000 * 30)} fps={30} width={1920} height={1080} />
  <Still id="LifeIn2031Thumbnail" component={Thumbnail} width={1280} height={720} />
</>;
