import React from 'react';

// Go Gopher Mascot Doodle (Inspired by reference image)
export function GoGopherDoodle({ className = 'w-14 h-16' }) {
  return (
    <svg viewBox="0 0 100 120" className={`inline-block ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <path
        d="M20 50C20 28 35 15 50 15C65 15 80 28 80 50V90C80 102 68 108 50 108C32 108 20 102 20 90V50Z"
        fill="#72D4F6"
        stroke="#1E293B"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Ears */}
      <circle cx="20" cy="28" r="9" fill="#72D4F6" stroke="#1E293B" strokeWidth="3" />
      <circle cx="20" cy="28" r="4.5" fill="#FCE7F3" />
      <circle cx="80" cy="28" r="9" fill="#72D4F6" stroke="#1E293B" strokeWidth="3" />
      <circle cx="80" cy="28" r="4.5" fill="#FCE7F3" />
      {/* Big Eyes */}
      <circle cx="38" cy="45" r="12" fill="white" stroke="#1E293B" strokeWidth="3" />
      <circle cx="41" cy="45" r="5" fill="#0F172A" />
      <circle cx="43" cy="43" r="1.5" fill="white" />
      
      <circle cx="62" cy="45" r="12" fill="white" stroke="#1E293B" strokeWidth="3" />
      <circle cx="65" cy="45" r="5" fill="#0F172A" />
      <circle cx="67" cy="43" r="1.5" fill="white" />
      {/* Snout & Nose */}
      <ellipse cx="50" cy="58" rx="8" ry="5.5" fill="#E2E8F0" stroke="#1E293B" strokeWidth="2.5" />
      <ellipse cx="50" cy="56" rx="4.5" ry="3" fill="#0F172A" />
      {/* Teeth */}
      <rect x="46" y="63" width="4" height="6" rx="1" fill="white" stroke="#1E293B" strokeWidth="2" />
      <rect x="50" y="63" width="4" height="6" rx="1" fill="white" stroke="#1E293B" strokeWidth="2" />
      {/* Paws */}
      <ellipse cx="22" cy="75" rx="5" ry="7" fill="#72D4F6" stroke="#1E293B" strokeWidth="2.5" />
      <ellipse cx="78" cy="75" rx="5" ry="7" fill="#72D4F6" stroke="#1E293B" strokeWidth="2.5" />
      {/* Feet */}
      <ellipse cx="32" cy="106" rx="9" ry="5" fill="#72D4F6" stroke="#1E293B" strokeWidth="2.5" />
      <ellipse cx="68" cy="106" rx="9" ry="5" fill="#72D4F6" stroke="#1E293B" strokeWidth="2.5" />
    </svg>
  );
}

// Coffee Cup Doodle with Steam
export function CoffeeCupDoodle({ label = 'CODE', className = 'w-10 h-10' }) {
  return (
    <svg viewBox="0 0 80 80" className={`inline-block ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Steam lines */}
      <path d="M30 18C28 14 34 10 32 6" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M40 16C38 12 44 8 42 4" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M50 18C48 14 54 10 52 6" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" />
      {/* Cup Body */}
      <path d="M20 25H60V55C60 63 52 68 40 68C28 68 20 63 20 55V25Z" fill="#F8FAFC" stroke="#1E293B" strokeWidth="3" />
      {/* Handle */}
      <path d="M60 32C68 32 72 38 72 45C72 52 66 56 60 56" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
      {/* Saucer */}
      <path d="M12 70C25 74 55 74 68 70" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
      {/* Text label */}
      <text x="40" y="48" textAnchor="middle" fill="#0284C7" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
        {label}
      </text>
    </svg>
  );
}

