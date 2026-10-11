import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Logo from './Logo.jsx';
import Icon from './Icons.jsx';
import { CONTACT, whatsappLink } from '../data.js';

const NAV = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'How we work' },
  { href: '#why-ics', label: 'Why ICS' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <div className="utility">
        <div className="wrap utility__inner">
          <span className="utility__item utility__addr">
            <Icon name="pin" size={15} />
            {CONTACT.addressShort}
          </span>
          <span className="utility__group">
            <a className="utility__item" href={CONTACT.phoneHref}>
              <Icon name="phone" size={15} />
              {CONTACT.phoneDisplay}
            </a>
            <a className="utility__item" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" size={15} />
              WhatsApp
            </a>
          </span>
        </div>
      </div>

      <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="wrap header__inner">
          <a href="#top" className="header__brand" aria-label="ICS – Integrated Care Solutions, back to top">
            <Logo />
          </a>
          <nav className="header__nav" aria-label="Main">
            {NAV.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>
          <a className="btn btn--primary header__cta" href="#contact">
            Get a quote
          </a>
          <button
            className="header__toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} size={26} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav aria-label="Mobile">
              {NAV.map((n, i) => (
                <motion.a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.05, duration: 0.4 }}
                >
                  {n.label}
                  <Icon name="arrow" size={20} />
                </motion.a>
              ))}
            </nav>
            <div className="mobile-menu__actions">
              <a className="btn btn--primary btn--block" href={CONTACT.phoneHref}>
                <Icon name="phone" size={18} /> Call {CONTACT.phoneDisplay}
              </a>
              <a className="btn btn--outline btn--block" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" size={18} /> WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
