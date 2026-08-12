import TopBar from './components/TopBar'
import TraceLine from './components/TraceLine'
import Hero from './components/Hero'
import Services from './components/Services'
import Stack from './components/Stack'
import Log from './components/Log'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-bg font-sans text-text">
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-14 focus:z-50 focus:border focus:border-signal-amber focus:bg-bg focus:px-3 focus:py-2 focus:font-mono focus:text-sm focus:text-signal-amber"
      >
        skip to services
      </a>
      <TopBar />
      <TraceLine />
      <MainContent />
    </div>
  )
}

function MainContent() {
  return (
    <main id="main-content" className="mx-auto max-w-4xl px-4 sm:px-8">
      <Hero />
      <Services />
      <Stack />
      <Log />
      <Contact />
      <footer className="border-t border-surface py-8 font-mono text-xs text-text-dim">
        <p>
          portfolio.tsx — static build, client-side only · no backend, no
          tracking · built with React + Vite + Tailwind
        </p>
      </footer>
    </main>
  )
}

export default App