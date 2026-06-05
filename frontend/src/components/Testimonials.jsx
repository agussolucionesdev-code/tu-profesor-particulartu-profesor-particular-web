import { MessageCircle } from 'lucide-react';
import Reveal from './motion/Reveal.jsx';
import RevealGroup from './motion/RevealGroup.jsx';
import { testimonialItems, whatsappMessages, whatsappUrl } from '../data/siteData.js';

export default function Testimonials() {
  return (
    <section className="testi-bg" id="testimonios">
      <div className="container">
        <Reveal className="testi-heading" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 44px' }}>
          <div className="section-label">{'Prueba social'}</div>
          <h2 className="section-title">{'La confianza se gana'}<br />{'clase a clase.'}</h2>
          <p className="section-desc" style={{ fontSize: '16px', margin: '0 auto' }}>{'No crecí por promesas lindas. Crecí acompañando procesos reales, familias reales y estudiantes que necesitaban claridad, paciencia y presencia de verdad.'}</p>
        </Reveal>
        <RevealGroup className="testi-grid" variant="scale" stagger={0.1}>
          {testimonialItems.map((item) => <article className="testi-card" key={item.name}><div className="testi-q">“</div><div className="testi-stars">★★★★★</div><p className="testi-text">{item.quote}</p><div className="testi-author"><div className="testi-avatar">{item.avatar}</div><div className="testi-info"><strong>{item.name}</strong><span>{item.role}</span></div></div></article>)}
          <article className="testi-card testi-cta premium-cta-card"><strong>{'¿Tuviste clases conmigo?'}</strong><p>{'Si compartimos un proceso, me ayudaría muchísimo que me dejes tu experiencia. Cada recomendación sostiene este proyecto.'}</p><a className="btn btn-wa" href={whatsappUrl(whatsappMessages.testimonial)} rel="noreferrer" target="_blank"><MessageCircle aria-hidden="true" size={18} />{'Dejar mi testimonio'}</a></article>
        </RevealGroup>
        <p style={{ fontSize: '11px', color: 'var(--muted)', textAlign: 'center', marginTop: '20px', fontStyle: 'italic' }}>{'* Testimonios representativos de experiencias reales. Se ampliarán con autorización de cada familia o estudiante.'}</p>
      </div>
    </section>
  );
}
