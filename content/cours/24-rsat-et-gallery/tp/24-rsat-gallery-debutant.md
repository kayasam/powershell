---
title: "TP débutant : RSAT et PowerShell Gallery"
publier: true
parcours-tssr: true
parcours-pro: false
---

# L'Armurerie de la Marine — mode débutant

**Mission :** inspecter avant d'installer. Aucune installation n'est exigée.

## Énoncé

1. Distinguez sur votre système `Get-WindowsCapability -Online`, `Get-WindowsOptionalFeature -Online` et `Get-WindowsFeature` : lesquelles s'appliquent au client Windows, lesquelles à Windows Server ?
2. Recherchez la capacité RSAT Active Directory et relevez son état sans la modifier.
3. Listez les modules localement disponibles avec `Get-Module -ListAvailable` ; relevez le statut du dépôt PSGallery.
4. Recherchez `ImportExcel` dans PSGallery et relevez version, date de publication et éditeur **si la recherche en ligne est possible**.
5. Expliquez quand choisir `-Scope CurrentUser` et pourquoi vérifier la date et la provenance avant d'installer.

## Indices progressifs

- `Get-WindowsCapability -Online -Name 'Rsat.ActiveDirectory*'` inspecte RSAT côté client Windows.
- `Get-PSRepository` inspecte les dépôts ; `Find-Module -Name ImportExcel` interroge la Gallery.
- `Get-Module -ListAvailable -Name ImportExcel` répond à la question locale, pas à la question en ligne.
- Sans Internet ou hors Windows, remplissez « non disponible » et expliquez la limite ; n'installez rien pour débloquer le TP.

**Livrable :** fiche d'inventaire locale et en ligne, avec sources et limites.
