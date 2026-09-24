---
title: "Exercice 17 - Les Plans de Franky - Débutant"
publier: true
parcours-tssr: true
parcours-pro: false
---

# Exercice 17 - Les Plans de Franky 📐 — Débutant

> Chapitre associé : [[cours/17-export-import/17-export-import]]

## Contexte

Les plans du Thousand Sunny doivent sortir de la tête de Franky et devenir des
fichiers que l'équipage peut relire.

> _"SUPER ! Un plan dans la tête, c'est un plan perdu."_ — Franky

**Durée : 40 min**

## Les données techniques

```powershell
$pieces = @(
    [PSCustomObject]@{ Nom="Coup de Burst";  Type="Propulsion"; Energie="Cola";      Puissance=100; Operationnel=$true  }
    [PSCustomObject]@{ Nom="Soldier Dock";   Type="Hangar";     Energie="Aucun";     Puissance=0;   Operationnel=$true  }
    [PSCustomObject]@{ Nom="Mini Merry II";  Type="Sous-marin"; Energie="Mecanique"; Puissance=30;  Operationnel=$true  }
    [PSCustomObject]@{ Nom="Gaon Cannon";    Type="Armement";   Energie="Cola";      Puissance=200; Operationnel=$false }
    [PSCustomObject]@{ Nom="Chicken Voyage"; Type="Navigation"; Energie="Mecanique"; Puissance=50;  Operationnel=$true  }
)
```

---

## Partie A : Export CSV (10 min)

```powershell
New-Item -Path "$env:TEMP\Franky" -ItemType Directory -Force

$pieces | Export-Csv -Path "$env:TEMP\Franky\inventaire.csv" -NoTypeInformation -Encoding UTF8

Get-Content "$env:TEMP\Franky\inventaire.csv"
```

**A1.** À quoi ressemble le fichier CSV brut ? Y a-t-il une ligne d'en-tête ?

**A2.** Réimportez-le et affichez-le en tableau. Retrouvez-vous vos 5 pièces ?

```powershell
Import-Csv "$env:TEMP\Franky\inventaire.csv" | Format-Table -AutoSize
```

> 💡 **Indice** : `-Encoding UTF8` garantit que les accents s'afficheront
> correctement dans Excel.

---

## Partie B : Import et analyse CSV (10 min)

```powershell
$importees = Import-Csv "$env:TEMP\Franky\inventaire.csv"

# Pieces operationnelles
$importees | Where-Object Operationnel -eq "True"

# Pieces qui utilisent du Cola
$importees | Where-Object Energie -eq "Cola"
```

**B1.** Combien de pièces sont opérationnelles ?

**B2.** Combien utilisent du Cola ?

**B3.** Triez par puissance décroissante. Quelle est la pièce la plus puissante ?

```powershell
$importees | Sort-Object { [int]$_.Puissance } -Descending | Select-Object -First 1
```

**B4.** Pourquoi faut-il écrire `[int]$_.Puissance` et non `$_.Puissance` pour trier ?

> 💡 **Indice** : essayez sans le `[int]` et regardez l'ordre obtenu.

---

## Partie C : Export JSON (10 min)

```powershell
$pieces | ConvertTo-Json | Out-File "$env:TEMP\Franky\inventaire.json" -Encoding UTF8

Get-Content "$env:TEMP\Franky\inventaire.json"
```

**C1.** En quoi le fichier JSON diffère-t-il visuellement du CSV ?

**C2.** Réimportez-le et affichez la **première** pièce.

```powershell
$json = Get-Content "$env:TEMP\Franky\inventaire.json" | ConvertFrom-Json
$json[0]
```

**C3.** Après import JSON, `Puissance` est-il un nombre ou du texte ? Vérifiez.

---

## Partie D : Fichier de configuration (10 min)

```powershell
$config = @{
    Navire     = "Thousand Sunny"
    Capitaine  = "Monkey D. Luffy"
    SeuilCola  = 80
    Alertes    = $true
}

$config | ConvertTo-Json | Out-File "$env:TEMP\Franky\config.json" -Encoding UTF8

$chargee = Get-Content "$env:TEMP\Franky\config.json" | ConvertFrom-Json
Write-Host "Seuil Cola : $($chargee.SeuilCola)"
```

**D1.** Rechargez la configuration et affichez le nom du capitaine.

**D2.** Modifiez le seuil, réenregistrez, rechargez. La modification a-t-elle
été conservée ?

---

## Mission finale E : le rapport d'inventaire 🌟

**E1.** Groupez les pièces **par type d'énergie** et affichez, pour chaque
énergie, le nombre de pièces.

```powershell
$pieces | Group-Object Energie | Select-Object Name, Count
```

**E2.** Complétez pour obtenir **aussi** la puissance totale par énergie.
Construisez le rapport avec une boucle `foreach` :

```powershell
$rapport = foreach ($groupe in ($pieces | Group-Object Energie)) {

    $total = ($groupe.Group | Measure-Object Puissance -Sum).Sum

    [PSCustomObject]@{
        Energie        = $groupe.Name
        NbPieces       = $groupe.Count
        PuissanceTotale = $total
    }
}

$rapport | Format-Table -AutoSize
```

**E3.** Exportez ce rapport en CSV, puis réimportez-le pour vérifier.

> 💡 **Indice** : `$groupe.Group` contient les objets du groupe, `$groupe.Name`
> la valeur commune et `$groupe.Count` leur nombre (chapitre 09).

---

> [!success] Validation
>
> - Vous savez exporter des objets en CSV et en JSON
> - Vous savez les réimporter et les exploiter
> - Vous savez qu'après un import CSV, tout est du **texte**
> - Vous savez choisir entre CSV et JSON
