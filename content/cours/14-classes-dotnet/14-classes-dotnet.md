---
title: "14. Les classes du framework .NET"
parcours-tssr: false
parcours-pro: true
---

<nav class="ps-chapter-path" aria-label="Parcours du chapitre">
  <a href="https://kayasam.github.io/powershell/cours/14-classes-dotnet/cours"><b>01 · Cours</b><small>Comprendre les notions</small></a>
  <a href="https://kayasam.github.io/powershell/cours/14-classes-dotnet/cours-interactif"><b>02 · Cours interactif</b><small>Schéma et défi rapide</small></a>
  <a href="https://kayasam.github.io/powershell/cours/14-classes-dotnet/quiz"><b>03 · Quiz</b><small>Vérifier ses acquis</small></a>
  <a href="https://kayasam.github.io/powershell/cours/14-classes-dotnet/tp/"><b>04 · Travaux pratiques</b><small>Appliquer en autonomie</small></a>
</nav>

> [!TIP] Ressources du chapitre
>
> - [[14-classes-dotnet/tp/index|Exercices pratiques]]
> - [[Memo-Commandes|Mémo des commandes]]

Depuis le chapitre 12, vous écrivez `[math]::Round(...)` sans qu'on vous ait jamais
expliqué d'où ça sort. Voici la réponse : **PowerShell est bâti sur .NET**, et vous
pouvez appeler directement ses milliers de classes.

C'est la porte de sortie quand aucune cmdlet ne fait ce dont vous avez besoin.

## Rappel : objets, propriétés, méthodes

Au chapitre 03 vous avez vu qu'un objet a des propriétés et des méthodes.
Ces objets viennent tous de **classes .NET** :

```powershell
(Get-Date).GetType().FullName        # System.DateTime
"texte".GetType().FullName           # System.String
(Get-Process)[0].GetType().FullName  # System.Diagnostics.Process
```

## La syntaxe : crochets et double deux-points

Deux notations à distinguer :

| Notation           | Sens                                          | Exemple            |
| ------------------ | --------------------------------------------- | ------------------ |
| `[Classe]::Membre` | membre **statique** — pas besoin d'objet      | `[math]::PI`       |
| `$objet.Membre`    | membre **d'instance** — sur un objet existant | `$date.AddDays(7)` |

```powershell
# Statique : la classe fait le travail
[math]::Round(3.14159, 2)
[guid]::NewGuid()
[System.IO.Path]::GetExtension("rapport.csv")

# Instance : l'objet fait le travail
$d = Get-Date
$d.AddDays(30)
$d.ToString("yyyy-MM-dd")
```

Le nom complet peut être raccourci quand il est dans l'espace de noms `System` :
`[System.Math]` = `[math]`, `[System.String]` = `[string]`.

## Explorer une classe

Même réflexe qu'au chapitre 03, avec `Get-Member -Static` :

```powershell
# Les membres statiques de [math]
[math] | Get-Member -Static

# Uniquement les méthodes
[System.IO.Path] | Get-Member -Static -MemberType Method

# Les membres d'instance d'un objet
(Get-Date) | Get-Member
```

## Créer un objet

```powershell
# Ancienne syntaxe
$liste = New-Object System.Collections.Generic.List[string]

# Syntaxe moderne, plus rapide (PowerShell 5+)
$liste = [System.Collections.Generic.List[string]]::new()

$liste.Add("Luffy")
$liste.Add("Zoro")
$liste.Count
```

> [!TIP] Préférez `::new()`
> Plus court, plus rapide, et la complétion Tab propose les surcharges disponibles.
> `New-Object` reste valable, vous le croiserez dans beaucoup de scripts existants
> — notamment au chapitre 32 pour les interfaces graphiques.

## `[math]` : les calculs

```powershell
[math]::Round(3.14159, 2)   # 3,14
[math]::Ceiling(4.1)        # 5    (arrondi au-dessus)
[math]::Floor(4.9)          # 4    (arrondi en-dessous)
[math]::Abs(-42)            # 42   (valeur absolue)
[math]::Pow(2, 10)          # 1024 (puissance)
[math]::Sqrt(144)           # 12   (racine carrée)
[math]::Max(3, 7)           # 7
[math]::Min(3, 7)           # 3
[math]::PI                  # 3,14159265358979
```

> [!WARNING] `[math]::Round` n'arrondit pas comme à l'école
> Testez ceci :
>
> ```powershell
> [math]::Round(2.5)   # 2   <-- et non 3 !
> [math]::Round(3.5)   # 4
> ```
>
> Ce n'est pas un bug : c'est l'**arrondi bancaire** (_banker's rounding_).
> En cas d'égalité parfaite, .NET arrondit vers le nombre **pair** le plus proche,
> pour éviter un biais statistique quand on additionne beaucoup de valeurs.
>
> Pour l'arrondi scolaire, demandez-le explicitement :
>
> ```powershell
> [math]::Round(2.5, 0, [MidpointRounding]::AwayFromZero)   # 3
> ```
>
> Sans incidence sur des pourcentages ou des Go d'espace disque, mais **critique**
> sur des montants financiers.

## `[System.IO]` : chemins et fichiers

### `[System.IO.Path]` — manipuler des chemins

Ces méthodes travaillent sur des **chaînes** : elles ne touchent pas au disque et
fonctionnent même sur un chemin inexistant.

