import {AbsoluteFill, Easing, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig} from "remotion";
import type {SceneContent} from "../types";

const Source: React.FC<{children: React.ReactNode}> = ({children}) => {
  const {width, height} = useVideoConfig();
  const vertical = height > width;
  return <div style={{position: "absolute", left: vertical ? 58 : 76, top: vertical ? 1480 : undefined, bottom: vertical ? undefined : 44, fontFamily: "Inter, sans-serif", fontSize: vertical ? 23 : 20, color: "rgba(220,235,250,0.72)", letterSpacing: 0.3}}>{children}</div>;
};

const DataVisual: React.FC<{id: string}> = ({id}) => {
  const frame = useCurrentFrame();
  const {width, height} = useVideoConfig();
  const vertical = height > width;
  const baseStyle: React.CSSProperties = {position: "absolute", fontFamily: "Inter, sans-serif", color: "white"};

  if (id === "trust") {
    return <div style={{...baseStyle, right: vertical ? 80 : 110, top: vertical ? 760 : 335, width: vertical ? 920 : 610}}>
      {[{label: "DISTRUST", value: 46, color: "#ff9d3d"}, {label: "TRUST", value: 33, color: "#42b6ff"}].map((bar, index) => <div key={bar.label} style={{marginBottom: 26}}>
        <div style={{display: "flex", justifyContent: "space-between", marginBottom: 9, fontSize: vertical ? 30 : 24, fontWeight: 800}}><span>{bar.label}</span><span>{bar.value}%</span></div>
        <div style={{height: vertical ? 34 : 26, borderRadius: 99, background: "rgba(255,255,255,0.12)", overflow: "hidden"}}><div style={{width: `${interpolate(frame, [10 + index * 8, 45 + index * 8], [0, bar.value * 2], {extrapolateLeft: "clamp", extrapolateRight: "clamp"})}%`, height: "100%", borderRadius: 99, background: bar.color, boxShadow: `0 0 28px ${bar.color}`}} /></div>
      </div>)}
    </div>;
  }

  if (id === "productivity") {
    return <div style={{...baseStyle, right: vertical ? 75 : 150, top: vertical ? 800 : 315, width: vertical ? 930 : 560, textAlign: "center", padding: vertical ? "54px 30px" : "44px 30px", border: "1px solid rgba(255,157,61,0.55)", borderRadius: 28, background: "rgba(8,13,23,0.76)", boxShadow: "0 0 70px rgba(255,132,44,0.13)"}}>
      <div style={{fontSize: vertical ? 154 : 132, fontWeight: 900, color: "#ff9d3d", lineHeight: 0.95}}>+19%</div>
      <div style={{fontSize: vertical ? 34 : 27, fontWeight: 700, marginTop: 22}}>MORE TIME TO FINISH</div>
    </div>;
  }

  if (id === "jobs") {
    return <div style={{...baseStyle, right: vertical ? 80 : 135, top: vertical ? 810 : 360, width: vertical ? 920 : 620, padding: 34, borderLeft: "6px solid #45b9ff", background: "linear-gradient(90deg, rgba(12,40,66,.82), rgba(4,10,20,.2))"}}>
      <div style={{fontSize: vertical ? 32 : 25, color: "#7bcaff", fontWeight: 800}}>2030 OUTLOOK</div>
      <div style={{fontSize: vertical ? 52 : 39, lineHeight: 1.15, fontWeight: 900, marginTop: 12}}>FASTEST-GROWING<br/>ROLES</div>
      <div style={{fontSize: vertical ? 29 : 23, marginTop: 18, color: "#d8ebf8"}}>Software & application developers</div>
    </div>;
  }

  if (id === "playbook") {
    const items = ["CONTEXT", "VERIFICATION", "OWNERSHIP"];
    return <div style={{...baseStyle, left: vertical ? 70 : 760, right: vertical ? 70 : 90, top: vertical ? 790 : 390, display: "flex", flexDirection: vertical ? "column" : "row", gap: 18}}>{items.map((item, index) => <div key={item} style={{flex: 1, padding: vertical ? "27px 30px" : "27px 18px", borderRadius: 18, border: "1px solid rgba(70,183,255,.4)", background: "rgba(3,16,30,.78)", opacity: interpolate(frame, [12 + index * 10, 28 + index * 10], [0, 1], {extrapolateLeft: "clamp", extrapolateRight: "clamp"}), translate: interpolate(frame, [12 + index * 10, 28 + index * 10], ["0px 30px", "0px 0px"], {extrapolateLeft: "clamp", extrapolateRight: "clamp"}), fontSize: vertical ? 34 : 24, fontWeight: 900, textAlign: "center", color: index === 2 ? "#ffb14a" : "#73c8ff"}}>{index + 1}. {item}</div>)}</div>;
  }

  if (id === "definition") {
    return <div style={{...baseStyle, right: vertical ? 70 : 120, top: vertical ? 800 : 370, display: "flex", flexDirection: vertical ? "column" : "row", gap: 14}}>{["PLAN", "BUILD", "TEST", "REPEAT"].map((item, index) => <div key={item} style={{padding: vertical ? "20px 34px" : "24px 20px", minWidth: vertical ? 0 : 132, borderRadius: 12, background: index === 3 ? "#1277bd" : "rgba(8,25,44,.86)", border: "1px solid rgba(74,185,255,.45)", opacity: interpolate(frame, [10 + index * 9, 24 + index * 9], [0, 1], {extrapolateLeft: "clamp", extrapolateRight: "clamp"}), fontSize: vertical ? 32 : 22, fontWeight: 900, textAlign: "center"}}>{item}</div>)}</div>;
  }

  if (id === "amplifier") {
    return <div style={{...baseStyle, right: vertical ? 65 : 120, top: vertical ? 800 : 350, width: vertical ? 940 : 640, display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: vertical ? 16 : 22, fontSize: vertical ? 29 : 24, fontWeight: 800, textAlign: "center"}}>
      <div style={{padding: 24, border: "1px solid #ff9d3d", borderRadius: 18, background: "rgba(30,16,6,.72)"}}>FRAGILE<br/>SYSTEM</div><div style={{fontSize: 42}}>→</div><div style={{padding: 24, border: "1px solid #ff684d", borderRadius: 18, background: "rgba(34,8,7,.72)"}}>FASTER<br/>FAILURE</div>
      <div style={{padding: 24, border: "1px solid #46baff", borderRadius: 18, background: "rgba(5,22,39,.78)"}}>STRONG<br/>SYSTEM</div><div style={{fontSize: 42}}>→</div><div style={{padding: 24, border: "1px solid #53d6ae", borderRadius: 18, background: "rgba(4,31,29,.78)"}}>FASTER<br/>DELIVERY</div>
    </div>;
  }

  return null;
};

