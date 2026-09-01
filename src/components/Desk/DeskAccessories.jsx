import React, { useState } from 'react';
import { CoffeeCupDoodle } from '../UI/HandDrawnDoodles';
import { StickyNote } from '../UI/StickyNote';
import confetti from 'canvas-confetti';

export function DeskAccessories({ onOpenContact, onPencilClick }) {
  const [pencilTapped, setPencilTapped] = useState(false);

  const handlePencilTap = () => {
    setPencilTapped(true);
    if (onPencilClick) onPencilClick();
    setTimeout(() => setPencilTapped(false), 500);
  };

  const handleCoffeeClick = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { x: 0.15, y: 0.8 }
    });
  };

  return (
    <div className="hidden xl:block pointer-events-none z-20 select-none">
      {/* Left Desk: Ethiopian Yirgacheffe Coffee Mug */}
      <div 
        className="fixed left-6 bottom-16 pointer-events-auto cursor-pointer group transition-transform duration-200 hover:scale-105"
        onClick={handleCoffeeClick}
        title="Ethiopian Coffee (Yirgacheffe) — Click for a spark!"
      >
        <div className="p-3 bg-white/5 backdrop-blur-xs border border-white/10 rounded-2xl shadow-xl flex flex-col items-center">
          <CoffeeCupDoodle label="ETHIO" className="w-14 h-14" />
          <span className="font-script text-xs text-amber-300 mt-1 font-bold">
            ☕ Yirgacheffe Brew
          </span>
          <span className="text-[10px] font-mono text-zinc-400">
            Click me!
          </span>
        </div>
      </div>

      {/* Left Desk: Quick Contact Sticky Note */}
      <div className="fixed left-6 top-24 pointer-events-auto w-52">
        <StickyNote color="yellow" rotation="-3deg" pinned={true} pinColor="red">
          <p className="font-bold text-amber-950 text-xs">📌 QUICK NOTE:</p>
          <p className="text-xs text-amber-900 mt-1 leading-snug">
            "Available for full-stack, distributed backend & Go contract roles."
          </p>
          <div className="mt-2 pt-1 border-t border-amber-300/80 flex items-center justify-between text-[11px] font-mono font-bold text-amber-800">
            <span>Addis Ababa, ET</span>
            <span className="text-emerald-600">● Open</span>
          </div>
        </StickyNote>
      </div>

      {/* Right Desk: Interactive Wooden Pencil */}
      <div
        className="fixed right-8 top-32 pointer-events-auto cursor-pointer"
        onClick={handlePencilTap}
        title="Click to sharpen pencil!"
      >
        <div
          className={`transition-transform duration-300 ${
            pencilTapped ? 'rotate-[45deg] scale-110' : 'rotate-[25deg] hover:rotate-[30deg]'
          }`}
        >
          {/* Detailed 2D Desk Pencil */}
          <div className="w-5 h-44 flex flex-col items-center drop-shadow-xl">
            {/* Pink Eraser */}
            <div className="w-4 h-5 bg-pink-400 rounded-t-sm border border-zinc-700"></div>
            {/* Metal Ferrule */}
            <div className="w-4.5 h-3 bg-gradient-to-r from-zinc-400 via-zinc-200 to-zinc-400 border-x border-zinc-700"></div>
            {/* Yellow Body with branding */}
            <div className="w-4 h-28 bg-amber-400 border-x border-zinc-800 flex flex-col justify-between py-2 items-center">
              <span className="text-[8px] font-mono font-bold text-zinc-800 rotate-90 whitespace-nowrap">
                HB 2 • EYUEL
              </span>
            </div>
            {/* Sharpened Wood Cone */}
            <div className="w-0 h-0 border-x-[8px] border-x-transparent border-t-[14px] border-t-amber-100"></div>
            {/* Graphite Tip */}
            <div className="w-0 h-0 border-x-[3px] border-x-transparent border-t-[6px] border-t-zinc-950 -mt-[1px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
