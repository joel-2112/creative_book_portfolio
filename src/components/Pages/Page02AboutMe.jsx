import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { PhotoTape } from '../UI/PhotoTape';
import { HighlightText } from '../UI/HighlightText';
import { EthiopianMotif, LightbulbDoodle } from '../UI/HandDrawnDoodles';
import { CheckCircle2 } from 'lucide-react';
import profileImg from '../../assets/profile.jpg';

export function Page02AboutMe() {
  return (
    <div className="w-full h-full p-3.5 sm:p-6 md:p-8 flex flex-col justify-between paper-grid relative overflow-y-auto overscroll-contain notebook-scroll">
      {/* Page Header */}
      <div className="flex items-center justify-between border-b-2 border-dashed border-sky-400/40 pb-2 sm:pb-3 shrink-0">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          <span className="font-mono text-[10px] sm:text-xs text-zinc-700 font-bold uppercase tracking-wider">
            PAGE 02 • ABOUT ME & IDENTITY
          </span>
        </div>
        <div className="flex items-center gap-1 text-[10px] sm:text-xs font-script text-sky-800 font-bold">
          <EthiopianMotif className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span>ሰላም (Selam)</span>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="my-auto py-2.5 sm:py-3 space-y-3 sm:space-y-4">
        {/* Title */}
        <div className="flex items-baseline justify-between flex-wrap gap-1 sm:gap-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-marker text-zinc-900 leading-tight">
            WHO IS EYUEL?
          </h2>
          <span className="font-script text-xs sm:text-base text-sky-700 italic">
            "Backend-first engineer who loves shipping."
          </span>
        </div>

        {/* Top Split: Polaroid Photo + Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-5 items-center">
          {/* Polaroid Photo with Washi Tape */}
          <div className="sm:col-span-5 flex justify-center">
            <PhotoTape
              src={profileImg}
              alt="Eyuel Kassahun"
              caption="Eyuel • Software Eng"
              rotation="-2deg"
              tapeColor="cyan"
              aspectRatio="aspect-square sm:aspect-4/3"
              className="w-36 sm:w-44 md:w-52"
            />
          </div>

          {/* Quick Metrics & Bio */}
          <div className="sm:col-span-7 space-y-2 sm:space-y-3 font-script text-sm sm:text-base md:text-lg text-zinc-800 leading-snug">
            <p>
              I am a <HighlightText color="yellow">full-stack and backend engineer</HighlightText> with a strong foundation in computer science and software architecture.
            </p>
            <p className="hidden xs:block">
              My passion is architecting <HighlightText color="cyan">distributed microservices</HighlightText>, designing fault-tolerant relational databases, and constructing user-centric interfaces that solve real-world problems.
            </p>

            {/* Quick 4 Stats Grid */}
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2 pt-1 font-ui">
              {portfolioData.personal.stats.map((stat, i) => (
                <div key={i} className="p-1.5 sm:p-2 bg-white/80 border border-zinc-300 rounded-lg shadow-2xs">
                  <p className="text-lg sm:text-xl font-bold font-marker text-sky-700 leading-none">{stat.value}</p>
                  <p className="text-[10px] sm:text-[11px] font-mono text-zinc-500 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Principles Sketch Box */}
        <div className="sketch-border-sm bg-white/70 p-3 sm:p-4 relative space-y-1.5 sm:space-y-2">
          <div className="absolute -top-2.5 left-3 sm:left-4 px-2 bg-sky-100 border border-sky-400 rounded-sm font-hand text-[10px] sm:text-xs font-bold text-sky-900 flex items-center gap-1">
            <LightbulbDoodle className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>CORE VALUES</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 pt-1 font-hand text-[11px] sm:text-xs text-zinc-800">
            <div className="flex items-start gap-1.5">
              <CheckCircle2 size={14} className="text-sky-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-zinc-900">Resilience First:</span>
                <p className="text-zinc-600 leading-tight">Design for failure, retry gracefully, and isolate faults.</p>
              </div>
            </div>

            <div className="flex items-start gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-zinc-900">Clean Abstractions:</span>
                <p className="text-zinc-600 leading-tight">Implicit interfaces and domain-driven modularity.</p>
              </div>
            </div>

            <div className="flex items-start gap-1.5">
              <CheckCircle2 size={14} className="text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-zinc-900">Continuous Growth:</span>
                <p className="text-zinc-600 leading-tight">Curiosity for emerging tech, Go idioms & distributed systems.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page Footer */}
      <div className="pt-2 sm:pt-3 border-t border-dashed border-zinc-300 flex items-center justify-between text-[10px] sm:text-xs font-mono text-zinc-500 shrink-0">
        <span>NOTEBOOK #02 • BIOGRAPHY & VALUES</span>
        <span className="font-script text-xs sm:text-sm text-zinc-700">Addis Ababa • 2026</span>
      </div>
    </div>
  );
}
