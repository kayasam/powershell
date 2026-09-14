---
title: "Cours"
---

# 19. Paramètres de scripts

> [!TIP] Ressources du chapitre
>
> - [[19-parametres-scripts/tp/index|Exercices pratiques]]
> - [[Memo-Commandes|Mémo des commandes]]

## Le problème sans paramètres

Un script avec des valeurs en dur n'est pas réutilisable :

```powershell
# Pas bien : la valeur est codée en dur
$seuil = 80
Get-Process | Where-Object CPU -gt 80
```

Avec des paramètres, le script devient un vrai outil :

```powershell
.\Get-AnalyseProcessus.ps1 -Seuil 80
.\Get-AnalyseProcessus.ps1 -Seuil 50 -Top 10
```

## CmdletBinding : transformer un script en cmdlet

Ajoutez `[CmdletBinding()]` en haut de votre script ou fonction pour activer les fonctionnalités avancées.

```powershell
function Get-Analyse {
    [CmdletBinding()]
    param(
        $Seuil = 80
    )
    Get-Process | Where-Object CPU -gt $Seuil
}
```

Gain immédiat : `-Verbose`, `-Debug`, `-ErrorAction` et les autres paramètres communs
fonctionnent automatiquement.

> [!WARNING] `-WhatIf` n'est **pas** offert par `[CmdletBinding()]` seul
> Pour obtenir `-WhatIf` et `-Confirm`, il faut deux choses :
>
> ```powershell
> function Remove-Rapport {
>     [CmdletBinding(SupportsShouldProcess)]     # 1. le déclarer
>     param([string]$Chemin)
>
>     if ($PSCmdlet.ShouldProcess($Chemin, "Supprimer")) {   # 2. l'utiliser
>         Remove-Item $Chemin
>     }
> }
>
> Remove-Rapport -Chemin "C:\Temp\vieux.txt" -WhatIf
> # What If : Exécution de l’opération « Supprimer » sur la cible « C:\Temp\vieux.txt ».
> ```
>
> Avec `[CmdletBinding()]` tout court, `-WhatIf` renvoie une erreur
> « Nous ne pouvons pas trouver un paramètre qui correspond au nom de paramètre WhatIf ».

## Paramètres Mandatory : obligatoire

```powershell
function Send-Rapport {
    param(
        [Parameter(Mandatory)]
        [string]$Destinataire,

        [string]$Sujet = "Rapport du jour"  # optionnel avec valeur par défaut
    )

    Write-Host "Envoi à $Destinataire : $Sujet"
}

Send-Rapport -Destinataire "lucci@cipher-pol.gov"
Send-Rapport  # PowerShell demande le paramètre interactivement !
```

## ValidateSet : valeurs autorisées

```powershell
function Set-NiveauAlerte {
    param(
        [ValidateSet("INFO", "WARN", "ERREUR", "CRITIQUE")]
        [string]$Niveau = "INFO"
    )

    Write-Host "Niveau défini : $Niveau"
}

Set-NiveauAlerte -Niveau "WARN"     # OK
Set-NiveauAlerte -Niveau "MACHIN"   # Erreur claire !
```

**Bonus** : La complétion Tab fonctionne avec `ValidateSet` !

## ValidateRange : plage de valeurs

```powershell
function Get-TopProcessus {
    param(
        [ValidateRange(1, 100)]
        [int]$Nombre = 10
    )

    Get-Process | Sort-Object CPU -Descending | Select-Object -First $Nombre
}
```

## Exemple complet

```powershell
function Invoke-RapportSysteme {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory)]
        [string]$NomServeur,

        [ValidateSet("CPU", "RAM", "Disque", "Tout")]
        [string]$Type = "Tout",

        [ValidateRange(1, 50)]
        [int]$Top = 5,

        [switch]$ExporterCSV
    )

    Write-Host "Rapport $Type pour $NomServeur (Top $Top)"

    if ($ExporterCSV) {
        Write-Host "Export CSV activé"
    }
}

# Utilisation
Invoke-RapportSysteme -NomServeur "Enies-Lobby" -Type CPU -Top 10
Invoke-RapportSysteme -NomServeur "Enies-Lobby" -ExporterCSV
```

## Aide intégrée avec les commentaires

```powershell
function Get-Info {
    <#
    .SYNOPSIS
        Affiche les infos système.
    .DESCRIPTION
        Récupère CPU, RAM et disque du serveur cible.
    .PARAMETER NomServeur
        Le nom du serveur à analyser.
    .EXAMPLE
        Get-Info -NomServeur "MonServeur"
    #>
    param(
        [string]$NomServeur
    )
}

# L'aide fonctionne maintenant !
Get-Help Get-Info
Get-Help Get-Info -Examples
```

## À retenir

- ✅ `[CmdletBinding()]` pour activer les paramètres avancés
- ✅ `[Parameter(Mandatory)]` pour les paramètres obligatoires
- ✅ `[ValidateSet(...)]` pour limiter les valeurs autorisées
- ✅ `[ValidateRange(min, max)]` pour les plages numériques
- ✅ `[switch]` pour les flags booléens (`-ExporterCSV`)

> **Lien**
>
> - [À propos des fonctions avancées](https://learn.microsoft.com/fr-fr/powershell/module/microsoft.powershell.core/about/about_functions_advanced)
