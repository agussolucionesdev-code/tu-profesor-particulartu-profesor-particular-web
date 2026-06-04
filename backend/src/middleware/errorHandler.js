import { ZodError } from 'zod';

export function errorHandler(error, req, res, next) {
  if (error instanceof ZodError) {
    return res.status(400).json({ ok: false, error: 'validation_error', issues: error.issues });
  }

  if (error?.message === 'cors_not_allowed') {
    return res.status(403).json({ ok: false, error: 'cors_not_allowed' });
  }

  console.error(error);
  return res.status(error.statusCode ?? 500).json({
    ok: false,
    error: error.publicMessage ?? 'internal_server_error',
  });
}
