import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {Video} from '@remotion/media';
import {staticFile} from 'remotion';
import {colors, VisualKind, Visuals} from './Visuals';

export const Frame:React.FC<{title:string;subtitle?:string;kind:VisualKind;label?:string;light?:boolean;footage?:boolean;hero?:boolean;source?:string}> = ({title,subtitle,kind,label,light=false,footage=false,hero=false,source}) => {
  const f=useCurrentFrame();
  return <AbsoluteFill style={{background:light?colors.paper:colors.ink,color:light?colors.ink:colors.paper,fontFamily:'Helvetica Neue, Arial',overflow:'hidden'}}>
    {footage&&<><Video src={staticFile('footage/office-team.mp4')} muted objectFit="cover" style={{width:'100%',height:'100%'}}/><AbsoluteFill style={{background:'linear-gradient(90deg,rgba(16,29,44,.96),rgba(16,29,44,.5))'}}/></>}
    <div style={{position:'absolute',width:840,height:840,right:-210,top:-300,borderRadius:'50%',background:light?'#D7E7DC':'#193A45',opacity:.7,translate:`${Math.sin(f/50)*20}px ${Math.cos(f/55)*15}px`}}/>
    <div style={{position:'absolute',left:105,top:72,fontSize:27,letterSpacing:4,fontWeight:700,color:light?'#395B60':colors.teal}}>{label||'AI THIS WEEK  •  28 SEP – 4 OCT 2026'}</div>
    {hero?<>
      <div style={{position:'absolute',left:110,top:135,fontSize:75,fontWeight:800,lineHeight:1.04,letterSpacing:-3,maxWidth:1700}}>{title}</div>
      <div style={{position:'absolute',width:1300,height:850,left:320,top:205,scale:interpolate(f,[0,180],[1,1.04],{extrapolateRight:'clamp'})}}><Visuals kind={kind}/></div>
    </>:<>
      <div style={{position:'absolute',left:105,top:230,width:675,fontSize:91,fontWeight:800,lineHeight:1.04,letterSpacing:-4,opacity:interpolate(f,[0,10],[.4,1],{extrapolateRight:'clamp'})}}>{title}</div>
      {subtitle&&<div style={{position:'absolute',left:110,top:665,width:660,fontSize:39,lineHeight:1.25,color:light?'#45606A':'#B5C6D1'}}>{subtitle}</div>}
      <div style={{position:'absolute',left:780,top:192,width:1070,height:770,scale:interpolate(f,[0,250],[.97,1.02],{extrapolateRight:'clamp'})}}><Visuals kind={kind}/></div>
    </>}
    <div style={{position:'absolute',bottom:54,left:110,fontSize:25,color:light?'#45606A':'#9FB4C3'}}>{source||'ILLUSTRATIVE ANIMATION • NOT A PRODUCT RECORDING'}</div>
    <div style={{position:'absolute',bottom:0,left:0,height:6,width:interpolate(f,[0,300],[0,1920],{extrapolateRight:'clamp'}),background:colors.teal}}/>
  </AbsoluteFill>;
};
