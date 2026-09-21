---
title: "TP débutant : paramètres de scripts"
publier: true
parcours-tssr: true
parcours-pro: false
---

# Les Recettes de Sanji — mode débutant

## Énoncé

1. Créez `Get-Recette -Plat <nom> -Portions <nombre>` et affichez le nom du plat et le nombre de portions.
2. Rendez `-Plat` obligatoire ; vérifiez ce qui se passe quand on l'omet.
3. Limitez `-Plat` à `Soupe`, `Tarte` et `Sashimi`, et `-Portions` à 1–10. Testez un appel valide et un invalide.
4. Ajoutez `-VegetarienSeulement` en switch ; expliquez sa valeur lorsqu'il est absent puis présent.
5. Ajoutez une aide `.SYNOPSIS`, `.PARAMETER` et `.EXAMPLE`, puis testez `Get-Help Get-Recette -Full`.

## Indices progressifs

- Débutez par `function Get-Recette { param([string]$Plat, [int]$Portions) ... }`.
- Attributs utiles : `[Parameter(Mandatory)]`, `[ValidateSet('Soupe','Tarte','Sashimi')]` et `[ValidateRange(1,10)]`.
- Un switch s'écrit `[switch]$VegetarienSeulement` ; testez avec `if ($VegetarienSeulement) { ... }`.
- Placez l'aide commentée immédiatement avant la fonction.

**Livrable :** fonction, quatre tests et résultat de `Get-Help`.
