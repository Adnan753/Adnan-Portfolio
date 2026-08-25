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
    <section id="projects" className="p-6 md:p-12 border-b-4 border-[#111111] space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b-2 border-[#111111] pb-4 gap-4">
        <div>
          <span className="text-xs text-neutral-500 block mb-1">// SYSTEM_CHANGELOG</span>
          <h2 className="text-2xl font-bold uppercase tracking-tight">Selected Work</h2>
        </div>

        {/* Direct Categorization Filter Buttons */}
        <div className="flex border-2 border-[#111111] p-0 bg-white text-xs shadow-[4px_4px_0px_0px_#111111] rounded-none">
          {['all', 'infrastructure', 'automation'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 uppercase font-bold transition-all border-r-2 border-[#111111] last:border-r-0 cursor-pointer ${
                activeTab === tab
                  ? 'text-[#111111]'
                  : 'text-neutral-600 hover:bg-[#111111]/5'
              }`}
              style={activeTab === tab ? { backgroundColor: activeColor.color } : undefined}
            >
              {tab.replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* PROJECTS ARCHIVE LIST */}
      <div className="space-y-8">

        {/* PROJECT 1 */}
        {(activeTab === 'all' || activeTab === 'automation') && (
          <div className="border-4 border-[#111111] bg-white shadow-[8px_8px_0px_0px_#111111] hover:shadow-[12px_12px_0px_0px_#111111] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 group rounded-none p-0 overflow-hidden">
            {/* Header Block in Accent Teal */}
            <div className="border-b-4 border-[#111111] px-6 py-3 flex flex-wrap justify-between items-center bg-[#00C2CB] text-black">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="text-xs font-black text-black/55">01 /</span>
                <h3 className="font-black text-lg group-hover:underline uppercase tracking-tight">agentic-cloud-finops-platform</h3>
                <span className="text-[10px] px-2.5 py-0.5 border-2 border-[#111111] bg-white font-extrabold text-black shadow-[2px_2px_0px_0px_#111111]">
                  MVP_ACTIVE
                </span>
              </div>
              <a href="https://thriftex.app" target="_blank" rel="noreferrer" className="text-xs underline font-extrabold text-black hover:opacity-80">
                thriftex.app →
              </a>
            </div>

            <div className="p-6 space-y-4">
              <ul className="list-disc pl-5 text-sm text-neutral-800 space-y-1.5 max-w-3xl leading-relaxed">
                <li>Solo-built working MVP: 3 services (Node.js API, Python AI agent, React frontend), 14 REST endpoints, 6 dashboard pages.</li>
                <li>Built multi-step AI agent (Observe → Reason → Plan) with memory, goal-awareness, and structured JSON output.</li>
                <li>Implemented statistical anomaly detection (z-score) and 30-day cost forecasting using Prophet and NumPy.</li>
                <li>Integrated AWS Cost Explorer API for real spend data with service-level breakdown and month-over-month analysis.</li>
              </ul>

              {/* AWS Icons Panel */}
              <div className="flex gap-2 items-center bg-[#F7F6F2] p-2 border-2 border-[#111111] w-fit shadow-[2px_2px_0px_0px_#111111]">
                <span className="text-[10px] font-bold text-neutral-700 uppercase tracking-wider mr-2">// RESOURCES:</span>
                <div className="flex gap-1.5 items-center">
                  <ArchitectureServiceAWSLambda size={22} />
                  <ArchitectureServiceAmazonAPIGateway size={22} />
                  <ArchitectureServiceAmazonEventBridge size={22} />
                  <ArchitectureServiceAmazonDynamoDB size={22} />
                </div>
              </div>

              {/* Dependencies tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t-2 border-[#111111]">
                <span className="font-bold text-[10px] text-neutral-800 uppercase self-center mr-1">// STAC_DEPS:</span>
                {['node.js', 'python', 'fastapi', 'react', 'aws-lambda', 'aws-cost-explorer', 'prophet', 'numpy'].map(tag => (
                  <span key={tag} className="text-[10px] px-2.5 py-0.5 border-2 border-[#111111] bg-neutral-50 font-bold text-neutral-800 shadow-[1px_1px_0px_0px_#111111] rounded-none">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* PROJECT 2 */}
        {(activeTab === 'all' || activeTab === 'infrastructure') && (
          <div className="border-4 border-[#111111] bg-white shadow-[8px_8px_0px_0px_#111111] hover:shadow-[12px_12px_0px_0px_#111111] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 group rounded-none p-0 overflow-hidden">
            {/* Header Block in Accent Magenta */}
            <div className="border-b-4 border-[#111111] px-6 py-3 flex flex-wrap justify-between items-center bg-[#FF00FF] text-black">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="text-xs font-black text-black/55">02 /</span>
                <h3 className="font-black text-lg group-hover:underline uppercase tracking-tight">production-grade-multi-tier-aws-app</h3>
                <span className="text-[10px] px-2.5 py-0.5 border-2 border-[#111111] bg-white font-extrabold text-black shadow-[2px_2px_0px_0px_#111111]">
                  DEPLOYED
                </span>
              </div>
              <span className="text-xs font-extrabold text-black uppercase tracking-wider">[infra_prod]</span>
            </div>

            <div className="p-6 space-y-4">
              <ul className="list-disc pl-5 text-sm text-neutral-800 space-y-1.5 max-w-3xl leading-relaxed">
                <li>Built 3-tier application (React, Node.js, MySQL on RDS) on AWS using Terraform with 12 modular components: VPC, ECS, RDS, ALB, CloudFront, ECR, CodePipeline, CodeBuild, CodeDeploy, Secrets Manager, SNS, CloudWatch.</li>
                <li>Blue-green deployment via CodePipeline and CodeDeploy with automatic rollback on health check failure – zero-downtime releases.</li>
                <li>Secure multi-AZ architecture: private subnets for app and DB tiers, NAT Gateway, least-privilege security groups, Secrets Manager.</li>
              </ul>

              {/* AWS Icons Panel */}
              <div className="flex gap-2 items-center bg-[#F7F6F2] p-2 border-2 border-[#111111] w-fit shadow-[2px_2px_0px_0px_#111111]">
                <span className="text-[10px] font-bold text-neutral-700 uppercase tracking-wider mr-2">// RESOURCES:</span>
                <div className="flex gap-1.5 items-center">
                  <ArchitectureGroupVirtualprivatecloudVPC size={22} />
                  <ArchitectureServiceAmazonElasticContainerService size={22} />
                  <ArchitectureServiceAWSFargate size={22} />
                  <ArchitectureServiceAmazonRDS size={22} />
                </div>
              </div>

              {/* Dependencies tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t-2 border-[#111111]">
                <span className="font-bold text-[10px] text-neutral-800 uppercase self-center mr-1">// STAC_DEPS:</span>
                {['terraform', 'aws-ecs-fargate', 'rds-mysql', 'codepipeline', 'vpc', 'cloudfront', 'secrets-manager'].map(tag => (
                  <span key={tag} className="text-[10px] px-2.5 py-0.5 border-2 border-[#111111] bg-neutral-50 font-bold text-neutral-800 shadow-[1px_1px_0px_0px_#111111] rounded-none">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
