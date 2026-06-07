export const resume = {
  meta: {
    locale: 'es',
    pdfPath: 'resume-es.pdf',
  },
  name: 'Simon Rodil',
  title: 'Desarrollador Web y Especialista en Email Development',
  typingRoles: [
    'Desarrollador Full-Stack',
    'Desarrollador Web',
    'Desarrollador de Emails',
    'Entusiasta en React',
  ],
  summary:
    'Ingeniero en Informática apasionado por crear soluciones digitales innovadoras. Transformo retos complejos en experiencias fluidas y fáciles de usar en desarrollo web, email responsive, bases de datos y hosting. Multilingüe (español, inglés y francés) y habituado a trabajar con equipos internacionales.',
  contact: {
    email: 'simon.rodil@icloud.com',
    location: 'Remoto · Con base en España',
    linkedin: 'https://linkedin.com/in/simonrodil',
    github: 'https://github.com/simonrodil',
    instagram: 'https://instagram.com/simonrodil',
    devto: 'https://dev.to/simonrodil',
  },
  nav: [
    { id: 'about', label: 'Sobre mí' },
    { id: 'experience', label: 'Experiencia' },
    { id: 'education', label: 'Educación' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'contact', label: 'Contacto' },
  ],
  stats: [
    { value: 5, suffix: '+', label: 'Años de experiencia' },
    { value: 35, suffix: '+', label: 'Proyectos entregados' },
    { value: 3, suffix: '', label: 'Idiomas' },
    { value: 8, suffix: '+', label: 'Lenguajes de Programación' },
  ],
  skills: {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.JS', 'Python', 'Tailwind CSS', 'Bootstrap', 'Liquid', 'Ampscript', 'SSJS'],
    backend: ['PHP', 'Laravel', 'SQL', 'WordPress', 'Shopify'],
    email: ['Klaviyo', 'Braze', 'Iterable', 'HubSpot', 'Mailchimp', 'MJML', 'Salesforce'],
    tools: ['Figma', 'Photoshop', 'Git', 'Claude'],
  },
  languages: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'Profesional' },
    { name: 'Francés', level: 'Intermedio' },
  ],
  experience: [
    {
      company: 'CodeCrew',
      role: 'Desarrollador Frontend',
      period: '2021 — Actualidad',
      bullets: [
        'Desarrollo de Soluciones en Wordpress para personalizacion de Sitios web.',
        'Manejo de Plantillas en Shopify para personalizacion de tiendas en linea.',
        'Desarrollo de plantillas de email responsive y compatibles con los principales clientes de correo.',
        'Uso de APIs para campañas y workflows/journeys en CRMs como Iterable y Salesforce.',
        'Colaboro con diseño y estrategia para entregar HTML con AMPScript listo para su personalización.',
      ],
    },
    {
      company: 'Freelance y clientes',
      role: 'Desarrollador Web Full-Stack',
      period: '2018 — Actualidad',
      bullets: [
        'Desarrollo de sitios full-stack con PHP, Laravel, WordPress y tiendas en Shopify.',
        'Configuro dominios, hosting y CMS según las necesidades de cada niche.',
        'Construyo frontends dinámicos con JavaScript, Tailwind y patrones modernos.',
        'Manejo y Administración de base de datos en SQL',
        'Optimizacion de hosting para carga mas rapida de sus proyectos.'
      ],
    }
  ],
  education: [
    {
      degree: 'Ingeniería en Informática',
      institution: 'Universidad de las Ciencias Informáticas',
      year: '2021',
    },
  ],
  projects: [
    {
      name: 'Sitio CFC Massachusetts',
      description:
        'Sitio PHP para una organización comunitaria con páginas multilingües y diseño a medida.',
      url: 'https://cfcmass.org',
      image: 'projects/cfcmass.png',
      tags: ['PHP', 'Web', 'Cliente'],
    },
    {
      name: 'Extensión Email Optimizer para VS Code',
      description:
        'Extensión que ayuda a optimizar markup de email HTML directamente en el editor.',
      url: 'https://marketplace.visualstudio.com/search?term=email%20optimizer%20simon',
      image: 'https://placehold.co/600x400/111111/22d3ee?text=Email+Optimizer',
      tags: ['TypeScript', 'VS Code', 'Email'],
    },
    {
      name: 'Portfolio v3',
      description:
        'Portfolio personal animado con Tailwind, jQuery y diseño responsive.',
      url: 'https://simonrodil.github.io/Simon-Rodil-Portfolio-v3/',
      image: 'https://placehold.co/600x400/111111/22d3ee?text=Portfolio+v3',
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
  ],
  labels: {
    downloadPdf: 'Descargar CV',
    about: 'Sobre mí',
    experience: 'Experiencia',
    education: 'Educación',
    projects: 'Proyectos',
    contact: 'Contacto',
    skills: 'Habilidades',
    languages: 'Idiomas',
    connect: 'Conectar',
    viewProject: 'Ver proyecto',
    close: 'Cerrar',
    hello: 'Hola,',
    im: 'soy',
    footer: 'Todos los derechos reservados.',
  },
}
