---
title: "TP avancé : architecture d'un module"
publier: true
parcours-tssr: false
parcours-pro: true
---

# La Bibliothèque de Brook — mode avancé

## Énoncé

Créez `OutilsSunny.psm1` avec au moins trois fonctions publiques et une fonction privée réutilisée par deux d'entre elles. Documentez chaque fonction publique avec aide commentée ; exportez-les explicitement.

1. Prouvez avec `Get-Command -Module` qu'une fonction privée ne fuit pas ; montrez qu'une publique peut l'appeler.
2. Rechargez une version modifiée avec `Import-Module -Force` ; expliquez l'effet d'un module déjà chargé.
3. Créez un manifeste avec `New-ModuleManifest` dans un dossier de laboratoire et vérifiez les exports déclarés.
4. Donnez deux raisons d'éviter `Export-ModuleMember -Function *` dans un module distribué.

**Livrable :** module, manifeste, tests et aide intégrée.
