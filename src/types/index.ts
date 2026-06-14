// @ts-nocheck
export interface AccentTheme {
  color: string;
  bg: string;
  text: string;
  border: string;
  lightBg: string;
  tag: string;
  label: string;
}

export interface TerminalLine {
  type: 'input' | 'output';
  text: string;
}
