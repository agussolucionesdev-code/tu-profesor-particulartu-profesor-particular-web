const DEFAULT_API_URL = 'http://localhost:4000';

function resolveApiUrl() {
  return (import.meta.env.VITE_API_URL || DEFAULT_API_URL).replace(/\/$/, '');
}

export async function submitContact(payload) {
  const response = await fetch(`${resolveApiUrl()}/api/contact`, {
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

  const data = await response.json().catch(() => ({ ok: false, error: 'invalid_json_response' }));

  if (!response.ok) {
    const error = new Error(data.error || 'contact_request_failed');
    error.status = response.status;
    error.payload = data;
    throw error;
  }

  return data;
}
