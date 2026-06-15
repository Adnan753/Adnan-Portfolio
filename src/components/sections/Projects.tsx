import { useState } from 'react';
import type { AccentTheme } from '../../types';
import {
  ArchitectureServiceAWSLambda,
  ArchitectureServiceAmazonRDS,
  ArchitectureServiceAmazonAPIGateway,
  ArchitectureServiceAmazonEventBridge,
  ArchitectureServiceAmazonDynamoDB,
  ArchitectureServiceAmazonElasticContainerService,
  ArchitectureServiceAWSFargate,
  ArchitectureGroupVirtualprivatecloudVPC
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
          {['all', 'infrastructure', 'automation'].map((tab) => (
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
        {(activeTab === 'all' || activeTab === 'automation') && (
          <div className={`border-2 border-[#111111] p-6 bg-white shadow-[4px_4px_0px_0px_#111111] hover:shadow-[8px_8px_0px_0px_#111111] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 group ${activeColor.lightBg}`}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold text-neutral-400">01 /</span>
                <h3 className="font-bold text-lg group-hover:underline">agentic-cloud-finops-platform</h3>
                <span className="text-xs px-2 py-0.5 border border-[#111111] bg-neutral-100">MVP_ACTIVE</span>
                <div className="flex gap-1.5 items-center ml-2">
                  <ArchitectureServiceAWSLambda size={24} />
                  <ArchitectureServiceAmazonAPIGateway size={24} />
                  <ArchitectureServiceAmazonEventBridge size={24} />
                  <ArchitectureServiceAmazonDynamoDB size={24} />
                </div>
              </div>
              <a href="https://thriftex.app" target="_blank" rel="noreferrer" className="text-xs underline font-bold" style={{ color: activeColor.color }}>
                thriftex.app →
              </a>
            </div>

            <ul className="list-disc pl-5 text-sm text-neutral-800 space-y-1.5 mb-4 max-w-3xl leading-relaxed">
              <li>Solo-built working MVP: 3 services (Node.js API, Python AI agent, React frontend), 14 REST endpoints, 6 dashboard pages.</li>
              <li>Built multi-step AI agent (Observe → Reason → Plan) with memory, goal-awareness, and structured JSON output.</li>
              <li>Implemented statistical anomaly detection (z-score) and 30-day cost forecasting using Prophet and NumPy.</li>
              <li>Integrated AWS Cost Explorer API for real spend data with service-level breakdown and month-over-month analysis.</li>
            </ul>

            <div className="text-xs text-neutral-500 flex flex-wrap gap-x-4 gap-y-1 pt-2 border-t border-[#111111]/10">
              <span className="font-bold text-neutral-600">STAC_DEPS:</span>
              <span>node.js, python, fastapi, react, aws-lambda, aws-cost-explorer, prophet, numpy</span>
            </div>
          </div>
        )}

        {/* PROJECT 2 */}
        {(activeTab === 'all' || activeTab === 'infrastructure') && (
          <div className={`border-2 border-[#111111] p-6 bg-white shadow-[4px_4px_0px_0px_#111111] hover:shadow-[8px_8px_0px_0px_#111111] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 group ${activeColor.lightBg}`}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold text-neutral-400">02 /</span>
                <h3 className="font-bold text-lg group-hover:underline">production-grade-multi-tier-aws-app</h3>
                <span className="text-xs px-2 py-0.5 border border-[#111111] bg-neutral-100 font-bold text-emerald-700 bg-emerald-50">DEPLOYED</span>
                <div className="flex gap-1.5 items-center ml-2">
                  <ArchitectureGroupVirtualprivatecloudVPC size={24} />
                  <ArchitectureServiceAmazonElasticContainerService size={24} />
                  <ArchitectureServiceAWSFargate size={24} />
                  <ArchitectureServiceAmazonRDS size={24} />
                </div>
              </div>
              <span className="text-xs text-neutral-400 font-bold">[infra_prod]</span>
            </div>

            <ul className="list-disc pl-5 text-sm text-neutral-800 space-y-1.5 mb-4 max-w-3xl leading-relaxed">
              <li>Built 3-tier application (React, Node.js, MySQL on RDS) on AWS using Terraform with 12 modular components: VPC, ECS, RDS, ALB, CloudFront, ECR, CodePipeline, CodeBuild, CodeDeploy, Secrets Manager, SNS, CloudWatch.</li>
              <li>Blue-green deployment via CodePipeline and CodeDeploy with automatic rollback on health check failure – zero-downtime releases.</li>
              <li>Secure multi-AZ architecture: private subnets for app and DB tiers, NAT Gateway, least-privilege security groups, Secrets Manager.</li>
            </ul>

            <div className="text-xs text-neutral-500 flex flex-wrap gap-x-4 gap-y-1 pt-2 border-t border-[#111111]/10">
              <span className="font-bold text-neutral-600">STAC_DEPS:</span>
              <span>terraform, aws-ecs-fargate, rds-mysql, codepipeline, vpc, cloudfront, secrets-manager</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
