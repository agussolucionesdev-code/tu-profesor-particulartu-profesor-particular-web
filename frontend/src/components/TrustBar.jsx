import RevealGroup from './motion/RevealGroup.jsx';
import { trustItems } from '../data/siteData.js';
import { IconByKey } from '../lib/iconMap.jsx';

function TrustMain({ item }) {
  return (
    <div className="trust-main">
      {item.mainPrefix}
      <span className="green">{item.greenText}</span>
      {item.mainSuffix}
    </div>
  );
}

function TrustSub({ lines }) {
  return (
    <div className="trust-sub">
      {lines.map((line, index) => (
        <span key={line}>
          {line}
          {index < lines.length - 1 && <br />}
        </span>
      ))}
    </div>
  );
}

export default function TrustBar() {
  return (
    <section aria-label="Credenciales y diferenciales" className="trust">
      <RevealGroup className="trust-grid" variant="cards" stagger={0.07}>
        {trustItems.map((item) => (
          <div className="trust-cell" key={`${item.iconKey}-${item.greenText}`}>
            <div className="trust-icon-wrap"><IconByKey iconKey={item.iconKey} size={22} /></div>
            <TrustMain item={item} />
            <TrustSub lines={item.subLines} />
          </div>
        ))}
      </RevealGroup>
    </section>
  );
}

