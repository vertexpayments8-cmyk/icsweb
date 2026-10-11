import Icon from './Icons.jsx';
import { CONTACT, whatsappLink } from '../data.js';

export default function CtaBand() {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="wrap cta-band__inner">
        <h2 id="cta-title" className="cta-band__title">
          Work piling up? Hand it to ICS.
        </h2>
        <div className="cta-band__actions">
          <a className="btn btn--white btn--lg" href={CONTACT.phoneHref}>
            <Icon name="phone" size={20} />
            {CONTACT.phoneDisplay}
          </a>
          <a
            className="btn btn--ghost-light btn--lg"
            href={whatsappLink('Hello ICS, I have work I would like to outsource.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="whatsapp" size={20} />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
