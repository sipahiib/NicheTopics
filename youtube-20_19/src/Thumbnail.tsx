import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Picture} from './scenes/Visual';
export const Thumbnail=()=> <AbsoluteFill style={{background:'#101923',fontFamily:'Arial',color:'#fff2df'}}><div style={{position:'absolute',left:65,top:140,fontSize:105,fontWeight:900,lineHeight:1.03}}>CAN AI<br/>COPY YOU?</div><div style={{position:'absolute',left:690,top:100,width:480,height:390,border:'15px solid #fff2df',borderRadius:22,rotate:'-8deg'}}><Picture/></div><div style={{position:'absolute',left:825,top:370,width:330,height:235,border:'12px solid #f5784b',borderRadius:15,rotate:'9deg'}}><Picture variant/></div><div style={{position:'absolute',left:660,top:480,fontSize:125,fontWeight:900,color:'#f5784b'}}>?</div></AbsoluteFill>;
