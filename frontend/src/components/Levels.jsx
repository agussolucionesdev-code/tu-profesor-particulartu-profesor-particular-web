import Reveal from './motion/Reveal.jsx';
import RevealGroup from './motion/RevealGroup.jsx';
import { levels } from '../data/siteData.js';

export default function Levels() {
  return (
    <section id="niveles">
      <div className="container">
        <div className="niveles-inner">
          <Reveal variant="left">
            <div className="section-label">{levels.label}</div>
            <h2 className="section-title">
              {levels.titleLine1}
              <br />
              {levels.titleLine2}
            </h2>
            <p className="section-desc" style={{ fontSize: 16 }}>
              {levels.description}
            </p>
            <RevealGroup className="niveles-chips" variant="scale" stagger={0.06}>
              {levels.chips.map((chip) => (
                <span className="nivel-chip" key={chip}>{chip}</span>
              ))}
            </RevealGroup>
          </Reveal>
          <Reveal as="div" className="niveles-visual" variant="right">
            <h3>{levels.visualTitle}</h3>
            <p style={{ fontSize: 14, opacity: 0.7 }}>{levels.visualSubtitle}</p>
            <RevealGroup as="ul" className="niveles-list" stagger={0.08}>
              {levels.supportItems.map((item) => (
                <li key={item}>
                  <span className="check">✓</span>
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
