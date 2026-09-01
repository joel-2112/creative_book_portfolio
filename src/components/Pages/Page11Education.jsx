import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { StickyNote } from '../UI/StickyNote';
import { GraduationCap } from 'lucide-react';

export function Page11Education() {
  const edu = portfolioData.education;

  return (
    <div className="w-full h-full p-3.5 sm:p-6 md:p-8 flex flex-col justify-between paper-ruled relative overflow-y-auto overscroll-contain notebook-scroll">
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-dashed border-sky-400/40 pb-2 sm:pb-3 shrink-0">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span>
          <span className="font-mono text-[10px] sm:text-xs text-zinc-700 font-bold uppercase tracking-wider">
            PAGE 11 • ACADEMIC HONORS
          </span>
        </div>
        <div className="flex items-center gap-1 text-[10px] sm:text-xs font-mono px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 font-bold">
          🎓 HONORS
        </div>
      </div>

      {/* Main Content */}
      <div className="my-auto py-2 sm:py-3 space-y-2.5 sm:space-y-3.5">
        <div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-marker text-zinc-900 flex items-center gap-1.5 leading-tight">
            <span>ACADEMIC FOUNDATION</span>
            <span className="text-lg sm:text-2xl">🎓</span>
          </h2>
          <p className="font-script text-xs sm:text-base text-sky-700">
            Rigorous 5-year software engineering curriculum with honors distinction.
          </p>
        </div>

        {/* Degree Certificate Card */}
        <div className="sketch-border bg-white/95 p-3.5 sm:p-4 md:p-5 shadow-2xs space-y-2 sm:space-y-2.5 relative">
          <div className="flex items-start justify-between gap-2 border-b border-zinc-200 pb-2 sm:pb-2.5 flex-wrap">
            <div>
              <span className="font-mono text-[10px] sm:text-xs font-bold px-1.5 py-0.5 rounded bg-sky-100 text-sky-900 border border-sky-300">
                2019 – 2024 (5-Year Program)
              </span>
              <h3 className="text-base sm:text-xl md:text-2xl font-marker text-zinc-900 mt-1 leading-tight">
                {edu.degree}
              </h3>
              <p className="font-script text-xs sm:text-base font-bold text-sky-800 flex items-center gap-1 mt-0.5">
                <GraduationCap size={15} />
                <span>{edu.institution}</span>
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              <div className="p-1.5 sm:p-2 bg-amber-50 border border-amber-300 rounded-lg text-center">
                <p className="text-base sm:text-xl font-marker font-bold text-amber-700 leading-none">{edu.gpa}</p>
                <p className="text-[9px] sm:text-[10px] font-mono text-zinc-600 mt-0.5">GPA (4.0 Scale)</p>
              </div>

              <div className="p-1.5 sm:p-2 bg-emerald-50 border border-emerald-300 rounded-lg text-center">
                <p className="text-base sm:text-xl font-marker font-bold text-emerald-700 leading-none">{edu.exitExam}</p>
                <p className="text-[9px] sm:text-[10px] font-mono text-zinc-600 mt-0.5">Exit Exam</p>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-1 font-script text-xs sm:text-sm md:text-base text-zinc-800 leading-snug">
            {edu.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-1.5">
                <span className="text-emerald-600 font-bold shrink-0">✔</span>
                <p>{h}</p>
              </div>
            ))}
          </div>

          {/* Coursework Pills */}
          <div className="pt-1.5 border-t border-zinc-200/80">
            <span className="font-hand text-[10px] sm:text-xs font-bold text-zinc-500 uppercase block mb-1">
              Core Advanced Coursework:
            </span>
            <div className="flex flex-wrap gap-1">
              {edu.keyCourses.map((c, i) => (
                <span
                  key={i}
                  className="font-code text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-sm bg-zinc-100 text-zinc-800 border border-zinc-200"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Academic Note */}
        <StickyNote color="yellow" rotation="-1deg" pinned={true} pinColor="green" className="py-2">
          <p className="text-[11px] sm:text-xs font-script text-amber-950 leading-tight">
            🏆 <strong>Top Percentile:</strong> "Graduated in top percentile of software engineering students nationwide, backed by solid algorithmic rigor and software QA fundamentals."
          </p>
        </StickyNote>
      </div>

      {/* Footer */}
      <div className="pt-2 sm:pt-3 border-t border-dashed border-zinc-300 flex items-center justify-between text-[10px] sm:text-xs font-mono text-zinc-500 shrink-0">
        <span>NOTEBOOK #11 • EDUCATION</span>
        <span className="font-script text-xs sm:text-sm text-sky-700">Bahir Dar BIT (3.74 GPA)</span>
      </div>
    </div>
  );
}
