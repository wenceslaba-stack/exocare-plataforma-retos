/* EXOCARE · Plataforma de retos · v2 (una sola página, ES/PT) */
(function(){
'use strict';

/* ---------- textos de la interfaz ---------- */
const U = {
 es:{
  skip:'Ir al contenido', nav_inicio:'Inicio', nav_perf:'Perfiles', nav_retos:'Retos', nav_req:'Requisitos',
  partners:'Entidades participantes',
  legal:'EXOCARE_GNP · Proyecto cofinanciado por el Programa Interreg VI-A España–Portugal (POCTEP) 2021–2027 y por el Fondo Europeo de Desarrollo Regional (FEDER).',
  kicker:'Plataforma abierta · Galicia y Norte de Portugal',
  h1:[['Plataforma de retos y desafíos'],['sociosanitarios',1]],
  lead:'Recogemos las dificultades que tienen cada día el personal sanitario y los cuidadores al movilizar a personas dependientes, para adaptar a su realidad las ayudas tecnológicas.',
  cta:'Explorar los 20 retos', cta2:'Qué es esta plataforma',
  stats_t:['Mejorar las condiciones de trabajo y seguridad de las tareas realizadas por las personas cuidadoras ','profesionales y no profesionales'],
  s1:'de 46 cuidadores familiares tenía molestias musculoesqueléticas en el último mes, sobre todo lumbares.', src_l:'Fuente',
  s2:'de las plantillas de cuidados en Galicia y el Norte de Portugal son mujeres, cada vez de más edad.',
  s3:'trabajadores en nueve ensayos de una revisión Cochrane: la formación en manipulación manual, con o sin ayudas, no previno el dolor de espalda.',
  about_t:'Qué es esta plataforma', about_p2:'Forma parte de la fase 2 del proyecto EXOCARE_GNP, de cooperación transfronteriza del Programa Interreg VI-A España–Portugal (POCTEP) 2021–2027.', write:'Escribir al proyecto',
  about_p:'Un espacio abierto que recoge las dificultades que tienen cada día el personal sanitario y los cuidadores al movilizar a personas dependientes, para diseñar y adaptar la tecnología a partir de ellas.',
  fase:'FASE',
  f:[['Necesidades del personal sanitario y los cuidadores','Lo que viven al movilizar a las personas en el hospital, en la residencia y en casa.'],
     ['Retos y desafíos','Cada reto, con la evidencia que lo respalda y lo que hace falta para resolverlo.'],
     ['Requisitos de adaptación','Los retos se traducen en 11 requisitos para un exoesqueleto pasivo de bajo coste.'],
     ['Soluciones validadas en entornos reales','Pruebas con profesionales y cuidadores en las dos regiones.']],
  perf_t:['Empieza por ','tu perfil'], nretos:n=>n+(n===1?' reto':' retos'),
  quote_lbl:'Lo que dice la evidencia', quote:'Si una ayuda hace que cada maniobra lleve más tiempo, el personal deja de usarla.', quote_go:'Ver el reto',
  contact_t:'Más información sobre EXOCARE', contact_p:'Toda la información del proyecto y sus datos de contacto están en la web oficial.', web_go:'Ir a la web de EXOCARE',
  copy:'Copiar', copied:'Correo copiado', copy_fail:'Selecciona el correo para copiarlo', tel:'Teléfono',
  r_kicker:'20 retos · 7 ámbitos', w_retos:'retos', w_amb:'ámbitos', r_h1:'Retos y desafíos', amb_t:'Elige un ámbito', all:'Todos los ámbitos',
  exo_pill:'Relacionados con el exoesqueleto', search:'Buscar un reto',
  count:(n,t)=>`<b>${n}</b> de ${t} retos`, reset:'Quitar filtros', none:'No hay retos con estos filtros.',
  exo_b:'Exoesqueleto', open:'Abrir',
  back_retos:'Volver a los retos', pv:'Qué hace falta', back_to:n=>'Volver a '+n.toLowerCase(), imp_t:'Qué hace falta',
  ev_show:n=>`Ver la evidencia (${n})`, ev_hide:'Ocultar la evidencia',
  who:'A quién afecta', pp_t:'Cómo afecta a cada perfil', pp_one:'Cómo afecta a este perfil', where:'Dónde ocurre', resp:'Hacia dónde apuntan las soluciones', reqs_rel:'Requisitos relacionados',
  exo_note:'Este reto influye en el diseño o en el uso del exoesqueleto',
  prev:'Reto anterior', next:'Reto siguiente', kbd:'Usa las flechas ← → del teclado para pasar de un reto a otro.',
  p_kicker:'3 perfiles', p_pick:'Elige un perfil', p_back:'Todos los perfiles', p_change:'Cambiar de perfil', p_aff:n=>`Le afectan ${n} retos`, p_h1:'Personal sanitario y cuidadores', p_see:n=>`Ver sus ${n} retos`,
  q_kicker:'11 requisitos para el exoesqueleto', q_h1:'Del reto a la solución', q_cap:'Exoesqueleto pasivo de bajo coste',
  q_t:['11 requisitos ','para el exoesqueleto'], q_from:'Surge de'
 },
 pt:{
  skip:'Ir para o conteúdo', nav_inicio:'Início', nav_perf:'Perfis', nav_retos:'Desafios', nav_req:'Requisitos',
  partners:'Entidades participantes',
  legal:'EXOCARE_GNP · Projeto cofinanciado pelo Programa Interreg VI-A Espanha–Portugal (POCTEP) 2021–2027 e pelo Fundo Europeu de Desenvolvimento Regional (FEDER).',
  kicker:'Plataforma aberta · Galiza e Norte de Portugal',
  h1:[['Plataforma de desafios'],['sociossanitários',1]],
  lead:'Recolhemos as dificuldades que os profissionais de saúde e os cuidadores enfrentam todos os dias ao mobilizar pessoas dependentes, para adaptar à sua realidade as ajudas tecnológicas.',
  cta:'Explorar os 20 desafios', cta2:'O que é esta plataforma',
  stats_t:['Melhorar as condições de trabalho e a segurança das tarefas realizadas pelas pessoas cuidadoras ','profissionais e não profissionais'],
  s1:'de 46 cuidadores familiares tinham queixas musculoesqueléticas no último mês, sobretudo lombares.', src_l:'Fonte',
  s2:'das equipas de cuidados na Galiza e no Norte de Portugal são mulheres, cada vez mais velhas.',
  s3:'trabalhadores em nove ensaios de uma revisão Cochrane: a formação em movimentação manual, com ou sem ajudas, não preveniu a dor nas costas.',
  about_t:'O que é esta plataforma', about_p2:'Faz parte da fase 2 do projeto EXOCARE_GNP, de cooperação transfronteiriça do Programa Interreg VI-A Espanha–Portugal (POCTEP) 2021–2027.', write:'Escrever ao projeto',
  about_p:'Um espaço aberto que reúne as dificuldades que os profissionais de saúde e os cuidadores enfrentam todos os dias ao mobilizar pessoas dependentes, para conceber e adaptar a tecnologia a partir delas.',
  fase:'FASE',
  f:[['Necessidades dos profissionais de saúde e dos cuidadores','O que vivem ao mobilizar as pessoas no hospital, no lar e em casa.'],
     ['Desafios','Cada desafio, com a evidência que o sustenta e o que é preciso para o resolver.'],
     ['Requisitos de adaptação','Os desafios traduzem-se em 11 requisitos para um exosqueleto passivo de baixo custo.'],
     ['Soluções validadas em contextos reais','Testes com profissionais e cuidadores nas duas regiões.']],
  perf_t:['Comece pelo ','seu perfil'], nretos:n=>n+(n===1?' desafio':' desafios'),
  quote_lbl:'O que diz a evidência', quote:'Se uma ajuda faz com que cada manobra demore mais, o pessoal deixa de a usar.', quote_go:'Ver o desafio',
  contact_t:'Mais informação sobre o EXOCARE', contact_p:'Toda a informação do projeto e os seus contactos estão no site oficial.', web_go:'Ir para o site do EXOCARE',
  copy:'Copiar', copied:'Correio copiado', copy_fail:'Selecione o correio para o copiar', tel:'Telefone',
  r_kicker:'20 desafios · 7 âmbitos', w_retos:'desafios', w_amb:'âmbitos', r_h1:'Desafios', amb_t:'Escolha um âmbito', all:'Todos os âmbitos',
  exo_pill:'Relacionados com o exosqueleto', search:'Procurar um desafio',
  count:(n,t)=>`<b>${n}</b> de ${t} desafios`, reset:'Limpar filtros', none:'Nenhum desafio corresponde a estes filtros.',
  exo_b:'Exosqueleto', open:'Abrir',
  back_retos:'Voltar aos desafios', pv:'O que é preciso', back_to:n=>'Voltar a '+n.toLowerCase(), imp_t:'O que é preciso',
  ev_show:n=>`Ver a evidência (${n})`, ev_hide:'Ocultar a evidência',
  who:'A quem afeta', pp_t:'Como afeta cada perfil', pp_one:'Como afeta este perfil', where:'Onde acontece', resp:'Para onde apontam as soluções', reqs_rel:'Requisitos relacionados',
  exo_note:'Este desafio influencia a conceção ou o uso do exosqueleto',
  prev:'Desafio anterior', next:'Desafio seguinte', kbd:'Use as setas ← → do teclado para passar de um desafio a outro.',
  p_kicker:'3 perfis', p_pick:'Escolha um perfil', p_back:'Todos os perfis', p_change:'Mudar de perfil', p_aff:n=>`${n} desafios afetam este perfil`, p_h1:'Profissionais de saúde e cuidadores', p_see:n=>`Ver os seus ${n} desafios`,
  q_kicker:'11 requisitos para o exosqueleto', q_h1:'Do desafio à solução', q_cap:'Exosqueleto passivo de baixo custo',
  q_t:['11 requisitos ','para o exosqueleto'], q_from:'Provém de'
 }
};

/* ---------- fotos (cada una en un solo sitio, salvo la de cada ámbito en su ficha) ---------- */
const IMG = {
  hero:   {f:'04-ayudas-tecnicas.jpg', pos:'60% 50%', es:'Cuidadora inclinada junto a la cama ayudando a una mujer mayor, con la grúa sin usar en primer plano', pt:'Cuidadora inclinada junto à cama a ajudar uma senhora idosa, com a grua por usar em primeiro plano'},
  retos:  {f:'14-domicilio-rural.jpg', pos:'50% 40%', es:'Cuidadora ayudando a una mujer mayor a levantarse de la cama en una casa rural de piedra', pt:'Cuidadora a ajudar uma senhora idosa a levantar-se da cama numa casa rural de pedra'},
  perf:   {f:'15-portada-domicilio.jpg', pos:'50% 35%', es:'Cuidadora atendiendo a una mujer mayor en su dormitorio', pt:'Cuidadora a apoiar uma senhora idosa no seu quarto'},
  req:    {f:'web-ExoCare4-scaled.jpg', pos:'40% 45%', es:'Cuidadora con exoesqueleto ayudando a una mujer mayor a levantarse en un pasillo', pt:'Cuidadora com exosqueleto a ajudar uma senhora idosa a levantar-se num corredor'},
  reqSide:{f:'foto-exo.jpg', pos:'30% 50%', es:'Detalle de un exoesqueleto pasivo en la cadera de una profesional sanitaria', pt:'Pormenor de um exosqueleto passivo na anca de uma profissional de saúde'},
  pTile:{P1:{f:'web-ExoCare3-scaled.jpg',pos:'78% 50%'}, P2:{f:'03-organizacion-trabajo.jpg',pos:'55% 45%'}, P3:{f:'pexels-photo-29372727.jpeg',pos:'55% 40%'}},
  pRow:{P1:{f:'web-ExoCare1.jpg',pos:'50% 45%'}, P2:{f:'13-transferencia.jpg',pos:'50% 45%'}, P3:{f:'12-bano-estrecho.jpg',pos:'45% 40%'}},
  /* cuidadores informales: fotos propias de familias en casa */
  ambP3:{tarea:{f:'p3-01-tareas-movilizacion.jpg',pos:'50% 45%',es:'Una hija ayuda a su madre a pasar de la cama a la silla de ruedas con un disco giratorio',pt:'Uma filha ajuda a mãe a passar da cama para a cadeira de rodas com um disco rotativo'},
    entorno:{f:'p3-02-entorno-fisico.jpg',pos:'50% 40%',es:'Un hombre mayor ayuda a su mujer a sentarse en una silla de ducha en un baño pequeño',pt:'Um homem idoso ajuda a mulher a sentar-se numa cadeira de duche numa casa de banho pequena'},
    ayudas:{f:'p3-03-ayudas-tecnicas.jpg',pos:'50% 50%',es:'Una mujer monta en el salón de casa una grúa de traslado, con una cama articulada al fondo',pt:'Uma mulher monta na sala de casa uma grua de transferência, com uma cama articulada ao fundo'},
    pers:{f:'p3-04-profesionales-cuidadores.jpg',pos:'50% 40%',es:'Una mujer mayor da de beber a su marido encamado',pt:'Uma mulher idosa dá de beber ao marido acamado'},
    form:{f:'p3-05-formacion.jpg',pos:'50% 45%',es:'Una enfermera enseña a un hombre mayor y a su hija a usar una tablet en la cocina de casa',pt:'Uma enfermeira ensina um homem idoso e a filha a usar um tablet na cozinha de casa'},
    exo:{f:'p3-06-uso-exoesqueleto.jpg',pos:'50% 40%',es:'Una mujer con un exoesqueleto de apoyo lumbar ayuda a su madre a incorporarse en la cama',pt:'Uma mulher com um exosqueleto de apoio lombar ajuda a mãe a sentar-se na cama'}},
  amb:{tarea:{f:'01-tareas-movilizacion.jpg',pos:'45% 45%'}, entorno:{f:'02-entorno-fisico.jpg',pos:'45% 45%'}, org:{f:'11-pasillo-prisas.jpg',pos:'50% 40%'}, ayudas:{f:'10-grua-exo.jpg',pos:'50% 45%'}, exo:{f:'05-uso-exoesqueleto.jpg',pos:'35% 40%'}, form:{f:'06-formacion-cultura-preventiva.jpg',pos:'55% 45%'}, pers:{f:'07-personas-cuidadoras.jpg',pos:'50% 35%'}}
};
/* una foto propia para cada requisito, sin repetir dentro de Requisitos */
const REQ_IMG = {1:{f:'15-portada-domicilio.jpg',pos:'50% 35%'}, 2:{f:'12-bano-estrecho.jpg',pos:'45% 40%'}, 3:{f:'web-ExoCare3-scaled.jpg',pos:'78% 50%'},
  4:{f:'05-uso-exoesqueleto.jpg',pos:'35% 40%'}, 5:{f:'07-personas-cuidadoras.jpg',pos:'50% 35%'}, 6:{f:'web-ExoCare1.jpg',pos:'50% 45%'},
  7:{f:'16-limpieza-exo.jpg',pos:'45% 50%'}, 8:{f:'10-grua-exo.jpg',pos:'50% 45%'}, 9:{f:'14-domicilio-rural.jpg',pos:'50% 40%'},
  10:{f:'06-formacion-cultura-preventiva.jpg',pos:'55% 45%'}, 11:{f:'17-evaluacion-entorno-real.jpg',pos:'45% 45%'}};
const PSUB = {P1:{es:'Hospital y centros sociosanitarios',pt:'Hospital e unidades sociossanitárias'}, P2:{es:'Residencias, centros de día y domicilio',pt:'Lares, centros de dia e domicílio'}, P3:{es:'En casa',pt:'Em casa'}};
const PERF_IC = {P1:'cross', P2:'people', P3:'home'};
const ENT_IC = {H:'cross', R:'building', D:'home'};
const QUOTE_IDS = ['R07','R11','R20'];
const EMAIL = 'comunicacion@erlac-exocare.es';
const SRC = [
  'Darragh AR, Sommerich CM, Lavender SA, Tanner KJ, Vogel K, Campo M. Musculoskeletal discomfort, physical demand, and caregiving activities in informal caregivers. <i>J Appl Gerontol</i>. 2015;34(6):734-60. <a href="https://doi.org/10.1177/0733464813496464" target="_blank" rel="noopener">doi.org/10.1177/0733464813496464</a>',
  'Catálogo de buenas prácticas en el ámbito de la asistencia sociosanitaria: movilización segura de pacientes en Galicia y el norte de Portugal. Proyecto EXOCARE_GNP. SERGAS, 2026.',
  'Verbeek JH, Martimo KP, Karppinen J, Kuijer PP, Viikari-Juntura E, Takala EP. Manual material handling advice and assistive devices for preventing and treating back pain in workers. <i>Cochrane Database Syst Rev</i>. 2011;(6):CD005958. <a href="https://doi.org/10.1002/14651858.CD005958.pub3" target="_blank" rel="noopener">doi.org/10.1002/14651858.CD005958.pub3</a>'
];
/* fuente de una evidencia: «Fuente» que despliega la referencia */
const evSrc = (r,i,n) => { const c = typeof EVSRC!=='undefined' && EVSRC[r.id] && EVSRC[r.id][i]; return c && c.length ? `<span class="src"><button type="button" class="src-b" data-src="e${n}" aria-expanded="false" aria-controls="src-e${n}">${t('src_l')}</button><span class="src-t" id="src-e${n}" hidden>${c.map(k=>REFS[k]).join('<br><br>')}</span></span>` : ''; };
const srcBox = i => `<div class="src"><button type="button" class="src-b" data-src="${i}" aria-expanded="false" aria-controls="src-${i}">${t('src_l')}</button><p class="src-t" id="src-${i}" hidden>${SRC[i]}</p></div>`;

/* ---------- iconos ---------- */
const SVG = {
  move:'<path d="M4 17h4l3-6 3 3 6-8"/><circle cx="7" cy="6" r="2"/>',
  home:'<path d="M4 11l8-6 8 6v8a1 1 0 0 1-1 1h-4v-5h-6v5H5a1 1 0 0 1-1-1z"/>',
  home2:'<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
  clock:'<circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/>',
  tool:'<path d="M14 6a4 4 0 0 0 5 5l-8 8a2 2 0 0 1-3-3z"/>',
  exo:'<path d="M6 5l12 14M6 19l5-6" stroke-width="2.6"/><circle cx="18" cy="5" r="2.2" fill="currentColor" stroke="none"/>',
  book:'<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/>',
  people:'<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.4"/><path d="M15.5 14.2c3 .2 5.5 2.6 5.5 5.8"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
  bulb:'<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>',
  cross:'<rect x="4" y="4" width="16" height="16" rx="4"/><path d="M12 8v8M8 12h8"/>',
  building:'<path d="M4 20V9l8-5 8 5v11"/><path d="M9 20v-5h6v5"/><path d="M9 11h.01M15 11h.01"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  back:'<path d="M19 12H5M11 18l-6-6 6-6"/>',
  chev:'<path d="M6 9l6 6 6-6"/>',
  down:'<path d="M12 5v14M6 13l6 6 6-6"/>',
  grid4:'<rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="4" width="7" height="7" rx="2"/><rect x="4" y="13" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/>',
  copy:'<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a1 1 0 0 1 1-1h10"/>'
};
const ico = (k,cls='') => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${SVG[k]||''}</svg>`;
const MARK = (c='#ffffff',cls='mark') => `<svg class="${cls}" viewBox="0 0 223 223" aria-hidden="true"><path d="M34 34 L189 189" stroke="${c}" stroke-width="68" stroke-linecap="round"/><path d="M34 189 L95 128" stroke="${c}" stroke-width="68" stroke-linecap="round"/><circle cx="189" cy="34" r="34" fill="${c}"/></svg>`;

/* ---------- estado ---------- */
let LANG = 'es';
try{ const l = localStorage.getItem('exocare-lang'); if(l==='es'||l==='pt') LANG=l; }catch(e){}
const F = {amb:null, perf:null, exo:false, q:''};
let route = {v:'inicio'};
let fromPerfil = null;
const $ = (s,el=document) => el.querySelector(s);
const $$ = (s,el=document) => [...el.querySelectorAll(s)];
const t = k => U[LANG][k];
const L = o => o[LANG] || o.es;
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const FINE = matchMedia('(hover:hover) and (pointer:fine)').matches;
const byId = id => RETOS.find(r=>r.id===id);
const img = (o,extra='') => `<img src="imagenes/${o.f}" alt="${o.es?L(o):''}" style="object-position:${o.pos||'50% 50%'}" ${extra}>`;
const norm = s => s.normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase();
const firstSentence = s => (s.match(/^.*?[.!?](\s|$)/)||[s])[0].trim();
const words = parts => parts.map(([txt,em])=>{
  const ws = txt.split(' ').map(w=>`<span class="w">${w}</span>`).join(' ');
  return em ? `<em>${ws}</em>` : ws;
}).join(' ');
const hero = (cls,o,inner,extra='') => `<section class="hero ${cls}"><div class="hero-img">${img(o,'fetchpriority="high"')}</div><div class="wrap hero-in"><div class="hero-txt">${inner}</div></div>${extra}</section>`;

/* ---------- INICIO ---------- */
function vInicio(){
  const P = Object.keys(PERFILES);
  return `
  ${hero('big',IMG.hero,`
    <div class="kicker"><span class="dot"></span><span>${t('kicker')}</span></div>
    <h1>${words(t('h1'))}</h1>
    <p class="lead">${t('lead')}</p>
    <div class="cta">
      <a class="btn solid mag" href="#retos">${t('cta')}${ico('arrow')}</a>
      <button type="button" class="link-w" data-scroll="#que-es" style="background:none;border:0;border-bottom:1px solid rgba(255,255,255,.6);cursor:pointer;font:inherit;font-weight:500">${t('cta2')} ↓</button>
    </div>`)}

  <section class="sec">
    <div class="wrap">
      <h2 class="h2 rv"><span>${t('stats_t')[0]}<em>${t('stats_t')[1]}</em></span></h2>
      <div class="stats">
        <div class="stat rv"><b data-count="94" data-suf=" %">0 %</b><p>${t('s1')}</p>${srcBox(0)}</div>
        <div class="stat rv" style="transition-delay:.15s"><b data-count="82" data-suf=" %">0 %</b><p>${t('s2')}</p>${srcBox(1)}</div>
        <div class="stat rv" style="transition-delay:.3s"><b data-count="20101">0</b><p>${t('s3')}</p>${srcBox(2)}</div>
      </div>
    </div>
  </section>

  <section class="sec tint" id="que-es">
    <div class="wrap about">
      <div class="about-t rv"><h2 class="h2">${t('about_t')}</h2><p>${t('about_p')}</p><p class="about-p2">${t('about_p2')}</p></div>
      <ol class="steps rv">
        ${t('f').map((f,i)=>`<li class="step${i===1?' dark':''}${i===3?' dash':''}"><small>${t('fase')} 0${i+1}</small><div><b>${f[0]}</b><span>${f[1]}</span></div></li>`).join('')}
      </ol>
    </div>
  </section>

  <section class="sec">
    <div class="wrap">
      <h2 class="h2 rv"><span>${t('perf_t')[0]}<em>${t('perf_t')[1]}</em></span></h2>
      <div class="tiles">
        ${P.map((k,i)=>{ const n=RETOS.filter(r=>r.perf.includes(k)).length;
          return `<a class="tile tilt rv" style="transition-delay:${i*.12}s" href="#retos-${k}">${img(IMG.pTile[k],'loading="lazy"')}<span class="glare"></span>
          <span class="tile-in"><small>${L(PSUB[k])}</small><strong>${L(PERFILES[k])}</strong><span class="pill-w">${t('nretos')(n)} <span aria-hidden="true">→</span></span></span></a>`; }).join('')}
      </div>
    </div>
  </section>

  <section class="quote" id="quote">
    ${MARK()}
    <div class="quote-in rv"><blockquote class="q">${t('quote')}</blockquote></div>
  </section>

  <section class="sec">
    <div class="wrap contact rv">
      <h2>${t('contact_t')}</h2>
      <p>${t('contact_p')}</p>
      <div class="contact-b">
        <a class="btn dark" href="https://erlac-exocare.es/" target="_blank" rel="noopener">${t('web_go')}${ico('arrow')}</a>
      </div>
    </div>
  </section>`;
}

/* ---------- RETOS ---------- */
function filtered(){
  const q = norm(F.q.trim());
  return RETOS.filter(r=>{
    if(F.amb && r.amb!==F.amb) return false;
    if(F.perf && !r.perf.includes(F.perf)) return false;
    if(F.exo && !r.exo) return false;
    if(q){ const x=L(r); if(!norm([x.t,x.d,x.imp,...x.ev].join(' ')).includes(q)) return false; }
    return true;
  });
}
const PERF_ENT = {P1:['H','R'], P2:['R','D'], P3:['D']};
/* texto del reto para un perfil: su versión propia si existe */
function variant(r,k){
  const x=L(r), v=(k && x.pv && x.pv[k]) ? x.pv[k] : null;
  let ent = k ? r.ent.filter(e=>PERF_ENT[k].includes(e)) : r.ent; if(!ent.length) ent = r.ent;
  if(!v) return {t:x.t, d:x.d, imp:x.imp, ev:x.ev, evi:x.ev.map((e,n)=>n), ent};
  const evi = v.ev.filter(n=>x.ev[n]);
  return {t:v.t||x.t, d:v.d, imp:v.imp, ev:evi.map(n=>x.ev[n]), evi, ent};
}
function card(r,i){
  const x=variant(r,F.perf), a=AMBITOS[r.amb];
  return `<a class="rc" href="#reto-${r.id}${F.perf?'-'+F.perf:''}" style="animation-delay:${Math.min(i,12)*45}ms">
    <span class="ic">${ico(a.icon)}</span><span class="al">${L(a)}</span><h3>${x.t}</h3>
    <span class="ft">${r.exo?`<span class="exo-b">${ico('exo')}${t('exo_b')}</span>`:'<span></span>'}<span class="go">${ico('arrow')}</span></span>
    <span class="pv" aria-hidden="true"><b>${t('pv')}</b>${firstSentence(x.imp)}</span></a>`;
}
function tilesPerfil(){
  return Object.keys(PERFILES).map((k,i)=>{ const n=RETOS.filter(r=>r.perf.includes(k)).length;
    return `<a class="tile tilt rv" style="transition-delay:${i*.12}s;height:440px" href="#retos-${k}">${img(IMG.pRow[k],'loading="lazy"')}<span class="glare"></span>
    <span class="tile-in"><small>${L(PSUB[k])}</small><strong>${L(PERFILES[k])}</strong><span class="pill-w">${t('nretos')(n)} <span aria-hidden="true">→</span></span></span></a>`; }).join('');
}
function vRetos(){
  const k = F.perf;
  if(!k) return `
  ${hero('mid',IMG.retos,`<div class="kicker"><span class="dot"></span><span>${t('r_kicker')}</span></div><h1>${words([[t('r_h1')]])}</h1>`,
    `<div class="floaters"><div><b data-count="20">0</b><span>${t('w_retos')}</span></div><div><b data-count="7">0</b><span>${t('w_amb')}</span></div></div>`)}
  <section class="sec" style="padding-top:48px"><div class="wrap">
    <h2 class="h2 rv">${t('p_pick')}</h2>
    <div class="tiles">${tilesPerfil()}</div>
  </div></section>`;
  const P=PERFILES[k], mine=RETOS.filter(r=>r.perf.includes(k)), A=Object.keys(AMBITOS).filter(m=>mine.some(r=>r.amb===m));
  return `
  ${hero('mid',Object.assign({},IMG.pRow[k]),`
    <a class="back" href="#retos">${ico('back')}${t('p_change')}</a>
    <div class="kicker"><span class="dot"></span><span>${t('p_aff')(mine.length)}</span></div>
    <h1>${words([[L(P)]])}</h1>
    <p class="lead" style="margin-top:14px">${LANG==='pt'?P.dpt:P.des}.</p>`)}
  <div class="ticker"><div class="ticker-track">${[0,1].map(z=>mine.map(r=>`<a class="tk" href="#reto-${r.id}-${k}"${z?' tabindex="-1" aria-hidden="true"':''}>${ico(AMBITOS[r.amb].icon)}${variant(r,k).t}</a>`).join('')).join('')}</div></div>
  <section class="sec" style="padding-top:52px">
    <div class="wrap">
      <h2 class="h2 rv">${t('amb_t')}</h2>
      <div class="amb-row rv" id="amb-row" role="group" aria-label="${t('amb_t')}">
        <button type="button" class="amb all" data-amb="" aria-pressed="${!F.amb}">${ico('grid4','ico-big')}<span class="amb-in"><small>${t('nretos')(mine.length)}</small><b>${t('all')}</b></span></button>
        ${A.map(m=>`<button type="button" class="amb" data-amb="${m}" aria-pressed="${F.amb===m}">${img((k==='P3'&&IMG.ambP3[m])||IMG.amb[m])}<span class="amb-in"><small>${t('nretos')(mine.filter(r=>r.amb===m).length)}</small><b>${L(AMBITOS[m])}</b></span></button>`).join('')}
      </div>
    </div>
    <div class="fbar"><div class="wrap fbar-in" id="fbar"></div></div>
    <div class="wrap">
      <div class="bar"><span id="count" aria-live="polite"></span><button type="button" class="reset" id="reset">${t('reset')}</button></div>
      <div class="grid" id="grid"></div>
    </div>
  </section>`;
}
function renderFilters(){
  const fb = $('#fbar'); if(!fb) return;
  fb.innerHTML = ``
    + `<button type="button" class="pill exo" data-exo aria-pressed="${F.exo}">${ico('exo')}${t('exo_pill')}</button>`
    + `<label class="search"><span class="sr">${t('search')}</span>${ico('search')}<input id="q" type="search" autocomplete="off" placeholder="${t('search')}"></label>`;
  $('#q').value = F.q;
  $('#q').addEventListener('input',e=>{ F.q=e.target.value; renderGrid(); });
  const row = $('#amb-row');
  if(row){ $$('.amb',row).forEach(b=>b.setAttribute('aria-pressed', String((b.dataset.amb||null)===F.amb))); row.classList.toggle('has-sel', !!F.amb); }
}
function renderGrid(){
  const g = $('#grid'); if(!g) return;
  const list = filtered();
  $('#count').innerHTML = t('count')(list.length, RETOS.filter(r=>!F.perf||r.perf.includes(F.perf)).length);
  $('#reset').hidden = !(F.amb||F.exo||F.q);
  g.innerHTML = list.length ? list.map(card).join('') : `<div class="empty">${t('none')}</div>`;
  bindTilt(g);
}

/* ---------- FICHA DE RETO ---------- */
function vReto(id){
  const r0 = RETOS.find(r=>r.id===id) || RETOS[0];
  if(fromPerfil && !r0.perf.includes(fromPerfil)) fromPerfil = null;
  const k = fromPerfil, suf = k ? '-'+k : '';
  const LIST = k ? RETOS.filter(r=>r.perf.includes(k)) : RETOS;
  const i = Math.max(0, LIST.findIndex(r=>r.id===id)), r = LIST[i], x = variant(r,k), a = AMBITOS[r.amb];
  const prev = LIST[(i+LIST.length-1)%LIST.length], next = LIST[(i+1)%LIST.length];
  const reqs = REQUISITOS.filter(q=>q.retos.includes(r.id));
  const ia = Object.assign({}, (k==='P3'&&IMG.ambP3[r.amb])||IMG.amb[r.amb]);
  return `
  ${hero('mid',ia,`
    <a class="back" href="${k?'#retos-'+k:'#retos'}">${ico('back')}${k?t('back_to')(L(PERFILES[k])):t('back_retos')}</a>
    <div class="kicker">${ico(a.icon).replace('<svg ','<svg width="18" height="18" ')}<span>${L(a)}</span></div>
    <h1 style="max-width:22ch">${words([[x.t]])}</h1>`)}
  <div class="wrap f-body">
    <div class="f-main">
      <p class="f-lead rv">${x.d}</p>
      <div class="impl rv">${MARK('#9fd4eb','mk')}<small>${t('imp_t')}</small><p>${x.imp}</p></div>
      ${x.ev.length?`<button type="button" class="evb" id="evb" aria-expanded="false" aria-controls="evw"><span>${t('ev_show')(x.ev.length)}</span>${ico('chev')}</button>
      <div class="ev-wrap" id="evw"><div><ol class="ev">${x.ev.map((e,n)=>`<li style="animation-delay:${n*.1}s"><span class="n">${n+1}</span><span>${e}${evSrc(r,x.evi[n],n)}</span></li>`).join('')}</ol></div></div>`:''}
    </div>
    <aside class="f-side">
      ${r.exo?`<div class="exo-note rv"><i>${ico('exo')}</i><span>${t('exo_note')}</span></div>`:''}
      <div class="box rv"><h3>${t('where')}</h3><div class="chips">${x.ent.map(e=>`<span class="chip">${ico(ENT_IC[e])}${L(ENTORNOS[e])}</span>`).join('')}</div></div>
      <div class="box rv"><h3>${t('resp')}</h3><div class="chips">${r.resp.map(q=>`<span class="chip">${ico('arrow')}${L(RESPUESTAS[q])}</span>`).join('')}${r.fam.map(f=>`<span class="chip">${ico('tool')}${L(FAMILIAS[f])}</span>`).join('')}</div></div>
      ${reqs.length?`<div class="box rv"><h3>${t('reqs_rel')}</h3>${reqs.map(q=>`<a class="rq-link" href="#requisitos-${q.n}"><span class="num">${q.n}</span>${L(q).t}</a>`).join('')}</div>`:''}
    </aside>
  </div>
  <div class="wrap">
    <p class="kbd">${t('kbd')}</p>
    <nav class="f-nav" aria-label="${t('prev')} / ${t('next')}">
      <a href="#reto-${prev.id}${suf}" data-key="ArrowLeft"><small>← ${t('prev')}</small><b>${variant(prev,k).t}</b></a>
      <a href="#reto-${next.id}${suf}" data-key="ArrowRight"><small>${t('next')} →</small><b>${variant(next,k).t}</b></a>
    </nav>
  </div>`;
}

/* ---------- PERFILES ---------- */
function vPerfiles(){
  return `
  ${hero('mid',IMG.perf,`<div class="kicker"><span class="dot"></span><span>${t('p_kicker')}</span></div><h1>${words([[t('p_h1')]])}</h1>`)}
  <section class="sec" style="padding-top:48px"><div class="wrap">
    <h2 class="h2 rv">${t('p_pick')}</h2>
    <div class="tiles">${tilesPerfil()}</div>
  </div></section>`;
}

/* ---------- UN PERFIL: su página, solo con sus retos ---------- */
function vPerfil(k){
  const P=PERFILES[k], list=RETOS.filter(r=>r.perf.includes(k));
  const im=Object.assign({}, IMG.pRow[k]);
  return `
  ${hero('mid',im,`
    <a class="back" href="#perfiles">${ico('back')}${t('p_back')}</a>
    <div class="kicker"><span class="dot"></span><span>${t('p_aff')(list.length)}</span></div>
    <h1>${words([[L(P)]])}</h1>
    <p class="lead" style="margin-top:14px">${LANG==='pt'?P.dpt:P.des}.</p>`)}
  <section class="sec" style="padding-top:48px"><div class="wrap">
    <div class="grid" id="grid-perfil">${list.map((r,i)=>card(r,i,k)).join('')}</div>
  </div></section>`;
}

/* ---------- REQUISITOS ---------- */
function vRequisitos(open){
  return `
  ${hero('mid',IMG.req,`<div class="kicker"><span class="dot"></span><span>${t('q_kicker')}</span></div><h1>${words([[t('q_h1')]])}</h1>`)}
  <section class="sec"><div class="wrap">
    <h2 class="h2 rv"><span>${t('q_t')[0]}<em>${t('q_t')[1]}</em></span></h2>
    <div class="req-grid">
      <figure class="req-img rv" id="req-fig">${img(IMG.reqSide,'loading="lazy" data-layer="a"')}<img class="off" data-layer="b" alt="" style="object-position:50% 45%"><figcaption id="req-cap">${t('q_cap')}</figcaption></figure>
      <ol class="reqs">
        ${REQUISITOS.map((q,i)=>{ const on = q.n===open; return `<li class="req rv${on?' open':''}" id="req-${q.n}" style="transition-delay:${Math.min(i,6)*.06}s">
          <button type="button" class="rq" aria-expanded="${on}" aria-controls="ra-${q.n}"><span class="num">${q.n}</span><h3>${L(q).t}</h3><span class="pm">${ico('chev')}</span></button>
          <div class="ra" id="ra-${q.n}"><div><div class="ra-in"><p>${L(q).d}</p>
            <div class="from"><span>${t('q_from')}</span>${q.retos.map(id=>`<a href="#reto-${id}">${L(byId(id)).t}</a>`).join('')}</div>
          </div></div></div></li>`; }).join('')}
      </ol>
    </div>
  </div></section>`;
}

/* ---------- navegación ---------- */
function parse(){
  const h = decodeURIComponent((location.hash||'').slice(1));
  let m;
  if(!h || h==='inicio') return {v:'inicio'};
  if(h==='perfiles') return {v:'perfiles'};
  if(h==='requisitos') return {v:'requisitos'};
  if((m=h.match(/^requisitos-(\d{1,2})$/))) return {v:'requisitos', open:+m[1]};
  if((m=h.match(/^reto-(R\d\d)(?:-(P[123]))?$/)) && byId(m[1])) return {v:'reto', id:m[1], k:m[2]||null};
  if((m=h.match(/^perfil-(P[123])$/))) return {v:'retos', perf:m[1]};
  if(h==='retos') return {v:'retos'};
  if((m=h.match(/^retos-(P[123])$/))) return {v:'retos', perf:m[1]};
  if((m=h.match(/^retos-([a-z]+)$/)) && AMBITOS[m[1]]) return {v:'retos', amb:m[1]};
  if(h==='que-es') return {v:'inicio', anchor:'#que-es'};
  return null;
}
function render(r, keepScroll){
  fromPerfil = r.v==='reto' ? (r.k||null) : null;
  route = r;
  const app = $('#app');
  if(r.v==='retos'){ const p=r.perf||null; if(p!==F.perf){ F.amb=null; F.exo=false; F.q=''; } F.perf=p; if(r.amb) F.amb=r.amb; }
  const html = r.v==='inicio'?vInicio() : r.v==='retos'?vRetos() : r.v==='reto'?vReto(r.id) : r.v==='perfiles'?vPerfiles() : r.v==='perfil'?vPerfil(r.k) : vRequisitos(r.open||1);
  app.innerHTML = `<div class="view" data-v="${r.v}">${html}</div>`;
  document.title = (r.v==='reto' ? variant(byId(r.id),r.k).t+' · ' : '') + (LANG==='pt'?'Plataforma de desafios EXOCARE':'Plataforma de retos EXOCARE');
  after(r);
  if(!keepScroll){
    if(r.anchor){ const el=$(r.anchor); if(el) el.scrollIntoView(); }
    else if(r.v==='requisitos' && r.open){ setTimeout(()=>{ const el=$('#req-'+r.open); if(el) el.scrollIntoView({behavior:RM?'auto':'smooth',block:'center'}); },350); }
    else window.scrollTo(0,0);
  }
  setActiveNav();
}
function go(){
  const r = parse();
  if(!r) return;               // ancla interna desconocida: no se toca la vista
  let done = false;
  const swap = () => { if(done) return; done = true; render(r); };
  if(document.startViewTransition && !RM && document.visibilityState==='visible'){
    try{ const vt=document.startViewTransition(swap); [vt.ready,vt.finished,vt.updateCallbackDone].forEach(p=>p&&p.catch(()=>{})); }catch(e){ swap(); }
    setTimeout(swap, 400);       // salvaguarda: la sección cambia aunque la transición no llegue a ejecutarse
  } else swap();
}
window.addEventListener('hashchange', go);

function setActiveNav(){
  const v = route.v==='reto' ? 'retos' : route.v==='perfil' ? 'perfiles' : route.v;
  $$('[data-route]').forEach(a=>{ const on=a.dataset.route===v; a.classList.toggle('on',on); if(on) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current'); });
  const act = $('#menu a.on'), ink = $('#menu-ink');
  if(ink){ if(act){ ink.style.left=act.offsetLeft+14+'px'; ink.style.width=(act.offsetWidth-28)+'px'; ink.style.opacity=1; } else ink.style.opacity=0; }
  const tabs = $$('#tabbar a'), idx = tabs.findIndex(a=>a.classList.contains('on'));
  const ti = $('#tab-ink'); if(ti) ti.style.left = (Math.max(idx,0)*25)+'%';
}

/* ---------- después de pintar: efectos y eventos ---------- */
let io, quoteTimer, nudged=false, introDone=false;
/* foto de requisitos: fundido a la foto del ámbito del reto del que procede el requisito abierto */
function reqPhoto(n){
  const fig=$('#req-fig'); if(!fig) return;
  const q=REQUISITOS.find(x=>x.n===n); if(!q) return;
  const o=REQ_IMG[n];
  const a=$('[data-layer="a"]',fig), b=$('[data-layer="b"]',fig), cap=$('#req-cap');
  const show = a.classList.contains('off') ? a : b, hide = show===a ? b : a;
  if(show.getAttribute('src')==='imagenes/'+o.f && !show.classList.contains('off')) return;
  show.loading='eager'; show.onload=null;
  show.src='imagenes/'+o.f; show.style.objectPosition=o.pos;
  const swap=()=>{ show.classList.remove('off'); hide.classList.add('off'); };
  if(show.complete) requestAnimationFrame(swap); else show.onload=swap;
  cap.classList.add('off'); setTimeout(()=>{ cap.textContent=L(q).t; cap.classList.remove('off'); },350);
}
function after(r){
  // palabras del titular, escalonadas
  const intro = document.getElementById('intro'), off = (intro && !introDone) ? 1.25 : 0;
  introDone = true;
  $$('.hero h1 .w').forEach((w,i)=>w.style.animationDelay=(.25+i*.07+off)+'s');
  if(off) [['.hero .kicker',.1],['.hero .lead',.65],['.hero .cta',.85]].forEach(([s,d])=>{ const el=$(s); if(el) el.style.animationDelay=(d+off)+'s'; });
  // aparición al hacer scroll
  if(io) io.disconnect();
  const rvs = $$('#app .rv');
  if(!('IntersectionObserver' in window) || RM){ rvs.forEach(el=>{ el.classList.add('in'); countUp(el); }); }
  else{
    io = new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); countUp(e.target); io.unobserve(e.target); } }),{threshold:.12, rootMargin:'0px 0px -40px 0px'});
    rvs.forEach(el=>io.observe(el));
    // nada se queda oculto aunque falle el observador
    setTimeout(()=>rvs.forEach(el=>{ if(el.getBoundingClientRect().top < innerHeight){ el.classList.add('in'); countUp(el); } }), 1600);
  }
  bindTilt($('#app'));
  bindMagnet();
  if(r.v==='retos' && !RM && !nudged && matchMedia('(max-width:760px)').matches){
    nudged = true;
    const row=$('#amb-row');
    if(row) setTimeout(()=>{ row.classList.add('nudge'); setTimeout(()=>row.classList.remove('nudge'),1700); },1300);
  }
  clearInterval(quoteTimer);
  if(r.v==='retos'){ renderFilters(); renderGrid(); }
  if(r.v==='requisitos' && r.open) setTimeout(()=>reqPhoto(r.open),300);
  const fl=$('#app .floaters'); if(fl) setTimeout(()=>countUp(fl),900);
  onScroll();
}
function countUp(el){
  $$('[data-count]',el).concat(el.matches('[data-count]')?[el]:[]).forEach(c=>{
    if(c.dataset.done) return; c.dataset.done=1;
    const n=+c.dataset.count, suf=c.dataset.suf||'', fmt=v=>v.toLocaleString(LANG==='pt'?'pt-PT':'es-ES')+suf;
    if(RM){ c.textContent=fmt(n); return; }
    const t0=performance.now(), dur=2000;
    (function f(now){ const p=Math.min((now-t0)/dur,1), e=p===1?1:1-Math.pow(2,-10*p); c.textContent=fmt(Math.round(e*n)); if(p<1) requestAnimationFrame(f); })(t0);
  });
}
function bindTilt(root){
  if(RM || !FINE || !root) return;
  $$('.tilt',root).forEach(el=>{
    if(el._tilt) return; el._tilt=1;
    el.addEventListener('pointermove',e=>{
      const r=el.getBoundingClientRect(), x=(e.clientX-r.left)/r.width, y=(e.clientY-r.top)/r.height;
      el.style.transition='transform .12s linear, box-shadow .45s';
      el.style.transform=`perspective(900px) rotateX(${((.5-y)*8).toFixed(2)}deg) rotateY(${((x-.5)*10).toFixed(2)}deg) translateY(-8px)`;
      el.style.setProperty('--gx',(x*100)+'%'); el.style.setProperty('--gy',(y*100)+'%');
    });
    el.addEventListener('pointerleave',()=>{ el.style.transition=''; el.style.transform=''; });
  });
}
function bindMagnet(){
  if(RM || !FINE) return;
  $$('.mag').forEach(b=>{
    if(b._mag) return; b._mag=1;
    b.addEventListener('pointermove',e=>{ const r=b.getBoundingClientRect(); b.style.transform=`translate(${((e.clientX-r.left-r.width/2)*.18).toFixed(1)}px,${((e.clientY-r.top-r.height/2)*.3).toFixed(1)}px)`; });
    b.addEventListener('pointerleave',()=>{ b.style.transform=''; });
  });
}
function bindQuote(){
  const box=$('#quote'); if(!box) return;
  const ids=QUOTE_IDS, txt=$('#q-txt'), link=$('#q-link'), dots=$$('.q-dots button');
  let i=0, paused=false;
  const show = n => {
    i=(n+ids.length)%ids.length;
    txt.classList.add('out');
    setTimeout(()=>{ txt.textContent=firstSentence(L(byId(ids[i])).imp); link.href='#reto-'+ids[i]; txt.classList.remove('out'); },RM?0:450);
    dots.forEach((d,k)=>{ d.setAttribute('aria-current', String(k===i)); });
  };
  dots.forEach((d,k)=>d.addEventListener('click',()=>{ show(k); restart(); }));
  const restart = () => { clearInterval(quoteTimer); if(!RM) quoteTimer=setInterval(()=>{ if(!paused) show(i+1); },7000); };
  box.addEventListener('pointerenter',()=>{ paused=true; box.classList.add('paused'); });
  box.addEventListener('pointerleave',()=>{ paused=false; box.classList.remove('paused'); });
  restart();
}

/* ---------- clics de la página ---------- */
document.addEventListener('click',e=>{
  const sc=e.target.closest('[data-scroll]'); if(sc){ const el=$(sc.dataset.scroll); if(el) el.scrollIntoView({behavior:RM?'auto':'smooth'}); return; }
  const am=e.target.closest('.amb[data-amb]'); if(am){ F.amb = am.dataset.amb || null; renderFilters(); renderGrid(); return; }
  const pf=e.target.closest('.pill[data-perf]'); if(pf){ F.perf = F.perf===pf.dataset.perf ? null : pf.dataset.perf; renderFilters(); renderGrid(); return; }
  const ex=e.target.closest('.pill[data-exo]'); if(ex){ F.exo=!F.exo; renderFilters(); renderGrid(); return; }
  if(e.target.closest('#reset')){ F.amb=null; F.exo=false; F.q=''; renderFilters(); renderGrid(); return; }
  const rq=e.target.closest('.rq'); if(rq){ const li=rq.closest('.req'), on=!li.classList.contains('open'); li.classList.toggle('open',on); rq.setAttribute('aria-expanded',on); if(on) reqPhoto(+li.id.slice(4)); return; }
  const ev=e.target.closest('#evb'); if(ev){ const w=$('#evw'), on=!w.classList.contains('open'); w.classList.toggle('open',on); ev.setAttribute('aria-expanded',on); const r=byId(route.id); $('span',ev).textContent = on ? t('ev_hide') : t('ev_show')($$('#evw li').length); return; }
  const sb=e.target.closest('.src-b'); if(sb){ const p=$('#src-'+sb.dataset.src), on=p.hidden; p.hidden=!on; sb.setAttribute('aria-expanded',on); return; }
  const cp=e.target.closest('[data-copy]'); if(cp){ copyMail(); return; }
  const lg=e.target.closest('.lang button'); if(lg){ setLang(lg.dataset.lang); return; }
});
function copyMail(){
  const ok=()=>toast(t('copied'));
  const fail=()=>{ const s=getSelection(), r=document.createRange(); r.selectNodeContents($('#mail')); s.removeAllRanges(); s.addRange(r); toast(t('copy_fail')); };
  try{ navigator.clipboard.writeText(EMAIL).then(ok,fail); }catch(e){ fail(); }
}
let toastT;
function toast(msg){ const el=$('#toast'); el.textContent=msg; el.classList.add('on'); clearTimeout(toastT); toastT=setTimeout(()=>el.classList.remove('on'),2200); }
document.addEventListener('keydown',e=>{
  if(route.v!=='reto' || e.target.closest('input,textarea')) return;
  const a = $(`.f-nav a[data-key="${e.key}"]`); if(a){ location.hash = a.getAttribute('href'); }
});

/* ---------- idioma ---------- */
function staticTexts(){
  document.documentElement.lang = LANG==='pt'?'pt-PT':'es';
  $$('[data-i]').forEach(el=>{ const v=t(el.dataset.i); if(typeof v==='string') el.textContent=v; });
  $$('[data-icon]').forEach(el=>el.innerHTML=ico(el.dataset.icon));
  $$('.lang button').forEach(b=>b.setAttribute('aria-pressed', String(b.dataset.lang===LANG)));
}
function setLang(l){
  if(l===LANG) return;
  LANG=l; try{ localStorage.setItem('exocare-lang',l); }catch(e){}
  staticTexts(); render(route, true);
}

/* ---------- scroll: barra, cabecera y profundidad de la foto ---------- */
let ticking=false;
function onScroll(){
  const d=document.documentElement, max=Math.max(1,d.scrollHeight-innerHeight);
  $('#progress').style.transform=`scaleX(${Math.min(1,scrollY/max).toFixed(4)})`;
  const head=$('#head'); head.classList.toggle('scrolled', scrollY>40);
  d.style.setProperty('--headH', head.offsetHeight+'px');
  if(!RM){ const hi=$('#app .hero-img'); if(hi){ const r=hi.parentElement.getBoundingClientRect(); if(r.bottom>0) hi.style.transform=`translate3d(0,${Math.round(-r.top*.28)}px,0)`; } }
  ticking=false;
}
window.addEventListener('scroll',()=>{ if(!ticking){ ticking=true; requestAnimationFrame(onScroll); } },{passive:true});
window.addEventListener('resize',()=>{ onScroll(); setActiveNav(); });

/* ---------- arranque ---------- */
staticTexts();
render(parse()||{v:'inicio'}, false);
if(document.fonts && document.fonts.ready) document.fonts.ready.then(setActiveNav);
})();
