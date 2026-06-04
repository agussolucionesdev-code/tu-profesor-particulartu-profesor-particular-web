import { Camera, Mail, MapPin, MessageCircle } from 'lucide-react';
import Reveal from './motion/Reveal.jsx';
import RevealGroup from './motion/RevealGroup.jsx';
import { brand, contact, images, whatsappMessages, whatsappUrl } from '../data/siteData.js';

const contactPills = [
  {
    href: `https://wa.me/${contact.whatsappNumber}`,
    icon: MessageCircle,
    label: `${contact.whatsappDisplay} (WhatsApp)`,
    external: true,
  },
  {
    href: `mailto:${contact.email}`,
    icon: Mail,
    label: contact.email,
  },
  {
    href: contact.instagram,
    icon: Camera,
    label: contact.instagramHandle,
    external: true,
  },
  {
    icon: MapPin,
    label: contact.location,
    static: true,
  },
];

export default function LetterSection() {
  return (
    <section className="carta" id="carta">
      <div className="container">
        <div className="carta-layout">
          <Reveal as="div" className="carta-photo-col" variant="left">
            <div className="carta-photo-frame">
              <img alt={brand.owner} className="carta-photo-main" src={images.presencial} />
              <div className="carta-photo-quote">
                <span className="green">&quot;</span>
                No prometo milagros. Prometo presencia, paciencia y honestidad.
              </div>
            </div>

            <RevealGroup className="carta-contact-pills" stagger={0.08} variant="scale">
              {contactPills.map((pill) => {
                const Icon = pill.icon;

                if (pill.static) {
                  return (
                    <div className="carta-pill" key={pill.label} style={{ cursor: 'default' }}>
                      <div className="cpill-icon">
                        <Icon aria-hidden="true" size={16} />
                      </div>
                      <div className="cpill-label">{pill.label}</div>
                    </div>
                  );
                }

                return (
                  <a
                    className="carta-pill"
                    href={pill.href}
                    key={pill.label}
                    rel={pill.external ? 'noreferrer' : undefined}
                    target={pill.external ? '_blank' : undefined}
                  >
                    <div className="cpill-icon">
                      <Icon aria-hidden="true" size={16} />
                    </div>
                    <div className="cpill-label">{pill.label}</div>
                    <span className="cpill-arrow">→</span>
                  </a>
                );
              })}
            </RevealGroup>
          </Reveal>

          <div className="carta-text-col">
            <Reveal className="carta-eyebrow">Quién está detrás de esto</Reveal>
            <Reveal as="h2" className="carta-headline" delay={0.04}>
              Hola, soy Agustín. 👋
            </Reveal>
            <Reveal as="span" className="carta-tagline" delay={0.08}>
              Sin humo, sin promesas vacías. Solo esto:
            </Reveal>

            <RevealGroup className="carta-paras" stagger={0.1}>
              <p className="carta-para">
                Empecé a dar clases cuando todavía era estudiante secundario. No fue un plan — fue algo que surgió
                naturalmente porque me di cuenta de que podía explicar las cosas de una forma que la gente entendía.{' '}
                <strong>Eso es todo. Sin método mágico, sin fórmula secreta.</strong>
              </p>

              <p className="carta-para">
                Llevo más de 7 años haciendo esto. Trabajé con chicos de primaria, del técnico, del CENS, de la
                universidad. Con adultos que retomaron el secundario después de años. Con estudiantes que reprobaron
                varias veces antes de llegar a mí. <strong>No te prometo que vas a aprobar.</strong> Te prometo que voy a
                hacer todo lo que está a mi alcance para que entiendas.
              </p>

              <div className="carta-highlight" style={{ background: 'rgba(28,53,88,.04)', borderLeftColor: 'var(--navy)' }}>
                <span className="hand" style={{ color: 'var(--navy)' }}>
                  Algo que me parece importante aclarar:
                </span>
                No soy una academia. No tengo franquicia ni “sistema probado”. Soy una persona que estudió mucho,
                enseña hace años y se toma en serio cada alumno. Si buscás eso, estamos en el mismo camino.
              </div>

              <p className="carta-para">
                Estudié la Licenciatura en Ciencias de la Educación, tengo habilitación docente y soy Técnico Químico.
                Todo eso lo pongo al servicio de una sola cosa: <em>que vos entiendas de verdad</em>, no que apruebes de
                casualidad y te olvides todo a la semana.
              </p>

              <div className="carta-stats">
                <div className="carta-stat-box">
                  <div className="carta-stat-num">
                    <span className="green">+7</span>
                  </div>
                  <div className="carta-stat-lbl">Años dando clases</div>
                </div>
                <div className="carta-stat-box">
                  <div className="carta-stat-num">6</div>
                  <div className="carta-stat-lbl">Niveles educativos</div>
                </div>
                <div className="carta-stat-box">
                  <div className="carta-stat-num">4</div>
                  <div className="carta-stat-lbl">Materias principales</div>
                </div>
              </div>

              <p className="carta-para">
                Si llegaste hasta acá, algo te trajo. Puede ser una materia que no entra, un examen que se acerca, o
                simplemente las ganas de arrancar bien. Escribime y charlamos. <strong>La primera clase de 45 minutos es
                gratis</strong> — para conocernos y ver si somos el equipo correcto.
              </p>
            </RevealGroup>

            <Reveal className="carta-firma-v2" delay={0.12}>
              <img alt="Agustín" className="carta-firma-avatar" src={images.hero} />
              <div className="carta-firma-info">
                <div className="carta-firma-name">{brand.owner}</div>
                <div className="carta-firma-role">Tu Profesor Particular · Docente habilitado · Técnico Químico</div>
              </div>
            </Reveal>

            <Reveal className="carta-firma-cta" delay={0.16}>
              <a
                className="btn btn-wa"
                href={whatsappUrl(whatsappMessages.readPage)}
                rel="noreferrer"
                style={{ fontSize: '16px', padding: '14px 28px' }}
                target="_blank"
              >
                <MessageCircle aria-hidden="true" size={18} />
                Quiero mi clase gratis — escribime
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

