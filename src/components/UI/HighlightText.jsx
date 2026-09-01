import React from 'react';

export function HighlightText({ children, color = 'cyan', className = '' }) {
  const colorClass = color === 'yellow' ? 'highlight-yellow' : color === 'pink' ? 'highlight-pink' : 'highlight-cyan';
  return (
    <span className={`${colorClass} font-semibold ${className}`}>
      {children}
    </span>
  );
}
