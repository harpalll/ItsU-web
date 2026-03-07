import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function Privacy() {
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
            <ShieldCheck size={28} className="text-primary" />
            <span className="text-xs font-black uppercase tracking-widest text-primary">Legal</span>
          </div>
          <h1 className="text-4xl font-black uppercase tracking-tight mb-2">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-sm text-text-muted">Last updated: March 2026</p>
        </motion.div>

        <div className="prose prose-invert max-w-none space-y-8">
          <section className="glass-card rounded-2xl p-6">
            <h2 className="text-lg font-black text-white uppercase mb-3">1. Information We Collect</h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              ItsU collects the following information when you use our service:
            </p>
            <ul className="space-y-1.5 text-sm text-text-secondary">
              <li>• <strong className="text-white">Account information:</strong> Username and authentication tokens (JWT access and refresh tokens)</li>
              <li>• <strong className="text-white">Solana wallet address:</strong> Your public key used for staking SOL in matches</li>
              <li>• <strong className="text-white">Game data:</strong> Game history, wins, losses, chat messages during game sessions, voting records</li>
              <li>• <strong className="text-white">Transaction records:</strong> SOL staking amounts, reference keys, transaction signatures, and payout history</li>
              <li>• <strong className="text-white">Device information:</strong> Basic device identifiers for mobile app functionality</li>
            </ul>
          </section>

          <section className="glass-card rounded-2xl p-6">
            <h2 className="text-lg font-black text-white uppercase mb-3">2. How We Use Your Information</h2>
            <ul className="space-y-1.5 text-sm text-text-secondary">
              <li>• Authenticate your account and manage game sessions</li>
              <li>• Process SOL staking transactions and distribute winnings</li>
              <li>• Match you with other players and AI bots in game lobbies</li>
              <li>• Track game statistics (total wins, total SOL won)</li>
              <li>• Improve AI bot behavior using anonymized game data</li>
              <li>• Investigate reports and enforce fair play policies</li>
            </ul>
          </section>

          <section className="glass-card rounded-2xl p-6">
            <h2 className="text-lg font-black text-white uppercase mb-3">3. Blockchain Transparency</h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              ItsU operates on the Solana blockchain. All SOL staking transactions are recorded
              on-chain and are publicly visible. Your Solana wallet address and transaction
              history on the blockchain are inherently public. We do not control blockchain
              data once it is recorded on-chain.
            </p>
          </section>

          <section className="glass-card rounded-2xl p-6">
            <h2 className="text-lg font-black text-white uppercase mb-3">4. Data Storage</h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              Account data, game records, and transaction history are stored in a PostgreSQL
              database managed via Prisma ORM. Game state is managed in-memory during active
              sessions. We implement industry-standard security measures to protect your data.
            </p>
          </section>

          <section className="glass-card rounded-2xl p-6">
            <h2 className="text-lg font-black text-white uppercase mb-3">5. Third-Party Services</h2>
            <ul className="space-y-1.5 text-sm text-text-secondary">
              <li>• <strong className="text-white">Groq API:</strong> Game chat context is sent to Groq's LLaMA model to power AI bot decisions. No personal user data is sent.</li>
              <li>• <strong className="text-white">Solana Blockchain:</strong> Transaction data is recorded on Solana's public ledger.</li>
              <li>• <strong className="text-white">Expo / React Native:</strong> Mobile app framework with standard analytics.</li>
            </ul>
          </section>

          <section className="glass-card rounded-2xl p-6">
            <h2 className="text-lg font-black text-white uppercase mb-3">6. Your Rights</h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              You may request deletion of your account data at any time. Note that blockchain
              transaction records cannot be deleted as they are permanently recorded on-chain.
              Contact us through our GitHub repository for data requests.
            </p>
          </section>

          <section className="glass-card rounded-2xl p-6">
            <h2 className="text-lg font-black text-white uppercase mb-3">7. Cookies & Analytics</h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              The ItsU web application uses minimal cookies for session management. We do not
              use third-party tracking cookies or advertising networks. Basic analytics may be
              collected for performance monitoring.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
