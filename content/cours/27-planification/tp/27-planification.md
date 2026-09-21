---
title: "Exercice 27 - L'Horloge de Zoro"
parcours-tssr: false
parcours-pro: true
---

# Exercice 27 - L'Horloge de Zoro ⚔️

**Durée : 35 min**

## Contexte

**Zoro** s'entraîne exactement 8 heures par jour, sans faute.
Peu importe où il est, peu importe ce qui se passe — l'entraînement est planifié et il a lieu.

Vos scripts de surveillance méritent le même traitement.
Aujourd'hui vous allez les automatiser pour qu'ils tournent sans intervention humaine.

> _"Rien n'arrive par hasard. Tout arrive parce que c'est prévu."_ — Zoro (probablement)

## Prérequis

Les tâches planifiées nécessitent les droits administrateur sur Windows.

```powershell
# Vérifier si vous êtes admin
$estAdmin = ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
Write-Host "Administrateur : $estAdmin"
```

Si `$false`, relancez PowerShell en tant qu'administrateur.

## Partie 1 : Créer une tâche simple (10 min)

Planifiez l'exécution du script du TP3 tous les jours à 7h.

```powershell
# 1. L'action : lancer VOTRE script du TP3
#    Adaptez le chemin à l'endroit où vous l'avez enregistré.
$monScript = "C:\Scripts\Invoke-ArchivesCipherPol.ps1"

$action = New-ScheduledTaskAction `
    -Execute "C:\Program Files\PowerShell\7\pwsh.exe" `
    -Argument "-NoProfile -NonInteractive -ExecutionPolicy Bypass -File $monScript"

# 2. Le déclencheur : tous les jours à 7h
$trigger = New-ScheduledTaskTrigger -Daily -At "07:00"

# 3. Enregistrer
Register-ScheduledTask `
    -TaskName "Archivage-Cipher-Pol-Quotidien" `
    -Action $action `
    -Trigger $trigger `
    -Description "Rapport d'archivage quotidien de la Cipher Pol"

Write-Host "Tâche créée !" -ForegroundColor Green
```

**Vérifiez** :

```powershell
Get-ScheduledTask -TaskName "Archivage-Cipher-Pol-Quotidien"
```

## Partie 2 : Tester manuellement (5 min)

```powershell
# Lancer la tâche immédiatement pour tester
Start-ScheduledTask -TaskName "Archivage-Cipher-Pol-Quotidien"

# Attendre quelques secondes puis vérifier
Start-Sleep -Seconds 5

$info = Get-ScheduledTask "Archivage-Cipher-Pol-Quotidien" | Get-ScheduledTaskInfo
Write-Host "Dernière exécution : $($info.LastRunTime)"
Write-Host "Résultat (0=OK)   : $($info.LastTaskResult)"
```

**Question** : Le résultat est-il 0 ? Qu'indique un résultat différent ?

## Partie 3 : Modifier le déclencheur (10 min)

Créez une deuxième tâche — une surveillance toutes les heures :

```powershell
$action2 = New-ScheduledTaskAction `
    -Execute "pwsh.exe" `
    -Argument "-NonInteractive -File C:\Temp\CipherPol\surveillance.ps1"

# Déclencheur : toutes les heures (répétition)
$trigger2 = New-ScheduledTaskTrigger `
    -Once `
    -At (Get-Date) `
    -RepetitionInterval (New-TimeSpan -Hours 1)

Register-ScheduledTask `
    -TaskName "Surveillance-Cipher-Pol-Horaire" `
    -Action $action2 `
    -Trigger $trigger2 `
    -Description "Surveillance horaire"
```

## Partie 4 : Gérer les tâches (10 min)

```powershell
# Lister toutes les tâches Cipher Pol
Get-ScheduledTask | Where-Object TaskName -like "*Cipher-Pol*"

# Désactiver la surveillance horaire (trop fréquent)
Disable-ScheduledTask -TaskName "Surveillance-Cipher-Pol-Horaire"

# Vérifier l'état
Get-ScheduledTask -TaskName "Surveillance-Cipher-Pol-Horaire" |
    Select-Object TaskName, State

# Supprimer la tâche de test
Unregister-ScheduledTask -TaskName "Surveillance-Cipher-Pol-Horaire" -Confirm:$false
Write-Host "Tâche supprimée" -ForegroundColor Yellow
```

## Mission Finale : Le Planning Complet 🌟

Créez un script `Set-PlanningCipherPol.ps1` qui configure automatiquement toutes les tâches planifiées :

| Tâche               | Fréquence           | Script              |
| ------------------- | ------------------- | ------------------- |
| Archivage quotidien | Tous les jours à 6h | votre script du TP3 |
| Nettoyage hebdo     | Lundi à 23h         | (à créer)           |

Le script doit :

1. Supprimer les anciennes versions des tâches si elles existent
2. Recréer toutes les tâches proprement
3. Afficher un résumé de ce qui a été planifié

> Solution complète : voir la correction de ce TP.

## Nettoyage final

```powershell
# Supprimer la tâche créée dans cet exercice
Unregister-ScheduledTask -TaskName "Archivage-Cipher-Pol-Quotidien" -Confirm:$false
```

## Validation

- ✅ Vous savez créer une tâche planifiée avec `Register-ScheduledTask`
- ✅ Vous savez configurer différents types de déclencheurs
- ✅ Vous savez lancer, désactiver et supprimer des tâches
- ✅ Vous savez vérifier le résultat d'une exécution
- ✅ Vous savez tester un script en mode non-interactif
