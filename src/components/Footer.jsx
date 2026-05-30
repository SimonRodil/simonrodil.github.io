import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const links = [
  { key: 'github', label: 'GitHub' },
  { key: 'linkedin', label: 'LinkedIn' },
  { key: 'instagram', label: 'Instagram' },
  { key: 'devto', label: 'Dev.to' },
]

export function Footer() {
  const { data } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer
      id="contact"
      className="scroll-mt-28 border-t border-[var(--color-border)] py-12"
    >
      <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
        <motion.h2
          className="text-2xl font-semibold"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {data.labels.contact}
        </motion.h2>
        <motion.p
          className="mx-auto mt-3 max-w-md text-[var(--color-muted)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <a
            href={`mailto:${data.contact.email}`}
            className="text-[var(--color-accent)] hover:underline"
          >
            {data.contact.email}
          </a>
        </motion.p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {links.map((link, index) => (
            <motion.a
              key={link.key}
              href={data.contact[link.key]}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              whileHover={{ scale: 1.05, y: -2 }}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        <p className="mt-10 text-xs text-[var(--color-muted)]">
          © {year} {data.name}. {data.labels.footer}
        </p>
      </div>
    </footer>
  )
}
