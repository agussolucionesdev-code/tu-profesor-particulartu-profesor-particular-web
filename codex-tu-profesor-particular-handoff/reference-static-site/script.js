// Hero stagger animation
(function(){
  const col = document.getElementById('heroText');
  if(!col) return;
  const kids = col.children;
  for(let i=0;i<kids.length;i++){
    kids[i].style.opacity='0';
    kids[i].style.transform='translateY(22px)';
    kids[i].style.transition=`opacity .6s ${i*.12+.1}s ease, transform .6s ${i*.12+.1}s ease`;
  }
  requestAnimationFrame(()=>{ for(let i=0;i<kids.length;i++){ kids[i].style.opacity='1'; kids[i].style.transform='none'; }});

  // Rotating words
  const words = document.querySelectorAll('.hero-rotate-word');
  let idx = 0;
  setInterval(()=>{
    words[idx].classList.remove('active');
    words[idx].classList.add('exit');
    setTimeout(()=>words[idx].classList.remove('exit'),500);
    idx = (idx+1)%words.length;
    words[idx].classList.add('active');
  }, 2400);

  // Mouse parallax on photo column
  const photoCol = document.getElementById('heroPhoto');
  document.addEventListener('mousemove', e => {
    if(window.innerWidth < 768) return;
    const x = (e.clientX / window.innerWidth - .5) * 12;
    const y = (e.clientY / window.innerHeight - .5) * 12;
    if(photoCol) photoCol.style.transform = `translate(${x}px, ${y}px)`;
  });
})();

/* ================= ORIGINAL INLINE SCRIPT SPLIT ================= */

/* --- NAV --- */
const navbar = document.getElementById('navbar');
const sections = ['hero','carta','selector','materias','niveles','metodo','sobre','fotos','modalidades','testimonios','faq'];

// Scroll handler — scrolled class + active section
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  navbar.classList.toggle('scrolled', y > 60);

  // Active section tracking
  let current = '';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if(el && el.getBoundingClientRect().top <= 100) current = id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.section === current);
  });
}, {passive:true});

// Smooth scroll helper
window.scrollToSection = function(id) {
  const el = document.getElementById(id);
  if(!el) return;
  const navH = navbar.offsetHeight;
  const top = el.getBoundingClientRect().top + window.scrollY - navH - 8;
  window.scrollTo({top, behavior:'smooth'});
};

// Intercept all anchor nav clicks
document.querySelectorAll('.nav-links a, .drawer-link').forEach(a => {
  a.addEventListener('click', e => {
    const sec = a.dataset.section || a.getAttribute('href')?.replace('#','');
    if(sec && document.getElementById(sec)) {
      e.preventDefault();
      scrollToSection(sec);
    }
  });
});

// Mobile drawer
window.toggleDrawer = function() {
  const drawer = document.getElementById('navDrawer');
  const btn = document.getElementById('hamburgerBtn');
  const open = drawer.classList.toggle('open');
  btn.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
};

// Close drawer on Escape
document.addEventListener('keydown', e => {
  if(e.key === 'Escape') { document.getElementById('navDrawer').classList.remove('open'); document.getElementById('hamburgerBtn').classList.remove('open'); document.body.style.overflow = ''; }
});

/* --- SCROLL PROGRESS BAR --- */
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const total = document.documentElement.scrollHeight - window.innerHeight;
  document.getElementById('progress-bar').style.width = Math.min(100,(scrolled/total)*100)+'%';
  document.querySelector('nav').classList.toggle('scrolled', scrolled > 40);
  document.querySelectorAll('.reveal:not(.visible),.reveal-left:not(.visible),.reveal-right:not(.visible)').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 40) el.classList.add('visible');
  });
  const photo = document.querySelector('.hero-photo');
  if (photo && scrolled < 600) photo.style.transform = `translateY(${scrolled*.08}px)`;
}, { passive: true });

/* --- REVEAL --- */
function showAll() { document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el=>{ el.style.transition='none'; el.classList.add('visible'); }); }
const fallbackTimer = setTimeout(showAll, 500);
if ('IntersectionObserver' in window) {
  const ro = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); } });
  }, {threshold:0.05, rootMargin:'0px 0px -20px 0px'});
  document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el=>ro.observe(el));
} else { showAll(); }
// Always show after 500ms as final fallback
setTimeout(showAll, 500);

/* --- CARTA REVEALS --- */
(function(){
  const items = document.querySelectorAll('.carta-para,.carta-highlight,.carta-stats,.carta-firma-v2,.carta-firma-cta');
  if(!items.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e,i) => {
      if(e.isIntersecting){
        setTimeout(()=>e.target.classList.add('visible'), i*80);
        obs.unobserve(e.target);
      }
    });
  },{threshold:0.12});
  items.forEach(el=>obs.observe(el));
})();

