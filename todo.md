# Portfolio Build Prompt — "System Status" Concept

## Concept in one line
The portfolio reads like the internal dashboard of the systems you actually ship: a dark, dense, engineering-console aesthetic where every section is framed as a running service, not a resume page pretending to be one.

Most "techie portfolio" prompts default to one of three looks: warm-cream-and-serif, near-black-with-one-neon-accent, or a broadsheet grid of hairlines. This concept deliberately avoids the neon-on-black cliché by using amber/teal signal colors instead of acid-green, and by making the *structure* (status dots, trace lines, log entries) do the storytelling instead of decoration.

---

## Design tokens

**Color**
- `--bg` `#0B0E11` — near-black base, slightly blue-cool, not pure black
- `--surface` `#12161B` — card/panel background, one step up from bg
- `--text` `#EDEAE3` — warm off-white, not stark white
- `--text-dim` `#8B9198` — secondary/meta text (timestamps, labels)
- `--signal-amber` `#E8A33D` — primary accent: "live", active states, CTAs
- `--signal-teal` `#3E8E88` — secondary accent: links, secondary states
- `--signal-red` `#C15B4A` — used sparingly for "error/incident" style flourishes (e.g. a project retro note), never for real errors

**Type**
- Display / headers / labels: `IBM Plex Mono` — has real character, reads as engineering rather than generic monospace
- Body: `Public Sans` or `Inter` — humanist, highly readable at small sizes
- Utility (timestamps, stack badges, status text): `IBM Plex Mono`, smaller size, `--text-dim`, letter-spacing +0.02em

**Layout concept**
```
┌─ tab bar: "portfolio.tsx  ×"  ── window dots ─────────┐
│ // 01 hero — status line + one live signature moment  │
│ // 02 services — each project as a deployed service   │
│ // 03 stack — infra map, not a logo soup               │
│ // 04 log — short changelog-style "about" entries       │
│ // 05 contact — a terminal prompt, not a form           │
└─────────────────────────────────────────────────────────┘
```
Comment-style section labels (`// about`, `// projects`) are appropriate here because the actual audience (technical clients, other devs) reads code comments fluently — it's not decoration, it's in-register.

**Signature element**
A thin animated trace line (like a network path / traceroute) that originates at the hero CTA and threads down the left margin of the page, connecting each section as the user scrolls — with small amber pulse dots marking each "hop" (section). This is grounded in your actual work: API request flows, JWT auth handshakes, DB round trips. It replaces the generic "scroll progress bar" with something that means something for this subject.

---

## Build prompt (hand this to your coding AI as-is)

```
Build a single-page developer portfolio using React + Vite + Tailwind CSS,
deployed to Vercel. No backend needed — static content, client-side only.

AESTHETIC: "System Status" — a dark engineering-console look, not a generic
dark-mode-with-neon-accent template. Follow this token system exactly:

Colors:
  --bg: #0B0E11
  --surface: #12161B
  --text: #EDEAE3
  --text-dim: #8B9198
  --signal-amber: #E8A33D
  --signal-teal: #3E8E88
  --signal-red: #C15B4A

Fonts:
  Display/headers/labels: IBM Plex Mono (Google Fonts)
  Body: Public Sans (Google Fonts)
  Utility/meta: IBM Plex Mono, small size, --text-dim

STRUCTURE:

1. Top bar — mimics a code editor tab: "portfolio.tsx" with a close (×) and
   three window dots (amber/teal/red, static, decorative). Sticky on scroll.

2. Hero — NOT a big-number-and-gradient template. Instead: a status line
   like a terminal boot sequence —
     "> connecting to voltcoder@production... [200 OK]"
   fading in the name, role ("Full-stack developer — Nigeria"), and a one-line
   thesis about what you actually build (pragmatic, real-world systems:
   property management, fintech-adjacent tools, civic/local apps). One CTA
   button styled like a terminal command, e.g. "$ view_projects".

3. Signature element — a thin vertical trace line down the left margin,
   amber, with small pulse-dot markers at each section as the user scrolls
   (network-path / traceroute motif). Respect prefers-reduced-motion.

4. Projects section, labeled "// 02 services" — each project rendered as a
   service card: name, one-line description, stack badges (mono, small,
   pill-shaped, --surface bg), a small "● live" or "● archived" status dot
   (amber = live, dim = archived), and an optional expandable "log" showing
   2-3 short changelog-style bullets about what was interesting to build.
   Seed with these real projects (write the descriptions yourself, keep them
   specific and plain, not salesy):
     - VisaTrack — serverless visa application & tracking system
       (React, Supabase/Postgres RLS, Tailwind)
     - APT-PA — Assignment Progression Tracker with Predictive Alert
       (Neon + Drizzle ORM, custom JWT auth with jose + bcrypt)
     - StudyForge — AI-powered study platform
       (Next.js 14, Supabase, Groq LLaMA 3.3-70B)
     - Verifact — Nigeria-focused misinformation detection system
       (Groq LLaMA 3.3-70B + Serper.dev cross-referencing)
     - Rent receipt / rental agreement generators — branded client-side PDF
       tools for property management clients (React, Vite, pdf-lib)

5. Stack section, labeled "// 03 stack" — not a logo grid. Present it as a
   small infra map / short list grouped by role: Frontend, Backend/Auth,
   Database, Deploy — matching the real stack (Next.js/React+Vite, Neon,
   Drizzle, custom JWT with jose+bcrypt+httpOnly cookies, Tailwind, Vercel).

6. About/log section, labeled "// 04 log" — 3-4 short changelog-style
   entries instead of a paragraph bio, each with a mono timestamp-style
   label and one plain sentence. Conversational, specific, no filler.

7. Contact, labeled "// 05 contact" — styled as a terminal prompt:
     "> whoami" / "> contact --email" etc., with real links (email, GitHub,
     etc. — use placeholders I'll fill in).

RULES:
- Keep the trace-line as the one bold/animated element. Everything else is
  quiet: no gradients, no glow effects, no confetti of accent colors.
- Status dots and mono labels should encode real information (live/archived,
  which stack layer) — never used purely as decoration.
- Fully responsive down to mobile; the trace line can collapse to a simple
  top progress bar under ~640px.
- Visible keyboard focus states throughout.
- Copy: plain, active voice, written like documentation — not marketing.
```

---

## Notes
- Swap in real project links/GitHub URLs and contact details before shipping.
- If you want the "live" status dots to actually reflect uptime, that would need a lightweight backend/cron check — flag it if you want that as a v2 rather than baking it into the static build.