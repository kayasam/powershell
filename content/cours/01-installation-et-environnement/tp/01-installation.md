---
title: "Exercice 01 - L'Équipement de la Recrue"
parcours-tssr: true
parcours-pro: false
---

# Exercice 01 - L'Équipement de la Recrue 🎖️

## Contexte

Avant d'embarquer, toute recrue passe à l'armurerie : on vérifie son équipement,
on s'assure qu'il est de la bonne génération, et qu'il est autorisé à servir.

Votre équipement, c'est PowerShell. Vérifions qu'il est opérationnel.

> _"Une arme qu'on n'a pas vérifiée est une arme qui trahit."_ — Vice-Amiral Garp

**Durée : 15 min**

## Objectif

Vérifier que PowerShell est correctement installé et fonctionnel sur votre machine.

## Prérequis

- Accès administrateur sur la machine
- Connexion Internet

## Étapes

### 1. Vérifier la version de PowerShell (5 min)

Ouvrez PowerShell et exécutez:

```powershell
$PSVersionTable
```

**Questions**:

- Quelle version de PowerShell utilisez-vous ?
- Quelle est votre édition (Core ou Desktop) ?
- Sur quel système d'exploitation êtes-vous ?

### 2. Installer PowerShell 7 si nécessaire (5 min)

Si vous n'avez pas PowerShell 7, installez-le:

```powershell
winget install --id Microsoft.PowerShell --source winget
```

Vérifiez l'installation en ouvrant "PowerShell 7" depuis le menu Démarrer.

### 3. Exécuter vos premières commandes (5 min)

Exécutez ces 3 commandes et observez le résultat:

```powershell
# 1. Obtenir la date et l'heure
Get-Date

# 2. Lister les processus en cours
Get-Process

# 3. Obtenir votre emplacement actuel
Get-Location
```

## Validation

✅ Vous avez vérifié votre version de PowerShell
✅ Vous avez installé PowerShell 7 (si nécessaire)
✅ Vous avez exécuté 3 commandes avec succès
✅ Vous comprenez la différence entre Windows PowerShell 5.1 et PowerShell 7

## Pour aller plus loin

Essayez ces commandes bonus:

```powershell
# Obtenir les 5 premiers processus
Get-Process | Select-Object -First 5

# Obtenir le nom de votre ordinateur
$env:COMPUTERNAME
```

## Notes

Notez ici vos observations ou questions:
-

-
-
