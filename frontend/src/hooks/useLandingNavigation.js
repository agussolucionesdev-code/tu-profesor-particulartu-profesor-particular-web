import { useEffect } from 'react';
import { gsap } from 'gsap';
import { useReducedMotion } from './useReducedMotion.js';

const sectionIds = ['hero', 'carta', 'selector', 'materias', 'niveles', 'metodo', 'sobre', 'fotos', 'modalidades', 'testimonios', 'faq', 'contacto'];

export function useLandingNavigation() {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const navbar = document.getElementById('navbar');
    const navDrawer = document.getElementById('navDrawer');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const progressBar = document.getElementById('progress-bar');
    const drawerPanel = navDrawer?.querySelector('.nav-drawer-panel');
    const drawerBackdrop = navDrawer?.querySelector('.nav-drawer-backdrop');
    const drawerClose = navDrawer?.querySelector('.drawer-close');
    let isDrawerOpen = false;

    if (drawerPanel && drawerBackdrop && !prefersReducedMotion) {
      navDrawer?.classList.add('js-motion');
      gsap.set(drawerPanel, { xPercent: 100 });
      gsap.set(drawerBackdrop, { autoAlpha: 0 });
    }

    const setBodyLock = (locked) => {
      document.body.style.overflow = locked ? 'hidden' : '';
      document.body.classList.toggle('drawer-open', locked);
    };

    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (!element) return;
      const navHeight = navbar?.offsetHeight ?? 0;
      const top = element.getBoundingClientRect().top + window.scrollY - navHeight - 8;
      if (window.location.hash !== `#${id}`) {
        window.history.replaceState(null, '', `#${id}`);
      }
      window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    };

    const setDrawerState = (open) => {
      if (!navDrawer || !hamburgerBtn) return;
      isDrawerOpen = open;
      if (open) {
        navDrawer.hidden = false;
      }
      navDrawer.classList.toggle('open', open);
      hamburgerBtn.classList.toggle('open', open);
      hamburgerBtn.setAttribute('aria-expanded', String(open));
      drawerPanel?.setAttribute('aria-modal', String(open));
      setBodyLock(open);

      if (drawerPanel && drawerBackdrop && !prefersReducedMotion) {
        gsap.killTweensOf([drawerPanel, drawerBackdrop]);
        gsap.to(drawerBackdrop, { autoAlpha: open ? 1 : 0, duration: 0.24, ease: 'power2.out' });
        gsap.to(drawerPanel, {
          xPercent: open ? 0 : 100,
          duration: open ? 0.42 : 0.3,
          ease: open ? 'power3.out' : 'power2.inOut',
          onComplete: open ? () => gsap.set(drawerPanel, { clearProps: 'transform' }) : undefined,
        });
      }

      if (open) {
        window.setTimeout(() => drawerClose?.focus(), prefersReducedMotion ? 0 : 40);
      } else {
        window.setTimeout(() => {
          if (!isDrawerOpen) navDrawer.hidden = true;
        }, prefersReducedMotion ? 0 : 320);
        window.setTimeout(() => hamburgerBtn.focus(), prefersReducedMotion ? 0 : 40);
      }
    };

    const closeDrawer = () => setDrawerState(false);
    const toggleDrawer = () => setDrawerState(!isDrawerOpen);

    const findActiveSection = () => {
      let current = sectionIds[0];
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= 140) current = id;
      });
      return current;
    };

    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      navbar?.classList.toggle('scrolled', scrolled > 36);
      if (progressBar && total > 0) {
        progressBar.style.width = `${Math.min(100, (scrolled / total) * 100)}%`;
      }

      const current = findActiveSection();
      document.querySelectorAll('.nav-links a').forEach((link) => {
        link.classList.toggle('active', link.dataset.section === current);
      });
    };

    const onClick = (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      if (target.closest('#hamburgerBtn')) {
        event.preventDefault();
        toggleDrawer();
        return;
      }

      if (target.closest('.nav-drawer-backdrop, .drawer-close')) {
        event.preventDefault();
        closeDrawer();
        return;
      }

      const navLogo = target.closest('.nav-logo');
      if (navLogo) {
        event.preventDefault();
        scrollToSection('hero');
        closeDrawer();
        return;
      }

      const navLink = target.closest('.nav-links a');
      if (navLink) {
        const section = navLink.dataset.section || navLink.getAttribute('href')?.replace('#', '');
        if (section && document.getElementById(section)) {
          event.preventDefault();
          scrollToSection(section);
        }
        return;
      }

      const drawerLink = target.closest('.drawer-link');
      if (drawerLink) {
        event.preventDefault();
        const section = drawerLink.getAttribute('data-section');
        closeDrawer();
        if (section) {
          window.setTimeout(() => scrollToSection(section), prefersReducedMotion ? 0 : 40);
        }
      }
    };

    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeDrawer();
    };

    window.toggleDrawer = toggleDrawer;
    window.scrollToSection = scrollToSection;

    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      navDrawer?.classList.remove('js-motion');
      setBodyLock(false);
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('scroll', onScroll);
    };
  }, [prefersReducedMotion]);
}
