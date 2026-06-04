import { Camera, Mail, MapPin, MessageCircle } from 'lucide-react';
import RevealGroup from './motion/RevealGroup.jsx';
import { contact } from '../data/siteData.js';

const contactItems = [
  { key: 'wa', icon: MessageCircle, content: contact.whatsappDisplay, href: `https://wa.me/${contact.whatsappNumber}` },
  { key: 'mail', icon: Mail, content: contact.email, href: `mailto:${contact.email}` },
  { key: 'ig', icon: Camera, content: contact.instagramHandle, href: contact.instagram },
  { key: 'map', icon: MapPin, content: contact.location },
];

export default function ContactStrip() {
  return (
    <div className="contacto-strip">
      <div className="container">
        <RevealGroup className="contacto-items" variant="scale" stagger={0.09}>
          {contactItems.map((item) => {
            const Icon = item.icon;
            return (
              <div className="contacto-item" key={item.key}>
                <Icon aria-hidden="true" size={18} />
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                    {item.content}
                  </a>
                ) : (
                  <span>{item.content}</span>
                )}
              </div>
            );
          })}
        </RevealGroup>
      </div>
    </div>
  );
}


