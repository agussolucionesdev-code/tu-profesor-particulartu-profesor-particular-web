import nodemailer from 'nodemailer';
import { env } from '../config/env.js';

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

export async function notifyContact(contact) {
  const text = formatContactText(contact);

  if (!hasSmtpConfig()) {
    console.info('[mail:dry-run] contact', text);
    return { sent: false, dryRun: true };
  }

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

  return { sent: true, dryRun: false };
}
