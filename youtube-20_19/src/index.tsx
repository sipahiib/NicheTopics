import React from 'react';
import {Composition, Folder, Sequence, Still, registerRoot} from 'remotion';
import {Thumbnail} from './Thumbnail';
import {Hook} from './scenes/Hook';
import {Distinction} from './scenes/Distinction';
import {Upload} from './scenes/Upload';
import {Meta} from './scenes/Meta';
import {Regions} from './scenes/Regions';
import {Training} from './scenes/Training';
import {Evidence} from './scenes/Evidence';
import {Similarity} from './scenes/Similarity';
import {Law} from './scenes/Law';
import {Credentials} from './scenes/Credentials';
import {Screenshot} from './scenes/Screenshot';
import {Watermark} from './scenes/Watermark';
import {Action} from './scenes/Action';
import {End} from './scenes/End';
export const Master=()=> <>
<Sequence name="Hook" durationInFrames={471}><Hook/></Sequence>
<Sequence name="Distinction" from={471} durationInFrames={435}><Distinction/></Sequence>
<Sequence name="Upload" from={906} durationInFrames={341}><Upload/></Sequence>
<Sequence name="Meta" from={1247} durationInFrames={419}><Meta/></Sequence>
<Sequence name="Regions" from={1666} durationInFrames={435}><Regions/></Sequence>
<Sequence name="Training" from={2101} durationInFrames={422}><Training/></Sequence>
<Sequence name="Evidence" from={2523} durationInFrames={468}><Evidence/></Sequence>
<Sequence name="Similarity" from={2991} durationInFrames={439}><Similarity/></Sequence>
<Sequence name="Law" from={3430} durationInFrames={521}><Law/></Sequence>
<Sequence name="Credentials" from={3951} durationInFrames={445}><Credentials/></Sequence>
<Sequence name="Screenshot" from={4396} durationInFrames={501}><Screenshot/></Sequence>
<Sequence name="Watermark" from={4897} durationInFrames={456}><Watermark/></Sequence>
<Sequence name="Action" from={5353} durationInFrames={561}><Action/></Sequence>
<Sequence name="End" from={5914} durationInFrames={513}><End/></Sequence>
</>;
const Root=()=> <>
<Composition id="AiPhotoRights" component={Master} width={1920} height={1080} fps={30} durationInFrames={6427}/>
<Still id="PhotoThumbnail" component={Thumbnail} width={1280} height={720}/>
<Folder name="Scenes">
<Composition id="Hook" component={Hook} width={1920} height={1080} fps={30} durationInFrames={471}/>
<Composition id="Distinction" component={Distinction} width={1920} height={1080} fps={30} durationInFrames={435}/>
<Composition id="Upload" component={Upload} width={1920} height={1080} fps={30} durationInFrames={341}/>
<Composition id="Meta" component={Meta} width={1920} height={1080} fps={30} durationInFrames={419}/>
<Composition id="Regions" component={Regions} width={1920} height={1080} fps={30} durationInFrames={435}/>
<Composition id="Training" component={Training} width={1920} height={1080} fps={30} durationInFrames={422}/>
<Composition id="Evidence" component={Evidence} width={1920} height={1080} fps={30} durationInFrames={468}/>
<Composition id="Similarity" component={Similarity} width={1920} height={1080} fps={30} durationInFrames={439}/>
<Composition id="Law" component={Law} width={1920} height={1080} fps={30} durationInFrames={521}/>
<Composition id="Credentials" component={Credentials} width={1920} height={1080} fps={30} durationInFrames={445}/>
<Composition id="Screenshot" component={Screenshot} width={1920} height={1080} fps={30} durationInFrames={501}/>
<Composition id="Watermark" component={Watermark} width={1920} height={1080} fps={30} durationInFrames={456}/>
<Composition id="Action" component={Action} width={1920} height={1080} fps={30} durationInFrames={561}/>
<Composition id="End" component={End} width={1920} height={1080} fps={30} durationInFrames={513}/>
</Folder></>;
registerRoot(Root);
