"use client";

export default function BeWellLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Be Well"
    >
      <defs>
        <linearGradient id="bw-grad" x1="0" y1="0" x2="120" y2="52" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D4267E" />
          <stop offset="100%" stopColor="#E84B93" />
        </linearGradient>
      </defs>
      <rect width="120" height="52" rx="6" fill="url(#bw-grad)" />
      <text x="10" y="24" fill="white" fontFamily="Zain, sans-serif" fontWeight="900" fontSize="17" letterSpacing="0.5">BE</text>
      <text x="10" y="44" fill="white" fontFamily="Zain, sans-serif" fontWeight="900" fontSize="17" letterSpacing="0.5">WELL</text>
    </svg>
  );
}
