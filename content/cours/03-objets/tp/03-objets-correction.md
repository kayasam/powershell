---
title: "Correction 03 - L'Autopsie du Den Den Mushi"
publier: true
parcours-tssr: true
parcours-pro: true
---

# Correction - Exercice 03 : L'Autopsie du Den Den Mushi 🐌

> Chapitre associé : [[03-objets/03-objets]]
> Énoncé de la version [[03-objets-avance|avancée]], **réponse sous chaque
> question**. Les questions non marquées _(avancé)_ figurent aussi dans la
> version [[03-objets-debutant|débutant]].
>
> 💡 Les blocs verts se **replient** : cliquez sur le titre pour masquer une
> réponse pendant la séance.

## Contexte

Un escargophone saisi sur un navire pirate est posé sur votre bureau. Vous ne
savez pas ce qu'il contient — mais vous savez le démonter.

> _"Tout objet raconte son histoire, si on sait l'interroger."_ — Nico Robin

**Durée : 25 min**

## Objectif

Ne plus jamais dire « je ne sais pas quoi mettre après le point ».

---

## Partie A : Texte ou objet ? (5 min)

Affichez les informations du processus `explorer`.

**A1.** Le résultat ressemble à un tableau. Prouvez qu'il ne s'agit **pas** de texte.

> [!check]+ Réponse A1
>
> ```powershell
> Get-Process -Name explorer
> ```
>
> **Ce n'est pas du texte.** C'est un **objet** que PowerShell _affiche_ sous
> forme de tableau. Le tableau est une mise en forme, pas la donnée elle-même.
>
> Preuve :
>
> ```powershell
> (Get-Process -Name explorer | Select-Object -First 1).GetType().FullName
> # System.Diagnostics.Process
> ```

**A2.** Quel est le **type exact** de ce que vous avez obtenu ?

> [!check]+ Réponse A2
>
> ```powershell
> Get-Process -Name explorer | Get-Member
> ```
>
> `System.Diagnostics.Process` — indiqué par la ligne `TypeName` en haut.

**A3.** Combien de propriétés cet objet possède-t-il ?

> [!check]+ Réponse A3
>
> ```powershell
> (Get-Process | Get-Member -MemberType Property).Count
> # 52
> ```

**A4.** Pourquoi PowerShell n'affiche-t-il qu'une partie des propriétés à l'écran ?
_(avancé)_

> [!check]+ Réponse A4
> Parce qu'un affichage par défaut est défini pour chaque type d'objet. Sans cela,
> 52 colonnes défileraient à l'écran et seraient illisibles. Les autres propriétés
> restent accessibles — elles sont simplement masquées.

> 📘 **À comprendre**
> C'est le point de bascule quand on vient de CMD ou Bash.
>
> En Bash, `ps aux` sort du **texte** : il faut `grep` et `awk` pour le découper.
> En PowerShell, la donnée est **déjà structurée** : on demande directement la
> propriété voulue.
>
> **Analogie** : le tableau affiché, c'est la photo du dossier. `Get-Member`,
> c'est sa table des matières.

---

## Partie B : Accéder aux propriétés (5 min)

Rangez le fichier `C:\Windows\notepad.exe` dans une variable.

**B1.** Affichez son nom, sa taille en octets et sa date de dernière modification.

> [!check]+ Réponse B1
>
> ```powershell
> $fichier = Get-Item "C:\Windows\notepad.exe"
>
> $fichier.Name
> $fichier.Length
> $fichier.LastWriteTime
> ```
>
> | Propriété       | Valeur relevée        |
> | --------------- | --------------------- |
> | `Name`          | `notepad.exe`         |
> | `Length`        | `360448` (octets)     |
> | `LastWriteTime` | `09/09/2026 09:18:48` |

**B2.** Trouvez et affichez trois **autres** propriétés.

> [!check]+ Réponse B2
>
> ```powershell
> $fichier | Get-Member -MemberType Property
> ```
>
> | Propriété      | Valeur           |
> | -------------- | ---------------- |
> | `Extension`    | `.exe`           |
> | `Directory`    | `C:\Windows`     |
> | `CreationTime` | date de création |
> | `IsReadOnly`   | `False`          |

