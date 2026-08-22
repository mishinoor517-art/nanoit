"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, CheckCircle2, Star } from "lucide-react";
import { heroHighlights } from "@/lib/data";
import Reveal from "./Reveal";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="relative overflow-hidden pb-24 pt-36 sm:pt-40 lg:pb-32 lg:pt-48"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >
      {/* Video background — plays behind the aurora glow, scoped to Hero */}
      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden bg-aurora-navy">
        <video
          className="h-full w-full object-cover opacity-75"
          src="/videos/hero-laptop.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Aurora background — deep navy base + purple/blue/cyan glow, scoped to Hero */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora-navy/35">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-aurora-navy/70 via-aurora-navy2/50 to-aurora-navy/80" />
        <motion.div
          className="absolute -left-40 top-0 h-[480px] w-[480px] rounded-full bg-aurora-radial-purple blur-[100px]"
          animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-32 top-24 h-[420px] w-[420px] rounded-full bg-aurora-radial-blue blur-[110px]"
          animate={{ scale: [1, 1.06, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-[-10%] left-1/3 h-[360px] w-[360px] rounded-full bg-aurora-radial-cyan blur-[120px]"
          animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="container-max px-6 lg:px-16">
        {/* Content — left-aligned, video plays clearly as full background behind it */}
        <motion.div className="relative z-10 mr-auto max-w-xl text-left" variants={textVariants}>
          <Reveal direction="up">
            <span className="aurora-eyebrow">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-aurora-cyan opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-aurora-cyan" />
              </span>
              Smart Solutions For Your Business
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              We Build Brands,
              <br />
              Grow Businesses &amp;
              <br />
              <span className="aurora-gradient-text">Create Impact</span>
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="mt-6 text-base leading-relaxed text-ink-muted sm:text-lg">
              We are a full-service IT &amp; Digital Agency helping businesses grow online through creative strategies,
              modern technology, and result-driven solutions.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <motion.div
              className="mt-9 flex flex-wrap items-center justify-start gap-4"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <motion.a
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="ripple aurora-btn-primary"
              >
                Get Started Now
                <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#services"
                className="aurora-btn-outline"
              >
                <PlayCircle className="h-4 w-4" />
                Explore Services
              </motion.a>
            </motion.div>
          </Reveal>

          <Reveal direction="up" delay={0.4}>
            <motion.div
              className="mt-10 grid grid-cols-2 justify-items-start gap-x-6 gap-y-3 sm:flex sm:flex-wrap sm:items-center sm:justify-start sm:gap-6"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.2 }}
            >
              {heroHighlights.map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-2 text-sm text-ink-light"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.1 + index * 0.05 }}
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-aurora-cyan" />
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </Reveal>
        </motion.div>

      </div>
    </motion.section>
  );
}
