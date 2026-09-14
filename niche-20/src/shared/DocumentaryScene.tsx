import {Video} from "@remotion/media";
import {AbsoluteFill, Easing, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig} from "remotion";

type Props = {
  footage: string;
  eyebrow: string;
  title: string;
  metric?: string;
  metricLabel?: string;
  source?: string;
  accent?: string;
  position?: string;
};

export const DocumentaryScene: React.FC<Props> = ({footage, eyebrow, title, metric, metricLabel, source, accent = "#59d9ff", position = "center"}) => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames} = useVideoConfig();
  const opacity = interpolate(frame, [0, 0.8 * fps, durationInFrames - 0.8 * fps, durationInFrames], [0, 1, 1, 0], {extrapolateLeft: "clamp", extrapolateRight: "clamp"});

  return (
    <AbsoluteFill style={{backgroundColor: "#020711", opacity}}>
      <Video src={staticFile(`footage/${footage}`)} muted loop objectFit="cover" style={{width: "100%", height: "100%", objectPosition: position, scale: interpolate(frame, [0, durationInFrames], [1.04, 1.12], {extrapolateRight: "clamp", easing: Easing.linear})}} />
      <AbsoluteFill style={{background: "linear-gradient(90deg, rgba(2,7,17,.94) 0%, rgba(2,7,17,.72) 42%, rgba(2,7,17,.16) 72%, rgba(2,7,17,.48) 100%)"}} />
      <AbsoluteFill style={{padding: "90px 110px", justifyContent: "center"}}>
        <div style={{width: 1040, translate: `${interpolate(frame, [0, 1.2 * fps], [-45, 0], {extrapolateRight: "clamp", easing: Easing.bezier(.16, 1, .3, 1)})}px 0`, opacity: interpolate(frame, [0.2 * fps, 1.1 * fps], [0, 1], {extrapolateLeft: "clamp", extrapolateRight: "clamp"})}}>
          <div style={{color: accent, fontFamily: "Space Grotesk", fontSize: 30, fontWeight: 700, letterSpacing: 8, marginBottom: 26}}>{eyebrow}</div>
          <div style={{color: "white", fontFamily: "Space Grotesk", fontSize: 102, fontWeight: 700, lineHeight: .98, letterSpacing: -4, textShadow: "0 8px 32px #000"}}>{title}</div>
          {metric ? <div style={{display: "flex", alignItems: "baseline", gap: 26, marginTop: 42}}><span style={{color: accent, fontSize: 92, fontWeight: 800}}>{metric}</span><span style={{color: "#e8edf5", fontSize: 30, fontWeight: 600, maxWidth: 430}}>{metricLabel}</span></div> : null}
        </div>
      </AbsoluteFill>
      <div style={{position: "absolute", top: 50, right: 70, display: "flex", alignItems: "center", gap: 18, color: "white", fontSize: 27, fontWeight: 700}}>
        <Img src={staticFile("newhorizons-logo.png")} style={{width: 68, height: 68, borderRadius: "50%"}} />
        @newhorizons_21
      </div>
      {source ? <div style={{position: "absolute", left: 110, bottom: 52, color: "rgba(255,255,255,.7)", fontSize: 22}}>{source}</div> : null}
      <div style={{position: "absolute", left: 0, bottom: 0, width: `${interpolate(frame, [0, durationInFrames], [0, 100], {extrapolateRight: "clamp"})}%`, height: 6, background: accent}} />
    </AbsoluteFill>
  );
};
