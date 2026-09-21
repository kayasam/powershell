---
title: "TP avancé : audit Windows multisource"
publier: true
parcours-tssr: false
parcours-pro: true
---

# Les Archives Secrètes d'Ohara — mode avancé

## Énoncé

Écrivez un script d'audit qui croise registre (`ProductName`, `CurrentBuild`, `RegisteredOwner`), CIM (`Win32_OperatingSystem.Caption`), journal `System` (erreurs des sept derniers jours) et certificats racines (expiration sous 90 jours). Sortez un seul `[PSCustomObject]` et exportez un CSV.

1. Pour chaque source indisponible, conservez un champ `$null` et un avertissement plutôt que d'arrêter tout l'audit.
2. Utilisez le filtrage des journaux **à la source** ; expliquez le gain par rapport à un `Where-Object` après lecture complète.
3. Ajoutez un horodatage et un champ `SourcesManquantes` au rapport.
4. Vérifiez l'absence de modification dans `HKLM:` et `Cert:` ; votre script est strictement en lecture.

**Livrable :** script, exemple de rapport, test d'une source absente et justification du filtrage.
