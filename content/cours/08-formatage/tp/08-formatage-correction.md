---
title: Correction 08 - Le Rapport pour l'Amiral
publier: true
parcours-tssr: true
parcours-pro: true
---

# Correction - Exercice 08 : Le Rapport pour l'Amiral 📊

> Chapitre associé : [[cours/08-formatage/08-formatage]]
> Énoncé de la version [[08-formatage-avance|avancée]], **réponse sous chaque
> question**. Les questions non marquées _(avancé)_ figurent aussi dans la
> version [[08-formatage-debutant|débutant]].
>
> 💡 Les blocs verts se **replient** : cliquez sur le titre pour masquer une
> réponse pendant la séance.

## Contexte

Vous avez toutes les données. Mais l'Amiral ne lit pas les écrans de 200 lignes.

> _"Un rapport qu'on ne lit pas est un rapport qui n'existe pas."_ — Sengoku

**Durée : 30 min**

## Objectif

Produire un rapport lisible **et** un rapport exploitable par un autre script —
ce ne sont pas les mêmes.

---

## Partie A : Affichage en tableau (5 min)

**A1.** Que change le paramètre d'ajustement automatique de largeur ?
Quelle en est la contrepartie sur un flux très long ?

> [!check]+ Réponse A1
>
> ```powershell
> Get-Process | Format-Table
> Get-Process | Format-Table Name, Id, CPU
> Get-Process | Format-Table Name, Id, CPU -AutoSize
> ```
>
> `-AutoSize` calcule la largeur des colonnes d'après le **contenu réel**. Sans
> lui, PowerShell devine les largeurs sur les premiers objets reçus, ce qui
> tronque les valeurs longues avec des points de suspension.
>
> **Contrepartie** : `-AutoSize` doit attendre d'avoir reçu **tous** les objets
> avant d'afficher quoi que ce soit. À éviter sur un flux très long ou lent.

**A2.** Quel est le raccourci de `Format-Table` ?

> [!check]+ Réponse A2
> `ft`. À connaître aussi : `fl` pour `Format-List`, `select` pour `Select-Object`.
>
> ```powershell
> Get-Alias -Definition Format-Table
> ```

**A3.** Une commande tronque ses colonnes avec des points de suspension.
Reproduisez le phénomène, puis donnez **deux** façons de le corriger. _(avancé)_

> [!check]+ Réponse A3
>
> ```powershell
> Get-Process | Format-Table Name, Path        # Path est souvent tronqué
> ```
>
> | Solution                       | Contrepartie                                              |
> | ------------------------------ | --------------------------------------------------------- |
> | `-AutoSize`                    | attend tout le flux avant d'afficher                      |
> | Afficher **moins de colonnes** | on perd de l'information                                  |
> | `-Wrap`                        | les valeurs longues passent à la ligne, tableau plus haut |

> 📘 **À comprendre**
> La troncature n'est pas une perte de données : la valeur complète est toujours
> dans l'objet, seul **l'affichage** est coupé. Si vous exportez en CSV, vous
> récupérez tout.

---

## Partie B : Affichage en liste (5 min)

**B1.** Pour un seul service, quelle mise en forme ? Pour cinquante ?

> [!check]+ Réponse B1
>
> ```powershell
> Get-Service -Name Spooler | Format-List
> Get-Service | Format-Table
> ```
>
> | Cas                    | Mise en forme  | Pourquoi                                 |
> | ---------------------- | -------------- | ---------------------------------------- |
> | **Un seul** service    | `Format-List`  | on veut tous les détails, à la verticale |
> | **Cinquante** services | `Format-Table` | on veut comparer, donc des lignes        |

**B2.** Combien de propriétés l'affichage complet révèle-t-il, par rapport au
défaut ? Citez-en deux qui étaient masquées.

