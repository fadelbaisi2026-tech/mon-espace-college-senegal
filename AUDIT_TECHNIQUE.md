# Audit technique — Mon Espace Collège Sénégal

**Date : 6 novembre 2026**  
**Branche de correction :** `fix/audit-pdf-storage-design`  
**Périmètre examiné :** `index.html`, `app.js`, `styles.css`, `api/pdf.js`, `sw.js`, `manifest.webmanifest`, catalogue de ressources et documentation.

## 1. Architecture observée

- Frontend statique en HTML, CSS et JavaScript sans dépendances applicatives.
- 131 ressources de départ, stockées dans `app.js`, hébergées sur cinq domaines.
- Ressources personnelles et fichiers PDF locaux stockés dans IndexedDB.
- Préférences et métadonnées stockées dans localStorage.
- Lecteur PDF en iframe et fonction serveur `/api/pdf` pour les domaines autorisés.
- Service worker pour mettre en cache l'interface.
- Configuration de déploiement Vercel dans `vercel.json`.

## 2. Problèmes confirmés

| Priorité | Problème | Conséquence | Correction apportée |
|---|---|---|---|
| Haute | Le lecteur envoyait les PDF vers `/api/pdf` même en aperçu local avec `python -m http.server`. | La route n'existe pas sur le serveur statique ; les PDF échouent. | Détection de l'aperçu local et ouverture directe de la source. |
| Haute | `allResources()` écartait les fiches personnelles sans `fileId` ni URL PDF. | Après import d'une sauvegarde, les fiches de PDF locaux disparaissaient. | Les fiches personnelles restent visibles, même lorsque leur fichier doit être réimporté. |
| Haute | Les URL étaient validées uniquement par leur suffixe `.pdf`. | Une URL avec un schéma non sécurisé pouvait être acceptée. | Validation avec `URL`, HTTPS obligatoire, sauf HTTP de même origine pour le développement local. |
| Moyenne | Le lecteur n'avait pas de lien de secours vers le fournisseur. | Un refus du relais ou un affichage vide laissait l'élève sans solution évidente. | Ajout d'un lien externe « Ouvrir la source du PDF » et d'un état de chargement. |
| Moyenne | Les fonctions d'export/import existaient dans le JavaScript, sans commandes dans l'interface. | L'utilisateur ne pouvait pas lancer facilement une sauvegarde. | Ajout des boutons d'export/import. |
| Moyenne | Les PDF importés localement ne pouvaient pas être réassociés après restauration. | Les fiches restaurées restaient sans fichier lisible. | Ajout de l'action « Réimporter le PDF » sur les fiches concernées. |
| Moyenne | La documentation décrivait un agenda, des favoris et un suivi de progression qui ne sont pas exposés dans l'interface HTML actuelle. | Description du produit trompeuse. | README réécrit selon les fonctions visibles. |
| Faible | Le manifeste PWA ne déclarait pas d'icône et le cache de l'application conservait l'ancienne version. | Installation moins complète et risque de garder une ancienne interface en cache. | Ajout d'une icône SVG au manifeste et passage du cache à v17. |

## 3. Sécurité et robustesse

- Le relais PDF conserve une liste blanche de domaines et vérifie chaque destination de redirection.
- Le frontend refuse les URL PDF non HTTPS, sauf URL HTTP de même origine en développement local.
- Les textes personnels sont échappés avant insertion dans les cartes HTML.
- Les fichiers locaux restent dans IndexedDB et ne sont pas envoyés vers un serveur.
- Les sauvegardes JSON ne contiennent pas les octets des PDF locaux. Les fiches sont maintenant conservées avec un indicateur de fichier à réimporter.
- Le relais PDF met à jour l'en-tête Referer à chaque étape d'une redirection autorisée.

## 4. Vérification des ressources distantes

Le catalogue contient 131 URL PDF réparties sur cinq hôtes : SunuMaths, le stockage img1.wsimg.com, Senprof, AUF et TopEducationSN.

Des vérifications ponctuelles ont confirmé que des PDF Senprof et AUF étaient lisibles par l'outil de consultation, et les documents SunuMaths ainsi que certains documents img1.wsimg.com apparaissaient dans l'index de recherche. Une ouverture ponctuelle d'un PDF TopEducationSN a retourné HTTP 502 à l'outil de consultation, tandis que le site principal restait indexé. Ce résultat isolé ne suffit pas à conclure que le fichier est hors ligne.

**Limite importante :** la disponibilité de chacun des 131 fichiers n'a pas été certifiée par des requêtes réseau exhaustives. Les fournisseurs peuvent appliquer des protections anti-robot, modifier les URL ou retirer des fichiers. Les tests ajoutés vérifient la syntaxe et les domaines autorisés, pas la disponibilité permanente de chaque serveur tiers.

## 5. Hors ligne et stockage

Le service worker met en cache l'interface. Il ne met pas en cache de manière garantie les PDF distants servis par `/api/pdf`. Ces derniers dépendent donc d'une connexion et du fournisseur. Les fichiers personnels déjà enregistrés dans IndexedDB restent disponibles dans le même profil de navigateur, tant que les données de ce navigateur ne sont pas supprimées.

## 6. Contrôles ajoutés

- Vérification syntaxique de `app.js` et `api/pdf.js`.
- Vérification des 131 entrées : identifiants uniques, URL HTTPS, chemin PDF et domaine autorisé.
- Test de validation des URL PDF.
- Test de non-disparition des fiches personnelles sans fichier local réassocié.
- Vérification de la présence de l'icône PWA.
- Workflow GitHub Actions déclenché sur les pull requests et les modifications de la branche principale.

## 7. Points restant à valider

1. Vérifier le déploiement Vercel et les journaux de la fonction PDF après fusion.
2. Faire un test de navigation réel sur Android, iOS et ordinateur, avec réseau lent et réseau coupé.
3. Vérifier manuellement les fichiers tiers qui échouent chez certains fournisseurs ou exigent un accès particulier.
4. Étendre les tests automatisés aux interactions DOM si un environnement de navigateur de test est ajouté.

## 8. Résultat

Les défauts confirmés du flux PDF local, de la restauration des fichiers et de la validation d'URL ont été corrigés dans cette branche. L'interface a reçu une passe de finition visuelle et des commandes de sauvegarde. Les tests automatiques et le résultat du workflow doivent être considérés comme la validation finale du code ; la disponibilité des serveurs PDF externes reste hors du contrôle de l'application.
