// @ts-nocheck
import React, { useState } from 'react';
import type { AccentTheme } from '../../types';
import {
  ArchitectureServiceAWSLambda,
  ArchitectureServiceAmazonRDS,
  ArchitectureServiceAmazonElasticKubernetesService,
  ArchitectureServiceAmazonRoute53,
  ArchitectureServiceAmazonAPIGateway,
  ArchitectureServiceAmazonEventBridge,
  ArchitectureServiceAmazonDynamoDB
} from 'aws-react-icons';

interface ProjectsProps {
  activeColor: AccentTheme;
}

export default function Projects({ activeColor }: ProjectsProps) {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section id="projects" className="p-6 md:p-12 border-b border-[#111111] space-y-6">
      <div className="flex justify-between items-end border-b border-[#111111]/10 pb-4">
        <div>
          <span className="text-xs text-neutral-500 block mb-1">// SYSTEM_CHANGELOG</span>
          <h2 className="text-2xl font-bold uppercase tracking-tight">Selected Work</h2>
        </div>

        {/* Direct Categorization Filter Buttons */}
        <div className="hidden sm:flex border-2 border-[#111111] p-0.5 bg-white text-xs shadow-[2px_2px_0px_0px_#111111]">
          {['all', 'infrastructure', 'automation', 'case-study'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 uppercase font-bold transition-all ${activeTab === tab
                  ? 'bg-[#111111] text-[#F7F6F2]'
                  : 'text-neutral-600 hover:bg-[#111111]/10 hover:text-[#111111]'
                }`}
            >
              {tab.replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* PROJECTS ARCHIVE LIST */}
      <div className="space-y-6">

        {/* PROJECT 1 */}
        {(activeTab === 'all' || activeTab === 'infrastructure') && (
          <div className={`border-2 border-[#111111] p-6 bg-white shadow-[4px_4px_0px_0px_#111111] hover:shadow-[8px_8px_0px_0px_#111111] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 group ${activeColor.lightBg}`}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold text-neutral-400">01 /</span>
                <h3 className="font-bold text-lg group-hover:underline">agentic-finops-platform</h3>
                <span className="text-xs px-2 py-0.5 border border-[#111111] bg-neutral-100">STABLE</span>
                <div className="flex gap-1.5 items-center ml-2">
                  <ArchitectureServiceAWSLambda size={24} title="AWS Lambda" />
                  <ArchitectureServiceAmazonRDS size={24} title="Amazon RDS" />
                </div>
              </div>
              <a href="https://thriftex.app" target="_blank" rel="noreferrer" className="text-xs underline font-bold" style={{ color: activeColor.color }}>
                thriftex.app →
              </a>
            </div>

            <p className="text-sm text-neutral-800 mb-4 max-w-3xl leading-relaxed">
              Designed and scaled an automated serverless cost-control dashboard leveraging AWS Lambda, Node.js, and Terraform. Implemented intelligent metric telemetry that safely terminates unused dev instances and optimizes RDS scaling pathways automatically.
            </p>

            <div className="text-xs text-neutral-500 flex flex-wrap gap-x-4 gap-y-1 pt-2 border-t border-[#111111]/10">
              <span className="font-bold text-neutral-600">STAC_DEPS:</span>
              <span>node.js, python, fastapi, react, terraform, aws-lambda, postgresql</span>
            </div>
          </div>
        )}

        {/* PROJECT 2 */}
        {(activeTab === 'all' || activeTab === 'infrastructure') && (
          <div className={`border-2 border-[#111111] p-6 bg-white shadow-[4px_4px_0px_0px_#111111] hover:shadow-[8px_8px_0px_0px_#111111] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 group ${activeColor.lightBg}`}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold text-neutral-400">02 /</span>
                <h3 className="font-bold text-lg group-hover:underline">production-grade-kubernetes-eks</h3>
                <span className="text-xs px-2 py-0.5 border border-[#111111] bg-neutral-100 font-bold text-emerald-700 bg-emerald-50">99.99% UP</span>
                <div className="flex gap-1.5 items-center ml-2">
                  <ArchitectureServiceAmazonElasticKubernetesService size={24} title="Amazon EKS" />
                </div>
              </div>
              <span className="text-xs text-neutral-400 font-bold">[infra_prod]</span>
            </div>

            <p className="text-sm text-neutral-800 mb-4 max-w-3xl leading-relaxed">
              Orchestrated a highly resilient multi-region AWS EKS cluster layout featuring autoscaling nodes, integrated ingress control via Istio Service Mesh, and GitOps pipelines powered by ArgoCD. Ensured high availability by dividing stateful loads globally.
            </p>

            <div className="text-xs text-neutral-500 flex flex-wrap gap-x-4 gap-y-1 pt-2 border-t border-[#111111]/10">
              <span className="font-bold text-neutral-600">STAC_DEPS:</span>
              <span>kubernetes, aws-eks, terraform, argocd, istio, helm, prometheus, grafana</span>
            </div>
          </div>
        )}

        {/* PROJECT 3 */}
        {(activeTab === 'all' || activeTab === 'case-study') && (
          <div className={`border-2 border-[#111111] p-6 bg-white shadow-[4px_4px_0px_0px_#111111] hover:shadow-[8px_8px_0px_0px_#111111] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 group ${activeColor.lightBg}`}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold text-neutral-400">03 /</span>
                <h3 className="font-bold text-lg group-hover:underline">p0-incident-mitigation-framework</h3>
                <span className="text-xs px-2 py-0.5 border border-red-500 bg-red-50 font-bold text-red-700">CASE_STUDY</span>
                <div className="flex gap-1.5 items-center ml-2">
                  <ArchitectureServiceAmazonRoute53 size={24} title="Amazon Route 53" />
                </div>
              </div>
              <span className="text-xs text-neutral-400 font-bold">[critical_log]</span>
            </div>

            <p className="text-sm text-neutral-800 mb-4 max-w-3xl leading-relaxed">
              Engineered an incident defense script which automatically detects spike anomalies on REST gateways and immediately triggers automated API routing reconfigurations. Achieved an impressive reduction in live P0 resolution time from <strong className="font-bold">40s down to 1s</strong>.
            </p>

            <div className="text-xs text-neutral-500 flex flex-wrap gap-x-4 gap-y-1 pt-2 border-t border-[#111111]/10">
              <span className="font-bold text-neutral-600">STAC_DEPS:</span>
              <span>bash, python, datadog-webhooks, cloudflare-workers, aws-route53</span>
            </div>
          </div>
        )}

        {/* PROJECT 4 */}
        {(activeTab === 'all' || activeTab === 'automation') && (
          <div className={`border-2 border-[#111111] p-6 bg-white shadow-[4px_4px_0px_0px_#111111] hover:shadow-[8px_8px_0px_0px_#111111] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 group ${activeColor.lightBg}`}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold text-neutral-400">04 /</span>
                <h3 className="font-bold text-lg group-hover:underline">aws-marketplace-saas-pipeline</h3>
                <span className="text-xs px-2 py-0.5 border border-[#111111] bg-neutral-100">DEPLOYED</span>
                <div className="flex gap-1.5 items-center ml-2">
                  <ArchitectureServiceAmazonAPIGateway size={24} title="Amazon API Gateway" />
                  <ArchitectureServiceAWSLambda size={24} title="AWS Lambda" />
                  <ArchitectureServiceAmazonEventBridge size={24} title="Amazon EventBridge" />
                  <ArchitectureServiceAmazonDynamoDB size={24} title="Amazon DynamoDB" />
                </div>
              </div>
              <a href="https://wetdogweather.com" target="_blank" rel="noreferrer" className="text-xs underline font-bold" style={{ color: activeColor.color }}>
                wet dog weather →
              </a>
            </div>

            <p className="text-sm text-neutral-800 mb-4 max-w-3xl leading-relaxed">
              Designed and deployed a serverless ingestion system for the AWS Marketplace delivery mechanism. Integrated custom telemetry and AWS EventBridge to handle high-frequency subscription state changes with immediate user provisioning.
            </p>

            <div className="text-xs text-neutral-500 flex flex-wrap gap-x-4 gap-y-1 pt-2 border-t border-[#111111]/10">
              <span className="font-bold text-neutral-600">STAC_DEPS:</span>
              <span>aws-lambda, apigateway, eventbridge, dynamodb, terraform, go-sdk</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
