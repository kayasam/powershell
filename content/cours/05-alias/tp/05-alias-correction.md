---
title: "Correction 05 - Les Noms de Code de la Marine"
publier: true
parcours-tssr: true
parcours-pro: true
---

# Correction - Exercice 05 : Les Noms de Code de la Marine 🏷️

> Chapitre associé : [[cours/05-alias/05-alias]]
> Énoncé de la version [[05-alias-avance|avancée]], **réponse sous chaque
> question**. Les questions non marquées _(avancé)_ figurent aussi dans la
> version [[05-alias-debutant|débutant]].
>
> 💡 Les blocs verts se **replient** : cliquez sur le titre pour masquer une
> réponse pendant la séance.

## Contexte

Chaque agent de la Marine a un nom officiel... et un surnom sur le terrain.

> _"Un bon agent répond aux deux."_ — Vice-Amiral Garp

**Durée : 15 min**

## Objectif

Connaître les surnoms, savoir lequel employer, et mesurer le risque qu'ils font
courir à un script.

---

## Partie A : Découvrir les alias existants (5 min)

**A1.** Combien d'alias existent par défaut sur votre poste ?

> [!check]+ Réponse A1
>
> ```powershell
> Get-Alias
> (Get-Alias).Count
> ```
>
> **135** sur le poste de référence — environ 130 à 150 selon la version.

**A2.** Quels sont les trois alias de `Get-ChildItem` ?

> [!check]+ Réponse A2
>
> ```powershell
> Get-Alias -Definition Get-ChildItem
> ```
>
> `dir`, `gci`, `ls`

**A3.** Complétez ce tableau, en vérifiant chaque réponse.

> [!check]+ Réponse A3
>
> ```powershell
> Get-Alias cat
> Get-Alias cp
> ```
>
> | Alias | Cmdlet réelle    |
> | ----- | ---------------- |
> | `cat` | `Get-Content`    |
> | `cp`  | `Copy-Item`      |
> | `rm`  | `Remove-Item`    |
> | `%`   | `ForEach-Object` |
> | `?`   | `Where-Object`   |

**A4.** Quels alias pointent vers `ForEach-Object` ? Et vers `Where-Object` ?
_(avancé)_

> [!check]+ Réponse A4
>
> ```powershell
> Get-Alias -Definition ForEach-Object
> Get-Alias -Definition Where-Object
> ```
>
> | Cmdlet           | Alias          |
> | ---------------- | -------------- |
> | `ForEach-Object` | `%`, `foreach` |
> | `Where-Object`   | `?`, `where`   |

> 📘 **À comprendre**
> `Get-Alias <nom>` va de l'alias vers la cmdlet.
> `Get-Alias -Definition <cmdlet>` fait le chemin **inverse** : c'est celui qu'on
> oublie, et pourtant le plus utile quand on lit le script d'un collègue.
>
> ⚠️ Attention aux alias d'un seul caractère `%` et `?` : très pratiques à taper,
> **illisibles** dans un script. On les croise beaucoup sur Internet.

---

## Partie B : Utiliser les alias courants (5 min)

**B1.** Testez `dir`, `ls`, `cd`, `pwd`, `cls`. Fonctionnent-ils tous ?

> [!check]+ Réponse B1
>
> ```powershell
> dir       # Get-ChildItem
> ls        # Get-ChildItem
> cd C:\    # Set-Location
> pwd       # Get-Location
> cls       # Clear-Host
> ```
>
> Oui, les cinq sont définis par défaut.

**B2.** Pourquoi `dir` (venu de CMD) **et** `ls` (venu de Linux) existent-ils
tous les deux ?

> [!check]+ Réponse B2
> Pour que les utilisateurs venant de **CMD** (`dir`) et de **Linux** (`ls`) se
> sentent immédiatement à l'aise. C'est un choix d'ergonomie de Microsoft, pas une
> redondance.

**B3.** `ls` sous PowerShell se comporte-t-il exactement comme `ls` sous Linux ?
Testez `ls -l` et concluez. _(avancé)_

> [!check]+ Réponse B3
> **Non.** `ls -l` échoue : `-l` n'existe pas, PowerShell le comprend comme le
> début d'un paramètre inconnu. Seul le **nom** est emprunté à Linux, pas les
> paramètres.

> 📘 **À comprendre**
> C'est un piège pour qui vient de Linux : le nom est familier, le comportement
> ne l'est pas. Les paramètres sont ceux de `Get-ChildItem` (`-Recurse`,
> `-Filter`, `-Force`…), pas ceux de `ls`.

---

## Partie C : Créer vos propres alias (5 min)

**C1.** Créez deux alias qui vous seraient utiles. Lesquels ?

> [!check]+ Réponse C1
>
> ```powershell
> New-Alias -Name np -Value notepad
> New-Alias -Name ll -Value Get-ChildItem
>
> np        # lance le bloc-notes
> ```

