import {AbsoluteFill, interpolate, useCurrentFrame} from "remotion";
import type {CSSProperties} from "react";

export type SceneData = {
  id: string;
  kind: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  narration: string;
};

const tones: Record<string, {accent: string; bg: string}> = {
  hook: {accent: "#ffdc68", bg: "#101526"},
  pizza: {accent: "#ffab5e", bg: "#251b24"},
  rocks: {accent: "#8de0da", bg: "#10232b"},
  pattern: {accent: "#ffd675", bg: "#161b2e"},
  court: {accent: "#f68fa0", bg: "#211b2b"},
  why: {accent: "#99baff", bg: "#15213b"},
  check: {accent: "#a7eab7", bg: "#142b28"},
  end: {accent: "#ffdc68", bg: "#101526"},
};

const card: CSSProperties = {border: "2px solid rgba(255,255,255,.2)", borderRadius: 34, background: "rgba(255,255,255,.055)", boxShadow: "0 30px 80px rgba(0,0,0,.22)"};

const Visual: React.FC<{kind: string; accent: string}> = ({kind, accent}) => {
  const frame = useCurrentFrame();
  const float = Math.sin(frame / 21) * 12;
  const common: CSSProperties = {height: 570, display: "flex", alignItems: "center", justifyContent: "center", color: "white"};
  if (kind === "pizza") return <div style={{...common, position: "relative"}}>
    <div style={{fontSize: 345, lineHeight: 1, translate: `0 ${float}px`, filter: "drop-shadow(0 30px 30px #0008)"}}>🍕</div>
    <div style={{position: "absolute", right: 20, top: 60, ...card, padding: "18px 28px", color: accent, fontWeight: 900, fontSize: 42, rotate: "8deg"}}>+ GLUE? ✕</div>
    <div style={{position: "absolute", left: 5, bottom: 18, fontSize: 24, opacity: .62}}>Illustration • not an actual screenshot</div>
  </div>;
  if (kind === "rocks") return <div style={{...common, gap: 24}}>
    {["🪨", "🪨", "🪨"].map((item, i) => <div key={i} style={{fontSize: 170, translate: `0 ${Math.sin(frame / 18 + i) * 16}px`, rotate: `${-10 + i * 10}deg`, filter: "drop-shadow(0 24px 20px #0008)"}}>{item}</div>)}
    <div style={{position: "absolute", bottom: 58, ...card, padding: "15px 25px", fontSize: 38, fontWeight: 900, color: accent}}>NOT FOOD</div>
  </div>;
  if (kind === "court") return <div style={{...common, flexDirection: "column", gap: 24}}>
    <div style={{fontSize: 170, translate: `0 ${float}px`}}>⚖️</div>
    <div style={{...card, padding: "30px 40px", width: 480, fontSize: 32, fontWeight: 700, lineHeight: 1.5}}>
      <div>CASE NAME <span style={{float: "right", color: accent}}>✓?</span></div>
      <div style={{height: 10, margin: "18px 0", borderRadius: 10, background: "#ffffff55"}} />
      <div style={{height: 10, width: "72%", borderRadius: 10, background: "#ffffff33"}} />
      <div style={{color: accent, marginTop: 14}}>NO RECORD FOUND</div>
    </div>
  </div>;
  if (kind === "pattern" || kind === "why") return <div style={{...common, flexDirection: "column", gap: 32}}>
    <div style={{...card, padding: "30px 36px", width: 490, fontSize: 36, fontWeight: 800, textAlign: "center"}}>WEB PAGE / CHATBOT</div>
    <div style={{fontSize: 76, color: accent}}>↓</div>
    <div style={{...card, padding: "32px 35px", width: 520, textAlign: "center", fontWeight: 900, fontSize: 38, color: accent}}>POLISHED ANSWER ≠ PROOF</div>
  </div>;
  if (kind === "check") return <div style={{...common, flexDirection: "column", alignItems: "stretch", gap: 22, padding: "0 30px"}}>
    {["01  PAUSE", "02  OPEN THE SOURCE", "03  VERIFY INDEPENDENTLY"].map((line, i) => <div key={line} style={{...card, padding: "31px 35px", fontSize: 39, fontWeight: 900, color: i === 2 ? accent : "white", translate: `${Math.sin(frame / 26 + i) * 8}px 0`}}>{line}</div>)}
  </div>;
  return <div style={{...common, flexDirection: "column", gap: 10}}>
    <div style={{fontSize: 165, lineHeight: 1, translate: `0 ${float}px`}}>🤖</div>
    <div style={{fontSize: 52, fontWeight: 900, color: accent}}>100% SURE?</div>
    <div style={{fontSize: 34, opacity: .7}}>🍕 · 🪨 · ⚖️</div>
  </div>;
};

export const Scene: React.FC<{data: SceneData}> = ({data}) => {
  const frame = useCurrentFrame();
  const tone = tones[data.kind];
  return <AbsoluteFill style={{background: tone.bg, color: "#f7f7fb", fontFamily: "Arial, Helvetica, sans-serif", overflow: "hidden"}}>
    <div style={{position: "absolute", inset: 0, background: `radial-gradient(circle at 70% 40%, ${tone.accent}25, transparent 45%), radial-gradient(circle at 0% 100%, #5377bb17, transparent 45%)`}} />
    <div style={{position: "absolute", width: 950, height: 950, border: `2px solid ${tone.accent}18`, borderRadius: "50%", right: -260, top: -10, scale: 1 + frame / 5000}} />
    <div style={{position: "absolute", top: 85, left: 110, right: 110, display: "flex", justifyContent: "space-between", fontSize: 29, letterSpacing: 4, fontWeight: 800}}><span style={{color: tone.accent}}>AI / REALITY CHECK</span><span style={{opacity: .55}}>NEW HORIZONS</span></div>
    <div style={{position: "absolute", left: 110, top: 255, width: 950, opacity: interpolate(frame, [0, 20], [0, 1], {extrapolateRight: "clamp"}), translate: `0 ${interpolate(frame, [0, 20], [35, 0], {extrapolateRight: "clamp"})}px`}}>
      <div style={{fontSize: 32, letterSpacing: 6, color: tone.accent, fontWeight: 900, marginBottom: 35}}>{data.eyebrow}</div>
      <div style={{fontSize: data.title.length > 19 ? 78 : 96, fontWeight: 950, letterSpacing: -4, lineHeight: 1.03, maxWidth: 960}}>{data.title}</div>
      <div style={{marginTop: 45, fontSize: 43, color: "#c9d0e0", fontWeight: 500, maxWidth: 780, lineHeight: 1.25}}>{data.subtitle}</div>
    </div>
    <div style={{position: "absolute", right: 80, top: 220, width: 740}}><Visual kind={data.kind} accent={tone.accent} /></div>
  </AbsoluteFill>;
};
