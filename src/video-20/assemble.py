"""Build an editable timeline and narration mix from measured speech durations."""
import json
import subprocess
from pathlib import Path
ROOT=Path(__file__).resolve().parents[2]
timeline=json.loads((ROOT/'assets/video-20/timeline.json').read_text())
components=[('Calendar','Calendar'),('DateScene','DateScene'),('NewsScene','NewsScene'),('SonnetScene','ModelScene'),('FableScene','ModelScene'),('ChoiceScene','ChoiceScene'),('GoogleScene','PhoneScene'),('DrawerScene','DrawerScene'),('LimitsScene','PhoneScene'),('HumanScene','FootageScenes'),('NoiseScene','NewsScene'),('SourceScene','SourceScene'),('TestScene','TestScene'),('WeeklyScene','WeeklyScene'),('FutureScene','FootageScenes'),('Closing','Closing')]
lines=["import React from 'react';", "import {AbsoluteFill,Composition,Folder,Sequence,Still,registerRoot,useCurrentFrame} from 'remotion';"]
for component,module in components:
 lines.append(f"import {{{component}}} from './{module}';")
lines.append('const FullVideo=()=> <>')
for s,(component,_) in zip(timeline,components):
 lines.append(f'<Sequence name="{s["id"]}" from={{{s["start"]}}} durationInFrames={{{s["frames"]}}}><{component}/></Sequence>')
lines.append('</>;')
lines.append('const Thumbnail=()=> <AbsoluteFill style={{background:"#101820",fontFamily:"Helvetica Neue, Arial",color:"#F3EFE6"}}><div style={{position:"absolute",left:110,top:260,fontSize:155,lineHeight:1,fontWeight:750,letterSpacing:-8}}>ALREADY<br/><span style={{color:"#FFB454"}}>OUTDATED?</span></div><div style={{position:"absolute",left:1230,top:230,width:510,height:590,background:"#F3EFE6",color:"#101820",borderRadius:28,rotate:"8deg",boxShadow:"25px 35px 0 #3AD6C5",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}><div style={{fontSize:50}}>2026</div><div style={{fontSize:90,color:"#45877E"}}>↓</div><div style={{fontSize:120,fontWeight:750}}>2027</div></div></AbsoluteFill>;')
total=sum(s['frames'] for s in timeline)
lines.append(f'const Root=()=> <><Composition id="Video20" component={{FullVideo}} width={{1920}} height={{1080}} fps={{30}} durationInFrames={{{total}}}/><Still id="Thumbnail20" component={{Thumbnail}} width={{1920}} height={{1080}}/><Folder name="Scenes">')
for s,(component,_) in zip(timeline,components):
 lines.append(f'<Composition id="{component}" component={{{component}}} width={{1920}} height={{1080}} fps={{30}} durationInFrames={{{s["frames"]}}}/>')
lines.append('</Folder></>;registerRoot(Root);')
(ROOT/'src/video-20/full.tsx').write_text('\n'.join(lines)+'\n')
# Concatenate separately padded narration segments. Speech starts 0.2 seconds into each scene.
concat=[]
for s in timeline:
 out=ROOT/f'build/video-20/{s["id"]}.wav'
 subprocess.run(['ffmpeg','-y','-v','error','-i',str(ROOT/f'build/video-20/{s["id"]}.mp3'),'-af','adelay=200,apad','-t',str(s['frames']/30),'-ar','48000','-ac','2',str(out)],check=True)
 concat.append(f"file '{out}'")
listfile=ROOT/'build/video-20/audio-list.txt';listfile.write_text('\n'.join(concat)+'\n')
subprocess.run(['ffmpeg','-y','-v','error','-f','concat','-safe','0','-i',str(listfile),'-af','loudnorm=I=-16:TP=-1:LRA=11','-ar','48000',str(ROOT/'build/video-20/narration-full.wav')],check=True)
print('Total frames:',total,'Duration:',total/30)
for s in timeline: print(s['id'],round(s['start']/30,2),round(s['frames']/30,2))
