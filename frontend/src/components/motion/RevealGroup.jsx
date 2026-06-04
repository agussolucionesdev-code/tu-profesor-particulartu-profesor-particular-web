import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { useReducedMotion } from '../../hooks/useReducedMotion.js';

const groupVariants = {
  up: { autoAlpha: 0, y: 22 },
  scale: { autoAlpha: 0, y: 18, scale: 0.97 },
  side: { autoAlpha: 0, x: 20 },
};

export default function RevealGroup({
  as: Tag = 'div',
  children,
  className = '',
  variant = 'up',
  stagger = 0.12,
  delay = 0,
  duration = 0.75,
  once = true,
  threshold = 0.16,
  childSelector,
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
    const root = localRef.current;
    if (!root) return;

    const targets = childSelector ? root.querySelectorAll(childSelector) : root.children;
    const elements = Array.from(targets);
    if (!elements.length) return;

    if (prefersReducedMotion) {
      gsap.set(elements, { clearProps: 'all', autoAlpha: 1, x: 0, y: 0, scale: 1 });
      return;
    }

    gsap.set(elements, groupVariants[variant] ?? groupVariants.up);
  }, [childSelector, prefersReducedMotion, variant]);

  useEffect(() => {
    const root = localRef.current;
    if (!root || !inView || prefersReducedMotion) return;

    const targets = childSelector ? root.querySelectorAll(childSelector) : root.children;
    const elements = Array.from(targets);
    if (!elements.length) return;

    gsap.to(elements, {
      autoAlpha: 1,
      x: 0,
      y: 0,
      scale: 1,
      duration,
      delay,
      stagger,
      ease: 'power3.out',
      overwrite: 'auto',
    });
  }, [childSelector, delay, duration, inView, prefersReducedMotion, stagger]);

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
