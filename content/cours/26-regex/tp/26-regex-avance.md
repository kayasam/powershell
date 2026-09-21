---
title: "TP avancé : rapport d'alerte avec regex"
publier: true
parcours-tssr: false
parcours-pro: true
---

# Les Poneglyphes de Robin — mode avancé

## Énoncé

À partir des transmissions fournies, produisez un rapport d'alerte contenant pour chaque ligne actionable (`WARN`, `ERREUR`, `CRITIQUE`) : niveau, message, adresse e-mail et IPv4 éventuelles, avec les IP **masquées** dans une version partageable.

1. Utilisez des groupes nommés pour extraire le niveau entre crochets ; ne confondez pas `-match` (test/extraction) et `-replace` (nouveau texte).
2. Comparez votre motif IPv4 de forme avec un contrôle réel des octets 0–255 ; prouvez qu'il refuse `999.1.1.1`.
3. Écrivez le rapport dans un fichier temporaire et retrouvez les `ERREUR` avec `Select-String`, numéro de ligne compris.
4. Expliquez pourquoi une regex d'e-mail simplifiée n'est pas une validation universelle.

**Livrable :** script, rapport anonymisé et trois cas de test d'IP.
