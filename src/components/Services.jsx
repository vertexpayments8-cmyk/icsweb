import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import Icon from './Icons.jsx';
import { SERVICES, whatsappLink } from '../data.js';

const EASE = [0.16, 1, 0.3, 1];

function useIsWide(query = '(min-width: 960px)') {
  const [wide, setWide] = useState(() => typeof window !== 'undefined' && window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const on = () => setWide(mq.matches);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, [query]);
  return wide;
}

function Detail({ s }) {
  return (
    <>
      <div className="svc-detail__head">
        <span className="svc-detail__icon">
          <Icon name={s.icon} size={34} strokeWidth={1.4} />
        </span>
      </div>
      <h3 className="svc-detail__title">{s.title}</h3>
      <p className="svc-detail__summary">{s.summary}</p>
      <h4 className="svc-detail__subhead">What’s included</h4>
      <ul className="svc-detail__list">
        {s.includes.map((item) => (
          <li key={item}>
            <Icon name="check" size={18} strokeWidth={2} />
            {item}
          </li>
        ))}
      </ul>
      <a
        className="btn btn--primary"
        href={whatsappLink(`Hello ICS, I would like to know more about your ${s.title.toLowerCase()} service.`)}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ask about {s.title.toLowerCase()}
        <Icon name="arrow" size={18} />
      </a>
    </>
  );
}

export default function Services() {
  const wide = useIsWide();
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [openId, setOpenId] = useState(SERVICES[0].id);
  const tabs = useRef([]);

  const onKeyDown = (e) => {
    const keys = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    if (e.key in keys) {
      e.preventDefault();
      const next = (active + keys[e.key] + SERVICES.length) % SERVICES.length;
      setActive(next);
      tabs.current[next]?.focus();
    } else if (e.key === 'Home' || e.key === 'End') {
      e.preventDefault();
      const next = e.key === 'Home' ? 0 : SERVICES.length - 1;
      setActive(next);
      tabs.current[next]?.focus();
    }
  };

  return (
    <section className="section services" id="services" aria-labelledby="services-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="services-title" className="section-title">
            Services, clearly defined
          </h2>
          <p className="section-lede">
            Nine back-office services under one roof. Take one, or combine several with a single point of contact.
          </p>
        </div>

        {wide ? (
          <div className="svc">
            <div className="svc__list" role="tablist" aria-orientation="vertical" aria-label="Services">
              {SERVICES.map((s, i) => (
                <button
                  key={s.id}
                  ref={(el) => (tabs.current[i] = el)}
                  role="tab"
                  id={`tab-${s.id}`}
                  aria-selected={active === i}
                  aria-controls={`panel-${s.id}`}
                  tabIndex={active === i ? 0 : -1}
                  className={`svc__tab ${active === i ? 'is-active' : ''}`}
                  onClick={() => setActive(i)}
                  onKeyDown={onKeyDown}
                >
                  {active === i && (
                    <motion.span
                      layoutId="svc-marker"
                      className="svc__marker"
                      transition={{ duration: reduce ? 0 : 0.5, ease: EASE }}
                    />
                  )}
                  <Icon name={s.icon} size={22} />
                  <span>{s.title}</span>
                  <Icon name="arrow" size={18} className="svc__chev" />
                </button>
              ))}
            </div>

            <div className="svc__panel">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={SERVICES[active].id}
                  role="tabpanel"
                  id={`panel-${SERVICES[active].id}`}
                  aria-labelledby={`tab-${SERVICES[active].id}`}
                  className="svc-detail"
                  initial={reduce ? false : { opacity: 0, y: 14, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={reduce ? undefined : { opacity: 0, y: -10, filter: 'blur(4px)' }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  <Detail s={SERVICES[active]} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        ) : (
          <div className="svc-acc">
            {SERVICES.map((s) => {
              const open = openId === s.id;
              return (
                <div key={s.id} className={`svc-acc__item ${open ? 'is-open' : ''}`}>
                  <h3 className="svc-acc__heading">
                    <button
                      aria-expanded={open}
                      aria-controls={`acc-${s.id}`}
                      onClick={() => setOpenId(open ? null : s.id)}
                    >
                      <Icon name={s.icon} size={22} />
                      <span>{s.title}</span>
                      <span className="svc-acc__plus" aria-hidden="true" />
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        id={`acc-${s.id}`}
                        className="svc-acc__body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: reduce ? 0 : 0.4, ease: EASE }}
                      >
                        <div className="svc-detail svc-detail--compact">
                          <Detail s={s} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
