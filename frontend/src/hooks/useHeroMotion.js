import { useEffect } from 'react';
import { gsap } from 'gsap';
import { useReducedMotion } from './useReducedMotion.js';

export function useHeroMotion(rootRef) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const textItems = root.querySelectorAll('[data-hero-intro]');
    const photo = root.querySelector('[data-hero-photo]');
    const photoSecondary = root.querySelector('[data-hero-photo-secondary]');
    const badges = root.querySelectorAll('[data-hero-badge]');
    const chips = root.querySelectorAll('[data-hero-chip]');
    const scrollIndicator = root.querySelector('[data-hero-scroll]');
    const visualPanel = root.querySelector('.hero-visual-panel');
    const aurora = root.querySelector('.hero-aurora');
    const rotatingWords = Array.from(root.querySelectorAll('.hero-rotate-word'));
    const loops = [];
    const cleanupFns = [];

    if (prefersReducedMotion) {
      gsap.set([textItems, photo, photoSecondary, badges, chips, scrollIndicator], { clearProps: 'all', autoAlpha: 1 });
      return;
    }

    const introTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
    introTimeline
      .fromTo(photo, { autoAlpha: 0, scale: 0.92, y: 28 }, { autoAlpha: 1, scale: 1, y: 0, duration: 0.9 }, 0)
      .fromTo(photoSecondary, { autoAlpha: 0, x: -18, y: 18, rotate: -6 }, { autoAlpha: 1, x: 0, y: 0, rotate: 0, duration: 0.65 }, 0.18)
      .fromTo(textItems, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, stagger: 0.1, duration: 0.72 }, 0.08)
      .fromTo(chips, { autoAlpha: 0, y: 18, scale: 0.96 }, { autoAlpha: 1, y: 0, scale: 1, stagger: 0.06, duration: 0.46 }, 0.42)
      .fromTo(badges, { autoAlpha: 0, y: 16, scale: 0.94 }, { autoAlpha: 1, y: 0, scale: 1, stagger: 0.08, duration: 0.5 }, 0.5)
      .fromTo(scrollIndicator, { autoAlpha: 0, y: 10 }, { autoAlpha: 0.6, y: 0, duration: 0.4 }, 0.95);

    if (window.innerWidth >= 992) {
      loops.push(gsap.to(photo, { y: -10, duration: 3.6, repeat: -1, yoyo: true, ease: 'sine.inOut' }));
      badges.forEach((badge, index) => {
        loops.push(
          gsap.to(badge, {
            y: index % 2 === 0 ? -8 : 8,
            duration: 2.8 + index * 0.25,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          }),
        );
      });

      const onPointerMove = (event) => {
        const rect = root.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        if (visualPanel) {
          gsap.to(visualPanel, {
            rotateY: x * 5,
            rotateX: y * -4,
            x: x * 10,
            y: y * 8,
            transformPerspective: 1200,
            transformOrigin: 'center',
            duration: 0.8,
            ease: 'power3.out',
            overwrite: 'auto',
          });
        }

        if (aurora) {
          gsap.to(aurora, {
            x: x * 28,
            y: y * 20,
            duration: 1.2,
            ease: 'power3.out',
            overwrite: 'auto',
          });
        }
      };

      const onPointerLeave = () => {
        if (visualPanel) gsap.to(visualPanel, { rotateY: 0, rotateX: 0, x: 0, y: 0, duration: 0.9, ease: 'expo.out' });
        if (aurora) gsap.to(aurora, { x: 0, y: 0, duration: 0.9, ease: 'expo.out' });
      };

      root.addEventListener('pointermove', onPointerMove);
      root.addEventListener('pointerleave', onPointerLeave);
      cleanupFns.push(() => {
        root.removeEventListener('pointermove', onPointerMove);
        root.removeEventListener('pointerleave', onPointerLeave);
      });
    }

    if (rotatingWords.length > 1) {
      let currentWord = Math.max(0, rotatingWords.findIndex((word) => word.classList.contains('active')));
      const interval = window.setInterval(() => {
        const previous = rotatingWords[currentWord];
        currentWord = (currentWord + 1) % rotatingWords.length;
        const next = rotatingWords[currentWord];

        gsap.to(previous, {
          autoAlpha: 0,
          yPercent: -100,
          duration: 0.42,
          ease: 'power2.inOut',
          onStart: () => previous.classList.remove('active'),
        });

        gsap.fromTo(
          next,
          { autoAlpha: 0, yPercent: 100 },
          {
            autoAlpha: 1,
            yPercent: 0,
            duration: 0.46,
            ease: 'power3.out',
            onStart: () => next.classList.add('active'),
          },
        );
      }, 2800);
      loops.push({ kill: () => window.clearInterval(interval) });
    }

    return () => {
      introTimeline.kill();
      loops.forEach((loop) => loop.kill());
      cleanupFns.forEach((cleanup) => cleanup());
    };
  }, [prefersReducedMotion, rootRef]);
}
