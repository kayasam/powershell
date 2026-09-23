---
title: Correction 09 - Le Pipeline des Pirates
publier: true
parcours-tssr: true
parcours-pro: true
---

# Correction - Exercice 09 : Le Pipeline des Pirates 🏴‍☠️

> Chapitre associé : [[cours/09-pipeline/09-pipeline]]
> Énoncé de la version [[09-pipeline-avance|avancée]], **réponse sous chaque
> question**. Les questions non marquées _(avancé)_ figurent aussi dans la
> version [[09-pipeline-debutant|débutant]].
>
> 💡 Les blocs verts se **replient** : cliquez sur le titre pour masquer une
> réponse pendant la séance.

## Contexte

La Marine a intercepté la liste complète des primes des membres du Thousand Sunny.

**Durée : 35 min**

## Les données

Créez cette liste dans votre terminal :

```powershell
$equipage = @(
    [PSCustomObject]@{ Nom="Monkey D. Luffy";   Role="Capitaine";   Prime=3000000000; DevilFruit=$true  }
    [PSCustomObject]@{ Nom="Roronoa Zoro";      Role="Combattant";  Prime=1111000000; DevilFruit=$false }
    [PSCustomObject]@{ Nom="Nami";              Role="Navigatrice"; Prime=366000000;  DevilFruit=$false }
    [PSCustomObject]@{ Nom="Usopp";             Role="Tireur";      Prime=500000000;  DevilFruit=$false }
    [PSCustomObject]@{ Nom="Sanji";             Role="Cuisinier";   Prime=1032000000; DevilFruit=$false }
    [PSCustomObject]@{ Nom="Tony Tony Chopper"; Role="Medecin";     Prime=1000;       DevilFruit=$true  }
    [PSCustomObject]@{ Nom="Nico Robin";        Role="Archeologue"; Prime=930000000;  DevilFruit=$true  }
    [PSCustomObject]@{ Nom="Franky";            Role="Charpentier"; Prime=394000000;  DevilFruit=$false }
    [PSCustomObject]@{ Nom="Brook";             Role="Musicien";    Prime=383000000;  DevilFruit=$true  }
    [PSCustomObject]@{ Nom="Jinbe";             Role="Barreur";     Prime=1100000000; DevilFruit=$false }
)
```

---

## Partie A : Trier par danger (5 min)

**A1.** Triez du plus dangereux au moins dangereux. Qui est premier, qui est dernier ?

> [!check]+ Réponse A1
>
> ```powershell
> $equipage | Sort-Object Prime -Descending
> ```
>
> | Position | Membre                | Prime         |
> | -------- | --------------------- | ------------- |
> | Premier  | **Monkey D. Luffy**   | 3 000 000 000 |
> | Dernier  | **Tony Tony Chopper** | 1 000         |

**A2.** Que se passe-t-il si vous triez dans l'autre sens ?

> [!check]+ Réponse A2
>
> ```powershell
> $equipage | Sort-Object Prime
> ```
>
> Le tri s'inverse : Chopper passe en tête, Luffy en queue. Par défaut,
> `Sort-Object` trie du **plus petit au plus grand**.

**A3.** Triez sur **deux** critères : d'abord par présence d'un Devil Fruit,
puis par prime. _(avancé)_

> [!check]+ Réponse A3
>
> ```powershell
> $equipage | Sort-Object DevilFruit, Prime
> ```
>
> Il suffit de séparer les propriétés par une virgule. Les critères s'appliquent
> dans l'ordre : d'abord le regroupement par Devil Fruit, puis la prime **à
> l'intérieur** de chaque groupe.

> 📘 **À comprendre**
> Le `|` passe les **objets** de gauche à droite. Lisez un pipeline comme une
> phrase : _« prends l'équipage, trie-le par prime, en ordre décroissant »_.
>
> `Sort-Object` trie sur la **valeur** de la propriété, pas sur son affichage :
> une prime de 1 000 est bien inférieure à 3 000 000 000, alors qu'un tri
> alphabétique aurait donné l'inverse.

---

## Partie B : Les Devil Fruits (5 min)

**B1.** Combien de membres ont mangé un Devil Fruit ?

> [!check]+ Réponse B1
>
> ```powershell
> $equipage | Where-Object DevilFruit -eq $true
> ($equipage | Where-Object DevilFruit -eq $true).Count
> ```
>
> **4** : Luffy, Chopper, Robin et Brook.

**B2.** Affichez ceux qui n'en ont **pas**.

