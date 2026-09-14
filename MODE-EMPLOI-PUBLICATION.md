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

Les fichiers contenant `correction` ou `corrige`, les dossiers `solutions`, les dossiers privés, les sessions et les fichiers marqués `publier: false` ne sont pas publiés.

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
