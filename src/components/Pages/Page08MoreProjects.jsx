import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { StickyNote } from '../UI/StickyNote';
import { HighlightText } from '../UI/HighlightText';
import { GithubIcon } from '../UI/BrandIcons';
import { Smartphone, Compass, Gamepad2, ExternalLink } from 'lucide-react';

export function Page08MoreProjects() {
  const ethioExplore = portfolioData.projects.find(p => p.id === 'ethioexplore');
  const dineIn = portfolioData.projects.find(p => p.id === 'dinein-delivery');
  const eyuBingo = portfolioData.projects.find(p => p.id === 'eyu-bingo');

  return (
    <div className="w-full h-full p-6 sm:p-10 flex flex-col justify-between paper-ruled relative overflow-y-auto notebook-scroll">
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-dashed border-sky-400/40 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-purple-500"></span>
          <span className="font-mono text-xs text-zinc-700 font-bold uppercase tracking-wider">
            PAGE 08 • MOBILE & REAL-TIME PLATFORMS
          </span>
        </div>
        <span className="font-script text-xs text-zinc-500">Selected Product Deliverables</span>
      </div>

      {/* Main Content */}
      <div className="my-auto py-3 space-y-3.5">
        <div>
          <h2 className="text-2xl sm:text-3xl font-marker text-zinc-900">
            MOBILE & REAL-TIME SYSTEMS
          </h2>
          <p className="font-script text-base text-purple-800">
            Consumer mobile applications & high-concurrency event-driven mini-apps.
          </p>
        </div>

        {/* 3 Project Mini Sheets */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* EthioExplore */}
          {ethioExplore && (
            <div className="sketch-border-sm bg-purple-50/70 p-3.5 flex flex-col justify-between shadow-2xs space-y-2">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xl">🇪🇹</span>
                  <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 bg-purple-200 text-purple-900 rounded">
                    Web + Flutter
                  </span>
                </div>

                <h3 className="font-marker text-base text-zinc-900 mt-1">
                  {ethioExplore.title}
                </h3>
                <p className="font-script text-xs text-zinc-700 leading-snug mt-1">
                  {ethioExplore.problem}
                </p>
              </div>

              <div className="pt-2 border-t border-purple-200/80">
                <div className="flex flex-wrap gap-1 mb-2">
                  {ethioExplore.stack.slice(0, 3).map((t, i) => (
                    <span key={i} className="font-code text-[10px] px-1.5 py-0.5 bg-white rounded border border-purple-200">
                      {t}
                    </span>
                  ))}
                </div>
                {ethioExplore.demo && (
                  <a
                    href={ethioExplore.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-hand font-bold text-purple-800 hover:underline"
                  >
                    <span>View Demo</span>
                    <ExternalLink size={11} />
                  </a>
                )}
              </div>
            </div>
          )}

          {/* DineIn Delivery */}
          {dineIn && (
            <div className="sketch-border-sm bg-amber-50/70 p-3.5 flex flex-col justify-between shadow-2xs space-y-2">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xl">🛵</span>
                  <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 bg-amber-200 text-amber-900 rounded">
                    Flutter + Laravel
                  </span>
                </div>

                <h3 className="font-marker text-base text-zinc-900 mt-1">
                  {dineIn.title}
                </h3>
                <p className="font-script text-xs text-zinc-700 leading-snug mt-1">
                  {dineIn.solution}
                </p>
              </div>

              <div className="pt-2 border-t border-amber-200/80">
                <div className="flex flex-wrap gap-1 mb-2">
                  {dineIn.stack.slice(0, 3).map((t, i) => (
                    <span key={i} className="font-code text-[10px] px-1.5 py-0.5 bg-white rounded border border-amber-200">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-[11px] font-script text-amber-900 font-semibold">
                  Real-time GPS Tracking
                </span>
              </div>
            </div>
          )}

          {/* Eyu Bingo Game */}
          {eyuBingo && (
            <div className="sketch-border-sm bg-emerald-50/70 p-3.5 flex flex-col justify-between shadow-2xs space-y-2">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xl">🎲</span>
                  <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 bg-emerald-200 text-emerald-900 rounded">
                    WebSockets + Redis
                  </span>
                </div>

                <h3 className="font-marker text-base text-zinc-900 mt-1">
                  {eyuBingo.title}
                </h3>
                <p className="font-script text-xs text-zinc-700 leading-snug mt-1">
                  {eyuBingo.solution}
                </p>
              </div>

              <div className="pt-2 border-t border-emerald-200/80">
                <div className="flex flex-wrap gap-1 mb-2">
                  {eyuBingo.stack.slice(0, 3).map((t, i) => (
                    <span key={i} className="font-code text-[10px] px-1.5 py-0.5 bg-white rounded border border-emerald-200">
                      {t}
                    </span>
                  ))}
                </div>
                {eyuBingo.github && (
                  <a
                    href={eyuBingo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-hand font-bold text-emerald-800 hover:underline"
                  >
                    <GithubIcon size={11} />
                    <span>View Repository</span>
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Sticky Note Reminder */}
        <StickyNote color="pink" rotation="0.5deg" pinned={false} tape={true} className="py-2.5">
          <p className="text-xs font-script text-pink-950">
            ⚡ <strong>Mobile & Concurrency Mantra:</strong> "Handle offline states gracefully on mobile, and push heavy asynchronous jobs (like SMS alerts and payouts) into Redis worker queues."
          </p>
        </StickyNote>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-dashed border-zinc-300 flex items-center justify-between text-xs font-mono text-zinc-500">
        <span>NOTEBOOK #08 • MOBILE & REAL-TIME PLATFORMS</span>
        <span className="font-script text-sm text-purple-700">#Flutter #Dart #Laravel #WebSockets</span>
      </div>
    </div>
  );
}
