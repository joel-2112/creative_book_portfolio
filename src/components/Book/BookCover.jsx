import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { GoGopherDoodle, EthiopianMotif } from '../UI/HandDrawnDoodles';
import { BookOpen, Sparkles, Terminal, Code2, Database, Cpu, Layers } from 'lucide-react';

export function BookCover({ onOpen, isOpen }) {
  return (
    <div
      className={`absolute inset-0 z-50 transition-all duration-700 ease-in-out preserve-3d origin-left ${
        isOpen
          ? 'pointer-events-none -rotate-y-180 opacity-0 -translate-z-10'
          : 'pointer-events-auto rotate-y-0 opacity-100'
      }`}
    >
      {/* Hardcover Outer Face */}
      <div className="w-full h-full bg-[#1E293B] text-amber-50 rounded-r-2xl rounded-l-md shadow-2xl p-6 sm:p-10 flex flex-col justify-between border-4 border-[#0F172A] relative overflow-hidden backface-hidden">
        {/* Leather/Cloth Grain Texture Overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        {/* Subtle Spine Crease */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/60 via-black/20 to-transparent pointer-events-none"></div>

        {/* Top Header & Ethiopian Decorative Motif */}
        <div className="flex items-center justify-between border-b border-amber-500/30 pb-4 relative z-10">
          <div className="flex items-center gap-2">
            <EthiopianMotif className="w-6 h-6" color="#F59E0B" />
            <span className="font-ui text-xs tracking-widest uppercase font-semibold text-amber-400/90">
              Personal Engineering Log • v2.0
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-black/30 px-2.5 py-1 rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>AVAILABLE</span>
          </div>
        </div>

        {/* Center Title Block with Gold/Cyan Foil Styling */}
        <div className="my-auto text-center relative z-10 py-6">
          <div className="inline-block mb-3 px-3 py-1 bg-amber-400/10 border border-amber-400/30 rounded-md">
            <p className="font-mono text-xs text-amber-300 tracking-wider">
              EST. 2019 — ADDIS ABABA, ETHIOPIA
            </p>
          </div>

          <h1 className="text-4xl sm:text-6xl font-marker tracking-wide text-amber-200 drop-shadow-[0_2px_10px_rgba(245,158,11,0.2)]">
            {portfolioData.personal.name}
          </h1>

          <div className="mt-2 flex items-center justify-center gap-2">
            <div className="h-[1px] w-8 bg-sky-400/50"></div>
            <p className="font-ui text-sm sm:text-base text-sky-300 font-medium tracking-wide">
              {portfolioData.personal.title}
            </p>
            <div className="h-[1px] w-8 bg-sky-400/50"></div>
          </div>

          <p className="mt-4 font-script text-xl sm:text-2xl text-amber-100/90 italic">
            "{portfolioData.personal.slogan}"
          </p>

          {/* Handcrafted Doodles Floating Grid */}
          <div className="mt-6 flex items-center justify-center gap-5 sm:gap-8 opacity-80 flex-wrap">
            <div className="flex flex-col items-center">
              <GoGopherDoodle className="w-10 h-12" />
              <span className="text-[10px] font-mono text-zinc-400 mt-1">Go / Gin</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-lg bg-sky-950 border border-sky-400/30 flex items-center justify-center text-sky-400">
                <Code2 size={20} />
              </div>
              <span className="text-[10px] font-mono text-zinc-400 mt-1">React / Next</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-lg bg-indigo-950 border border-indigo-400/30 flex items-center justify-center text-indigo-300">
                <Database size={20} />
              </div>
              <span className="text-[10px] font-mono text-zinc-400 mt-1">Postgres / Redis</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-lg bg-emerald-950 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
                <Cpu size={20} />
              </div>
              <span className="text-[10px] font-mono text-zinc-400 mt-1">Microservices</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA to Open Book */}
        <div className="pt-4 border-t border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 relative z-10">
          <div className="flex items-center gap-2 text-xs font-script text-amber-300/80">
            <span>✎ Handcrafted digital sketchbook</span>
          </div>

          <button
            onClick={onOpen}
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-zinc-900 font-ui font-bold text-sm rounded-xl shadow-lg hover:shadow-amber-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <BookOpen size={18} className="group-hover:rotate-12 transition-transform" />
            <span>OPEN MY NOTEBOOK</span>
            <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        {/* Decorative Gold Corner Brackets */}
        <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-amber-400/50 rounded-tr-md"></div>
        <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-amber-400/50 rounded-br-md"></div>
      </div>
    </div>
  );
}
