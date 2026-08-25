// @ts-nocheck
import React from 'react';
import type { AccentTheme } from '../../types';

interface MetricsDashboardProps {
  activeColor: AccentTheme;
}

export default function MetricsDashboard({ activeColor }: MetricsDashboardProps) {
  return (
    <section className="border-b-4 border-[#111111] grid grid-cols-1 md:grid-cols-4 bg-white">
      <div className="p-6 border-b-2 md:border-b-0 md:border-r-2 border-[#111111] flex flex-col justify-between bg-[#00C2CB] text-[#111111]">
        <div>
          <span className="text-[10px] text-neutral-900/60 font-bold uppercase tracking-wider">// STAT_01</span>
          <p className="text-xs text-neutral-900 font-bold">Active Daily Capacity</p>
        </div>
        <div className="mt-4">
          <h3 className="text-3xl md:text-4xl font-black tracking-tight leading-none text-black">30,000+</h3>
          <span className="text-xs text-neutral-900 font-extrabold block mt-1">USERS SERVED</span>
        </div>
      </div>

      <div className="p-6 border-b-2 md:border-b-0 md:border-r-2 border-[#111111] flex flex-col justify-between bg-[#FF00FF] text-black">
        <div>
          <span className="text-[10px] text-neutral-900/60 font-bold uppercase tracking-wider">// STAT_02</span>
          <p className="text-xs text-neutral-900 font-bold">AWS Infrastructure Audits</p>
        </div>
        <div className="mt-4">
          <h3 className="text-3xl md:text-4xl font-black tracking-tight leading-none text-black">37.5%</h3>
          <span className="text-xs text-neutral-900 font-extrabold block mt-1">COST REDUCTION</span>
        </div>
      </div>

      <div className="p-6 border-b-2 md:border-b-0 md:border-r-2 border-[#111111] flex flex-col justify-between bg-[#FFE000] text-black">
        <div>
          <span className="text-[10px] text-neutral-900/60 font-bold uppercase tracking-wider">// STAT_03</span>
          <p className="text-xs text-neutral-900 font-bold">Mean Time to Fix (MTTR)</p>
        </div>
        <div className="mt-4">
          <h3 className="text-3xl md:text-4xl font-black tracking-tight leading-none text-black">40s → 1s</h3>
          <span className="text-xs text-neutral-900 font-extrabold block mt-1">P0 RESOLUTION</span>
        </div>
      </div>

      <div className="p-6 flex flex-col justify-between bg-white text-[#111111]">
        <div>
          <span className="text-[10px] text-neutral-450 font-bold uppercase tracking-wider">// STAT_04</span>
          <p className="text-xs text-neutral-600 font-bold">International Clients Served</p>
        </div>
        <div className="mt-4">
          <h3 className="text-3xl md:text-4xl font-black tracking-tight leading-none" style={{ color: activeColor.color }}>2</h3>
          <span className="text-xs text-neutral-500 font-extrabold block mt-1">REPEAT-HIRE CONTRACTS</span>
        </div>
      </div>
    </section>
  );
}
