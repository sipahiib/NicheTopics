import React from 'react';
import {AbsoluteFill, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {Audio} from '@remotion/media';
import {Visual} from './Visual';
export const Scene=({title,kind,note,audio}:{title:string;kind:string;note:string;audio:string})=> {
 const frame=useCurrentFrame();
 return <AbsoluteFill style={{background:'#101923',color:'#f6f1e7',fontFamily:'Arial, sans-serif'}}>
  <div style={{position:'absolute',width:900,height:900,borderRadius:'50%',background:'radial-gradient(circle,#24454a 0%,transparent 68%)',right:-120,top:90}}/>
  <div style={{position:'absolute',left:100,top:106,fontSize:25,letterSpacing:5,color:'#8adac7'}}>AI & YOUR IMAGES</div>
  <div style={{position:'absolute',left:100,top:210,width:750,fontSize:Math.max(...title.split("\n").map(line=>line.length))>17?68:84,fontWeight:800,lineHeight:1.06,whiteSpace:'pre-line',opacity:interpolate(frame,[0,12],[0,1],{extrapolateRight:'clamp'})}}>{title}</div>
  <div style={{position:'absolute',left:100,top:670,width:720,fontSize:33,lineHeight:1.4,color:'#c6d7d9'}}>{note}</div>
  <div style={{position:'absolute',left:885,top:200,width:935,height:690}}><Visual kind={kind}/></div>
  <div style={{position:'absolute',left:100,bottom:68,fontSize:23,color:'#8d9da9'}}>Original animated illustration • Synthetic narration</div>
  <SequenceAudio audio={audio}/>
 </AbsoluteFill>;
};
const SequenceAudio=({audio}:{audio:string})=> <Audio src={staticFile(audio)} from={6}/>;
