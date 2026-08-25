// @ts-nocheck
import React from 'react';
import { ACCENT_THEMES } from '../../data/themes';

interface HeaderProps {
  activeColor: AccentTheme;
  accent: string;
  setAccent: (accent: string) => void;
}

export default function Header({ activeColor, accent, setAccent }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-[#F7F6F2]/95 backdrop-blur-sm border-b-4 border-[#111111] px-4 py-3 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div className="flex flex-wrap items-center gap-3">
        <span className="font-bold tracking-tight text-lg flex items-center gap-2">
          adnan_patel <span className="text-xs font-normal opacity-50">/bin/sre</span>
        </span>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold border-2 border-[#111111] bg-white shadow-[2px_2px_0px_0px_#111111]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: activeColor.color }}></span>
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: activeColor.color }}></span>
          </span>
          <span className="tracking-wide">AVAILABLE_FOR_HIRE</span>
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-4 md:gap-6 font-mono self-stretch md:self-auto justify-between md:justify-end">
        {/* Neo-Brutalist Theme Switcher Controls */}
        <div className="flex items-center gap-1 border-2 border-[#111111] p-0.5 bg-white text-[10px] font-bold shadow-[3px_3px_0px_0px_#111111] rounded-none">
          {Object.keys(ACCENT_THEMES).map((themeKey) => {
            const theme = ACCENT_THEMES[themeKey];
            const isActive = accent === themeKey;
            return (
              <button
                key={themeKey}
                onClick={() => setAccent(themeKey)}
                className={`px-2.5 py-1 uppercase tracking-wide transition-all border font-extrabold rounded-none cursor-pointer ${
                  isActive
                    ? 'border-[#111111] text-black shadow-[1px_1px_0px_0px_#111111]'
                    : 'border-transparent text-[#111111] hover:bg-neutral-100'
                }`}
                style={isActive ? { backgroundColor: theme.color } : undefined}
              >
                {themeKey}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-1 font-mono text-xs md:text-sm self-stretch md:self-auto -mb-3 md:-mb-[13px] mt-2 md:mt-0">
          <a href="#projects" className="bg-white px-4 py-2 border-t-2 border-l-2 border-r-2 border-[#111111] font-bold text-[#111111] transition-all hover:bg-neutral-50 hover:pb-2.5 leading-none block rounded-none">/work</a>
          <a href="#experience" className="bg-white px-4 py-2 border-t-2 border-l-2 border-r-2 border-[#111111] font-bold text-[#111111] transition-all hover:bg-neutral-50 hover:pb-2.5 leading-none block rounded-none">/experience</a>
          <a href="#skills" className="bg-white px-4 py-2 border-t-2 border-l-2 border-r-2 border-[#111111] font-bold text-[#111111] transition-all hover:bg-neutral-50 hover:pb-2.5 leading-none block rounded-none">/skills</a>
          <a href="#contact" className="bg-white px-4 py-2 border-t-2 border-l-2 border-r-2 border-[#111111] font-bold text-[#111111] transition-all hover:bg-neutral-50 hover:pb-2.5 leading-none block rounded-none">/contact</a>
        </div>
      </div>
    </header>
  );
}

