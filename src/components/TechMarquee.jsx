import StackIcon from 'tech-stack-icons'
import {
  SiShopify,
  SiHubspot,
  SiMailchimp,
  SiSalesforce,
  SiHostinger,
  SiGodaddy,
} from 'react-icons/si'
import { useReducedMotion } from '../hooks/useReducedMotion'

function LetterIcon({ letters, color }) {
  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8 shrink-0">
      <rect width="48" height="48" rx="10" fill="#1e1e2e" />
      <text
        x="24"
        y="29"
        textAnchor="middle"
        fontFamily="system-ui, sans-serif"
        fontWeight="700"
        fontSize="16"
        fill={color}
      >
        {letters}
      </text>
    </svg>
  )
}

function SiIcon({ icon, color, className }) {
  const icons = {
    shopify: SiShopify,
    hubspot: SiHubspot,
    mailchimp: SiMailchimp,
    salesforce: SiSalesforce,
    hostinger: SiHostinger,
    godaddy: SiGodaddy,
  }
  const Icon = icons[icon]
  return Icon ? <Icon className={className} style={{ color }} /> : null
}

function RawSvg({ svg, className }) {
  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{
        __html: svg
          .replace(/<svg[^>]*>/, (m) =>
            m.replace(/width="[^"]*"/, '').replace(/height="[^"]*"/, ''),
          )
          .replace(/<\?xml[^?]*\?>\s*/g, '')
          .replace(/<!--[\s\S]*?-->\s*/g, ''),
      }}
    />
  )
}

const stackIcons = [
  { name: 'HTML', icon: 'html5' },
  { name: 'CSS', icon: 'css3' },
  { name: 'JavaScript', icon: 'js' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'React', icon: 'react' },
  { name: 'Node.JS', icon: 'nodejs' },
  { name: 'Python', icon: 'python' },
  { name: 'Tailwind CSS', icon: 'tailwindcss' },
  { name: 'Bootstrap', icon: 'bootstrap5' },
  { name: 'PHP', icon: 'php' },
  { name: 'Laravel', icon: 'laravel' },
  { name: 'WordPress', icon: 'wordpress' },
  { name: 'Figma', icon: 'figma' },
  { name: 'Photoshop', icon: 'photoshop' },
  { name: 'Git', icon: 'git' },
  { name: 'Claude', icon: 'claude' },
  { name: 'SQL', icon: 'sqldeveloper' },
]

