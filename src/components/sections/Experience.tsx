import { ORGS } from '../../data/profile';

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '56px 0' }}>
      <h2 className="sec-title" style={{ margin: '0 0 30px' }}>
        Where I've done it
      </h2>

      <div data-reveal style={{ display: 'grid', gap: 0 }}>
        {ORGS.map((org, i) => (
          <div
            className="xp-row"
            key={org.org}
            style={{
              paddingTop: i === 0 ? 0 : 32,
              paddingBottom: i === ORGS.length - 1 ? 0 : 32,
              borderTop: i === 0 ? undefined : '1px solid var(--rule)',
            }}
          >
            <div>
              <span className="xp-when">{org.when}</span>
              <span className="xp-org">{org.org}</span>
            </div>
            <div>
              {org.roles.map((role) => (
                <div className={role.current ? 'xp-item now' : 'xp-item'} key={role.title}>
                  <h4 className="xp-role">{role.title}</h4>
                  <span className="xp-meta">{role.meta}</span>
                  <p className="xp-p">{role.body}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
