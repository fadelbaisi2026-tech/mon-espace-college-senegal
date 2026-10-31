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

  // Cours de mathématiques retrouvés pour les niveaux 6e et 5e.
  {id:'math-cours-coly-6e',title:'Cours de mathématiques · 6e',grade:'6e',subject:'Mathématiques',kind:'Cours',description:'Support de cours de 82 pages : progression harmonisée, leçons détaillées, objectifs, notions et exercices d’application.',source:'Ibrahima Coly · Professeur de mathématiques · IA Kaolack',url:'https://topeducationsn.com/wp-content/uploads/2022/11/COLY-MATHS-6e.pdf',personal:false},
  {id:'math-livret-men-6e',title:'Mon livret de mathématiques · 6e',grade:'6e',subject:'Mathématiques',kind:'Cours et exercices',description:'Livret de la Direction de l’Enseignement moyen secondaire général : essentiel du cours pour chaque leçon, exercices de contrôle et exercices d’application.',source:'Ministère de l’Éducation nationale · DEMSG',url:'https://topeducationsn.com/wp-content/uploads/2024/09/Livret_Math_6e-_juin_23.pdf',personal:false},
  {id:'math-cours-coly-5e',title:'Cours de mathématiques · 5e',grade:'5e',subject:'Mathématiques',kind:'Cours',description:'Support de cours de 61 pages : progression harmonisée, chapitres, définitions, propriétés, méthodes et exercices d’application.',source:'Ibrahima Coly · Professeur de mathématiques · IA Kaolack',url:'https://topeducationsn.com/wp-content/uploads/2022/11/COLY-MATHS-5e.pdf',personal:false},

  // Compléments de cours de mathématiques issus d'enseignants et de livrets pédagogiques.
  {id:'math-cours-coly-4e',title:'Cours de mathématiques · 4e',grade:'4e',subject:'Mathématiques',kind:'Cours et exercices',description:'Fascicule de cours de 77 pages : progression, leçons, notions et exercices d’application.',source:'Ibrahima Coly · Professeur de mathématiques · IA Kaolack',url:'https://topeducationsn.com/wp-content/uploads/2022/11/COLY-MATHS-4e.pdf',personal:false},
  {id:'math-cours-coly-3e',title:'Cours de mathématiques · 3e',grade:'3e',subject:'Mathématiques',kind:'Cours et exercices',description:'Fascicule de cours de 77 pages : notions du programme de troisième, explications et exercices.',source:'Ibrahima Coly · Professeur de mathématiques · IA Kaolack',url:'https://topeducationsn.com/wp-content/uploads/2022/11/COLY-MATHS-3e.pdf',personal:false},
  {id:'math-livret-men-5e',title:'Mon livret de mathématiques · 5e',grade:'5e',subject:'Mathématiques',kind:'Cours et exercices',description:'Livret de 115 pages conforme au programme sénégalais : essentiel du cours, exercices de contrôle, applications et problèmes.',source:'Ministère de l’Éducation nationale · DEMSG',url:'https://topeducationsn.com/wp-content/uploads/2024/09/Livret_Math_5e_juin-23.pdf',personal:false},
  {id:'math-livret-men-4e',title:'Mon livret de mathématiques · 4e',grade:'4e',subject:'Mathématiques',kind:'Cours et exercices',description:'Livret de 126 pages conforme au programme sénégalais : essentiel du cours, exercices de contrôle, applications et problèmes.',source:'Ministère de l’Éducation nationale · DEMSG',url:'https://topeducationsn.com/wp-content/uploads/2024/09/Livret_Maths_-4e_juin_23.pdf',personal:false},
  {id:'math-livret-men-3e',title:'Mon livret de mathématiques · 3e',grade:'3e',subject:'Mathématiques',kind:'Cours et exercices',description:'Livret de 155 pages conforme au programme sénégalais : essentiel du cours par leçon, exercices, problèmes et éléments de correction.',source:'Ministère de l’Éducation nationale · DEMSG',url:'https://topeducationsn.com/wp-content/uploads/2024/09/Livret-_-Maths_3e_juin-_23.pdf',personal:false},

  // Physique-Chimie : uniquement en 4e et 3e dans le parcours collège sénégalais.
  {id:'pc-adem-3e',title:'Fascicule ADEM de sciences physiques · 3e',grade:'3e',subject:'Physique-Chimie',kind:'Cours et exercices',description:'Support ADEM-Dakar de sciences physiques pour la troisième : optique, forces, travail, électricité, solutions, acides et bases.',source:'ADEM-Dakar · Sénégal',url:ADEM_ROOT+'ADEM_PC_3e.pdf?ver=1791159802009',personal:false},
  {id:'pc-exos-phys-3e',title:'Séries d’exercices de physique · 3e',grade:'3e',subject:'Physique-Chimie',kind:'Exercices',description:'Entraînement de physique pour la classe de troisième : lentilles, lumière, forces, électricité et résistance.',source:'IREMPT Sénégal',url:ADEM_ROOT+'Exercice_physique_3e_irempt.pdf?ver=1791159802009',personal:false},
  {id:'pc-exos-chim-3e',title:'Séries d’exercices de chimie · 3e',grade:'3e',subject:'Physique-Chimie',kind:'Exercices',description:'Séries d’exercices de chimie adaptées à la classe de troisième.',source:'IREMPT Sénégal',url:ADEM_ROOT+'Exercice_chimie_3e_irempt.pdf?ver=1791159802009',personal:false},
  {id:'pc-adem-4e-auf',title:'Fascicule d’exercices de sciences physiques et chimie · 4e',grade:'4e',subject:'Physique-Chimie',kind:'Exercices',description:'Activités expérimentales, séries d’exercices et activités d’intégration couvrant le programme de physique-chimie de quatrième. 55 pages.',source:'ADEM-Dakar · APPRENDRE / AUF',url:'https://apprendre.auf.org/wp-content/uploads/2021/08/fascicule_adem_sciences_physiques_4e.pdf',personal:false},
  {id:'pc-wahab-4e',title:'Fascicule complémentaire de sciences physiques · 4e',grade:'4e',subject:'Physique-Chimie',kind:'Cours et exercices',description:'Support complémentaire de sciences physiques pour la classe de quatrième.',source:'Wahab Diop · Sénégal',url:ADEM_ROOT+'fascicule-sciences-physiques-4eme-_wahabdiop.pdf?ver=1791159802067',personal:false},

  // Cours et livrets de Physique-Chimie issus de professeurs et de ressources pédagogiques nationales.
  {id:'pc-cours-coly-3e',title:'Cours de sciences physiques · 3e',grade:'3e',subject:'Physique-Chimie',kind:'Cours',description:'Fascicule de cours de 72 pages : optique, mécanique, électricité et énergie, avec fiches pédagogiques et développements de leçons.',source:'Ibrahima Coly · Professeur de sciences physiques · UCAD',url:'https://topeducationsn.com/wp-content/uploads/2022/11/COLY-SP-3-e-1.pdf',personal:false},
  {id:'pc-cours-coly-4e',title:'Cours de sciences physiques · 4e',grade:'4e',subject:'Physique-Chimie',kind:'Cours',description:'Fascicule de cours de 68 pages pour la quatrième, avec leçons de physique et de chimie.',source:'Ibrahima Coly · Professeur de sciences physiques · UCAD',url:'https://topeducationsn.com/wp-content/uploads/2022/11/COLY-SP-4-e.pdf',personal:false},
  {id:'pc-livret-men-3e',title:'Mon livret de Physique-Chimie · 3e',grade:'3e',subject:'Physique-Chimie',kind:'Cours et exercices',description:'Livret de 103 pages conforme au programme sénégalais : objectifs, essentiel du cours, exercices de contrôle et d’application.',source:'Ministère de l’Éducation nationale · DEMSG',url:'https://topeducationsn.com/wp-content/uploads/2024/09/livret-PC__3e_juin_23-1.pdf',personal:false},
  {id:'pc-livret-men-4e',title:'Mon livret de Physique-Chimie · 4e',grade:'4e',subject:'Physique-Chimie',kind:'Cours et exercices',description:'Livret de 103 pages conforme au programme sénégalais : leçons de physique et de chimie, exercices d’application et éléments de correction.',source:'Ministère de l’Éducation nationale · DEMSG',url:'https://topeducationsn.com/wp-content/uploads/2024/09/livret-PC-4eme_-juin-23.pdf',personal:false},

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

  // Ressources de SVT complémentaires publiées par des enseignants et dans les livrets nationaux.
  {id:'svt-cours-ndao-6e',title:'Fascicule de cours de SVT · 6e',grade:'6e',subject:'SVT',kind:'Cours',description:'Fascicule de 61 pages résumant les leçons du programme de sixième.',source:'Cheikh Ah. Mbacké Ndao · Professeur de SVT · Top Education Sénégal',url:'https://topeducationsn.com/wp-content/uploads/2022/11/FASCICULE-COURS-SVT-6ie%CC%80me-M.NDAO_.pdf',personal:false},
  {id:'svt-cours-ndao-5e',title:'Fascicule de cours de SVT · 5e',grade:'5e',subject:'SVT',kind:'Cours et exercices',description:'Fascicule de 60 pages synthétisant des supports de cours et des manuels de SVT pour la cinquième.',source:'Cheikh Ah. Mbacké Ndao · Professeur de SVT · Top Education Sénégal',url:'https://topeducationsn.com/wp-content/uploads/2022/11/FASCICULE-COURS-SVT-5ieme-M.NDAO_.pdf',personal:false},
  {id:'svt-cours-ndao-4e',title:'Fascicule de cours de SVT · 4e',grade:'4e',subject:'SVT',kind:'Cours',description:'Fascicule de cours de SVT de 79 pages préparé pour la classe de quatrième.',source:'Cheikh Ah. Mbacké Ndao · Professeur de SVT · Top Education Sénégal',url:'https://topeducationsn.com/wp-content/uploads/2022/11/FASCICULE-COURS-SVT-4ieme-M.NDAO_.pdf',personal:false},
  {id:'svt-fascicule-ief-3e',title:'Fascicule de SVT · 3e · Approche par compétences',grade:'3e',subject:'SVT',kind:'Cours et exercices',description:'Fascicule de la cellule mixte SVT de l’IEF de Grand-Dakar et des Parcelles Assainies : activités pédagogiques organisées par thème selon l’approche par compétences.',source:'Équipe de professeurs de SVT · IEF Grand-Dakar',url:'https://topeducationsn.com/wp-content/uploads/2024/09/fascicule-svt-3e.pdf',personal:false},
  {id:'svt-livret-men-6e',title:'Mon livret de SVT · 6e',grade:'6e',subject:'SVT',kind:'Cours et exercices',description:'Livret de 79 pages conforme au programme en vigueur : essentiel du cours, exercices de contrôle et d’application.',source:'Ministère de l’Éducation nationale · DEMSG',url:'https://topeducationsn.com/wp-content/uploads/2024/09/Livret_SVT_6e_juin_23.docx.pdf',personal:false},
  {id:'svt-livret-men-5e',title:'Mon livret de SVT · 5e',grade:'5e',subject:'SVT',kind:'Cours et exercices',description:'Livret de 75 pages conforme au programme sénégalais : synthèses de cours, exercices et situations d’application.',source:'Ministère de l’Éducation nationale · DEMSG',url:'https://topeducationsn.com/wp-content/uploads/2024/09/Livret_SVT_5e_juin_23.pdf',personal:false},
  {id:'svt-livret-men-4e',title:'Mon livret de SVT · 4e',grade:'4e',subject:'SVT',kind:'Cours et exercices',description:'Livret de 102 pages conforme au programme sénégalais : essentiel du cours, exercices et problèmes d’application.',source:'Ministère de l’Éducation nationale · DEMSG',url:'https://topeducationsn.com/wp-content/uploads/2024/09/Livret_SVT_4e_juin_23.pdf',personal:false},
  {id:'svt-livret-men-3e',title:'Mon livret de SVT · 3e',grade:'3e',subject:'SVT',kind:'Cours et exercices',description:'Livret de 130 pages conforme au programme sénégalais : synthèses des leçons, exercices et situations d’application.',source:'Ministère de l’Éducation nationale · DEMSG',url:'https://topeducationsn.com/wp-content/uploads/2024/09/Livret_SVT_3e_juin_23.pdf',personal:false},

  // Compléments de Mathématiques 6e : devoirs et évaluations sénégalais.
  {id:'math-6e-eval-2022',title:'Évaluation de mathématiques · 6e · Semestre 1',grade:'6e',subject:'Mathématiques',kind:'Devoirs',description:'Évaluation de niveau sixième portant sur les nombres décimaux, les ensembles et la géométrie.',source:'Top Education Sénégal · IA Saint-Louis',url:'https://topeducationsn.com/wp-content/uploads/2022/11/Evaluation-MATHS-N%C2%B01-Semestre1-Classe-6e-2022-2023.pdf',personal:false},
  {id:'math-6e-eval-dec-2022',title:'Évaluation de mathématiques · 6e · Décembre 2022',grade:'6e',subject:'Mathématiques',kind:'Devoirs',description:'Devoir de mathématiques de sixième : vocabulaire géométrique, solides, nombres et calculs.',source:'Top Education Sénégal · IA Saint-Louis',url:'https://topeducationsn.com/wp-content/uploads/2022/12/Evaluation-N%C2%B01-MATHS-Semestre-1-Classe-6eme-2022-2023.pdf',personal:false},
  {id:'math-6e-epreuve-found',title:'Épreuve de mathématiques · 6e',grade:'6e',subject:'Mathématiques',kind:'Devoirs',description:'Devoir semestriel de la cellule zonale de Foundiougne : numération, nombres décimaux et géométrie.',source:'Top Education Sénégal · IA Fatick',url:'https://topeducationsn.com/wp-content/uploads/2023/01/Epreuve-maths-6eme.pdf',personal:false},
  {id:'math-6e-devoir-oussouye',title:'Devoir départemental de mathématiques · 6e',grade:'6e',subject:'Mathématiques',kind:'Devoirs',description:'Devoir départemental du premier semestre 2022-2023, IEF Oussouye : activités numériques et géométriques.',source:'Top Education Sénégal · IA Ziguinchor',url:'https://topeducationsn.com/wp-content/uploads/2023/01/Devoir-departemental-6eme.pdf',personal:false},

  // Compléments de Mathématiques 5e : entraînements numériques et géométriques.
  {id:'math-5e-multiples-1',title:'Série d’exercices · Multiples et diviseurs · 5e',grade:'5e',subject:'Mathématiques',kind:'Exercices',description:'Entraînement sur les multiples, les diviseurs, les nombres premiers, le PGCD et le PPCM.',source:'Top Education Sénégal · M. Sow',url:'https://topeducationsn.com/wp-content/uploads/2021/01/serie-dexercice-numerique-N%C2%B01-5eme-2020-2021.pdf',personal:false},
  {id:'math-5e-multiples-2',title:'Série d’exercices · Nombres et divisibilité · 5e',grade:'5e',subject:'Mathématiques',kind:'Exercices',description:'Exercices complémentaires sur les diviseurs, multiples et nombres premiers.',source:'Top Education Sénégal · M. Sow',url:'https://topeducationsn.com/wp-content/uploads/2021/01/serie-dexercice-numerique-N%C2%B02-5eme-2020-2021.pdf',personal:false},
  {id:'math-5e-multiples-3',title:'Série d’exercices numériques · 5e · N° 3',grade:'5e',subject:'Mathématiques',kind:'Exercices',description:'Série d’entraînement numérique pour la classe de cinquième.',source:'Top Education Sénégal · M. Sow',url:'https://topeducationsn.com/wp-content/uploads/2021/01/serie-dexercice-numerique-N%C2%B03-5eme-2020-2021.pdf',personal:false},
  {id:'math-5e-angles',title:'Série d’exercices sur les angles · 5e',grade:'5e',subject:'Mathématiques',kind:'Exercices',description:'Entraînement de géométrie sur les angles.',source:'Top Education Sénégal',url:'https://topeducationsn.com/wp-content/uploads/2023/01/SERIE-DEXERCICE-N%C2%B02-SUR-LES-ANGLES.pdf',personal:false},

  // SVT 5e : fiches d'exercices liées aux leçons du fascicule ADEM.
  {id:'svt-5e-td1',title:'SVT 5e · Exercices sur les leçons 1 et 2',grade:'5e',subject:'SVT',kind:'Exercices',description:'Travaux dirigés de SVT portant sur les deux premières leçons de cinquième.',source:'Top Education Sénégal',url:'https://topeducationsn.com/wp-content/uploads/2022/11/TD-N%C2%B01-SVT-5eme-Lecon-1-et-Lecon-2.pdf',personal:false},
  {id:'svt-5e-td2',title:'SVT 5e · Exercices sur la leçon 3',grade:'5e',subject:'SVT',kind:'Exercices',description:'Leçon 3 : alimentation chez les animaux et adaptation aux différents régimes alimentaires.',source:'Top Education Sénégal',url:'https://topeducationsn.com/wp-content/uploads/2022/11/TD-N%C2%B02-SVT-5eme-Lecon-3.pdf',personal:false},
  {id:'svt-5e-td3',title:'SVT 5e · Exercices sur la leçon 4',grade:'5e',subject:'SVT',kind:'Exercices',description:'Travaux dirigés de SVT sur la quatrième leçon du programme de cinquième.',source:'Top Education Sénégal',url:'https://topeducationsn.com/wp-content/uploads/2022/11/TD-N%C2%B03-SVT-5eme-Lecon-4.pdf',personal:false},
  {id:'svt-5e-td4',title:'SVT 5e · Exercices sur la leçon 5',grade:'5e',subject:'SVT',kind:'Exercices',description:'Travaux dirigés de SVT sur la cinquième leçon du programme de cinquième.',source:'Top Education Sénégal',url:'https://topeducationsn.com/wp-content/uploads/2022/11/TD-N%C2%B04-SVT-5eme-Lecon-5.pdf',personal:false},
  {id:'svt-5e-td6',title:'SVT 5e · Exercices sur la leçon 7',grade:'5e',subject:'SVT',kind:'Exercices',description:'Travaux dirigés de SVT sur la septième leçon du programme de cinquième.',source:'Top Education Sénégal',url:'https://topeducationsn.com/wp-content/uploads/2022/11/TD-N%C2%B06-SVT-5eme-Lecon-7.pdf',personal:false},
  {id:'svt-5e-td7',title:'SVT 5e · Exercices sur la leçon 8',grade:'5e',subject:'SVT',kind:'Exercices',description:'Travaux dirigés de SVT sur la huitième leçon du programme de cinquième.',source:'Top Education Sénégal',url:'https://topeducationsn.com/wp-content/uploads/2022/11/TD-N%C2%B07-SVT-5eme-Lecon-8.pdf',personal:false},
  {id:'svt-5e-td8',title:'SVT 5e · Exercices sur les leçons 9 et 10',grade:'5e',subject:'SVT',kind:'Exercices',description:'Travaux dirigés de SVT sur les leçons 9 et 10 du programme de cinquième.',source:'Top Education Sénégal',url:'https://topeducationsn.com/wp-content/uploads/2022/11/TD-N%C2%B08-SVT-5eme-Lecon-9-et-Lecon-10.pdf',personal:false},
  {id:'svt-5e-td9',title:'SVT 5e · Exercices sur les leçons 11 et 12',grade:'5e',subject:'SVT',kind:'Exercices',description:'Travaux dirigés de SVT sur les leçons 11 et 12 du programme de cinquième.',source:'Top Education Sénégal',url:'https://topeducationsn.com/wp-content/uploads/2022/11/TD-N%C2%B09-SVT-5eme-Lecon-L11-et-Lecon-12.pdf',personal:false},

  // Mathématiques 4e : exercices ciblés et recueil de devoirs.
  {id:'math-4e-rationnels',title:'TD · Nombres rationnels · 4e',grade:'4e',subject:'Mathématiques',kind:'Exercices',description:'Travaux dirigés de mathématiques sur les nombres rationnels.',source:'Top Education Sénégal',url:'https://topeducationsn.com/wp-content/uploads/2021/01/TD-N%C2%B01-Nombre-rationnel.pdf',personal:false},
  {id:'math-4e-algebre',title:'TD · Calcul algébrique · 4e',grade:'4e',subject:'Mathématiques',kind:'Exercices',description:'Série d’exercices de calcul algébrique pour la quatrième.',source:'Top Education Sénégal',url:'https://topeducationsn.com/wp-content/uploads/2021/01/TD-N%C2%B02-Calcul-Algebrique.pdf',personal:false},
  {id:'math-4e-milieux',title:'TD · Droite des milieux · 4e',grade:'4e',subject:'Mathématiques',kind:'Exercices',description:'Travaux dirigés de géométrie sur la droite des milieux.',source:'Top Education Sénégal',url:'https://topeducationsn.com/wp-content/uploads/2021/01/TD-N%C2%B02-Droite-des-milieux.pdf',personal:false},
  {id:'math-4e-recueil',title:'Recueil d’exercices et de devoirs de maths · 4e',grade:'4e',subject:'Mathématiques',kind:'Devoirs',description:'Recueil de 19 pages d’exercices et de devoirs de mathématiques pour la quatrième.',source:'Top Education Sénégal · M. Sow',url:'https://topeducationsn.com/wp-content/uploads/2022/12/RECEUIL-DEXERCICES-ET-DE-DEVOIRS-DE-MATHS-4EME.pdf',personal:false},

  // Physique-Chimie 4e : exercices de chimie et de physique.
  {id:'pc-4e-chimie1',title:'Chimie 4e · Série d’exercices N° 1',grade:'4e',subject:'Physique-Chimie',kind:'Exercices',description:'Série d’exercices de chimie pour la classe de quatrième.',source:'Top Education Sénégal',url:'https://topeducationsn.com/wp-content/uploads/2020/12/serie-dexercice-chimie-N%C2%B01.pdf',personal:false},
  {id:'pc-4e-chimie2',title:'Chimie 4e · Série d’exercices N° 2',grade:'4e',subject:'Physique-Chimie',kind:'Exercices',description:'Deuxième série d’exercices de chimie pour la quatrième.',source:'Top Education Sénégal',url:'https://topeducationsn.com/wp-content/uploads/2020/12/serie-dexercice-chimie-N%C2%B02-.pdf',personal:false},
  {id:'pc-4e-chimie4',title:'Chimie 4e · Série d’exercices N° 4',grade:'4e',subject:'Physique-Chimie',kind:'Exercices',description:'Quatrième série d’exercices de chimie pour la quatrième.',source:'Top Education Sénégal',url:'https://topeducationsn.com/wp-content/uploads/2020/12/serie-dexercice-chimie-N%C2%B04.pdf',personal:false},
  {id:'pc-4e-intro',title:'Physique 4e · Introduction aux sciences physiques',grade:'4e',subject:'Physique-Chimie',kind:'Exercices',description:'Travaux dirigés d’introduction aux sciences physiques.',source:'Top Education Sénégal',url:'https://topeducationsn.com/wp-content/uploads/2021/01/TD-N%C2%B01-introduction-aux-sciences-physiques.pdf',personal:false},
  {id:'pc-4e-mesure',title:'Physique 4e · Grandeurs physiques et mesure',grade:'4e',subject:'Physique-Chimie',kind:'Exercices',description:'Exercices sur les grandeurs physiques et la mesure.',source:'Top Education Sénégal',url:'https://topeducationsn.com/wp-content/uploads/2021/01/TD-N%C2%B02-grandeur-physique-et-mesure.pdf',personal:false},
  {id:'pc-4e-masse',title:'Physique 4e · Masse, masse volumique et densité',grade:'4e',subject:'Physique-Chimie',kind:'Exercices',description:'Travaux dirigés sur la masse, la masse volumique et la densité.',source:'Top Education Sénégal',url:'https://topeducationsn.com/wp-content/uploads/2021/03/TD-N%C2%B03-masse-masse-volumique-et-densite-4eme-2020-2021.pdf',personal:false},

  // SVT 4e : fiches d'exercices thématiques.
  {id:'svt-4e-td1',title:'SVT 4e · Exercices sur la leçon 1',grade:'4e',subject:'SVT',kind:'Exercices',description:'Travaux dirigés de SVT sur la première leçon de quatrième.',source:'Top Education Sénégal',url:'https://topeducationsn.com/wp-content/uploads/2022/11/TD-N%C2%B01-SVT-4eme-Lecon-1.pdf',personal:false},
  {id:'svt-4e-td2',title:'SVT 4e · Exercices sur la leçon 2',grade:'4e',subject:'SVT',kind:'Exercices',description:'Travaux dirigés de SVT sur la deuxième leçon de quatrième.',source:'Top Education Sénégal',url:'https://topeducationsn.com/wp-content/uploads/2022/11/TD-N%C2%B02-SVT-4eme-Lecon-2.pdf',personal:false},
  {id:'svt-4e-td3',title:'SVT 4e · Exercices sur les leçons 3 à 5',grade:'4e',subject:'SVT',kind:'Exercices',description:'Travaux dirigés de SVT sur les leçons 3, 4 et 5 de quatrième.',source:'Top Education Sénégal',url:'https://topeducationsn.com/wp-content/uploads/2022/11/TD-N%C2%B03-SVT-4eme-Lecon-L3_4_5.pdf',personal:false},
  {id:'svt-4e-td4',title:'SVT 4e · Exercices sur la leçon 6',grade:'4e',subject:'SVT',kind:'Exercices',description:'Travaux dirigés de SVT sur la sixième leçon de quatrième.',source:'Top Education Sénégal',url:'https://topeducationsn.com/wp-content/uploads/2022/11/TD-N%C2%B04-SVT-4eme-Lecon-6.pdf',personal:false},
  {id:'svt-4e-td5',title:'SVT 4e · Exercices sur la leçon 7',grade:'4e',subject:'SVT',kind:'Exercices',description:'Travaux dirigés de SVT sur la septième leçon de quatrième.',source:'Top Education Sénégal',url:'https://topeducationsn.com/wp-content/uploads/2022/11/TD-N%C2%B05-SVT-4eme-Lecon-7.pdf',personal:false},
  {id:'svt-4e-td6',title:'SVT 4e · Exercices sur la leçon 8',grade:'4e',subject:'SVT',kind:'Exercices',description:'Travaux dirigés de SVT sur la huitième leçon de quatrième.',source:'Top Education Sénégal',url:'https://topeducationsn.com/wp-content/uploads/2022/11/TD-N%C2%B06-SVT-4eme-Lecon-8.pdf',personal:false},

  // 3e : exercices ciblés de mathématiques, physique-chimie et SVT.
  {id:'math-3e-racines',title:'Mathématiques 3e · Racines carrées',grade:'3e',subject:'Mathématiques',kind:'Exercices',description:'Série de 4 pages sur la définition, les opérations, les comparaisons et la simplification des racines carrées.',source:'Top Education Sénégal · M. Sow',url:'https://topeducationsn.com/wp-content/uploads/2022/11/TD-N%C2%B01-RACINE-CARREE.pdf',personal:false},
  {id:'math-3e-thales',title:'Mathématiques 3e · Théorème de Thalès',grade:'3e',subject:'Mathématiques',kind:'Exercices',description:'Travaux dirigés de géométrie sur le théorème de Thalès.',source:'Top Education Sénégal',url:'https://topeducationsn.com/wp-content/uploads/2022/11/TD-N%C2%B01-THEOREME-DE-THALES.pdf',personal:false},
  {id:'math-3e-equations',title:'Mathématiques 3e · Équations et inéquations',grade:'3e',subject:'Mathématiques',kind:'Exercices',description:'Série sur les équations et inéquations du premier degré à une inconnue.',source:'Top Education Sénégal',url:'https://topeducationsn.com/wp-content/uploads/2022/11/TD-N%C2%B02-EQUATION-INEQUATION-DU-PREMIER-DEGRE-A-UNE-INCONNUE.pdf',personal:false},
  {id:'math-3e-trigo',title:'Mathématiques 3e · Relations trigonométriques',grade:'3e',subject:'Mathématiques',kind:'Exercices',description:'Entraînement sur les relations trigonométriques dans un triangle.',source:'Top Education Sénégal',url:'https://topeducationsn.com/wp-content/uploads/2023/01/TD-N%C2%B02-RELATION-TRIOGONOMETRIQUE-DANS-UN-TRIANGLE.pdf',personal:false},
  {id:'math-3e-systemes',title:'Mathématiques 3e · Systèmes d’équations',grade:'3e',subject:'Mathématiques',kind:'Exercices',description:'Travaux dirigés sur les équations et systèmes du premier degré à deux inconnues.',source:'Top Education Sénégal',url:'https://topeducationsn.com/wp-content/uploads/2023/01/TD-N%C2%B03-EQUATION-ET-SYSTEME-DEQUATIONS-DU-PREMIER-DEGRE-A-DEUX-INCONNUES.pdf',personal:false},
  {id:'math-bfem-2021',title:'Épreuve BFEM · Mathématiques · 2021',grade:'3e',subject:'Mathématiques',kind:'Épreuves',description:'Sujet de mathématiques du BFEM 2021.',source:'Top Education Sénégal',url:'https://topeducationsn.com/wp-content/uploads/2022/11/BFEM-2021-MATHEMATIQUES.pdf',personal:false},

  {id:'pc-3e-solutions',title:'Chimie 3e · Notion de solution',grade:'3e',subject:'Physique-Chimie',kind:'Exercices',description:'Travaux dirigés sur les solutions en chimie.',source:'Top Education Sénégal',url:'https://topeducationsn.com/wp-content/uploads/2022/11/TD-N%C2%B01-NOTION-DE-SOLUTION.pdf',personal:false},
  {id:'pc-3e-lentilles',title:'Physique 3e · Lentilles minces',grade:'3e',subject:'Physique-Chimie',kind:'Exercices',description:'Exercices sur les lentilles minces et leurs propriétés.',source:'Top Education Sénégal',url:'https://topeducationsn.com/wp-content/uploads/2022/11/TD-N%C2%B01-LENTILLES-MINCES.pdf',personal:false},
  {id:'pc-3e-forces',title:'Physique 3e · Notion de force',grade:'3e',subject:'Physique-Chimie',kind:'Exercices',description:'Travaux dirigés sur la notion de force.',source:'Top Education Sénégal',url:'https://topeducationsn.com/wp-content/uploads/2023/01/TD-N%C2%B03-NOTION-DE-FORCE.pdf',personal:false},
  {id:'pc-bfem-2022',title:'Épreuve BFEM · Physique-Chimie · 2022',grade:'3e',subject:'Physique-Chimie',kind:'Épreuves',description:'Sujet de physique-chimie du BFEM 2022.',source:'Top Education Sénégal',url:'https://topeducationsn.com/wp-content/uploads/2022/11/BFEM-2022-PC.pdf',personal:false},

  {id:'svt-3e-bfem-synthese',title:'SVT 3e · Synthèse d’exercices BFEM',grade:'3e',subject:'SVT',kind:'Exercices',description:'Fascicule de synthèse de 27 pages pour réviser la SVT en vue du BFEM.',source:'Top Education Sénégal',url:'https://topeducationsn.com/wp-content/uploads/2023/01/Synthese-BFEM.pdf',personal:false},
  {id:'svt-3e-recueil',title:'SVT 3e · Recueil d’exercices',grade:'3e',subject:'SVT',kind:'Exercices',description:'Recueil de 6 pages de travaux d’entraînement de SVT pour la troisième.',source:'Top Education Sénégal',url:'https://topeducationsn.com/wp-content/uploads/2022/11/RECEUIL-DEXERCICE-SVT.pdf',personal:false},

  {
    "id": "math6-d1",
    "title": "Devoir N°1 · Maths · 6e · S1",
    "grade": "6e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Devoir de mathématiques de sixième, premier semestre 2020-2021.",
    "source": "Top Education · M. Sow",
    "url": "https://topeducationsn.com/wp-content/uploads/2021/01/devoir-N%C2%B01-maths-semestre-1-6eme-2020-2021.pdf",
    "personal": false
  },
  {
    "id": "math6-d2",
    "title": "Devoir N°2 · Maths · 6e · S1",
    "grade": "6e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Deuxième devoir de mathématiques de sixième, premier semestre 2020-2021.",
    "source": "Top Education · M. Sow",
    "url": "https://topeducationsn.com/wp-content/uploads/2021/03/devoir-N%C2%B02-maths-semestre-1-6eme-2020-2021.pdf",
    "personal": false
  },
  {
    "id": "math6-c1",
    "title": "Composition · Maths · 6e · S1",
    "grade": "6e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Composition de mathématiques de sixième, premier semestre 2020-2021.",
    "source": "Top Education · M. Sow",
    "url": "https://topeducationsn.com/wp-content/uploads/2021/03/composition-semestre-1-6eme-2020-2021.pdf",
    "personal": false
  },
  {
    "id": "math6-c2",
    "title": "Composition · Maths · 6e · S2",
    "grade": "6e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Composition de mathématiques de sixième, deuxième semestre 2020-2021.",
    "source": "Top Education · M. Sow",
    "url": "https://topeducationsn.com/wp-content/uploads/2021/10/composition-maths-semestre-2-6eme-2020-2021.pdf",
    "personal": false
  },
  {
    "id": "math6-d3",
    "title": "Devoir N°1 · Maths · 6e · S2",
    "grade": "6e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Devoir de mathématiques de sixième, deuxième semestre 2020-2021.",
    "source": "Top Education · M. Sow",
    "url": "https://topeducationsn.com/wp-content/uploads/2021/10/devoir-N%C2%B01-maths-semestre-2-6eme-2020-2021.pdf",
    "personal": false
  },
  {
    "id": "math6-d4",
    "title": "Devoir N°2 · Maths · 6e · S2",
    "grade": "6e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Deuxième devoir de mathématiques de sixième, deuxième semestre 2020-2021.",
    "source": "Top Education · M. Sow",
    "url": "https://topeducationsn.com/wp-content/uploads/2021/10/devoir-N%C2%B02-maths-semestre-2-6eme-2020-2021-1.pdf",
    "personal": false
  },
  {
    "id": "math6-d5",
    "title": "Devoir N°1 · Maths · 6e · 2021-2022",
    "grade": "6e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Devoir de mathématiques de sixième, premier semestre 2021-2022.",
    "source": "Top Education Sénégal",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/Devoir-maths-N%C2%B01-Classe-6e-premier-semestre-2021-2022.pdf",
    "personal": false
  },
  {
    "id": "math5-e1",
    "title": "Évaluation N°1 · Maths · 5e",
    "grade": "5e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Évaluation de mathématiques de cinquième, premier semestre 2022-2023.",
    "source": "Top Education · M. Sow",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/Evaluation-N%C2%B01-MATHS-Semestre-1-Classe-5eme-2022-2023.pdf",
    "personal": false
  },
  {
    "id": "math5-e2",
    "title": "Évaluation N°2 · Maths · 5e",
    "grade": "5e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Deuxième évaluation de mathématiques de cinquième.",
    "source": "Top Education · M. Sow",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/12/EVALUATION-N%C2%B02-MATHS-5EME-1.pdf",
    "personal": false
  },
  {
    "id": "math5-rem",
    "title": "Devoir de remédiation · Maths · 5e",
    "grade": "5e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Devoir de remédiation du premier semestre 2022-2023.",
    "source": "Top Education · M. Sow",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/12/DEVOIR-DE-REMEDIATION-N%C2%B01-MATHS-Semestre-1-Classe-5eme-2022-2023-1.pdf",
    "personal": false
  },
  {
    "id": "math5-dept",
    "title": "Devoir départemental · Maths · 5e",
    "grade": "5e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Devoir départemental de mathématiques de cinquième.",
    "source": "Top Education · IA Fatick",
    "url": "https://topeducationsn.com/wp-content/uploads/2023/01/Devoir-depart-5iem-maths.pdf",
    "personal": false
  },
  {
    "id": "math5-d1",
    "title": "Devoir N°1 · Maths · 5e · S1",
    "grade": "5e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Devoir de mathématiques de cinquième, premier semestre 2020-2021.",
    "source": "Top Education · M. Sow",
    "url": "https://topeducationsn.com/wp-content/uploads/2021/01/devoir-N%C2%B01-maths-semestre-1-5eme-2020-2021.pdf",
    "personal": false
  },
  {
    "id": "math5-d2",
    "title": "Devoir N°2 · Maths · 5e · S1",
    "grade": "5e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Deuxième devoir de mathématiques de cinquième, premier semestre 2020-2021.",
    "source": "Top Education · M. Sow",
    "url": "https://topeducationsn.com/wp-content/uploads/2021/03/devoir-N%C2%B02-maths-semestre-1-5eme-2020-2021.pdf",
    "personal": false
  },
  {
    "id": "math5-comp1",
    "title": "Composition · Maths · 5e · S1",
    "grade": "5e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Composition de mathématiques de cinquième, année 2020-2021.",
    "source": "Top Education · M. Sow",
    "url": "https://topeducationsn.com/wp-content/uploads/2021/03/composition-premier-semestre-maths-5eme-20120-2021.pdf",
    "personal": false
  },
  {
    "id": "math5-d3",
    "title": "Devoir N°1 · Maths · 5e · S2",
    "grade": "5e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Devoir de mathématiques de cinquième, deuxième semestre 2020-2021.",
    "source": "Top Education · M. Sow",
    "url": "https://topeducationsn.com/wp-content/uploads/2021/10/devoir-N%C2%B01-maths-semestre-2-5eme-2020-2021.pdf",
    "personal": false
  },
  {
    "id": "math5-d4",
    "title": "Devoir N°2 · Maths · 5e · S2",
    "grade": "5e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Deuxième devoir de mathématiques de cinquième, deuxième semestre 2020-2021.",
    "source": "Top Education · M. Sow",
    "url": "https://topeducationsn.com/wp-content/uploads/2021/10/devoir-N%C2%B02-maths-semestre-2-5eme-2020-2021.pdf",
    "personal": false
  },
  {
    "id": "math5-comp2",
    "title": "Composition · Maths · 5e · 2021-2022",
    "grade": "5e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Composition de mathématiques de cinquième, premier semestre 2021-2022.",
    "source": "Top Education Sénégal",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/Composition-Semestre1-Classe-5eme-2021-2022-Version-finale.pdf",
    "personal": false
  },
  {
    "id": "math4-e1",
    "title": "Évaluation N°1 · Maths · 4e",
    "grade": "4e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Évaluation de mathématiques de quatrième, premier semestre 2022-2023.",
    "source": "Top Education · M. Sow",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/Evaluation-MATHS-N%C2%B01-Semestre1-Classe-4eme-2022-2023.pdf",
    "personal": false
  },
  {
    "id": "math4-rem",
    "title": "Devoir de remédiation · Maths · 4e",
    "grade": "4e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Devoir de remédiation de mathématiques du premier semestre 2022-2023.",
    "source": "Top Education · M. Sow",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/12/Devoir-REMEDIATION-N%C2%B01-de-Mathematiques-du-1er-Semestre-en-4e-2022-2023.pdf",
    "personal": false
  },
  {
    "id": "math4-e2",
    "title": "Épreuve de mathématiques · 4e",
    "grade": "4e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Épreuve de mathématiques de quatrième.",
    "source": "Top Education · IA Fatick",
    "url": "https://topeducationsn.com/wp-content/uploads/2023/01/Epreuve-maths-4eme.pdf",
    "personal": false
  },
  {
    "id": "math4-dept",
    "title": "Devoir départemental · Maths · 4e",
    "grade": "4e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Devoir départemental de mathématiques de quatrième.",
    "source": "Top Education · IA Ziguinchor",
    "url": "https://topeducationsn.com/wp-content/uploads/2023/01/Devoir-departemental-4eme.pdf",
    "personal": false
  },
  {
    "id": "math4-d1",
    "title": "Devoir N°1 · Maths · 4e · S1",
    "grade": "4e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Devoir de mathématiques de quatrième, premier semestre 2020-2021.",
    "source": "Top Education · M. Sow",
    "url": "https://topeducationsn.com/wp-content/uploads/2021/03/devoir-N%C2%B01-maths-semestre-1-4eme-2020-2021.pdf",
    "personal": false
  },
  {
    "id": "math4-comp1",
    "title": "Composition · Maths · 4e · S1",
    "grade": "4e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Composition de mathématiques de quatrième, premier semestre 2020-2021.",
    "source": "Top Education · M. Sow",
    "url": "https://topeducationsn.com/wp-content/uploads/2021/03/composition-maths-semestre-1-4eme-2020-2021.pdf",
    "personal": false
  },
  {
    "id": "math4-d2",
    "title": "Devoir N°1 · Maths · 4e · S2",
    "grade": "4e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Devoir de mathématiques de quatrième, deuxième semestre 2020-2021.",
    "source": "Top Education · M. Sow",
    "url": "https://topeducationsn.com/wp-content/uploads/2021/10/devoir-N%C2%B01-maths-semestre-2-4eme-2020-2021.pdf",
    "personal": false
  },
  {
    "id": "math4-d3",
    "title": "Devoir N°2 · Maths · 4e · S2",
    "grade": "4e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Deuxième devoir de mathématiques de quatrième, deuxième semestre 2020-2021.",
    "source": "Top Education · M. Sow",
    "url": "https://topeducationsn.com/wp-content/uploads/2021/10/devoir-N%C2%B02-maths-semestre-2-4eme-2020-2021.pdf",
    "personal": false
  },
  {
    "id": "math4-comp2",
    "title": "Composition · Maths · 4e · S2",
    "grade": "4e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Composition de mathématiques de quatrième, deuxième semestre 2020-2021.",
    "source": "Top Education · M. Sow",
    "url": "https://topeducationsn.com/wp-content/uploads/2021/10/composition-maths-semestre-2-4eme-2020-2021.pdf",
    "personal": false
  },
  {
    "id": "math3-comp-stl",
    "title": "Composition du 2e semestre · Maths · 3e · Saint-Louis",
    "grade": "3e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Composition du deuxième semestre 2024 de l’IA de Saint-Louis.",
    "source": "Top Education · IA Saint-Louis",
    "url": "https://topeducationsn.com/wp-content/uploads/2024/09/EPREUVE-MATHS-3eme-.pdf",
    "personal": false
  },
  {
    "id": "math3-zonal",
    "title": "Devoir zonal N°2 · Maths · 3e · Kaffrine",
    "grade": "3e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Épreuve zonale de mathématiques de troisième, année 2024.",
    "source": "Top Education · IA Kaffrine",
    "url": "https://topeducationsn.com/wp-content/uploads/2024/09/ZONAL-2-MATHS-3e-2024-2.pdf",
    "personal": false
  },
  {
    "id": "math3-bfem-blanc",
    "title": "BFEM blanc · Maths · 3e · Rufisque",
    "grade": "3e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Sujet de BFEM blanc de mathématiques organisé à Rufisque.",
    "source": "Top Education · IA Rufisque",
    "url": "https://topeducationsn.com/wp-content/uploads/2024/09/bfem-blanc.pdf",
    "personal": false
  },
  {
    "id": "math3-bassin",
    "title": "Devoir N°2 · Maths · 3e · Bassin 9",
    "grade": "3e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Devoir de mathématiques du bassin 9 de Khombole, année 2023-2024.",
    "source": "Top Education · Bassin 9",
    "url": "https://topeducationsn.com/wp-content/uploads/2024/09/DEVOIR-N%C2%B02-MATHS-3em-BASSIN-9-KHOMBOLE-2023-2024.pdf",
    "personal": false
  },
  {
    "id": "math3-comp-kaffrine",
    "title": "Composition · Maths · 3e · Kaffrine",
    "grade": "3e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Composition de mathématiques de troisième, IA Kaffrine, 2024.",
    "source": "Top Education · IA Kaffrine",
    "url": "https://topeducationsn.com/wp-content/uploads/2024/09/Comp-3e-2nd-sem-2024.pdf",
    "personal": false
  },
  {
    "id": "math3-devoir2",
    "title": "Devoir N°1 · Maths · 3e · 2e semestre",
    "grade": "3e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Devoir de mathématiques du deuxième semestre 2023-2024.",
    "source": "Top Education Sénégal",
    "url": "https://topeducationsn.com/wp-content/uploads/2024/09/Deoir-N%C2%B01-2nd-Semestre-2023-2024.pdf",
    "personal": false
  },
  {
    "id": "math3-louga",
    "title": "Composition · Maths · 3e · Louga",
    "grade": "3e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Composition de mathématiques de troisième, IA Louga.",
    "source": "Top Education · IA Louga",
    "url": "https://topeducationsn.com/wp-content/uploads/2024/09/MATHS-3%C2%B0.pdf",
    "personal": false
  },
  {
    "id": "math3-epreuve",
    "title": "Épreuve de mathématiques · 3e",
    "grade": "3e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Épreuve de mathématiques de troisième.",
    "source": "Top Education Sénégal",
    "url": "https://topeducationsn.com/wp-content/uploads/2024/09/EPREUVE-DE-MATHEMATIQUES-3ieme-1.pdf",
    "personal": false
  },
  {
    "id": "math3-kaffrine1",
    "title": "Devoir N°1 · Maths · 3e · Kaffrine",
    "grade": "3e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Devoir de mathématiques de troisième, IEF Kaffrine.",
    "source": "Top Education · IA Kaffrine",
    "url": "https://topeducationsn.com/wp-content/uploads/2024/09/DEVOIR-1-3M-1.pdf",
    "personal": false
  },
  {
    "id": "math3-kaffrine2",
    "title": "Devoir · Maths · 3e · Kaffrine · 2024",
    "grade": "3e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Devoir de mathématiques publié par l’IEF de Kaffrine.",
    "source": "Top Education · IA Kaffrine",
    "url": "https://topeducationsn.com/wp-content/uploads/2024/09/Devoir-1-de-maths-3e-2024-pdf.pdf",
    "personal": false
  },
  {
    "id": "math3-eval2",
    "title": "Évaluation N°2 · Maths · 3e · 2021-2022",
    "grade": "3e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Deuxième évaluation de mathématiques de troisième, année 2021-2022.",
    "source": "Top Education Sénégal",
    "url": "https://topeducationsn.com/wp-content/uploads/2024/09/Evaluation-N%C2%B02-MATHS-Classe-3eme-2021-2022-version-finale.pdf",
    "personal": false
  },
  {
    "id": "math3-bfem20",
    "title": "BFEM · Maths · 2020",
    "grade": "3e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Sujet de mathématiques du BFEM 2020.",
    "source": "Top Education Sénégal",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/BFEM-2020-MATHEMATIQUES.pdf",
    "personal": false
  },
  {
    "id": "math3-bfem19",
    "title": "BFEM · Maths · 2019",
    "grade": "3e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Sujet de mathématiques du BFEM 2019.",
    "source": "Top Education Sénégal",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/BFEM-2019-MATHEMATIQUES.pdf",
    "personal": false
  },
  {
    "id": "math3-bfem18",
    "title": "BFEM · Maths · 2018",
    "grade": "3e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Sujet de mathématiques du BFEM 2018.",
    "source": "Top Education Sénégal",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/BFEM-2018-MATHEMATIQUES.pdf",
    "personal": false
  },
  {
    "id": "math3-bfem17",
    "title": "BFEM · Maths · 2017",
    "grade": "3e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Sujet de mathématiques du BFEM 2017.",
    "source": "Top Education Sénégal",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/BFEM-2017-MATHEMATIQUES.pdf",
    "personal": false
  },
  {
    "id": "pc4-eval",
    "title": "Évaluation N°1 · PC · 4e",
    "grade": "4e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Évaluation de sciences physiques du premier semestre 2022-2023.",
    "source": "Top Education · M. Sow",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/Evaluation-PC-N%C2%B01-Semestre1-Classe-4eme-2022-2023-1.pdf",
    "personal": false
  },
  {
    "id": "pc4-comp",
    "title": "Composition · PC · 4e",
    "grade": "4e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Composition du premier semestre de sciences physiques de quatrième.",
    "source": "Top Education · IA Saint-Louis",
    "url": "https://topeducationsn.com/wp-content/uploads/2023/01/composition-SP-4eme.pdf",
    "personal": false
  },
  {
    "id": "pc4-d1",
    "title": "Devoir N°1 · PC · 4e · S1",
    "grade": "4e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Premier devoir de sciences physiques de quatrième, 2020-2021.",
    "source": "Top Education · M. Sow",
    "url": "https://topeducationsn.com/wp-content/uploads/2021/01/devoir-N%C2%B01-pc-semestre-1-4eme-2020-2021-1.pdf",
    "personal": false
  },
  {
    "id": "pc4-d2",
    "title": "Devoir N°2 · PC · 4e · S1",
    "grade": "4e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Deuxième devoir de sciences physiques de quatrième, 2020-2021.",
    "source": "Top Education · M. Sow",
    "url": "https://topeducationsn.com/wp-content/uploads/2021/01/devoir-N%C2%B02-pc-semestre-1-4eme-2020-2021.pdf",
    "personal": false
  },
  {
    "id": "pc4-d3",
    "title": "Devoir N°3 · PC · 4e · S1",
    "grade": "4e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Troisième devoir de sciences physiques de quatrième, 2020-2021.",
    "source": "Top Education · M. Sow",
    "url": "https://topeducationsn.com/wp-content/uploads/2021/03/devoir-N%C2%B03-pc-semestre-1-4eme-2020-2021.pdf",
    "personal": false
  },
  {
    "id": "pc4-comp1",
    "title": "Composition · PC · 4e · S1",
    "grade": "4e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Composition de sciences physiques de quatrième, 2020-2021.",
    "source": "Top Education · M. Sow",
    "url": "https://topeducationsn.com/wp-content/uploads/2021/03/composition-pc-semestre-1-4eme-2020-2021.pdf",
    "personal": false
  },
  {
    "id": "pc4-d4",
    "title": "Devoir N°1 · PC · 4e · S2",
    "grade": "4e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Premier devoir de sciences physiques de quatrième, deuxième semestre 2020-2021.",
    "source": "Top Education · M. Sow",
    "url": "https://topeducationsn.com/wp-content/uploads/2021/10/devoir-N%C2%B01-pc-semestre-2-4eme-2020-2021.pdf",
    "personal": false
  },
  {
    "id": "pc4-d5",
    "title": "Devoir N°2 · PC · 4e · S2",
    "grade": "4e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Deuxième devoir de sciences physiques de quatrième, deuxième semestre 2020-2021.",
    "source": "Top Education · M. Sow",
    "url": "https://topeducationsn.com/wp-content/uploads/2021/10/devoir-N%C2%B02-pc-semestre-2-4eme-2020-2021.pdf",
    "personal": false
  },
  {
    "id": "pc4-d6",
    "title": "Devoir N°3 · PC · 4e · S2",
    "grade": "4e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Troisième devoir de sciences physiques de quatrième, deuxième semestre 2020-2021.",
    "source": "Top Education · M. Sow",
    "url": "https://topeducationsn.com/wp-content/uploads/2021/10/devoir-N%C2%B03-pc-semestre-2-4eme-2020-2021.pdf",
    "personal": false
  },
  {
    "id": "pc4-comp2",
    "title": "Composition · PC · 4e · 2021-2022",
    "grade": "4e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Composition de sciences physiques de quatrième, 2021-2022.",
    "source": "Top Education Sénégal",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/Composition-SP-Semestre-1-4eme-2021-2022.pdf",
    "personal": false
  },
  {
    "id": "pc3-eval1",
    "title": "Évaluation N°1 · PC · 3e · 2022-2023",
    "grade": "3e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Évaluation de sciences physiques du premier semestre 2022-2023.",
    "source": "Top Education · IA Saint-Louis",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/EVALUATION-SP-3e-N%C2%B01-2022-2023.pdf",
    "personal": false
  },
  {
    "id": "pc3-dm",
    "title": "Devoir de maison · PC · 3e",
    "grade": "3e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Devoir de sciences physiques du CEM Missirah Wadene.",
    "source": "Top Education · IA Kaffrine",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/DEVOIR-DE-MAISON-PHYSIQUE-CHIMIQUE.pdf",
    "personal": false
  },
  {
    "id": "pc3-eval2",
    "title": "Évaluation N°2 · PC · 3e · 2022-2023",
    "grade": "3e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Évaluation du premier semestre 2022-2023, IEF de Pété.",
    "source": "Top Education · IEF Pété",
    "url": "https://topeducationsn.com/wp-content/uploads/2023/01/Proposition-Sujet-Evaluation-PC-N%C2%B02-Semestre1-Classe-3eme-2022-2023.pdf",
    "personal": false
  },
  {
    "id": "pc3-dept",
    "title": "Devoir départemental · PC · 3e",
    "grade": "3e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Épreuve de devoir départemental de sciences physiques de troisième.",
    "source": "Top Education Sénégal",
    "url": "https://topeducationsn.com/wp-content/uploads/2023/01/3%C2%B0-EPREUVE-DEVOIR-DEPARTEMENTAL-SCIENCES-PHYSIQUES-.pdf",
    "personal": false
  },
  {
    "id": "pc3-d2024",
    "title": "Devoir N°2 · PC · 3e · 2024",
    "grade": "3e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Devoir de sciences physiques du deuxième semestre 2023-2024.",
    "source": "Top Education · IA Saint-Louis",
    "url": "https://topeducationsn.com/wp-content/uploads/2024/09/Devoir-2-pc-second-semestre-2024.pdf",
    "personal": false
  },
  {
    "id": "pc3-bassin",
    "title": "Devoir N°2 · PC · 3e · Bassin 2023-2024",
    "grade": "3e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Devoir de sciences physiques du bassin 2023-2024.",
    "source": "Top Education Sénégal",
    "url": "https://topeducationsn.com/wp-content/uploads/2024/09/DEVOIR-N%C2%B02-BASSIN-de-SP-2023-2024.pdf",
    "personal": false
  },
  {
    "id": "pc3-rem",
    "title": "Devoir de remédiation · PC · 3e",
    "grade": "3e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Devoir de remédiation de sciences physiques de troisième.",
    "source": "Top Education · M. Ndour",
    "url": "https://topeducationsn.com/wp-content/uploads/2024/09/DEVOIR-DE-REMEDIATION-SP-3e-M.-NDOUR.pdf",
    "personal": false
  },
  {
    "id": "pc3-d1",
    "title": "Devoir N°2 · PC · 3e · S1",
    "grade": "3e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Devoir de sciences physiques du premier semestre 2022-2023.",
    "source": "Top Education · M. Sow",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/DEVOIR-DE-SP-3eme-N%C2%B0-02-DU-1ER-SEMESTRE-2022-2023.pdf",
    "personal": false
  },
  {
    "id": "pc3-bfem21",
    "title": "BFEM · PC · 2021",
    "grade": "3e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Sujet de sciences physiques du BFEM 2021.",
    "source": "Top Education Sénégal",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/BFEM-2021-PC.pdf",
    "personal": false
  },
  {
    "id": "pc3-bfem20",
    "title": "BFEM · PC · 2020",
    "grade": "3e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Sujet de sciences physiques du BFEM 2020.",
    "source": "Top Education Sénégal",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/BFEM-2020-PC.pdf",
    "personal": false
  },
  {
    "id": "pc3-bfem19",
    "title": "BFEM · PC · 2019",
    "grade": "3e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Sujet de sciences physiques du BFEM 2019.",
    "source": "Top Education Sénégal",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/BFEM-2019-PC.pdf",
    "personal": false
  },
  {
    "id": "pc3-bfem18",
    "title": "BFEM · PC · 2018",
    "grade": "3e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Sujet de sciences physiques du BFEM 2018.",
    "source": "Top Education Sénégal",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/BFEM-2018-PC.pdf",
    "personal": false
  },
  {
    "id": "pc3-bfem17",
    "title": "BFEM · PC · 2017",
    "grade": "3e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Sujet de sciences physiques du BFEM 2017.",
    "source": "Top Education Sénégal",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/BFEM-2017-PC.pdf",
    "personal": false
  },
  {
    "id": "pc3-bfem16",
    "title": "BFEM · PC · 2016",
    "grade": "3e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Sujet de sciences physiques du BFEM 2016.",
    "source": "Top Education Sénégal",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/BFEM-2016-PC.pdf",
    "personal": false
  },
  {
    "id": "svt6-comp",
    "title": "Composition de SVT · 6e · IA Dakar · 2023-2024",
    "grade": "6e",
    "subject": "SVT",
    "kind": "Devoirs",
    "description": "Composition du second semestre publiée par la cellule SVT Kennedy, IEF Dakar Plateau.",
    "source": "Réseau Scolaire · IA Dakar",
    "url": "https://reseauscolaire.com/wp-content/uploads/2024/06/composition-des-6eme-du-second-semestre.pdf",
    "personal": false
  },
  {
    "id": "svt6-d1",
    "title": "Premier devoir de SVT · 6e · 2022-2023",
    "grade": "6e",
    "subject": "SVT",
    "kind": "Devoirs",
    "description": "Devoir de SVT de sixième du Cours privé IAC.",
    "source": "Réseau Scolaire · Cours privé IAC",
    "url": "https://reseauscolaire.com/wp-content/uploads/2022/11/premier-devoir-6em-ps-2023-cscin.pdf",
    "personal": false
  },
  {
    "id": "svt3-d1",
    "title": "Devoir N°1 · SVT · 3e · 2023-2024",
    "grade": "3e",
    "subject": "SVT",
    "kind": "Devoirs",
    "description": "Devoir du premier semestre du CEM Odobéré, IEF Kanel.",
    "source": "Top Education · IA Matam",
    "url": "https://topeducationsn.com/wp-content/uploads/2024/09/Devoir-1-3e-2023-2024.-PDF.pdf",
    "personal": false
  },
  {
    "id": "svt3-d2",
    "title": "Devoir N°2 · SVT · 3e · 2020-2021",
    "grade": "3e",
    "subject": "SVT",
    "kind": "Devoirs",
    "description": "Devoir de SVT de troisième, classes A, B et C.",
    "source": "Top Education · Groupe scolaire Angéla Davis",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/SVT-3EME.pdf",
    "personal": false
  },
  {
    "id": "svt3-comp",
    "title": "Composition régionale · SVT · 3e · Kolda · 2023",
    "grade": "3e",
    "subject": "SVT",
    "kind": "Devoirs",
    "description": "Composition standardisée du deuxième semestre 2022-2023, IA Kolda.",
    "source": "Réseau Scolaire · IA Kolda",
    "url": "https://reseauscolaire.com/wp-content/uploads/2023/06/SVT_3eme_Compo-2nd-sem_2022-2023_IAKD.pdf",
    "personal": false
  },
  {
    "id": "svt3-bfem",
    "title": "BFEM blanc · SVT · 3e",
    "grade": "3e",
    "subject": "SVT",
    "kind": "Devoirs",
    "description": "Sujet de BFEM blanc de SVT organisé par l’IA de Thiès et l’IEF de Mbour 1.",
    "source": "Top Education · IA Thiès",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/PROPOSITION-SVT-BFEM-BLANC.pdf",
    "personal": false
  },
  {
    "id": "svt3-eval",
    "title": "Évaluation N°2 · SVT · 3e · 2022-2023",
    "grade": "3e",
    "subject": "SVT",
    "kind": "Devoirs",
    "description": "Évaluation de SVT de troisième réalisée par une cellule mixte d’établissements.",
    "source": "Top Education · Cellule mixte",
    "url": "https://topeducationsn.com/wp-content/uploads/2024/09/Evaluation2SVT-3eme-Cellule-mixte-ETAB-2022-2023.pdf",
    "personal": false
  },
  {
    "id": "svt3-white",
    "title": "Examen blanc · SVT · 3e · IA Rufisque · 2023",
    "grade": "3e",
    "subject": "SVT",
    "kind": "Devoirs",
    "description": "Examen blanc de SVT de troisième organisé par l’IA de Rufisque.",
    "source": "Top Education · IA Rufisque",
    "url": "https://topeducationsn.com/wp-content/uploads/2024/09/Examen-blanc_SVT_3eme_IA-Rufisque_2023.pdf",
    "personal": false
  },
  {
    "id": "svt3-annale",
    "title": "Annale de SVT · 3e · CEM Bambey 3",
    "grade": "3e",
    "subject": "SVT",
    "kind": "Devoirs",
    "description": "Annale élaborée par la cellule pédagogique de SVT du CEM Bambey 3.",
    "source": "Top Education · CEM Bambey 3",
    "url": "https://topeducationsn.com/wp-content/uploads/2024/09/ANNALE-DE-SVT-3eme.pdf",
    "personal": false
  }
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
    <div class="resource-meta"><span class="meta-chip">${esc(item.subject)}</span><span class="meta-chip">${displayResourceKind(item)}</span></div>
    <div class="resource-footer"><span class="source-label" title="${esc(item.source||'Document PDF')}">${esc(item.source||'Document PDF')}</span>${action}</div>
    ${isPersonal(item)?`<button class="delete-resource" data-delete-resource="${esc(item.id)}">Supprimer ce PDF</button>`:''}
  </article>`;
}
const LIBRARY_SUBJECTS = [
  {name:'Mathématiques',description:'Nombres, calcul, géométrie et résolution de problèmes.'},
  {name:'Physique-Chimie',description:'Matière, énergie, électricité et transformations · 4e et 3e.'},
  {name:'SVT',description:'Sciences de la vie, de la Terre et environnement.'}
];
const LIBRARY_CATEGORIES = [
  {name:'Cours',icon:'▤',description:'Leçons, fiches et fascicules de cours.'},
  {name:'Exercices',icon:'✎',description:'Applications et entraînements.'},
  {name:'Devoirs',icon:'✓',description:'Devoirs, exercices, compositions, examens, tests et annales.'},
  {name:'Autres',icon:'＋',description:'Les autres documents que tu ajoutes.'}
];
function isAssessmentKind(kind){
  const value=String(kind||'Autre').toLocaleLowerCase('fr-FR').normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  return ['devoir','examen','composition','epreuve','annale','bfem','test','evaluation','controle','interrogation','sujet','concours','exercice'].some(term=>value.includes(term));
}
function displayResourceKind(item){
  const value=String(item.kind||'Autre').toLocaleLowerCase('fr-FR').normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  if(value.includes('cours')&&value.includes('exercice')) return item.kind;
  return isAssessmentKind(value)?(value.includes('exercice')?'Exercices':'Devoirs'):(item.kind||'Autre');
}
function libraryCategories(item){
  const kind=String(item.kind||'Autre').toLocaleLowerCase('fr-FR').normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  const categories=[];
  if(kind.includes('cours')) categories.push('Cours');
  if(kind.includes('exercice')) categories.push('Exercices');
  if(isAssessmentKind(kind)) categories.push('Devoirs');
  if(!categories.length&&kind.includes('fascicule')) categories.push('Cours');
  if(!categories.length) categories.push('Autres');
  return [...new Set(categories)];
}
function isInLibraryGrade(item,grade){
  return grade==='Toutes' || item.grade===grade || item.grade==='6e–3e' || item.grade==='6e-3e';
}
function scrollLibraryTools(){
  const tools=document.getElementById('libraryTools');
  if(!tools)return;
  const top=window.scrollY+tools.getBoundingClientRect().top-8;
  window.scrollTo({top:Math.max(0,top),behavior:'smooth'});
}
function syncClassBottomNav(query=''){
  document.querySelectorAll('.class-nav-link').forEach(button=>{
    const active=!query && state.libraryPath.grade===button.dataset.libraryGrade;
    button.classList.toggle('active',active);
    button.setAttribute('aria-pressed',String(active));
  });
}
function renderLibrary(){
  const query=(document.getElementById('searchInput')?.value||'').trim().toLocaleLowerCase('fr-FR');
  syncClassBottomNav(query);
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
    back.classList.remove('hidden');
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
      return '<button type="button" class="library-tile class-tile" data-library-grade="'+grade+'"><span class="library-tile-main"><span class="library-tile-badge">'+grade+'</span><span class="library-tile-copy"><strong>Classe de '+grade+'</strong><small>'+(grade==='6e'||grade==='5e'?'Mathématiques · SVT':'Mathématiques · Physique-Chimie · SVT')+'</small></span></span><span class="library-tile-tail"><b>'+count+'</b><small>ressources</small><span>→</span></span></button>';
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
      const total=resources.filter(item=>isInLibraryGrade(item,path.grade)&&item.subject===path.subject&&libraryCategories(item).includes(category.name)).length;
      return '<button type="button" class="library-tile category-tile" data-library-category="'+esc(category.name)+'"><span class="library-tile-main"><span class="library-tile-symbol category-symbol">'+category.icon+'</span><span class="library-tile-copy"><strong>'+esc(category.name)+'</strong><small>'+esc(category.description)+'</small></span></span><span class="library-tile-tail"><b>'+total+'</b><small>documents</small><span>→</span></span></button>';
    }).join('')+'</div>';
    return;
  }

  const items=resources.filter(item=>isInLibraryGrade(item,path.grade)&&item.subject===path.subject&&libraryCategories(item).includes(path.category));
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
function syncResourceSubjectOptions(){
  const grade=document.querySelector('#resourceForm select[name="grade"]');
  const subject=document.querySelector('#resourceForm select[name="subject"]');
  if(!grade||!subject)return;
  const pc=Array.from(subject.options).find(option=>option.value==='Physique-Chimie');
  if(!pc)return;
  pc.disabled=['6e','5e'].includes(grade.value);
  if(pc.disabled&&subject.value==='Physique-Chimie')subject.value='Mathématiques';
}
function openModal(prefill={}){
  document.getElementById('resourceModal').classList.remove('hidden');
  document.body.style.overflow='hidden';
  returnToLibraryAfterSave=Boolean(prefill.returnToLibrary);
  const form=document.getElementById('resourceForm');
  if(prefill.grade) form.elements.grade.value=prefill.grade;
  if(prefill.subject) form.elements.subject.value=prefill.subject;
  if(prefill.kind) form.elements.kind.value=prefill.kind;
  syncResourceSubjectOptions();
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
  state.libraryPath={grade:'Toutes',subject:'',category:''};
  document.getElementById('libraryBackBtn').classList.remove('hidden');
  document.getElementById('libraryBreadcrumb').innerHTML='<button type="button" data-library-step="root">Bibliothèque</button><span>›</span><strong>Toutes les ressources</strong>';
  document.getElementById('libraryIntro').innerHTML='<div class="eyebrow">BIBLIOTHÈQUE COMPLÈTE</div><h2>Tous les PDF disponibles</h2><p>'+resources.length+' documents PDF à consulter dans la bibliothèque.</p>';
  document.getElementById('libraryResults').innerHTML=resources.map(item=>resourceCard(item)).join('');
  document.getElementById('libraryEmpty').classList.add('hidden');
  return;
 }
 if(event.target.closest('[data-library-by-subject]')){state.libraryPath={grade:'Toutes',subject:'',category:''};renderLibrary();return;}
 const grade=event.target.closest('[data-library-grade]');
 if(grade){
  document.getElementById('searchInput').value='';
  state.libraryPath={grade:grade.dataset.libraryGrade,subject:'',category:''};
  renderLibrary();
  document.getElementById('libraryIntro').scrollIntoView({behavior:'smooth',block:'start'});
  return;
 }
 const subject=event.target.closest('[data-library-subject]');
 if(subject){state.libraryPath.subject=subject.dataset.librarySubject;state.libraryPath.category='';renderLibrary();scrollLibraryTools();return;}
 const category=event.target.closest('[data-library-category]');
 if(category){state.libraryPath.category=category.dataset.libraryCategory;renderLibrary();scrollLibraryTools();return;}
 const stepButton=event.target.closest('[data-library-step]');
 if(stepButton){
  const step=stepButton.dataset.libraryStep;
  if(step==='root'){state.libraryPath={grade:'',subject:'',category:''};document.getElementById('searchInput').value='';}
  else if(step==='grade')state.libraryPath={grade:state.libraryPath.grade,subject:'',category:''};
  else if(step==='subject')state.libraryPath.category='';
  renderLibrary();scrollLibraryTools();return;
 }
 if(event.target.closest('[data-library-back]')||event.target.closest('#libraryBackBtn')){
  const search=document.getElementById('searchInput');
  if(search.value.trim())search.value='';
  else if(state.libraryPath.grade==='Toutes')state.libraryPath={grade:'',subject:'',category:''};
  else if(state.libraryPath.category)state.libraryPath.category='';
  else if(state.libraryPath.subject)state.libraryPath.subject='';
  else state.libraryPath.grade='';
  renderLibrary();scrollLibraryTools();return;
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
document.querySelector('#resourceForm select[name="grade"]').addEventListener('change',syncResourceSubjectOptions);
syncResourceSubjectOptions();
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
