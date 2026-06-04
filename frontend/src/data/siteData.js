export const contact = {
  whatsappNumber: '5491164236675',
  whatsappDisplay: '11-6423-6675',
  email: 'agustinsosa.profe@gmail.com',
  instagram: 'https://www.instagram.com/tuprofesor.ar/',
  instagramHandle: '@tuprofesor.ar',
  location: 'Temperley, Buenos Aires',
  firstClassMessage:
    'Hola Agustín, quiero información sobre las clases y la primera clase gratis',
};

export const logos = {
  mainTransparent: '/assets/logos/TPP_Main_Logo_NoTagline_TransparentBG.png',
  favicon: '/assets/logos/TPP_Favicon_Monogram_Minimal_WhiteBG.png',
};

export const images = {
  hero: '/assets/images/foto-agustin-hero.jpeg',
  heroSecondary: '/assets/images/foto-agustin-secundaria.jpeg',
  about: '/assets/images/foto-agustin-sobre-mi.jpeg',
  presencial: '/assets/images/foto-agustin-presencial.jpeg',
  virtual: '/assets/images/foto-agustin-virtual.jpeg',
  group: '/assets/images/foto-agustin-grupal.jpeg',
  principal: '/assets/images/foto-agustin-principal.jpg',
};

export const brand = {
  name: 'Tu Profesor Particular',
  owner: 'Agustín Elías Sosa',
  copyright: '© 2026 Agustín Elías Sosa · Tu Profesor Particular · Temperley, Bs. As.',
};

export const navItems = [
  { section: 'materias', href: '#materias', icon: '📚', label: 'Materias' },
  { section: 'metodo', href: '#metodo', icon: '🧭', label: 'Método' },
  { section: 'sobre', href: '#sobre', icon: '👤', label: 'Sobre mí' },
  { section: 'carta', href: '#carta', icon: '✉️', label: 'Mi historia' },
  { section: 'faq', href: '#faq', icon: '❓', label: 'FAQ' },
];

export const drawerItems = [
  { icon: '📚', label: 'Materias' },
  { icon: '🎁', label: '¿Cuál es tu caso?' },
  { icon: '🧭', label: 'Mi método' },
  { icon: '👤', label: 'Sobre mí' },
  { icon: '✉️', label: 'Mi historia' },
  { icon: '⭐', label: 'Testimonios' },
  { icon: '❓', label: 'Preguntas frecuentes' },
];

export const whatsappMessages = {
  firstClass: contact.firstClassMessage,
  readPage: 'Hola Agustín, leí tu página y quiero la clase gratis',
  method: 'Hola Agustín, quiero empezar con el método',
  individualPresencial: 'Hola Agustín, me interesa una clase individual presencial',
  individualVirtual: 'Hola Agustín, me interesa una clase individual virtual',
  groupPresencial: 'Hola Agustín, me interesa una clase grupal presencial',
  groupVirtual: 'Hola Agustín, me interesa una clase grupal virtual',
  testimonial: 'Hola Agustín, quiero dejarte mi testimonio',
};

export const modalityAxes = [
  {
    label: '¿Cómo querés estudiar?',
    axis: 'modo',
    options: [
      { value: 'individual', label: 'Individual', icon: '👤', active: true },
      { value: 'grupal', label: 'Grupal', icon: '👥' },
    ],
  },
  {
    label: '¿Dónde?',
    axis: 'lugar',
    options: [
      { value: 'presencial', label: 'Presencial', icon: '📚', active: true },
      { value: 'virtual', label: 'Virtual', icon: '💬' },
    ],
  },
];

