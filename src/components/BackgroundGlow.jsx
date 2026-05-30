import { useEffect, useState } from 'react'

export function BackgroundGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const wide = window.innerWidth >= 1024
    setEnabled(finePointer && !reduced && wide)

    const onMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  if (!enabled) return null

  return (
    <div
      className="background-glow pointer-events-none fixed inset-0 z-0 no-print"
      aria-hidden
    >
      <div
        className="absolute h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl transition-transform duration-300"
        style={{
          left: position.x,
          top: position.y,
          background:
            'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}
