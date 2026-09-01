import React from 'react';

export function PageStackEdge({ side = 'right', thickness = 6 }) {
  const isRight = side === 'right';

  return (
    <div
      className={`absolute top-0 bottom-0 pointer-events-none z-10 ${
        isRight ? '-right-2.5 w-3 page-stack-right' : '-left-2.5 w-3 page-stack-left'
      }`}
      style={{
        opacity: thickness > 0 ? 1 : 0.4
      }}
    >
      {/* Visual layered page ridges */}
      <div className="w-full h-full flex flex-col justify-between py-2 opacity-50">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`h-[1px] bg-zinc-400/40 w-full ${
              i % 2 === 0 ? 'opacity-80' : 'opacity-40'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
