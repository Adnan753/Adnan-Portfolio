// @ts-nocheck
import React from 'react';
import type { AccentTheme } from '../../types';
import adnanImg from '../../assets/adnan.png';

interface HeroProps {
  activeColor: AccentTheme;
}

export default function Hero({ activeColor }: HeroProps) {
  return (
    <section className="p-6 md:p-12 border-b border-[#111111] bg-[#EFEDE7]/20 relative overflow-hidden">
      <div className="max-w-3xl space-y-6">
        <div className="inline-block text-xs uppercase px-2 py-0.5 bg-neutral-200 border border-neutral-400 font-bold tracking-widest text-neutral-700">
          // EXECUTIVE_SUMMARY
        </div>

        {/* Massive, Brutalist Left-Aligned Headline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[0.95] text-neutral-900">
          DevOps Engineer.<br />
          Infrastructure That<br />
          Doesn't Page You At 2am<span className="animate-pulse" style={{ color: activeColor.color }}>_</span>
        </h1>

        <div className="h-px bg-neutral-900/15 w-full my-4"></div>

        {/* Dense impact summary */}
        <p className="text-sm md:text-base text-neutral-800 leading-relaxed font-normal max-w-2xl">
          I design, architect, and optimize resilient cloud foundations. As a former sole infrastructure owner, I served over <strong className="font-bold underline">30K+ active end-users</strong>, engineered pipeline transformations that slashed deployment loops from <strong className="font-bold underline">40s down to 1s</strong>, and implemented AWS cost governance cuts amounting to a precise <strong className="font-bold underline text-neutral-900">37.5% reduction</strong> in monthly burn.
        </p>

        {/* Inline CLI-styled Contact Links */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-xs">
          <span className="font-bold text-neutral-500">$ cat cta_links.sh</span>
          <a href="#contact" className="underline font-bold hover:opacity-70 flex items-center gap-1">
            [Email Comms]
          </a>
          <a href="#projects" className="underline font-bold hover:opacity-70">
            [View Work Logs]
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="underline font-bold hover:opacity-70">
            [GitHub Repository]
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="underline font-bold hover:opacity-70">
            [LinkedIn Network]
          </a>
          <a href="/resume.pdf" download className="underline font-bold hover:opacity-70 text-emerald-600">
            [Download Resume.pdf]
          </a>
        </div>
      </div>

      {/* Profile image absolutely positioned on the right */}
      <div className="absolute right-0 bottom-0 top-0 hidden md:block w-[450px] lg:w-[540px] select-none pointer-events-none">
        <img
          src={adnanImg}
          alt="Adnan Patel"
          className="w-full h-full object-contain object-bottom grayscale transition-all duration-300 hover:grayscale-0 pointer-events-auto"
        />
      </div>
    </section>
  );
}
