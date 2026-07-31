"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Facebook, Mail } from "lucide-react";
import { team } from "@/lib/data";
import Reveal from "./Reveal";

export default function Team() {
  return (
    <section id="experts" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-1/3 h-64 w-64 rounded-full bg-aurora-radial-blue opacity-30 blur-[110px]" />

      <div className="container-max relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal direction="up">
            <span className="aurora-eyebrow">Our Experts</span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Meet Our <span className="aurora-gradient-text">Professionals</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              Our talented team of experts is dedicated to delivering
              innovative digital solutions.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {team.map((member, i) => (
            <Reveal key={member.name} direction="up" delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="aurora-glass-card group h-full overflow-hidden p-5 text-center hover:border-aurora-purple-light/30"
              >
                <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full ring-2 ring-white/10 transition-all duration-300 group-hover:ring-aurora-purple-light/50">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-aurora-gradient-diag opacity-0 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-30" />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-medium text-aurora-cyan">
                  {member.position}
                </p>

                <div className="mt-5 flex items-center justify-center gap-3">
                  <SocialIcon href={member.linkedin} icon={Linkedin} label={`${member.name} on LinkedIn`} />
                  <SocialIcon href={member.facebook} icon={Facebook} label={`${member.name} on Facebook`} />
                  <SocialIcon href={member.email} icon={Mail} label={`Email ${member.name}`} />
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialIcon({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: typeof Linkedin;
  label: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-aurora-border bg-white/5 text-ink-muted transition-all duration-300 hover:border-transparent hover:bg-aurora-gradient hover:text-white"
    >
      <Icon className="h-3.5 w-3.5" />
    </a>
  );
}
