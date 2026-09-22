---
title: "Correction 04 - Le Reflexe Tab"
publier: true
parcours-tssr: true
parcours-pro: true
---

# Correction - Exercice 04 : Le Reflexe Tab ⚡

> Chapitre associé : [[04-completion/04-completion]]
> Énoncé de la version [[04-completion-avance|avancée]], **réponse sous chaque
> question**. Les questions non marquées _(avancé)_ figurent aussi dans la
> version [[04-completion-debutant|débutant]].
>
> 💡 Les blocs verts se **replient** : cliquez sur le titre pour masquer une
> réponse pendant la séance.

## Contexte

La Marine a des centaines de commandes à saisir chaque jour. Les meilleurs agents
ne tapent pas tout — ils laissent la console finir à leur place.

> _"La vitesse, c'est aussi une forme de puissance."_ — Kizaru

**Durée : 15 min**

## Objectif

Ne plus jamais écrire un nom de cmdlet en entier, et savoir régler la complétion.

---

## Partie A : Compléter les cmdlets (5 min)

**A1.** Trouvez 5 cmdlets en utilisant uniquement Tab. Lesquelles ?

> [!check]+ Réponse A1
>
> ```powershell
> Get-Proc<Tab>      # Get-Process
> Get-Ser<Tab>       # Get-Service
> Get-Ch<Tab>        # Get-ChildItem, puis re-Tab pour les suivantes
> ```
>
> Par exemple : `Get-Process`, `Get-Service`, `Get-ChildItem`, `Get-Command`,
> `Get-Content`. Toute liste obtenue au Tab est valable — c'est le geste qui compte.

**A2.** Que se passe-t-il si vous appuyez **plusieurs fois** sur Tab ? Et comment
revenir en arrière ?

> [!check]+ Réponse A2
> Les propositions **défilent** une à une, dans l'ordre alphabétique.
> **Shift+Tab** revient à la précédente.

**A3.** Le mode par défaut fait défiler les propositions une à une. Il existe un
mode qui affiche un **menu**. Trouvez comment l'activer. _(avancé)_

> [!check]+ Réponse A3
>
> ```powershell
> Set-PSReadLineKeyHandler -Key Tab -Function MenuComplete
> ```
>
> Au lieu de défiler, Tab affiche alors **toutes** les propositions sous forme de
> grille navigable aux flèches.
>
> Pour le rendre permanent, il faut le placer dans le profil (chapitre 25) :
>
> ```powershell
> notepad $PROFILE
> ```

> 📘 **À comprendre**
> **Tab est votre meilleur ami.** À partir de maintenant, on ne tape plus jamais
> un nom complet : c'est plus rapide, et surtout ça **évite les fautes de frappe**,
> première cause d'erreur chez les débutants.
>
> La complétion est assurée par le module **PSReadLine**, livré avec PowerShell 7.
> C'est lui qui gère aussi l'historique, la coloration syntaxique et les raccourcis.

---

## Partie B : Compléter les paramètres (5 min)

**B1.** Utilisez Tab pour découvrir les paramètres de `Get-Process`. Citez-en cinq.

> [!check]+ Réponse B1
>
> ```powershell
> Get-Process -N<Tab>     # -Name
> Get-Service -D<Tab>     # -DependentServices, -DisplayName...
> ```
>
> `-Name`, `-Id`, `-InputObject`, `-IncludeUserName`, `-Module`,
> `-FileVersionInfo`… sans compter les paramètres communs (`-Verbose`, `-Debug`,
> `-ErrorAction`…).

**B2.** La complétion propose-t-elle aussi les **valeurs** possibles ? Testez sur
un nom de service, puis sur `Set-ExecutionPolicy`.

> [!check]+ Réponse B2
> **Oui.**
>
> ```powershell
> Get-Service -Name <Tab>        # propose les services réellement présents
> Set-ExecutionPolicy <Tab>      # propose Restricted, RemoteSigned, AllSigned...
> ```

**B3.** Qu'est-ce que cela implique sur ce que PowerShell fait pendant que vous
tapez ? _(avancé)_

> [!check]+ Réponse B3
> Que PowerShell **interroge réellement le système** pendant que vous tapez : pour
> proposer les noms de services, il doit les lister. C'est pourquoi la complétion
> peut marquer un temps d'arrêt sur une commande coûteuse ou une machine distante.

