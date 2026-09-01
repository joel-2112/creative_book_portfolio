import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { GithubIcon } from '../UI/BrandIcons';
import { CheckCircle } from 'lucide-react';

export function Page07PermitSystem() {
  const project = portfolioData.projects.find(p => p.id === 'municipal-permit') || portfolioData.projects[1];

  return (
    <div className="w-full h-full p-3.5 sm:p-6 md:p-8 flex flex-col justify-between paper-grid relative overflow-y-auto overscroll-contain notebook-scroll">
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-dashed border-sky-400/40 pb-2 sm:pb-3 shrink-0">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
          <span className="font-mono text-[10px] sm:text-xs text-zinc-700 font-bold uppercase tracking-wider">
            PAGE 07 • CIVIC TECH
          </span>
        </div>
        <div className="flex items-center gap-1 text-[10px] sm:text-xs font-mono px-2 py-0.5 rounded-full bg-teal-100 text-teal-900 border border-teal-300 font-bold">
          🏛 CIVIC
        </div>
      </div>

      {/* Main Content */}
      <div className="my-auto py-2 sm:py-3 space-y-2.5 sm:space-y-3.5">
        {/* Title */}
        <div className="flex items-start justify-between gap-2 flex-wrap">
          <div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-mono text-[10px] sm:text-xs font-bold px-1.5 py-0.5 rounded-sm bg-zinc-800 text-teal-300">
                PROJECT #02
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-marker text-zinc-900 leading-tight">
                {project.title}
              </h2>
            </div>
            <p className="font-script text-xs sm:text-base text-teal-800 font-bold mt-0.5">
              "{project.tagline}"
            </p>
          </div>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[10px] sm:text-xs font-mono font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 transition-colors shadow-2xs"
            >
              <GithubIcon size={13} />
              <span>Backend</span>
            </a>
          )}
        </div>

        {/* Problem vs Solution Split */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 font-script text-xs sm:text-sm md:text-base leading-snug">
          <div className="p-2.5 sm:p-3 bg-amber-50/80 border border-amber-200 rounded-lg space-y-0.5">
            <span className="font-hand font-bold text-[11px] sm:text-xs text-amber-800 uppercase tracking-wide">
              ⚠ Municipal Challenge:
            </span>
            <p className="text-zinc-800">
              {project.problem}
            </p>
          </div>

          <div className="p-2.5 sm:p-3 bg-teal-50/80 border border-teal-200 rounded-lg space-y-0.5">
            <span className="font-hand font-bold text-[11px] sm:text-xs text-teal-800 uppercase tracking-wide">
              ✔ Engineering Solution:
            </span>
            <p className="text-zinc-800">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Workflow Diagram */}
        <div className="sketch-border-sm bg-white/90 p-2.5 sm:p-3.5 shadow-2xs space-y-1.5">
          <span className="font-hand font-bold text-[11px] sm:text-xs text-teal-900 uppercase">
            ⚡ Permit Lifecycle & Spatial Boundary Flow:
          </span>

          <div className="p-2 sm:p-2.5 bg-teal-50/50 rounded border border-teal-200 font-code text-[10px] sm:text-xs text-teal-950 text-center overflow-x-auto notebook-scroll">
            <code>
              Citizen Application ──&gt; CAD Blueprint Parse ──&gt; Spatial Boundary Check
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&gt; Municipal Signoff (RBAC)
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&gt; Afrosms Dispatch ──&gt; Verifiable QR Permit
            </code>
          </div>

          {/* Key Deliverables */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 pt-0.5 font-hand text-[11px] sm:text-xs text-zinc-800">
            {project.highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1 p-1 sm:p-1.5 bg-white rounded border border-zinc-200">
                <CheckCircle size={13} className="text-teal-600 shrink-0" />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="flex items-center gap-1 flex-wrap">
          <span className="font-hand text-[10px] sm:text-xs font-bold text-zinc-500 uppercase">Stack:</span>
          {project.stack.map((tech, idx) => (
            <span
              key={idx}
              className="font-code text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-sm bg-white text-zinc-800 border border-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 sm:pt-3 border-t border-dashed border-zinc-300 flex items-center justify-between text-[10px] sm:text-xs font-mono text-zinc-500 shrink-0">
        <span>NOTEBOOK #07 • SMART CITY</span>
        <span className="font-script text-xs sm:text-sm text-teal-700">Teamwork IT • 2025–2026</span>
      </div>
    </div>
  );
}
