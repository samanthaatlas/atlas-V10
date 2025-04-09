import { motion } from "framer-motion";
import styles from "./Hero.module.scss";
import { Button } from "../ui/Button";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Precision Systems for Motocross
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We don't offer upgrades. We build custom logic stacks — engineered
          from your data, your bike, and your ride style. No two builds are the
          same. No presets. No templates.
        </motion.p>

        <motion.p
          className={styles.poweredBy}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Powered by{" "}
          <img
            src="/orbytt-logo.png"
            alt="Orbytt logo"
            className={styles.orbyttLogo}
          />{" "}
          infrastructure.
        </motion.p>

        <motion.div
          className={styles.systems}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className={styles.systemsTitle}>Our Systems:</p>
          <div className={styles.systemsList}>
            <span>MAP.ONE</span>
            <span>SAG.ONE</span>
            <span>ELEK.ONE</span>
            <span>RIDR.ONE</span>
          </div>
        </motion.div>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Button variant="primary" size="lg">
            Get Started
          </Button>
          <Button variant="secondary" size="lg">
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
