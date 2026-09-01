import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { StickyNote } from '../UI/StickyNote';
import { HighlightText } from '../UI/HighlightText';
import { GithubIcon } from '../UI/BrandIcons';
import { Star, GitFork, Terminal, ExternalLink, Code2 } from 'lucide-react';

export function Page10OpenSource() {
  return (
    <div className="w-full h-full p-6 sm:p-10 flex flex-col justify-between paper-grid relative overflow-y-auto notebook-scroll">
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-dashed border-sky-400/40 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-zinc-800"></span>
          <span className="font-mono text-xs text-zinc-700 font-bold uppercase tracking-wider">
            PAGE 10 • OPEN SOURCE & EXPERIMENTS
          </span>
        </div>
        <a
          href={portfolioData.personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-mono font-bold text-zinc-800 hover:text-sky-600 transition-colors"
        >
          <GithubIcon size={13} />
          <span>github.com/joel-2112</span>
        </a>
      </div>

      {/* Main Content */}
      <div className="my-auto py-3 space-y-3.5">
        <div className="flex items-baseline justify-between flex-wrap gap-2">
          <div>
            <h2 className="text-2xl sm:text-4xl font-marker text-zinc-900 flex items-center gap-2">
              <span>OPEN SOURCE & CODE LABS</span>
              <span className="text-2xl">🐙</span>
            </h2>
            <p className="font-script text-base text-sky-700">
              Developer tools, AI experiments, Go idioms, and modular libraries.
            </p>
          </div>
        </div>

        {/* 6 Repository Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {portfolioData.openSource.map((repo, idx) => (
            <a
              key={idx}
              href={`https://github.com/${repo.repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/90 border border-zinc-300 rounded-lg shadow-2xs hover:border-zinc-800 hover:shadow-sm transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 font-hand font-bold text-sm text-zinc-900 group-hover:text-sky-700">
                    <Code2 size={14} className="text-sky-600 shrink-0" />
                    <span className="truncate">{repo.name}</span>
                  </div>
                  <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-600 border border-zinc-200 shrink-0">
                    {repo.tag}
                  </span>
                </div>

                <p className="font-script text-xs sm:text-sm text-zinc-700 leading-snug mt-1 line-clamp-2">
                  {repo.desc}
                </p>
              </div>

              <div className="pt-2 mt-2 border-t border-zinc-100 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span className="text-[11px] text-sky-700 font-semibold">{repo.lang}</span>
                <div className="flex items-center gap-1">
                  <Star size={11} className="text-amber-500 fill-amber-500" />
                  <span>{repo.stars}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Developer Note */}
        <div className="sketch-border-sm bg-sky-50/70 p-3 text-xs font-script text-sky-950 flex items-center gap-2">
          <span className="text-xl shrink-0">💻</span>
          <p>
            "I regularly publish reproducible snippets, architectural proofs-of-concept, and micro-packages to give back to the open-source community."
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-dashed border-zinc-300 flex items-center justify-between text-xs font-mono text-zinc-500">
        <span>NOTEBOOK #10 • GITHUB REPOSITORIES</span>
        <span className="font-script text-sm text-sky-700">50+ Repositories on GitHub</span>
      </div>
    </div>
  );
}
