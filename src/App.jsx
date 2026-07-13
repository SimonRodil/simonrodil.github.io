
import { AnimatePresence, motion } from 'framer-motion'
import { AnimatedCounter } from './components/AnimatedCounter'
import { SEO } from './components/SEO'
import { BorderFlow } from './components/BorderFlow'
import { ExperienceTimeline } from './components/ExperienceTimeline'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { TechMarquee } from './components/TechMarquee'
import { ProjectCard } from './components/ProjectCard'
import { Section } from './components/Section'
import { Sidebar } from './components/Sidebar'
import SideRays from './components/SideRays'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import { UniverseProvider, useUniverse } from './components/HeroBackground'

function BackgroundLayer() {
  const { activeUniverse } = useUniverse()
  const isUniverseActive = !!activeUniverse

  return (
    <>
      <motion.div
        className="pointer-events-none fixed inset-0 z-0 hidden md:block"
        animate={{ opacity: isUniverseActive ? 0 : 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <SideRays
          speed={1.2}
          rayColor1="#4ade80"
          rayColor2="#2a6265"
          intensity={2.2}
          spread={10.8}
          origin="top-right"
          tilt={10}
          saturation={1.2}
          blend={0.6}
          falloff={2.2}
          opacity={0.45}
        />
      </motion.div>
      <div className="mobile-radial-bg pointer-events-none fixed inset-0 z-0 md:hidden" />
    </>
  )
}

function MainContent() {
  const { data, lang } = useLanguage()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={lang}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35 }}
      >
        <Hero onContactClick={() => window.dispatchEvent(new CustomEvent('start-contact-highlight'))} />
        <TechMarquee />

        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
            <Sidebar />

            <div>
              <Section id="about" title={data.labels.about}>
                <p className="max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
                  {data.summary}
                </p>
                <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                  {data.stats.map((stat) => (
                    <BorderFlow key={stat.label}>
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                        label={stat.label}
                      />
                    </BorderFlow>
                  ))}
                </div>
              </Section>

              <Section id="experience" title={data.labels.experience}>
                <ExperienceTimeline />
              </Section>

              <Section id="education" title={data.labels.education}>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  {data.education.map((item) => (
                    <BorderFlow key={item.degree}>
                      <div className="p-6">
                        <h3 className="font-semibold">{item.degree}</h3>
                        <p className="mt-1 text-sm text-[var(--color-muted)]">
                          {item.institution} · {item.year}
                        </p>
                      </div>
                    </BorderFlow>
                  ))}
                </div>
              </Section>

              <Section id="projects" title={data.labels.projects}>
                <div className="grid gap-6 md:grid-cols-2">
                  {data.projects.map((project, index) => (
                    <ProjectCard key={project.name} project={project} index={index} />
                  ))}
                </div>
              </Section>
            </div>
          </div>
        </div>

        <Footer />
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <UniverseProvider>
      <LanguageProvider>
        <div className="relative min-h-screen overflow-x-hidden">
          <SEO />
          <BackgroundLayer />

          <div className="relative z-10">
            <Header />
            <MainContent />
          </div>
        </div>
      </LanguageProvider>
    </UniverseProvider>
  )
}
