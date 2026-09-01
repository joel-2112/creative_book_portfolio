import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { StickyNote } from '../UI/StickyNote';
import { HighlightText } from '../UI/HighlightText';
import { Briefcase, Building, Calendar, CheckCircle2, ChevronRight } from 'lucide-react';

export function Page04Experience() {
  const [activeExp, setActiveExp] = useState(0);

  return (
    <div className="w-full h-full p-6 sm:p-10 flex flex-col justify-between paper-dots relative overflow-y-auto notebook-scroll">
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-dashed border-sky-400/40 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-500"></span>
          <span className="font-mono text-xs text-zinc-700 font-bold uppercase tracking-wider">
            PAGE 04 • WORK EXPERIENCE LOGS
          </span>
        </div>
        <span className="font-script text-xs text-zinc-500">Engineering Work Records</span>
      </div>

      {/* Main Content */}
      <div className="my-auto py-3 space-y-4">
        <div>
          <h2 className="text-2xl sm:text-4xl font-marker text-zinc-900">
            WHERE I'VE WORKED
          </h2>
          <p className="font-script text-base text-sky-700">
            Field notes from production backend and distributed systems engineering.
          </p>
        </div>

        {/* Company Switcher Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 font-hand">
          {portfolioData.experience.map((exp, idx) => (
            <button
              key={idx}
              onClick={() => setActiveExp(idx)}
              className={`px-3 py-1.5 rounded-lg border text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeExp === idx
                  ? 'bg-sky-600 text-white border-sky-700 shadow-sm scale-102'
                  : 'bg-white/80 text-zinc-700 border-zinc-300 hover:bg-white'
              }`}
            >
              {exp.company.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Active Experience Detailed Sheet */}
        {portfolioData.experience[activeExp] && (
          <div className="sketch-border bg-white/95 p-5 shadow-md relative space-y-3.5">
            {/* Top Row: Role, Company, Period */}
            <div className="flex items-start justify-between gap-3 border-b border-zinc-200 pb-3 flex-wrap">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-xl sm:text-2xl font-marker text-zinc-900">
                    {portfolioData.experience[activeExp].role}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-sky-100 text-sky-900 border border-sky-300">
                    {portfolioData.experience[activeExp].badge}
                  </span>
                </div>

                <p className="font-script text-lg text-sky-800 font-bold flex items-center gap-1.5 mt-0.5">
                  <Building size={16} />
                  <span>{portfolioData.experience[activeExp].company}</span>
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded-md border border-zinc-300">
                <Calendar size={13} />
                <span>{portfolioData.experience[activeExp].period}</span>
              </div>
            </div>

            {/* Bullets Log */}
            <div className="space-y-2 font-script text-base sm:text-lg text-zinc-800 leading-snug">
              {portfolioData.experience[activeExp].bullets.map((bullet, bIdx) => (
                <div key={bIdx} className="flex items-start gap-2">
                  <span className="text-sky-600 font-bold mt-0.5">✔</span>
                  <p>{bullet}</p>
                </div>
              ))}
            </div>

            {/* Technologies Used Tag Row */}
            <div className="pt-2 border-t border-zinc-200/80 flex items-center gap-1.5 flex-wrap">
              <span className="font-hand text-xs font-bold text-zinc-500 uppercase">Stack:</span>
              {portfolioData.experience[activeExp].technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="font-code text-xs px-2 py-0.5 rounded-sm bg-zinc-100 text-zinc-800 border border-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-dashed border-zinc-300 flex items-center justify-between text-xs font-mono text-zinc-500">
        <span>NOTEBOOK #04 • WORK EXPERIENCE</span>
        <span className="font-script text-sm text-sky-700">"Production grade software"</span>
      </div>
    </div>
  );
}
