"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { fadeUpVariants, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import StatCard from "@/components/ui/StatCard";

export default function Problem() {
  const t = useTranslations("problem");

  const stats = [
    { key: "stat1", color: "teal" as const },
    { key: "stat2", color: "blue" as const },
    { key: "stat3", color: "gold" as const },
  ];

  return (
    <section id="problem" className="py-24 md:py-32">
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

          {/* 引用 */}
          <motion.blockquote
            variants={staggerItem}
            className="bg-bg-card rounded-xl p-8 border-l-4 border-accent-blue"
          >
            <p className="text-lg md:text-xl text-text-secondary italic leading-relaxed">
              &ldquo;{t("quote")}&rdquo;
            </p>
          </motion.blockquote>

          {/* インサイト */}
          <motion.p
            variants={staggerItem}
            className="text-xl md:text-2xl font-semibold text-accent-red"
          >
            {t("insight")}
          </motion.p>

          {/* 統計カード */}
          <motion.div
            variants={staggerItem}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {stats.map((stat) => (
              <StatCard
                key={stat.key}
                value={t(`${stat.key}.value`)}
                label={t(`${stat.key}.label`)}
                source={t(`${stat.key}.source`)}
                borderColor={stat.color}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
