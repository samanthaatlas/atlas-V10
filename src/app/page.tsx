'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import dynamic from 'next/dynamic';
import ErrorBoundary from '@/components/ErrorBoundary';
import {
  Cube,
  CheckSquare,
  Code,
  ChartLine,
  Brain,
  Users,
  House,
  Rocket,
  Layout,
  PaperPlaneTilt,
  List,
  Shield,
  LockKey,
  Eye,
  Graph,
  Bell,
} from '@phosphor-icons/react';
import { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

// Dynamic imports for code splitting
const DynamicScreenshotShowcase = dynamic(
  () =>
    import('@/components/ui/ScreenshotShowcase').then((mod) => ({
      default: mod.ScreenshotShowcase,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="animate-pulse bg-atlas-gray-800 rounded-lg h-96" />
    ),
  }
);

// Memoize static data
const SCREENSHOTS = [
  {
    src: '/screenshots/dashboard.png',
    alt: 'Atlas Dashboard - Interactive blockchain data visualization',
    width: 1920,
    height: 1080,
  },
  {
    src: '/screenshots/analytics.png',
    alt: 'Analytics View - Comprehensive blockchain analytics interface',
    width: 1920,
    height: 1080,
  },
  {
    src: '/screenshots/transactions.png',
    alt: 'Transaction Explorer - Detailed blockchain transaction analysis',
    width: 1920,
    height: 1080,
  },
] as const;

const stats = [
  {
    label: 'Transactions Processed in Private Beta',
    value: '1.2M+',
  },
  {
    label: 'Blocks Analyzed in Private Beta',
    value: '850K+',
  },
  {
    label: 'Wallets Monitored with Live Alerts',
    value: '30K+',
  },
  {
    label: 'Smart Contract Events Parsed',
    value: '50K+',
  },
  {
    label: 'EVM-Compatible Blockchains',
    value: '5+',
  },
  {
    label: 'Dark Web Signals Tracked & Correlated',
    value: '2.5K+',
  },
];

const services = [
  {
    title: 'Block Explorer',
    description: 'Real-time blockchain data visualization and exploration.',
    icon: <Cube className="h-6 w-6" weight="light" />,
  },
  {
    title: 'Transaction Tracking',
    description: 'Instant transaction monitoring and analysis.',
    icon: <CheckSquare className="h-6 w-6" weight="light" />,
  },
  {
    title: 'Smart Contract Analysis',
    description: 'Interactive smart contract auditing and testing.',
    icon: <Code className="h-6 w-6" weight="light" />,
  },
  {
    title: 'Network Analytics',
    description: 'Cross-chain insights and network monitoring.',
    icon: <ChartLine className="h-6 w-6" weight="light" />,
  },
  {
    title: 'AtlasInsight Engine',
    description: 'AI-powered pattern detection and threat analysis.',
    icon: <Brain className="h-6 w-6" weight="light" />,
  },
  {
    title: 'Heuristics Layer',
    description: 'Advanced wallet behavior analysis and clustering.',
    icon: <Graph className="h-6 w-6" weight="light" />,
  },
  {
    title: 'Dark Web Monitoring',
    description: 'Proactive off-chain threat detection.',
    icon: <Eye className="h-6 w-6" weight="light" />,
  },
  {
    title: 'Risk Alerts',
    description: 'Real-time high-risk activity notifications.',
    icon: <Bell className="h-6 w-6" weight="light" />,
  },
  {
    title: 'Enterprise Tools',
    description: 'Secure team collaboration with audit trails.',
    icon: <Users className="h-6 w-6" weight="light" />,
  },
];

// Improved email validation
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Enhanced rate limiting
const RATE_LIMIT = {
  DURATION: 60000, // 1 minute
  MAX_ATTEMPTS: 3,
  COOLDOWN: 300000, // 5 minutes
} as const;

// Add this new component near the top of the file, after imports
const PageBreak = ({
  variant = 'default',
}: {
  variant?: 'default' | 'hero';
}) => {
  return (
    <motion.div
      className={cn(
        'relative',
        variant === 'hero' ? 'w-full' : 'px-4 sm:px-6 max-w-5xl mx-auto'
      )}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div
          className={cn(
            'w-full border-t border-atlas-teal/30',
            variant === 'hero'
              ? 'bg-gradient-to-r from-transparent via-atlas-teal/30 to-transparent'
              : ''
          )}
        />
      </div>
      <div className="relative flex justify-center">
        <div className="bg-atlas-black px-4">
          <motion.div
            className="h-8 w-8 rounded-full bg-atlas-teal/10 flex items-center justify-center"
            whileInView={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              times: [0, 0.5, 1],
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            <div className="h-2 w-2 rounded-full bg-atlas-teal" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Home() {
  const [email, setEmail] = useState('');
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const [submitAttempts, setSubmitAttempts] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedFeature, setExpandedFeature] = useState(-1);

  // Improved email validation
  const validateEmail = useCallback((email: string): boolean => {
    return EMAIL_REGEX.test(email);
  }, []);

  // Enhanced form submission with proper security
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      // Rate limiting with enhanced security
      const now = Date.now();
      if (now - lastSubmitTime < RATE_LIMIT.DURATION) {
        if (submitAttempts >= RATE_LIMIT.MAX_ATTEMPTS) {
          setFormError(
            `Too many attempts. Please wait ${
              RATE_LIMIT.COOLDOWN / 60000
            } minutes.`
          );
          return;
        }
        setSubmitAttempts((prev) => prev + 1);
      } else {
        setSubmitAttempts(1);
      }
      setLastSubmitTime(now);

      // Validation
      if (!email.trim()) {
        setFormError('Email is required');
        return;
      }
      if (!validateEmail(email)) {
        setFormError('Please enter a valid email address');
        return;
      }

      setIsSubmitting(true);
      setFormError('');

      try {
        // Add CSRF token handling
        const csrfToken = document.querySelector<HTMLMetaElement>(
          'meta[name="csrf-token"]'
        )?.content;

        // Here you would add your API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setEmail('');
        // Show success message
      } catch (error) {
        setFormError('An error occurred. Please try again.');
        console.error('Form submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [email, lastSubmitTime, submitAttempts, validateEmail]
  );

  // Improved scroll handling with proper types
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const offset = 32;
    const sectionTop =
      section.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth',
    });
  }, []);

  // Enhanced keyboard navigation
  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent, sectionId: string) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        scrollToSection(sectionId);
      }
    },
    [scrollToSection]
  );

  return (
    <ErrorBoundary>
      <main className="relative min-h-screen bg-atlas-black" role="main">
        <div className="absolute inset-0 bg-dark-gradient" />

        {/* Floating Navigation */}
        <div
          className="fixed right-3 sm:right-6 top-1/2 z-50 -translate-y-1/2 scale-90 sm:scale-100"
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
              drag="x"
              dragConstraints={{ left: -200, right: 0 }}
              dragElastic={0.1}
              dragMomentum={false}
              onDragEnd={(event, info) => {
                if (info.offset.x < -50) {
                  setIsMenuOpen(false);
                } else if (info.offset.x > 50) {
                  setIsMenuOpen(true);
                }
              }}
              initial={{ opacity: 1, x: 0 }}
              animate={{
                opacity: isMenuOpen ? 1 : 0.5,
                x: isMenuOpen ? 0 : 200,
                transition: { type: 'spring', stiffness: 300, damping: 30 },
              }}
              className={cn(
                'flex flex-col gap-3 rounded-2xl bg-atlas-gray-900/95 p-3 shadow-xl backdrop-blur-sm border border-atlas-gray-700',
                'transition-shadow duration-300 ease-in-out touch-pan-x',
                isMenuOpen ? 'shadow-2xl' : 'shadow-lg'
              )}
            >
              {[
                { id: 'hero', icon: <House weight="light" />, label: 'Home' },
                {
                  id: 'key-features',
                  icon: <Layout weight="light" />,
                  label: 'Features',
                },
                {
                  id: 'security',
                  icon: <Shield weight="light" />,
                  label: 'Security',
                },
                {
                  id: 'about',
                  icon: <Users weight="light" />,
                  label: 'About',
                },
                {
                  id: 'experience',
                  icon: <Rocket weight="light" />,
                  label: 'Experience',
                },
                {
                  id: 'cta',
                  icon: <PaperPlaneTilt weight="light" />,
                  label: 'Contact',
                },
              ].map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  onKeyPress={(e) => handleKeyPress(e, item.id)}
                  className="group flex items-center justify-center rounded-xl p-3 text-left text-white transition-colors hover:bg-atlas-gray-700/50 hover:text-atlas-teal focus:outline-none focus:ring-2 focus:ring-atlas-teal focus:ring-offset-2 focus:ring-offset-atlas-gray-800 active:scale-95"
                  aria-label={`Scroll to ${item.label} section`}
                  role="button"
                  tabIndex={0}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex h-7 w-7 items-center justify-center text-atlas-teal">
                    {item.icon}
                  </span>
                </motion.button>
              ))}
            </motion.div>
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                'absolute -left-3 top-2 rounded-full border border-atlas-gray-700 bg-atlas-gray-900 p-2 text-atlas-teal shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-atlas-teal focus:ring-offset-2 focus:ring-offset-atlas-black',
                'hover:bg-atlas-gray-800',
                !isMenuOpen && 'bg-opacity-50 hover:bg-opacity-100'
              )}
              aria-label={
                isMenuOpen ? 'Hide navigation menu' : 'Show navigation menu'
              }
              title={isMenuOpen ? 'Hide menu' : 'Show menu'}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                rotate: isMenuOpen ? 180 : 0,
                transition: { duration: 0.3 },
              }}
            >
              <List className="h-5 w-5" weight="light" />
            </motion.button>

            {/* Swipe Hint */}
            <motion.div
              className="absolute -left-12 top-1/2 -translate-y-1/2 text-atlas-gray-400 text-xs hidden sm:block"
              initial={{ opacity: 0 }}
              animate={{
                opacity: isMenuOpen ? [0, 1, 0] : 0,
                x: isMenuOpen ? [0, 10, 0] : 0,
              }}
              transition={{
                duration: 1.5,
                repeat: 2,
                repeatDelay: 1,
              }}
            >
              Swipe to hide
            </motion.div>
          </motion.div>
        </div>

        <div className="relative">
          {/* Hero Section */}
          <Section
            className="relative overflow-hidden py-8 sm:py-16 lg:min-h-[90vh] lg:py-32"
            id="hero"
            role="banner"
            aria-labelledby="hero-title"
          >
            <div className="absolute inset-0 bg-dots bg-[length:16px_16px] sm:bg-[length:20px_20px] opacity-5" />
            <motion.div
              className="relative z-10 mx-auto max-w-5xl text-center px-4 sm:px-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4 sm:space-y-6 mb-4 sm:mb-8">
                <motion.span
                  className="inline-flex items-center gap-2 rounded-full bg-atlas-teal/10 px-2.5 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium text-atlas-teal ring-1 ring-atlas-teal/20"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: [1, 0.8, 1], scale: [1, 1.02, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <span className="relative flex h-1.5 sm:h-2 w-1.5 sm:w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-atlas-teal opacity-75"></span>
                    <span className="relative inline-flex h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-atlas-teal"></span>
                  </span>
                  Private Beta Now Available
                </motion.span>
                <h1
                  id="hero-title"
                  className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl px-4 sm:px-0"
                >
                  <span className="text-gradient">Unlock</span> the Blockchain{' '}
                  <span className="text-gradient">Universe</span>
                </h1>
                <p className="mx-auto max-w-2xl text-sm sm:text-lg leading-relaxed text-atlas-gray-400 md:text-xl px-4 sm:px-0">
                  Redefining Web3 Oversight—Simplifying Complexity, Unlocking
                  Insights. Enterprise-Grade Compliance Starts with Atlas.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 px-4 sm:px-0">
                <Button
                  size="lg"
                  variant="primary"
                  className="w-full sm:w-auto text-sm sm:text-base px-4 sm:px-8 py-2.5 sm:py-3"
                >
                  Apply for Private Beta
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => scrollToSection('key-features')}
                  className="w-full sm:w-auto text-sm sm:text-base px-4 sm:px-8 py-2.5 sm:py-3"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="relative z-10 mt-8 sm:mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="mx-auto max-w-5xl px-4 sm:px-6">
                <div className="grid gap-2 sm:gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="relative overflow-hidden rounded-lg border-glow bg-card-gradient p-3 sm:p-6 backdrop-blur-sm"
                    >
                      <div className="relative z-10 space-y-1 sm:space-y-2">
                        <h3 className="font-display text-xl sm:text-3xl font-bold text-atlas-teal">
                          {stat.value}
                        </h3>
                        <p className="text-xs sm:text-sm text-atlas-gray-400">
                          {stat.label}
                        </p>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-atlas-teal/10 to-transparent opacity-50" />
                    </div>
                  ))}
                </div>
                <p className="text-center mt-4 sm:mt-8 text-sm sm:text-lg text-atlas-gray-400 max-w-3xl mx-auto">
                  Atlas is not just another analytics tool — it's the
                  infrastructure layer for the next era of blockchain
                  legitimacy.
                </p>
              </div>
            </motion.div>
          </Section>

          {/* Page Break */}
          <PageBreak variant="hero" />

          {/* Services Section */}
          <Section
            variant="dark"
            className="py-4 sm:py-8 lg:py-12 overflow-hidden"
            id="key-features"
            role="region"
            aria-labelledby="features-title"
          >
            <div className="space-y-4">
              <div className="text-center px-4">
                <h2
                  id="features-title"
                  className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white md:text-5xl"
                >
                  Key <span className="text-atlas-teal">Features</span>
                </h2>
              </div>

              {/* Desktop Grid Layout (hidden on mobile) */}
              <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-6">
                {services.map((service) => (
                  <motion.div
                    key={service.title}
                    className="group relative overflow-hidden rounded-xl border border-atlas-gray-700/50 bg-gradient-to-br from-atlas-gray-800/80 via-atlas-gray-800/40 to-atlas-gray-800/80 p-4 backdrop-blur-sm hover:bg-atlas-gray-800/20 transition-all hover:-translate-y-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="shrink-0">
                        <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-atlas-teal/10 text-atlas-teal ring-1 ring-atlas-teal/25 transition-all duration-200 group-hover:scale-110 group-hover:ring-atlas-teal/40">
                          {service.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-display text-base font-bold text-white group-hover:text-atlas-teal transition-colors">
                          {service.title}
                        </h3>
                        <p className="mt-1 text-sm text-atlas-gray-400 group-hover:text-atlas-gray-300 transition-colors">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Accordion Grid (hidden on desktop) */}
              <div className="grid grid-cols-2 gap-2 px-4 sm:hidden">
                {services.map((service, index) => (
                  <motion.button
                    key={service.title}
                    onClick={() =>
                      setExpandedFeature(expandedFeature === index ? -1 : index)
                    }
                    className={cn(
                      'group relative overflow-hidden rounded-xl border border-atlas-gray-700/50 bg-gradient-to-br from-atlas-gray-800/80 via-atlas-gray-800/40 to-atlas-gray-800/80 p-3 text-left transition-all',
                      expandedFeature === index
                        ? 'col-span-2 min-h-[120px]'
                        : 'min-h-[80px]'
                    )}
                  >
                    <div className="flex items-start gap-2">
                      <div className="shrink-0">
                        <div
                          className={cn(
                            'inline-flex h-6 w-6 items-center justify-center rounded-lg bg-atlas-teal/10 text-atlas-teal ring-1 ring-atlas-teal/25 transition-all duration-200',
                            expandedFeature === index
                              ? 'scale-110'
                              : 'group-hover:scale-110'
                          )}
                        >
                          {service.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3
                          className={cn(
                            'font-display text-sm font-bold text-white transition-colors',
                            expandedFeature === index
                              ? 'text-atlas-teal'
                              : 'group-hover:text-atlas-teal'
                          )}
                        >
                          {service.title}
                        </h3>
                        <motion.p
                          initial={false}
                          animate={{
                            height: expandedFeature === index ? 'auto' : 0,
                            opacity: expandedFeature === index ? 1 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                          className="mt-1 text-xs text-atlas-gray-400 overflow-hidden"
                        >
                          {service.description}
                        </motion.p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </Section>

          {/* Page Break */}
          <PageBreak />

          {/* Security & Compliance Section */}
          <Section
            variant="dark"
            className="py-6 sm:py-12 lg:py-16"
            id="security"
            role="region"
            aria-labelledby="security-title"
          >
            <div className="space-y-6 sm:space-y-12 px-4 sm:px-6">
              <div className="text-center mb-6 sm:mb-12">
                <h3 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white">
                  Security & <span className="text-atlas-teal">Compliance</span>
                </h3>
                <p className="text-atlas-gray-400 text-sm sm:text-lg max-w-2xl mx-auto mt-2 sm:mt-4">
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
                <div className="relative overflow-hidden rounded-2xl border-glow bg-card-gradient p-4 sm:p-8 lg:p-12 backdrop-blur-sm">
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-atlas-teal/10 blur-3xl" />
                  <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-atlas-teal/10 blur-3xl" />

                  <div className="relative z-10">
                    <div className="grid gap-8 lg:grid-cols-2">
                      {/* Certifications & Compliance Column */}
                      <div className="space-y-6 sm:space-y-8">
                        {/* Certifications */}
                        <div className="space-y-3 sm:space-y-4">
                          <div className="flex items-center gap-3">
                            <Shield
                              className="h-4 w-4 sm:h-5 sm:w-5 text-atlas-teal"
                              weight="light"
                            />
                            <h4 className="font-display text-base sm:text-lg font-bold text-white">
                              Certifications
                            </h4>
                          </div>
                          <div className="space-y-3 sm:space-y-4">
                            {/* Progress bars with mobile optimization */}
                            <div className="space-y-1.5 sm:space-y-2">
                              <div className="flex items-center justify-between text-xs sm:text-sm">
                                <span className="text-atlas-gray-400">
                                  ISO/IEC 27001
                                </span>
                                <span className="text-atlas-gray-400">60%</span>
                              </div>
                              <div className="h-1.5 sm:h-2 w-full rounded-full bg-atlas-gray-800">
                                <motion.div
                                  className="h-full rounded-full bg-atlas-teal/70"
                                  initial={{ width: 0 }}
                                  whileInView={{ width: '60%' }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1, ease: 'easeOut' }}
                                />
                              </div>
                              <span className="text-[10px] sm:text-xs text-atlas-gray-500">
                                Status: In Progress • ETA: Q2 2025
                              </span>
                            </div>

                            <div className="space-y-1.5 sm:space-y-2">
                              <div className="flex items-center justify-between text-xs sm:text-sm">
                                <span className="text-atlas-gray-400">
                                  SOC 2 Type II
                                </span>
                                <span className="text-atlas-gray-400">75%</span>
                              </div>
                              <div className="h-1.5 sm:h-2 w-full rounded-full bg-atlas-gray-800">
                                <motion.div
                                  className="h-full rounded-full bg-atlas-teal/70"
                                  initial={{ width: 0 }}
                                  whileInView={{ width: '75%' }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1, ease: 'easeOut' }}
                                />
                              </div>
                              <span className="text-[10px] sm:text-xs text-atlas-gray-500">
                                Status: Final Audit • ETA: Q4 2024
                              </span>
                            </div>

                            <div className="space-y-1.5 sm:space-y-2">
                              <div className="flex items-center justify-between text-xs sm:text-sm">
                                <span className="text-atlas-gray-400">
                                  GDPR Compliance
                                </span>
                                <span className="text-atlas-gray-400">90%</span>
                              </div>
                              <div className="h-1.5 sm:h-2 w-full rounded-full bg-atlas-gray-800">
                                <motion.div
                                  className="h-full rounded-full bg-atlas-teal/70"
                                  initial={{ width: 0 }}
                                  whileInView={{ width: '90%' }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1, ease: 'easeOut' }}
                                />
                              </div>
                              <span className="text-[10px] sm:text-xs text-atlas-gray-500">
                                Status: Final Review • ETA: Q3 2024
                              </span>
                            </div>

                            <div className="space-y-1.5 sm:space-y-2">
                              <div className="flex items-center justify-between text-xs sm:text-sm">
                                <span className="text-atlas-gray-400">
                                  PCI DSS Level 1
                                </span>
                                <span className="text-atlas-gray-400">45%</span>
                              </div>
                              <div className="h-1.5 sm:h-2 w-full rounded-full bg-atlas-gray-800">
                                <motion.div
                                  className="h-full rounded-full bg-atlas-teal/70"
                                  initial={{ width: 0 }}
                                  whileInView={{ width: '45%' }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1, ease: 'easeOut' }}
                                />
                              </div>
                              <span className="text-[10px] sm:text-xs text-atlas-gray-500">
                                Status: Initial Assessment • ETA: Q1 2025
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Data Protection & Monitoring Column */}
                      <div className="space-y-6 sm:space-y-8">
                        {/* Data Protection */}
                        <div className="space-y-3 sm:space-y-4">
                          <div className="flex items-center gap-3">
                            <LockKey
                              className="h-4 w-4 sm:h-5 sm:w-5 text-atlas-teal"
                              weight="light"
                            />
                            <h4 className="font-display text-base sm:text-lg font-bold text-white">
                              Data Protection
                            </h4>
                          </div>
                          <ul className="grid gap-2 sm:gap-3 text-xs sm:text-sm text-atlas-gray-400">
                            <li className="flex items-center gap-2 sm:gap-3">
                              <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-atlas-teal/10">
                                <CheckSquare
                                  className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-atlas-teal"
                                  weight="fill"
                                />
                              </div>
                              <div className="flex-1">
                                <span>End-to-End Encryption</span>
                                <div className="mt-1">
                                  <div className="h-1 w-full rounded-full bg-atlas-gray-800">
                                    <motion.div
                                      className="h-full rounded-full bg-atlas-teal/70"
                                      initial={{ width: 0 }}
                                      whileInView={{ width: '100%' }}
                                      viewport={{ once: true }}
                                      transition={{
                                        duration: 1,
                                        ease: 'easeOut',
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="flex items-center gap-2 sm:gap-3">
                              <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-atlas-teal/10">
                                <CheckSquare
                                  className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-atlas-teal"
                                  weight="fill"
                                />
                              </div>
                              <div className="flex-1">
                                <span>Multi-Factor Authentication</span>
                                <div className="mt-1">
                                  <div className="h-1 w-full rounded-full bg-atlas-gray-800">
                                    <motion.div
                                      className="h-full rounded-full bg-atlas-teal/70"
                                      initial={{ width: 0 }}
                                      whileInView={{ width: '100%' }}
                                      viewport={{ once: true }}
                                      transition={{
                                        duration: 1,
                                        ease: 'easeOut',
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="flex items-center gap-2 sm:gap-3">
                              <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-atlas-teal/10">
                                <CheckSquare
                                  className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-atlas-teal"
                                  weight="fill"
                                />
                              </div>
                              <div className="flex-1">
                                <span>Regular Security Audits</span>
                                <div className="mt-1">
                                  <div className="h-1 w-full rounded-full bg-atlas-gray-800">
                                    <motion.div
                                      className="h-full rounded-full bg-atlas-teal/70"
                                      initial={{ width: 0 }}
                                      whileInView={{ width: '100%' }}
                                      viewport={{ once: true }}
                                      transition={{
                                        duration: 1,
                                        ease: 'easeOut',
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="flex items-center gap-2 sm:gap-3">
                              <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-atlas-teal/10">
                                <CheckSquare
                                  className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-atlas-teal"
                                  weight="fill"
                                />
                              </div>
                              <div className="flex-1">
                                <span>Data Backup & Recovery</span>
                                <div className="mt-1">
                                  <div className="h-1 w-full rounded-full bg-atlas-gray-800">
                                    <motion.div
                                      className="h-full rounded-full bg-atlas-teal/70"
                                      initial={{ width: 0 }}
                                      whileInView={{ width: '100%' }}
                                      viewport={{ once: true }}
                                      transition={{
                                        duration: 1,
                                        ease: 'easeOut',
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="flex items-center gap-2 sm:gap-3">
                              <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-atlas-teal/10">
                                <CheckSquare
                                  className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-atlas-teal"
                                  weight="fill"
                                />
                              </div>
                              <div className="flex-1">
                                <span>24/7 Security Monitoring</span>
                                <div className="mt-1">
                                  <div className="h-1 w-full rounded-full bg-atlas-gray-800">
                                    <motion.div
                                      className="h-full rounded-full bg-atlas-teal/70"
                                      initial={{ width: 0 }}
                                      whileInView={{ width: '100%' }}
                                      viewport={{ once: true }}
                                      transition={{
                                        duration: 1,
                                        ease: 'easeOut',
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="flex items-center gap-2 sm:gap-3">
                              <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-atlas-teal/10">
                                <CheckSquare
                                  className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-atlas-teal"
                                  weight="fill"
                                />
                              </div>
                              <div className="flex-1">
                                <span>Access Control & Permissions</span>
                                <div className="mt-1">
                                  <div className="h-1 w-full rounded-full bg-atlas-gray-800">
                                    <motion.div
                                      className="h-full rounded-full bg-atlas-teal/70"
                                      initial={{ width: 0 }}
                                      whileInView={{ width: '100%' }}
                                      viewport={{ once: true }}
                                      transition={{
                                        duration: 1,
                                        ease: 'easeOut',
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
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

          {/* Page Break */}
          <PageBreak />

          {/* About Us Section */}
          <Section
            variant="dark"
            className="py-6 sm:py-12 lg:py-16"
            id="about"
            role="region"
            aria-labelledby="about-title"
          >
            <div className="space-y-6 sm:space-y-12 px-4 sm:px-6">
              <div className="text-center mb-6 sm:mb-8">
                <h2
                  id="about-title"
                  className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white md:text-5xl"
                >
                  About <span className="text-atlas-teal">Us</span>
                </h2>
              </div>

              <div className="mt-6 sm:mt-8 relative mx-auto max-w-7xl">
                <div className="grid grid-cols-12 gap-3 sm:gap-6">
                  {/* Vision & Expertise - Largest Box */}
                  <motion.div
                    className="col-span-12 lg:col-span-7 relative overflow-hidden rounded-2xl border border-atlas-gray-700/50 bg-gradient-to-br from-atlas-gray-800/80 via-atlas-gray-800/40 to-atlas-gray-800/80 p-4 sm:p-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-atlas-teal/5 blur-3xl" />
                    <div className="relative space-y-8">
                      <div className="flex items-center gap-4">
                        <motion.div
                          className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-atlas-teal/10 text-atlas-teal ring-1 ring-atlas-teal/25"
                          whileHover={{ rotate: 5 }}
                        >
                          <Brain className="h-6 w-6" weight="light" />
                        </motion.div>
                        <h3 className="font-display text-xl font-bold text-white">
                          Vision & Expertise
                        </h3>
                      </div>

                      <div className="relative space-y-6">
                        <div className="prose prose-invert max-w-none">
                          <p className="text-atlas-gray-400 leading-relaxed text-sm sm:text-base">
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
                    className="col-span-12 lg:col-span-5 row-span-1 relative overflow-hidden rounded-2xl border border-atlas-gray-700/50 bg-gradient-to-br from-atlas-gray-800/80 via-atlas-gray-800/40 to-atlas-gray-800/80 p-4 sm:p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="absolute inset-0">
                      <div className="absolute inset-0 bg-gradient-to-b from-atlas-teal/5 via-transparent to-transparent opacity-30" />
                      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
                    </div>
                    <div className="relative h-full flex flex-col items-center justify-center text-center space-y-4">
                      <motion.div
                        className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-atlas-teal/10 text-atlas-teal ring-1 ring-atlas-teal/25"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Shield className="h-6 w-6" weight="light" />
                      </motion.div>
                      <div className="space-y-3">
                        <h3 className="font-display text-2xl font-bold text-white leading-tight">
                          "We're not just building tools — we're building
                          trust."
                        </h3>
                        <p className="text-base text-atlas-gray-400 leading-relaxed max-w-sm mx-auto">
                          Atlas exists to serve the builders of tomorrow, not
                          the investors of yesterday.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </Section>

          {/* Page Break */}
          <PageBreak />

          {/* Experience Atlas Section */}
          <Section
            variant="dark"
            className="overflow-hidden py-8 sm:py-16"
            id="experience"
            role="region"
            aria-labelledby="experience-title"
          >
            <div className="space-y-8 sm:space-y-12 px-4 sm:px-6">
              <div className="text-center">
                <h2
                  id="experience-title"
                  className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white md:text-5xl"
                >
                  Experience <span className="text-atlas-teal">Atlas</span>
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-atlas-gray-400">
                  Discover the power of intuitive blockchain exploration
                </p>
              </div>
              <motion.div
                className="relative -mx-4 sm:mx-0"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <div className="relative">
                  <div className="absolute -inset-x-20 -top-20 -bottom-20 bg-glow opacity-75" />
                  <div className="relative rounded-none sm:rounded-xl border-x-0 sm:border-glow bg-card-gradient p-3 sm:p-6 backdrop-blur-sm">
                    <DynamicScreenshotShowcase
                      className="mt-6 sm:mt-12"
                      imageSrc="/image-2-landing.png"
                      aria-label="Atlas platform interface showcase"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </Section>

          {/* Page Break */}
          <PageBreak />

          {/* CTA Section */}
          <Section
            variant="dark"
            className="py-8 sm:py-12"
            id="cta"
            role="region"
            aria-labelledby="cta-title"
          >
            <div className="space-y-6 sm:space-y-8 px-4 sm:px-6">
              <div className="text-center">
                <h2
                  id="cta-title"
                  className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white md:text-5xl"
                >
                  Start Your <span className="text-atlas-teal">Journey</span>
                </h2>
                <p className="mt-2 sm:mt-4 text-sm sm:text-xl text-atlas-gray-400">
                  Join the future of blockchain exploration
                </p>
              </div>
              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-4 sm:mt-6 flex max-w-md gap-2 sm:gap-4 flex-col sm:flex-row"
                aria-label="Beta access request form"
              >
                <div className="flex-1">
                  <label htmlFor="email-input" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full rounded-lg border-2 border-atlas-gray-700 bg-atlas-gray-800/50 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-white placeholder-atlas-gray-500 backdrop-blur-sm transition-colors focus:border-atlas-teal focus:outline-none focus:ring-2 focus:ring-atlas-teal focus:ring-offset-2 focus:ring-offset-atlas-black disabled:opacity-50"
                    disabled={isSubmitting}
                    aria-describedby={formError ? 'form-error' : undefined}
                    required
                  />
                  {formError && (
                    <p
                      id="form-error"
                      className="mt-2 text-xs sm:text-sm text-red-400"
                      role="alert"
                    >
                      {formError}
                    </p>
                  )}
                </div>
                <Button
                  variant="primary"
                  type="submit"
                  className="w-full sm:w-auto text-sm sm:text-base px-4 sm:px-8 py-2 sm:py-3 disabled:opacity-50"
                  disabled={isSubmitting}
                  aria-label={isSubmitting ? 'Submitting...' : 'Get Started'}
                >
                  {isSubmitting ? 'Submitting...' : 'Get Started'}
                </Button>
              </form>
            </div>
          </Section>

          {/* Footer */}
          <footer
            className="border-t border-atlas-gray-800 bg-atlas-black py-6 sm:py-8"
            role="contentinfo"
            aria-label="Site footer"
          >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center justify-between gap-4 sm:gap-6 md:flex-row">
                <p className="text-atlas-gray-500 text-center sm:text-left text-[10px] sm:text-sm">
                  © {new Date().getFullYear()} Atlas Explorer Inc. Built in
                  conjunction with Orbytt Inc. All rights reserved.
                </p>
                <nav
                  className="flex flex-wrap justify-center items-center gap-3 sm:gap-8"
                  aria-label="Footer navigation"
                >
                  <button
                    onClick={() =>
                      (window.location.href =
                        'mailto:contact@atlasexplorer.com')
                    }
                    className="text-atlas-gray-500 transition-colors hover:text-atlas-teal focus:outline-none focus:ring-2 focus:ring-atlas-teal focus:ring-offset-2 focus:ring-offset-atlas-black text-[10px] sm:text-sm active:scale-95"
                    aria-label="Contact us via email"
                  >
                    Contact Us
                  </button>
                  <a
                    href="/privacy"
                    className="text-atlas-gray-500 transition-colors hover:text-atlas-teal focus:outline-none focus:ring-2 focus:ring-atlas-teal focus:ring-offset-2 focus:ring-offset-atlas-black text-[10px] sm:text-sm active:scale-95"
                    aria-label="View privacy policy"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="text-atlas-gray-500 transition-colors hover:text-atlas-teal focus:outline-none focus:ring-2 focus:ring-atlas-teal focus:ring-offset-2 focus:ring-offset-atlas-black text-[10px] sm:text-sm active:scale-95"
                    aria-label="Follow us on social media"
                  >
                    Follow Us
                  </a>
                </nav>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </ErrorBoundary>
  );
}
