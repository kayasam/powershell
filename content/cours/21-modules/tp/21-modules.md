# Exercice 21 - La Bibliothèque de Brook 🎸

## Contexte

**Brook** est le musicien du Thousand Sunny.
Il a des partitions pour toutes les occasions — et il les range soigneusement dans sa bibliothèque.

Aujourd'hui vous allez créer votre propre **bibliothèque PowerShell** :
un module `.psm1` qui regroupe toutes vos fonctions utilitaires.
Une fois créé, vous pourrez l'importer dans n'importe quel script.

> _"Yohohoho ! Une bonne partition, ça s'utilise encore et encore !"_ — Brook

## Mise en place

```powershell
# Créer le dossier de travail
New-Item -Path "C:\Temp\Module-Brook" -ItemType Directory -Force
Set-Location "C:\Temp\Module-Brook"
```

## Partie 1 : Créer le module (15 min)

Créez le fichier `OutilsSunny.psm1` avec ces 3 fonctions :

```powershell
# OutilsSunny.psm1

function Write-Titre {
    <#
    .SYNOPSIS
        Affiche un titre encadré.
    #>
    param(
        [string]$Texte,
        [string]$Couleur = "Cyan"
    )
    $ligne = "=" * ($Texte.Length + 4)
    Write-Host $ligne           -ForegroundColor $Couleur
    Write-Host "  $Texte"       -ForegroundColor $Couleur
    Write-Host $ligne           -ForegroundColor $Couleur
}

function ConvertTo-Berrys {
    <#
    .SYNOPSIS
        Convertit un montant en Berrys dans une unité lisible.
    #>
    param([long]$Montant)
    if ($Montant -ge 1000000000) { return "$([math]::Round($Montant/1000000000,2)) Mrd" }
    if ($Montant -ge 1000000)    { return "$([math]::Round($Montant/1000000,1)) M" }
    return "$Montant Berrys"
}

function Get-DateFormatee {
    <#
    .SYNOPSIS
        Retourne la date au format lisible.
    #>
    param(
        [ValidateSet("Court", "Long", "Heure")]
        [string]$Format = "Court"
    )
    switch ($Format) {
        "Court" { return Get-Date -Format "dd/MM/yyyy" }
        "Long"  { return Get-Date -Format "dddd d MMMM yyyy" }
        "Heure" { return Get-Date -Format "HH:mm:ss" }
    }
}

# Exporter uniquement ces 3 fonctions
Export-ModuleMember -Function Write-Titre, ConvertTo-Berrys, Get-DateFormatee
```

**Créez ce fichier** avec VS Code ou avec PowerShell :

```powershell
# Créer le fichier (collez le contenu ci-dessus)
New-Item -Path "C:\Temp\Module-Brook\OutilsSunny.psm1" -ItemType File
```

## Partie 2 : Importer et utiliser (10 min)

```powershell
# Importer le module
Import-Module "C:\Temp\Module-Brook\OutilsSunny.psm1"

# Vérifier qu'il est chargé
Get-Module OutilsSunny

# Utiliser les fonctions
Write-Titre "Rapport de l'équipage"
ConvertTo-Berrys 3000000000
Get-DateFormatee -Format "Long"

# Voir l'aide
Get-Help Write-Titre
Get-Help ConvertTo-Berrys
```

**Question** : Que retourne `Get-Module OutilsSunny` ? Que voyez-vous dans `ExportedFunctions` ?

## Partie 3 : Ajouter une fonction privée (10 min)

Ajoutez une fonction interne que les utilisateurs du module **ne peuvent pas appeler directement** :

```powershell
# Ajoutez AVANT Export-ModuleMember dans OutilsSunny.psm1 :

function Format-Ligne {
    # Fonction privée (non exportée)
    param([string]$Texte, [int]$Largeur = 40)
    return $Texte.PadRight($Largeur)
}

function Get-FichePirate {
    param(
        [string]$Nom,
        [long]$Prime,
        [string]$Role
    )
    Write-Host (Format-Ligne "Nom   : $Nom")    # Utilise la fonction privée
    Write-Host (Format-Ligne "Prime : $(ConvertTo-Berrys $Prime)")
    Write-Host (Format-Ligne "Rôle  : $Role")
}

# Mettre à jour Export-ModuleMember
Export-ModuleMember -Function Write-Titre, ConvertTo-Berrys, Get-DateFormatee, Get-FichePirate
# Format-Ligne n'est PAS dans la liste → elle reste privée
```

Rechargez et testez :

```powershell
# Recharger le module modifié
Remove-Module OutilsSunny
Import-Module "C:\Temp\Module-Brook\OutilsSunny.psm1"

# Fonctionne
Get-FichePirate -Nom "Luffy" -Prime 3000000000 -Role "Capitaine"

# Erreur : fonction privée
Format-Ligne "test"
```

## Mission Finale : Enrichir la bibliothèque 🌟

Ajoutez 2 fonctions de votre choix au module, inspirées des exercices précédents.
Par exemple :

- `Write-Log` (du TP3) avec un paramètre `-FichierLog`
- `Test-IPValide` (de la théorie Regex)

Importez le module, testez `Get-Help` sur vos nouvelles fonctions.

## Validation

- ✅ Vous savez créer un fichier `.psm1`
- ✅ Vous savez importer un module avec `Import-Module`
- ✅ Vous savez contrôler les exports avec `Export-ModuleMember`
- ✅ Vous comprenez la différence entre fonctions publiques et privées
- ✅ Vous savez documenter avec `.SYNOPSIS`
