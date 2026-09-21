---
title: "TP avancé : signer un script distribué"
publier: true
parcours-tssr: false
parcours-pro: true
---

# Le Sceau du Gouvernement Mondial — mode avancé

**Environnement :** compte de laboratoire Windows. Ne déployez pas de certificat de test sur un poste de production.

## Énoncé

Préparez `Invoke-OrdreMarijoa.ps1` avec aide intégrée, paramètre obligatoire validé, `SupportsShouldProcess`, mode strict et `try/catch` avec codes de sortie distincts. Signez le script **après** la dernière édition.

1. Relevez le certificat utilisé, son empreinte, les magasins où il doit être approuvé et le statut `Get-AuthenticodeSignature`.
2. Testez `Get-Help`, `-WhatIf`, une entrée valide et une entrée invalide.
3. Modifiez une ligne, vérifiez que la signature n'est plus valide, puis resignez.
4. Retirez uniquement le certificat de test que vous avez créé dans les magasins `CurrentUser` concernés ; prouvez qu'il n'y reste plus.

**Livrable :** script, protocole de vérification et journal du nettoyage.
