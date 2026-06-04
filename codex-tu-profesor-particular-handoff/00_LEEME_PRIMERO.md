# Paquete de contexto para Codex — Tu Profesor Particular

Este paquete sirve para llevar a Codex/agente de programación todo el contexto necesario para transformar la landing aprobada de **Tu Profesor Particular** en una web moderna con React JS, Node JS, GitHub, Vercel y Render.

## Qué contiene
- `reference-static-site/`: versión HTML/CSS/JS aprobada. Es la fuente de verdad visual.
- `01_PROMPT_MAESTRO_CODEX.md`: prompt principal para pegar en Codex.
- `02_CONTEXTO_MARCA.md`: identidad de marca, tono, público y restricciones.
- `03_FRONTEND_REACT_SPEC.md`: cómo migrar la landing a React.
- `04_BACKEND_NODE_RENDER_SPEC.md`: backend Node/Express sugerido.
- `05_DEPLOY_GITHUB_VERCEL_RENDER.md`: arquitectura de deploy.
- `06_CHECKLIST_ACEPTACION.md`: checklist para revisar si Codex cumplió.
- `AGENTS.md`: instrucciones permanentes para agentes de código.

## Cómo usarlo
1. Crear un repositorio nuevo en GitHub, por ejemplo `tu-profesor-particular-web`.
2. Subir todo este paquete al repo.
3. Abrir Codex sobre ese repo.
4. Pegar el contenido de `01_PROMPT_MAESTRO_CODEX.md` como primera tarea.
5. Pedir que trabaje por PR o por commit controlado.
6. Revisar primero fidelidad visual, después backend y deploy.

## Orden recomendado
1. Migración 1:1 a React.
2. Componentización y limpieza.
3. Backend mínimo.
4. Formularios reales.
5. Deploy Vercel + Render.
6. Mejoras futuras: agenda, panel, testimonios reales, blog, SEO avanzado.
