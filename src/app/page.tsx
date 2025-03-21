"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ScreenshotShowcase } from "@/components/ui/ScreenshotShowcase";

// Placeholder screenshots - replace with actual Atlas screenshots
const screenshots = [
  {
    src: "/screenshots/dashboard.png",
    alt: "Atlas Dashboard",
    width: 1920,
    height: 1080,
  },
  {
    src: "/screenshots/analytics.png",
    alt: "Analytics View",
    width: 1920,
    height: 1080,
  },
  {
    src: "/screenshots/transactions.png",
    alt: "Transaction Explorer",
    width: 1920,
    height: 1080,
  },
];

const stats = [
  {
    label: "Transactions Processed in Private Beta",
    value: "1.2M+",
  },
  {
    label: "Blocks Analyzed in Private Beta",
    value: "850K+",
  },
  {
    label: "Enterprise Clients in Private Beta",
    value: "2",
  },
];

const services = [
  {
    title: "Block Explorer",
    description: "Real-time blockchain data visualization and analysis",
    link: "#",
  },
  {
    title: "Transaction Tracking",
    description: "Monitor and analyze blockchain transactions",
    link: "#",
  },
  {
    title: "Smart Contract Analysis",
    description: "Audit and verify smart contract functionality",
    link: "#",
  },
  {
    title: "Network Analytics",
    description: "Comprehensive blockchain network insights",
    link: "#",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen bg-atlas-black">
      <div className="absolute inset-0 bg-dark-gradient" />
      <div className="relative">
        {/* Hero Section */}
        <Section className="relative overflow-hidden py-24 lg:min-h-screen lg:py-32">
          <div className="absolute inset-0 bg-dots bg-[length:20px_20px] opacity-5" />
          <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col justify-center">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block text-atlas-teal">
                  Atlas Explorer
                </span>
                <h1 className="font-display text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
                  <span className="text-gradient">Unlock</span> the Blockchain
                  Universe
                </h1>
                <p className="max-w-2xl text-lg text-atlas-gray-400 md:text-xl">
                  Simplify complexity. Unlock insights. Join the Private Beta of
                  Atlas, a next-gen blockchain explorer and shape the future of
                  Web 3.0.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" variant="primary">
                    Request a Demo
                  </Button>
                  <Button size="lg" variant="secondary">
                    Learn More
                  </Button>
                </div>
              </motion.div>
            </div>
            <motion.div
              className="relative lg:pt-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -inset-x-20 -top-20 -bottom-20 bg-glow" />
                <div className="relative rounded-xl border-glow bg-card-gradient p-6 backdrop-blur-sm">
                  <ScreenshotShowcase />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="grid gap-8 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="relative overflow-hidden rounded-lg border-glow bg-card-gradient p-6"
                >
                  <div className="space-y-2">
                    <h3 className="font-display text-3xl font-bold text-atlas-teal">
                      {stat.value}
                    </h3>
                    <p className="text-sm text-atlas-gray-400">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </Section>

        {/* Services Section */}
        <Section variant="dark" className="py-20">
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
                Our Services
              </h2>
            </div>
            <div className="space-y-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="group relative overflow-hidden rounded-lg border-glow bg-card-gradient p-6 transition-all hover:bg-atlas-gray-800/20"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-xl font-bold text-white">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-atlas-gray-400">
                        {service.description}
                      </p>
                    </div>
                    <div className="text-atlas-teal">
                      <svg
                        className="h-6 w-6 transform transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Features Section */}
        <Section variant="dark" className="overflow-hidden py-20">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
                Experience Atlas
              </h2>
              <p className="mt-4 text-atlas-gray-400">
                Discover the power of intuitive blockchain exploration
              </p>
            </div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -inset-x-20 -top-20 -bottom-20 bg-glow" />
                <div className="relative rounded-xl border-glow bg-card-gradient p-6 backdrop-blur-sm">
                  <ScreenshotShowcase
                    className="mt-12"
                    imageSrc="/image-2-landing.png"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="relative overflow-hidden bg-atlas-black py-20">
          <div className="absolute inset-0 bg-dots bg-[length:20px_20px] opacity-5" />
          <div className="relative">
            <div className="text-center">
              <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
                Ready to Explore?
              </h2>
              <p className="mt-4 text-xl text-atlas-gray-400">
                Join the next generation of blockchain exploration.
              </p>
              <form className="mx-auto mt-8 flex max-w-md gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg border-2 border-atlas-gray-700 bg-atlas-gray-800/50 px-4 py-2 text-white placeholder-atlas-gray-500 backdrop-blur-sm transition-colors focus:border-atlas-teal focus:outline-none"
                />
                <Button variant="primary">Get Started</Button>
              </form>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="border-t border-atlas-gray-800 bg-atlas-black py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
              <p className="text-atlas-gray-500">
                © 2025 Atlas Explorer Inc. Built by Audicity. All rights
                reserved.
              </p>
              <div className="flex items-center gap-6">
                <a
                  href="mailto:info@atlasexplorer.com"
                  className="text-atlas-gray-500 transition-colors hover:text-atlas-teal"
                >
                  Contact Us
                </a>
                <a
                  href="#"
                  className="text-atlas-gray-500 transition-colors hover:text-atlas-teal"
                >
                  Follow Us
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
