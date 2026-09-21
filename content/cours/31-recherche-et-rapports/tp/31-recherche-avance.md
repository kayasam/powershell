---
title: "TP avancé : rapports AD ciblés"
publier: true
parcours-tssr: false
parcours-pro: true
---

# La Carte des Agents — mode avancé

## Énoncé

Concevez un script de rapports pouvant fonctionner sur les données simulées **ou**, si vous disposez d'un domaine autorisé, sur AD réel. Produisez comptes bloqués, mots de passe permanents, comptes actifs inactifs depuis 60 jours et synthèse par département.

1. Sur AD réel, limitez la recherche avec `-SearchBase`, `-Filter` et `-Properties` avant le traitement local. En simulation, expliquez que `Where-Object` filtre des objets déjà reçus.
2. Exportez les rapports dans un dossier donné, sans écraser silencieusement un rapport antérieur : utilisez un nom daté ou une confirmation.
3. Vérifiez les champs absents (`Department`, `LastLogonDate`) et indiquez comment ils affectent les statistiques.
4. Contrôlez le nombre d'objets avant et après export/import CSV ; expliquez la perte des types natifs.

**Livrable :** script, rapports et note sur la portée/qualité des données.
