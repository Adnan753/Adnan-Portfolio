import {
  Ansible,
  AWS,
  Azure,
  Docker,
  FastAPI,
  Git,
  GitHubDark,
  Grafana,
  Kubernetes,
  Linux,
  MongoDB,
  MySQL,
  NodeJs,
  NumPy,
  Postman,
  Python,
  Terraform,
} from 'developer-icons';
import { STACK } from '../../data/profile';
import type { IconName } from '../../types';

type IconComponent = (props: { size?: number }) => React.ReactNode;

/** Only the marks the stack actually uses, so the icon set stays tree-shakeable. */
const ICONS: Record<IconName, IconComponent> = {
  Ansible,
  AWS,
  Azure,
  Docker,
  FastAPI,
  Git,
  GitHubDark,
  Grafana,
  Kubernetes,
  Linux,
  MongoDB,
  MySQL,
  NodeJs,
  NumPy,
  Postman,
  Python,
  Terraform,
};

/** Tiles carry brand marks in grayscale and colour them in on hover (see .logo). */
function Logo({ icon }: { icon: IconName }) {
  const Icon = ICONS[icon];
  if (!Icon) return <span className="logo" aria-hidden="true" />;
  return (
    <span className="logo" aria-hidden="true">
      <Icon size={22} />
    </span>
  );
}

export default function Stack() {
  return (
    <section id="stack" style={{ padding: '56px 0' }}>
      <div className="sec-head" style={{ marginBottom: 26 }}>
        <h2 className="sec-title">Tool stack</h2>
        <span className="sec-note">used in production, not tutorials</span>
      </div>

      <div style={{ display: 'grid', gap: 26 }}>
        {STACK.map((group) => (
          <div data-reveal key={group.label} style={{ display: 'grid', gap: 14 }}>
            <div className="sec-head">
              <span className="stack-label">{group.label}</span>
              {group.note && <span className="sec-note">{group.note}</span>}
            </div>
            <div className="tiles">
              {group.items.map((item) => (
                <div className="tile" key={item.name}>
                  <Logo icon={item.icon} />
                  <span className="tile-name">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
