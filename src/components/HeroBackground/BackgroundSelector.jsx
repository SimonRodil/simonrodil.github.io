import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { GiDeathStar, GiWizardFace } from 'react-icons/gi'
import { IoFlash } from 'react-icons/io5'
import { useUniverse } from './UniverseContext'

const universeIcons = {
  lotr: GiWizardFace,
  harry: IoFlash,
  starwars: GiDeathStar,
}

const universeColors = {
  lotr: { icon: '#ef4444', border: 'rgba(239, 68, 68, 0.6)', bg: 'rgba(239, 68, 68, 0.12)' },
  harry: { icon: '#fbbf24', border: 'rgba(251, 191, 36, 0.6)', bg: 'rgba(251, 191, 36, 0.12)' },
  starwars: { icon: '#60a5fa', border: 'rgba(96, 165, 250, 0.6)', bg: 'rgba(96, 165, 250, 0.12)' },
}

function PlayIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M8 5.14v14.72a1 1 0 0 0 1.5.86l11-7.36a1 1 0 0 0 0-1.72l-11-7.36A1 1 0 0 0 8 5.14Z" />
    </svg>
  )
}

export function BackgroundSelector() {
  const { selectedUniverse, selectUniverse, universes } = useUniverse()
  const [menuOpen, setMenuOpen] = useState(false)

  const handlePlayClick = () => {
    setMenuOpen((prev) => !prev)
  }

  const handleSelect = (id) => {
    selectUniverse(id)
    setMenuOpen(false)
  }

  const allItems = [
    { id: null, Icon: PlayIcon, label: 'SideRays' },
    ...universes.map((u) => ({
      id: u.id,
      Icon: universeIcons[u.id],
      label: u.label,
    })),
  ]

  const activeItem = allItems.find((item) => item.id === selectedUniverse) ?? allItems[0]
  const menuItems = allItems.filter((item) => item.id !== selectedUniverse)

  return (
    <div className="flex items-center">
      <motion.button
        type="button"
        onClick={handlePlayClick}
        className="flex items-center justify-center rounded-lg border border-[var(--color-border)] bg-transparent px-4 py-2.5 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)]"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        aria-label={menuOpen ? 'Close menu' : 'Select universe background'}
      >
        <activeItem.Icon className="h-5 w-5" />
      </motion.button>

      <AnimatePresence initial={false}>
        {menuOpen &&
          menuItems.map((item, i) => {
            const Icon = item.Icon
            const colors = item.id ? universeColors[item.id] : null
            const itemId = item.id ?? 'siderays'
            return (
              <motion.button
                key={itemId}
                type="button"
                initial={{ width: 0, opacity: 0, scale: 0.5, marginLeft: 0, borderWidth: 0 }}
                animate={{
                  width: 44,
                  opacity: 1,
                  scale: 1,
                  marginLeft: 8,
                  borderWidth: 2,
                }}
                exit={{ width: 0, opacity: 0, scale: 0.5, marginLeft: 0, borderWidth: 0 }}
                transition={{
                  delay: i * 0.07,
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => handleSelect(item.id)}
                className="flex shrink-0 cursor-pointer items-center justify-center rounded-full"
                style={{
                  width: 44,
                  height: 44,
                  border: `2px solid var(--color-border)`,
                  backgroundColor: 'transparent',
                  color: colors ? colors.icon : 'rgba(255,255,255,0.6)',
                }}
                whileHover={{
                  scale: 1.15,
                  borderColor: colors ? colors.border : 'var(--color-accent)',
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.92 }}
                title={item.label}
              >
                <Icon className="h-5 w-5" />
              </motion.button>
            )
          })}
      </AnimatePresence>
    </div>
  )
}
