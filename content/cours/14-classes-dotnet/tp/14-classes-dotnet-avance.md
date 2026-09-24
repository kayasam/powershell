---
title: "TP avancé : les classes .NET"
publier: true
parcours-tssr: false
parcours-pro: true
---

# L'Atelier de Vegapunk — mode avancé

## Énoncé

Construisez `Get-InfoFichier` sans solution fournie. La fonction accepte un chemin, refuse `$null`, la chaîne vide ou les espaces, et signale clairement un fichier absent. Elle renvoie un objet avec le nom sans extension, l'extension, le dossier parent, la taille en Ko arrondie à une décimale **AwayFromZero**, le nombre de lignes et un GUID unique.

1. Testez un fichier réel, un chemin absent et une saisie composée d'espaces.
2. Comparez sur votre poste le temps de lecture de 20 000 lignes par `Get-Content` et par `[System.IO.File]::ReadAllLines()` ; notez les deux mesures, sans imposer un résultat fixe.
   _(La mesure se fait avec `Measure-Command { ... }`.)_
3. Expliquez pourquoi `[System.IO.Path]` fonctionne sur un chemin inexistant, et pourquoi `[System.IO.File]` ne bénéficie pas de `-WhatIf`.
4. Montrez avec `2.5` et `4.5` la différence entre l'arrondi par défaut et l'arrondi demandé.

**Livrable :** fonction, trois tests, deux mesures et explication des limites .NET.