**B3.** Quelle propriété donne le **chemin complet** ?

> [!check]+ Réponse B3
> `FullName` → `C:\Windows\notepad.exe`

**B4.** Affichez sa taille en **kilooctets**. _(avancé)_

> [!check]+ Réponse B4
>
> ```powershell
> $fichier.Length / 1KB
> # 352,046875
> ```

> 📘 **À comprendre**
> Le point `.` signifie « donne-moi ce morceau de l'objet ».
>
> ⚠️ **Pas de parenthèses sur une propriété.** `$fichier.Name()` est une erreur
> classique — c'est `$fichier.Name`, sans rien après.
>
> `1KB`, `1MB`, `1GB` sont compris nativement par PowerShell : gros gain de
> lisibilité face à `1024` ou `1048576`.

---

## Partie C : Filtrer ce que montre Get-Member (5 min)

**C1.** Sur le service `Spooler`, quelle propriété donne son **état** ?

> [!check]+ Réponse C1
>
> ```powershell
> Get-Service -Name Spooler | Get-Member -MemberType Property
> ```
>
> `Status` → vaut `Running` ou `Stopped`.

**C2.** Quelle méthode permettrait de l'**arrêter** ?

> ⚠️ Ne lancez pas la méthode d'arrêt : contentez-vous de la trouver.

> [!check]+ Réponse C2
>
> ```powershell
> Get-Service -Name Spooler | Get-Member -MemberType Method
> ```
>
> `Stop()`. Les méthodes disponibles sur un service :
>
> ```
> Close, Continue, Dispose, ExecuteCommand, Pause,
> Refresh, Start, Stop, WaitForStatus
> ```

**C3.** Pourquoi préfère-t-on la cmdlet `Stop-Service` à cette méthode ? _(avancé)_

> [!check]+ Réponse C3
> Parce que la cmdlet est la voie officielle : elle est plus lisible, elle gère
> les erreurs proprement, et surtout elle accepte **`-WhatIf`** pour simuler avant
> d'agir. La méthode `.Stop()` agit immédiatement, sans filet.

> 📘 **À comprendre**
> `Get-Member` sans filtre noie sous l'information. Le réflexe est de filtrer :
> `-MemberType Property` pour les données, `-MemberType Method` pour les actions.
>
> Un service a **14 propriétés** et **14 méthodes** : sans filtre, les deux listes
> se mélangent.

---

## Partie D : Les méthodes (5 min)

Soit `$nom = "Monkey D. Luffy"`.

**D1.** Que renvoie la découpe de cette chaîne sur l'espace ? Quel est son type ?

> [!check]+ Réponse D1
>
> ```powershell
> $nom = "Monkey D. Luffy"
>
> $nom.Length          # propriété -> 15
> $nom.ToUpper()       # méthode   -> MONKEY D. LUFFY
> $nom.Split(" ")      # méthode   -> Monkey / D. / Luffy
> ```
>
> Un **tableau de trois chaînes** : `Monkey`, `D.`, `Luffy`.
>
> ```powershell
> $nom.Split(" ").GetType().Name    # Object[]
> ```

**D2.** Produisez `LUFFY` en une seule ligne.

> [!check]+ Réponse D2
>
> ```powershell
> $nom.Split(" ")[2].ToUpper()      # LUFFY
> ```
>
> Variante acceptée :
>
> ```powershell
> ($nom -split " ")[-1].ToUpper()   # LUFFY
> ```

**D3.** Classez ces membres en propriétés et méthodes, puis vérifiez :
`Length` · `ToUpper()` · `Substring()` · `Trim()` · `Replace()`
À quoi reconnaît-on une méthode à l'écrit ? _(avancé)_

> [!check]+ Réponse D3
>
> | Propriété | Méthode                                              |
> | --------- | ---------------------------------------------------- |
> | `Length`  | `ToUpper()` · `Substring()` · `Trim()` · `Replace()` |
>
> On reconnaît une méthode à ses **parenthèses**.

> 📘 **À comprendre**
> **Propriété = un nom. Méthode = un verbe + `()`.**
>
> - `$nom.Length` sans parenthèses → `15`
> - `$nom.ToUpper` sans parenthèses → affiche la _définition_ de la méthode,
>   pas son résultat. Erreur très fréquente.
>
> `[2]` désigne le **troisième** élément : on compte à partir de `0`.
> `[-1]` désigne le **dernier**, très pratique quand on ignore la longueur.

