import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { PhotoTape } from '../UI/PhotoTape';
import { StickyNote } from '../UI/StickyNote';
import { HighlightText } from '../UI/HighlightText';
import { EthiopianMotif, HandDrawnArrow, LightbulbDoodle } from '../UI/HandDrawnDoodles';
import { User, CheckCircle2, Award, Heart, Cpu } from 'lucide-react';

export function Page02AboutMe() {
  return (
    <div className="w-full h-full p-6 sm:p-10 flex flex-col justify-between paper-grid relative overflow-y-auto notebook-scroll">
      {/* Page Header */}
      <div className="flex items-center justify-between border-b-2 border-dashed border-sky-400/40 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
          <span className="font-mono text-xs text-zinc-700 font-bold uppercase tracking-wider">
            PAGE 02 • ABOUT ME & IDENTITY
          </span>
        </div>
        <div className="flex items-center gap-1 text-xs font-script text-sky-800 font-bold">
          <EthiopianMotif className="w-4 h-4" />
          <span>ሰላም (Selam) • Welcome!</span>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="my-auto py-3 space-y-4">
        {/* Title */}
        <div className="flex items-baseline justify-between flex-wrap gap-2">
          <h2 className="text-2xl sm:text-4xl font-marker text-zinc-900">
            WHO IS EYUEL?
          </h2>
          <span className="font-script text-base text-sky-700 italic">
            "Backend-first engineer who loves shipping."
          </span>
        </div>

        {/* Top Split: Polaroid Photo + Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
          {/* Polaroid Photo with Washi Tape */}
          <div className="sm:col-span-5 flex justify-center">
            <PhotoTape
              src=""
              alt="Eyuel Kassahun"
              caption="Eyuel Kassahun • Software Eng"
              rotation="-2deg"
              tapeColor="cyan"
              className="w-48 sm:w-52"
            />
          </div>

          {/* Quick Metrics & Bio */}
          <div className="sm:col-span-7 space-y-3 font-script text-base sm:text-lg text-zinc-800 leading-snug">
            <p>
              I am a <HighlightText color="yellow">full-stack and backend engineer</HighlightText> with a strong foundation in computer science and software architecture.
            </p>
            <p>
              My passion is architecting <HighlightText color="cyan">distributed microservices</HighlightText>, designing fault-tolerant relational databases, and constructing user-centric interfaces that solve real-world problems.
            </p>

            {/* Quick 4 Stats Grid */}
            <div className="grid grid-cols-2 gap-2 pt-1 font-ui">
              {portfolioData.personal.stats.map((stat, i) => (
                <div key={i} className="p-2 bg-white/80 border border-zinc-300 rounded-lg shadow-2xs">
                  <p className="text-xl font-bold font-marker text-sky-700">{stat.value}</p>
                  <p className="text-[11px] font-mono text-zinc-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Principles Sketch Box */}
        <div className="sketch-border-sm bg-white/70 p-4 relative space-y-2">
          <div className="absolute -top-3 left-4 px-2 bg-sky-100 border border-sky-400 rounded-sm font-hand text-xs font-bold text-sky-900 flex items-center gap-1">
            <LightbulbDoodle className="w-3.5 h-3.5" />
            <span>CORE ENGINEERING VALUES</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 font-hand text-xs text-zinc-800">
            <div className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-sky-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-zinc-900">Resilience First:</span>
                <p className="text-zinc-600">Design for failure, retry gracefully, and isolate faults.</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-zinc-900">Clean Abstractions:</span>
                <p className="text-zinc-600">Implicit interfaces and domain-driven modularity.</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-zinc-900">Continuous Growth:</span>
                <p className="text-zinc-600">Deep curiosity for emerging tech, Go idioms & distributed systems.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page Footer */}
      <div className="pt-3 border-t border-dashed border-zinc-300 flex items-center justify-between text-xs font-mono text-zinc-500">
        <span>NOTEBOOK #02 • BIOGRAPHY & VALUES</span>
        <span className="font-script text-sm text-zinc-700">Addis Ababa • 2026</span>
      </div>
    </div>
  );
}
