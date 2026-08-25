import { STATS } from '../../data/profile';

export default function Stats() {
  return (
    <section className="evgrid">
      {STATS.map((stat) => (
        <div data-reveal key={stat.value}>
          <span className="stat-num">{stat.value}</span>
          <span className="stat-label">{stat.label}</span>
        </div>
      ))}
    </section>
  );
}
