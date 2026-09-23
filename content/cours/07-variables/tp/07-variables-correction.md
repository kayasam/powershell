---
title: Correction 07 - La Fiche des Pirates
publier: true
parcours-tssr: true
parcours-pro: true
---

# Correction - Exercice 07 : La Fiche des Pirates 📋

> Chapitre associé : [[cours/07-variables/07-variables]]
> Énoncé de la version [[07-variables-avance|avancée]], **réponse sous chaque
> question**. Les questions non marquées _(avancé)_ figurent aussi dans la
> version [[07-variables-debutant|débutant]].
>
> 💡 Les blocs verts se **replient** : cliquez sur le titre pour masquer une
> réponse pendant la séance.

## Contexte

La Marine tient des fiches sur chaque pirate connu. Votre mission : stocker et
manipuler des informations en PowerShell.

> _"Connais ton ennemi."_ — Amiral Sengoku

**Durée : 45 min**

## Objectif

Maîtriser les types, choisir la bonne structure de données, et éviter les pièges
de conversion.

---

## Partie A : Variables simples (15 min)

**A1.** Créez les variables décrivant un pirate : nom, surnom, prime, âge, et un
indicateur « possède un fruit du démon ».

> [!check]+ Réponse A1
>
> ```powershell
> $nom        = "Roronoa Zoro"
> $surnom     = "Chasseur de pirates"
> $prime      = 1111000000
> $devilFruit = $false
> $age        = 21
> ```
>
> Affichage de la fiche :
>
> ```powershell
> Write-Host "Nom    : $nom"
> Write-Host "Prime  : $prime Berrys"
> Write-Host "Age    : $age ans"
> ```

**A2.** Quel type PowerShell a-t-il choisi pour chacune ? Vérifiez-le.

> [!check]+ Réponse A2
>
> ```powershell
> $nom.GetType().Name
> $prime.GetType().Name
> $devilFruit.GetType().Name
> $age.GetType().Name
> ```
>
> | Variable      | Type        |
> | ------------- | ----------- |
> | `$nom`        | `String`    |
> | `$prime`      | **`Int64`** |
> | `$devilFruit` | `Boolean`   |
> | `$age`        | `Int32`     |
>
> ⚠️ Remarquez : `$prime` est un **`Int64`**, pas un `Int32`. PowerShell a choisi
> tout seul le type le plus large, parce que 3 000 000 000 dépasse la capacité
> d'un `Int32` (maximum : 2 147 483 647).

**A3.** Un nombre entre guillemets n'est pas un nombre. Prédisez puis vérifiez :

```powershell
"10" -gt "9"
10 -gt 9
```

Pourquoi le premier est-il **faux** ? Confirmez avec un tri :

```powershell
"10", "9", "100", "2" | Sort-Object
10, 9, 100, 2 | Sort-Object
```

> [!check]+ Réponse A3
>
> | Test           | Résultat     |
> | -------------- | ------------ |
> | `"10" -gt "9"` | **False** ⚠️ |
> | `10 -gt 9`     | `True`       |
>
> Entre **deux textes**, PowerShell compare **caractère par caractère**, comme
> dans un dictionnaire. Il regarde le premier caractère : `"1"` vient avant
> `"9"` dans l'alphabet, donc `"10"` est jugé **plus petit** que `"9"`.
>
> Le tri le montre sans ambiguïté :
>
> ```
> Texte   : 10, 100, 2, 9      <-- absurde
> Nombres : 2, 9, 10, 100      <-- correct
> ```
>
> 💡 C'est **exactement** ce qui arrive après un `Import-Csv` : toutes les
> colonnes reviennent en texte, et un tri sur une colonne de nombres donne un
> classement alphabétique aberrant.

**A4.** Réparez la comparaison avec un **transtypage**. Que se passe-t-il si vous
tentez de convertir `"abc"` en entier ? _(avancé)_

> [!check]+ Réponse A4
>
> ```powershell
> [int]"10" -gt [int]"9"      # True
>
> $texte = "10"
> [int]$texte + 5             # 15
> ([int]$texte).GetType().Name    # Int32
> ```
>
> Avec une valeur non convertible :
>
> ```powershell
> [int]$x = "abc"
> # Impossible de convertir la valeur « abc » en type « System.Int32 ».
> # Erreur : « The input string 'abc' was not in a correct format. »
> ```
>
> C'est une **erreur bloquante** — et c'est voulu : le typage explicite sert
> justement de garde-fou. Mieux vaut une erreur franche qu'un tri silencieusement faux.

**A5.** Prédisez puis vérifiez le résultat de ces trois opérations. Expliquez la
règle. _(avancé)_

```powershell
"10" + 5
10 + "5"
"10" * 3
```

