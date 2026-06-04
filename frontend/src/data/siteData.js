export const contact = {
  whatsappNumber: '5491164236675',
  whatsappDisplay: '11-6423-6675',
  email: 'agustinsosa.profe@gmail.com',
  instagram: 'https://www.instagram.com/tuprofesor.ar/',
  instagramHandle: '@tuprofesor.ar',
  location: 'Temperley, Buenos Aires',
  firstClassMessage:
    'Hola AgustÃ­n, quiero informaciÃ³n sobre las clases y la primera clase gratis',
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
  owner: 'AgustÃ­n ElÃ­as Sosa',
  copyright: 'Â© 2026 AgustÃ­n ElÃ­as Sosa Â· Tu Profesor Particular Â· Temperley, Bs. As.',
};

export const navItems = [
  { section: 'materias', href: '#materias', icon: 'ðŸ“š', label: 'Materias' },
  { section: 'metodo', href: '#metodo', icon: 'ðŸ§­', label: 'MÃ©todo' },
  { section: 'sobre', href: '#sobre', icon: 'ðŸ‘¤', label: 'Sobre mÃ­' },
  { section: 'carta', href: '#carta', icon: 'âœ‰ï¸', label: 'Mi historia' },
  { section: 'faq', href: '#faq', icon: 'â“', label: 'FAQ' },
];

export const drawerItems = [
  { icon: 'ðŸ“š', label: 'Materias' },
  { icon: 'ðŸŽ', label: 'Â¿CuÃ¡l es tu caso?' },
  { icon: 'ðŸ§­', label: 'Mi mÃ©todo' },
  { icon: 'ðŸ‘¤', label: 'Sobre mÃ­' },
  { icon: 'âœ‰ï¸', label: 'Mi historia' },
  { icon: 'â­', label: 'Testimonios' },
  { icon: 'â“', label: 'Preguntas frecuentes' },
];

export const whatsappMessages = {
  firstClass: contact.firstClassMessage,
  readPage: 'Hola AgustÃ­n, leÃ­ tu pÃ¡gina y quiero la clase gratis',
  method: 'Hola AgustÃ­n, quiero empezar con el mÃ©todo',
  individualPresencial: 'Hola AgustÃ­n, me interesa una clase individual presencial',
  individualVirtual: 'Hola AgustÃ­n, me interesa una clase individual virtual',
  groupPresencial: 'Hola AgustÃ­n, me interesa una clase grupal presencial',
  groupVirtual: 'Hola AgustÃ­n, me interesa una clase grupal virtual',
  testimonial: 'Hola AgustÃ­n, quiero dejarte mi testimonio',
};

export const modalityAxes = [
  {
    label: 'Â¿CÃ³mo querÃ©s estudiar?',
    axis: 'modo',
    options: [
      { value: 'individual', label: 'Individual', icon: 'ðŸ‘¤', active: true },
      { value: 'grupal', label: 'Grupal', icon: 'ðŸ‘¤' },
    ],
  },
  {
    label: 'Â¿DÃ³nde?',
    axis: 'lugar',
    options: [
      { value: 'presencial', label: 'Presencial', icon: 'ðŸ“š', active: true },
      { value: 'virtual', label: 'Virtual', icon: 'ðŸ’¬' },
    ],
  },
];

