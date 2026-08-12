import { LOG_ENTRIES } from '../data'

function Log() {
  return (
    <section id="log" className="scroll-mt-16 border-t border-surface py-16">
      <p className="mb-8 font-mono text-xs tracking-[0.02em] text-text-dim">
        // 04 log — changelog-style about
      </p>

      <ul className="flex flex-col gap-5">
        {LOG_ENTRIES.map((entry) => (
          <li key={entry.ts} className="flex flex-col gap-1 sm:flex-row sm:gap-6">
            <span className="shrink-0 font-mono text-xs text-signal-teal">
              {entry.ts}
            </span>
            <span className="text-sm text-text-dim">{entry.text}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Log