---
title: Correction 01 - L'Équipement de la Recrue
publier: true
parcours-tssr: false
parcours-pro: false
---

# Correction - Exercice 01 : L'Équipement de la Recrue 🎖️

> Chapitre associé : [[cours/01-installation-et-environnement/01-installation-et-environnement]]
> Énoncé de la version [[01-installation-avance|avancée]], **réponse sous chaque
> question**. Les questions non marquées _(avancé)_ figurent aussi dans la
> version [[01-installation-debutant|débutant]].
>
> 💡 Les blocs verts se **replient** : cliquez sur le titre pour masquer une
> réponse pendant la séance.

## Contexte

Avant d'embarquer, toute recrue passe à l'armurerie : on vérifie son équipement,
on s'assure qu'il est de la bonne génération, et qu'il est autorisé à servir.

> _"Une arme qu'on n'a pas vérifiée est une arme qui trahit."_ — Vice-Amiral Garp

**Durée : 20 min**

## Objectif

Vérifier que PowerShell est correctement installé, identifier sa version, et
autoriser l'exécution de vos futurs scripts.

---

## Partie A : Identifier son équipement (5 min)

Trouvez la variable automatique qui contient toutes les informations de version
de PowerShell, puis répondez :

**A1.** Quelle version de PowerShell utilisez-vous ?

> [!check]+ Réponse A1
>
> ```powershell
> $PSVersionTable
> ```
>
> ```
> Name                           Value
> ----                           -----
> PSVersion                      7.6.6
> PSEdition                      Core
> GitCommitId                    7.6.6
> OS                             Microsoft Windows 10.0.26200
> Platform                       Win32NT
> ```
>
> `7.6.6` — donnée par la ligne `PSVersion`.
>
> Pour n'obtenir que cette information :
>
> ```powershell
> $PSVersionTable.PSVersion
> ```

**A2.** Quelle est votre édition : `Core` ou `Desktop` ?

> [!check]+ Réponse A2
>
> ```powershell
> $PSVersionTable.PSEdition
> ```
>
> `Core`.

**A3.** Sur quel système d'exploitation êtes-vous ?

> [!check]+ Réponse A3
> `Microsoft Windows 10.0.26200`, donné par la ligne `OS`.

> 📘 **À comprendre**
> `$PSVersionTable` est une **variable automatique** : PowerShell la remplit tout
> seul au démarrage. C'est une table de hachage, d'où l'affichage en deux colonnes
> `Name` / `Value`.
>
> `Core` signifie PowerShell 7 (moderne, multiplateforme). `Desktop` signifie
> Windows PowerShell 5.1 (ancien, Windows uniquement). C'est **le** réflexe pour
> savoir dans quelle console on se trouve.

---

## Partie B : Les deux générations (5 min)

Windows embarque **deux** PowerShell différents. Ouvrez-les tous les deux depuis
le menu Démarrer et relevez la version dans chacun.

**B1.** Quelle version affiche la console bleue ? Et la noire ?

> [!check]+ Réponse B1
>
> ```powershell
> $PSVersionTable.PSVersion
> ```
>
> | Console                    | Version relevée  |
> | -------------------------- | ---------------- |
> | Windows PowerShell (bleue) | `5.1.26100.9444` |
> | PowerShell 7 (noire)       | `7.6.6`          |

**B2.** Pourquoi les deux cohabitent-elles sur la même machine ?

> [!check]+ Réponse B2
> Parce que **PowerShell 7 ne remplace pas 5.1** : il s'installe à côté. Des
> scripts anciens et certains modules Windows ne fonctionnent que sous 5.1.
> Microsoft a donc choisi de garder les deux plutôt que de casser l'existant.

**B3.** Où sont installés leurs exécutables respectifs ? _(avancé)_

> [!check]+ Réponse B3
>
> | Version                | Exécutable                                                  |
> | ---------------------- | ----------------------------------------------------------- |
> | Windows PowerShell 5.1 | `C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe` |
> | PowerShell 7           | `C:\Program Files\PowerShell\7\pwsh.exe`                    |
>
> Installation de PowerShell 7 si absent :
>
> ```powershell
> winget install --id Microsoft.PowerShell --source winget
> ```

