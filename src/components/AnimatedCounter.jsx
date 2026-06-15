import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useCountUp } from '../hooks/useCountUp'

export function AnimatedCounter({ value, suffix = '', label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const count = useCountUp(value, 1400, inView)

  return (
    <motion.div
      ref={ref}
      className="p-6 text-center"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <p className="text-3xl font-semibold text-[var(--color-accent)] md:text-4xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-[var(--color-muted)]">{label}</p>
    </motion.div>
  )
}
