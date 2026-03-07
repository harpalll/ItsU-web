import { motion } from "framer-motion";
import {
  Bot,
  Coins,
  Shield,
  Zap,
  Trophy,
  Gamepad2,
  Github,
  Twitter,
  Users,
} from "lucide-react";
import Hero from "@/components/Hero";
import GamePreview from "@/components/GamePreview";
import FeatureCard from "@/components/FeatureCard";
import RoadmapTimeline from "@/components/RoadmapTimeline";
import FAQAccordion from "@/components/FAQAccordion";
import StarField from "@/components/StarField";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Bots",
    description:
      "Empty player slots are filled by intelligent AI bots powered by Groq's LLaMA 3.1 model. They chat, vote, and make kill decisions autonomously — behaving like real humans.",
    iconColor: "#FACC15",
    iconBg: "bg-yellow-500/10",
  },
  {
    icon: Coins,
    title: "SOL Staking",
    description:
      "Every player stakes 0.001 SOL to enter a match. Staked funds are held in an escrow vault. Winners split the pot (minus a 2% protocol fee). High stakes drive real strategy.",
    iconColor: "#14F195",
    iconBg: "bg-green-500/10",
  },
  {
    icon: Shield,
    title: "On-Chain Security",
    description:
      "Built on Solana with an Anchor escrow vault program. All staking transactions are verified on-chain with reference keypairs for server-side confirmation.",
    iconColor: "#60A5FA",
    iconBg: "bg-blue-500/10",
  },
  {
    icon: Zap,
    title: "Practice Mode",
    description:
      "Not ready to stake? Jump into a no-risk practice game filled with AI bots. Learn the mechanics, test strategies, and sharpen your deception skills.",
    iconColor: "#FACC15",
    iconBg: "bg-yellow-500/10",
  },
  {
    icon: Trophy,
    title: "Winner Takes All",
    description:
      "When the game ends, a 2% protocol fee is taken and the rest is split evenly among the winning team. If Citizens survive, they share the pool. If Killers dominate, they win it all.",
    iconColor: "#F59E0B",
    iconBg: "bg-amber-500/10",
  },
  {
    icon: Gamepad2,
    title: "Real-Time Multiplayer",
    description:
      "Games run in real-time via WebSocket connections. Chat, vote, and kill phases are timed. The matchmaking worker automatically creates lobbies and fills empty slots.",
    iconColor: "#D946EF",
    iconBg: "bg-accent/10",
  },
];

const faqItems = [
  {
    question: "What is ItsU?",
    answer:
      "ItsU is a real-time social deduction mobile game. Each session assigns secret roles — Citizen or Killer — and players must use chat, deduction, and voting to survive. AI bots powered by Groq fill empty slots and behave like real humans.",
  },
  {
    question: "How does staking work?",
    answer:
      "Each player stakes 0.001 SOL to enter a match. The staked funds go into an escrow pot. When the game ends, a 2% protocol fee is deducted and the remaining pot is split evenly among the winning team (either Citizens or Killers).",
  },
  {
    question: "What are the roles?",
    answer:
      "Citizens are the innocent majority who know the secret item. Their goal is to find and vote out the Killers. Killers are the hidden minority who only know the hint — they must blend in and eliminate Citizens at night.",
  },
  {
    question: "What happens if I die?",
    answer:
      "If you are killed during the night phase or voted out, your staked SOL is forfeited to the survivors' pot. You become a spectator and can watch the remaining players fight for survival.",
  },
  {
    question: "Are the AI bots real players?",
    answer:
      "AI bots are powered by Groq's LLaMA 3.1 8B Instant model. They autonomously decide what to say in chat, who to vote for, and who to kill at night. They are designed to behave like human players, making every game unpredictable.",
  },
  {
    question: "Can I play without staking?",
    answer:
      "Yes! Practice mode lets you play full games against AI bots without any SOL entry fee. It's the perfect way to learn the game mechanics and test strategies risk-free.",
  },
  {
    question: "What blockchain does ItsU use?",
    answer:
      "ItsU is built on Solana for its fast transaction speeds and low fees. The escrow vault is implemented as an Anchor program on Solana. Currently live on Solana Devnet.",
  },
  {
    question: "How does matchmaking work?",
    answer:
      "The MatchMaker worker runs on the backend, automatically creating lobbies and filling empty player slots with AI bots. Once enough players join or the lobby timer expires, the game starts automatically.",
  },
];

export default function Landing() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Game Mechanics */}
      <GamePreview />

      {/* Features */}
      <section className="py-24 relative">
        <StarField count={30} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-black uppercase tracking-widest text-accent">
              Features
            </span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight mt-2 mb-4">
              Built for{" "}
              <span className="gradient-text">Deception</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Every element of ItsU is designed to create tension, reward
              strategy, and keep you guessing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                {...feature}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Staking Highlight */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card-strong rounded-3xl p-8 md:p-12 border border-primary/20 glow-primary relative overflow-hidden"
          >
            {/* Background accent */}
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-20 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(139,92,246,0.6), transparent)",
              }}
            />

            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-primary">
                  High Stakes
                </span>
                <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mt-2 mb-4">
                  Winner{" "}
                  <span className="gradient-text-gold">Takes All</span>
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Every player stakes an entry fee in SOL. When the game ends, a
                  2% protocol fee is taken, and the rest is split evenly among
                  the winning team. If you are killed, your staked funds are
                  permanently forfeited to the survivors' pot.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="bg-surface rounded-xl px-4 py-3 border border-border">
                    <div className="text-[10px] font-black uppercase tracking-widest text-text-muted">
                      Entry Fee
                    </div>
                    <div className="text-lg font-black text-white">
                      0.001 SOL
                    </div>
                  </div>
                  <div className="bg-surface rounded-xl px-4 py-3 border border-border">
                    <div className="text-[10px] font-black uppercase tracking-widest text-text-muted">
                      Protocol Fee
                    </div>
                    <div className="text-lg font-black text-white">2%</div>
                  </div>
                  <div className="bg-surface rounded-xl px-4 py-3 border border-border">
                    <div className="text-[10px] font-black uppercase tracking-widest text-text-muted">
                      Distribution
                    </div>
                    <div className="text-lg font-black text-white">
                      Even Split
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-48 h-48 rounded-3xl bg-primary/10 border-4 border-border flex items-center justify-center shadow-[6px_6px_0_0_black]">
                  <Coins size={80} className="text-primary" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-black uppercase tracking-widest text-accent">
              Roadmap
            </span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight mt-2 mb-4">
              The <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              From concept to community — every milestone in building ItsU.
            </p>
          </motion.div>

          <RoadmapTimeline />
        </div>
      </section>

      {/* Community */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-black uppercase tracking-widest text-primary">
              Community
            </span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight mt-2 mb-4">
              Join the <span className="gradient-text">Crew</span>
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto mb-10">
              Follow development, report issues, and connect with other players.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-panel border-2 border-border hover:border-primary/50 hover:bg-primary/10 transition-all font-bold uppercase tracking-wider text-sm"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-panel border-2 border-border hover:border-accent/50 hover:bg-accent/10 transition-all font-bold uppercase tracking-wider text-sm"
              >
                <Twitter size={20} />
                Twitter
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-black uppercase tracking-widest text-accent">
              FAQ
            </span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight mt-2 mb-4">
              Questions
            </h2>
          </motion.div>

          <FAQAccordion items={faqItems} />
        </div>
      </section>
    </>
  );
}
