"use client";

import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "sm" | "lg";
}

export function Button({
  className,
  variant = "primary",
  size = "default",
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-atlas-teal text-atlas-black hover:bg-atlas-teal/90 border-transparent",
    secondary:
      "bg-atlas-gray-800/50 text-white hover:bg-atlas-gray-800/70 border-atlas-gray-700",
    outline:
      "border-atlas-teal text-atlas-teal hover:bg-atlas-teal/10 backdrop-blur-sm",
  };

  const sizes = {
    default: "px-4 py-2 text-sm",
    sm: "px-3 py-1.5 text-xs",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg border-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-atlas-teal focus:ring-offset-2 focus:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}
