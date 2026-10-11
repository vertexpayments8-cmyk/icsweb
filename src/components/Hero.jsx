import { motion, useReducedMotion } from 'motion/react';
import Icon from './Icons.jsx';
import WorkRegister from './WorkRegister.jsx';
import { CONTACT, whatsappLink } from '../data.js';

const EASE = [0.16, 1, 0.3, 1];

export default function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: EASE },
        };

  return (
    <section className="hero" id="top">
      <div className="wrap hero__inner">
        <div className="hero__copy">
          <motion.h1 className="hero__title" {...rise(0.05)}>
            Back-office work, <span className="hero__accent">done right</span> and on time.
          </motion.h1>
          <motion.p className="hero__lede" {...rise(0.18)}>
            Integrated Care Solutions handles data entry, accounting and backend processes for businesses, so your
            team can stay focused on customers.
          </motion.p>
          <motion.div className="hero__actions" {...rise(0.3)}>
            <a className="btn btn--primary btn--lg" href={CONTACT.phoneHref}>
              <Icon name="phone" size={20} />
              Call {CONTACT.person.split(' ')[0]}
            </a>
            <a
              className="btn btn--outline btn--lg"
              href={whatsappLink('Hello ICS, I would like to discuss back-office work for my business.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="whatsapp" size={20} />
              WhatsApp us
            </a>
          </motion.div>
          <motion.p className="hero__direct" {...rise(0.4)}>
            You speak directly with <strong>{CONTACT.person}</strong> · <span>{CONTACT.phoneDisplay}</span>
          </motion.p>
        </div>

        <motion.div
          className="hero__visual"
          initial={reduce ? false : { opacity: 0, y: 40, clipPath: 'inset(8% 0 0 0 round 14px)' }}
          animate={{ opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0 round 14px)' }}
          transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
        >
          <WorkRegister />
        </motion.div>
      </div>

      <div className="wrap">
        <ul className="hero__strip" aria-label="Core services">
          {['Data entry', 'Accounting', 'Backend process', 'GST support', 'Payroll', 'MIS reporting'].map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
