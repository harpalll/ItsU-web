import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";

export default function Terms() {
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
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <FileText size={28} className="text-primary" />
            <span className="text-xs font-black uppercase tracking-widest text-primary">Legal</span>
          </div>
          <h1 className="text-4xl font-black uppercase tracking-tight mb-2">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="text-sm text-text-muted">Last updated: March 2026</p>
        </motion.div>

        <div className="space-y-8">
          <section className="glass-card rounded-2xl p-6">
            <h2 className="text-lg font-black text-white uppercase mb-3">1. Acceptance of Terms</h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              By accessing or using ItsU (the "Service"), you agree to be bound by these Terms
              of Service. ItsU is a social deduction game that integrates with the Solana
              blockchain for staking functionality. If you do not agree to these terms, do not
              use the Service.
            </p>
          </section>

          <section className="glass-card rounded-2xl p-6">
            <h2 className="text-lg font-black text-white uppercase mb-3">2. Gameplay Disclaimer</h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              ItsU is a game of social deduction. The outcomes of games are determined by player
              actions, AI bot behavior, and voting decisions. ItsU does not guarantee any
              specific outcome. AI bots are powered by Groq's LLaMA model and make autonomous
              decisions. The game includes roles (Citizen and Killer) with different objectives
              and information asymmetry.
            </p>
          </section>

          <section className="glass-card rounded-2xl p-6">
            <h2 className="text-lg font-black text-white uppercase mb-3">3. Financial Risk Warning</h2>
            <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20 mb-3">
              <p className="text-sm text-red-200/80 leading-relaxed font-bold">
                ⚠️ IMPORTANT: ItsU involves staking real SOL tokens on the Solana blockchain.
                You may lose your staked funds if you are eliminated in a game.
              </p>
            </div>
            <ul className="space-y-1.5 text-sm text-text-secondary">
              <li>• Each match requires a 0.001 SOL entry stake</li>
              <li>• If your character is killed or voted out, your staked SOL is permanently forfeited</li>
              <li>• Leaving an active game may result in loss of staked funds</li>
              <li>• A 2% protocol fee is deducted from the winning pot</li>
              <li>• Only stake amounts you are willing to lose</li>
              <li>• Past performance does not guarantee future results</li>
            </ul>
          </section>

          <section className="glass-card rounded-2xl p-6">
            <h2 className="text-lg font-black text-white uppercase mb-3">4. Token Volatility</h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              The value of SOL and other cryptocurrency tokens fluctuates. The monetary value of
              your winnings or losses may change based on market conditions. ItsU is not
              responsible for changes in token value. We do not provide investment advice.
            </p>
          </section>

          <section className="glass-card rounded-2xl p-6">
            <h2 className="text-lg font-black text-white uppercase mb-3">5. User Responsibility</h2>
            <ul className="space-y-1.5 text-sm text-text-secondary">
              <li>• You are solely responsible for the security of your Solana wallet and private keys</li>
              <li>• You must be of legal age in your jurisdiction to use the Service</li>
              <li>• You agree not to exploit bugs, manipulate matchmaking, or engage in unfair play</li>
              <li>• You are responsible for reporting issues through the in-app Report feature</li>
              <li>• You acknowledge that AI bots are autonomous and may make unexpected decisions</li>
            </ul>
          </section>

          <section className="glass-card rounded-2xl p-6">
            <h2 className="text-lg font-black text-white uppercase mb-3">6. Jurisdiction</h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              ItsU operates as an open-source project. Some jurisdictions may restrict or
              prohibit the use of cryptocurrency staking in games. It is your responsibility to
              ensure that your use of ItsU complies with applicable laws in your jurisdiction.
              ItsU makes no representations about the legality of the Service in any specific
              jurisdiction.
            </p>
          </section>

          <section className="glass-card rounded-2xl p-6">
            <h2 className="text-lg font-black text-white uppercase mb-3">7. Service Availability</h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              ItsU is currently in development and is live on Solana Devnet. The Service may
              experience downtime, bugs, or breaking changes. We reserve the right to modify,
              suspend, or discontinue the Service at any time without prior notice. Game state
              is managed in-memory and may be lost during server restarts.
            </p>
          </section>

          <section className="glass-card rounded-2xl p-6">
            <h2 className="text-lg font-black text-white uppercase mb-3">8. Limitation of Liability</h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              ItsU and its contributors shall not be liable for any direct, indirect, incidental,
              or consequential damages arising from the use of the Service, including but not
              limited to loss of staked funds, blockchain transaction failures, or AI bot
              behavior.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
