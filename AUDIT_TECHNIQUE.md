# Audit technique — Mon Espace Collège Sénégal

Date : 6 novembre 2026
Branche : audit/fixes-design-2026-11

## Périmètre

Inspection de index.html, app.js, styles.css, api/pdf.js, sw.js,
manifest.webmanifest, vercel.json, du catalogue des ressources et des workflows GitHub.

## Résumé

L'application est une bibliothèque statique HTML/CSS/JavaScript avec stockage local,
PWA et relais serveur pour certains PDF distants. Le dépôt ne contenait pas de tests
automatisés ni de vérification syntaxique exécutée sur les pull requests. Le README
décrivait aussi des écrans d'agenda, de favoris et de tableau de bord absents de
l'interface actuelle, centrée sur la bibliothèque.

## Défauts et corrections

1. **Classement des ressources.** Le prédicat de détection des devoirs incluait le mot
   « exercice », ce qui ajoutait les exercices à la rubrique Devoirs. Les règles de
   classification ont été isolées et testées.

2. **Validation des liens PDF.** L'ancienne validation se limitait à une extension
   .pdf, sans contrôler le protocole. Une URL non HTTPS ou un schéma actif pouvait
   ainsi passer cette validation. Le contrôle vérifie maintenant une URL HTTPS, un
   chemin se terminant en PDF et l'absence d'identifiants intégrés.

3. **Fichiers importés invisibles.** L'affichage dépendait du nom finissant par .pdf,
   même si le formulaire acceptait aussi un type MIME PDF. Le type MIME est conservé
   avec la fiche et sert au filtrage. La signature %PDF- est vérifiée avant sauvegarde.

4. **Formulaire qui conservait un brouillon annulé.** Le formulaire est réinitialisé
   à l'ouverture ; le focus est placé sur le titre ; Échap et le clic sur l'arrière-plan
   ferment la fenêtre.

5. **Navigation incohérente.** La classe qui restait sélectionnée après « Toutes les
   ressources » est maintenant désélectionnée lors du changement de parcours.

6. **Lecture PDF fragile.** Le lecteur expose un lien direct de secours à la source.
   Le relais limite l'attente de réception des en-têtes, annule les corps des redirections
   inutilisés et évite de recopier une longueur de contenu lorsqu'une réponse est encodée
   et potentiellement décompressée.

7. **Police externe non essentielle.** L'import Google Fonts est retiré ; les polices
   système permettent un rendu sans cette requête réseau supplémentaire.

8. **Cache PWA.** Le nouveau module de règles catalogue est ajouté au cache de l'application
   et la version du cache est incrémentée.

9. **Qualité continue.** Ajout d'une suite de tests Node native et d'un workflow GitHub
   Actions qui vérifie la syntaxe JavaScript puis exécute les tests.

10. **Documentation et sécurité de base.** Le README est réaligné sur les fonctions
    actuellement accessibles ; des en-têtes de protection sont ajoutés dans Vercel.

## Catalogue PDF

Le catalogue contient 131 entrées avec des identifiants distincts. Les 131 liens utilisent
HTTPS, leur chemin finit par .pdf et leurs domaines sont présents dans la liste
d'autorisation du relais.

Des vérifications ponctuelles ont confirmé l'accès à plusieurs ressources, dont le
fascicule SVT ADEM 6e sur SENPROF, le fascicule SVT ADEM 5e sur APPRENDRE/AUF et le livret
SVT 6e publié sur Top Education Sénégal. Deux autres requêtes ont expiré ou n'ont pas
répondu dans l'outil de contrôle. Cela ne suffit pas à les qualifier de liens cassés.
Le statut HTTP de chacun des 131 liens n'a pas été vérifié exhaustivement depuis un
environnement serveur disposant d'un accès réseau complet.

## Limites restantes

- Les fichiers restent hébergés par des sites tiers et peuvent disparaître ou bloquer
  l'accès selon leur politique, leur disponibilité ou leur protection anti-robot.
- Le relais n'accepte que les hôtes explicitement autorisés. Une nouvelle source doit
  être ajoutée volontairement à sa liste.
- Les PDF externes ne sont pas téléchargés par le service worker ; hors ligne, l'interface
  et les fichiers personnels déjà présents dans IndexedDB peuvent rester accessibles,
  pas l'ensemble du catalogue externe.
- Les données personnelles restent dans le profil de navigateur et sur l'appareil.
- L'agenda, le tableau de bord et les anciens écrans de favoris ne sont pas dans la page
  actuellement déployée ; le README ne les présente plus comme fonctions de l'interface.

## Vérifications automatiques

Le workflow .github/workflows/quality.yml exécute node --check sur les scripts,
puis npm test. Les tests couvrent la catégorisation des ressources, la validation HTTPS
des PDF, le MIME des fichiers locaux, les 131 URL du catalogue et les refus du relais
PDF. Ils ne remplacent pas un contrôle de disponibilité HTTP continu.
