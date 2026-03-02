"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

interface LoaderProps {
  onComplete: () => void;
}

const EASE = [0.85, 0, 0.15, 1] as const;
const DURATION = 2.5;

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
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
  }, [controls, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{ background: "#0B101E" }}
      animate={controls}
    >
      <div className="flex items-center gap-5">
        <motion.span
          className="text-white text-3xl sm:text-4xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
        >
          ZAIN
        </motion.span>
        <motion.div
          className="w-px h-10 bg-white/15"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.4, ease: EASE, delay: 0.5 }}
        />
        <motion.span
          className="text-3xl sm:text-4xl font-bold tracking-tight"
          style={{ color: "#E40068" }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.6 }}
        >
          BE WELL
        </motion.span>
      </div>

      <div className="fixed bottom-0 left-0 right-0 h-[2px] bg-white/5">
        <motion.div
          className="h-full origin-left"
          style={{
            background: "#E40068",
            transform: `scaleX(${progress})`,
          }}
        />
      </div>
    </motion.div>
  );
}
