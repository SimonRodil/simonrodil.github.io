import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { LanguageToggle } from './LanguageToggle'

export function Header() {
  const { data } = useLanguage()
  const sectionIds = data.nav.map((item) => item.id)
  const activeId = useScrollSpy(sectionIds)
  const pdfUrl = `${import.meta.env.BASE_URL}${data.meta.pdfPath}`

  return (
    <header className="no-print fixed top-0 right-0 left-0 z-50 border-b border-[var(--color-border)]/80 bg-[var(--color-bg)]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <a
          href="#home"
          className="text-sm font-semibold tracking-tight text-[var(--color-text)] md:text-base"
        >
          {data.name.split(' ')[0]}
          <span className="text-[var(--color-accent)]">.</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {data.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative text-sm transition-colors ${
                activeId === item.id
                  ? 'text-[var(--color-accent)]'
                  : 'text-[var(--color-muted)] hover:text-[var(--color-text)]'
              }`}
            >
              {item.label}
              {activeId === item.id && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 left-0 h-0.5 w-full bg-[var(--color-accent)]"
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <a
            href={pdfUrl}
            download
            className="hidden rounded-lg border border-[var(--color-border)] px-3 py-2 text-xs font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] sm:inline-block"
          >
            {data.labels.downloadPdf}
          </a>
        </div>
      </div>
    </header>
  )
}
