import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, HelpCircle } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

const faqItems = [
  {
    question: "What is ItsU?",
    answer:
      "ItsU is a real-time, role-based social deduction game for mobile. Each game session assigns a secret item to Citizens and a hint to the Killers. Players must chat strategically, deduce who knows the item and who is faking it, then vote to eliminate the Killers before they eliminate all Citizens.",
  },
  {
    question: "How do I start playing?",
    answer:
      "Download the ItsU mobile app, create an account with JWT authentication, and you're ready to go. You can start a Practice game (free, against AI bots) to learn the mechanics, or stake 0.001 SOL to enter a real match.",
  },
  {
    question: "What are the game roles?",
    answer:
      "There are two roles: Citizens (the innocent majority who know the secret item) and Killers/Wolves (the hidden minority who only know the hint). Citizens must identify and vote out the Killers. Killers must blend in and eliminate Citizens at night.",
  },
  {
    question: "What are the game phases?",
    answer:
      "Each round has three phases: Day Phase (chat and discuss), Night Phase (Killer secretly picks a victim), and Vote Phase (all players vote to eliminate a suspect). The game continues until either all Killers are voted out or Killers outnumber Citizens.",
  },
  {
    question: "How does the item/hint system work?",
    answer:
      "Each game generates a random secret item (e.g. \"golden compass\") and a hint (e.g. \"navigation tool\"). Citizens are told the item; Killers only get the hint. During chat, players ask questions and analyze answers to figure out who truly knows the item.",
  },
  {
    question: "How does staking work?",
    answer:
      "To enter a real match, you stake 0.001 SOL. The SOL is sent to the ItsU main wallet with a reference keypair for verification. When the game ends, a 2% protocol fee is deducted, and the remaining pot is split evenly among the winning team.",
  },
  {
    question: "What happens if I die in a game?",
    answer:
      "If you are killed at night or voted out, your staked SOL is forfeited to the survivors' pot. You become a spectator and can watch the remaining players. Your role is revealed when you die.",
  },
  {
    question: "Are the AI bots hard to beat?",
    answer:
      "AI bots are powered by Groq's LLaMA 3.1 8B Instant model. They analyze game context to make chat, vote, and kill decisions autonomously. They're designed to behave like real human players, making every game unpredictable and challenging.",
  },
  {
    question: "Can I play without staking SOL?",
    answer:
      "Yes! Practice mode lets you play full games against AI bots with zero risk. It's the same gameplay but without any SOL entry fee. Perfect for learning strategies.",
  },
  {
    question: "What blockchain does ItsU use?",
    answer:
      "ItsU is built on Solana for fast transactions and low fees. The on-chain escrow vault is implemented as an Anchor program. The game is currently live on Solana Devnet.",
  },
  {
    question: "How does matchmaking work?",
    answer:
      "A MatchMaker worker on the backend automatically creates game lobbies and fills empty player slots with AI bots. Once enough players join (or the lobby timer expires), the game starts automatically with a mix of real players and bots.",
  },
  {
    question: "Is there a leaderboard?",
    answer:
      "Currently, ItsU tracks your total wins and total SOL won on your profile stats. A full leaderboard and ranking system is on the roadmap for Phase 3.",
  },
];

export default function FAQ() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <HelpCircle size={28} className="text-accent" />
            <span className="text-xs font-black uppercase tracking-widest text-accent">
              FAQ
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-text-secondary">
            Everything you need to know about ItsU.
          </p>
        </motion.div>

        <FAQAccordion items={faqItems} />
      </div>
    </div>
  );
}
