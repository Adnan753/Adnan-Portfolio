import type { Credential, Evidence, Fact, Org, StackGroup, Stat } from '../types';

export const PROFILE = {
  name: 'Adnan Patel',
  role: 'DevOps & Cloud · Pune, IN',
  availability: 'Booking Q2/Q3 2026',
  bio: '18 months owning AWS infrastructure end to end — ECS, Terraform, CI/CD — as the sole engineer on a platform serving 30,000+ users. I make releases small, reversible, and boring.',
  email: 'adnan.devops@fastmail.com',
  github: 'https://github.com/adnan',
  linkedin: 'https://in.linkedin.com/in/adnanpatel753',
  resume: '/resume.pdf',
  year: 2026,
};

export const FACTS: Fact[] = [
  { label: 'Experience', value: '1.5 yrs' },
  { label: 'Users served', value: '30,000+' },
  { label: 'AWS spend cut', value: '37.5%' },
  { label: 'Work mode', value: 'Remote / hybrid' },
];

export const STATS: Stat[] = [
  { value: '30,000+', label: 'users on infrastructure I owned alone' },
  { value: '37.5%', label: 'monthly AWS spend removed' },
  { value: '40s → 1s', label: 'P0 latency fixed during a live launch' },
];

export const EVIDENCE: Evidence[] = [
  {
    tags: '01 · CloudFront · S3 · Cost Explorer',
    title: 'Took 37.5% off a monthly AWS bill by fixing how bytes left the account',
    problem:
      'Spend was climbing faster than usage, and nobody could point at the line item responsible.',
    did: 'Traced the bill back to S3 egress at $0.08/GB serving traffic directly, then rerouted it through CloudFront at $0.05/GB — same objects, same latency budget, cached at the edge.',
    metrics: [
      { value: '37.5%', label: 'monthly bill removed' },
      { value: '$0.08 → $0.05', label: 'per GB delivered' },
    ],
  },
  {
    tags: '02 · ECS Fargate · ALB · Auto-scaling',
    title: 'Diagnosed a P0 during a live product launch and cut response time 40× ',
    problem:
      'Requests were taking 40 seconds under launch-day load while CPU and memory both looked healthy.',
    did: 'Found the bottleneck in ECS task concurrency rather than instance size, and replaced CPU-based scaling with request-count scaling so capacity tracked the queue instead of the symptom.',
    metrics: [
      { value: '1s', label: 'response time, was 40s' },
      { value: '0', label: 'rollbacks needed' },
    ],
  },
  {
    tags: '03 · Terraform · CodePipeline · CodeDeploy',
    title: 'Codified a three-tier AWS estate so releases stopped being events',
    problem:
      'Deploys were hand-run against an account nobody could reproduce, so every release carried unknown risk.',
    did: 'Built the whole stack as 12 Terraform modules — VPC, ECS, RDS, ALB, CloudFront, ECR, pipeline, Secrets Manager, SNS, CloudWatch — then put blue-green deploys behind health checks with automatic rollback.',
    metrics: [
      { value: '12', label: 'reusable Terraform modules' },
      { value: 'Zero', label: 'downtime per release' },
    ],
  },
  {
    tags: '04 · Node.js · Python · AWS Cost Explorer',
    title: 'Built an agentic FinOps platform solo, and shipped it as a live MVP',
    problem:
      'The cost work above was manual every month, and the reasoning behind each saving lived in my head.',
    did: 'Shipped three services — Node API, Python agent, React frontend — with an Observe → Reason → Plan loop over real Cost Explorer data, z-score anomaly detection, and 30-day forecasting with Prophet.',
    metrics: [
      { value: '14', label: 'REST endpoints, 6 dashboards' },
      { value: '30 days', label: 'spend forecast horizon' },
    ],
    link: { href: 'https://thriftex.app', label: 'thriftex.app ↗' },
  },
];

