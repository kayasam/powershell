---
title: "Correction 06 - Le Journal de Bord du Terminal"
publier: true
parcours-tssr: true
parcours-pro: true
---

# Correction - Exercice 06 : Le Journal de Bord du Terminal 📜

> Chapitre associé : [[cours/06-historique/06-historique]]
> Énoncé de la version [[06-historique-avance|avancée]], **réponse sous chaque
> question**. Les questions non marquées _(avancé)_ figurent aussi dans la
> version [[06-historique-debutant|débutant]].
>
> 💡 Les blocs verts se **replient** : cliquez sur le titre pour masquer une
> réponse pendant la séance.

## Contexte

Tout ce que vous tapez est consigné. Un agent efficace ne retape jamais deux fois
la même commande : il la retrouve.

> _"Ce qui est écrit reste."_ — Nico Robin

**Durée : 15 min**

## Objectif

Ne plus jamais perdre une commande déjà écrite, et savoir où PowerShell la range.

---

## Partie A : Naviguer avec les flèches (3 min)

**A1.** Remontez jusqu'à une ancienne commande, modifiez-la, réexécutez-la.
Que se passe-t-il pour l'originale ?

> [!check]+ Réponse A1
> Elle reste **intacte** dans l'historique. La version modifiée s'ajoute comme une
> **nouvelle** entrée, à la fin. L'historique ne se réécrit jamais.

> 📘 **À comprendre**
> Les flèches ↑ et ↓ sont fournies par **PSReadLine**, le même module que la
> complétion Tab du chapitre 04. Le comportement est identique à un terminal Linux.
>
> On peut modifier la ligne rappelée avant de valider : c'est le moyen le plus
> rapide de corriger une faute de frappe sans tout retaper.

---

## Partie B : Afficher l'historique (4 min)

Trouvez la cmdlet qui affiche l'historique de la session.

**B1.** Combien de commandes avez-vous tapées depuis l'ouverture de la console ?

> [!check]+ Réponse B1
>
> ```powershell
> Get-History
> (Get-History).Count
> ```
>
> Le nombre dépend de votre session. Sur une console fraîchement ouverte où vous
> avez tapé 8 commandes, vous obtenez `8`.

**B2.** À quoi sert la colonne `Id` ?

> [!check]+ Réponse B2
> C'est le **numéro de la commande** dans la session. Il sert à la relancer sans
> la retaper (partie C).

**B3.** Quelles autres propriétés porte un élément d'historique ? Citez-en trois.
_(avancé)_

> [!check]+ Réponse B3
>
> ```powershell
> Get-History | Select-Object -First 1 | Get-Member -MemberType Property
> ```
>
> | Propriété            | Contenu                            |
> | -------------------- | ---------------------------------- |
> | `Id`                 | numéro dans la session             |
> | `CommandLine`        | le texte exact de la commande      |
> | `ExecutionStatus`    | `Completed`, `Failed`…             |
> | `StartExecutionTime` | horodatage de départ               |
> | `EndExecutionTime`   | horodatage de fin                  |
> | `Duration`           | durée d'exécution _(PowerShell 7)_ |

> 📘 **À comprendre**
> ⚠️ **`Get-History` n'enregistre que les commandes tapées interactivement.**
> Un script lancé avec `pwsh -Command "..."` ne laisse **aucune** trace dans
> `Get-History` : l'historique est un confort de frappe, pas un journal d'audit.
>
> Pour de la traçabilité réelle, il faut journaliser soi-même (chapitre 16) ou
> passer par les journaux d'événements (chapitre 18).

---

## Partie C : Réexécuter une commande (4 min)

**C1.** Relancez la commande n°3 de votre historique.

> [!check]+ Réponse C1
>
> ```powershell
> Get-History          # repérer l'Id
> Invoke-History -Id 3
> ```
>
> PowerShell affiche la commande avant de la lancer, ce qui permet de vérifier.

**C2.** Quel est l'alias d'une lettre de cette cmdlet ?

> [!check]+ Réponse C2
> `r` :
>
> ```powershell
> r 3
>
> Get-Alias -Definition Invoke-History
> # ihy, r
> ```

**C3.** Que fait cette cmdlet appelée **sans** identifiant ? _(avancé)_

> [!check]+ Réponse C3
> Elle relance la **dernière** commande exécutée. Pratique, mais surprenant quand
> on ne s'y attend pas — d'où l'intérêt de toujours préciser l'`Id`.

> 📘 **À comprendre**
> `r 3` est l'une des écritures les plus courtes de PowerShell. Très utile après
> une longue commande qu'on veut relancer telle quelle.
>
> ⚠️ Comme tout alias, `r` est à réserver à la **console interactive**. Dans un
> script, on n'écrit jamais `r` (chapitre 05).

---

## Partie D : Recherche rapide (4 min)

**D1.** Retrouvez une commande tapée il y a plusieurs minutes sans utiliser la
flèche haut. Quelle combinaison de touches ?

> [!check]+ Réponse D1
> **Ctrl+R** lance une recherche **à rebours** : tapez quelques lettres,
> PowerShell propose la dernière commande correspondante. Ctrl+R à nouveau remonte
> plus loin. **Entrée** exécute, **Échap** annule.

