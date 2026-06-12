import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

export function ProjectCard({ project, index }) {
  const { data } = useLanguage()
  const [open, setOpen] = useState(false)

  const imgSrc = project.image?.startsWith('http')
    ? project.image
    : `${import.meta.env.BASE_URL}${project.image}`

  return (
    <>
      <motion.article
        className="group cursor-pointer overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] transition-colors hover:border-[var(--color-accent-dim)]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08, duration: 0.45 }}
        whileHover={{ y: -6, transition: { duration: 0.2 } }}
        onClick={() => setOpen(true)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            setOpen(true)
          }
        }}
        role="button"
        tabIndex={0}
      >
        {project.image && (
          <div className="overflow-hidden">
            <img
              src={imgSrc}
              alt={project.name}
              className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <div className="p-6">
        <h3 className="text-lg font-semibold">{project.name}</h3>
        <p className="mt-2 text-sm text-[var(--color-muted)] line-clamp-3">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[var(--color-bg)] px-2.5 py-0.5 text-xs text-[var(--color-accent)]"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="mt-4 text-sm text-[var(--color-accent)]">{data.labels.viewProject} →</p>
        </div>
      </motion.article>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)]"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              onClick={(event) => event.stopPropagation()}
            >
              {project.image && (
                <img
                  src={imgSrc}
                  alt={project.name}
                  className="w-full rounded-t-xl object-cover"
                />
              )}
              <div className="p-8">
              <h3 className="text-2xl font-semibold">{project.name}</h3>
              <p className="mt-4 text-[var(--color-muted)]">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-[var(--color-accent)] px-4 py-2 text-sm font-medium text-[var(--color-bg)]"
                >
                  {data.labels.viewProject}
                </a>
                <button
              type="button"
              onClick={() => setOpen(false)}
              className="cursor-pointer rounded-lg border border-[var(--color-border)] px-4 py-2 text-sm"
                >
                  {data.labels.close}
                </button>
              </div>
            </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
