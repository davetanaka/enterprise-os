"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

export default function WhyNow() {
  const t = useTranslations("whyNow");

  const reasons = [0, 1, 2];
  const colors = ["text-accent-red", "text-accent-teal", "text-accent-gold"];
  const borderColors = [
    "border-l-accent-red",
    "border-l-accent-teal",
    "border-l-accent-gold",
  ];

  return (
    <section id="why-now" className="py-24 md:py-32 bg-bg-secondary">
      <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
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

          {/* 理由リスト */}
          <motion.div variants={staggerItem} className="space-y-8">
            {reasons.map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`bg-bg-card rounded-lg p-8 border-l-4 ${borderColors[i]}`}
              >
                <div className="flex items-start gap-6">
                  <span
                    className={`text-4xl font-bold ${colors[i]} opacity-50`}
                  >
                    {t(`reasons.${i}.number`)}
                  </span>
                  <div>
                    <h3 className={`text-xl md:text-2xl font-bold mb-4 ${colors[i]}`}>
                      {t(`reasons.${i}.title`)}
                    </h3>
                    <p className="text-text-secondary text-lg leading-relaxed">
                      {t(`reasons.${i}.description`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
