import React from 'react';

export default function Logo({ size = 40, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shield Background */}
      <path
        d="M50 5 L90 20 L90 50 Q90 80 50 95 Q10 80 10 50 L10 20 Z"
        fill="#1E40AF"
        stroke="#1E3A8A"
        strokeWidth="2"
      />

      {/* Southern Cross Stars */}
      {/* Alpha Crucis (bottom) */}
      <circle cx="50" cy="70" r="4" fill="#FDE047" />

      {/* Beta Crucis (left) */}
      <circle cx="35" cy="45" r="4" fill="#FDE047" />

      {/* Gamma Crucis (top) */}
      <circle cx="50" cy="30" r="4" fill="#FDE047" />

      {/* Delta Crucis (right) */}
      <circle cx="65" cy="45" r="4" fill="#FDE047" />

      {/* Epsilon Crucis (extra small one) */}
      <circle cx="57" cy="55" r="2.5" fill="#FDE047" />

      {/* Checkmark overlay for "test passed" concept */}
      <path
        d="M 30 48 L 42 60 L 70 35"
        stroke="#10B981"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.8"
      />

      {/* Decorative border */}
      <path
        d="M50 5 L90 20 L90 50 Q90 80 50 95 Q10 80 10 50 L10 20 Z"
        fill="none"
        stroke="#60A5FA"
        strokeWidth="1"
        opacity="0.5"
      />
    </svg>
  );
}

// Alternative simplified version for small sizes
export function LogoSimple({ size = 24, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Simplified shield */}
      <path
        d="M50 10 L85 22 L85 50 Q85 75 50 90 Q15 75 15 50 L15 22 Z"
        fill="#2563EB"
      />

      {/* Southern Cross */}
      <circle cx="50" cy="65" r="3" fill="#FBBF24" />
      <circle cx="38" cy="45" r="3" fill="#FBBF24" />
      <circle cx="50" cy="32" r="3" fill="#FBBF24" />
      <circle cx="62" cy="45" r="3" fill="#FBBF24" />
      <circle cx="55" cy="52" r="2" fill="#FBBF24" />

      {/* Check */}
      <path
        d="M 32 48 L 42 58 L 68 38"
        stroke="#10B981"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
