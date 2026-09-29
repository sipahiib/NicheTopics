import {Audio} from "@remotion/media";
import {AbsoluteFill, interpolate, Sequence, staticFile, useCurrentFrame} from "remotion";
import type {CSSProperties, ReactNode} from "react";
import content from "./content.json";

type SceneData = {id: string; seconds: number; tool: string; job: string; accent: string; narration: string};
const scenes = content as SceneData[];
const ink = "#eff4ff";
const panel: CSSProperties = {background: "#19263c", border: "2px solid #3e506b", borderRadius: 28, boxShadow: "0 24px 55px #0005"};

const Chip: React.FC<{children: ReactNode; color?: string}> = ({children, color = "#b9f760"}) => <span style={{display: "inline-block", background: `${color}24`, border: `1px solid ${color}77`, borderRadius: 99, padding: "10px 20px", color, fontSize: 25, fontWeight: 750}}>{children}</span>;
const MiniLine: React.FC<{width?: string; color?: string}> = ({width = "100%", color = "#5b6b83"}) => <div style={{height: 13, width, borderRadius: 20, background: color}} />;
const Label: React.FC<{children: ReactNode}> = ({children}) => <div style={{color: "#aebdd1", fontSize: 22, letterSpacing: 2, textTransform: "uppercase", fontWeight: 800, marginBottom: 17}}>{children}</div>;

const Browser: React.FC<{name: string; accent: string; children: ReactNode}> = ({name, accent, children}) => <div style={{...panel, width: 900, height: 660, overflow: "hidden"}}>
  <div style={{height: 78, display: "flex", alignItems: "center", gap: 14, borderBottom: "2px solid #3e506b", padding: "0 28px", background: "#101d32"}}>
    {Array.from({length: 3}, (_, i) => <span key={i} style={{width: 13, height: 13, background: ["#f58d90", "#f7ce79", "#8ee0a4"][i], borderRadius: "50%"}} />)}
    <span style={{marginLeft: 24, color: accent, fontSize: 28, fontWeight: 900}}>{name}</span>
    <span style={{marginLeft: "auto", color: "#91a5bd", fontSize: 20}}>ILLUSTRATIVE DEMO</span>
  </div>
  <div style={{padding: 34, height: 582, boxSizing: "border-box"}}>{children}</div>
</div>;

const Chatgpt: React.FC<{frame: number; accent: string}> = ({frame, accent}) => <Browser name="ChatGPT · Study mode" accent={accent}>
  <Label>Ask for help without asking for the answer</Label>
  <div style={{...panel, marginLeft: 100, padding: 25, fontSize: 29, lineHeight: 1.35}}>How does sleep help memory? Give me one hint.</div>
  <div style={{...panel, marginTop: 32, marginRight: 85, padding: 27, fontSize: 28, lineHeight: 1.35, opacity: interpolate(frame, [35, 55], [0, 1], {extrapolateRight: "clamp"})}}>
    <Chip color={accent}>STUDY GUIDE</Chip><div style={{marginTop: 19}}>What happens to new information after you fall asleep?</div>
  </div>
  <div style={{display: "flex", gap: 16, marginTop: 28, opacity: interpolate(frame, [100, 125], [0, 1], {extrapolateRight: "clamp"})}}><Chip color={accent}>1 HINT AT A TIME</Chip><Chip color={accent}>QUIZ ME NEXT</Chip></div>
</Browser>;

const Notebook: React.FC<{frame: number; accent: string}> = ({frame, accent}) => <Browser name="NotebookLM" accent={accent}>
  <div style={{display: "flex", gap: 26, height: "100%"}}>
    <div style={{...panel, padding: 25, width: 250}}><Label>Sources</Label><div style={{fontSize: 26, lineHeight: 2.2}}>▤ Lecture notes<br />▤ Class reading<br />▤ Study outline</div></div>
    <div style={{flex: 1}}><Label>From your class material</Label><div style={{fontSize: 36, fontWeight: 850, marginBottom: 22}}>Sleep & learning</div>
      <div style={{...panel, padding: 24, fontSize: 25, lineHeight: 1.5}}>1. Key idea: memory consolidation<br />2. Try a practice question<br />3. Review the original source <span style={{color: accent}}>[1]</span></div>
      <div style={{...panel, padding: 21, marginTop: 22, opacity: interpolate(frame, [105, 130], [0, 1], {extrapolateRight: "clamp"})}}><div style={{color: accent, fontSize: 23, fontWeight: 850}}>▶ AUDIO OVERVIEW</div><div style={{display: "flex", alignItems: "center", gap: 6, height: 80}}>{Array.from({length: 38}, (_, i) => <div key={i} style={{width: 7, height: 14 + Math.abs(Math.sin(i * 1.7 + frame / 8)) * 48, background: accent, borderRadius: 8}} />)}</div></div>
    </div>
  </div>
