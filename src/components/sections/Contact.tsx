import { PROFILE } from '../../data/profile';

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '64px 0 0' }}>
      <h2 className="contact-title" data-reveal>
        Hiring for platform, DevOps or SRE? I'll walk you through any of this in 20 minutes.
      </h2>
      <div className="contact-actions" data-reveal>
        <a className="cta-solid" href={`mailto:${PROFILE.email}`}>
          {PROFILE.email}
        </a>
        <a className="cta-ghost" href={PROFILE.resume} download>
          Résumé, PDF ↓
        </a>
      </div>
      <p className="footnote">
        {PROFILE.name} · DevOps &amp; Cloud · Pune, IN · {PROFILE.year}
      </p>
    </section>
  );
}
