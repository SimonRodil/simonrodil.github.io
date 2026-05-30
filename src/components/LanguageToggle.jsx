import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export function LanguageToggle() {
  const { lang, toggleLang } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggleLang}
      className="relative flex h-9 w-[4.5rem] items-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-1 text-xs font-medium text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent-dim)]"
      aria-label={lang === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés'}
    >
      <motion.span
        layout
        className="absolute top-1 left-1 h-7 w-[calc(50%-4px)] rounded-full bg-[var(--color-accent)]"
        animate={{ x: lang === 'en' ? 0 : 'calc(100% + 4px)' }}
        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
      />
      <span
        className={`relative z-10 flex-1 text-center ${lang === 'en' ? 'text-[var(--color-bg)]' : ''}`}
      >
        EN
      </span>
      <span
        className={`relative z-10 flex-1 text-center ${lang === 'es' ? 'text-[var(--color-bg)]' : ''}`}
      >
        ES
      </span>
    </button>
  )
}
