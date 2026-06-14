// @ts-nocheck
import React from 'react';
import type { AccentTheme } from '../../types';

interface MetricsDashboardProps {
  activeColor: AccentTheme;
}

export default function MetricsDashboard({ activeColor }: MetricsDashboardProps) {
  return (
    <section className="border-b border-[#111111] grid grid-cols-1 md:grid-cols-4 bg-white">
      <div className="p-6 border-b md:border-b-0 md:border-r border-[#111111] flex flex-col justify-between">
        <div>
          <span className="text-[10px] text-neutral-400 font-bold uppercase">// STAT_01</span>
          <p className="text-xs text-neutral-600">Active Daily Capacity</p>
        </div>
        <div className="mt-4">
          <h3 className="text-3xl md:text-4xl font-extrabold" style={{ color: activeColor.color }}>30,000+</h3>
          <span className="text-xs text-neutral-500 font-bold block mt-1">USERS SERVED</span>
        </div>
      </div>

      <div className="p-6 border-b md:border-b-0 md:border-r border-[#111111] flex flex-col justify-between">
        <div>
          <span className="text-[10px] text-neutral-400 font-bold uppercase">// STAT_02</span>
          <p className="text-xs text-neutral-600">AWS Infrastructure Audits</p>
        </div>
        <div className="mt-4">
          <h3 className="text-3xl md:text-4xl font-extrabold" style={{ color: activeColor.color }}>37.5%</h3>
          <span className="text-xs text-neutral-500 font-bold block mt-1">COST REDUCTION</span>
        </div>
      </div>

      <div className="p-6 border-b md:border-b-0 md:border-r border-[#111111] flex flex-col justify-between">
        <div>
          <span className="text-[10px] text-neutral-400 font-bold uppercase">// STAT_03</span>
          <p className="text-xs text-neutral-600">Mean Time to Fix (MTTR)</p>
        </div>
        <div className="mt-4">
          <h3 className="text-3xl md:text-4xl font-extrabold" style={{ color: activeColor.color }}>40s → 1s</h3>
          <span className="text-xs text-neutral-500 font-bold block mt-1">P0 RESOLUTION</span>
        </div>
      </div>

      <div className="p-6 flex flex-col justify-between">
        <div>
          <span className="text-[10px] text-neutral-400 font-bold uppercase">// STAT_04</span>
          <p className="text-xs text-neutral-600">International Clients Served</p>
        </div>
        <div className="mt-4">
          <h3 className="text-3xl md:text-4xl font-extrabold" style={{ color: activeColor.color }}>2</h3>
          <span className="text-xs text-neutral-500 font-bold block mt-1">REPEAT-HIRE CONTRACTS</span>
        </div>
      </div>
    </section>
  );
}
