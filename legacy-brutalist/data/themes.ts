// @ts-nocheck
import type { AccentTheme } from '../types';

export const ACCENT_THEMES: Record<string, AccentTheme> = {
  teal: {
    color: '#00C2CB',
    bg: 'bg-[#00C2CB]',
    text: 'text-[#008A91]',
    border: 'border-[#111111]',
    lightBg: 'hover:bg-[#00C2CB]/10',
    tag: 'bg-[#00C2CB]/20 text-[#005B60] border border-[#00C2CB]/30',
    label: '⚡ sys_teal'
  },
  magenta: {
    color: '#FF00FF',
    bg: 'bg-[#FF00FF]',
    text: 'text-[#C200C2]',
    border: 'border-[#111111]',
    lightBg: 'hover:bg-[#FF00FF]/10',
    tag: 'bg-[#FF00FF]/20 text-[#990099] border border-[#FF00FF]/30',
    label: '⚡ sys_magenta'
  },
  yellow: {
    color: '#FFE000',
    bg: 'bg-[#FFE000]',
    text: 'text-[#807000]',
    border: 'border-[#111111]',
    lightBg: 'hover:bg-[#FFE000]/10',
    tag: 'bg-[#FFE000]/20 text-[#807000] border border-[#FFE000]/30',
    label: '⚡ sys_yellow'
  }
};

