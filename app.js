'use strict';

const PC_SOURCE = 'https://physiquechimie.godaddysites.com/fascicules';
const MATH_PAGES = {
  '6e':'https://sunumaths.com/sixieme/',
  '5e':'https://sunumaths.com/cinquieme/',
  '4e':'https://sunumaths.com/quaterieme/',
  '3e':'https://sunumaths.com/troisieme/'
};
const ADEM_ROOT = 'https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/';
const VER = '?ver=1791159802098';

const seedResources = [
  // Maths: four ADEM fascicules, plus chapter index pages from SunuMaths.
  ...[
    ['6e','ADEM Maths 6e','Fascicule de mathématiques pour la 6e.','ADEM_MATHS_6e.pdf'],
    ['5e','ADEM Maths 5e','Fascicule de mathématiques pour la 5e.','ADEM_MATHS_5e.pdf'],
    ['4e','ADEM Maths 4e','Fascicule de mathématiques pour la 4e.','ADEM_MATHS_4e.pdf'],
    ['3e','ADEM Maths 3e','Fascicule de mathématiques pour la 3e.','ADEM_MATHS_3e.pdf']
  ].map(([grade,title,description,file])=>({id:`math-adem-${grade}`,title,grade,subject:'Mathématiques',kind:'Fascicule',description,source:'ADEM · Sénégal',url:ADEM_ROOT+file+VER,origin:'Physique-Chimie · Fascicules',personal:false})),
  ...[
    ['6e','Exercices de maths 6e','Exercices par chapitre : nombres décimaux, géométrie, mesures et proportionnalité.'],
    ['5e','Exercices de maths 5e','Exercices par chapitre : fractions, puissances, symétrie et proportionnalité.'],
    ['4e','Exercices de maths 4e','Exercices par chapitre : nombres rationnels, calcul algébrique, équations et statistiques.'],
    ['3e','Exercices de maths 3e','Exercices par chapitre : Thalès, trigonométrie, racines carrées, équations et statistiques.']
  ].map(([grade,title,description])=>({id:`math-page-${grade}`,title,grade,subject:'Mathématiques',kind:'Exercices',description,source:'SunuMaths',url:MATH_PAGES[grade],origin:'SunuMaths · page de la classe',personal:false})),
  {id:'math-bfem',title:'Annales BFEM · Mathématiques',grade:'3e',subject:'Mathématiques',kind:'Annales',description:'Retrouve les sujets de mathématiques et leurs corrections lorsqu’ils sont publiés.',source:'Sama Bac',url:'https://samabac.sn/category/epreuves-bfem',origin:'Sama Bac · Épreuves BFEM',personal:false},

  // Physics and chemistry: confirmed collège resources for 4e and 3e only.
  {id:'pc-adem-3e',title:'ADEM Sciences physiques 3e',grade:'3e',subject:'Physique-Chimie',kind:'Fascicule',description:'Fascicule ADEM-Dakar : optique, forces, travail, électricité, solutions, acides et bases.',source:'ADEM · Sénégal',url:ADEM_ROOT+'ADEM_PC_3e.pdf?ver=1791159802009',origin:'Physique-Chimie · Fascicules',personal:false},
  {id:'pc-exos-phys-3e',title:'Exercices de physique 3e · IREΜPT',grade:'3e',subject:'Physique-Chimie',kind:'Exercices',description:'Séries d’exercices de physique : lentilles, lumière, forces, électricité et résistance.',source:'IREMPT Sénégal',url:ADEM_ROOT+'Exercice_physique_3e_irempt.pdf?ver=1791159802009',origin:'Physique-Chimie · Fascicules',personal:false},
  {id:'pc-exos-chim-3e',title:'Exercices de chimie 3e · IREMPT',grade:'3e',subject:'Physique-Chimie',kind:'Exercices',description:'Séries d’exercices de chimie pour la classe de 3e.',source:'IREMPT Sénégal',url:ADEM_ROOT+'Exercice_chimie_3e_irempt.pdf?ver=1791159802009',origin:'Physique-Chimie · Fascicules',personal:false},
  {id:'pc-adem-4e',title:'ADEM Sciences physiques 4e',grade:'4e',subject:'Physique-Chimie',kind:'Fascicule',description:'Fascicule de sciences physiques ADEM pour la classe de 4e.',source:'ADEM · Sénégal',url:ADEM_ROOT+'ADEM_PC_4e.pdf?ver=1791159802067',origin:'Physique-Chimie · Fascicules',personal:false},
  {id:'pc-wahab-4e',title:'Fascicule de sciences physiques 4e',grade:'4e',subject:'Physique-Chimie',kind:'Fascicule',description:'Support complémentaire de sciences physiques pour la 4e.',source:'Wahab Diop · Sénégal',url:ADEM_ROOT+'fascicule-sciences-physiques-4eme-_wahabdiop.pdf?ver=1791159802067',origin:'Physique-Chimie · Fascicules',personal:false},
  {id:'pc-bfem',title:'Annales BFEM · Physique-Chimie',grade:'3e',subject:'Physique-Chimie',kind:'Annales',description:'Sujets de physique-chimie du BFEM publiés dans la rubrique des épreuves.',source:'Sama Bac',url:'https://samabac.sn/category/epreuves-bfem',origin:'Sama Bac · Épreuves BFEM',personal:false},

  // SVT: ADEM fascicules for all four grades.
  ...[
    ['6e','ADEM SVT 6e','Fascicule de Sciences de la Vie et de la Terre pour la 6e.','ADEM_SVT_6e.pdf'],
    ['5e','ADEM SVT 5e','Fascicule de Sciences de la Vie et de la Terre pour la 5e.','ADEM_SVT_5e.pdf'],
    ['4e','ADEM SVT 4e','Fascicule de Sciences de la Vie et de la Terre pour la 4e.','ADEM_SVT_4e.pdf'],
    ['3e','ADEM SVT 3e','Fascicule de Sciences de la Vie et de la Terre pour la 3e.','ADEM_SVT_3e.pdf']
  ].map(([grade,title,description,file])=>({id:`svt-adem-${grade}`,title,grade,subject:'SVT',kind:'Fascicule',description,source:'ADEM · Sénégal',url:ADEM_ROOT+file+VER,origin:'Physique-Chimie · Fascicules',personal:false})),
  ...[
    ['6e','Cours de SVT 6e','Fascicule de cours préparé par la cellule SVT de l’Inspection d’Académie de Kédougou.','FASCICULE%20SVT%20COURS%206%20i%C3%A8me.pdf'],
    ['5e','Cours de SVT 5e','Fascicule de cours de SVT pour la classe de 5e.','FASCICULE%20SVT%20COURS%205%20i%C3%A8me.pdf'],
    ['4e','Cours de SVT 4e','Fascicule de cours de SVT pour la classe de 4e.','FASCICULE%20SVT%20COURS%204%20i%C3%A8me.pdf'],
    ['3e','Cours de SVT 3e','Fascicule de cours de SVT pour la classe de 3e.','FASCICULE%20SVT%20COURS%203%20IEME.pdf']
  ].map(([grade,title,description,file])=>({id:`svt-cours-${grade}`,title,grade,subject:'SVT',kind:'Cours',description,source:'IA Kédougou · Sénégal',url:ADEM_ROOT+file+VER,origin:'Physique-Chimie · Fascicules',personal:false})),
  {id:'svt-guides',title:'Guides pratiques de SVT · 6e à 3e',grade:'6e–3e',subject:'SVT',kind:'Cours',description:'Guides pratiques et guides d’usage par classe, référencés sur la page SVT de Sama Bac.',source:'Sama Bac · Sénégal',url:'https://www.samabac.sn/svt-au-college',origin:'Sama Bac · Programmes SVT collège',personal:false},
  {id:'svt-exercises-auf',title:'Fascicules d’exercices SVT · 6e à 3e',grade:'6e–3e',subject:'SVT',kind:'Exercices',description:'Fascicules d’exercices de SVT du collège, répertoriés dans la bibliothèque de ressources APPRENDRE.',source:'APPRENDRE · AUF',url:'https://apprendre.auf.org/discipline_ressource/sciences-de-la-vie-et-de-la-terre/page/12/',origin:'APPRENDRE · AUF',personal:false},
  {id:'svt-bfem',title:'Annales BFEM · SVT',grade:'3e',subject:'SVT',kind:'Annales',description:'Sujets de SVT du BFEM, avec corrections lorsqu’elles sont disponibles.',source:'Sama Bac',url:'https://samabac.sn/category/epreuves-bfem',origin:'Sama Bac · Épreuves BFEM',personal:false}
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
function allResources(){ return [...seedResources, ...state.resources]; }
function esc(value){ return String(value ?? '').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function shortDate(dateStr){
  if(!dateStr) return '';
  const d = new Date(`${dateStr}T12:00:00`);
  return new Intl.DateTimeFormat('fr-FR',{day:'2-digit',month:'short'}).format(d).replace('.','');
}
function subjectClass(subject){ return subject === 'Mathématiques' ? 'subject-math' : subject === 'Physique-Chimie' ? 'subject-pc' : subject === 'SVT' ? 'subject-svt' : ''; }
function subjectSymbol(subject){ return subject === 'Mathématiques' ? '∑' : subject === 'Physique-Chimie' ? '⚗' : subject === 'SVT' ? '⌁' : '▤'; }
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
function goTo(page){
  const valid=['dashboard','library','planner','files','favorites']; if(!valid.includes(page)) return;
  document.querySelectorAll('.page').forEach(el=>el.classList.toggle('active',el.id===`page-${page}`));
  document.querySelectorAll('[data-nav]').forEach(el=>el.classList.toggle('active',el.dataset.nav===page));
  document.getElementById('breadcrumb').innerHTML=`ESPACE PERSONNEL <span>/</span> ${({dashboard:'VUE D’ENSEMBLE',library:'BIBLIOTHÈQUE',planner:'DEVOIRS & EXAMENS',files:'MON CLASSEUR',favorites:'FAVORIS'})[page]}`;
  if(page==='library') renderLibrary(); if(page==='planner') renderTasks(); if(page==='files'){state.fileSubjectFilter='all';renderFiles();} if(page==='favorites') renderFavorites();
  window.scrollTo({top:0,behavior:'smooth'});
}
function resourceCard(item, compact=false){
  const done=isCompleted(item.id); const fav=isFavorite(item.id);
  const action = item.fileId ? `<button class="resource-open" data-open-file="${esc(item.fileId)}">Ouvrir <span>↗</span></button>` : item.url ? `<a class="resource-open" href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">Ouvrir <span>↗</span></a>` : '<span class="source-label">Fichier local</span>';
  return `<article class="resource-card ${subjectClass(item.subject)} ${done?'is-done':''}">
    <div class="resource-card-top"><span class="resource-symbol">${subjectSymbol(item.subject)}</span><div class="resource-actions-top">${done?'<span class="done-indicator">✓ Étudié</span>':''}<span class="resource-grade">${esc(item.grade||'—')}</span><button class="favorite-button ${fav?'active':''}" data-favorite="${esc(item.id)}" aria-label="${fav?'Retirer des':'Ajouter aux'} favoris">${fav?'★':'☆'}</button></div></div>
    <h4>${esc(item.title)}</h4><p>${esc(item.description||item.notes||'Document personnel.')}</p>
    <div class="resource-meta"><span class="meta-chip">${esc(item.subject)}</span><span class="meta-chip">${esc(item.kind||'Autre')}</span></div>
    <div class="resource-footer"><span class="source-label" title="${esc(item.source||'Document personnel')}">${esc(item.source||'Document personnel')}</span>${action}</div>
    ${!item.fileId?`<button class="mark-done" data-complete="${esc(item.id)}">${done?'Marquer comme non étudié':'Marquer comme étudié'}</button>`:''}
    ${isPersonal(item)?`<button class="delete-resource" data-delete-resource="${esc(item.id)}">Supprimer de mon classeur</button>`:''}
  </article>`;
}
const LIBRARY_SUBJECTS = [
  {name:'Mathématiques',description:'Nombres, calcul, géométrie et résolution de problèmes.'},
  {name:'Physique-Chimie',description:'Matière, énergie, électricité et transformations.'},
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
  if(kind.includes('cours')||kind.includes('fascicule')) return 'Cours';
  if(kind.includes('exercice')) return 'Exercices';
  if(kind.includes('devoir')) return 'Devoirs';
  if(kind.includes('examen')||kind.includes('composition')) return 'Examens';
  if(kind.includes('epreuve')||kind.includes('annale')||kind.includes('bfem')) return 'Épreuves';
  return 'Autres';
}
function isInLibraryGrade(item,grade){
  return item.grade===grade || item.grade==='6e–3e' || item.grade==='6e-3e';
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
  if(path.grade) crumbs.push('<button type="button" data-library-step="grade">'+esc(path.grade)+'</button>');
  if(path.subject) crumbs.push('<button type="button" data-library-step="subject">'+esc(path.subject)+'</button>');
  if(path.category) crumbs.push('<strong>'+esc(path.category)+'</strong>');
  breadcrumb.innerHTML=crumbs.join('<span>›</span>');

  if(!path.grade){
    intro.innerHTML='<div class="eyebrow">ÉTAPE 1 · CHOISIR LE NIVEAU</div><h2>Quelle est ta classe ?</h2><p>Commence par sélectionner ton niveau pour accéder à tes matières.</p>';
    browser.innerHTML='<div class="library-tile-grid grade-grid">'+['6e','5e','4e','3e'].map(grade=>{
      const count=resources.filter(item=>isInLibraryGrade(item,grade)).length;
      return '<button type="button" class="library-tile class-tile" data-library-grade="'+grade+'"><span class="library-tile-main"><span class="library-tile-badge">'+grade+'</span><span class="library-tile-copy"><strong>Classe de '+grade+'</strong><small>Mathématiques · Physique-Chimie · SVT</small></span></span><span class="library-tile-tail"><b>'+count+'</b><small>ressources</small><span>→</span></span></button>';
    }).join('')+'</div>';
    return;
  }

  if(!path.subject){
    const count=resources.filter(item=>isInLibraryGrade(item,path.grade)).length;
    intro.innerHTML='<div class="eyebrow">ÉTAPE 2 · CLASSE '+esc(path.grade.toUpperCase())+'</div><h2>Choisis une matière</h2><p>'+count+' ressource'+(count>1?'s':'')+' répertoriée'+(count>1?'s':'')+' pour cette classe. Les trois matières restent accessibles, même lorsqu’une rubrique est encore vide.</p>';
    browser.innerHTML='<div class="library-tile-grid subject-grid">'+LIBRARY_SUBJECTS.map(subject=>{
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
  const resources=allResources();
  document.getElementById('statResources').textContent=resources.length;
  document.getElementById('statCompleted').textContent=resources.filter(r=>isCompleted(r.id)).length;
  document.getElementById('statPending').textContent=state.tasks.filter(t=>!t.done).length;
  document.getElementById('statFavorites').textContent=state.favorites.length;
  document.getElementById('libraryCount').textContent=resources.length;
  const pick=['math-adem-3e','pc-adem-3e','svt-adem-4e','math-page-6e'].map(id=>resources.find(r=>r.id===id)).filter(Boolean);
  document.getElementById('featuredResources').innerHTML=pick.map(x=>resourceCard(x,true)).join('');
  renderUpcoming(); renderProgress(); renderFilesCounts();
}
function renderTasks(){
  const list=document.getElementById('taskList');
  const items=state.tasks.filter(t=>state.taskFilter==='all'||(state.taskFilter==='open'&&!t.done)||(state.taskFilter==='done'&&t.done)).sort((a,b)=>a.dueDate.localeCompare(b.dueDate));
  list.innerHTML=items.map(t=>{const overdue=!t.done&&t.dueDate<new Date().toISOString().slice(0,10);return `<div class="task-item"><input class="task-check" type="checkbox" data-task-done="${esc(t.id)}" ${t.done?'checked':''} aria-label="Tâche terminée"><div class="task-copy"><strong>${esc(t.title)}</strong><small>${esc(t.kind)} · ${esc(t.subject)} · ${esc(t.grade)}${t.notes?' · '+esc(t.notes):''}</small></div><span class="task-date ${overdue?'overdue':''}">${overdue?'En retard · ':''}${shortDate(t.dueDate)}</span><button class="delete-task" data-delete-task="${esc(t.id)}" aria-label="Supprimer la tâche">×</button></div>`;}).join('');
  document.getElementById('tasksEmpty').classList.toggle('hidden',items.length>0);
  document.querySelectorAll('[data-task-filter]').forEach(b=>b.classList.toggle('active',b.dataset.taskFilter===state.taskFilter));
}
function renderFilesCounts(){
  const personal=state.resources;
  const by=s=>personal.filter(r=>r.subject===s).length;
  document.getElementById('folderMath').textContent=`${by('Mathématiques')} document${by('Mathématiques')>1?'s':''}`;
  document.getElementById('folderPC').textContent=`${by('Physique-Chimie')} document${by('Physique-Chimie')>1?'s':''}`;
  document.getElementById('folderSVT').textContent=`${by('SVT')} document${by('SVT')>1?'s':''}`;
  document.getElementById('folderOther').textContent=`${by('Autre')} document${by('Autre')>1?'s':''}`;
}
function renderFiles(){
  const items=state.resources.filter(r=>state.fileSubjectFilter==='all'||r.subject===state.fileSubjectFilter);
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
function renderAll(){renderDashboard();renderLibrary();renderTasks();renderFiles();renderFavorites();setUserName();}

// Navigation and shared buttons.
document.addEventListener('click',async event=>{
  const nav=event.target.closest('[data-nav]');if(nav){event.preventDefault();goTo(nav.dataset.nav);return;}
  if(event.target.closest('[data-open-resource]')){openModal();return;}
  if(event.target.closest('[data-add-to-library]')){
    const path=state.libraryPath;
    openModal({grade:path.grade,subject:path.subject,kind:path.category==='Autres'?'Autre':path.category,returnToLibrary:true});
    return;
  }
  const libraryGrade=event.target.closest('[data-library-grade]');
  if(libraryGrade){state.libraryPath={grade:libraryGrade.dataset.libraryGrade,subject:'',category:''};renderLibrary();return;}
  const librarySubject=event.target.closest('[data-library-subject]');
  if(librarySubject){state.libraryPath.subject=librarySubject.dataset.librarySubject;state.libraryPath.category='';renderLibrary();return;}
  const libraryCategory=event.target.closest('[data-library-category]');
  if(libraryCategory){state.libraryPath.category=libraryCategory.dataset.libraryCategory;renderLibrary();return;}
  const libraryStep=event.target.closest('[data-library-step]');
  if(libraryStep){
    const step=libraryStep.dataset.libraryStep;
    if(step==='root') state.libraryPath={grade:'',subject:'',category:''};
    else if(step==='grade') state.libraryPath={grade:state.libraryPath.grade,subject:'',category:''};
    else if(step==='subject') state.libraryPath.category='';
    renderLibrary();return;
  }
  if(event.target.closest('[data-library-back]')||event.target.closest('#libraryBackBtn')){
    if(state.libraryPath.category) state.libraryPath.category='';
    else if(state.libraryPath.subject) state.libraryPath.subject='';
    else state.libraryPath.grade='';
    renderLibrary();return;
  }
  if(event.target.closest('[data-close-modal]')){closeModal();return;}
  const fav=event.target.closest('[data-favorite]');if(fav){const id=fav.dataset.favorite;state.favorites=isFavorite(id)?state.favorites.filter(x=>x!==id):[...state.favorites,id];persist();renderAll();showToast(isFavorite(id)?'Ajouté aux favoris.':'Retiré des favoris.');return;}
  const complete=event.target.closest('[data-complete]');if(complete){const id=complete.dataset.complete;state.completed=isCompleted(id)?state.completed.filter(x=>x!==id):[...state.completed,id];persist();renderAll();if(document.getElementById('page-library').classList.contains('active'))renderLibrary();showToast(isCompleted(id)?'Ressource marquée comme étudiée.':'Progression mise à jour.');return;}
  const delResource=event.target.closest('[data-delete-resource]');if(delResource){const id=delResource.dataset.deleteResource;const item=state.resources.find(r=>r.id===id);if(!item||!confirm('Supprimer ce document de ton classeur ?'))return;if(item.fileId){try{await deleteLocalFile(item.fileId);}catch(e){console.warn(e);}}state.resources=state.resources.filter(r=>r.id!==id);state.favorites=state.favorites.filter(x=>x!==id);state.completed=state.completed.filter(x=>x!==id);persist();renderAll();showToast('Document supprimé du classeur.');return;}
  const delTask=event.target.closest('[data-delete-task]');if(delTask){state.tasks=state.tasks.filter(t=>t.id!==delTask.dataset.deleteTask);persist();renderAll();showToast('Tâche supprimée.');return;}
  const folder=event.target.closest('[data-folder-subject]');if(folder){state.fileSubjectFilter=folder.dataset.folderSubject;renderFiles();document.getElementById('personalFilesGrid').scrollIntoView({behavior:'smooth',block:'start'});return;}
  if(event.target.closest('#exportBtn')){exportBackup();return;}
  if(event.target.closest('#importBtn')){document.getElementById('importFile').click();return;}
  if(event.target.closest('#allFilesBtn')){state.fileSubjectFilter='all';renderFiles();return;}
  if(event.target.closest('#profileBtn')){updateUserName();return;}
  if(event.target.closest('#globalSearchBtn')){goTo('library');setTimeout(()=>document.getElementById('searchInput').focus(),80);return;}
  if(event.target.closest('#clearFilters')||event.target.closest('#emptyReset')){document.getElementById('searchInput').value='';document.getElementById('gradeFilter').value='all';document.getElementById('subjectFilter').value='all';document.getElementById('typeFilter').value='all';renderLibrary();return;}
  const doneTask=event.target.closest('[data-task-done]');if(doneTask){const t=state.tasks.find(t=>t.id===doneTask.dataset.taskDone);if(t)t.done=doneTask.checked;persist();renderAll();return;}
  const openFile=event.target.closest('[data-open-file]');if(openFile){try{const item=await getLocalFile(openFile.dataset.openFile);if(!item)throw new Error('Fichier introuvable');const url=URL.createObjectURL(item.blob);const a=document.createElement('a');a.href=url;a.target='_blank';a.rel='noopener';a.click();setTimeout(()=>URL.revokeObjectURL(url),60000);}catch(e){showToast('Fichier local introuvable. Réimporte-le dans ton classeur.');}return;}
});
document.addEventListener('change',event=>{
  if(event.target.matches('[data-task-filter]'))return;
  if(event.target.matches('[data-task-done]'))return;
  if(['gradeFilter','subjectFilter','typeFilter'].includes(event.target.id))renderLibrary();
});
['searchInput'].forEach(id=>document.getElementById(id).addEventListener('input',renderLibrary));
document.getElementById('taskList').addEventListener('change',event=>{const id=event.target.dataset.taskDone;if(!id)return;const task=state.tasks.find(t=>t.id===id);if(task){task.done=event.target.checked;persist();renderAll();}});
document.querySelectorAll('[data-task-filter]').forEach(button=>button.addEventListener('click',()=>{state.taskFilter=button.dataset.taskFilter;renderTasks();}));
document.getElementById('taskForm').addEventListener('submit',event=>{
  event.preventDefault();const form=new FormData(event.currentTarget);const task={id:`task-${Date.now()}`,title:String(form.get('title')).trim(),grade:String(form.get('grade')),subject:String(form.get('subject')),kind:String(form.get('kind')),dueDate:String(form.get('dueDate')),notes:String(form.get('notes')).trim(),done:false};
  if(!task.title||!task.dueDate)return;state.tasks.push(task);persist();event.currentTarget.reset();renderAll();showToast('Tâche ajoutée à ton agenda.');
});
document.getElementById('resourceForm').addEventListener('submit',async event=>{
  event.preventDefault();const form=event.currentTarget;const data=new FormData(form);const title=String(data.get('title')).trim();const url=String(data.get('url')).trim();const file=form.elements.file.files[0];
  if(!title){showToast('Ajoute un nom à ce document.');return;}if(!url&&!file){showToast('Ajoute un lien ou choisis un fichier.');return;}
  const item={id:`personal-${Date.now()}`,title,grade:String(data.get('grade')),subject:String(data.get('subject')),kind:String(data.get('kind')),description:String(data.get('notes')).trim()||'Document ajouté à ton classeur.',notes:String(data.get('notes')).trim(),source:file?'Fichier personnel':'Lien personnel',url:url||'',personal:true,createdAt:Date.now()};
  if(file){try{item.fileId=await saveLocalFile(file);item.fileName=file.name;item.fileSize=file.size;}catch(err){showToast('Impossible de stocker ce fichier dans le navigateur.');return;}}
  state.resources.unshift(item);persist();form.reset();const backToLibrary=returnToLibraryAfterSave;returnToLibraryAfterSave=false;closeModal();renderAll();if(backToLibrary){goTo('library');showToast('Document ajouté à la rubrique.');}else{goTo('files');showToast('Document ajouté à ton classeur.');}
});
document.getElementById('importFile').addEventListener('change',event=>{const file=event.target.files[0];if(file)importBackup(file);event.target.value='';});
// Folder controls are local filters. Resetting to the main folder list is done by reopening Mon classeur.

readState();renderAll();

if('serviceWorker' in navigator && location.protocol.startsWith('http')){
  window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(err=>console.info('Mode hors ligne non activé :',err)));
}