</Browser>;

const Elicit: React.FC<{frame: number; accent: string}> = ({frame, accent}) => <Browser name="Elicit" accent={accent}>
  <Label>Research paper search</Label><div style={{...panel, padding: 23, fontSize: 26, color: ink}}>What does research say about sleep and learning? <span style={{float: "right", color: accent}}>⌕</span></div>
  <div style={{marginTop: 19, display: "grid", gap: 12}}>{["Sleep and memory consolidation", "Learning after restricted sleep", "Review of sleep and cognition"].map((title, i) => <div key={title} style={{...panel, padding: "16px 24px", opacity: interpolate(frame, [40 + i * 25, 60 + i * 25], [0, 1], {extrapolateRight: "clamp"})}}><div style={{fontSize: 25, color: accent, fontWeight: 800}}>{title}</div><div style={{fontSize: 21, color: "#aebdd1", marginTop: 5}}>Paper · abstract · publication details</div></div>)}</div>
  <div style={{fontSize: 20, color: "#aebdd1", marginTop: 9}}>Illustrative paper titles — verify the real papers before citing</div>
</Browser>;

const Deepl: React.FC<{frame: number; accent: string}> = ({frame, accent}) => <Browser name="DeepL Write" accent={accent}>
  <div style={{display: "flex", gap: 22, height: 425}}>
    <div style={{...panel, padding: 27, flex: 1}}><Label>My draft</Label><div style={{fontSize: 28, lineHeight: 1.5}}>Sleep is important and it does lots of things for learning. It can help people remember stuff.</div></div>
    <div style={{alignSelf: "center", fontSize: 50, color: accent}}>→</div>
    <div style={{...panel, padding: 27, flex: 1, opacity: interpolate(frame, [50, 75], [0, 1], {extrapolateRight: "clamp"})}}><Label>Suggested edit</Label><div style={{fontSize: 28, lineHeight: 1.5}}>Sleep may support learning by helping people retain newly learned information.</div></div>
  </div><div style={{display: "flex", gap: 15, marginTop: 20}}><Chip color={accent}>CHECK THE MEANING</Chip><Chip color={accent}>KEEP YOUR VOICE</Chip></div>
</Browser>;

const Canva: React.FC<{frame: number; accent: string}> = ({frame, accent}) => <Browser name="Canva · Magic Design" accent={accent}>
  <Label>Prompt → presentation draft</Label><div style={{...panel, padding: 20, fontSize: 25, marginBottom: 24}}>Sleep and learning · two findings · one limitation</div>
  <div style={{display: "flex", gap: 16, height: 300}}>{["THE QUESTION", "WHAT WE FOUND", "ONE LIMITATION"].map((title, i) => <div key={title} style={{...panel, flex: 1, padding: 18, background: ["#3d315b", "#254c62", "#4c3450"][i], opacity: interpolate(frame, [35 + i * 25, 55 + i * 25], [0, 1], {extrapolateRight: "clamp"})}}><div style={{fontSize: 21, color: accent, fontWeight: 900}}>{title}</div><div style={{fontSize: 61, textAlign: "center", padding: "17px 0"}}>{["?", "◷", "⚑"][i]}</div><MiniLine width="87%" /><div style={{height: 12}} /><MiniLine width="65%" /></div>)}</div>
  <div style={{fontSize: 23, color: "#b7c4d7", marginTop: 20}}>Replace placeholder text with verified facts and sources.</div>
</Browser>;

const Workflow: React.FC<{accent: string; frame: number}> = ({accent, frame}) => <div style={{...panel, width: 900, minHeight: 550, padding: 45, boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "center", gap: 18}}>
  {["ChatGPT · Understand", "NotebookLM · Review", "Elicit · Research", "DeepL Write · Write", "Canva · Present"].map((item, i) => <div key={item} style={{...panel, fontSize: 30, fontWeight: 800, padding: "16px 25px", opacity: interpolate(frame, [i * 13, i * 13 + 18], [0, 1], {extrapolateRight: "clamp"}), borderColor: `${accent}55`}}><span style={{color: accent, marginRight: 20}}>{String(i + 1).padStart(2, "0")}</span>{item}</div>)}
