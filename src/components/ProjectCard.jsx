import { AnimatePresence, motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'

export function ProjectCard({ project, index }) {
  const { data } = useLanguage()
  const [open, setOpen] = useState(false)
  const [imgIndex, setImgIndex] = useState(0)
  const touchStartX = useRef(0)
  const lastSwipeTime = useRef(0)

  const images = project.images?.length
    ? project.images
    : project.image
      ? [project.image]
      : []

  const getSrc = (img) =>
    img?.startsWith('http')
      ? img
      : `${import.meta.env.BASE_URL}${img}`

  const prevImage = (e) => {
    e.stopPropagation()
    setImgIndex((i) => (i === 0 ? images.length - 1 : i - 1))
  }

  const nextImage = (e) => {
    e.stopPropagation()
    setImgIndex((i) => (i === images.length - 1 ? 0 : i + 1))
  }

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      lastSwipeTime.current = Date.now()
      if (diff > 0) nextImage(e)
      else prevImage(e)
    }
  }

  const closeModal = () => {
    if (Date.now() - lastSwipeTime.current < 300) return
    setOpen(false)
    setImgIndex(0)
  }

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
        {images.length > 0 && (
          <div className="overflow-hidden">
            <img
              src={getSrc(images[0])}
              alt={project.name}
              className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <div className="p-6">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-semibold">{project.name}</h3>
            {project.year && (
              <span className="rounded-full bg-[var(--color-bg)] px-2 py-0.5 text-xs text-[var(--color-muted)]">
                {project.year}
              </span>
            )}
          </div>
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
          {project.url && (
            <p className="mt-4 text-sm text-[var(--color-accent)]">{data.labels.viewProject} →</p>
          )}
        </div>
      </motion.article>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="hide-scrollbar max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)]"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              onClick={(event) => event.stopPropagation()}
            >
              {images.length > 0 && (
                <div
                  className="relative touch-pan-y"
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                >
                  <img
                    src={getSrc(images[imgIndex])}
                    alt={project.name}
                    className="w-full aspect-video rounded-t-xl object-cover"
                  />
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-lg text-white transition-colors hover:bg-black/70 cursor-pointer"
                        aria-label="Previous image"
                      >
                        ‹
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-lg text-white transition-colors hover:bg-black/70 cursor-pointer"
                        aria-label="Next image"
                      >
                        ›
                      </button>
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {images.map((_, i) => (
                          <button
                            key={i}
                            onClick={(e) => {
                              e.stopPropagation()
                              setImgIndex(i)
                            }}
                            className={`h-1.5 w-1.5 rounded-full cursor-pointer transition-colors ${
                              i === imgIndex ? 'bg-white' : 'bg-white/40'
                            }`}
                            aria-label={`Go to image ${i + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}
              <div className="p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-semibold">{project.name}</h3>
                  {project.year && (
                    <span className="rounded-full bg-[var(--color-bg)] px-2.5 py-0.5 text-xs text-[var(--color-muted)]">
                      {data.labels.year}: {project.year}
                    </span>
                  )}
                </div>
                <p className="mt-4 text-[var(--color-muted)]">{project.description}</p>
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
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg bg-[var(--color-accent)] px-4 py-2 text-sm font-medium text-[var(--color-bg)]"
                    >
                      {data.labels.viewProject}
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={closeModal}
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
