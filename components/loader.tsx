"use client";

import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  show: boolean;
}

export default function Loader({ show }: LoaderProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: "#12192A" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="flex items-center gap-4"
            exit={{
              y: -200,
              x: -300,
              scale: 0.5,
              opacity: 0,
            }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-white text-3xl sm:text-4xl font-black tracking-tight">
              ZAIN
            </span>
            <div className="w-px h-8 bg-white/20" />
            <span
              className="text-2xl sm:text-3xl font-black tracking-tight"
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
