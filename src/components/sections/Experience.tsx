// @ts-nocheck
import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="p-6 md:p-12 border-b border-[#111111] bg-[#EFEDE7]/10 space-y-6">
      <div>
        <span className="text-xs text-neutral-500 block mb-1">// SYSTEM_LOG /EXPERIENCE</span>
        <h2 className="text-2xl font-bold uppercase tracking-tight">Work History</h2>
      </div>

      <div className="border border-[#111111] bg-white divide-y divide-[#111111]">

        {/* ROLE 1 */}
        <div className="p-6 space-y-3">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
            <h3 className="font-bold text-neutral-900">
              <span className="text-[#111111]/50">[2026-02 — PRESENT]</span> DEVOPS ENGINEER @ SIGNIANCE TECHNOLOGIES
            </h3>
            <span className="text-xs px-2 py-0.5 border border-[#111111] bg-emerald-50 text-emerald-800 font-bold self-start sm:self-auto uppercase">Active_Node</span>
          </div>
          <ul className="space-y-1.5 text-xs text-neutral-800">
            <li className="flex items-start gap-2">
              <span className="text-neutral-400 select-none">——</span>
              <span>Architected automated infrastructure provisioning leveraging declarative Terraform blueprints, cutting multi-tenant onboarding overhead from hours to a standard 6-minute loop.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-400 select-none">——</span>
              <span>Restructured global AWS Elastic Kubernetes Service (EKS) network rules, optimizing internal cluster routing security protocols and decreasing unexpected system latency by 22%.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-400 select-none">——</span>
              <span>Refined cluster ingress rules, mitigating malicious route traversal vectors and achieving highly streamlined security compliance milestones.</span>
            </li>
          </ul>
        </div>

        {/* ROLE 2 */}
        <div className="p-6 space-y-3">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
            <h3 className="font-bold text-neutral-900">
              <span className="text-[#111111]/50">[2024-04 — 2026-02]</span> SITE RELIABILITY ENGINEER @ CORESCALE LABS
            </h3>
            <span className="text-xs px-2 py-0.5 border border-[#111111] bg-neutral-100 text-neutral-600 font-bold self-start sm:self-auto uppercase">Archived</span>
          </div>
          <ul className="space-y-1.5 text-xs text-neutral-800">
            <li className="flex items-start gap-2">
              <span className="text-neutral-400 select-none">——</span>
              <span>Spearheaded a complete rewrite of pipeline architectures from scratch, reducing compilation pipeline steps and driving integration speeds from 40 seconds to 1 second flat.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-400 select-none">——</span>
              <span>Pioneered eBPF monitoring hooks across multi-host environments to secure dynamic routing contexts and optimize service topology profiling maps.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-400 select-none">——</span>
              <span>Coordinated comprehensive high-risk sandbox fire-drills to successfully pressure-test failover mechanisms, ensuring high service level indicators were safely met under peak demand simulations.</span>
            </li>
          </ul>
        </div>

        {/* ROLE 3 */}
        <div className="p-6 space-y-3">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
            <h3 className="font-bold text-neutral-900">
              <span className="text-[#111111]/50">[2022-06 — 2024-04]</span> ASSOCIATE PLATFORM ENGINEER @ NEXUS NETWORKS
            </h3>
            <span className="text-xs px-2 py-0.5 border border-[#111111] bg-neutral-100 text-neutral-600 font-bold self-start sm:self-auto uppercase">Archived</span>
          </div>
          <ul className="space-y-1.5 text-xs text-neutral-800">
            <li className="flex items-start gap-2">
              <span className="text-neutral-400 select-none">——</span>
              <span>Supported system scaling migrations of heavy on-premises monolith stacks into containerized modern AWS patterns.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-400 select-none">——</span>
              <span>Wrote, debugged, and documented custom Python exporters for Prometheus monitoring agents to log database access pools.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-400 select-none">——</span>
              <span>Automated standard daily backups of critical transactional stores into highly isolated, encrypted standard object stores.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
