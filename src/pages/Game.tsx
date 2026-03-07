import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users,
  Skull,
  Sun,
  Moon,
  Vote,
  MessageSquare,
  Key,
  Zap,
  Bot,
  ArrowLeft,
} from "lucide-react";
import StarField from "@/components/StarField";

export default function Game() {
  return (
    <div className="pt-24 pb-16 relative">
      <StarField count={30} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight mb-4">
            How to Play <span className="gradient-text">ItsU</span>
          </h1>
          <p className="text-xl text-text-secondary">
            A complete guide to surviving the ultimate social deduction game.
          </p>
        </motion.div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card-strong rounded-3xl p-8 mb-8 text-center"
        >
          <h2 className="text-3xl font-black text-primary uppercase mb-3" style={{ transform: "rotate(-1deg)" }}>
            Trust No One
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto">
            ItsU is a high-stakes social deduction game where players stake SOL to enter.
            Each game assigns secret roles. Players must chat strategically, deduce who
            knows the secret item (Citizens) and who only knows the hint (Killers), then
            vote to eliminate the Killers before they eliminate all Citizens.
          </p>
        </motion.div>

        {/* Roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-3xl p-8 border-game mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Key size={24} className="text-yellow-400" />
            <h2 className="text-2xl font-black text-white uppercase">The Roles</h2>
          </div>

          <div className="space-y-4">
            <div className="bg-surface rounded-xl p-5 border border-panel-light">
              <div className="flex items-center gap-2 mb-2">
                <Users size={20} color="#60A5FA" />
                <h3 className="text-lg font-bold text-blue-400 uppercase">Citizens</h3>
              </div>
              <p className="text-text-secondary leading-relaxed">
                The innocent majority. Your goal is to root out the Killers and vote them out
                before you are eliminated. Survive to the end, and the remaining Citizens split
                the staked SOL pool. Each Citizen is given the secret item.
              </p>
            </div>

            <div className="bg-red-950/40 rounded-xl p-5 border border-red-900/50">
              <div className="flex items-center gap-2 mb-2">
                <Skull size={20} color="#F43F5E" />
                <h3 className="text-lg font-bold text-red-400 uppercase">Killers (Wolves)</h3>
              </div>
              <p className="text-red-200/70 leading-relaxed">
                The hidden minority. Your goal is to blend in, deceive the Citizens, and
                eliminate them at night. If Killers outnumber Citizens, they win the entire pot.
                Killers only receive the hint, not the actual item.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Phases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card rounded-3xl p-8 border-game mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Sun size={24} className="text-orange-500" />
            <h2 className="text-2xl font-black text-white uppercase">The Phases</h2>
          </div>

          <div className="space-y-6">
            <div className="pl-4 border-l-2 border-panel-light">
              <h3 className="text-lg font-bold uppercase text-white mb-2">1. The Day Phase</h3>
              <p className="text-text-secondary leading-relaxed mb-3">
                Players use the global chat to discuss, accuse, and defend themselves.
                Analyze behavior and chat history to find inconsistencies. Ask strategic
                questions about the item to catch Killers who only know the hint.
              </p>
              <div className="flex items-center gap-2 bg-black/30 p-3 rounded-lg">
                <MessageSquare size={16} className="text-primary" />
                <span className="text-primary text-xs font-bold uppercase">
                  Chat is critical for survival
                </span>
              </div>
            </div>

            <div className="pl-4 border-l-2 border-red-500">
              <div className="flex items-center gap-2 mb-2">
                <Moon size={18} className="text-red-400" />
                <h3 className="text-lg font-bold uppercase text-red-400">2. The Night Phase</h3>
              </div>
              <p className="text-text-secondary leading-relaxed">
                Darkness falls. Chat is silent. The Killer secretly selects one Citizen to
                murder. When morning breaks, the victim is revealed, and the Vote Phase begins.
              </p>
            </div>

            <div className="pl-4 border-l-2 border-accent">
              <h3 className="text-lg font-bold uppercase text-white mb-2">3. The Voting Phase</h3>
              <p className="text-text-secondary leading-relaxed">
                At the end of the day, all surviving players vote on who they believe is the Killer.
                The player with the most votes is executed and their true role is revealed.
                If the Killer is not eliminated, the Day Phase begins again.
              </p>
            </div>
          </div>
        </motion.div>

        {/* AI Bots */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card rounded-3xl p-8 border-game mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Bot size={24} className="text-yellow-400" />
            <h2 className="text-2xl font-black text-white uppercase">AI Bots</h2>
          </div>
          <p className="text-text-secondary leading-relaxed mb-4">
            ItsU uses AI bots powered by Groq's LLaMA 3.1 8B Instant model to fill empty player
            slots. These bots are designed to behave like real humans:
          </p>
          <ul className="space-y-2">
            {[
              "They chat strategically during the Day Phase using contextual responses",
              "They vote based on game analysis — not random choices",
              "As Killers, they make intelligent kill decisions targeting the most threatening Citizens",
              "They blend in seamlessly, making every game unpredictable",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Practice Mode */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-primary/10 rounded-3xl p-8 border-2 border-primary/30 text-center"
        >
          <Zap size={32} className="text-yellow-400 mx-auto mb-3" />
          <h3 className="text-xl font-black text-white uppercase mb-2">Practice Mode</h3>
          <p className="text-text-secondary max-w-xl mx-auto">
            Not ready to stake? Jump into a no-risk practice game filled entirely with AI bots.
            Learn the mechanics, test strategies, and sharpen your deception skills before
            entering a real match.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