</div>;

const Scene: React.FC<{data: SceneData; index: number}> = ({data, index}) => {
  const frame = useCurrentFrame();
  const visual = data.id === "chatgpt" ? <Chatgpt frame={frame} accent={data.accent} /> : data.id === "notebooklm" ? <Notebook frame={frame} accent={data.accent} /> : data.id === "elicit" ? <Elicit frame={frame} accent={data.accent} /> : data.id === "deepl" ? <Deepl frame={frame} accent={data.accent} /> : data.id === "canva" ? <Canva frame={frame} accent={data.accent} /> : <Workflow frame={frame} accent={data.accent} />;
  return <AbsoluteFill style={{background: "#0c1425", color: ink, fontFamily: "Arial, Helvetica, sans-serif", overflow: "hidden"}}>
    <div style={{position: "absolute", inset: 0, background: `radial-gradient(circle at 75% 42%, ${data.accent}23, transparent 48%)`}} />
    <div style={{position: "absolute", top: 68, left: 100, right: 100, display: "flex", justifyContent: "space-between", alignItems: "center"}}><div style={{color: data.accent, fontSize: 27, fontWeight: 900, letterSpacing: 4}}>STUDENT AI TOOLKIT</div><div style={{fontSize: 25, color: "#9aabc2", letterSpacing: 3}}>NEW HORIZONS</div></div>
    <div style={{position: "absolute", left: 100, top: 245, width: 770, opacity: interpolate(frame, [0, 18], [0, 1], {extrapolateRight: "clamp"}), translate: `0 ${interpolate(frame, [0, 18], [28, 0], {extrapolateRight: "clamp"})}px`}}>
      <Chip color={data.accent}>{index === 0 ? "01 / INTRO" : index === scenes.length - 1 ? "07 / TAKEAWAY" : `0${index + 1} / TOOL`}</Chip>
      <div style={{fontSize: data.tool.length > 18 ? 78 : 100, lineHeight: 1.03, fontWeight: 900, letterSpacing: -4, marginTop: 34}}>{data.tool}</div>
      <div style={{fontSize: 46, lineHeight: 1.2, marginTop: 35, color: data.accent, fontWeight: 700}}>{data.job}</div>
      <div style={{fontSize: 29, marginTop: 60, color: "#afbdd1", lineHeight: 1.45}}>{data.id === "intro" ? "One assignment, five jobs." : data.id === "outro" ? "Check sources. Follow your school's AI rules." : "Example assignment: How does sleep affect learning?"}</div>
    </div>
    <div style={{position: "absolute", right: 80, top: 210}}>{visual}</div>
    <div style={{position: "absolute", left: 100, bottom: 65, right: 100, display: "flex", alignItems: "center", gap: 8}}>{scenes.map((scene, i) => <div key={scene.id} style={{height: 8, flex: scene.seconds, borderRadius: 10, background: i <= index ? data.accent : "#46556c"}} />)}</div>
  </AbsoluteFill>;
};

export const StudentAiToolsVideo: React.FC = () => {
  let from = 0;
  return <AbsoluteFill>{scenes.map((scene, index) => {
    const start = from;
    from += scene.seconds * 30;
    return <Sequence key={scene.id} name={scene.tool} from={start} durationInFrames={scene.seconds * 30}><Scene data={scene} index={index} /><Audio src={staticFile(`audio/${scene.id}.mp3`)} /></Sequence>;
  })}</AbsoluteFill>;
};

export const Thumbnail: React.FC = () => <div style={{width: "100%", height: "100%", background: "#0c1425", color: ink, fontFamily: "Arial, Helvetica, sans-serif", padding: 80, boxSizing: "border-box"}}><div style={{color: "#B9F760", fontSize: 32, fontWeight: 900, letterSpacing: 4}}>STUDENT AI TOOLKIT</div><div style={{fontSize: 112, lineHeight: 1.05, marginTop: 65, fontWeight: 950}}>5 AI TOOLS<br /><span style={{color: "#B9F760"}}>FOR STUDENTS</span></div><div style={{display: "flex", gap: 18, marginTop: 55}}>{["LEARN", "RESEARCH", "PRESENT"].map((word) => <Chip key={word}>{word}</Chip>)}</div></div>;
