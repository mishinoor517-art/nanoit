# Techify — IT & Digital Agency Landing Page

A premium, fully responsive landing page for a modern IT & Digital Agency,
built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** — scroll reveals, orbiting cards, testimonial slider
- **Lucide React** — icon set

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
  layout.tsx        Root layout, fonts, SEO metadata
  page.tsx           Page composition (imports all sections)
  globals.css         Design tokens, glass/gradient utilities
components/
  Navbar.tsx          Sticky blur navbar + mobile menu
  Hero.tsx             Hero with 3D laptop mockup + orbiting service cards
  Services.tsx         6 service cards with glow-border hover
  Team.tsx              "Meet Our Professionals" cards
  Stats.tsx              Animated counters
  Testimonials.tsx       Auto-sliding testimonial carousel
  TrustedCompanies.tsx    Logo marquee
  CTA.tsx                  Gradient call-to-action banner
  Contact.tsx               Contact info, map placeholder, form
  Footer.tsx                 Links, newsletter, socials
  Reveal.tsx                  Shared scroll-reveal animation wrapper
  CursorGlow.tsx                Ambient mouse-follow glow
  Particles.tsx                  Ambient floating background particles
lib/
  data.ts             All site content (services, team, testimonials, etc.)
  utils.ts             Small class-name helper
```

## Design System

| Token | Value |
|---|---|
| Background | `#050816` |
| Gradient | `#7C3AED → #3B82F6` |
| Accent | `#8B5CF6`, `#2563EB` |
| Display font | Space Grotesk |
| Body font | Inter |
| Mono / eyebrow font | JetBrains Mono |

Editing content (team members, services, testimonials, trusted companies,
stats) only requires updating `lib/data.ts` — every section pulls from
that single source of truth.

## Notes

- Team and testimonial photos use placeholder avatars from `i.pravatar.cc`.
  Swap the `photo` URLs in `lib/data.ts` for real photography before launch.
- The map in the Contact section is a styled placeholder — drop in a Google
  Maps embed or your preferred map provider where indicated.
- Respects `prefers-reduced-motion` for all animations.

## Backend (Contact form + Comments + Newsletter)

This project has a real backend using **Next.js API routes** + **SQLite** (`better-sqlite3`):

- `POST /api/contact` — saves every enquiry to the database and emails it to your inbox.
- `GET/POST /api/comments` — clients can post a comment/review right on the site; it's saved and shown instantly.
- `POST /api/newsletter` — saves footer newsletter sign-ups.

The database file is created automatically at `data/app.db` the first time the app runs — no manual setup needed. SQLite works great here because it needs a persistent disk, which a normal server (like Hostinger's) has — unlike serverless platforms.

### Deploying on Hostinger

Hostinger has a few different plan types — which one you have changes the steps:

**Option A — Hostinger VPS (recommended for this project)**
Gives full control and the best experience for a Next.js app with a database.
1. Order a VPS plan and pick the "Node.js" template (or a plain Ubuntu template) from hPanel.
2. SSH into the VPS, install Node.js 20+ if not already installed.
3. Upload this project (via `git clone` or SFTP) and run:
   ```
   npm install
   cp .env.example .env   # then fill in your SMTP details
   npm run build
   ```
4. Run it with a process manager so it stays online:
   ```
   npm install -g pm2
   pm2 start npm --name promofusion -- start
   pm2 save
   pm2 startup
   ```
   By default `npm run start` serves on port 3000.
5. Point Nginx (Hostinger's VPS panel lets you set this up, or edit `/etc/nginx/sites-available/` yourself) to reverse-proxy your domain to `http://localhost:3000`, and enable free SSL via Certbot/Let's Encrypt.

**Option B — Hostinger "Node.js" app on shared/Cloud/Business hosting**
Newer Hostinger plans let you create a Node.js app straight from hPanel (Websites → your domain → Advanced → Node.js).
1. Create a Node.js app, point its root to this project's folder, set the startup file/command to `npm run start` (after `npm run build`).
2. Upload the project files (Git or File Manager/SFTP).
3. In the Node.js app's environment variables section, add your SMTP settings from `.env.example`.
4. Make sure the app's working directory is writable so `data/app.db` can be created (it is, by default).
5. Restart the app from hPanel.

**Note:** Hostinger's plain shared hosting (cPanel, static/PHP-only plans) can't run a Next.js app with API routes — you need a VPS or a plan with Node.js app support (Option A or B above).

### Running locally
1. `cp .env.example .env` and fill in your SMTP details.
2. `npm install`
3. `npm run dev`
