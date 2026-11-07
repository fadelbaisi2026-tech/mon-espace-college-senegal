'use strict';

const { isPdfUrl, displayResourceKind, libraryCategories, isLocalPdfResource, isLibraryLandingView } = window.MonEspaceCatalogUtils;

const ADEM_ROOT = 'https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/';
const ADEM_VER = '?ver=1791159802098';

const seedResources = [
  {
    "id": "math-senumaths-6e",
    "title": "SENEMATHS · Cours complet de mathématiques · 6e",
    "grade": "6e",
    "subject": "Mathématiques",
    "kind": "Cours",
    "description": "Cours complet de mathématiques et progression pédagogique pour la classe de sixième, édition SENEMATHS.",
    "source": "Ibou Sène · SUNUMATHS",
    "url": "https://sunumaths.com/wp-content/uploads/2021/01/SENEMATHS-6e%CC%80me-2.pdf",
    "personal": false
  },
  {
    "id": "math-senumaths-5e",
    "title": "SENEMATHS · Cours complet de mathématiques · 5e",
    "grade": "5e",
    "subject": "Mathématiques",
    "kind": "Cours",
    "description": "Cours complet de mathématiques et progression pédagogique pour la classe de cinquième, édition SENEMATHS.",
    "source": "Ibou Sène · SUNUMATHS",
    "url": "https://sunumaths.com/wp-content/uploads/2021/01/SENEMATHS-5e%CC%80me-2.pdf",
    "personal": false
  },
  {
    "id": "math-senumaths-4e",
    "title": "SENEMATHS · Cours complet de mathématiques · 4e",
    "grade": "4e",
    "subject": "Mathématiques",
    "kind": "Cours",
    "description": "Cours complet de mathématiques et progression pédagogique pour la classe de quatrième, édition SENEMATHS.",
    "source": "Ibou Sène · SUNUMATHS",
    "url": "https://sunumaths.com/wp-content/uploads/2021/01/SENEMATHS-4e%CC%80me-2.pdf",
    "personal": false
  },
  {
    "id": "math-senumaths-3e",
    "title": "SENEMATHS · Cours complet de mathématiques · 3e",
    "grade": "3e",
    "subject": "Mathématiques",
    "kind": "Cours",
    "description": "Cours complet de mathématiques et progression pédagogique pour la classe de troisième, édition SENEMATHS.",
    "source": "Ibou Sène · SUNUMATHS",
    "url": "https://sunumaths.com/wp-content/uploads/2021/01/SENEMATHS-3e%CC%80me-1.pdf",
    "personal": false
  },
  {
    "id": "pc-wahab-fascicule-4e",
    "title": "Fascicule d’exercices de Physique-Chimie · 4e",
    "grade": "4e",
    "subject": "Physique-Chimie",
    "kind": "Exercices",
    "description": "Fascicule d’entraînement de physique-chimie pour la quatrième, issu de la collection de Wahab Diop.",
    "source": "Wahab Diop · PhysiqueChimie Sénégal",
    "url": "https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/FASCICULE%20pc%204%C3%A8m_wahabdiop.pdf?ver=1773146128104",
    "personal": false
  },
  {
    "id": "pc-wahab-fascicule-3e",
    "title": "Fascicule d’exercices de Physique-Chimie · 3e",
    "grade": "3e",
    "subject": "Physique-Chimie",
    "kind": "Exercices",
    "description": "Fascicule d’entraînement de physique-chimie pour la troisième, édition 2020, issu de la collection de Wahab Diop.",
    "source": "Wahab Diop · PhysiqueChimie Sénégal",
    "url": "https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/FASCICULE%20PC%203eme%202020_wahabdiop.pdf?ver=1773146127999",
    "personal": false
  },
  {
    "id": "pc-wahab-td-structure-4e-2025",
    "title": "TD · Structure de la matière · 4e · 2025",
    "grade": "4e",
    "subject": "Physique-Chimie",
    "kind": "Exercices",
    "description": "Travaux dirigés de physique-chimie sur la structure de la matière, édition 2025.",
    "source": "Wahab Diop · Série 2025",
    "url": "https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/ed11dd04-71d4-4747-9a95-e578c69e04c3/TD-structure_matiere_4e_2025-tiv_wahabdiop.pdf?ver=1773146129466",
    "personal": false
  },
  {
    "id": "pc-wahab-td-forces-3e-2025",
    "title": "TD · Forces · 3e · 2025",
    "grade": "3e",
    "subject": "Physique-Chimie",
    "kind": "Exercices",
    "description": "Travaux dirigés de physique sur les forces pour la classe de troisième, édition 2025.",
    "source": "Wahab Diop · Série 2025",
    "url": "https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/2278296c-b51f-4c18-bdb4-4b4398b2894c/TD-forces-3e-2025-tiv_wahabdiop.pdf?ver=1773146129563",
    "personal": false
  },
  {
    "id": "pc-wahab-td-metaux-3e-2024",
    "title": "TD · Les métaux · 3e · 2024",
    "grade": "3e",
    "subject": "Physique-Chimie",
    "kind": "Exercices",
    "description": "Travaux dirigés de chimie sur les métaux pour la classe de troisième, édition 2024.",
    "source": "Wahab Diop · Série 2024",
    "url": "https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/TD-les%20metaux-3eme--2024-ltamba_wahabdiop.pdf?ver=1773146129563",
    "personal": false
  },
  {
    "id": "pc-wahab-td-travail-3e-2024",
    "title": "TD · Travail et énergie · 3e · 2024",
    "grade": "3e",
    "subject": "Physique-Chimie",
    "kind": "Exercices",
    "description": "Travaux dirigés de physique sur le travail pour la classe de troisième, édition 2024.",
    "source": "Wahab Diop · Série 2024",
    "url": "https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/TD-travail-2024-3eme-tamba_wahabdiop.pdf?ver=1773146129563",
    "personal": false
  },
  {
    "id": "pc-wahab-td-electrisation-3e-2024",
    "title": "Série académique · Électrisation par frottement · 3e · 2024",
    "grade": "3e",
    "subject": "Physique-Chimie",
    "kind": "Exercices",
    "description": "Série académique d’exercices sur l’électrisation par frottement pour la classe de troisième, édition 2024.",
    "source": "Wahab Diop · Série académique 2024",
    "url": "https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/SERIE%20ACADEMIQUE%20ELECTRISATION%20PAR%20FROTTEMENT%20.pdf?ver=1773146129563",
    "personal": false
  },
  {
    "id": "math-babacar-3e",
    "title": "Réussir les maths au BFEM · Cours, exercices et corrigés",
    "grade": "3e",
    "subject": "Mathématiques",
    "kind": "Cours et exercices",
    "description": "Document complet sur le programme de troisième : résumés de cours par chapitre, séries d’exercices avec corrections, épreuves blanches et sujets de concours.",
    "source": "Babacar Diarra · SunuMaths",
    "url": "https://sunumaths.com/wp-content/uploads/2021/03/cours-3ieme-et-exercices-Babacar-DIARRA.pdf",
    "personal": false
  },
  {
    "id": "svt-adem-6e",
    "title": "Fascicule ADEM de SVT · 6e",
    "grade": "6e",
    "subject": "SVT",
    "kind": "Cours et exercices",
    "description": "Fascicule sénégalais de sciences de la vie et de la Terre pour la sixième.",
    "source": "ADEM-Dakar · SENPROF",
    "url": "https://senprof.education.sn/ADEM/SVT%206e/res/SVT-6e.pdf",
    "personal": false
  },
  {
    "id": "svt-adem-5e",
    "title": "Fascicule ADEM de SVT · 5e",
    "grade": "5e",
    "subject": "SVT",
    "kind": "Cours et exercices",
    "description": "Leçons, thèmes et exercices de maîtrise des connaissances, de méthode et d’intégration pour la cinquième. 50 pages.",
    "source": "ADEM-Dakar · APPRENDRE / AUF",
    "url": "https://apprendre.auf.org/wp-content/uploads/2021/08/fascicule_adem-_svt_5e.pdf",
    "personal": false
  },
  {
    "id": "svt-adem-4e",
    "title": "Fascicule ADEM de SVT · 4e",
    "grade": "4e",
    "subject": "SVT",
    "kind": "Cours et exercices",
    "description": "Leçons et activités de sciences de la vie et de la Terre pour la quatrième. 70 pages.",
    "source": "ADEM-Dakar · APPRENDRE / AUF",
    "url": "https://apprendre.auf.org/wp-content/uploads/2021/08/fascicule_adem-_svt_4e.pdf",
    "personal": false
  },
  {
    "id": "svt-adem-3e",
    "title": "Fascicule ADEM de SVT · 3e",
    "grade": "3e",
    "subject": "SVT",
    "kind": "Cours et exercices",
    "description": "Leçons et activités de sciences de la vie et de la Terre pour la troisième. 86 pages.",
    "source": "ADEM-Dakar · APPRENDRE / AUF",
    "url": "https://apprendre.auf.org/wp-content/uploads/2021/08/fascicule_adem-_svt_3e.pdf",
    "personal": false
  },
  {
    "id": "svt-cours-6e",
    "title": "Cours de SVT · 6e",
    "grade": "6e",
    "subject": "SVT",
    "kind": "Cours",
    "description": "Fascicule de cours préparé par la cellule SVT de l’Inspection d’Académie de Kédougou.",
    "source": "Inspection d’Académie de Kédougou · Sénégal",
    "url": "https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/FASCICULE%20SVT%20COURS%206%20i%C3%A8me.pdf?ver=1791159802098",
    "personal": false
  },
  {
    "id": "svt-cours-5e",
    "title": "Cours de SVT · 5e",
    "grade": "5e",
    "subject": "SVT",
    "kind": "Cours",
    "description": "Fascicule de cours de SVT pour la classe de cinquième.",
    "source": "Inspection d’Académie de Kédougou · Sénégal",
    "url": "https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/FASCICULE%20SVT%20COURS%205%20i%C3%A8me.pdf?ver=1791159802098",
    "personal": false
  },
  {
    "id": "svt-cours-4e",
    "title": "Cours de SVT · 4e",
    "grade": "4e",
    "subject": "SVT",
    "kind": "Cours",
    "description": "Fascicule de cours de SVT pour la classe de quatrième.",
    "source": "Inspection d’Académie de Kédougou · Sénégal",
    "url": "https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/FASCICULE%20SVT%20COURS%204%20i%C3%A8me.pdf?ver=1791159802098",
    "personal": false
  },
  {
    "id": "svt-cours-3e",
    "title": "Cours de SVT · 3e",
    "grade": "3e",
    "subject": "SVT",
    "kind": "Cours",
    "description": "Fascicule de cours de SVT pour la classe de troisième.",
    "source": "Inspection d’Académie de Kédougou · Sénégal",
    "url": "https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/FASCICULE%20SVT%20COURS%203%20IEME.pdf?ver=1791159802098",
    "personal": false
  },
  {
    "id": "svt-cours-ndao-6e",
    "title": "Fascicule de cours de SVT · 6e",
    "grade": "6e",
    "subject": "SVT",
    "kind": "Cours",
    "description": "Fascicule de 61 pages résumant les leçons du programme de sixième.",
    "source": "Cheikh Ah. Mbacké Ndao · Professeur de SVT · Top Education Sénégal",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/FASCICULE-COURS-SVT-6ie%CC%80me-M.NDAO_.pdf",
    "personal": false
  },
  {
    "id": "svt-cours-ndao-5e",
    "title": "Fascicule de cours de SVT · 5e",
    "grade": "5e",
    "subject": "SVT",
    "kind": "Cours et exercices",
    "description": "Fascicule de 60 pages synthétisant des supports de cours et des manuels de SVT pour la cinquième.",
    "source": "Cheikh Ah. Mbacké Ndao · Professeur de SVT · Top Education Sénégal",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/FASCICULE-COURS-SVT-5ieme-M.NDAO_.pdf",
    "personal": false
  },
  {
    "id": "svt-cours-ndao-4e",
    "title": "Fascicule de cours de SVT · 4e",
    "grade": "4e",
    "subject": "SVT",
    "kind": "Cours",
    "description": "Fascicule de cours de SVT de 79 pages préparé pour la classe de quatrième.",
    "source": "Cheikh Ah. Mbacké Ndao · Professeur de SVT · Top Education Sénégal",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/FASCICULE-COURS-SVT-4ieme-M.NDAO_.pdf",
    "personal": false
  },
  {
    "id": "svt-fascicule-ief-3e",
    "title": "Fascicule de SVT · 3e · Approche par compétences",
    "grade": "3e",
    "subject": "SVT",
    "kind": "Cours et exercices",
    "description": "Fascicule de la cellule mixte SVT de l’IEF de Grand-Dakar et des Parcelles Assainies : activités pédagogiques organisées par thème selon l’approche par compétences.",
    "source": "Équipe de professeurs de SVT · IEF Grand-Dakar",
    "url": "https://topeducationsn.com/wp-content/uploads/2024/09/fascicule-svt-3e.pdf",
    "personal": false
  },
  {
    "id": "svt-livret-men-6e",
    "title": "Mon livret de SVT · 6e",
    "grade": "6e",
    "subject": "SVT",
    "kind": "Cours et exercices",
    "description": "Livret de 79 pages conforme au programme en vigueur : essentiel du cours, exercices de contrôle et d’application.",
    "source": "Ministère de l’Éducation nationale · DEMSG",
    "url": "https://topeducationsn.com/wp-content/uploads/2024/09/Livret_SVT_6e_juin_23.docx.pdf",
    "personal": false
  },
  {
    "id": "svt-livret-men-5e",
    "title": "Mon livret de SVT · 5e",
    "grade": "5e",
    "subject": "SVT",
    "kind": "Cours et exercices",
    "description": "Livret de 75 pages conforme au programme sénégalais : synthèses de cours, exercices et situations d’application.",
    "source": "Ministère de l’Éducation nationale · DEMSG",
    "url": "https://topeducationsn.com/wp-content/uploads/2024/09/Livret_SVT_5e_juin_23.pdf",
    "personal": false
  },
  {
    "id": "svt-livret-men-4e",
    "title": "Mon livret de SVT · 4e",
    "grade": "4e",
    "subject": "SVT",
    "kind": "Cours et exercices",
    "description": "Livret de 102 pages conforme au programme sénégalais : essentiel du cours, exercices et problèmes d’application.",
    "source": "Ministère de l’Éducation nationale · DEMSG",
    "url": "https://topeducationsn.com/wp-content/uploads/2024/09/Livret_SVT_4e_juin_23.pdf",
    "personal": false
  },
  {
    "id": "svt-livret-men-3e",
    "title": "Mon livret de SVT · 3e",
    "grade": "3e",
    "subject": "SVT",
    "kind": "Cours et exercices",
    "description": "Livret de 130 pages conforme au programme sénégalais : synthèses des leçons, exercices et situations d’application.",
    "source": "Ministère de l’Éducation nationale · DEMSG",
    "url": "https://topeducationsn.com/wp-content/uploads/2024/09/Livret_SVT_3e_juin_23.pdf",
    "personal": false
  },
  {
    "id": "math-6e-eval-2022",
    "title": "Évaluation de mathématiques · 6e · Semestre 1",
    "grade": "6e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Évaluation de niveau sixième portant sur les nombres décimaux, les ensembles et la géométrie.",
    "source": "Top Education Sénégal · IA Saint-Louis",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/Evaluation-MATHS-N%C2%B01-Semestre1-Classe-6e-2022-2023.pdf",
    "personal": false
  },
  {
    "id": "math-6e-eval-dec-2022",
    "title": "Évaluation de mathématiques · 6e · Décembre 2022",
    "grade": "6e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Devoir de mathématiques de sixième : vocabulaire géométrique, solides, nombres et calculs.",
    "source": "Top Education Sénégal · IA Saint-Louis",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/12/Evaluation-N%C2%B01-MATHS-Semestre-1-Classe-6eme-2022-2023.pdf",
    "personal": false
  },
  {
    "id": "math-6e-epreuve-found",
    "title": "Épreuve de mathématiques · 6e",
    "grade": "6e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Devoir semestriel de la cellule zonale de Foundiougne : numération, nombres décimaux et géométrie.",
    "source": "Top Education Sénégal · IA Fatick",
    "url": "https://topeducationsn.com/wp-content/uploads/2023/01/Epreuve-maths-6eme.pdf",
    "personal": false
  },
  {
    "id": "math-6e-devoir-oussouye",
    "title": "Devoir départemental de mathématiques · 6e",
    "grade": "6e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Devoir départemental du premier semestre 2022-2023, IEF Oussouye : activités numériques et géométriques.",
    "source": "Top Education Sénégal · IA Ziguinchor",
    "url": "https://topeducationsn.com/wp-content/uploads/2023/01/Devoir-departemental-6eme.pdf",
    "personal": false
  },
  {
    "id": "svt-5e-td1",
    "title": "SVT 5e · Exercices sur les leçons 1 et 2",
    "grade": "5e",
    "subject": "SVT",
    "kind": "Exercices",
    "description": "Travaux dirigés de SVT portant sur les deux premières leçons de cinquième.",
    "source": "Top Education Sénégal",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/TD-N%C2%B01-SVT-5eme-Lecon-1-et-Lecon-2.pdf",
    "personal": false
  },
  {
    "id": "svt-5e-td2",
    "title": "SVT 5e · Exercices sur la leçon 3",
    "grade": "5e",
    "subject": "SVT",
    "kind": "Exercices",
    "description": "Leçon 3 : alimentation chez les animaux et adaptation aux différents régimes alimentaires.",
    "source": "Top Education Sénégal",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/TD-N%C2%B02-SVT-5eme-Lecon-3.pdf",
    "personal": false
  },
  {
    "id": "svt-5e-td3",
    "title": "SVT 5e · Exercices sur la leçon 4",
    "grade": "5e",
    "subject": "SVT",
    "kind": "Exercices",
    "description": "Travaux dirigés de SVT sur la quatrième leçon du programme de cinquième.",
    "source": "Top Education Sénégal",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/TD-N%C2%B03-SVT-5eme-Lecon-4.pdf",
    "personal": false
  },
  {
    "id": "svt-5e-td4",
    "title": "SVT 5e · Exercices sur la leçon 5",
    "grade": "5e",
    "subject": "SVT",
    "kind": "Exercices",
    "description": "Travaux dirigés de SVT sur la cinquième leçon du programme de cinquième.",
    "source": "Top Education Sénégal",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/TD-N%C2%B04-SVT-5eme-Lecon-5.pdf",
    "personal": false
  },
  {
    "id": "svt-5e-td6",
    "title": "SVT 5e · Exercices sur la leçon 7",
    "grade": "5e",
    "subject": "SVT",
    "kind": "Exercices",
    "description": "Travaux dirigés de SVT sur la septième leçon du programme de cinquième.",
    "source": "Top Education Sénégal",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/TD-N%C2%B06-SVT-5eme-Lecon-7.pdf",
    "personal": false
  },
  {
    "id": "svt-5e-td7",
    "title": "SVT 5e · Exercices sur la leçon 8",
    "grade": "5e",
    "subject": "SVT",
    "kind": "Exercices",
    "description": "Travaux dirigés de SVT sur la huitième leçon du programme de cinquième.",
    "source": "Top Education Sénégal",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/TD-N%C2%B07-SVT-5eme-Lecon-8.pdf",
    "personal": false
  },
  {
    "id": "svt-5e-td8",
    "title": "SVT 5e · Exercices sur les leçons 9 et 10",
    "grade": "5e",
    "subject": "SVT",
    "kind": "Exercices",
    "description": "Travaux dirigés de SVT sur les leçons 9 et 10 du programme de cinquième.",
    "source": "Top Education Sénégal",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/TD-N%C2%B08-SVT-5eme-Lecon-9-et-Lecon-10.pdf",
    "personal": false
  },
  {
    "id": "svt-5e-td9",
    "title": "SVT 5e · Exercices sur les leçons 11 et 12",
    "grade": "5e",
    "subject": "SVT",
    "kind": "Exercices",
    "description": "Travaux dirigés de SVT sur les leçons 11 et 12 du programme de cinquième.",
    "source": "Top Education Sénégal",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/TD-N%C2%B09-SVT-5eme-Lecon-L11-et-Lecon-12.pdf",
    "personal": false
  },
  {
    "id": "math-4e-recueil",
    "title": "Recueil d’exercices et de devoirs de maths · 4e",
    "grade": "4e",
    "subject": "Mathématiques",
    "kind": "Devoirs",
    "description": "Recueil de 19 pages d’exercices et de devoirs de mathématiques pour la quatrième.",
    "source": "Top Education Sénégal · M. Sow",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/12/RECEUIL-DEXERCICES-ET-DE-DEVOIRS-DE-MATHS-4EME.pdf",
    "personal": false
  },
  {
    "id": "svt-4e-td1",
    "title": "SVT 4e · Exercices sur la leçon 1",
    "grade": "4e",
    "subject": "SVT",
    "kind": "Exercices",
    "description": "Travaux dirigés de SVT sur la première leçon de quatrième.",
    "source": "Top Education Sénégal",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/TD-N%C2%B01-SVT-4eme-Lecon-1.pdf",
    "personal": false
  },
  {
    "id": "svt-4e-td2",
    "title": "SVT 4e · Exercices sur la leçon 2",
    "grade": "4e",
    "subject": "SVT",
    "kind": "Exercices",
    "description": "Travaux dirigés de SVT sur la deuxième leçon de quatrième.",
    "source": "Top Education Sénégal",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/TD-N%C2%B02-SVT-4eme-Lecon-2.pdf",
    "personal": false
  },
  {
    "id": "svt-4e-td3",
    "title": "SVT 4e · Exercices sur les leçons 3 à 5",
    "grade": "4e",
    "subject": "SVT",
    "kind": "Exercices",
    "description": "Travaux dirigés de SVT sur les leçons 3, 4 et 5 de quatrième.",
    "source": "Top Education Sénégal",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/TD-N%C2%B03-SVT-4eme-Lecon-L3_4_5.pdf",
    "personal": false
  },
  {
    "id": "svt-4e-td4",
    "title": "SVT 4e · Exercices sur la leçon 6",
    "grade": "4e",
    "subject": "SVT",
    "kind": "Exercices",
    "description": "Travaux dirigés de SVT sur la sixième leçon de quatrième.",
    "source": "Top Education Sénégal",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/TD-N%C2%B04-SVT-4eme-Lecon-6.pdf",
    "personal": false
  },
  {
    "id": "svt-4e-td5",
    "title": "SVT 4e · Exercices sur la leçon 7",
    "grade": "4e",
    "subject": "SVT",
    "kind": "Exercices",
    "description": "Travaux dirigés de SVT sur la septième leçon de quatrième.",
    "source": "Top Education Sénégal",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/TD-N%C2%B05-SVT-4eme-Lecon-7.pdf",
    "personal": false
  },
  {
    "id": "svt-4e-td6",
    "title": "SVT 4e · Exercices sur la leçon 8",
    "grade": "4e",
    "subject": "SVT",
    "kind": "Exercices",
    "description": "Travaux dirigés de SVT sur la huitième leçon de quatrième.",
    "source": "Top Education Sénégal",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/TD-N%C2%B06-SVT-4eme-Lecon-8.pdf",
    "personal": false
  },
  {
    "id": "math-bfem-2021",
    "title": "Épreuve BFEM · Mathématiques · 2021",
    "grade": "3e",
    "subject": "Mathématiques",
    "kind": "Épreuves",
    "description": "Sujet de mathématiques du BFEM 2021.",
    "source": "Top Education Sénégal",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/BFEM-2021-MATHEMATIQUES.pdf",
    "personal": false
  },
  {
    "id": "pc-bfem-2022",
    "title": "Composition régionale du 2e semestre · PC · 3e · 2022",
    "grade": "3e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Composition régionale de sciences physiques de troisième, deuxième semestre 2022, Inspection d’Académie de Ziguinchor.",
    "source": "Wahab Diop · IA Ziguinchor",
    "url": "https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/CO2-3eme%20-%202022-iazig.pdf?ver=1773146129563",
    "personal": false
  },
  {
    "id": "svt-3e-bfem-synthese",
    "title": "SVT 3e · Synthèse d’exercices BFEM",
    "grade": "3e",
    "subject": "SVT",
    "kind": "Exercices",
    "description": "Fascicule de synthèse de 27 pages pour réviser la SVT en vue du BFEM.",
    "source": "Top Education Sénégal",
    "url": "https://topeducationsn.com/wp-content/uploads/2023/01/Synthese-BFEM.pdf",
    "personal": false
  },
  {
    "id": "svt-3e-recueil",
    "title": "SVT 3e · Recueil d’exercices",
    "grade": "3e",
    "subject": "SVT",
    "kind": "Exercices",
    "description": "Recueil de 6 pages de travaux d’entraînement de SVT pour la troisième.",
    "source": "Top Education Sénégal",
    "url": "https://topeducationsn.com/wp-content/uploads/2022/11/RECEUIL-DEXERCICE-SVT.pdf",
    "personal": false
  },
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
    "title": "Composition du premier semestre · PC · 4e · IA Podor · 2022-2023",
    "grade": "4e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Composition de sciences physiques de quatrième, organisée par l’IEF de Podor au premier semestre 2022-2023.",
    "source": "Wahab Diop · IA Saint-Louis / IEF Podor",
    "url": "https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/CO1-4eme-2023-iapodor_wahabdiop.pdf?ver=1773146129466",
    "personal": false
  },
  {
    "id": "pc4-comp",
    "title": "Composition du premier semestre · PC · 4e · IA Kaffrine · 2022-2023",
    "grade": "4e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Composition de sciences physiques de quatrième, session 2022-2023 de l’IA de Kaffrine.",
    "source": "Wahab Diop · IA Kaffrine",
    "url": "https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/CO1-4eme-2023-iakafrine_wahabdiop.pdf?ver=1773146129466",
    "personal": false
  },
  {
    "id": "pc4-d1",
    "title": "Composition du premier semestre · PC · 4e · IA Kaolack · 2023-2024",
    "grade": "4e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Composition de sciences physiques de quatrième, premier semestre 2023-2024.",
    "source": "Wahab Diop · IA Kaolack",
    "url": "https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/CO1-4eme-2024-iakl_wahabdiop.pdf?ver=1773146129466",
    "personal": false
  },
  {
    "id": "pc4-d2",
    "title": "Devoir N°4 · PC · 4e · IA Thiès · 2024",
    "grade": "4e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Devoir de sciences physiques de quatrième, session 2024 de l’IA de Thiès.",
    "source": "Wahab Diop · IA Thiès",
    "url": "https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/D4-4eme-2024-iath_wahabdiop.pdf?ver=1773146129466",
    "personal": false
  },
  {
    "id": "pc4-d3",
    "title": "Composition N°2 · PC · 4e · 2024",
    "grade": "4e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Deuxième composition de sciences physiques de quatrième, année 2024.",
    "source": "Wahab Diop · Dossier pédagogique",
    "url": "https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/CO2-4e-2024-horizon_wahabdiop.pdf?ver=1773146129466",
    "personal": false
  },
  {
    "id": "pc4-comp1",
    "title": "Devoir N°1 · PC · 4e · IA Thiès · 2025",
    "grade": "4e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Premier devoir de sciences physiques de quatrième, session 2025 de l’IA de Thiès.",
    "source": "Wahab Diop · IA Thiès",
    "url": "https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/fd3765d2-8b61-47fa-9534-600bd8a603eb/D1-4e-2025-iath-b12_wahabdiop.pdf?ver=1773146129466",
    "personal": false
  },
  {
    "id": "pc4-d4",
    "title": "Devoir N°2 · PC · 4e · 2025",
    "grade": "4e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Deuxième devoir de sciences physiques de quatrième, session 2025.",
    "source": "Wahab Diop · Dossier pédagogique",
    "url": "https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/1ff2580c-add6-40e4-bdd9-b7479573050d/D2-4eme-2025-iapg_wahabdiop.pdf?ver=1773146129466",
    "personal": false
  },
  {
    "id": "pc4-d5",
    "title": "Devoir N°2 · PC · 4e · IA Kaffrine · 2025",
    "grade": "4e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Deuxième devoir de sciences physiques de quatrième, session 2025 de l’IA de Kaffrine.",
    "source": "Wahab Diop · IA Kaffrine",
    "url": "https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/c346ca50-87ab-44ac-982a-3486b24ed144/D2-4eme-2025-iakf_wahabdiop.pdf?ver=1773146129466",
    "personal": false
  },
  {
    "id": "pc4-d6",
    "title": "Composition N°2 · PC · 4e · IA Kaolack · 2025",
    "grade": "4e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Deuxième composition de sciences physiques de quatrième, session 2025 de l’IA de Kaolack.",
    "source": "Wahab Diop · IA Kaolack",
    "url": "https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/fe68ba6e-f4f5-45fb-b7d7-73febf594ef9/CO2-4eme-2025-iakl_wahabdiop.pdf?ver=1773146129466",
    "personal": false
  },
  {
    "id": "pc4-comp2",
    "title": "Fascicule d’exercices de sciences physiques · 4e · ADEM-Dakar",
    "grade": "4e",
    "subject": "Physique-Chimie",
    "kind": "Exercices",
    "description": "Fascicule d’entraînement en sciences physiques pour la quatrième, issu du projet ADEM-Dakar. À utiliser pour s’exercer et consolider les notions du programme.",
    "source": "ADEM-Dakar · Ministère de l’Éducation nationale / AFD",
    "url": "https://senprof2.education.sn/%C3%89l%C3%A8ves/3.Moyen/3.Quatri%C3%A8me/PC/res/PC_4e.pdf",
    "personal": false
  },
  {
    "id": "pc3-eval1",
    "title": "Évaluation standardisée · PC · 3e · IA Thiès · 2023",
    "grade": "3e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Évaluation de sciences physiques du second semestre 2022-2023, niveau troisième, Inspection d’Académie de Thiès.",
    "source": "Wahab Diop · IA Thiès",
    "url": "https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/CO2-3eme-2023-iath_wahabdiop.pdf?ver=1773146129466",
    "personal": false
  },
  {
    "id": "pc3-dm",
    "title": "TD · Lentilles minces · 3e · 2012-2013",
    "grade": "3e",
    "subject": "Physique-Chimie",
    "kind": "Exercices",
    "description": "Travaux dirigés de troisième sur les lentilles minces et la construction des images.",
    "source": "Wahab Diop · Collège Jean 23 de Tamba",
    "url": "https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/TD_lentilles%203eme_2013.pdf?ver=1773146129563",
    "personal": false
  },
  {
    "id": "pc3-eval2",
    "title": "Devoir N°2 · PC · 3e · 2025",
    "grade": "3e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Devoir de sciences physiques de troisième, session 2025.",
    "source": "Wahab Diop · Dossier pédagogique",
    "url": "https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/2e8e3632-0a40-40dd-a6ec-30749fd8dd22/D2-3eme-2025-iapg_wahabdiop.pdf?ver=1773146129466",
    "personal": false
  },
  {
    "id": "pc3-dept",
    "title": "Composition N°1 · PC · 3e · IA Kaolack · 2023-2024",
    "grade": "3e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Composition de sciences physiques de troisième, premier semestre 2023-2024, Inspection d’Académie de Kaolack.",
    "source": "Wahab Diop · IA Kaolack",
    "url": "https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/CO1-3eme-2024-iakl_wahabdiop.pdf?ver=1773146129563",
    "personal": false
  },
  {
    "id": "pc3-d2024",
    "title": "Devoir N°4 · PC · 3e · IA Thiès · 2024",
    "grade": "3e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Devoir de sciences physiques de troisième, session 2024 de l’IA de Thiès.",
    "source": "Wahab Diop · IA Thiès",
    "url": "https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/D4-3eme-2024-iath_wahabdiop.pdf?ver=1773146129652",
    "personal": false
  },
  {
    "id": "pc3-bassin",
    "title": "Composition N°2 · PC · 3e · 2024",
    "grade": "3e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Deuxième composition de sciences physiques de troisième, session 2024.",
    "source": "Wahab Diop · Dossier pédagogique",
    "url": "https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/CO2-3eme-2024-iapg_wahabdiop.pdf?ver=1773146129652",
    "personal": false
  },
  {
    "id": "pc3-rem",
    "title": "Composition N°1 · PC · 3e · 2025",
    "grade": "3e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Composition de sciences physiques de troisième, session 2025.",
    "source": "Wahab Diop · Dossier pédagogique",
    "url": "https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/2d8eb172-85cc-4211-b6ae-e579885f9d3c/CO1-3%C3%A8me-2025-iapg_wahabdiop.pdf?ver=1773146129652",
    "personal": false
  },
  {
    "id": "pc3-d1",
    "title": "Composition N°2 · PC · 3e · 2025",
    "grade": "3e",
    "subject": "Physique-Chimie",
    "kind": "Devoirs",
    "description": "Deuxième composition de sciences physiques de troisième, session 2025.",
    "source": "Wahab Diop · Dossier pédagogique",
    "url": "https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/869eab81-dfe1-47e7-a883-cedd150bb745/CO2-3eme-2025-iapg_wahabdiop.pdf?ver=1773146129652",
    "personal": false
  },
  {
    "id": "pc3-bfem21",
    "title": "TD · Notions de solutions · 3e · 2012-2013",
    "grade": "3e",
    "subject": "Physique-Chimie",
    "kind": "Exercices",
    "description": "Travaux dirigés de troisième sur les concentrations et la préparation des solutions.",
    "source": "Wahab Diop · Collège Jean 23 de Tamba",
    "url": "https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/TD_solutions_3eme_2013.pdf?ver=1773146129563",
    "personal": false
  },
  {
    "id": "pc3-bfem20",
    "title": "TD · Les métaux · 3e · 2024",
    "grade": "3e",
    "subject": "Physique-Chimie",
    "kind": "Exercices",
    "description": "Travaux dirigés de chimie sur les propriétés et les réactions des métaux usuels.",
    "source": "Wahab Diop · Série pédagogique 2024",
    "url": "https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/TD-les%20metaux-3eme--2024-ltamba_wahabdiop.pdf?ver=1773146129563",
    "personal": false
  },
  {
    "id": "pc3-bfem19",
    "title": "TD · Travail et énergie · 3e · 2024",
    "grade": "3e",
    "subject": "Physique-Chimie",
    "kind": "Exercices",
    "description": "Travaux dirigés de physique sur le travail et l’énergie en troisième.",
    "source": "Wahab Diop · Série pédagogique 2024",
    "url": "https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/TD-travail-2024-3eme-tamba_wahabdiop.pdf?ver=1773146129563",
    "personal": false
  },
  {
    "id": "pc3-bfem18",
    "title": "Série académique · Électrisation par frottement · 3e · 2024",
    "grade": "3e",
    "subject": "Physique-Chimie",
    "kind": "Exercices",
    "description": "Série d’exercices de troisième sur l’électrisation par frottement.",
    "source": "Wahab Diop · Série académique 2024",
    "url": "https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/SERIE%20ACADEMIQUE%20ELECTRISATION%20PAR%20FROTTEMENT%20.pdf?ver=1773146129563",
    "personal": false
  },
  {
    "id": "pc3-bfem17",
    "title": "TD · Forces · 3e · 2025",
    "grade": "3e",
    "subject": "Physique-Chimie",
    "kind": "Exercices",
    "description": "Travaux dirigés de physique de troisième consacrés aux forces.",
    "source": "Wahab Diop · Série pédagogique 2025",
    "url": "https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/2278296c-b51f-4c18-bdb4-4b4398b2894c/TD-forces-3e-2025-tiv_wahabdiop.pdf?ver=1773146129563",
    "personal": false
  },
  {
    "id": "pc3-bfem16",
    "title": "Fascicule d’exercices de sciences physiques · 3e · ADEM-Dakar",
    "grade": "3e",
    "subject": "Physique-Chimie",
    "kind": "Exercices",
    "description": "Fascicule d’entraînement en sciences physiques pour la troisième, issu du projet ADEM-Dakar. À utiliser pour s’exercer et préparer les évaluations du collège.",
    "source": "ADEM-Dakar · Ministère de l’Éducation nationale / AFD",
    "url": "https://senprof2.education.sn/%C3%89l%C3%A8ves/3.Moyen/4.Troisi%C3%A8me/PC/res/PC_3e.pdf",
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
  },
  {
    "id": "math-sunumaths-exos-6e",
    "title": "Fascicule d’exercices de mathématiques · 6e",
    "grade": "6e",
    "subject": "Mathématiques",
    "kind": "Exercices",
    "description": "Fascicule complet d’activités numériques et géométriques couvrant le programme de mathématiques de sixième, avec des exercices organisés par chapitre.",
    "source": "ADEM-Dakar · SUNUMATHS",
    "url": "https://sunumaths.com/wp-content/uploads/2019/04/fascicule-de-Maths-6ieme-Sixieme-Adem-Dakar.pdf",
    "personal": false
  },
  {
    "id": "math-sunumaths-exos-5e",
    "title": "Fascicule d’exercices de mathématiques · 5e",
    "grade": "5e",
    "subject": "Mathématiques",
    "kind": "Exercices",
    "description": "Fascicule d’activités numériques et géométriques pour la classe de cinquième, avec des exercices classés par chapitre.",
    "source": "ADEM-Dakar · SUNUMATHS",
    "url": "https://sunumaths.com/wp-content/uploads/2019/04/fascicule-de-Maths-5ieme-Cinquieme-Adem-Dakar.pdf",
    "personal": false
  },
  {
    "id": "math-sunumaths-exos-4e",
    "title": "Fascicule d’exercices de mathématiques · 4e",
    "grade": "4e",
    "subject": "Mathématiques",
    "kind": "Exercices",
    "description": "Fascicule d’activités numériques et géométriques couvrant le programme de quatrième, avec des exercices organisés par chapitre.",
    "source": "ADEM-Dakar · SUNUMATHS",
    "url": "https://sunumaths.com/wp-content/uploads/2019/04/fascicule-de-Maths-4ieme-Quaterieme-Adem-Dakar.pdf",
    "personal": false
  },
  {
    "id": "math-sunumaths-exos-3e",
    "title": "Fascicule d’exercices de mathématiques · 3e",
    "grade": "3e",
    "subject": "Mathématiques",
    "kind": "Exercices",
    "description": "Fascicule d’activités numériques et géométriques pour la classe de troisième, couvrant les principaux chapitres du programme et la préparation au BFEM.",
    "source": "ADEM-Dakar · SUNUMATHS",
    "url": "https://sunumaths.com/wp-content/uploads/2019/04/ADEM_FASCICULE_MATHS_3eme_v10.17-1.pdf",
    "personal": false
  },
  {
    "id": "svt-3e-cahier-exercices-2022-2023",
    "title": "Cahier d’exercices de SVT · 3e · 2022-2023",
    "grade": "3e",
    "subject": "SVT",
    "kind": "Exercices",
    "description": "Cahier d’exercices de l’élève en Sciences de la Vie et de la Terre pour la classe de troisième, année scolaire 2022-2023.",
    "source": "Top Education Sénégal · Cours Sainte Marie de Golf",
    "url": "https://topeducationsn.com/wp-content/uploads/2024/09/Cahier-d-exercices-SVT-3ieme-2022-2023-1.pdf",
    "personal": false
  },
  {
    "id": "svt-3e-fascicule-exos-bfem-2023",
    "title": "Fascicule d’exercices BFEM de SVT · 3e · 2023",
    "grade": "3e",
    "subject": "SVT",
    "kind": "Exercices",
    "description": "Fascicule d’entraînement en SVT destiné à la préparation du BFEM, édition 2023.",
    "source": "Top Education Sénégal",
    "url": "https://topeducationsn.com/wp-content/uploads/2024/09/Fascicule-Exos-BFEM-SVT-2023.pdf",
    "personal": false
  },
  {
    "id": "pc-wahab-course-4e",
    "title": "Cahier de leçons et d’applications en Physique-Chimie · 4e",
    "grade": "4e",
    "subject": "Physique-Chimie",
    "kind": "Cours et exercices",
    "description": "Cahier de leçons de Physique-Chimie de Wahab Diop : notions essentielles, observations, applications et exercices.",
    "source": "Wahab Diop · IREMPT",
    "url": "https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/fascicule-sciences-physiques-4eme-_wahabdiop.pdf?ver=1773146128104",
    "personal": false
  },
  {
    "id": "pc-wahab-course-3e-physics",
    "title": "Cours de Physique · 3e · IREMPT",
    "grade": "3e",
    "subject": "Physique-Chimie",
    "kind": "Cours et exercices",
    "description": "Cours de physique de Wahab Diop : définitions, explications, méthodes et applications sur les notions du programme de troisième.",
    "source": "Wahab Diop · IREMPT",
    "url": "https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/PHYSIQUE%203E%20irempt.pdf?ver=1773146127999",
    "personal": false
  },
  {
    "id": "pc-wahab-course-3e-chemistry",
    "title": "Cours de Chimie · 3e · IREMPT",
    "grade": "3e",
    "subject": "Physique-Chimie",
    "kind": "Cours et exercices",
    "description": "Cours de chimie de Wahab Diop : notions, définitions, exemples expliqués et applications sur le programme de troisième.",
    "source": "Wahab Diop · IREMPT",
    "url": "https://img1.wsimg.com/blobby/go/92b1d401-89a0-4fda-accf-6ed9c6d46dd4/downloads/CHIMIE%203E%20irempt.pdf?ver=1773146127999",
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
    state.resources = Array.isArray(saved.resources) ? saved.resources.filter(item => item && typeof item === 'object' && typeof item.id === 'string') : [];
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
function allResources(){
  return [...seedResources, ...state.resources].filter(item =>
    item && (isLocalPdfResource(item) || isPdfUrl(item.url))
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
let pdfViewerHistoryEntryOpen=false;
function showPdfViewer(src,title){
  const modal=document.getElementById('pdfViewerModal');
  document.getElementById('pdfViewerTitle').textContent=title||'Document PDF';
  const sourceLink=document.getElementById('pdfSourceLink');
  if(sourceLink){
    if(/^https:\/\//i.test(src)){sourceLink.href=src;sourceLink.classList.remove('hidden');}
    else{sourceLink.removeAttribute('href');sourceLink.classList.add('hidden');}
  }
  const proxyHosts = [
    'sunumaths.com',
    'img1.wsimg.com',
    'senprof.education.sn',
    'senprof2.education.sn',
    'apprendre.auf.org',
    'topeducationsn.com'
  ];
  let frameSource=src;
  if(!/^blob:/i.test(src)&&!/^\/api\/pdf\?/.test(src)){
    try{
      const sourceUrl=new URL(src,window.location.href);
      if(sourceUrl.protocol==='https:'&&proxyHosts.includes(sourceUrl.hostname.toLowerCase())){
        frameSource='/api/pdf?url='+encodeURIComponent(sourceUrl.toString());
      }
    }catch(error){
      console.info('Ouverture directe du PDF :',error);
    }
  }
  document.getElementById('pdfFrame').src=frameSource;
  if(!pdfViewerHistoryEntryOpen){
    try{
      const currentState=window.history.state;
      const nextState=currentState&&typeof currentState==='object'?{...currentState,monEspacePdfViewer:true}:{monEspacePdfViewer:true};
      window.history.pushState(nextState,'',window.location.href);
      pdfViewerHistoryEntryOpen=true;
    }catch(error){
      console.info('Navigation retour PDF indisponible :',error);
    }
  }
  modal.classList.remove('hidden');
  document.body.style.overflow='hidden';
}
function closePdfViewer(options={}){
  const modal=document.getElementById('pdfViewerModal');
  if(modal.classList.contains('hidden'))return;
  document.getElementById('pdfFrame').src='about:blank';
  const sourceLink=document.getElementById('pdfSourceLink');
  if(sourceLink){sourceLink.removeAttribute('href');sourceLink.classList.add('hidden');}
  modal.classList.add('hidden');
  document.body.style.overflow='';
  if(activePdfObjectUrl){URL.revokeObjectURL(activePdfObjectUrl);activePdfObjectUrl='';}
  const shouldReturnToPreviousEntry=pdfViewerHistoryEntryOpen&&options.fromHistory!==true;
  pdfViewerHistoryEntryOpen=false;
  if(shouldReturnToPreviousEntry)window.history.back();
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
  document.getElementById('page-library').classList.toggle('is-browsing', !isLibraryLandingView(query, path));
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
  const personal=state.resources.filter(r=>isLocalPdfResource(r)||isPdfUrl(r.url));
  const by=s=>personal.filter(r=>r.subject===s).length;
  document.getElementById('folderMath').textContent=`${by('Mathématiques')} document${by('Mathématiques')>1?'s':''}`;
  document.getElementById('folderPC').textContent=`${by('Physique-Chimie')} document${by('Physique-Chimie')>1?'s':''}`;
  document.getElementById('folderSVT').textContent=`${by('SVT')} document${by('SVT')>1?'s':''}`;
  document.getElementById('folderOther').textContent=`${by('Autre')} document${by('Autre')>1?'s':''}`;
}
function renderFiles(){
  const items=state.resources.filter(r=>(isLocalPdfResource(r)||isPdfUrl(r.url))&&(state.fileSubjectFilter==='all'||r.subject===state.fileSubjectFilter));
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
let resourceModalTrigger=null;
function openModal(prefill={}){
  const form=document.getElementById('resourceForm');
  resourceModalTrigger=document.activeElement;
  form.reset();
  document.getElementById('resourceModal').classList.remove('hidden');
  document.body.style.overflow='hidden';
  returnToLibraryAfterSave=Boolean(prefill.returnToLibrary);
  if(prefill.grade) form.elements.grade.value=prefill.grade;
  if(prefill.subject) form.elements.subject.value=prefill.subject;
  if(prefill.kind) form.elements.kind.value=prefill.kind;
  syncResourceSubjectOptions();
  form.elements.title.focus();
}
function closeModal(){
  const modal=document.getElementById('resourceModal');
  if(modal.classList.contains('hidden'))return;
  modal.classList.add('hidden');
  document.body.style.overflow='';
  const trigger=resourceModalTrigger;resourceModalTrigger=null;
  if(trigger&&typeof trigger.focus==='function')trigger.focus();
}
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
  syncClassBottomNav();
  document.getElementById('page-library').classList.add('is-browsing');
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
 if(event.target.id==='resourceModal'){closeModal();return;}
 if(event.target.closest('[data-close-modal]')){closeModal();return;}
 const openPdf=event.target.closest('[data-open-pdf]');
 if(openPdf){showPdfViewer(openPdf.dataset.openPdf,openPdf.closest('.resource-card')?.querySelector('h4')?.textContent||'Document PDF');return;}
 if(event.target.id==='pdfViewerModal'){closePdfViewer();return;}
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
 if(file){
  const signature=new TextDecoder().decode(await file.slice(0,5).arrayBuffer());
  if(signature!=='%PDF-'){showToast('Le fichier sélectionné ne semble pas être un PDF valide.');return;}
 }
 if(!url&&!file){showToast('Ajoute un lien PDF direct ou choisis un fichier PDF.');return;}
 const item={id:`personal-${Date.now()}`,title,grade:String(data.get('grade')),subject:String(data.get('subject')),kind:String(data.get('kind')),description:String(data.get('notes')).trim()||'Document PDF ajouté à la bibliothèque.',notes:String(data.get('notes')).trim(),source:file?'PDF personnel':'PDF ajouté',url:url||'',fileType:file?(file.type||'application/pdf'):'',personal:true,createdAt:Date.now()};
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
document.getElementById('pdfBackBtn').addEventListener('click',event=>{
 event.preventDefault();
 event.stopPropagation();
 closePdfViewer();
});
window.addEventListener('popstate',()=>{
 if(pdfViewerHistoryEntryOpen)closePdfViewer({fromHistory:true});
});
document.addEventListener('keydown',event=>{
 if(event.key!=='Escape')return;
 if(!document.getElementById('pdfViewerModal').classList.contains('hidden'))closePdfViewer();
 else if(!document.getElementById('resourceModal').classList.contains('hidden'))closeModal();
});
