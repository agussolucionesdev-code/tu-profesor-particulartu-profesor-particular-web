import { Sparkles } from 'lucide-react';
import Reveal from './motion/Reveal.jsx';
import RevealGroup from './motion/RevealGroup.jsx';
import { levels } from '../data/siteData.js';

export default function Levels() {
  return (
    <section className="levels-section" id="niveles">
      <div className="container">
        <div className="niveles-inner premium-split-card">
          <Reveal variant="left">
            <div className="section-label">{levels.label}</div>
            <h2 className="section-title">
              {levels.titleLine1}
              <br />
              {levels.titleLine2}
            </h2>
            <p className="section-desc levels-copy">{levels.description}</p>
            <RevealGroup className="niveles-chips" variant="scale" stagger={0.06}>
              {levels.chips.map((chip) => (
                <span className="nivel-chip" key={chip}>{chip}</span>
              ))}
            </RevealGroup>
          </Reveal>
          <Reveal as="div" className="niveles-visual" variant="right">
            <div className="niveles-visual-kicker"><Sparkles aria-hidden="true" size={14} /> {levels.visualTitle}</div>
            <h3>{levels.visualSubtitle}</h3>
            <RevealGroup as="ul" className="niveles-list" stagger={0.08}>
              {levels.supportItems.map((item) => (
                <li key={item}>
                  <span className="check"></span>
                  {item}
                </li>
              ))}
            </RevealGroup>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

