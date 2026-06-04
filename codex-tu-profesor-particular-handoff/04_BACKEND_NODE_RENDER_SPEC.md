# Especificación backend — Node JS / Express para Render

## Objetivo inicial
Crear un backend Node JS simple, seguro y escalable para acompañar la web. En la primera versión no debe complicarse con funcionalidades innecesarias: debe resolver contacto, leads y salud del servicio.

## Stack sugerido
- Node JS.
- Express.
- `cors`.
- `helmet`.
- `express-rate-limit`.
- `zod` para validación.
- `dotenv`.
- `nodemailer` para notificaciones por email, si se configuran credenciales SMTP.
- `morgan` para logs básicos en desarrollo.

## Estructura sugerida
```txt
backend/
  src/
    app.js
    server.js
    config/
      env.js
    routes/
      health.routes.js
      leads.routes.js
      contact.routes.js
    controllers/
      leads.controller.js
      contact.controller.js
    services/
      mail.service.js
    validators/
      lead.schema.js
      contact.schema.js
    middleware/
      errorHandler.js
      rateLimit.js
  package.json
  .env.example
```

## Endpoints mínimos
### `GET /health`
Devuelve estado del backend.

Respuesta esperada:
```json
{ "ok": true, "service": "tu-profesor-particular-api" }
```

### `POST /api/leads`
Recibe datos de un potencial estudiante/familia.

Campos sugeridos:
```json
{
  "name": "",
  "phone": "",
  "email": "",
  "level": "",
  "subject": "",
  "modality": "",
  "message": "",
  "source": "landing"
}
```

Validaciones:
- `name`: opcional o requerido según formulario final.
- `phone` o `email`: al menos uno debería estar presente si se agrega formulario real.
- `message`: limitar longitud.
- Sanitizar entradas.
- Rate limit para evitar spam.

### `POST /api/contact`
Formulario general de contacto.

## Seguridad y privacidad
- No guardar datos sensibles en el repo.
- No subir `.env`.
- CORS restringido al dominio de Vercel en producción.
- Rate limit en endpoints públicos.
- Helmet activado.
- Validar todo input con Zod.
- Manejo centralizado de errores.

## Variables de entorno sugeridas
```env
NODE_ENV=development
PORT=4000
CORS_ORIGIN=http://localhost:5173
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
MAIL_TO=agustinsosa.profe@gmail.com
MAIL_FROM="Tu Profesor Particular <no-reply@tuprofesorparticular.com>"
```

## Integración con frontend
- Frontend debe leer `VITE_API_URL`.
- Si el backend no está configurado aún, los CTAs a WhatsApp deben seguir funcionando.
- El backend nunca debe bloquear el CTA principal: WhatsApp es el canal principal.