> 📘 **À comprendre**
> Même les paramètres se complètent : **inutile de les retenir par cœur**.
> En cas de doute, tapez le tiret et appuyez sur Tab.
>
> Retenez que la complétion connaît trois choses : les **noms** de commandes,
> les **noms** de paramètres, et parfois leurs **valeurs**.

---

## Partie C : Compléter les chemins (5 min)

**C1.** Naviguez jusqu'à `C:\Windows\System32` en utilisant uniquement Tab.

> [!check]+ Réponse C1
>
> ```
> cd C:\Win<Tab>Sys<Tab>
> ```
>
> Deux ou trois appuis suffisent. S'il y a plusieurs candidats
> (`Program Files` / `Program Files (x86)`), Tab les fait défiler.

**C2.** Que se passe-t-il si le début du chemin n'existe pas ?

> [!check]+ Réponse C2
> **Rien** : la complétion ne propose rien. C'est un bon signal — cela veut dire
> que ce que vous avez tapé est déjà faux. Vérifiez avant d'insister.

**C3.** Établissez ce tableau en testant chaque cas. _(avancé)_

> [!check]+ Réponse C3
>
> | Situation           | Complétion                     |
> | ------------------- | ------------------------------ |
> | Nom de cmdlet       | ✅                             |
> | Nom de paramètre    | ✅                             |
> | Valeur de paramètre | ✅ _(si la cmdlet la déclare)_ |
> | Chemin existant     | ✅                             |
> | Chemin inexistant   | ❌                             |
> | Nom de variable     | ✅ _(`$maVar<Tab>`)_           |

> 📘 **À comprendre**
> La complétion de chemin navigue dans l'arborescence réelle. Elle fonctionne
> aussi sur les autres **PSDrives** : essayez `cd HKCU:\Soft<Tab>` — le registre
> se complète comme un disque (chapitre 18).

---

## Mission finale D : zéro faute de frappe 🏆

Sans jamais taper un nom complet :

**D1.** La liste des processus nommés `explorer`.

> [!check]+ Réponse D1
>
> ```powershell
> Get-Process -Name explorer
> ```

**D2.** Le contenu de `C:\Windows\System32\drivers`.

> [!check]+ Réponse D2
>
> ```powershell
> Get-ChildItem C:\Windows\System32\drivers
> ```

**D3.** Le service `Spooler` avec son statut.

> [!check]+ Réponse D3
>
> ```powershell
> Get-Service -Name Spooler
> ```

**D4.** Écrivez une fonction avec un paramètre limité à quatre valeurs au choix,
et vérifiez que Tab propose ces quatre valeurs. Quel intérêt pour l'utilisateur ?
_(avancé)_

> [!check]+ Réponse D4
>
> ```powershell
> function Set-NiveauAlerte {
>     param(
>         [ValidateSet('INFO','WARN','ERREUR','CRITIQUE')]
>         [string]$Niveau
>     )
>     "Niveau defini : $Niveau"
> }
>
> Set-NiveauAlerte -Niveau <Tab>
> ```
>
> Tab propose alors exactement : `INFO`, `WARN`, `ERREUR`, `CRITIQUE`.
>
> **Intérêt pour l'utilisateur** : il n'a rien à deviner ni à mémoriser, et une
> valeur hors liste est refusée avec un message clair — l'erreur est impossible.

> 📘 **À comprendre**
> `[ValidateSet(...)]` fait **deux** choses d'un coup : il valide la saisie _et_
> il alimente la complétion. C'est gratuit, et ça transforme l'expérience de
> celui qui utilise votre fonction. Revu en détail au chapitre 22.

---

> [!success] Validation
>
> - Vous utilisez **Tab** systématiquement pour compléter
> - Vous savez que Tab fonctionne sur cmdlets, paramètres, valeurs et chemins
> - Vous savez activer le mode menu de PSReadLine
> - Vous savez qu'un attribut de validation alimente la complétion

---

## Ce qu'il faut retenir

| Touche / commande                                          | Effet                                          |
| ---------------------------------------------------------- | ---------------------------------------------- |
| **Tab**                                                    | compléter, ou passer à la proposition suivante |
| **Shift+Tab**                                              | proposition précédente                         |
| `Set-PSReadLineKeyHandler -Key Tab -Function MenuComplete` | mode menu                                      |
| `[ValidateSet(...)]`                                       | limiter les valeurs **et** les proposer au Tab |

**Tab fonctionne sur : cmdlets · paramètres · valeurs · chemins · variables.**
Si rien n'est proposé, c'est que ce que vous avez tapé est déjà faux.
