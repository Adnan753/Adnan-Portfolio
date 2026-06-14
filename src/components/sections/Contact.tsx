// @ts-nocheck
import React, { useState } from 'react';
import type { AccentTheme } from '../../types';

interface ContactProps {
  activeColor: AccentTheme;
}

export default function Contact({ activeColor }: ContactProps) {
  const [copyStatus, setCopyStatus] = useState('');

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard?.writeText(text) || document.execCommand('copy');
    setCopyStatus(type);
    setTimeout(() => setCopyStatus(''), 2000);
  };

  return (
    <section id="contact" className="p-6 md:p-12 border-b border-[#111111] bg-[#EFEDE7]/20 space-y-6">
      <div>
        <span className="text-xs text-neutral-500 block mb-1">// SERVICES.MD</span>
        <h2 className="text-2xl font-bold uppercase tracking-tight">Contract &amp; Freelance Availability</h2>
      </div>

      <p className="text-sm text-neutral-800 leading-relaxed max-w-2xl">
        I consult for early to mid-stage companies seeking rapid, expert adjustments to their system scalability, infrastructure bottlenecks, or AWS billing configurations. Below are concrete service setups I perform on a contract basis:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">

        <div className="border border-[#111111] p-5 bg-white space-y-2">
          <h4 className="font-bold text-neutral-900 uppercase">// 01. AWS Cost &amp; Architecture Audits</h4>
          <p className="text-neutral-600 leading-relaxed">
            Deep-dive reviews into billing patterns, identifying dead volumes, unoptimized NAT routes, oversized instances, and setting up automated cost-saving runbooks.
          </p>
        </div>

        <div className="border border-[#111111] p-5 bg-white space-y-2">
          <h4 className="font-bold text-neutral-900 uppercase">// 02. Fast Zero-Downtime CI/CD</h4>
          <p className="text-neutral-600 leading-relaxed">
            Migrating slow, fragile pipelines over to robust GitHub Actions or ArgoCD setups. Integration of unit diagnostics, vulnerability scanning, and seamless deployments.
          </p>
        </div>

        <div className="border border-[#111111] p-5 bg-white space-y-2">
          <h4 className="font-bold text-neutral-900 uppercase">// 03. High-Availability Clusters</h4>
          <p className="text-neutral-600 leading-relaxed">
            Kubernetes cluster setups (EKS, GKE) with multi-region active routing, secure load-balancing rules, and unified container lifecycle policies.
          </p>
        </div>

        <div className="border border-[#111111] p-5 bg-white space-y-2">
          <h4 className="font-bold text-neutral-900 uppercase">// 04. Observability &amp; SRE Setups</h4>
          <p className="text-neutral-600 leading-relaxed">
            Installing custom telemetry exporters, clean alerting runbooks, and detailed metrics dashboards to eliminate noisy warnings and secure quiet nights.
          </p>
        </div>
      </div>

      {/* Direct Hire / Action Box */}
      <div className="border border-[#111111] bg-white p-6 space-y-4 max-w-3xl">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: activeColor.color }}></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5" style={{ backgroundColor: activeColor.color }}></span>
          </span>
          <span className="font-bold text-xs uppercase tracking-wider">PROJECTS STATUS: NOW BOOKING FOR Q2/Q3 2026</span>
        </div>

        <p className="text-xs text-neutral-700 leading-relaxed">
          Need urgent infrastructure mitigation, high availability engineering, or a cost-containment task? Let's connect directly via email or Upwork. I usually respond within an hour with technical engagement options.
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          <a
            href="mailto:adnan.devops@fastmail.com"
            className="px-4 py-2 border border-[#111111] text-xs font-bold text-[#F7F6F2] hover:opacity-90 transition uppercase"
            style={{ backgroundColor: activeColor.color }}
          >
            Initiate Direct Email →
          </a>
          <button
            onClick={() => copyToClipboard('adnan.devops@fastmail.com', 'hire')}
            className="px-4 py-2 border border-[#111111] text-xs font-bold bg-neutral-100 hover:bg-neutral-200 transition uppercase"
          >
            {copyStatus === 'hire' ? 'Copied to Clipboard!' : 'Copy Email Address'}
          </button>
        </div>
      </div>
    </section>
  );
}
