import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { CoffeeCupDoodle } from '../UI/HandDrawnDoodles';
import { Server, Layers } from 'lucide-react';

export function Page09HowIThink() {
  const { title, slogan, pillars, productionBlueprint } = portfolioData.engineeringPhilosophy;

  return (
    <div className="w-full h-full p-3.5 sm:p-6 md:p-8 flex flex-col justify-between paper-ruled relative overflow-y-auto overscroll-contain notebook-scroll">
      {/* Top Banner */}
      <div className="flex items-center justify-between border-b-2 border-dashed border-sky-400 pb-2 shrink-0">
        <div>
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-[10px] sm:text-xs font-bold px-1.5 py-0.5 rounded bg-zinc-800 text-sky-300">
              PAGE 09 • METHODOLOGY
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-marker text-zinc-900 mt-0.5 leading-tight">
            HOW I THINK & ARCHITECT
          </h2>
          <p className="font-script text-xs sm:text-sm text-sky-800 truncate max-w-sm sm:max-w-md">
            "{slogan}"
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-1 p-1.5 bg-sky-50 border border-sky-300 rounded-lg text-sky-950 font-hand text-[11px]">
          <Server size={14} className="text-sky-600" />
          <span>Production First</span>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="my-auto py-2 sm:py-2.5 space-y-2 sm:space-y-2.5">
        {/* 4 Architectural Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-2 sm:p-2.5 bg-white/90 border border-zinc-300 rounded-lg shadow-2xs space-y-0.5 hover:border-sky-400 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] sm:text-[10px] font-bold text-sky-700 bg-sky-50 px-1 py-0.5 rounded border border-sky-200">
                  PILLAR {pillar.num}
                </span>
                <span className="font-hand text-[10px] sm:text-xs font-bold text-zinc-500 uppercase">
                  {pillar.tag}
                </span>
              </div>

              <h3 className="font-hand font-bold text-xs sm:text-sm text-zinc-900 leading-tight">
                {pillar.title}
              </h3>

              <p className="font-script text-[11px] sm:text-xs text-zinc-700 leading-snug">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* System Architecture Blueprint Sketch */}
        <div className="sketch-border-sm bg-[#FAF8F4] p-2 sm:p-2.5 shadow-2xs space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-hand font-bold text-[10px] sm:text-xs text-sky-900 uppercase flex items-center gap-1">
              <Layers size={13} className="text-sky-600" />
              <span>Production Blueprint:</span>
            </span>
            <span className="font-mono text-[9px] text-zinc-500">Hexagonal + Event Driven</span>
          </div>

          <div className="p-1.5 sm:p-2 bg-white rounded border border-zinc-200 font-code text-[9px] sm:text-[11px] text-zinc-900 leading-tight sm:leading-relaxed overflow-x-auto notebook-scroll text-center">
            <pre className="font-code">
{productionBlueprint}
            </pre>
          </div>
        </div>

        {/* Engineering Rules of Thumb */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 text-[11px] sm:text-xs font-script text-zinc-800">
          <div className="p-1.5 bg-emerald-50/80 border border-emerald-300 rounded flex items-center gap-1">
            <span className="text-emerald-700 font-bold shrink-0">✔</span>
            <span className="truncate">Profile SQL queries before indexing.</span>
          </div>
          <div className="p-1.5 bg-sky-50/80 border border-sky-300 rounded flex items-center gap-1">
            <span className="text-sky-700 font-bold shrink-0">✔</span>
            <span className="truncate">Isolate blast radiuses.</span>
          </div>
          <div className="p-1.5 bg-amber-50/80 border border-amber-300 rounded flex items-center gap-1">
            <span className="text-amber-700 font-bold shrink-0">✔</span>
            <span className="truncate">Keep domain logic testable.</span>
          </div>
        </div>
      </div>

      {/* Footer Slogan */}
      <div className="pt-2 sm:pt-2.5 border-t border-dashed border-zinc-300 flex flex-col sm:flex-row items-center justify-between gap-1 text-[10px] sm:text-xs font-mono text-zinc-500 shrink-0">
        <div className="flex items-center gap-1.5">
          <CoffeeCupDoodle label="ARCH" className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="font-script text-xs sm:text-sm font-bold text-sky-700">
            {portfolioData.personal.motto}
          </span>
        </div>

        <div className="font-mono text-[9px] sm:text-[10px] text-zinc-400 flex flex-wrap gap-1">
          <span>#Distributed</span>
          <span>#CleanArch</span>
          <span>#Microservices</span>
        </div>
      </div>
    </div>
  );
}
