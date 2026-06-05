import { useRef } from 'react';
import {
  ArrowRight,
  Award,
  BookOpenCheck,
  BrainCircuit,
  CheckCircle2,
  Clock3,
  Compass,
  GraduationCap,
  MapPinned,
  MessageCircle,
  Sparkles,
  Telescope,
} from 'lucide-react';
import { brand, heroHighlights, images, whatsappMessages, whatsappUrl } from '../data/siteData.js';
import { useHeroMotion } from '../hooks/useHeroMotion.js';

const heroChips = [
  { icon: GraduationCap, label: 'Docente habilitado' },
  { icon: BookOpenCheck, label: 'Ciencias de la Educaci\u00f3n' },
  { icon: BrainCircuit, label: 'M\u00e9todo propio' },
  { icon: MapPinned, label: 'Temperley + virtual' },
];

const heroMetrics = [
  { value: '+200', label: 'estudiantes acompa\u00f1ados' },
  { value: '8+', label: 'a\u00f1os de experiencia' },
  { value: '9.71', label: 'promedio en Educaci\u00f3n' },
];

const learningPath = ['Diagn\u00f3stico', 'Claridad', 'Pr\u00e1ctica', 'Seguimiento'];

const floatingBadges = [
  { className: 'hfb-top', tone: 'green', value: '+200', label: 'estudiantes acompa\u00f1ados' },
  { className: 'hfb-mid', tone: 'navy', value: 'UAI', label: 'ponente 2024' },
  { className: 'hfb-bot', tone: 'green', value: '9.71', label: 'promedio en Educaci\u00f3n' },
];

export default function Hero() {
  const heroRef = useRef(null);
  useHeroMotion(heroRef);

  return (
    <section className="hero hero-premium" id="hero" ref={heroRef}>
      <div className="hero-shape hero-shape-1"></div>
      <div className="hero-shape hero-shape-2"></div>
      <div className="hero-shape hero-shape-3"></div>
      <div aria-hidden="true" className="hero-grid-lines"></div>
      <div aria-hidden="true" className="hero-aurora"></div>

      <div className="container">
        <div className="hero-inner hero-inner-premium">
          <div className="hero-text-col hero-copy-panel" id="heroText">
            <div className="hero-ribbon hero-ribbon-premium" data-hero-intro>
              <span className="dot"></span>
              {'Primera clase de 45 min · gratis · diagn\u00f3stico real'}
            </div>

            <div className="hero-kicker" data-hero-intro>
              <Sparkles aria-hidden="true" size={15} />
              {'Clases particulares con m\u00e9todo, humanidad y seguimiento entre clases'}
            </div>

            <h1 className="hero-title-premium" data-hero-intro>
              {'No necesit\u00e1s'}
              <br />
              <span className="hero-static-word">{'otro profe m\u00e1s.'}</span>
              <br />
              <em>{'Necesit\u00e1s claridad.'}</em>
            </h1>

            <p className="hero-sub2 hero-sub-premium" data-hero-intro>
              {'Soy '}<strong>{'Agust\u00edn El\u00edas Sosa'}</strong>{': docente habilitado, T\u00e9cnico Qu\u00edmico y estudiante avanzado de Ciencias de la Educaci\u00f3n. Acompa\u00f1o Matem\u00e1tica, F\u00edsica, Qu\u00edmica e Ingl\u00e9s con una idea simple: primero entendemos qu\u00e9 te traba, despu\u00e9s construimos un camino que puedas sostener.'}
            </p>

            <div className="hero-metric-rail" data-hero-intro>
              {heroMetrics.map((metric) => (
                <div className="hero-metric" key={metric.value}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>

            <div className="hero-trust" data-hero-intro>
              {heroChips.map((chip) => {
                const Icon = chip.icon;
                return (
                  <span className="hero-chip" data-hero-chip key={chip.label}>
                    <Icon aria-hidden="true" size={15} />
                    {chip.label}
                  </span>
                );
              })}
            </div>

            <div className="hero-ctas2 hero-cta-stack" data-hero-intro>
              <a className="btn btn-wa hero-cta-main btn-cta-pulse" href={whatsappUrl(whatsappMessages.firstClass)} rel="noreferrer" target="_blank">
                <MessageCircle aria-hidden="true" size={18} />
                {'Quiero mi clase gratis'}
              </a>
              <a className="btn btn-outline hero-cta-secondary" href="#metodo">
                {'Ver c\u00f3mo trabajo'}
                <ArrowRight aria-hidden="true" size={16} />
              </a>
            </div>

            <div className="hero-learning-path" data-hero-intro>
              {learningPath.map((step, index) => (
                <div className="hero-path-step" key={step}>
                  <span>{index + 1}</span>
                  <strong>{step}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-photo-col hero-visual-panel" id="heroPhoto">
            <div className="hero-ring hero-ring-1"></div>
            <div className="hero-ring hero-ring-2"></div>

            <div className="hero-photo-shell hero-photo-shell-premium">
              <div className="hero-photo-card hero-photo-card-top" data-hero-badge>
                <Telescope aria-hidden="true" size={16} />
                <div>
                  <strong>{'Ponencia UAI 2024'}</strong>
                  <span>{'“Los afectos en la educaci\u00f3n”'}</span>
                </div>
              </div>

              <img alt={`${brand.owner}, profesor particular de Matem\u00e1tica, F\u00edsica, Qu\u00edmica e Ingl\u00e9s`} className="hero-photo-v2" data-hero-photo decoding="async" fetchPriority="high" height="1296" src={images.hero} width="970" />
              <img alt="" aria-hidden="true" className="hero-photo2" data-hero-photo-secondary decoding="async" height="1296" src={images.heroSecondary} width="970" />

              <div className="hero-photo-card hero-photo-card-bottom" data-hero-badge>
                <Award aria-hidden="true" size={18} />
                <div>
                  <strong>{'Aprendizaje significativo'}</strong>
                  <span>{'claridad + pr\u00e1ctica + confianza'}</span>
                </div>
              </div>
            </div>

            <div className="hero-method-card" data-hero-badge>
              <div className="hero-method-card-head">
                <Compass aria-hidden="true" size={18} />
                <span>{'Ruta de trabajo'}</span>
              </div>
              <ul>
                <li><CheckCircle2 aria-hidden="true" size={15} />{'Diagn\u00f3stico inicial sin costo'}</li>
                <li><CheckCircle2 aria-hidden="true" size={15} />{'Plan adaptado a tu nivel real'}</li>
                <li><Clock3 aria-hidden="true" size={15} />{'Seguimiento por WhatsApp'}</li>
              </ul>
            </div>

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
