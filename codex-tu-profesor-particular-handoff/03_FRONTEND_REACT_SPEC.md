# Especificación frontend — migración fiel a React JS

## Objetivo principal
Migrar la landing estática de `reference-static-site/` a una aplicación **React JS con Vite**, manteniendo una fidelidad visual y funcional lo más cercana posible al sitio de referencia antes de introducir mejoras.

## Stack sugerido
- React JS + Vite.
- JavaScript con JSX. No usar TypeScript al inicio, salvo que el usuario lo pida después.
- CSS modular o CSS global ordenado por componentes. Mantener variables de marca.
- Librerías permitidas:
  - `framer-motion` para animaciones declarativas.
  - `lucide-react` para íconos limpios, si hace falta reemplazar emojis o mejorar UI.
  - `react-router-dom` solo si se agregan páginas reales; para landing one-page no es obligatorio.
  - `vite-plugin-svgr` si luego se incorporan SVGs.

## Estructura sugerida
```txt
frontend/
  public/
    assets/
      logo-completo-transparente.png
      logo-completo-fondo-blanco.png
      logo-icon-fondo-blanco.png
      logo-transparente.png
      foto-agustin-hero.jpeg
      foto-agustin-secundaria.jpeg
      foto-agustin-presencial.jpeg
      foto-agustin-sobre-mi.jpeg
      foto-agustin-virtual.jpeg
      foto-agustin-grupal.jpeg
      foto-agustin-principal.jpg
  src/
    App.jsx
    main.jsx
    data/
      selectorMessages.js
      siteContent.js
    hooks/
      useScrollProgress.js
      useActiveSection.js
      useRevealOnScroll.js
    components/
      Navbar.jsx
      Hero.jsx
      LetterSection.jsx
      SituationSelector.jsx
      Subjects.jsx
      Levels.jsx
      Method.jsx
      About.jsx
      PhotoGallery.jsx
      Modalities.jsx
      Testimonials.jsx
      FAQ.jsx
      CTASection.jsx
      Footer.jsx
      FloatingWhatsApp.jsx
    styles/
      tokens.css
      global.css
      components.css
  package.json
  vite.config.js
  .env.example
```

## Secciones que deben existir sí o sí
1. Navbar fija con logo, links, estado activo por sección, efecto scrolled y drawer mobile.
2. Hero con logo/foto, claim principal, palabras rotativas, badges, CTA principal, parallax suave y elementos flotantes.
3. Carta / historia personal de Agustín.
4. Selector interactivo de situación: nivel + materia + respuesta personalizada + link dinámico a WhatsApp.
5. Materias destacadas.
6. Niveles educativos.
7. Método Bio‑Neuro‑Psico‑Didáctico con cards expandibles y pasos.
8. Sobre mí con tabs/habilidades.
9. Galería de fotos reales.
10. Modalidades: individual/grupal + presencial/virtual.
11. Testimonios.
12. FAQ acordeón.
13. CTA final.
14. Footer con datos reales y links.
15. Botón flotante de WhatsApp.

## Interacciones que deben replicarse
- Barra de progreso de scroll.
- Navbar que cambia al hacer scroll.
- Scroll suave a secciones.
- Sección activa en navbar.
- Menú mobile drawer con backdrop y bloqueo de scroll.
- Hero stagger animation.
- Palabras rotativas en el hero.
- Parallax suave de foto en desktop.
- Reveal on scroll para elementos.
- Contadores animados.
- Selector nivel/materia con mensajes personalizados.
- Cards del método expandibles.
- FAQ acordeón.
- Steps del método con progress.
- Tabs de “Sobre mí”.
- Selector de modalidades.
- Tilt 3D en cards.
- Animaciones de underlines y elementos flotantes.

## Criterio de fidelidad visual
Antes de optimizar, Codex debe lograr que la versión React sea prácticamente indistinguible del HTML de referencia:
- Misma paleta.
- Misma jerarquía tipográfica.
- Mismos textos y CTAs.
- Mismo uso del logo.
- Mismas fotos.
- Mismos radios, sombras, espaciados y grids.
- Misma respuesta mobile.
- Sin rutas rotas de imágenes.

## Criterio técnico
- Componentizar sin romper el resultado visual.
- Separar contenido editable en archivos de datos (`siteContent.js`, `selectorMessages.js`).
- Evitar lógica duplicada.
- No hardcodear URLs repetidas en 30 lugares: centralizar WhatsApp, Instagram y email.
- Mantener `npm run dev`, `npm run build`, `npm run preview` funcionando.
- Ejecutar build antes de dar por terminada cada etapa.
