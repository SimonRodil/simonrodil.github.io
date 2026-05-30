import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function ExperienceTimeline() {
  const { data } = useLanguage()
  const reduced = useReducedMotion()

  return (
    <div className="relative">
      <motion.div
        className="absolute top-0 left-[7px] w-px origin-top bg-[var(--color-border)] md:left-[11px]"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: reduced ? 0 : 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ height: '100%' }}
      />

      <ul className="space-y-10">
        {data.experience.map((job, index) => (
          <motion.li
            key={`${job.company}-${job.period}`}
            className="relative pl-8 md:pl-12"
            initial={reduced ? false : { opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: index * 0.1, duration: 0.45 }}
          >
            <motion.span
              className="absolute top-1.5 left-0 h-4 w-4 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg)] md:left-1"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.15, type: 'spring', stiffness: 320 }}
            />
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 transition-colors hover:border-[var(--color-accent-dim)]">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">{job.role}</h3>
                <span className="text-sm text-[var(--color-accent)]">{job.period}</span>
              </div>
              <p className="mt-1 text-sm text-[var(--color-muted)]">{job.company}</p>
              <ul className="mt-4 space-y-2 text-sm text-[var(--color-muted)]">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="text-[var(--color-accent)]">▹</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
