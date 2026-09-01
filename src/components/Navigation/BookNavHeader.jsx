import React from 'react';
import { Volume2, VolumeX, BookOpen, FileText, List, BookMarked, RotateCcw } from 'lucide-react';

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
    <header className="w-full max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3 text-white z-30 select-none">
      {/* Left Logo / Branding */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-marker text-lg">
          E
        </div>
        <div>
          <h1 className="font-marker text-lg text-amber-100 leading-tight">
            EYUEL KASSAHUN
          </h1>
          <p className="font-mono text-[10px] text-amber-300/80 tracking-wider">
            ENGINEERING NOTEBOOK
          </p>
        </div>
      </div>

      {/* Right Controls Row */}
      <div className="flex items-center gap-2 font-ui text-xs">
        {/* Table of Contents Button */}
        {isOpen && (
          <button
            onClick={onOpenContents}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 active:scale-95 border border-white/15 text-white transition-all cursor-pointer shadow-xs"
            title="Open Table of Contents"
          >
            <List size={14} className="text-amber-400" />
            <span className="hidden sm:inline font-semibold">CONTENTS</span>
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
                <FileText size={14} className="text-sky-400" />
                <span className="font-semibold">1-PAGE MODE</span>
              </>
            ) : (
              <>
                <BookOpen size={14} className="text-sky-400" />
                <span className="font-semibold">2-PAGE SPREAD</span>
              </>
            )}
          </button>
        )}

        {/* Sound Toggle Button */}
        <button
          onClick={onToggleSound}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all active:scale-95 cursor-pointer shadow-xs ${
            soundEnabled
              ? 'bg-amber-400/20 text-amber-300 border-amber-400/50'
              : 'bg-white/10 text-zinc-400 border-white/15 hover:text-white'
          }`}
          title={soundEnabled ? 'Disable Paper Sound Effects' : 'Enable Paper Sound Effects (Synthesized)'}
        >
          {soundEnabled ? <Volume2 size={14} className="text-amber-400" /> : <VolumeX size={14} />}
          <span className="font-mono text-[11px] font-bold">
            {soundEnabled ? 'SOUND: ON' : 'SOUND: OFF'}
          </span>
        </button>

        {/* Close Book Cover Button */}
        {isOpen && (
          <button
            onClick={onCloseBook}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-950/40 hover:bg-red-900/60 border border-red-500/30 text-red-200 transition-all active:scale-95 cursor-pointer shadow-xs"
            title="Close Book"
          >
            <RotateCcw size={13} />
            <span className="hidden sm:inline font-semibold">CLOSE</span>
          </button>
        )}
      </div>
    </header>
  );
}
