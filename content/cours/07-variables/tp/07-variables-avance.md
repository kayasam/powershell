---
title: "Exercice 07 - La Fiche des Pirates - Avancé"
publier: true
parcours-tssr: true
parcours-pro: true
---

# Exercice 07 - La Fiche des Pirates 📋 — Avancé

> Chapitre associé : [[07-variables/07-variables]]
> Mêmes parties que la version débutant, mais **sans les commandes**. À vous de les trouver.

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

**A2.** Quel type PowerShell a-t-il choisi pour chacune ? Vérifiez-le.

**A3.** Forcez la prime à être un entier **long**, et l'âge à être un entier à
partir d'une chaîne. Que se passe-t-il si vous tentez de convertir `"abc"` en entier ?

**A4.** Prédisez puis vérifiez le résultat de ces trois opérations. Expliquez la règle :

```powershell
"10" + 5
10 + "5"
"10" * 3
```

---

## Partie B : Opérations (10 min)

**B1.** Calculez la prime de Luffy (3 Mrd) après une augmentation de **50 %**.

**B2.** Calculez la différence de prime entre Luffy (3 Mrd) et Zoro (1,111 Mrd).

**B3.** À partir d'un nom complet, mettez-le en majuscules, vérifiez s'il contient
`D.`, et comptez ses caractères.

**B4.** Affichez la prime formatée avec des séparateurs de milliers
(`3 000 000 000`) puis en milliards avec une décimale.

---

## Partie C : Tableaux (10 min)

**C1.** Créez un tableau de cinq membres d'équipage. Affichez le premier et le dernier
**sans compter à la main**.

**C2.** Agrandissez-le de cinq membres. Combien après chaque ajout ?

**C3.** Affichez les membres 2 à 4.

**C4.** Mesurez le temps pour construire un tableau de 20 000 éléments avec `+=`,
puis avec une liste générique .NET. Quel écart ? Expliquez la cause.

---

## Partie D : Tables de hachage (10 min)

**D1.** Créez la fiche complète d'un pirate avec au moins cinq champs.

**D2.** Mettez à jour deux propriétés et ajoutez-en une nouvelle.

**D3.** Listez toutes les clés de la fiche.

**D4.** Quelle est la différence entre une **table de hachage** et un
**`[PSCustomObject]`** ? Lequel choisir pour exporter en CSV ? Prouvez-le.

---

## Mission finale E : l'avis de recherche 🏴‍☠️

**E1.** Créez un mini-rapport affichant la fiche complète d'un pirate, avec un
encadré et des couleurs.

**E2.** Faites-le fonctionner pour **plusieurs** pirates rangés dans une collection,
sans dupliquer le code d'affichage.

**E3.** Faites en sorte que la prime s'affiche en jaune au-dessus d'un milliard,
en blanc en dessous.

---

## Validation

✅ Vous savez créer des variables de différents types et les contraindre
✅ Vous connaissez la règle de conversion de l'opérateur `+`
✅ Vous savez choisir entre tableau, liste générique et table de hachage
✅ Vous connaissez le coût de `+=` sur un tableau
✅ Vous distinguez table de hachage et `[PSCustomObject]`
