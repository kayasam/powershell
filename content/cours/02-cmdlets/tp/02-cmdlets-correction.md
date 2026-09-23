---
title: "Correction 02 - Les Outils de la Marine"
publier: true
parcours-tssr: true
parcours-pro: true
---

# Correction - Exercice 02 : Les Outils de la Marine 🌊

> Chapitre associé : [[cours/02-cmdlets/02-cmdlets]]
> Énoncé de la version [[02-cmdlets-avance|avancée]], **réponse sous chaque
> question**. Les questions non marquées _(avancé)_ figurent aussi dans la
> version [[02-cmdlets-debutant|débutant]].
>
> ⚠️ Les chiffres ci-dessous varient d'un poste à l'autre : ce sont des ordres
> de grandeur.
>
> 💡 Les blocs verts se **replient** : cliquez sur le titre pour masquer une
> réponse pendant la séance.

## Contexte

Vous venez d'intégrer le **Bureau d'Analyse de la Marine**. Votre supérieur vous
remet votre premier outil : PowerShell.

> _"Un Marine qui ne connaît pas ses outils est un Marine inutile."_ — Vice-Amiral Tsuru

**Durée : 30 min**

## Objectif

Savoir chercher une commande sans la connaître, lire son aide, et inspecter ce
qu'elle renvoie.

---

## Partie A : Trouver les outils (10 min)

Trouvez la cmdlet qui permet de chercher toutes les autres, puis répondez :

**A1.** Combien de commandes votre poste propose-t-il ?

> [!check]+ Réponse A1
>
> ```powershell
> Get-Command
> (Get-Command).Count
> ```
>
> Environ **3 000**. Sur le poste de référence : `3079`.

**A2.** Combien de commandes pour les verbes `Get`, `Stop` et `New` ?

> [!check]+ Réponse A2
>
> ```powershell
> (Get-Command -Verb Get).Count
> (Get-Command -Verb Stop).Count
> (Get-Command -Verb New).Count
> ```
>
> | Verbe  | Nombre |
> | ------ | ------ |
> | `Get`  | 854    |
> | `New`  | 208    |
> | `Stop` | 29     |

**A3.** Quel verbe a le plus de commandes associées ? Établissez le classement des
trois premiers, avec leur nombre.

> [!check]+ Réponse A3
> `Get`, très largement.
>
> ```powershell
> Get-Command | Group-Object Verb | Sort-Object Count -Descending | Select-Object -First 3
> ```
>
> | Nombre | Verbe    |
> | ------ | -------- |
> | 818    | `Get`    |
> | 449    | `Set`    |
> | 330    | `Remove` |
>
> 💡 `Group-Object` et `Sort-Object` sont vus au chapitre 09 : ici on s'en sert
> comme d'un outil, sans détailler.

**A4.** Quelles commandes existent pour le nom `Process` ? Devinez leur rôle.

> [!check]+ Réponse A4
>
> ```powershell
> Get-Command -Noun Process
> ```
>
> | Commande        | Rôle devinable            |
> | --------------- | ------------------------- |
> | `Get-Process`   | lister les processus      |
> | `Start-Process` | en démarrer un            |
> | `Stop-Process`  | en arrêter un             |
> | `Wait-Process`  | attendre qu'il se termine |
> | `Debug-Process` | y attacher un débogueur   |

**A5.** Combien de commandes parlent de `Service` ?

> [!check]+ Réponse A5
>
> ```powershell
> (Get-Command *Service*).Count
> ```
>
> **43** sur le poste de référence.

**A6.** Quels **types** de commandes cette cmdlet renvoie-t-elle ? Donnez leur
nombre respectif. _(avancé)_

> [!check]+ Réponse A6
>
> ```powershell
> Get-Command | Group-Object CommandType | Sort-Object Count -Descending
> ```
>
> | Nombre | Type       |
> | ------ | ---------- |
> | 1843   | `Function` |
> | 1119   | `Cmdlet`   |
> | 117    | `Alias`    |

