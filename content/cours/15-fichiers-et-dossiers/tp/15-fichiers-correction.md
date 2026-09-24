---
title: Correction 15 - Les Archives de Robin
publier: true
parcours-tssr: true
parcours-pro: true
---

# Correction - Exercice 15 : Les Archives de Robin 📚

> Chapitre associé : [[cours/15-fichiers-et-dossiers/15-fichiers-et-dossiers]]
> Énoncé de la version [[15-fichiers-avance|avancée]], **réponse sous chaque
> question**. Les questions non marquées _(avancé)_ figurent aussi dans la
> version [[15-fichiers-debutant|débutant]].
>
> 💡 Les blocs verts se **replient** : cliquez sur le titre pour masquer une
> réponse pendant la séance.

## Contexte

**Nico Robin** est l'archéologue du Thousand Sunny. Tout doit être classé, copié,
déplacé avec précision.

> _"L'histoire ne disparaît pas. Elle attend qu'on la retrouve."_ — Robin

**Durée : 45 min**

## Mise en place

Créez un dossier de travail `Archives-Robin` dans votre dossier temporaire.

```powershell
New-Item -Path "$env:TEMP\Archives-Robin" -ItemType Directory -Force
```

---

> [!info] Enonce allege - correspondance des numeros
> Cinq questions ont ete retirees de l'enonce (reperees par un bandeau orange
> ci-dessous). La numerotation de l'enonce a donc glisse :
>
> | Enonce actuel | Correction                                               |
> | ------------- | -------------------------------------------------------- |
> | D3            | D3 (simplifie : sans le dossier parent)                  |
> | D4            | **D5**                                                   |
> | F1            | F1 (simplifie : tableau affiche, pas d'objet exportable) |
>
> `[PSCustomObject]` n'est enseigne qu'au **chapitre 17** : F1 ne peut pas
> l'exiger ici.

---

## Partie A : Organiser les dossiers (10 min)

**A1.** Créez cette arborescence : `Alabasta`, `Skypiea`, `Enies-Lobby`,
`Fishman-Island`, `Wano`. Vérifiez le résultat.

> [!check]+ Réponse A1
>
> ```powershell
> New-Item -Path "$env:TEMP\Archives-Robin\Alabasta" -ItemType Directory
> # ... et ainsi de suite
>
> Get-ChildItem "$env:TEMP\Archives-Robin"
> ```
>
> → **5 dossiers**.

**A2.** Créez-les **en une seule commande**.

> [!check]+ Réponse A2
>
> ```powershell
> "Alabasta","Skypiea","Enies-Lobby","Fishman-Island","Wano" |
>     ForEach-Object { New-Item -Path "$env:TEMP\Archives-Robin\$_" -ItemType Directory -Force }
> ```

**A3.** Créez un dossier imbriqué `Wano\Onigashima\Salle-du-tresor` dont les
parents n'existent pas. Quel paramètre est nécessaire ? _(avancé)_

> [!check]+ Réponse A3
>
> ```powershell
> New-Item -Path "$env:TEMP\Archives-Robin\Wano\Onigashima\Salle-du-tresor" -ItemType Directory -Force
> ```
>
> C'est **`-Force`** qui crée toute l'arborescence manquante. Sans lui :
> `Impossible de trouver une partie du chemin`.

> 📘 **À comprendre**
> `-Force` a deux sens selon le contexte, et c'est une source de confusion :
>
> | Sur                     | Effet de `-Force`               |
> | ----------------------- | ------------------------------- |
> | un **dossier**          | crée les parents manquants      |
> | un **fichier existant** | ⚠️ **l'écrase**                 |
> | `Get-ChildItem`         | affiche les éléments **cachés** |
>
> Sur un fichier, protégez-vous avec `if (-not (Test-Path ...))`.

---

## Partie B : Créer des fichiers de notes (10 min)

**B1.** Créez un fichier de notes avec du contenu dans chaque île.

> [!check]+ Réponse B1
>
> ```powershell
> New-Item -Path "$env:TEMP\Archives-Robin\Alabasta\poneglyph.txt" -ItemType File -Value "Poneglyph d'Alabasta"
> ```

**B2.** Que change `-Recurse` sur `Get-ChildItem` ?

> [!check]+ Réponse B2
> Sans lui, `Get-ChildItem` ne montre que le **niveau courant**. Avec, il descend
> dans **tous** les sous-dossiers.
>
> ```powershell
> Get-ChildItem "$env:TEMP\Archives-Robin"
> Get-ChildItem "$env:TEMP\Archives-Robin" -Recurse
> ```

> [!warning] Retire de l'enonce - notion non vue a ce stade
> Cette question ne figure plus dans le TP. La reponse est conservee ici :
> reintegrez-la si vous ajoutez la notion au cours.

**B3.** Affichez **uniquement** les fichiers, sans les dossiers. Puis l'inverse.
_(avancé)_

> [!check]+ Réponse B3
>
> ```powershell
> Get-ChildItem "$env:TEMP\Archives-Robin" -Recurse -File
> Get-ChildItem "$env:TEMP\Archives-Robin" -Recurse -Directory
> ```
>
> Sur l'arborescence de l'exercice : **5 fichiers**, **7 dossiers**
> (les 5 îles plus `Onigashima` et `Salle-du-tresor`).

---

## Partie C : Copier, déplacer, renommer (10 min)

**C1.** Copiez un fichier vers une autre île, puis renommez-en un autre.

> [!check]+ Réponse C1
>
> ```powershell
> Copy-Item "$env:TEMP\Archives-Robin\Alabasta\poneglyph.txt" "$env:TEMP\Archives-Robin\Skypiea\"
> Rename-Item "$env:TEMP\Archives-Robin\Wano\notes.txt" "notes-wano.txt"
>
> Get-ChildItem "$env:TEMP\Archives-Robin\Wano"
> Get-ChildItem "$env:TEMP\Archives-Robin\Skypiea"
> ```

**C2.** Quelle différence entre `Copy-Item` et `Move-Item` ?

> [!check]+ Réponse C2
>
> | Cmdlet      | Effet                              |
> | ----------- | ---------------------------------- |
> | `Copy-Item` | duplique — l'original **reste**    |
> | `Move-Item` | déplace — l'original **disparaît** |
>
> `Move-Item` sert aussi à **renommer** : déplacer un fichier vers le même dossier
> sous un autre nom, c'est un renommage.

**C3.** Copiez un **dossier entier** avec son contenu. Quel paramètre faut-il ?
_(avancé)_

> [!check]+ Réponse C3
>
> ```powershell
> Copy-Item "$env:TEMP\Archives-Robin\Wano" "$env:TEMP\Archives-Robin\Wano-Backup" -Recurse
> ```
>
> Sans `-Recurse`, seul le dossier vide est créé — le contenu ne suit pas.

> [!warning] Retire de l'enonce - notion non vue a ce stade
> Cette question ne figure plus dans le TP. La reponse est conservee ici :
> reintegrez-la si vous ajoutez la notion au cours.

**C4.** Que se passe-t-il si le fichier de destination existe déjà ? Comment
forcer, et comment au contraire s'en protéger ? _(avancé)_

> [!check]+ Réponse C4
> `Copy-Item` **échoue** par défaut. Deux comportements possibles :
>
> ```powershell
> Copy-Item source destination -Force                              # ecraser
> if (-not (Test-Path $destination)) { Copy-Item source destination }   # proteger
> ```

> 📘 **À comprendre**
> Toutes ces cmdlets partagent le même suffixe `-Item` : `New-Item`, `Copy-Item`,
> `Move-Item`, `Remove-Item`, `Get-Item`, `Rename-Item`.
>
> Et elles fonctionnent **sur tous les PSDrives** — pas seulement les fichiers.
> Vous les retrouverez à l'identique sur le registre au chapitre 18.

---

## Partie D : Chercher dans les archives (10 min)

**D1.** Combien de fichiers `.txt` dans l'arborescence ?

> [!check]+ Réponse D1
>
> ```powershell
> (Get-ChildItem "$env:TEMP\Archives-Robin" -Recurse -Filter "*.txt").Count
> ```
>
> **5**, si vous avez créé une note par île.

**D2.** Quel est le fichier le plus récent ?

> [!check]+ Réponse D2
>
> ```powershell
> Get-ChildItem "$env:TEMP\Archives-Robin" -Recurse -Filter "*.txt" |
>     Sort-Object LastWriteTime -Descending |
>     Select-Object -First 1
> ```

**D3.** Pour un fichier, relevez nom, nom sans extension, extension, taille,
chemin complet, dossier parent.

> [!check]+ Réponse D3
>
> ```powershell
> $f = Get-Item "$env:TEMP\Archives-Robin\Alabasta\poneglyph.txt"
> $f | Format-List Name, BaseName, Extension, Length, FullName, DirectoryName
> ```
>
> | Propriété       | Exemple        |
> | --------------- | -------------- |
> | `Name`          | `notes.txt`    |
> | `BaseName`      | `notes`        |
> | `Extension`     | `.txt`         |
> | `Length`        | `15` (octets)  |
> | `FullName`      | chemin complet |
> | `DirectoryName` | dossier parent |

> [!warning] Retire de l'enonce - notion non vue a ce stade
> Cette question ne figure plus dans le TP. La reponse est conservee ici :
> reintegrez-la si vous ajoutez la notion au cours.

**D4.** Sur `C:\Windows\System32`, comparez le temps de deux approches pour
compter les `.dll`. Quel écart ? Pourquoi ? _(avancé)_

> [!check]+ Réponse D4
>
> ```powershell
> Measure-Command { (Get-ChildItem C:\Windows\System32 | Where-Object Extension -eq '.dll').Count }
> Measure-Command { (Get-ChildItem C:\Windows\System32 -Filter *.dll).Count }
> ```
>
> | Approche                                             | Temps     |
> | ---------------------------------------------------- | --------- |
> | `Get-ChildItem \| Where-Object Extension -eq '.dll'` | **87 ms** |
> | `Get-ChildItem -Filter *.dll`                        | **59 ms** |
>
> `-Filter` est plus rapide car le filtrage est fait **par le système de
> fichiers**, avant même que PowerShell ne crée les objets.

**D5.** Trouvez les fichiers de plus de 100 octets, puis ceux modifiés
aujourd'hui. _(avancé)_

> [!check]+ Réponse D5
>
> ```powershell
> Get-ChildItem "$env:TEMP\Archives-Robin" -Recurse -File | Where-Object Length -gt 100
> Get-ChildItem "$env:TEMP\Archives-Robin" -Recurse -File | Where-Object LastWriteTime -gt (Get-Date).Date
> ```

> 📘 **À comprendre**
> ⚠️ `-Filter` et `-Include` ne sont pas équivalents :
>
> | Paramètre  | Où s'applique le filtre             | Vitesse                |
> | ---------- | ----------------------------------- | ---------------------- |
> | `-Filter`  | par le **système de fichiers**      | rapide, un seul motif  |
> | `-Include` | par **PowerShell**, après réception | lent, plusieurs motifs |
>
> Règle : **`-Filter` par défaut**, `-Include` seulement s'il vous faut plusieurs
> motifs à la fois.

---

## Partie E : Tester avant d'agir (5 min)

**E1.** Pourquoi tester l'existence avant de supprimer ?

> [!check]+ Réponse E1
> Parce que `Remove-Item` sur un chemin inexistant produit une **erreur rouge**
> inutile. Tester permet un message clair et un script qui ne s'interrompt pas.
>
> ```powershell
> if (Test-Path $chemin) { Remove-Item $chemin } else { "Deja absent : $chemin" }
> ```

**E2.** **Simulez** une suppression avant de l'exécuter. Quel paramètre ?

> [!check]+ Réponse E2
>
> ```powershell
> Remove-Item "$env:TEMP\Archives-Robin\Fishman-Island" -Recurse -WhatIf
> ```
>
> `-WhatIf` **affiche** ce qui serait fait, sans rien faire :
>
> ```
> What if: Suppression de l'element cible "...\Fishman-Island".
> ```

> [!warning] Retire de l'enonce - notion non vue a ce stade
> Cette question ne figure plus dans le TP. La reponse est conservee ici :
> reintegrez-la si vous ajoutez la notion au cours.

**E3.** Testez et expliquez le comportement dans ces cas limites. _(avancé)_

> [!check]+ Réponse E3
>
> | Cas                                     | Comportement                        | Remède              |
> | --------------------------------------- | ----------------------------------- | ------------------- |
> | Fichier en **lecture seule**            | `Remove-Item` échoue                | `-Force`            |
> | Fichier **verrouillé** par un processus | échec, accès refusé                 | fermer le processus |
> | Nom contenant `[` `]`                   | non trouvé — ce sont des **jokers** | `-LiteralPath`      |

> 📘 **À comprendre**
> ⚠️ **`Remove-Item` ne passe pas par la corbeille.** La suppression est définitive.
>
> Prenez l'habitude systématique : `-WhatIf` d'abord, puis relancer sans.
> Sur un `-Recurse` mal ciblé, c'est ce qui sépare une frayeur d'un incident.
>
> `-LiteralPath` est la solution quand un nom contient des crochets : sans lui,
> PowerShell les interprète comme un motif de recherche.

---

## Mission finale F : le catalogue complet 🌟

**F1.** Générez un rapport par île : nombre de fichiers et taille totale.
Le résultat doit être un **objet**, exportable en CSV.

> [!check]+ Réponse F1
>
> ```powershell
> Get-ChildItem "$env:TEMP\Archives-Robin" -Directory | ForEach-Object {
>     $fichiers = Get-ChildItem $_.FullName -Recurse -File
>     [PSCustomObject]@{
>         Ile      = $_.Name
>         Fichiers = @($fichiers).Count
>         Octets   = ($fichiers | Measure-Object Length -Sum).Sum
>     }
> } | Sort-Object Octets -Descending
> ```
>
> ```
> Ile            Fichiers Octets
> ---            -------- ------
> Fishman-Island        1     25
> Enies-Lobby           1     22
> Alabasta              1     19
> Skypiea               1     18
> Wano                  1     15
> ```

**F2.** Ajoutez au rapport les 3 plus gros fichiers de toute l'arborescence, et
les fichiers non modifiés depuis plus de 30 jours. _(avancé)_

> [!check]+ Réponse F2
>
> ```powershell
> $tous = Get-ChildItem "$env:TEMP\Archives-Robin" -Recurse -File
>
> $tous | Sort-Object Length -Descending | Select-Object -First 3 Name, Length, DirectoryName
> $tous | Where-Object LastWriteTime -lt (Get-Date).AddDays(-30) | Select-Object FullName, LastWriteTime
> ```

> [!warning] Retire de l'enonce - notion non vue a ce stade
> Cette question ne figure plus dans le TP. La reponse est conservee ici :
> reintegrez-la si vous ajoutez la notion au cours.

**F3.** Écrivez un script de rangement qui déplace les fichiers d'un dossier dans
des sous-dossiers `AAAA-MM` selon leur date de modification, avec : mode
simulation par défaut, création des dossiers manquants, gestion du cas où un
fichier de même nom existe déjà, et bilan final. _(avancé)_

> [!check]+ Réponse F3
>
> ```powershell
> [CmdletBinding(SupportsShouldProcess)]
> param(
>     [Parameter(Mandatory)]
>     [ValidateScript({ Test-Path $_ })]
>     [string]$Source
> )
>
> $deplaces = 0
> $ignores  = 0
>
> foreach ($f in Get-ChildItem $Source -File) {
>     $sousDossier = Join-Path $Source $f.LastWriteTime.ToString('yyyy-MM')
>
>     if (-not (Test-Path $sousDossier)) {
>         New-Item -Path $sousDossier -ItemType Directory -Force | Out-Null
>     }
>
>     $cible = Join-Path $sousDossier $f.Name
>
>     if (Test-Path $cible) {
>         Write-Warning "Existe deja, ignore : $($f.Name)"
>         $ignores++
>         continue
>     }
>
>     if ($PSCmdlet.ShouldProcess($f.FullName, "Deplacer vers $sousDossier")) {
>         Move-Item $f.FullName $cible
>         $deplaces++
>     }
> }
>
> Write-Output "Deplaces : $deplaces | Ignores : $ignores"
> ```

> 📘 **À comprendre**
> Le script F3 contient **tout ce qui fait un script livrable** :
>
> - `[ValidateScript({ Test-Path $_ })]` — le paramètre est validé **avant** de commencer ;
> - `SupportsShouldProcess` + `ShouldProcess()` — le mode simulation est gratuit,
>   `-WhatIf` fonctionne ;
> - la **clause de garde** `continue` pour les cas à ignorer ;
> - un **bilan chiffré** en fin d'exécution.
>
> C'est le squelette à réutiliser pour tout script qui modifie des fichiers.

---

> [!success] Validation
>
> - Vous créez une arborescence complète, parents compris
> - Vous copiez, déplacez et renommez, dossiers inclus
> - Vous filtrez **à la source** plutôt que dans le pipeline
> - Vous simulez systématiquement avant une suppression
> - Vous connaissez les cas limites du système de fichiers

---

## Ce qu'il faut retenir

| Commande                                 | Rôle                                  |
| ---------------------------------------- | ------------------------------------- |
| `New-Item -ItemType Directory -Force`    | créer, parents compris                |
| `Copy-Item -Recurse`                     | copier un dossier et son contenu      |
| `Move-Item`                              | déplacer **ou renommer**              |
| `Remove-Item -Recurse -WhatIf`           | **simuler** avant de supprimer        |
| `Get-ChildItem -Recurse -Filter "*.txt"` | chercher en profondeur, filtre rapide |
| `Get-ChildItem -File` / `-Directory`     | fichiers seuls / dossiers seuls       |
| `Test-Path`                              | vérifier l'existence avant d'agir     |
| `-LiteralPath`                           | chemin contenant des crochets         |

**`Remove-Item` ne passe pas par la corbeille. `-WhatIf` d'abord, toujours.**
