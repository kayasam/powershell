---
title: "TP débutant : les classes .NET"
publier: true
parcours-tssr: true
parcours-pro: false
---

# L'Atelier de Vegapunk — mode débutant

**Mission :** fabriquer une fiche de fichier sans confondre une classe et un objet. Travaillez sur un fichier d'essai dans `$env:TEMP`, jamais sur un fichier important.

## Énoncé

1. Calculez la racine de 64 avec `[math]::Sqrt(64)` ; créez ensuite une date avec `Get-Date` et ajoutez sept jours avec `.AddDays(7)`. Expliquez `::` et `.`.
2. Calculez l'aire d'un disque de rayon 5 avec `[math]::PI` et `[math]::Pow`, arrondie à deux décimales.
3. À partir de `D:\Data\2026\export-final.xlsx`, extrayez le nom sans extension et l'extension, sans accéder au disque.
4. Créez `vegapunk.txt` dans `$env:TEMP`, écrivez trois lignes, puis comptez-les.
5. Écrivez `Get-InfoFichier -Chemin <fichier>` : refusez un chemin vide ou absent et renvoyez `Nom`, `Extension`, `Lignes` dans un `[PSCustomObject]`.

## Indices progressifs

1. `[System.IO.Path]` analyse une chaîne ; `[System.IO.File]` lit ou écrit un vrai fichier.
2. Commandes utiles : `[System.IO.Path]::GetFileNameWithoutExtension($chemin)`, `[System.IO.Path]::GetExtension($chemin)`, `[System.IO.File]::ReadAllLines($chemin)`.
3. Pour vérifier l'entrée : `[string]::IsNullOrWhiteSpace($Chemin)` puis `[System.IO.File]::Exists($Chemin)`.
4. Pour créer un objet : `[PSCustomObject]@{ Nom = ...; Extension = ...; Lignes = ... }`.
   Cette écriture est **fournie** : elle sera détaillée au chapitre 17, recopiez-la telle quelle.

**Livrable :** vos réponses 1 à 3, le fichier d'essai et la fonction testée sur un chemin valide et un chemin absent.
