import { ArrowUp, Mail, MessageCircle } from 'lucide-react';
import { quickActions } from '../data/siteData.js';

const actionIcons = {
  whatsapp: MessageCircle,
  contacto: Mail,
  top: ArrowUp,
};

export default function FloatingActions() {
  return (
    <nav aria-label="Accesos rápidos" className="quick-actions">
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
    </nav>
  );
}
