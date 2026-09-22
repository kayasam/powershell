---
title: "Exercice 16 - Le Journal de Bord de Nami - Débutant"
publier: true
parcours-tssr: true
parcours-pro: false
---

# Exercice 16 - Le Journal de Bord de Nami 🗺️ — Débutant

> Chapitre associé : [[16-lire-et-ecrire/16-lire-et-ecrire]]

## Contexte

**Nami** tient le journal de bord du Thousand Sunny. Chaque escale s'ajoute,
rien ne doit disparaître.

> _"Un bon navigateur note tout."_ — Nami

**Durée : 40 min**

## Mise en place

```powershell
New-Item -Path "$env:TEMP\Navigation" -ItemType Directory -Force

$journalPath = "$env:TEMP\Navigation\journal-de-bord.txt"

Set-Content -Path $journalPath -Value "=== JOURNAL DE BORD - THOUSAND SUNNY ==="
Add-Content -Path $journalPath -Value "2026-01-15 | Cap : Est  | Meteo : Degage  | Depart de Wano"
Add-Content -Path $journalPath -Value "2026-01-16 | Cap : Est  | Meteo : Orageux | Tempete evitee"
Add-Content -Path $journalPath -Value "2026-01-17 | Cap : Nord | Meteo : Brumeux | Ile fantome apercue"
Add-Content -Path $journalPath -Value "2026-01-18 | Cap : Est  | Meteo : Degage  | Banc de poissons volants"
Add-Content -Path $journalPath -Value "2026-01-19 | Cap : Est  | Meteo : Degage  | Arrivee a Elbaf"
```

---

## Partie A : Lire le journal (5 min)

```powershell
Get-Content $journalPath
Get-Content $journalPath -Tail 3
(Get-Content $journalPath).Count
```

**A1.** Combien d'entrées contient le journal, hors ligne de titre ?

**A2.** Quelle est la dernière entrée ?

**A3.** Affichez seulement les **2 premières** lignes.

> 💡 **Indice** : `-Tail` lit la fin, `-TotalCount` lit le début.

---

## Partie B : Ajouter une entrée (5 min)

```powershell
Add-Content -Path $journalPath -Value "2026-01-20 | Cap : Sud | Meteo : Degage | Escale a Elbaf"
Get-Content $journalPath -Tail 2
```

**B1.** La nouvelle ligne s'est-elle ajoutée **sans effacer** les précédentes ?

**B2.** Que se passerait-il si vous aviez utilisé `Set-Content` à la place ?

> ⚠️ Testez cette question **mentalement** d'abord. `Set-Content` écrase.

---

## Partie C : Chercher dans le journal (10 min)

```powershell
Get-Content $journalPath | Where-Object { $_ -like "*Orageux*" -or $_ -like "*Brumeux*" }
```

**C1.** Combien de journées ont eu une météo dégradée ?

**C2.** Trouvez tous les jours où le cap était `Nord`.

**C3.** Comptez les lignes contenant le mot `Degage`.

---

## Partie D : Créer un résumé météo (10 min)

```powershell
$resume = Get-Content $journalPath | Where-Object { $_ -like "*Degage*" }
Set-Content -Path "$env:TEMP\Navigation\resume-meteo.txt" -Value $resume
Get-Content "$env:TEMP\Navigation\resume-meteo.txt"
```

**D1.** Combien de lignes contient le résumé ?

**D2.** Pourquoi utilise-t-on `Set-Content` ici, et non `Add-Content` ?

---

## Partie E : Corriger une entrée (10 min)

Nami s'est trompée : « Ile fantome » doit devenir « Ile de Skypiea ».

```powershell
(Get-Content $journalPath) -replace "Ile fantome apercue", "Ile de Skypiea apercue" |
    Set-Content $journalPath

Get-Content $journalPath
```

**E1.** La correction a-t-elle fonctionné ?

**E2.** Pourquoi y a-t-il des **parenthèses** autour de `Get-Content` ?
Essayez sans, et observez.

> 💡 **Indice** : sans les parenthèses, le fichier serait encore ouvert en lecture
> pendant qu'on tente d'écrire dedans.

---

## Mission finale F : le rapport de traversée 🌟

**F1.** Écrivez une fonction qui ajoute une entrée au journal, au format :

```
[2026-09-17 15:32:07] [INFO] Escale a Water Seven
```

Elle doit accepter un message et un niveau (`INFO`, `ALERTE`…), horodater
automatiquement, écrire dans le fichier **et** afficher à l'écran.

**F2.** Appelez-la trois fois avec des niveaux différents, puis relisez les
5 dernières lignes du journal.

> 💡 **Indice** : `Get-Date -Format "yyyy-MM-dd HH:mm:ss"` produit l'horodatage.

---

> [!success] Validation
>
> - Vous savez lire tout un fichier, son début ou sa fin
> - Vous distinguez `Set-Content` (écrase) et `Add-Content` (ajoute)
> - Vous savez chercher des lignes dans un fichier
> - Vous savez remplacer du texte et réenregistrer
> - Vous savez pourquoi les parenthèses sont nécessaires avant de réécrire
