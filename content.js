/*
 * CONTENIDO DEL PORTFOLIO
 * Todo el texto está aquí, en español (es) y en inglés (en).
 * Lo marcado con TODO lo tienes que rellenar tú. Si un campo queda vacío (''),
 * no se muestra en la página.
 */
window.CONTENT = {
  links: {
    email: 'rlndiaz92@gmail.com',
    github: 'https://github.com/rlndiaz92',
    linkedin: '', // TODO: https://www.linkedin.com/in/tu-usuario
    portfolioRepo: 'https://github.com/rlndiaz92/portfolio',
  },

  es: {
    name: 'Rolando Diaz Leotta',
    role: 'Desarrollador web junior · Automatizaciones con n8n',
    intro:
      'Desarrollo aplicaciones web y automatizaciones de procesos con Node.js, Supabase y n8n. Me gusta convertir tareas manuales en sistemas que funcionan solos, y trabajar con revisiones de código y entregas pequeñas y bien probadas.', // TODO: ajústalo con tus palabras
    facts: [
      '', // TODO: ciudad y país, por ejemplo 'Madrid, España'
      '', // TODO: 'Disponible para remoto e híbrido'
      'Español e inglés',
    ],

    experience: [
      {
        title: 'Desarrollador web en prácticas',
        company: 'Rocket Nova / Grupo Novayira',
        period: '', // TODO: por ejemplo 'Sept. 2026 – actualidad'
        points: [
          'Automatizaciones con n8n y Supabase: sistema de reseñas con moderación, recogida de documentos con revisión y borrado según el RGPD, y lista de espera con invitaciones, accesos con caducidad y resumen automático.',
          'Alertas diarias de seguimiento para el equipo comercial conectadas a un CRM.',
          'Mejoras en un portal de afiliados con Node.js, Express y JavaScript: calculadora de ganancias por variante de precio, resumen antes de publicar, contadores de caracteres y otras mejoras de interfaz con traducciones en español e inglés.',
          'Diseño de bases de datos en Supabase/PostgreSQL con migraciones, seguridad a nivel de fila (RLS) y funciones SQL.',
          'Trabajo en equipo con Git y pull requests revisados, integración continua (Biome y Prettier) y vídeos de demostración en cada entrega.',
        ],
        tags: ['Node.js', 'Express', 'JavaScript', 'Supabase', 'PostgreSQL', 'n8n', 'Git', 'GitHub'],
      },
    ],

    projects: [
      // Proyectos personales. TODO: copia este bloque por cada proyecto tuyo.
      // {
      //   kind: 'Proyecto personal',
      //   title: 'Nombre del proyecto',
      //   text: 'Qué hace en una o dos frases.',
      //   tags: ['HTML', 'CSS'],
      //   demo: 'https://…',
      //   code: 'https://github.com/rlndiaz92/…',
      // },
      {
        kind: 'Formación',
        title: 'API REST con tests',
        text: 'API REST con Node.js y Express, validación de datos y tests automáticos con Vitest.',
        tags: ['Node.js', 'Express', 'Vitest'],
        demo: '',
        code: '', // TODO: enlace al repositorio si está en tu GitHub personal
      },
      {
        kind: 'Formación',
        title: 'Despliegue con Docker en Render',
        text: 'Aplicación empaquetada con Docker y publicada en Render, con variables de entorno y comprobación de salud.',
        tags: ['Docker', 'Render'],
        demo: '',
        code: '', // TODO
      },
      {
        kind: 'Formación',
        title: 'App con Next.js (App Router)',
        text: 'Aplicación con Next.js usando App Router, componentes de servidor y rutas dinámicas.',
        tags: ['Next.js', 'React'],
        demo: '',
        code: '', // TODO
      },
      {
        kind: 'Formación',
        title: 'Agente de IA con aprobación humana',
        text: 'Flujo en n8n donde un agente de IA propone acciones y una persona las aprueba antes de ejecutarlas.',
        tags: ['n8n', 'IA'],
        demo: '',
        code: '', // TODO
      },
      {
        kind: 'Este portfolio',
        title: 'Portfolio personal',
        text: 'Web estática en HTML, CSS y JavaScript sin frameworks, con modo claro y oscuro, español e inglés, y despliegue automático en Render desde GitHub.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Render'],
        demo: '',
        code: 'https://github.com/rlndiaz92/portfolio',
      },
    ],

    skills: [
      { group: 'Frontend', items: 'HTML, CSS, JavaScript, diseño adaptable, accesibilidad, i18n' },
      { group: 'Backend y datos', items: 'Node.js, Express, APIs REST, Supabase, PostgreSQL, SQL' },
      { group: 'Automatización', items: 'n8n, webhooks, formularios, correos automáticos, integraciones con CRM' },
      { group: 'Herramientas', items: 'Git, GitHub, pull requests, Biome, Prettier, Docker, Render' },
    ],

    education: [
      // TODO: tus estudios y cursos, por ejemplo:
      // 'Título – Centro (2022–2024)',
    ],

    reference:
      'Referencia: Ing. Fernando Escurra, Rocket Nova · fernando@horecarentable.com',
  },

  en: {
    name: 'Rolando Diaz Leotta',
    role: 'Junior web developer · n8n automations',
    intro:
      'I build web applications and process automations with Node.js, Supabase and n8n. I enjoy turning manual tasks into systems that run on their own, and working with code reviews and small, well-tested deliveries.',
    facts: ['', '', 'Spanish and English'],

    experience: [
      {
        title: 'Web developer intern',
        company: 'Rocket Nova / Grupo Novayira',
        period: '', // TODO: e.g. 'Sept 2026 – present'
        points: [
          'Automations with n8n and Supabase: a review system with moderation, document collection with review and GDPR-compliant deletion, and a waitlist with referrals, expiring access codes and automatic reports.',
          'Daily follow-up alerts for the sales team connected to a CRM.',
          'Improvements to an affiliate portal with Node.js, Express and JavaScript: net-profit calculator per price variant, a review step before publishing, character counters and other UI improvements translated into Spanish and English.',
          'Database design in Supabase/PostgreSQL with migrations, row-level security (RLS) and SQL functions.',
          'Teamwork with Git and reviewed pull requests, continuous integration (Biome and Prettier) and demo videos for every delivery.',
        ],
        tags: ['Node.js', 'Express', 'JavaScript', 'Supabase', 'PostgreSQL', 'n8n', 'Git', 'GitHub'],
      },
    ],

    projects: [
      {
        kind: 'Training',
        title: 'REST API with tests',
        text: 'REST API built with Node.js and Express, with data validation and automated tests using Vitest.',
        tags: ['Node.js', 'Express', 'Vitest'],
        demo: '',
        code: '',
      },
      {
        kind: 'Training',
        title: 'Docker deployment on Render',
        text: 'Application packaged with Docker and deployed on Render, with environment variables and a health check.',
        tags: ['Docker', 'Render'],
        demo: '',
        code: '',
      },
      {
        kind: 'Training',
        title: 'Next.js app (App Router)',
        text: 'Next.js application using the App Router, server components and dynamic routes.',
        tags: ['Next.js', 'React'],
        demo: '',
        code: '',
      },
      {
        kind: 'Training',
        title: 'AI agent with human approval',
        text: 'n8n workflow where an AI agent proposes actions and a person approves them before they run.',
        tags: ['n8n', 'AI'],
        demo: '',
        code: '',
      },
      {
        kind: 'This portfolio',
        title: 'Personal portfolio',
        text: 'Static site in HTML, CSS and JavaScript without frameworks, with light and dark mode, Spanish and English, and automatic deployment on Render from GitHub.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Render'],
        demo: '',
        code: 'https://github.com/rlndiaz92/portfolio',
      },
    ],

    skills: [
      { group: 'Frontend', items: 'HTML, CSS, JavaScript, responsive design, accessibility, i18n' },
      { group: 'Backend and data', items: 'Node.js, Express, REST APIs, Supabase, PostgreSQL, SQL' },
      { group: 'Automation', items: 'n8n, webhooks, forms, automated emails, CRM integrations' },
      { group: 'Tools', items: 'Git, GitHub, pull requests, Biome, Prettier, Docker, Render' },
    ],

    education: [],

    reference: 'Reference: Fernando Escurra (Eng.), Rocket Nova · fernando@horecarentable.com',
  },

  ui: {
    es: {
      skip: 'Saltar al contenido',
      'nav.experience': 'Experiencia',
      'nav.projects': 'Proyectos',
      'nav.skills': 'Habilidades',
      'nav.education': 'Formación',
      'nav.contact': 'Contacto',
      'hero.eyebrow': 'Hola, soy',
      'hero.projects': 'Ver proyectos',
      'hero.contact': 'Contactar',
      'contact.text': '¿Tienes una oferta o un proyecto? Escríbeme.',
      'project.demo': 'Ver demo',
      'project.code': 'Código',
      footer: 'Hecho con HTML, CSS y JavaScript, desplegado en Render.',
      langBtn: 'Change language to English',
      themeBtn: 'Cambiar tema',
    },
    en: {
      skip: 'Skip to content',
      'nav.experience': 'Experience',
      'nav.projects': 'Projects',
      'nav.skills': 'Skills',
      'nav.education': 'Education',
      'nav.contact': 'Contact',
      'hero.eyebrow': "Hi, I'm",
      'hero.projects': 'See projects',
      'hero.contact': 'Get in touch',
      'contact.text': 'Have a job offer or a project? Send me a message.',
      'project.demo': 'Live demo',
      'project.code': 'Code',
      footer: 'Built with HTML, CSS and JavaScript, deployed on Render.',
      langBtn: 'Cambiar idioma a español',
      themeBtn: 'Toggle theme',
    },
  },
};
