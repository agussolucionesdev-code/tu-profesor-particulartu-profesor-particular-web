# Etapa 3 — Plan de componentización limpia

## Objetivo

Refactorizar la landing ya migrada a React para que deje de depender de bloques HTML largos parseados con `HtmlBlock`, sin perder la fidelidad visual/funcional lograda en la Etapa 2.

La regla principal es: **primero preservar, después limpiar**. Cada cambio tiene que mantener la estética original, las animaciones, las interacciones, los CTAs, los assets y el responsive.

## Estado de partida verificado

- La landing está separada en componentes por sección.
- La mayor parte de las secciones todavía usa strings `html = \`...\`` + `HtmlBlock`.
- `dangerouslySetInnerHTML`, `onclick=` y `oninput=` no aparecen en el código actual.
- Los logos legacy no están referenciados.
- Los logos activos válidos son:
  - `/assets/TPP_Main_Logo_NoTagline_TransparentBG.png`
  - `/assets/TPP_Favicon_Monogram_Minimal_WhiteBG.png`
- Las interacciones se preservan con `frontend/public/landing-interactions.js` y el hook `useLandingInteractions`.
- Por regla del proyecto, **no se ejecuta build** después de cambios.

## Principios de trabajo

1. **Fidelidad visual obligatoria**: no cambiar layout, colores, tipografías, espaciados, textos principales ni orden de secciones salvo necesidad técnica justificada.
2. **Refactor incremental**: convertir sección por sección, verificando después de cada lote.
3. **JSX semántico**: reemplazar HTML parseado por JSX real, con props/datos claros.
4. **Datos centralizados**: mover textos repetidos, links, cards, materias, FAQs, pasos, testimonios y modalidades a `siteData.js`.
5. **CSS estable**: no renombrar clases masivamente hasta que cada sección esté convertida y probada.
6. **Interacciones sin inline JS**: mantener eventos en React o en hooks, nunca volver a `onclick`.
7. **Assets controlados**: usar solo assets locales válidos; nada de placeholders ni URLs externas para imágenes existentes.
8. **Verificación sin build**: usar servidor Vite local, chequeos estáticos y navegador; no correr `npm run build`.

## Fases de implementación

### Fase 1 — Crear capa de datos central

Actualizar `frontend/src/data/siteData.js` para incluir:

- `brand`: nombre, titular, subtítulos, claims, badges.
- `contact`: WhatsApp, email, Instagram, textos de mensajes.
- `assets`: logos, fotos y alt texts.
- `navigation`: links desktop/mobile.
- `hero`: rotating words, CTAs, métricas, bullets.
- `trustBar`: indicadores de confianza.
- `letter`: carta/historia.
- `selector`: niveles, materias y mensajes WhatsApp.
- `subjects`: cards de materias.
- `levels`: niveles educativos.
- `method`: pasos, navegación y estadísticas.
- `about`: tabs, formación, trayectoria, valores, habilidades.
- `gallery`: fotos.
- `modalities`: combinaciones individual/grupal + presencial/virtual.
- `testimonials`: testimonios.
- `faqs`: preguntas/respuestas.
- `footer`: links y claims finales.

**Gate de aceptación:** no debe cambiar el DOM visible todavía; solo mover datos reutilizables.

### Fase 2 — Convertir componentes chicos primero

Convertir a JSX real:

- `FloatingActions.jsx`
- `ContactStrip.jsx`
- `CTASection.jsx`
- `Footer.jsx`
- `TrustBar.jsx`
- `FAQ.jsx`

Motivo: son secciones más acotadas, con menor riesgo visual.

**Gate de aceptación:**

- 0 usos nuevos de `dangerouslySetInnerHTML`.
- 0 handlers inline.
- Links WhatsApp/email/Instagram intactos.
- FAQ abre/cierra igual.

### Fase 3 — Convertir componentes de contenido medio

Convertir a JSX real:

- `Subjects.jsx`
- `Levels.jsx`
- `PhotoGallery.jsx`
- `LetterSection.jsx`
- `SituationSelector.jsx`

**Gate de aceptación:**

- Cards, fotos y textos se ven iguales.
- Selector mantiene niveles/materias/mensaje/CTA.
- Assets siguen siendo locales y válidos.

### Fase 4 — Convertir componentes complejos

