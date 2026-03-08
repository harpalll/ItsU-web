import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, Download } from "lucide-react";
import StarField from "./StarField";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <StarField count={80} />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-16">
        {/* Logo badge */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
          className="inline-flex mb-8"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center rounded-2xl mt-8 glow-primary-strong">
            <img src="/images/logo.png" alt="ItsU Logo" className="w-full h-full object-contain rounded-2xl drop-shadow-2xl" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-6xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter mb-4"
        >
          <span className="gradient-text">Its</span>
          <span className="text-white">U</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl sm:text-2xl text-text-secondary font-bold uppercase tracking-widest mb-2"
        >
          Trust No One
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="text-base sm:text-lg text-text-secondary/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A high-stakes social deduction game where players stake SOL,
          AI bots blend in as real players, and deception is your only weapon of survival.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center"
        >
          <a
            href="https://drive.google.com/file/d/10zf27PEuhJHg6-Svlg1ABYpeW9loPgV6/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-primary border-b-4 border-primary-dark text-white font-black uppercase tracking-wider text-lg hover:bg-primary-hover transition-all hover:translate-y-[-2px] glow-primary"
          >
            <Download size={24} />
            Download APK (Devnet)
          </a>
          <Link
            to="/game"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-panel border-2 border-panel-light text-white font-black uppercase tracking-wider text-lg hover:bg-panel-light transition-all hover:translate-y-[-2px]"
          >
            How to Play
          </Link>
          <Link
            to="/staking"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-panel border-2 border-panel-light text-white font-black uppercase tracking-wider text-lg hover:bg-panel-light transition-all hover:translate-y-[-2px]"
          >
            Learn About Staking
          </Link>
        </motion.div>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-10 inline-flex items-center gap-2 bg-panel/60 rounded-full px-4 py-2 border border-panel-light/30"
        >
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-bold text-text-secondary uppercase tracking-widest">
            Live on Solana Devnet
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={24} className="text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
