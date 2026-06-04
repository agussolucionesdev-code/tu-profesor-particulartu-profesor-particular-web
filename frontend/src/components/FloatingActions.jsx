import { ArrowUp, Mail, MessageCircle } from 'lucide-react';
import { quickActions } from '../data/siteData.js';

const actionIcons = {
  whatsapp: MessageCircle,
  contacto: Mail,
  top: ArrowUp,
};

export default function FloatingActions() {
  return (
    <div className="quick-actions" aria-label="Accesos rápidos">
      {quickActions.map((action) => {
        const Icon = actionIcons[action.key];
        const sharedProps = action.type === 'external' ? { target: '_blank', rel: 'noreferrer' } : {};
        return (
          <a
            aria-label={action.label}
            className={`quick-action quick-action-${action.key}${action.key === 'whatsapp' ? ' is-primary' : ''}`}
            href={action.href}
            key={action.key}
            title={action.label}
            {...sharedProps}
          >
            <Icon aria-hidden="true" size={20} />
            <span>{action.label}</span>
          </a>
        );
      })}

      <div id="tweaks-panel">
        <h4>✦ Tweaks</h4>
        <div className="tweak-row"><label>Verde</label><input type="color" defaultValue="#4A9957" /></div>
        <div className="tweak-row"><label>Navy</label><input type="color" defaultValue="#1C3558" /></div>
        <div className="tweak-row"><label>Fondo</label><input type="color" defaultValue="#FAFAF8" /></div>
        <button className="tweak-close">✕ Cerrar</button>
      </div>
    </div>
  );
}
