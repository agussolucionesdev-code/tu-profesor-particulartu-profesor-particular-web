const DEV_FALLBACK_API_URL = 'http://localhost:4000';

function createApiError(message, extras = {}) {
  const error = new Error(message);
  Object.assign(error, extras);
  return error;
}

function resolveApiUrl() {
  const configuredApiUrl = import.meta.env.VITE_API_URL?.trim();

  if (configuredApiUrl) {
    return configuredApiUrl.replace(/\/$/, '');
  }

  if (import.meta.env.DEV) {
    return DEV_FALLBACK_API_URL;
  }

  throw createApiError('missing_api_url', {
    code: 'missing_api_url',
    status: 0,
    payload: { ok: false, error: 'missing_api_url' },
  });
}

export async function submitContact(payload) {
  let response;

  try {
    response = await fetch(`${resolveApiUrl()}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: payload.name,
        email: payload.email || '',
        whatsapp: payload.whatsapp || '',
        level: payload.level,
        subject: payload.subject,
        inquiryType: payload.inquiryType,
        message: payload.message,
      }),
    });
  } catch (cause) {
    throw createApiError('network_error', {
      code: 'network_error',
      status: 0,
      payload: { ok: false, error: 'network_error' },
      cause,
    });
  }

  const data = await response.json().catch(() => ({ ok: false, error: 'invalid_json_response' }));

  if (!response.ok) {
    throw createApiError(data.error || 'contact_request_failed', {
      code: data.error || 'contact_request_failed',
      status: response.status,
      payload: data,
    });
  }

  return data;
}
