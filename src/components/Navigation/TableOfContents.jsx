import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { X, BookOpen, ChevronRight, Bookmark } from 'lucide-react';

export function TableOfContents({ isOpen, onClose, onSelectPage, currentPage }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Handwritten Notebook Index Drawer */}
      <div className="relative w-full max-w-lg bg-[#FAF7EE] paper-ruled border-4 border-zinc-800 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 max-h-[85vh] flex flex-col justify-between overflow-hidden">
        {/* Washi Tape Accent */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 washi-tape rotate-[1deg]"></div>

        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-dashed border-sky-400 pb-3">
          <div className="flex items-center gap-2">
            <Bookmark size={20} className="text-sky-600" />
            <h3 className="font-marker text-2xl text-zinc-900">
              TABLE OF CONTENTS
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-zinc-200 hover:bg-zinc-300 active:scale-95 flex items-center justify-center text-zinc-700 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Index List */}
        <div className="my-4 overflow-y-auto notebook-scroll pr-1 space-y-1.5 max-h-[55vh]">
          {portfolioData.tableOfContents.map((item) => {
            const isCurrent = currentPage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => onSelectPage(item.page)}
                className={`w-full text-left p-2.5 rounded-lg border transition-all flex items-center justify-between group cursor-pointer ${
                  isCurrent
                    ? 'bg-sky-100 border-sky-400 shadow-xs translate-x-1'
                    : 'bg-white/70 border-zinc-200/80 hover:bg-white hover:border-zinc-400 hover:translate-x-1'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-300">
                    {String(item.page).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="font-hand text-base font-bold text-zinc-900 group-hover:text-sky-700 transition-colors">
                      {item.title}
                    </p>
                    <p className="font-script text-xs text-zinc-500">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  {isCurrent && (
                    <span className="font-script text-xs text-sky-700 font-bold mr-1">
                      (Reading)
                    </span>
                  )}
                  <ChevronRight
                    size={16}
                    className="text-zinc-400 group-hover:text-zinc-800 group-hover:translate-x-0.5 transition-transform"
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-dashed border-zinc-300 flex items-center justify-between text-xs font-hand text-zinc-500">
          <span>Click any entry to flip directly</span>
          <span className="font-mono text-zinc-700 font-bold">12 PAGES TOTAL</span>
        </div>
      </div>
    </div>
  );
}
