"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import {
  Cube,
  CheckSquare,
  Code,
  ChartLine,
  Brain,
  Users,
  Buildings,
  Crown,
  House,
  Rocket,
  Layout,
  PaperPlaneTilt,
  List,
  Shield,
  LockKey,
  Scales,
  Eye,
  Graph,
  Bell,
} from "@phosphor-icons/react";
import { useState, useCallback } from "react";

// Dynamic imports for code splitting
const DynamicScreenshotShowcase = dynamic(
  () =>
    import("@/components/ui/ScreenshotShowcase").then((mod) => ({
      default: mod.ScreenshotShowcase,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="animate-pulse bg-atlas-gray-800 rounded-lg h-96" />
    ),
  }
);

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
    label: "Wallets Monitored with Live Alerts",
    value: "30K+",
  },
  {
    label: "Smart Contract Events Parsed",
    value: "50K+",
  },
  {
    label: "EVM-Compatible Blockchains",
    value: "5+",
  },
  {
    label: "Dark Web Signals Tracked & Correlated",
    value: "2.5K+",
  },
];

const services = [
  {
    title: "Block Explorer",
    description:
      "Visualise blockchain data in real-time—explore blocks, transactions, and more with ease.",
    icon: <Cube className="h-6 w-6" weight="light" />,
  },
  {
    title: "Transaction Tracking",
    description:
      "Monitor and analyse transactions instantly—stay informed on every move.",
    icon: <CheckSquare className="h-6 w-6" weight="light" />,
  },
  {
    title: "Smart Contract Analysis",
    description:
      "Interact with and audit smart contracts—perfect for developers and DeFi users.",
    icon: <Code className="h-6 w-6" weight="light" />,
  },
  {
    title: "Network Analytics",
    description:
      "Gain cross-chain insights—navigate Web 3.0 networks with confidence.",
    icon: <ChartLine className="h-6 w-6" weight="light" />,
  },
  {
    title: "AtlasInsight Engine",
    description:
      "Unlock smarter insights with our proprietary AI—detect patterns and threats with unmatched speed.",
    icon: <Brain className="h-6 w-6" weight="light" />,
  },
  {
    title: "Heuristics Layer",
    description:
      "Understand wallet behaviour with advanced clustering and anomaly detection.",
    icon: <Graph className="h-6 w-6" weight="light" />,
  },
  {
    title: "Dark Web Monitoring",
    description: "Detect off-chain threats before they reach the chain.",
    icon: <Eye className="h-6 w-6" weight="light" />,
  },
  {
    title: "Real-Time Risk Alerts",
    description: "Get notified of high-risk activity as it happens.",
    icon: <Bell className="h-6 w-6" weight="light" />,
  },
  {
    title: "Enterprise Collaboration",
    description:
      "Share insights securely across teams with audit trails and permission controls.",
    icon: <Users className="h-6 w-6" weight="light" />,
  },
];

// Add rate limiting helper
const RATE_LIMIT_DURATION = 60000; // 1 minute
const MAX_ATTEMPTS = 3;

