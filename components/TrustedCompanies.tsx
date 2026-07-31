"use client";

import { trustedCompanies } from "@/lib/data";
import Reveal from "./Reveal";

export default function TrustedCompanies() {
  const loop = [...trustedCompanies, ...trustedCompanies];

  return (
    <section className="section-pad relative !py-16 overflow-hidden">
      <div className="container-max relative z-10">
        <Reveal direction="up">
          <p className="text-center text-xs font-mono uppercase tracking-[0.25em] text-ink-faint">
            Trusted By Leading Companies
          </p>
        </Reveal>

        <div className="relative mt-10 overflow-hidden mask-fade-x">
          <div className="flex w-max animate-marquee gap-16 py-2">
            {loop.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="whitespace-nowrap font-display text-2xl font-semibold text-ink-faint grayscale opacity-60 transition-all duration-300 hover:scale-105 hover:text-aurora-cyan hover:opacity-100 hover:grayscale-0 sm:text-3xl"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
