---
title: "Cours"
---

# 04. Complétion

> [!TIP] Ressources du chapitre
>
> - [[04-completion/tp/index|Exercices pratiques]]
> - [[Memo-Commandes|Mémo des commandes]]

## Complétion automatique (Tab)

La touche **Tab** complète automatiquement vos commandes.

```powershell
Get-Pro<Tab>     # Devient : Get-Process
Get-S<Tab>       # Parcourt : Get-Service, Get-Something...
cd C:\Win<Tab>   # Complète : C:\Windows\
```

**Astuce** : Appuyez plusieurs fois sur Tab pour voir toutes les options.

## Comment ça marche ?

PowerShell devine ce que vous voulez taper :

- **Cmdlets** : Tape `Get-Ch<Tab>` → complète en `Get-ChildItem`
- **Chemins** : Tape `cd C:\Pro<Tab>` → complète en `C:\Program Files\`
- **Paramètres** : Tape `Get-Process -N<Tab>` → complète en `-Name`

## Complétion intelligente

```powershell
# Compléter les noms de processus
Get-Process note<Tab>  # Trouve notepad si actif

# Compléter les noms de services
Get-Service spool<Tab>  # Trouve Spooler

# Compléter les propriétés
$fichier.N<Tab>  # Complète Name, etc.
```

## Navigation avec Tab

- **Tab** : Passer à l'option suivante
- **Shift+Tab** : Revenir à l'option précédente
- **Ctrl+Espace** : Afficher toutes les suggestions (VSCode/ISE)

## À retenir

✅ **Tab** est votre meilleur ami
✅ Fonctionne pour les cmdlets, chemins et paramètres
✅ Appuyez plusieurs fois pour parcourir les options
✅ Utilisez **Shift+Tab** pour reculer

> **Lien**
>
> - [À propos de la complétion Tab](https://learn.microsoft.com/fr-fr/powershell/module/microsoft.powershell.core/about/about_tab_expansion)
