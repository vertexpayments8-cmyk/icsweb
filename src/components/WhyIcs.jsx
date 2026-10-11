import { motion, useReducedMotion } from 'motion/react';
import Icon from './Icons.jsx';
import { CONTACT, SECTORS } from '../data.js';

const POINTS = [
  {
    icon: 'user',
    title: 'A direct line to the person in charge',
    text: `No call centre and no ticket numbers. You call ${CONTACT.person}, who heads ICS.`,
  },
  {
    icon: 'stack',
    title: 'Nine services, one provider',
    text: 'Data entry, accounts, GST and payroll support and backend work, without managing several vendors.',
  },
  {
    icon: 'layers',
    title: 'One-time or ongoing',
    text: 'Hand over a one-time backlog, or regular work every month.',
  },
  {
    icon: 'receipt',
    title: 'Registered Delhi business',
    text: `GST-registered and based in Mayur Vihar Phase III, Delhi. GSTIN ${CONTACT.gstin}.`,
  },
];

const EASE = [0.16, 1, 0.3, 1];

export default function WhyIcs() {
  const reduce = useReducedMotion();
  return (
    <section className="section why" id="why-ics" aria-labelledby="why-title">
      <div className="wrap why__grid">
        <div className="why__intro">
          <h2 id="why-title" className="section-title">
            The person responsible for your work is the person you speak to.
          </h2>
          <div className="contact-card">
            <span className="contact-card__mono" aria-hidden="true">
              KC
            </span>
            <span className="contact-card__text">
              <strong>{CONTACT.person}</strong>
              <span>Your point of contact at ICS</span>
              <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
            </span>
          </div>
        </div>

        <ul className="why__points">
          {POINTS.map((p, i) => (
            <motion.li
              key={p.title}
              className="why__point"
              initial={reduce ? false : { opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '0px 0px -12% 0px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
            >
              <span className="why__icon">
                <Icon name={p.icon} size={26} />
              </span>
              <span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </span>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="wrap">
        <div className="sectors">
          <h3 className="sectors__title">Suited to businesses that run on paperwork</h3>
          <ul className="sectors__list">
            {SECTORS.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
