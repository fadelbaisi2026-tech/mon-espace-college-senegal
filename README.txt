MON ESPACE COLLÈGE — SÉNÉGAL
============================

Application web progressive (PWA), pensée pour les élèves du collège au Sénégal.
La version actuelle est centrée sur une bibliothèque de ressources PDF pour les classes de
6e, 5e, 4e et 3e.

FONCTIONNALITÉS DISPONIBLES
---------------------------
- Catalogue de 131 ressources initiales en Mathématiques, Physique-Chimie et SVT.
- Parcours de navigation : classe → matière → type de document.
- Recherche dans les titres, descriptions, classes et matières.
- Lecteur PDF intégré avec lien de secours vers le document hébergé à la source.
- Ajout de liens PDF et de fichiers personnels.
- Fichiers personnels enregistrés dans IndexedDB sur l'appareil utilisé.
- Export et import d'une sauvegarde JSON.
- Réimport des PDF locaux après restauration d'une sauvegarde.
- Service worker pour mettre en cache l'interface et permettre son ouverture hors ligne.

DÉMARRER EN LOCAL
-----------------
Pour afficher l'interface sans configurer de serveur :

  python -m http.server 8000

Puis ouvrir http://localhost:8000.

En local, l'application ouvre directement les PDF distants. Le relais /api/pdf est une fonction
Vercel et n'existe pas sur le simple serveur Python. Le lecteur affiche également un lien vers
la source si un document ne s'affiche pas dans la fenêtre intégrée.

DÉPLOIEMENT
-----------
Le dépôt est configuré pour Vercel. Le point d'entrée de la fonction PDF est api/pdf.js.
Cette fonction relaie les documents HTTPS provenant uniquement des domaines explicitement
autorisés dans son ALLOWED_HOSTS. Les redirections sont contrôlées à chaque étape afin de
ne pas transformer le relais PDF en proxy ouvert.

Le projet peut aussi être servi comme site statique, mais la fonction /api/pdf ne sera alors
pas disponible. Dans ce cas, les documents restent accessibles via leurs liens sources lorsque
le fournisseur autorise leur ouverture directe.

RESSOURCES ET FOURNISSEURS
--------------------------
Les documents sont hébergés par leurs auteurs ou éditeurs ; l'application ne copie et ne
réhéberge pas leurs PDF. Les domaines utilisés par le catalogue initial sont :
- sunumaths.com
- img1.wsimg.com
- senprof.education.sn
- apprendre.auf.org
- topeducationsn.com

Les liens, fichiers et règles d'accès de ces sites peuvent changer. Un document indisponible à
sa source ne peut pas être réparé par le lecteur de l'application. Le lien « Ouvrir la source »
permet de distinguer un problème du lecteur intégré d'un problème du fournisseur.

DONNÉES ET CONFIDENTIALITÉ
--------------------------
Aucun compte ni base de données distante n'est utilisé. Les ressources personnelles, tâches et
préférences conservées par cette version sont stockées dans le profil du navigateur. Les fichiers
importés sont enregistrés dans IndexedDB sur l'appareil courant.

La sauvegarde JSON contient les fiches et préférences, mais pas les octets des PDF enregistrés
localement. Après import sur un appareil ou un navigateur différent, les fiches concernées restent
visibles et proposent de réimporter leur PDF. Exportez régulièrement une sauvegarde et conservez
les fichiers originaux.

Le mode hors ligne met en cache l'interface. Les PDF distants nécessitent une connexion et restent
dépendants de leur site d'origine ; les fichiers personnels déjà enregistrés restent dans la base
IndexedDB du navigateur tant que ses données ne sont pas effacées.

VÉRIFICATIONS
-------------
Les contrôles automatisés s'exécutent avec Node.js :

  node --check app.js
  node --check api/pdf.js
  node --test tests/*.test.cjs

La vérification du catalogue contrôle le format des URL et leur domaine, pas leur disponibilité
réseau permanente. Les serveurs externes peuvent refuser les requêtes automatisées, limiter les
accès ou déplacer leurs fichiers.
