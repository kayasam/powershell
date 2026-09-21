---
title: "TP avancé : déployer un planning idempotent"
publier: true
parcours-tssr: false
parcours-pro: true
---

# L'Horloge de Zoro — mode avancé

**Environnement :** Windows de laboratoire, avec scripts et compte d'exécution autorisés.

## Énoncé

Écrivez `Set-PlanningCipherPol.ps1` qui configure une tâche d'archivage quotidien à 06:00 et une tâche de nettoyage le lundi à 23:00. Le script doit pouvoir être relancé sans créer de doublons ni remplacer des tâches étrangères.

1. Séparez action, déclencheur et identité d'exécution ; vérifiez chemins, droits du compte et emplacement du journal.
2. Décrivez ou implémentez `-WhatIf` pour toute création, mise à jour ou suppression.
3. Testez un déclenchement manuel et interprétez `LastTaskResult` avec le journal du script, sans supposer qu'un code non nul a une seule cause.
4. Nettoyez seulement les tâches de laboratoire créées par votre script.

**Livrable :** script idempotent, deux vérifications, preuve d'un second passage sans doublon et protocole de nettoyage.
