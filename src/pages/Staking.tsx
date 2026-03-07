import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Coins,
  Shield,
  ArrowLeft,
  AlertTriangle,
  Trophy,
  Percent,
  Lock,
} from "lucide-react";
import StarField from "@/components/StarField";

const steps = [
  {
    step: "1",
    title: "Stake SOL to Enter",
    description:
      "Every player stakes 0.001 SOL to join a match. A unique reference keypair is generated for server-side verification of your transaction.",
  },
  {
    step: "2",
    title: "Escrow Vault Holds Funds",
    description:
      "Staked SOL is sent to the ItsU main wallet and recorded with a reference key. The backend verifies the on-chain transaction signature before allowing you to join the matchmaking queue.",
  },
  {
    step: "3",
    title: "Play and Survive",
    description:
      "Once matched, play through Chat, Night, and Vote phases. If you die (either killed at night or voted out), your staked SOL is permanently forfeited to the pot.",
  },
  {
    step: "4",
    title: "Winner Takes the Pot",
    description:
      "When the game ends, a 2% protocol fee is deducted. The remaining pot is split evenly among the winning team — either surviving Citizens or the Killers if they outnumber Citizens.",
  },
];

export default function Staking() {
  return (
    <div className="pt-24 pb-16 relative">
      <StarField count={25} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight mb-4">
            SOL <span className="gradient-text">Staking</span>
          </h1>
          <p className="text-xl text-text-secondary">
            How the entry fee, escrow, and payout system works in ItsU.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {[
            { icon: Coins, label: "Entry Fee", value: "0.001 SOL", color: "#14F195" },
            { icon: Percent, label: "Protocol Fee", value: "2%", color: "#D946EF" },
            { icon: Trophy, label: "Payout", value: "Even Split", color: "#FACC15" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-strong rounded-2xl p-5 text-center border-game"
            >
              <stat.icon size={28} className="mx-auto mb-2" style={{ color: stat.color }} />
              <div className="text-[10px] font-black uppercase tracking-widest text-text-muted mb-1">
                {stat.label}
              </div>
              <div className="text-xl font-black text-white">{stat.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-3xl p-8 border-game mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Lock size={24} className="text-primary" />
            <h2 className="text-2xl font-black text-white uppercase">How Staking Works</h2>
          </div>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 border-2 border-primary/30 flex items-center justify-center shrink-0">
                  <span className="text-sm font-black text-primary">{step.step}</span>
                </div>
                <div>
                  <h3 className="font-black text-white uppercase tracking-wide mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Security */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card rounded-3xl p-8 border-game mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Shield size={24} className="text-blue-400" />
            <h2 className="text-2xl font-black text-white uppercase">On-Chain Verification</h2>
          </div>
          <p className="text-text-secondary leading-relaxed mb-4">
            ItsU uses Solana's blockchain for transparent and verifiable staking:
          </p>
          <ul className="space-y-2">
            {[
              "Each stake generates a unique reference Keypair for tracking",
              "Transaction intent is recorded in the database before the on-chain transfer",
              "The backend verifies the Solana transaction signature before joining the queue",
              "The Anchor program manages the escrow vault on-chain",
              "All transactions are publicly visible on the Solana blockchain",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Warning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-red-500/10 rounded-2xl p-6 border-2 border-red-500/30 flex gap-4"
        >
          <AlertTriangle size={24} className="text-red-400 shrink-0 mt-1" />
          <div>
            <h3 className="font-black text-red-400 uppercase mb-1">Risk Warning</h3>
            <p className="text-sm text-red-200/70 leading-relaxed">
              If you are killed during a game, your staked SOL is permanently forfeited to
              the survivors' pot. If you abandon an active game, you may lose your stake.
              Only stake what you can afford to lose. ItsU is currently on Solana Devnet.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
