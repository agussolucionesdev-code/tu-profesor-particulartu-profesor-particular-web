import { MessageCircle } from 'lucide-react';
import Reveal from './motion/Reveal.jsx';
import { situationSelector } from '../data/siteData.js';

export default function SituationSelector() {
  return (
    <section className="selector-bg" id="selector">
      <div className="container">
        <Reveal style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 0' }}>
          <div className="section-label" style={{ color: 'var(--green)' }}>{situationSelector.label}</div>
          <h2 className="section-title" style={{ color: '#fff' }}>
            {situationSelector.titleLine1}
            <br />
            {situationSelector.titleLine2}
          </h2>
          <p className="section-desc" style={{ color: 'rgba(255,255,255,.68)' }}>
            {situationSelector.description}
          </p>
        </Reveal>
        <Reveal className="selector-box" variant="scale">
          <div className="sel-label">{situationSelector.levelQuestion}</div>
          <div aria-label={situationSelector.levelQuestion} className="sel-row" role="group">
            {situationSelector.levels.map((level) => (
              <button aria-pressed="false" className="sel-btn sel-nivel" data-val={level.value} key={level.value} type="button">
                {level.label}
              </button>
            ))}
          </div>
          <div id="materia-row">
            <div className="sel-label">{situationSelector.subjectQuestion}</div>
            <div aria-label={situationSelector.subjectQuestion} className="sel-row" role="group">
              {situationSelector.subjects.map((subject) => (
                <button aria-pressed="false" className="sel-btn sel-materia" data-val={subject.value} key={subject.value} type="button">
                  {subject.label}
                </button>
              ))}
            </div>
          </div>
          <div aria-live="polite" id="selector-result">
            <div className="selector-msg-box">
              <p id="selector-msg"></p>
              <a className="btn btn-wa" href="#" id="selector-wa" target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" size={18} />
                {'Hablemos por WhatsApp'}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
