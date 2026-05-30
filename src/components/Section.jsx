import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export function Section({ id, title, children, className = '' }) {
  const reduced = useReducedMotion()

  return (
    <motion.section
      id={id}
      className={`scroll-mt-28 py-16 md:py-20 ${className}`}
      initial={reduced ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={reveal}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {title && (
        <h2 className="mb-10 text-2xl font-semibold tracking-tight text-[var(--color-text)] md:text-3xl">
          <span className="text-[var(--color-accent)]">/</span> {title}
        </h2>
      )}
      {children}
    </motion.section>
  )
}
