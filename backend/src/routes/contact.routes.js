import { Router } from 'express';
import { createContact } from '../controllers/contact.controller.js';
import { validate } from '../middleware/validate.js';
import { contactSchema } from '../validators/contact.schema.js';

export const contactRoutes = Router();
contactRoutes.post('/api/contact', validate(contactSchema), createContact);