> [!check]+ Réponse B2
>
> ```powershell
> Get-Service -Name Spooler | Format-List *
> ```
>
> L'affichage par défaut ne montre que **3 colonnes** : `Status`, `Name`,
> `DisplayName`. L'objet en porte **16**.
>
> Propriétés masquées et pourtant utiles : `StartType`, `DependentServices`,
> `ServicesDependedOn`, `CanStop`.

**B3.** Quelle différence entre cet affichage complet et `Get-Member` ? _(avancé)_

> [!check]+ Réponse B3
>
> | Commande        | Ce qu'elle donne                         |
> | --------------- | ---------------------------------------- |
> | `Get-Member`    | les **noms** des propriétés et leur type |
> | `Format-List *` | les **valeurs** de ces propriétés        |
>
> Les deux sont complémentaires : `Get-Member` pour savoir ce qui existe,
> `fl *` pour voir ce que ça contient.

> 📘 **À comprendre**
> `fl *` est l'outil de diagnostic n°1 : « quelles données cet objet porte-t-il
> vraiment ? ». Le réflexe devant un objet inconnu, juste après `Get-Member`.

---

## Partie C : Choisir les données (5 min)

**C1.** Affichez les 10 premiers processus avec uniquement le nom et l'identifiant.

> [!check]+ Réponse C1
>
> ```powershell
> Get-Process | Select-Object -First 10 Name, Id
> ```

**C2.** Que renvoie `Select-Object Name` : des chaînes ou des objets ? Prouvez-le.
_(avancé)_

> [!check]+ Réponse C2
> Des **objets**.
>
> ```powershell
> (Get-Process | Select-Object -First 1 Name).GetType().Name
> # PSCustomObject
> ```

**C3.** Et avec `-ExpandProperty Name` ? Dans quel cas préférer l'une ou l'autre ?
_(avancé)_

> [!check]+ Réponse C3
> Des **chaînes** :
>
> ```powershell
> (Get-Process | Select-Object -First 1 -ExpandProperty Name).GetType().Name
> # String
> ```
>
> | Écriture                             | Résultat              | Quand l'utiliser                |
> | ------------------------------------ | --------------------- | ------------------------------- |
> | `Select-Object Name`                 | objet à une propriété | garder une structure exportable |
> | `Select-Object -ExpandProperty Name` | valeur brute          | alimenter une autre commande    |

> 📘 **À comprendre**
> `Select-Object` **choisit les données** et renvoie un objet allégé — on peut
> continuer le pipeline après.
>
> `Format-*` **choisit l'affichage** et renvoie des instructions de mise en forme —
> le pipeline est terminé.
>
> Formule à retenir : **Select, c'est ce que je garde. Format, c'est comment je le montre.**

---

## Partie D : Le piège de l'ordre (5 min)

**D1.** Entre ces deux ordres, lequel donne le résultat attendu ?

```powershell
Get-Process | Select-Object -First 5 | Format-Table
Get-Process | Format-Table | Select-Object -First 5
```

> [!check]+ Réponse D1
> Le **premier** : `Get-Process | Select-Object -First 5 | Format-Table`
>
> On choisit d'abord **les données** (5 processus), on met en forme **ensuite**.
> Le second ordre ne renvoie rien d'exploitable.

**D2.** Pourquoi l'autre échoue-t-elle ? Prouvez-le en inspectant ce que renvoie
réellement la mise en forme.

> [!check]+ Réponse D2
> Parce que `Format-Table` ne renvoie plus des processus :
>
> ```powershell
> Get-Process | Format-Table | Get-Member
> # TypeName : Microsoft.PowerShell.Commands.Internal.Format.FormatStartData
> ```
>
> `Select-Object -First 5` attrape donc 5 **bouts de mise en forme** (en-tête,
> séparateur…), pas 5 processus. La sortie est vide ou absurde.

**D3.** Formulez la règle en une phrase.

> [!check]+ Réponse D3
>
> > **`Format-*` est toujours la dernière commande du pipeline.**
>
> La même règle vaut pour `Out-GridView`, `Out-File` et `Export-Csv` : ce sont
> des **sorties**, pas des étapes.

