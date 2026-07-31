"use client";

import { motion } from "framer-motion";
import {
  Award,
  Rocket,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Reveal from "./Reveal";

const aboutCards = [
  {
    icon: Award,
    title: "Trusted Expertise",
    description:
      "Years of experience building digital brands, campaigns, and high-converting products.",
  },
  {
    icon: Rocket,
    title: "Fast Results",
    description:
      "Accelerated growth strategies that create momentum and measurable ROI.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Support",
    description:
      "Dedicated project management with clear communication and fast delivery.",
  },
  {
    icon: Sparkles,
    title: "Innovative Approach",
    description:
      "AI-powered workflows and modern tooling that keep you ahead of the competition.",
  },
];

const quickStats = [
  { label: "Average launch speed", value: "4 weeks" },
  { label: "Client satisfaction", value: "98%" },
];

export default function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      {/* Aurora ambient glow — matches Hero's purple/blue/cyan lighting */}
      <div className="pointer-events-none absolute -right-24 top-8 h-72 w-72 rounded-full bg-aurora-radial-blue opacity-60 blur-[100px]" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-aurora-radial-purple opacity-50 blur-[100px]" />

      <div className="container-max relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal direction="up">
            <span className="aurora-eyebrow">About Us</span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Modern Digital Services With <span className="aurora-gradient-text">Purpose</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              We combine beautiful design, smart marketing, and AI-powered automation to help
              ambitious businesses grow faster and stay ahead in every channel.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <Reveal direction="left" delay={0.1}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="aurora-glass-card group relative h-full overflow-hidden p-8 sm:p-9"
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-aurora-radial-purple opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                aria-hidden
              />
              <div className="relative space-y-5">
                <p className="aurora-chip w-fit">Who we are</p>
                <h3 className="font-display text-2xl font-semibold leading-snug text-white">
                  We are a full-service agency built for the next wave of digital growth.
                </h3>
                <p className="text-sm leading-relaxed text-ink-muted">
                  From strategy and branding to AI-driven marketing, we help companies launch
                  ambitious campaigns, improve conversions, and build a standout online presence.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {quickStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-aurora-border bg-white/[0.04] p-5 text-sm text-ink-light shadow-aurora-card"
                    >
                      <p className="text-aurora-cyan">{stat.label}</p>
                      <p className="mt-2 font-display text-xl font-semibold text-white">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
                <a
                  href="#services"
                  className="group/link inline-flex items-center gap-1.5 pt-1 text-sm font-semibold text-aurora-purple-light transition-all duration-300 hover:gap-2.5"
                >
                  See what we do
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5" />
                </a>
              </div>
            </motion.div>
          </Reveal>

          <Reveal direction="right" delay={0.15}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {aboutCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, scale: 1.015, transition: { type: "spring", stiffness: 260, damping: 20 } }}
                  className="aurora-glass-card group flex items-start gap-4 p-6 hover:border-aurora-purple-light/30"
                >
                  <div className="aurora-icon-badge group-hover:scale-110 group-hover:rotate-3">
                    <card.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{card.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
