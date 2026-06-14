// @ts-nocheck
import React from 'react';
import type { AccentTheme } from '../../types';

interface HeaderProps {
  activeColor: AccentTheme;
}

export default function Header({ activeColor }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-[#F7F6F2]/95 backdrop-blur-sm border-b border-[#111111] px-4 py-3 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
      <div className="flex items-center gap-3">
        <span className="font-bold tracking-tight text-lg flex items-center gap-2">
          adnan_patel <span className="text-xs font-normal opacity-50">/bin/sre</span>
        </span>
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-xs font-bold border border-[#111111] bg-white">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: activeColor.color }}></span>
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: activeColor.color }}></span>
          </span>
          <span className="tracking-wide">AVAILABLE_FOR_HIRE</span>
        </span>
      </div>

      <div className="flex items-center gap-5 md:gap-7 font-mono text-xs md:text-sm">
        <a href="#projects" className="text-[#111111] hover:underline font-bold">/work</a>
        <a href="#experience" className="text-[#111111] hover:underline font-bold">/experience</a>
        <a href="#skills" className="text-[#111111] hover:underline font-bold">/skills</a>
        <a href="#contact" className="text-[#111111] hover:underline font-bold">/contact</a>
      </div>
    </header>
  );
}
