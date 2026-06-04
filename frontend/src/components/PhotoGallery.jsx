import Reveal from './motion/Reveal.jsx';
import RevealGroup from './motion/RevealGroup.jsx';
import { gallery } from '../data/siteData.js';

export default function PhotoGallery() {
  return (
    <>
      <section className="mosaic" id="fotos">
        <div className="container">
          <Reveal>
            <div className="mosaic-label">{gallery.label}</div>
            <h2 className="mosaic-title">
              {gallery.titleLine1}
              <br />
              {gallery.titleLine2}
            </h2>
          </Reveal>
          <RevealGroup className="mosaic-grid" variant="scale" stagger={0.08}>
            {gallery.images.map((image) => (
              <div className={image.className} key={image.src}>
                <img alt={image.alt} className="mosaic-img" src={image.src} />
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>
      <div className="wave" style={{ background: 'var(--off)' }}>
        <svg viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M0,0 C360,48 1080,48 1440,0 L1440,48 L0,48 Z" fill="#1C3558" />
        </svg>
      </div>
    </>
  );
}
