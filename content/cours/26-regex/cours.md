---
title: "Cours"
parcours-tssr: false
parcours-pro: true
---

<nav class="ps-chapter-path" aria-label="Parcours du chapitre">
  <a href="https://kayasam.github.io/powershell/cours/26-regex/cours"><b>01 · Cours</b><small>Comprendre les notions</small></a>
  <a href="https://kayasam.github.io/powershell/cours/26-regex/cours-interactif"><b>02 · Cours interactif</b><small>Schéma et défi rapide</small></a>
  <a href="https://kayasam.github.io/powershell/cours/26-regex/quiz"><b>03 · Quiz</b><small>Vérifier ses acquis</small></a>
  <a href="https://kayasam.github.io/powershell/cours/26-regex/tp/"><b>04 · Travaux pratiques</b><small>Appliquer en autonomie</small></a>
</nav>

# 26. Expressions régulières (Regex)

> [!TIP] Ressources du chapitre
>
> - [[26-regex/tp/index|Exercices pratiques]]
> - [[Memo-Commandes|Mémo des commandes]]

## Qu'est-ce qu'une regex ?

Une regex = un motif pour chercher et valider du texte.
Plus puissant que `-like`, mais un peu plus complexe.

## -match vs -like

```powershell
# -like : motif simple avec * et ?
"Monkey D. Luffy" -like "*Luffy*"    # True
"Luffy123"        -like "Luffy*"     # True

# -match : regex
"Luffy123"        -match "Luffy\d+"  # True  (Luffy suivi de chiffres)
"192.168.1.1"     -match "^\d+\.\d+\.\d+\.\d+$"  # True (IP)
```

## Les motifs essentiels

| Motif    | Signification            | Exemple                  |
| -------- | ------------------------ | ------------------------ |
| `.`      | N'importe quel caractère | `L.ffy` → Luffy, Laffy   |
| `*`      | 0 ou plusieurs fois      | `Lu*` → L, Lu, Luu...    |
| `+`      | 1 ou plusieurs fois      | `Lu+` → Lu, Luu, Luuu... |
| `?`      | 0 ou 1 fois              | `Lu?` → L ou Lu          |
| `\d`     | Chiffre (0-9)            | `\d+` → 123              |
| `\w`     | Lettre ou chiffre        | `\w+` → mot              |
| `\s`     | Espace                   | `Luffy\s+Zoro`           |
| `^`      | Début de chaîne          | `^Luffy`                 |
| `$`      | Fin de chaîne            | `Luffy$`                 |
| `[abc]`  | Un de ces caractères     | `[LZ]oro` → Loro ou Zoro |
| `[^abc]` | Aucun de ces caractères  | `[^\d]` → pas un chiffre |

## -match et la variable $Matches

```powershell
# Capturer des groupes avec ( )
"Prime : 3000000000 Berrys" -match "(\d+)"

$Matches[0]   # 3000000000 (correspondance complète)
$Matches[1]   # 3000000000 (premier groupe)
```

## Select-String : grep de PowerShell

```powershell
# Chercher dans un fichier
Select-String -Path "C:\Logs\rapport.log" -Pattern "ERREUR"

# Chercher dans plusieurs fichiers
Select-String -Path "C:\Logs\*.log" -Pattern "CRITIQUE"

# La recherche est DÉJÀ insensible à la casse par défaut
Select-String -Path "C:\Logs\app.log" -Pattern "erreur"   # trouve aussi ERREUR, Erreur...

# Pour EXIGER la casse exacte, c'est l'inverse qu'il faut demander :
Select-String -Path "C:\Logs\app.log" -Pattern "ERREUR" -CaseSensitive

# Afficher le contexte (2 lignes avant/après)
Select-String -Path "C:\Logs\app.log" -Pattern "ERREUR" -Context 2
```

## -replace avec regex

```powershell
# Remplacer un motif
"Luffy999" -replace "\d+", "XXX"     # LuffyXXX

# Masquer une IP
"Connexion de 192.168.1.42" -replace "\d+\.\d+\.\d+\.\d+", "xxx.xxx.xxx.xxx"

# Nettoyer des espaces multiples
"trop   d'espaces" -replace "\s+", " "   # trop d'espaces

# Garder une partie (backreference)
"Luffy, Monkey D." -replace "(\w+), (\w+ \w+\.)", '$2 $1'  # Monkey D. Luffy
```

## Cas pratiques

### Valider un format

```powershell
function Test-FormatIP {
    param([string]$IP)
    return $IP -match "^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$"
}

Test-FormatIP "192.168.1.1"   # True
Test-FormatIP "300.1.1.1"     # True (valide format, pas les valeurs)
Test-FormatIP "pas-une-ip"    # False
```

### Extraire des données d'un log

```powershell
$ligne = "[2024-01-15 14:32:01] [ERREUR] Connexion refusée depuis 10.0.0.99"

if ($ligne -match "\[(\d{4}-\d{2}-\d{2})\].*\[(\w+)\].*(\d+\.\d+\.\d+\.\d+)") {
    Write-Host "Date : $($Matches[1])"
    Write-Host "Niveau : $($Matches[2])"
    Write-Host "IP : $($Matches[3])"
}
```

> [!success] À retenir
>
> - `-match` pour tester un motif regex, `-like` pour les motifs simples
> - `$Matches` contient les groupes capturés après `-match`
> - `Select-String` pour chercher dans des fichiers (comme grep)
> - `-replace` accepte des regex pour des remplacements puissants
> - `\d` = chiffre, `\w` = mot, `\s` = espace, `^` = début, `$` = fin

> **Lien**
>
> - [À propos des expressions régulières](https://learn.microsoft.com/fr-fr/powershell/module/microsoft.powershell.core/about/about_regular_expressions)

---

## Fiche récapitulative

![26_Expressions_regulieres](https://kayasam.github.io/powershell/ressources/images/26_expressions_regulieres.webp)

<nav class="ps-course-pagination" aria-label="Navigation entre les chapitres">
  <a href="https://kayasam.github.io/powershell/cours/25-profils/"><small>← Chapitre précédent</small><b>25. Les profils PowerShell</b></a>
  <a href="https://kayasam.github.io/powershell/cours/27-planification/"><small>Chapitre suivant →</small><b>27. Planification des tâches</b></a>
</nav>