> 📘 **À comprendre**
> Toutes les commandes suivent le motif **Verbe-Nom**. C'est ce qui rend la
> recherche possible : on cherche par action (`-Verb`) ou par sujet (`-Noun`).
>
> Une **Cmdlet** est compilée et livrée par Microsoft. Une **Function** est écrite
> en PowerShell — beaucoup de modules récents en sont faits. Un **Alias** n'est
> qu'un raccourci vers l'une des deux.
>
> Retenez le réflexe : on ne mémorise pas 3 000 commandes, **on sait les chercher**.

---

## Partie B : Lire le manuel (10 min)

Trouvez la cmdlet qui affiche l'aide d'une commande.

**B1.** Comment obtenir uniquement des **exemples** d'utilisation ? Exécutez-en deux.

> [!check]+ Réponse B1
>
> ```powershell
> Get-Help Get-Process -Examples
> ```
>
> Les exemples typiques de `Get-Process` :
>
> ```powershell
> Get-Process                 # tous les processus
> Get-Process -Name explorer  # un processus précis
> ```

**B2.** Quel paramètre de `Get-Process` permet de filtrer par **nom** ?

> [!check]+ Réponse B2
> `-Name`.
>
> ```powershell
> Get-Process -Name explorer
> ```

**B3.** Quel paramètre permet d'interroger une machine **distante** ?

> [!check]+ Réponse B3
> `-ComputerName`.

**B4.** L'aide affichée est-elle complète sur votre poste ? Sinon, quelle commande
la télécharge, et que faire sans accès Internet ? _(avancé)_

> [!check]+ Réponse B4
> Souvent **non** : PowerShell n'installe qu'une aide minimale. Le signe : la
> description est vide ou très courte.
>
> ```powershell
> Update-Help                    # télécharge l'aide complète (admin + Internet)
> Get-Help Get-Process -Online   # ouvre la documentation dans le navigateur
> ```
>
> Sans accès Internet sur la machine cible : `Save-Help` depuis un poste connecté,
> puis `Update-Help -SourcePath` depuis le dossier récupéré.

> 📘 **À comprendre**
> Les niveaux d'aide à retenir :
>
> | Paramètre   | Ce qu'il donne                                             |
> | ----------- | ---------------------------------------------------------- |
> | _(aucun)_   | résumé et syntaxe                                          |
> | `-Examples` | commandes prêtes à copier — **le plus utile au quotidien** |
> | `-Detailed` | chaque paramètre décrit un par un                          |
> | `-Online`   | la page web officielle, toujours à jour                    |
>
> Réflexe à prendre : devant une commande inconnue, `-Examples` d'abord.

---

## Partie C : Inspecter un objet (10 min)

Trouvez la cmdlet qui liste les propriétés et méthodes d'un objet.

**C1.** Quel est le type exact de ce que renvoie `Get-Process` ?

> [!check]+ Réponse C1
>
> ```powershell
> Get-Process | Get-Member
> ```
>
> `System.Diagnostics.Process` — indiqué par la ligne `TypeName` tout en haut.

**C2.** Combien de propriétés un processus a-t-il ? Combien de méthodes ?

> [!check]+ Réponse C2
>
> ```powershell
> (Get-Process | Get-Member -MemberType Property).Count
> (Get-Process | Get-Member -MemberType Method).Count
> ```
>
> | Type de membre       | Nombre |
> | -------------------- | ------ |
> | Propriétés           | 52     |
> | Méthodes             | 19     |
> | Total (tous membres) | 94     |

**C3.** Pour un service et pour une date, notez trois propriétés utiles.

> [!check]+ Réponse C3
>
> ```powershell
> Get-Service | Get-Member
> Get-Date    | Get-Member
> ```
>
> | Objet         | Propriétés utiles                            |
> | ------------- | -------------------------------------------- |
> | `Get-Service` | `DisplayName`, `Status`, `DependentServices` |
> | `Get-Date`    | `Day`, `DayOfWeek`, `Hour`                   |