```powershell
$p = "C:\Logs\rapport-2026.csv"

[System.IO.Path]::GetFileName($p)                 # rapport-2026.csv
[System.IO.Path]::GetFileNameWithoutExtension($p) # rapport-2026
[System.IO.Path]::GetExtension($p)                # .csv
[System.IO.Path]::GetDirectoryName($p)            # C:\Logs
[System.IO.Path]::Combine("C:\Logs", "archive", "x.txt")   # C:\Logs\archive\x.txt
[System.IO.Path]::GetTempPath()
```

`Combine` gère les séparateurs à votre place : plus de `"$a\$b"` qui produit un
double antislash.

### `[System.IO.File]` — lire et écrire vite

```powershell
[System.IO.File]::Exists($p)
[System.IO.File]::ReadAllText($p)      # tout le fichier en UNE chaîne
[System.IO.File]::ReadAllLines($p)     # un tableau de lignes
[System.IO.File]::WriteAllText($p, "contenu")
[System.IO.File]::AppendAllText($p, "`nsuite")
[System.IO.File]::Delete($p)
```

> [!TIP] Quand ça vaut le détour : la performance
> Mesuré sur un fichier de **20 000 lignes** :
>
> | Méthode                            | Temps     |
> | ---------------------------------- | --------- |
> | `Get-Content`                      | **79 ms** |
> | `[System.IO.File]::ReadAllLines()` | **9 ms**  |
>
> Presque **9 fois plus rapide**. `Get-Content` crée un objet enrichi par ligne,
> la méthode .NET renvoie un simple tableau de chaînes.
>
> **En pratique** : gardez `Get-Content` pour la lisibilité au quotidien, passez à
> `[System.IO.File]` quand vous traitez de gros volumes dans une boucle.

## Les autres classes utiles

```powershell
# Identifiants uniques
[guid]::NewGuid()

# Dates
[datetime]::Now
[datetime]::Today
[datetime]::ParseExact("15/01/2026", "dd/MM/yyyy", $null)

# Conversion de types
[int]::Parse("42")
[int]::TryParse("abc", [ref]$null)     # False, sans erreur
[double]::Parse("3.14", [cultureinfo]::InvariantCulture)

# Chaînes
[string]::IsNullOrEmpty($valeur)
[string]::IsNullOrWhiteSpace($valeur)
[string]::Join(", ", @("a","b","c"))   # a, b, c

# Environnement
[System.Environment]::MachineName
[System.Environment]::OSVersion
[System.Environment]::GetFolderPath("Desktop")
```

> [!TIP] `[string]::IsNullOrWhiteSpace` vaut mieux qu'un simple test
>
> ```powershell
> $saisie = "   "
> if (-not $saisie)                              { "vide" }  # ne se déclenche PAS
> if ([string]::IsNullOrWhiteSpace($saisie))     { "vide" }  # se déclenche
> ```
>
> Indispensable pour valider une saisie utilisateur (chapitre 32).

## Quand utiliser .NET plutôt qu'une cmdlet ?

| Situation                                  | Choix                                                |
| ------------------------------------------ | ---------------------------------------------------- |
| Une cmdlet existe et suffit                | **la cmdlet** — lisible, gère les erreurs, `-WhatIf` |
| Performance sur de gros volumes            | .NET                                                 |
| Aucune cmdlet ne couvre le besoin          | .NET                                                 |
| Manipuler un chemin sans toucher au disque | `[System.IO.Path]`                                   |
| Calcul mathématique                        | `[math]`                                             |

> [!WARNING] .NET ne joue pas avec les règles de PowerShell
> Les méthodes .NET **ignorent** `-WhatIf`, `-ErrorAction` et les PSDrives.
>
> ```powershell
> Remove-Item "C:\Temp\x.txt" -WhatIf              # simule, ne supprime rien
> [System.IO.File]::Delete("C:\Temp\x.txt")        # supprime, sans avertissement
>
> [System.IO.File]::ReadAllText("HKCU:\Software")  # échoue : ne connaît pas les PSDrives
> ```
>
> C'est la contrepartie de la puissance : vous sortez du filet de sécurité.

> [!success] À retenir
>
> - PowerShell repose sur .NET : ses classes sont accessibles directement
> - `[Classe]::Membre` = statique, `$objet.Membre` = instance
> - `Get-Member -Static` pour explorer une classe
> - `[Classe]::new()` remplace avantageusement `New-Object`
> - `[math]::Round` fait de l'**arrondi bancaire** — `AwayFromZero` pour l'arrondi scolaire
> - `[System.IO.Path]` manipule des chemins sans toucher au disque
> - `[System.IO.File]` est ~9× plus rapide que `Get-Content` sur gros volumes
> - `[string]::IsNullOrWhiteSpace` pour valider une saisie
> - .NET ignore `-WhatIf`, `-ErrorAction` et les PSDrives : prudence

> **Liens**
>
> - [Documentation .NET](https://learn.microsoft.com/fr-fr/dotnet/api/)
> - [À propos des méthodes .NET](https://learn.microsoft.com/fr-fr/powershell/module/microsoft.powershell.core/about/about_methods)

---

## Fiche récapitulative

![14_Classes_DotNET](https://kayasam.github.io/powershell/ressources/images/14_Classes_DotNET.png)
