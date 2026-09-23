# Mode d'emploi — publication PowerShell

Le cours reste dans le coffre Obsidian :

`C:\Users\kayaw\Nextcloud\Obsidian\CoffreSam\Formations\Powershell`

Le site Quartz se trouve dans :

`D:\Projet-git\powershell`

## Préparer sans publier

```powershell
cd D:\Projet-git\powershell
.\publier-les-cours.ps1 -PrepareOnly
```

Cette commande synchronise les éléments publics, vérifie qu'aucune correction n'est incluse et construit le site localement.

## Publier

```powershell
.\publier-les-cours.ps1 -Message "Mise à jour de la formation PowerShell"
```

Le script demande une confirmation avant le commit et l'envoi vers GitHub.

Site prévu : <https://kayasam.github.io/powershell/>

## Organisation attendue dans le coffre

```text
Formations\Powershell\
├── cours\
├── Ressources\
├── mininote\
├── videos\
└── sessions\
```

Les corrections sont publiées uniquement lorsque leur propriété Obsidian indique `publier: true`. Décochez cette propriété pour les retirer du site lors de la prochaine publication. Les dossiers `solutions`, les dossiers privés, les sessions et les fichiers marqués `publier: false` restent exclus.

Les fiches PNG du dossier `Ressources/Fiches_PowerShell_TSSR_32_Chapitres` sont copiées automatiquement puis optimisées en WebP pour le site. Le contrôle de publication signale toute image référencée mais absente.

La page principale de chaque chapitre sert de sommaire vers le cours, l'interactif, le quiz et les TP. La version complète se trouve dans `Cours`, avec une navigation vers les chapitres précédent et suivant. Ces éléments sont recréés automatiquement à chaque publication.

## TP final Active Directory

La rubrique `TP final Active Directory` est synchronisée depuis :

`Formations/active-directory/tp/TP-FINAL`

La publication inclut les prérequis, les parcours débutant et avancé, les guides manuels, les schémas, les deux CSV et le script de connexion fourni. Les scripts complets de déploiement et les pages `Explication-Script-*` restent privés. Le générateur vérifie les liens internes et recrée la rubrique à chaque publication.

## Règle permanente pour les pages HTML interactives

Dans les fichiers Markdown rendus par Quartz, un lien relatif vers un fichier `.html`
peut être converti en route sans extension. GitHub Pages sert alors cette route comme
`application/octet-stream` et le navigateur télécharge un fichier ou un disque virtuel.

Tous les boutons qui ouvrent une page HTML autonome doivent donc utiliser son URL absolue
complète, avec l'extension `.html` :

```html
<a href="https://kayasam.github.io/powershell/cours/index.html">Parcours interactif</a>
```

Ne jamais utiliser `./cours/index.html` ou `./cours/.../jeu-fil-rouge.html` dans une page
Markdown Quartz. Le script de publication vérifie cette règle avant l'envoi.

## Structure obligatoire de chaque chapitre dans l'explorateur

La publication génère automatiquement quatre accès cohérents pour chaque chapitre :

- le titre du chapitre ouvre directement sa page de cours ;
- `Cours` affiche le cours Markdown avec une icône dédiée ;
- `Cours interactif` intègre la page HTML et propose aussi son ouverture en plein écran ;
- `Quiz` intègre 20 questions avec quatre choix et une réponse expliquée ;
- `Exercices pratiques` reste une section repliable contenant les TP.

Ne pas masquer les entrées `Cours`, `Cours interactif` et `Quiz` dans le thème de l'explorateur.

## Thème et quiz reproductibles

Le fichier `quartz/styles/explorer-chapters.generated.scss` est recréé à chaque préparation
par `scripts/generate-explorer-chapters.mjs`. Il prend tous les dossiers de chapitre et
leurs titres réels dans `content/cours`. Ne pas maintenir une liste de 30 ou 32 chapitres
à la main dans le SCSS : les nouveaux chapitres doivent conserver la même forme sans
retouche du thème.

La page d'accueil garde sa mise en page dans `site-content/index.md`, avec deux marqueurs
`{{CHAPTER_COUNT}}` et `{{MODULE_CARDS}}`. `scripts/generate-homepage.mjs` les remplit
avant la synchronisation : les nombres, plages et liens ne peuvent plus rester sur une
ancienne numérotation.

Les notions des quiz restent dans `scripts/quiz-concepts/`, hors de `content`, et le
modèle HTML, le moteur et le CSS restent dans `site-content`. Le script génère chaque
quiz dans la zone temporaire avant de reconstruire `content`. Il bloque la publication
si un chapitre manque, si un quiz n'a pas 20 questions ou si les bonnes réponses ne sont
pas réparties à 5/5/5/5 entre A, B, C et D.

GitHub Actions relance les mêmes générateurs juste avant son build. Même si un push est
fait directement sans passer par le lanceur local, le site sera construit avec le thème,
la page d'accueil et les quiz issus des sources permanentes.

Pour ajouter un chapitre : écrire d'abord le cours dans le coffre, puis ajouter ses dix
notions et définitions pédagogiques dans `scripts/quiz-concepts/`. Le reste du menu et
les 20 questions sont régénérés automatiquement par `-PrepareOnly` ou par la publication.
