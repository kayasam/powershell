---
title: "Exercice 09 - Le Pipeline des Pirates - Avancé"
publier: true
parcours-tssr: true
parcours-pro: true
---

# Exercice 09 - Le Pipeline des Pirates 🏴‍☠️ — Avancé

> Chapitre associé : [[09-pipeline/09-pipeline]]
> Mêmes parties que la version débutant, mais **sans les commandes**. À vous de les trouver.

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

**A2.** Que se passe-t-il si vous triez dans l'autre sens ?

**A3.** Triez sur **deux** critères : d'abord par présence d'un Devil Fruit,
puis par prime décroissante.

---

## Partie B : Les Devil Fruits (5 min)

**B1.** Combien de membres ont mangé un Devil Fruit ?

**B2.** Affichez ceux qui n'en ont **pas**.

**B3.** `Where-Object` accepte deux écritures : la forme courte et le bloc de
script avec `$_`. Donnez les deux pour le même filtre, et dites quand chacune
est nécessaire.

---

## Partie C : Les primes en milliards (5 min)

**C1.** Affichez les membres dont la prime dépasse 500 millions, avec leur prime
exprimée en **milliards** arrondie à deux décimales.

**C2.** Comment crée-t-on une colonne qui n'existe pas dans les données d'origine ?

**C3.** Ajoutez une colonne `Menace` valant `EXTREME` au-dessus d'un milliard,
`Elevee` au-dessus de 500 millions, `Moderee` sinon.

---

## Partie D : Le rapport de la Marine (10 min)

**D1.** Total des primes de l'équipage.

**D2.** Prime moyenne.

**D3.** La prime totale dépasse-t-elle 8 milliards ?

**D4.** Obtenez somme, moyenne, minimum et maximum en **une seule** commande,
puis affichez uniquement la somme formatée avec des séparateurs de milliers.

---

## Partie E : Le classement par rôle (5 min)

**E1.** Regroupez par rôle. Combien de groupes ? Pourquoi ?

**E2.** Regroupez par présence de Devil Fruit.

**E3.** Pour chaque groupe de Devil Fruit, calculez la prime **totale** du groupe.

---

## Mission finale F : le rapport complet 🌟

**F1.** Produisez le rapport destiné au Gouvernement Mondial : pirates au-dessus
de 500 millions, colonnes nom / rôle / prime en milliards / Devil Fruit, trié par
prime décroissante, en tableau.

**F2.** Exportez le même rapport en CSV, exploitable sans retouche.

**F3.** Sur `C:\Windows\System32`, comparez le temps de deux approches pour
compter les `.dll` : filtrer dans le pipeline, ou utiliser le paramètre de
filtrage de la cmdlet. Quel écart ? Formulez la règle.

---

## Validation

✅ Vous filtrez, triez, groupez et mesurez dans un même pipeline
✅ Vous connaissez les deux écritures de `Where-Object`
✅ Vous savez construire une colonne calculée conditionnelle
✅ Vous savez pourquoi filtrer **à la source** plutôt que dans le pipeline