**C4.** Quelle différence entre une **propriété** et une **méthode** ? À quoi les
reconnaît-on à l'écrit ? _(avancé)_

> [!check]+ Réponse C4
> Une **propriété** est une donnée que porte l'objet. Une **méthode** est une
> action qu'il sait faire. À l'écrit, la méthode prend des **parenthèses** :
>
> ```powershell
> $nom = "Luffy"
> $nom.Length        # propriété -> 5
> $nom.ToUpper()     # méthode   -> LUFFY
> ```

> 📘 **À comprendre**
> C'est le point de bascule de PowerShell : une commande ne renvoie pas du texte,
> elle renvoie un **objet**. L'affichage en tableau n'est qu'une photo de cet objet.
>
> `Get-Process` montre 8 colonnes à l'écran, mais l'objet en porte **52**.
> `Get-Member` révèle tout ce qui est disponible — c'est votre catalogue.
>
> Le réflexe : devant un résultat inconnu, `| Get-Member` avant toute chose.

---

## Mission finale D : rapport d'espionnage 🏴‍☠️

**D1.** Affichez les processus actifs avec leur nom, leur identifiant et leur
mémoire utilisée.

> [!check]+ Réponse D1
>
> ```powershell
> Get-Process | Format-Table Name, Id, WorkingSet -AutoSize
> ```

**D2.** Faites la même chose sur les services, avec nom, statut et nom affiché.

> [!check]+ Réponse D2
>
> ```powershell
> Get-Service | Format-Table Name, Status, DisplayName -AutoSize
> ```

**D3.** N'affichez que les 5 premiers résultats.

> [!check]+ Réponse D3
>
> ```powershell
> Get-Process | Select-Object -First 5 | Format-Table Name, Id, WorkingSet -AutoSize
> ```

**D4.** À l'aide de `Get-Member`, trouvez la propriété qui donne le **chemin de
l'exécutable** d'un processus, puis affichez nom et chemin pour les 5 premiers.
_(avancé)_

> [!check]+ Réponse D4
> On cherche d'abord dans le catalogue :
>
> ```powershell
> Get-Process | Get-Member -MemberType Property
> ```
>
> La propriété s'appelle **`Path`** :
>
> ```powershell
> Get-Process | Select-Object -First 5 | Format-Table Name, Path -AutoSize
> ```
>
> ⚠️ Certains processus système renvoient un `Path` vide : ce sont ceux auxquels
> votre compte n'a pas accès. Relancez la console en administrateur pour les voir.

> 📘 **À comprendre**
> **L'ordre du pipeline raconte une phrase** : récupérer → choisir → afficher.
>
> `Format-Table` doit être **en dernier**. Après lui, on ne peut plus rien trier
> ni filtrer : il ne renvoie plus des processus mais des instructions d'affichage.
>
> `WorkingSet` est en **octets**. Pour l'exprimer en mégaoctets, `1MB` est compris
> nativement par PowerShell : `$p.WorkingSet / 1MB`, inutile d'écrire `1048576`.

---

> [!success] Validation
>
> - Vous savez chercher une commande avec la cmdlet dédiée
> - Vous savez lire l'aide et en tirer un exemple utilisable
> - Vous savez explorer un objet inconnu
> - Vous distinguez propriété et méthode
> - Vous savez trouver une propriété utile et l'afficher en colonne

---

## Ce qu'il faut retenir

| Commande                          | Rôle                                            |
| --------------------------------- | ----------------------------------------------- |
| `Get-Command`                     | trouver une commande (`-Verb`, `-Noun`, jokers) |
| `Get-Help <cmd> -Examples`        | des exemples prêts à copier                     |
| `Get-Help <cmd> -Online`          | la documentation officielle                     |
| `<cmd> \| Get-Member`             | catalogue des propriétés et méthodes            |
| `Get-Member -MemberType Property` | filtrer le catalogue                            |
| `(<cmd>).Count`                   | compter un résultat                             |

**Le trio de survie : `Get-Command` pour trouver, `Get-Help` pour comprendre, `Get-Member` pour explorer.**
