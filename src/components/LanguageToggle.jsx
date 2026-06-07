import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export function LanguageToggle() {
  const { lang, toggleLang } = useLanguage()

  return (
    <motion.button
      type="button"
      onClick={toggleLang}
      className="flex cursor-pointer items-center gap-1.5 text-xs font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
      aria-label={lang === 'en' ? 'Cambiar a español' : 'Switch to English'}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg
        width="14" height="14" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
        <path d="M2 12h20"/>
      </svg>
      <motion.span
        key={lang}
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 4 }}
        transition={{ duration: 0.15 }}
      >
        {lang === 'en' ? 'ES' : 'EN'}
      </motion.span>
    </motion.button>
  )
}
