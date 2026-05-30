import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { SkillPills } from './SkillPills'

const socials = [
  { key: 'github', label: 'GitHub', icon: 'GH' },
  { key: 'linkedin', label: 'LinkedIn', icon: 'in' },
  { key: 'instagram', label: 'Instagram', icon: 'IG' },
  { key: 'devto', label: 'Dev.to', icon: 'dev' },
]

export function Sidebar() {
  const { data } = useLanguage()
  const { contact, skills, languages, labels } = data

  return (
    <motion.aside
      className="space-y-8 lg:sticky lg:top-28 lg:self-start"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[var(--color-muted)]">
          {labels.contact}
        </h3>
        <ul className="space-y-3 text-sm">
          <li>
            <a
              href={`mailto:${contact.email}`}
              className="text-[var(--color-text)] transition-colors hover:text-[var(--color-accent)]"
            >
              {contact.email}
            </a>
          </li>
          <li className="text-[var(--color-muted)]">{contact.location}</li>
        </ul>
      </div>

      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[var(--color-muted)]">
          {labels.skills}
        </h3>
        <SkillPills title="Frontend" items={skills.frontend} />
        <SkillPills title="Backend" items={skills.backend} />
        <SkillPills title="Email" items={skills.email} />
        <SkillPills title="Tools" items={skills.tools} />
      </div>

      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[var(--color-muted)]">
          {labels.languages}
        </h3>
        <ul className="space-y-2">
          {languages.map((lang) => (
            <li
              key={lang.name}
              className="flex justify-between text-sm text-[var(--color-text)]"
            >
              <span>{lang.name}</span>
              <span className="text-[var(--color-muted)]">{lang.level}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-[var(--color-muted)]">
          {labels.connect}
        </h3>
        <ul className="space-y-2">
          {socials.map((social) => (
            <li key={social.key}>
              <motion.a
                href={contact[social.key]}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
                whileHover={{ x: 4 }}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-md border border-[var(--color-border)] text-xs font-bold">
                  {social.icon}
                </span>
                {social.label}
              </motion.a>
            </li>
          ))}
        </ul>
      </div>
    </motion.aside>
  )
}
