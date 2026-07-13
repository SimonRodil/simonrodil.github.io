import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const universes = [
  { id: 'lotr', label: 'LOTR', videoId: 'kWhmb6l4XTY' },
  { id: 'harry', label: 'HP', videoId: 'IaBz8bBaC0M' },
  { id: 'starwars', label: 'SW', videoId: 'DR-3Yhx18Y4' },
]

const STORAGE_KEY = 'selectedUniverse'

const UniverseContext = createContext(null)

export function UniverseProvider({ children }) {
  const [selectedUniverse, setSelectedUniverse] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored || null
    } catch {
      return null
    }
  })

  const [heroVisible, setHeroVisible] = useState(true)

  const activeUniverse = heroVisible ? selectedUniverse : null

  useEffect(() => {
    try {
      if (selectedUniverse) {
        localStorage.setItem(STORAGE_KEY, selectedUniverse)
      } else {
        localStorage.removeItem(STORAGE_KEY)
      }
    } catch { /* localStorage unavailable */ }
  }, [selectedUniverse])

  const selectUniverse = useCallback((id) => {
    setSelectedUniverse((prev) => (prev === id ? null : id))
  }, [])

  const value = useMemo(
    () => ({ activeUniverse, selectedUniverse, selectUniverse, setHeroVisible, universes }),
    [activeUniverse, selectedUniverse, selectUniverse, setHeroVisible],
  )

  return <UniverseContext.Provider value={value}>{children}</UniverseContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useUniverse() {
  const ctx = useContext(UniverseContext)
  if (!ctx) throw new Error('useUniverse must be used within UniverseProvider')
  return ctx
}
