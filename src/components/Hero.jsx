import { motion, useScroll, useTransform } from 'framer-motion'
import { useCallback, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { useTypingEffect } from '../hooks/useTypingEffect'

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export function Hero() {
  const { data } = useLanguage()
  const reduced = useReducedMotion()
  const typedRole = useTypingEffect(data.typingRoles)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 80])
  const profileSrc = `${import.meta.env.BASE_URL}avatar_v2.jpg`

  const [avatarAction, setAvatarAction] = useState('idle')

  const handleAvatarClick = useCallback(() => {
    if (avatarAction !== 'idle') return
    setAvatarAction('pop')
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      setAvatarAction('idle')
    }, 700)
  }, [avatarAction])

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-screen scroll-mt-0 items-center pt-24 pb-16"
    >
      <motion.div
        className="mx-auto grid w-full max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-center md:px-6"
        variants={container}
        initial={reduced ? false : 'hidden'}
        animate="visible"
      >
        <div>
          <motion.p variants={item} className="text-[var(--color-muted)]">
            {data.labels.hello}
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl"
          >
            {data.labels.im} {data.name}
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-4 min-h-[2rem] text-lg text-[var(--color-accent)] md:text-xl"
          >
            {typedRole}
            <span className="ml-0.5 inline-block w-0.5 animate-pulse bg-[var(--color-accent)]">
              &nbsp;
            </span>
          </motion.p>
          <motion.p variants={item} className="mt-4 max-w-xl text-[var(--color-muted)]">
            {data.title}
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-lg bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)] transition-opacity hover:opacity-90"
            >
              {data.labels.contact}
            </a>
            <a
              href={`${import.meta.env.BASE_URL}${data.meta.pdfPath}`}
              download
              className="rounded-lg border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)]"
            >
              {data.labels.downloadPdf}
            </a>
          </motion.div>
        </div>

        <motion.div variants={item} className="flex justify-center md:justify-end">
          <motion.div
            style={{ y: imageY }}
            className="relative cursor-pointer"
            role="button"
            tabIndex={0}
            onClick={handleAvatarClick}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                handleAvatarClick()
              }
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <motion.div
              className="absolute -inset-4 rounded-full"
              style={{ background: 'var(--color-accent)', filter: 'blur(40px)' }}
              animate={
                avatarAction === 'pop'
                  ? { scale: [1, 1.6, 1], opacity: [0.08, 0.22, 0.06] }
                  : { scale: 1, opacity: 0.08 }
              }
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.div
              className="absolute -inset-4 rounded-full border border-[var(--color-accent)]/30"
              animate={
                avatarAction === 'pop'
                  ? { scale: [1, 2.2], opacity: [0.3, 0] }
                  : { scale: 1, opacity: 0 }
              }
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.img
              src={profileSrc}
              alt={data.name}
              className="relative h-56 w-56 rounded-full border-2 border-[var(--color-border)] object-cover md:h-72 md:w-72"
              animate={
                avatarAction === 'pop'
                  ? {
                      scale: [1, 1.08, 1],
                      borderColor: [
                        'var(--color-border)',
                        'var(--color-accent)',
                        'var(--color-border)',
                      ],
                    }
                  : {}
              }
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
