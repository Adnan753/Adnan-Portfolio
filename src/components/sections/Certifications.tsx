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
              <h4 className="font-bold text-neutral-900">B.S. Computer Science &amp; Engineering</h4>
              <span className="text-neutral-500">University Technical Division</span>
            </div>
            <span className="text-[#111111]/50 font-bold">[2018 - 2022]</span>
          </div>
          <div className="h-px bg-neutral-900/10 w-full"></div>
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-neutral-900">Senior Secondary Education</h4>
              <span className="text-neutral-500">Board of Science Education</span>
            </div>
            <span className="text-[#111111]/50 font-bold">[2016 - 2018]</span>
          </div>
        </div>
      </div>

      {/* CERTIFICATIONS */}
      <div className="p-6 md:p-12 space-y-6">
        <div>
          <span className="text-xs text-neutral-400 block mb-1">// ACCREDITED_CREDENTIALS</span>
          <h3 className="text-xl font-bold uppercase">Certifications</h3>
        </div>
        <div className="space-y-4 text-xs">
          <div className="flex justify-between items-center gap-4">
            <span className="font-bold text-neutral-900 truncate">AWS Certified Solutions Architect Professional</span>
            <span className="text-[#111111]/30 flex-grow border-b border-dotted border-neutral-400 min-w-[20px] h-3"></span>
            <span className="text-neutral-500 whitespace-nowrap">[2025]</span>
          </div>
          <div className="flex justify-between items-center gap-4">
            <span className="font-bold text-neutral-900 truncate">Certified Kubernetes Administrator (CKA)</span>
            <span className="text-[#111111]/30 flex-grow border-b border-dotted border-neutral-400 min-w-[20px] h-3"></span>
            <span className="text-neutral-500 whitespace-nowrap">[2024]</span>
          </div>
          <div className="flex justify-between items-center gap-4">
            <span className="font-bold text-neutral-900 truncate">HashiCorp Certified Terraform Associate</span>
            <span className="text-[#111111]/30 flex-grow border-b border-dotted border-neutral-400 min-w-[20px] h-3"></span>
            <span className="text-neutral-500 whitespace-nowrap">[2023]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
