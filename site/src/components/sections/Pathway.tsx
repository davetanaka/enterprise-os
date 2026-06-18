"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

type Step = { n: string; title: string; desc: string };

export default function Pathway() {
  const t = useTranslations("pathway");
  const steps = t.raw("steps") as Step[];

  return (
    <section id="pathway" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="space-y-12"
        >
          {/* セクションタイトル */}
          <motion.div variants={staggerItem} className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              {t("sectionTitle")}
            </h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-4xl">
              {t("subtitle")}
            </p>
          </motion.div>

          {/* Part 1: 実装の道筋（5ステップ） */}
          <motion.div variants={staggerItem} className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-blue">
              {t("stepsTitle")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {steps.map((s) => (
                <div
                  key={s.n}
                  className="bg-bg-card rounded-xl p-5 border border-text-muted/15"
                >
                  <div className="text-3xl font-bold text-accent-blue/60 mb-2">
                    {s.n}
                  </div>
                  <h4 className="text-lg font-bold mb-2">{s.title}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Part 2: 誰が作るのか — FDE */}
          <motion.div
            variants={staggerItem}
            className="bg-bg-card rounded-xl p-8 md:p-10 border-l-4 border-l-accent-teal"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-accent-teal">
              {t("fdeTitle")}
            </h3>
            <p className="text-lg text-text-secondary leading-relaxed max-w-4xl">
              {t("fdeBody")}
            </p>
            <p className="mt-5 text-text-primary font-medium border-t border-text-muted/15 pt-5">
              {t("fdeBridge")}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
