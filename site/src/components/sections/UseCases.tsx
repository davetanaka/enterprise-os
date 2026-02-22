"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";

type CaseCardProps = {
  title: string;
  beforeTitle: string;
  beforePoints: string[];
  afterTitle: string;
  afterPoints: string[];
};

function CaseCard({
  title,
  beforeTitle,
  beforePoints,
  afterTitle,
  afterPoints,
}: CaseCardProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Before */}
        <div className="bg-bg-card rounded-lg p-6 border-t-4 border-accent-red">
          <h4 className="text-accent-red font-semibold mb-4">{beforeTitle}</h4>
          <ul className="space-y-2 text-text-secondary">
            {beforePoints.map((point, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-accent-red">✗</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* After */}
        <div className="bg-bg-card rounded-lg p-6 border-t-4 border-accent-teal">
          <h4 className="text-accent-teal font-semibold mb-4">{afterTitle}</h4>
          <ul className="space-y-2 text-text-secondary">
            {afterPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-accent-teal">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function UseCases() {
  const t = useTranslations("useCases");

  const cases = ["case1", "case2"];

  return (
    <section className="py-24 md:py-32">
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

          {/* ケーススタディ */}
          <motion.div variants={staggerItem} className="space-y-12">
            {cases.map((caseKey) => (
              <CaseCard
                key={caseKey}
                title={t(`${caseKey}.title`)}
                beforeTitle={t(`${caseKey}.before.title`)}
                beforePoints={[0, 1, 2].map((i) =>
                  t(`${caseKey}.before.points.${i}`)
                )}
                afterTitle={t(`${caseKey}.after.title`)}
                afterPoints={[0, 1, 2].map((i) =>
                  t(`${caseKey}.after.points.${i}`)
                )}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
