import { FACTS, PROFILE } from '../data/profile';

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
    <path d="M3 6l9 6.5L21 6" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
    <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.47c.53.1.72-.23.72-.5v-1.8c-2.92.63-3.54-1.4-3.54-1.4-.48-1.22-1.17-1.55-1.17-1.55-.95-.65.07-.64.07-.64 1.06.08 1.62 1.09 1.62 1.09.94 1.6 2.46 1.14 3.06.87.1-.68.37-1.15.67-1.41-2.33-.27-4.78-1.17-4.78-5.2 0-1.15.41-2.09 1.08-2.83-.11-.27-.47-1.34.1-2.79 0 0 .88-.28 2.88 1.08a9.9 9.9 0 0 1 5.24 0c2-1.36 2.88-1.08 2.88-1.08.57 1.45.21 2.52.1 2.79.67.74 1.08 1.68 1.08 2.83 0 4.04-2.46 4.93-4.8 5.19.38.33.72.97.72 1.96v2.9c0 .28.19.61.73.5A10.5 10.5 0 0 0 12 1.5Z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4v11H3v-11Zm6.5 0h3.83v1.5h.05c.53-.95 1.83-1.85 3.77-1.85 4.03 0 4.85 2.5 4.85 5.75v5.6h-4v-4.97c0-1.19-.02-2.72-1.7-2.72-1.7 0-1.96 1.29-1.96 2.63v5.06h-4v-11Z" />
  </svg>
);

export default function Rail() {
  return (
    <aside className="rail">
      <div>
        <h1 className="rail-name">{PROFILE.name}</h1>
        <p className="rail-role">{PROFILE.role}</p>

        <div className="pill">
          <i />
          {PROFILE.availability}
        </div>

        <p className="rail-bio">{PROFILE.bio}</p>

        <div className="rail-facts">
          {FACTS.map((fact) => (
            <div className="fact" key={fact.label}>
              <span>{fact.label}</span>
              <span>{fact.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rail-bottom">
        <div className="links3">
          <a className="link-btn" href={`mailto:${PROFILE.email}`}>
            <MailIcon />
            <span>EMAIL</span>
          </a>
          <a className="link-btn" href={PROFILE.github} target="_blank" rel="noopener noreferrer">
            <GithubIcon />
            <span>GITHUB</span>
          </a>
          <a className="link-btn" href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedinIcon />
            <span>LINKEDIN</span>
          </a>
        </div>
        <a className="btn-solid" href={PROFILE.resume} download>
          Download résumé <span aria-hidden="true">↓</span>
        </a>
      </div>
    </aside>
  );
}