export const SceneFrame: React.FC<{scene: SceneContent; index: number}> = ({scene, index}) => {
  const frame = useCurrentFrame();
  const {width, height, durationInFrames} = useVideoConfig();
  const vertical = height > width;
  const outro = scene.id === "outro";

  return (
    <AbsoluteFill style={{background: "#02050a", overflow: "hidden", opacity: interpolate(frame, [0, 8, durationInFrames - 8, durationInFrames], [0, 1, 1, 0], {extrapolateLeft: "clamp", extrapolateRight: "clamp"})}}>
      <Img src={staticFile(index % 2 === 0 ? "assets/ai-agents-cinematic.png" : "assets/brand-cinematic.png")} style={{position: "absolute", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", scale: interpolate(frame, [0, durationInFrames], [1.03, 1.12], {easing: Easing.linear, extrapolateLeft: "clamp", extrapolateRight: "clamp"}), opacity: outro ? 0.55 : 0.48, filter: "saturate(.9) contrast(1.18) brightness(.66)"}} />
      <AbsoluteFill style={{background: vertical ? "linear-gradient(180deg, rgba(0,5,13,.42), rgba(1,8,18,.76) 45%, #02050a 88%)" : "linear-gradient(90deg, rgba(0,5,13,.96) 0%, rgba(0,7,18,.74) 42%, rgba(0,4,10,.30) 75%, rgba(0,0,0,.62) 100%)"}} />
      <AbsoluteFill style={{opacity: 0.18, backgroundImage: "linear-gradient(rgba(80,180,255,.11) 1px, transparent 1px), linear-gradient(90deg, rgba(80,180,255,.08) 1px, transparent 1px)", backgroundSize: vertical ? "70px 70px" : "90px 90px", translate: `0px ${frame % (vertical ? 70 : 90)}px`}} />

      {outro && <Img src={staticFile("assets/newhorizons-logo.png")} style={{position: "absolute", width: vertical ? 530 : 420, height: vertical ? 530 : 420, top: vertical ? 210 : 145, left: "50%", marginLeft: vertical ? -265 : -210, borderRadius: "50%", boxShadow: "0 0 90px rgba(30,142,255,.4)", opacity: interpolate(frame, [0, 24], [0, 1], {extrapolateLeft: "clamp", extrapolateRight: "clamp"}), scale: interpolate(frame, [0, 35], [0.84, 1], {easing: Easing.bezier(.2,.9,.2,1), extrapolateLeft: "clamp", extrapolateRight: "clamp"})}} />}

      <div style={{position: "absolute", left: vertical ? 58 : 78, top: outro ? (vertical ? 800 : 610) : (vertical ? 245 : 190), width: vertical ? 960 : 830}}>
        <div style={{fontFamily: "Inter, sans-serif", fontSize: vertical ? 25 : 22, fontWeight: 800, color: "#57bdff", letterSpacing: vertical ? 5 : 4, opacity: interpolate(frame, [0, 18], [0, 1], {extrapolateLeft: "clamp", extrapolateRight: "clamp"})}}>{scene.eyebrow}</div>
        <div style={{marginTop: 18, fontFamily: "Space Grotesk, Inter, sans-serif", fontSize: vertical ? (outro ? 83 : 91) : (outro ? 76 : 91), fontWeight: 700, lineHeight: 0.98, color: "#f4f9ff", letterSpacing: -3.3, textShadow: "0 12px 50px rgba(0,0,0,.9)", opacity: interpolate(frame, [5, 29], [0, 1], {extrapolateLeft: "clamp", extrapolateRight: "clamp"}), translate: interpolate(frame, [5, 29], ["-44px 0px", "0px 0px"], {easing: Easing.bezier(.18,.86,.25,1), extrapolateLeft: "clamp", extrapolateRight: "clamp"})}}>{scene.headline}</div>
        <div style={{marginTop: 22, width: vertical ? 760 : 640, height: 3, background: "linear-gradient(90deg, #168fe2, #72cbff, transparent)"}} />
        <div style={{marginTop: 20, fontFamily: "Inter, sans-serif", fontSize: vertical ? 36 : 31, fontWeight: 600, lineHeight: 1.25, color: scene.id === "productivity" ? "#ffb05c" : "#a9dfff"}}>{scene.accent}</div>
      </div>

      {!outro && <DataVisual id={scene.id} />}
      {scene.id === "trust" && <Source>Source: Stack Overflow Developer Survey 2025</Source>}
      {scene.id === "productivity" && <Source>Source: METR randomized controlled trial, July 2025</Source>}
      {scene.id === "amplifier" && <Source>Source: Google DORA Report 2025</Source>}
      {scene.id === "jobs" && <Source>Source: World Economic Forum, Future of Jobs 2025</Source>}
    </AbsoluteFill>
  );
};
