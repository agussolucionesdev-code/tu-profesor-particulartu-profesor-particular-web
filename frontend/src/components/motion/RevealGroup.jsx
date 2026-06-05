import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { useReducedMotion } from '../../hooks/useReducedMotion.js';

const groupVariants = {
  up: { autoAlpha: 0, y: 28, filter: 'blur(8px)' },
  scale: { autoAlpha: 0, y: 24, scale: 0.94, filter: 'blur(8px)' },
  side: { autoAlpha: 0, x: 28, rotateY: -4, filter: 'blur(8px)' },
  cards: { autoAlpha: 0, y: 34, scale: 0.92, rotateX: 7, transformPerspective: 900, filter: 'blur(10px)' },
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
      gsap.set(elements, { clearProps: 'all', autoAlpha: 1, x: 0, y: 0, scale: 1, rotateX: 0, rotateY: 0, filter: 'none' });
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
      rotateX: 0,
      rotateY: 0,
      filter: 'blur(0px)',
      duration,
      delay,
      stagger,
      ease: 'expo.out',
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
