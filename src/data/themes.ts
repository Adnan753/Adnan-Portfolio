// @ts-nocheck
import type { AccentTheme } from '../types';

export const ACCENT_THEMES: Record<string, AccentTheme> = {
  green: {
    color: '#16A34A',
    bg: 'bg-emerald-600',
    text: 'text-emerald-700',
    border: 'border-emerald-600',
    lightBg: 'hover:bg-emerald-50/50',
    tag: 'bg-emerald-100 text-emerald-900',
    label: '🟢 sys_green'
  },
  amber: {
    color: '#D97706',
    bg: 'bg-amber-600',
    text: 'text-amber-700',
    border: 'border-amber-600',
    lightBg: 'hover:bg-amber-50/50',
    tag: 'bg-amber-100 text-amber-900',
    label: '🟡 sys_amber'
  },
  blue: {
    color: '#2563EB',
    bg: 'bg-blue-600',
    text: 'text-blue-700',
    border: 'border-blue-600',
    lightBg: 'hover:bg-blue-50/50',
    tag: 'bg-blue-100 text-blue-900',
    label: '🔵 sys_blue'
  }
};
