---
title: "Exercice 15 - Les Archives de Robin - Débutant"
publier: true
parcours-tssr: true
parcours-pro: false
---

# Exercice 15 - Les Archives de Robin 📚 — Débutant

> Chapitre associé : [[15-fichiers-et-dossiers/15-fichiers-et-dossiers]]

## Contexte

**Nico Robin** est l'archéologue du Thousand Sunny. Des Poneglyphes aux cartes de
navigation, tout doit être classé, copié, déplacé avec précision.

Aujourd'hui, c'est vous qui gérez ses archives.

> _"L'histoire ne disparaît pas. Elle attend qu'on la retrouve."_ — Robin

**Durée : 45 min**

## Mise en place

```powershell
New-Item -Path "$env:TEMP\Archives-Robin" -ItemType Directory -Force
Set-Location "$env:TEMP\Archives-Robin"
```

---

## Partie A : Organiser les dossiers (10 min)

Robin classe ses documents par île visitée. Créez cette arborescence :

```
Archives-Robin/
├── Alabasta/
├── Skypiea/
├── Enies-Lobby/
├── Fishman-Island/
└── Wano/
```

```powershell
New-Item -Path "$env:TEMP\Archives-Robin\Alabasta" -ItemType Directory
New-Item -Path "$env:TEMP\Archives-Robin\Skypiea"  -ItemType Directory
# A vous pour les trois autres...
```

**A1.** Créez les cinq dossiers, puis vérifiez avec `Get-ChildItem`. Combien
en comptez-vous ?

**A2.** Existe-t-il un moyen de créer les cinq **en une seule commande** ?

> 💡 **Indice** : `New-Item` accepte un **tableau** de chemins.

---

## Partie B : Créer des fichiers de notes (10 min)

```powershell
New-Item -Path "$env:TEMP\Archives-Robin\Alabasta\poneglyph.txt" `
         -ItemType File `
         -Value "Poneglyph d'Alabasta - Informations sur Pluton"

New-Item -Path "$env:TEMP\Archives-Robin\Skypiea\notes.txt" `
         -ItemType File `
         -Value "Skypiea - Ancienne civilisation Shandora"
```

**B1.** Créez un fichier de notes dans **chaque** île, avec du contenu.

**B2.** Vérifiez le résultat avec `Get-ChildItem -Recurse`. Que change `-Recurse` ?

---

## Partie C : Copier, déplacer, renommer (10 min)

```powershell
# Copier
Copy-Item "$env:TEMP\Archives-Robin\Alabasta\poneglyph.txt" `
          "$env:TEMP\Archives-Robin\Wano\copie-poneglyph-alabasta.txt"

# Renommer (Move-Item sert aussi a renommer)
Move-Item "$env:TEMP\Archives-Robin\Skypiea\notes.txt" `
          "$env:TEMP\Archives-Robin\Skypiea\notes-shandora.txt"
```

**C1.** Vérifiez que les deux opérations ont fonctionné.

**C2.** Quelle différence entre `Copy-Item` et `Move-Item` ?

---

## Partie D : Chercher dans les archives (10 min)

```powershell
Get-ChildItem "$env:TEMP\Archives-Robin" -Recurse -Filter "*.txt"
(Get-ChildItem "$env:TEMP\Archives-Robin" -Recurse -Filter "*.txt").Count
```

**D1.** Combien de fichiers `.txt` avez-vous créés ?

**D2.** Quel est le fichier le plus **récent** ?

```powershell
Get-ChildItem "$env:TEMP\Archives-Robin" -Recurse -Filter "*.txt" |
    Sort-Object LastWriteTime -Descending |
    Select-Object -First 1
```

**D3.** Pour un fichier de votre choix, relevez : nom, nom sans extension,
extension, taille en octets, chemin complet.

> 💡 **Indice** : les propriétés s'appellent `Name`, `BaseName`, `Extension`,
> `Length`, `FullName`.

---

## Partie E : Tester avant d'agir (5 min)

```powershell
$dossier = "$env:TEMP\Archives-Robin\Fishman-Island"

if (Test-Path $dossier) {
    Remove-Item $dossier -Recurse
    Write-Host "Dossier supprime" -ForegroundColor Green
} else {
    Write-Host "Dossier introuvable" -ForegroundColor Yellow
}
```

**E1.** Pourquoi tester avec `Test-Path` avant de supprimer ?

**E2.** Avant de supprimer pour de vrai, **simulez** l'opération. Quel paramètre
utilisez-vous ?

> ⚠️ `Remove-Item` est définitif : pas de corbeille. Prenez l'habitude de simuler.

---

## Mission finale F : le catalogue complet 🌟

**F1.** Générez un rapport de toutes les archives : pour chaque île, le **nombre
de fichiers** et la **taille totale**.

> 💡 **Indice** : parcourez les dossiers avec `foreach`, comptez avec
> `Measure-Object`, et additionnez la propriété `Length`.

---

## Validation

✅ Vous savez créer une arborescence avec `New-Item`
✅ Vous savez copier, déplacer et renommer
✅ Vous savez chercher récursivement avec `-Recurse` et `-Filter`
✅ Vous vérifiez avec `Test-Path` avant d'agir
✅ Vous simulez une suppression avant de l'exécuter