> 📘 **À comprendre**
> Retenez les deux noms d'exécutables : **`powershell.exe`** = 5.1,
> **`pwsh.exe`** = 7. Cette distinction resservira pour les tâches planifiées.
>
> Conséquence pratique : les deux versions ont des dossiers de modules **et** de
> profils séparés. Un module installé dans l'une n'est pas visible dans l'autre.

---

## Partie C : Le droit d'exécuter (5 min)

Par défaut, Windows bloque l'exécution des scripts `.ps1`.

**C1.** Affichez la politique d'exécution actuellement appliquée. Laquelle est-ce ?

> [!check]+ Réponse C1
>
> ```powershell
> Get-ExecutionPolicy
> ```
>
> Sur un poste neuf, c'est en général `Restricted` ou `RemoteSigned`.

**C2.** Affichez le détail **par portée**. Quelle portée impose la valeur effective ?

> [!check]+ Réponse C2
>
> ```powershell
> Get-ExecutionPolicy -List
> ```
>
> ```
>         Scope ExecutionPolicy
>         ----- ---------------
> MachinePolicy       Undefined
>    UserPolicy       Undefined
>       Process          Bypass
>   CurrentUser       Undefined
>  LocalMachine    RemoteSigned
> ```
>
> C'est la **première portée définie** en lisant le tableau **de haut en bas**.
> Ici `Process` vaut `Bypass` : c'est elle qui s'applique. Les portées à
> `Undefined` sont ignorées.

**C3.** Autorisez vos propres scripts locaux, pour votre compte uniquement, sans
toucher au réglage de la machine. Vérifiez que la valeur a changé.

> [!check]+ Réponse C3
>
> ```powershell
> Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
> Get-ExecutionPolicy -List
> ```
>
> La ligne **`CurrentUser`** passe de `Undefined` à `RemoteSigned`.

**C4.** Citez les cinq portées, de la plus prioritaire à la moins prioritaire.
_(avancé)_

> [!check]+ Réponse C4
>
> ```
> MachinePolicy  →  UserPolicy  →  Process  →  CurrentUser  →  LocalMachine
> ```

> 📘 **À comprendre**
> C'est **la** source de confusion du sujet : « j'ai changé la politique et rien
> n'a changé ». Les deux premières portées sont posées par **stratégie de groupe**
> en entreprise : elles écrasent tout ce que vous faites en local.
>
> | Politique      | Effet                                           |
> | -------------- | ----------------------------------------------- |
> | `Restricted`   | aucun script (défaut Windows client)            |
> | `RemoteSigned` | scripts locaux OK, scripts téléchargés à signer |
> | `AllSigned`    | tout script doit être signé                     |
> | `Bypass`       | tout passe, sans avertissement                  |
>
> ⚠️ Ce n'est **pas** une sécurité : un simple `-ExecutionPolicy Bypass` au
> lancement la contourne. C'est un garde-fou contre le double-clic accidentel.

---

## Partie D : Premières commandes (5 min)

Sans qu'on vous les donne, trouvez les commandes qui affichent la date et l'heure,
le dossier courant, et les cinq premiers processus en cours.

**D1.** Que renvoie la commande du dossier courant ?

> [!check]+ Réponse D1
>
> ```powershell
> Get-Date
> Get-Location
> ```
>
> `Get-Location` renvoie le **dossier courant** de la console — l'équivalent de
> `pwd` sous Linux, ou de `cd` sans argument sous CMD.

**D2.** Comment avez-vous limité l'affichage aux cinq premiers processus ?

> [!check]+ Réponse D2
>
> ```powershell
> Get-Process | Select-Object -First 5
> ```
>
> `Select-Object -First 5` ne garde que les **5 premiers** objets. Sans elle, la
> liste complète des processus défile à l'écran.

**D3.** Quelle cmdlet sert à chercher les autres commandes ? Donnez deux façons
de s'en servir. _(avancé)_

> [!check]+ Réponse D3
> `Get-Command` :
>
> ```powershell
> Get-Command *date*                      # par motif de nom
> Get-Command -Verb Get -Noun Process     # par verbe et par nom
> ```

> 📘 **À comprendre**
> Le caractère `|` est le **pipeline** : il passe le résultat de gauche à la
> commande de droite. C'est le mécanisme central de PowerShell, vu en détail au
> chapitre 09.
>
> Retenez dès maintenant `Get-Command` : c'est la commande qui sert à trouver
> toutes les autres.

---

## Mission finale E : votre premier script 🏴‍☠️

