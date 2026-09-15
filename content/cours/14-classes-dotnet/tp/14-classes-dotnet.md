---
title: "Exercice 14 - L'Atelier de Vegapunk"
parcours-tssr: false
parcours-pro: true
---

# Exercice 14 - L'Atelier de Vegapunk 🔬

## Contexte

Vegapunk ne se contente pas des outils du commerce : quand il a besoin de précision
ou de vitesse, il descend au niveau des composants.

Vos cmdlets sont confortables. Sous elles, il y a .NET — et parfois, il faut y aller.

> _"Tout outil a une limite. Le savant sait ce qu'il y a en dessous."_ — Dr Vegapunk

**Durée : 30 min**

## Partie 1 : Statique ou instance ? (5 min)

```powershell
# Statique : la classe travaille
[math]::Sqrt(64)

# Instance : l'objet travaille
$d = Get-Date
$d.AddDays(7)
```

**Questions** :

- Quelle est la différence entre `::` et `.` ?
- `(Get-Date).GetType().FullName` renvoie quoi ?
- Explorez `[math]` avec `Get-Member -Static`. Combien de méthodes trouvez-vous ?

## Partie 2 : L'atelier Math (10 min)

```powershell
[math]::Round(3.14159, 2)
[math]::Ceiling(4.1)
[math]::Floor(4.9)
[math]::Pow(2, 10)
[math]::Sqrt(144)
```

**Exercices** :

1. Calculez l'aire d'un disque de rayon 5 _(indice : `[math]::PI`, `[math]::Pow`)_
2. Convertissez 3 500 000 000 octets en Go, arrondi à 2 décimales
3. Trouvez la plus grande de trois valeurs _(indice : `[math]::Max` imbriqué)_

### Le piège 🪤

Testez et expliquez :

```powershell
[math]::Round(2.5)
[math]::Round(3.5)
[math]::Round(4.5)
```

**Questions** :

- Le résultat de `[math]::Round(2.5)` vous surprend-il ? Pourquoi ce comportement ?
- Comment obtenir l'arrondi « scolaire » (2,5 → 3) ?
- Dans quel type de script cette différence serait-elle **grave** ?

## Partie 3 : L'atelier FileIO (10 min)

```powershell
$p = "C:\Logs\rapport-2026.csv"

[System.IO.Path]::GetFileName($p)
[System.IO.Path]::GetExtension($p)
[System.IO.Path]::GetDirectoryName($p)
[System.IO.Path]::Combine("C:\Logs", "archive", "x.txt")
```

**Question** : ce chemin n'existe pas sur votre machine. Les commandes fonctionnent
quand même — pourquoi ?

**Exercices** :

1. À partir de `"D:\Data\2026\export-final.xlsx"`, extrayez le nom **sans extension**
2. Construisez proprement le chemin `<dossier temp>\cipher-pol\rapport.log`
   _(indice : `GetTempPath` + `Combine`)_

### Lecture et écriture

```powershell
$f = Join-Path $env:TEMP "vegapunk.txt"

[System.IO.File]::WriteAllText($f, "Note 1`nNote 2`nNote 3")
[System.IO.File]::Exists($f)
[System.IO.File]::ReadAllLines($f).Count
[System.IO.File]::AppendAllText($f, "`nNote 4")
```

### Mesurer la différence

```powershell
$gros = Join-Path $env:TEMP "gros.txt"
[System.IO.File]::WriteAllLines($gros, (1..20000 | ForEach-Object { "ligne $_" }))

Measure-Command { Get-Content $gros }
Measure-Command { [System.IO.File]::ReadAllLines($gros) }
```

**Questions** :

- Quel écart mesurez-vous ?
- Pourquoi `Get-Content` est-il plus lent ?
- Faut-il pour autant abandonner `Get-Content` ?

## Partie 4 : Valider une saisie (5 min)

```powershell
$saisie = "   "

if (-not $saisie)                          { "vide (test simple)" }
if ([string]::IsNullOrWhiteSpace($saisie)) { "vide (test .NET)" }
```

**Questions** :

- Lequel des deux se déclenche ?
- Quelle différence entre `IsNullOrEmpty` et `IsNullOrWhiteSpace` ?

## Mission finale : le rapport de Vegapunk 🏴‍☠️

Écrivez une fonction `Get-InfoFichier` qui, pour un chemin donné :

1. **valide** que le chemin n'est ni vide ni composé d'espaces _(`[string]::IsNullOrWhiteSpace`)_ ;
2. renvoie un `[PSCustomObject]` contenant :
   - le **nom sans extension** et l'**extension** _(`[System.IO.Path]`)_ ;
   - le **dossier parent** ;
   - la **taille en Ko**, arrondie à 1 décimale, en arrondi **scolaire** ;
   - le **nombre de lignes**, lu avec `[System.IO.File]::ReadAllLines()` ;
   - un **identifiant unique** de traitement _(`[guid]::NewGuid()`)_ ;
3. lève une erreur claire si le fichier n'existe pas _(`throw`, chapitre 21)_.

Testez-la sur un fichier que vous créez dans `$env:TEMP`.

## Validation

✅ Vous distinguez membre **statique** (`::`) et membre **d'instance** (`.`)
✅ Vous explorez une classe avec `Get-Member -Static`
✅ Vous connaissez les méthodes clés de `[math]`
✅ Vous savez que `[math]::Round` fait de l'**arrondi bancaire**
✅ Vous manipulez des chemins avec `[System.IO.Path]` sans toucher au disque
✅ Vous savez quand `[System.IO.File]` vaut mieux que `Get-Content`
✅ Vous validez une saisie avec `[string]::IsNullOrWhiteSpace`
✅ Vous savez que .NET ignore `-WhatIf` et les PSDrives
