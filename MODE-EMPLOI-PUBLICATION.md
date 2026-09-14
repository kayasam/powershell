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

Les fichiers contenant `correction` ou `corrige`, les dossiers privés, les sessions et les fichiers marqués `publier: false` ne sont pas publiés.