**E1.** Créez un fichier `bonjour-marine.ps1` dans votre dossier Documents,
**en ligne de commande**.

> [!check]+ Réponse E1
>
> ```powershell
> New-Item -Path "$env:USERPROFILE\Documents\bonjour-marine.ps1" -ItemType File -Force
> notepad "$env:USERPROFILE\Documents\bonjour-marine.ps1"
> ```

**E2.** Faites-lui afficher votre nom de recrue et la date du jour au format
`JJ/MM/AAAA`.

> [!check]+ Réponse E2
> Contenu du script :
>
> ```powershell
> $nom = "Monkey D. Luffy"
> Write-Host "Recrue $nom, engagee le $(Get-Date -Format 'dd/MM/yyyy')"
> ```

**E3.** Exécutez-le depuis la console.

> [!check]+ Réponse E3
>
> ```powershell
> & "$env:USERPROFILE\Documents\bonjour-marine.ps1"
> ```
>
> Résultat attendu :
>
> ```
> Recrue Monkey D. Luffy, engagee le 14/09/2026
> ```

**E4.** Faites-lui afficher en plus le nom de la machine et la version de
PowerShell qui l'exécute. _(avancé)_

> [!check]+ Réponse E4
>
> ```powershell
> $nom = "Monkey D. Luffy"
> Write-Host "Recrue $nom, engagee le $(Get-Date -Format 'dd/MM/yyyy')"
> Write-Host "Poste   : $env:COMPUTERNAME"
> Write-Host "Console : PowerShell $($PSVersionTable.PSVersion)"
> ```

**E5.** Si le script est refusé, identifiez la cause exacte et corrigez-la.
Quelles sont les **deux** causes possibles, et comment trancher entre elles ?
_(avancé)_

> [!check]+ Réponse E5
> Message typique :
>
> ```
> ... ne peut pas être chargé car l'exécution de scripts est désactivée sur ce système.
> ```
>
> | Cause                                     | Correction         |
> | ----------------------------------------- | ------------------ |
> | La politique d'exécution est trop stricte | revoir la partie C |
> | Le fichier porte la **marque du web**     | `Unblock-File`     |
>
> Pour trancher entre les deux :
>
> ```powershell
> Get-Item "$env:USERPROFILE\Documents\bonjour-marine.ps1" -Stream Zone.Identifier -ErrorAction SilentlyContinue
> ```
>
> - S'il renvoie quelque chose → c'est la **marque du web** :
>
> ```powershell
> Unblock-File "$env:USERPROFILE\Documents\bonjour-marine.ps1"
> ```
>
> - S'il ne renvoie rien → c'est la **politique d'exécution**.

> 📘 **À comprendre**
> Trois points méritent l'attention :
>
> - **`$env:USERPROFILE`** est une variable d'environnement : elle évite d'écrire
>   en dur `C:\Users\votre-nom`, donc le script marche sur n'importe quel poste.
> - **`$( )` dans une chaîne** permet d'insérer le résultat d'une commande.
>   `"le $(Get-Date)"` fonctionne, `"le Get-Date"` afficherait le texte brut.
> - **`&`** est l'opérateur d'appel : il exécute le chemin qui suit. On peut aussi
>   écrire `.\bonjour-marine.ps1` si on est déjà dans le bon dossier — le `.\`
>   est obligatoire, PowerShell refuse d'exécuter un script du dossier courant sans lui.

---

> [!success] Validation
>
> - Vous savez afficher votre version de PowerShell
> - Vous distinguez Windows PowerShell 5.1 de PowerShell 7
> - Vous savez lire la politique d'exécution par portée et la modifier au bon niveau
> - Vous avez créé et exécuté un premier script `.ps1`
> - Vous savez retrouver une commande sans la connaître à l'avance

---

## Ce qu'il faut retenir

| Commande                                              | Rôle                                      |
| ----------------------------------------------------- | ----------------------------------------- |
| `$PSVersionTable`                                     | version et édition de la console courante |
| `Get-ExecutionPolicy -List`                           | politique d'exécution, par portée         |
| `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser` | autoriser ses propres scripts             |
| `Get-Command`                                         | trouver une commande                      |
| `.\script.ps1` ou `& "chemin"`                        | exécuter un script                        |
| `Unblock-File`                                        | retirer la marque d'un fichier téléchargé |

**`powershell.exe` = 5.1 · `pwsh.exe` = 7** — à ne plus jamais confondre.
