"use client";

import { motion } from "framer-motion";
import { fadeUpVariants, viewportConfig } from "@/lib/animations";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export default function AnimatedSection({ children, className, id }: Props) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={fadeUpVariants}
      className={cn("px-4 md:px-8 lg:px-16 max-w-7xl mx-auto", className)}
    >
      {children}
    </motion.section>
  );
}
