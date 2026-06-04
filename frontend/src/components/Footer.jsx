import { brand, footerLinks, logos } from '../data/siteData.js';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo">
            <img alt={`Logo de ${brand.name}`} decoding="async" height="341" loading="lazy" src={logos.mainTransparent} width="512" />
          </div>
          <div className="footer-links">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.label}
                rel={link.external ? 'noreferrer' : undefined}
                target={link.external ? '_blank' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">{brand.copyright}</div>
      </div>
    </footer>
  );
}

