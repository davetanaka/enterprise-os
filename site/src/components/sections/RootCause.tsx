"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { fadeUpVariants, staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

export default function RootCause() {
  const t = useTranslations("rootCause");

  // システムボックスの位置（中心座標cxはパーセント）
  const systemPositions = [
    { top: "0%", left: "0%", delay: 0, cx: 8, cy: 5 },
    { top: "5%", left: "25%", delay: 0.1, cx: 32, cy: 10 },
    { top: "0%", left: "55%", delay: 0.2, cx: 62, cy: 5 },
    { top: "10%", left: "80%", delay: 0.3, cx: 88, cy: 15 },
    { top: "35%", left: "5%", delay: 0.4, cx: 12, cy: 40 },
    { top: "40%", left: "30%", delay: 0.5, cx: 38, cy: 45 },
    { top: "35%", left: "60%", delay: 0.6, cx: 68, cy: 40 },
    { top: "45%", left: "85%", delay: 0.7, cx: 92, cy: 50 },
    { top: "70%", left: "0%", delay: 0.8, cx: 8, cy: 75 },
    { top: "75%", left: "28%", delay: 0.9, cx: 36, cy: 80 },
    { top: "70%", left: "55%", delay: 1.0, cx: 62, cy: 75 },
    { top: "75%", left: "78%", delay: 1.1, cx: 86, cy: 80 },
  ];

  // 断片的な接続線（混乱した配線を表現）
  const connections = [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 0, to: 4 },
    { from: 1, to: 5 },
    { from: 3, to: 7 },
    { from: 4, to: 8 },
    { from: 5, to: 9 },
    { from: 6, to: 10 },
    { from: 7, to: 11 },
    { from: 5, to: 6 },
    { from: 9, to: 10 },
    { from: 2, to: 6 },
    { from: 4, to: 5 },
  ];

  const systems: string[] = t.raw("systems");

  return (
    <section className="py-24 md:py-32 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="space-y-8"
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

          {/* システムボックス */}
          <motion.div
            variants={staggerItem}
            className="relative h-[400px] md:h-[500px]"
          >
            {/* 接続線（SVG） */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ zIndex: 0 }}
            >
              {connections.map((conn, i) => {
                const from = systemPositions[conn.from];
                const to = systemPositions[conn.to];
                return (
                  <motion.line
                    key={i}
                    x1={`${from.cx}%`}
                    y1={`${from.cy}%`}
                    x2={`${to.cx}%`}
                    y2={`${to.cy}%`}
                    stroke="var(--accent-red)"
                    strokeWidth="1"
                    strokeOpacity="0.3"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                  />
                );
              })}
            </svg>
            {systems.map((system: string, index: number) => (
              <motion.div
                key={system}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: systemPositions[index]?.delay || 0,
                  duration: 0.4,
                }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="absolute bg-bg-card px-4 py-3 rounded-lg text-sm md:text-base border border-text-muted/20 cursor-default hover:border-accent-blue/50 transition-colors z-10"
                style={{
                  top: systemPositions[index]?.top || "0%",
                  left: systemPositions[index]?.left || "0%",
                }}
              >
                {system}
              </motion.div>
            ))}
          </motion.div>

          {/* インサイト */}
          <motion.p
            variants={staggerItem}
            className="text-lg md:text-xl text-accent-red text-center"
          >
            {t("insight")}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
