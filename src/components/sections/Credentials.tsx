import { CREDENTIALS } from '../../data/profile';

export default function Credentials() {
  return (
    <section id="credentials" style={{ padding: '56px 0' }}>
      <h2 className="sec-title" style={{ margin: '0 0 24px' }}>
        Credentials
      </h2>
      <div className="cred-list" data-reveal>
        {CREDENTIALS.map((cred) => (
          <div className="cred-row" key={cred.title}>
            <span>
              {cred.title}
              {cred.sub && <span className="cred-sub">{cred.sub}</span>}
            </span>
            <span className={cred.live ? 'cred-when live' : 'cred-when'}>{cred.when}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
