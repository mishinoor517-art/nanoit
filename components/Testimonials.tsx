"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";
import Reveal from "./Reveal";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  const active = testimonials[index];

  return (
    <section className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-aurora-radial-blue opacity-25 blur-[120px]" />

      <div className="container-max relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal direction="up">
            <span className="aurora-eyebrow">Testimonials</span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              What Our <span className="aurora-gradient-text">Clients Say</span>
            </h2>
          </Reveal>
        </div>

        <div
          className="relative mx-auto mt-14 max-w-2xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Quote className="mx-auto h-10 w-10 text-aurora-purple-light/30" aria-hidden="true" />

          <div className="relative mt-4 min-h-[260px] sm:min-h-[220px]" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="aurora-glass-card px-6 py-10 text-center sm:px-12"
              >
                <div className="flex justify-center gap-1">
                  {Array.from({ length: active.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-aurora-cyan text-aurora-cyan" />
                  ))}
                </div>
                <p className="mt-5 text-base leading-relaxed text-ink-light sm:text-lg">
                  &ldquo;{active.review}&rdquo;
                </p>
                <div className="mt-7 flex items-center justify-center gap-3">
                  <div className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-aurora-purple-light/30">
                    <Image src={active.photo} alt={active.name} fill sizes="44px" className="object-cover" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-white">{active.name}</p>
                    <p className="text-xs text-ink-muted">{active.company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.08, transition: { type: "spring", stiffness: 260, damping: 20 } }}
              whileTap={{ scale: 0.94 }}
              aria-label="Previous testimonial"
              onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-aurora-border bg-white/5 text-ink-muted transition-colors hover:border-aurora-purple-light/40 hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </motion.button>

            <div className="flex items-center gap-1">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => setIndex(i)}
                  className="flex h-8 w-8 items-center justify-center"
                >
                  <span
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === index ? "w-6 bg-aurora-gradient" : "w-2 bg-white/15"
                    }`}
                  />
                </button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.08, transition: { type: "spring", stiffness: 260, damping: 20 } }}
              whileTap={{ scale: 0.94 }}
              aria-label="Next testimonial"
              onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-aurora-border bg-white/5 text-ink-muted transition-colors hover:border-aurora-purple-light/40 hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
