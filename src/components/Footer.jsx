<div className="footer__col">
  <h2>Contact</h2>
  <ul>
    <li>{CONTACT.person}</li>
    <li><a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a></li>
    <li>
      <a href="mailto:kunal@integratedcaresolutions.in">
        kunal@integratedcaresolutions.in
      </a>
    </li>
    <li>
      <address>
        {CONTACT.addressLines.map((l) => (
          <span key={l}>{l}</span>
        ))}
      </address>
    </li>
  </ul>
</div>
