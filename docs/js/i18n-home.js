(function () {
  const STORAGE_KEY = 'lang';

  const t = {
    es: {
      'meta.title': 'Mecánica del Medio Continuo | Aprende con el Mejor Curso',
      'meta.description': 'Domina la mecánica del medio continuo desde cero. Curso completo con teoría, ejemplos prácticos y aplicaciones reales en ingeniería.',
      'skip': 'Saltar al contenido principal',
      'brand.title': 'Mecánica',
      'brand.subtitle': 'Medio Continuo',
      'nav.home': 'Inicio',
      'nav.course': 'El Curso',
      'nav.books': 'Libros de Apoyo',
      'nav.contact': 'Contacto',
      'btn.results': 'Resultados del Curso',
      'hero.badge': 'Curso 2025 - Nueva edición disponible',
      'hero.title1': 'Domina la ',
      'hero.title2': 'Mecánica del Medio Continuo',
      'hero.desc': 'El curso más completo en español para entender los fundamentos de la mecánica de sólidos deformables. Desde tensores hasta aplicaciones prácticas en ingeniería.',
      'hero.enroll': 'Inscribirme al curso',
      'hero.syllabus': 'Ver temario completo',
      'hero.stat1': 'Horas de contenido',
      'hero.stat2': 'Módulos temáticos',
      'hero.stat3': 'Acceso de por vida',
      'video.unsupported': 'Tu navegador no soporta el elemento de video.',
      'section.beyond': 'Más allá de tus expectativas',
      'section.modules': 'Nuestros módulos',
      'section.specialty': 'Nuestra especialidad',
      'section.approach': 'Nuestro enfoque',
      'section.interest': '¿Te interesa saber más?',
      'ui.exploreCatalog': 'Explora el temario',
      'ui.moreAbout': 'Más información sobre el curso',
      'ui.viewAll': 'Ver todo el curso',
      'ui.todo': 'Todo',
      'approach.tech': 'Teoría',
      'approach.eff': 'Práctica',
      'approach.sus': 'Aplicaciones',
      'course.label': 'Contenido del curso',
      'course.title': 'Todo lo que aprenderás',
      'course.desc': 'Un recorrido completo por los temas fundamentales de la mecánica del medio continuo, diseñado para que construyas una base sólida y duradera.',
      'unit.explore': 'Explorar tema',
      'u1.title': 'Unidad 1 Fundamentos Matemáticos',
      'u1.l1': '1.1. Notación indicial.',
      'u1.l2': '1.2. Operaciones de tensores.',
      'u1.l3': '1.3. Métodos para el cálculo de valores y vectores propios.',
      'u1.l4': '1.4. Gradiente, divergencia y rotacional.',
      'u1.l5': '1.5. Teoremas de Green y Stokes.',
      'u2.title': 'Unidad 2 Estado de Esfuerzos',
      'u2.l1': '2.1. Fuerzas de superficie y de cuerpo.',
      'u2.l2': '2.2. Teorema de Cauchy.',
      'u2.l3': '2.3. Tensor de esfuerzos.',
      'u2.l4': '2.4. Esfuerzos y direcciones principales.',
      'u2.l5': '2.5. Representación gráfica del estado tridimensional y plano de esfuerzo.',
      'u3.title': 'Unidad 3 Estado de Deformación',
      'u3.l1': '3.1. Descripción del movimiento.',
      'u3.l2': '3.2. Descripción matemática de la deformación.',
      'u3.l3': '3.3. Tensor de deformación para deformaciones infinitesimales y desplazamientos pequeños.',
      'u3.l4': '3.4. Deformaciones por rotación, deformación lineal y angular.',
      'u3.l5': '3.5. Deformaciones y direcciones principales.',
      'u3.l6': '3.6. Ecuaciones de compatibilidad.',
      'u4.title': 'Unidad 4 Principios Básicos de la Mecánica',
      'u4.l1': '4.1. Principio de la Conservación de la cantidad de Movimiento lineal y angular.',
      'u4.l2': '4.2. Principio de Conservación de la masa.',
      'u4.l3': '4.3. Principio de Conservación de la energía.',
      'u5.title': 'Unidad 5 Ecuaciones Constitutivas',
      'u5.l1': '5.1. Ecuación generalizada de esfuerzo de Hooke.',
      'u5.l2': '5.2. Aplicaciones a problemas de Elasticidad lineal.',
      'u5.l3': '5.3. Ecuación de Navier-Cauchy.',
      'u5.l4': '5.4. Ecuación de Navier-Stokes.',
      'u6.title': 'Aplicaciones Modernas',
      'u6.desc': 'Conecta la teoría con aplicaciones reales: biomecánica, aeroespacial, materiales compuestos y simulación computacional.',
      'cta.title': '¿Listo para dominar la mecánica del medio continuo?',
      'cta.desc': 'Únete a cientos de estudiantes e ingenieros que ya están transformando su comprensión de la mecánica de sólidos.',
      'cta.btn': 'Inscribirme al curso',
      'footer.desc': 'Domina los fundamentos de la mecánica del medio continuo con un enfoque práctico y visual. Aprende teoría de elasticidad, tensores y más.',
      'footer.course': 'Curso',
      'footer.methodology': 'Metodología',
      'footer.cert': 'Certificación',
      'footer.support': 'Soporte',
      'footer.community': 'Comunidad',
      'footer.legal': 'Legal',
      'footer.terms': 'Términos de uso',
      'footer.privacy': 'Privacidad',
      'footer.copyright': 'Mecánica del Medio Continuo. Todos los derechos reservados.',
      'footer.made': 'Hecho con ❤ para estudiantes de ingeniería',
      'aria.home': 'Ir al inicio',
      'aria.nav': 'Navegación principal',
      'aria.lang': 'Selección de idioma',
      'aria.langEs': 'Español (México)',
      'aria.langEn': 'English (United Kingdom)',
      'aria.theme': 'Cambiar tema',
      'aria.themeTitle': 'Cambiar entre modo claro y oscuro',
      'aria.menu': 'Abrir menú de navegación',
      'aria.youtube': 'Síguenos en YouTube',
      'aria.linkedin': 'Síguenos en LinkedIn',
      'aria.twitter': 'Síguenos en Twitter',
      'aria.github': 'Síguenos en GitHub',
    },
    en: {
      'meta.title': 'Continuum Mechanics | Learn with the Best Course',
      'meta.description': 'Master continuum mechanics from scratch. A complete course with theory, practical examples, and real engineering applications.',
      'skip': 'Skip to main content',
      'brand.title': 'Mechanics',
      'brand.subtitle': 'Continuum Media',
      'nav.home': 'Home',
      'nav.course': 'The Course',
      'nav.books': 'Support Books',
      'nav.contact': 'Contact',
      'btn.results': 'Course Results',
      'hero.badge': '2025 Course - New edition available',
      'hero.title1': 'Master ',
      'hero.title2': 'Continuum Mechanics',
      'hero.desc': 'The most comprehensive course to understand the fundamentals of deformable solid mechanics. From tensors to practical engineering applications.',
      'hero.enroll': 'Enroll in the course',
      'hero.syllabus': 'View full syllabus',
      'hero.stat1': 'Hours of content',
      'hero.stat2': 'Thematic modules',
      'hero.stat3': 'Lifetime access',
      'video.unsupported': 'Your browser does not support the video element.',
      'section.beyond': 'Beyond your expectations',
      'section.modules': 'Our modules',
      'section.specialty': 'Our focus',
      'section.approach': 'Our approach',
      'section.interest': 'Want to learn more?',
      'ui.exploreCatalog': 'Explore the syllabus',
      'ui.moreAbout': 'More about the course',
      'ui.viewAll': 'View full course',
      'ui.todo': 'All',
      'approach.tech': 'Theory',
      'approach.eff': 'Practice',
      'approach.sus': 'Applications',
      'course.label': 'Course content',
      'course.title': 'Everything you will learn',
      'course.desc': 'A complete journey through the fundamental topics of continuum mechanics, designed to help you build a solid and lasting foundation.',
      'unit.explore': 'Explore topic',
      'u1.title': 'Unit 1 Mathematical Foundations',
      'u1.l1': '1.1. Index notation.',
      'u1.l2': '1.2. Tensor operations.',
      'u1.l3': '1.3. Methods for calculating eigenvalues and eigenvectors.',
      'u1.l4': '1.4. Gradient, divergence, and curl.',
      'u1.l5': '1.5. Green and Stokes theorems.',
      'u2.title': 'Unit 2 Stress State',
      'u2.l1': '2.1. Surface and body forces.',
      'u2.l2': '2.2. Cauchy theorem.',
      'u2.l3': '2.3. Stress tensor.',
      'u2.l4': '2.4. Principal stresses and directions.',
      'u2.l5': '2.5. Graphical representation of the 3D state and Mohr stress plane.',
      'u3.title': 'Unit 3 Strain State',
      'u3.l1': '3.1. Description of motion.',
      'u3.l2': '3.2. Mathematical description of deformation.',
      'u3.l3': '3.3. Strain tensor for infinitesimal deformations and small displacements.',
      'u3.l4': '3.4. Rotation, linear, and angular strain.',
      'u3.l5': '3.5. Principal strains and directions.',
      'u3.l6': '3.6. Compatibility equations.',
      'u4.title': 'Unit 4 Basic Principles of Mechanics',
      'u4.l1': '4.1. Conservation of linear and angular momentum.',
      'u4.l2': '4.2. Conservation of mass.',
      'u4.l3': '4.3. Conservation of energy.',
      'u5.title': 'Unit 5 Constitutive Equations',
      'u5.l1': '5.1. Generalized Hooke stress equation.',
      'u5.l2': '5.2. Applications to linear elasticity problems.',
      'u5.l3': '5.3. Navier-Cauchy equation.',
      'u5.l4': '5.4. Navier-Stokes equation.',
      'u6.title': 'Modern Applications',
      'u6.desc': 'Connect theory with real applications: biomechanics, aerospace, composite materials, and computational simulation.',
      'cta.title': 'Ready to master continuum mechanics?',
      'cta.desc': 'Join hundreds of students and engineers who are already transforming their understanding of solid mechanics.',
      'cta.btn': 'Enroll in the course',
      'footer.desc': 'Master the fundamentals of continuum mechanics with a practical, visual approach. Learn elasticity theory, tensors, and more.',
      'footer.course': 'Course',
      'footer.methodology': 'Methodology',
      'footer.cert': 'Certification',
      'footer.support': 'Support',
      'footer.community': 'Community',
      'footer.legal': 'Legal',
      'footer.terms': 'Terms of use',
      'footer.privacy': 'Privacy',
      'footer.copyright': 'Continuum Mechanics. All rights reserved.',
      'footer.made': 'Made with ❤ for engineering students',
      'aria.home': 'Go to home',
      'aria.nav': 'Main navigation',
      'aria.lang': 'Language selection',
      'aria.langEs': 'Spanish (Mexico)',
      'aria.langEn': 'English (United Kingdom)',
      'aria.theme': 'Toggle theme',
      'aria.themeTitle': 'Switch between light and dark mode',
      'aria.menu': 'Open navigation menu',
      'aria.youtube': 'Follow us on YouTube',
      'aria.linkedin': 'Follow us on LinkedIn',
      'aria.twitter': 'Follow us on Twitter',
      'aria.github': 'Follow us on GitHub',
    },
  };

  function getLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'en' ? 'en' : 'es';
  }

  function applyLanguage(lang) {
    const dict = t[lang] || t.es;
    document.documentElement.lang = lang === 'en' ? 'en' : 'es-MX';

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] === undefined) return;
      if (el.dataset.i18nTarget === 'html') {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });

    document.querySelectorAll('[data-i18n-title]').forEach((el) => {
      const key = el.getAttribute('data-i18n-title');
      if (dict[key] !== undefined) el.setAttribute('title', dict[key]);
    });

    if (dict['meta.title']) document.title = dict['meta.title'];
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict['meta.description']) metaDesc.setAttribute('content', dict['meta.description']);

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    localStorage.setItem(STORAGE_KEY, lang);
  }

  function initLanguage() {
    applyLanguage(getLang());
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        if (lang === 'es' || lang === 'en') applyLanguage(lang);
      });
    });
  }

  window.MMC_i18n = { applyLanguage, getLang, initLanguage };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
  } else {
    initLanguage();
  }
})();
