import Reveal from './motion/Reveal.jsx';
import RevealGroup from './motion/RevealGroup.jsx';
import { faqs } from '../data/siteData.js';

export default function FAQ() {
  return (
    <section id="faq">
      <div className="container">
        <Reveal style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 16px' }}>
          <div className="section-label">Preguntas frecuentes</div>
          <h2 className="section-title">
            Lo que la gente
            <br />
            suele preguntarme.
          </h2>
        </Reveal>
        <RevealGroup className="faq-list" stagger={0.08}>
          {faqs.map((faq) => (
            <div className="faq-item" key={faq.question}>
              <div className="faq-q">
                {faq.question}
                <span className="arrow">+</span>
              </div>
              <div className="faq-a">
                <div className="faq-a-inner">{faq.answer}</div>
              </div>
            </div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
