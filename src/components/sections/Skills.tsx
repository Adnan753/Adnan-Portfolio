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
            <span className="text-[10px] uppercase font-bold text-neutral-400 block tracking-widest">01 / CLOUD_AND_INFRASTRUCTURE</span>
            <p className="text-xs text-neutral-500 leading-relaxed font-mono mt-1">
              AWS (EC2, ECS Fargate, ALB, S3, CloudFront, IAM, VPC, RDS, ECR, Lambda, Glue, Step Functions, Redshift, Bedrock, Cognito, Secrets Manager, CloudWatch, SNS, CodePipeline), Azure (basic).
            </p>
          </div>
          <div className="flex gap-3 items-center mt-3 pt-3 border-t border-neutral-100 flex-wrap">
            <AWS size={28} />
          </div>
        </div>

        {/* Category 2 */}
        <div className="border-2 border-[#111111] p-5 bg-white flex flex-col justify-between space-y-3 shadow-[4px_4px_0px_0px_#111111] hover:shadow-[8px_8px_0px_0px_#111111] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200">
          <div>
            <span className="text-[10px] uppercase font-bold text-neutral-400 block tracking-widest">02 / NETWORKING_AND_SECURITY</span>
            <p className="text-xs text-neutral-500 leading-relaxed font-mono mt-1">
              VPC design, public/private subnets, NAT Gateway, Internet Gateway, security groups, NACLs, ALB, SSL/TLS, DNS, Nginx reverse proxy, TCP/IP, HTTP/HTTPS, firewall rules.
            </p>
          </div>
          <div className="flex gap-3 items-center mt-3 pt-3 border-t border-neutral-100 flex-wrap">
            <Bash size={28} />
          </div>
        </div>

        {/* Category 3 */}
        <div className="border-2 border-[#111111] p-5 bg-white flex flex-col justify-between space-y-3 shadow-[4px_4px_0px_0px_#111111] hover:shadow-[8px_8px_0px_0px_#111111] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200">
          <div>
            <span className="text-[10px] uppercase font-bold text-neutral-400 block tracking-widest">03 / DEVOPS_AND_CICD</span>
            <p className="text-xs text-neutral-500 leading-relaxed font-mono mt-1">
              Docker, Terraform, GitHub Actions, AWS CodePipeline/CodeBuild/CodeDeploy, PM2, Nginx, Certbot, Linux, Bash scripting, Git.
            </p>
          </div>
          <div className="flex gap-3 items-center mt-3 pt-3 border-t border-neutral-100 flex-wrap">
            <Docker size={28} />
            <Terraform size={28} />
          </div>
        </div>

        {/* Category 4 */}
        <div className="border-2 border-[#111111] p-5 bg-white flex flex-col justify-between space-y-3 shadow-[4px_4px_0px_0px_#111111] hover:shadow-[8px_8px_0px_0px_#111111] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200">
          <div>
            <span className="text-[10px] uppercase font-bold text-neutral-400 block tracking-widest">04 / BACKEND_AND_DATA</span>
            <p className="text-xs text-neutral-500 leading-relaxed font-mono mt-1">
              Node.js, FastAPI, Python, REST APIs, MongoDB, MySQL, Supabase, PySpark, AWS Glue.
            </p>
          </div>
          <div className="flex gap-3 items-center mt-3 pt-3 border-t border-neutral-100 flex-wrap">
            <NodeJs size={28} />
            <Python size={28} />
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
            I am currently diving deep into <strong className="font-bold text-neutral-900">Kubernetes (EKS), Helm, ArgoCD, Ansible, Prometheus, and Grafana</strong> to deploy, automate, and monitor complex containerized systems.
          </p>
        </div>
        <div className="flex gap-3 items-center shrink-0">
          <Kubernetes size={32} />
          <Ansible size={32} />
          <Grafana size={32} />
        </div>
      </div>
    </section>
  );
}
