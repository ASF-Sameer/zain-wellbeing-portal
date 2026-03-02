"use client";

export default function BeWellLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Be Well"
    >
      <defs>
        <linearGradient id="bw-grad" x1="0" y1="0" x2="100" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D4267E" />
          <stop offset="100%" stopColor="#E84B93" />
        </linearGradient>
      </defs>
      <rect width="100" height="44" rx="5" fill="url(#bw-grad)" />
      <text x="8" y="20" fill="white" fontFamily="Zain, sans-serif" fontWeight="900" fontSize="14">BE</text>
      <text x="8" y="37" fill="white" fontFamily="Zain, sans-serif" fontWeight="900" fontSize="14">WELL</text>
    </svg>
  );
}
