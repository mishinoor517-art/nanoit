"use client";

import { useEffect, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Star, Send, Loader2, MessageSquare } from "lucide-react";
import Reveal from "./Reveal";

type CommentItem = {
  id: number;
  name: string;
  company: string | null;
  rating: number;
  comment: string;
  created_at: string;
};

export default function Comments() {
  const [comments, setComments] = useState<CommentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);

  const loadComments = async () => {
    try {
      const res = await fetch("/api/comments");
      const json = await res.json();
      if (json.ok) setComments(json.comments);
    } catch {
      // ignore — section still renders the form
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadComments();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      company: data.get("company"),
      comment: data.get("comment"),
      rating,
    };

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Something went wrong.");
      }

      setComments((prev) => [json.comment, ...prev]);
      setStatus("sent");
      setRating(5);
      form.reset();
      setTimeout(() => setStatus("idle"), 2500);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <section id="comments" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[520px] -translate-x-1/2 rounded-full bg-aurora-radial-purple opacity-20 blur-[120px]" />

      <div className="container-max relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal direction="up">
            <span className="aurora-eyebrow">Client Comments</span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Leave Us A <span className="aurora-gradient-text">Comment</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              Worked with us? Share your experience — it goes live right here.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
          {/* Form */}
          <Reveal direction="left">
            <form onSubmit={handleSubmit} className="aurora-glass-card space-y-6 p-8 sm:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Your Name" htmlFor="c-name">
                  <input
                    id="c-name"
                    name="name"
                    required
                    type="text"
                    placeholder="Your name"
                    className="aurora-input"
                  />
                </Field>
                <Field label="Company (optional)" htmlFor="c-company">
                  <input
                    id="c-company"
                    name="company"
                    type="text"
                    placeholder="Your business"
                    className="aurora-input"
                  />
                </Field>
              </div>

              <Field label="Email (optional, not shown publicly)" htmlFor="c-email">
                <input
                  id="c-email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  className="aurora-input"
                />
              </Field>

              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-ink-muted">
                  Rating
                </label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      aria-label={`Rate ${n} star${n > 1 ? "s" : ""}`}
                      onClick={() => setRating(n)}
                      onMouseEnter={() => setHoverRating(n)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-0.5"
                    >
                      <Star
                        className={`h-6 w-6 transition-colors ${
                          n <= (hoverRating || rating)
                            ? "fill-aurora-cyan text-aurora-cyan"
                            : "text-ink-faint"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <Field label="Your Comment" htmlFor="c-comment">
                <textarea
                  id="c-comment"
                  name="comment"
                  required
                  rows={4}
                  placeholder="Tell others about your experience working with us..."
                  className="aurora-input resize-none"
                />
              </Field>

              <motion.button
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === "loading"}
                className="ripple aurora-btn-primary w-full disabled:opacity-80"
              >
                {status === "loading" ? (
                  <>
                    Posting <Loader2 className="h-4 w-4 animate-spin" />
                  </>
                ) : status === "sent" ? (
                  <>Posted!</>
                ) : (
                  <>
                    Post Comment <Send className="h-4 w-4" />
                  </>
                )}
              </motion.button>
              {status === "error" && (
                <p className="text-center text-sm text-red-400">{errorMsg}</p>
              )}
            </form>
          </Reveal>

          {/* List */}
          <Reveal direction="right">
            <div className="aurora-glass-card max-h-[560px] space-y-5 overflow-y-auto p-7 sm:p-8">
              {loading && (
                <p className="text-sm text-ink-muted">Loading comments…</p>
              )}
              {!loading && comments.length === 0 && (
                <div className="flex flex-col items-center justify-center gap-2 py-12 text-center text-ink-muted">
                  <MessageSquare className="h-8 w-8 text-aurora-purple-light/40" />
                  <p className="text-sm">
                    No comments yet — be the first to share your experience.
                  </p>
                </div>
              )}
              {comments.map((c) => (
                <div
                  key={c.id}
                  className="rounded-2xl border border-aurora-border bg-white/[0.03] p-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-white">{c.name}</p>
                      {c.company && (
                        <p className="text-xs text-ink-muted">{c.company}</p>
                      )}
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: c.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-3.5 w-3.5 fill-aurora-cyan text-aurora-cyan"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-light">
                    {c.comment}
                  </p>
                </div>
              ))}
            </div>
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
