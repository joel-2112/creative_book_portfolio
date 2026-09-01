import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { GoGopherDoodle } from '../UI/HandDrawnDoodles';
import { GithubIcon } from '../UI/BrandIcons';

export function Page06PharmaCore() {
  const project = portfolioData.projects.find(p => p.id === 'pharmacore-pro') || portfolioData.projects[0];

  return (
    <div className="w-full h-full p-3.5 sm:p-6 md:p-8 flex flex-col justify-between paper-ruled relative overflow-y-auto overscroll-contain notebook-scroll">
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-dashed border-sky-400/40 pb-2 sm:pb-3 shrink-0">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span>
          <span className="font-mono text-[10px] sm:text-xs text-zinc-700 font-bold uppercase tracking-wider">
            PAGE 06 • FEATURED PROJECT
          </span>
        </div>
        <div className="flex items-center gap-1 text-[10px] sm:text-xs font-mono px-2 py-0.5 rounded-full bg-sky-100 text-sky-900 border border-sky-300 font-bold">
          ⭐ STAR
        </div>
      </div>

      {/* Main Project Content */}
      <div className="my-auto py-2 sm:py-3 space-y-2.5 sm:space-y-3.5">
        {/* Title Block */}
        <div className="flex items-start justify-between gap-2 flex-wrap">
          <div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-mono text-[10px] sm:text-xs font-bold px-1.5 py-0.5 rounded-sm bg-zinc-800 text-amber-300">
                PROJECT #01
              </span>
              <h2 className="text-xl sm:text-3xl md:text-4xl font-marker text-zinc-900 leading-tight">
                {project.title}
              </h2>
            </div>
            <p className="font-script text-xs sm:text-base text-sky-700 font-bold mt-0.5">
              "{project.tagline}"
            </p>
          </div>

          <div className="flex items-center gap-1.5">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[10px] sm:text-xs font-mono font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 transition-colors shadow-2xs"
              >
                <GithubIcon size={13} />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>

        {/* Problem vs Solution Split Box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 font-script text-xs sm:text-sm md:text-base leading-snug">
          <div className="p-2.5 sm:p-3 bg-red-50/70 border border-red-200 rounded-lg space-y-0.5">
            <span className="font-hand font-bold text-[11px] sm:text-xs text-red-700 uppercase tracking-wide">
              ⚠ The Problem:
            </span>
            <p className="text-zinc-800">
              {project.problem}
            </p>
          </div>

          <div className="p-2.5 sm:p-3 bg-emerald-50/70 border border-emerald-200 rounded-lg space-y-0.5">
            <span className="font-hand font-bold text-[11px] sm:text-xs text-emerald-700 uppercase tracking-wide">
              ✔ The Solution:
            </span>
            <p className="text-zinc-800">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Architecture Sketch Diagram */}
        <div className="sketch-border-sm bg-white/90 p-2.5 sm:p-3.5 shadow-2xs space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="font-hand font-bold text-[11px] sm:text-xs text-sky-900 uppercase">
              🏛 System Architecture Flow:
            </span>
            <GoGopherDoodle className="w-5 h-6 sm:w-6 sm:h-7" />
          </div>

          <div className="p-2 sm:p-2.5 bg-sky-50/60 rounded border border-sky-200 font-code text-[10px] sm:text-xs text-sky-950 text-center overflow-x-auto notebook-scroll">
            <code>
              [ React Client / POS ] ──HTTP/REST──&gt; [ Go Gin API Gateway ] ──&gt; [ Microservice Core ]
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&gt; [ PostgreSQL (ACID Audits) ]
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&gt; [ Redis Cache (SKU Lookups &lt;10ms) ]
            </code>
          </div>

          {/* Highlights Bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-1.5 pt-0.5 font-hand text-[11px] sm:text-xs text-zinc-800">
            {project.highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1">
                <span className="text-sky-600 font-bold shrink-0">↳</span>
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex items-center gap-1 flex-wrap">
          <span className="font-hand text-[10px] sm:text-xs font-bold text-zinc-500 uppercase">Tech:</span>
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
        <span>NOTEBOOK #06 • PHARMACORE PRO</span>
        <span className="font-script text-xs sm:text-sm text-sky-700">#Golang #Gin #Postgres #Redis</span>
      </div>
    </div>
  );
}
