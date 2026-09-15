---
title: "01. Installation et environnement"
parcours-tssr: true
parcours-pro: false
---

# 01. Installation et environnement

> [!TIP] Ressources du chapitre
>
> - [[01-installation-et-environnement/tp/index|Exercices pratiques]]
> - [[Memo-Commandes|Mémo des commandes]]

## Les deux versions de PowerShell

**Windows PowerShell 5.1** : Préinstallé sur Windows (ancien)
**PowerShell 7** : Version moderne, multiplateforme (recommandé)

## Vérifier votre version

```powershell
$PSVersionTable
```

## Installer PowerShell 7

**Via winget** (le plus simple) :

```powershell
winget install Microsoft.PowerShell
```

**Via Microsoft Store** :
Cherchez "PowerShell" et installez.

## Première commande

Testez que ça fonctionne :

```powershell
Get-Date
```

## Politique d'exécution des scripts

Par défaut, Windows **bloque l'exécution des scripts** `.ps1`. C'est une mesure de sécurité.
Avant de pouvoir lancer vos propres scripts, vous devez l'autoriser.

```powershell
# Voir la politique actuelle
Get-ExecutionPolicy

# Autoriser les scripts locaux (recommandé en formation)
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Explication des niveaux :
# Restricted    → aucun script autorisé (défaut Windows)
# RemoteSigned  → scripts locaux OK, scripts téléchargés doivent être signés
# Unrestricted  → tout est autorisé (déconseillé en production)
```

> **En formation** : Exécutez `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`
> **une seule fois** au début — vous n'aurez plus à y toucher.

## Les environnements

- **Console PowerShell** : L'interface de base
- **VS Code** : Éditeur recommandé pour les scripts
- **Windows Terminal** : Console moderne (optionnel)

## À retenir

- ✅ PowerShell 7 est la version moderne
- ✅ Vérifiez votre version avec `$PSVersionTable`
- ✅ Utilisez VS Code pour écrire vos scripts
- ✅ `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser` pour autoriser vos scripts (à faire une fois)

> **Lien**
>
> - [Télécharger PowerShell](https://learn.microsoft.com/fr-fr/powershell/scripting/install/installing-powershell-on-windows)
