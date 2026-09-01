import React from 'react';
import { useCustomCursor } from '../../hooks/useCustomCursor';

export function CustomCursor() {
  const { position, isHovering, isClicking, isVisible, isTouchDevice } = useCustomCursor();

  if (isTouchDevice || !isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      {/* Pencil Tip Indicator & Sketch Needle */}
      <div 
        className={`relative -top-6 -left-1 transition-all duration-150 ${
          isHovering ? 'scale-110 -rotate-12' : 'rotate-[-35deg]'
        } ${isClicking ? 'scale-90 translate-y-1' : ''}`}
      >
        {/* Yellow Wooden Pencil */}
        <div className="w-4 h-10 flex flex-col items-center drop-shadow-md">
          {/* Eraser */}
          <div className="w-3 h-2 bg-pink-400 rounded-t-sm border border-zinc-700"></div>
          {/* Metal Band */}
          <div className="w-3.5 h-1.5 bg-zinc-300 border-x border-zinc-700"></div>
          {/* Pencil Body with Hexagonal ridges */}
          <div className="w-3 h-5 bg-amber-400 border-x border-zinc-800 flex justify-between px-[1px]">
            <div className="w-[1px] h-full bg-amber-600/50"></div>
            <div className="w-[1px] h-full bg-amber-600/50"></div>
          </div>
          {/* Sharpened Wood Cone */}
          <div 
            className="w-0 h-0 border-x-[6px] border-x-transparent border-t-[8px] border-t-amber-100"
          ></div>
          {/* Graphite Lead Tip */}
          <div 
            className="w-0 h-0 border-x-[2.5px] border-x-transparent border-t-[4px] border-t-zinc-900 -mt-[1px]"
          ></div>
        </div>

        {/* Tiny ink sparkle when hovering interactive item */}
        {isHovering && (
          <span className="absolute -bottom-1 -right-2 text-[10px] animate-ping opacity-75">
            ✨
          </span>
        )}
      </div>
    </div>
  );
}