export const modalityPanels = [
  {
    id: 'panel-individual-presencial',
    active: true,
    image: images.presencial,
    imageAlt: 'Presencial',
    tag: 'La más personalizada',
    title: 'Cara a cara.',
    emphasis: 'Sin distracciones.',
    description:
      'Todo el tiempo de la clase es tuyo. Trabajamos en Temperley, en el ritmo que necesitás, con material físico y un vínculo real de aprendizaje.',
    features: [
      'Atención 100% personalizada',
      'Temperley y alrededores, GBA Sur',
      'Material físico incluido',
      'Punto de partida y plan de estudio a medida',
    ],
    messageKey: 'individualPresencial',
  },
  {
    id: 'panel-individual-virtual',
    image: images.virtual,
    imageAlt: 'Virtual',
    tag: 'Desde cualquier lugar',
    title: 'El mismo profe.',
    emphasis: 'Desde tu casa.',
    description:
      'No importa dónde estés en Argentina. Tenés toda mi atención, misma calidad, misma dedicación. Con plataformas interactivas y posibilidad de grabación.',
    features: ['Todo el país y exterior', 'Plataformas digitales interactivas', 'Grabaciones disponibles', 'Flexible en horarios'],
    messageKey: 'individualVirtual',
  },
  {
    id: 'panel-grupal-presencial',
    image: images.group,
    imageAlt: 'Grupal presencial',
    tag: 'Mejor precio por persona',
    title: 'Estudiá con',
    emphasis: 'tus compañeros.',
    description:
      'La dinámica grupal potencia el aprendizaje. Se comparte el costo y se multiplica la energía. Ideal para grupos de la misma materia o del mismo año.',
    features: ['2 a 4 alumnos por grupo', 'Precio reducido por persona', 'Temperley y alrededores', 'Dinámica colaborativa'],
    messageKey: 'groupPresencial',
  },
  {
    id: 'panel-grupal-virtual',
    image: images.heroSecondary,
    imageAlt: 'Grupal virtual',
    tag: 'El más accesible',
    title: 'Grupo online.',
    emphasis: 'Sin importar distancias.',
    description:
      'Perfecto para grupos de estudio universitarios o amigos de distintos barrios. Se divide el costo, se aprovecha la clase y cada uno desde su casa.',
    features: ['El precio más accesible', 'Sin limitaciones geográficas', 'Plataformas colaborativas', 'Ideal para parciales grupales'],
    messageKey: 'groupVirtual',
  },
];

export const methodCompareRows = [
  ['El profe habla, el alumno escucha', 'Construimos juntos desde el primer día'],
  ['Mismo ritmo para todos', 'Tu ritmo, tu punto de partida, tu plan'],
  ['Se acaba la hora y chau', 'Acompañamiento entre clases incluido'],
  ['Si no entendiste, repetimos igual', 'Otro ángulo, otro ejemplo, hasta que queda'],
];

export const methodSteps = [
  {
    number: 1,
    navLabel: 'Escucho',
    icon: '🎯',
    title: 'Primero',
    emphasis: 'te escucho.',
    quote: '"No arranco hasta saber quién tengo enfrente y de dónde viene."',
    description:
      'Antes de explicar una sola cosa, necesito entender tu situación real. Dónde trabaste, cómo estudiás, qué te genera presión, qué contexto tenés. Ese primer encuentro no es un trámite: es la base de todo.',
    points: [
      'Primera clase de 45 min completamente gratis',
      'Entendemos juntos de dónde partimos',
      'Identificación de puntos críticos específicos',
      'Plan de trabajo adaptado a tu realidad',
    ],
  },
  {
    number: 2,
    navLabel: 'Explico',
    icon: '🗣️',
    title: 'Lo explico',
    emphasis: 'hasta que queda.',
    quote: '"Si no quedó claro, es mi problema, no el tuyo."',
    description:
      'No sigo adelante hasta que el tema esté claro. Si la primera explicación no funcionó, busco otro ángulo, otra analogía, otro ejemplo. Sin tecnicismos innecesarios, sin apuro, sin juzgar.',
    points: [
      'Explicaciones sin tecnicismos inútiles',
      'Múltiples ángulos hasta que haga clic',
      'Ejemplos concretos y cotidianos',
      'Sin presión ni juicio ante el error',
    ],
  },
  {
    number: 3,
    navLabel: 'Practicamos',
    icon: '🧭',
    title: 'Hacemos',
    emphasis: 'juntos.',
    quote: '"El error no se castiga: se aprovecha para aprender."',
    description:
      'No soy el tipo que explica y se cruza de brazos. Ejercitamos, construimos apuntes, nos equivocamos y lo corregimos juntos. La práctica activa es donde el conocimiento realmente se consolida.',
    points: [
      'Ejercitación activa en cada clase',
      'Construcción conjunta de apuntes',
      'El error como herramienta de aprendizaje',
      'Preparación específica para exámenes',
    ],
  },
  {
    number: 4,
    navLabel: 'Acompaño',
    icon: '📲',
    title: 'No desaparezco',
    emphasis: 'entre clases.',
    quote: '"El aprendizaje no termina cuando termina la hora."',
    description:
      'Si entre semana te surge una duda, me mandás un mensaje. Sin costo adicional. El seguimiento real es lo que diferencia una clase de un acompañamiento verdadero.',
    points: [
      'Consultas por WhatsApp entre clases',
      'Seguimiento del progreso semana a semana',
      'Ajuste del plan según cómo va el proceso',
      'Disponibilidad real, no solo en horario',
    ],
    finalCta: true,
  },
];

