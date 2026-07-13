import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { resume as resumeEn } from '../data/resume.en'
import { resume as resumeEs } from '../data/resume.es'

const LanguageContext = createContext(null)
const STORAGE_KEY = 'simon-rodil-cv-lang'

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'en'
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'es') return saved
    return navigator.language.startsWith('es') ? 'es' : 'en'
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  const toggleLang = () => setLang((current) => (current === 'en' ? 'es' : 'en'))

  const data = useMemo(() => (lang === 'es' ? resumeEs : resumeEn), [lang])

  const value = useMemo(
    () => ({ lang, setLang, toggleLang, data }),
    [lang, data],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
