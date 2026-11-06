MON ESPACE COLLÈGE — SÉNÉGAL
============================

Bibliothèque web mobile-first de ressources pédagogiques pour les classes de 6e à 3e.
L'application utilise HTML, CSS et JavaScript natifs, sans framework ni dépendance de
production. Elle est conçue pour fonctionner dans un navigateur récent, sur ordinateur
comme sur téléphone.

FONCTIONNALITÉS
---------------
- Parcours de la bibliothèque par classe, matière et type de document.
- Recherche globale dans le catalogue.
- Catalogue de ressources externes de Mathématiques, Physique-Chimie et SVT.
- Ajout de liens PDF et de fichiers PDF personnels.
- Stockage local des fichiers importés dans IndexedDB.
- Préférences et fiches personnelles conservées dans localStorage.
- Lecteur PDF intégré avec lien de secours vers le document hébergé à sa source.
- Application installable (PWA) et cache hors ligne de l'interface.

Le lecteur PDF distant nécessite une connexion Internet. Le mode hors ligne conserve
l'interface et les fichiers personnels déjà enregistrés dans le navigateur ; il ne
télécharge pas automatiquement les 131 documents externes.

DÉMARRER EN LOCAL
-----------------
Avec Python installé, ouvrez un terminal dans le dossier et lancez :

    python -m http.server 8000

Puis ouvrez http://localhost:8000. Utilisez un serveur HTTP(S) plutôt que l'ouverture
directe de index.html pour activer le service worker et les fonctions PWA.

DÉPLOIEMENT
-----------
Le projet est compatible avec Vercel :
- index.html, styles.css, catalog-utils.js et app.js sont servis comme fichiers statiques.
- api/pdf.js fournit un relais PDF pour les domaines explicitement autorisés.
- vercel.json configure les en-têtes nécessaires au service worker et au manifeste.
Aucune commande de build ni installation de dépendances n'est nécessaire pour l'application.

TESTS
-----
Node.js 20 ou supérieur :

    npm test

Les tests vérifient les règles de classement des ressources, la validation des URL PDF,
la cohérence des liens du catalogue avec la liste d'hôtes autorisés et les refus du
relais PDF. Les contrôles automatisés ne garantissent pas que chaque hébergeur tiers
reste disponible dans le temps.

SOURCES DU CATALOGUE
--------------------
- SunuMaths : https://sunumaths.com/
- Physique-Chimie au Sénégal : https://physiquechimie.godaddysites.com/fascicules
- Sama Bac : https://www.samabac.sn/svt-au-college
- APPRENDRE / AUF : https://apprendre.auf.org/
- Top Education Sénégal : https://topeducationsn.com/
- SENPROF : https://senprof.education.sn/

Les documents restent hébergés par leurs auteurs, établissements ou éditeurs. Les liens,
les règles d'accès et les fichiers peuvent changer sans préavis. L'application ne copie
ni ne réhéberge les PDF. Vérifiez leur adéquation avec le programme et la progression
de la classe auprès d'un enseignant.

DONNÉES ET CONFIDENTIALITÉ
--------------------------
Aucun compte utilisateur, base distante ou suivi analytique n'est utilisé. Les données
personnelles sont conservées dans le profil du navigateur utilisé. Effacer les données
du navigateur peut les supprimer. Exportez régulièrement vos informations si vous
souhaitez en conserver une copie.

Les fichiers binaires importés dans IndexedDB ne sont pas inclus dans l'export JSON.
Conservez également les originaux dans un dossier personnel.
