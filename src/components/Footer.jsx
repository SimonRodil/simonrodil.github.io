import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { SiWhatsapp, SiGmail } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'

const brands = {
  linkedin: { hex: '#0077B5', label: 'LinkedIn' },
  whatsapp: { hex: '#25D366', label: 'WhatsApp' },
  email: { hex: '#38bdf8', label: 'Email' },
}

function TiltCard({ brand, href, target, icon, title, description, cta, highlighted }) {
  const cardRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hover, setHover] = useState(false)
  const brandHex = brands[brand]?.hex ?? brands.email.hex
  const active = hover || highlighted

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: x * 12, y: y * -12 })
  }

  const handleMouseEnter = () => setHover(true)
  const handleMouseLeave = () => {
    setHover(false)
    if (!highlighted) setTilt({ x: 0, y: 0 })
  }

  return (
    <motion.a
      ref={cardRef}
      href={href}
      target={target}
      rel={target === '_blank' ? 'noreferrer' : undefined}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(600px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transition: active
          ? 'box-shadow 0.3s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
          : 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
      className="group relative block rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 text-left"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at 50% 50%, ${brandHex}08, transparent 60%)`,
          opacity: active ? 1 : 0,
        }}
      />

      <div className="relative z-10">
        <div
          className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border text-lg transition-all duration-500"
          style={{
            borderColor: active ? `${brandHex}40` : 'var(--color-border)',
            background: active ? `${brandHex}15` : 'transparent',
            transform: active ? 'rotate(-8deg) scale(1.1)' : 'rotate(0deg) scale(1)',
          }}
        >
          <span
            className="transition-colors duration-500"
            style={{ color: active ? brandHex : 'var(--color-accent)' }}
          >
            {icon}
          </span>
        </div>

        <h3
          className="text-sm font-semibold transition-colors duration-500"
          style={{ color: active ? brandHex : 'var(--color-text)' }}
        >
          {title}
        </h3>
        <p className="mt-1 text-xs text-[var(--color-muted)]">{description}</p>

        <div className="mt-4 flex items-center gap-1.5 text-xs font-medium">
          <span
            className="transition-colors duration-500"
            style={{ color: active ? brandHex : 'var(--color-accent)' }}
          >
            {cta}
          </span>
          <span
            className="inline-block transition-all duration-500"
            style={{
              transform: active ? 'translateX(6px)' : 'translateX(0)',
              color: active ? brandHex : 'var(--color-accent)',
            }}
          >
            →
          </span>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-500"
        style={{
          boxShadow: active
            ? `0 24px 48px -12px ${brandHex}30, 0 8px 24px -8px ${brandHex}20, inset 0 1px 0 ${brandHex}15`
            : '0 0 0 0 transparent',
          opacity: active ? 1 : 0,
        }}
      />
    </motion.a>
  )
}

function LinkedInIcon() {
  return <FaLinkedin className="h-5 w-5" />
}

function WhatsAppIcon() {
  return <SiWhatsapp className="h-5 w-5" />
}

function EmailIcon() {
  return <SiGmail className="h-5 w-5" />
}

export function Footer() {
  const { data } = useLanguage()
  const year = new Date().getFullYear()
  const [highlightIndex, setHighlightIndex] = useState(-1)

  useEffect(() => {
    const handler = () => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => setHighlightIndex(0), 500)
    }
    window.addEventListener('start-contact-highlight', handler)
    return () => window.removeEventListener('start-contact-highlight', handler)
  }, [])

  useEffect(() => {
    if (highlightIndex < 0) return
    const timer = setTimeout(() => {
      if (highlightIndex >= 2) {
        setHighlightIndex(-1)
      } else {
        setHighlightIndex(highlightIndex + 1)
      }
    }, 800)
    return () => clearTimeout(timer)
  }, [highlightIndex])

  const cards = [
    {
      brand: 'linkedin',
      href: data.contact.linkedin,
      target: '_blank',
      icon: <LinkedInIcon />,
      title: 'LinkedIn',
      description: data.contact.linkedin.replace('https://', ''),
      cta: data.labels.letsConnect,
    },
    ...(data.contact.whatsapp
      ? [
          {
            brand: 'whatsapp',
            href: `https://wa.me/${data.contact.whatsapp.replace(/[^0-9]/g, '')}`,
            target: '_blank',
            icon: <WhatsAppIcon />,
            title: 'WhatsApp',
            description: data.contact.whatsapp,
            cta: data.labels.letsTalk,
          },
        ]
      : []),
    {
      brand: 'email',
      href: `mailto:${data.contact.email}`,
      target: '_self',
      icon: <EmailIcon />,
      title: data.contact.email,
      description: data.labels.contact,
      cta: data.labels.emailMe,
    },
  ]

  return (
    <footer
      id="contact"
      className="scroll-mt-28 border-t border-[var(--color-border)] py-16"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.h2
          className="text-center text-2xl font-semibold"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {data.labels.contact}
        </motion.h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {cards.map((card, i) => (
            <TiltCard key={card.brand} {...card} highlighted={highlightIndex === i} />
          ))}
        </div>

        <p className="mt-12 text-center text-xs text-[var(--color-muted)]">
          © {year} {data.name}. {data.labels.footer}
        </p>
      </div>
    </footer>
  )
}
