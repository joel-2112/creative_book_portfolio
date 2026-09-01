import React from 'react';

export function PhotoTape({
  src,
  alt = 'Photo',
  caption = '',
  rotation = '2deg',
  tapeColor = 'cyan', // 'cyan' | 'yellow' | 'rose' | 'translucent'
  className = '',
  imgClassName = '',
  aspectRatio = 'aspect-4/3'
}) {
  const tapeColorMap = {
    cyan: 'washi-tape-cyan',
    yellow: 'washi-tape',
    rose: 'washi-tape-rose',
    translucent: 'washi-tape-translucent'
  };

  return (
    <div
      className={`relative bg-white p-3 pb-4 rounded-sm shadow-md border border-zinc-200/80 transition-transform duration-200 hover:rotate-0 hover:scale-[1.01] ${className}`}
      style={{ transform: `rotate(${rotation})` }}
    >
      {/* Top Washi Tape */}
      <div 
        className={`absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 ${tapeColorMap[tapeColor] || 'washi-tape'} rotate-[-1deg] z-20`}
      ></div>

      {/* Image Container */}
      <div className={`w-full bg-zinc-100 overflow-hidden rounded-xs border border-zinc-200/50 ${aspectRatio} flex items-center justify-center`}>
        {src ? (
          <img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover object-[center_18%] contrast-105 hover:contrast-100 transition-all ${imgClassName}`}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-zinc-400">
            <span className="text-3xl mb-1">📷</span>
            <span className="text-xs font-hand">Eyuel Kassahun</span>
          </div>
        )}
      </div>

      {/* Handwritten Polaroid Caption */}
      {caption && (
        <div className="mt-2.5 text-center font-script text-zinc-700 text-sm font-semibold tracking-wide">
          {caption}
        </div>
      )}
    </div>
  );
}