> [!check]+ Réponse A5
>
> | Opération  | Résultat | Pourquoi                   |
> | ---------- | -------- | -------------------------- |
> | `"10" + 5` | `105`    | **concaténation** de texte |
> | `10 + "5"` | `15`     | **addition** numérique     |
> | `"10" * 3` | `101010` | **répétition** du texte    |
>
> **La règle : PowerShell se fie au type de l'opérande de _gauche_.**
>
> Pour forcer une addition dans les deux cas :
>
> ```powershell
> [int]"10" + 5        # 15
> ```

> 📘 **À comprendre**
> PowerShell devine le type tout seul — c'est confortable, mais c'est aussi la
> source de bugs silencieux. Trois réflexes :
>
> - `GetType().Name` dès qu'un résultat surprend ;
> - le typage explicite `[int]$x` dans un script de production ;
> - se souvenir que **l'opérande de gauche commande** dans une opération mixte.
>
> Ce piège reviendra au chapitre 17 : après un import CSV, **tout est du texte**.

---

## Partie B : Opérations (10 min)

**B1.** Calculez la prime de Luffy (3 Mrd) après une augmentation de **50 %**.

> [!check]+ Réponse B1
>
> ```powershell
> $prime = 3000000000
> $prime * 1.5           # 4500000000
> ```
>
> Variante explicite :
>
> ```powershell
> $prime + ($prime * 0.50)
> ```

**B2.** Calculez la différence de prime entre Luffy (3 Mrd) et Zoro (1,111 Mrd).

> [!check]+ Réponse B2
>
> ```powershell
> 3000000000 - 1111000000     # 1889000000
> ```

**B3.** À partir d'un nom complet, mettez-le en majuscules, vérifiez s'il contient
`D.`, et comptez ses caractères.

> [!check]+ Réponse B3
>
> ```powershell
> $nomComplet = "Monkey D. Luffy"
>
> $nomComplet.ToUpper()             # MONKEY D. LUFFY
> $nomComplet.Contains("D.")        # True
> $nomComplet.Length                # 15
> ```

> 📘 **À comprendre**
> Deux écritures à connaître pour insérer une valeur dans du texte :
>
> | Écriture              | Effet                                        |
> | --------------------- | -------------------------------------------- |
> | `"Prime : $prime"`    | remplace la variable par sa valeur           |
> | `'Prime : $prime'`    | affiche le texte **brut**, sans remplacement |
> | `"Prime : $($p.Nom)"` | nécessaire pour une **propriété**            |

---

## Partie C : Tableaux (10 min)

**C1.** Créez un tableau de cinq membres d'équipage. Affichez le premier et le
dernier **sans compter à la main**.

> [!check]+ Réponse C1
>
> ```powershell
> $equipage = @("Luffy", "Zoro", "Nami", "Usopp", "Sanji")
>
> $equipage[0]     # Luffy
> $equipage[-1]    # Sanji
> ```

**C2.** Agrandissez-le de cinq membres. Combien après chaque ajout ?

> [!check]+ Réponse C2
>
> ```powershell
> $equipage.Count                              # 5
> $equipage += "Chopper"
> $equipage.Count                              # 6
> $equipage += @("Robin", "Franky", "Brook", "Jinbe")
> $equipage.Count                              # 10
> ```

**C3.** Affichez les membres 2 à 4.

> [!check]+ Réponse C3
>
> ```powershell
> $equipage[1..3]     # Zoro, Nami, Usopp
> ```

> 📘 **À comprendre**
> Les index à retenir :
>
> | Écriture     | Élément                                  |
> | ------------ | ---------------------------------------- |
> | `$tab[0]`    | le premier — **on compte à partir de 0** |
> | `$tab[-1]`   | le dernier                               |
> | `$tab[1..3]` | une plage                                |
> | `$tab.Count` | le nombre d'éléments                     |

---

## Partie D : Tables de hachage (10 min)

**D1.** Créez la fiche complète d'un pirate avec au moins cinq champs.

> [!check]+ Réponse D1
>
> ```powershell
> $zoro = @{
>     Nom      = "Roronoa Zoro"
>     Surnom   = "Chasseur de pirates"
>     Prime    = 1111000000
>     Rang     = "Combattant"
>     Equipage = "Chapeaux de Paille"
> }
> ```
>
> Deux façons d'accéder à une valeur :
>
> ```powershell
> $zoro.Nom          # notation par point
> $zoro["Prime"]     # notation par crochets
> ```

**D2.** Mettez à jour deux propriétés et ajoutez-en une nouvelle.

> [!check]+ Réponse D2
>
> ```powershell
> $zoro.Prime = 1500000000     # modifier
> $zoro.Rang  = "Second"       # modifier
> $zoro.Ile   = "Wano"         # ajouter — pas besoin de la déclarer
> ```

