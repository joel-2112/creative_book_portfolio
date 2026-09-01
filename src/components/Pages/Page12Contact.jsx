import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { EthiopianMotif } from '../UI/HandDrawnDoodles';
import { GithubIcon, LinkedinIcon } from '../UI/BrandIcons';
import { Mail, Send, Sparkles, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export function Page12Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.55 }
    });
  };

  return (
    <div className="w-full h-full p-3.5 sm:p-6 md:p-8 flex flex-col justify-between paper-ruled relative overflow-y-auto overscroll-contain notebook-scroll">
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-dashed border-sky-400/40 pb-2 sm:pb-3 shrink-0">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
          <span className="font-mono text-[10px] sm:text-xs text-zinc-700 font-bold uppercase tracking-wider">
            PAGE 12 • GET IN TOUCH
          </span>
        </div>
        <div className="flex items-center gap-1 text-[10px] sm:text-xs font-hand text-zinc-600">
          <EthiopianMotif className="w-3 h-3 sm:w-3.5 sm:h-3.5" color="#0284C7" />
          <span>Addis Ababa, ET 🇪🇹</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="my-auto py-2 sm:py-3 space-y-2.5 sm:space-y-3.5">
        <div>
          <span className="font-mono text-[10px] sm:text-xs font-bold px-1.5 py-0.5 rounded bg-zinc-800 text-amber-300">
            THE FINAL LOG ENTRY
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-marker text-zinc-900 mt-0.5 leading-tight">
            THE LAST PAGE? <br />
            <span className="text-sky-600">NOT REALLY.</span>
          </h2>
          <p className="font-script text-base sm:text-xl md:text-2xl text-zinc-800 mt-0.5">
            Let's build something remarkable together.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 font-hand">
          {/* Email Card */}
          <div className="p-2.5 sm:p-3 bg-white border-2 border-zinc-800 rounded-lg shadow-2xs flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-sky-100 border border-sky-300 flex items-center justify-center text-sky-700 shrink-0">
                <Mail size={15} />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] sm:text-[10px] text-zinc-500 font-mono">Email Address</p>
                <p className="text-xs sm:text-sm font-bold text-zinc-900 truncate">
                  {portfolioData.personal.email}
                </p>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className="px-2.5 py-1 bg-sky-600 hover:bg-sky-700 active:scale-95 text-white font-ui text-[11px] sm:text-xs font-bold rounded transition-all shrink-0 cursor-pointer flex items-center gap-1"
            >
              {copied ? <Check size={11} /> : null}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* Telegram Card */}
          <a
            href={portfolioData.personal.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 sm:p-3 bg-white border-2 border-zinc-800 rounded-lg shadow-2xs flex items-center justify-between gap-2 hover:border-sky-500 transition-all group"
          >
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-sky-50 border border-sky-300 flex items-center justify-center text-sky-500 shrink-0 group-hover:scale-110 transition-transform">
                <Send size={15} />
              </div>
              <div>
                <p className="text-[9px] sm:text-[10px] text-zinc-500 font-mono">Telegram</p>
                <p className="text-xs sm:text-sm font-bold text-zinc-900">@Eyuel_joel</p>
              </div>
            </div>
            <span className="text-xs sm:text-sm text-sky-600 group-hover:translate-x-1 transition-transform">→</span>
          </a>

          {/* LinkedIn Card */}
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 sm:p-3 bg-white border-2 border-zinc-800 rounded-lg shadow-2xs flex items-center justify-between gap-2 hover:border-blue-600 transition-all group"
          >
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-blue-50 border border-blue-300 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-110 transition-transform">
                <LinkedinIcon size={15} />
              </div>
              <div>
                <p className="text-[9px] sm:text-[10px] text-zinc-500 font-mono">LinkedIn</p>
                <p className="text-xs sm:text-sm font-bold text-zinc-900 truncate">eyuel-kassahun-yenew</p>
              </div>
            </div>
            <span className="text-xs sm:text-sm text-blue-600 group-hover:translate-x-1 transition-transform">→</span>
          </a>

          {/* GitHub Card */}
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 sm:p-3 bg-white border-2 border-zinc-800 rounded-lg shadow-2xs flex items-center justify-between gap-2 hover:border-zinc-900 transition-all group"
          >
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-zinc-100 border border-zinc-300 flex items-center justify-center text-zinc-900 shrink-0 group-hover:scale-110 transition-transform">
                <GithubIcon size={15} />
              </div>
              <div>
                <p className="text-[9px] sm:text-[10px] text-zinc-500 font-mono">GitHub</p>
                <p className="text-xs sm:text-sm font-bold text-zinc-900">joel-2112</p>
              </div>
            </div>
            <span className="text-xs sm:text-sm text-zinc-900 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Hand-Signed Closing */}
        <div className="pt-1.5 flex items-center justify-between flex-wrap gap-2">
          <div className="font-script text-base sm:text-xl md:text-2xl text-zinc-800 leading-tight">
            <p>"Thanks for reading my notebook."</p>
            <p className="font-marker text-lg sm:text-2xl text-sky-700 mt-0.5">— Eyuel Kassahun</p>
          </div>

          <button
            onClick={triggerConfetti}
            className="px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-zinc-950 font-ui font-bold text-xs sm:text-sm rounded-xl shadow-md active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>SAY HELLO! 🎉</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 sm:pt-3 border-t border-dashed border-zinc-300 flex items-center justify-between text-[10px] sm:text-xs font-mono text-zinc-500 shrink-0">
        <span>NOTEBOOK #12 • END OF LOGS</span>
        <span className="font-script text-xs sm:text-sm text-sky-700">Addis Ababa, Ethiopia 🇪🇹</span>
      </div>
    </div>
  );
}
