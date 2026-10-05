import React from 'react';
import {interpolate,useCurrentFrame} from 'remotion';
export const Picture=({variant=false}:{variant?:boolean})=> <svg viewBox="0 0 640 430" width="100%" height="100%" role="img" aria-label="Original illustration of an orange umbrella on a beach">
 <rect width="640" height="430" fill={variant?'#88aabd':'#a2c9c7'}/><circle cx={variant?470:490} cy="80" r="43" fill="#f9df91"/>
 <path d="M0 250L155 120 330 265 450 145 640 280V430H0Z" fill="#52777f"/><path d="M0 280Q170 245 340 278T640 265V430H0Z" fill="#6cacae"/>
 <path d="M0 357Q250 270 640 362V430H0Z" fill="#e8c695"/>
 <path d={variant?'M200 202Q345 40 470 203Z':'M190 218Q340 55 490 218Z'} fill="#f5784b"/>
 <path d="M340 128V376" stroke="#303a43" strokeWidth="9"/><path d="M270 388L355 379 444 388" fill="none" stroke="#b58c64" strokeWidth="7"/>
 <path d="M45 312Q95 303 149 312M490 305Q544 293 596 304" stroke="#c8e6df" strokeWidth="6" fill="none"/>
</svg>;
const Card=({variant=false,label,style={}}:{variant?:boolean;label:string;style?:React.CSSProperties})=> <div style={{position:'absolute',width:540,padding:18,background:'#faf2e3',borderRadius:20,boxShadow:'0 28px 60px #0007',...style}}><div style={{height:340,overflow:'hidden',borderRadius:9}}><Picture variant={variant}/></div><div style={{fontSize:26,color:'#233540',fontWeight:700,padding:'15px 5px 2px'}}>{label}</div></div>;
export const Visual=({kind}:{kind:string})=> {
 const f=useCurrentFrame(); const t=interpolate(f,[0,70],[0,1],{extrapolateRight:'clamp'});
 const shift=Math.sin(f/45)*9;
 if(['copy','compare','choice'].includes(kind)) return <>
  <Card label="YOUR ORIGINAL" style={{left:8,top:40,rotate:'-7deg',translate:`0px ${shift}px`,scale:0.83}}/>
  <Card variant label={kind==='compare'?'SIMILAR DETAILS?':'ILLUSTRATIVE OUTPUT'} style={{left:335,top:240,rotate:'6deg',translate:`${(1-t)*100}px ${-shift}px`,scale:0.83}}/>
  <div style={{position:'absolute',left:400,top:170,fontSize:94,color:'#f6ac69'}}>?</div>
 </>;
 if(kind==='three')return <><Card label="ONE IMAGE. THREE QUESTIONS." style={{left:70,top:30,scale:0.9,translate:`0px ${shift}px`}}/>{['TRAINING','OUTPUT','PERMISSION'].map((s,i)=><div key={s} style={{position:'absolute',left:85+i*220,top:500,background:i===2?'#f5784b':'#274951',padding:'24px 18px',borderRadius:14,fontSize:24,opacity:interpolate(f,[i*18,i*18+15],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'})}}>{s}</div>)}</>;
 if(kind==='settings'||kind==='public'||kind==='upload')return <><div style={{position:'absolute',left:205,top:5,width:405,height:645,background:'#eef2e9',border:'12px solid #42515c',borderRadius:48,rotate:`${Math.sin(f/90)*2}deg`,padding:30,boxSizing:'border-box'}}><div style={{fontSize:24,color:'#223b48',margin:'18px 0'}}>YOUR ACCOUNT</div><div style={{height:215,borderRadius:15,overflow:'hidden'}}><Picture/></div>{['Visibility','AI training','Terms & licences'].map((s,i)=><div key={s} style={{color:'#243c49',fontSize:24,marginTop:30,paddingBottom:20,borderBottom:'1px solid #bccac8'}}>{s}<div style={{float:'right',width:58,height:30,borderRadius:20,background:i===0?'#f5784b':'#81cdb9'}}/></div>)}</div><div style={{position:'absolute',left:95,top:575,background:'#f6ac69',color:'#172430',padding:'20px 25px',fontSize:26,borderRadius:15}}>Illustrative controls</div></>;
 if(kind==='training')return <><Card label="TRAINING EXAMPLE" style={{left:0,top:70,scale:0.65,rotate:'-5deg'}}/><svg width="900" height="660" style={{position:'absolute'}}>{Array.from({length:16},(_,i)=><g key={i}><path d={`M420 ${130+i*25}L${610+(i%3)*70} ${110+(i%5)*100}`} stroke="#86d9c4" strokeWidth="3" opacity=".4"/><circle cx={610+(i%3)*70} cy={110+(i%5)*100} r={14+Math.sin(f/10+i)*4} fill="#86d9c4"/></g>)}</svg><div style={{position:'absolute',left:560,top:560,fontSize:28}}>LEARNED PATTERNS</div></>;
 if(kind==='law')return <><Card label="TECHNICAL POSSIBILITY" style={{left:0,top:50,scale:0.72,rotate:'-6deg'}}/><svg width="900" height="640" style={{position:'absolute'}}><path d="M650 180V540M480 540H815M505 235H795" stroke="#f6ac69" strokeWidth="15" fill="none"/><g style={{rotate:`${Math.sin(f/38)*5}deg`,transformOrigin:'650px 235px'}}><path d="M510 235L445 380H575ZM790 235L725 380H855Z" fill="none" stroke="#8adac7" strokeWidth="10"/></g></svg></>;
 const strip=kind==='strip'; const mark=kind==='watermark';
 return <><Card label={mark?'KEEP YOUR ORIGINAL':'RECORDED HISTORY'} style={{left:130,top:40,translate:`0px ${shift}px`}}/>
 {mark?<div style={{position:'absolute',left:200,top:210,fontSize:68,rotate:'-18deg',opacity:.7,color:'#fff'}}>© YOUR WORK</div>:<div style={{position:'absolute',left:410+(strip?t*220:0),top:400,opacity:strip?1-t*.9:1,background:'#8adac7',color:'#18373e',borderRadius:20,padding:25,width:300,boxShadow:'0 18px 45px #0005'}}><div style={{fontSize:33,fontWeight:800}}>SIGNED HISTORY</div><div style={{fontSize:24,marginTop:12}}>Origin → Edit → Export</div></div>}
 <div style={{position:'absolute',left:115,top:570,fontSize:30,color:'#f6ac69'}}>{strip?'A missing record is not a verdict.':mark?'A mark can be edited or removed.':'Provenance does not prevent reuse.'}</div>
 </>;
};
