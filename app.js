'use strict';

const ADEM_ROOT = 'https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/';
const ADEM_VER = '?ver=1791159802098';

const seedResources = [
  // Mathématiques : les quatre fascicules ADEM sont des cahiers d'exercices.
  {id:'math-adem-6e',title:'Fascicule d’exercices de mathématiques · 6e',grade:'6e',subject:'Mathématiques',kind:'Exercices',description:'Activités numériques et géométriques couvrant le programme de mathématiques de sixième. 76 pages.',source:'ADEM-Dakar · APPRENDRE / AUF',url:'https://apprendre.auf.org/wp-content/uploads/2021/08/fascicule_adem_math_6e.pdf',personal:false},
  {id:'math-adem-5e',title:'Fascicule d’exercices de mathématiques · 5e',grade:'5e',subject:'Mathématiques',kind:'Exercices',description:'Activités numériques et géométriques couvrant le programme de mathématiques de cinquième. 73 pages.',source:'ADEM-Dakar · APPRENDRE / AUF',url:'https://apprendre.auf.org/wp-content/uploads/2021/08/fascicule_adem_math_5e.pdf',personal:false},
  {id:'math-adem-4e',title:'Fascicule d’exercices de mathématiques · 4e',grade:'4e',subject:'Mathématiques',kind:'Exercices',description:'Activités numériques et géométriques couvrant le programme de mathématiques de quatrième. 63 pages.',source:'ADEM-Dakar · APPRENDRE / AUF',url:'https://apprendre.auf.org/wp-content/uploads/2021/08/fascicule_adem_math_4e.pdf',personal:false},
  {id:'math-adem-3e',title:'Fascicule d’exercices de mathématiques · 3e',grade:'3e',subject:'Mathématiques',kind:'Exercices',description:'Activités numériques et géométriques couvrant le programme de mathématiques de troisième. 66 pages.',source:'ADEM-Dakar · APPRENDRE / AUF',url:'https://apprendre.auf.org/wp-content/uploads/2021/08/fascicule_adem_math_3e.pdf',personal:false},
  {id:'math-babacar-3e',title:'Réussir les maths au BFEM · Cours, exercices et corrigés',grade:'3e',subject:'Mathématiques',kind:'Cours et exercices',description:'Document complet sur le programme de troisième : résumés de cours par chapitre, séries d’exercices avec corrections, épreuves blanches et sujets de concours.',source:'Babacar Diarra · SunuMaths',url:'https://sunumaths.com/wp-content/uploads/2021/03/cours-3ieme-et-exercices-Babacar-DIARRA.pdf',personal:false},

  // Physique-Chimie : uniquement en 4e et 3e dans le parcours collège sénégalais.
  {id:'pc-adem-3e',title:'Fascicule ADEM de sciences physiques · 3e',grade:'3e',subject:'Physique-Chimie',kind:'Cours et exercices',description:'Support ADEM-Dakar de sciences physiques pour la troisième : optique, forces, travail, électricité, solutions, acides et bases.',source:'ADEM-Dakar · Sénégal',url:ADEM_ROOT+'ADEM_PC_3e.pdf?ver=1791159802009',personal:false},
  {id:'pc-exos-phys-3e',title:'Séries d’exercices de physique · 3e',grade:'3e',subject:'Physique-Chimie',kind:'Exercices',description:'Entraînement de physique pour la classe de troisième : lentilles, lumière, forces, électricité et résistance.',source:'IREMPT Sénégal',url:ADEM_ROOT+'Exercice_physique_3e_irempt.pdf?ver=1791159802009',personal:false},
  {id:'pc-exos-chim-3e',title:'Séries d’exercices de chimie · 3e',grade:'3e',subject:'Physique-Chimie',kind:'Exercices',description:'Séries d’exercices de chimie adaptées à la classe de troisième.',source:'IREMPT Sénégal',url:ADEM_ROOT+'Exercice_chimie_3e_irempt.pdf?ver=1791159802009',personal:false},
  {id:'pc-adem-4e-auf',title:'Fascicule d’exercices de sciences physiques et chimie · 4e',grade:'4e',subject:'Physique-Chimie',kind:'Exercices',description:'Activités expérimentales, séries d’exercices et activités d’intégration couvrant le programme de physique-chimie de quatrième. 55 pages.',source:'ADEM-Dakar · APPRENDRE / AUF',url:'https://apprendre.auf.org/wp-content/uploads/2021/08/fascicule_adem_sciences_physiques_4e.pdf',personal:false},
  {id:'pc-wahab-4e',title:'Fascicule complémentaire de sciences physiques · 4e',grade:'4e',subject:'Physique-Chimie',kind:'Cours et exercices',description:'Support complémentaire de sciences physiques pour la classe de quatrième.',source:'Wahab Diop · Sénégal',url:ADEM_ROOT+'fascicule-sciences-physiques-4eme-_wahabdiop.pdf?ver=1791159802067',personal:false},

  // SVT : fascicules ADEM par niveau et fascicules de cours IA Kédougou.
  {id:'svt-adem-6e',title:'Fascicule ADEM de SVT · 6e',grade:'6e',subject:'SVT',kind:'Cours et exercices',description:'Fascicule sénégalais de sciences de la vie et de la Terre pour la sixième.',source:'ADEM-Dakar · SENPROF',url:'https://senprof.education.sn/ADEM/SVT%206e/res/SVT-6e.pdf',personal:false},
  {id:'svt-adem-5e',title:'Fascicule ADEM de SVT · 5e',grade:'5e',subject:'SVT',kind:'Cours et exercices',description:'Leçons, thèmes et exercices de maîtrise des connaissances, de méthode et d’intégration pour la cinquième. 50 pages.',source:'ADEM-Dakar · APPRENDRE / AUF',url:'https://apprendre.auf.org/wp-content/uploads/2021/08/fascicule_adem-_svt_5e.pdf',personal:false},
  {id:'svt-adem-4e',title:'Fascicule ADEM de SVT · 4e',grade:'4e',subject:'SVT',kind:'Cours et exercices',description:'Leçons et activités de sciences de la vie et de la Terre pour la quatrième. 70 pages.',source:'ADEM-Dakar · APPRENDRE / AUF',url:'https://apprendre.auf.org/wp-content/uploads/2021/08/fascicule_adem-_svt_4e.pdf',personal:false},
  {id:'svt-adem-3e',title:'Fascicule ADEM de SVT · 3e',grade:'3e',subject:'SVT',kind:'Cours et exercices',description:'Leçons et activités de sciences de la vie et de la Terre pour la troisième. 86 pages.',source:'ADEM-Dakar · APPRENDRE / AUF',url:'https://apprendre.auf.org/wp-content/uploads/2021/08/fascicule_adem-_svt_3e.pdf',personal:false},
  ...[
    ['6e','Cours de SVT · 6e','Fascicule de cours préparé par la cellule SVT de l’Inspection d’Académie de Kédougou.','FASCICULE%20SVT%20COURS%206%20i%C3%A8me.pdf'],
    ['5e','Cours de SVT · 5e','Fascicule de cours de SVT pour la classe de cinquième.','FASCICULE%20SVT%20COURS%205%20i%C3%A8me.pdf'],
    ['4e','Cours de SVT · 4e','Fascicule de cours de SVT pour la classe de quatrième.','FASCICULE%20SVT%20COURS%204%20i%C3%A8me.pdf'],
    ['3e','Cours de SVT · 3e','Fascicule de cours de SVT pour la classe de troisième.','FASCICULE%20SVT%20COURS%203%20IEME.pdf']
  ].map(([grade,title,description,file])=>({id:'svt-cours-'+grade, title, grade, subject:'SVT', kind:'Cours', description, source:'Inspection d’Académie de Kédougou · Sénégal', url:ADEM_ROOT+file+ADEM_VER, personal:false})),

  // Français : fascicule commun aux quatre classes du collège.
  {id:'fr-adem-college',title:'200 exercices pour bien écrire · Français 6e à 3e',grade:'6e–3e',subject:'Français',kind:'Exercices',description:'Fascicule ADEM de travaux dirigés et de remédiation : 200 exercices organisés pour les quatre niveaux du collège. 88 pages.',source:'ADEM-Dakar · APPRENDRE / AUF',url:'https://apprendre.auf.org/wp-content/uploads/2021/08/fascicule_adem_francais_college.pdf',personal:false}
];

