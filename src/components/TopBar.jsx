const WINDOW_DOTS = [
  { color: 'bg-signal-red' },
  { color: 'bg-signal-amber' },
  { color: 'bg-signal-teal' },
]

function TopBar() {
  return (
    <header className="sticky top-0 z-30 border-b border-surface bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex h-10 max-w-4xl items-center px-4 font-mono text-xs">
        <div className="flex gap-1.5" aria-hidden="true">
          {WINDOW_DOTS.map((dot, i) => (
            <span
              key={i}
              className={`h-2.5 w-2.5 rounded-full ${dot.color} opacity-80`}
            />
          ))}
        </div>
        <div className="ml-4 flex h-full items-center border-x border-surface bg-surface px-4">
          <span className="text-text-dim">portfolio.tsx</span>
          <span className="ml-1 text-signal-amber">*</span>
        </div>
        <div className="ml-auto text-text-dim" aria-hidden="true">
          <span>×</span>
        </div>
      </div>
    </header>
  )
}

export default TopBar
