import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { StickyNote } from '../UI/StickyNote';
import { HighlightText } from '../UI/HighlightText';
import { GoGopherDoodle, LaptopDoodle, CoffeeCupDoodle, HandDrawnArrow, EthiopianMotif } from '../UI/HandDrawnDoodles';
import { Sparkles, MapPin, Terminal, ArrowRight } from 'lucide-react';

export function Page01CoverReveal({ onNextPage }) {
  return (
    <div className="w-full h-full p-6 sm:p-10 flex flex-col justify-between paper-ruled relative overflow-y-auto notebook-scroll">
      {/* Top Header Note */}
      <div className="flex items-center justify-between border-b-2 border-dashed border-sky-400/40 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-sky-500"></span>
          <span className="font-mono text-xs text-sky-800 font-bold uppercase tracking-wider">
            PAGE 01 • INTRODUCTION & OVERVIEW
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs font-hand text-zinc-600">
          <MapPin size={14} className="text-red-500" />
          <span>Addis Ababa, Ethiopia 🇪🇹</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="my-auto py-4 space-y-5">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 border border-amber-300 rounded-full font-hand text-xs text-amber-900">
            <Sparkles size={13} className="text-amber-600" />
            <span>Engineering Notebook • Entry #01</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-marker text-zinc-900 tracking-tight leading-tight">
            HELLO, I'M <br />
            <span className="text-sky-600 drop-shadow-xs">EYUEL KASSAHUN</span>
          </h2>

          <p className="font-hand text-lg sm:text-xl text-zinc-700 font-bold">
            {portfolioData.personal.title}
          </p>
        </div>

        {/* Bio Paragraphs */}
        <div className="space-y-2.5 font-script text-lg sm:text-xl text-zinc-800 leading-relaxed max-w-xl">
          <p>
            Welcome to my personal <HighlightText color="cyan">engineering notebook</HighlightText>! 
            I build scalable distributed systems, explore modern full-stack architectures, 
            and turn complex ideas into robust software products.
          </p>
          <p>
            From <HighlightText color="yellow">high-throughput microservices</HighlightText> in Go & Node.js 
            to interactive web and Flutter mobile applications, I care deeply about clean code, 
            resilience, and real user impact.
          </p>
        </div>

        {/* Interactive Sticky Note on Page */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <StickyNote color="yellow" rotation="-1.5deg" pinned={true} pinColor="red">
            <p className="font-bold text-amber-900 text-sm">💡 CURRENT FOCUS:</p>
            <p className="text-xs text-amber-950 mt-1">
              {portfolioData.personal.currentFocus}
            </p>
          </StickyNote>

          <StickyNote color="cyan" rotation="2deg" pinned={true} pinColor="blue">
            <p className="font-bold text-sky-900 text-sm">⚡ STATUS:</p>
            <p className="text-xs text-sky-950 mt-1 font-semibold">
              {portfolioData.personal.availability}
            </p>
          </StickyNote>
        </div>

        {/* Hand-Drawn Developer Desk Illustration Row */}
        <div className="pt-3 flex items-center justify-between border-t border-zinc-300/60 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <CoffeeCupDoodle label="ETHIO" className="w-10 h-10" />
            <div className="font-script text-xs text-zinc-600">
              <span>Fresh Yirgacheffe coffee brewed</span><br />
              <span className="text-sky-600 font-bold">Ready to build.</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <GoGopherDoodle className="w-9 h-11" />
            <LaptopDoodle className="w-10 h-9" />
          </div>
        </div>
      </div>

      {/* Footer Navigation Cue */}
      <div className="pt-3 border-t border-dashed border-zinc-300 flex items-center justify-between text-xs font-hand text-zinc-500">
        <span className="font-script text-sm text-sky-700 italic">
          "Let's build something interesting." — Eyuel
        </span>

        <button
          onClick={onNextPage}
          className="flex items-center gap-1.5 font-bold text-sky-700 hover:text-sky-900 group cursor-pointer"
        >
          <span>Turn to Page 02 (About Me)</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
