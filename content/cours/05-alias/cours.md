---
title: "Cours"
parcours-tssr: true
parcours-pro: false
---

<nav class="ps-chapter-path" aria-label="Parcours du chapitre">
  <a href="https://kayasam.github.io/powershell/cours/05-alias/cours"><b>01 · Cours</b><small>Comprendre les notions</small></a>
  <a href="https://kayasam.github.io/powershell/cours/05-alias/cours-interactif"><b>02 · Cours interactif</b><small>Schéma et défi rapide</small></a>
  <a href="https://kayasam.github.io/powershell/cours/05-alias/quiz"><b>03 · Quiz</b><small>Vérifier ses acquis</small></a>
  <a href="https://kayasam.github.io/powershell/cours/05-alias/tp/"><b>04 · Travaux pratiques</b><small>Appliquer en autonomie</small></a>
</nav>

# 05. Alias

> [!TIP] Ressources du chapitre
>
> - [[05-alias/tp/index|Exercices pratiques]]
> - [[Memo-Commandes|Mémo des commandes]]

## Qu'est-ce qu'un alias ?

Un **alias** = un raccourci pour une cmdlet.

Au lieu de taper `Get-ChildItem`, tapez simplement `dir` ou `ls`.

## Alias courants

| Alias | Cmdlet        | Usage               |
| ----- | ------------- | ------------------- |
| `dir` | Get-ChildItem | Lister les fichiers |
| `ls`  | Get-ChildItem | Lister les fichiers |
| `cd`  | Set-Location  | Changer de dossier  |
| `cls` | Clear-Host    | Effacer l'écran     |
| `pwd` | Get-Location  | Dossier actuel      |
| `cat` | Get-Content   | Lire un fichier     |
| `cp`  | Copy-Item     | Copier              |
| `mv`  | Move-Item     | Déplacer            |
| `rm`  | Remove-Item   | Supprimer           |

## Découvrir les alias

```powershell
# Trouver tous les alias
Get-Alias

# Quelle cmdlet derrière "dir" ?
Get-Alias dir

# Quels alias pour Get-ChildItem ?
Get-Alias -Definition Get-ChildItem
```

## Créer un alias

```powershell
# Créer un alias temporaire
New-Alias np notepad
np  # Lance notepad

# Créer un alias pour un script
New-Alias monscript "C:\Scripts\test.ps1"
```

> [!NOTE] Ces alias sont temporaires
> `New-Alias` ne dure que le temps de la session : fermez PowerShell, l'alias
> disparaît. Pour qu'un alias soit chargé **à chaque ouverture** de PowerShell,
> il faut l'écrire dans votre **profil** (`$PROFILE`) — un fichier de script
> qui s'exécute automatiquement au démarrage. C'est vu au chapitre 25.

## Pourquoi utiliser les alias ?

- **Rapidité** : `dir` au lieu de `Get-ChildItem`
- **Familiarité** : Si vous venez de CMD ou Bash
- **Productivité** : Moins de caractères à taper

> [!success] À retenir
>
> - Un alias = un raccourci pour une cmdlet
> - `dir`, `ls`, `cd`, `cls` sont des alias courants
> - `Get-Alias` pour découvrir les alias
> - `New-Alias` pour créer les vôtres (temporaires)

> **Lien**
>
> - [À propos des alias](https://learn.microsoft.com/fr-fr/powershell/module/microsoft.powershell.core/about/about_aliases)

---

## Fiche récapitulative

![05_Alias](https://kayasam.github.io/powershell/ressources/images/05_alias.webp)

<nav class="ps-course-pagination" aria-label="Navigation entre les chapitres">
  <a href="https://kayasam.github.io/powershell/cours/04-completion/"><small>← Chapitre précédent</small><b>04. Complétion</b></a>
  <a href="https://kayasam.github.io/powershell/cours/06-historique/"><small>Chapitre suivant →</small><b>06. Historique</b></a>
</nav>
