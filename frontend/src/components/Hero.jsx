import { useRef } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { brand, images, whatsappMessages, whatsappUrl } from '../data/siteData.js';
import { useHeroMotion } from '../hooks/useHeroMotion.js';

const rotatingSubjects = ['Matemática?', 'Física?', 'Química?', 'Inglés?', 'los exámenes?'];

const heroChips = [
  { icon: '🎓', label: 'Docente habilitado' },
  { icon: '🧪', label: 'Técnico Químico' },
  { icon: '📚', label: 'Temperley + Virtual' },
  { icon: '⏱️', label: '+7 años' },
];

const floatingBadges = [
  { className: 'hfb-top', tone: 'green', value: '+7', label: 'años de experiencia' },
  { className: 'hfb-mid', tone: 'navy', value: "45'", label: '1ª clase gratis' },
  { className: 'hfb-bot', tone: 'green', value: '6', label: 'niveles educativos' },
];

export default function Hero() {
  const heroRef = useRef(null);
  useHeroMotion(heroRef);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="hero-shape hero-shape-1"></div>
      <div className="hero-shape hero-shape-2"></div>
      <div className="hero-shape hero-shape-3"></div>

      <div className="container">
        <div className="hero-inner">
          <div className="hero-text-col" id="heroText">
            <div className="hero-ribbon" data-hero-intro>
              <span className="dot"></span>
              1ª clase de 45 min · Completamente gratis
            </div>

            <h1 data-hero-intro>
              ¿Te trabás con
              <br />
              <span className="hero-rotate-wrap" id="rotateWrap">
                {rotatingSubjects.map((subject, index) => (
                  <span className={`hero-rotate-word${index === 0 ? ' active' : ''}`} key={subject}>
                    {subject}
                  </span>
                ))}
              </span>
              <span className="hero-rotate-mobile">los exámenes?</span>
              <br />
              <em>Yo te lo resuelvo.</em>
            </h1>

            <p className="hero-sub2" data-hero-intro>
              Soy <strong>Agustín</strong>, docente habilitado con <strong>más de 7 años</strong> ayudando a estudiantes
              que creían que no podían — y pudieron. No te vendo milagros: te ofrezco{' '}
              <strong>tiempo, claridad y compromiso real.</strong>
            </p>

            <div className="hero-trust" data-hero-intro>
              {heroChips.map((chip) => (
                <span className="hero-chip" data-hero-chip key={chip.label}>
                  <span className="chip-icon">{chip.icon}</span> {chip.label}
                </span>
              ))}
            </div>

            <div className="hero-ctas2" data-hero-intro>
              <a className="btn btn-wa hero-cta-main" href={whatsappUrl(whatsappMessages.firstClass)} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" size={18} />
                Quiero mi clase gratis
              </a>
              <a className="btn btn-outline hero-cta-secondary" href="#metodo">
                Conocé mi método
                <ArrowRight aria-hidden="true" size={16} />
              </a>
            </div>
          </div>

          <div className="hero-photo-col" id="heroPhoto">
            <div className="hero-ring hero-ring-1"></div>
            <div className="hero-ring hero-ring-2"></div>
            <img alt={brand.owner} className="hero-photo-v2" data-hero-photo src={images.hero} />
            <img alt="Agustín" className="hero-photo2" data-hero-photo-secondary src={images.heroSecondary} />

            {floatingBadges.map((badge) => (
              <div className={`hero-float-badge ${badge.className}`} data-hero-badge key={badge.className}>
                <div className={`hfb-num ${badge.tone}`}>{badge.value}</div>
                <div className="hfb-label">{badge.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-scroll" data-hero-scroll>
        <span>Scroll</span>
        <div className="hero-scroll-arrow"></div>
      </div>
    </section>
  );
}
