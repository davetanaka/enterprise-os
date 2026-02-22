"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import StatCard from "@/components/ui/StatCard";

export default function Comparison() {
  const t = useTranslations("comparison");

  return (
    <section className="py-24 md:py-32 bg-bg-secondary">
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

          {/* 比較グリッド */}
          <motion.div
            variants={staggerItem}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* 現在のコスト */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-accent-red">
                {t("today.title")}
              </h3>
              <div className="space-y-4">
                {[0, 1, 2, 3].map((i) => (
                  <StatCard
                    key={i}
                    value={t(`today.items.${i}.value`)}
                    label={t(`today.items.${i}.label`)}
                    source={t(`today.items.${i}.source`)}
                    borderColor="red"
                  />
                ))}
              </div>
            </div>

            {/* Enterprise OS の価値 */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-accent-teal">
                {t("future.title")}
              </h3>
              <div className="space-y-4">
                {[0, 1, 2, 3].map((i) => (
                  <StatCard
                    key={i}
                    value={t(`future.items.${i}.value`)}
                    label={t(`future.items.${i}.label`)}
                    source={t(`future.items.${i}.source`)}
                    borderColor="teal"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* 注記 */}
          <motion.div
            variants={staggerItem}
            className="bg-accent-blue/10 border border-accent-blue/30 rounded-xl p-8"
          >
            <h4 className="text-xl font-bold text-accent-red mb-2">
              {t("note.title")}
            </h4>
            <p className="text-text-secondary">{t("note.subtitle")}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
