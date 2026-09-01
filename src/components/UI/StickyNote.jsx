import React from 'react';

export function StickyNote({
  children,
  color = 'yellow', // 'yellow' | 'cyan' | 'pink' | 'lime'
  rotation = '-1deg',
  pinned = true,
  pinColor = 'red', // 'red' | 'blue' | 'green' | 'amber'
  tape = false,
  className = ''
}) {
  const colorMap = {
    yellow: 'bg-[#FEF08A] text-[#713F12] border-[#FACC15]',
    cyan: 'bg-[#BAE6FD] text-[#0C4A6E] border-[#7DD3FC]',
    pink: 'bg-[#FCE7F3] text-[#831843] border-[#F472B6]',
    lime: 'bg-[#D9F99D] text-[#365314] border-[#A3E635]'
  };

  const pinColorMap = {
    red: 'bg-red-500 shadow-red-700/50',
    blue: 'bg-blue-500 shadow-blue-700/50',
    green: 'bg-emerald-500 shadow-emerald-700/50',
    amber: 'bg-amber-500 shadow-amber-700/50'
  };

  return (
    <div
      className={`sticky-note relative p-4 rounded-sm border sticky-shadow transition-transform duration-200 hover:rotate-0 hover:scale-[1.02] ${
        colorMap[color] || colorMap.yellow
      } ${className}`}
      style={{ transform: `rotate(${rotation})` }}
    >
      {/* Push Pin */}
      {pinned && !tape && (
        <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
          <div className={`w-3.5 h-3.5 rounded-full shadow-md ${pinColorMap[pinColor] || pinColorMap.red}`}></div>
          <div className="w-[1.5px] h-2 bg-zinc-600 shadow-xs"></div>
        </div>
      )}

      {/* Washi Tape alternative */}
      {tape && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 washi-tape rotate-[-2deg] z-10"></div>
      )}

      {/* Note Content */}
      <div className="font-script text-base leading-snug">
        {children}
      </div>

      {/* Bottom corner fold accent */}
      <div className="absolute bottom-0 right-0 w-3 h-3 bg-black/5 rounded-tl-sm pointer-events-none"></div>
    </div>
  );
}
