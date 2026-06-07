import { AnimatePresence, motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { useTypingEffect } from '../hooks/useTypingEffect'
import { BackgroundSelector, useUniverse } from './HeroBackground'
import { YouTubeBackground } from './YouTubeBackground'

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
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 80])
  const profileSrc = `${import.meta.env.BASE_URL}avatar_v2.jpg`
  const [avatarAction, setAvatarAction] = useState('idle')

  const [isDesktop, setIsDesktop] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= 1024 : true,
  )

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const handler = (e) => setIsDesktop(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const { activeUniverse, setHeroVisible } = useUniverse()
  const inView = useInView(sectionRef, { margin: '-40% 0px' })

  useEffect(() => {
    setHeroVisible(inView)
  }, [inView, setHeroVisible])

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
      ref={sectionRef}
      className="relative flex min-h-screen scroll-mt-0 items-center overflow-hidden pt-24 pb-16"
    >
      <AnimatePresence mode="wait">
        {isDesktop && activeUniverse && (
          <motion.div key={activeUniverse} className="absolute inset-0 z-0">
            <YouTubeBackground activeUniverse={activeUniverse} />
          </motion.div>
        )}
      </AnimatePresence>

      {activeUniverse && (
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 z-10"
          style={{
            height: '32rem',
            background:
              'linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,1) 20%, rgba(10,10,10,0.85) 40%, rgba(10,10,10,0.5) 60%, rgba(10,10,10,0.2) 80%, transparent 100%)',
          }}
        />
      )}

      <motion.div
        className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-center md:px-6"
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
          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
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
            {isDesktop && <BackgroundSelector />}
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
