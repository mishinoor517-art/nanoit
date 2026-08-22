"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Check,
} from "lucide-react";
import { navLinks, services } from "@/lib/data";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("footer-email") as HTMLInputElement)
      ?.value;

    setError("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Something went wrong.");
      }
      setSubscribed(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-aurora-border pt-20">
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-aurora-radial-purple opacity-20 blur-[120px]" />

      <div className="container-max relative z-10 px-6 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2 font-display text-2xl font-bold text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-aurora-gradient shadow-glow-aurora">
                <Sparkles className="h-5 w-5 text-white" strokeWidth={2.5} />
              </span>
              PromoFusion
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-muted">
              A full-service IT &amp; digital agency helping ambitious
              businesses grow online with strategy, technology, and creativity.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <SocialIcon icon={Facebook} label="Facebook" />
              <SocialIcon icon={Instagram} label="Instagram" />
              <SocialIcon icon={Linkedin} label="LinkedIn" />
              <SocialIcon icon={Twitter} label="Twitter" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-muted transition-colors hover:text-aurora-cyan"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
              Services
            </h4>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-sm capitalize text-ink-muted transition-colors hover:text-aurora-cyan"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
              Stay Updated
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-ink-muted">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-aurora-cyan" /> +92 302 4800571
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-aurora-cyan" /> Waqaryounis845@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-aurora-cyan" /> Sargodha, Pakistan
              </li>
            </ul>

            <form onSubmit={handleSubscribe} className="mt-5">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <div className="flex items-center gap-2 rounded-full border border-aurora-border bg-white/[0.03] p-1.5 pl-4 transition-colors duration-300 focus-within:border-aurora-purple-light/40">
                <input
                  id="footer-email"
                  name="footer-email"
                  type="email"
                  required
                  placeholder="Your email"
                  className="w-full bg-transparent text-sm text-ink-light placeholder:text-ink-faint outline-none"
                />
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-aurora-gradient text-white shadow-glow-aurora"
                >
                  {subscribed ? <Check className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                </motion.button>
              </div>
              {subscribed && (
                <p className="mt-2 text-xs text-aurora-cyan">Thanks for subscribing!</p>
              )}
              {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-aurora-border py-8 text-xs text-ink-faint sm:flex-row">
          <p>© 2026 PromoFusion. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-aurora-cyan">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-aurora-cyan">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon: Icon, label }: { icon: typeof Facebook; label: string }) {
  return (
    <motion.a
      whileHover={{ y: -3, scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      href="#"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-aurora-border bg-white/5 text-ink-muted transition-all duration-300 hover:border-transparent hover:bg-aurora-gradient hover:text-white"
    >
      <Icon className="h-4 w-4" />
    </motion.a>
  );
}
