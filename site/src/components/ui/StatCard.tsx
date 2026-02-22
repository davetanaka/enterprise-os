"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  value: string;
  label: string;
  source?: string;
  borderColor?: "red" | "teal" | "gold" | "blue";
  className?: string;
};

const borderColors = {
  red: "border-t-accent-red",
  teal: "border-t-accent-teal",
  gold: "border-t-accent-gold",
  blue: "border-t-accent-blue",
};

const textColors = {
  red: "text-accent-red",
  teal: "text-accent-teal",
  gold: "text-accent-gold",
  blue: "text-accent-blue",
};

export default function StatCard({
  value,
  label,
  source,
  borderColor = "teal",
  className,
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      // 数値を抽出してアニメーション
      const numMatch = value.match(/[\d.]+/);
      if (numMatch) {
        const targetNum = parseFloat(numMatch[0]);
        const suffix = value.replace(numMatch[0], "");
        const duration = 1500;
        const startTime = Date.now();

        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // イージング
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = targetNum * eased;

          if (targetNum % 1 === 0) {
            setDisplayValue(Math.round(current) + suffix);
          } else {
            setDisplayValue(current.toFixed(1) + suffix);
          }

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setDisplayValue(value);
          }
        };

        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      className={cn(
        "bg-bg-card rounded-lg p-6 border-t-4",
        borderColors[borderColor],
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={cn("text-4xl md:text-5xl font-bold mb-3", textColors[borderColor])}>
        {displayValue}
      </div>
      <p className="text-text-primary text-lg mb-2">{label}</p>
      {source && <p className="text-text-muted text-sm">({source})</p>}
    </motion.div>
  );
}
