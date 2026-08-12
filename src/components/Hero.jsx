import { LINKS } from '../data'
import RegionMap from './RegionMap'

const BOOT_LINES = [
  { delay: 0, text: '> connecting to lamitechy@production... ', status: '[200 OK]' },
  { delay: 0.3, text: '> handshake complete — session established', status: null },
  { delay: 0.6, text: '$ whoami', status: null },
  { delay: 0.9, text: '  Mujeeb Soyemi — full-stack developer, Nigeria', status: null },
  { delay: 1.2, text: '$ ./thesis --one-liner', status: null },
]

function Hero() {
  return (
    <section id="hero" className="pt-16 pb-24 sm:pt-24">
      <p className="mb-8 font-mono text-xs tracking-[0.02em] text-text-dim">
        // 01 hero — status line
      </p>

      <div className="font-mono text-sm leading-relaxed sm:text-base">
        {BOOT_LINES.map((line, i) => (
          <p
            key={i}
            className="boot-line"
            style={{ animationDelay: `${line.delay}s` }}
          >
            <span className="text-text-dim">{line.text}</span>
            {line.status && <span className="text-signal-teal"> {line.status}</span>}
          </p>
        ))}

        <p
          className="boot-line mt-6 text-2xl font-semibold tracking-tight text-text sm:text-4xl"
          style={{ animationDelay: '1.5s' }}
        >
                    I build software that solves real problems — and ships.
        </p>

        <p
          className="boot-line mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
          style={{ animationDelay: '1.9s' }}
        >
          <a
            href="#services"
            className="inline-flex items-center border border-signal-amber px-5 py-2.5 text-sm text-signal-amber transition-colors hover:bg-signal-amber hover:text-bg focus-visible:outline-signal-amber"
          >
            $ view_projects
          </a>
          <a
            href="#contact"
            className="text-sm text-signal-teal underline-offset-4 hover:text-signal-amber hover:underline"
          >
            $ view_contact
          </a>
        </p>
      </div>

      <dl className="mt-14 grid grid-cols-2 gap-px border border-surface bg-surface font-mono text-xs sm:grid-cols-4">
        <div className="bg-bg p-3">
          <dt className="text-text-dim">status</dt>
          <dd className="mt-1 text-signal-amber">● operational</dd>
        </div>
        <div className="bg-bg p-3">
          <dt className="text-text-dim">uptime</dt>
          <dd className="mt-1 text-text">100% (it's just files)</dd>
        </div>
        <div className="bg-bg p-3">
          <dt className="text-text-dim">region</dt>
          <dd className="mt-1 text-text">abeokuta, ogun state</dd>
        </div>
        <div className="bg-bg p-3">
          <dt className="text-text-dim">availability</dt>
          <dd className="mt-1 text-signal-teal">open to work</dd>
        </div>
      </dl>

      <div className="mt-1 border border-t-0 border-surface">
        <p className="border-b border-surface px-3 py-2 font-mono text-xs text-text-dim">
          ./maps/region.dat — 7.1527°N, 3.3509°E
        </p>
        <RegionMap />
      </div>

      <p className="mt-4 font-mono text-xs text-text-dim">
        contact: <a className="text-signal-teal hover:text-signal-amber" href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
      </p>
    </section>
  )
}

export default Hero
