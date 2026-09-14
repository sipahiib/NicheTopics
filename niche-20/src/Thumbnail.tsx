import {AbsoluteFill, Img, staticFile} from "remotion";
export const Thumbnail = () => <AbsoluteFill style={{background: "#020711"}}>
  <Img src={staticFile("city-thumbnail.jpg")} style={{width: "100%", height: "100%", objectFit: "cover"}} />
  <AbsoluteFill style={{background: "linear-gradient(90deg, rgba(2,7,17,.96) 0%, rgba(2,7,17,.72) 50%, rgba(2,7,17,.18) 100%)", padding: 80, justifyContent: "center"}}>
    <div style={{color: "#59d9ff", fontSize: 34, fontWeight: 800, letterSpacing: 8}}>THE NEXT FIVE YEARS</div>
    <div style={{color: "white", fontFamily: "Space Grotesk", fontSize: 126, fontWeight: 700, lineHeight: .92, marginTop: 30}}>YOUR LIFE<br/>IN 2031</div>
    <div style={{color: "#ffad62", fontSize: 48, fontWeight: 700, marginTop: 36}}>Closer than you think.</div>
    <Img src={staticFile("newhorizons-logo.png")} style={{position: "absolute", right: 90, top: 70, width: 120, height: 120}} />
  </AbsoluteFill>
</AbsoluteFill>;
