---
title: "TP débutant : rapports Active Directory"
publier: true
parcours-tssr: true
parcours-pro: false
---

# La Carte des Agents — mode débutant

**Données :** utilisez `$agentsAD` fourni dans l'exercice guidé. Aucun domaine AD n'est nécessaire.

## Énoncé

1. Trouvez les agents bloqués (`LockedOut`) et ceux dont le mot de passe n'expire jamais (`PasswordNeverExpires`).
2. Calculez un seuil de 60 jours et trouvez les agents actifs dont `LastLogonDate` est antérieure à ce seuil.
3. Créez un rapport `Nom`, `Login`, `Département`, `Actif` trié par département puis nom.
4. Exportez les comptes à risque et le rapport général en deux CSV, puis réimportez les CSV pour vérifier le nombre de lignes.

## Indices progressifs

- `Where-Object LockedOut -eq $true` donne les comptes bloqués ; `Where-Object { $_.Enabled -and $_.LastLogonDate -lt $seuil }` cherche les inactifs.
- `$seuil = (Get-Date).AddDays(-60)` ; les résultats dépendent donc de la date d'exécution.
- `Select-Object` choisit les colonnes **avant** `Export-Csv -NoTypeInformation`.
- `Import-Csv` reconstruit des objets dont les valeurs sont des chaînes.

**Livrable :** trois listes, deux CSV et comptage après import.
