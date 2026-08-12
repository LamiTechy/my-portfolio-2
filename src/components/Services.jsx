import { PROJECTS } from '../data'

function StatusDot({ status }) {
  const live = status === 'live'
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-xs">
      <span
        aria-hidden="true"
        className={`h-2 w-2 rounded-full ${live ? 'bg-signal-amber' : 'bg-text-dim/60'}`}
      />
      <span className={live ? 'text-signal-amber' : 'text-text-dim'}>
        {live ? 'live' : 'archived'}
      </span>
      <span className="sr-only">
        {live ? 'Live service' : 'Archived service'}
      </span>
    </span>
  )
}

function Services() {
  return (
    <section id="services" className="scroll-mt-16 border-t border-surface py-16">
      <p className="mb-8 font-mono text-xs tracking-[0.02em] text-text-dim">
        // 02 services — each project as a deployed service
      </p>

      <ul className="flex flex-col gap-4">
        {PROJECTS.map((project) => (
          <li key={project.name} className="border border-surface bg-surface/40">
            {project.image ? (
              <a
                href={project.href ?? '#'}
                className="block border-b border-surface focus-visible:outline-signal-amber"
              >
                <img
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  loading="lazy"
                  className="aspect-video w-full bg-bg object-contain"
                />
              </a>
            ) : (
              <div className="flex aspect-video items-center justify-center border-b border-surface bg-bg font-mono text-xs text-text-dim">
                [ preview unavailable — screenshot not found (404) ]
              </div>
            )}
            <div className="p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="font-mono text-lg font-semibold text-text">
                  {project.name}
                </h2>
                <span className="flex items-center gap-3">
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-signal-teal underline-offset-4 hover:text-signal-amber hover:underline"
                    >
                      open ↗
                    </a>
                  )}
                  <StatusDot status={project.status} />
                </span>
              </div>
              <p className="mt-2 max-w-xl text-sm text-text-dim">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-surface bg-surface px-2.5 py-0.5 font-mono text-xs text-text-dim"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <details className="group mt-4">
                <summary className="cursor-pointer list-none font-mono text-xs text-signal-teal focus-visible:text-signal-amber">
                  <span className="group-open:hidden">[ + ] view log</span>
                  <span className="hidden group-open:inline">[ − ] hide log</span>
                </summary>
                <ul className="mt-3 flex flex-col gap-2 border-l border-surface pl-4">
                  {project.log.map((entry, i) => (
                    <li key={i} className="text-sm text-text-dim">
                      <span className="mr-2 font-mono text-xs text-signal-amber">
                        [{i + 1}]
                      </span>
                      {entry}
                    </li>
                  ))}
                </ul>
              </details>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Services