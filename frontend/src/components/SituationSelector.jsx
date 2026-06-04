import Reveal from './motion/Reveal.jsx';
import { situationSelector } from '../data/siteData.js';

export default function SituationSelector() {
  return (
    <section className="selector-bg" id="selector">
      <div className="container">
        <Reveal style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 0' }}>
          <div className="section-label" style={{ color: 'var(--green)' }}>{situationSelector.label}</div>
          <h2 className="section-title" style={{ color: '#fff' }}>
            {situationSelector.titleLine1}
            <br />
            {situationSelector.titleLine2}
          </h2>
          <p className="section-desc" style={{ color: 'rgba(255,255,255,.6)' }}>
            {situationSelector.description}
          </p>
        </Reveal>
        <Reveal className="selector-box" variant="scale">
          <div className="sel-label">{situationSelector.levelQuestion}</div>
          <div className="sel-row">
            {situationSelector.levels.map((level) => (
              <button className="sel-btn sel-nivel" data-val={level.value} key={level.value}>
                {level.label}
              </button>
            ))}
          </div>
          <div id="materia-row">
            <div className="sel-label">{situationSelector.subjectQuestion}</div>
            <div className="sel-row">
              {situationSelector.subjects.map((subject) => (
                <button className="sel-btn sel-materia" data-val={subject.value} key={subject.value}>
                  {subject.label}
                </button>
              ))}
            </div>
          </div>
          <div id="selector-result">
            <div className="selector-msg-box">
              <p id="selector-msg"></p>
              <a className="btn btn-wa" href="#" id="selector-wa" target="_blank" rel="noreferrer">
                💬 Hablemos por WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
