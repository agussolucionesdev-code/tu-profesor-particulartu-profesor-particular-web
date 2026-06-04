import { MessageCircle } from 'lucide-react';
import Reveal from './motion/Reveal.jsx';
import RevealGroup from './motion/RevealGroup.jsx';
import { whatsappMessages, whatsappUrl } from '../data/siteData.js';

export default function Testimonials() {
  return (
    <section className="testi-bg" id="testimonios">
      <div className="container">
        <Reveal style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto 44px' }}>
          <div className="section-label">Testimonios</div>
          <h2 className="section-title">
            7 años de boca en boca.
            <br />
            Ahora lo hacemos en serio.
          </h2>
          <p className="section-desc" style={{ fontSize: '16px', margin: '0 auto' }}>
            Toda mi vida conseguí alumnos por recomendación. Nunca tuve redes ni publicidad. Estos son algunos de esos testimonios.
          </p>
        </Reveal>
        <RevealGroup className="testi-grid" variant="scale" stagger={0.1}>
          <div className="testi-card">
            <div className="testi-q">"</div>
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">Reprobé Matemática dos veces antes de conocer a Agustín. En dos meses aprobé con 8. Tiene una paciencia que no vi en ningún otro profe.</p>
            <div className="testi-author">
              <div className="testi-avatar">M</div>
              <div className="testi-info">
                <strong>Marcos R.</strong>
                <span>Universitario · Ingeniería</span>
              </div>
            </div>
          </div>
          <div className="testi-card">
            <div className="testi-q">"</div>
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">Mi hija estaba muy atrasada en Química del técnico. Agustín fue al ritmo de ella, sin presionarla. Cerró el año con todo aprobado. Le decimos “el profe de la familia”.</p>
            <div className="testi-author">
              <div className="testi-avatar">S</div>
              <div className="testi-info">
                <strong>Silvia P.</strong>
                <span>Mamá de alumna · Sec. Técnico</span>
              </div>
            </div>
          </div>
          <div className="testi-card testi-cta">
            <strong>¿Tuviste clases conmigo?</strong>
            <p>Si fui tu profe en algún momento, me gustaría mucho que puedas dejar tu experiencia. Me ayuda un montón a seguir creciendo.</p>
            <a className="btn btn-primary" href={whatsappUrl(whatsappMessages.testimonial)} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" size={18} /> Dejar mi testimonio
            </a>
          </div>
        </RevealGroup>
        <p style={{ fontSize: '11px', color: 'var(--muted)', textAlign: 'center', marginTop: '20px', fontStyle: 'italic' }}>
          * Testimonios representativos de experiencias reales. Se actualizarán con autorización.
        </p>
      </div>
    </section>
  );
}
