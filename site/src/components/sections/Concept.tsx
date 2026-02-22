"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import Card from "@/components/ui/Card";

export default function Concept() {
  const t = useTranslations("concept");

  const layers = [
    { key: "layer1", color: "red" as const, number: "Layer 1" },
    { key: "layer2", color: "gold" as const, number: "Layer 2" },
    { key: "layer3", color: "teal" as const, number: "Layer 3" },
  ];

  return (
    <section id="concept" className="py-24 md:py-32">
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

          <motion.p
            variants={staggerItem}
            className="text-lg md:text-xl text-text-secondary max-w-4xl"
          >
            {t("subtitle")}
          </motion.p>

          {/* 3レイヤーカード */}
          <motion.div variants={staggerItem} className="space-y-6">
            {layers.map((layer) => (
              <motion.div
                key={layer.key}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card borderColor={layer.color} hover>
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <span
                      className={`text-sm font-semibold uppercase tracking-wider ${
                        layer.color === "red"
                          ? "text-accent-red"
                          : layer.color === "gold"
                          ? "text-accent-gold"
                          : "text-accent-teal"
                      }`}
                    >
                      {layer.number}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold mb-3">
                        {t(`${layer.key}.title`)}
                      </h3>
                      <p className="text-text-secondary text-lg">
                        {t(`${layer.key}.description`)}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
