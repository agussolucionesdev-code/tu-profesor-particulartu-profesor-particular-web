# Prompt maestro para Codex — Tu Profesor Particular

Actuá como desarrollador full‑stack senior especializado en React, Node, performance, UI premium y despliegues en Vercel/Render.

## Contexto
Estoy construyendo la web oficial de mi emprendimiento educativo **Tu Profesor Particular**, marca personal de **Agustín Elías Sosa**. Ya existe una landing estática aprobada en HTML/CSS/JS dentro de `reference-static-site/`. Esa landing es la **fuente de verdad visual y funcional**: logo, fotos, textos, colores, animaciones, CTAs e interacciones deben mantenerse.

## Objetivo de esta tarea
Convertir la landing estática en una aplicación profesional con:
- Frontend en **React JS + Vite** para desplegar en **Vercel**.
- Backend en **Node JS + Express** para desplegar en **Render**.
- Repositorio organizado en GitHub como monorepo.
- Funcionalidad práctica, escalable y mantenible.

## Regla más importante
No rediseñes desde cero. Primero replicá 1:1 la landing de referencia. La prioridad es que se vea y funcione igual que `reference-static-site/index.html`. Después, en tareas posteriores, se podrán mejorar formularios, backend, CMS, agenda, panel, etc.

## Tareas obligatorias
1. Auditar `reference-static-site/index.html`, `styles.css`, `script.js` y `assets/`.
2. Crear un mapa breve de componentes React antes de codificar.
3. Crear estructura monorepo:
   - `frontend/` con React + Vite.
   - `backend/` con Node + Express.
   - `docs/` con notas técnicas.
4. Migrar secciones a componentes React:
   - Navbar.
   - Hero.
   - Carta / historia.
   - Selector interactivo de situación.
   - Materias.
   - Niveles.
   - Método.
   - Sobre mí.
   - Galería.
   - Modalidades.
   - Testimonios.
   - FAQ.
   - CTA final.
   - Footer.
   - WhatsApp flotante.
5. Migrar interacciones:
   - progress bar;
   - navbar scrolled;
   - active section;
   - drawer mobile;
   - scroll suave;
   - palabras rotativas;
   - reveal on scroll;
   - contadores;
   - selector nivel/materia;
   - cards expandibles;
   - tabs;
   - FAQ;
   - modalidades;
   - tilt 3D.
6. Centralizar datos editables en `src/data/`.
7. Copiar assets a `frontend/public/assets/` sin romper nombres ni rutas.
8. Crear backend mínimo con:
   - `GET /health`;
   - `POST /api/leads`;
   - `POST /api/contact`;
   - validación con Zod;
   - CORS;
   - Helmet;
   - rate limit;
   - `.env.example`.
9. Agregar README con instrucciones de instalación, desarrollo y deploy.
10. Ejecutar build del frontend y test/build del backend antes de finalizar.

## Criterio de aceptación
La tarea está completa solo si:
- El frontend React se ve prácticamente igual al HTML de referencia.
- El logo y todas las fotos cargan correctamente.
- Todas las animaciones e interacciones principales funcionan.
- No hay errores en consola.
- `npm run build` del frontend funciona.
- El backend responde `/health`.
- El README explica cómo desplegar frontend en Vercel y backend en Render.

## Restricciones
- No borrar ni reemplazar assets.
- No inventar un logo nuevo.
- No modificar la identidad visual sin aprobación.
- No convertirlo en plantilla genérica.
- No subir `.env` ni credenciales.
- No incluir DNI, CV ni documentos privados.
- No bloquear WhatsApp: el CTA principal debe seguir funcionando aunque el backend no esté listo.

## Resultado esperado
Abrí un PR o dejá el repo con una primera versión funcional, lista para revisar visualmente. En el resumen final indicá:
- qué archivos creaste;
- cómo correr frontend y backend;
- qué falta configurar para producción;
- qué puntos visuales conviene revisar manualmente.
