import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { useReducedMotion } from '../../hooks/useReducedMotion.js';

const variants = {
  up: {
    from: { autoAlpha: 0, y: 34, filter: 'blur(10px)' },
    to: { autoAlpha: 1, y: 0, filter: 'blur(0px)' },
  },
  left: {
    from: { autoAlpha: 0, x: -40, y: 10, filter: 'blur(10px)' },
    to: { autoAlpha: 1, x: 0, y: 0, filter: 'blur(0px)' },
  },
  right: {
    from: { autoAlpha: 0, x: 40, y: 10, filter: 'blur(10px)' },
    to: { autoAlpha: 1, x: 0, y: 0, filter: 'blur(0px)' },
  },
  scale: {
    from: { autoAlpha: 0, scale: 0.94, y: 24, filter: 'blur(8px)' },
    to: { autoAlpha: 1, scale: 1, y: 0, filter: 'blur(0px)' },
  },
  clip: {
    from: { autoAlpha: 0, y: 30, clipPath: 'inset(18% 0% 0% 0% round 24px)', filter: 'blur(8px)' },
    to: { autoAlpha: 1, y: 0, clipPath: 'inset(0% 0% 0% 0% round 0px)', filter: 'blur(0px)' },
  },
};

export default function Reveal({
  as: Tag = 'div',
  children,
  className = '',
  variant = 'up',
  delay = 0,
  duration = 0.8,
  once = true,
  threshold = 0.18,
  ...props
}) {
  const localRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: once,
    threshold,
    rootMargin: '0px 0px -10% 0px',
  });

  useEffect(() => {
    const element = localRef.current;
    if (!element) return;

    if (prefersReducedMotion) {
      gsap.set(element, { clearProps: 'all', autoAlpha: 1, x: 0, y: 0, scale: 1, filter: 'none', clipPath: 'none' });
      return;
    }

    gsap.set(element, variants[variant]?.from ?? variants.up.from);
  }, [prefersReducedMotion, variant]);

  useEffect(() => {
    const element = localRef.current;
    if (!element || !inView || prefersReducedMotion) return;

    gsap.to(element, {
      ...(variants[variant]?.to ?? variants.up.to),
      duration,
      delay,
      ease: 'expo.out',
      overwrite: 'auto',
    });
  }, [delay, duration, inView, prefersReducedMotion, variant]);

  const setRefs = (node) => {
    localRef.current = node;
    inViewRef(node);
  };

  return (
    <Tag ref={setRefs} className={className} {...props}>
      {children}
    </Tag>
  );
}