**D4.** Essayez d'exporter en CSV le résultat de `Select-Object Name, Id` puis
celui de `Format-Table Name, Id`. Que constatez-vous ? _(avancé)_

> [!check]+ Réponse D4
>
> ```powershell
> Get-Process | Select-Object Name, Id | Export-Csv "$env:TEMP\ok.csv" -NoTypeInformation
> Get-Process | Format-Table Name, Id  | Export-Csv "$env:TEMP\ko.csv" -NoTypeInformation
> ```
>
> Le premier CSV contient `Name` et `Id`. Le second contient les propriétés
> internes des objets de mise en forme — **inutilisable**.

> 📘 **À comprendre**
> C'est l'erreur n°1 des débutants, et elle est sournoise : aucune erreur rouge
> ne s'affiche, le résultat est simplement faux.
>
> Le réflexe de diagnostic : `| Get-Member` en bout de pipeline pour vérifier ce
> qui circule réellement.

---

## Mission finale E : le rapport de l'Amiral 🏆

**E1.** Affichez les 10 premiers processus avec le nom et le PID, dans un tableau
aux colonnes bien ajustées.

> [!check]+ Réponse E1
>
> ```powershell
> Get-Process | Select-Object -First 10 Name, Id | Format-Table -AutoSize
> ```

**E2.** Affichez le même résultat dans une fenêtre interactive.

> [!check]+ Réponse E2
>
> ```powershell
> Get-Process | Select-Object -First 10 Name, Id | Out-GridView -Title "Processus"
> ```
>
> ⚠️ `Out-GridView` n'est pas installé par défaut sur PowerShell 7 :
> `Install-Module Microsoft.PowerShell.ConsoleGuiTools`. Il ne fonctionne pas non
> plus en session distante sans interface graphique.

**E3.** Produisez le même rapport sous forme de **fichier CSV** exploitable dans
Excel, accents compris. _(avancé)_

> [!check]+ Réponse E3
>
> ```powershell
> Get-Process |
>     Select-Object -First 10 Name, Id |
>     Export-Csv "$env:TEMP\processus.csv" -NoTypeInformation -Encoding UTF8
> ```
>
> Pour vérifier le résultat :
>
> ```powershell
> Import-Csv "$env:TEMP\processus.csv"
> ```

> 📘 **À comprendre**
> Notez la différence entre E1 et E3 : seule la **dernière** commande change.
>
> - `Format-Table` → **pour l'écran**, lisible mais inexploitable ensuite
> - `Export-Csv` → **pour un fichier**, réutilisable dans Excel ou un autre script
>
> Dans les deux cas c'est la dernière étape : on ne met jamais `Format-Table`
> avant `Export-Csv`, sinon le fichier est inutilisable (voir D4).

---

> [!success] Validation
>
> - Vous distinguez mise en forme et sélection de données
> - Vous placez les `Format-*` **en fin de pipeline**
> - Vous savez pourquoi un `Format-Table` casse un `Export-Csv`
> - Vous produisez une sortie réutilisable, pas seulement lisible

---

## Ce qu'il faut retenir

| Commande                                       | Rôle                                           |
| ---------------------------------------------- | ---------------------------------------------- |
| `Format-Table` (`ft`)                          | beaucoup d'objets, peu de colonnes             |
| `Format-List` (`fl`)                           | un seul objet, tous les détails                |
| `Format-List *`                                | **toutes** les valeurs, y compris masquées     |
| `Select-Object` (`select`)                     | choisir les **données** — le pipeline continue |
| `Select-Object -ExpandProperty`                | extraire la valeur brute                       |
| `Out-GridView`                                 | exploration interactive                        |
| `Export-Csv -NoTypeInformation -Encoding UTF8` | produire un fichier                            |
| `Import-Csv`                                   | relire un fichier CSV                          |

**Select, c'est ce que je garde. Format, c'est comment je le montre — et Format passe toujours en dernier.**
