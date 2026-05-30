import { useEffect, useState } from 'react'

export function useScrollSpy(sectionIds, offset = 120) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const onScroll = () => {
      let current = sectionIds[0] ?? ''

      for (const id of sectionIds) {
        const element = document.getElementById(id)
        if (!element) continue
        if (element.getBoundingClientRect().top - offset <= 0) {
          current = id
        }
      }

      setActiveId(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [sectionIds, offset])

  return activeId
}
