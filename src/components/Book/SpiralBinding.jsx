import React from 'react';

export function SpiralBinding({ count = 18, position = 'left' }) {
  const isCenter = position === 'center';
  const rings = Array.from({ length: count }, (_, i) => i);

  return (
    <div
      className={`absolute top-0 bottom-0 flex flex-col justify-around py-4 z-40 pointer-events-none ${
        isCenter ? 'left-1/2 -translate-x-1/2 w-8' : 'left-0 -translate-x-1/2 w-8'
      }`}
    >
      {rings.map((ring) => (
        <div key={ring} className="relative flex items-center justify-center h-4 w-full">
          {/* Left Hole Punch */}
          <div className="absolute left-1 w-2.5 h-2.5 rounded-full hole-punch"></div>
          
          {/* Right Hole Punch (for center spread) */}
          {isCenter && (
            <div className="absolute right-1 w-2.5 h-2.5 rounded-full hole-punch"></div>
          )}

          {/* Wire Ring Metallic Loop */}
          <div className="w-7 h-2 rounded-full spiral-ring transform -rotate-12 border border-zinc-500/40"></div>
        </div>
      ))}
    </div>
  );
}
