// @ts-nocheck
import React from 'react';

export default function Skills() {
  return (
    <section id="skills" className="p-6 md:p-12 border-b border-[#111111] space-y-6">
      <div>
        <span className="text-xs text-neutral-500 block mb-1">// CONFIG_SPECIFICATION_MANIFEST</span>
        <h2 className="text-2xl font-bold uppercase tracking-tight">Core Competencies</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Category 1 */}
        <div className="border border-[#111111] p-5 bg-white space-y-3">
          <span className="text-[10px] uppercase font-bold text-neutral-400 block tracking-widest">01 / CLOUD_AND_ORCHESTRATION</span>
          <p className="text-xs text-neutral-500 leading-relaxed font-mono">
            aws, google cloud (gcp), kubernetes (eks, gke), docker, containerized runtime configs, serverless deployments, multi-tenant network policies.
          </p>
        </div>

        {/* Category 2 */}
        <div className="border border-[#111111] p-5 bg-white space-y-3">
          <span className="text-[10px] uppercase font-bold text-neutral-400 block tracking-widest">02 / INFRASTRUCTURE_AS_CODE</span>
          <p className="text-xs text-neutral-500 leading-relaxed font-mono">
            terraform, cloudformation templates, ansible playbooks, terragrunt modules, packer image provisioning, gitops (argocd configurations).
          </p>
        </div>

        {/* Category 3 */}
        <div className="border border-[#111111] p-5 bg-white space-y-3">
          <span className="text-[10px] uppercase font-bold text-neutral-400 block tracking-widest">03 / MONITORING_OBSERVABILITY</span>
          <p className="text-xs text-neutral-500 leading-relaxed font-mono">
            prometheus, grafana visualization, datadog monitoring integration, opentelemetry, kibana, cloudwatch analytics, ebpf tracking.
          </p>
        </div>

        {/* Category 4 */}
        <div className="border border-[#111111] p-5 bg-white space-y-3">
          <span className="text-[10px] uppercase font-bold text-neutral-400 block tracking-widest">04 / PROGRAMMING_BACKEND</span>
          <p className="text-xs text-neutral-500 leading-relaxed font-mono">
            golang, python scripting, bash shell scripting, node.js utilities, fastapi backends, sql/no-sql queries, rest endpoints development.
          </p>
        </div>
      </div>

      {/* Currently Learning - Highlighted Dashed Box */}
      <div className="border-2 border-dashed border-[#111111] p-5 bg-[#EFEDE7]/20 space-y-2">
        <span className="text-[10px] uppercase font-bold text-neutral-500 block tracking-widest">
          ⚙️ ACTIVE_LEARNING_THREAD
        </span>
        <p className="text-xs text-neutral-800 leading-relaxed">
          I am currently diving deep into <strong className="font-bold text-neutral-900">ebpf-deep-dive optimizations</strong> for core kernel tracing, <strong className="font-bold text-neutral-900">Rust programming</strong> for high-speed systems engineering, and exploring <strong className="font-bold text-neutral-900">WasmEdge containers</strong> for fast localized serverless configurations.
        </p>
      </div>
    </section>
  );
}
