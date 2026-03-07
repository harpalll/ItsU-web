import { motion } from "framer-motion";
import {
  Users,
  Skull,
  Sun,
  Moon,
  Vote,
  MessageSquare,
  Swords,
} from "lucide-react";

const phases = [
  {
    icon: Sun,
    title: "Day Phase",
    subtitle: "Discussion",
    description:
      "Players use global chat to discuss, accuse, and defend themselves. Analyze behavior and chat history to spot inconsistencies — the Killers are hiding among you.",
    color: "#F97316",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
  },
  {
    icon: Moon,
    title: "Night Phase",
    subtitle: "The Kill",
    description:
      "Darkness falls and chat goes silent. The Killer secretly selects a Citizen to murder. When morning breaks, the victim is revealed to all.",
    color: "#F43F5E",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
  },
  {
    icon: Vote,
    title: "Vote Phase",
    subtitle: "Judgement",
    description:
      "All surviving players vote on who they believe is the Killer. The player with the most votes is executed and their true role is revealed.",
    color: "#D946EF",
    bg: "bg-accent/10",
    border: "border-accent/20",
  },
];

export default function GamePreview() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-black uppercase tracking-widest text-primary">
            Gameplay
          </span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight mt-2 mb-4">
            How <span className="gradient-text">ItsU</span> Works
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A social deduction game of deception and survival. Each match assigns secret roles
            — find the Killers before they eliminate everyone.
          </p>
        </motion.div>

        {/* Roles */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-6 border-game"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border-2 border-border">
                <Users size={22} color="#60A5FA" />
              </div>
              <h3 className="text-xl font-black text-white uppercase">Citizens</h3>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              The innocent majority. Your goal is to root out the Killers and vote them out
              before you are eliminated. Survive to the end and the remaining Citizens split
              the staked SOL pool. Each Citizen knows the secret item.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-6 border-game bg-red-950/30 border-red-900/30"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center border-2 border-red-900/50">
                <Skull size={22} color="#F43F5E" />
              </div>
              <h3 className="text-xl font-black text-white uppercase">Killers</h3>
            </div>
            <p className="text-red-200/70 text-sm leading-relaxed">
              The hidden minority. Your goal is to blend in, deceive the Citizens, and
              eliminate them one by one at night. If Killers outnumber Citizens, they win the
              entire pot. Killers only know the hint, not the item.
            </p>
          </motion.div>
        </div>

        {/* Phases */}
        <div className="grid md:grid-cols-3 gap-6">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`rounded-2xl p-6 ${phase.bg} border-2 ${phase.border}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <phase.icon size={24} style={{ color: phase.color }} />
                <div>
                  <h4 className="font-black text-white uppercase text-sm">
                    {phase.title}
                  </h4>
                  <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: phase.color }}>
                    {phase.subtitle}
                  </span>
                </div>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                {phase.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Item & Hint mechanic */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass-card rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 border border-primary/20"
        >
          <div className="flex items-center gap-3">
            <MessageSquare size={20} className="text-primary" />
            <span className="text-xs font-black text-primary uppercase tracking-widest">
              Chat is Critical
            </span>
          </div>
          <p className="text-sm text-text-secondary leading-relaxed md:border-l md:border-panel-light/30 md:pl-6">
            Every game has a <strong className="text-white">secret item</strong> known only to Citizens and a <strong className="text-white">hint</strong> given to the Killer.
            Players must use the chat to figure out who truly knows the item — and who is faking it.
            Deception, bluffing, and strategic questioning are your weapons.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
