import { useEffect } from 'react';
import { useReducedMotion } from './useReducedMotion.js';

const tiltSelector = '.materia-card, .trust-cell, .valor-card, .testi-card, .mod-panel-content';

export function useCardTilt() {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const cards = Array.from(document.querySelectorAll(tiltSelector));
    const cleanups = [];

    cards.forEach((card) => {
      const onMove = (event) => {
        if (window.innerWidth < 992) return;
        const rect = card.getBoundingClientRect();
        const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
        const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -8;
        card.style.transform = `perspective(900px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateY(-6px)`;
      };

      const onLeave = () => {
        card.style.transform = '';
      };

      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
      cleanups.push(() => {
        card.removeEventListener('mousemove', onMove);
        card.removeEventListener('mouseleave', onLeave);
      });
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, [prefersReducedMotion]);
}