**C2.** Fermez la console, rouvrez-la : vos alias existent-ils encore ? Pourquoi ?

> [!check]+ Réponse C2
> **Non.** Les alias créés avec `New-Alias` vivent uniquement dans la **session
> courante**. Fermer la console les efface.

**C3.** Où faudrait-il déclarer un alias pour qu'il survive au redémarrage ?
_(avancé)_

> [!check]+ Réponse C3
> Dans le **profil** PowerShell (chapitre 25) — un script exécuté
> automatiquement à chaque ouverture de console :
>
> ```powershell
> notepad $PROFILE
> ```

**C4.** Créez un alias `dir` qui pointe vers `Get-Process` au lieu de
`Get-ChildItem`. Que se passe-t-il ensuite pour un script qui utilise `dir` ?
Rétablissez la situation. _(avancé)_

> [!check]+ Réponse C4
>
> ```powershell
> New-Alias -Name dir -Value Get-Process -Force
> dir      # affiche maintenant les processus !
> ```
>
> Tout script utilisant `dir` dans cette session affiche désormais des
> **processus** au lieu de fichiers — sans le moindre avertissement.
>
> Rétablissement :
>
> ```powershell
> Remove-Item Alias:\dir -Force
> ```

> 📘 **À comprendre**
> C'est **la** raison de ne pas utiliser d'alias dans un script partagé : un alias
> peut être **redéfini** par un profil utilisateur ou par un script chargé avant
> le vôtre. Votre code fait alors silencieusement autre chose que prévu.
>
> ⚠️ Sur PowerShell **5.1**, `Remove-Alias` n'existe pas : utilisez
> `Remove-Item Alias:\np`.

---

## Mission finale D : le rapport bilingue 📋

**D1.** Lister les fichiers de `C:\Windows` — version terrain et version officielle.
**D2.** Afficher le dossier courant — les deux versions.
**D3.** Effacer l'écran — les deux versions.

> [!check]+ Réponse D1 · D2 · D3
>
> | Besoin                          | Version terrain  | Version rapport officiel         |
> | ------------------------------- | ---------------- | -------------------------------- |
> | **D1** Fichiers de `C:\Windows` | `dir C:\Windows` | `Get-ChildItem -Path C:\Windows` |
> | **D2** Dossier courant          | `pwd`            | `Get-Location`                   |
> | **D3** Effacer l'écran          | `cls`            | `Clear-Host`                     |

**D4.** Laquelle mettriez-vous dans un script partagé ? Donnez **trois** raisons.

> [!check]+ Réponse D4
> La version **noms complets**. Trois raisons :
>
> 1. **Lisibilité** — un collègue comprend sans deviner ;
> 2. **Fiabilité** — un alias peut être redéfini (cf. C4), le nom complet non ;
> 3. **Portabilité** — `ls` n'a pas le même comportement selon l'OS et le shell.

**D5.** Réécrivez ce script en noms complets. _(avancé)_

```powershell
gci C:\Logs | ? { $_.Length -gt 1mb } | % { $_.Name }
```

> [!check]+ Réponse D5
>
> ```powershell
> Get-ChildItem -Path "C:\Logs" |
>     Where-Object { $_.Length -gt 1MB } |
>     ForEach-Object { $_.Name }
> ```

> 📘 **À comprendre**
> La règle tient en une phrase : **les alias sont pour vos doigts, les noms
> complets pour vos collègues.**
>
> En console interactive, tapez `dir`, `ls`, `%`, `?` autant que vous voulez.
> Dès que ça part dans un fichier `.ps1` destiné à durer ou à être lu, écrivez
> les noms complets. Le passage à la ligne après chaque `|` améliore encore
> nettement la lisibilité.

---

> [!success] Validation
>
> - Vous savez retrouver la cmdlet derrière un alias, et l'inverse
> - Vous savez créer et supprimer un alias
> - Vous savez que les alias créés sont **temporaires**
> - Vous savez qu'un alias peut être **détourné**, et pourquoi c'est un risque
> - Vous savez réécrire un script en noms complets

---

## Ce qu'il faut retenir

| Commande                         | Rôle                               |
| -------------------------------- | ---------------------------------- |
| `Get-Alias`                      | lister tous les alias              |
| `Get-Alias <alias>`              | quelle cmdlet derrière cet alias ? |
| `Get-Alias -Definition <cmdlet>` | quels alias pour cette cmdlet ?    |
| `New-Alias -Name x -Value cmd`   | créer un alias (temporaire)        |
| `Remove-Alias -Name x`           | le supprimer (PS 7)                |
| `Remove-Item Alias:\x`           | le supprimer (PS 5.1 et 7)         |

**Les alias sont pour tes doigts. Les noms complets sont pour tes collègues.**
