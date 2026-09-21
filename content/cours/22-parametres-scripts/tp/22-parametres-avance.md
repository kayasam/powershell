---
title: "TP avancé : fonctions paramétrées et validation"
publier: true
parcours-tssr: false
parcours-pro: true
---

# Les Recettes de Sanji — mode avancé

## Énoncé

Écrivez `Get-MenuDuJour -Budget <100..10000> [-VegetarienSeulement]`. Le menu comprend au moins quatre objets plats (`Nom`, `Prix`, `Vegetarien`). Retournez les plats admissibles comme **objets**, sans `Write-Host` dans la fonction.

1. Vérifiez les limites 99, 100, 10000 et 10001 ; expliquez à quel moment la validation intervient.
2. Écrivez une aide commentée avec deux exemples ; prouvez qu'elle est consultable.
3. Ajoutez `CmdletBinding` et montrez que `-Verbose` fonctionne.
4. Comparez `[switch]` et `[bool]` du point de vue de l'appelant.

**Livrable :** fonction, tests des limites et aide intégrée.
