"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeUpVariants, viewportConfig } from "@/lib/animations";

const socialLinks = [
  { key: "youtube", url: "https://www.youtube.com/davetanaka", icon: "🎬" },
  { key: "note", url: "https://note.com/davetanaka", icon: "📝" },
  { key: "linkedin", url: "https://linkedin.com/in/davetanaka", icon: "💼" },
  { key: "twitter", url: "https://x.com/davetanaka", icon: "🐦" },
  { key: "github", url: "https://github.com/davetanaka", icon: "⚡" },
];

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-bg-secondary border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUpVariants}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
          <p className="text-xl text-accent-blue mb-2">{t("tagline")}</p>
          <p className="text-text-secondary">{t("subtitle")}</p>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUpVariants}
          className="bg-bg-card rounded-xl p-8 mb-12 text-center"
        >
          <a
            href="https://github.com/davetanaka/enterprise-os"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent-blue hover:bg-accent-blue/80 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Star on GitHub
          </a>
          <p className="text-text-secondary mt-4 text-sm">
            Fork to adapt for your organization • Issues and PRs welcome
          </p>
        </motion.div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          {socialLinks.map((link) => (
            <a
              key={link.key}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors text-2xl"
              aria-label={t(`links.${link.key}`)}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Copyright & License */}
        <div className="text-center text-text-muted text-sm space-y-2">
          <p>{t("copyright")}</p>
          <p>{t("license")}</p>
        </div>
      </div>
    </footer>
  );
}
