import { LINKS } from '../data'

const COMMANDS = [
  {
    cmd: '$ contact --email',
    label: LINKS.email,
    href: `mailto:${LINKS.email}`,
  },
  {
    cmd: '$ contact --github',
    label: LINKS.github.replace(/^https?:\/\//, ''),
    href: LINKS.github,
  },
  {
    cmd: '$ contact --x',
    label: LINKS.twitter.replace(/^https?:\/\/(x|twitter)\.com\//, '@'),
    href: LINKS.twitter,
  },
  ...(LINKS.linkedin
    ? [
        {
          cmd: '$ contact --linkedin',
          label: LINKS.linkedin.replace(/^https?:\/\/(www\.)?/, ''),
          href: LINKS.linkedin,
        },
      ]
    : []),
  ...(LINKS.tiktok
    ? [
        {
          cmd: '$ contact --tiktok',
          label: LINKS.tiktok.replace(/^https?:\/\/(www\.)?/, ''),
          href: LINKS.tiktok,
        },
      ]
    : []),
  {
    cmd: '$ download_cv',
    label: 'resume.pdf',
    href: LINKS.resume,
  },
]

function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 border-t border-surface py-16">
      <p className="mb-8 font-mono text-xs tracking-[0.02em] text-text-dim">
        // 05 contact — a terminal prompt, not a form
      </p>

      <div className="border border-surface bg-surface/40 p-5 font-mono text-sm leading-relaxed">
        <p>
          <span className="text-text-dim">&gt; whoami</span>
        </p>
        <p className="mt-1 text-text">
          Mujeeb Soyemi (YinkaTheDev) — software developer &amp; tech creator, Lagos
        </p>

        {COMMANDS.map((item) => (
          <div key={item.cmd} className="mt-4">
            <p>
              <span className="text-text-dim">&gt; {item.cmd.slice(2)}</span>
            </p>
            <a
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="mt-0.5 inline-block text-signal-teal underline-offset-4 hover:text-signal-amber hover:underline focus-visible:outline-signal-amber"
            >
              {item.label}
            </a>
          </div>
        ))}

        <p className="mt-6 text-text-dim">
          &gt; contact --help
          <span className="cursor-blink ml-2 inline-block h-4 w-2 translate-y-0.5 bg-signal-amber" />
        </p>
      </div>

      <p className="mt-4 font-mono text-xs text-text-dim">
        replies fastest on email — plain text beats templates.
      </p>
    </section>
  )
}

export default Contact