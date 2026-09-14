import {Img, staticFile, useVideoConfig} from "remotion";

export const BrandBug: React.FC<{channelName: string}> = ({channelName}) => {
  const {width, height} = useVideoConfig();
  const vertical = height > width;

  return (
    <div style={{position: "absolute", top: vertical ? 72 : 42, right: vertical ? 52 : 64, display: "flex", alignItems: "center", gap: 16, opacity: 0.92}}>
      <Img src={staticFile("assets/newhorizons-logo.png")} style={{width: vertical ? 72 : 62, height: vertical ? 72 : 62, borderRadius: "50%", boxShadow: "0 0 28px rgba(42,149,255,0.5)"}} />
      <span style={{fontFamily: "Inter, sans-serif", fontSize: vertical ? 27 : 24, fontWeight: 700, color: "#edf7ff", letterSpacing: 0.5}}>@{channelName}</span>
    </div>
  );
};
