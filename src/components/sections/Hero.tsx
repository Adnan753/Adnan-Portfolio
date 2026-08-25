export default function Hero() {
  return (
    <section style={{ paddingBottom: 50 }}>
      <p className="eyebrow">What I'm hired to do</p>
      <h2 className="lede-title">
        Take a fragile deploy process and turn it into one nobody thinks about.
      </h2>
      <p className="lede-body">
        For 18 months I was the only person holding the infrastructure for a SaaS platform with{' '}
        <strong>30,000+ users</strong> — provisioning, releases, on-call, the bill. I took{' '}
        <strong>37.5% off monthly AWS spend</strong> by fixing egress, cut a launch-day P0 from{' '}
        <strong>40s to 1s</strong>, and shipped the same stack as Terraform anyone could rebuild.
        Everything below is from production, not side projects.
      </p>
    </section>
  );
}
