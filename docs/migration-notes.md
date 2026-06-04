# Migración 1:1 — notas técnicas

La primera versión React preserva la referencia HTML/CSS/JS con mínima intervención visual.

## Decisiones

- Se copiaron las fotos reales del sitio de referencia.
- Se reemplazaron los logos viejos por los nuevos de Drive.
- El CSS de referencia se preservó como `frontend/src/styles/globals.css` para no degradar fidelidad.
- Las interacciones de referencia se preservan en `frontend/public/landing-interactions.js` y se cargan desde `useLandingInteractions`.
- La landing está separada en componentes por sección para permitir refactor progresivo sin rediseñar.

## Próximo refactor recomendado

Extraer progresivamente contenido desde HTML crudo hacia JSX real y `src/data/siteData.js`, sección por sección, verificando visualmente cada paso.
