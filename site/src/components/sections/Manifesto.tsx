"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { fadeUpVariants, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

export default function Manifesto() {
  const t = useTranslations("manifesto");

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* 背景 */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary to-bg-secondary" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="space-y-12"
        >
          {/* セクションタイトル */}
          <motion.div variants={staggerItem} className="text-center">
            <span className="text-accent-red text-sm font-semibold uppercase tracking-wider">
              {t("sectionTitle")}
            </span>
          </motion.div>

          {/* メインヘッドライン */}
          <motion.h2
            variants={staggerItem}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-center"
          >
            {t("headline")}
          </motion.h2>

          {/* サブヘッドライン */}
          <motion.p
            variants={staggerItem}
            className="text-xl md:text-2xl text-text-secondary text-center italic"
          >
            {t("subheadline")}
          </motion.p>

          {/* 本文 */}
          <motion.div
            variants={staggerItem}
            className="space-y-6 text-lg md:text-xl text-text-secondary leading-relaxed"
          >
            <p>{t("body1")}</p>
            <p>{t("body2")}</p>
            <p>{t("body3")}</p>
          </motion.div>

          {/* ハイライト */}
          <motion.blockquote
            variants={staggerItem}
            className="border-l-4 border-accent-gold pl-6 py-4 bg-bg-card/50 rounded-r-lg"
          >
            <p className="text-xl md:text-2xl font-semibold text-accent-gold">
              {t("highlight")}
            </p>
          </motion.blockquote>

          {/* 結論 */}
          <motion.div
            variants={staggerItem}
            className="space-y-4 text-lg md:text-xl text-text-secondary"
          >
            <p>{t("conclusion1")}</p>
            <p>{t("conclusion2")}</p>
            <p>{t("conclusion3")}</p>
          </motion.div>

          {/* 最終メッセージ */}
          <motion.p
            variants={staggerItem}
            className="text-2xl md:text-3xl font-bold text-center text-accent-teal"
          >
            {t("finalMessage")}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
