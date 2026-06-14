// @ts-nocheck
import React from 'react';

export default function StatusBar() {
  return (
    <div className="bg-[#111111] text-[#E5E5E5] text-[10px] tracking-wider px-4 py-1.5 flex justify-between items-center border-b border-[#111111] overflow-x-auto no-scrollbar whitespace-nowrap select-none">
      <div className="flex items-center gap-2">
        {/* Green Microchip SVG Icon */}
        <svg className="w-3.5 h-3.5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2zM9 9h6v6H9V9z" />
        </svg>
        <span className="font-bold text-white uppercase">HOST: production-sre-cluster-01.patel.sh</span>
        <span className="text-neutral-600 font-normal">|</span>
        <span className="text-neutral-400 font-bold uppercase">KERNEL: REACT_v19.01_SRE</span>
      </div>

      <div className="flex items-center gap-3 ml-6">
        <div className="flex items-center gap-1.5">
          <span className="text-emerald-500 text-xs">●</span>
          <span className="text-neutral-400">SYS_INIT:</span>
          <span className="text-emerald-500 font-bold">2026-06-13 13:32:42 UTC</span>
        </div>
        <span className="bg-white text-black font-extrabold text-[9px] px-1 tracking-widest leading-none py-0.5 select-none uppercase">
          SECURE_SSL
        </span>
      </div>
    </div>
  );
}
