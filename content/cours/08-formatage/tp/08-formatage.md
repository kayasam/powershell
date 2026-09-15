---
title: "Exercice 08 - Le Rapport pour l'Amiral"
parcours-tssr: true
parcours-pro: true
---

# Exercice 08 - Le Rapport pour l'Amiral 📊

## Contexte

Vous avez toutes les données. Mais l'Amiral ne lit pas les écrans de 200 lignes.
Un bon rapport montre **peu de colonnes, bien choisies**.

Objectif : passer d'un déluge de données à un tableau lisible.

> _"Un rapport qu'on ne lit pas est un rapport qui n'existe pas."_ — Sengoku

**Durée : 20 min**

## Partie 1 : Format-Table (5 min)

```powershell
# Tableau brut
Get-Process | Format-Table

# Choisir les colonnes
Get-Process | Format-Table Name, Id, CPU

# Ajuster la largeur
Get-Process | Format-Table Name, Id, CPU -AutoSize
```

**Questions** :

- Que change `-AutoSize` sur l'affichage ?
- Quel est le raccourci de `Format-Table` ?

## Partie 2 : Format-List (5 min)

```powershell
Get-Service -Name Spooler | Format-List

# Toutes les propriétés, même celles cachées dans le tableau
Get-Service -Name Spooler | Format-List *
```

**Exercice** : comparez la sortie de `Format-Table` et `Format-List` sur
`Get-Service -Name Spooler`. Laquelle utiliseriez-vous pour **un seul** service ?
Et pour **cinquante** services ?

## Partie 3 : Select-Object (5 min)

⚠️ `Select-Object` **choisit les données**, `Format-*` **choisit l'affichage**. Ce n'est pas pareil.

```powershell
Get-Process | Select-Object Name, Id, CPU
Get-Process | Select-Object -First 5
Get-Process | Select-Object -Last 3
```

**Exercice** : affichez les **10 premiers** processus avec uniquement
les colonnes `Name` et `Id`.

## Partie 4 : Le piège de l'ordre (5 min)

Testez les deux commandes suivantes :

```powershell
# A
Get-Process | Select-Object -First 5 | Format-Table

# B
Get-Process | Format-Table | Select-Object -First 5
```

**Questions** :

- Laquelle donne le résultat attendu ?
- Pourquoi l'autre échoue-t-elle ? (indice : que renvoie `Format-Table` ?)

Vérifiez votre intuition :

```powershell
Get-Process | Format-Table | Get-Member
```

## Mission finale : le tableau de bord de l'Amiral 🏆

Produisez **un seul tableau**, lisible à l'écran, affichant :

- les **5 processus** consommant le plus de mémoire
- trois colonnes seulement : le **nom**, le **PID**, la **mémoire en Mo**

Indices :

- `Sort-Object WorkingSet64 -Descending` pour trier
- `WorkingSet64` est en octets, et `1MB` est un raccourci valide
- `Format-Table` en **dernier**

Bonus : affichez le même résultat dans une fenêtre interactive avec `Out-GridView`.

## Validation

✅ Vous utilisez `Format-Table` pour beaucoup d'objets, `Format-List` pour un seul
✅ Vous savez que `Select-Object` filtre la **donnée** et `Format-*` l'**affichage**
✅ Vous placez toujours les `Format-*` **en fin de pipeline**
✅ Vous savez expliquer pourquoi on ne peut rien faire après un `Format-Table`
✅ Vous connaissez `Out-GridView` pour explorer des données
