export interface Fact {
  label: string;
  value: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Evidence {
  /** Mono eyebrow: index plus the tools involved. */
  tags: string;
  title: string;
  problem: string;
  did: string;
  metrics: Metric[];
  link?: { href: string; label: string };
}

export interface Role {
  title: string;
  /** Dates, plus any status suffix such as "· Current". */
  meta: string;
  body: string;
  current?: boolean;
}

export interface Org {
  when: string;
  org: string;
  roles: Role[];
}

/** Key of an icon component exported by `developer-icons`. */
export type IconName = string;

export interface StackItem {
  name: string;
  icon: IconName;
}

export interface StackGroup {
  label: string;
  items: StackItem[];
  note?: string;
}

export interface Credential {
  title: string;
  sub?: string;
  when: string;
  /** Renders the date in the accent colour — used for anything in progress. */
  live?: boolean;
}
