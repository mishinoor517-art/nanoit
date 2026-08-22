"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck } from "lucide-react";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="section-pad relative !py-20">
      <div className="container-max">
        <Reveal direction="zoom">
          <div className="relative overflow-hidden rounded-3xl bg-aurora-gradient-diag px-8 py-16 text-center sm:px-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage: "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <motion.div
              className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
              animate={{ opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="pointer-events-none absolute -bottom-24 -right-10 h-64 w-64 rounded-full bg-white/10 blur-3xl"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            <h2 className="relative font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Ready To Grow Your Business?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-base text-white/85 sm:text-lg">
              Let&apos;s build something amazing together.
            </p>

            <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
              <motion.a
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="ripple inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-base text-aurora-navy transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.35)]"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
              >
                <CalendarCheck className="h-4 w-4" />
                Book Free Consultation
              </motion.a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
