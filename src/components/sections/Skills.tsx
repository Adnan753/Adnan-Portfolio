// @ts-nocheck
import React from 'react';
import {
  AWS,
  GoogleCloud,
  Kubernetes,
  Docker,
  Terraform,
  Ansible,
  Grafana,
  Datadog,
  Go,
  Python,
  Bash,
  NodeJs,
  RustDark
} from 'developer-icons';

export default function Skills() {
  return (
    <section id="skills" className="p-6 md:p-12 border-b border-[#111111] space-y-6">
      <div>
        <span className="text-xs text-neutral-500 block mb-1">// CONFIG_SPECIFICATION_MANIFEST</span>
        <h2 className="text-2xl font-bold uppercase tracking-tight">Core Competencies</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Category 1 */}
        <div className="border-2 border-[#111111] p-5 bg-white flex flex-col justify-between space-y-3 shadow-[4px_4px_0px_0px_#111111] hover:shadow-[8px_8px_0px_0px_#111111] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200">
          <div>
            <span className="text-[10px] uppercase font-bold text-neutral-400 block tracking-widest">01 / CLOUD_AND_ORCHESTRATION</span>
            <p className="text-xs text-neutral-500 leading-relaxed font-mono mt-1">
              aws, google cloud (gcp), kubernetes (eks, gke), docker, containerized runtime configs, serverless deployments, multi-tenant network policies.
            </p>
          </div>
          <div className="flex gap-3 items-center mt-3 pt-3 border-t border-neutral-100 flex-wrap">
            <AWS size={28} />
            <GoogleCloud size={28} />
            <Kubernetes size={28} />
            <Docker size={28} />
          </div>
        </div>

        {/* Category 2 */}
        <div className="border-2 border-2 border-[#111111] p-5 bg-white flex flex-col justify-between space-y-3 shadow-[4px_4px_0px_0px_#111111] hover:shadow-[8px_8px_0px_0px_#111111] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200">
          <div>
            <span className="text-[10px] uppercase font-bold text-neutral-400 block tracking-widest">02 / INFRASTRUCTURE_AS_CODE</span>
            <p className="text-xs text-neutral-500 leading-relaxed font-mono mt-1">
              terraform, cloudformation templates, ansible playbooks, terragrunt modules, packer image provisioning, gitops (argocd configurations).
            </p>
          </div>
          <div className="flex gap-3 items-center mt-3 pt-3 border-t border-neutral-100 flex-wrap">
            <Terraform size={28} />
            <Ansible size={28} />
          </div>
        </div>

        {/* Category 3 */}
        <div className="border-2 border-[#111111] p-5 bg-white flex flex-col justify-between space-y-3 shadow-[4px_4px_0px_0px_#111111] hover:shadow-[8px_8px_0px_0px_#111111] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200">
          <div>
            <span className="text-[10px] uppercase font-bold text-neutral-400 block tracking-widest">03 / MONITORING_OBSERVABILITY</span>
            <p className="text-xs text-neutral-500 leading-relaxed font-mono mt-1">
              prometheus, grafana visualization, datadog monitoring integration, opentelemetry, kibana, cloudwatch analytics, ebpf tracking.
            </p>
          </div>
          <div className="flex gap-3 items-center mt-3 pt-3 border-t border-neutral-100 flex-wrap">
            <Grafana size={28} />
            <Datadog size={28} />
          </div>
        </div>

        {/* Category 4 */}
        <div className="border-2 border-[#111111] p-5 bg-white flex flex-col justify-between space-y-3 shadow-[4px_4px_0px_0px_#111111] hover:shadow-[8px_8px_0px_0px_#111111] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200">
          <div>
            <span className="text-[10px] uppercase font-bold text-neutral-400 block tracking-widest">04 / PROGRAMMING_BACKEND</span>
            <p className="text-xs text-neutral-500 leading-relaxed font-mono mt-1">
              golang, python scripting, bash shell scripting, node.js utilities, fastapi backends, sql/no-sql queries, rest endpoints development.
            </p>
          </div>
          <div className="flex gap-3 items-center mt-3 pt-3 border-t border-neutral-100 flex-wrap">
            <Go size={28} />
            <Python size={28} />
            <Bash size={28} />
            <NodeJs size={28} />
          </div>
        </div>
      </div>

      {/* Currently Learning - Highlighted Dashed Box */}
      <div className="border-2 border-dashed border-[#111111] p-5 bg-[#EFEDE7]/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:shadow-[4px_4px_0px_0px_#111111] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200">
        <div className="space-y-2">
          <span className="text-[10px] uppercase font-bold text-neutral-500 block tracking-widest">
            ⚙️ ACTIVE_LEARNING_THREAD
          </span>
          <p className="text-xs text-neutral-800 leading-relaxed">
            I am currently diving deep into <strong className="font-bold text-neutral-900">ebpf-deep-dive optimizations</strong> for core kernel tracing, <strong className="font-bold text-neutral-900">Rust programming</strong> for high-speed systems engineering, and exploring <strong className="font-bold text-neutral-900">WasmEdge containers</strong> for fast localized serverless configurations.
          </p>
        </div>
        <div className="flex gap-3 items-center shrink-0">
          <RustDark size={40} />
        </div>
      </div>
    </section>
  );
}
