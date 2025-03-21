"use client";

import { HTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: "default" | "teal" | "dark" | "light";
  containerWidth?: "default" | "narrow" | "wide";
}

export function Section({
  className = "",
  variant = "default",
  containerWidth = "default",
  children,
  ...props
}: SectionProps) {
  const variants = {
    default: "bg-transparent",
    teal: "bg-atlas-teal/10 text-white",
    dark: "bg-atlas-black text-white",
    light: "bg-atlas-gray-800/50",
  };

  const containerWidths = {
    narrow: "max-w-4xl",
    default: "max-w-6xl",
    wide: "max-w-7xl",
  };

  return (
    <section
      className={cn("py-16 md:py-24", variants[variant], className)}
      {...props}
    >
      <motion.div
        className={cn(
          "mx-auto px-4 sm:px-6 lg:px-8",
          containerWidths[containerWidth]
        )}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
