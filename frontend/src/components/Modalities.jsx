import { MessageCircle } from 'lucide-react';
import Reveal from './motion/Reveal.jsx';
import RevealGroup from './motion/RevealGroup.jsx';
import { modalityAxes, modalityPanels, whatsappMessages, whatsappUrl } from '../data/siteData.js';

function ModalityAxis({ axis }) {
  return (
    <div>
      <div className="mod-axis-label">{axis.label}</div>
      <div className="mod-toggle">
        {axis.options.map((option) => (
          <button
            className={`mod-toggle-btn${option.active ? ' active' : ''}`}
            data-axis={axis.axis}
            data-val={option.value}
            key={option.value}
            type="button"
          >
            {option.icon} {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function ModalityPanel({ panel }) {
  return (
    <div className={`mod-panel${panel.active ? ' active' : ''}`} id={panel.id}>
      <img alt={panel.imageAlt} className="mod-panel-img" src={panel.image} />
      <div className="mod-panel-content">
        <div className="mod-panel-tag">{panel.tag}</div>
        <h3 className="mod-panel-title">
          {panel.title}
          <br />
          <em>{panel.emphasis}</em>
        </h3>
        <p className="mod-panel-desc">{panel.description}</p>
        <ul className="mod-panel-features">
          {panel.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <div className="mod-panel-cta">
          <a className="btn btn-wa" href={whatsappUrl(whatsappMessages[panel.messageKey])} rel="noreferrer" target="_blank">
            <MessageCircle aria-hidden="true" size={18} />
            Quiero esta modalidad
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Modalities() {
  return (
    <section className="mod-bg" id="modalidades">
      <div className="container">
        <Reveal className="mod-heading">
          <div className="section-label">Modalidades</div>
          <h2>
            Adaptado a tu vida.
            <br />
            No al revés.
          </h2>
          <p>Elegí cómo y dónde querés estudiar. Cada combinación tiene la misma calidad y el mismo compromiso.</p>
        </Reveal>

        <RevealGroup className="mod-axes" stagger={0.08}>
          {modalityAxes.map((axis) => (
            <ModalityAxis axis={axis} key={axis.axis} />
          ))}
        </RevealGroup>

        <Reveal className="mod-combo-display" delay={0.04}>
          <span className="mod-combo-text" id="combo-label">
            Clase <span id="combo-modo">individual</span> y <span id="combo-lugar">presencial</span>
          </span>
        </Reveal>

        <Reveal className="mod-result" delay={0.08}>
          {modalityPanels.map((panel) => (
            <ModalityPanel key={panel.id} panel={panel} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
