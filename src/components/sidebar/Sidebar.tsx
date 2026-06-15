// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react';
import type { AccentTheme, TerminalLine } from '../../types';
import { HugeiconsIcon } from '@hugeicons/react';
import { Mail01Icon, LinkedinIcon, GithubIcon, FileAttachmentIcon } from '@hugeicons/core-free-icons';

interface SidebarProps {
  activeColor: AccentTheme;
}

export default function Sidebar({ activeColor }: SidebarProps) {
  const [terminalHistory, setTerminalHistory] = useState<TerminalLine[]>([
    { type: 'input', text: 'whoami' },
    { type: 'output', text: 'adnanpatel_sre // status: active // loc: pimpri-chinchwad' },
    { type: 'input', text: 'cat bio.txt' },
    { type: 'output', text: 'DevOps Engineer building resilient infrastructure. Ex-ByteHint IT Solutions, ex-Wet Dog Weather.' }
  ]);
  const [terminalInput, setTerminalInput] = useState('');
  const [copyStatus, setCopyStatus] = useState('');
  const terminalEndRef = useRef(null);

  // Scroll terminal to bottom on new entry
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalHistory]);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    let response = '';
    switch (cmd) {
      case 'help':
        response = 'AVAILABLE COMMANDS: whoami, skills, metrics, contact, experience, clear, ping, system-stats';
        break;
      case 'whoami':
        response = 'adnan_patel | DevOps Engineer. Sole infrastructure owner for a SaaS platform serving 30,000+ users.';
        break;
      case 'skills':
        response = 'CLOUD: AWS, Azure (basic) // IAC: Terraform // DEVOPS: Docker, GitHub Actions, Nginx // BACKEND: Node.js, FastAPI, Python, MongoDB // LEARNING: Kubernetes (EKS), Helm, ArgoCD, Ansible, Prometheus, Grafana';
        break;
      case 'metrics':
        response = 'METRICS // users_served: 30K+ // cost_reduction: 37.5% // p0_resolution: 40s -> 1s // contracts: 2 repeat-hire';
        break;
      case 'contact':
        response = 'EMAIL: adnan.devops@fastmail.com // LINKEDIN: linkedin.com/in/adnanpatelsre // GITHUB: github.com/adnan-patel';
        break;
      case 'experience':
        response = 'CURRENT: DevOps Engineer @ Signiance Technologies // PREVIOUS: DevOps Engineer @ ByteHint IT Solutions, Cloud Solutions Consultant @ Wet Dog Weather';
        break;
      case 'ping':
        response = `64 bytes from adnanpatel.sh: icmp_seq=1 ttl=64 time=0.421 ms`;
        break;
      case 'system-stats':
        response = 'OS: AdnanCore v2.6-stable // CPU: High-Performance AMD EPYC (Mock) // DISK: 99.9% redundant NVMe // ENVIRONMENT: production';
        break;
      case 'clear':
        setTerminalHistory([]);
        setTerminalInput('');
        return;
      default:
        response = `bash: command not found: ${cmd}. Type 'help' for options.`;
    }

    setTerminalHistory(prev => [
      ...prev,
      { type: 'input', text: cmd },
      { type: 'output', text: response }
    ]);
    setTerminalInput('');
  };

  const handleTerminalButton = (command: string) => {
    setTimeout(() => {
      let response = '';
      switch (command) {
        case 'whoami':
          response = 'adnan_patel | DevOps Engineer. Sole infrastructure owner for a SaaS platform serving 30,000+ users.';
          break;
        case 'skills':
          response = 'AWS, Terraform, Docker, GitHub Actions, Node.js, FastAPI, Python, MongoDB. Learning EKS, Helm, ArgoCD, Prometheus, Grafana.';
          break;
        case 'metrics':
          response = '30,000+ active users // 37.5% AWS cost cut // 40s to 1s latency pipeline fix.';
          break;
        case 'contact':
          response = 'EMAIL: adnan.devops@fastmail.com // GH: adnan-patel // LI: adnanpatelsre';
          break;
        default:
          response = 'Command successfully processed.';
      }
      setTerminalHistory(prev => [
        ...prev,
        { type: 'input', text: command },
        { type: 'output', text: response }
      ]);
    }, 100);
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard?.writeText(text) || document.execCommand('copy');
    setCopyStatus(type);
    setTimeout(() => setCopyStatus(''), 2000);
  };

  return (
    <aside className="border-b lg:border-b-0 lg:border-r border-[#111111] bg-[#EFEDE7]/50 p-6 flex flex-col justify-between space-y-8">
      <div className="space-y-6">
        <div>
          <span className="text-xs text-neutral-500 block mb-1">// SYSTEM_METRIC_DASHBOARD</span>
        </div>

        {/* Simulated Live Diagnostic Widgets */}
        <div className="space-y-4">
          {/* Quick CLI Shell Control Center */}
          <div className="border-2 border-[#111111] bg-neutral-900 text-neutral-200 p-4 space-y-3 shadow-[3px_3px_0px_0px_#111111] hover:shadow-[6px_6px_0px_0px_#111111] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200">
            <div className="flex justify-between items-center text-[10px] border-b border-neutral-800 pb-2 text-neutral-400">
              <span className="font-bold">SHELL-PROMPT // INTERACTIVE</span>
              <span className="animate-pulse" style={{ color: activeColor.color }}>● CONNECTED</span>
            </div>

            {/* Micro Terminal Display */}
            <div className="h-80 overflow-y-auto space-y-1.5 text-xs text-neutral-300 no-scrollbar select-none">
              {terminalHistory.map((line, idx) => (
                <div key={idx} className="leading-tight">
                  {line.type === 'input' ? (
                    <p className="text-neutral-400">
                      <span style={{ color: activeColor.color }}>$</span> {line.text}
                    </p>
                  ) : (
                    <p className="text-white bg-white/5 p-1 font-mono whitespace-pre-wrap border-l border-neutral-600">{line.text}</p>
                  )}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Pre-cooked Command Buttons */}
            <div className="flex flex-wrap gap-1 border-t border-neutral-800 pt-2">
              {['whoami', 'skills', 'metrics', 'contact'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => handleTerminalButton(cmd)}
                  className="text-[10px] bg-neutral-800 hover:bg-neutral-700 active:translate-y-0.5 text-neutral-200 px-1.5 py-0.5 border border-neutral-700 transition-all duration-75"
                >
                  {cmd}()
                </button>
              ))}
            </div>

            {/* Live Input Field */}
            <form onSubmit={handleCommandSubmit} className="flex gap-2 items-center bg-black/40 border border-neutral-800 px-2 py-1">
              <span className="text-xs" style={{ color: activeColor.color }}>$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="Type 'help' or clear..."
                className="bg-transparent border-none outline-none text-xs text-white w-full focus:ring-0 font-mono"
              />
              <button type="submit" className="hidden">Execute</button>
            </form>
          </div>
        </div>

        {/* Quick Contact Box */}
        <div className="border-2 border-[#111111] p-4 bg-white space-y-3 shadow-[3px_3px_0px_0px_#111111] hover:shadow-[6px_6px_0px_0px_#111111] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200">
          <span className="text-[10px] text-neutral-500 block uppercase font-bold">// SECURE_COMMS_V2</span>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-1.5">
                <HugeiconsIcon icon={Mail01Icon} size={18} style={{ color: activeColor.color }} />
                EMAIL:
              </span>
              <button
                onClick={() => copyToClipboard('adnan.devops@fastmail.com', 'email')}
                className="font-bold underline hover:opacity-75 text-left"
              >
                {copyStatus === 'email' ? 'COPIED!' : 'adnan.devops@fastmail.com'}
              </button>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-1.5">
                <HugeiconsIcon icon={LinkedinIcon} size={18} style={{ color: activeColor.color }} />
                LINKEDIN:
              </span>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="font-bold underline hover:opacity-75">
                /in/adnanpatelsre
              </a>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-1.5">
                <HugeiconsIcon icon={GithubIcon} size={18} style={{ color: activeColor.color }} />
                GITHUB:
              </span>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="font-bold underline hover:opacity-75">
                /github/adnan-patel
              </a>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-1.5">
                <HugeiconsIcon icon={FileAttachmentIcon} size={18} style={{ color: activeColor.color }} />
                RESUME:
              </span>
              <a href="/resume.pdf" download className="font-bold underline hover:opacity-75 text-emerald-600">
                [resume.pdf]
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Infrastructure Manifest / Technical Footer for sidebar */}
      <div className="pt-6 border-t border-[#111111]/10 text-[10px] text-neutral-500 space-y-1">
        <p>HOST_MACHINE: aws-eks-pimpri.local</p>
        <p>PLATFORM: react.js + tailwind.css</p>
        <p>SYSTEM_STATUS: operational_v1.0</p>
      </div>
    </aside>
  );
}
