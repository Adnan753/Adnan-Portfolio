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
              <span className="text-[#111111]/50">[FEB 2026 — PRESENT]</span> DEVOPS ENGINEER @ SIGNIANCE TECHNOLOGIES
            </h3>
            <span className="text-xs px-2 py-0.5 border border-[#111111] bg-emerald-50 text-emerald-800 font-bold self-start sm:self-auto uppercase">Active_Node</span>
          </div>
          <ul className="space-y-1.5 text-xs text-neutral-800">
            <li className="flex items-start gap-2">
              <span className="text-neutral-400 select-none">——</span>
              <span>Deployed Python AI agent and Node.js application on EC2 – PM2 process management, Nginx reverse proxy, SSL/TLS via Certbot.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-400 select-none">——</span>
              <span>Built ETL pipeline PoC using AWS Glue, Step Functions, PySpark, Redshift, Lambda, and S3 – end-to-end data ingestion and transformation workflow.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-400 select-none">——</span>
              <span>Developed serverless bill classification automator with AWS Lambda – tag-based cost categorization and automated report generation to Google Sheets.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-400 select-none">——</span>
              <span>Tested AWS Bedrock AgentCore Runtime APIs via Postman; configured Amazon Cognito as authentication provider for agent access control.</span>
            </li>
          </ul>
        </div>

        {/* ROLE 2 */}
        <div className="p-6 space-y-3">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
            <h3 className="font-bold text-neutral-900">
              <span className="text-[#111111]/50">[AUG 2025 — JAN 2026]</span> DEVOPS ENGINEER @ BYTEHINT IT SOLUTIONS
            </h3>
            <span className="text-xs px-2 py-0.5 border border-[#111111] bg-neutral-100 text-neutral-600 font-bold self-start sm:self-auto uppercase">Archived</span>
          </div>
          <ul className="space-y-1.5 text-xs text-neutral-800">
            <li className="flex items-start gap-2">
              <span className="text-neutral-400 select-none">——</span>
              <span>Sole DevOps engineer for SaaS platform serving 30,000+ users – owned full infrastructure lifecycle from provisioning to incident response.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-400 select-none">——</span>
              <span>Diagnosed and resolved P0 incident during live product launch – cut response time from 40s to 1s by identifying ECS task concurrency bottleneck and implementing request-based auto-scaling.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-400 select-none">——</span>
              <span>Cut AWS costs 37.5% by identifying S3 bandwidth inefficiency ($0.08/GB) and rerouting traffic through CloudFront ($0.05/GB).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-400 select-none">——</span>
              <span>Architected full AWS stack: ECS Fargate, ALB with SSL/TLS, multi-tier VPC with public/private subnets, NAT Gateway, least-privilege IAM, CloudWatch monitoring, GitHub Actions CI/CD.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-400 select-none">——</span>
              <span>Deployed AI inference microservice on EC2 – FastAPI, Nginx reverse proxy, Hugging Face integration with zero-downtime deployment.</span>
            </li>
          </ul>
        </div>

        {/* ROLE 3 */}
        <div className="p-6 space-y-3">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
            <h3 className="font-bold text-neutral-900">
              <span className="text-[#111111]/50">[NOV 2025 — MAR 2026]</span> CLOUD SOLUTIONS CONSULTANT @ WET DOG WEATHER, USA
            </h3>
            <span className="text-xs px-2 py-0.5 border border-[#111111] bg-amber-50 text-amber-800 font-bold self-start sm:self-auto uppercase">Freelance</span>
          </div>
          <ul className="space-y-1.5 text-xs text-neutral-800">
            <li className="flex items-start gap-2">
              <span className="text-neutral-400 select-none">——</span>
              <span>Repeat-hire contract (Upwork freelance) – worked directly with COO across two independently delivered projects.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-400 select-none">——</span>
              <span>Listed client SaaS product on AWS Marketplace end-to-end: configuration, metering, pricing, and public availability.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-400 select-none">——</span>
              <span>Built customer onboarding portal with Google Sheets integration and MapLibre-based interactive location picker.</span>
            </li>
          </ul>
        </div>

        {/* ROLE 4 */}
        <div className="p-6 space-y-3">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
            <h3 className="font-bold text-neutral-900">
              <span className="text-[#111111]/50">[MAY 2025 — AUG 2025]</span> SOFTWARE ENGINEER INTERN @ BYTEHINT IT SOLUTIONS
            </h3>
            <span className="text-xs px-2 py-0.5 border border-[#111111] bg-neutral-100 text-neutral-600 font-bold self-start sm:self-auto uppercase">Archived</span>
          </div>
          <ul className="space-y-1.5 text-xs text-neutral-800">
            <li className="flex items-start gap-2">
              <span className="text-neutral-400 select-none">——</span>
              <span>Sole backend engineer – built production SaaS backend from scratch using Node.js, Express.js, and MongoDB.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-400 select-none">——</span>
              <span>Implemented JWT authentication and OAuth 2.0 integration; built 10+ REST APIs for multi-tenant architecture.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-400 select-none">——</span>
              <span>Reduced production bugs by 25% through API contract testing and input validation across all endpoints.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
