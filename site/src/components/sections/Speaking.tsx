"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

export default function Speaking() {
  const t = useTranslations("speaking");

  const topics = [0, 1, 2, 3, 4];
  const pastSpeaking = [0, 1, 2, 3, 4, 5];
  const credentials = [0, 1, 2, 3];

  return (
    <section id="speaking" className="py-24 md:py-32 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="space-y-12"
        >
          {/* セクションタイトル */}
          <motion.div variants={staggerItem} className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t("sectionTitle")}
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </motion.div>

          {/* 受賞歴ハイライト */}
          <motion.div
            variants={staggerItem}
            className="bg-gradient-to-r from-accent-gold/20 to-accent-gold/5 rounded-xl p-6 border border-accent-gold/30 text-center"
          >
            <h3 className="text-xl md:text-2xl font-bold text-accent-gold mb-2">
              {t("award.title")}
            </h3>
            <p className="text-text-secondary">
              {t("award.description")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 講演トピック */}
            <motion.div
              variants={staggerItem}
              className="bg-bg-card rounded-xl p-8 border-l-4 border-accent-blue"
            >
              <h3 className="text-xl font-bold mb-6 text-accent-blue">
                {t("topics.title")}
              </h3>
              <ul className="space-y-4">
                {topics.map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-accent-teal text-lg">▸</span>
                    <div>
                      <p className="font-semibold">{t(`topics.items.${i}.title`)}</p>
                      <p className="text-text-muted text-sm mt-1">
                        {t(`topics.items.${i}.description`)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* 講演実績 */}
            <motion.div
              variants={staggerItem}
              className="bg-bg-card rounded-xl p-8 border-l-4 border-accent-red"
            >
              <h3 className="text-xl font-bold mb-6 text-accent-red">
                {t("pastSpeaking.title")}
              </h3>
              <ul className="space-y-3">
                {pastSpeaking.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="text-accent-gold font-mono font-bold min-w-[48px]">
                      {t(`pastSpeaking.items.${i}.year`)}
                    </span>
                    <div>
                      <p className="text-text-primary font-medium">
                        {t(`pastSpeaking.items.${i}.event`)}
                      </p>
                      <p className="text-text-muted text-xs mt-0.5">
                        {t(`pastSpeaking.items.${i}.topic`)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* 資格・経歴 */}
          <motion.div
            variants={staggerItem}
            className="bg-bg-card rounded-xl p-8 border-l-4 border-accent-teal"
          >
            <h3 className="text-xl font-bold mb-4 text-accent-teal">
              {t("credentials.title")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {credentials.map((i) => (
                <div key={i} className="flex items-center gap-2 text-text-secondary text-sm">
                  <span className="text-accent-teal">✓</span>
                  {t(`credentials.items.${i}`)}
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={staggerItem}
            className="bg-gradient-to-r from-accent-blue/20 to-accent-teal/20 rounded-xl p-8 text-center border border-accent-blue/30"
          >
            <h3 className="text-2xl font-bold mb-4">{t("cta.title")}</h3>
            <p className="text-text-secondary mb-6 max-w-xl mx-auto">
              {t("cta.description")}
            </p>
            <a
              href="mailto:davetanaka@gmail.com?subject=講演・執筆のご依頼"
              className="inline-flex items-center gap-2 bg-accent-blue hover:bg-accent-blue/80 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              <span className="text-xl">✉️</span>
              {t("cta.button")}
            </a>
            <p className="text-text-muted text-sm mt-4">
              {t("cta.note")}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
