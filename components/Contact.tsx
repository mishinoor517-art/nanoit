"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, Loader2, CheckCircle2 } from "lucide-react";
import { serviceOptions } from "@/lib/data";
import Reveal from "./Reveal";

const contactInfo = [
  { icon: Phone, label: "Phone Number", value: "+92 300 1234567" },
  { icon: Mail, label: "Email Address", value: "hello@promofusion.agency" },
  { icon: MapPin, label: "Office Address", value: "Suite 402, Gulberg III, Lahore, Pakistan" },
  { icon: Clock, label: "Working Hours", value: "Mon – Sat, 9:00 AM – 7:00 PM" },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      service: data.get("service"),
      message: data.get("message"),
    };

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();

      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Something went wrong.");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-aurora-radial-purple opacity-30 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-72 w-72 rounded-full bg-aurora-radial-blue opacity-30 blur-[120px]" />

      <div className="container-max relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal direction="up">
            <span className="aurora-eyebrow">Contact Us</span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Let&apos;s Start A <span className="aurora-gradient-text">Conversation</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              Tell us about your project and we&apos;ll get back to you within
              one business day.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left: info + map */}
          <Reveal direction="left">
            <div className="flex h-full flex-col gap-7">
              <div className="aurora-glass-card grid gap-6 p-8 sm:grid-cols-2 sm:p-9">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-aurora-gradient shadow-glow-aurora">
                      <item.icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-ink-faint">{item.label}</p>
                      <p className="mt-1 text-sm font-medium text-ink-light">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="aurora-glass-card relative min-h-[260px] flex-1 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(139,92,246,0.16),rgba(59,130,246,0.12))]" />
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-ink-muted">
                  <MapPin className="h-8 w-8 text-aurora-cyan" />
                  <p className="text-sm">Interactive map loads here</p>
                  <p className="font-mono text-xs text-ink-faint">31.5204° N, 74.3587° E</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <form onSubmit={handleSubmit} className="aurora-glass-card space-y-6 p-8 sm:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Full Name" htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    required
                    type="text"
                    placeholder="John Carter"
                    className="aurora-input"
                  />
                </Field>
                <Field label="Email" htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    placeholder="john@company.com"
                    className="aurora-input"
                  />
                </Field>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Phone Number" htmlFor="phone">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 234 567 890"
                    className="aurora-input"
                  />
                </Field>
                <Field label="Select Service" htmlFor="service">
                  <select id="service" name="service" required defaultValue="" className="aurora-input">
                    <option value="" disabled>
                      Choose a service
                    </option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s} className="bg-aurora-navy2">
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Message" htmlFor="message">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="aurora-input resize-none"
                />
              </Field>

              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === "loading" || status === "sent"}
                className="ripple aurora-btn-primary w-full disabled:opacity-80"
              >
                {(status === "idle" || status === "error") && (
                  <>
                    Send Message <Send className="h-4 w-4" />
                  </>
                )}
                {status === "loading" && (
                  <>
                    Sending <Loader2 className="h-4 w-4 animate-spin" />
                  </>
                )}
                {status === "sent" && (
                  <>
                    Message Sent <CheckCircle2 className="h-4 w-4" />
                  </>
                )}
              </motion.button>
              {status === "error" && (
                <p className="text-center text-sm text-red-400">{errorMsg}</p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-xs font-medium uppercase tracking-wide text-ink-muted">
        {label}
      </label>
      {children}
    </div>
  );
}
