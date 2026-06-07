import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const brands = {
  linkedin: { hex: '#0077B5', label: 'LinkedIn' },
  whatsapp: { hex: '#25D366', label: 'WhatsApp' },
  email: { hex: '#38bdf8', label: 'Email' },
}

function TiltCard({ brand, href, target, icon, title, description, cta }) {
  const cardRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hover, setHover] = useState(false)
  const brandHex = brands[brand]?.hex ?? brands.email.hex

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
    setTilt({ x: 0, y: 0 })
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
        transition: hover
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
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at 50% 50%, ${brandHex}08, transparent 60%)`,
          opacity: hover ? 1 : 0,
        }}
      />

      <div className="relative z-10">
        <div
          className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border text-lg transition-all duration-500"
          style={{
            borderColor: hover ? `${brandHex}40` : 'var(--color-border)',
            background: hover ? `${brandHex}15` : 'transparent',
            transform: hover ? 'rotate(-8deg) scale(1.1)' : 'rotate(0deg) scale(1)',
          }}
        >
          <span
            className="transition-colors duration-500"
            style={{ color: hover ? brandHex : 'var(--color-accent)' }}
          >
            {icon}
          </span>
        </div>

        <h3
          className="text-sm font-semibold transition-colors duration-500"
          style={{ color: hover ? brandHex : 'var(--color-text)' }}
        >
          {title}
        </h3>
        <p className="mt-1 text-xs text-[var(--color-muted)]">{description}</p>

        <div className="mt-4 flex items-center gap-1.5 text-xs font-medium">
          <span
            className="transition-colors duration-500"
            style={{ color: hover ? brandHex : 'var(--color-accent)' }}
          >
            {cta}
          </span>
          <span
            className="inline-block transition-all duration-500"
            style={{
              transform: hover ? 'translateX(6px)' : 'translateX(0)',
              color: hover ? brandHex : 'var(--color-accent)',
            }}
          >
            →
          </span>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-500"
        style={{
          boxShadow: hover
            ? `0 24px 48px -12px ${brandHex}30, 0 8px 24px -8px ${brandHex}20, inset 0 1px 0 ${brandHex}15`
            : '0 0 0 0 transparent',
          opacity: hover ? 1 : 0,
        }}
      />
    </motion.a>
  )
}

function AtIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  )
}

function MessageIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
    </svg>
  )
}

function BriefcaseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
    </svg>
  )
}

export function Footer() {
  const { data } = useLanguage()
  const year = new Date().getFullYear()

  const cards = [
    {
      brand: 'linkedin',
      href: data.contact.linkedin,
      target: '_blank',
      icon: <BriefcaseIcon />,
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
            icon: <MessageIcon />,
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
      icon: <AtIcon />,
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
          {cards.map((card) => (
            <TiltCard key={card.brand} {...card} />
          ))}
        </div>

        <p className="mt-12 text-center text-xs text-[var(--color-muted)]">
          © {year} {data.name}. {data.labels.footer}
        </p>
      </div>
    </footer>
  )
}
