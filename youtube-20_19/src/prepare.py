"""Generate cached narration and independently editable scene registrations."""
import asyncio
import hashlib
import json
import math
import subprocess
from pathlib import Path
import edge_tts

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'build/public'

async def generate(part):
    audio = OUT / f"{part['id']}.mp3"
    digest = hashlib.sha256(part['text'].encode()).hexdigest()
    cache = audio.with_suffix('.json')
    if not audio.exists() or not cache.exists() or json.loads(cache.read_text())['hash'] != digest:
        await edge_tts.Communicate(part['text'], 'en-GB-RyanNeural', rate='-2%').save(str(audio))
        cache.write_text(json.dumps({'hash': digest})+'\n')
    seconds = float(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',str(audio)]))
    return math.ceil(seconds*30)+18

async def main():
    OUT.mkdir(parents=True, exist_ok=True)
    parts = json.loads((ROOT/'assets/narration.json').read_text())
    shots = json.loads((ROOT/'assets/shots.json').read_text())
    durations=[]
    for part in parts:
        durations.append(await generate(part))
    imports=["import React from 'react';", "import {Composition, Folder, Sequence, Still, registerRoot} from 'remotion';", "import {Thumbnail} from './Thumbnail';"]
    sequences=[]; registrations=[]; timeline=[]; cursor=0
    for part,shot,duration in zip(parts,shots,durations):
        name=shot['name']
        code="import React from 'react';\nimport {Scene} from './Scene';\n"
        code+=f"export const {name}=()=> <Scene title={{{json.dumps(shot['title'])}}} kind=\"{shot['kind']}\" note={{{json.dumps(shot['note'])}}} audio=\"{part['id']}.mp3\"/>;\n"
        (ROOT/f'src/scenes/{name}.tsx').write_text(code)
        imports.append(f"import {{{name}}} from './scenes/{name}';")
        sequences.append(f'<Sequence name="{name}" {('from={' + str(cursor) + '} ') if cursor else ''}durationInFrames={{{duration}}}><{name}/></Sequence>')
        registrations.append(f'<Composition id="{name}" component={{{name}}} width={{1920}} height={{1080}} fps={{30}} durationInFrames={{{duration}}}/>')
        timeline.append({'id':part['id'],'start':cursor,'frames':duration})
        cursor+=duration
    source='\n'.join(imports)+ '\nexport const Master=()=> <>\n'+'\n'.join(sequences)+'\n</>;\nconst Root=()=> <>\n'
    source+=f'<Composition id="AiPhotoRights" component={{Master}} width={{1920}} height={{1080}} fps={{30}} durationInFrames={{{cursor}}}/>'
    source+='\n<Still id="PhotoThumbnail" component={Thumbnail} width={1280} height={720}/>\n<Folder name="Scenes">\n'+'\n'.join(registrations)+'\n</Folder></>;\nregisterRoot(Root);\n'
    (ROOT/'src/index.tsx').write_text(source)
    (ROOT/'assets/timeline.json').write_text(json.dumps(timeline,indent=2)+'\n')
    print(f'{cursor/30:.2f}s, {cursor} frames, {len(parts)} scenes')

if __name__=='__main__':
    asyncio.run(main())
