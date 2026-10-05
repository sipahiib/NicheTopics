import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

export const colors = {ink:'#101D2C', paper:'#F6F1E8', teal:'#47DFC2', amber:'#FFBD69', red:'#FA806C', blue:'#567BF3'};
const limit = {extrapolateLeft:'clamp' as const,extrapolateRight:'clamp' as const};
export type VisualKind = 'workflow'|'shop'|'chat'|'network'|'order'|'draft'|'approve'|'error'|'review'|'access'|'secure'|'trial'|'globe'|'choice'|'next';

const Envelope = ({x,y,scale=1,color=colors.paper}:{x:number;y:number;scale?:number;color?:string}) => <g transform={`translate(${x} ${y}) scale(${scale})`}><rect width="220" height="145" rx="17" fill={color}/><path d="M8 14L110 87L211 14M9 130L72 79M211 130L148 79" fill="none" stroke={colors.ink} strokeWidth="7"/></g>;
const Package = ({x,y}:{x:number;y:number}) => <g transform={`translate(${x} ${y})`}><path d="M0 60L115 0L230 60L115 123Z" fill={colors.amber}/><path d="M0 60V205L115 265V123Z" fill="#DA974B"/><path d="M230 60V205L115 265V123Z" fill="#F0B264"/><path d="M57 30L172 90V160" stroke={colors.paper} strokeWidth="22" fill="none"/><path d="M26 176L71 200" stroke={colors.ink} strokeWidth="9"/></g>;
const Check = ({x,y}:{x:number;y:number}) => <path d={`M${x} ${y}l22 22l48 -53`} stroke={colors.teal} strokeWidth="15" fill="none" strokeLinecap="round" strokeLinejoin="round"/>;
const Paper = ({x,y,label,lines=3}:{x:number;y:number;label:string;lines?:number}) => <g transform={`translate(${x} ${y})`}><rect width="300" height="320" rx="14" fill={colors.paper}/><text x="25" y="62" fontSize="32" fill={colors.ink} fontWeight="700">{label}</text>{Array.from({length:lines},(_,i)=><rect key={i} x="25" y={100+i*42} width={i%2?180:242} height="12" rx="6" fill="#BDC7C8"/>)}</g>;
const Cursor = ({x,y}:{x:number;y:number}) => <path d={`M${x} ${y}l0 72l19 -18l16 31l18 -10l-17 -30l27 -2Z`} fill={colors.paper} stroke={colors.ink} strokeWidth="5"/>;
const Lock = ({x,y}:{x:number;y:number}) => <g transform={`translate(${x} ${y})`}><path d="M50 80V44a50 50 0 01100 0V80" stroke={colors.paper} strokeWidth="18" fill="none"/><rect x="20" y="77" width="160" height="133" rx="24" fill={colors.amber}/><circle cx="100" cy="133" r="14" fill={colors.ink}/><path d="M100 132V170" stroke={colors.ink} strokeWidth="12"/></g>;

