import { useEffect, useState } from 'react'
import { SECTION_IDS } from '../data'

function clamp01(n) {
  return Math.min(1, Math.max(0, n))
}

function TraceLine() {
  const [state, setState] = useState({
    top: 1,
    bottom: 0.9,
    lead: 0,
    markers: SECTION_IDS.map((id) => ({ id, frac: 0.5, active: false })),
    pageProgress: 0,
  })

  useEffect(() => {
    let raf = 0
    const update = () => {
      const vh = window.innerHeight
      const scrollY = window.scrollY
      const hero = document.getElementById('hero')
      const main = document.getElementById('main-content')
      if (!hero || !main) return

      const fracOf = (el) => {
        const rect = el.getBoundingClientRect()
        return clamp01(rect.top / vh)
      }
      const bottom = fracOf(main)
      const top = fracOf(hero)

      const markers = SECTION_IDS.map((id) => {
        const el = document.getElementById(id)
        if (!el) return { id, frac: 0.5, active: false }
        const rect = el.getBoundingClientRect()
        return {
          id,
          frac: clamp01((rect.top + rect.height / 2) / vh),
          active: rect.top < vh * 0.8 && rect.bottom > vh * 0.2,
        }
      })

      const doc = document.documentElement
      const maxScroll = doc.scrollHeight - vh
      const pageProgress = maxScroll > 0 ? clamp01(scrollY / maxScroll) : 0

      setState({
        top,
        bottom,
        lead: clamp01((pageProgress - top) / Math.max(0.001, bottom - top)),
        markers,
        pageProgress,
      })
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const spanHeight = state.bottom - state.top
  const leadHeight = spanHeight * state.lead

  return (
    <>
      {/* desktop / tablet: vertical trace line in the left margin */}
      <aside
        aria-hidden="true"
        className="fixed bottom-0 left-5 top-0 z-10 hidden w-4 sm:block"
      >
        <div
          className="absolute left-1/2 w-px -translate-x-1/2 bg-surface"
          style={{ top: `${state.top * 100}%`, height: `${spanHeight * 100}%` }}
        />
        <div
          className="absolute left-1/2 w-px -translate-x-1/2 bg-signal-amber"
          style={{ top: `${state.top * 100}%`, height: `${leadHeight * 100}%` }}
        />
        {state.markers.map((m) => (
          <span
            key={m.id}
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ top: `${m.frac * 100}%` }}
          >
            <span
              className={`block h-1.5 w-1.5 rounded-full border transition-colors duration-300 ${
                m.active
                  ? 'border-signal-amber bg-signal-amber trace-pulse'
                  : 'border-text-dim/60 bg-bg'
              }`}
            />
          </span>
        ))}
      </aside>

      {/* mobile: simple top progress bar under the tab bar */}
      <div
        className="fixed left-0 top-10 z-20 h-0.5 w-full bg-surface sm:hidden"
        aria-hidden="true"
      >
        <div
          className="h-full bg-signal-amber"
          style={{ width: `${state.pageProgress * 100}%` }}
        />
      </div>
    </>
  )
}

export default TraceLine