const customIcons = [
  { name: 'Shopify', si: 'shopify', color: '#95BF47' },
  {
    name: 'Klaviyo',
    svg: `<svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg"><path d="M148.76,124.01H3.24V26.63H148.76l-30.55,48.69,30.55,48.69Z" fill="#000"/></svg>`,
  },
  {
    name: 'Braze',
    svg: `<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M128,0C57.31,0,0,57.31,0,128s57.31,128,128,128,128-57.31,128-128S198.69,0,128,0Zm55.89,146.62c-2.1,20.01-14.66,36.3-29.33,36.3s-29.33-16.29-27.23-36.3c2.1-20.01,14.66-36.3,29.33-36.3,14.19,0,27.23,16.29,27.23,36.3ZM128,237.38c-32.58.05-63.48-14.46-84.25-39.56,18.15,5.82,38.4,0.7,54.23-14.89,1.67-1.68,3.23-3.47,4.66-5.35,7.22,15.59,21.18,23.51,35.14,23.51,23.74,0,43.75-24.44,46.08-54.69,2.33-30.25-14.66-54.22-37.23-54.22-8.19-.11-16.25,2.07-23.27,6.29l7,-40.73c.69-3.26-.09-6.66-2.12-9.31-2.1-3.26-3.96-4.66-6.75-4.66H88.9c-1.93.1-3.5,1.58-3.72,3.49-.87,3.84-1.49,7.72-1.86,11.64-.23,2.56,1.63,3.49,3.72,3.49l23.74,0c-3.72,23.27-11.17,68.42-13.27,79.82-2.19,10.8-7.44,20.73-15.12,28.63-13.03,13.03-37,16.06-51.2,1.86-4.89-5.12-12.57-17.68-12.57-44.68,0-60.41,48.97-109.38,109.38-109.38,60.41,0,109.38,48.97,109.38,109.38,0,60.41-48.97,109.38-109.38,109.38Z" fill="#212124" fill-rule="nonzero"/></svg>`,
  },
  {
    name: 'Iterable',
    svg: `<svg viewBox="0 0 210 210" xmlns="http://www.w3.org/2000/svg"><rect x="16" y="38.8" width="106.4" height="53.6" rx="4" transform="rotate(-45 69.2 65.6)" fill="#6A266D" opacity="0.15"/><rect x="40.6" y="90.1" width="53.6" height="106.4" rx="4" transform="rotate(-45 67.2 143.3)" fill="#EF3D55" opacity="0.15"/><rect x="117" y="14.2" width="53.6" height="106.4" rx="4" transform="rotate(-45 143.8 67.4)" fill="#36C3F2" opacity="0.25"/><rect x="91.1" y="116.4" width="106.4" height="53.6" rx="4" transform="rotate(-45 144.3 143.2)" fill="#59C1A7" opacity="0.25"/><circle cx="29.5" cy="105.4" r="27" fill="#EF3D55"/><circle cx="105.7" cy="29.2" r="27" fill="#6A266D"/><circle cx="181.9" cy="105.7" r="27" fill="#36C3F2"/><circle cx="105.7" cy="181.9" r="27" fill="#59C1A7"/></svg>`,
  },
  { name: 'HubSpot', si: 'hubspot', color: '#FF7A59' },
  { name: 'Mailchimp', si: 'mailchimp', color: '#FFE01B' },
  { name: 'Salesforce', si: 'salesforce', color: '#00A1E0' },
  { name: 'Hostinger', si: 'hostinger', color: '#6739B6' },
  {
    name: 'HostGator',
    svg: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M8,32c0-1.5,0.8-3,2.2-3.8l8-4.5c1.2-0.7,2.6-0.7,3.8,0l5.5,3.1c0.8-0.5,1.7-0.8,2.5-0.8c3.3,0,6,2.7,6,6c0,0.6-0.1,1.2-0.3,1.7l4.2,2.4c1.2,0.7,2,2,2,3.4c0,0.4-0.1,0.8-0.2,1.1l-3.8,3.8c0.4,1,0.6,2.1,0.6,3.2c0,5.5-4.5,10-10,10c-1.8,0-3.5-0.5-5-1.3l-2,2c-0.8,0.8-1.9,1.3-3.1,1.3H17c-2.2,0-4-1.8-4-4v-6.5c0-1.3-0.7-2.5-1.8-3.2L8,38.5V32z" fill="#2E93EE"/><path d="M32,24c3.3,0,6,2.7,6,6c0,3.3-2.7,6-6,6s-6-2.7-6-6C26,26.7,28.7,24,32,24z" fill="#FFCF00"/><ellipse cx="32" cy="30" rx="2.5" ry="2.5" fill="#2E93EE"/><path d="M42,28l8-5c0.8-0.5,1.8-0.5,2.6,0l0,0c0.8,0.5,1.3,1.4,1.3,2.3v6c0,1.7-1.3,3-3,3h-6.5c-0.8,0-1.5-0.3-2-0.8L42,28z" fill="#2E93EE" opacity="0.8"/></svg>`,
  },
  { name: 'GoDaddy', si: 'godaddy', color: '#00A4A6' },
]

const allTechnologies = [...stackIcons, ...customIcons]

export function TechMarquee() {
  const reduced = useReducedMotion()
  const duplicated = [...allTechnologies, ...allTechnologies]

  return (
    <div className="group relative mb-[75px] w-full overflow-hidden border-y border-[var(--color-border)] bg-[var(--color-bg)] py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--color-bg)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--color-bg)] to-transparent" />

      <div
        className={`flex w-max items-center gap-8 px-16 ${reduced ? '' : 'animate-marquee group-hover:animate-marquee-slow'}`}
      >
        {duplicated.map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className="flex shrink-0 items-center gap-2.5 transition-all duration-300 hover:scale-110"
          >
            {'icon' in tech ? (
              <StackIcon
                name={tech.icon}
                variant="dark"
                className="h-8 w-8 shrink-0"
              />
            ) : 'si' in tech ? (
              <SiIcon icon={tech.si} color={tech.color} className="h-8 w-8 shrink-0" />
            ) : 'svg' in tech ? (
              <RawSvg svg={tech.svg} className="block h-8 w-8 shrink-0" />
            ) : (
              <LetterIcon letters={tech.letters} color={tech.color} />
            )}
            <span className="whitespace-nowrap text-sm font-medium text-[var(--color-muted)] opacity-60 transition-opacity duration-300 group-hover:opacity-100">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
