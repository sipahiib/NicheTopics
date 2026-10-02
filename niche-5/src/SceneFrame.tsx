import {Audio} from '@remotion/media';
import {AbsoluteFill, interpolate, staticFile, useCurrentFrame} from 'remotion';
import content from './content.json';
import {MovingIllustration} from './MovingIllustration';

export const SceneFrame: React.FC<{index: number}> = ({index}) => {
 const frame=useCurrentFrame();
 const scene=content[index];
 const accent=['#c8fa72','#83e3ff','#c8fa72','#ffd28b','#83e3ff','#ffd28b','#c8fa72','#83e3ff'][index];
 const beat=Math.min(2,Math.floor(frame/(scene.seconds*30/3)));
 return <AbsoluteFill style={{background:'#101d24',color:'#f4f4ed',fontFamily:'Arial, Helvetica, sans-serif'}}>
 <AbsoluteFill style={{background:`radial-gradient(ellipse at 75% 50%, ${accent}22, transparent 65%)`}}/>
 <div style={{position:'absolute',left:100,top:120,width:760,opacity:interpolate(frame,[0,18],[0,1],{extrapolateRight:'clamp'})}}>
 <div style={{fontWeight:900,fontSize:82,letterSpacing:-3,lineHeight:1.08}}>{scene.title.replace(/^0[123] \/ /,'')}</div>
 <div style={{fontSize:40,color:accent,lineHeight:1.25,marginTop:35}}>{scene.subtitle}</div>
 <div style={{marginTop:70,borderLeft:`5px solid ${accent}`,paddingLeft:28,fontSize:39,lineHeight:1.3,minHeight:160}}>{scene.items[beat]}</div>
 <div style={{display:'flex',gap:12,marginTop:24}}>{scene.items.map((item,i)=><div key={item} style={{height:6,width:i===beat?90:35,borderRadius:5,background:i===beat?accent:'#4b666d'}}/>)}</div>
 </div>
 <div style={{position:'absolute',right:40,top:190,width:1030,height:750,translate:`0 ${interpolate(frame,[0,30],[30,0],{extrapolateRight:'clamp'})}px`}}><MovingIllustration index={index} beat={beat} accent={accent}/></div>
 <div style={{position:'absolute',bottom:70,left:100,fontSize:22,color:'#98adb1'}}>{index===5?'Illustration only · before platform fees and tax':index===1?'Source: Upwork In-Demand Skills 2026 · US marketplace data':'Illustrative example'}</div>
 <Audio src={staticFile(`audio/${scene.id}.mp3`)}/>
 </AbsoluteFill>;
};