/* --- COUNTERS --- */
function animateCounter(el, target, suffix) {
  let start = 0; const dur = 1600;
  const step = ts => { if(!start) start=ts; const p=Math.min((ts-start)/dur,1); const e=1-Math.pow(1-p,3); el.textContent=Math.floor(e*target)+suffix; if(p<1) requestAnimationFrame(step); else el.textContent=target+suffix; };
  requestAnimationFrame(step);
}
const co = new IntersectionObserver(entries => { entries.forEach(e => { if(e.isIntersecting&&!e.target.dataset.done){ e.target.dataset.done='1'; animateCounter(e.target, parseInt(e.target.dataset.target), e.target.dataset.suffix||''); }}); },{threshold:.5});
document.querySelectorAll('[data-target]').forEach(el=>co.observe(el));

/* --- SELECTOR --- */
const msgs = {'primario-matematica':{msg:'Los números no tienen que dar miedo. Trabajo con chicos desde primero hasta séptimo, siempre al ritmo del alumno. Empezamos desde donde estés y construimos de a poco, con paciencia y mucha práctica.',wa:'Hola Agustín, tengo un alumno de primaria que necesita ayuda con Matemática.'},'primario-otras':{msg:'Para primaria tengo metodología adaptada a cada edad. Contame qué materia es y te digo cómo la trabajamos.',wa:'Hola Agustín, necesito clases particulares para nivel primario.'},'secundario-matematica':{msg:'Álgebra, geometría, análisis, funciones — lo que sea. El secundario es donde más trabajo y donde más resultados veo. Muchos llegaron creyendo que "no les daba la cabeza" y salieron aprobando con nota.',wa:'Hola Agustín, necesito clases de Matemática para el secundario.'},'secundario-fisica':{msg:'Física en el secundario suena terrible pero no lo es. Con ejemplos concretos y ejercitación paso a paso, se ordena. Soy Técnico Químico y la trabajé mucho, te garantizo claridad.',wa:'Hola Agustín, necesito clases de Física para el secundario.'},'secundario-quimica':{msg:'Química es mi punto fuerte — soy Técnico Químico de base. La trabajo de forma práctica y visual, sin que quede solo como fórmulas. Desde estequiometría hasta orgánica.',wa:'Hola Agustín, necesito clases de Química para el secundario.'},'secundario-ingles':{msg:'Inglés del secundario: gramática, lectura, escritura, oral. Lo trabajamos de forma progresiva y sin que se sienta como tarea.',wa:'Hola Agustín, necesito clases de Inglés para el secundario.'},'secundario-otras':{msg:'Preguntame qué materia es. Si la conozco bien, la doy directo. Si no, te lo digo con honestidad y me preparo para dártela como corresponde.',wa:'Hola Agustín, necesito clases particulares para el secundario.'},'tecnico-matematica':{msg:'El técnico tiene matemática más exigente — análisis, álgebra lineal, cálculo. Tuve muchos alumnos del técnico y sé exactamente qué puntos generan más conflicto.',wa:'Hola Agustín, necesito clases de Matemática para el secundario técnico.'},'tecnico-fisica':{msg:'Física en el técnico es otro nivel. Trabajo bien esa articulación entre teoría y aplicación práctica que tanto se necesita ahí.',wa:'Hola Agustín, necesito clases de Física para el secundario técnico.'},'tecnico-quimica':{msg:'Química técnica es mi casa. Soy Técnico Químico — no solo la enseño, la viví. Sé qué les cuesta más a los alumnos del técnico y cómo explicarlo bien.',wa:'Hola Agustín, necesito clases de Química para el secundario técnico.'},'tecnico-ingles':{msg:'Inglés técnico también lo trabajo. Si hay lectura de manuales o vocabulario específico, lo incorporamos.',wa:'Hola Agustín, necesito clases de Inglés para el técnico.'},'tecnico-otras':{msg:'Del técnico puedo trabajar muchas materias. Contame cuál necesitás y analizamos.',wa:'Hola Agustín, necesito ayuda con una materia del secundario técnico.'},'cens-matematica':{msg:'Adultos que retoman el secundario: los respeto y los admiro. Con el CENS trabajo con mucha paciencia, sin juzgar los años que pasaron. Arrancamos de cero si hace falta, tranquilo.',wa:'Hola Agustín, necesito clases de Matemática para el CENS.'},'cens-otras':{msg:'Para el CENS trabajo con mucha flexibilidad horaria y ritmo adaptado. Contame qué materia y cómo venís.',wa:'Hola Agustín, necesito ayuda con una materia del CENS.'},'universitario-matematica':{msg:'Álgebra lineal, análisis matemático, probabilidades, estadística — trabajé con alumnos de Ingeniería, Economía, Exactas. Sé dónde están los puntos críticos y cómo superarlos.',wa:'Hola Agustín, necesito clases de Matemática a nivel universitario.'},'universitario-fisica':{msg:'Física universitaria es exigente pero tiene lógica. Trabajo bien la transición del razonamiento secundario al universitario, que es donde más se pierde la gente.',wa:'Hola Agustín, necesito clases de Física a nivel universitario.'},'universitario-quimica':{msg:'Química universitaria — orgánica, inorgánica, analítica. La base técnica y los años de docencia me dan herramientas reales para explicarla bien.',wa:'Hola Agustín, necesito clases de Química a nivel universitario.'},'universitario-ingles':{msg:'Inglés universitario: lectura de papers, exámenes de idioma, parciales. Lo trabajamos con foco en lo que necesitás específicamente.',wa:'Hola Agustín, necesito clases de Inglés a nivel universitario.'},'universitario-otras':{msg:'Para universitario también trabajo otras materias según el caso. Contame de qué carrera sos y qué materia es.',wa:'Hola Agustín, necesito ayuda con una materia universitaria.'}};

