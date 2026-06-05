import { CalendarCheck2, Mail, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { contact, drawerItems, logos, navItems, whatsappMessages, whatsappUrl } from '../data/siteData.js';
import { IconByKey } from '../lib/iconMap.jsx';

const drawerSections = ['materias', 'selector', 'metodo', 'sobre', 'carta', 'testimonios', 'faq'];

export default function Header() {
  const firstClassHref = whatsappUrl(whatsappMessages.firstClass);

  return (
    <>
      <div id="progress-bar"></div>
      <nav aria-label={'Navegaci\u00f3n principal'} className="site-nav-premium" id="navbar">
        <div className="nav-bar nav-bar-premium">
          <a className="nav-logo nav-logo-premium" href="#hero" aria-label="Ir al inicio">
            <span className="nav-logo-glow" aria-hidden="true"></span>
            <img alt="Logo de Tu Profesor Particular" decoding="async" fetchPriority="high" height="341" src={logos.mainTransparent} width="512" />
          </a>

          <div className="nav-center-shell">
            <ul className="nav-links nav-links-premium">
              {navItems.map((item) => (
                <li key={item.section}>
                  <a data-section={item.section} href={item.href}>
                    <IconByKey className="nav-link-icon" iconKey={item.iconKey} size={15} />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="nav-proof-line" aria-hidden="true">
              <ShieldCheck size={13} />
              <span>{'Docente habilitado · +200 estudiantes · primera clase gratis'}</span>
            </div>
          </div>

          <div className="nav-cta-wrap nav-cta-premium">
            <div className="nav-meta-copy">
              <span className="nav-free-badge"><Sparkles aria-hidden="true" size={14} /> {'1ra clase gratis'}</span>
              <span className="nav-meta-text">Temperley + virtual para toda Argentina</span>
            </div>
            <a className="btn btn-wa nav-cta" href={firstClassHref} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" size={16} /> Escribime
            </a>
          </div>

          <button aria-controls="navDrawer" aria-expanded="false" aria-label={'Abrir men\u00fa de navegaci\u00f3n'} className="nav-hamburger nav-hamburger-premium" id="hamburgerBtn" type="button">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className="nav-drawer" hidden id="navDrawer">
        <div className="nav-drawer-backdrop"></div>
        <div aria-label={'Men\u00fa de navegaci\u00f3n m\u00f3vil'} className="nav-drawer-panel nav-drawer-panel-premium" role="dialog">
          <div className="drawer-header drawer-header-premium">
            <div>
              <img alt="" aria-hidden="true" decoding="async" height="341" src={logos.mainTransparent} width="512" />
              <p>{'Clases con claridad, método y acompañamiento real.'}</p>
            </div>
            <button aria-label={'Cerrar men\u00fa de navegaci\u00f3n'} className="drawer-close" type="button">&times;</button>
          </div>

          <div className="drawer-status-card">
            <CalendarCheck2 aria-hidden="true" size={18} />
            <div>
              <strong>{'Primera clase gratis'}</strong>
              <span>{'45 minutos para entender tu caso y armar un camino.'}</span>
            </div>
          </div>

          <div className="drawer-links">
            {drawerItems.map((item, index) => (
              <a className="drawer-link" data-section={drawerSections[index]} href={`#${drawerSections[index]}`} key={item.label}>
                <div className="drawer-link-icon">
                  <IconByKey iconKey={item.iconKey} size={18} />
                </div>
                {item.label}
              </a>
            ))}
          </div>

          <div className="drawer-cta">
            <div className="drawer-free"><Sparkles aria-hidden="true" size={13} /> {'La primera clase de 45 min es gratis'}</div>
            <a className="btn btn-wa" href={firstClassHref} style={{ justifyContent: 'center' }} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" size={16} /> Escribime por WhatsApp
            </a>
            <a className="btn btn-outline" href={`mailto:${contact.email}`} style={{ justifyContent: 'center' }}>
              <Mail aria-hidden="true" size={16} /> Enviar email
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
