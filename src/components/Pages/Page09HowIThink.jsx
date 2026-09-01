import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { HighlightText } from '../UI/HighlightText';
import { StickyNote } from '../UI/StickyNote';
import { CodeSketch } from '../UI/CodeSketch';
import { CoffeeCupDoodle, LightbulbDoodle } from '../UI/HandDrawnDoodles';
import { Cpu, Server, Database, ShieldCheck, Zap, Layers, GitBranch, ArrowDown } from 'lucide-react';

export function Page09HowIThink() {
  const { title, slogan, pillars, productionBlueprint } = portfolioData.engineeringPhilosophy;

  return (
    <div className="w-full h-full p-5 sm:p-8 flex flex-col justify-between paper-ruled relative overflow-y-auto notebook-scroll">
      {/* Top Banner */}
      <div className="flex items-center justify-between border-b-2 border-dashed border-sky-400 pb-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-zinc-800 text-sky-300">
              PAGE 09 • ENGINEERING METHODOLOGY
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-marker text-zinc-900 mt-1 leading-tight">
            HOW I THINK & ARCHITECT SYSTEMS
          </h2>
          <p className="font-script text-xs sm:text-sm text-sky-800">
            "{slogan}"
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 p-2 bg-sky-50 border border-sky-300 rounded-lg text-sky-950 font-hand text-xs">
          <Server size={16} className="text-sky-600" />
          <span>Production First</span>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="my-auto py-2.5 space-y-3">
        {/* 4 Architectural Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-3 bg-white/90 border border-zinc-300 rounded-lg shadow-2xs space-y-1 hover:border-sky-400 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] font-bold text-sky-700 bg-sky-50 px-1.5 py-0.5 rounded border border-sky-200">
                  PILLAR {pillar.num}
                </span>
                <span className="font-hand text-xs font-bold text-zinc-500 uppercase">
                  {pillar.tag}
                </span>
              </div>

              <h3 className="font-hand font-bold text-sm text-zinc-900">
                {pillar.title}
              </h3>

              <p className="font-script text-xs text-zinc-700 leading-snug">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* System Architecture Blueprint Sketch */}
        <div className="sketch-border-sm bg-[#FAF8F4] p-3 shadow-2xs space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="font-hand font-bold text-xs text-sky-900 uppercase flex items-center gap-1.5">
              <Layers size={14} className="text-sky-600" />
              <span>Standard Production Distributed Blueprint:</span>
            </span>
            <span className="font-mono text-[10px] text-zinc-500">Hexagonal + Event Driven</span>
          </div>

          <div className="p-2.5 bg-white rounded border border-zinc-200 font-code text-[11px] sm:text-xs text-zinc-900 leading-relaxed overflow-x-auto text-center">
            <pre className="font-code">
{productionBlueprint}
            </pre>
          </div>
        </div>

        {/* Engineering Rules of Thumb */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-script text-zinc-800">
          <div className="p-2 bg-emerald-50/80 border border-emerald-300 rounded flex items-center gap-1.5">
            <span className="text-emerald-700 font-bold">✔</span>
            <span>Profile SQL queries before indexing.</span>
          </div>
          <div className="p-2 bg-sky-50/80 border border-sky-300 rounded flex items-center gap-1.5">
            <span className="text-sky-700 font-bold">✔</span>
            <span>Isolate blast radiuses with circuit breakers.</span>
          </div>
          <div className="p-2 bg-amber-50/80 border border-amber-300 rounded flex items-center gap-1.5">
            <span className="text-amber-700 font-bold">✔</span>
            <span>Keep core domain logic 100% testable.</span>
          </div>
        </div>
      </div>

      {/* Footer Slogan */}
      <div className="pt-2 border-t border-dashed border-zinc-300 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-zinc-500">
        <div className="flex items-center gap-2">
          <CoffeeCupDoodle label="ARCH" className="w-5 h-5" />
          <span className="font-script text-sm font-bold text-sky-700">
            {portfolioData.personal.motto}
          </span>
        </div>

        <div className="font-mono text-[10px] text-zinc-400 flex flex-wrap gap-1.5">
          <span>#DistributedSystems</span>
          <span>#Microservices</span>
          <span>#CleanArchitecture</span>
          <span>#EventDriven</span>
        </div>
      </div>
    </div>
  );
}
