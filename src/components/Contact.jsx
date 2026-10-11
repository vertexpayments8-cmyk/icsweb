import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Icon from './Icons.jsx';
import { CONTACT, SERVICES, whatsappLink } from '../data.js';

const EMPTY = { name: '', phone: '', company: '', service: '', message: '' };

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = 'Enter your name so we know who to ask for.';
  const digits = v.phone.replace(/\D/g, '').replace(/^91(?=\d{10}$)/, '');
  if (!digits) e.phone = 'Enter a mobile number so we can call you back.';
  else if (!/^[6-9]\d{9}$/.test(digits)) e.phone = 'Enter a 10-digit Indian mobile number, for example 98115 51563.';
  if (!v.service) e.service = 'Choose the service you need, or “Not sure yet”.';
  return e;
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (k) => (ev) => {
    setValues((v) => ({ ...v, [k]: ev.target.value }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const e = validate(values);
    setErrors(e);
    if (Object.keys(e).length) {
      document.getElementById(`f-${Object.keys(e)[0]}`)?.focus();
      return;
    }
    const text = [
      'New enquiry from the ICS website',
      `Name: ${values.name.trim()}`,
      `Phone: ${values.phone.trim()}`,
      values.company.trim() && `Business: ${values.company.trim()}`,
      `Service: ${values.service}`,
      values.message.trim() && `Details: ${values.message.trim()}`,
    ]
      .filter(Boolean)
      .join('\n');
    window.open(whatsappLink(text), '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  const field = (k) => ({
    id: `f-${k}`,
    name: k,
    value: values[k],
    onChange: set(k),
    'aria-invalid': errors[k] ? true : undefined,
    'aria-describedby': errors[k] ? `e-${k}` : undefined,
  });

  const Err = ({ k }) =>
    errors[k] ? (
      <span className="field__error" id={`e-${k}`}>
        {errors[k]}
      </span>
    ) : null;

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact__grid">
        <div className="contact__info">
          <h2 id="contact-title" className="section-title">
            Tell us about the work
          </h2>
          <p className="section-lede">
            Send the details and they go straight to {CONTACT.person} on WhatsApp. Prefer to talk? Call{' '}
            {CONTACT.phoneDisplay}.
          </p>

          <dl className="contact__list">
            <div>
              <dt>
                <Icon name="phone" size={20} /> Phone
              </dt>
              <dd>
                <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
              </dd>
            </div>
            <div>
              <dt>
                <Icon name="whatsapp" size={20} /> WhatsApp
              </dt>
              <dd>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  Message {CONTACT.person}
                </a>
              </dd>
            </div>
            <div>
              <dt>
                <Icon name="pin" size={20} /> Office
              </dt>
              <dd>
                <address>
                  {CONTACT.addressLines.map((l) => (
                    <span key={l}>{l}</span>
                  ))}
                </address>
                <a className="link-arrow" href={CONTACT.mapsHref} target="_blank" rel="noopener noreferrer">
                  Open in Google Maps <Icon name="arrow" size={16} />
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="contact__formwrap">
          <AnimatePresence mode="wait" initial={false}>
            {sent ? (
              <motion.div
                key="sent"
                className="form-done"
                role="status"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <span className="form-done__icon">
                  <Icon name="check" size={32} strokeWidth={2.2} />
                </span>
                <h3>Your message is ready in WhatsApp</h3>
                <p>
                  Press send in WhatsApp to deliver it. If WhatsApp didn’t open, call {CONTACT.person} on{' '}
                  <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>.
                </p>
                <button
                  className="btn btn--outline"
                  onClick={() => {
                    setValues(EMPTY);
                    setSent(false);
                  }}
                >
                  Send another enquiry
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                className="form"
                noValidate
                onSubmit={onSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="form__row">
                  <label className="field">
                    <span className="field__label">Your name *</span>
                    <input type="text" autoComplete="name" {...field('name')} />
                    <Err k="name" />
                  </label>
                  <label className="field">
                    <span className="field__label">Mobile number *</span>
                    <input type="tel" inputMode="tel" autoComplete="tel" placeholder="98xxx xxxxx" {...field('phone')} />
                    <Err k="phone" />
                  </label>
                </div>
                <label className="field">
                  <span className="field__label">Business name</span>
                  <input type="text" autoComplete="organization" {...field('company')} />
                </label>
                <label className="field">
                  <span className="field__label">Service needed *</span>
                  <span className="select">
                    <select {...field('service')}>
                      <option value="">Select a service</option>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </span>
                  <Err k="service" />
                </label>
                <label className="field">
                  <span className="field__label">About the work</span>
                  <textarea
                    rows={4}
                    placeholder="Type of documents, approximate volume, when you need it back"
                    {...field('message')}
                  />
                </label>
                <button type="submit" className="btn btn--primary btn--lg btn--block">
                  <Icon name="whatsapp" size={20} />
                  Send on WhatsApp
                </button>
                <p className="form__note">Opens WhatsApp with your details filled in. Nothing is stored on this website.</p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
