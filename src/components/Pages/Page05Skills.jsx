import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { HighlightText } from '../UI/HighlightText';
import { StickyNote } from '../UI/StickyNote';
import { Wrench, Terminal, Cpu, Database, Layout, Smartphone, Cloud } from 'lucide-react';

export function Page05Skills() {
  const [activeCategory, setActiveCategory] = useState('backend');

  const categories = [
    { key: 'backend', label: 'Backend Stacks', icon: <Terminal size={15} /> },
    { key: 'frontend', label: 'Frontend & UI', icon: <Layout size={15} /> },
    { key: 'mobile', label: 'Mobile Engineering', icon: <Smartphone size={15} /> },
    { key: 'database', label: 'Databases & Cache', icon: <Database size={15} /> },
    { key: 'devops', label: 'DevOps & Systems', icon: <Cloud size={15} /> }
  ];

  return (
    <div className="w-full h-full p-6 sm:p-10 flex flex-col justify-between paper-grid relative overflow-y-auto notebook-scroll">
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-dashed border-sky-400/40 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-amber-500"></span>
          <span className="font-mono text-xs text-zinc-700 font-bold uppercase tracking-wider">
            PAGE 05 • MY ENGINEERING TOOLBOX
          </span>
        </div>
        <span className="font-script text-xs text-zinc-500">Technical Weaponry</span>
      </div>

      {/* Main Content */}
      <div className="my-auto py-3 space-y-4">
        <div>
          <h2 className="text-2xl sm:text-4xl font-marker text-zinc-900 flex items-center gap-2">
            <span>MY TOOLBOX</span>
            <span className="text-xl">🧰</span>
          </h2>
          <p className="font-script text-base text-sky-700">
            Carefully curated tools for building robust, scalable architectures.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 font-hand">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-amber-500 text-zinc-950 border-amber-600 shadow-sm scale-102 font-extrabold'
                  : 'bg-white/80 text-zinc-700 border-zinc-300 hover:bg-white'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Toolbox Tray Grid */}
        <div className="sketch-border-sm bg-[#FAF8F2] p-4 shadow-inner space-y-3 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {portfolioData.toolbox[activeCategory]?.map((tool, idx) => (
              <div
                key={idx}
                className="p-3 bg-white border border-zinc-300 rounded-lg shadow-2xs hover:border-amber-400 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{tool.icon}</span>
                    <div>
                      <h4 className="font-hand font-bold text-base text-zinc-900">
                        {tool.name}
                      </h4>
                      <p className="font-script text-xs sm:text-sm text-zinc-600">
                        {tool.note}
                      </p>
                    </div>
                  </div>

                  <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded-sm bg-zinc-100 text-zinc-700 border border-zinc-200 shrink-0">
                    {tool.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Engineering Philosophy Highlight */}
        <div className="flex items-center gap-2 text-xs font-script text-zinc-700 bg-white/60 p-2.5 rounded-md border border-zinc-200">
          <span className="text-amber-500 font-bold text-base">★</span>
          <span>
            "Pick the right tool for the problem: Go for raw throughput & concurrent microservices, Node/TypeScript for rapid API layers, React/Next for rich interfaces, and Flutter for cross-platform delight."
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-dashed border-zinc-300 flex items-center justify-between text-xs font-mono text-zinc-500">
        <span>NOTEBOOK #05 • SKILLS & CAPABILITIES</span>
        <span className="font-script text-sm text-sky-700">#Golang #NodeJS #React #PostgreSQL</span>
      </div>
    </div>
  );
}