export const modalityPanels = [
  {
    id: 'panel-individual-presencial',
    active: true,
    image: images.presencial,
    imageAlt: 'Presencial',
    tag: 'La mÃ¡s personalizada',
    title: 'Cara a cara.',
    emphasis: 'Sin distracciones.',
    description:
      'Todo el tiempo de la clase es tuyo. Trabajamos en Temperley, en el ritmo que necesitÃ¡s, con material fÃ­sico y un vÃ­nculo real de aprendizaje.',
    features: [
      'AtenciÃ³n 100% personalizada',
      'Temperley y alrededores, GBA Sur',
      'Material fÃ­sico incluido',
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
      'No importa dÃ³nde estÃ©s en Argentina. TenÃ©s toda mi atenciÃ³n, misma calidad, misma dedicaciÃ³n. Con plataformas interactivas y posibilidad de grabaciÃ³n.',
    features: ['Todo el paÃ­s y exterior', 'Plataformas digitales interactivas', 'Grabaciones disponibles', 'Flexible en horarios'],
    messageKey: 'individualVirtual',
  },
  {
    id: 'panel-grupal-presencial',
    image: images.group,
    imageAlt: 'Grupal presencial',
    tag: 'Mejor precio por persona',
    title: 'EstudiÃ¡ con',
    emphasis: 'tus compaÃ±eros.',
    description:
      'La dinÃ¡mica grupal potencia el aprendizaje. Se comparte el costo y se multiplica la energÃ­a. Ideal para grupos de la misma materia o del mismo aÃ±o.',
    features: ['2 a 4 alumnos por grupo', 'Precio reducido por persona', 'Temperley y alrededores', 'DinÃ¡mica colaborativa'],
    messageKey: 'groupPresencial',
  },
  {
    id: 'panel-grupal-virtual',
    image: images.heroSecondary,
    imageAlt: 'Grupal virtual',
    tag: 'El mÃ¡s accesible',
    title: 'Grupo online.',
    emphasis: 'Sin importar distancias.',
    description:
      'Perfecto para grupos de estudio universitarios o amigos de distintos barrios. Se divide el costo, se aprovecha la clase y cada uno desde su casa.',
    features: ['El precio mÃ¡s accesible', 'Sin limitaciones geogrÃ¡ficas', 'Plataformas colaborativas', 'Ideal para parciales grupales'],
    messageKey: 'groupVirtual',
  },
];

export const methodCompareRows = [
  ['El profe habla, el alumno escucha', 'Construimos juntos desde el primer dÃ­a'],
  ['Mismo ritmo para todos', 'Tu ritmo, tu punto de partida, tu plan'],
  ['Se acaba la hora y chau', 'AcompaÃ±amiento entre clases incluido'],
  ['Si no entendiste, repetimos igual', 'Otro Ã¡ngulo, otro ejemplo, hasta que queda'],
];

export const methodSteps = [
  {
    number: 1,
    navLabel: 'Escucho',
    icon: 'ðŸŽ¯',
    title: 'Primero',
    emphasis: 'te escucho.',
    quote: '"No arranco hasta saber quiÃ©n tengo enfrente y de dÃ³nde viene."',
    description:
      'Antes de explicar una sola cosa, necesito entender tu situaciÃ³n real. DÃ³nde trabaste, cÃ³mo estudiÃ¡s, quÃ© te genera presiÃ³n, quÃ© contexto tenÃ©s. Ese primer encuentro no es un trÃ¡mite â€” es la base de todo.',
    points: [
      'Primera clase de 45 min completamente gratis',
      'Entendemos juntos de dÃ³nde partimos',
      'IdentificaciÃ³n de puntos crÃ­ticos especÃ­ficos',
      'Plan de trabajo adaptado a tu realidad',
    ],
  },
  {
    number: 2,
    navLabel: 'Explico',
    icon: 'ðŸ’¬',
    title: 'Lo explico',
    emphasis: 'hasta que queda.',
    quote: '"Si no quedÃ³ claro, es mi problema, no el tuyo."',
    description:
      'No sigo adelante hasta que el tema estÃ© claro. Si la primera explicaciÃ³n no funcionÃ³, busco otro Ã¡ngulo, otra analogÃ­a, otro ejemplo. Sin tecnicismos innecesarios, sin apuro, sin juzgar.',
    points: [
      'Explicaciones sin tecnicismos inÃºtiles',
      'MÃºltiples Ã¡ngulos hasta que haga clic',
      'Ejemplos concretos y cotidianos',
      'Sin presiÃ³n ni juicio ante el error',
    ],
  },
  {
    number: 3,
    navLabel: 'Practicamos',
    icon: 'ðŸ§­',
    title: 'Hacemos',
    emphasis: 'juntos.',
    quote: '"El error no se castiga â€” se aprovecha para aprender."',
    description:
      'No soy el tipo que explica y se cruza de brazos. Ejercitamos, construimos apuntes, nos equivocamos y lo corregimos juntos. La prÃ¡ctica activa es donde el conocimiento realmente se consolida.',
    points: [
      'EjercitaciÃ³n activa en cada clase',
      'ConstrucciÃ³n conjunta de apuntes',
      'El error como herramienta de aprendizaje',
      'PreparaciÃ³n especÃ­fica para exÃ¡menes',
    ],
  },
  {
    number: 4,
    navLabel: 'AcompaÃ±o',
    icon: 'ðŸš€',
    title: 'No desaparezco',
    emphasis: 'entre clases.',
    quote: '"El aprendizaje no termina cuando termina la hora."',
    description:
      'Si entre semana te surge una duda, me mandÃ¡s un mensaje. Sin costo adicional. El seguimiento real es lo que diferencia una clase de un acompaÃ±amiento verdadero.',
    points: [
      'Consultas por WhatsApp entre clases',
      'Seguimiento del progreso semana a semana',
      'Ajuste del plan segÃºn cÃ³mo va el proceso',
      'Disponibilidad real, no solo en horario',
    ],
    finalCta: true,
  },
];

export const methodStats = [
  { value: '7+', target: '7', suffix: '+', labelLines: ['aÃ±os aplicando', 'el mÃ©todo'] },
  { value: '6', target: '6', suffix: '', labelLines: ['niveles', 'educativos'] },
  { value: '100%', labelLines: ['personalizado', 'para cada alumno'] },
  { value: '4', target: '4', suffix: '', labelLines: ['materias', 'principales'] },
];

export const aboutStats = [
  { value: '+7', tone: 'green', labelLines: ['aÃ±os de', 'experiencia'] },
  { value: 'âœ“', labelLines: ['Docente', 'habilitado'] },
  { value: '4', tone: 'green', labelLines: ['materias', 'principales'] },
];

export const aboutTabs = [
  { id: 'formacion', icon: 'ðŸŽ“', label: 'FormaciÃ³n' },
  { id: 'experiencia', icon: 'ðŸ§­', label: 'Trayectoria' },
  { id: 'valores', icon: 'â¤ï¸', label: 'Valores' },
  { id: 'habilidades', icon: 'âš¡', label: 'Habilidades' },
];

export const formationItems = [
  {
    icon: 'ðŸŽ“',
    title: 'Licenciatura en Ciencias de la EducaciÃ³n',
    description:
      'Estudiante avanzado â€” prÃ³ximo Profesor Universitario en Ciencias de la EducaciÃ³n. Una materia de graduarme.',
  },
  {
    icon: 'ðŸ§ª',
    title: 'Docente Habilitado',
    description: 'Tramo de formaciÃ³n pedagÃ³gica y didÃ¡ctica oficial completado. HabilitaciÃ³n vigente.',
  },
  {
    icon: 'ðŸ§­',
    title: 'TÃ©cnico QuÃ­mico â€” Nivel Medio',
    description: 'Base tÃ©cnica real que aplico directamente en la enseÃ±anza de QuÃ­mica y FÃ­sica. No solo teorÃ­a.',
  },
  {
    icon: 'ðŸ’¬',
    title: 'ProgramaciÃ³n, IA y Desarrollo Web',
    description: 'Conocimientos aplicados a crear clases modernas, material didÃ¡ctico digital y herramientas de aprendizaje.',
  },
];

export const timelineItems = [
  {
    year: '2017 â€” inicio',
    event: 'Primeras clases particulares',
    detail: 'EmpecÃ© ayudando a compaÃ±eros del secundario. Fue ahÃ­ donde descubrÃ­ que enseÃ±ar era lo mÃ­o.',
  },
  {
    year: '2019',
    event: 'TÃ©cnico QuÃ­mico',
    detail: 'Me recibÃ­ de TÃ©cnico QuÃ­mico nivel medio, sumando base tÃ©cnica real a mi enseÃ±anza de QuÃ­mica y FÃ­sica.',
  },
  {
    year: '2020 â€” 2021',
    event: 'Clases virtuales durante la pandemia',
    detail: 'Me adaptÃ© al formato virtual y lo convertÃ­ en una herramienta permanente. LleguÃ© a alumnos de todo el paÃ­s.',
  },
  {
    year: '2022 â€” presente',
    event: 'Licenciatura en Ciencias de la EducaciÃ³n',
    detail: 'Estudiante avanzado. Todo lo que aprendo lo aplico directamente en mis clases.',
  },
  {
    year: '2026',
    event: 'Tu Profesor Particular â€” emprendimiento',
    detail: 'DespuÃ©s de 7 aÃ±os de boca en boca, llegÃ³ el momento de crecer y llegar a mÃ¡s personas.',
  },
];

export const valueCards = [
  {
    icon: 'ðŸŽ',
    name: 'Claridad',
    description: 'Si no quedÃ³ claro, no seguimos. Repito, adapto, busco el Ã¡ngulo que funcione.',
  },
  {
    icon: 'â¤ï¸',
    name: 'EmpatÃ­a',
    description: 'Entiendo de dÃ³nde viene cada alumno. Sin juicio, con paciencia real.',
  },
  {
    icon: 'âš¡',
    name: 'Eficacia',
    description: 'Sin clases innecesarias. Vamos al grano, con el mejor camino posible.',
  },
  {
    icon: 'ðŸ§­',
    name: 'Compromiso',
    description: 'No desaparezco entre clases. El acompaÃ±amiento es genuino y continuo.',
  },
  {
    icon: 'ðŸ¤',
    name: 'Aprendizaje real',
    description: 'No busco que aprueben â€” busco que entiendan de verdad y para siempre.',
  },
  {
    icon: 'âœ¨',
    name: 'Excelencia',
    description: 'Cada clase es una oportunidad de dar lo mejor. Sin mediocridad.',
  },
];

export const skillItems = [
  ['MatemÃ¡tica', '95%'],
  ['QuÃ­mica', '95%'],
  ['FÃ­sica', '88%'],
  ['InglÃ©s', '82%'],
  ['PedagogÃ­a y DidÃ¡ctica', '97%'],
  ['TecnologÃ­a educativa e IA', '85%'],
];

export const trustItems = [
  {
    icon: 'ðŸŽ“',
    mainPrefix: 'Docente ',
    greenText: 'Habilitado',
    mainSuffix: '',
    subLines: ['Tramo pedagÃ³gico y', 'didÃ¡ctico oficial'],
  },
  {
    icon: 'ðŸ§ª',
    mainPrefix: 'TÃ©cnico ',
    greenText: 'QuÃ­mico',
    mainSuffix: '',
    subLines: ['Nivel medio â€” base', 'tÃ©cnica real'],
  },
  {
    icon: 'ðŸ“–',
    mainPrefix: 'Lic. Cs. de la ',
    greenText: 'EducaciÃ³n',
    mainSuffix: '',
    subLines: ['Estudiante avanzado â€”', 'prÃ³x. Prof. Universitario'],
  },
  {
    icon: 'ðŸ’»',
    mainPrefix: '',
    greenText: 'IA',
    mainSuffix: ' y ProgramaciÃ³n',
    subLines: ['Desarrollo web, software', 'y herramientas digitales'],
  },
  {
    icon: 'â±ï¸',
    mainPrefix: '',
    greenText: '+7',
    mainSuffix: ' AÃ±os',
    subLines: ['De experiencia en', 'clases particulares'],
  },
  {
    icon: 'ðŸŽ',
    mainPrefix: '',
    greenText: '1Âª Clase',
    mainSuffix: ' Gratis',
    subLines: ['45 minutos sin costo', 'para conocernos'],
  },
];

export const faqs = [
  {
    question: 'Â¿CÃ³mo es la primera clase? Â¿Tiene costo?',
    answer:
      'La primera clase dura 45 minutos y es completamente gratis. Nos conocemos, me contÃ¡s tu situaciÃ³n, vemos de dÃ³nde partimos y armamos el camino juntos. Sin compromiso, sin presiÃ³n. Es como una consulta inicial â€” pero sin costo.',
  },
  {
    question: 'Â¿CuÃ¡nto cuestan las clases?',
    answer:
      'Los precios varÃ­an segÃºn modalidad individual o grupal, frecuencia y si es presencial o virtual. Escribime por WhatsApp y te digo los valores actuales. Siempre busco que sea accesible.',
  },
  {
    question: 'Â¿Doy clases a adultos que retoman estudios?',
    answer:
      'SÃ­, y con mucho gusto. El CENS y adultos que retoman el secundario son parte importante de mi trabajo. La paciencia y la ausencia de juicio son fundamentales en esos casos.',
  },
  {
    question: 'Â¿Puedo consultar por WhatsApp entre clases?',
    answer:
      'SÃ­. Si te surge una duda puntual entre clase y clase, mandame un mensaje. El acompaÃ±amiento no termina cuando se acaba la hora. Eso no tiene costo adicional.',
  },
  {
    question: 'Â¿TrabajÃ¡s con materias que no son exactas?',
    answer:
      'Preguntame quÃ© materia es. Si la manejo bien, la doy directo. Si no, te lo digo con honestidad â€” y me preparo para dÃ¡rtela como corresponde. No improviso.',
  },
];

export const footerLinks = [
  { label: 'Materias', href: '#materias' },
  { label: 'MÃ©todo', href: '#metodo' },
  { label: 'Sobre mÃ­', href: '#sobre' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacto', href: `https://wa.me/${contact.whatsappNumber}`, external: true },
];

export function whatsappUrl(message = contact.firstClassMessage) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const subjectsIntro = {
  label: 'Â¿QuÃ© enseÃ±o?',
  titleLine1: 'Las materias de siempre â€”',
  titleLine2: 'explicadas diferente.',
  descriptionBefore: 'Si llegÃ¡s frustrado con algo, lo primero que hago es entender ',
  descriptionEmphasis: 'por quÃ©',
  descriptionAfter:
    ' no te estÃ¡ entrando. No te explico de nuevo lo mismo. Busco el Ã¡ngulo que funciona para vos.',
};

export const subjects = [
  {
    icon: 'ðŸ“',
    title: 'MatemÃ¡tica',
    description: 'Ãlgebra, anÃ¡lisis, aritmÃ©tica, geometrÃ­a. Desde primaria hasta universitario.',
  },
  {
    icon: 'âš¡',
    title: 'FÃ­sica',
    description: 'MecÃ¡nica, electromagnetismo, termodinÃ¡mica. TeorÃ­a + prÃ¡ctica concreta.',
  },
  {
    icon: 'ðŸ§ª',
    title: 'QuÃ­mica',
    description: 'OrgÃ¡nica, inorgÃ¡nica, estequiometrÃ­a. Base tÃ©cnica real como TÃ©cnico QuÃ­mico.',
  },
  {
    icon: 'ðŸŒ',
    title: 'InglÃ©s',
    description: 'GramÃ¡tica, lectura, escritura, oral. Para todos los niveles.',
  },
  {
    icon: 'ðŸ“š',
    title: 'Â¿Otra materia?',
    description:
      'Preguntame igual. Si no la tengo dominada al 100%, te lo digo con honestidad â€” y la aprendo para dÃ¡rtela bien.',
    dark: true,
  },
];

export const levels = {
  label: 'Â¿Para quiÃ©n?',
  titleLine1: 'No importa en quÃ© nivel estÃ©s.',
  titleLine2: 'Arrancamos desde ahÃ­.',
  description:
    'TrabajÃ© con chicos de 10 aÃ±os y con adultos de 50 que retomaron el secundario. La edad no importa. Lo que importa es que tengas ganas.',
  chips: ['Primario', 'Secundario', 'Sec. TÃ©cnico', 'CENS', 'Terciario', 'Universitario'],
  visualTitle: 'MÃ¡s allÃ¡ de la materia',
  visualSubtitle: 'Todo lo que puedo ayudarte a resolver',
  supportItems: [
    'PreparaciÃ³n de exÃ¡menes',
    'ElaboraciÃ³n de apuntes propios',
    'Trabajos prÃ¡cticos',
    'Consultas focalizadas',
    'Apoyo escolar integral',
    'Armado de CVs formato ATS',
  ],
};

export const gallery = {
  label: 'En persona',
  titleLine1: 'AtrÃ¡s de la pantalla',
  titleLine2: 'hay una persona real.',
  images: [
    { className: 'mosaic-cell-1 mosaic-caption', src: images.hero, alt: 'AgustÃ­n' },
    { className: 'mosaic-cell-2', src: images.heroSecondary, alt: 'AgustÃ­n' },
    { className: 'mosaic-cell-3', src: images.presencial, alt: 'AgustÃ­n' },
    { className: 'mosaic-cell-4', src: images.group, alt: 'AgustÃ­n' },
    { className: 'mosaic-cell-5', src: images.principal, alt: 'AgustÃ­n' },
  ],
};

export const situationSelector = {
  label: 'Mensaje personalizado',
  titleLine1: 'Contame tu situaciÃ³n',
  titleLine2: 'y te hablo directo.',
  description:
    'SeleccionÃ¡ tu nivel y la materia que necesitÃ¡s. Te muestro cÃ³mo trabajarÃ­amos juntos.',
  levelQuestion: 'Â¿En quÃ© nivel estÃ¡s?',
  subjectQuestion: 'Â¿QuÃ© materia?',
  levels: [
    { label: 'Primario', value: 'primario' },
    { label: 'Secundario', value: 'secundario' },
    { label: 'Sec. TÃ©cnico', value: 'tecnico' },
    { label: 'CENS / Adultos', value: 'cens' },
    { label: 'Universitario', value: 'universitario' },
  ],
  subjects: [
    { label: 'MatemÃ¡tica', value: 'matematica' },
    { label: 'FÃ­sica', value: 'fisica' },
    { label: 'QuÃ­mica', value: 'quimica' },
    { label: 'InglÃ©s', value: 'ingles' },
    { label: 'Otra materia', value: 'otras' },
  ],
};


export const selectorMessages = {'primario-matematica':{msg:'Los nÃºmeros no tienen que dar miedo. Trabajo con chicos desde primero hasta sÃ©ptimo, siempre al ritmo del alumno. Empezamos desde donde estÃ©s y construimos de a poco, con paciencia y mucha prÃ¡ctica.',wa:'Hola AgustÃ­n, tengo un alumno de primaria que necesita ayuda con MatemÃ¡tica.'},'primario-otras':{msg:'Para primaria tengo metodologÃ­a adaptada a cada edad. Contame quÃ© materia es y te digo cÃ³mo la trabajamos.',wa:'Hola AgustÃ­n, necesito clases particulares para nivel primario.'},'secundario-matematica':{msg:'Ãlgebra, geometrÃ­a, anÃ¡lisis, funciones â€” lo que sea. El secundario es donde mÃ¡s trabajo y donde mÃ¡s resultados veo. Muchos llegaron creyendo que "no les daba la cabeza" y salieron aprobando con nota.',wa:'Hola AgustÃ­n, necesito clases de MatemÃ¡tica para el secundario.'},'secundario-fisica':{msg:'FÃ­sica en el secundario suena terrible pero no lo es. Con ejemplos concretos y ejercitaciÃ³n paso a paso, se ordena. Soy TÃ©cnico QuÃ­mico y la trabajÃ© mucho, te garantizo claridad.',wa:'Hola AgustÃ­n, necesito clases de FÃ­sica para el secundario.'},'secundario-quimica':{msg:'QuÃ­mica es mi punto fuerte â€” soy TÃ©cnico QuÃ­mico de base. La trabajo de forma prÃ¡ctica y visual, sin que quede solo como fÃ³rmulas. Desde estequiometrÃ­a hasta orgÃ¡nica.',wa:'Hola AgustÃ­n, necesito clases de QuÃ­mica para el secundario.'},'secundario-ingles':{msg:'InglÃ©s del secundario: gramÃ¡tica, lectura, escritura, oral. Lo trabajamos de forma progresiva y sin que se sienta como tarea.',wa:'Hola AgustÃ­n, necesito clases de InglÃ©s para el secundario.'},'secundario-otras':{msg:'Preguntame quÃ© materia es. Si la conozco bien, la doy directo. Si no, te lo digo con honestidad y me preparo para dÃ¡rtela como corresponde.',wa:'Hola AgustÃ­n, necesito clases particulares para el secundario.'},'tecnico-matematica':{msg:'El tÃ©cnico tiene matemÃ¡tica mÃ¡s exigente â€” anÃ¡lisis, Ã¡lgebra lineal, cÃ¡lculo. Tuve muchos alumnos del tÃ©cnico y sÃ© exactamente quÃ© puntos generan mÃ¡s conflicto.',wa:'Hola AgustÃ­n, necesito clases de MatemÃ¡tica para el secundario tÃ©cnico.'},'tecnico-fisica':{msg:'FÃ­sica en el tÃ©cnico es otro nivel. Trabajo bien esa articulaciÃ³n entre teorÃ­a y aplicaciÃ³n prÃ¡ctica que tanto se necesita ahÃ­.',wa:'Hola AgustÃ­n, necesito clases de FÃ­sica para el secundario tÃ©cnico.'},'tecnico-quimica':{msg:'QuÃ­mica tÃ©cnica es mi casa. Soy TÃ©cnico QuÃ­mico â€” no solo la enseÃ±o, la vivÃ­. SÃ© quÃ© les cuesta mÃ¡s a los alumnos del tÃ©cnico y cÃ³mo explicarlo bien.',wa:'Hola AgustÃ­n, necesito clases de QuÃ­mica para el secundario tÃ©cnico.'},'tecnico-ingles':{msg:'InglÃ©s tÃ©cnico tambiÃ©n lo trabajo. Si hay lectura de manuales o vocabulario especÃ­fico, lo incorporamos.',wa:'Hola AgustÃ­n, necesito clases de InglÃ©s para el tÃ©cnico.'},'tecnico-otras':{msg:'Del tÃ©cnico puedo trabajar muchas materias. Contame cuÃ¡l necesitÃ¡s y analizamos.',wa:'Hola AgustÃ­n, necesito ayuda con una materia del secundario tÃ©cnico.'},'cens-matematica':{msg:'Adultos que retoman el secundario: los respeto y los admiro. Con el CENS trabajo con mucha paciencia, sin juzgar los aÃ±os que pasaron. Arrancamos de cero si hace falta, tranquilo.',wa:'Hola AgustÃ­n, necesito clases de MatemÃ¡tica para el CENS.'},'cens-otras':{msg:'Para el CENS trabajo con mucha flexibilidad horaria y ritmo adaptado. Contame quÃ© materia y cÃ³mo venÃ­s.',wa:'Hola AgustÃ­n, necesito ayuda con una materia del CENS.'},'universitario-matematica':{msg:'Ãlgebra lineal, anÃ¡lisis matemÃ¡tico, probabilidades, estadÃ­stica â€” trabajÃ© con alumnos de IngenierÃ­a, EconomÃ­a, Exactas. SÃ© dÃ³nde estÃ¡n los puntos crÃ­ticos y cÃ³mo superarlos.',wa:'Hola AgustÃ­n, necesito clases de MatemÃ¡tica a nivel universitario.'},'universitario-fisica':{msg:'FÃ­sica universitaria es exigente pero tiene lÃ³gica. Trabajo bien la transiciÃ³n del razonamiento secundario al universitario, que es donde mÃ¡s se pierde la gente.',wa:'Hola AgustÃ­n, necesito clases de FÃ­sica a nivel universitario.'},'universitario-quimica':{msg:'QuÃ­mica universitaria â€” orgÃ¡nica, inorgÃ¡nica, analÃ­tica. La base tÃ©cnica y los aÃ±os de docencia me dan herramientas reales para explicarla bien.',wa:'Hola AgustÃ­n, necesito clases de QuÃ­mica a nivel universitario.'},'universitario-ingles':{msg:'InglÃ©s universitario: lectura de papers, exÃ¡menes de idioma, parciales. Lo trabajamos con foco en lo que necesitÃ¡s especÃ­ficamente.',wa:'Hola AgustÃ­n, necesito clases de InglÃ©s a nivel universitario.'},'universitario-otras':{msg:'Para universitario tambiÃ©n trabajo otras materias segÃºn el caso. Contame de quÃ© carrera sos y quÃ© materia es.',wa:'Hola AgustÃ­n, necesito ayuda con una materia universitaria.'}};


export const quickActions = [
  { key: 'whatsapp', label: 'WhatsApp', href: whatsappUrl(), type: 'external' },
  { key: 'contacto', label: 'Contacto', href: '#contacto', type: 'anchor' },
  { key: 'top', label: 'Subir', href: '#hero', type: 'anchor' },
];

export const contactClosing = {
  label: 'Hablemos',
  title: 'La primera clase de 45 min es completamente gratis.',
  subtitle: 'Conocernos, ver tu punto de partida y mostrarte con claridad cÃ³mo te puedo ayudar.',
  support: 'Sin compromiso, sin presiÃ³n, con una propuesta clara para que sientas si este acompaÃ±amiento es para vos.',
};

export const contactFormConfig = {
  kicker: 'Consulta personalizada',
  title: 'Dejame tu consulta y te respondo con una propuesta clara.',
  description:
    'Completá estos datos y te contesto con foco en tu situación real: nivel, materia, tipo de ayuda y próximos pasos.',
  submitLabel: 'Quiero que me contacten',
  levelOptions: [...levels.chips],
  subjectOptions: subjects.map((subject) => subject.title.replace(/^[¿?]+|[¿?]+$/g, '').trim()),
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