export const methodStats = [
  { value: '7+', target: '7', suffix: '+', labelLines: ['años aplicando', 'el método'] },
  { value: '6', target: '6', suffix: '', labelLines: ['niveles', 'educativos'] },
  { value: '100%', labelLines: ['personalizado', 'para cada alumno'] },
  { value: '4', target: '4', suffix: '', labelLines: ['materias', 'principales'] },
];

export const aboutStats = [
  { value: '+7', tone: 'green', labelLines: ['años de', 'experiencia'] },
  { value: '✓', labelLines: ['Docente', 'habilitado'] },
  { value: '4', tone: 'green', labelLines: ['materias', 'principales'] },
];

export const aboutTabs = [
  { id: 'formacion', icon: '🎓', label: 'Formación' },
  { id: 'experiencia', icon: '🛤️', label: 'Trayectoria' },
  { id: 'valores', icon: '❤️', label: 'Valores' },
  { id: 'habilidades', icon: '⚡', label: 'Habilidades' },
];

export const formationItems = [
  {
    icon: '🎓',
    title: 'Licenciatura en Ciencias de la Educación',
    description:
      'Estudiante avanzado — próximo Profesor Universitario en Ciencias de la Educación. Una materia de graduarme.',
  },
  {
    icon: '✅',
    title: 'Docente Habilitado',
    description: 'Tramo de formación pedagógica y didáctica oficial completado. Habilitación vigente.',
  },
  {
    icon: '🧪',
    title: 'Técnico Químico — Nivel Medio',
    description: 'Base técnica real que aplico directamente en la enseñanza de Química y Física. No solo teoría.',
  },
  {
    icon: '💻',
    title: 'Programación, IA y Desarrollo Web',
    description: 'Conocimientos aplicados a crear clases modernas, material didáctico digital y herramientas de aprendizaje.',
  },
];

export const timelineItems = [
  {
    year: '2017 — inicio',
    event: 'Primeras clases particulares',
    detail: 'Empecé ayudando a compañeros del secundario. Fue ahí donde descubrí que enseñar era lo mío.',
  },
  {
    year: '2019',
    event: 'Técnico Químico',
    detail: 'Me recibí de Técnico Químico nivel medio, sumando base técnica real a mi enseñanza de Química y Física.',
  },
  {
    year: '2020 — 2021',
    event: 'Clases virtuales durante la pandemia',
    detail: 'Me adapté al formato virtual y lo convertí en una herramienta permanente. Llegué a alumnos de todo el país.',
  },
  {
    year: '2022 — presente',
    event: 'Licenciatura en Ciencias de la Educación',
    detail: 'Estudiante avanzado. Todo lo que aprendo lo aplico directamente en mis clases.',
  },
  {
    year: '2026',
    event: 'Tu Profesor Particular — emprendimiento',
    detail: 'Después de 7 años de boca en boca, llegó el momento de crecer y llegar a más personas.',
  },
];

