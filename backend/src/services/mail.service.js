import nodemailer from 'nodemailer';
import { env } from '../config/env.js';

function hasResendConfig() {
  return Boolean(env.resend.apiKey);
}

function hasSmtpConfig() {
  return Boolean(env.smtp.host && env.smtp.user && env.smtp.pass);
}

function formatContactText(contact) {
  return [
    'Nuevo contacto — Tu Profesor Particular',
    '',
    `Nombre: ${contact.name}`,
    `Email: ${contact.email || 'No informado'}`,
    `WhatsApp: ${contact.whatsapp || 'No informado'}`,
    `Nivel educativo: ${contact.level}`,
    `Materia: ${contact.subject}`,
    `Tipo de consulta: ${contact.inquiryType}`,
    '',
    'Mensaje:',
    contact.message,
  ].join('\n');
}

async function sendWithResend(contact, text) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.resend.apiKey}`,
      'Content-Type': 'application/json',
      'User-Agent': 'tu-profesor-particular-backend/0.1.0',
    },
    body: JSON.stringify({
      from: env.resend.from,
      to: [env.mailTo],
      subject: `Nuevo contacto de ${contact.name} — ${contact.subject}`,
      text,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend request failed (${response.status}): ${errorText}`);
  }

  return { sent: true, dryRun: false, provider: 'resend' };
}

async function sendWithSmtp(contact, text) {
  const transporter = nodemailer.createTransport({
    host: env.smtp.host,
    port: env.smtp.port,
    secure: env.smtp.port === 465,
    auth: { user: env.smtp.user, pass: env.smtp.pass },
  });

  await transporter.sendMail({
    from: env.mailFrom,
    to: env.mailTo,
    subject: `Nuevo contacto de ${contact.name} — ${contact.subject}`,
    replyTo: contact.email || undefined,
    text,
  });

  return { sent: true, dryRun: false, provider: 'smtp' };
}

export async function notifyContact(contact) {
  const text = formatContactText(contact);

  if (hasResendConfig()) {
    return sendWithResend(contact, text);
  }

  if (!hasSmtpConfig()) {
    console.info('[mail:dry-run] contact', text);
    return { sent: false, dryRun: true };
  }

  return sendWithSmtp(contact, text);
}
