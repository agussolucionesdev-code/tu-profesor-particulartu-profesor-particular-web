import { useEffect } from 'react';
import { gsap } from 'gsap';
import { selectorMessages } from '../data/siteData.js';
import { useReducedMotion } from './useReducedMotion.js';

function activateExclusive(selector, activeElement) {
  document.querySelectorAll(selector).forEach((element) => {
    element.classList.remove('active');
    if (element instanceof HTMLElement) {
      element.setAttribute('aria-pressed', 'false');
    }
  });
  activeElement.classList.add('active');
  activeElement.setAttribute('aria-pressed', 'true');
}

export function useLandingState() {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const modalityState = { modo: 'individual', lugar: 'presencial' };
    const faqAnswers = Array.from(document.querySelectorAll('.faq-a'));

    if (!prefersReducedMotion) {
      faqAnswers.forEach((answer) => gsap.set(answer, { height: 0, autoAlpha: 0 }));
    }

    const updateSelector = () => {
      const nivel = document.querySelector('.sel-nivel.active')?.dataset.val;
      const materia = document.querySelector('.sel-materia.active')?.dataset.val;
      const materiaRow = document.getElementById('materia-row');
      const resultEl = document.getElementById('selector-result');
      if (materiaRow) materiaRow.style.display = nivel ? 'flex' : 'none';
      if (!resultEl) return;

      if (!nivel || !materia) {
        resultEl.classList.remove('show');
        resultEl.hidden = true;
        if (!prefersReducedMotion) {
          gsap.to(resultEl, { height: 0, autoAlpha: 0, duration: 0.25, ease: 'power2.inOut' });
        }
        return;
      }

      const key = selectorMessages[`${nivel}-${materia}`] ? `${nivel}-${materia}` : `${nivel}-otras`;
      const data = selectorMessages[key];
      if (!data) return;

      const message = document.getElementById('selector-msg');
      const link = document.getElementById('selector-wa');
      if (message) message.textContent = data.msg;
      if (link) link.href = `https://wa.me/5491164236675?text=${encodeURIComponent(data.wa)}`;
      resultEl.classList.add('show');
      resultEl.hidden = false;

      if (!prefersReducedMotion) {
        gsap.fromTo(resultEl, { height: 0, autoAlpha: 0, y: 10 }, { height: 'auto', autoAlpha: 1, y: 0, duration: 0.45, ease: 'power3.out' });
      }
    };

    const goStep = (n, btn) => {
      const current = document.querySelector('.metodo-step-panel.active');
      const nextPanel = document.getElementById(`step-${n}`);
      if (!nextPanel) return;

      document.querySelectorAll('.step-nav-btn').forEach((button) => button.classList.remove('active'));
      document.querySelectorAll('.metodo-step-panel').forEach((panel) => (panel.hidden = true));
      btn?.classList.add('active');

      if (current && current !== nextPanel) current.classList.remove('active');
      nextPanel.classList.add('active');
      nextPanel.hidden = false;

      const progress = document.getElementById('step-progress');
      if (progress) {
        prefersReducedMotion
          ? (progress.style.width = `${(n / 4) * 100}%`)
          : gsap.to(progress, { width: `${(n / 4) * 100}%`, duration: 0.45, ease: 'power2.out' });
      }

      if (!prefersReducedMotion) {
        gsap.fromTo(nextPanel, { autoAlpha: 0, x: 26 }, { autoAlpha: 1, x: 0, duration: 0.42, ease: 'power3.out' });
      }
    };

    const showTab = (id, btn) => {
      const nextTab = document.getElementById(`tab-${id}`);
      if (!nextTab) return;

      document.querySelectorAll('.sobre-tab-content').forEach((tab) => tab.classList.remove('active'));
      document.querySelectorAll('.sobre-tab-content').forEach((tab) => {
        tab.hidden = true;
      });
      document.querySelectorAll('.sobre-tab').forEach((tab) => {
        tab.classList.remove('active');
        tab.setAttribute('aria-selected', 'false');
      });
      nextTab.classList.add('active');
      nextTab.hidden = false;
      btn?.classList.add('active');
      btn?.setAttribute('aria-selected', 'true');

      if (!prefersReducedMotion) {
        gsap.fromTo(nextTab, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.32, ease: 'power2.out' });
      }

      if (id === 'habilidades') {
        window.setTimeout(() => document.getElementById('skills-list')?.classList.add('animated'), 100);
      }
    };

    const setMod = (axis, val, btn) => {
      modalityState[axis] = val;
      btn.closest('.mod-toggle')?.querySelectorAll('.mod-toggle-btn').forEach((button) => button.classList.remove('active'));
      btn.closest('.mod-toggle')?.querySelectorAll('.mod-toggle-btn').forEach((button) => button.setAttribute('aria-pressed', 'false'));
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');

      const nextPanel = document.getElementById(`panel-${modalityState.modo}-${modalityState.lugar}`);
      document.querySelectorAll('.mod-panel').forEach((panel) => {
        panel.classList.remove('active');
        panel.hidden = true;
      });
      nextPanel?.classList.add('active');
      if (nextPanel) nextPanel.hidden = false;

      const modo = document.getElementById('combo-modo');
      const lugar = document.getElementById('combo-lugar');
      if (modo) modo.textContent = modalityState.modo;
      if (lugar) lugar.textContent = modalityState.lugar;

      if (nextPanel && !prefersReducedMotion) {
        gsap.fromTo(nextPanel, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.42, ease: 'power3.out' });
      }
    };

    const toggleFaq = (item) => {
      const answer = item?.querySelector('.faq-a');
      if (!item || !answer) return;
      const isOpen = item.classList.contains('open');

      document.querySelectorAll('.faq-item.open').forEach((faqItem) => {
        faqItem.classList.remove('open');
        const faqAnswer = faqItem.querySelector('.faq-a');
        const faqTrigger = faqItem.querySelector('.faq-q');
        faqTrigger?.setAttribute('aria-expanded', 'false');
        if (faqAnswer && !prefersReducedMotion) {
          gsap.to(faqAnswer, { height: 0, autoAlpha: 0, duration: 0.28, ease: 'power2.inOut' });
        }
      });

      if (!isOpen) {
        item.classList.add('open');
        item.querySelector('.faq-q')?.setAttribute('aria-expanded', 'true');
        if (!prefersReducedMotion) {
          gsap.fromTo(answer, { height: 0, autoAlpha: 0 }, { height: 'auto', autoAlpha: 1, duration: 0.36, ease: 'power2.out' });
        }
      }
    };

    window.updateSelector = updateSelector;
    window.goStep = goStep;
    window.showTab = showTab;
    window.setMod = setMod;

    const onClick = (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const levelButton = target.closest('.sel-nivel');
      if (levelButton) {
        activateExclusive('.sel-nivel', levelButton);
        document.querySelectorAll('.sel-materia').forEach((button) => button.classList.remove('active'));
        updateSelector();
        return;
      }

      const subjectButton = target.closest('.sel-materia');
      if (subjectButton) {
        activateExclusive('.sel-materia', subjectButton);
        updateSelector();
        return;
      }

      const faqQuestion = target.closest('.faq-q');
      if (faqQuestion) {
        toggleFaq(faqQuestion.closest('.faq-item'));
        return;
      }

      const stepNav = target.closest('.step-nav-btn');
      if (stepNav) {
        const buttons = [...document.querySelectorAll('.step-nav-btn')];
        const step = buttons.indexOf(stepNav) + 1;
        if (step > 0) goStep(step, stepNav);
        return;
      }

      const stepButton = target.closest('.step-btn');
      if (stepButton && !stepButton.matches('a')) {
        const current = Number(stepButton.closest('.metodo-step-panel')?.id?.replace('step-', '') ?? 1);
        const isNext = stepButton.classList.contains('primary');
        const next = Math.min(4, Math.max(1, current + (isNext ? 1 : -1)));
        const nextNav = document.querySelectorAll('.step-nav-btn')[next - 1];
        goStep(next, nextNav);
        return;
      }

      const tab = target.closest('.sobre-tab');
      if (tab) {
        const tabs = [...document.querySelectorAll('.sobre-tab')];
        const ids = ['formacion', 'experiencia', 'valores', 'habilidades'];
        const id = ids[tabs.indexOf(tab)];
        if (id) showTab(id, tab);
        return;
      }

      const mod = target.closest('.mod-toggle-btn');
      if (mod?.dataset.axis && mod.dataset.val) {
        setMod(mod.dataset.axis, mod.dataset.val, mod);
      }
    };

    document.addEventListener('click', onClick);
    document.querySelectorAll('.metodo-step-panel').forEach((panel, index) => (panel.hidden = index !== 0));
    document.querySelectorAll('.mod-panel').forEach((panel, index) => (panel.hidden = index !== 0));
    document.querySelectorAll('.faq-a').forEach((answer) => {
      answer.closest('.faq-item')?.querySelector('.faq-q')?.setAttribute('aria-expanded', 'false');
    });
    updateSelector();

    return () => {
      document.removeEventListener('click', onClick);
    };
  }, [prefersReducedMotion]);
}
