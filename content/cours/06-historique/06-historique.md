---
title: "06. Historique"
parcours-tssr: true
parcours-pro: false
---

<nav class="ps-chapter-path" aria-label="Parcours du chapitre">
  <a href="https://kayasam.github.io/powershell/cours/06-historique/cours"><b>01 · Cours</b><small>Comprendre les notions</small></a>
  <a href="https://kayasam.github.io/powershell/cours/06-historique/cours-interactif"><b>02 · Cours interactif</b><small>Schéma et défi rapide</small></a>
  <a href="https://kayasam.github.io/powershell/cours/06-historique/quiz"><b>03 · Quiz</b><small>Vérifier ses acquis</small></a>
  <a href="https://kayasam.github.io/powershell/cours/06-historique/tp/"><b>04 · Travaux pratiques</b><small>Appliquer en autonomie</small></a>
</nav>

> [!TIP] Ressources du chapitre
>
> - [[06-historique/tp/index|Exercices pratiques]]
> - [[Memo-Commandes|Mémo des commandes]]

## L'historique des commandes

PowerShell mémorise toutes vos commandes.
Retrouvez-les facilement pour gagner du temps.

## Navigation rapide

- **↑** (flèche haut) : Commande précédente
- **↓** (flèche bas) : Commande suivante
- **Ctrl+R** : Recherche dans l'historique (tapez pour filtrer)

## Afficher l'historique

```powershell
# Voir toutes les commandes
Get-History

# Voir les 10 dernières
Get-History -Count 10

# Chercher une commande
Get-History | Where-Object CommandLine -like "*Process*"
```

## Réexécuter une commande

```powershell
# Afficher l'historique
Get-History

# Réexécuter la commande #5
Invoke-History -Id 5

# Raccourci
r 5  # Même chose
```

## Effacer l'historique

```powershell
# Effacer tout
Clear-History

# Effacer une commande spécifique
Clear-History -Id 5
```

## Recherche intelligente (Ctrl+R)

1. Appuyez sur **Ctrl+R**
2. Tapez quelques lettres (ex: "get")
3. PowerShell trouve la dernière commande correspondante
4. Appuyez sur **Entrée** pour l'exécuter

## À retenir

✅ **↑** et **↓** pour naviguer dans l'historique
✅ **Ctrl+R** pour rechercher rapidement
✅ `Get-History` pour voir toutes les commandes
✅ `Invoke-History` pour réexécuter

> **Lien**
>
> - [À propos de l'historique](https://learn.microsoft.com/fr-fr/powershell/module/microsoft.powershell.core/about/about_history)

---

## Fiche récapitulative

![06_Historique](https://kayasam.github.io/powershell/ressources/images/06_Historique.png)
