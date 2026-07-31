"use client";

import { motion } from "framer-motion";
import { ArrowRight, LayoutGrid, Globe, BarChart3 } from "lucide-react";
import Reveal from "./Reveal";

const portfolioItems = [
  {
    title: "E-Commerce Rebrand",
    category: "Web Design + Marketing",
    description:
      "A modern storefront redesign that boosted conversions by 42% and improved cart completion rates.",
    metric: "+42%",
    metricLabel: "Conversion Lift",
    icon: LayoutGrid,
  },
  {
    title: "AI Video Launch",
    category: "AI Video Production",
    description:
      "Created viral short-form video content and automation workflows for rapid social reach.",
    metric: "3.2M",
    metricLabel: "Total Views",
    icon: Globe,
  },
  {
    title: "Meta Ads Campaign",
    category: "Paid Ads Strategy",
    description:
      "High-ROI Facebook and Instagram ads that generated 3x return on ad spend in 60 days.",
    metric: "3x",
    metricLabel: "ROAS",
    icon: BarChart3,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-12 h-52 w-52 rounded-full bg-aurora-radial-purple opacity-40 blur-[100px]" />
      <div className="pointer-events-none absolute right-0 bottom-10 h-64 w-64 rounded-full bg-aurora-radial-cyan opacity-35 blur-[110px]" />

      <div className="container-max relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal direction="up">
            <span className="aurora-eyebrow">Portfolio</span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Creative Work That <span className="aurora-gradient-text">Delivers</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              A selection of recent campaigns and products built for brands that wanted more than
              just a good-looking website.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <Reveal key={item.title} direction="up" delay={0.1 + index * 0.08}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="aurora-glass-card group relative overflow-hidden p-8 hover:border-aurora-purple-light/30"
              >
                {/* mock preview surface — echoes the Hero laptop screen styling */}
                <div className="relative mb-6 flex h-32 items-center justify-center overflow-hidden rounded-2xl border border-aurora-border bg-gradient-to-br from-aurora-surface to-aurora-navy2">
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage: "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
                      backgroundSize: "16px 16px",
                    }}
                  />
                  <motion.div
                    className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-aurora-gradient shadow-glow-aurora"
                    whileHover={{ scale: 1.12, rotate: 6 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  >
                    <item.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <span className="absolute bottom-3 right-3 rounded-full border border-aurora-border bg-white/[0.06] px-3 py-1 font-display text-sm font-semibold text-aurora-cyan backdrop-blur-md">
                    {item.metric}
                    <span className="ml-1 text-[10px] font-normal uppercase tracking-wide text-ink-muted">
                      {item.metricLabel}
                    </span>
                  </span>
                </div>

                <p className="text-xs uppercase tracking-[0.28em] text-aurora-purple-light">
                  {item.category}
                </p>
                <h3 className="mt-4 font-display text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  {item.description}
                </p>
                <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-aurora-cyan transition-all duration-300 group-hover:gap-3">
                  <span>View case study</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
