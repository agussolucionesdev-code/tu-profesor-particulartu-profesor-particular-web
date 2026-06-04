# Tu Profesor Particular Web

Monorepo para migrar la landing aprobada a React + Node.

## Estructura

- `frontend/`: React + Vite. Migración visual 1:1 desde `reference-static-site/`.
- `backend/`: Node.js + Express para contacto/leads.
- `codex-tu-profesor-particular-handoff/reference-static-site/`: fuente de verdad visual.
- `docs/`: notas técnicas.

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Vercel:
- Root Directory: `frontend`
- Build Command: `npm run build`
- Output Directory: `dist`

## Backend

```bash
cd backend
npm install
npm run dev
```

Endpoints:
- `GET /health`
- `POST /api/leads`
- `POST /api/contact`

Render:
- Root Directory: `backend`
- Build Command: `npm install`
- Start Command: `npm start`

## Importante

Los logos legacy del ZIP no se usan. La web usa los logos nuevos descargados desde Google Drive, carpeta `Tu Profesor Particular/Logos/Nuevos logos`.

No se ejecutó build porque las instrucciones del proyecto dicen explícitamente: “Never build after changes”.
