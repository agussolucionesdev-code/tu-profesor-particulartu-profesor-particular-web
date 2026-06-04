import { brand, footerLinks, logos } from '../data/siteData.js';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo">
            <img alt={brand.name} src={logos.mainTransparent} />
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

