import { Camera, Mail, MapPin, MessageCircle } from 'lucide-react';
import Reveal from './motion/Reveal.jsx';
import RevealGroup from './motion/RevealGroup.jsx';
import { brand, contact, images, whatsappMessages, whatsappUrl } from '../data/siteData.js';

const contactPills = [
  { href: `https://wa.me/${contact.whatsappNumber}`, icon: MessageCircle, label: `${contact.whatsappDisplay} (WhatsApp)`, external: true },
  { href: `mailto:${contact.email}`, icon: Mail, label: contact.email },
  { href: contact.instagram, icon: Camera, label: contact.instagramHandle, external: true },
  { icon: MapPin, label: contact.location, static: true },
];

export default function LetterSection() {
  return (
    <section className="carta" id="carta">
      <div className="container">
        <div className="carta-layout">
          <Reveal as="div" className="carta-photo-col" variant="left">
            <div className="carta-photo-frame">
              <img alt={`${brand.owner} en una imagen que representa el trabajo presencial en clases particulares`} className="carta-photo-main" decoding="async" height="1296" loading="lazy" src={images.presencial} width="970" />
              <div className="carta-photo-quote"><span className="green">&quot;</span>{' Enseñar bien también es cuidar la emoción con la que alguien aprende.'}</div>
            </div>
            <RevealGroup className="carta-contact-pills" stagger={0.08} variant="scale">
              {contactPills.map((pill) => {
                const Icon = pill.icon;
                if (pill.static) return <div className="carta-pill" key={pill.label} style={{ cursor: 'default' }}><div className="cpill-icon"><Icon aria-hidden="true" size={16} /></div><div className="cpill-label">{pill.label}</div></div>;
                return <a className="carta-pill" href={pill.href} key={pill.label} rel={pill.external ? 'noreferrer' : undefined} target={pill.external ? '_blank' : undefined}><div className="cpill-icon"><Icon aria-hidden="true" size={16} /></div><div className="cpill-label">{pill.label}</div><span className="cpill-arrow">&rarr;</span></a>;
              })}
            </RevealGroup>
          </Reveal>
          <div className="carta-text-col">
            <Reveal className="carta-eyebrow">{'La persona detrás de la marca'}</Reveal>
            <Reveal as="h2" className="carta-headline" delay={0.04}>{'Hola, soy Agustín.'}</Reveal>
            <Reveal as="span" className="carta-tagline" delay={0.08}>{'Mi trabajo no es “dar clases”. Es ayudarte a recuperar claridad, criterio y confianza.'}</Reveal>
            <RevealGroup className="carta-paras" stagger={0.1}>
              <p className="carta-para">{'Empecé a enseñar antes de imaginar que esto se iba a volver una marca personal. Surgió porque me daba cuenta de que podía explicar de una forma que al otro le hacía sentido. Con el tiempo entendí que no era solo explicar bien: era también saber escuchar, leer emociones, detectar trabas y acompañar procesos.'}</p>
              <p className="carta-para">{'Hoy soy '}<strong>{'docente habilitado'}</strong>{', '}<strong>{'Técnico Químico'}</strong>{' y estudiante avanzado de la '}<strong>{'Licenciatura en Ciencias de la Educación'}</strong>{'. Esa mezcla entre formación pedagógica, base técnica y sensibilidad humana es lo que más define mi trabajo.'}</p>
              <div className="carta-highlight" style={{ background: 'rgba(28,53,88,.04)', borderLeftColor: 'var(--navy)' }}><span className="hand" style={{ color: 'var(--navy)' }}>{'Algo importante para mí:'}</span>{'No prometo milagros ni aprobados garantizados. Prometo presencia, honestidad, método y mucho trabajo serio para que entiendas de verdad.'}</div>
              <p className="carta-para">{'Participé como ponente en el VIII Congreso de Educación y Psicopedagogía de la UAI con una idea que me representa mucho: '}<em>{'gozar de aprender'}</em>{'. Porque estudiar mejor no debería sentirse como castigo permanente. Debería sentirse como un proceso donde volvés a encontrar sentido.'}</p>
              <div className="carta-stats"><div className="carta-stat-box"><div className="carta-stat-num"><span className="green">+200</span></div><div className="carta-stat-lbl">{'Estudiantes acompañados'}</div></div><div className="carta-stat-box"><div className="carta-stat-num">9.71</div><div className="carta-stat-lbl">{'Promedio actual en UAI'}</div></div><div className="carta-stat-box"><div className="carta-stat-num">2024</div><div className="carta-stat-lbl">{'Ponencia en congreso UAI'}</div></div></div>
              <p className="carta-para">{'Si llegaste hasta acá, probablemente no estés buscando una clase más. Estás buscando alguien que te ayude a ordenar lo que hoy te pesa. Si sentís que puedo ser esa persona, escribime. La primera clase es gratis y sirve justamente para eso: ver si este acompañamiento es para vos.'}</p>
            </RevealGroup>
            <Reveal className="carta-firma-v2" delay={0.12}><img alt="" aria-hidden="true" className="carta-firma-avatar" decoding="async" height="1296" loading="lazy" src={images.hero} width="970" /><div className="carta-firma-info"><div className="carta-firma-name">{brand.owner}</div><div className="carta-firma-role">{'Tu Profesor Particular · Docente habilitado · Técnico Químico'}</div></div></Reveal>
            <Reveal className="carta-firma-cta" delay={0.16}><a className="btn btn-wa" href={whatsappUrl(whatsappMessages.readPage)} rel="noreferrer" style={{ fontSize: '16px', padding: '14px 28px' }} target="_blank"><MessageCircle aria-hidden="true" size={18} />{'Quiero mi clase gratis — escribime'}</a></Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
