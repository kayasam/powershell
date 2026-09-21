---
title: "TP débutant : créer et utiliser un module"
publier: true
parcours-tssr: true
parcours-pro: false
---

# La Bibliothèque de Brook — mode débutant

**Mission :** un petit module local, dans un dossier de travail isolé.

## Énoncé

1. Créez `OutilsSunny.psm1` et mettez-y `Get-Salutation -Nom <nom>` qui renvoie un message, puis `Get-PrimeTotale -Primes <nombres>` qui renvoie la somme.
2. Ajoutez une fonction privée `Format-Ligne -Texte <texte>`.
3. Exportez uniquement les deux fonctions publiques.
4. Importez le module depuis son chemin, vérifiez les fonctions disponibles et testez-les.
5. Modifiez une fonction, rechargez le module et vérifiez le nouveau résultat. Expliquez pourquoi `Format-Ligne` n'est pas appelable directement après import.

## Indices progressifs

- Un module script est un fichier `.psm1` ; une fonction y est écrite comme dans un `.ps1`.
- À la fin : `Export-ModuleMember -Function Get-Salutation,Get-PrimeTotale`.
- Commandes utiles : `Import-Module <chemin> -Force`, `Get-Module OutilsSunny`, `Get-Command -Module OutilsSunny`.
- La fonction privée peut être appelée **depuis** une fonction publique du module.

**Livrable :** module, résultat des deux appels et liste des exports.
