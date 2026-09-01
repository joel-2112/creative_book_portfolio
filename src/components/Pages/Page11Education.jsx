import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { StickyNote } from '../UI/StickyNote';
import { HighlightText } from '../UI/HighlightText';
import { GraduationCap, Award, BookOpen, CheckCircle, MapPin } from 'lucide-react';

export function Page11Education() {
  const edu = portfolioData.education;

  return (
    <div className="w-full h-full p-6 sm:p-10 flex flex-col justify-between paper-ruled relative overflow-y-auto notebook-scroll">
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-dashed border-sky-400/40 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-amber-600"></span>
          <span className="font-mono text-xs text-zinc-700 font-bold uppercase tracking-wider">
            PAGE 11 • ACADEMIC HONORS & CREDENTIALS
          </span>
        </div>
        <div className="flex items-center gap-1 text-xs font-mono px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 font-bold">
          🎓 HIGH DISTINCTION
        </div>
      </div>

      {/* Main Content */}
      <div className="my-auto py-3 space-y-4">
        <div>
          <h2 className="text-2xl sm:text-4xl font-marker text-zinc-900 flex items-center gap-2">
            <span>ACADEMIC FOUNDATION</span>
            <span className="text-2xl">🎓</span>
          </h2>
          <p className="font-script text-base text-sky-700">
            Rigorous 5-year software engineering curriculum with honors distinction.
          </p>
        </div>

        {/* Degree Certificate Card */}
        <div className="sketch-border bg-white/95 p-5 shadow-sm space-y-3 relative">
          <div className="flex items-start justify-between gap-3 border-b border-zinc-200 pb-3 flex-wrap">
            <div>
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-900 border border-sky-300">
                2019 – 2024 (5-Year Program)
              </span>
              <h3 className="text-xl sm:text-2xl font-marker text-zinc-900 mt-1">
                {edu.degree}
              </h3>
              <p className="font-script text-base font-bold text-sky-800 flex items-center gap-1.5 mt-0.5">
                <GraduationCap size={18} />
                <span>{edu.institution}</span>
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-2.5 bg-amber-50 border border-amber-300 rounded-lg text-center">
                <p className="text-xl font-marker font-bold text-amber-700">{edu.gpa}</p>
                <p className="text-[10px] font-mono text-zinc-600">GPA (4.0 Scale)</p>
              </div>

              <div className="p-2.5 bg-emerald-50 border border-emerald-300 rounded-lg text-center">
                <p className="text-xl font-marker font-bold text-emerald-700">{edu.exitExam}</p>
                <p className="text-[10px] font-mono text-zinc-600">National Exit Exam</p>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-1.5 font-script text-sm sm:text-base text-zinc-800 leading-snug">
            {edu.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✔</span>
                <p>{h}</p>
              </div>
            ))}
          </div>

          {/* Coursework Pills */}
          <div className="pt-2 border-t border-zinc-200/80">
            <span className="font-hand text-xs font-bold text-zinc-500 uppercase block mb-1.5">
              Core Advanced Coursework:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {edu.keyCourses.map((c, i) => (
                <span
                  key={i}
                  className="font-code text-xs px-2 py-0.5 rounded-sm bg-zinc-100 text-zinc-800 border border-zinc-200"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Academic Note */}
        <StickyNote color="yellow" rotation="-1deg" pinned={true} pinColor="green" className="py-2.5">
          <p className="text-xs font-script text-amber-950">
            🏆 <strong>Top Percentile:</strong> "Graduated in the top percentile of software engineering students nationwide, backed by solid algorithmic rigor and software qa fundamentals."
          </p>
        </StickyNote>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-dashed border-zinc-300 flex items-center justify-between text-xs font-mono text-zinc-500">
        <span>NOTEBOOK #11 • ACADEMIC HONORS</span>
        <span className="font-script text-sm text-sky-700">Bahir Dar Institute of Technology (BIT)</span>
      </div>
    </div>
  );
}
