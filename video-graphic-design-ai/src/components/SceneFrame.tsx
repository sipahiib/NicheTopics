import {AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import type {SceneContent} from '../types';

const Palette: React.FC<{active?: number}> = ({active = 2}) => (
  <div className="palette">
    {['#ff4d6d', '#ffca3a', '#8ac926', '#36c9c6', '#7b61ff'].map((color, i) => (
      <div key={color} style={{backgroundColor: color, scale: i === active ? 1.22 : 1}} />
    ))}
  </div>
);

const DesignBoard: React.FC<{variant: number; muted?: boolean}> = ({variant, muted}) => (
  <div className={`design-board ${muted ? 'muted' : ''}`}>
    <div className="board-grid" />
    <div className="poster-shape" style={{rotate: `${-8 + variant * 4}deg`}} />
    <div className="poster-circle" style={{translate: `${variant * 22}px ${variant * -10}px`}} />
    <strong>{['NOVA', 'SHIFT', 'HUMAN', 'SIGNAL'][variant % 4]}</strong>
    <small>DESIGN / {String(variant + 1).padStart(2, '0')}</small>
  </div>
);

const Visual: React.FC<{type: SceneContent['visual']}> = ({type}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const pulse = interpolate(frame % (2 * fps), [0, fps, 2 * fps], [0.96, 1.03, 0.96], {easing: Easing.inOut(Easing.quad)});

  if (type === 'hook') return (
    <div className="visual hook-visual">
      <div className="prompt-box"><span>AI PROMPT</span><b>“Minimal future-facing logo”</b><i /></div>
      <div className="board-stack">
        {[0, 1, 2].map((v) => <DesignBoard key={v} variant={v} />)}
      </div>
      <div className="price-tag">$5 <small>/ 40 concepts</small></div>
    </div>
  );

  if (type === 'speed') return (
    <div className="visual speed-visual">
      <div className="speedometer" style={{scale: pulse}}><b>30</b><span>SECONDS</span></div>
      <div className="task-list">
        {['REMOVE BACKGROUND', 'RESIZE × 10', 'GENERATE VARIANTS', 'BUILD MOCKUPS'].map((task, i) => (
          <div key={task} style={{opacity: interpolate(frame, [i * 15, i * 15 + 10], [0.2, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'})}}>
            <span>✓</span>{task}
          </div>
        ))}
      </div>
    </div>
  );

  if (type === 'risk') return (
    <div className="visual risk-visual">
      <div className="ladder">
        {['CREATIVE DIRECTOR', 'SENIOR DESIGNER', 'MIDWEIGHT', 'JUNIOR', 'PRODUCTION'].map((x, i) => (
          <div key={x} className={i > 2 ? 'at-risk' : ''}><span>{x}</span><b>{i > 2 ? 'AUTOMATING' : 'CHANGING'}</b></div>
        ))}
      </div>
    </div>
  );

  if (type === 'data') return (
    <div className="visual data-visual">
      <div className="data-card"><span>WEF · 2025–2030</span><b>↘</b><strong>Graphic design enters the decline list</strong></div>
      <div className="data-card teal"><span>ILO · 2025</span><b>1 in 4</b><strong>workers have some GenAI exposure</strong></div>
      <div className="source-note">EXPOSURE IS NOT THE SAME AS EXTINCTION</div>
    </div>
  );

  if (type === 'human') return (
    <div className="visual human-visual">
      <div className="venn machine"><b>MACHINE</b><span>Speed<br />Scale<br />Variation</span></div>
      <div className="venn person"><b>HUMAN</b><span>Context<br />Taste<br />Trust</span></div>
      <div className="venn-core">GREAT<br />DESIGN</div>
    </div>
  );

  if (type === 'future') return (
    <div className="visual future-visual">
      <div className="workflow">
        {['BRIEF', 'GENERATE', 'CURATE', 'REFINE', 'OWN'].map((x, i) => (
          <div key={x} style={{translate: `0 ${Math.sin(frame / 18 + i) * 8}px`}}><b>0{i + 1}</b><span>{x}</span></div>
        ))}
      </div>
      <Palette active={Math.floor(frame / 20) % 5} />
    </div>
  );

  return (
    <div className="visual outro-visual">
      <div className="verdict no">DESIGN<br /><b>ISN'T DEAD</b></div>
      <div className="verdict yes">AVERAGE<br /><b>IS AUTOMATED</b></div>
      <div className="question">DESIGNER · AI · BOTH?</div>
    </div>
  );
};

export const SceneFrame: React.FC<{scene: SceneContent; index: number}> = ({scene, index}) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill className={`scene scene-${scene.visual}`}>
      <div className="noise" />
      <div className="orb orb-a" style={{translate: `${Math.sin(frame / 40) * 50}px ${Math.cos(frame / 55) * 30}px`}} />
      <div className="orb orb-b" style={{translate: `${Math.cos(frame / 46) * 45}px ${Math.sin(frame / 38) * 35}px`}} />
      <div className="scene-count">0{index + 1} / 07</div>
      <div className="copy-block">
        <div className="eyebrow">{scene.label}</div>
        <h1 style={{opacity: interpolate(frame, [0, 12], [0, 1], {extrapolateRight: 'clamp'}), translate: `0 ${interpolate(frame, [0, 18], [50, 0], {extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic)})}px`}}>
          {scene.headline}
        </h1>
        <p>{scene.subhead}</p>
        <div className="rule" style={{width: `${interpolate(frame, [5, 28], [0, 100], {extrapolateRight: 'clamp'})}%`}} />
      </div>
      <Visual type={scene.visual} />
      <div className="scene-meta">AI × WORK · SIGNAL {String(index + 1).padStart(2, '0')}</div>
    </AbsoluteFill>
  );
};