export const Visuals:React.FC<{kind:VisualKind;variant?:number}> = ({kind,variant=0}) => {
  const f=useCurrentFrame();
  const p=interpolate(f,[0,65],[0,1],limit);
  const bob=Math.sin(f/32)*7;
  const flow=interpolate(f,[15,80],[0,1],limit);
  return <svg viewBox="0 0 1000 720" width="100%" height="100%" style={{overflow:'visible'}}>
    <defs><linearGradient id="screen" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#223B52"/><stop offset="1" stopColor="#172737"/></linearGradient><filter id="shadow"><feDropShadow dx="0" dy="20" stdDeviation="20" floodOpacity=".22"/></filter></defs>
    {kind==='shop' && <g transform={`translate(35 ${bob})`}>
      <rect x="160" y="215" width="650" height="390" fill={colors.paper} rx="14"/>
      <rect x="240" y="315" width="260" height="215" fill="#9CCDBF"/>
      <rect x="560" y="320" width="160" height="285" fill={colors.ink}/>
      <path d="M135 222L204 95H765L835 222Z" fill={colors.teal}/>
      {Array.from({length:7},(_,i)=><path key={i} d={`M${204+i*80} 95L${135+i*100} 222H${235+i*100}L${284+i*80} 95Z`} fill={i%2?colors.paper:colors.teal}/>)}
      <rect x="300" y="140" width="340" height="70" rx="8" fill={colors.ink}/><text x="470" y="188" textAnchor="middle" fill={colors.paper} fontSize="40" fontWeight="700">THE SMALL SHOP</text>
      <Package x={80+p*15} y={410}/><Envelope x={650} y={30+bob} scale={.7}/><g transform="translate(28 70) rotate(-10)"><Paper x={0} y={0} label="TO DO"/></g>
    </g>}
    {(kind==='workflow'||kind==='draft'||kind==='approve'||kind==='error'||kind==='review'||kind==='chat'||kind==='order') && <g filter="url(#shadow)" transform={`translate(0 ${bob})`}>
      <rect x="80" y="82" width="835" height="504" rx="30" fill={colors.ink} stroke="#628097" strokeWidth="9"/>
      <rect x="105" y="111" width="785" height="445" rx="12" fill={colors.paper}/>
      <circle cx="495" cy="97" r="5" fill={colors.paper}/>
      <path d="M80 586L15 638Q12 667 57 671H936Q990 667 980 638L915 586Z" fill="#78929E"/><path d="M394 586H610L580 610H419Z" fill="#3D5869"/>
      <rect x="105" y="111" width="785" height="72" fill="#DCE6DF"/><circle cx="142" cy="147" r="12" fill={colors.teal}/><text x="172" y="157" fill={colors.ink} fontSize="31" fontWeight="700">{kind==='chat'?'SUGGEST A REPLY':kind==='order'?'ORDER #0142':kind==='error'?'CHECK THE PROMISE':'PREPARE A REPLY'}</text>
      {kind==='order'?<><Package x={144} y={214}/><text x="465" y="288" fontSize="36" fill={colors.ink}>Delivery date</text><text x="465" y="360" fontSize="58" fontWeight="800" fill={colors.ink}>MONDAY</text><text x="465" y="420" fontSize="27" fill="#526779">Example order record</text></>:<>
      <g opacity={1-flow}><Envelope x={170} y={245} scale={.85}/><text x="421" y="285" fontSize="35" fill={colors.ink}>When will it arrive?</text><text x="421" y="347" fontSize="30" fill="#526779">Order #0142</text></g>
      <g opacity={flow}><rect x="155" y="215" width="680" height="240" rx="18" fill="#E4EBE7"/><text x="183" y="266" fontSize="27" fill="#526779">DRAFT • NOT SENT</text><text x="183" y="333" fontSize="37" fill={colors.ink}>Your order is due</text><text x="183" y="397" fontSize="51" fontWeight="800" fill={kind==='error'?colors.red:colors.ink}>{kind==='error'?'FRIDAY?':'MONDAY.'}</text>
      {kind==='error' && <><path d="M470 358L712 402M470 402L712 358" stroke={colors.red} strokeWidth="9"/><text x="187" y="435" fontSize="25" fill={colors.ink}>Source record says Monday</text></>}
      </g>
      <rect x="526" y="478" width="309" height="57" rx="12" fill={colors.ink}/><text x="680" y="517" textAnchor="middle" fontSize="29" fontWeight="700" fill={colors.amber}>{kind==='chat'?'COPY TEXT':kind==='review'?'CHECK FIRST':'AWAITING APPROVAL'}</text>
      <Cursor x={interpolate(f,[15,80],[870,785],limit)} y={interpolate(f,[15,80],[615,522],limit)}/>
      </>}
      {kind==='review'&&<g opacity={p}><Check x={720} y={277}/><Check x={720} y={350}/><Check x={720} y={424}/></g>}
    </g>}
    {kind==='network' && <g>
      {[['Shopify',145,140],['Canva',730,135],['Slack',170,490],['Instagram',710,490]].map(([name,x,y],i)=>{const nx=Number(x),ny=Number(y);return <g key={String(name)}><path d={`M500 345L${nx+80} ${ny+65}`} stroke="#446073" strokeWidth="5"/><circle cx={500+(nx+80-500)*((f/90+i*.21)%1)} cy={345+(ny+65-345)*((f/90+i*.21)%1)} r="10" fill={colors.teal}/><rect x={nx} y={ny+bob} width="190" height="145" rx="25" fill={i%2?colors.amber:colors.paper}/><text x={nx+95} y={ny+86+bob} textAnchor="middle" fontSize="31" fill={colors.ink} fontWeight="700">{name}</text></g>})}
      <circle cx="500" cy="345" r="135" fill={colors.teal}/><text x="500" y="357" textAnchor="middle" fill={colors.ink} fontSize="55" fontWeight="800">MUSE</text><text x="500" y="399" textAnchor="middle" fontSize="25" fill={colors.ink}>connected tools</text>
    </g>}
    {kind==='access' && <g transform={`translate(110 ${bob})`}><rect x="60" y="75" width="650" height="535" rx="32" fill={colors.paper}/><text x="110" y="154" fontSize="40" fontWeight="800" fill={colors.ink}>ACCESS IS A CHOICE</text>{['Read records','Prepare drafts','Send messages'].map((s,i)=><g key={s}><text x="110" y={260+i*120} fontSize="34" fill={colors.ink}>{s}</text><rect x="490" y={220+i*120} width="150" height="60" rx="30" fill={i===2?'#AFB6B6':colors.teal}/><circle cx={i===2?522:607} cy={250+i*120} r="23" fill={colors.paper}/></g>)}</g>}
    {kind==='secure' && <g transform={`translate(70 ${bob})`}><rect x="30" y="130" width="420" height="405" rx="35" fill="url(#screen)" stroke="#69849B" strokeWidth="6"/><text x="240" y="190" textAnchor="middle" fill={colors.paper} fontSize="32">MUSE CLOUD COMPUTER</text><Lock x={145} y={255}/><path d="M450 330H550" stroke={colors.teal} strokeWidth="12"/><path d="M565 160L805 230V370Q805 490 685 552Q565 490 565 370Z" fill={colors.teal}/><text x="685" y="338" textAnchor="middle" fontSize="36" fontWeight="800" fill={colors.ink}>SENTINEL</text><Check x={650} y={425}/><circle cx={450+((f/90)%1)*100} cy="330" r="12" fill={colors.amber}/></g>}
    {kind==='trial' && <g transform={`translate(30 ${bob})`}><Paper x={35} y={210} label="ORIGINAL"/><Paper x={470} y={210} label="AI DRAFT"/><path d="M355 358H435" stroke={colors.teal} strokeWidth="14"/><circle cx="765" cy="181" r="115" fill={colors.amber}/><circle cx="765" cy="181" r="88" stroke={colors.ink} strokeWidth="8" fill="none"/><path d={`M765 181L${765+Math.sin(f/70)*55} ${181-Math.cos(f/70)*55}`} stroke={colors.ink} strokeWidth="9" strokeLinecap="round"/><text x="460" y="620" textAnchor="middle" fontSize="39" fill={colors.paper}>INCLUDE CHECKING TIME</text></g>}
    {kind==='globe' && <g transform={`translate(0 ${bob})`}><circle cx="500" cy="330" r="265" fill="url(#screen)" stroke="#7D94A0" strokeWidth="4"/><ellipse cx="500" cy="330" rx="110" ry="265" fill="none" stroke="#45647C" strokeWidth="3"/><ellipse cx="500" cy="330" rx="210" ry="265" fill="none" stroke="#45647C" strokeWidth="3"/>{[-160,-80,0,80,160].map(y=><path key={y} d={`M${500-Math.sqrt(265**2-y**2)} ${330+y}H${500+Math.sqrt(265**2-y**2)}`} stroke="#45647C" strokeWidth="3"/>)}<path d="M294 187L340 155L410 162L459 218L428 256L453 284L405 320L386 383L350 341L328 273L295 246Z" fill={colors.teal}/><circle cx="392" cy="263" r={20+Math.sin(f/12)*4} fill={colors.amber}/><path d="M410 262L743 226" stroke={colors.amber} strokeWidth="4"/><rect x="690" y="125" width="270" height="147" rx="20" fill={colors.paper}/><text x="825" y="183" textAnchor="middle" fontSize="39" fontWeight="800" fill={colors.ink}>US + CANADA</text><text x="825" y="230" textAnchor="middle" fontSize="25" fill={colors.ink}>announcement scope</text></g>}
    {kind==='choice' && <g transform={`translate(25 ${bob})`}><Envelope x={45} y={230}/><Package x={400} y={190}/><Lock x={750} y={210}/>{['DRAFT','SEND','SPEND'].map((s,i)=><text key={s} x={155+i*330} y="575" textAnchor="middle" fontSize="46" fontWeight="800" fill={colors.paper}>{s}</text>)}<path d="M80 637H900" stroke={colors.teal} strokeWidth="8"/><circle cx={interpolate(f,[0,180],[110,870],limit)} cy="637" r="17" fill={colors.amber}/></g>}
    {kind==='next' && <g transform={`translate(0 ${bob})`}><rect x="100" y="100" width="770" height="450" rx="25" fill={colors.paper}/><text x="485" y="235" textAnchor="middle" fontSize="55" fontWeight="800" fill={colors.ink}>WHAT AGES BADLY?</text><path d="M350 308L395 350L470 264" stroke={colors.teal} strokeWidth="18" fill="none"/><text x="590" y="339" textAnchor="middle" fontSize="42" fill={colors.ink}>AI advice</text><text x="485" y="453" textAnchor="middle" fontSize="34" fill={colors.ink}>Check the date. Test the task.</text></g>}
    {variant===99&&<text x="500" y="690" fontSize="30"> </text>}
  </svg>;
};
