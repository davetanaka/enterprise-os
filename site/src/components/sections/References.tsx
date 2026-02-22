"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

export default function References() {
  const t = useTranslations("references");
  const locale = useLocale();

  const categories = [
    { key: "aiAdoption", color: "text-accent-red" },
    { key: "knowledgeManagement", color: "text-accent-gold" },
    { key: "githubEnterprise", color: "text-accent-teal" },
    { key: "innovationCulture", color: "text-accent-blue" },
  ];

  return (
    <section className="py-24 md:py-32 bg-bg-secondary">
      <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="space-y-12"
        >
          {/* セクションタイトル */}
          <motion.div variants={staggerItem}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("sectionTitle")}
            </h2>
            <p className="text-text-secondary">{t("subtitle")}</p>
          </motion.div>

          {/* カテゴリ別リファレンス */}
          <motion.div variants={staggerItem} className="space-y-8">
            {categories.map((cat) => (
              <div key={cat.key}>
                <h3 className={`text-lg font-semibold mb-4 ${cat.color}`}>
                  {t(`categories.${cat.key}.title`)}
                </h3>
                <ul className="space-y-2">
                  {[0, 1, 2].map((i) => {
                    const item = t.raw(`categories.${cat.key}.items`)?.[i];
                    if (!item) return null;
                    return (
                      <li
                        key={i}
                        className="text-text-secondary text-sm flex items-start gap-2"
                      >
                        <span className="text-text-muted">•</span>
                        <span>{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* PDF Downloads */}
          <motion.div
            variants={staggerItem}
            className="bg-bg-card rounded-xl p-8 border border-accent-blue/30"
          >
            <h3 className="text-xl font-bold mb-4 text-accent-blue">
              {locale === "ja" ? "スライド資料ダウンロード" : "Download Slide Deck"}
            </h3>
            <p className="text-text-secondary mb-6">
              {locale === "ja"
                ? "Enterprise OSのコンセプトデッキ（全18ページ）をPDFでダウンロードできます。"
                : "Download the full Enterprise OS concept deck (18 pages) as PDF."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://github.com/davetanaka/enterprise-os/raw/main/slides/Enterprise_OS_Public_EN.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent-blue hover:bg-accent-blue/80 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                English PDF
              </a>
              <a
                href="https://github.com/davetanaka/enterprise-os/raw/main/slides/Enterprise_OS_Public_JP.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent-teal hover:bg-accent-teal/80 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                日本語 PDF
              </a>
            </div>
          </motion.div>

          {/* GitHub CTA */}
          <motion.div
            variants={staggerItem}
            className="bg-bg-card rounded-xl p-8 border border-accent-gold/30"
          >
            <p className="text-text-secondary mb-2">{t("github.text")}</p>
            <a
              href="https://github.com/davetanaka/enterprise-os"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-gold font-mono font-bold hover:underline text-lg"
            >
              github.com/davetanaka/enterprise-os
            </a>
            <p className="text-accent-blue mt-3 font-medium">
              {t("github.slideNote")}
            </p>
            <ul className="mt-4 space-y-1">
              {[0, 1, 2].map((i) => (
                <li key={i} className="text-accent-teal text-sm">
                  • {t(`github.cta.${i}`)}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