**D3.** Listez toutes les clés de la fiche.

> [!check]+ Réponse D3
>
> ```powershell
> $zoro.Keys
> ```

**D4.** Quelle est la différence entre une **table de hachage** et un
**`[PSCustomObject]`** ? Lequel choisir pour exporter en CSV ? Prouvez-le.
_(avancé)_

> [!check]+ Réponse D4
>
> ```powershell
> # Table de hachage
> $h = @{ Nom = "Zoro"; Prime = 1111000000 }
> $h | Export-Csv "$env:TEMP\h.csv" -NoTypeInformation
>
> # Objet personnalisé
> $o = [PSCustomObject]@{ Nom = "Zoro"; Prime = 1111000000 }
> $o | Export-Csv "$env:TEMP\o.csv" -NoTypeInformation
> ```
>
> Le CSV de la **table de hachage** est inutilisable : il exporte les propriétés
> internes (`Count`, `Keys`, `Values`…), pas vos données. Celui du
> **`[PSCustomObject]`** contient bien `Nom` et `Prime`.
>
> |                | Table de hachage          | `[PSCustomObject]`     |
> | -------------- | ------------------------- | ---------------------- |
> | Ordre des clés | non garanti               | **conservé**           |
> | Export CSV     | inutilisable              | correct                |
> | Usage          | paramètres, configuration | **données à exporter** |

> 📘 **À comprendre**
> Retenez la règle : **`@{ }` pour configurer, `[PSCustomObject]@{ }` pour des
> données**.
>
> Une table de hachage est parfaite pour passer des options à une cmdlet
> (vous le verrez avec `-FilterHashtable` au chapitre 18). Dès qu'il s'agit de
> produire des lignes de rapport, c'est `[PSCustomObject]`.

---

## Mission finale E : l'avis de recherche 🏴‍☠️

**E1.** Créez un mini-rapport affichant la fiche complète d'un pirate, avec un
encadré et des couleurs.

> [!check]+ Réponse E1
>
> ```powershell
> $pirate = @{
>     Nom    = "Roronoa Zoro"
>     Surnom = "Chasseur de pirates"
>     Prime  = 1111000000
>     Rang   = "Combattant"
> }
>
> Write-Host "=============================" -ForegroundColor Red
> Write-Host "        AVIS DE RECHERCHE"    -ForegroundColor Red
> Write-Host "=============================" -ForegroundColor Red
> Write-Host "Nom    : $($pirate.Nom)"
> Write-Host "Surnom : $($pirate.Surnom)"
> Write-Host "Prime  : $($pirate.Prime) Berrys" -ForegroundColor Yellow
> Write-Host "Rang   : $($pirate.Rang)"
> Write-Host "=============================" -ForegroundColor Red
> ```

> 📘 **À comprendre**
> Le point clé de cette mission : **`$($pirate.Nom)`**.
>
> - `"$pirate"` afficherait le type de l'objet, pas son contenu ;
> - `"$pirate.Nom"` afficherait littéralement `.Nom` après le type ;
> - `"$($pirate.Nom)"` évalue l'expression et insère le résultat.
>
> Règle simple : **dès qu'il y a un point dans une chaîne, il faut `$( )`**.
>
> ⚠️ `Write-Host` affiche mais **ne retourne rien** : son texte n'est pas
> capturable dans une variable. Pour une fonction réutilisable, c'est
> `Write-Output` qu'il faut (chapitre 13).

---

> [!success] Validation
>
> - Vous savez créer des variables de différents types et les contraindre
> - Vous savez repérer un nombre stocké en **texte** et le corriger avec `[int]`
> - Vous connaissez la règle de conversion de l'opérateur `+`
> - Vous savez choisir entre tableau et table de hachage
> - Vous distinguez table de hachage et `[PSCustomObject]`

---

## Ce qu'il faut retenir

| Écriture                              | Rôle                                    |
| ------------------------------------- | --------------------------------------- |
| `$x = 5`                              | créer une variable — le type est deviné |
| `[int]$x = "5"`                       | contraindre le type                     |
| `$x.GetType().Name`                   | connaître le type réel                  |
| `@("a","b")`                          | tableau                                 |
| `$tab[0]` · `$tab[-1]` · `$tab[1..3]` | premier · dernier · plage               |
| `@{ Cle = "valeur" }`                 | table de hachage — pour **configurer**  |
| `[PSCustomObject]@{ ... }`            | objet — pour des **données**            |
| `"$($obj.Prop)"`                      | insérer une propriété dans une chaîne   |

**L'opérande de gauche commande le type du résultat.**
**Un nombre entre guillemets se trie comme du texte : `10` avant `9`.**
