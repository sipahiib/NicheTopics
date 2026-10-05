import React from 'react';
import {AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {colors} from './Visuals';
export const End=()=> {
  const f=useCurrentFrame();
  return <AbsoluteFill style={{background:colors.ink,color:colors.paper,fontFamily:'Helvetica Neue, Arial'}}>
    <div style={{position:'absolute',left:110,top:85,fontSize:28,letterSpacing:4,color:colors.teal}}>KEEP YOUR CURIOSITY. CHECK THE EVIDENCE.</div>
    <div style={{position:'absolute',left:110,top:250,fontSize:92,fontWeight:800,lineHeight:1.04,letterSpacing:-4,width:740}}>Will this advice<br/>age badly?</div>
    <div style={{position:'absolute',left:115,top:520,width:680,fontSize:40,color:'#B5C6D1'}}>Watch the next story.<br/>Link in the description.</div>
    <Img src={staticFile('next-video.png')} style={{position:'absolute',left:1030,top:230,width:730,height:410,borderRadius:18,border:'3px solid #466371'}}/>
    <div style={{position:'absolute',left:1030,top:680,fontSize:33,width:730,lineHeight:1.2,color:colors.teal}}>Will This Video Be Outdated in One Year?</div>
    <svg width="210" height="110" style={{position:'absolute',left:797,top:380}}><path d="M10 55H185M150 25L185 55L150 85" stroke={colors.amber} strokeWidth="9" fill="none" strokeLinecap="round" style={{translate:`${Math.sin(f/22)*9}px 0px`}}/></svg>
    <div style={{position:'absolute',left:110,top:850,fontSize:42,fontWeight:700,color:colors.teal,opacity:interpolate(f,[60,90],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'})}}>Subscribe for clear visual technology stories.</div>
  </AbsoluteFill>;
};
