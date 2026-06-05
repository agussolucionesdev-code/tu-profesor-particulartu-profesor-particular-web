import { brand, contact, footerLinks, logos } from '../data/siteData.js';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand-block">
            <div className="footer-logo">
              <img alt={`Logo de ${brand.name}`} decoding="async" height="341" loading="lazy" src={logos.mainTransparent} width="512" />
            </div>
            <p className="footer-brand-copy">{'Clases particulares con claridad, criterio pedagógico y acompañamiento real para estudiantes de Temperley y de toda Argentina.'}</p>
          </div>
          <div className="footer-links">
            {footerLinks.map((link) => <a href={link.href} key={link.label} rel={link.external ? 'noreferrer' : undefined} target={link.external ? '_blank' : undefined}>{link.label}</a>)}
          </div>
        </div>
        <div className="footer-bottom">{brand.copyright} {'·'} {contact.email}</div>
      </div>
    </footer>
  );
}
