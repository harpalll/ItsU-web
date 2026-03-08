import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

import React from "react";

interface FeatureCardProps {
  icon: LucideIcon | React.ElementType;
  title: string;
  description: string;
  iconColor?: string;
  iconBg?: string;
  className?: string;
  delay?: number;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  iconColor = "#D946EF",
  iconBg = "bg-accent/10",
  className,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={cn(
        "glass-card rounded-3xl p-6 border-game hover:glow-primary transition-shadow group",
        className
      )}
    >
      <div
        className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center border-2 border-border mb-4",
          iconBg
        )}
      >
        <Icon size={24} style={{ color: iconColor }} />
      </div>
      <h3 className="text-lg font-black text-white uppercase tracking-wide mb-2">
        {title}
      </h3>
      <p className="text-sm text-text-secondary leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
