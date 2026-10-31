MON ESPACE COLLÈGE — SÉNÉGAL
============================

Une petite application web personnelle, mobile-first, réalisée en HTML, CSS et JavaScript.
Elle permet d'organiser des ressources de Mathématiques, Physique-Chimie et SVT de la 6e à la 3e,
de garder ses propres fichiers, ses favoris et un agenda de devoirs/examens.

DÉMARRER
--------
- Pour un essai simple : ouvrez index.html dans un navigateur récent.
- Pour activer l'installation PWA et le cache hors ligne, servez le dossier en HTTP(S).
  Exemple si Python est installé : ouvrez un terminal dans le dossier, puis lancez
  `python -m http.server 8000` et ouvrez http://localhost:8000
- Le site ne nécessite aucune bibliothèque JavaScript externe. La police Google Fonts est
  facultative ; une police système est utilisée en secours.

FONCTIONS
---------
- Bibliothèque préremplie avec des ressources trouvées sur des sites sénégalais.
- Filtres par classe, matière et type ; recherche par mots-clés.
- Favoris et indicateur « étudié » pour suivre sa progression.
- Agenda pour les devoirs, examens, révisions et projets.
- Ajout de liens ou de fichiers personnels (PDF, documents, images).
- Fichiers importés stockés localement dans IndexedDB ; tâches et préférences dans localStorage.
- Export/import de sauvegarde JSON. Les fichiers binaires ne sont pas inclus dans la sauvegarde JSON :
  gardez aussi les originaux dans un dossier personnel.
- Service worker pour mettre en cache l'interface lorsque l'application est servie en HTTP(S).

SOURCES DU CATALOGUE
--------------------
1. SunuMaths — site consacré aux ressources de mathématiques pour les élèves du Sénégal.
   Accueil : https://sunumaths.com/
   6e : https://sunumaths.com/sixieme/
   5e : https://sunumaths.com/cinquieme/
   4e : https://sunumaths.com/quaterieme/
   3e : https://sunumaths.com/troisieme/
2. Physique-Chimie au Sénégal — page « Fascicules » fournie par l'utilisateur.
   https://physiquechimie.godaddysites.com/fascicules
   La page liste notamment des fascicules ADEM PC pour les classes de 4e et 3e, des exercices IREMPT
   de 3e, les fascicules ADEM Maths 6e-3e et ADEM SVT 6e-3e. Les liens des cartes pointent vers
   les fichiers hébergés à la source.
3. Sama Bac — Programmes officiels de SVT au collège (guides pratiques / guides d'usage).
   https://www.samabac.sn/svt-au-college
4. APPRENDRE / AUF — Répertoire de fascicules d'exercices de SVT du collège.
   https://apprendre.auf.org/discipline_ressource/sciences-de-la-vie-et-de-la-terre/page/12/
5. Sama Bac — Épreuves BFEM (mathématiques, SVT, physique-chimie selon les publications disponibles).
   https://samabac.sn/category/epreuves-bfem

NOTE DE COUVERTURE
------------------
Lors de la recherche, des fascicules sénégalais étaient identifiables pour les trois matières :
- Mathématiques : ressources SunuMaths pour les quatre classes et fascicules ADEM Maths 6e-3e.
- SVT : fascicules ADEM SVT 6e-3e, fascicules de cours locaux et guides par classe.
- Physique-Chimie : les ressources collège clairement repérées sur la source fournie concernent surtout
  la 4e et la 3e. Aucune ressource PC 6e/5e suffisamment fiable n'a été repérée dans les sources
  consultées au moment de la constitution du catalogue. Les classes 6e/5e restent sélectionnables
  pour permettre l'ajout de documents de l'établissement.

Les sites externes et leurs fichiers peuvent changer ou devenir indisponibles. Les ressources restent
hébergées par leurs auteurs/éditeurs ; cette application ne copie ni ne réhéberge les PDF. Vérifiez
l'adéquation au programme et à la progression de la classe avec l'enseignant.

CONFIDENTIALITÉ
---------------
Aucun compte, aucune base de données distante, aucun suivi analytique. Les données sont conservées
sur l'appareil et dans le profil du navigateur utilisé. Effacer les données du navigateur peut les
supprimer ; exportez régulièrement une sauvegarde.
