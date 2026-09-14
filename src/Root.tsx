import "./index.css";
import {Composition, Folder, Still} from "remotion";
import duration from "../public/duration.json";
import {AgentRealityVideo} from "./Video";
import {Thumbnail} from "./Thumbnail";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Folder name="AI-Agent-Reality">
        <Composition
          id="YouTube-Master-16x9"
          component={AgentRealityVideo}
          durationInFrames={Math.ceil((duration.durationMs / 1000) * 30)}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{channelName: "newhorizons_21"}}
        />
        <Still
          id="YouTube-Thumbnail"
          component={Thumbnail}
          width={1280}
          height={720}
          defaultProps={{channelName: "newhorizons_21"}}
        />
      </Folder>
    </>
  );
};
