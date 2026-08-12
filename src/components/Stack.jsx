import { STACK_GROUPS } from '../data'

function Stack() {
  return (
    <section id="stack" className="scroll-mt-16 border-t border-surface py-16">
      <p className="mb-8 font-mono text-xs tracking-[0.02em] text-text-dim">
        // 03 stack — infra map, not a logo soup
      </p>

      <div className="grid grid-cols-1 gap-px border border-surface bg-surface sm:grid-cols-2">
        {STACK_GROUPS.map((group) => (
          <div key={group.role} className="bg-bg p-5">
            <h3 className="font-mono text-xs tracking-[0.02em] text-signal-amber">
              {group.role}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-surface bg-surface px-2.5 py-0.5 font-mono text-xs text-text-dim"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-4 font-mono text-xs text-text-dim">
        auth: custom JWTs signed with <span className="text-signal-teal">jose</span>,{' '}
        <span className="text-signal-teal">bcrypt</span>-hashed credentials, delivered
        over <span className="text-signal-teal">httpOnly cookies</span> — no library
        lock-in.
      </p>
    </section>
  )
}

export default Stack