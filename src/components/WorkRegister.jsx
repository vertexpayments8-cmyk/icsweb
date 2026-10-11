import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import Icon from './Icons.jsx';

// Illustrative sample data only: fictional parties and amounts.
const POOL = [
  { type: 'Sales invoice', ref: 'INV-2041', party: 'Sharma Traders', amount: 48250 },
  { type: 'Purchase bill', ref: 'PB-0917', party: 'Gupta Medicals', amount: 12780 },
  { type: 'Bank entry', ref: 'BNK-3306', party: 'Arora Logistics', amount: 91400 },
  { type: 'Expense voucher', ref: 'EXP-0452', party: 'Mehta Textiles', amount: 6315 },
  { type: 'Sales invoice', ref: 'INV-2042', party: 'Bansal Electronics', amount: 27990 },
  { type: 'Payroll sheet', ref: 'PAY-1025', party: 'Kapoor Foods', amount: 186500 },
  { type: 'Purchase bill', ref: 'PB-0918', party: 'Verma Hardware', amount: 15460 },
  { type: 'Credit note', ref: 'CN-0071', party: 'Malhotra Exports', amount: 4200 },
];

const inr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });
const EASE = [0.16, 1, 0.3, 1];
const MAX_ROWS = 5;
const TICK = 2600;

function seedRows() {
  return POOL.slice(0, MAX_ROWS)
    .map((d, i) => ({ ...d, key: `${d.ref}-seed-${i}`, status: 'verified' }))
    .reverse();
}

export default function WorkRegister() {
  const reduce = useReducedMotion();
  const [rows, setRows] = useState(() => seedRows().slice(2));
  const [cursor, setCursor] = useState(3);
  const [done, setDone] = useState(17);
  const timers = useRef([]);

  useEffect(() => {
    if (reduce) {
      setRows(seedRows());
      return undefined;
    }
    let n = 3;
    const id = setInterval(() => {
      const doc = POOL[n % POOL.length];
      const key = `${doc.ref}-${n}`;
      n += 1;
      setCursor(n);
      setRows((prev) => [{ ...doc, key, status: 'entering' }, ...prev].slice(0, MAX_ROWS));
      timers.current.push(
        setTimeout(() => setRows((prev) => prev.map((r) => (r.key === key ? { ...r, status: 'checking' } : r))), 900),
        setTimeout(() => {
          setRows((prev) => prev.map((r) => (r.key === key ? { ...r, status: 'verified' } : r)));
          setDone((d) => (d >= 40 ? 18 : d + 1));
        }, 1800)
      );
    }, TICK);
    return () => {
      clearInterval(id);
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, [reduce]);

  const queue = [0, 1, 2].map((i) => POOL[(cursor + i) % POOL.length]);

  return (
    <figure className="register" aria-label="Animated illustration: documents being entered and verified in a work register">
      <div className="register__bar">
        <span className="register__title">Work register</span>
        <span className="register__live">
          <span className="register__pulse" aria-hidden="true" />
          Processing
        </span>
      </div>

      <div className="register__body" aria-hidden="true">
        <div className="register__inbox">
          <span className="register__label">Incoming</span>
          <ol className="register__queue">
            <AnimatePresence initial={false} mode="popLayout">
              {queue.map((doc, i) => (
                <motion.li
                  key={`${doc.ref}-${cursor + i}`}
                  className="register__doc"
                  layout={!reduce}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1 - i * 0.22, y: 0, scale: 1 - i * 0.03 }}
                  exit={{ opacity: 0, x: 60, transition: { duration: 0.45, ease: EASE } }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  <Icon name="doc" size={18} />
                  <span>
                    <strong>{doc.type}</strong>
                    <small>{doc.ref}</small>
                  </span>
                </motion.li>
              ))}
            </AnimatePresence>
          </ol>
        </div>

        <div className="register__table">
          <div className="register__row register__row--head">
            <span>Ref.</span>
            <span>Party</span>
            <span className="num">Amount</span>
            <span>Status</span>
          </div>
          <AnimatePresence initial={false} mode="popLayout">
            {rows.map((r) => (
              <motion.div
                key={r.key}
                className={`register__row is-${r.status}`}
                layout={!reduce}
                initial={{ opacity: 0, backgroundColor: 'rgba(163,22,45,0.10)' }}
                animate={{ opacity: 1, backgroundColor: 'rgba(163,22,45,0)' }}
                exit={{ opacity: 0, transition: { duration: 0.25 } }}
                transition={{ duration: 1.2, ease: EASE }}
              >
                <span className="mono">{r.ref}</span>
                <motion.span
                  className="register__party"
                  initial={{ clipPath: 'inset(0 100% 0 0)' }}
                  animate={{ clipPath: 'inset(0 0% 0 0)' }}
                  transition={{ duration: 0.7, ease: 'linear' }}
                >
                  {r.party}
                </motion.span>
                <span className="num mono">{inr.format(r.amount)}</span>
                <span className="register__status">
                  {r.status === 'verified' ? (
                    <motion.span
                      className="pill pill--ok"
                      initial={reduce ? false : { scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 520, damping: 26 }}
                    >
                      <Icon name="check" size={13} strokeWidth={2.4} />
                      Verified
                    </motion.span>
                  ) : (
                    <span className="pill pill--wait">{r.status === 'entering' ? 'Entering' : 'Checking'}</span>
                  )}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <figcaption className="register__foot">
        <span className="register__progress" aria-hidden="true">
          <motion.span
            className="register__progress-fill"
            animate={{ scaleX: done / 40 }}
            transition={{ duration: 0.8, ease: EASE }}
          />
        </span>
        <span className="register__note">Sample data for illustration</span>
      </figcaption>
    </figure>
  );
}
