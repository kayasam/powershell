---
title: "Cours"
parcours-tssr: false
parcours-pro: true
---

<nav class="ps-chapter-path" aria-label="Parcours du chapitre">
  <a href="https://kayasam.github.io/powershell/cours/23-modules/cours"><b>01 · Cours</b><small>Comprendre les notions</small></a>
  <a href="https://kayasam.github.io/powershell/cours/23-modules/cours-interactif"><b>02 · Cours interactif</b><small>Schéma et défi rapide</small></a>
  <a href="https://kayasam.github.io/powershell/cours/23-modules/quiz"><b>03 · Quiz</b><small>Vérifier ses acquis</small></a>
  <a href="https://kayasam.github.io/powershell/cours/23-modules/tp/"><b>04 · Travaux pratiques</b><small>Appliquer en autonomie</small></a>
</nav>

# 23. Modules

> [!TIP] Ressources du chapitre
>
> - [[cours/23-modules/tp/index|Exercices pratiques]]
> - [[Memo-Commandes|Mémo des commandes]]

## Qu'est-ce qu'un module ?

Un module = une collection de fonctions, cmdlets et variables regroupées dans un fichier (ou un dossier), qu'on peut charger à la demande dans une session PowerShell.

C'est le même principe qu'une bibliothèque logicielle dans un autre langage : au lieu de tout réécrire, on réutilise du code déjà écrit et testé. PowerShell lui-même est construit ainsi — les cmdlets que vous utilisez tous les jours (`Get-Process`, `Get-Service`, `Test-Path`...) viennent de modules chargés automatiquement au démarrage.

Un module peut venir de trois endroits :

- **Intégré à Windows/PowerShell** (ex. `Microsoft.PowerShell.Management`)
- **Installé à part** pour ajouter des fonctionnalités (ex. `ActiveDirectory` via RSAT, `Az` pour Azure)
- **Créé par vous-même**, pour regrouper vos propres fonctions

```powershell
# Sans module : copier-coller partout
function Write-Log { ... }   # dans script1.ps1
function Write-Log { ... }   # dans script2.ps1 (doublon !)

# Avec module :
Import-Module ".\MesOutils.psm1"
Write-Log "Message"          # disponible dans tous les scripts
```

**Pourquoi c'est important** : sans module, chaque script est isolé et les corrections de bug doivent être répétées partout. Avec un module, vous corrigez une fois dans le `.psm1`, et tous les scripts qui l'importent bénéficient du correctif.

## Trouver et installer des modules

### PowerShell Gallery (dépôt officiel)

```powershell
# Chercher un module
Find-Module -Name "*Azure*"
Find-Module -Tag "ActiveDirectory"

# Voir les détails
Find-Module -Name "PSReadLine"

# Installer
Install-Module -Name "ImportExcel" -Scope CurrentUser

# Mettre à jour
Update-Module -Name "ImportExcel"
```

### Modules déjà disponibles

`Get-Module -ListAvailable` liste tout ce qui est **installé** sur la machine (mais pas forcément chargé). `Get-Module` (sans paramètre) liste ce qui est **actuellement chargé** dans la session — souvent une petite partie seulement, car PowerShell charge les modules à la demande pour rester léger.

```powershell
# Voir tous les modules installés
Get-Module -ListAvailable

# Voir les modules chargés dans la session
Get-Module

# Importer manuellement (nécessaire si l'auto-chargement ne suffit pas)
Import-Module ActiveDirectory
```

### Découvrir les commandes d'un module

Une fois un module importé, `Get-Command -Module <Nom>` liste toutes les cmdlets qu'il apporte. C'est très utile pour explorer un module que vous ne connaissez pas encore, comme `ActiveDirectory` :

```powershell
# Importer le module (si pas déjà chargé automatiquement)
Import-Module ActiveDirectory

# Lister toutes les commandes du module ActiveDirectory
Get-Command -Module ActiveDirectory

# Filtrer par verbe, ex. uniquement les commandes de lecture
Get-Command -Module ActiveDirectory -Verb Get

# Chercher une commande par mot-clé (ex. tout ce qui concerne les utilisateurs)
Get-Command -Module ActiveDirectory -Name "*User*"
```

> [!TIP]
> `Get-Command -Module ActiveDirectory` fonctionne uniquement si le module est installé (RSAT sur un poste Windows, ou depuis un serveur avec le rôle AD). Sans RSAT, la commande renvoie une erreur "module introuvable".

## Créer son propre module

### Structure minimale

Un module = un fichier `.psm1`

```powershell
# Fichier : MesOutils.psm1

function Write-Log {
    param($Message, $Niveau = "INFO")
    $date = Get-Date -Format "HH:mm:ss"
    Write-Host "[$date] [$Niveau] $Message"
}

function ConvertTo-Berrys {
    param([long]$Montant)
    if ($Montant -ge 1000000000) { return "$([math]::Round($Montant/1000000000,2)) Mrd" }
    if ($Montant -ge 1000000)    { return "$([math]::Round($Montant/1000000,1)) M" }
    return "$Montant Berrys"
}
```

### Utiliser le module

```powershell
# Importer depuis le dossier courant
Import-Module ".\MesOutils.psm1"

# Utiliser les fonctions
Write-Log "Test"
ConvertTo-Berrys 3000000000   # 3 Mrd
```

### Contrôler ce qui est exporté

```powershell
# À la fin du fichier .psm1 :
Export-ModuleMember -Function Write-Log, ConvertTo-Berrys
# Les autres fonctions (internes) restent privées
```

## Module avec manifeste (.psd1)

Pour un module professionnel, ajoutez un fichier de description :

```powershell
# Générer le manifeste
New-ModuleManifest -Path ".\MesOutils.psd1" `
    -RootModule "MesOutils.psm1" `
    -ModuleVersion "1.0.0" `
    -Author "Cipher Pol" `
    -Description "Outils de surveillance Enies Lobby"
```

## Modules utiles à connaître

| Module            | Usage                         | Installation                 |
| ----------------- | ----------------------------- | ---------------------------- |
| `ImportExcel`     | Lire/écrire Excel sans Office | `Install-Module ImportExcel` |
| `PSWriteHTML`     | Générer des rapports HTML     | `Install-Module PSWriteHTML` |
| `ActiveDirectory` | Gérer l'AD                    | Inclus avec RSAT             |
| `Az`              | Azure PowerShell              | `Install-Module Az`          |
| `PSReadLine`      | Meilleure console             | Inclus avec PS7              |

> [!success] À retenir
>
> - Un module `.psm1` regroupe vos fonctions réutilisables
> - `Install-Module` pour installer depuis la PowerShell Gallery
> - `Import-Module` pour charger un module
> - `Export-ModuleMember` pour contrôler ce qui est public
> - `Get-Module -ListAvailable` pour voir ce qui est installé

> **Lien**
>
> - [À propos des modules](https://learn.microsoft.com/fr-fr/powershell/module/microsoft.powershell.core/about/about_modules)

---

## Fiche récapitulative

![23_Modules](https://kayasam.github.io/powershell/ressources/images/23_modules.webp)

<nav class="ps-course-pagination" aria-label="Navigation entre les chapitres">
  <a href="https://kayasam.github.io/powershell/cours/22-parametres-scripts/"><small>← Chapitre précédent</small><b>22. Paramètres de scripts</b></a>
  <a href="https://kayasam.github.io/powershell/cours/24-rsat-et-gallery/"><small>Chapitre suivant →</small><b>24. RSAT et PowerShell Gallery</b></a>
</nav>
