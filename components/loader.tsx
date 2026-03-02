"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

interface LoaderProps {
  onComplete: () => void;
}

const EASE = [0.85, 0, 0.15, 1] as const;
const DURATION = 2.5;

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mql.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return prefersReducedMotion;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [fontReady, setFontReady] = useState(false);
  const controls = useAnimation();
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(() => setFontReady(true));
    } else {
      setFontReady(true);
    }
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    if (!fontReady) return;

    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const p = Math.min(elapsed / (DURATION * 1000), 1);
      setProgress(p);
      if (p < 1) {
        requestAnimationFrame(tick);
      }
    };
    requestAnimationFrame(tick);

    const timer = setTimeout(async () => {
      await controls.start({
        y: "-100%",
        transition: { duration: 0.8, ease: EASE },
      });
      onComplete();
    }, DURATION * 1000 + 200);

    return () => clearTimeout(timer);
  }, [controls, onComplete, prefersReducedMotion, fontReady]);

  if (prefersReducedMotion) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{ background: "#0B101E" }}
      animate={controls}
    >
      <div className="flex flex-col items-center gap-6">
        <motion.img
          src="/images/zain-logo.png"
          alt="Zain"
          className="h-14 sm:h-20 w-auto"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
        />

        <motion.div
          className="w-12 h-px bg-white/15"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.4, ease: EASE, delay: 0.5 }}
          aria-hidden="true"
        />

        <motion.span
          className="text-4xl sm:text-5xl font-bold tracking-tight"
          style={{ color: "#E40068", fontFamily: "'Zain', sans-serif" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.65 }}
        >
          BE WELL
        </motion.span>
      </div>

      <div className="fixed bottom-0 left-0 right-0 h-[2px] bg-white/5">
        <motion.div
          className="h-full origin-left"
          role="progressbar"
          aria-valuenow={Math.round(progress * 100)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Loading progress"
          style={{
            background: "#E40068",
            transform: `scaleX(${progress})`,
          }}
        />
      </div>
    </motion.div>
  );
}
