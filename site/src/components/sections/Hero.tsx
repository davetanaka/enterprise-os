"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-blue/10 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 左側：テキストコンテンツ */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* タイトル */}
            <motion.h1
              variants={staggerItem}
              className="text-5xl md:text-7xl lg:text-7xl font-bold tracking-tight"
            >
              {t("title")}
            </motion.h1>

            {/* サブタイトル */}
            <motion.div variants={staggerItem} className="space-y-2">
              <p className="text-xl md:text-2xl text-text-secondary">
                {t("subtitle")}
              </p>
              <p className="text-2xl md:text-3xl font-semibold">
                — <span className="text-accent-blue">{t("tagline")}</span>
              </p>
            </motion.div>

            {/* 赤のアクセントライン */}
            <motion.div
              variants={staggerItem}
              className="w-32 h-1 bg-accent-red"
            />

            {/* 著者情報 */}
            <motion.div variants={staggerItem} className="space-y-1">
              <p className="text-lg font-medium">{t("author")}</p>
              <p className="text-text-muted">{t("date")}</p>
            </motion.div>

            {/* Disclaimer */}
            <motion.p
              variants={staggerItem}
              className="text-sm text-text-muted max-w-xl"
            >
              {t("disclaimer")}
            </motion.p>
          </motion.div>

          {/* 右側：ロゴ画像 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <Image
              src="/images/og-image.png"
              alt="Enterprise OS - The Operating System for Corporate Knowledge"
              width={600}
              height={400}
              className="w-full h-auto rounded-xl shadow-2xl"
              priority
            />
          </motion.div>
        </div>

        {/* モバイル用ロゴ（タイトル下に表示） */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="lg:hidden mt-12"
        >
          <Image
            src="/images/og-image.png"
            alt="Enterprise OS - The Operating System for Corporate Knowledge"
            width={600}
            height={400}
            className="w-full h-auto rounded-xl shadow-xl"
            priority
          />
        </motion.div>
      </div>

      {/* スクロールインジケーター */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-text-muted text-sm">{t("scrollCta")}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="text-text-secondary"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