Convertir con más cuidado:

- `Header.jsx`
- `Hero.jsx`
- `Method.jsx`
- `About.jsx`
- `Modalities.jsx`
- `Testimonials.jsx`

Para estas secciones, priorizar mantener clases actuales al inicio. Después de verificar, recién evaluar nombres de clases más claros si no rompe CSS.

**Gate de aceptación:**

- Menú mobile abre/cierra.
- Rotating words y animaciones del hero siguen funcionando.
- Steps del método cambian correctamente.
- Tabs de “Sobre mí” cambian correctamente.
- Modalidades actualizan panel activo.
- Testimonios conservan layout.

### Fase 5 — Reemplazar `HtmlBlock`

Cuando todas las secciones estén en JSX:

- Eliminar `frontend/src/components/HtmlBlock.jsx`.
- Eliminar dependencia `html-react-parser` si ya no se usa.
- Revisar `package.json` y `package-lock.json`.

**Gate de aceptación:**

- `HtmlBlock` aparece 0 veces.
- `html-react-parser` no aparece en imports.
- La app sigue cargando en Vite.

### Fase 6 — Ordenar hooks/interacciones

Crear o consolidar hooks:

- `useScrollEffects`
- `useMobileDrawer`
- `useSectionNavigation`
- `useRevealAnimations`
- `useSelectorFlow`
- `useMethodSteps`
- `useAboutTabs`
- `useModalities`

La migración puede empezar manteniendo `landing-interactions.js`, pero el objetivo final de Etapa 3 es que las interacciones críticas vivan en React/hook propio, no como script global opaco.

**Gate de aceptación:**

- No hay dependencia innecesaria de funciones globales `window.*` para interacciones principales.
- No se pierden animaciones.
- No aparecen errores de consola.

### Fase 7 — CSS profesional sin rediseñar

Ordenar CSS en archivos legibles:

- `globals.css`: reset, variables, layout base, botones, helpers.
- `animations.css`: keyframes, reveal, microinteracciones.
- `sections.css` o módulos por sección si conviene: hero, nav, cards, FAQ, footer.

Regla: **no cambiar nombres de clases antes de tener JSX estable**. Si se renombran, debe hacerse con búsqueda total y verificación visual.

**Gate de aceptación:**

- CSS sigue legible y agrupado.
- No se pierden variables de paleta.
- No cambia la estética original.

### Fase 8 — Verificación final

Ejecutar solo verificaciones permitidas:

- Chequeo estático:
  - `HtmlBlock`: 0.
  - `html = \`` en componentes: 0.
  - `dangerouslySetInnerHTML`: 0.
  - `onclick=` / `oninput=`: 0.
  - logos legacy: 0.
- Sintaxis backend:
  - `node --check backend/src/**/*.js`
- Servidor Vite:
  - HTTP 200 en `http://127.0.0.1:5173/`
- Navegador:
  - todas las secciones presentes.
  - 0 imágenes rotas.
  - 0 warnings/errors.
  - título correcto.
  - WhatsApp/Instagram/email presentes.
  - interacciones principales funcionando.

No ejecutar `npm run build` salvo que el usuario cambie explícitamente la regla del proyecto.

## Orden recomendado de ejecución

1. Centralizar datos de contacto/assets/navigation.
2. Convertir `FAQ`, `Footer`, `ContactStrip`, `CTASection`, `FloatingActions`.
3. Convertir cards/listas (`Subjects`, `Levels`, `TrustBar`).
4. Convertir `SituationSelector` y mover su lógica a React.
5. Convertir `Header` y menú mobile.
6. Convertir `Hero`.
7. Convertir `Method`, `About`, `Modalities`.
8. Eliminar `HtmlBlock` y `html-react-parser`.
9. Reorganizar CSS sin rediseñar.
10. Verificar todo contra la referencia visual y funcional.

## Criterio de “Etapa 3 completa”

La Etapa 3 solo se considera terminada cuando:

- La landing está compuesta por componentes React reales, no strings HTML parseados.
- `siteData.js` contiene los datos repetidos y editables.
- Los assets están ordenados y validados.
- Las clases/CSS están más legibles sin alterar estética.
- No hay código duplicado innecesario.
- Las interacciones principales funcionan.
- La verificación final pasa sin errores dentro de las restricciones del proyecto.
