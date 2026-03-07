import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Map } from "lucide-react";
import RoadmapTimeline from "@/components/RoadmapTimeline";
import StarField from "@/components/StarField";

export default function Roadmap() {
  return (
    <div className="pt-24 pb-16 relative">
      <StarField count={20} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Map size={28} className="text-accent" />
            <span className="text-xs font-black uppercase tracking-widest text-accent">
              Development Roadmap
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight mb-4">
            The <span className="gradient-text">Journey</span>
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            From a game concept to a full social deduction platform with AI bots,
            Solana staking, and a growing community.
          </p>
        </motion.div>

        <RoadmapTimeline />
      </div>
    </div>
  );
}
