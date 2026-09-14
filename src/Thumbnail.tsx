import {AbsoluteFill, Img, staticFile} from "remotion";
import type {VideoProps} from "./types";

export const Thumbnail: React.FC<VideoProps> = ({channelName}) => {
  return (
    <AbsoluteFill style={{background: "#02050a", overflow: "hidden"}}>
      <Img src={staticFile("assets/ai-agents-cinematic.png")} style={{position: "absolute", width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.58) contrast(1.22) saturate(1.15)"}} />
      <AbsoluteFill style={{background: "linear-gradient(90deg, rgba(0,0,0,.96), rgba(0,4,12,.60) 54%, rgba(0,0,0,.12))"}} />
      <div style={{position: "absolute", left: 62, top: 78, width: 710, fontFamily: "Space Grotesk, Inter, sans-serif", fontWeight: 700, color: "white", lineHeight: .91, letterSpacing: -6}}>
        <div style={{fontSize: 104}}>DANGER</div>
        <div style={{fontSize: 89, color: "#58bdff"}}>OR OPPORTUNITY?</div>
      </div>
      <div style={{position: "absolute", left: 68, bottom: 78, padding: "14px 22px", borderLeft: "6px solid #ff9d3d", background: "rgba(0,0,0,.68)", color: "#fff", fontFamily: "Inter, sans-serif", fontSize: 31, fontWeight: 900}}>THE AI AGENT REALITY</div>
      <Img src={staticFile("assets/newhorizons-logo.png")} style={{position: "absolute", right: 46, top: 42, width: 118, height: 118, borderRadius: "50%", boxShadow: "0 0 40px rgba(42,149,255,.75)"}} />
      <div style={{position: "absolute", right: 48, bottom: 38, fontFamily: "Inter, sans-serif", fontSize: 22, fontWeight: 800, color: "#dcefff"}}>@{channelName}</div>
    </AbsoluteFill>
  );
};
