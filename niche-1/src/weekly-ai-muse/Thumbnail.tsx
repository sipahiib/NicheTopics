import React from 'react';
import {AbsoluteFill} from 'remotion';
import {colors} from './scenes/Visuals';
export const Thumbnail=()=> <AbsoluteFill style={{background:colors.ink,fontFamily:'Helvetica Neue, Arial',color:colors.paper}}>
  <div style={{position:'absolute',left:68,top:59,fontSize:32,fontWeight:800,letterSpacing:4,color:colors.teal}}>META MUSE</div>
  <div style={{position:'absolute',left:65,top:163,fontSize:109,fontWeight:850,lineHeight:.98,letterSpacing:-5}}>WHO'S<br/><span style={{color:colors.amber}}>IN CONTROL?</span></div>
  <svg viewBox="0 0 500 600" style={{position:'absolute',right:15,top:50,width:500,height:610}}><rect x="60" y="60" width="335" height="455" rx="35" fill={colors.paper} transform="rotate(6 200 280)"/><text x="226" y="178" textAnchor="middle" fontSize="35" fontWeight="700" fill={colors.ink}>DRAFT READY</text><path d="M114 225H335M114 265H304M114 305H326" stroke="#ACBCBB" strokeWidth="13" strokeLinecap="round"/><rect x="90" y="365" width="310" height="88" rx="18" fill={colors.teal}/><text x="245" y="423" textAnchor="middle" fontSize="45" fontWeight="800" fill={colors.ink}>APPROVE?</text><path d="M315 420V510L339 486L363 529L383 515L360 475L400 470Z" fill={colors.amber} stroke={colors.ink} strokeWidth="5"/></svg>
</AbsoluteFill>;