> [!check]+ Réponse B2
>
> ```powershell
> $equipage | Where-Object DevilFruit -eq $false
> ```
>
> **6** membres : Zoro, Nami, Usopp, Sanji, Franky, Jinbe.

**B3.** `Where-Object` accepte deux écritures : la forme courte et le bloc de
script avec `$_`. Donnez les deux pour le même filtre, et dites quand chacune
est nécessaire. _(avancé)_

> [!check]+ Réponse B3
>
> ```powershell
> # Forme courte — une seule comparaison simple
> $equipage | Where-Object Prime -gt 1000000000
>
> # Bloc de script — obligatoire dès que c'est plus complexe
> $equipage | Where-Object { $_.Prime -gt 1000000000 -and $_.DevilFruit }
> ```
>
> Le bloc `{ }` est **nécessaire** pour : combiner plusieurs conditions,
> appeler une méthode, ou faire un calcul sur la propriété.

> 📘 **À comprendre**
> `$_` désigne **l'objet en cours de traitement** dans le pipeline. C'est la
> variable la plus utilisée de PowerShell.
>
> La forme courte est plus lisible pour un test simple ; le bloc de script est
> indispensable dès que la logique se complique.

---

## Partie C : Les grosses primes (5 min)

**C1.** Affichez les membres dont la prime dépasse 500 millions, en ne gardant
que le nom et la prime.

> [!check]+ Réponse C1
>
> ```powershell
> $equipage |
>     Where-Object { $_.Prime -gt 500000000 } |
>     Select-Object Nom, Prime
> ```
>
> **Cinq** membres : Luffy, Zoro, Sanji, Nico Robin et Jinbe.
>
> ⚠️ Usopp est exactement à 500 000 000 : il est **exclu** par `-gt`
> (supérieur **strict**). Avec `-ge`, il passerait.

**C2.** Affichez uniquement ceux qui dépassent **un milliard**, avec leur nom et
leur rôle.

> [!check]+ Réponse C2
>
> ```powershell
> $equipage |
>     Where-Object { $_.Prime -gt 1000000000 } |
>     Select-Object Nom, Role
> ```
>
> **Monkey D. Luffy** · **Roronoa Zoro** · **Sanji** · **Jinbe**

**C3.** Combien sont-ils ? Obtenez le nombre sans compter à la main. _(avancé)_

> [!check]+ Réponse C3
>
> ```powershell
> ($equipage | Where-Object { $_.Prime -gt 1000000000 }).Count    # 4
> ```

> 📘 **À comprendre**
> Attention à `-gt` (supérieur **strict**) et `-ge` (supérieur **ou égal**).
> Usopp, pile à 500 millions, passe avec `-ge` mais pas avec `-gt` : c'est une
> source d'erreur classique dans les rapports.
>
> Les parenthèses autour du pipeline sont nécessaires avant `.Count` : sans
> elles, PowerShell appliquerait `.Count` au mauvais élément.

---

## Partie D : Le rapport de la Marine (10 min)

**D1.** Total des primes de l'équipage.

> [!check]+ Réponse D1
>
> ```powershell
> $equipage | Measure-Object Prime -Sum
> ```
>
> **8 816 001 000** berrys.

**D2.** Prime moyenne.

> [!check]+ Réponse D2
>
> ```powershell
> $equipage | Measure-Object Prime -Average
> ```
>
> **881 600 100** berrys.

**D3.** La prime totale dépasse-t-elle 8 milliards ?

> [!check]+ Réponse D3
> **Oui** — 8,82 milliards.
>
> ```powershell
> ($equipage | Measure-Object Prime -Sum).Sum -gt 8000000000    # True
> ```

**D4.** Obtenez somme, moyenne, minimum et maximum en **une seule** commande,
puis affichez uniquement la somme. _(avancé)_

> [!check]+ Réponse D4
>
> ```powershell
> $m = $equipage | Measure-Object Prime -Sum -Average -Maximum -Minimum
> $m.Sum        # 8816001000
> ```

> 📘 **À comprendre**
> `Measure-Object` accepte **plusieurs calculs d'un coup** : inutile de relancer
> la commande trois fois. Le résultat est un objet avec les propriétés `Count`,
> `Sum`, `Average`, `Maximum`, `Minimum`.
>
> Sans nom de propriété, `Measure-Object` se contente de **compter** les objets.

---

## Partie E : Le classement par rôle (5 min)

**E1.** Regroupez par rôle. Combien de groupes ? Pourquoi ?

