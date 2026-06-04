import { z } from 'zod';

const optionalTrimmedString = (max) =>
  z
    .string()
    .trim()
    .max(max)
    .optional()
    .or(z.literal(''))
    .transform((value) => value ?? '');

export const contactSchema = z
  .object({
    name: z.string().trim().min(1, 'name_required').max(120),
    email: optionalTrimmedString(160).refine((value) => !value || z.email().safeParse(value).success, {
      message: 'email_invalid',
    }),
    whatsapp: optionalTrimmedString(40),
    level: z.string().trim().min(1, 'level_required').max(80),
    subject: z.string().trim().min(1, 'subject_required').max(80),
    inquiryType: z.string().trim().min(1, 'inquiry_type_required').max(80),
    message: z.string().trim().min(1, 'message_required').max(1200),
  })
  .refine((data) => data.email || data.whatsapp, {
    message: 'email_or_whatsapp_required',
    path: ['whatsapp'],
  });
