---
title: "Cours"
parcours-tssr: true
parcours-pro: true
---

<nav class="ps-chapter-path" aria-label="Parcours du chapitre">
  <a href="https://kayasam.github.io/powershell/cours/08-formatage/cours"><b>01 · Cours</b><small>Comprendre les notions</small></a>
  <a href="https://kayasam.github.io/powershell/cours/08-formatage/cours-interactif"><b>02 · Cours interactif</b><small>Schéma et défi rapide</small></a>
  <a href="https://kayasam.github.io/powershell/cours/08-formatage/quiz"><b>03 · Quiz</b><small>Vérifier ses acquis</small></a>
  <a href="https://kayasam.github.io/powershell/cours/08-formatage/tp/"><b>04 · Travaux pratiques</b><small>Appliquer en autonomie</small></a>
</nav>

# 08. Formatage

> [!TIP] Ressources du chapitre
>
> - [[cours/08-formatage/tp/index|Exercices pratiques]]
> - [[Memo-Commandes|Mémo des commandes]]

## Pourquoi formater ?

Par défaut, PowerShell affiche les résultats automatiquement.
Mais vous pouvez **contrôler l'affichage** pour le rendre plus lisible.

## Format-Table : Affichage en tableau

```powershell
# Tableau simple
Get-Process | Format-Table

# Choisir les colonnes
Get-Process | Format-Table Name, Id, CPU

# Ajuster la largeur automatiquement
Get-Process | Format-Table -AutoSize
```

**Raccourci** : `ft`

```powershell
Get-Service | ft Name, Status
```

## Format-List : Affichage en liste

Utile pour voir tous les détails d'un objet.

```powershell
# Tout afficher
Get-Service Spooler | Format-List

# Voir TOUTES les propriétés (même cachées)
Get-Service Spooler | Format-List *
```

**Raccourci** : `fl`

## Select-Object : Choisir les données

```powershell
# Choisir des colonnes
Get-Process | Select-Object Name, Id, CPU

# Les 5 premiers
Get-Process | Select-Object -First 5

# Les 3 derniers
Get-Process | Select-Object -Last 3
```

**Raccourci** : `select`

## Out-GridView : Fenêtre interactive

Affiche dans une fenêtre graphique avec filtrage et tri.

```powershell
Get-Process | Out-GridView
Get-Service | Out-GridView -Title "Services"
```

**Avantage** : Vous pouvez cliquer pour trier et filtrer !

## Règle importante

Les cmdlets `Format-*` doivent être **à la fin** du pipeline.

```powershell
# ✅ Correct : Format-Table en dernier
Get-Process | Select-Object -First 5 | Format-Table

# ❌ Incorrect : impossible de sélectionner après Format-Table
Get-Process | Format-Table | Select-Object -First 5
```

## Exporter vers un fichier CSV

Les `Format-*` servent à **regarder** à l'écran. Pour produire un fichier
réutilisable (ouvrable dans Excel), c'est `Export-Csv` :

```powershell
Get-Process |
    Select-Object Name, Id, WorkingSet |
    Export-Csv "C:\Temp\processus.csv" -NoTypeInformation -Encoding UTF8
```

Deux paramètres à connaître :

- **`-NoTypeInformation`** : supprime la ligne technique ajoutée en haut du fichier
- **`-Encoding UTF8`** : garantit que les accents s'affichent correctement

> [!warning] Jamais de `Format-Table` avant un `Export-Csv`
>
> ```powershell
> Get-Process | Format-Table Name, Id | Export-Csv "C:\Temp\ko.csv"
> ```
>
> Le fichier obtenu est inutilisable : `Format-Table` ne renvoie plus vos données
> mais des objets de **mise en forme**. Le CSV contient alors des colonnes
> incompréhensibles au lieu de `Name` et `Id`.
>
> La règle : `Select-Object` pour choisir les colonnes, **puis** `Export-Csv`.

## Relire un fichier CSV

`Import-Csv` fait le chemin inverse : il lit le fichier et reconstruit des objets,
avec une propriété par colonne.

```powershell
$donnees = Import-Csv "C:\Temp\processus.csv"

$donnees.Count          # nombre de lignes
$donnees[0].Name        # la colonne Name de la première ligne
$donnees | Format-Table # on peut réafficher, trier, filtrer…
```

> [!warning] Après un import, tout est du texte
> `Import-Csv` ne devine pas les types : même une colonne de nombres revient en
> **String** (vérifiez avec `.GetType().Name`, chapitre 07).
>
> Conséquence classique : trier ces valeurs donne un classement **alphabétique**
> (`10` avant `9`). Il faut reconvertir : `[int]$ligne.Id`.

## Comparaison

| Cmdlet        | Quand l'utiliser                          |
| ------------- | ----------------------------------------- |
| Format-Table  | Beaucoup d'objets, peu de colonnes        |
| Format-List   | Détails d'un objet                        |
| Select-Object | Filtrer avant d'afficher                  |
| Out-GridView  | Explorer des données interactivement      |
| Export-Csv    | Produire un fichier réutilisable (Excel)  |
| Import-Csv    | Relire un fichier CSV sous forme d'objets |

> [!success] À retenir
>
> - `Format-Table` pour des tableaux
> - `Format-List` pour les détails
> - `Select-Object` pour choisir les colonnes
> - `Out-GridView` pour l'interactivité
> - Les `Format-*` vont toujours à la fin — **pour l'écran uniquement**
> - `Export-Csv -NoTypeInformation -Encoding UTF8` pour un fichier
> - Jamais de `Format-*` avant un `Export-Csv`
> - `Import-Csv` relit le fichier, mais **tout revient en texte**

> **Lien**
>
> - [Format-Table](https://learn.microsoft.com/fr-fr/powershell/module/microsoft.powershell.utility/format-table)

---

## Fiche récapitulative

![08_Formatage](https://kayasam.github.io/powershell/ressources/images/08_formatage.webp)

<nav class="ps-course-pagination" aria-label="Navigation entre les chapitres">
  <a href="https://kayasam.github.io/powershell/cours/07-variables/"><small>← Chapitre précédent</small><b>07. Variables</b></a>
  <a href="https://kayasam.github.io/powershell/cours/09-pipeline/"><small>Chapitre suivant →</small><b>09. Pipeline</b></a>
</nav>
