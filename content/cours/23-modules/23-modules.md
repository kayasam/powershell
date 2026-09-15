---
title: "23. Modules"
parcours-tssr: false
parcours-pro: true
---

<nav class="ps-chapter-path" aria-label="Parcours du chapitre">
  <a href="https://kayasam.github.io/powershell/cours/23-modules/cours"><b>01 · Cours</b><small>Comprendre les notions</small></a>
  <a href="https://kayasam.github.io/powershell/cours/23-modules/cours-interactif"><b>02 · Cours interactif</b><small>Schéma et défi rapide</small></a>
  <a href="https://kayasam.github.io/powershell/cours/23-modules/quiz"><b>03 · Quiz</b><small>Vérifier ses acquis</small></a>
  <a href="https://kayasam.github.io/powershell/cours/23-modules/tp/"><b>04 · Travaux pratiques</b><small>Appliquer en autonomie</small></a>
</nav>

> [!TIP] Ressources du chapitre
>
> - [[23-modules/tp/index|Exercices pratiques]]
> - [[Memo-Commandes|Mémo des commandes]]

## Qu'est-ce qu'un module ?

Un module = une collection de fonctions, cmdlets et variables regroupées dans un fichier.
Au lieu de copier-coller vos fonctions d'un script à l'autre, vous les importez.

```powershell
# Sans module : copier-coller partout
function Write-Log { ... }   # dans script1.ps1
function Write-Log { ... }   # dans script2.ps1 (doublon !)

# Avec module :
Import-Module ".\MesOutils.psm1"
Write-Log "Message"          # disponible dans tous les scripts
```

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

```powershell
# Voir tous les modules installés
Get-Module -ListAvailable

# Voir les modules chargés dans la session
Get-Module

# Importer manuellement
Import-Module ActiveDirectory
```

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

## À retenir

- ✅ Un module `.psm1` regroupe vos fonctions réutilisables
- ✅ `Install-Module` pour installer depuis la PowerShell Gallery
- ✅ `Import-Module` pour charger un module
- ✅ `Export-ModuleMember` pour contrôler ce qui est public
- ✅ `Get-Module -ListAvailable` pour voir ce qui est installé

> **Lien**
>
> - [À propos des modules](https://learn.microsoft.com/fr-fr/powershell/module/microsoft.powershell.core/about/about_modules)
