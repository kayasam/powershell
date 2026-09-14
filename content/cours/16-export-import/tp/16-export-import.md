# Exercice 16 - Les Plans de Franky 📐

## Contexte

**Franky** maintient une base de données technique du Thousand Sunny.
Chaque pièce, chaque modification, chaque upgrade est documenté.
Il vous demande d'exporter ces données en CSV pour partager avec les autres chantiers navals,
et en JSON pour l'API du système de bord.

> _"SUPER ! Un bon inventaire c'est la base d'un bon bateau."_ — Franky

## Les données techniques

```powershell
$pieces = @(
    [PSCustomObject]@{ Nom="Coup de Burst"; Type="Propulsion"; Energie="Cola"; Puissance=100; Operationnel=$true  }
    [PSCustomObject]@{ Nom="Soldier Dock";  Type="Hangar";     Energie="Aucun"; Puissance=0;  Operationnel=$true  }
    [PSCustomObject]@{ Nom="Mini Merry II"; Type="Sous-marin"; Energie="Mecanique"; Puissance=30; Operationnel=$true  }
    [PSCustomObject]@{ Nom="Gaon Cannon";   Type="Armement";   Energie="Cola"; Puissance=200; Operationnel=$false }
    [PSCustomObject]@{ Nom="Chicken Voyage";Type="Navigation";  Energie="Mecanique"; Puissance=50; Operationnel=$true  }
)
```

## Mission 1 : Export CSV (10 min)

### 1a. Exporter toutes les pièces

```powershell
New-Item -Path "C:\Temp\Franky" -ItemType Directory -Force

$pieces | Export-Csv -Path "C:\Temp\Franky\inventaire.csv" -NoTypeInformation -Encoding UTF8

Write-Host "Export terminé !" -ForegroundColor Green
```

### 1b. Vérifier le contenu du CSV

```powershell
# Afficher le contenu brut
Get-Content "C:\Temp\Franky\inventaire.csv"

# Importer et afficher comme tableau
Import-Csv "C:\Temp\Franky\inventaire.csv" | Format-Table -AutoSize
```

**Question** : À quoi ressemble le fichier CSV brut ? Y a-t-il une ligne d'en-tête ?

## Mission 2 : Import et analyse CSV (10 min)

Franky charge l'inventaire depuis le CSV pour l'analyser.

```powershell
$inventaire = Import-Csv "C:\Temp\Franky\inventaire.csv"

# Pièces opérationnelles
$inventaire | Where-Object Operationnel -eq "True"

# Pièces qui utilisent du Cola
$inventaire | Where-Object Energie -eq "Cola"

# La pièce la plus puissante
$inventaire | Sort-Object { [int]$_.Puissance } -Descending | Select-Object -First 1
```

**Question** : Pourquoi faut-il `[int]$_.Puissance` au lieu de `$_.Puissance` pour trier ?

> **Indice** : Un CSV ne conserve pas les types — tout revient en **texte** à l'import !

## Mission 3 : Export JSON (10 min)

### 3a. Exporter en JSON

```powershell
$pieces | ConvertTo-Json | Out-File "C:\Temp\Franky\inventaire.json" -Encoding UTF8

Write-Host "Export JSON terminé !" -ForegroundColor Green
```

### 3b. Vérifier et importer

```powershell
# Afficher le JSON brut
Get-Content "C:\Temp\Franky\inventaire.json"

# Importer et utiliser
$inventaireJson = Get-Content "C:\Temp\Franky\inventaire.json" | ConvertFrom-Json

# Accéder à la première pièce
$inventaireJson[0]
$inventaireJson[0].Nom
$inventaireJson[0].Puissance  # Toujours un Int cette fois !
```

**Question** : Quelle différence entre le CSV et le JSON pour les types de données ?

## Mission 4 : Config JSON (10 min)

Franky veut sauvegarder une configuration pour le système de bord.

```powershell
$config = @{
    Version       = "2.0"
    NomBateau     = "Thousand Sunny"
    ColaCapa      = 3
    ColaActuel    = 2
    DerniereRevision = (Get-Date -Format "yyyy-MM-dd")
    Systemes      = @("Navigation", "Propulsion", "Armement")
}

# Sauvegarder
$config | ConvertTo-Json -Depth 3 | Out-File "C:\Temp\Franky\config-sunny.json"

# Recharger et utiliser
$cfg = Get-Content "C:\Temp\Franky\config-sunny.json" | ConvertFrom-Json
Write-Host "Bateau : $($cfg.NomBateau)"
Write-Host "Cola restant : $($cfg.ColaActuel)/$($cfg.ColaCapa)"
```

## Mission Bonus : Rapport d'inventaire complet 🌟

Exportez un rapport CSV qui contient **uniquement les pièces opérationnelles**, avec une colonne supplémentaire indiquant si elles sont "Critique" (puissance > 100) ou "Standard".

<details>
<summary>💡 Solution</summary>

```powershell
$pieces |
    Where-Object Operationnel -eq $true |
    Select-Object Nom, Type, Energie, Puissance,
        @{Name="Categorie"; Expression={
            if ($_.Puissance -gt 100) { "Critique" } else { "Standard" }
        }} |
    Export-Csv "C:\Temp\Franky\pieces-operationnelles.csv" -NoTypeInformation

Write-Host "Rapport exporté !"
Import-Csv "C:\Temp\Franky\pieces-operationnelles.csv" | Format-Table -AutoSize
```

</details>

## Validation

- ✅ Vous savez exporter des objets en CSV avec `Export-Csv`
- ✅ Vous savez importer un CSV avec `Import-Csv`
- ✅ Vous savez que le CSV convertit tout en texte (besoin de cast `[int]`)
- ✅ Vous savez exporter en JSON avec `ConvertTo-Json` + `Out-File`
- ✅ Vous savez importer un JSON avec `Get-Content` + `ConvertFrom-Json`
