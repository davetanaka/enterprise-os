"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type AccordionItemProps = {
  title: string;
  children: React.ReactNode;
  borderColor?: "red" | "teal" | "gold" | "blue";
  defaultOpen?: boolean;
};

const borderColors = {
  red: "border-l-accent-red",
  teal: "border-l-accent-teal",
  gold: "border-l-accent-gold",
  blue: "border-l-accent-blue",
};

export function AccordionItem({
  title,
  children,
  borderColor = "blue",
  defaultOpen = false,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={cn(
        "bg-bg-card rounded-lg border-l-4 overflow-hidden",
        borderColors[borderColor]
      )}
    >
      <button
        className="w-full p-6 text-left flex justify-between items-center hover:bg-bg-card-hover transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold">{title}</h3>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-2xl text-text-secondary"
        >
          ↓
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 text-text-secondary">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

type AccordionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Accordion({ children, className }: AccordionProps) {
  return <div className={cn("space-y-4", className)}>{children}</div>;
}
