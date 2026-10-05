import React from 'react';
import {Composition, Folder, Sequence, Still, registerRoot} from 'remotion';
import {Thumbnail} from './Thumbnail';
import {End} from './scenes/End';
import {Hook} from './scenes/Hook';
import {Stakes} from './scenes/Stakes';
import {News} from './scenes/News';
import {Busy} from './scenes/Busy';
import {Chatbot} from './scenes/Chatbot';
import {Agent} from './scenes/Agent';
import {Scenario} from './scenes/Scenario';
import {Context} from './scenes/Context';
import {Draft} from './scenes/Draft';
import {Approval} from './scenes/Approval';
import {Wrong} from './scenes/Wrong';
import {Review} from './scenes/Review';
import {Access} from './scenes/Access';
import {Security} from './scenes/Security';
import {Trial} from './scenes/Trial';
import {Availability} from './scenes/Availability';
import {Payoff} from './scenes/Payoff';
const Master=()=> <>
<Sequence name="hook" durationInFrames={226}><Hook/></Sequence>
<Sequence name="stakes" from={226} durationInFrames={265}><Stakes/></Sequence>
<Sequence name="news" from={491} durationInFrames={307}><News/></Sequence>
<Sequence name="busy" from={798} durationInFrames={405}><Busy/></Sequence>
<Sequence name="chatbot" from={1203} durationInFrames={264}><Chatbot/></Sequence>
<Sequence name="agent" from={1467} durationInFrames={351}><Agent/></Sequence>
<Sequence name="scenario" from={1818} durationInFrames={332}><Scenario/></Sequence>
<Sequence name="context" from={2150} durationInFrames={304}><Context/></Sequence>
<Sequence name="draft" from={2454} durationInFrames={323}><Draft/></Sequence>
<Sequence name="approval" from={2777} durationInFrames={339}><Approval/></Sequence>
<Sequence name="wrong" from={3116} durationInFrames={305}><Wrong/></Sequence>
<Sequence name="review" from={3421} durationInFrames={286}><Review/></Sequence>
<Sequence name="access" from={3707} durationInFrames={304}><Access/></Sequence>
<Sequence name="security" from={4011} durationInFrames={386}><Security/></Sequence>
<Sequence name="trial" from={4397} durationInFrames={343}><Trial/></Sequence>
<Sequence name="availability" from={4740} durationInFrames={311}><Availability/></Sequence>
<Sequence name="payoff" from={5051} durationInFrames={405}><Payoff/></Sequence>
<Sequence name="end" from={5456} durationInFrames={600}><End/></Sequence>
</>;
const Root=()=> <>
<Composition id="WeeklyAiMuse" component={Master} width={1920} height={1080} fps={30} durationInFrames={6056}/>
<Still id="MuseThumbnail" component={Thumbnail} width={1280} height={720}/>
<Folder name="Shots">
<Composition id="Hook" component={Hook} width={1920} height={1080} fps={30} durationInFrames={226}/>
<Composition id="Stakes" component={Stakes} width={1920} height={1080} fps={30} durationInFrames={265}/>
<Composition id="News" component={News} width={1920} height={1080} fps={30} durationInFrames={307}/>
<Composition id="Busy" component={Busy} width={1920} height={1080} fps={30} durationInFrames={405}/>
<Composition id="Chatbot" component={Chatbot} width={1920} height={1080} fps={30} durationInFrames={264}/>
<Composition id="Agent" component={Agent} width={1920} height={1080} fps={30} durationInFrames={351}/>
<Composition id="Scenario" component={Scenario} width={1920} height={1080} fps={30} durationInFrames={332}/>
<Composition id="Context" component={Context} width={1920} height={1080} fps={30} durationInFrames={304}/>
<Composition id="Draft" component={Draft} width={1920} height={1080} fps={30} durationInFrames={323}/>
<Composition id="Approval" component={Approval} width={1920} height={1080} fps={30} durationInFrames={339}/>
<Composition id="Wrong" component={Wrong} width={1920} height={1080} fps={30} durationInFrames={305}/>
<Composition id="Review" component={Review} width={1920} height={1080} fps={30} durationInFrames={286}/>
<Composition id="Access" component={Access} width={1920} height={1080} fps={30} durationInFrames={304}/>
<Composition id="Security" component={Security} width={1920} height={1080} fps={30} durationInFrames={386}/>
<Composition id="Trial" component={Trial} width={1920} height={1080} fps={30} durationInFrames={343}/>
<Composition id="Availability" component={Availability} width={1920} height={1080} fps={30} durationInFrames={311}/>
<Composition id="Payoff" component={Payoff} width={1920} height={1080} fps={30} durationInFrames={405}/>
<Composition id="End" component={End} width={1920} height={1080} fps={30} durationInFrames={600}/>
</Folder></>;
registerRoot(Root);