// Hand-Drawn Laptop Doodle
export function LaptopDoodle({ className = 'w-12 h-10' }) {
  return (
    <svg viewBox="0 0 90 70" className={`inline-block ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Screen */}
      <rect x="15" y="10" width="60" height="42" rx="3" fill="#38BDF8" stroke="#1E293B" strokeWidth="3" />
      <rect x="20" y="14" width="50" height="34" rx="2" fill="#0F172A" />
      <text x="45" y="36" textAnchor="middle" fill="#38BDF8" fontSize="13" fontWeight="bold" fontFamily="monospace">
        &lt;/&gt;
      </text>
      {/* Base */}
      <path d="M5 54H85L78 62H12L5 54Z" fill="#CBD5E1" stroke="#1E293B" strokeWidth="3" strokeLinejoin="round" />
      <line x1="40" y1="58" x2="50" y2="58" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Lightbulb Idea Doodle
export function LightbulbDoodle({ className = 'w-8 h-8' }) {
  return (
    <svg viewBox="0 0 60 70" className={`inline-block ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Rays */}
      <line x1="30" y1="4" x2="30" y2="10" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="12" y1="14" x2="17" y2="19" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="48" y1="14" x2="43" y2="19" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="6" y1="32" x2="12" y2="32" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="54" y1="32" x2="48" y2="32" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
      {/* Bulb Glass */}
      <path
        d="M20 42C15 36 14 27 18 20C22 13 38 13 42 20C46 27 45 36 40 42L37 49H23L20 42Z"
        fill="#FEF08A"
        stroke="#1E293B"
        strokeWidth="3"
      />
      {/* Filament */}
      <path d="M26 34L28 26L32 30L34 26" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
      {/* Base & Contact */}
      <line x1="24" y1="53" x2="36" y2="53" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
      <path d="M26 56C26 59 34 59 34 56" stroke="#1E293B" strokeWidth="2.5" />
    </svg>
  );
}

// Hand-Drawn Arrow
export function HandDrawnArrow({ className = 'w-10 h-6', direction = 'right', color = '#0284C7' }) {
  const rotation = direction === 'down' ? 'rotate-90' : direction === 'left' ? 'rotate-180' : direction === 'up' ? '-rotate-90' : '';
  return (
    <svg viewBox="0 0 60 30" className={`inline-block ${className} ${rotation}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 16C18 13 32 17 48 14M48 14L38 7M48 14L37 23"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Hand-Drawn Plug & Socket Analogy (Directly from reference image)
export function PlugSocketDoodle({ className = 'w-48 h-20' }) {
  return (
    <svg viewBox="0 0 200 80" className={`inline-block ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Wall Socket */}
      <rect x="10" y="15" width="48" height="50" rx="6" fill="#F8FAFC" stroke="#1E293B" strokeWidth="2.5" />
      <circle cx="34" cy="40" r="16" fill="white" stroke="#1E293B" strokeWidth="2" strokeDasharray="3 3" />
      <circle cx="28" cy="40" r="3" fill="#1E293B" />
      <circle cx="40" cy="40" r="3" fill="#1E293B" />
      {/* Dashed Connection Arrows */}
      <path d="M68 40C85 30 100 30 115 40" stroke="#0284C7" strokeWidth="2" strokeDasharray="3 3" strokeLinecap="round" />
      <path d="M68 44C85 54 100 54 115 44" stroke="#0284C7" strokeWidth="2" strokeDasharray="3 3" strokeLinecap="round" />
      {/* 3 Plugs fitting into the socket */}
      <g transform="translate(125, 18)">
        <rect x="0" y="10" width="16" height="24" rx="3" fill="#475569" stroke="#1E293B" strokeWidth="2" />
        <line x1="-5" y1="16" x2="0" y2="16" stroke="#1E293B" strokeWidth="2.5" />
        <line x1="-5" y1="28" x2="0" y2="28" stroke="#1E293B" strokeWidth="2.5" />
        <path d="M16 22C24 22 28 26 32 30" stroke="#1E293B" strokeWidth="2" />
      </g>
      <g transform="translate(155, 18)">
        <rect x="0" y="10" width="16" height="24" rx="3" fill="#0284C7" stroke="#1E293B" strokeWidth="2" />
        <line x1="-5" y1="16" x2="0" y2="16" stroke="#1E293B" strokeWidth="2.5" />
        <line x1="-5" y1="28" x2="0" y2="28" stroke="#1E293B" strokeWidth="2.5" />
        <path d="M16 22C24 22 28 26 32 30" stroke="#1E293B" strokeWidth="2" />
      </g>
    </svg>
  );
}

// Subtle Ethiopian Decorative Cross Knot Motif
export function EthiopianMotif({ className = 'w-8 h-8', color = '#0284C7' }) {
  return (
    <svg viewBox="0 0 60 60" className={`inline-block ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="22" y="5" width="16" height="50" rx="3" stroke={color} strokeWidth="2.5" />
      <rect x="5" y="22" width="50" height="16" rx="3" stroke={color} strokeWidth="2.5" />
      <circle cx="30" cy="30" r="5" fill={color} />
      <circle cx="30" cy="12" r="3" fill={color} />
      <circle cx="30" cy="48" r="3" fill={color} />
      <circle cx="12" cy="30" r="3" fill={color} />
      <circle cx="48" cy="30" r="3" fill={color} />
    </svg>
  );
}