const state = {
  resources: [],
  tasks: [],
  favorites: [],
  completed: [],
  userName: 'Élève',
  taskFilter: 'all',
  fileSubjectFilter: 'all',
  libraryPath: {grade:'',subject:'',category:''}
};
const STORAGE_KEY = 'mon-espace-college-v1';
let toastTimer;

function readState(){
  try{
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    state.resources = Array.isArray(saved.resources) ? saved.resources : [];
    state.tasks = Array.isArray(saved.tasks) ? saved.tasks : [];
    state.favorites = Array.isArray(saved.favorites) ? saved.favorites : [];
    state.completed = Array.isArray(saved.completed) ? saved.completed : [];
    state.userName = typeof saved.userName === 'string' ? saved.userName : 'Élève';
  }catch(err){ console.warn('Sauvegarde locale illisible, démarrage avec les valeurs par défaut.', err); }
}
function persist(){
  try{
    localStorage.setItem(STORAGE_KEY, JSON.stringify({resources:state.resources,tasks:state.tasks,favorites:state.favorites,completed:state.completed,userName:state.userName}));
  }catch(err){ showToast('Espace de stockage presque plein. Exporte tes données.'); console.error(err); }
}
function isPdfUrl(value){
  return typeof value==='string' && /\.pdf(?:$|[?#])/i.test(value.trim());
}
function allResources(){
  return [...seedResources, ...state.resources].filter(item =>
    (item.fileId && /\.pdf$/i.test(item.fileName||'')) || isPdfUrl(item.url)
  );
}
function esc(value){ return String(value ?? '').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function shortDate(dateStr){
  if(!dateStr) return '';
  const d = new Date(`${dateStr}T12:00:00`);
  return new Intl.DateTimeFormat('fr-FR',{day:'2-digit',month:'short'}).format(d).replace('.','');
}
function subjectClass(subject){ return subject === 'Mathématiques' ? 'subject-math' : subject === 'Physique-Chimie' ? 'subject-pc' : subject === 'SVT' ? 'subject-svt' : subject === 'Français' ? 'subject-fr' : ''; }
function subjectSymbol(subject){ return subject === 'Mathématiques' ? '∑' : subject === 'Physique-Chimie' ? '⚗' : subject === 'SVT' ? '⌁' : subject === 'Français' ? 'F' : '▤'; }
function isFavorite(id){ return state.favorites.includes(id); }
function isCompleted(id){ return state.completed.includes(id); }
function isPersonal(item){ return Boolean(item.personal); }

// Local file store: file bytes stay in this browser (IndexedDB).
function openFileDB(){
  return new Promise((resolve,reject)=>{
    if(!('indexedDB' in window)){ reject(new Error('IndexedDB indisponible')); return; }
    const request = indexedDB.open('mon-espace-college-files',1);
    request.onupgradeneeded = ()=>{ const db=request.result; if(!db.objectStoreNames.contains('files')) db.createObjectStore('files',{keyPath:'id'}); };
    request.onsuccess = ()=>resolve(request.result);
    request.onerror = ()=>reject(request.error || new Error('Impossible d’ouvrir la base de fichiers'));
  });
}
async function saveLocalFile(file){
  const db=await openFileDB();
  const id=`file-${Date.now()}-${Math.random().toString(36).slice(2,8)}`;
  await new Promise((resolve,reject)=>{ const tx=db.transaction('files','readwrite'); tx.objectStore('files').put({id,name:file.name,type:file.type,size:file.size,blob:file,createdAt:Date.now()}); tx.oncomplete=resolve; tx.onerror=()=>reject(tx.error); });
  db.close();
  return id;
}
async function getLocalFile(id){
  const db=await openFileDB();
  const result=await new Promise((resolve,reject)=>{ const tx=db.transaction('files','readonly'); const req=tx.objectStore('files').get(id); req.onsuccess=()=>resolve(req.result); req.onerror=()=>reject(req.error); });
  db.close(); return result;
}
async function deleteLocalFile(id){
  const db=await openFileDB();
  await new Promise((resolve,reject)=>{ const tx=db.transaction('files','readwrite'); tx.objectStore('files').delete(id); tx.oncomplete=resolve; tx.onerror=()=>reject(tx.error); });
  db.close();
}

function showToast(message){
  const el=document.getElementById('toast'); el.textContent=message; el.classList.add('show'); clearTimeout(toastTimer); toastTimer=setTimeout(()=>el.classList.remove('show'),2600);
}
function goTo(){
  renderLibrary();
  window.scrollTo({top:0,behavior:'smooth'});
}
let activePdfObjectUrl='';
function showPdfViewer(src,title){
  const modal=document.getElementById('pdfViewerModal');
  document.getElementById('pdfViewerTitle').textContent=title||'Document PDF';
  document.getElementById('pdfFrame').src=src;
  modal.classList.remove('hidden');
  document.body.style.overflow='hidden';
}
function closePdfViewer(){
  const modal=document.getElementById('pdfViewerModal');
  document.getElementById('pdfFrame').src='about:blank';
  modal.classList.add('hidden');
  document.body.style.overflow='';
  if(activePdfObjectUrl){URL.revokeObjectURL(activePdfObjectUrl);activePdfObjectUrl='';}
}
function resourceCard(item){
  const action = item.fileId
    ? `<button class="resource-open" data-open-file="${esc(item.fileId)}">Lire le PDF <span>→</span></button>`
    : isPdfUrl(item.url)
      ? `<button class="resource-open" data-open-pdf="${esc(item.url)}">Lire le PDF <span>→</span></button>`
      : '<span class="source-label">PDF indisponible</span>';
  return `<article class="resource-card ${subjectClass(item.subject)}">
    <div class="resource-card-top"><span class="resource-symbol">${subjectSymbol(item.subject)}</span><span class="resource-grade">${esc(item.grade||'—')}</span></div>
    <h4>${esc(item.title)}</h4><p>${esc(item.description||item.notes||'Document PDF.')}</p>
    <div class="resource-meta"><span class="meta-chip">${esc(item.subject)}</span><span class="meta-chip">${esc(item.kind||'Autre')}</span></div>
    <div class="resource-footer"><span class="source-label" title="${esc(item.source||'Document PDF')}">${esc(item.source||'Document PDF')}</span>${action}</div>
    ${isPersonal(item)?`<button class="delete-resource" data-delete-resource="${esc(item.id)}">Supprimer ce PDF</button>`:''}
  </article>`;
}
const LIBRARY_SUBJECTS = [
  {name:'Mathématiques',description:'Nombres, calcul, géométrie et résolution de problèmes.'},
  {name:'Français',description:'Grammaire, expression écrite, lecture et rédaction.'},
  {name:'Physique-Chimie',description:'Matière, énergie, électricité et transformations · 4e et 3e.'},
  {name:'SVT',description:'Sciences de la vie, de la Terre et environnement.'}
];
const LIBRARY_CATEGORIES = [
  {name:'Cours',icon:'▤',description:'Leçons, fiches et fascicules de cours.'},
  {name:'Exercices',icon:'✎',description:'Applications, séries et entraînements.'},
  {name:'Devoirs',icon:'✓',description:'Devoirs à la maison et devoirs surveillés.'},
  {name:'Examens',icon:'▦',description:'Compositions, examens blancs et évaluations.'},
  {name:'Épreuves',icon:'▣',description:'Sujets d’examen et annales, dont le BFEM.'},
  {name:'Autres',icon:'＋',description:'Les autres documents que tu ajoutes.'}
];
function libraryCategory(item){
  const kind=String(item.kind||'Autre').toLocaleLowerCase('fr-FR').normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  if(kind.includes('cours')) return 'Cours';
  if(kind.includes('exercice')) return 'Exercices';
  if(kind.includes('fascicule')) return 'Cours';
  if(kind.includes('devoir')) return 'Devoirs';
  if(kind.includes('examen')||kind.includes('composition')) return 'Examens';
  if(kind.includes('epreuve')||kind.includes('annale')||kind.includes('bfem')) return 'Épreuves';
  return 'Autres';
}
function isInLibraryGrade(item,grade){
  return grade==='Toutes' || item.grade===grade || item.grade==='6e–3e' || item.grade==='6e-3e';
}
function renderLibrary(){
  const query=(document.getElementById('searchInput')?.value||'').trim().toLocaleLowerCase('fr-FR');
  const path=state.libraryPath;
  const browser=document.getElementById('libraryBrowser');
  const results=document.getElementById('libraryResults');
  const empty=document.getElementById('libraryEmpty');
  const back=document.getElementById('libraryBackBtn');
  const breadcrumb=document.getElementById('libraryBreadcrumb');
  const intro=document.getElementById('libraryIntro');
  const resources=allResources();

  if(query){
    const matches=resources.filter(item=>[item.title,item.description,item.subject,item.grade,item.source,item.kind].join(' ').toLocaleLowerCase('fr-FR').includes(query));
    browser.classList.add('hidden');
    results.classList.remove('hidden');
    back.classList.add('hidden');
    breadcrumb.innerHTML='<button type="button" data-library-step="root">Bibliothèque</button><span>›</span><strong>Recherche</strong>';
    intro.innerHTML='<div class="eyebrow">RECHERCHE GLOBALE</div><h2>Résultats de recherche</h2><p>'+matches.length+' document'+(matches.length>1?'s':'')+' trouvé'+(matches.length>1?'s':'')+'</p>';
    results.innerHTML=matches.map(item=>resourceCard(item)).join('');
    empty.classList.toggle('hidden',matches.length>0);
    if(!matches.length) empty.innerHTML='<div class="empty-illustration">⌕</div><h3>Aucun résultat</h3><p>Essaie un autre mot-clé ou efface la recherche pour parcourir les classes.</p>';
    return;
  }

  results.classList.add('hidden');
  browser.classList.remove('hidden');
  empty.classList.add('hidden');
  back.classList.toggle('hidden',!path.grade);
  const crumbs=['<button type="button" data-library-step="root">Bibliothèque</button>'];
  if(path.grade) crumbs.push('<button type="button" data-library-step="grade">'+(path.grade==='Toutes'?'Tous niveaux':esc(path.grade))+'</button>');
  if(path.subject) crumbs.push('<button type="button" data-library-step="subject">'+esc(path.subject)+'</button>');
  if(path.category) crumbs.push('<strong>'+esc(path.category)+'</strong>');
  breadcrumb.innerHTML=crumbs.join('<span>›</span>');

  if(!path.grade && !path.subject){
    intro.innerHTML='<div class="eyebrow">PARCOURS 1 · PAR NIVEAU</div><h2>Choisis ton niveau</h2><p>Retrouve les ressources associées à la 6e, 5e, 4e ou 3e.</p>';
    browser.innerHTML='<div class="library-tile-grid grade-grid">'+['6e','5e','4e','3e'].map(grade=>{
      const count=resources.filter(item=>isInLibraryGrade(item,grade)).length;
      return '<button type="button" class="library-tile class-tile" data-library-grade="'+grade+'"><span class="library-tile-main"><span class="library-tile-badge">'+grade+'</span><span class="library-tile-copy"><strong>Classe de '+grade+'</strong><small>'+(grade==='6e'||grade==='5e'?'Mathématiques · Français · SVT':'Mathématiques · Français · Physique-Chimie · SVT')+'</small></span></span><span class="library-tile-tail"><b>'+count+'</b><small>ressources</small><span>→</span></span></button>';
    }).join('')+'</div><div class="library-start-actions"><button type="button" class="secondary-button" data-library-by-subject>Explorer par matière</button><button type="button" class="secondary-button" data-library-all>Toutes les ressources ('+resources.length+')</button></div>';
    return;
  }

  if(!path.subject){
    const count=resources.filter(item=>isInLibraryGrade(item,path.grade)).length;
    const allLevels=path.grade==='Toutes';
    intro.innerHTML='<div class="eyebrow">'+(allLevels?'PARCOURS 2 · TOUS LES NIVEAUX':'ÉTAPE 2 · CLASSE '+esc(path.grade.toUpperCase()))+'</div><h2>Choisis une matière</h2><p>'+count+' ressource'+(count>1?'s':'')+' disponible'+(count>1?'s':'')+(allLevels?' pour l’ensemble du collège.':' pour cette classe.')+' Tu peux explorer chaque matière, même si tu étudies seul.</p>';
    const visibleSubjects=LIBRARY_SUBJECTS.filter(subject=>subject.name!=='Physique-Chimie'||allLevels||['4e','3e'].includes(path.grade));
    browser.innerHTML='<div class="library-tile-grid subject-grid">'+visibleSubjects.map(subject=>{
      const total=resources.filter(item=>isInLibraryGrade(item,path.grade)&&item.subject===subject.name).length;
      return '<button type="button" class="library-tile subject-tile '+subjectClass(subject.name)+'" data-library-subject="'+esc(subject.name)+'"><span class="library-tile-main"><span class="library-tile-symbol">'+subjectSymbol(subject.name)+'</span><span class="library-tile-copy"><strong>'+esc(subject.name)+'</strong><small>'+esc(subject.description)+'</small></span></span><span class="library-tile-tail"><b>'+total+'</b><small>documents</small><span>→</span></span></button>';
    }).join('')+'</div>';
    return;
  }

  if(!path.category){
    intro.innerHTML='<div class="eyebrow">ÉTAPE 3 · '+esc(path.grade.toUpperCase())+' / '+esc(path.subject.toUpperCase())+'</div><h2>Que veux-tu consulter ?</h2><p>Les documents sont rangés par type. Ouvre une rubrique pour voir ses ressources ou en ajouter.</p>';
    browser.innerHTML='<div class="library-tile-grid category-grid">'+LIBRARY_CATEGORIES.map(category=>{
      const total=resources.filter(item=>isInLibraryGrade(item,path.grade)&&item.subject===path.subject&&libraryCategory(item)===category.name).length;
      return '<button type="button" class="library-tile category-tile" data-library-category="'+esc(category.name)+'"><span class="library-tile-main"><span class="library-tile-symbol category-symbol">'+category.icon+'</span><span class="library-tile-copy"><strong>'+esc(category.name)+'</strong><small>'+esc(category.description)+'</small></span></span><span class="library-tile-tail"><b>'+total+'</b><small>documents</small><span>→</span></span></button>';
    }).join('')+'</div>';
    return;
  }

  const items=resources.filter(item=>isInLibraryGrade(item,path.grade)&&item.subject===path.subject&&libraryCategory(item)===path.category);
  intro.innerHTML='<div class="eyebrow">DOCUMENTS · '+esc(path.grade.toUpperCase())+' / '+esc(path.subject.toUpperCase())+'</div><h2>'+esc(path.category)+'</h2><p>'+items.length+' document'+(items.length>1?'s':'')+' dans cette rubrique.</p>';
  browser.innerHTML='<div class="library-type-actions"><button type="button" class="secondary-button" data-library-back>← Retour aux rubriques</button><button type="button" class="primary-button" data-add-to-library>＋ Ajouter un document</button></div>'+(items.length?'<div class="resource-grid library-resource-grid">'+items.map(item=>resourceCard(item)).join('')+'</div>':'');
  empty.classList.toggle('hidden',items.length>0);
  if(!items.length) empty.innerHTML='<div class="empty-illustration">▤</div><h3>Cette rubrique est encore vide</h3><p>Tu peux y ajouter un cours, un devoir ou un sujet de ton établissement.</p><button type="button" class="primary-button" data-add-to-library>＋ Ajouter un document</button>';
}
function renderUpcoming(){
  const pending=state.tasks.filter(t=>!t.done).sort((a,b)=>a.dueDate.localeCompare(b.dueDate)).slice(0,3);
  const el=document.getElementById('upcomingPreview');
  if(!pending.length){el.innerHTML='<div class="empty-state small-empty"><div class="empty-illustration">✓</div><h3>Rien de prévu pour le moment</h3><p>Ajoute ton prochain devoir ou examen dans l’agenda.</p></div>';return;}
  el.innerHTML=pending.map(t=>{const d=new Date(`${t.dueDate}T12:00:00`);return `<div class="upcoming-item"><div class="date-tile"><strong>${d.getDate()}</strong><small>${new Intl.DateTimeFormat('fr-FR',{month:'short'}).format(d).replace('.','')}</small></div><div class="upcoming-copy"><strong>${esc(t.title)}</strong><small>${esc(t.subject)} · ${esc(t.grade)}</small></div><span class="task-kind">${esc(t.kind)}</span></div>`;}).join('');
}
function renderProgress(){
  const resources=allResources(); const total=resources.length; const done=resources.filter(r=>isCompleted(r.id)).length; const percent=total?Math.round(done/total*100):0;
  document.getElementById('progressPercent').textContent=`${percent}%`; document.getElementById('progressBar').style.width=`${percent}%`;
  document.getElementById('progressMessage').textContent=done?`${done} ressource${done>1?'s':''} étudiée${done>1?'s':''} sur ${total}. Continue régulièrement.`:'Coche une ressource quand tu l’as étudiée pour suivre tes progrès.';
  const counts=['Mathématiques','Physique-Chimie','SVT'].map(s=>{const arr=resources.filter(r=>r.subject===s);const complete=arr.filter(r=>isCompleted(r.id)).length;return {s,percent:arr.length?Math.round(complete/arr.length*100):0,complete,total:arr.length};});
  document.getElementById('subjectProgress').innerHTML=counts.map(x=>`<div class="subject-row"><span>${x.s==='Mathématiques'?'Maths':x.s==='Physique-Chimie'?'Physique-Chimie':'SVT'}</span><b><i style="width:${x.percent}%"></i></b><small>${x.complete}/${x.total}</small></div>`).join('');
}
function renderDashboard(){
  document.getElementById('libraryCount').textContent=allResources().length;
  renderFilesCounts();
}
function renderTasks(){
  const list=document.getElementById('taskList');
  const items=state.tasks.filter(t=>state.taskFilter==='all'||(state.taskFilter==='open'&&!t.done)||(state.taskFilter==='done'&&t.done)).sort((a,b)=>a.dueDate.localeCompare(b.dueDate));
  list.innerHTML=items.map(t=>{const overdue=!t.done&&t.dueDate<new Date().toISOString().slice(0,10);return `<div class="task-item"><input class="task-check" type="checkbox" data-task-done="${esc(t.id)}" ${t.done?'checked':''} aria-label="Tâche terminée"><div class="task-copy"><strong>${esc(t.title)}</strong><small>${esc(t.kind)} · ${esc(t.subject)} · ${esc(t.grade)}${t.notes?' · '+esc(t.notes):''}</small></div><span class="task-date ${overdue?'overdue':''}">${overdue?'En retard · ':''}${shortDate(t.dueDate)}</span><button class="delete-task" data-delete-task="${esc(t.id)}" aria-label="Supprimer la tâche">×</button></div>`;}).join('');
  document.getElementById('tasksEmpty').classList.toggle('hidden',items.length>0);
  document.querySelectorAll('[data-task-filter]').forEach(b=>b.classList.toggle('active',b.dataset.taskFilter===state.taskFilter));
}
function renderFilesCounts(){
  const personal=state.resources.filter(r=>(r.fileId&&/\.pdf$/i.test(r.fileName||''))||isPdfUrl(r.url));
  const by=s=>personal.filter(r=>r.subject===s).length;
  document.getElementById('folderMath').textContent=`${by('Mathématiques')} document${by('Mathématiques')>1?'s':''}`;
  document.getElementById('folderPC').textContent=`${by('Physique-Chimie')} document${by('Physique-Chimie')>1?'s':''}`;
  document.getElementById('folderSVT').textContent=`${by('SVT')} document${by('SVT')>1?'s':''}`;
  document.getElementById('folderOther').textContent=`${by('Autre')} document${by('Autre')>1?'s':''}`;
}
function renderFiles(){
  const items=state.resources.filter(r=>((r.fileId&&/\.pdf$/i.test(r.fileName||''))||isPdfUrl(r.url))&&(state.fileSubjectFilter==='all'||r.subject===state.fileSubjectFilter));
  document.getElementById('personalFilesGrid').innerHTML=items.map(item=>resourceCard(item)).join('');
  document.getElementById('filesEmpty').classList.toggle('hidden',items.length>0);
  renderFilesCounts();
}
function renderFavorites(){
  const resources=allResources().filter(r=>isFavorite(r.id));
  document.getElementById('favoritesGrid').innerHTML=resources.map(item=>resourceCard(item)).join('');
  document.getElementById('favoritesEmpty').classList.toggle('hidden',resources.length>0);
}
let returnToLibraryAfterSave=false;
function openModal(prefill={}){
  document.getElementById('resourceModal').classList.remove('hidden');
  document.body.style.overflow='hidden';
  returnToLibraryAfterSave=Boolean(prefill.returnToLibrary);
  const form=document.getElementById('resourceForm');
  if(prefill.grade) form.elements.grade.value=prefill.grade;
  if(prefill.subject) form.elements.subject.value=prefill.subject;
  if(prefill.kind) form.elements.kind.value=prefill.kind;
}
function closeModal(){document.getElementById('resourceModal').classList.add('hidden');document.body.style.overflow='';}
function updateUserName(){
  const newName=window.prompt('Quel prénom afficher dans ton espace ?',state.userName);
  if(newName===null)return;
  const cleaned=newName.trim().slice(0,24); state.userName=cleaned||'Élève';persist();setUserName();showToast('Nom mis à jour.');
}
function setUserName(){document.getElementById('profileName').textContent=state.userName;document.getElementById('welcomeName').textContent=state.userName==='Élève'?'!':state.userName+' !';document.querySelector('.avatar').textContent=(state.userName[0]||'É').toLocaleUpperCase('fr-FR');}
function downloadFile(name,content,mime){const blob=new Blob([content],{type:mime});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1500);}
function exportBackup(){
  const data={app:'Mon Espace Collège',version:1,exportedAt:new Date().toISOString(),notice:'La sauvegarde JSON contient les fiches, tâches et préférences. Les fichiers binaires importés dans le navigateur ne sont pas inclus.',resources:state.resources.map(({fileId,...r})=>r),tasks:state.tasks,favorites:state.favorites,completed:state.completed,userName:state.userName};
  downloadFile('sauvegarde-mon-espace-college.json',JSON.stringify(data,null,2),'application/json');
  showToast('Sauvegarde JSON exportée. Les fichiers eux-mêmes sont à conserver séparément.');
}
function importBackup(file){
  const reader=new FileReader();reader.onload=()=>{try{const data=JSON.parse(reader.result);if(!data||!Array.isArray(data.tasks)||!Array.isArray(data.resources))throw new Error('Format inconnu');state.resources=data.resources.map(r=>({...r,personal:true,fileId:undefined}));state.tasks=Array.isArray(data.tasks)?data.tasks:[];state.favorites=Array.isArray(data.favorites)?data.favorites:[];state.completed=Array.isArray(data.completed)?data.completed:[];state.userName=typeof data.userName==='string'?data.userName:'Élève';persist();setUserName();renderAll();showToast('Sauvegarde importée. Réajoute séparément tes fichiers locaux si nécessaire.');}catch(e){showToast('Ce fichier ne semble pas être une sauvegarde compatible.');}};reader.readAsText(file);
}
function renderAll(){renderLibrary();}

// Interactions de la bibliothèque uniquement.
document.addEventListener('click',async event=>{
 if(event.target.closest('#globalSearchBtn')){document.getElementById('searchInput').focus();window.scrollTo({top:0,behavior:'smooth'});return;}
 if(event.target.closest('[data-open-resource]')){openModal();return;}
 if(event.target.closest('[data-add-to-library]')){
  const path=state.libraryPath;
  openModal({grade:path.grade==='Toutes'?'6e':path.grade,subject:path.subject,kind:path.category==='Autres'?'Autre':path.category,returnToLibrary:true});
  return;
 }
 if(event.target.closest('[data-library-all]')){
  const resources=allResources();
  document.getElementById('libraryBrowser').classList.add('hidden');
  document.getElementById('libraryResults').classList.remove('hidden');
  document.getElementById('libraryBackBtn').classList.add('hidden');
  document.getElementById('libraryBreadcrumb').innerHTML='<button type="button" data-library-step="root">Bibliothèque</button><span>›</span><strong>Toutes les ressources</strong>';
  document.getElementById('libraryIntro').innerHTML='<div class="eyebrow">BIBLIOTHÈQUE COMPLÈTE</div><h2>Tous les PDF disponibles</h2><p>'+resources.length+' documents PDF à consulter dans la bibliothèque.</p>';
  document.getElementById('libraryResults').innerHTML=resources.map(item=>resourceCard(item)).join('');
  document.getElementById('libraryEmpty').classList.add('hidden');
  return;
 }
 if(event.target.closest('[data-library-by-subject]')){state.libraryPath={grade:'Toutes',subject:'',category:''};renderLibrary();return;}
 const grade=event.target.closest('[data-library-grade]');
 if(grade){state.libraryPath={grade:grade.dataset.libraryGrade,subject:'',category:''};renderLibrary();return;}
 const subject=event.target.closest('[data-library-subject]');
 if(subject){state.libraryPath.subject=subject.dataset.librarySubject;state.libraryPath.category='';renderLibrary();return;}
 const category=event.target.closest('[data-library-category]');
 if(category){state.libraryPath.category=category.dataset.libraryCategory;renderLibrary();return;}
 const stepButton=event.target.closest('[data-library-step]');
 if(stepButton){
  const step=stepButton.dataset.libraryStep;
  if(step==='root'){state.libraryPath={grade:'',subject:'',category:''};document.getElementById('searchInput').value='';}
  else if(step==='grade')state.libraryPath={grade:state.libraryPath.grade,subject:'',category:''};
  else if(step==='subject')state.libraryPath.category='';
  renderLibrary();return;
 }
 if(event.target.closest('[data-library-back]')||event.target.closest('#libraryBackBtn')){
  if(state.libraryPath.category)state.libraryPath.category='';
  else if(state.libraryPath.subject)state.libraryPath.subject='';
  else state.libraryPath.grade='';
  renderLibrary();return;
 }
 if(event.target.closest('[data-close-modal]')){closeModal();return;}
 const openPdf=event.target.closest('[data-open-pdf]');
 if(openPdf){showPdfViewer(openPdf.dataset.openPdf,openPdf.closest('.resource-card')?.querySelector('h4')?.textContent||'Document PDF');return;}
 if(event.target.closest('[data-close-pdf]')||event.target.id==='pdfViewerModal'){closePdfViewer();return;}
 const openFile=event.target.closest('[data-open-file]');
 if(openFile){
  try{
   const item=await getLocalFile(openFile.dataset.openFile);
   if(!item||!/\.pdf$/i.test(item.name||''))throw new Error('PDF introuvable');
   activePdfObjectUrl=URL.createObjectURL(item.blob);
   showPdfViewer(activePdfObjectUrl,item.name);
  }catch(error){showToast('Fichier PDF local introuvable. Réimporte-le.');}
  return;
 }
 const del=event.target.closest('[data-delete-resource]');
 if(del){
  const id=del.dataset.deleteResource;
  const item=state.resources.find(resource=>resource.id===id);
  if(!item||!confirm('Supprimer ce PDF de la bibliothèque ?'))return;
  if(item.fileId){try{await deleteLocalFile(item.fileId);}catch(error){console.warn(error);}}
  state.resources=state.resources.filter(resource=>resource.id!==id);
  persist();renderAll();showToast('PDF supprimé.');return;
 }
});
document.getElementById('searchInput').addEventListener('input',renderLibrary);
document.getElementById('resourceForm').addEventListener('submit',async event=>{
 event.preventDefault();
 const form=event.currentTarget;
 const data=new FormData(form);
 const title=String(data.get('title')).trim();
 const url=String(data.get('url')).trim();
 const file=form.elements.file.files[0];
 if(!title){showToast('Ajoute un nom à ce document.');return;}
 if(url&&!isPdfUrl(url)){showToast('Le lien doit pointer directement vers un fichier PDF. Les pages web ne sont pas acceptées.');return;}
 if(file&&file.type!=='application/pdf'&&!/\.pdf$/i.test(file.name)){showToast('Seuls les fichiers PDF sont acceptés.');return;}
 if(!url&&!file){showToast('Ajoute un lien PDF direct ou choisis un fichier PDF.');return;}
 const item={id:`personal-${Date.now()}`,title,grade:String(data.get('grade')),subject:String(data.get('subject')),kind:String(data.get('kind')),description:String(data.get('notes')).trim()||'Document PDF ajouté à la bibliothèque.',notes:String(data.get('notes')).trim(),source:file?'PDF personnel':'PDF ajouté',url:url||'',personal:true,createdAt:Date.now()};
 if(file){
  try{item.fileId=await saveLocalFile(file);item.fileName=file.name;item.fileSize=file.size;item.url='';}
  catch(error){showToast('Impossible d’enregistrer ce PDF sur cet appareil.');return;}
 }
 state.resources.unshift(item);
 persist();form.reset();closeModal();renderAll();showToast('PDF ajouté à la bibliothèque.');
});
readState();
renderAll();
if('serviceWorker' in navigator && location.protocol.startsWith('http')){
 window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(error=>console.info('Mode hors ligne non activé :',error)));
}
document.addEventListener('keydown',event=>{
 if(event.key==='Escape'&&!document.getElementById('pdfViewerModal').classList.contains('hidden'))closePdfViewer();
});
