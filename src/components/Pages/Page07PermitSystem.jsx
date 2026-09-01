import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { HighlightText } from '../UI/HighlightText';
import { StickyNote } from '../UI/StickyNote';
import { CodeSketch } from '../UI/CodeSketch';
import { HandDrawnArrow } from '../UI/HandDrawnDoodles';
import { GithubIcon } from '../UI/BrandIcons';
import { Building2, ShieldCheck, MapPin, CheckCircle } from 'lucide-react';

export function Page07PermitSystem() {
  const project = portfolioData.projects.find(p => p.id === 'municipal-permit') || portfolioData.projects[1];

  return (
    <div className="w-full h-full p-6 sm:p-10 flex flex-col justify-between paper-grid relative overflow-y-auto notebook-scroll">
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-dashed border-sky-400/40 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-teal-500"></span>
          <span className="font-mono text-xs text-zinc-700 font-bold uppercase tracking-wider">
            PAGE 07 • CIVIC ENTERPRISE PROJECT
          </span>
        </div>
        <div className="flex items-center gap-1 text-xs font-mono px-2 py-0.5 rounded-full bg-teal-100 text-teal-900 border border-teal-300 font-bold">
          🏛 CIVIC TECH
        </div>
      </div>

      {/* Main Content */}
      <div className="my-auto py-3 space-y-4">
        {/* Title */}
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-sm bg-zinc-800 text-teal-300">
                PROJECT #02
              </span>
              <h2 className="text-2xl sm:text-3xl font-marker text-zinc-900">
                {project.title}
              </h2>
            </div>
            <p className="font-script text-base text-teal-800 font-bold mt-0.5">
              "{project.tagline}"
            </p>
          </div>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 transition-colors shadow-xs"
            >
              <GithubIcon size={14} />
              <span>Backend Repo</span>
            </a>
          )}
        </div>

        {/* Problem vs Solution Split */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-script text-sm sm:text-base leading-snug">
          <div className="p-3.5 bg-amber-50/80 border border-amber-200 rounded-lg space-y-1">
            <span className="font-hand font-bold text-xs text-amber-800 uppercase tracking-wide">
              ⚠ Municipal Challenge:
            </span>
            <p className="text-zinc-800">
              {project.problem}
            </p>
          </div>

          <div className="p-3.5 bg-teal-50/80 border border-teal-200 rounded-lg space-y-1">
            <span className="font-hand font-bold text-xs text-teal-800 uppercase tracking-wide">
              ✔ Engineering Solution:
            </span>
            <p className="text-zinc-800">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Workflow Diagram */}
        <div className="sketch-border-sm bg-white/90 p-3.5 shadow-sm space-y-2">
          <span className="font-hand font-bold text-xs text-teal-900 uppercase">
            ⚡ Permit Lifecycle & Spatial Verification Flow:
          </span>

          <div className="p-2.5 bg-teal-50/50 rounded-md border border-teal-200 font-code text-xs text-teal-950 text-center overflow-x-auto">
            <code>
              Citizen Application ──&gt; CAD Blueprint Parse ──&gt; Spatial Boundary Check
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&gt; Municipal Engineer Signoff (RBAC)
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&gt; Afrosms Dispatch ──&gt; Verifiable QR Permit
            </code>
          </div>

          {/* Key Deliverables */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 font-hand text-xs text-zinc-800">
            {project.highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5 p-1.5 bg-white rounded border border-zinc-200">
                <CheckCircle size={14} className="text-teal-600 shrink-0" />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-hand text-xs font-bold text-zinc-500 uppercase">Stack:</span>
          {project.stack.map((tech, idx) => (
            <span
              key={idx}
              className="font-code text-xs px-2 py-0.5 rounded-sm bg-white text-zinc-800 border border-zinc-300 shadow-2xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-dashed border-zinc-300 flex items-center justify-between text-xs font-mono text-zinc-500">
        <span>NOTEBOOK #07 • SMART CITY PLATFORM</span>
        <span className="font-script text-sm text-teal-700">Teamwork IT Solutions • 2025–2026</span>
      </div>
    </div>
  );
}
