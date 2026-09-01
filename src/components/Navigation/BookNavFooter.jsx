import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function BookNavFooter({
  currentPage,
  totalPages,
  onPrevPage,
  onNextPage,
  canPrev,
  canNext,
  isOpen
}) {
  if (!isOpen) return null;

  return (
    <footer className="w-full max-w-4xl mx-auto px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between gap-2 text-white z-30 select-none">
      {/* Previous Page Button */}
      <button
        onClick={onPrevPage}
        disabled={!canPrev}
        className={`flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl font-ui font-bold text-xs sm:text-sm border transition-all cursor-pointer shadow-md active:scale-95 shrink-0 ${
          canPrev
            ? 'bg-white/15 hover:bg-white/25 border-white/20 text-white'
            : 'bg-white/5 border-white/5 text-zinc-600 cursor-not-allowed opacity-40'
        }`}
      >
        <ChevronLeft size={15} />
        <span className="hidden xs:inline">PREV</span>
      </button>

      {/* Center Page Number & Keyboard / Drag Hint */}
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center gap-1.5 sm:gap-2 font-mono text-[11px] sm:text-xs md:text-sm font-bold text-amber-300 bg-black/50 px-3 sm:px-3.5 py-0.5 sm:py-1 rounded-full border border-white/10 shadow-xs">
          <span>PAGE {String(currentPage).padStart(2, '0')}</span>
          <span className="text-zinc-500">/</span>
          <span className="text-zinc-400">{String(totalPages).padStart(2, '0')}</span>
        </div>

        <p className="hidden md:flex items-center gap-1 text-[10px] font-hand text-zinc-400 mt-0.5">
          <span>Arrow keys ← → or drag corners to flip</span>
        </p>
      </div>

      {/* Next Page Button */}
      <button
        onClick={onNextPage}
        disabled={!canNext}
        className={`flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl font-ui font-bold text-xs sm:text-sm border transition-all cursor-pointer shadow-md active:scale-95 shrink-0 ${
          canNext
            ? 'bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 border-amber-300 text-zinc-950 shadow-amber-500/10'
            : 'bg-white/5 border-white/5 text-zinc-600 cursor-not-allowed opacity-40'
        }`}
      >
        <span className="hidden xs:inline">NEXT</span>
        <ChevronRight size={15} />
      </button>
    </footer>
  );
}
