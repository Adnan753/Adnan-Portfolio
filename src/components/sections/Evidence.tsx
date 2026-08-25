import { EVIDENCE } from '../../data/profile';

export default function Evidence() {
  return (
    <section id="work" style={{ padding: '50px 0 0' }}>
      <div className="sec-head">
        <h2 className="sec-title">Evidence</h2>
        <span className="sec-note">problem · what I did · result</span>
      </div>

      {EVIDENCE.map((item, i) => (
        <article
          className="ev"
          data-reveal
          key={item.title}
          style={{ marginTop: i === 0 ? 22 : 16 }}
        >
          <div className="ev-two">
            <div>
              <span className="ev-num">{item.tags}</span>
              <h3 className="ev-title">{item.title}</h3>
              <p className="ev-p">
                <strong>Problem.</strong> {item.problem}
              </p>
              <p className="ev-p">
                <strong>Did.</strong> {item.did}
              </p>
              {item.link && (
                <a className="ev-link" href={item.link.href} target="_blank" rel="noopener noreferrer">
                  {item.link.label}
                </a>
              )}
            </div>
            <div className="ev-metrics">
              {item.metrics.map((metric) => (
                <div key={metric.label}>
                  <span className="metric-num">{metric.value}</span>
                  <span className="metric-label">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