export const valueCards = [
  {
    icon: '🎯',
    name: 'Claridad',
    description: 'Si no quedó claro, no seguimos. Repito, adapto, busco el ángulo que funcione.',
  },
  {
    icon: '❤️',
    name: 'Empatía',
    description: 'Entiendo de dónde viene cada alumno. Sin juicio, con paciencia real.',
  },
  {
    icon: '⚡',
    name: 'Eficacia',
    description: 'Sin clases innecesarias. Vamos al grano, con el mejor camino posible.',
  },
  {
    icon: '🤝',
    name: 'Compromiso',
    description: 'No desaparezco entre clases. El acompañamiento es genuino y continuo.',
  },
  {
    icon: '🧠',
    name: 'Aprendizaje real',
    description: 'No busco que aprueben: busco que entiendan de verdad y para siempre.',
  },
  {
    icon: '🏆',
    name: 'Excelencia',
    description: 'Cada clase es una oportunidad de dar lo mejor. Sin mediocridad.',
  },
];

export const skillItems = [
  ['Matemática', '95%'],
  ['Química', '95%'],
  ['Física', '88%'],
  ['Inglés', '82%'],
  ['Pedagogía y Didáctica', '97%'],
  ['Tecnología educativa e IA', '85%'],
];

export const trustItems = [
  {
    icon: '🎓',
    mainPrefix: 'Docente ',
    greenText: 'Habilitado',
    mainSuffix: '',
    subLines: ['Tramo pedagógico y', 'didáctico oficial'],
  },
  {
    icon: '🧪',
    mainPrefix: 'Técnico ',
    greenText: 'Químico',
    mainSuffix: '',
    subLines: ['Nivel medio — base', 'técnica real'],
  },
  {
    icon: '📖',
    mainPrefix: 'Lic. Cs. de la ',
    greenText: 'Educación',
    mainSuffix: '',
    subLines: ['Estudiante avanzado —', 'próx. Prof. Universitario'],
  },
  {
    icon: '💻',
    mainPrefix: '',
    greenText: 'IA',
    mainSuffix: ' y Programación',
    subLines: ['Desarrollo web, software', 'y herramientas digitales'],
  },
  {
    icon: '⏱️',
    mainPrefix: '',
    greenText: '+7',
    mainSuffix: ' Años',
    subLines: ['De experiencia en', 'clases particulares'],
  },
  {
    icon: '🎁',
    mainPrefix: '',
    greenText: '1ª Clase',
    mainSuffix: ' Gratis',
    subLines: ['45 minutos sin costo', 'para conocernos'],
  },
];

export const faqs = [
  {
    question: '¿Cómo es la primera clase? ¿Tiene costo?',
    answer:
      'La primera clase dura 45 minutos y es completamente gratis. Nos conocemos, me contás tu situación, vemos de dónde partimos y armamos el camino juntos. Sin compromiso, sin presión. Es como una consulta inicial, pero sin costo.',
  },
  {
    question: '¿Cuánto cuestan las clases?',
    answer:
      'Los precios varían según modalidad individual o grupal, frecuencia y si es presencial o virtual. Escribime por WhatsApp y te digo los valores actuales. Siempre busco que sea accesible.',
  },
  {
    question: '¿Doy clases a adultos que retoman estudios?',
    answer:
      'Sí, y con mucho gusto. El CENS y adultos que retoman el secundario son parte importante de mi trabajo. La paciencia y la ausencia de juicio son fundamentales en esos casos.',
  },
  {
    question: '¿Puedo consultar por WhatsApp entre clases?',
    answer:
      'Sí. Si te surge una duda puntual entre clase y clase, mandame un mensaje. El acompañamiento no termina cuando se acaba la hora. Eso no tiene costo adicional.',
  },
  {
    question: '¿Trabajás con materias que no son exactas?',
    answer:
      'Preguntame qué materia es. Si la manejo bien, la doy directo. Si no, te lo digo con honestidad y me preparo para dártela como corresponde. No improviso.',
  },
];

