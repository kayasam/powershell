---
title: "TP avancé : isoler les erreurs d'un traitement"
publier: true
parcours-tssr: false
parcours-pro: true
---

# Le Rapport d'Incident de Chopper — mode avancé

## Énoncé

Écrivez `Invoke-Infirmerie.ps1` avec `-Dossier` obligatoire. Un dossier absent produit `exit 2`. Pour un dossier valide, traitez tous les fichiers : un échec individuel doit être capturé, compté et signalé par `Write-Warning`, sans empêcher les autres traitements. Ajoutez `Write-Verbose` et renvoyez `exit 1` si au moins un fichier échoue, `exit 0` sinon.

1. Créez trois tests : dossier absent, dossier dont tous les fichiers sont lisibles, dossier contenant un fichier problématique ou un échec simulé.
2. Justifiez pourquoi `-ErrorAction Stop` est requis sur les cmdlets susceptibles de produire une erreur non terminante.
3. Redirigez séparément les flux avertissement et erreur et expliquez pourquoi un code de sortie reste nécessaire pour une tâche planifiée.

**Livrable :** script, trois codes de sortie prouvés et journal de traitement.