**D2.** En quoi est-ce plus rapide que la flèche haut ?

> [!check]+ Réponse D2
> La flèche haut remonte **une commande à la fois**. Sur 80 commandes tapées,
> c'est 80 appuis. Ctrl+R saute directement à celle qui contient le mot cherché.

**D3.** Videz l'historique de la session, puis appuyez sur flèche haut.
Que constatez-vous ? Comment l'expliquez-vous ? _(avancé)_

> [!check]+ Réponse D3
>
> ```powershell
> Clear-History
> ```
>
> Surprise : **la flèche haut fonctionne toujours**. Ce sont deux mécanismes
> distincts :
>
> | Mécanisme                 | Cmdlet / touche                | Portée                |
> | ------------------------- | ------------------------------ | --------------------- |
> | Historique de **session** | `Get-History`, `Clear-History` | la console en cours   |
> | Historique **PSReadLine** | ↑ ↓ et Ctrl+R                  | persistant sur disque |

**D4.** Où se trouve le fichier de l'historique **persistant** ? Combien de lignes
contient-il ? _(avancé)_

> [!check]+ Réponse D4
>
> ```powershell
> (Get-PSReadLineOption).HistorySavePath
> ```
>
> Sur le poste de référence :
>
> ```
> C:\Users\<vous>\AppData\Roaming\Microsoft\Windows\PowerShell\PSReadLine\ConsoleHost_history.txt
> ```
>
> Il contenait **836 lignes**. Pour le compter :
>
> ```powershell
> (Get-Content (Get-PSReadLineOption).HistorySavePath).Count
> ```

> 📘 **À comprendre**
> ⚠️ **Ce fichier est en clair et survit aux redémarrages.** Si vous tapez un mot
> de passe en ligne de commande, il y reste.
>
> Deux réflexes :
>
> - ne jamais saisir de secret en clair — utiliser `Read-Host -AsSecureString` ;
> - savoir que ce fichier existe, et le vider si nécessaire.
>
> Le nombre de commandes conservées en session se lit dans `$MaximumHistoryCount`
> (4096 par défaut).

---

## Mission finale E : défi de rapidité 🏆

**E1.** Lister les fichiers de `C:\Windows` — avec un alias.
**E2.** Afficher votre dossier actuel — avec un alias.
**E3.** Chercher une cmdlet avec le verbe `Stop` — Tab pour compléter.
**E4.** Afficher les 5 dernières lignes de votre historique.
**E5.** Effacer l'écran — avec un alias.

> [!check]+ Réponse E1 → E5
>
> | #      | Tâche                            | Commande                 |
> | ------ | -------------------------------- | ------------------------ |
> | **E1** | Fichiers de `C:\Windows` (alias) | `dir C:\Windows`         |
> | **E2** | Dossier actuel (alias)           | `pwd`                    |
> | **E3** | Cmdlets avec le verbe `Stop`     | `Get-Command -Verb Stop` |
> | **E4** | 5 dernières lignes d'historique  | `Get-History -Count 5`   |
> | **E5** | Effacer l'écran (alias)          | `cls`                    |

**E6.** Sans retaper : relancez la tâche E1 par son identifiant.

> [!check]+ Réponse E6
>
> ```powershell
> Get-History          # repérer l'Id de "dir C:\Windows"
> r 1                  # remplacer 1 par l'Id relevé
> ```

**E7.** À partir de votre historique, calculez le nombre total de commandes
exécutées et identifiez les trois plus lentes. _(avancé)_

> [!check]+ Réponse E7
>
> ```powershell
> (Get-History).Count
>
> Get-History |
>     Sort-Object Duration -Descending |
>     Select-Object -First 3 Id, CommandLine, Duration
> ```

> 📘 **À comprendre**
> Ce défi récapitule les chapitres 04, 05 et 06 : **Tab** complète, les **alias**
> raccourcissent, l'**historique** rappelle. Les trois ensemble divisent par deux
> le temps passé à taper.
>
> E7 montre autre chose : l'historique n'est pas qu'un confort, c'est une
> **collection d'objets** qu'on peut trier et filtrer comme n'importe quelle autre.

---

> [!success] Validation
>
> - Vous naviguez dans l'historique et savez le relancer par identifiant
> - Vous utilisez **Ctrl+R** pour rechercher
> - Vous distinguez historique de **session** et historique **persistant**
> - Vous savez exploiter l'historique comme une source de données

---

## Ce qu'il faut retenir

| Commande / touche                        | Rôle                                       |
| ---------------------------------------- | ------------------------------------------ |
| ↑ ↓                                      | commande précédente / suivante             |
| **Ctrl+R**                               | recherche à rebours — **le plus puissant** |
| `Get-History`                            | lister l'historique de la session          |
| `Get-History -Count 5`                   | les 5 dernières                            |
| `Invoke-History -Id 3` ou `r 3`          | relancer par identifiant                   |
| `Clear-History`                          | vider l'historique **de session**          |
| `(Get-PSReadLineOption).HistorySavePath` | fichier de l'historique persistant         |

**Tab complète, les alias raccourcissent, l'historique rappelle.**
