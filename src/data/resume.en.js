export const resume = {
  meta: {
    locale: 'en',
    pdfPath: 'resume-en.pdf',
    title: 'Simón Rodil — Portfolio CV',
    description:
      'Simón Rodil — Web Developer & CRM Technician. Portfolio CV with experience in React, CRM development, and full-stack web.',
  },
  name: 'Simon Rodil',
  title: 'Web Developer & CRM Technician',
  typingRoles: [
    'Full-Stack Developer',
    'Web Developer',
    'CRM Developer/Technician',
    'React Learner',
  ],
  summary:
    'Informatics Engineer passionate about crafting innovative digital solutions. I turn complex challenges into seamless, user-friendly experiences across web development, crm developer, databases, and hosting. Multilingual (Spanish, English, French) and comfortable collaborating with international teams.',
  contact: {
    email: 'simon.rodil@icloud.com',
    location: 'Available remotely · Based in Spain',
    linkedin: 'https://linkedin.com/in/simonrodil',
    github: 'https://github.com/simonrodil',
    instagram: 'https://instagram.com/simonrodil',
    devto: 'https://dev.to/simonrodil',
    whatsapp: '+34624362700',
  },
  nav: [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education & Certifications' },
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
    frontend: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vue', 'Tailwind CSS', 'Bootstrap', 'Liquid', 'Ampscript'],
    backend: ['PHP', 'Laravel', 'SQL', 'WordPress', 'Shopify', 'Node.JS', 'Python', 'Ruby'],
    crm: ['Klaviyo', 'Braze', 'Iterable', 'HubSpot', 'Mailchimp', 'MJML', 'Salesforce', 'Journey Builder', 'Automation Studio', 'Cloud Pages', 'Data Extensions', 'SSJS', 'SOAP/REST API'],
    tools: ['Figma', 'Photoshop', 'Git', 'Codex/OpenAI', 'Claude Code/Anthropic'],
  },
  languages: [
    { name: 'Spanish', level: 'Native' },
    { name: 'English', level: 'Professional' },
    { name: 'French', level: 'Intermediate' },
  ],
  experience: [
    {
      company: 'CodeCrew (CA), USA (Remote)',
      role: 'Frontend Developer',
      period: 'Dec 2021 — Present',
      bullets: [
        'Development of web interfaces for corporate websites and eCommerce platforms, prioritizing performance, responsive design, and user experience.',
        'Building frontend components and functionalities with JavaScript and TypeScript, working with modern frameworks like React and Vue.js based on project requirements.',
        'Integration of web applications with REST/SOAP APIs and external services to connect the presentation layer with CRM platforms and business tools.',
        'Using Node.js for development support tasks, integrations, process automation, and complementary logic handling in web environments.',
        'Managing dependencies and environment automations using Ruby and gems in workflows associated with development, testing, and maintenance of digital projects.',
        'Development of interactive experiences, forms, and pages focused on acquisition, conversion, and smooth navigation in web and marketing environments.',
        'Advanced customization in Salesforce Marketing Cloud using AMPscript and SSJS for dynamic campaigns and segmented content, including Journey Builder, Automation Studio, and Cloud Pages integrated with Salesforce, Mailchimp, Klaviyo, Braze, Iterable, and HubSpot.',
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
      institution: 'Universidad Politecnica Territorial Alonso Gamero',
      year: '2021',
    },
  ],
  projects: [
    {
      name: 'CFC Massachusetts Website',
      description:
        'CFCMass is a website for a community organization, designed with a custom visual style and multilingual content support. It includes informational sections about the organization, activities, contact methods, and a panel to easily manage content. The site incorporates analytics tools that help understand how users navigate and what type of information they seek, allowing for communication adjustments and improving community connection.',
      url: 'https://cfcmass.org',
      year: '2021',
      images: ['projects/cfcmass.png'],
      tags: ['PHP Legacy', 'HTML', 'SQL', 'CSS', 'JS', 'jQuery', 'Bootstrap', 'Hubspot ESP'],
    },
    {
      name: 'Bululu Outlet',
      description:
        'Bululu is a fully custom marketplace web application built with Laravel, designed to offer a smooth experience for both end customers and the administrative team. The system includes advanced modules for managing products, categories, customers, promotions, sales configuration, inventory, and overall catalog administration. The admin panel allows manipulating each module with differentiated permissions and a scalable architecture. The platform was integrated with an external CRM to automate campaigns, segment users, and improve engagement through personalized workflows. Facebook Pixel and Google Analytics / Google Tag Manager were also implemented to measure conversions, optimize campaigns, and analyze user behavior within the marketplace.',
      url: 'https://marketplace.visualstudio.com/search?term=email%20optimizer%20simon',
      year: '2021',
      images: ['projects/bululu.png'],
      tags: ['PHP', 'Laravel', 'Livewire', 'HTML', 'CSS', 'JS', 'jQuery', 'Klaviyo ESP'],
    },
    {
      name: 'El Rey Jesus PF',
      description:
        'ERJPF is an institutional website built with Laravel + Vite, focused on presenting clear information about the religious organization, its activities, and contact methods. It includes an admin panel to manage events, register members, and keep content up to date. The site is optimized for fast loading with a modular structure, and uses analytics tools that help understand how visitors interact with different sections, facilitating continuous improvements in communication and outreach.',
      url: 'https://github.com/SimonRodil/elreyjesuspf',
      year: '2021',
      images: ['projects/erjpf1.png'],
      tags: ['HTML', 'CSS', 'JavaScript', 'Laravel', 'Blade', 'SQL', 'Mailchimp ESP'],
    },
    {
      name: 'Bodegas & Proyectos',
      description:
        'Bodegas & Espacios is a web application for a real estate agency built with Laravel + Vite, designed to offer speed, security, and efficient management of properties, cities, team members, internal settings, and SEO-optimized content. The platform integrates with Iterable to automate communication flows and keep customers engaged based on their behavior within the site. It also incorporates analytics systems to evaluate campaign performance and better understand user journeys, supporting the agency business strategy.',
      url: 'https://github.com/SimonRodil/BodegasyProyectos/tree/ReworkLaravel',
      year: '2025',
      images: ['projects/bodegas1.png'],
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel', 'SQL', 'Vite', 'Iterable ESP'],
    },
  ],
  labels: {
    downloadPdf: 'Download CV',
    downloadModalTitle: '⚠️ Notice',
    downloadModalMessage: 'As a good programmer, this resume might not have my latest records, experiences, projects, and personal data. For more certainty, go to the contact area and send me an email; I would be happy to send you the latest information. If you still want to see the latest CV hosted on this website, you can.',
    contactMe: 'Contact me',
    about: 'About',
    experience: 'Experience',
    education: 'Education & Certifications',
    projects: 'Projects',
    contact: 'Contact',
    skills: 'Skills',
    languages: 'Languages',
    connect: 'Connect',
    year: 'Year',
    viewProject: 'View project',
    close: 'Close',
    hello: 'Hello,',
    im: "I'm",
    footer: 'All rights reserved.',
    letsConnect: "Let's connect",
    letsTalk: "Let's talk",
    emailMe: 'Email me',
  },
}
