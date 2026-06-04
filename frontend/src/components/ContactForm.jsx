import { AlertCircle, CheckCircle2, LoaderCircle, Send } from 'lucide-react';
import { useMemo, useState } from 'react';
import { contactFormConfig, contactFormMessages, whatsappUrl } from '../data/siteData.js';
import { submitContact } from '../services/contactApi.js';

const INITIAL_VALUES = {
  name: '',
  email: '',
  whatsapp: '',
  level: '',
  subject: '',
  inquiryType: '',
  message: '',
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeValue(value) {
  return value.trim();
}

function validateContactForm(values) {
  const nextErrors = {};
  const normalized = Object.fromEntries(
    Object.entries(values).map(([key, value]) => [key, typeof value === 'string' ? normalizeValue(value) : value]),
  );

  if (!normalized.name) nextErrors.name = contactFormMessages.name_required;
  if (!normalized.level) nextErrors.level = contactFormMessages.level_required;
  if (!normalized.subject) nextErrors.subject = contactFormMessages.subject_required;
  if (!normalized.inquiryType) nextErrors.inquiryType = contactFormMessages.inquiry_type_required;
  if (!normalized.message) nextErrors.message = contactFormMessages.message_required;

  if (normalized.email && !EMAIL_REGEX.test(normalized.email)) {
    nextErrors.email = contactFormMessages.email_invalid;
  }

  if (!normalized.email && !normalized.whatsapp) {
    nextErrors.contactMethod = contactFormMessages.email_or_whatsapp_required;
  }

  return { normalized, errors: nextErrors };
}

function mapBackendIssues(issues = []) {
  const nextErrors = {};

  issues.forEach((issue) => {
    const field = issue.path?.[0];

    if (!field || nextErrors[field]) {
      return;
    }

    nextErrors[field] = contactFormMessages[issue.message] || contactFormMessages.validation_error;
  });

  if (nextErrors.whatsapp === contactFormMessages.email_or_whatsapp_required) {
    nextErrors.contactMethod = contactFormMessages.email_or_whatsapp_required;
    delete nextErrors.whatsapp;
  }

  return nextErrors;
}

function getSubmitFeedback(status, apiMeta) {
  if (status === 'success') {
    return {
      tone: 'success',
      icon: CheckCircle2,
      text: apiMeta?.dryRun
        ? 'Recibí tu consulta correctamente. La API quedó validada en modo seguro.'
        : 'Consulta enviada correctamente. Te voy a responder a la brevedad.',
    };
  }

  if (status === 'error') {
    return {
      tone: 'error',
      icon: AlertCircle,
      text: contactFormMessages[apiMeta?.code] || contactFormMessages.submit_error,
    };
  }

  return null;
}

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [apiMeta, setApiMeta] = useState(null);

  const feedback = useMemo(() => getSubmitFeedback(status, apiMeta), [status, apiMeta]);

  function handleChange(event) {
    const { name, value } = event.target;

    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      const next = { ...current };
      delete next[name];

      if (name === 'email' || name === 'whatsapp') {
        delete next.contactMethod;
      }

      return next;
    });

    if (status !== 'idle') {
      setStatus('idle');
      setApiMeta(null);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const { normalized, errors: nextErrors } = validateContactForm(values);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus('error');
      setApiMeta({ code: 'validation_error' });
      return;
    }

    setErrors({});
    setStatus('submitting');
    setApiMeta(null);

    try {
      const response = await submitContact(normalized);
      setValues(INITIAL_VALUES);
      setStatus('success');
      setApiMeta(response);
    } catch (error) {
      const backendValidationErrors =
        error.payload?.error === 'validation_error' ? mapBackendIssues(error.payload?.issues) : {};

      setErrors(backendValidationErrors);
      setStatus('error');
      setApiMeta({ code: error.code || error.payload?.error || 'submit_error' });
    }
  }

  return (
    <div className="cta-form-card">
      <div className="cta-form-heading">
        <span className="cta-form-kicker">{contactFormConfig.kicker}</span>
        <h3>{contactFormConfig.title}</h3>
        <p>{contactFormConfig.description}</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="contact-form-grid">
          <label className="form-field form-field-full">
            <span>Nombre</span>
            <input
              aria-invalid={Boolean(errors.name)}
              autoComplete="name"
              name="name"
              onChange={handleChange}
              placeholder="Tu nombre"
              required
              type="text"
              value={values.name}
            />
            {errors.name ? <small className="form-error">{errors.name}</small> : null}
          </label>

          <label className="form-field">
            <span>Email</span>
            <input
              aria-invalid={Boolean(errors.email)}
              autoComplete="email"
              name="email"
              onChange={handleChange}
              placeholder="nombre@email.com"
              type="email"
              value={values.email}
            />
            {errors.email ? <small className="form-error">{errors.email}</small> : null}
          </label>

          <label className="form-field">
            <span>WhatsApp</span>
            <input
              aria-invalid={Boolean(errors.whatsapp)}
              autoComplete="tel"
              name="whatsapp"
              onChange={handleChange}
              placeholder="11 6423 6675"
              type="tel"
              value={values.whatsapp}
            />
            {errors.whatsapp ? <small className="form-error">{errors.whatsapp}</small> : null}
          </label>

          {errors.contactMethod ? (
            <div className="form-error form-error-inline" role="alert">
              {errors.contactMethod}
            </div>
          ) : null}

          <label className="form-field">
            <span>Nivel educativo</span>
            <select aria-invalid={Boolean(errors.level)} name="level" onChange={handleChange} required value={values.level}>
              <option value="">Seleccioná un nivel</option>
              {contactFormConfig.levelOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.level ? <small className="form-error">{errors.level}</small> : null}
          </label>

          <label className="form-field">
            <span>Materia</span>
            <select aria-invalid={Boolean(errors.subject)} name="subject" onChange={handleChange} required value={values.subject}>
              <option value="">Seleccioná una materia</option>
              {contactFormConfig.subjectOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.subject ? <small className="form-error">{errors.subject}</small> : null}
          </label>

          <label className="form-field form-field-full">
            <span>Tipo de consulta</span>
            <select aria-invalid={Boolean(errors.inquiryType)} name="inquiryType" onChange={handleChange} required value={values.inquiryType}>
              <option value="">Seleccioná el tipo de consulta</option>
              {contactFormConfig.inquiryOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.inquiryType ? <small className="form-error">{errors.inquiryType}</small> : null}
          </label>

          <label className="form-field form-field-full">
            <span>Mensaje</span>
            <textarea
              aria-invalid={Boolean(errors.message)}
              name="message"
              onChange={handleChange}
              placeholder="Contame qué necesitás, en qué tema estás trabado y si tenés examen cerca."
              required
              rows="5"
              value={values.message}
            />
            {errors.message ? <small className="form-error">{errors.message}</small> : null}
          </label>
        </div>

        <button className="btn btn-wa contact-form-submit" disabled={status === 'submitting'} type="submit">
          {status === 'submitting' ? (
            <>
              <LoaderCircle aria-hidden="true" className="spin" size={18} /> Enviando...
            </>
          ) : (
            <>
              <Send aria-hidden="true" size={18} /> {contactFormConfig.submitLabel}
            </>
          )}
        </button>

        <div aria-live="polite" className="contact-form-status-wrap">
          {feedback ? (
            <div className={`form-status form-status-${feedback.tone}`} role="status">
              <feedback.icon aria-hidden="true" size={18} />
              <span>{feedback.text}</span>
            </div>
          ) : null}
        </div>

        <p className="cta-inline-note">
          Si preferís resolverlo más rápido, también podés ir directo por{' '}
          <a href={whatsappUrl()} rel="noreferrer" target="_blank">
            WhatsApp
          </a>
          .
        </p>
      </form>
    </div>
  );
}
