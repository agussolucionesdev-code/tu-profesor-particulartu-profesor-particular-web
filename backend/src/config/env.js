import 'dotenv/config';

function parsePort(value, fallback = 4000) {
  const port = Number(value ?? fallback);
  return Number.isInteger(port) && port > 0 ? port : fallback;
}

function parseOrigins(value) {
  return (value ?? 'http://localhost:5173')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);
}

export const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: parsePort(process.env.PORT),
  corsOrigin: parseOrigins(process.env.CORS_ORIGIN),
  smtp: {
    host: process.env.SMTP_HOST?.trim() || '',
    port: parsePort(process.env.SMTP_PORT, 587),
    user: process.env.SMTP_USER?.trim() || '',
    pass: process.env.SMTP_PASS?.trim() || '',
  },
  mailTo: process.env.MAIL_TO?.trim() || 'agustinsosa.profe@gmail.com',
  mailFrom: process.env.MAIL_FROM?.trim() || 'Tu Profesor Particular <no-reply@tuprofesorparticular.com>',
};
