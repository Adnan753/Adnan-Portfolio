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
        <div className="inline-block text-xs uppercase px-2 py-0.5 bg-neutral-200 border border-neutral-400 font-bold tracking-widest text-neutral-700 transition-all hover:scale-105 duration-200 cursor-default">
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
          I am a DevOps Engineer with 1.5 years of production experience, serving as the <strong className="font-bold underline">sole infrastructure owner</strong> for a SaaS platform serving <strong className="font-bold underline">30,000+ users</strong>. I cut AWS costs by <strong className="font-bold underline text-neutral-900">37.5%</strong> through a CDN architecture redesign, resolved a critical <strong className="font-bold underline">P0 latency incident (40s to 1s)</strong> during a live product launch, and delivered paid AWS infrastructure projects for international clients. I also solo-built an Agentic FinOps platform with a live MVP at <a href="https://thriftex.app" target="_blank" rel="noreferrer" className="underline font-bold hover:opacity-85">thriftex.app</a>.
        </p>

        {/* Inline CLI-styled Contact Links */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-xs">
          <span className="font-bold text-neutral-500">$ cat cta_links.sh</span>
          <a href="#contact" className="underline font-bold transition-all duration-150 hover:-translate-y-0.5 hover:opacity-85 inline-block">
            [Email Comms]
          </a>
          <a href="#projects" className="underline font-bold transition-all duration-150 hover:-translate-y-0.5 hover:opacity-85 inline-block">
            [View Work Logs]
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="underline font-bold transition-all duration-150 hover:-translate-y-0.5 hover:opacity-85 inline-block">
            [GitHub Repository]
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="underline font-bold transition-all duration-150 hover:-translate-y-0.5 hover:opacity-85 inline-block">
            [LinkedIn Network]
          </a>
          <a href="/resume.pdf" download className="underline font-bold transition-all duration-150 hover:-translate-y-0.5 hover:opacity-85 inline-block text-emerald-600">
            [Download Resume.pdf]
          </a>
        </div>
      </div>

      {/* Profile image absolutely positioned on the right */}
      <div className="absolute right-0 bottom-0 top-0 hidden md:block w-[450px] lg:w-[540px] select-none pointer-events-none">
        <img
          src={adnanImg}
          alt="Adnan Patel"
          className="w-full h-full object-contain object-bottom grayscale transition-all duration-300 hover:grayscale-0 hover:scale-[1.02] pointer-events-auto cursor-pointer"
        />
      </div>
    </section>
  );
}
