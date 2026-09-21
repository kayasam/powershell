---
title: "TP débutant : expressions régulières"
publier: true
parcours-tssr: true
parcours-pro: false
---

# Les Poneglyphes de Robin — mode débutant

**Données :** utilisez le tableau `$transmissions` de l'exercice guidé ; ne cherchez pas dans de vrais journaux pour cette première mission.

## Énoncé

1. Trouvez les lignes `ERREUR`, puis les lignes `WARN` ou `CRITIQUE`. Comptez chaque résultat.
2. Trouvez les lignes qui contiennent une adresse e-mail ; expliquez pourquoi chercher seulement `@` est une approximation.
3. Trouvez les lignes contenant une adresse IPv4, puis remplacez l'adresse par `[IP masquée]` sans modifier le tableau original.
4. Enregistrez les transmissions dans un fichier temporaire et trouvez les lignes `ERREUR` avec `Select-String` ; affichez numéro et contenu.

## Indices progressifs

- Commencez par `Where-Object { $_ -match 'WARN|CRITIQUE' }`.
- Un premier motif d'e-mail simple est `\S+@\S+\.\S+` ; il n'est pas un validateur complet.
- Une IPv4 de forme apparente se cherche avec `\b\d{1,3}(?:\.\d{1,3}){3}\b` ; cela ne vérifie pas encore 0–255.
- `-replace` renvoie une **nouvelle chaîne** ; `Select-String -Path $fichier -Pattern 'ERREUR'` lit le fichier.

**Livrable :** quatre commandes, nombres obtenus et explication des limites des motifs.