---

## Mission finale E : la fiche du suspect 🔍

**E1.** À partir du processus `explorer`, affichez **une seule ligne** contenant
son nom, son identifiant (PID), et sa mémoire de travail en **mégaoctets**.

> [!check]+ Réponse E1
>
> ```powershell
> $p = Get-Process -Name explorer | Select-Object -First 1
> $p.Name + " - PID " + $p.Id + " - " + ($p.WorkingSet64 / 1MB) + " Mo"
> ```
>
> Résultat type :
>
> ```
> explorer - PID 12345 - 178,4414 Mo
> ```

> 📘 **À comprendre**
> `+` entre du texte et un nombre convertit automatiquement le nombre en texte.
> C'est la façon la plus simple de coller des morceaux ensemble.
>
> Le nombre de décimales est un peu moche, mais c'est **volontairement laissé
> tel quel** : arrondir proprement demande `[math]::Round()`, une syntaxe
> d'appel de méthode .NET qui sort du cadre de ce cours (public TSSR, pas
> développeur). Retenez juste que `/ 1MB` convertit l'unité — peu importe le
> nombre de chiffres après la virgule.

**E2 (bonus — notions vues aux chapitres 8 et 9).** Le résultat de E1 est du
texte : une fois affiché, on ne peut plus le trier ni l'exporter. Cherchez comment
`Select-Object` permet de garder un **objet** tout en ajoutant une colonne
« mémoire en Mo ».

> [!check]+ Réponse E2
>
> ```powershell
> Get-Process -Name explorer |
>     Select-Object Name, Id,
>         @{Name='MemoireMo'; Expression={$_.WorkingSet64 / 1MB}}
> ```
>
> Le résultat se trie, se filtre et s'exporte :
>
> ```powershell
> Get-Process |
>     Select-Object Name, Id, @{Name='MemoireMo'; Expression={$_.WorkingSet64/1MB}} |
>     Sort-Object MemoireMo -Descending |
>     Export-Csv "$env:TEMP\processus.csv" -NoTypeInformation -Encoding UTF8
> ```

> 📘 **À comprendre**
> Deux notions apparaissent ici, toutes deux **revues plus loin dans le
> cours** — normal de ne pas les avoir devinées seul :
>
> - **La propriété calculée** `@{Name=...; Expression={...}}` crée une colonne qui
>   n'existe pas dans l'objet d'origine. Revue au chapitre 08 (Formatage).
> - **`$_`** désigne « l'objet en cours de traitement ». C'est la variable centrale
>   du pipeline, vue au chapitre 09 (Pipeline).
>
> Retenez surtout la différence entre **E1** et **E2** : E1 produit du **texte**,
> bon pour l'écran mais inexploitable ensuite. E2 produit un **objet**, qu'on peut
> encore trier, filtrer et exporter. C'est toute la philosophie de PowerShell.

---

> [!success] Validation
>
> - Vous savez que PowerShell renvoie des **objets**, pas du texte
> - Vous utilisez `Get-Member` pour explorer un objet inconnu
> - Vous accédez à une propriété avec `$objet.Propriete`
> - Vous appelez une méthode avec `$objet.Methode()`
> - Vous savez faire la différence entre une **propriété** et une **méthode**

---

## Ce qu'il faut retenir

| Écriture                          | Rôle                                       |
| --------------------------------- | ------------------------------------------ |
| `<cmd> \| Get-Member`             | catalogue complet de l'objet               |
| `Get-Member -MemberType Property` | uniquement les données                     |
| `Get-Member -MemberType Method`   | uniquement les actions                     |
| `$objet.Propriete`                | lire une donnée — **sans parenthèses**     |
| `$objet.Methode()`                | exécuter une action — **avec parenthèses** |
| `.GetType().FullName`             | connaître le type exact de n'importe quoi  |
| `$tableau[0]` · `$tableau[-1]`    | premier · dernier élément                  |

**En Bash tu découpes du texte. En PowerShell tu demandes une propriété.**
