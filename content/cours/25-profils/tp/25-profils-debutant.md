---
title: "TP débutant : profils PowerShell"
publier: true
parcours-tssr: true
parcours-pro: false
---

# Le Poste de Pilotage de Nami — mode débutant

**Mission :** tester un profil sans écraser votre profil personnel. Utilisez une console et un dossier de laboratoire ; faites une copie de sauvegarde avant toute modification.

## Énoncé

1. Affichez les quatre chemins de `$PROFILE` et notez lesquels existent.
2. Créez un **profil d'essai** seulement si le chemin choisi n'existe pas ; ajoutez une fonction `Get-SalutNami` et un message de chargement.
3. Rechargez ce profil dans la session courante et testez la fonction.
4. Lancez `pwsh -NoProfile` dans une autre console : la fonction y existe-t-elle ? Pourquoi ?
5. Comparez `. <profil>` et `& <profil>` : lequel rend la fonction disponible dans la session courante ?

## Indices progressifs

- `$PROFILE | Format-List *` affiche les quatre chemins.
- `Test-Path -LiteralPath $PROFILE` vérifie avant d'écrire ; utilisez `New-Item -ItemType File` seulement sur un chemin absent.
- Pour recharger dans la même portée : `. $PROFILE` (point suivi d'un espace).
- Préférez un nom unique comme `Get-SalutNami` ; vérifiez-le avec `Get-Command Get-SalutNami -ErrorAction SilentlyContinue`.

**Livrable :** relevé des profils, fonction et comparaison des deux consoles. Restaurer votre profil sauvegardé après l'essai.
