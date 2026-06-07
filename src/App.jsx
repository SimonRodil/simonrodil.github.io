import { AnimatePresence, motion } from 'framer-motion'
/* import { BackgroundGlow } from './components/BackgroundGlow' */
import { AnimatedCounter } from './components/AnimatedCounter'
import { ExperienceTimeline } from './components/ExperienceTimeline'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProjectCard } from './components/ProjectCard'
import { Section } from './components/Section'
import { Sidebar } from './components/Sidebar'
import SideRays from './components/SideRays'          // 👈 nuevo import
import { LanguageProvider, useLanguage } from './context/LanguageContext'

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
        <Hero />

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
                    <AnimatedCounter
                      key={stat.label}
                      value={stat.value}
                      suffix={stat.suffix}
                      label={stat.label}
                    />
                  ))}
                </div>
              </Section>

              <Section id="experience" title={data.labels.experience}>
                <ExperienceTimeline />
              </Section>

              <Section id="education" title={data.labels.education}>
                <ul className="space-y-4">
                  {data.education.map((item) => (
                    <li
                      key={item.degree}
                      className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6"
                    >
                      <h3 className="font-semibold">{item.degree}</h3>
                      <p className="mt-1 text-sm text-[var(--color-muted)]">
                        {item.institution} · {item.year}
                      </p>
                    </li>
                  ))}
                </ul>
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
    <LanguageProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        {/* <BackgroundGlow /> */}
        <div className="pointer-events-none fixed inset-0 z-0">
          <SideRays
            speed={1.2}
            rayColor1="#4ade80"
            rayColor2="#22d3ee"
            intensity={1.8}
            spread={1.8}
            origin="top-right"
            tilt={10}
            saturation={1.2}
            blend={0.6}
            falloff={2.2}
            opacity={0.35}
          />
        </div>
        <div className="relative z-10">
          <Header />
          <MainContent />
        </div>
      </div>
    </LanguageProvider>
  )
}
