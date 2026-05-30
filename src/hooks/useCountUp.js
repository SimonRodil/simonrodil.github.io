import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from './useReducedMotion'

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3)
}

export function useCountUp(target, duration = 1400, start = false) {
  const reduced = useReducedMotion()
  const [value, setValue] = useState(0)
  const frameRef = useRef(null)

  useEffect(() => {
    if (!start) return

    if (reduced) {
      setValue(target)
      return
    }

    const startTime = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      setValue(Math.round(easeOutCubic(progress) * target))
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick)
      }
    }

    frameRef.current = requestAnimationFrame(tick)

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [target, duration, start, reduced])

  return value
}
