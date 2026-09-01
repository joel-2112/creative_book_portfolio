import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { HighlightText } from '../UI/HighlightText';
import { StickyNote } from '../UI/StickyNote';
import { CodeSketch } from '../UI/CodeSketch';
import { HandDrawnArrow, GoGopherDoodle } from '../UI/HandDrawnDoodles';
import { GithubIcon } from '../UI/BrandIcons';
import { ExternalLink, Layers, ShieldCheck, Zap, Activity } from 'lucide-react';

export function Page06PharmaCore() {
  const project = portfolioData.projects.find(p => p.id === 'pharmacore-pro') || portfolioData.projects[0];

  return (
    <div className="w-full h-full p-6 sm:p-10 flex flex-col justify-between paper-ruled relative overflow-y-auto notebook-scroll">
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-dashed border-sky-400/40 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-sky-500"></span>
          <span className="font-mono text-xs text-zinc-700 font-bold uppercase tracking-wider">
            PAGE 06 • FEATURED PROJECT SHEET
          </span>
        </div>
        <div className="flex items-center gap-1 text-xs font-mono px-2 py-0.5 rounded-full bg-sky-100 text-sky-900 border border-sky-300 font-bold">
          ⭐ STAR PROJECT
        </div>
      </div>

      {/* Main Project Content */}
      <div className="my-auto py-3 space-y-4">
        {/* Title Block */}
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-sm bg-zinc-800 text-amber-300">
                PROJECT #01
              </span>
              <h2 className="text-2xl sm:text-4xl font-marker text-zinc-900">
                {project.title}
              </h2>
            </div>
            <p className="font-script text-base text-sky-700 font-bold mt-0.5">
              "{project.tagline}"
            </p>
          </div>

          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 transition-colors shadow-xs"
              >
                <GithubIcon size={14} />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>

        {/* Problem vs Solution Split Box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-script text-sm sm:text-base leading-snug">
          <div className="p-3.5 bg-red-50/70 border border-red-200 rounded-lg space-y-1">
            <span className="font-hand font-bold text-xs text-red-700 uppercase tracking-wide">
              ⚠ The Problem:
            </span>
            <p className="text-zinc-800">
              {project.problem}
            </p>
          </div>

          <div className="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-lg space-y-1">
            <span className="font-hand font-bold text-xs text-emerald-700 uppercase tracking-wide">
              ✔ The Solution:
            </span>
            <p className="text-zinc-800">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Architecture Sketch Diagram */}
        <div className="sketch-border-sm bg-white/90 p-3.5 shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-hand font-bold text-xs text-sky-900 uppercase">
              🏛 System Architecture Diagram:
            </span>
            <GoGopherDoodle className="w-6 h-7" />
          </div>

          <div className="p-2.5 bg-sky-50/60 rounded-md border border-sky-200 font-code text-xs text-sky-950 text-center overflow-x-auto">
            <code>
              [ React Client / POS ] ──HTTP/REST──&gt; [ Go Gin API Gateway ] ──&gt; [ Microservice Core ]
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├──&gt; [ PostgreSQL (ACID Audits) ]
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──&gt; [ Redis Cache (SKU Lookups &lt;10ms) ]
            </code>
          </div>

          {/* Highlights Bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-hand text-xs text-zinc-800">
            {project.highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <span className="text-sky-600 font-bold">↳</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Badges */}
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
        <span>NOTEBOOK #06 • PHARMACORE PRO</span>
        <span className="font-script text-sm text-sky-700">#Golang #Gin #Postgres #Enterprise</span>
      </div>
    </div>
  );
}