export const ORGS: Org[] = [
  {
    when: 'Feb 2026 — present',
    org: 'Signiance Technologies',
    roles: [
      {
        title: 'DevOps Engineer',
        meta: 'Feb 2026 — present · Current',
        current: true,
        body:
          'Deploy and run Python AI agents and Node services on EC2 behind Nginx and Certbot-managed TLS, build ETL proof-of-concepts on Glue, Step Functions, PySpark and Redshift, and ship serverless cost-classification automation on Lambda.',
      },
    ],
  },
  {
    when: 'Nov 2025 — Mar 2026',
    org: 'Wet Dog Weather, USA',
    roles: [
      {
        title: 'Cloud Solutions Consultant',
        meta: 'Nov 2025 — Mar 2026 · Freelance',
        body:
          'Repeat-hire contract working directly with the COO across two delivered projects: listing their SaaS on AWS Marketplace end to end — configuration, metering, pricing, public availability — and building a customer onboarding portal with a MapLibre location picker.',
      },
    ],
  },
  {
    when: 'May 2025 — Jan 2026',
    org: 'ByteHint IT Solutions',
    roles: [
      {
        title: 'DevOps Engineer',
        meta: 'Aug 2025 — Jan 2026',
        body:
          'Sole infrastructure owner for a SaaS platform serving 30,000+ users: ECS Fargate, ALB with TLS, multi-tier VPC with NAT, least-privilege IAM, CloudWatch and GitHub Actions CI/CD — plus the launch-day P0 and the 37.5% cost cut above.',
      },
      {
        title: 'Software Engineer Intern',
        meta: 'May 2025 — Aug 2025',
        body:
          'Built the production SaaS backend from scratch in Node, Express and MongoDB — JWT and OAuth 2.0 auth, 10+ REST APIs for a multi-tenant model, and contract testing that cut production bugs 25%.',
      },
    ],
  },
];

export const STACK: StackGroup[] = [
  {
    label: 'Cloud & IaC',
    items: [
      { name: 'Amazon Web Services', icon: 'AWS' },
      { name: 'Terraform', icon: 'Terraform' },
      { name: 'Linux', icon: 'Linux' },
      { name: 'Azure', icon: 'Azure' },
    ],
  },
  {
    label: 'Containers & delivery',
    items: [
      { name: 'Docker', icon: 'Docker' },
      { name: 'GitHub Actions', icon: 'GitHubDark' },
      { name: 'Git', icon: 'Git' },
      { name: 'Postman', icon: 'Postman' },
    ],
  },
  {
    label: 'Backend & data',
    items: [
      { name: 'Node.js', icon: 'NodeJs' },
      { name: 'Python', icon: 'Python' },
      { name: 'FastAPI', icon: 'FastAPI' },
      { name: 'MySQL', icon: 'MySQL' },
      { name: 'MongoDB', icon: 'MongoDB' },
      { name: 'NumPy', icon: 'NumPy' },
    ],
    note: 'REST APIs, PySpark, AWS Glue, Supabase',
  },
  {
    label: 'Extending into',
    items: [
      { name: 'Kubernetes / EKS', icon: 'Kubernetes' },
      { name: 'Grafana', icon: 'Grafana' },
      { name: 'Ansible', icon: 'Ansible' },
    ],
    note: 'plus Helm, Argo CD and Prometheus',
  },
];

export const CREDENTIALS: Credential[] = [
  {
    title: 'AWS Certified Solutions Architect — Associate (SAA-C03)',
    when: 'Scheduled 2026',
    live: true,
  },
  {
    title: 'NPTEL Big Data Computing — Elite',
    sub: 'Top 1% rank · IIT Kanpur',
    when: '2025',
  },
  {
    title: 'Runner-Up, Azure Cloud Mastery Workshop',
    when: '2024',
  },
  {
    title: 'B.Tech, Computer Science Engineering',
    sub: 'D Y Patil International University, Pune · CGPA 8.89 / 10',
    when: '2022 — 2026',
  },
];
