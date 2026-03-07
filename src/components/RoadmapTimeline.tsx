import { motion } from "framer-motion";

interface RoadmapItem {
  phase: string;
  title: string;
  items: string[];
  status: "completed" | "in-progress" | "upcoming";
}

const roadmapData: RoadmapItem[] = [
  {
    phase: "Phase 1",
    title: "Foundation",
    items: [
      "Core game engine (Citizens vs Killers)",
      "Express backend with in-memory GameStore",
      "Real-time WebSocket game sessions",
      "JWT authentication system",
      "React Native mobile app with Expo",
    ],
    status: "completed",
  },
  {
    phase: "Phase 2",
    title: "AI & Staking",
    items: [
      "AI bot engine powered by Groq (LLaMA 3.1)",
      "Bot chat, vote, and kill decision-making",
      "Solana SOL staking with escrow vault",
      "Matchmaking worker with auto-fill bots",
      "Practice mode (no-risk games)",
    ],
    status: "completed",
  },
  {
    phase: "Phase 3",
    title: "Expansion",
    items: [
      "SKR token integration for staking",
      "On-chain escrow vault via Anchor program",
      "Leaderboard & ranking system",
      "Game history & replay viewer",
      "Marketing website launch",
    ],
    status: "in-progress",
  },
  {
    phase: "Phase 4",
    title: "Community",
    items: [
      "Custom game rooms & private lobbies",
      "Tournament mode with larger prize pools",
      "Community governance features",
      "Mobile app store launch (iOS & Android)",
      "Multi-chain support",
    ],
    status: "upcoming",
  },
];

const statusColors = {
  completed: { dot: "bg-green-400", border: "border-green-400/30", text: "text-green-400" },
  "in-progress": { dot: "bg-accent", border: "border-accent/30", text: "text-accent" },
  upcoming: { dot: "bg-text-muted", border: "border-text-muted/30", text: "text-text-muted" },
};

export default function RoadmapTimeline() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-panel-light" />

      <div className="space-y-12">
        {roadmapData.map((item, index) => {
          const colors = statusColors[item.status];
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={item.phase}
              initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex items-start gap-8 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              } flex-row`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 -translate-x-1/2 mt-8 z-10">
                <div className={`w-3 h-3 rounded-full ${colors.dot} ring-4 ring-background`} />
              </div>

              {/* Spacer for mobile */}
              <div className="w-10 md:hidden shrink-0" />

              {/* Card */}
              <div className={`flex-1 md:w-1/2 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                <div className={`glass-card rounded-2xl p-6 border ${colors.border}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-black uppercase tracking-widest ${colors.text}`}>
                      {item.phase}
                    </span>
                    <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${colors.dot}/20 ${colors.text}`}>
                      {item.status.replace("-", " ")}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-white uppercase tracking-wide mb-4">
                    {item.title}
                  </h3>
                  <ul className="space-y-2">
                    {item.items.map((text, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                        <div className={`w-1.5 h-1.5 rounded-full ${colors.dot} mt-1.5 shrink-0`} />
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Spacer for alternate side on desktop */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