export const footerLinks = [
  { label: 'Materias', href: '#materias' },
  { label: 'Método', href: '#metodo' },
  { label: 'Sobre mí', href: '#sobre' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacto', href: `https://wa.me/${contact.whatsappNumber}`, external: true },
];

export function whatsappUrl(message = contact.firstClassMessage) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const subjectsIntro = {
  label: '¿Qué enseño?',
  titleLine1: 'Las materias de siempre —',
  titleLine2: 'explicadas diferente.',
  descriptionBefore: 'Si llegás frustrado con algo, lo primero que hago es entender ',
  descriptionEmphasis: 'por qué',
  descriptionAfter:
    ' no te está entrando. No te explico de nuevo lo mismo. Busco el ángulo que funciona para vos.',
};

export const subjects = [
  {
    icon: '📐',
    title: 'Matemática',
    description: 'Álgebra, análisis, aritmética, geometría. Desde primaria hasta universitario.',
  },
  {
    icon: '⚛️',
    title: 'Física',
    description: 'Mecánica, electromagnetismo, termodinámica. Teoría + práctica concreta.',
  },
  {
    icon: '🧪',
    title: 'Química',
    description: 'Orgánica, inorgánica, estequiometría. Base técnica real como Técnico Químico.',
  },
  {
    icon: '🇬🇧',
    title: 'Inglés',
    description: 'Gramática, lectura, escritura, oral. Para todos los niveles.',
  },
  {
    icon: '📚',
    title: '¿Otra materia?',
    description:
      'Preguntame igual. Si no la tengo dominada al 100%, te lo digo con honestidad y la aprendo para dártela bien.',
    dark: true,
  },
];

export const levels = {
  label: '¿Para quién?',
  titleLine1: 'No importa en qué nivel estés.',
  titleLine2: 'Arrancamos desde ahí.',
  description:
    'Trabajé con chicos de 10 años y con adultos de 50 que retomaron el secundario. La edad no importa. Lo que importa es que tengas ganas.',
  chips: ['Primario', 'Secundario', 'Sec. Técnico', 'CENS', 'Terciario', 'Universitario'],
  visualTitle: 'Más allá de la materia',
  visualSubtitle: 'Todo lo que puedo ayudarte a resolver',
  supportItems: [
    'Preparación de exámenes',
    'Elaboración de apuntes propios',
    'Trabajos prácticos',
    'Consultas focalizadas',
    'Apoyo escolar integral',
    'Armado de CVs formato ATS',
  ],
};

export const gallery = {
  label: 'En persona',
  titleLine1: 'Atrás de la pantalla',
  titleLine2: 'hay una persona real.',
  images: [
    { className: 'mosaic-cell-1 mosaic-caption', src: images.hero, alt: 'Agustín' },
    { className: 'mosaic-cell-2', src: images.heroSecondary, alt: 'Agustín' },
    { className: 'mosaic-cell-3', src: images.presencial, alt: 'Agustín' },
    { className: 'mosaic-cell-4', src: images.group, alt: 'Agustín' },
    { className: 'mosaic-cell-5', src: images.principal, alt: 'Agustín' },
  ],
};

export const situationSelector = {
  label: 'Mensaje personalizado',
  titleLine1: 'Contame tu situación',
  titleLine2: 'y te hablo directo.',
  description:
    'Seleccioná tu nivel y la materia que necesitás. Te muestro cómo trabajaríamos juntos.',
  levelQuestion: '¿En qué nivel estás?',
  subjectQuestion: '¿Qué materia?',
  levels: [
    { label: 'Primario', value: 'primario' },
    { label: 'Secundario', value: 'secundario' },
    { label: 'Sec. Técnico', value: 'tecnico' },
    { label: 'CENS / Adultos', value: 'cens' },
    { label: 'Universitario', value: 'universitario' },
  ],
  subjects: [
    { label: 'Matemática', value: 'matematica' },
    { label: 'Física', value: 'fisica' },
    { label: 'Química', value: 'quimica' },
    { label: 'Inglés', value: 'ingles' },
    { label: 'Otra materia', value: 'otras' },
  ],
};


export const selectorMessages = {'primario-matematica':{msg:'Los números no tienen que dar miedo. Trabajo con chicos desde primero hasta séptimo, siempre al ritmo del alumno. Empezamos desde donde estés y construimos de a poco, con paciencia y mucha práctica.',wa:'Hola Agustín, tengo un alumno de primaria que necesita ayuda con Matemática.'},'primario-otras':{msg:'Para primaria tengo metodología adaptada a cada edad. Contame qué materia es y te digo cómo la trabajamos.',wa:'Hola Agustín, necesito clases particulares para nivel primario.'},'secundario-matematica':{msg:'Álgebra, geometría, análisis, funciones — lo que sea. El secundario es donde más trabajo y donde más resultados veo. Muchos llegaron creyendo que "no les daba la cabeza" y salieron aprobando con nota.',wa:'Hola Agustín, necesito clases de Matemática para el secundario.'},'secundario-fisica':{msg:'Física en el secundario suena terrible pero no lo es. Con ejemplos concretos y ejercitación paso a paso, se ordena. Soy Técnico Químico y la trabajé mucho, te garantizo claridad.',wa:'Hola Agustín, necesito clases de Física para el secundario.'},'secundario-quimica':{msg:'Química es mi punto fuerte — soy Técnico Químico de base. La trabajo de forma práctica y visual, sin que quede solo como fórmulas. Desde estequiometría hasta orgánica.',wa:'Hola Agustín, necesito clases de Química para el secundario.'},'secundario-ingles':{msg:'Inglés del secundario: gramática, lectura, escritura, oral. Lo trabajamos de forma progresiva y sin que se sienta como tarea.',wa:'Hola Agustín, necesito clases de Inglés para el secundario.'},'secundario-otras':{msg:'Preguntame qué materia es. Si la conozco bien, la doy directo. Si no, te lo digo con honestidad y me preparo para dártela como corresponde.',wa:'Hola Agustín, necesito clases particulares para el secundario.'},'tecnico-matematica':{msg:'El técnico tiene matemática más exigente — análisis, álgebra lineal, cálculo. Tuve muchos alumnos del técnico y sé exactamente qué puntos generan más conflicto.',wa:'Hola Agustín, necesito clases de Matemática para el secundario técnico.'},'tecnico-fisica':{msg:'Física en el técnico es otro nivel. Trabajo bien esa articulación entre teoría y aplicación práctica que tanto se necesita ahí.',wa:'Hola Agustín, necesito clases de Física para el secundario técnico.'},'tecnico-quimica':{msg:'Química técnica es mi casa. Soy Técnico Químico — no solo la enseño, la viví. Sé qué les cuesta más a los alumnos del técnico y cómo explicarlo bien.',wa:'Hola Agustín, necesito clases de Química para el secundario técnico.'},'tecnico-ingles':{msg:'Inglés técnico también lo trabajo. Si hay lectura de manuales o vocabulario específico, lo incorporamos.',wa:'Hola Agustín, necesito clases de Inglés para el técnico.'},'tecnico-otras':{msg:'Del técnico puedo trabajar muchas materias. Contame cuál necesitás y analizamos.',wa:'Hola Agustín, necesito ayuda con una materia del secundario técnico.'},'cens-matematica':{msg:'Adultos que retoman el secundario: los respeto y los admiro. Con el CENS trabajo con mucha paciencia, sin juzgar los años que pasaron. Arrancamos de cero si hace falta, tranquilo.',wa:'Hola Agustín, necesito clases de Matemática para el CENS.'},'cens-otras':{msg:'Para el CENS trabajo con mucha flexibilidad horaria y ritmo adaptado. Contame qué materia y cómo venís.',wa:'Hola Agustín, necesito ayuda con una materia del CENS.'},'universitario-matematica':{msg:'Álgebra lineal, análisis matemático, probabilidades, estadística — trabajé con alumnos de Ingeniería, Economía, Exactas. Sé dónde están los puntos críticos y cómo superarlos.',wa:'Hola Agustín, necesito clases de Matemática a nivel universitario.'},'universitario-fisica':{msg:'Física universitaria es exigente pero tiene lógica. Trabajo bien la transición del razonamiento secundario al universitario, que es donde más se pierde la gente.',wa:'Hola Agustín, necesito clases de Física a nivel universitario.'},'universitario-quimica':{msg:'Química universitaria — orgánica, inorgánica, analítica. La base técnica y los años de docencia me dan herramientas reales para explicarla bien.',wa:'Hola Agustín, necesito clases de Química a nivel universitario.'},'universitario-ingles':{msg:'Inglés universitario: lectura de papers, exámenes de idioma, parciales. Lo trabajamos con foco en lo que necesitás específicamente.',wa:'Hola Agustín, necesito clases de Inglés a nivel universitario.'},'universitario-otras':{msg:'Para universitario también trabajo otras materias según el caso. Contame de qué carrera sos y qué materia es.',wa:'Hola Agustín, necesito ayuda con una materia universitaria.'}};


export const quickActions = [
  { key: 'whatsapp', label: 'WhatsApp', href: whatsappUrl(), type: 'external' },
  { key: 'contacto', label: 'Contacto', href: '#contacto', type: 'anchor' },
  { key: 'top', label: 'Subir', href: '#hero', type: 'anchor' },
];

export const contactClosing = {
  label: 'Hablemos',
  title: 'La primera clase de 45 min es completamente gratis.',
  subtitle: 'Conocernos, ver tu punto de partida y mostrarte con claridad cómo te puedo ayudar.',
  support: 'Sin compromiso, sin presión, con una propuesta clara para que sientas si este acompañamiento es para vos.',
};

export const contactFormConfig = {
  kicker: 'Consulta personalizada',
  title: 'Dejame tu consulta y te respondo con una propuesta clara.',
  description:
    'Completá estos datos y te contesto con foco en tu situación real: nivel, materia, tipo de ayuda y próximos pasos.',
  submitLabel: 'Quiero que me contacten',
  levelOptions: [...levels.chips],
  subjectOptions: subjects.map((subject) => subject.title.trim()),
  inquiryOptions: [
    'Preparación de examen',
    'Apoyo escolar',
    'Consulta puntual',
    'Tutoría / acompañamiento',
    'Clase grupal',
  ],
};

export const contactFormMessages = {
  name_required: 'Decime tu nombre para poder responderte bien.',
  email_invalid: 'Ese email no parece válido.',
  email_or_whatsapp_required: 'Necesito al menos un email o un WhatsApp para contactarte.',
  level_required: 'Seleccioná tu nivel educativo.',
  subject_required: 'Seleccioná la materia que necesitás.',
  inquiry_type_required: 'Seleccioná el tipo de consulta.',
  message_required: 'Contame brevemente qué necesitás.',
  validation_error: 'Revisá los datos marcados y volvé a intentar.',
  network_error: 'No pude conectar con el backend. Si querés, escribime directo por WhatsApp.',
  missing_api_url: 'Falta configurar la conexión con el backend en este entorno.',
  invalid_json_response: 'La respuesta del backend llegó malformada. Probemos de nuevo.',
  contact_request_failed: 'No pude enviar la consulta en este momento. Intentá nuevamente.',
  submit_error: 'Hubo un problema al enviar tu consulta. Probá de nuevo o escribime por WhatsApp.',
};
