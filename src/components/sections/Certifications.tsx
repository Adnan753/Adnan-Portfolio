// @ts-nocheck
import React from 'react';

export default function Certifications() {
  return (
    <section className="border-b border-[#111111] grid grid-cols-1 md:grid-cols-2 bg-white">

      {/* EDUCATION */}
      <div className="p-6 md:p-12 border-b md:border-b-0 md:border-r border-[#111111] space-y-6">
        <div>
          <span className="text-xs text-neutral-400 block mb-1">// ACADEMIC_RECORDS</span>
          <h3 className="text-xl font-bold uppercase">Education</h3>
        </div>
        <div className="space-y-4 text-xs">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-neutral-900">B.Tech in Computer Science Engineering</h4>
              <span className="text-neutral-500 block">D Y Patil International University, Pune</span>
              <span className="text-neutral-400 block mt-1">CGPA: 8.89/10</span>
            </div>
            <span className="text-[#111111]/50 font-bold">[2022 - 2026]</span>
          </div>
        </div>
      </div>

      {/* CERTIFICATIONS & ACHIEVEMENTS */}
      <div className="p-6 md:p-12 space-y-6">
        <div>
          <span className="text-xs text-neutral-400 block mb-1">// CREDENTIALS_AND_ACHIEVEMENTS</span>
          <h3 className="text-xl font-bold uppercase">Certifications &amp; Awards</h3>
        </div>
        <div className="space-y-4 text-xs">
          <div className="flex justify-between items-center gap-4">
            <span className="font-bold text-neutral-900 truncate">AWS Certified Solutions Architect – Associate (scheduled)</span>
            <span className="text-[#111111]/30 flex-grow border-b border-dotted border-neutral-400 min-w-[20px] h-3"></span>
            <span className="text-neutral-500 whitespace-nowrap">[2026]</span>
          </div>
          <div className="flex justify-between items-center gap-4">
            <span className="font-bold text-neutral-900 truncate">NPTEL Big Data Computing – Elite (Top 1% Rank, IIT Kanpur)</span>
            <span className="text-[#111111]/30 flex-grow border-b border-dotted border-neutral-400 min-w-[20px] h-3"></span>
            <span className="text-neutral-500 whitespace-nowrap">[2025]</span>
          </div>
          <div className="flex justify-between items-center gap-4">
            <span className="font-bold text-neutral-900 truncate">Runner-Up, Azure Cloud Mastery Workshop</span>
            <span className="text-[#111111]/30 flex-grow border-b border-dotted border-neutral-400 min-w-[20px] h-3"></span>
            <span className="text-neutral-500 whitespace-nowrap">[2024]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
