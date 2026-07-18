export const resume = {
  meta: {
    locale: 'es',
    pdfPath: 'resume-es.pdf',
    title: 'Simón Rodil — CV Portafolio',
    description:
      'Simón Rodil — Desarrollador Web y Técnico de CRM. CV portafolio con experiencia en React, desarrollo CRM y web full-stack.',
  },
  name: 'Simon Rodil',
  title: 'Desarrollador Web y Técnico de CRM',
  typingRoles: [
    'Desarrollador Full-Stack',
    'Desarrollador Web',
    'CRM Developer/Technician',
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
    whatsapp: '+34624362700',
  },
  nav: [
    { id: 'about', label: 'Sobre mí' },
    { id: 'experience', label: 'Experiencia' },
    { id: 'education', label: 'Educación y Certificaciones' },
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
    frontend: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vue', 'Tailwind CSS', 'Bootstrap', 'Liquid', 'Ampscript'],
    backend: ['PHP', 'Laravel', 'SQL', 'WordPress', 'Shopify', 'Node.JS', 'Python', 'Ruby'],
    crm: ['Klaviyo', 'Braze', 'Iterable', 'HubSpot', 'Mailchimp', 'MJML', 'Salesforce', 'Journey Builder', 'Automation Studio', 'Cloud Pages', 'Data Extensions', 'SSJS', 'SOAP/REST API'],
    tools: ['Figma', 'Photoshop', 'Git', 'Codex/OpenAI', 'Claude Code/Anthropic'],
  },
  languages: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'Profesional' },
    { name: 'Francés', level: 'Intermedio' },
  ],
  experience: [
    {
      company: 'CodeCrew (CA), USA (Remoto, Teletrabajo)',
      role: 'Desarrollador Frontend',
      period: 'Diciembre 2021 — Actualidad',
      bullets: [
        'Desarrollo de interfaces web para sitios corporativos y plataformas eCommerce, priorizando rendimiento, responsive design y experiencia de usuario.',
        'Construcción de componentes y funcionalidades frontend con JavaScript y TypeScript, trabajando con frameworks modernos como React y Vue.js según los requerimientos del proyecto.',
        'Integración de aplicaciones web con APIs REST/SOAP y servicios externos para conectar la capa de presentación con plataformas CRM y herramientas de negocio.',
        'Uso de Node.js para tareas de soporte al desarrollo, integraciones, automatización de procesos y manejo de lógica complementaria en entornos web.',
        'Gestión de dependencias y automatizaciones del entorno mediante Ruby y gems en flujos de trabajo asociados al desarrollo, testing y mantenimiento de proyectos digitales.',
        'Desarrollo de experiencias interactivas, formularios y páginas orientadas a captación, conversión y navegación fluida en entornos web y marketing.',
        'Implementación de personalización avanzada en Salesforce Marketing Cloud mediante AMPscript y SSJS para campañas dinámicas y contenido segmentado, incluyendo Journey Builder, Automation Studio y Cloud Pages integrados con Salesforce, Mailchimp, Klaviyo, Braze, Iterable y HubSpot.',
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
      institution: 'Universidad Politecnica Territorial Alonso Gamero',
      year: '2021',
    },
  ],
  projects: [
    {
      name: 'Sitio CFC Massachusetts',
      description:
      'CFCMass es un sitio web para una organización comunitaria, diseñado con un estilo visual personalizado y soporte para contenido multilingüe. Incluye secciones informativas sobre la organización, actividades, métodos de contacto y un panel para administrar el contenido de forma sencilla. El sitio incorpora herramientas de análisis que ayudan a comprender cómo navegan los usuarios y qué tipo de información buscan, lo que permite ajustar la comunicación y mejorar la conexión con la comunidad.',
      url: 'https://cfcmass.org',
      year: '2021',
      images: ['projects/cfcmass.png'],
      tags: ['PHP Legacy', 'HTML', 'SQL', 'CSS', 'JS', 'jQuery', 'Bootstrap', 'Hubspot ESP'],
    },
    {
      name: 'Bululu Outlet',
      description:
        'Bululu es una aplicación web de marketplace desarrollada completamente a medida en Laravel, diseñada para ofrecer una experiencia fluida tanto a clientes finales como al equipo administrativo. El sistema incluye módulos avanzados para la gestión de productos, categorías, clientes, promociones, configuración de ventas, inventario y administración general del catálogo. El panel administrativo permite manipular cada módulo con permisos diferenciados y una arquitectura pensada para escalar. La plataforma se integró con un CRM externo para automatizar campañas, segmentar usuarios y mejorar el engagement mediante workflows personalizados. También se implementó Facebook Pixel y Google Analytics / Google Tag Manager para medir conversiones, optimizar campañas y analizar el comportamiento de los usuarios dentro del marketplace. Tecnologías: Laravel, MySQL, Blade, CRM, Facebook Pixel, Google Analytics.',
      url: 'https://marketplace.visualstudio.com/search?term=email%20optimizer%20simon',
      year: '2021',
      images: ['projects/bululu.png'],
      tags: ['PHP', 'Laravel', 'Livewire', 'HTML', 'CSS', 'JS', 'jQuery', 'Klaviyo ESP'],
    },
    {
      name: 'El Rey Jesus PF',
      description:
      'ERJPF es un sitio institucional desarrollado con Laravel + Vite, enfocado en presentar información clara sobre la organización religiosa, sus actividades y sus métodos de contacto. Incluye un panel administrativo para gestionar eventos, registrar miembros y mantener el contenido actualizado. El sitio está optimizado para carga rápida y estructura modular, y utiliza herramientas de medición que permiten entender cómo interactúan los visitantes con las distintas secciones, facilitando mejoras continuas en comunicación y alcance.',
      url: 'https://github.com/SimonRodil/elreyjesuspf',
      year: '2021',
      images: ['projects/erjpf1.png', 'projects/erjpf2.png'],
      tags: ['HTML', 'CSS', 'JavaScript', 'Laravel', 'Blade', 'SQL', 'Mailchimp ESP'],
    },
    {
      name: 'Bodegas & Proyectos',
      description:
      'Bodegas & Espacios es una aplicación web para una agencia inmobiliaria desarrollada con Laravel + Vite, pensada para ofrecer velocidad, seguridad y una gestión eficiente de propiedades, ciudades, miembros del equipo, configuraciones internas y contenido optimizado para buscadores. La plataforma se integra con Iterable para automatizar flujos de comunicación y mantener a los clientes activos según su comportamiento dentro del sitio. Además, incorpora sistemas de análisis que permiten evaluar el rendimiento de las campañas y entender mejor el recorrido de los usuarios, apoyando la estrategia comercial de la agencia.',
      url: 'https://github.com/SimonRodil/BodegasyProyectos/tree/ReworkLaravel',
      year: '2025',
      images: ['projects/bodegas1.png'],
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel', 'SQL', 'Vite', 'Iterable ESP'],
    },
  ],
  labels: {
    downloadPdf: 'Descargar CV',
    downloadModalTitle: '⚠️ Aviso',
    downloadModalMessage: 'Como todo buen programador, puede que este currículum no tenga mis últimos registros, experiencias, proyectos y datos personales. Para más certeza dirígete al área de contacto y mándame un email, felizmente podría enviarte la última información. Si igualmente quieres ver el último CV alojado en este sitio web puedes hacerlo.',
    contactMe: 'Contactar',
    about: 'Sobre mí',
    experience: 'Experiencia',
    education: 'Educación y Certificaciones',
    projects: 'Proyectos',
    contact: 'Contacto',
    skills: 'Habilidades',
    languages: 'Idiomas',
    connect: 'Conectar',
    year: 'Año',
    viewProject: 'Ver proyecto',
    close: 'Cerrar',
    hello: 'Hola,',
    im: 'soy',
    footer: 'Todos los derechos reservados.',
    letsConnect: 'Conectemos',
    letsTalk: 'Hablemos',
    emailMe: 'Envíame un email',
  },
}
