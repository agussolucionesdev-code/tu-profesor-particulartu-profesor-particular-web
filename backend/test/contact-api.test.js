import test from 'node:test';
import assert from 'node:assert/strict';
import { app } from '../src/app.js';

async function withServer(run) {
  const server = await new Promise((resolve) => {
    const instance = app.listen(0, () => resolve(instance));
  });

  const address = server.address();
  const baseUrl = `http://127.0.0.1:${address.port}`;

  try {
    await run(baseUrl);
  } finally {
    await new Promise((resolve, reject) => server.close((error) => (error ? reject(error) : resolve())));
  }
}

test('GET /health responde estado del servicio', async () => {
  await withServer(async (baseUrl) => {
    const response = await fetch(`${baseUrl}/health`);
    const json = await response.json();

    assert.equal(response.status, 200);
    assert.deepEqual(json, { ok: true, service: 'tu-profesor-particular-api' });
  });
});

test('POST /api/contact acepta contacto válido con email y dry-run', async () => {
  await withServer(async (baseUrl) => {
    const response = await fetch(`${baseUrl}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Agustín',
        email: 'agus@example.com',
        whatsapp: '',
        level: 'Secundario',
        subject: 'Matemática',
        inquiryType: 'Preparación de examen',
        message: 'Necesito ayuda para un parcial.',
      }),
    });
    const json = await response.json();

    assert.equal(response.status, 202);
    assert.equal(json.ok, true);
    assert.equal(json.accepted, true);
    assert.equal(typeof json.dryRun, 'boolean');
  });
});

test('POST /api/contact acepta contacto válido con whatsapp sin email', async () => {
  await withServer(async (baseUrl) => {
    const response = await fetch(`${baseUrl}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Agustín',
        email: '',
        whatsapp: '1164236675',
        level: 'Universitario',
        subject: 'Física',
        inquiryType: 'Consulta general',
        message: 'Quiero saber disponibilidad.',
      }),
    });
    const json = await response.json();

    assert.equal(response.status, 202);
    assert.equal(json.ok, true);
    assert.equal(json.accepted, true);
  });
});

test('POST /api/contact rechaza cuando faltan email y whatsapp', async () => {
  await withServer(async (baseUrl) => {
    const response = await fetch(`${baseUrl}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Agustín',
        email: '',
        whatsapp: '',
        level: 'Secundario',
        subject: 'Química',
        inquiryType: 'Apoyo escolar',
        message: 'Necesito clases.',
      }),
    });
    const json = await response.json();

    assert.equal(response.status, 400);
    assert.equal(json.ok, false);
    assert.equal(json.error, 'validation_error');
  });
});

test('POST /api/contact rechaza email inválido', async () => {
  await withServer(async (baseUrl) => {
    const response = await fetch(`${baseUrl}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Agustín',
        email: 'correo-invalido',
        whatsapp: '',
        level: 'Secundario',
        subject: 'Matemática',
        inquiryType: 'Preparación de examen',
        message: 'Necesito ayuda.',
      }),
    });
    const json = await response.json();

    assert.equal(response.status, 400);
    assert.equal(json.ok, false);
    assert.equal(json.error, 'validation_error');
  });
});
