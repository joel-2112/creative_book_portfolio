import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Terminal, Database, Layout, Smartphone, Cloud } from 'lucide-react';

export function Page05Skills() {
  const [activeCategory, setActiveCategory] = useState('backend');

  const categories = [
    { key: 'backend', label: 'Backend', icon: <Terminal size={13} /> },
    { key: 'frontend', label: 'Frontend', icon: <Layout size={13} /> },
    { key: 'mobile', label: 'Mobile', icon: <Smartphone size={13} /> },
    { key: 'database', label: 'Databases', icon: <Database size={13} /> },
    { key: 'devops', label: 'DevOps', icon: <Cloud size={13} /> }
  ];

  return (
    <div className="w-full h-full p-3.5 sm:p-6 md:p-8 flex flex-col justify-between paper-grid relative overflow-y-auto overscroll-contain notebook-scroll">
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-dashed border-sky-400/40 pb-2 sm:pb-3 shrink-0">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
          <span className="font-mono text-[10px] sm:text-xs text-zinc-700 font-bold uppercase tracking-wider">
            PAGE 05 • MY TOOLBOX
          </span>
        </div>
        <span className="font-script text-[10px] sm:text-xs text-zinc-500">Technical Weaponry</span>
      </div>

      {/* Main Content */}
      <div className="my-auto py-2 sm:py-3 space-y-2.5 sm:space-y-3.5">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-marker text-zinc-900 flex items-center gap-1.5 leading-tight">
            <span>MY TOOLBOX</span>
            <span className="text-lg sm:text-xl">🧰</span>
          </h2>
          <p className="font-script text-xs sm:text-base text-sky-700">
            Carefully curated tools for building robust, scalable architectures.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 font-hand notebook-scroll">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-amber-500 text-zinc-950 border-amber-600 shadow-xs scale-102 font-extrabold'
                  : 'bg-white/80 text-zinc-700 border-zinc-300 hover:bg-white'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Toolbox Tray Grid */}
        <div className="sketch-border-sm bg-[#FAF8F2] p-2.5 sm:p-3.5 shadow-inner space-y-2 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
            {portfolioData.toolbox[activeCategory]?.map((tool, idx) => (
              <div
                key={idx}
                className="p-2 sm:p-2.5 bg-white border border-zinc-300 rounded-lg shadow-2xs hover:border-amber-400 transition-all"
              >
                <div className="flex items-start justify-between gap-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-lg shrink-0">{tool.icon}</span>
                    <div>
                      <h4 className="font-hand font-bold text-xs sm:text-sm text-zinc-900 leading-tight">
                        {tool.name}
                      </h4>
                      <p className="font-script text-[11px] sm:text-xs text-zinc-600 leading-tight mt-0.5">
                        {tool.note}
                      </p>
                    </div>
                  </div>

                  <span className="font-mono text-[9px] sm:text-[10px] font-bold px-1 sm:px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200 shrink-0">
                    {tool.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Engineering Philosophy Highlight */}
        <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-script text-zinc-700 bg-white/60 p-2 sm:p-2.5 rounded-md border border-zinc-200">
          <span className="text-amber-500 font-bold text-sm">★</span>
          <span className="leading-snug">
            "Pick the right tool: Go for high concurrency & microservices, Node/TypeScript for rapid APIs, React/Next for rich interfaces, and Flutter for mobile."
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 sm:pt-3 border-t border-dashed border-zinc-300 flex items-center justify-between text-[10px] sm:text-xs font-mono text-zinc-500 shrink-0">
        <span>NOTEBOOK #05 • SKILLS</span>
        <span className="font-script text-xs sm:text-sm text-sky-700">#Golang #NodeJS #React #Postgres</span>
      </div>
    </div>
  );
}
