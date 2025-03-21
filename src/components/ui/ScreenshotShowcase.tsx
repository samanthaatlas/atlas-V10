"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

// SVG icons as React components
const BlockIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-full w-full"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18" />
    <path d="M9 3v18" />
  </svg>
);

const AnalyticsIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-full w-full"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M3 3v18h18" />
    <path d="M7 14l4-4 4 4 4-4" />
  </svg>
);

const TransactionIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-full w-full"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M17 7l-4-4-4 4" />
    <path d="M13 3v12" />
    <path d="M7 17l4 4 4-4" />
    <path d="M11 21V9" />
  </svg>
);

const NetworkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="h-full w-full"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="3" />
    <circle cx="19" cy="5" r="2" />
    <circle cx="5" cy="5" r="2" />
    <circle cx="5" cy="19" r="2" />
    <circle cx="19" cy="19" r="2" />
    <path d="M12 9a3 3 0 0 0 0-6" />
    <path d="M12 15a3 3 0 0 1 0 6" />
    <path d="M9 12a3 3 0 0 0-6 0" />
    <path d="M15 12a3 3 0 0 1 6 0" />
  </svg>
);

interface FeatureCard {
  title: string;
  description: string;
  icon: React.ComponentType;
  color: string;
}

const features: FeatureCard[] = [
  {
    title: "Block Explorer",
    description: "Real-time blockchain data visualization",
    icon: BlockIcon,
    color: "from-atlas-teal/20 to-atlas-teal/5",
  },
  {
    title: "Analytics",
    description: "Advanced insights and trends",
    icon: AnalyticsIcon,
    color: "from-atlas-teal/30 to-atlas-teal/5",
  },
  {
    title: "Transactions",
    description: "Track and analyze transactions",
    icon: TransactionIcon,
    color: "from-atlas-teal/25 to-atlas-teal/5",
  },
  {
    title: "Network View",
    description: "Cross-chain connectivity",
    icon: NetworkIcon,
    color: "from-atlas-teal/15 to-atlas-teal/5",
  },
];

export function ScreenshotShowcase({
  className,
  imageSrc = "/atlas-hero-image.png",
}: {
  className?: string;
  imageSrc?: string;
}) {
  return (
    <div className={cn("relative min-h-[400px]", className)}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-atlas-teal/5 to-transparent rounded-3xl" />

      {/* Hero Image */}
      <motion.div
        className="relative w-full h-full rounded-xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={imageSrc}
          alt="Atlas Dashboard Interface"
          width={1200}
          height={800}
          className="w-full h-full object-cover rounded-xl"
          priority
        />
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-atlas-teal/10 blur-2xl" />
      <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-atlas-teal/10 blur-3xl" />
    </div>
  );
}
