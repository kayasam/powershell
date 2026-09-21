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
> - [[08-formatage/tp/index|Exercices pratiques]]
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

## Comparaison

| Cmdlet        | Quand l'utiliser                     |
| ------------- | ------------------------------------ |
| Format-Table  | Beaucoup d'objets, peu de colonnes   |
| Format-List   | Détails d'un objet                   |
| Select-Object | Filtrer avant d'afficher             |
| Out-GridView  | Explorer des données interactivement |

## À retenir

✅ `Format-Table` pour des tableaux
✅ `Format-List` pour les détails
✅ `Select-Object` pour choisir les colonnes
✅ `Out-GridView` pour l'interactivité
✅ Les `Format-*` vont toujours à la fin

> **Lien**
>
> - [Format-Table](https://learn.microsoft.com/fr-fr/powershell/module/microsoft.powershell.utility/format-table)

---

## Fiche récapitulative

![08_Formatage](https://kayasam.github.io/powershell/ressources/images/08_Formatage.png)
