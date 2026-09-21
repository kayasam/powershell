---
title: "TP avancé : évaluer des modules avant installation"
publier: true
parcours-tssr: false
parcours-pro: true
---

# L'Armurerie de la Marine — mode avancé

## Énoncé

Écrivez un script **en lecture seule** qui évalue `PSWindowsUpdate`, `Carbon`, `NTFSSecurity`, `PSExcel` et `ImportExcel`. Pour chaque nom : version et date publiée disponibles, ancienneté calculée **au jour de l'exécution**, verdict (`À jour` sous 2 ans, `Vieillissant` de 2 à 5, `Abandonné` au-delà), état installé localement ou message « introuvable ».

1. Gérez les échecs réseau et les noms absents sans abandonner les autres lignes.
2. Triez du plus récent au plus ancien et exportez un CSV.
3. Expliquez pourquoi le verdict ne prouve ni sécurité ni compatibilité.
4. Justifiez séparément la provenance et la confiance du dépôt avant toute installation réelle.

**Livrable :** script, CSV, cas absent et note de prudence.
