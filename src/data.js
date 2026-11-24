export const LINKS = {
  email: 'soyemimujeeb1@gmail.com',
  github: 'https://github.com/lamitechy',
  twitter: 'https://x.com/hiscode_dev',
  linkedin: 'https://www.linkedin.com/in/soyemi-mujeeb-7766aa33b',
  tiktok: 'https://www.tiktok.com/@olayinka_1804',
  resume: '/resume.pdf',
}

export const SECTION_IDS = ['services', 'stack', 'log', 'contact']

export const PROJECTS = [
  {
    name: 'VisaTrack',
    status: 'live',
    image: '/projects/visatrack.png',
    description:
      'Serverless visa application & tracking system — one dashboard instead of refreshing a status page.',
    stack: ['React', 'Supabase / Postgres RLS', 'Tailwind'],
    log: [
      'RLS policies written first — the database enforces row ownership, not a middleware guard.',
      'One migration turned a 3-table sketch into the audit trail caseworkers actually use.',
      'Tracking polls moved from the client into a serverless cron; refresh cold starts are gone.',
    ],
  },
  {
    name: 'MercyCare Hospital',
    status: 'live',
    image: '/projects/mercycare.png',
    href: 'https://mercy-hospitals.vercel.app/',
    description:
      'Full hospital website for MercyCare, Lagos — departments, doctor directory, online appointment booking, and a patient portal.',
    stack: ['Next.js', 'Tailwind CSS', 'Vercel'],
    log: [
      'Appointment booking with doctor selection and same-day slots, wired into the patient portal login flow.',
      'Health checkup packages priced and bookable end-to-end, from the basic wellness plan to family screening.',
      'Multilingual doctor profiles and an emergency line that is one tap away on mobile.',
    ],
  },
  {
    name: 'CampusPlug',
    status: 'live',
    image: '/projects/campuplug.png',
    href: 'https://campus-five-rho.vercel.app/',
    description:
      "Nigeria's campus marketplace — buy and sell anything on campus, safe, fast, and trusted by Nigerian students.",
    stack: ['React + Vite', 'PWA / service worker', 'Paystack'],
    log: [
      'Installs like an app — service worker, manifest, offline shell; PWA shipped as a first-class feature, not an afterthought.',
      'Payments go through Paystack inline, so listings settle without leaving the app.',
      'Theme is applied before React mounts to kill the dark-mode flash.',
    ],
  },
  {
    name: 'StudyForge',
    status: 'live',
    image: '/projects/studyforge.png',
    href: 'https://study-verse-ecru.vercel.app/',
    description:
      'AI-powered study platform — turn your notes into mastery with generated summaries, flashcards, and quizzes.',
    stack: ['Next.js 14', 'Supabase', 'Groq LLaMA 3.3-70B'],
    log: [
      'Content is generated from the student\u2019s own notes — summaries, flashcards, and quizzes, not generic material.',
      'Long generations run server-side and stream over SSE, so the first token lands fast even on slow connections.',
      'Auth and data via Supabase; quizzes regenerate as your notes grow.',
    ],
  },
  {
    name: 'SocialAI',
    status: 'live',
    image: '/projects/socialai.png',
    href: 'https://social-ai-smoky.vercel.app/',
    description:
      'AI content for small business — platform-ready posts for X, LinkedIn, Instagram, and TikTok, generated and scheduled from one dashboard.',
    stack: ['React + Vite', 'Supabase', 'Groq LLaMA 3.3-70B'],
    log: [
      'Five tones from professional to quirky, with per-platform prompt rules: 280-char tweets, LinkedIn posts ending in a CTA, emoji-heavy Instagram captions.',
      'Generation runs through a Supabase edge function so the model call stays server-side.',
      'Content library tracks draft → scheduled → published, with exact-time scheduling per post.',
    ],
  },
]

export const STACK_GROUPS = [
  {
    role: 'Frontend',
    items: ['Next.js 14', 'React + Vite', 'Tailwind CSS'],
  },
  {
    role: 'Backend / Auth',
    items: ['Node.js', 'Custom JWT auth', 'jose + bcrypt', 'httpOnly cookies'],
  },
  {
    role: 'Database',
    items: ['Neon (Postgres)', 'Supabase + RLS', 'Drizzle ORM'],
  },
  {
    role: 'Deploy',
    items: ['Vercel', 'Serverless functions'],
  },
]

export const LOG_ENTRIES = [
  {
    ts: '[2026-06-14]',
    text: 'v2.0 — VisaTrack moved from client polling to a serverless cron; tracking latency dropped to under a minute.',
  },
  {
    ts: '[2026-04-02]',
    text: 'CampusPlug shipped as an installable PWA — service worker, offline shell, Paystack checkout wired in.',
  },
  {
    ts: '[2026-02-19]',
    text: 'SocialAI generator launched with five tones and per-platform prompts for X, LinkedIn, Instagram, and TikTok.',
  },
  {
    ts: '[2025-11-30]',
    text: 'First commit on StudyForge. LLM tutoring was the goal; the token-budget lessons were the takeaway.',
  },
]
