export const resume = {
  meta: {
    locale: 'en',
    pdfPath: 'resume-en.pdf',
  },
  name: 'Simón Rodil',
  title: 'Web Developer & Email Marketing Specialist',
  typingRoles: [
    'Full-Stack Developer',
    'Web Developer',
    'Email Developer',
    'React Learner',
  ],
  summary:
    'Informatics Engineer passionate about crafting innovative digital solutions. I turn complex challenges into seamless, user-friendly experiences across web development, responsive email, databases, and hosting. Multilingual (Spanish, English, French) and comfortable collaborating with international teams.',
  contact: {
    email: 'simon.rodil@icloud.com',
    location: 'Available remotely · Based in Spain',
    linkedin: 'https://linkedin.com/in/simonrodil',
    github: 'https://github.com/simonrodil',
    instagram: 'https://instagram.com/simonrodil',
    devto: 'https://dev.to/simonrodil',
  },
  nav: [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ],
  stats: [
    { value: 5, suffix: '+', label: 'Years Experience' },
    { value: 35, suffix: '+', label: 'Projects Delivered' },
    { value: 3, suffix: '', label: 'Languages' },
    { value: 8, suffix: '+', label: 'Programming Languages' },
  ],
  skills: {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap', 'Liquid', 'Ampscript', 'SSJS'],
    backend: ['PHP', 'Laravel', 'SQL', 'WordPress', 'Shopify'],
    email: ['Klaviyo', 'Braze', 'Iterable', 'HubSpot', 'Mailchimp', 'MJML', 'Salesforce'],
    tools: ['Figma', 'Photoshop', 'Git', 'Claude'],
  },
  languages: [
    { name: 'Spanish', level: 'Native' },
    { name: 'English', level: 'Professional' },
    { name: 'French', level: 'Intermediate' },
  ],
  experience: [
    {
      company: 'CodeCrew',
      role: 'Frontend Developer',
      period: '2021 — Present',
      bullets: [
        'Build responsive, cross-client email templates for major marketing platforms.',
        'Develop automated flows and campaign assets optimized for deliverability and engagement.',
        'Collaborate with designers and strategists to ship production-ready HTML emails.',
      ],
    },
    {
      company: 'Freelance',
      role: 'Fullstack Web Developer',
      period: '2018 — Present',
      bullets: [
        'Deliver full-stack websites with PHP, Laravel, WordPress, and Shopify.',
        'Set up domains, hosting, and CMS configurations for diverse business needs.',
        'Create dynamic frontends with JavaScript, Tailwind, and modern component patterns.',
      ],
    },
  ],
  education: [
    {
      degree: 'B.S. Informatics Engineering',
      institution: 'Universidad de las Ciencias Informáticas',
      year: 'Graduate',
    },
  ],
  projects: [
    {
      name: 'CFC Massachusetts Website',
      description:
        'Full PHP website for a faith community organization with multilingual pages and custom layouts.',
      url: 'https://cfcmass.org',
      tags: ['PHP', 'HTML', 'SQL', 'JS'],
    },
    {
      name: 'Email Optimizer VS Code Extension',
      description:
        'Extension that helps developers optimize HTML email markup directly in the editor.',
      url: 'https://marketplace.visualstudio.com/search?term=email%20optimizer%20simon',
      tags: ['TypeScript', 'VS Code', 'Email'],
    },
    {
      name: 'Portfolio v3',
      description:
        'Animated personal portfolio with Tailwind, jQuery interactions, and responsive design.',
      url: 'https://simonrodil.github.io/Simon-Rodil-Portfolio-v3/',
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
  ],
  labels: {
    downloadPdf: 'Download CV',
    about: 'About',
    experience: 'Experience',
    education: 'Education',
    projects: 'Projects',
    contact: 'Contact',
    skills: 'Skills',
    languages: 'Languages',
    connect: 'Connect',
    viewProject: 'View project',
    close: 'Close',
    hello: 'Hello,',
    im: "I'm",
    footer: 'All rights reserved.',
  },
}
