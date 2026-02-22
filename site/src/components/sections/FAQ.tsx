"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import Accordion, { AccordionItem } from "@/components/ui/Accordion";

export default function FAQ() {
  const t = useTranslations("faq");

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="space-y-12"
        >
          {/* セクションタイトル */}
          <motion.div variants={staggerItem}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t("sectionTitle")}
            </h2>
            <p className="text-text-secondary text-lg">{t("subtitle")}</p>
          </motion.div>

          {/* FAQ アコーディオン */}
          <motion.div variants={staggerItem}>
            <Accordion>
              {/* Q1 */}
              <AccordionItem
                title={t("q1.question")}
                borderColor="blue"
                defaultOpen
              >
                <div className="space-y-4">
                  <p>{t("q1.answer")}</p>
                  <div className="bg-bg-secondary rounded-lg p-4 mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[0, 1, 2].map((i) => (
                        <div key={i} className="text-center">
                          <span className="text-accent-blue font-semibold">
                            {t(`q1.phases.${i}.phase`)}
                          </span>
                          <p className="text-sm text-text-secondary">
                            {t(`q1.phases.${i}.description`)}
                          </p>
                          <p className="text-accent-gold text-sm font-medium">
                            {t(`q1.phases.${i}.duration`)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AccordionItem>

              {/* Q2 */}
              <AccordionItem title={t("q2.question")} borderColor="teal">
                <div className="space-y-4">
                  <p>{t("q2.answer")}</p>
                  <ul className="space-y-2">
                    {[0, 1, 2, 3].map((i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent-teal">✓</span>
                        <span>{t(`q2.points.${i}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AccordionItem>

              {/* Q3 */}
              <AccordionItem title={t("q3.question")} borderColor="gold">
                <div className="space-y-4">
                  <p>{t("q3.answer")}</p>
                  <div className="space-y-2 text-sm">
                    {[0, 1].map((i) => (
                      <p key={i} className="text-text-muted">
                        {t(`q3.examples.${i}`)}
                      </p>
                    ))}
                  </div>
                </div>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
