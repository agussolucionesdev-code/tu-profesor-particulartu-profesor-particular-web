import { contactSchema } from '../validators/contact.schema.js';
import { notifyContact } from '../services/mail.service.js';

export async function createContact(req, res, next) {
  try {
    const contact = req.validatedBody ?? contactSchema.parse(req.body);
    const delivery = await notifyContact(contact);

    res.status(202).json({
      ok: true,
      accepted: true,
      dryRun: delivery.dryRun,
    });
  } catch (error) {
    next(error);
  }
}
