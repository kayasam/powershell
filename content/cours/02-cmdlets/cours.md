---
title: "Cours"
---

# 02. Cmdlets

> [!TIP] Ressources du chapitre
>
> - [[02-cmdlets/tp/index|Exercices pratiques]]
> - [[Memo-Commandes|Mémo des commandes]]

## Qu'est-ce qu'une cmdlet ?

Une **cmdlet** (prononcé "command-let") = une commande PowerShell.

## Convention de nommage : Verbe-Nom

Toutes les cmdlets suivent ce modèle :

- `Get-Process` → **Obtenir** les processus
- `Stop-Service` → **Arrêter** un service
- `New-Item` → **Créer** un élément

## Verbes courants

| Verbe  | Action    | Exemple         |
| ------ | --------- | --------------- |
| Get    | Obtenir   | `Get-Service`   |
| Set    | Modifier  | `Set-Location`  |
| New    | Créer     | `New-Item`      |
| Remove | Supprimer | `Remove-Item`   |
| Start  | Démarrer  | `Start-Service` |
| Stop   | Arrêter   | `Stop-Process`  |

## Découvrir les cmdlets

```powershell
# Toutes les cmdlets
Get-Command

# Cmdlets pour les processus
Get-Command *Process*

# Cmdlets commençant par Get
Get-Command -Verb Get
```

## Obtenir de l'aide

```powershell
# Aide de base
Get-Help Get-Process

# Voir des exemples
Get-Help Get-Process -Examples

# Aide complète
Get-Help Get-Process -Detailed
```

## Cmdlets essentielles

```powershell
Get-Process      # Lister les processus
Get-Service      # Lister les services
Get-ChildItem    # Lister les fichiers (comme dir)
Get-Content      # Lire un fichier
Set-Location     # Changer de dossier (comme cd)
Clear-Host       # Effacer l'écran (comme cls)
```

## À retenir

✅ Format : **Verbe-Nom** (Get-Process, Stop-Service)
✅ Utilisez `Get-Command` pour trouver des cmdlets
✅ Utilisez `Get-Help` pour apprendre à les utiliser
✅ Les cmdlets retournent des objets

> **Lien**
>
> - [Liste des verbes approuvés](https://learn.microsoft.com/fr-fr/powershell/scripting/developer/cmdlet/approved-verbs-for-windows-powershell-commands)
