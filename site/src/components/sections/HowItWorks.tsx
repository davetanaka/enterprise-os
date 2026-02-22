"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

export default function HowItWorks() {
  const t = useTranslations("howItWorks");

  const inputs: string[] = t.raw("inputs");
  const outputs: string[] = t.raw("outputs");
  const centerFeatures: string[] = t.raw("center.features");

  const gitTerms = ["commit", "branch", "pullRequest", "merge", "fork"];
  const termColors = [
    "text-accent-red",
    "text-accent-teal",
    "text-accent-gold",
    "text-accent-blue",
    "text-accent-pink",
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="space-y-12"
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
            className="text-lg md:text-xl text-text-secondary"
          >
            {t("subtitle")}
          </motion.p>

          {/* フロー図 */}
          <motion.div variants={staggerItem} className="relative">
            {/* AI Layer */}
            <div className="bg-bg-card rounded-lg p-4 mb-8 text-center border border-accent-teal/30">
              <span className="text-accent-teal font-semibold">
                {t("aiLayer")}
              </span>
            </div>

            {/* メインフロー */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_2fr_auto_1fr] gap-4 lg:gap-6 items-center">
              {/* 入力システム */}
              <div className="space-y-3">
                {inputs.map((input: string, i: number) => (
                  <motion.div
                    key={input}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-bg-card px-4 py-3 rounded-lg text-sm border-l-4 border-accent-blue"
                  >
                    {input}
                  </motion.div>
                ))}
              </div>

              {/* 矢印 */}
              <div className="hidden lg:flex items-center justify-center text-text-muted text-2xl">
                →
              </div>

              {/* 中央ハブ */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-accent-blue/20 to-accent-teal/10 border-2 border-accent-blue rounded-xl p-8 text-center"
              >
                <h3 className="text-2xl font-bold mb-2">{t("center.title")}</h3>
                <p className="text-text-secondary mb-4">{t("center.subtitle")}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {centerFeatures.map((feature: string) => (
                    <span
                      key={feature}
                      className="bg-bg-card px-3 py-1 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* 矢印 */}
              <div className="hidden lg:flex items-center justify-center text-text-muted text-2xl">
                →
              </div>

              {/* 出力システム */}
              <div className="space-y-3">
                {outputs.map((output: string, i: number) => (
                  <motion.div
                    key={output}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-bg-card px-4 py-3 rounded-lg text-sm border-l-4 border-accent-teal"
                  >
                    {output}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Review & Approval */}
            <div className="bg-bg-card rounded-lg p-4 mt-8 text-center border border-white/10">
              <span className="text-text-secondary">{t("review")}</span>
            </div>
          </motion.div>

          {/* Git用語 */}
          <motion.div
            variants={staggerItem}
            className="grid grid-cols-2 md:grid-cols-5 gap-4"
          >
            {gitTerms.map((term, i) => (
              <div
                key={term}
                className="bg-bg-card rounded-lg p-4 text-center"
              >
                <span className={`font-mono font-bold ${termColors[i]}`}>
                  {t(`gitTerms.${term}.term`)}
                </span>
                <p className="text-text-muted text-sm mt-2">
                  {t(`gitTerms.${term}.description`)}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
