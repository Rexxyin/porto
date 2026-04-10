"use client";

import { motion } from "motion/react";

export function OrbCore() {
  return (
    <div className="relative size-24 overflow-hidden rounded-full border border-emerald-400/35 bg-black/30 shadow-xl ring-1 ring-border/50 ring-offset-1 ring-offset-background">
      <motion.div
        className="absolute -inset-6 rounded-full bg-[radial-gradient(circle_at_25%_20%,rgba(16,185,129,0.9),transparent_40%),radial-gradient(circle_at_75%_75%,rgba(56,189,248,0.75),transparent_45%),radial-gradient(circle_at_50%_50%,rgba(110,231,183,0.3),transparent_60%)]"
        animate={{ rotate: 360, scale: [1, 1.04, 1] }}
        transition={{ rotate: { duration: 14, repeat: Infinity, ease: "linear" }, scale: { duration: 3.2, repeat: Infinity, ease: "easeInOut" } }}
      />
      <motion.div
        className="absolute inset-3 rounded-full border border-white/25"
        animate={{ opacity: [0.25, 0.6, 0.25] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.35),transparent_28%)]" />
    </div>
  );
}
