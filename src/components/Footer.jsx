import Logo from './Logo.jsx';
import { CONTACT, SERVICES } from '../data.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div className="footer__brand">
          <Logo className="footer__logo" />
          <p>Data entry, accounting and backend process services from Mayur Vihar Phase III, Delhi.</p>
        </div>
        <nav className="footer__col" aria-label="Services">
          <h2>Services</h2>
          <ul>
            {SERVICES.slice(0, 5).map((s) => (
              <li key={s.id}>
                <a href="#services">{s.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="footer__col" aria-label="Company">
          <h2>Company</h2>
          <ul>
            <li><a href="#process">How we work</a></li>
            <li><a href="#why-ics">Why ICS</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="footer__col">
          <h2>Contact</h2>
          <ul>
            <li>{CONTACT.person}</li>
            <li><a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a></li>
            <li>
              <address>
                {CONTACT.addressLines.map((l) => (
                  <span key={l}>{l}</span>
                ))}
              </address>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap footer__base">
        <span>© {new Date().getFullYear()} Integrated Care Solutions. All rights reserved.</span>
        <span>GSTIN: {CONTACT.gstin}</span>
      </div>
    </footer>
  );
}
