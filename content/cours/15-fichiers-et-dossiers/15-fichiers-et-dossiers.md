---
title: "15. Fichiers et dossiers"
---

# 15. Fichiers et dossiers

> [!TIP] Ressources du chapitre
>
> - [[15-fichiers-et-dossiers/tp/index|Exercices pratiques]]
> - [[Memo-Commandes|Mémo des commandes]]

## Navigation

```powershell
# Où suis-je ?
Get-Location          # ou pwd

# Aller quelque part
Set-Location "C:\Logs"  # ou cd

# Lister le contenu
Get-ChildItem         # ou dir, ls

# Lister avec les fichiers cachés
Get-ChildItem -Force

# Chercher en profondeur
Get-ChildItem -Recurse -Filter "*.log"
```

## Créer

```powershell
# Créer un dossier
New-Item -Path "C:\Logs\Archive" -ItemType Directory

# Créer un fichier vide
New-Item -Path "C:\Logs\rapport.txt" -ItemType File

# Créer un fichier avec du contenu
New-Item -Path "C:\Logs\note.txt" -ItemType File -Value "Contenu initial"
```

## Copier et déplacer

```powershell
# Copier un fichier
Copy-Item "C:\source.txt" "C:\destination.txt"

# Copier un dossier entier
Copy-Item "C:\Source" "C:\Destination" -Recurse

# Déplacer (renommer aussi)
Move-Item "C:\ancien.txt" "C:\nouveau.txt"
```

## Supprimer

```powershell
# Supprimer un fichier
Remove-Item "C:\Logs\vieux.log"

# Supprimer un dossier et tout son contenu
Remove-Item "C:\Logs\Archive" -Recurse

# Supprimer tous les .log du dossier
Remove-Item "C:\Logs\*.log"
```

## Tester si quelque chose existe

```powershell
# Fichier ou dossier ?
Test-Path "C:\Logs\rapport.txt"    # True ou False

# Usage courant
if (Test-Path "C:\Logs") {
    Write-Host "Le dossier existe"
} else {
    New-Item -Path "C:\Logs" -ItemType Directory
}
```

## Obtenir les infos d'un fichier

```powershell
$fichier = Get-Item "C:\Logs\rapport.txt"

$fichier.Name          # rapport.txt
$fichier.FullName      # C:\Logs\rapport.txt
$fichier.Length        # Taille en octets
$fichier.LastWriteTime # Dernière modification
$fichier.Extension     # .txt
```

## À retenir

✅ `New-Item` pour créer fichiers et dossiers
✅ `Copy-Item` et `Move-Item` pour copier/déplacer
✅ `Remove-Item` pour supprimer
✅ `Test-Path` pour vérifier qu'un chemin existe
✅ `Get-Item` pour obtenir les détails d'un fichier

> **Lien**
>
> - [À propos des fichiers](https://learn.microsoft.com/fr-fr/powershell/scripting/samples/working-with-files-and-folders)
