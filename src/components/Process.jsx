import { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring } from 'motion/react';
import { STEPS } from '../data.js';

export default function Process() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const [reached, setReached] = useState(reduce ? STEPS.length : 0);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (reduce) return;
    const n = Math.min(STEPS.length, Math.floor(v * STEPS.length + 0.35));
    setReached((prev) => (prev === n ? prev : n));
  });

  return (
    <section className="section process" id="process" aria-labelledby="process-title" ref={ref}>
      <div className="wrap">
        <div className="section-head section-head--light">
          <h2 id="process-title" className="section-title">
            How we work
          </h2>
          <p className="section-lede">
            Four steps from the first call to finished work, with one person to talk to throughout.
          </p>
        </div>

        <div className="steps-wrap">
          <span className="steps__rail" aria-hidden="true">
            <motion.span className="steps__rail-fill steps__rail-fill--x" style={{ scaleX: reduce ? 1 : progress }} />
            <motion.span className="steps__rail-fill steps__rail-fill--y" style={{ scaleY: reduce ? 1 : progress }} />
          </span>
          <ol className="steps">
            {STEPS.map((s, i) => (
              <li key={s.title} className={`step ${i < reached ? 'is-reached' : ''}`}>
                <span className="step__dot" aria-hidden="true">
                  {i + 1}
                </span>
                <h3 className="step__title">{s.title}</h3>
                <p className="step__text">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
