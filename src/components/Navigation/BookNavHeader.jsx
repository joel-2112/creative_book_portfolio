import React from 'react';
import { Volume2, VolumeX, BookOpen, FileText, List, RotateCcw } from 'lucide-react';

export function BookNavHeader({
  soundEnabled,
  onToggleSound,
  viewMode,
  onToggleViewMode,
  onOpenContents,
  onCloseBook,
  isOpen
}) {
  return (
    <header className="w-full max-w-6xl mx-auto px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between gap-2 text-white z-30 select-none">
      {/* Left Logo / Branding */}
      <div className="flex items-center gap-2 min-w-0">
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-marker text-base sm:text-lg shrink-0">
          E
        </div>
        <div className="min-w-0 truncate">
          <h1 className="font-marker text-sm sm:text-base md:text-lg text-amber-100 leading-tight truncate">
            EYUEL KASSAHUN
          </h1>
          <p className="font-mono text-[9px] sm:text-[10px] text-amber-300/80 tracking-wider truncate">
            SOFTWARE ENGINEER
          </p>
        </div>
      </div>

      {/* Right Controls Row */}
      <div className="flex items-center gap-1.5 sm:gap-2 font-ui text-xs shrink-0">
        {/* Table of Contents Button */}
        {isOpen && (
          <button
            onClick={onOpenContents}
            className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 active:scale-95 border border-white/15 text-white transition-all cursor-pointer shadow-xs"
            title="Open Table of Contents"
          >
            <List size={13} className="text-amber-400 shrink-0" />
            <span className="hidden sm:inline font-semibold text-[11px] sm:text-xs">CONTENTS</span>
          </button>
        )}

        {/* Spread / Single Page View Toggle (Desktop Only) */}
        {isOpen && (
          <button
            onClick={onToggleViewMode}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 active:scale-95 border border-white/15 text-white transition-all cursor-pointer shadow-xs"
            title="Toggle Two-Page Spread or Single Page Mode"
          >
            {viewMode === 'spread' ? (
              <>
                <FileText size={13} className="text-sky-400 shrink-0" />
                <span className="font-semibold text-[11px] sm:text-xs">1-PAGE</span>
              </>
            ) : (
              <>
                <BookOpen size={13} className="text-sky-400 shrink-0" />
                <span className="font-semibold text-[11px] sm:text-xs">2-PAGE</span>
              </>
            )}
          </button>
        )}

        {/* Sound Toggle Button */}
        <button
          onClick={onToggleSound}
          className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-lg border transition-all active:scale-95 cursor-pointer shadow-xs ${
            soundEnabled
              ? 'bg-amber-400/20 text-amber-300 border-amber-400/50'
              : 'bg-white/10 text-zinc-400 border-white/15 hover:text-white'
          }`}
          title={soundEnabled ? 'Disable Sound' : 'Enable Sound'}
        >
          {soundEnabled ? <Volume2 size={13} className="text-amber-400 shrink-0" /> : <VolumeX size={13} className="shrink-0" />}
          <span className="font-mono text-[10px] sm:text-[11px] font-bold">
            {soundEnabled ? 'ON' : 'OFF'}
          </span>
        </button>

        {/* Close Book Cover Button */}
        {isOpen && (
          <button
            onClick={onCloseBook}
            className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-lg bg-red-950/40 hover:bg-red-900/60 border border-red-500/30 text-red-200 transition-all active:scale-95 cursor-pointer shadow-xs"
            title="Close Book Cover"
          >
            <RotateCcw size={12} className="shrink-0" />
            <span className="hidden sm:inline font-semibold text-[11px] sm:text-xs">COVER</span>
          </button>
        )}
      </div>
    </header>
  );
}
