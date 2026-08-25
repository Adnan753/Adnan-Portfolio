// @ts-nocheck
import React from 'react';

export default function Certifications() {
  return (
    <section className="p-6 md:p-12 border-b-4 border-[#111111] bg-[#EFEDE7]/20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* EDUCATION CARD */}
        <div className="border-4 border-[#111111] bg-white shadow-[8px_8px_0px_0px_#111111] hover:shadow-[12px_12px_0px_0px_#111111] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 rounded-none overflow-hidden p-0">
          <div className="border-b-4 border-[#111111] px-6 py-3.5 bg-[#00C2CB] text-black">
            <span className="text-xs text-black/60 block mb-0.5 font-bold">// ACADEMIC_RECORDS</span>
            <h3 className="text-lg font-black uppercase tracking-tight">Education</h3>
          </div>
          <div className="p-6 space-y-4 text-xs md:text-sm">
            <div className="flex justify-between items-start gap-4">
              <div>
                <h4 className="font-extrabold text-neutral-900 text-sm md:text-base">B.Tech in Computer Science Engineering</h4>
                <span className="text-neutral-600 block mt-1">D Y Patil International University, Pune</span>
                <span className="inline-block text-[10px] px-2.5 py-0.5 border-2 border-[#111111] bg-[#FFE000] text-black font-bold mt-3 shadow-[2px_2px_0px_0px_#111111] rounded-none">CGPA: 8.89/10</span>
              </div>
              <span className="text-[#111111] font-black whitespace-nowrap">[2022 - 2026]</span>
            </div>
          </div>
        </div>

        {/* CERTIFICATIONS CARD */}
        <div className="border-4 border-[#111111] bg-white shadow-[8px_8px_0px_0px_#111111] hover:shadow-[12px_12px_0px_0px_#111111] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 rounded-none overflow-hidden p-0">
          <div className="border-b-4 border-[#111111] px-6 py-3.5 bg-[#FF00FF] text-black">
            <span className="text-xs text-black/60 block mb-0.5 font-bold">// CREDENTIALS_AND_ACHIEVEMENTS</span>
            <h3 className="text-lg font-black uppercase tracking-tight">Certifications &amp; Awards</h3>
          </div>
          <div className="p-6 space-y-4 text-xs md:text-sm">
            <div className="flex justify-between items-center gap-4">
              <span className="font-extrabold text-[#111111] truncate">AWS Certified Solutions Architect – Associate (scheduled)</span>
              <span className="text-[#111111]/30 flex-grow border-b-2 border-dotted border-neutral-400 min-w-[20px] h-3"></span>
              <span className="text-neutral-800 font-bold whitespace-nowrap">[2026]</span>
            </div>
            <div className="flex justify-between items-center gap-4">
              <span className="font-extrabold text-[#111111] truncate">NPTEL Big Data Computing – Elite (Top 1% Rank, IIT Kanpur)</span>
              <span className="text-[#111111]/30 flex-grow border-b-2 border-dotted border-neutral-400 min-w-[20px] h-3"></span>
              <span className="text-neutral-800 font-bold whitespace-nowrap">[2025]</span>
            </div>
            <div className="flex justify-between items-center gap-4">
              <span className="font-extrabold text-[#111111] truncate">Runner-Up, Azure Cloud Mastery Workshop</span>
              <span className="text-[#111111]/30 flex-grow border-b-2 border-dotted border-neutral-400 min-w-[20px] h-3"></span>
              <span className="text-neutral-800 font-bold whitespace-nowrap">[2024]</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
