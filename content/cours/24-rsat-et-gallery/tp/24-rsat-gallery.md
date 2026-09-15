---
title: "Exercice 24 - L'Armurerie de la Marine"
parcours-tssr: false
parcours-pro: true
---

# Exercice 24 - L'Armurerie de la Marine ⚓

## Contexte

Un bon soldat ne forge pas chaque arme lui-même : il sait ce que contient
l'armurerie, et il vérifie l'état d'une lame avant de s'en servir au combat.

La PowerShell Gallery est votre armurerie. RSAT, votre équipement réglementaire.

> _"L'outil ne fait pas le marine. Mais le mauvais outil le fait tomber."_ — Sengoku

**Durée : 30 min**

## Partie 1 : L'inventaire réglementaire (5 min)

> ⚠️ Cette partie nécessite une console **administrateur**.

```powershell
Get-WindowsCapability -Online -Name "Rsat*" | Select-Object Name, State
```

**Questions** :

- Combien d'outils RSAT sont disponibles ? Combien sont installés (`Installed`) ?
- Que se passe-t-il si vous lancez la commande **sans** être administrateur ?
- Quel est le nom complet de la capacité pour les outils Active Directory ?

## Partie 2 : Le piège du Gestionnaire de serveur (5 min)

```powershell
Get-Command Get-WindowsFeature
Get-WindowsFeature
```

**Questions** :

- La première commande trouve-t-elle quelque chose ? De quel module ?
- La seconde s'exécute-t-elle ? Quel message obtenez-vous ?
- Comment expliquez-vous qu'une commande **existe** mais refuse de fonctionner ?
- Quelle commande utiliser à la place sur un poste client ?

## Partie 3 : Explorer l'armurerie (10 min)

```powershell
Find-Module -Name ImportExcel | Format-List Name, Version, Author, PublishedDate, ProjectUri
```

**Exercices** :

1. Cherchez tous les modules ayant le tag `Excel`
2. Pour chacun des modules suivants, relevez **version** et **date de publication** :
   `PSWindowsUpdate`, `Carbon`, `NTFSSecurity`, `PSExcel`, `ImportExcel`
3. Classez-les du plus récemment maintenu au plus ancien

**Question de fond** : deux de ces modules n'ont pas été mis à jour depuis
plus de cinq ans. Lesquels ? Les utiliseriez-vous en production ? Par quoi
les remplaceriez-vous ?

## Partie 4 : Le dépôt (5 min)

```powershell
Get-PSRepository
```

**Questions** :

- Quelle est la `InstallationPolicy` de `PSGallery` ?
- Quelle conséquence concrète lors du premier `Install-Module` ?
- Pourquoi une entreprise préfère-t-elle héberger son **propre** dépôt ?

## Partie 5 : Installer proprement (5 min)

```powershell
Install-Module -Name ImportExcel -Scope CurrentUser
```

**Questions** :

- Quelle différence entre `-Scope CurrentUser` et `-Scope AllUsers` ?
- Lequel des deux exige des droits administrateur ?
- Où le module est-il déposé ? (indice : `Get-Module -ListAvailable ImportExcel`)

**Exercice** : testez le module.

```powershell
Get-Process | Select-Object Name, Id, WorkingSet |
    Export-Excel "$env:TEMP\processus.xlsx" -AutoSize -TableName "Processus"

Import-Excel "$env:TEMP\processus.xlsx" | Select-Object -First 5
```

## Mission finale : la fiche d'armement 🏴‍☠️

Écrivez un script qui produit un tableau d'évaluation des modules d'un parc.

Pour chaque module d'une liste (`PSWindowsUpdate`, `Carbon`, `NTFSSecurity`,
`PSExcel`, `ImportExcel`), le script doit indiquer :

- le **nom** et la **version** disponible sur la Gallery ;
- la **date de publication** ;
- l'**ancienneté en années** ;
- un **verdict** : `À jour` (< 2 ans), `Vieillissant` (2 à 5 ans), `Abandonné` (> 5 ans) ;
- s'il est **déjà installé** localement.

Triez du plus récent au plus ancien et exportez en CSV.

> Indices : `Find-Module`, `Get-Module -ListAvailable`, `switch` (chapitre 10),
> `try/catch` pour les modules introuvables (chapitre 21).

## Validation

✅ Vous installez RSAT avec `Add-WindowsCapability`, en **administrateur**
✅ Vous savez que `Get-WindowsFeature` est réservé à **Windows Server**
✅ Vous connaissez l'équivalent client `Get-WindowsOptionalFeature -Online`
✅ Vous vérifiez `PublishedDate` **avant** d'installer un module
✅ Vous utilisez `-Scope CurrentUser` quand vous n'êtes pas administrateur
✅ Vous savez pourquoi PSGallery demande une confirmation
✅ Vous savez que `PSExcel` et `NTFSSecurity` ne sont plus maintenus
