# Plan de despliegue — GitHub + Vercel + Render

## Arquitectura propuesta
Repositorio monorepo:

```txt
tu-profesor-particular/
  frontend/   # React + Vite, desplegado en Vercel
  backend/    # Node + Express, desplegado en Render
  reference-static-site/ # fuente visual de verdad durante la migración
  docs/       # contexto, decisiones, checklist
  README.md
```

## Flujo de trabajo recomendado
1. Crear repo en GitHub.
2. Subir este paquete de contexto y la landing de referencia.
3. Pedirle a Codex que cree el monorepo React/Node respetando la referencia visual.
4. Codex abre PR con la primera migración funcional.
5. Revisar visualmente desktop/mobile.
6. Recién cuando la migración 1:1 esté aprobada, agregar formularios reales, backend y mejoras.
7. Conectar `frontend/` a Vercel.
8. Conectar `backend/` a Render.
9. Configurar variables de entorno.
10. Verificar producción.

## Vercel — frontend
Configuración típica:
- Root Directory: `frontend`.
- Build Command: `npm run build`.
- Output Directory: `dist`.
- Variables:
```env
VITE_API_URL=https://TU-BACKEND.onrender.com
VITE_WHATSAPP_NUMBER=5491164236675
VITE_EMAIL=agustinsosa.profe@gmail.com
VITE_INSTAGRAM=https://www.instagram.com/tuprofesor.ar/
```

## Render — backend
Configuración típica:
- Service Type: Web Service.
- Root Directory: `backend`.
- Build Command: `npm install`.
- Start Command: `npm start`.
- Variables:
```env
NODE_ENV=production
PORT=10000
CORS_ORIGIN=https://TU-FRONTEND.vercel.app
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
MAIL_TO=agustinsosa.profe@gmail.com
```

## GitHub Actions sugerido
Agregar CI para validar PRs:
```yaml
name: CI
on:
  pull_request:
  push:
    branches: [main]

jobs:
  frontend:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: frontend
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
          cache-dependency-path: frontend/package-lock.json
      - run: npm ci
      - run: npm run build

  backend:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: backend
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
          cache-dependency-path: backend/package-lock.json
      - run: npm ci
      - run: npm test --if-present
```

## Orden correcto de tareas
No empezar por backend ni por deploy. Primero migrar fielmente la landing. Después funcionalidad. Después backend. Después despliegue.
