import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#05070F",
        surface: "#0F1729",
        surface2: "#1A2338",
        violet: {
          DEFAULT: "#B9803A",
          light: "#F0C97E",
        },
        blue: {
          DEFAULT: "#D9A65C",
          deep: "#A9762F",
        },
        ink: {
          light: "#F8FAFC",
          muted: "#94A3B8",
          faint: "#64748B",
        },
        // Aurora palette — scoped to the Navbar & Hero redesign only.
        // Kept separate from the site's existing gold "violet"/"blue" tokens
        // so every other section is completely unaffected.
        aurora: {
          navy: "#05070F",
          navy2: "#0A0F1F",
          surface: "#0D1326",
          purple: "#8B5CF6",
          "purple-light": "#A78BFA",
          blue: "#3B82F6",
          "blue-light": "#60A5FA",
          cyan: "#22D3EE",
          border: "rgba(148, 163, 255, 0.16)",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #D9A65C 0%, #B9803A 100%)",
        "brand-gradient-diag": "linear-gradient(135deg, #D9A65C 0%, #B9803A 100%)",
        "radial-glow": "radial-gradient(circle at center, rgba(217,166,92,0.45) 0%, rgba(185,128,58,0) 70%)",
        // Aurora gradients — Navbar & Hero only.
        "aurora-gradient": "linear-gradient(90deg, #3B82F6 0%, #8B5CF6 100%)",
        "aurora-gradient-diag": "linear-gradient(135deg, #22D3EE 0%, #3B82F6 45%, #8B5CF6 100%)",
        "aurora-radial-purple": "radial-gradient(circle at center, rgba(139,92,246,0.55) 0%, rgba(139,92,246,0) 70%)",
        "aurora-radial-blue": "radial-gradient(circle at center, rgba(59,130,246,0.5) 0%, rgba(59,130,246,0) 70%)",
        "aurora-radial-cyan": "radial-gradient(circle at center, rgba(34,211,238,0.4) 0%, rgba(34,211,238,0) 70%)",
      },
      boxShadow: {
        glow: "0 0 45px rgba(217,166,92,0.45)",
        "glow-blue": "0 0 45px rgba(185,128,58,0.45)",
        card: "0 8px 32px rgba(0,0,0,0.35)",
        // Aurora shadows — Navbar & Hero only.
        "glow-aurora": "0 0 50px rgba(139,92,246,0.35)",
        "glow-aurora-blue": "0 0 50px rgba(59,130,246,0.35)",
        "glow-aurora-cyan": "0 0 40px rgba(34,211,238,0.3)",
        "aurora-card": "0 8px 40px rgba(3,5,15,0.55)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out infinite 1.5s",
        orbit: "orbit 24s linear infinite",
        "orbit-reverse": "orbit-reverse 30s linear infinite",
        marquee: "marquee 32s linear infinite",
        "spin-slow": "spin 12s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "border-sweep": "border-sweep 4s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(220px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(220px) rotate(-360deg)" },
        },
        "orbit-reverse": {
          "0%": { transform: "rotate(360deg) translateX(260px) rotate(-360deg)" },
          "100%": { transform: "rotate(0deg) translateX(260px) rotate(0deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        "border-sweep": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