window.updateSelector = function() {
  const nivel = document.querySelector('.sel-nivel.active')?.dataset.val;
  const materia = document.querySelector('.sel-materia.active')?.dataset.val;
  document.getElementById('materia-row').style.display = nivel ? 'flex' : 'none';
  const resultEl = document.getElementById('selector-result');
  if (!nivel || !materia) { resultEl.classList.remove('show'); return; }
  const key = msgs[nivel+'-'+materia] ? nivel+'-'+materia : nivel+'-otras';
  const data = msgs[key]; if(!data) return;
  document.getElementById('selector-msg').textContent = data.msg;
  document.getElementById('selector-wa').href = 'https://wa.me/5491164236675?text='+encodeURIComponent(data.wa);
  resultEl.classList.add('show');
};
document.querySelectorAll('.sel-nivel').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.sel-nivel').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.sel-materia').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active'); window.updateSelector();
}));
document.querySelectorAll('.sel-materia').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.sel-materia').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active'); window.updateSelector();
}));

/* --- MÉTODO EXPAND --- */
document.querySelectorAll('.metodo-card').forEach(card => card.addEventListener('click', () => {
  const was = card.classList.contains('expanded');
  document.querySelectorAll('.metodo-card').forEach(c=>c.classList.remove('expanded'));
  if(!was) card.classList.add('expanded');
}));

/* --- FAQ --- */
document.querySelectorAll('.faq-item').forEach(item => item.querySelector('.faq-q').addEventListener('click', () => {
  const was = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
  if(!was) item.classList.add('open');
}));

/* --- MÉTODO STEPS --- */
window.goStep = function(n, btn) {
  document.querySelectorAll('.metodo-step-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.step-nav-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('step-'+n).classList.add('active');
  if(btn) btn.classList.add('active');
  document.getElementById('step-progress').style.width = (n/4*100)+'%';
};

/* --- SOBRE TABS --- */
window.showTab = function(id, btn) {
  document.querySelectorAll('.sobre-tab-content').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.sobre-tab').forEach(b=>b.classList.remove('active'));
  document.getElementById('tab-'+id).classList.add('active');
  btn.classList.add('active');
  if(id==='habilidades') {
    setTimeout(()=>document.getElementById('skills-list').classList.add('animated'), 100);
  }
};

/* --- MODALIDADES SELECTOR --- */
let modModo = 'individual', modLugar = 'presencial';
window.setMod = function(axis, val, btn) {
  if(axis==='modo') modModo=val; else modLugar=val;
  btn.closest('.mod-toggle').querySelectorAll('.mod-toggle-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.mod-panel').forEach(p=>p.classList.remove('active'));
  const panel = document.getElementById('panel-'+modModo+'-'+modLugar);
  if(panel) panel.classList.add('active');
  document.getElementById('combo-modo').textContent = modModo;
  document.getElementById('combo-lugar').textContent = modLugar;
};

/* --- TWEAKS --- */
window.addEventListener('message', e => {
  if(e.data?.type==='__activate_edit_mode') document.getElementById('tweaks-panel').classList.add('open');
  if(e.data?.type==='__deactivate_edit_mode') document.getElementById('tweaks-panel').classList.remove('open');
});
window.parent.postMessage({type:'__edit_mode_available'},'*');

/* --- CARD 3D TILT --- */
document.querySelectorAll('.materia-card,.mod-card,.testi-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - .5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - .5) * -12;
    card.style.transform = `perspective(600px) rotateY(${x}deg) rotateX(${y}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

/* --- UNDERLINE ANIM --- */
const ulObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, {threshold:.5});
document.querySelectorAll('.underline-anim').forEach(el => ulObs.observe(el));
