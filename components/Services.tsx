"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-aurora-radial-purple opacity-30 blur-[120px]" />

      <div className="container-max relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal direction="up">
            <span className="aurora-eyebrow">Our Services</span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Solutions That Drive <span className="aurora-gradient-text">Results</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              We provide end-to-end digital solutions to help businesses grow,
              scale, and stay ahead of the competition.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} direction="up" delay={i * 0.08}>
              <Link href={service.link} className="block h-full">
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="aurora-glass-card group relative h-full overflow-hidden p-8 hover:border-aurora-purple-light/30"
              >
                
                <span className="pointer-events-none absolute right-6 top-6 font-display text-4xl font-bold text-white/[0.06] transition-colors duration-500 group-hover:text-white/[0.1]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-aurora-radial-blue opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-50"
                  aria-hidden
                />
                <div className="aurora-icon-badge relative transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" strokeWidth={2} />
                </div>

                <h3 className="relative mt-6 font-display text-xl font-semibold capitalize text-white">
                  {service.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-ink-muted">
                  {service.description}
                </p>
                  <div className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-aurora-cyan transition-all duration-300 group-hover:gap-2.5">
                 Learn More
                 <ArrowUpRight className="h-4 w-4" />
                </div>
                
                 
              </motion.div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
