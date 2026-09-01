import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { StickyNote } from '../UI/StickyNote';
import { HighlightText } from '../UI/HighlightText';
import { CoffeeCupDoodle, EthiopianMotif, GoGopherDoodle } from '../UI/HandDrawnDoodles';
import { GithubIcon, LinkedinIcon } from '../UI/BrandIcons';
import { Mail, Send, Globe, Sparkles, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export function Page12Contact() {
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.55 }
    });
  };

  return (
    <div className="w-full h-full p-6 sm:p-10 flex flex-col justify-between paper-ruled relative overflow-y-auto notebook-scroll">
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-dashed border-sky-400/40 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="font-mono text-xs text-zinc-700 font-bold uppercase tracking-wider">
            PAGE 12 • THE LAST PAGE / GET IN TOUCH
          </span>
        </div>
        <div className="flex items-center gap-1 text-xs font-hand text-zinc-600">
          <EthiopianMotif className="w-3.5 h-3.5" color="#0284C7" />
          <span>Addis Ababa, Ethiopia</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="my-auto py-3 space-y-4">
        <div>
          <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-zinc-800 text-amber-300">
            THE FINAL LOG ENTRY
          </span>
          <h2 className="text-3xl sm:text-5xl font-marker text-zinc-900 mt-1 leading-tight">
            THE LAST PAGE? <br />
            <span className="text-sky-600">NOT REALLY.</span>
          </h2>
          <p className="font-script text-xl sm:text-2xl text-zinc-800 mt-1">
            Let's build something remarkable together.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-hand">
          {/* Email Card */}
          <div className="p-3.5 bg-white border-2 border-zinc-800 rounded-lg shadow-sm flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 truncate">
              <div className="w-9 h-9 rounded-lg bg-sky-100 border border-sky-300 flex items-center justify-center text-sky-700 shrink-0">
                <Mail size={18} />
              </div>
              <div className="truncate">
                <p className="text-xs text-zinc-500 font-mono">Email Address</p>
                <p className="text-sm font-bold text-zinc-900 truncate">
                  {portfolioData.personal.email}
                </p>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className="px-3 py-1.5 bg-sky-600 hover:bg-sky-700 active:scale-95 text-white font-ui text-xs font-bold rounded-md transition-all shrink-0 cursor-pointer flex items-center gap-1"
            >
              {copied ? <Check size={13} /> : null}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>

          {/* Telegram Card */}
          <a
            href={portfolioData.personal.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 bg-white border-2 border-zinc-800 rounded-lg shadow-sm flex items-center justify-between gap-3 hover:border-sky-500 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-sky-50 border border-sky-300 flex items-center justify-center text-sky-500 shrink-0 group-hover:scale-110 transition-transform">
                <Send size={18} />
              </div>
              <div>
                <p className="text-xs text-zinc-500 font-mono">Telegram Direct</p>
                <p className="text-sm font-bold text-zinc-900">@Eyuel_joel</p>
              </div>
            </div>
            <span className="text-sm text-sky-600 group-hover:translate-x-1 transition-transform">→</span>
          </a>

          {/* LinkedIn Card */}
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 bg-white border-2 border-zinc-800 rounded-lg shadow-sm flex items-center justify-between gap-3 hover:border-blue-600 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-300 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-110 transition-transform">
                <LinkedinIcon size={18} />
              </div>
              <div>
                <p className="text-xs text-zinc-500 font-mono">LinkedIn Profile</p>
                <p className="text-sm font-bold text-zinc-900">eyuel-kassahun-yenew</p>
              </div>
            </div>
            <span className="text-sm text-blue-600 group-hover:translate-x-1 transition-transform">→</span>
          </a>

          {/* GitHub Card */}
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 bg-white border-2 border-zinc-800 rounded-lg shadow-sm flex items-center justify-between gap-3 hover:border-zinc-900 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-zinc-100 border border-zinc-300 flex items-center justify-center text-zinc-900 shrink-0 group-hover:scale-110 transition-transform">
                <GithubIcon size={18} />
              </div>
              <div>
                <p className="text-xs text-zinc-500 font-mono">GitHub Profile</p>
                <p className="text-sm font-bold text-zinc-900">joel-2112</p>
              </div>
            </div>
            <span className="text-sm text-zinc-900 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Hand-Signed Closing */}
        <div className="pt-2 flex items-center justify-between flex-wrap gap-3">
          <div className="font-script text-xl sm:text-2xl text-zinc-800 space-y-0.5">
            <p>"Thanks for reading through my engineering notebook."</p>
            <p className="font-marker text-2xl text-sky-700">— Eyuel Kassahun</p>
          </div>

          <button
            onClick={triggerConfetti}
            className="px-5 py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-zinc-950 font-ui font-bold text-xs sm:text-sm rounded-xl shadow-md active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Sparkles size={16} />
            <span>SAY HELLO! 🎉</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-dashed border-zinc-300 flex items-center justify-between text-xs font-mono text-zinc-500">
        <span>NOTEBOOK #12 • END OF LOGS</span>
        <span className="font-script text-sm text-sky-700">Addis Ababa, Ethiopia 🇪🇹</span>
      </div>
    </div>
  );
}
