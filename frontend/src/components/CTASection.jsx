import { Mail, MessageCircle, Sparkles } from 'lucide-react';
import ContactForm from './ContactForm.jsx';
import Reveal from './motion/Reveal.jsx';
import RevealGroup from './motion/RevealGroup.jsx';
import { contact, contactClosing, whatsappUrl } from '../data/siteData.js';

export default function CTASection() {
  return (
    <section className="cta-section" id="contacto">
      <div className="container cta-inner cta-layout">
        <Reveal className="cta-copy" variant="left">
          <div className="section-label" style={{ color: 'var(--green)' }}>{contactClosing.label}</div>
          <h2>{contactClosing.title}</h2>
          <span className="cta-handwrite">{contactClosing.subtitle}</span>
          <p className="cta-support-copy">{contactClosing.support}</p>
          <RevealGroup className="cta-buttons" variant="scale" stagger={0.08}>
            <a className="btn btn-wa btn-cta-pulse" href={whatsappUrl()} style={{ fontSize: 17, padding: '15px 32px' }} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" size={18} /> WhatsApp: {contact.whatsappDisplay}
            </a>
            <a className="btn btn-white" href={`mailto:${contact.email}`}>
              <Mail aria-hidden="true" size={18} /> Enviar email
            </a>
            <a className="btn btn-outline btn-ghost-cta" href={contact.instagram} target="_blank" rel="noreferrer">
              <Sparkles aria-hidden="true" size={18} /> Ver Instagram
            </a>
          </RevealGroup>
        </Reveal>
        <Reveal as="div" className="cta-form-wrap" variant="right">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
