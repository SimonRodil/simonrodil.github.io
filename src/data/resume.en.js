export const resume = {
  meta: {
    locale: 'en',
    pdfPath: 'resume-en.pdf',
  },
  name: 'Simon Rodil',
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
    frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.JS', 'Python', 'Tailwind CSS', 'Bootstrap', 'Liquid', 'Ampscript', 'SSJS'],
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
        'WordPress Solutions Development for Website Customization.',
        'Managing Shopify templates for online store customization.',
        'Development of responsive email templates compatible with major email clients.',
        'Using APIs for campaigns and workflows/journeys in CRMs like Iterable and Salesforce.',
        'I collaborate on design and strategy to deliver HTML with AMPScript ready for customization.',
      ],
    },
    {
      company: 'Freelance',
      role: 'Fullstack Web Developer',
      period: '2018 — Present',
      bullets: [
        'Full-stack website development using PHP, Laravel, WordPress, and Shopify stores.',
        'Set up domains, hosting, and CMS according to the needs of each niche.',
        'Build dynamic frontends with JavaScript, Tailwind, and modern design patterns.',
        'SQL Database Management and Administration.',
        'Hosting optimization for faster loading of your projects.'
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
      image: 'projects/cfcmass.png',
      tags: ['PHP', 'HTML', 'SQL', 'JS'],
    },
    {
      name: 'Email Optimizer VS Code Extension',
      description:
        'Extension that helps developers optimize HTML email markup directly in the editor.',
      url: 'https://marketplace.visualstudio.com/search?term=email%20optimizer%20simon',
      image: 'https://placehold.co/600x400/111111/22d3ee?text=Email+Optimizer',
      tags: ['TypeScript', 'VS Code', 'Email'],
    },
    {
      name: 'Portfolio v3',
      description:
        'Animated personal portfolio with Tailwind, jQuery interactions, and responsive design.',
      url: 'https://simonrodil.github.io/Simon-Rodil-Portfolio-v3/',
      image: 'https://placehold.co/600x400/111111/22d3ee?text=Portfolio+v3',
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
