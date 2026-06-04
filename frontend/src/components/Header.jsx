import { Mail, MessageCircle, Sparkles } from 'lucide-react';
import { contact, drawerItems, logos, navItems, whatsappMessages, whatsappUrl } from '../data/siteData.js';

const drawerSections = ['materias', 'selector', 'metodo', 'sobre', 'carta', 'testimonios', 'faq'];

export default function Header() {
  const firstClassHref = whatsappUrl(whatsappMessages.firstClass);

  return (
    <>
      <div id="progress-bar"></div>
      <nav id="navbar">
        <div className="nav-bar">
          <a className="nav-logo" href="#hero">
            <img alt="Tu Profesor Particular" src={logos.mainTransparent} />
          </a>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.section}>
                <a data-section={item.section} href={item.href}>
                  {item.icon} {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-cta-wrap">
            <span className="nav-free-badge"><Sparkles aria-hidden="true" size={14} /> 1ª clase gratis</span>
            <a className="btn btn-wa nav-cta" href={firstClassHref} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" size={16} /> Escribime
            </a>
          </div>

          <button aria-label="Menú" className="nav-hamburger" id="hamburgerBtn">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className="nav-drawer" id="navDrawer">
        <div className="nav-drawer-backdrop"></div>
        <div className="nav-drawer-panel">
          <div className="drawer-header">
            <img alt="Tu Profesor Particular" src={logos.mainTransparent} />
            <button className="drawer-close">×</button>
          </div>

          <div className="drawer-links">
            {drawerItems.map((item, index) => (
              <a className="drawer-link" data-section={drawerSections[index]} href={`#${drawerSections[index]}`} key={item.label}>
                <div className="drawer-link-icon">{item.icon}</div>
                {item.label}
              </a>
            ))}
          </div>

          <div className="drawer-cta">
            <div className="drawer-free"><Sparkles aria-hidden="true" size={13} /> La primera clase de 45 min es gratis</div>
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
