import RevealGroup from './motion/RevealGroup.jsx';
import { trustItems } from '../data/siteData.js';

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
    <div className="trust">
      <RevealGroup className="trust-grid" variant="scale">
        {trustItems.map((item) => (
          <div className="trust-cell" key={`${item.icon}-${item.greenText}`}>
            <div className="trust-icon-wrap">{item.icon}</div>
            <TrustMain item={item} />
            <TrustSub lines={item.subLines} />
          </div>
        ))}
      </RevealGroup>
    </div>
  );
}
