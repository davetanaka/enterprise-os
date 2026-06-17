"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

type ProofCard = {
  tag: string;
  title: string;
  desc: string;
  cta: string;
  href: string;
};

// カードのサムネ（index対応）
const THUMBS = ["/images/proof-anker.png", "/images/proof-powerbank.png"];

export default function Proof() {
  const t = useTranslations("proof");
  const cards = t.raw("cards") as ProofCard[];

  return (
    <section id="proof" className="py-24 md:py-32 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="space-y-10"
        >
          {/* セクションタイトル */}
          <motion.h2
            variants={staggerItem}
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            {t("sectionTitle")}
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="text-lg md:text-xl text-text-secondary max-w-4xl"
          >
            {t("subtitle")}
          </motion.p>

          {/* 2つのデモカード */}
          <motion.div
            variants={staggerItem}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {cards.map((card, i) => (
              <a
                key={card.href}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-bg-card rounded-xl overflow-hidden border border-text-muted/15 hover:border-accent-blue/60 transition-colors"
              >
                {/* サムネ */}
                <div className="relative aspect-[16/10] overflow-hidden bg-bg-primary">
                  <Image
                    src={THUMBS[i] ?? THUMBS[0]}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-bg-primary/80 text-accent-teal backdrop-blur-sm">
                    {card.tag}
                  </span>
                </div>
                {/* テキスト */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold">{card.title}</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {card.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-accent-blue font-semibold group-hover:gap-2 transition-all">
                    {card.cta}
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.p
            variants={staggerItem}
            className="text-sm text-text-muted"
          >
            {t("note")}
          </motion.p>

          {/* 所有・統治（pillar 2）：意味はGitHubで所有・統治されている */}
          <motion.div
            variants={staggerItem}
            className="border-t border-text-muted/15 pt-8 space-y-4"
          >
            <p className="text-lg text-text-secondary leading-relaxed max-w-4xl">
              {t("governance")}
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a
                href="https://github.com/davetanaka/enterprise-os/blob/main/ONTOLOGY.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-teal font-semibold hover:underline"
              >
                ↗ {t("govOntology")}
              </a>
              <a
                href="https://github.com/davetanaka/enterprise-os/pull/1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-teal font-semibold hover:underline"
              >
                ↗ {t("govPr")}
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
