"""Author independently editable shots and mix frame-aligned narration."""
import json
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
SRC = ROOT / "src/weekly-ai-muse"
OUT = ROOT / "build/weekly-ai-muse"
timeline = json.loads((ROOT / "assets/weekly-ai-muse/timeline.json").read_text())
shots = [
    ("Hook", "You decide.", "workflow", "", "hero"),
    ("Stakes", "Your apps.\nYour approval.", "network", "What are you handing over?", ""),
    ("News", "Meta Muse\ngoes to work.", "shop", "Muse for Small Business\nAnnounced 29 September 2026", ""),
    ("Busy", "One owner.\nToo many tabs.", "shop", "Messages. Orders. Content.", "footage"),
    ("Chatbot", "A reply is\nonly the start.", "chat", "The copy-and-paste problem", ""),
    ("Agent", "From answers\nto actions.", "network", "Connected tools give the agent context.", ""),
    ("Scenario", "Prepare\na reply.", "workflow", "Example task: a delivery question", ""),
    ("Context", "The facts\ncome first.", "order", "Which order? Which date? Which promise?", ""),
    ("Draft", "Draft ready.\nNot sent.", "draft", "A first draft still needs a reviewer.", ""),
    ("Approval", "You hold\nthe send button.", "approve", "Meta says: approval before sending, publishing or spending.", ""),
    ("Wrong", "One wrong date.\nA real problem.", "error", "Illustrative mistake — not an observed Muse failure", ""),
    ("Review", "Check what\nwill happen.", "review", "Facts. Recipient. Action.", ""),
    ("Access", "Connect\nwith care.", "access", "Choose access. Disconnect when needed.", ""),
    ("Security", "Safeguards\nstill need testing.", "secure", "Company-described architecture", ""),
    ("Trial", "Start small.\nMeasure the work.", "trial", "Count corrections and checking time.", ""),
    ("Availability", "Check your\nown access.", "globe", "Availability and connectors vary.", ""),
    ("Payoff", "Where is\nyour line?", "choice", "Draft, send or spend? Tell us in the comments.", ""),
]
imports = ["import React from 'react';", "import {Composition, Folder, Sequence, Still, registerRoot} from 'remotion';", "import {Thumbnail} from './Thumbnail';", "import {End} from './scenes/End';"]
for shot in shots:
    name, title, kind, subtitle, mode = shot
    props = f"title={{{json.dumps(title)}}} subtitle={{{json.dumps(subtitle)}}} kind=\"{kind}\""
    if mode:
        props += f" {mode}"
    if name in ("News", "Agent", "Draft", "Approval", "Availability"):
        props += ' source="SOURCE: META NEWSROOM • 29 SEP 2026 | ILLUSTRATIVE VISUALS"'
    if name in ("Access", "Security"):
        props += ' source="SOURCE: META MUSE ANNOUNCEMENT • 8 SEP 2026 | ILLUSTRATION"'
    (SRC / f"scenes/{name}.tsx").write_text(f"import React from 'react';\nimport {{Frame}} from './Frame';\nexport const {name}=()=> <Frame {props}/>;\n")
    imports.append(f"import {{{name}}} from './scenes/{name}';")
names = [s[0] for s in shots] + ["End"]
lines = imports + ["const Master=()=> <>"]
for scene, name in zip(timeline, names):
    start_prop = f' from={{{scene["start"]}}}' if scene['start'] else ''
    lines.append(f'<Sequence name="{scene["id"]}"{start_prop} durationInFrames={{{scene["frames"]}}}><{name}/></Sequence>')
total = sum(s["frames"] for s in timeline)
lines += ['</>;', 'const Root=()=> <>', f'<Composition id="WeeklyAiMuse" component={{Master}} width={{1920}} height={{1080}} fps={{30}} durationInFrames={{{total}}}/>', '<Still id="MuseThumbnail" component={Thumbnail} width={1280} height={720}/>', '<Folder name="Shots">']
for scene, name in zip(timeline, names):
    lines.append(f'<Composition id="{name}" component={{{name}}} width={{1920}} height={{1080}} fps={{30}} durationInFrames={{{scene["frames"]}}}/>')
lines += ['</Folder></>;', 'registerRoot(Root);']
(SRC / "index.tsx").write_text("\n".join(lines) + "\n")
concat = []
for scene in timeline:
    target = OUT / f"{scene['id']}.wav"
    subprocess.run(["ffmpeg", "-y", "-v", "error", "-i", str(OUT / f"{scene['id']}.mp3"),
                    "-af", "adelay=200,apad", "-t", str(scene["frames"] / 30),
                    "-ar", "48000", "-ac", "2", str(target)], check=True)
    concat.append(f"file '{target}'")
(OUT / "audio-list.txt").write_text("\n".join(concat) + "\n")
subprocess.run(["ffmpeg", "-y", "-v", "error", "-f", "concat", "-safe", "0", "-i", str(OUT / "audio-list.txt"),
                "-af", "loudnorm=I=-16:TP=-1:LRA=11", "-ar", "48000", str(OUT / "narration.wav")], check=True)
print(f"Authored {len(names)} shots, {total} frames, {total / 30:.2f} seconds")
