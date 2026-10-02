import {useCurrentFrame} from 'remotion';

// Original vector artwork; all motion is driven by the video frame.
export const MovingIllustration: React.FC<{index:number; beat:number; accent:string}> = ({index,beat,accent}) => {
 const f=useCurrentFrame();
 const phase=(f%180)/180;
 const bob=Math.sin(f/22)*9;
 const kind=index===2?'studio':index===3?'shop':index===4?'robot':index===5?'budget':index===6?'client':index===7?'launch':index===1?['studio','shop','robot'][beat]:'studio';
 return <svg viewBox="0 0 900 690" width="100%" height="100%" role="img" aria-label={`${kind} animated illustration`}>
 <defs><linearGradient id="glass" x2="1" y2="1"><stop stopColor="#314a50"/><stop offset="1" stopColor="#15252b"/></linearGradient></defs>
 <ellipse cx="460" cy="618" rx="345" ry="36" fill="#000" opacity=".3"/>
 {[0,1,2,3,4].map(i=><circle key={i} cx={110+i*160} cy={115+Math.sin(f/35+i)*28} r={4+i%3} fill={accent} opacity=".5"/>)}
 {kind==='studio'&&<g>
 <rect x="140" y="150" width="620" height="380" rx="25" fill="url(#glass)" stroke="#70878c" strokeWidth="3"/>
 <rect x="167" y="175" width="400" height="225" rx="12" fill="#0b1b21"/>
 <g transform={`translate(0 ${bob})`}><circle cx="365" cy="245" r="42" fill="#e8b99d"/><path d="M295 365 Q292 290 365 292 Q438 290 437 365" fill={accent}/><path d="M325 235 Q330 182 378 204 Q410 220 403 245" fill="#3d292a"/><rect x="416" y="252" width="17" height="65" rx="8" fill="#c3d3d4"/><path d="M425 317 V348 H400" fill="none" stroke="#c3d3d4" strokeWidth="5"/></g>
 <rect x="585" y="182" width="145" height="65" rx="9" fill={accent}/><rect x="585" y="263" width="145" height="65" rx="9" fill="#81cadd"/><rect x="585" y="344" width="145" height="42" rx="9" fill="#eeb680"/>
 {[0,1,2].map(i=><rect key={i} x={170+i*178} y="435" width="160" height="44" rx="8" fill={[accent,'#81cadd','#eeb680'][i]}/>)}
 <path d={`M${173+phase*520} 417 V494`} stroke="#fff" strokeWidth="4"/>
 <path d="M395 531 L380 577 H540 L525 531" fill="#526568"/><rect x="326" y="578" width="272" height="17" rx="8" fill="#73888b"/>
 <g transform={`translate(${beat===2?35:0} ${-bob})`}><rect x="690" y="382" width="125" height="214" rx="21" fill="#0a171e" stroke="#93a9ac" strokeWidth="4"/><rect x="703" y="412" width="99" height="137" rx="8" fill={accent}/><circle cx="753" cy="464" r="23" fill="#19333a"/><path d="M744 451 L766 464 L744 479 Z" fill="#fff"/></g>
 </g>}
 {kind==='shop'&&<g>
 <path d="M180 228 H740 V576 H180 Z" fill="url(#glass)" stroke="#718c92" strokeWidth="3"/>
 <path d="M165 228 L208 136 H716 L756 228 Z" fill={accent}/>
 {[0,1,2,3,4,5].map(i=><path key={i} d={`M${165+i*98} 228 v35 q49 45 98 0 v-35`} fill={i%2?'#f1e9d6':accent}/>)}
 <rect x="218" y="326" width="230" height="191" rx="13" fill="#11242a"/>
 <g transform={`translate(0 ${bob})`}><path d="M273 420 Q255 378 291 350 H361 Q395 378 377 420 L390 478 H262 Z" fill="#d5a06f"/><path d="M291 352 Q324 305 361 352" fill="none" stroke="#eacdb0" strokeWidth="12"/><path d="M304 409 H348" stroke="#784d34" strokeWidth="8"/></g>
 <rect x="487" y="326" width="206" height="230" rx="12" fill="#203a40"/>
 {[0,1,2,3].map(i=><rect key={i} x="513" y={355+i*42} width={135-i*15} height="12" rx="6" fill={i===beat?accent:'#718b90'}/>)}
 <circle cx="698" cy="443" r="47" fill={accent}/><path d="M677 444 l15 16 30-36" stroke="#17342b" strokeWidth="9" fill="none"/>
 </g>}
 {kind==='robot'&&<g>
 <path d="M180 395 Q450 220 720 395" fill="none" stroke="#4e747d" strokeWidth="8" strokeDasharray="14 12"/>
 <g transform={`translate(${phase*530} ${-Math.sin(phase*Math.PI)*150})`}><rect x="143" y="373" width="65" height="46" rx="8" fill={accent}/><path d="M149 380 l27 20 26-20" fill="none" stroke="#24473e" strokeWidth="4"/></g>
 <g transform={`translate(0 ${bob})`}><rect x="310" y="218" width="270" height="214" rx="52" fill="#9dc5ce"/><rect x="340" y="255" width="210" height="97" rx="26" fill="#10262e"/><ellipse cx="395" cy="299" rx="15" ry={10+Math.sin(f/15)*4} fill={accent}/><ellipse cx="495" cy="299" rx="15" ry="13" fill={accent}/><path d="M403 383 Q445 413 489 383" fill="none" stroke="#295461" strokeWidth="9"/><path d="M447 218 V175" stroke="#9dc5ce" strokeWidth="12"/><circle cx="447" cy="158" r="19" fill={accent}/><rect x="352" y="444" width="190" height="130" rx="30" fill="#638f9d"/><circle cx="447" cy="495" r="24" fill={accent}/><path d="M354 468 L276 510 M540 468 L622 505" stroke="#9dc5ce" strokeWidth="26" strokeLinecap="round"/></g>
 <rect x="90" y="381" width="140" height="182" rx="18" fill="#28464f"/><rect x="665" y="381" width="145" height="182" rx="18" fill="#28464f"/>
 {[0,1,2].map(i=><g key={i}><rect x="114" y={418+i*35} width="90" height="10" rx="4" fill="#81a7b1"/><rect x="691" y={418+i*35} width="90" height="10" rx="4" fill={i<=beat?accent:'#81a7b1'}/></g>)}
 </g>}
 {kind==='budget'&&<g>
 <rect x="180" y="222" width="480" height="322" rx="34" fill="#796042"/><rect x="196" y="238" width="450" height="290" rx="24" fill="#a18259"/><rect x="542" y="326" width="174" height="102" rx="18" fill="#c09d69"/><circle cx="575" cy="376" r="12" fill="#eee0b8"/>
 {[0,1,2,3].map(i=><g key={i} transform={`translate(${i*48} ${-bob-i*12})`}><ellipse cx="304" cy="220" rx="61" ry="16" fill="#ad8438"/><rect x="243" y="180" width="122" height="40" fill="#e9c65c"/><ellipse cx="304" cy="180" rx="61" ry="16" fill="#ffe49b"/></g>)}
 <g transform={`translate(0 ${bob})`}><rect x="617" y="436" width="145" height="157" rx="18" fill="#183a42"/><rect x="637" y="454" width="105" height="35" rx="6" fill={accent}/>{[0,1,2,3,4,5].map(i=><rect key={i} x={639+(i%3)*36} y={510+Math.floor(i/3)*32} width="25" height="21" rx="4" fill="#93afb3"/>)}</g>
 </g>}
 {kind==='client'&&<g>
 <rect x="210" y="202" width="510" height="350" rx="25" fill="url(#glass)" stroke="#78969b" strokeWidth="4"/>
 <rect x="237" y="232" width="456" height="265" rx="12" fill="#142c34"/>
 <g transform={`translate(0 ${bob})`}><circle cx="460" cy="304" r="49" fill="#dba789"/><path d="M370 445 Q378 360 460 365 Q550 355 551 445" fill={accent}/><path d="M414 295 Q408 248 455 249 Q509 250 507 293" fill="#353044"/></g>
 <path d="M153 552 H780 L825 589 H110 Z" fill="#849d9f"/>
 <g transform={`translate(${Math.sin(f/35)*18} 0)`}><rect x="594" y="132" width="205" height="130" rx="24" fill="#f0e8d6"/><path d="M626 243 l-20 46 71-36" fill="#f0e8d6"/><path d="M645 193 l26 23 45-54" stroke="#436e52" strokeWidth="10" fill="none"/></g>
 </g>}
 {kind==='launch'&&<g transform={`translate(0 ${bob})`}>
 <path d="M402 495 L445 594 L489 495" fill="#f5ac64"/><path d="M420 497 L445 554 L472 497" fill="#ffe4a0"/>
 <path d="M375 445 L316 526 L397 506 M511 445 L575 526 L494 506" fill={accent}/>
 <path d="M398 502 Q347 285 445 134 Q544 285 494 502 Z" fill="#c9d8d4"/><path d="M445 134 Q414 181 395 238 H494 Q476 179 445 134" fill={accent}/><circle cx="445" cy="332" r="49" fill="#204751" stroke="#82a4ae" strokeWidth="9"/>
 <path d="M337 560 V614 M554 562 V614" stroke="#6a8d92" strokeWidth="5"/>
 </g>}
 </svg>;
};
