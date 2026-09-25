import {AbsoluteFill} from "remotion";

export const Thumbnail: React.FC = () => <AbsoluteFill style={{background: "#121b30", color: "white", fontFamily: "Arial, Helvetica, sans-serif", overflow: "hidden"}}>
  <div style={{position: "absolute", width: 850, height: 850, borderRadius: "50%", background: "#ffc35b28", right: -140, top: -70}} />
  <div style={{position: "absolute", left: 70, top: 65, fontSize: 28, letterSpacing: 5, fontWeight: 900, color: "#ffcc70"}}>THREE REAL AI FAILS</div>
  <div style={{position: "absolute", left: 70, top: 175, width: 800, fontSize: 96, lineHeight: 1.02, fontWeight: 950, letterSpacing: -5}}>AI WAS<br /><span style={{color: "#ffcc70"}}>SO WRONG.</span></div>
  <div style={{position: "absolute", left: 70, bottom: 90, fontSize: 33, color: "#cdd5e7", fontWeight: 700}}>Pizza • Rocks • Fake Court Cases</div>
  <div style={{position: "absolute", right: 100, top: 150, fontSize: 140, textAlign: "center", lineHeight: 1.4, rotate: "8deg"}}>🍕<br />🪨<br />⚖️</div>
</AbsoluteFill>;
