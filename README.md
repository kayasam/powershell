# Formation PowerShell

Site Quartz v5 du support de formation PowerShell.

- Site prévu : <https://kayasam.github.io/powershell/>
- Source pédagogique : `C:\Users\kayaw\Nextcloud\Obsidian\CoffreSam\Formations\Powershell`
- Dépôt local : `D:\Projet-git\powershell`
- Dépôt GitHub : <https://github.com/kayasam/powershell>

## État actuel

La structure Quartz et la publication GitHub Pages sont prêtes. Le contenu pédagogique n'est pas encore synchronisé.

## Prévisualiser le site

```powershell
npm ci
npm run quartz -- build --serve
```

## Préparer ou publier le contenu

```powershell
.\publier-les-cours.ps1 -PrepareOnly
.\publier-les-cours.ps1 -Message "Mise à jour de la formation PowerShell"
```

Voir aussi [MODE-EMPLOI-PUBLICATION.md](MODE-EMPLOI-PUBLICATION.md).
