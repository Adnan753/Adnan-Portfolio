import type { AccentTheme } from '../../types';
import {
  AWS,
  Kubernetes,
  Docker,
  Terraform,
  Ansible,
  Grafana,
  Python,
  Bash,
  NodeJs
} from 'developer-icons';

interface SkillsProps {
  activeColor: AccentTheme;
}

export default function Skills({ activeColor }: SkillsProps) {
  return (
    <section id="skills" className="p-6 md:p-12 border-b-4 border-[#111111] space-y-6">
      <div>
        <span className="text-xs text-neutral-500 block mb-1">// CONFIG_SPECIFICATION_MANIFEST</span>
        <h2 className="text-2xl font-bold uppercase tracking-tight">Core Competencies</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Category 1 */}
        <div className="border-4 border-[#111111] bg-white flex flex-col justify-between shadow-[8px_8px_0px_0px_#111111] hover:shadow-[12px_12px_0px_0px_#111111] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 rounded-none p-0 overflow-hidden">
          <div className="border-b-4 border-[#111111] px-5 py-2.5 bg-[#00C2CB] text-black">
            <span className="text-[10px] uppercase font-black tracking-widest text-black/75">01 / CLOUD_AND_INFRASTRUCTURE</span>
          </div>
          <div className="p-5 flex flex-col justify-between flex-grow">
            <p className="text-xs text-neutral-800 leading-relaxed font-mono">
              AWS (EC2, ECS Fargate, ALB, S3, CloudFront, IAM, VPC, RDS, ECR, Lambda, Glue, Step Functions, Redshift, Bedrock, Cognito, Secrets Manager, CloudWatch, SNS, CodePipeline), Azure (basic).
            </p>
            <div className="flex gap-3 items-center mt-4 pt-3 border-t-2 border-[#111111] flex-wrap">
              <AWS size={28} />
            </div>
          </div>
        </div>

        {/* Category 2 */}
        <div className="border-4 border-[#111111] bg-white flex flex-col justify-between shadow-[8px_8px_0px_0px_#111111] hover:shadow-[12px_12px_0px_0px_#111111] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 rounded-none p-0 overflow-hidden">
          <div className="border-b-4 border-[#111111] px-5 py-2.5 bg-[#FFE000] text-black">
            <span className="text-[10px] uppercase font-black tracking-widest text-black/75">02 / NETWORKING_AND_SECURITY</span>
          </div>
          <div className="p-5 flex flex-col justify-between flex-grow">
            <p className="text-xs text-neutral-800 leading-relaxed font-mono">
              VPC design, public/private subnets, NAT Gateway, Internet Gateway, security groups, NACLs, ALB, SSL/TLS, DNS, Nginx reverse proxy, TCP/IP, HTTP/HTTPS, firewall rules.
            </p>
            <div className="flex gap-3 items-center mt-4 pt-3 border-t-2 border-[#111111] flex-wrap">
              <Bash size={28} />
            </div>
          </div>
        </div>

        {/* Category 3 */}
        <div className="border-4 border-[#111111] bg-white flex flex-col justify-between shadow-[8px_8px_0px_0px_#111111] hover:shadow-[12px_12px_0px_0px_#111111] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 rounded-none p-0 overflow-hidden">
          <div className="border-b-4 border-[#111111] px-5 py-2.5 bg-[#FF00FF] text-black">
            <span className="text-[10px] uppercase font-black tracking-widest text-black/75">03 / DEVOPS_AND_CICD</span>
          </div>
          <div className="p-5 flex flex-col justify-between flex-grow">
            <p className="text-xs text-neutral-800 leading-relaxed font-mono">
              Docker, Terraform, GitHub Actions, AWS CodePipeline/CodeBuild/CodeDeploy, PM2, Nginx, Certbot, Linux, Bash scripting, Git.
            </p>
            <div className="flex gap-3 items-center mt-4 pt-3 border-t-2 border-[#111111] flex-wrap">
              <Docker size={28} />
              <Terraform size={28} />
            </div>
          </div>
        </div>

        {/* Category 4 */}
        <div className="border-4 border-[#111111] bg-white flex flex-col justify-between shadow-[8px_8px_0px_0px_#111111] hover:shadow-[12px_12px_0px_0px_#111111] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 rounded-none p-0 overflow-hidden">
          <div className="border-b-4 border-[#111111] px-5 py-2.5 bg-[#F7F6F2] text-black">
            <span className="text-[10px] uppercase font-black tracking-widest text-neutral-700">04 / BACKEND_AND_DATA</span>
          </div>
          <div className="p-5 flex flex-col justify-between flex-grow">
            <p className="text-xs text-neutral-800 leading-relaxed font-mono">
              Node.js, FastAPI, Python, REST APIs, MongoDB, MySQL, Supabase, PySpark, AWS Glue.
            </p>
            <div className="flex gap-3 items-center mt-4 pt-3 border-t-2 border-[#111111] flex-wrap">
              <NodeJs size={28} />
              <Python size={28} />
            </div>
          </div>
        </div>
      </div>

      {/* Currently Learning - Highlighted Warning Toast Box */}
      <div className="border-4 border-[#111111] p-6 bg-[#FFE000] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 shadow-[12px_12px_0px_0px_#111111] hover:shadow-[16px_16px_0px_0px_#111111] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 rounded-none text-black">
        <div className="space-y-3">
          <span className="inline-block text-[10px] uppercase font-extrabold text-black px-3 py-1 border-2 border-[#111111] shadow-[3px_3px_0px_0px_#111111] rounded-none" style={{ backgroundColor: activeColor.color }}>
            ⚙️ ACTIVE_LEARNING_THREAD
          </span>
          <p className="text-xs md:text-sm font-bold leading-relaxed pt-1">
            I am currently diving deep into <strong className="font-black text-black underline">Kubernetes (EKS), Helm, ArgoCD, Ansible, Prometheus, and Grafana</strong> to deploy, automate, and monitor complex containerized systems.
          </p>
        </div>
        <div className="flex gap-4 items-center shrink-0 bg-white p-3 border-2 border-[#111111] shadow-[3px_3px_0px_0px_#111111]">
          <Kubernetes size={32} />
          <Ansible size={32} />
          <Grafana size={32} />
        </div>
      </div>
    </section>
  );
}
