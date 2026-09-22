---
title: "Exercice 08 - Le Rapport pour l'Amiral - Avancé"
publier: true
parcours-tssr: true
parcours-pro: true
---

# Exercice 08 - Le Rapport pour l'Amiral 📊 — Avancé

> Chapitre associé : [[08-formatage/08-formatage]]
> Mêmes parties que la version débutant, mais **sans les commandes**. À vous de les trouver.

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

**A2.** Quel est le raccourci de `Format-Table` ?

**A3.** Une commande tronque ses colonnes avec des points de suspension.
Reproduisez le phénomène, puis donnez **deux** façons de le corriger.

---

## Partie B : Affichage en liste (5 min)

**B1.** Pour un seul service, quelle mise en forme ? Pour cinquante ?

**B2.** Combien de propriétés l'affichage complet révèle-t-il, par rapport au
défaut ? Citez-en deux qui étaient masquées.

**B3.** Quelle différence entre cet affichage complet et `Get-Member` ?

---

## Partie C : Choisir les données (5 min)

**C1.** Affichez les 10 premiers processus avec uniquement le nom et l'identifiant.

**C2.** Que renvoie `Select-Object Name` : des chaînes ou des objets ? Prouvez-le.

**C3.** Et avec `-ExpandProperty Name` ? Dans quel cas préférer l'une ou l'autre ?

---

## Partie D : Le piège de l'ordre (5 min)

**D1.** Entre ces deux ordres, lequel donne le résultat attendu ?

```powershell
Get-Process | Select-Object -First 5 | Format-Table
Get-Process | Format-Table | Select-Object -First 5
```

**D2.** Pourquoi l'autre échoue-t-elle ? Prouvez-le en inspectant ce que renvoie
réellement la mise en forme.

**D3.** Formulez la règle en une phrase.

**D4.** Essayez d'exporter en CSV le résultat de `Select-Object Name, Id` puis
celui de `Format-Table Name, Id`. Que constatez-vous ?

---

## Mission finale E : le rapport de l'Amiral 🏆

**E1.** Affichez les 10 premiers processus avec le nom et le PID, dans un tableau
aux colonnes bien ajustées.

**E2.** Affichez le même résultat dans une fenêtre interactive.

**E3.** Produisez le même rapport sous forme de **fichier CSV** exploitable dans
Excel, accents compris.

---

> [!success] Validation
>
> - Vous distinguez mise en forme et sélection de données
> - Vous placez les `Format-*` **en fin de pipeline**
> - Vous savez pourquoi un `Format-Table` casse un `Export-Csv`
> - Vous produisez une sortie réutilisable, pas seulement lisible
