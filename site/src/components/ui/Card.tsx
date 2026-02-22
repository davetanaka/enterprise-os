"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  borderColor?: "red" | "teal" | "gold" | "blue" | "none";
  hover?: boolean;
};

const borderColors = {
  red: "border-l-accent-red",
  teal: "border-l-accent-teal",
  gold: "border-l-accent-gold",
  blue: "border-l-accent-blue",
  none: "",
};

export default function Card({
  children,
  className,
  borderColor = "none",
  hover = false,
}: Props) {
  const baseClasses = cn(
    "bg-bg-card rounded-lg p-6",
    borderColor !== "none" && `border-l-4 ${borderColors[borderColor]}`,
    className
  );

  if (hover) {
    return (
      <motion.div
        className={baseClasses}
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={baseClasses}>{children}</div>;
}
