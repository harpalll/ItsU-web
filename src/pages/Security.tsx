import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Lock, Eye, Server } from "lucide-react";

export default function Security() {
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
            <Shield size={28} className="text-primary" />
            <span className="text-xs font-black uppercase tracking-widest text-primary">Security</span>
          </div>
          <h1 className="text-4xl font-black uppercase tracking-tight mb-2">
            <span className="gradient-text">Security</span>
          </h1>
          <p className="text-text-secondary">
            How ItsU protects your funds, data, and game integrity.
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Lock size={22} className="text-primary" />
              <h2 className="text-lg font-black text-white uppercase">Escrow Vault Program</h2>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              ItsU uses an Anchor program deployed on Solana to manage the escrow vault.
              The staking flow works as follows:
            </p>
            <ol className="space-y-2 text-sm text-text-secondary">
              <li className="flex gap-3">
                <span className="text-primary font-black">1.</span>
                A unique reference Keypair is generated client-side for each stake transaction
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-black">2.</span>
                The stake intent (reference key, currency, amount) is recorded in the database
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-black">3.</span>
                SOL is transferred to the ItsU main wallet with the reference key attached
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-black">4.</span>
                The backend verifies the on-chain transaction signature before allowing queue entry
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-black">5.</span>
                Winnings are distributed to the winning team after the game conclusion
              </li>
            </ol>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Server size={22} className="text-blue-400" />
              <h2 className="text-lg font-black text-white uppercase">Server-Side Security</h2>
            </div>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                <span><strong className="text-white">JWT Authentication:</strong> Access and refresh tokens with separate secrets for secure session management</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                <span><strong className="text-white">Auth Middleware:</strong> All API routes are protected by authentication middleware that validates JWT tokens</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                <span><strong className="text-white">Transaction Verification:</strong> On-chain transaction signatures are verified before accepting stakes</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                <span><strong className="text-white">Input Validation:</strong> All API inputs are validated using Zod schemas in the shared package</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                <span><strong className="text-white">Error Handling:</strong> Centralized error handling middleware prevents information leakage</span>
              </li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Eye size={22} className="text-accent" />
              <h2 className="text-lg font-black text-white uppercase">Game Integrity</h2>
            </div>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                <span><strong className="text-white">Server-Authoritative:</strong> All game logic runs on the backend. Clients cannot manipulate game state, roles, voting, or kill decisions.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                <span><strong className="text-white">Role Assignment:</strong> Roles (Citizen/Killer) are randomly assigned server-side. Players cannot choose or predict their role.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                <span><strong className="text-white">Timed Phases:</strong> Each phase has a server-enforced timer. Players cannot stall or delay the game.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                <span><strong className="text-white">Reporting System:</strong> Players can report suspicious behavior through the in-app Report Modal for investigation.</span>
              </li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield size={22} className="text-green-400" />
              <h2 className="text-lg font-black text-white uppercase">Audits & Transparency</h2>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              ItsU is fully open-source. The backend code, smart contracts, and mobile app are
              all publicly available for review on GitHub. We encourage community review and
              welcome contributions to improve security. The Anchor program code is in the{" "}
              <code className="text-primary bg-primary/10 px-1 rounded">anchor/programs</code> directory.
            </p>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
