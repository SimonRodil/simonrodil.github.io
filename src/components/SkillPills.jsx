import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function SkillPills({ title, items }) {
  const reduced = useReducedMotion()

  return (
    <div className="mb-8">
      <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]">
        {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {items.map((skill, index) => (
          <motion.span
            key={skill}
            className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1.5 text-sm text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            initial={reduced ? false : { opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04, duration: 0.35 }}
            whileHover={{ scale: 1.06 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  )
}
