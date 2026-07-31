"use client";

import { motion } from "framer-motion";
import { ArrowRight, PenTool, Sparkles, Activity } from "lucide-react";
import Reveal from "./Reveal";

const posts = [
  {
    title: "How AI is Changing Digital Marketing",
    category: "Strategy",
    excerpt:
      "Discover the newest AI tools that make campaigns smarter, faster, and more profitable.",
    icon: Sparkles,
  },
  {
    title: "5 Ways to Improve Your Website Conversion Rate",
    category: "Web Design",
    excerpt:
      "Simple design, copy, and UX updates that drive better engagement and higher sales.",
    icon: PenTool,
  },
  {
    title: "Scaling YouTube Channels for Service Brands",
    category: "YouTube Automation",
    excerpt:
      "Learn the growth framework we use to turn business channels into reliable traffic sources.",
    icon: Activity,
  },
];

export default function Blog() {
  return (
    <section id="blog" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-8 h-40 w-40 rounded-full bg-aurora-radial-purple opacity-35 blur-[100px]" />
      <div className="pointer-events-none absolute right-0 bottom-10 h-52 w-52 rounded-full bg-aurora-radial-blue opacity-35 blur-[110px]" />

      <div className="container-max relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal direction="up">
            <span className="aurora-eyebrow">Blog</span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Ideas, Tips &amp; <span className="aurora-gradient-text">Growth Stories</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              Read the latest insights from our team on digital strategy, design, AI, and high-impact campaigns.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.title} direction="up" delay={0.1 + index * 0.08}>
              <motion.article
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="aurora-glass-card group p-8 hover:border-aurora-purple-light/30"
              >
                <div className="aurora-icon-badge transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <post.icon className="h-5 w-5" />
                </div>
                <p className="mt-5 text-xs uppercase tracking-[0.25em] text-aurora-purple-light">
                  {post.category}
                </p>
                <h3 className="mt-4 font-display text-xl font-semibold text-white">
                  {post.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  {post.excerpt}
                </p>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-aurora-cyan transition-all duration-300 hover:gap-3"
                >
                  Read more
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
