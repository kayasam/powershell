---
title: "Cours"
parcours-tssr: true
parcours-pro: false
---

<nav class="ps-chapter-path" aria-label="Parcours du chapitre">
  <a href="https://kayasam.github.io/powershell/cours/01-installation-et-environnement/cours"><b>01 · Cours</b><small>Comprendre les notions</small></a>
  <a href="https://kayasam.github.io/powershell/cours/01-installation-et-environnement/cours-interactif"><b>02 · Cours interactif</b><small>Schéma et défi rapide</small></a>
  <a href="https://kayasam.github.io/powershell/cours/01-installation-et-environnement/quiz"><b>03 · Quiz</b><small>Vérifier ses acquis</small></a>
  <a href="https://kayasam.github.io/powershell/cours/01-installation-et-environnement/tp/"><b>04 · Travaux pratiques</b><small>Appliquer en autonomie</small></a>
</nav>

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

> [!success] À retenir
>
> - PowerShell 7 est la version moderne
> - Vérifiez votre version avec `$PSVersionTable`
> - Utilisez VS Code pour écrire vos scripts
> - `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser` pour autoriser vos scripts (à faire une fois)

> **Lien**
>
> - [Télécharger PowerShell](https://learn.microsoft.com/fr-fr/powershell/scripting/install/installing-powershell-on-windows)

---

## Fiche récapitulative

![01_Installation_et_environnement](https://kayasam.github.io/powershell/ressources/images/01_Installation_et_environnement.png)
