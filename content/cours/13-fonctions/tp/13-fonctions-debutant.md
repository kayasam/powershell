---
title: "Exercice 13 - La Boite à Outils de Franky - Débutant"
publier: true
parcours-tssr: true
parcours-pro: false
---

# Exercice 13 - La Boite à Outils de Franky ⚙️ — Débutant

> Chapitre associé : [[13-fonctions/13-fonctions]]

## Contexte

**Franky**, le charpentier du Thousand Sunny, ne fait jamais deux fois la même
chose à la main. Il fabrique des outils réutilisables.

Chaque fonction = un outil dans la boîte à outils.

> _"SUPER ! Un bon outil, c'est fait une fois et utilisé mille fois."_ — Franky

**Durée : 40 min**

---

## Partie A : Vos premiers outils (15 min)

### Outil 1 : convertir les Berrys

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

ConvertTo-Berrys 3000000000
ConvertTo-Berrys 500000000
ConvertTo-Berrys 1000
```

**A1.** Que renvoient ces trois appels ?

**A2.** Vérifiez que le résultat est **réutilisable** : rangez-le dans une variable
et affichez-la.

### Outil 2 : afficher un titre stylé

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

Write-Titre "Rapport de la flotte"
Write-Titre "ALERTE CRITIQUE" -Couleur Red
```

**A3.** Que se passe-t-il si vous appelez `Write-Titre` **sans** préciser `-Couleur` ?

> 💡 **Indice** : `$Couleur = "Cyan"` dans le `param()` est une **valeur par défaut**.

---

## Partie B : Analyser un pirate (15 min)

```powershell
function Show-FichePirate {
    param(
        $Nom,
        $Prime,
        $DevilFruit = $false
    )

    Write-Host "--- Analyse de $Nom ---" -ForegroundColor Yellow

    $primeFormatee = ConvertTo-Berrys $Prime
    Write-Host "Prime       : $primeFormatee"

    $danger = if     ($Prime -ge 1000000000) { "Extremement dangereux" }
              elseif ($Prime -ge 100000000)  { "Dangereux" }
              elseif ($Prime -ge 10000000)   { "Modere" }
              else                           { "Faible" }

    Write-Host "Danger      : $danger"

    $df = if ($DevilFruit) { "Oui - Mefiance accrue !" } else { "Non" }
    Write-Host "Devil Fruit : $df"
}

Show-FichePirate -Nom "Roronoa Zoro" -Prime 1111000000
Show-FichePirate -Nom "Tony Tony Chopper" -Prime 1000 -DevilFruit $true
```

**B1.** Quel niveau de danger obtient Zoro ? Et Chopper ?

**B2.** Repérez la ligne `$primeFormatee = ConvertTo-Berrys $Prime`. Que fait-elle
de remarquable ?

---

## Partie C : Une fonction qui retourne un objet (10 min)

```powershell
function Get-InfoServeur {
    param($NomServeur)

    $memoire = Get-CimInstance Win32_OperatingSystem
    $cpu     = Get-CimInstance Win32_Processor | Select-Object -First 1

    return [PSCustomObject]@{
        Serveur    = $NomServeur
        RAM_Total  = [math]::Round($memoire.TotalVisibleMemorySize / 1MB, 1)
        RAM_Libre  = [math]::Round($memoire.FreePhysicalMemory / 1MB, 1)
        CPU_Modele = $cpu.Name
        Heure      = Get-Date -Format "HH:mm:ss"
    }
}

$info = Get-InfoServeur -NomServeur "Thousand-Sunny"
$info | Format-List
```

**C1.** Quelles valeurs obtenez-vous sur votre machine ?

**C2.** Essayez `$info.RAM_Libre` seul. Pourquoi est-ce possible ?

> 💡 **Indice** : la fonction renvoie un **objet**, pas du texte.

---

## Mission finale D : la boîte à outils complète 🌟

**D1.** Écrivez une fonction `Get-RapportEquipage` qui :

1. prend une liste de pirates en paramètre
2. affiche l'analyse de chacun avec `Show-FichePirate`
3. affiche à la fin le **total des primes**, formaté avec `ConvertTo-Berrys`

```powershell
$equipage = @(
    [PSCustomObject]@{ Nom="Monkey D. Luffy"; Prime=3000000000; DevilFruit=$true  }
    [PSCustomObject]@{ Nom="Roronoa Zoro";    Prime=1111000000; DevilFruit=$false }
    [PSCustomObject]@{ Nom="Nami";            Prime=366000000;  DevilFruit=$false }
)
```

> 💡 **Indice** : parcourez la liste avec `foreach`, et additionnez les primes
> avec `Measure-Object Prime -Sum`.

---

## Validation

✅ Vous savez créer une fonction avec `param()`
✅ Vous savez réutiliser une fonction dans une autre
✅ Vous savez utiliser des valeurs par défaut
✅ Vous savez retourner des objets structurés
✅ Vous respectez la convention **Verbe-Nom**