export default function Home() {
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const [submitAttempts, setSubmitAttempts] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      // Rate limiting check
      const now = Date.now();
      if (now - lastSubmitTime < RATE_LIMIT_DURATION) {
        if (submitAttempts >= MAX_ATTEMPTS) {
          setFormError("Too many attempts. Please try again later.");
          return;
        }
        setSubmitAttempts((prev) => prev + 1);
      } else {
        setSubmitAttempts(1);
      }
      setLastSubmitTime(now);

      // Validation
      if (!email) {
        setFormError("Email is required");
        return;
      }
      if (!validateEmail(email)) {
        setFormError("Please enter a valid email address");
        return;
      }

      setIsSubmitting(true);
      setFormError("");

      try {
        // Here you would add your API call with proper CSRF token
        // const response = await fetch('/api/subscribe', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //     'X-CSRF-Token': csrf_token,
        //   },
        //   body: JSON.stringify({ email }),
        // });

        // Simulated success for now
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setEmail("");
        // Show success message
      } catch (error) {
        setFormError("An error occurred. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
    [email, lastSubmitTime, submitAttempts]
  );

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const header = document.querySelector("header");
    const offset = 32; // Additional offset for spacing

    if (section) {
      const sectionTop =
        section.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  // Add keyboard navigation
  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent, sectionId: string) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        scrollToSection(sectionId);
      }
    },
    []
  );

  return (
    <ErrorBoundary>
      <main className="relative min-h-screen bg-atlas-black" role="main">
        <div className="absolute inset-0 bg-dark-gradient" />

        {/* Floating Navigation */}
        <div
          className="fixed right-6 top-1/2 z-50 -translate-y-1/2"
          role="navigation"
          aria-label="Page navigation"
        >
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : 20 }}
              className="flex flex-col gap-3 rounded-2xl bg-atlas-gray-900/95 p-3 shadow-xl backdrop-blur-sm border border-atlas-gray-700"
            >
              {[
                { id: "hero", icon: <House weight="light" />, label: "Home" },
                {
                  id: "key-features",
                  icon: <Layout weight="light" />,
                  label: "Features",
                },
                {
                  id: "security",
                  icon: <Shield weight="light" />,
                  label: "Security",
                },
                {
                  id: "about",
                  icon: <Users weight="light" />,
                  label: "About",
                },
                {
                  id: "experience",
                  icon: <Rocket weight="light" />,
                  label: "Experience",
                },
                {
                  id: "cta",
                  icon: <PaperPlaneTilt weight="light" />,
                  label: "Contact",
                },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  onKeyPress={(e) => handleKeyPress(e, item.id)}
                  className="group flex items-center justify-center rounded-xl p-3 text-left text-white transition-colors hover:bg-atlas-gray-700/50 hover:text-atlas-teal focus:outline-none focus:ring-2 focus:ring-atlas-teal focus:ring-offset-2 focus:ring-offset-atlas-gray-800"
                  aria-label={`Scroll to ${item.label} section`}
                  role="button"
                  tabIndex={0}
                >
                  <span className="flex h-7 w-7 items-center justify-center text-atlas-teal">
                    {item.icon}
                  </span>
                </button>
              ))}
            </motion.div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="absolute -left-3 top-2 rounded-full border border-atlas-gray-700 bg-atlas-gray-900 p-2 text-atlas-teal shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-atlas-teal focus:ring-offset-2 focus:ring-offset-atlas-black"
              aria-label={
                isMenuOpen ? "Hide navigation menu" : "Show navigation menu"
              }
              title={isMenuOpen ? "Hide menu" : "Show menu"}
            >
              <List className="h-5 w-5" weight="light" />
            </button>
          </motion.div>
        </div>

        <div className="relative">
          {/* Hero Section */}
          <Section
            className="relative overflow-hidden py-16 sm:py-24 lg:min-h-[90vh] lg:py-32"
            id="hero"
            role="banner"
            aria-labelledby="hero-title"
          >
            <div className="absolute inset-0 bg-dots bg-[length:20px_20px] opacity-5" />
            <motion.div
              className="relative z-10 mx-auto max-w-5xl text-center px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8 mb-8">
                <motion.span
                  className="inline-flex items-center gap-2 rounded-full bg-atlas-teal/10 px-4 py-1.5 text-sm font-medium text-atlas-teal ring-1 ring-atlas-teal/20"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{
                    opacity: [1, 0.8, 1],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-atlas-teal opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-atlas-teal"></span>
                  </span>
                  Private Beta Now Available
                </motion.span>
                <h1
                  id="hero-title"
                  className="font-display text-[2.75rem] leading-[1.1] sm:text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl"
                >
                  <span className="text-gradient">Unlock</span> the Blockchain{" "}
                  <span className="text-gradient">Universe</span>
                </h1>
                <p className="mx-auto max-w-2xl text-lg leading-relaxed text-atlas-gray-400 md:text-xl">
                  Redefining Web3 Oversight—Simplifying Complexity, Unlocking
                  Insights. Enterprise-Grade Compliance Starts with Atlas. Apply
                  for Private Beta.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  variant="primary"
                  className="w-[85%] sm:w-auto text-base px-8"
                >
                  Apply for Private Beta
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => scrollToSection("key-features")}
                  className="w-[85%] sm:w-auto text-base px-8"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="relative z-10 mt-16 sm:mt-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="mx-auto max-w-5xl px-6 sm:px-6">
                <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="relative overflow-hidden rounded-lg border-glow bg-card-gradient p-6 backdrop-blur-sm"
                    >
                      <div className="relative z-10 space-y-2">
                        <h3 className="font-display text-3xl font-bold text-atlas-teal">
                          {stat.value}
                        </h3>
                        <p className="text-sm text-atlas-gray-400">
                          {stat.label}
                        </p>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-atlas-teal/10 to-transparent opacity-50" />
                    </div>
                  ))}
                </div>
                <p className="text-center mt-8 text-lg text-atlas-gray-400 max-w-3xl mx-auto">
                  Atlas is not just another analytics tool — it's the
                  infrastructure layer for the next era of blockchain
                  legitimacy.
                </p>
              </div>
            </motion.div>
          </Section>

          {/* Services Section */}
          <Section
            variant="dark"
            className="py-16 sm:py-20"
            id="key-features"
            role="region"
            aria-labelledby="features-title"
          >
            <div className="space-y-12 sm:space-y-16 px-6 sm:px-0">
              <div className="text-center">
                <h2
                  id="features-title"
                  className="font-display text-[2.5rem] sm:text-4xl font-bold tracking-tight text-white md:text-5xl"
                >
                  Key Features
                </h2>
                <div className="mt-6 space-y-4">
                  <p className="text-xl text-atlas-gray-400">
                    While others report on what happened, Atlas reveals what's
                    happening right now — and what's about to happen.
                  </p>
                  <p className="mx-auto max-w-3xl text-lg leading-relaxed text-atlas-gray-400">
                    Built for both enterprise-grade compliance and real-time
                    intelligence, Atlas combines proactive AI, deep forensic
                    tooling, and accessibility to deliver insights that aren't
                    just informative — they're actionable, trusted, and
                    future-facing.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    className="group relative overflow-hidden rounded-xl border border-atlas-gray-700/50 bg-gradient-to-br from-atlas-gray-800/80 via-atlas-gray-800/40 to-atlas-gray-800/80 p-6 backdrop-blur-sm hover:bg-atlas-gray-800/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="flex gap-4">
                      <div className="shrink-0">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-atlas-teal/10 text-atlas-teal ring-1 ring-atlas-teal/25 transition-all duration-200 group-hover:scale-110 group-hover:ring-atlas-teal/40">
                          {service.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-atlas-teal transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-atlas-gray-400 group-hover:text-atlas-gray-300 transition-colors">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Page Breaker */}
              <div className="relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-atlas-teal/30" />
                </div>
                <div className="relative flex justify-center">
                  <div className="bg-atlas-black px-4">
                    <div className="h-8 w-8 rounded-full bg-atlas-teal/10 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-atlas-teal" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Atlas Section */}
              <motion.div
                className="relative mx-auto max-w-5xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="relative overflow-hidden rounded-2xl border-glow bg-card-gradient backdrop-blur-sm">
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-atlas-teal/10 blur-3xl" />
                  <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-atlas-teal/10 blur-3xl" />

                  <div className="relative z-10 p-8 sm:p-12">
                    <div className="text-center space-y-4 mb-12">
                      <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
                        Why Choose{" "}
                        <span className="text-atlas-teal">Atlas</span>
                      </h3>
                      <p className="text-atlas-gray-400 text-lg max-w-2xl mx-auto">
                        Tailored solutions for every level of blockchain
                        interaction, from individual enthusiasts to enterprise
                        operations
                      </p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-3">
                      <motion.div
                        className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-atlas-gray-800/80 via-atlas-gray-800/40 to-atlas-gray-800/80 p-8 transition-all hover:bg-gradient-to-br hover:from-atlas-gray-800/90 hover:via-atlas-gray-800/50 hover:to-atlas-gray-800/90 backdrop-blur-sm border border-atlas-gray-700/50"
                        whileHover={{
                          scale: 1.02,
                          transition: { type: "spring", stiffness: 300 },
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-atlas-teal/5 blur-2xl group-hover:bg-atlas-teal/10 transition-all duration-300" />
                        <div className="absolute -left-8 -bottom-8 h-32 w-32 rounded-full bg-atlas-teal/5 blur-2xl group-hover:bg-atlas-teal/10 transition-all duration-300" />
                        <div className="relative space-y-6">
                          <motion.div
                            className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-atlas-teal/10 text-atlas-teal ring-1 ring-atlas-teal/25 group-hover:ring-atlas-teal/40 transition-all duration-300"
                            whileHover={{ rotate: 5 }}
                          >
                            <Users className="h-7 w-7" weight="light" />
                          </motion.div>
                          <div>
                            <h4 className="font-display text-xl font-bold text-white mb-3 group-hover:text-atlas-teal transition-colors">
                              Crypto Enthusiasts
                            </h4>
                            <p className="text-sm leading-relaxed text-atlas-gray-400 group-hover:text-atlas-gray-300 transition-colors">
                              Intuitive interface designed for seamless
                              exploration, making blockchain data accessible and
                              meaningful
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-atlas-gray-800/80 via-atlas-gray-800/40 to-atlas-gray-800/80 p-8 transition-all hover:bg-gradient-to-br hover:from-atlas-gray-800/90 hover:via-atlas-gray-800/50 hover:to-atlas-gray-800/90 backdrop-blur-sm border border-atlas-gray-700/50"
                        whileHover={{
                          scale: 1.02,
                          transition: { type: "spring", stiffness: 300 },
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-atlas-teal/5 blur-2xl group-hover:bg-atlas-teal/10 transition-all duration-300" />
                        <div className="absolute -left-8 -bottom-8 h-32 w-32 rounded-full bg-atlas-teal/5 blur-2xl group-hover:bg-atlas-teal/10 transition-all duration-300" />
                        <div className="relative space-y-6">
                          <motion.div
                            className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-atlas-teal/10 text-atlas-teal ring-1 ring-atlas-teal/25 group-hover:ring-atlas-teal/40 transition-all duration-300"
                            whileHover={{ rotate: 5 }}
                          >
                            <Buildings className="h-7 w-7" weight="light" />
                          </motion.div>
                          <div>
                            <h4 className="font-display text-xl font-bold text-white mb-3 group-hover:text-atlas-teal transition-colors">
                              Enterprise Solutions
                            </h4>
                            <p className="text-sm leading-relaxed text-atlas-gray-400 group-hover:text-atlas-gray-300 transition-colors">
                              Comprehensive suite of compliance, risk
                              management, and security tools for institutional
                              needs
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-atlas-gray-800/80 via-atlas-gray-800/40 to-atlas-gray-800/80 p-8 transition-all hover:bg-gradient-to-br hover:from-atlas-gray-800/90 hover:via-atlas-gray-800/50 hover:to-atlas-gray-800/90 backdrop-blur-sm border border-atlas-gray-700/50"
                        whileHover={{
                          scale: 1.02,
                          transition: { type: "spring", stiffness: 300 },
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-atlas-teal/5 blur-2xl group-hover:bg-atlas-teal/10 transition-all duration-300" />
                        <div className="absolute -left-8 -bottom-8 h-32 w-32 rounded-full bg-atlas-teal/5 blur-2xl group-hover:bg-atlas-teal/10 transition-all duration-300" />
                        <div className="relative space-y-6">
                          <motion.div
                            className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-atlas-teal/10 text-atlas-teal ring-1 ring-atlas-teal/25 group-hover:ring-atlas-teal/40 transition-all duration-300"
                            whileHover={{ rotate: 5 }}
                          >
                            <Crown className="h-7 w-7" weight="light" />
                          </motion.div>
                          <div>
                            <h4 className="font-display text-xl font-bold text-white mb-3 group-hover:text-atlas-teal transition-colors">
                              Premium Experience
                            </h4>
                            <p className="text-sm leading-relaxed text-atlas-gray-400 group-hover:text-atlas-gray-300 transition-colors">
                              Bespoke analytics and customized security
                              solutions tailored to your specific requirements
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Section>

          {/* Security & Compliance Section */}
          <Section
            variant="dark"
            className="py-16 sm:py-20"
            id="security"
            role="region"
            aria-labelledby="security-title"
          >
            <div className="space-y-12 sm:space-y-16 px-6 sm:px-0">
              <div className="text-center mb-12">
                <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
                  Security & <span className="text-atlas-teal">Compliance</span>
                </h3>
                <p className="text-atlas-gray-400 text-lg max-w-2xl mx-auto mt-4">
                  Setting the highest standards for security and compliance in
                  blockchain exploration
                </p>
              </div>

              <motion.div
                className="relative mx-auto max-w-5xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative overflow-hidden rounded-2xl border-glow bg-card-gradient p-8 sm:p-12 backdrop-blur-sm">
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-atlas-teal/10 blur-3xl" />
                  <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-atlas-teal/10 blur-3xl" />

                  <div className="relative z-10">
                    <div className="grid gap-12 lg:grid-cols-2">
                      {/* Certifications & Compliance Column */}
                      <div className="space-y-8">
                        {/* Certifications */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <Shield
                              className="h-5 w-5 text-atlas-teal"
                              weight="light"
                            />
                            <h4 className="font-display text-lg font-bold text-white">
                              Certifications
                            </h4>
                          </div>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-atlas-gray-400">
                                  ISO/IEC 27001
                                </span>
                                <span className="text-sm text-atlas-gray-400">
                                  60%
                                </span>
                              </div>
                              <div className="h-2 w-full rounded-full bg-atlas-gray-800">
                                <motion.div
                                  className="h-full rounded-full bg-atlas-teal/70"
                                  initial={{ width: 0 }}
                                  whileInView={{ width: "60%" }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1, ease: "easeOut" }}
                                />
                              </div>
                              <span className="text-xs text-atlas-gray-500">
                                Status: In Progress • ETA: Q2 2025
                              </span>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-atlas-gray-400">
                                  SOC 2
                                </span>
                                <span className="text-sm text-atlas-gray-400">
                                  50%
                                </span>
                              </div>
                              <div className="h-2 w-full rounded-full bg-atlas-gray-800">
                                <motion.div
                                  className="h-full rounded-full bg-atlas-teal/70"
                                  initial={{ width: 0 }}
                                  whileInView={{ width: "50%" }}
                                  viewport={{ once: true }}
                                  transition={{
                                    duration: 1,
                                    ease: "easeOut",
                                    delay: 0.2,
                                  }}
                                />
                              </div>
                              <span className="text-xs text-atlas-gray-500">
                                Status: In Progress • ETA: Q3 2025
                              </span>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-atlas-gray-400">
                                  Security Audits
                                </span>
                                <span className="text-sm text-atlas-gray-400">
                                  30%
                                </span>
                              </div>
                              <div className="h-2 w-full rounded-full bg-atlas-gray-800">
                                <motion.div
                                  className="h-full rounded-full bg-atlas-teal/70"
                                  initial={{ width: 0 }}
                                  whileInView={{ width: "30%" }}
                                  viewport={{ once: true }}
                                  transition={{
                                    duration: 1,
                                    ease: "easeOut",
                                    delay: 0.4,
                                  }}
                                />
                              </div>
                              <span className="text-xs text-atlas-gray-500">
                                Status: Scheduled • ETA: Q4 2025
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Compliance */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <Scales
                              className="h-5 w-5 text-atlas-teal"
                              weight="light"
                            />
                            <h4 className="font-display text-lg font-bold text-white">
                              Compliance
                            </h4>
                          </div>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-atlas-gray-400">
                                  GDPR Alignment
                                </span>
                                <span className="text-sm text-atlas-gray-400">
                                  70%
                                </span>
                              </div>
                              <div className="h-2 w-full rounded-full bg-atlas-gray-800">
                                <motion.div
                                  className="h-full rounded-full bg-atlas-teal/70"
                                  initial={{ width: 0 }}
                                  whileInView={{ width: "70%" }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1, ease: "easeOut" }}
                                />
                              </div>
                              <span className="text-xs text-atlas-gray-500">
                                Status: In Progress • ETA: Q2 2025
                              </span>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-atlas-gray-400">
                                  CCPA Compliance
                                </span>
                                <span className="text-sm text-atlas-gray-400">
                                  60%
                                </span>
                              </div>
                              <div className="h-2 w-full rounded-full bg-atlas-gray-800">
                                <motion.div
                                  className="h-full rounded-full bg-atlas-teal/70"
                                  initial={{ width: 0 }}
                                  whileInView={{ width: "60%" }}
                                  viewport={{ once: true }}
                                  transition={{
                                    duration: 1,
                                    ease: "easeOut",
                                    delay: 0.2,
                                  }}
                                />
                              </div>
                              <span className="text-xs text-atlas-gray-500">
                                Status: In Progress • ETA: Q3 2025
                              </span>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-atlas-gray-400">
                                  AML/KYC Framework
                                </span>
                                <span className="text-sm text-atlas-gray-400">
                                  35%
                                </span>
                              </div>
                              <div className="h-2 w-full rounded-full bg-atlas-gray-800">
                                <motion.div
                                  className="h-full rounded-full bg-atlas-teal/70"
                                  initial={{ width: 0 }}
                                  whileInView={{ width: "35%" }}
                                  viewport={{ once: true }}
                                  transition={{
                                    duration: 1,
                                    ease: "easeOut",
                                    delay: 0.4,
                                  }}
                                />
                              </div>
                              <span className="text-xs text-atlas-gray-500">
                                Status: In Development • ETA: Q4 2025
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Data Protection & Monitoring Column */}
                      <div className="space-y-8">
                        {/* Data Protection */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <LockKey
                              className="h-5 w-5 text-atlas-teal"
                              weight="light"
                            />
                            <h4 className="font-display text-lg font-bold text-white">
                              Data Protection
                            </h4>
                          </div>
                          <ul className="grid gap-3 text-sm text-atlas-gray-400">
                            <li className="flex items-center gap-3">
                              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-atlas-teal/10">
                                <CheckSquare
                                  className="h-3.5 w-3.5 text-atlas-teal"
                                  weight="fill"
                                />
                              </div>
                              <span>End-to-End Encryption</span>
                            </li>
                            <li className="flex items-center gap-3">
                              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-atlas-teal/10">
                                <CheckSquare
                                  className="h-3.5 w-3.5 text-atlas-teal"
                                  weight="fill"
                                />
                              </div>
                              <span>Role-Based Access</span>
                            </li>
                            <li className="flex items-center gap-3">
                              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-atlas-teal/10">
                                <CheckSquare
                                  className="h-3.5 w-3.5 text-atlas-teal"
                                  weight="fill"
                                />
                              </div>
                              <span>Data Anonymization</span>
                            </li>
                          </ul>
                        </div>

                        {/* Monitoring */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <Eye
                              className="h-5 w-5 text-atlas-teal"
                              weight="light"
                            />
                            <h4 className="font-display text-lg font-bold text-white">
                              Monitoring
                            </h4>
                          </div>
                          <ul className="grid gap-3 text-sm text-atlas-gray-400">
                            <li className="flex items-center gap-3">
                              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-atlas-teal/10">
                                <CheckSquare
                                  className="h-3.5 w-3.5 text-atlas-teal"
                                  weight="fill"
                                />
                              </div>
                              <span>Dark Web Monitoring</span>
                            </li>
                            <li className="flex items-center gap-3">
                              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-atlas-teal/10">
                                <CheckSquare
                                  className="h-3.5 w-3.5 text-atlas-teal"
                                  weight="fill"
                                />
                              </div>
                              <span>Address Flagging</span>
                            </li>
                            <li className="flex items-center gap-3">
                              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-atlas-teal/10">
                                <CheckSquare
                                  className="h-3.5 w-3.5 text-atlas-teal"
                                  weight="fill"
                                />
                              </div>
                              <span>Smart Contract Audits</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Section>

          {/* About Us Section */}
          <Section
            variant="dark"
            className="py-16 sm:py-20"
            id="about"
            role="region"
            aria-labelledby="about-title"
          >
            <div className="space-y-12 sm:space-y-16 px-6 sm:px-0">
              <div className="text-center">
                <h2
                  id="about-title"
                  className="font-display text-[2.5rem] sm:text-4xl font-bold tracking-tight text-white md:text-5xl"
                >
                  About <span className="text-atlas-teal">Us</span>
                </h2>
              </div>

              {/* Vision & Expertise and Independence & Values Cards */}
              <div className="mt-20 relative mx-auto max-w-7xl">
                <div className="grid grid-cols-12 gap-6">
                  {/* Vision & Expertise - Largest Box */}
                  <motion.div
                    className="col-span-12 lg:col-span-7 relative overflow-hidden rounded-2xl border border-atlas-gray-700/50 bg-gradient-to-br from-atlas-gray-800/80 via-atlas-gray-800/40 to-atlas-gray-800/80 p-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-atlas-teal/5 blur-3xl" />
                    <div className="relative space-y-8">
                      <div className="flex items-center gap-4">
                        <motion.div
                          className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-atlas-teal/10 text-atlas-teal ring-1 ring-atlas-teal/25"
                          whileHover={{ rotate: 5 }}
                        >
                          <Brain className="h-7 w-7" weight="light" />
                        </motion.div>
                        <h3 className="font-display text-2xl font-bold text-white">
                          Vision & Expertise
                        </h3>
                      </div>

                      <div className="relative space-y-8">
                        <div className="prose prose-invert max-w-none">
                          <p className="text-atlas-gray-400 leading-relaxed">
                            At Atlas, we're a diverse collective of innovators
                            driven by a shared vision for the future of Web 3.0.
                            Our team blends deep expertise in blockchain,
                            fintech, and AI, with developers who have been
                            embedded in the Web 3.0 space since its earliest
                            days.
                          </p>
                        </div>

                        <div className="relative overflow-hidden rounded-xl border border-atlas-gray-700/50 bg-atlas-gray-800/30 p-8">
                          <div className="absolute inset-0 bg-gradient-to-br from-atlas-teal/5 to-transparent opacity-50" />
                          <div className="relative space-y-6">
                            <h4 className="font-display text-xl font-semibold text-atlas-teal">
                              Expertise
                            </h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-atlas-gray-400">
                              <li className="flex items-center gap-3">
                                <span className="h-1.5 w-1.5 rounded-full bg-atlas-teal/50" />
                                <span className="font-medium text-white">
                                  Blockchain Development
                                </span>
                              </li>
                              <li className="flex items-center gap-3">
                                <span className="h-1.5 w-1.5 rounded-full bg-atlas-teal/50" />
                                <span className="font-medium text-white">
                                  AI Integration
                                </span>
                              </li>
                              <li className="flex items-center gap-3">
                                <span className="h-1.5 w-1.5 rounded-full bg-atlas-teal/50" />
                                <span className="font-medium text-white">
                                  Global Payments
                                </span>
                              </li>
                              <li className="flex items-center gap-3">
                                <span className="h-1.5 w-1.5 rounded-full bg-atlas-teal/50" />
                                <span className="font-medium text-white">
                                  Regulatory Compliance
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Brand Quote - Small Emphasis Box */}
                  <motion.div
                    className="col-span-12 lg:col-span-5 row-span-1 relative overflow-hidden rounded-2xl border border-atlas-gray-700/50 bg-gradient-to-br from-atlas-gray-800/80 via-atlas-gray-800/40 to-atlas-gray-800/80 p-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="absolute inset-0">
                      <div className="absolute inset-0 bg-gradient-to-b from-atlas-teal/5 via-transparent to-transparent opacity-30" />
                      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
                    </div>
                    <div className="relative h-full flex flex-col items-center justify-center text-center space-y-6">
                      <motion.div
                        className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-atlas-teal/10 text-atlas-teal ring-1 ring-atlas-teal/25"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Shield className="h-8 w-8" weight="light" />
                      </motion.div>
                      <div className="space-y-4">
                        <h3 className="font-display text-3xl font-bold text-white leading-tight">
                          "We're not just building tools — we're building
                          trust."
                        </h3>
                        <p className="text-lg text-atlas-gray-400 leading-relaxed max-w-sm mx-auto">
                          Atlas exists to serve the builders of tomorrow, not
                          the investors of yesterday.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Independence & Values - Medium Box */}
                  <motion.div
                    className="col-span-12 lg:col-span-12 relative overflow-hidden rounded-2xl border border-atlas-gray-700/50 bg-gradient-to-br from-atlas-gray-800/80 via-atlas-gray-800/40 to-atlas-gray-800/80 p-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-atlas-teal/5 blur-3xl" />
                    <div className="relative space-y-8">
                      <div className="flex items-center gap-4">
                        <motion.div
                          className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-atlas-teal/10 text-atlas-teal ring-1 ring-atlas-teal/25"
                          whileHover={{ rotate: -5 }}
                        >
                          <Crown className="h-7 w-7" weight="light" />
                        </motion.div>
                        <h3 className="font-display text-2xl font-bold text-white">
                          Independence & Values
                        </h3>
                      </div>

                      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="prose prose-invert max-w-none lg:col-span-1">
                          <p className="text-atlas-gray-400 leading-relaxed">
                            We remain a private, founder-funded venture—choosing
                            to forgo external seed funding to preserve creative
                            autonomy and prioritize user-focused development.
                            This independence allows us to build with intention,
                            delivering unmatched transparency, integrity, and
                            innovation in the decentralized ecosystem.
                          </p>
                        </div>

                        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="relative overflow-hidden rounded-xl border border-atlas-gray-700/50 bg-atlas-gray-800/30 p-6">
                            <div className="absolute inset-0 bg-gradient-to-br from-atlas-teal/5 to-transparent opacity-50" />
                            <div className="relative space-y-4">
                              <h4 className="font-display text-lg font-semibold text-atlas-teal">
                                Core Values
                              </h4>
                              <ul className="space-y-3 text-sm text-atlas-gray-400">
                                <li className="flex items-center gap-2">
                                  <span className="h-1.5 w-1.5 rounded-full bg-atlas-teal/50" />
                                  <span className="font-medium">
                                    User-First Development
                                  </span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <span className="h-1.5 w-1.5 rounded-full bg-atlas-teal/50" />
                                  <span className="font-medium">
                                    Creative Autonomy
                                  </span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <span className="h-1.5 w-1.5 rounded-full bg-atlas-teal/50" />
                                  <span className="font-medium">
                                    Transparency
                                  </span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <span className="h-1.5 w-1.5 rounded-full bg-atlas-teal/50" />
                                  <span className="font-medium">
                                    Innovation
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="relative overflow-hidden rounded-xl border border-atlas-gray-700/50 bg-atlas-gray-800/30 p-6">
                            <div className="absolute inset-0 bg-gradient-to-br from-atlas-teal/5 to-transparent opacity-50" />
                            <div className="relative space-y-4">
                              <h4 className="font-display text-lg font-semibold text-atlas-teal">
                                Approach
                              </h4>
                              <ul className="space-y-3 text-sm text-atlas-gray-400">
                                <li className="flex items-center gap-2">
                                  <span className="h-1.5 w-1.5 rounded-full bg-atlas-teal/50" />
                                  <span className="font-medium">
                                    Founder-Funded
                                  </span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <span className="h-1.5 w-1.5 rounded-full bg-atlas-teal/50" />
                                  <span className="font-medium">
                                    Independent Development
                                  </span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <span className="h-1.5 w-1.5 rounded-full bg-atlas-teal/50" />
                                  <span className="font-medium">
                                    Long-Term Vision
                                  </span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <span className="h-1.5 w-1.5 rounded-full bg-atlas-teal/50" />
                                  <span className="font-medium">
                                    Quality-Driven
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Features Section */}
              <Section
                variant="dark"
                className="overflow-hidden py-16 sm:py-20"
                id="experience"
                role="region"
                aria-labelledby="experience-title"
              >
                <div className="space-y-12 px-6 sm:px-0">
                  <div className="text-center">
                    <h2
                      id="experience-title"
                      className="font-display text-[2.5rem] sm:text-4xl font-bold tracking-tight text-white md:text-5xl"
                    >
                      Experience Atlas
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-atlas-gray-400">
                      Discover the power of intuitive blockchain exploration
                    </p>
                  </div>
                  <motion.div
                    className="relative -mx-6 sm:mx-0"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    <div className="relative">
                      <div className="absolute -inset-x-20 -top-20 -bottom-20 bg-glow" />
                      <div className="relative rounded-none sm:rounded-xl border-x-0 sm:border-glow bg-card-gradient p-4 sm:p-6 backdrop-blur-sm">
                        <DynamicScreenshotShowcase
                          className="mt-8 sm:mt-12"
                          imageSrc="/image-2-landing.png"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </Section>

              {/* CTA Section */}
              <Section
                variant="dark"
                className="py-16 sm:py-20"
                id="cta"
                role="region"
                aria-labelledby="cta-title"
              >
                <div className="space-y-10 px-6 sm:px-0">
                  <div className="text-center">
                    <h2
                      id="cta-title"
                      className="font-display text-[2.5rem] sm:text-4xl font-bold tracking-tight text-white md:text-5xl"
                    >
                      Start Your Journey
                    </h2>
                    <p className="mt-4 text-base sm:text-xl text-atlas-gray-400">
                      Join the future of blockchain exploration
                    </p>
                  </div>
                  <form
                    onSubmit={handleSubmit}
                    className="mx-auto mt-8 flex max-w-md gap-4 flex-col sm:flex-row"
                  >
                    <div className="flex-1">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full rounded-lg border-2 border-atlas-gray-700 bg-atlas-gray-800/50 px-4 py-3 text-base text-white placeholder-atlas-gray-500 backdrop-blur-sm transition-colors focus:border-atlas-teal focus:outline-none disabled:opacity-50"
                        disabled={isSubmitting}
                        aria-label="Email address"
                        aria-describedby={formError ? "form-error" : undefined}
                      />
                      {formError && (
                        <p
                          id="form-error"
                          className="mt-2 text-sm text-red-400"
                        >
                          {formError}
                        </p>
                      )}
                    </div>
                    <Button
                      variant="primary"
                      type="submit"
                      className="w-full sm:w-auto text-base px-8 py-3 disabled:opacity-50"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Get Started"}
                    </Button>
                  </form>
                </div>
              </Section>

              {/* Footer */}
              <footer
                className="border-t border-atlas-gray-800 bg-atlas-black py-12"
                role="contentinfo"
              >
                <div className="mx-auto max-w-6xl px-6 sm:px-6 lg:px-8">
                  <div className="flex flex-col items-center justify-between gap-6 sm:gap-4 md:flex-row">
                    <p className="text-atlas-gray-500 text-center sm:text-left text-sm">
                      © 2025 Atlas Explorer Inc. Built by Audicity. All rights
                      reserved.
                    </p>
                    <div className="flex items-center gap-8">
                      <button
                        onClick={() =>
                          (window.location.href =
                            "mailto:contact@atlasexplorer.com")
                        }
                        className="text-atlas-gray-500 transition-colors hover:text-atlas-teal text-sm"
                      >
                        Contact Us
                      </button>
                      <a
                        href="/privacy"
                        className="text-atlas-gray-500 transition-colors hover:text-atlas-teal text-sm"
                      >
                        Privacy Policy
                      </a>
                      <a
                        href="#"
                        className="text-atlas-gray-500 transition-colors hover:text-atlas-teal text-sm"
                      >
                        Follow Us
                      </a>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </Section>
        </div>
      </main>
    </ErrorBoundary>
  );
}
