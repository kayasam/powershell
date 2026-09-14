# Exercice 14 - Les Archives de Robin 📚

## Contexte

**Nico Robin** est l'archéologue du Thousand Sunny.
Elle passe sa vie à organiser des documents : des Poneglyphes aux cartes de navigation, tout doit être classé, copié, déplacé avec précision.

Aujourd'hui, c'est vous qui gérez ses archives — avec PowerShell.

> _"L'histoire ne disparaît pas. Elle attend qu'on la retrouve."_ — Robin

## Mise en place

Créez la structure de travail :

```powershell
# Créer le dossier principal des archives
New-Item -Path "C:\Temp\Archives-Robin" -ItemType Directory

# Aller dedans
Set-Location "C:\Temp\Archives-Robin"
```

## Mission 1 : Organiser les dossiers (10 min)

Robin classe ses documents par île visitée. Créez l'arborescence suivante :

```
Archives-Robin/
├── Alabasta/
├── Skypiea/
├── Enies-Lobby/
├── Fishman-Island/
└── Wano/
```

```powershell
# Créez chaque dossier
New-Item -Path "C:\Temp\Archives-Robin\Alabasta"      -ItemType Directory
New-Item -Path "C:\Temp\Archives-Robin\Skypiea"       -ItemType Directory
# À vous pour les 3 autres...
```

**Vérifiez** :

```powershell
Get-ChildItem "C:\Temp\Archives-Robin"
```

## Mission 2 : Créer des fichiers de notes (10 min)

Créez des notes de recherche dans chaque dossier :

```powershell
New-Item -Path "C:\Temp\Archives-Robin\Alabasta\poneglyph.txt" `
         -ItemType File `
         -Value "Poneglyph d'Alabasta - Contient des informations sur Pluton"

New-Item -Path "C:\Temp\Archives-Robin\Skypiea\notes.txt" `
         -ItemType File `
         -Value "Skypiea - Ancienne civilisation Shandora"
```

Créez un fichier de notes pour chaque île.

**Vérifiez** :

```powershell
Get-ChildItem "C:\Temp\Archives-Robin" -Recurse
```

## Mission 3 : Copier et déplacer (10 min)

Robin a trouvé une copie d'un Poneglyph. Elle doit l'archiver correctement.

```powershell
# Copier une note vers un dossier d'archive
Copy-Item "C:\Temp\Archives-Robin\Alabasta\poneglyph.txt" `
          "C:\Temp\Archives-Robin\Wano\copie-poneglyph-alabasta.txt"

# Renommer un fichier (Move-Item sert aussi à renommer)
Move-Item "C:\Temp\Archives-Robin\Skypiea\notes.txt" `
          "C:\Temp\Archives-Robin\Skypiea\notes-shandora.txt"
```

**Vérifiez** que les 2 opérations ont bien fonctionné.

## Mission 4 : Chercher dans les archives (10 min)

Robin cherche tous les fichiers `.txt` dans toutes les archives.

```powershell
# Tous les fichiers texte
Get-ChildItem "C:\Temp\Archives-Robin" -Recurse -Filter "*.txt"

# Compter combien il y en a
(Get-ChildItem "C:\Temp\Archives-Robin" -Recurse -Filter "*.txt").Count
```

**Questions** :

- Combien de fichiers `.txt` avez-vous créés ?
- Quel est le fichier le plus récent ?

```powershell
Get-ChildItem "C:\Temp\Archives-Robin" -Recurse -Filter "*.txt" |
    Sort-Object LastWriteTime -Descending |
    Select-Object -First 1
```

## Mission 5 : Tester avant d'agir (5 min)

Robin veut supprimer les notes de Fishman Island (trop dangereuses).
Mais d'abord, elle vérifie que le dossier existe.

```powershell
$dossier = "C:\Temp\Archives-Robin\Fishman-Island"

if (Test-Path $dossier) {
    Remove-Item $dossier -Recurse
    Write-Host "Dossier supprimé" -ForegroundColor Green
} else {
    Write-Host "Dossier introuvable" -ForegroundColor Yellow
}
```

## Mission Bonus : Le catalogue complet 🌟

Générez un rapport de toutes les archives : pour chaque île, affichez le nombre de fichiers et la taille totale.

## Validation

- ✅ Vous savez créer une arborescence avec `New-Item`
- ✅ Vous savez copier et déplacer avec `Copy-Item` / `Move-Item`
- ✅ Vous savez rechercher des fichiers avec `Get-ChildItem -Recurse`
- ✅ Vous savez supprimer en sécurité avec `Test-Path` + `Remove-Item`
