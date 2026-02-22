"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

export default function Author() {
  const t = useTranslations("author");
  const locale = useLocale();

  const timeline = [0, 1, 2, 3, 4];
  const commitPoints = [0, 1, 2, 3, 4, 5, 6, 7];

  const companyColors: Record<string, string> = {
    ASCII: "text-accent-red",
    Adobe: "text-accent-red",
    Apple: "text-accent-blue",
    "": "text-accent-teal",
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/davetanaka",
      icon: "⚡",
      description: locale === "ja"
        ? "スライド資料（日英・PDF 18ページ）公開中"
        : "Full slide deck available (EN/JP, 18 pages PDF)",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/davetanaka",
      icon: "🎬",
      description: locale === "ja"
        ? "ミドル・シニア世代向けガジェット・AI・Digital DIY"
        : "Gadgets, AI & Digital DIY for mid-senior generations",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
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

          <motion.div
            variants={staggerItem}
            className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12"
          >
            {/* プロフィール画像 & 基本情報 */}
            <div className="space-y-6">
              <div className="bg-bg-card rounded-xl p-6 text-center">
                {/* プロフィール画像 */}
                <div className="w-48 h-48 mx-auto rounded-lg mb-6 overflow-hidden">
                  <Image
                    src="/images/dave-tanaka.jpg"
                    alt="Dave Tanaka / 田中訓"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{t("name")}</h3>
                <p className="text-accent-blue text-sm mt-2">{t("title")}</p>
                <p className="text-text-muted text-sm">{t("subtitle")}</p>
              </div>

              {/* ソーシャルリンク */}
              <div className="bg-bg-card rounded-xl p-6 space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-text-primary hover:text-accent-blue transition-colors group"
                  >
                    <span className="text-xl">{link.icon}</span>
                    <div>
                      <span className="font-semibold group-hover:underline">{link.name}</span>
                      <p className="text-text-muted text-sm mt-1">{link.description}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* お問い合わせ */}
              <div className="bg-bg-card rounded-xl p-6">
                <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">
                  {locale === "ja" ? "お問い合わせ・ご依頼" : "Contact / Inquiries"}
                </h4>
                <a
                  href="mailto:davetanaka@gmail.com"
                  className="flex items-center gap-3 text-accent-blue hover:text-accent-teal transition-colors"
                >
                  <span className="text-xl">✉️</span>
                  <span className="font-medium">davetanaka@gmail.com</span>
                </a>
                <p className="text-text-muted text-sm mt-3">
                  {locale === "ja"
                    ? "講演・執筆・コンサルティングなど、お気軽にご連絡ください。"
                    : "Speaking, writing, consulting — feel free to reach out."}
                </p>
              </div>

              <p className="text-text-muted text-sm text-center">
                {t("disclaimer")}
              </p>
            </div>

            {/* タイムライン & Commit Log */}
            <div className="space-y-8">
              {/* タイムラインヘッダー */}
              <h4 className="text-lg font-semibold">{t("timelineTitle")}</h4>

              {/* タイムライン */}
              <div className="space-y-3">
                {timeline.map((i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[80px_100px_1fr] gap-4 items-start"
                  >
                    <span className="text-accent-pink text-sm font-mono">
                      {t(`timeline.${i}.years`)}
                    </span>
                    <span
                      className={`font-semibold ${
                        companyColors[t(`timeline.${i}.company`)] ||
                        "text-text-primary"
                      }`}
                    >
                      {t(`timeline.${i}.company`)}
                    </span>
                    <span className="text-text-secondary text-sm">
                      {t(`timeline.${i}.role`)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Commit Log */}
              <div className="bg-bg-card rounded-xl p-6">
                <h4 className="font-mono text-lg font-bold mb-4">
                  {t("commitLog.title")}
                </h4>
                <ul className="space-y-3">
                  {commitPoints.map((i) => {
                    const text = t(`commitLog.points.${i}`);
                    // GitHubとYouTubeの項目にリンクを追加
                    if (i === 5) {
                      // GitHub: 13 active repositories
                      return (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <span className="text-text-muted">•</span>
                          <span className="text-text-secondary">
                            GitHub:{" "}
                            <a
                              href="https://github.com/davetanaka"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-accent-blue hover:underline"
                            >
                              {locale === "ja" ? "13のアクティブリポジトリ" : "13 active repositories"}
                            </a>
                          </span>
                        </li>
                      );
                    }
                    if (i === 7) {
                      // Content creator: youtube.com/@davetanaka
                      return (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <span className="text-text-muted">•</span>
                          <span className="text-text-secondary">
                            {locale === "ja" ? "コンテンツクリエイター: " : "Content creator: "}
                            <a
                              href="https://www.youtube.com/davetanaka"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-accent-blue hover:underline"
                            >
                              youtube.com/@davetanaka
                            </a>
                          </span>
                        </li>
                      );
                    }
                    return (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <span className="text-text-muted">•</span>
                        <span className="text-text-secondary">{text}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