> [!check]+ Réponse E1
>
> ```powershell
> $equipage | Group-Object Role
> ```
>
> **10 groupes** — un par membre. Chaque pirate a un rôle **unique**, donc le
> regroupement ne regroupe rien. C'est volontaire : ça montre que `Group-Object`
> n'a d'intérêt que sur une propriété à **valeurs répétées**.

**E2.** Regroupez par présence de Devil Fruit.

> [!check]+ Réponse E2
>
> ```powershell
> $equipage | Group-Object DevilFruit
> ```
>
> | Count | Name    |
> | ----- | ------- |
> | 6     | `False` |
> | 4     | `True`  |

**E3.** Calculez la prime **totale** des porteurs de Devil Fruit. _(avancé)_

> [!check]+ Réponse E3
>
> ```powershell
> $equipage | Where-Object DevilFruit -eq $true | Measure-Object Prime -Sum
> ```
>
> On filtre d'abord, on mesure ensuite — inutile de passer par `Group-Object` ici.

> 📘 **À comprendre**
> `Group-Object` renvoie des objets à trois propriétés : `Count` (le nombre),
> `Name` (la valeur commune) et **`Group`** (les objets du groupe).
>
> Pour un simple total par catégorie, `Where-Object` puis `Measure-Object` reste
> la voie la plus lisible.

---

## Mission finale F : le rapport complet 🌟

**F1.** Produisez le rapport destiné au Gouvernement Mondial : pirates au-dessus
de 500 millions, colonnes nom / rôle / prime / Devil Fruit, trié par prime
décroissante, en tableau.

> [!check]+ Réponse F1
>
> ```powershell
> $equipage |
>     Where-Object { $_.Prime -gt 500000000 } |
>     Sort-Object Prime -Descending |
>     Select-Object Nom, Role, Prime, DevilFruit |
>     Format-Table -AutoSize
> ```

**F2.** Exportez le même rapport en CSV, exploitable sans retouche. _(avancé)_

> [!check]+ Réponse F2
> Il suffit de remplacer la dernière ligne :
>
> ```powershell
> $equipage |
>     Where-Object { $_.Prime -gt 500000000 } |
>     Sort-Object Prime -Descending |
>     Select-Object Nom, Role, Prime, DevilFruit |
>     Export-Csv "$env:TEMP\rapport-marine.csv" -NoTypeInformation -Encoding UTF8
> ```

**F3.** Sur `C:\Windows\System32`, comparez le temps de deux approches pour
compter les `.dll` : filtrer dans le pipeline, ou utiliser le paramètre de
filtrage de la cmdlet. Quel écart ? Formulez la règle. _(avancé)_

> [!check]+ Réponse F3
>
> ```powershell
> Measure-Command { (Get-ChildItem C:\Windows\System32 | Where-Object Extension -eq '.dll').Count }
> Measure-Command { (Get-ChildItem C:\Windows\System32 -Filter *.dll).Count }
> ```
>
> La seconde est nettement plus rapide : le filtrage est fait **par le système de
> fichiers**, avant que les objets ne soient créés et transmis.
>
> > **La règle : filtrez le plus tôt possible, et si la cmdlet a son propre
> > paramètre de filtrage, utilisez-le plutôt que `Where-Object`.**

> 📘 **À comprendre**
> L'ordre du pipeline raconte une phrase : **filtrer → trier → choisir → afficher**.
>
> Un piège déjà vu au chapitre 08, et qui revient ici : `Format-Table` **en
> dernier** — après lui, plus rien n'est exportable.
>
> C'est pour cela que F1 et F2 ne diffèrent que par leur **dernière ligne**.

---

> [!success] Validation
>
> - Vous filtrez, triez, groupez et mesurez dans un même pipeline
> - Vous connaissez les deux écritures de `Where-Object`
> - Vous savez choisir les colonnes avec `Select-Object`
> - Vous savez pourquoi filtrer **à la source** plutôt que dans le pipeline

---

## Ce qu'il faut retenir

| Cmdlet           | Rôle                                        | Alias        |
| ---------------- | ------------------------------------------- | ------------ |
| `Where-Object`   | filtrer                                     | `?`, `where` |
| `Sort-Object`    | trier (`-Descending`)                       | `sort`       |
| `Select-Object`  | choisir colonnes, `-First`, `-Last`         | `select`     |
| `Group-Object`   | regrouper — expose `Count`, `Name`, `Group` | `group`      |
| `Measure-Object` | compter, `-Sum`, `-Average`, `-Maximum`     | `measure`    |

**`$_` = l'objet en cours. Filtrer → trier → choisir → afficher.**
