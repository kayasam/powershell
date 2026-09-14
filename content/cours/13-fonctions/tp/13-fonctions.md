# Exercice 13 - La Boite à Outils de Franky ⚙️

## Contexte

**Franky**, le charpentier du Thousand Sunny, ne fait jamais deux fois la même chose à la main.
Il fabrique des outils réutilisables. Vous allez faire pareil, mais en PowerShell.

Chaque fonction = un outil dans la boite à outils.

> _"SUPER ! Un bon outil, c'est fait une fois et utilisé mille fois."_ — Franky

## Partie 1 : Vos premiers outils (15 min)

### Outil 1 : Convertir les Berrys

La prime de Luffy est 3 000 000 000. Difficile à lire. Créez une fonction qui convertit ça.

```powershell
function ConvertTo-Berrys {
    param($Montant)

    if ($Montant -ge 1000000000) {
        return "$([math]::Round($Montant / 1000000000, 2)) Milliards"
    } elseif ($Montant -ge 1000000) {
        return "$([math]::Round($Montant / 1000000, 1)) Millions"
    } else {
        return "$Montant Berrys"
    }
}

# Testez
ConvertTo-Berrys 3000000000   # 3 Milliards
ConvertTo-Berrys 500000000    # 500 Millions
ConvertTo-Berrys 1000         # 1000 Berrys
```

### Outil 2 : Afficher un titre stylé

Vous en avez marre de taper `Write-Host "===" ...` à chaque fois. Créez une fonction.

```powershell
function Write-Titre {
    param(
        $Texte,
        $Couleur = "Cyan"
    )

    $ligne = "=" * ($Texte.Length + 4)
    Write-Host $ligne -ForegroundColor $Couleur
    Write-Host "  $Texte  " -ForegroundColor $Couleur
    Write-Host $ligne -ForegroundColor $Couleur
}

# Testez
Write-Titre "Rapport de la flotte"
Write-Titre "ALERTE CRITIQUE" -Couleur Red
```

## Partie 2 : Analyser un pirate (15 min)

Créez une fonction complète qui analyse un membre de l'équipage :

```powershell
function Show-FichePirate {
    param(
        $Nom,
        $Prime,
        $DevilFruit = $false
    )

    Write-Host "`n--- Analyse de $Nom ---" -ForegroundColor Yellow

    # Prime
    $primeFormatee = ConvertTo-Berrys $Prime   # Réutilise l'outil précédent !
    Write-Host "Prime    : $primeFormatee"

    # Niveau de danger
    $danger = if ($Prime -ge 1000000000)     { "Extrêmement dangereux" }
         elseif ($Prime -ge 100000000)       { "Dangereux" }
         elseif ($Prime -ge 10000000)        { "Modéré" }
         else                                { "Faible" }

    Write-Host "Danger   : $danger"

    # Devil Fruit
    $df = if ($DevilFruit) { "Oui - Méfiance accrue !" } else { "Non" }
    Write-Host "Devil Fruit: $df"
}

# Testez
Show-FichePirate -Nom "Roronoa Zoro" -Prime 1111000000
Show-FichePirate -Nom "Tony Tony Chopper" -Prime 1000 -DevilFruit $true
```

## Partie 3 : Fonction avec plusieurs sorties (10 min)

Créez une fonction qui retourne un objet structuré :

```powershell
function Get-InfoServeur {
    param($NomServeur)

    # Récupère les vraies infos du système local (CIM, chapitre 12)
    $memoire  = Get-CimInstance Win32_OperatingSystem
    $cpu      = Get-CimInstance Win32_Processor | Select-Object -First 1

    return [PSCustomObject]@{
        Serveur     = $NomServeur
        RAM_Total   = [math]::Round($memoire.TotalVisibleMemorySize / 1MB, 1)
        RAM_Libre   = [math]::Round($memoire.FreePhysicalMemory / 1MB, 1)
        CPU_Modele  = $cpu.Name
        Heure       = Get-Date -Format "HH:mm:ss"
    }
}

# Utilisez-la
$info = Get-InfoServeur -NomServeur "Thousand-Sunny"
$info | Format-List
```

## Mission Bonus : La boite à outils complète 🌟

Combinez tous vos outils pour analyser la liste des pirates de l'Exercice 1.
Créez une fonction `Get-RapportEquipage` qui :

1. Prend la liste `$equipage` en paramètre
2. Pour chaque pirate, affiche leur analyse avec `Show-FichePirate`
3. Affiche à la fin le total des primes avec `ConvertTo-Berrys`

## Validation

✅ Vous savez créer une fonction avec `param()`
✅ Vous savez réutiliser une fonction dans une autre
✅ Vous savez utiliser des valeurs par défaut
✅ Vous savez retourner des objets structurés
✅ Vous respectez la convention Verbe-Nom
