import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { GithubIcon } from '../UI/BrandIcons';
import { Star, Code2 } from 'lucide-react';

export function Page10OpenSource() {
  return (
    <div className="w-full h-full p-3.5 sm:p-6 md:p-8 flex flex-col justify-between paper-grid relative overflow-y-auto overscroll-contain notebook-scroll">
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-dashed border-sky-400/40 pb-2 sm:pb-3 shrink-0">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-800"></span>
          <span className="font-mono text-[10px] sm:text-xs text-zinc-700 font-bold uppercase tracking-wider">
            PAGE 10 • OPEN SOURCE
          </span>
        </div>
        <a
          href={portfolioData.personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[10px] sm:text-xs font-mono font-bold text-zinc-800 hover:text-sky-600 transition-colors"
        >
          <GithubIcon size={12} />
          <span>joel-2112</span>
        </a>
      </div>

      {/* Main Content */}
      <div className="my-auto py-2 sm:py-3 space-y-2.5 sm:space-y-3">
        <div className="flex items-baseline justify-between flex-wrap gap-1">
          <div>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-marker text-zinc-900 flex items-center gap-1.5 leading-tight">
              <span>OPEN SOURCE & LABS</span>
              <span className="text-lg sm:text-2xl">🐙</span>
            </h2>
            <p className="font-script text-xs sm:text-base text-sky-700">
              Developer tools, AI experiments, Go idioms, and modular libraries.
            </p>
          </div>
        </div>

        {/* 6 Repository Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
          {portfolioData.openSource.map((repo, idx) => (
            <a
              key={idx}
              href={`https://github.com/${repo.repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 bg-white/90 border border-zinc-300 rounded-lg shadow-2xs hover:border-zinc-800 hover:shadow-xs transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 font-hand font-bold text-xs sm:text-sm text-zinc-900 group-hover:text-sky-700">
                    <Code2 size={13} className="text-sky-600 shrink-0" />
                    <span className="truncate">{repo.name}</span>
                  </div>
                  <span className="font-mono text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-600 border border-zinc-200 shrink-0">
                    {repo.tag}
                  </span>
                </div>

                <p className="font-script text-[11px] sm:text-xs text-zinc-700 leading-snug mt-0.5 line-clamp-2">
                  {repo.desc}
                </p>
              </div>

              <div className="pt-1.5 mt-1.5 border-t border-zinc-100 flex items-center justify-between text-[10px] sm:text-xs font-mono text-zinc-500">
                <span className="text-sky-700 font-semibold truncate">{repo.lang}</span>
                <div className="flex items-center gap-0.5 shrink-0">
                  <Star size={10} className="text-amber-500 fill-amber-500" />
                  <span>{repo.stars}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Developer Note */}
        <div className="sketch-border-sm bg-sky-50/70 p-2 sm:p-2.5 text-[11px] sm:text-xs font-script text-sky-950 flex items-center gap-1.5">
          <span className="text-base shrink-0">💻</span>
          <p className="leading-snug">
            "I regularly publish reproducible snippets, architectural proofs-of-concept, and micro-packages on GitHub."
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 sm:pt-3 border-t border-dashed border-zinc-300 flex items-center justify-between text-[10px] sm:text-xs font-mono text-zinc-500 shrink-0">
        <span>NOTEBOOK #10 • GITHUB</span>
        <span className="font-script text-xs sm:text-sm text-sky-700">50+ Repositories</span>
      </div>
    </div>
  );
}
