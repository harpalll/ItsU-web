import { Link } from "react-router-dom";
import { Skull, Github, Twitter } from "lucide-react";

const footerLinks = {
  Game: [
    { label: "How to Play", href: "/game" },
    { label: "Staking", href: "/staking" },
    { label: "Roadmap", href: "/roadmap" },
    { label: "FAQ", href: "/faq" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "License", href: "/license" },
    { label: "Security", href: "/security" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-panel-light/30 bg-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center border-2 border-border shadow-[2px_2px_0_0_black]">
                <Skull size={20} className="text-white" />
              </div>
              <span className="text-xl font-black uppercase tracking-wider font-mono">
                Its<span className="text-accent">U</span>
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-md">
              A high-stakes social deduction game powered by AI bots and Solana
              staking. Deceive, deduce, and survive. Trust no one.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-panel border-2 border-border flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all"
              >
                <Github size={18} className="text-text-secondary" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-panel border-2 border-border flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all"
              >
                <Twitter size={18} className="text-text-secondary" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-4">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-text-secondary hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-panel-light/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} ItsU. All rights reserved.
          </p>
          <p className="text-xs text-text-muted font-mono">
            Built with 🐺 by the ItsU team
          </p>
        </div>
      </div>
    </footer>
  );
}
