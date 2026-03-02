"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface LoaderProps {
  show: boolean;
  onComplete?: () => void;
}

export default function Loader({ show, onComplete }: LoaderProps) {
  const [phase, setPhase] = useState<"center" | "morph">("center");

  useEffect(() => {
    if (show) {
      const morphTimer = setTimeout(() => setPhase("morph"), 1200);
      return () => clearTimeout(morphTimer);
    }
  }, [show]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100]"
          style={{ background: "#12192A" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <motion.div
            className="flex items-center gap-3"
            initial={{ position: "fixed", top: "50%", left: "50%", x: "-50%", y: "-50%" }}
            animate={
              phase === "morph"
                ? {
                    position: "fixed",
                    top: "24px",
                    left: "20px",
                    x: "0%",
                    y: "0%",
                    scale: 0.65,
                  }
                : {
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    x: "-50%",
                    y: "-50%",
                    scale: 1,
                  }
            }
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-white text-3xl sm:text-4xl font-black tracking-tight whitespace-nowrap">
              ZAIN
            </span>
            <div className="w-px h-8 bg-white/20" />
            <span
              className="text-2xl sm:text-3xl font-black tracking-tight whitespace-nowrap"
              style={{ color: "#E40068" }}
            >
              BE WELL
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
