---
title: "TP avancé : diagnostiquer un profil PowerShell"
publier: true
parcours-tssr: false
parcours-pro: true
---

# Le Poste de Pilotage de Nami — mode avancé

## Énoncé

Diagnostiquez un profil qui définit une fonction `Get-Uptime` et masque une commande existante. Dans une console de laboratoire ou en lecture seule :

1. Identifiez la commande masquée et prouvez l'ordre de résolution avec `Get-Command -All Get-Uptime`.
2. Proposez un nom de remplacement sans collision et contrôlez-le avant de l'utiliser.
3. Comparez le comportement avec profil normal et avec `pwsh -NoProfile`.
4. Expliquez la différence de portée entre `& $PROFILE` et `. $PROFILE`, et entre les profils PowerShell 5.1 et 7.
5. Écrivez une petite procédure de restauration qui ne supprime **que** votre modification de laboratoire, pas tout le profil.

**Livrable :** diagnostic, commandes de preuve et procédure de restauration.
