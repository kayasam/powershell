---
title: "Exercice 28 - Le Registre du Gouvernement Mondial - Avancé"
publier: true
parcours-tssr: true
parcours-pro: true
---

# Exercice 28 - Le Registre du Gouvernement Mondial 🌍 — Avancé

> Chapitre associé : [[28-introduction-ad/28-introduction-ad]]
> Mêmes parties que la version débutant, mais **sans les commandes**. À vous de les trouver.

## Contexte

Vous reprenez un annuaire que vous n'avez pas construit. Avant toute modification,
il faut comprendre ce qui existe.

> _"Tout est écrit. Encore faut-il savoir lire."_ — Cinq Doyens

**Durée : 50 min**

## Mode simulation

Sans domaine, reprenez le jeu de données `$agentsAD` de la version débutant et
rédigez les commandes AD sans les exécuter.

---

## Partie A : Les outils (10 min)

**A1.** Le module `ActiveDirectory` est-il disponible ? Comment le vérifier ?

**A2.** Quelle commande l'installerait sur un Windows 10/11 ? Quel est le nom
**exact** de la capacité ?

**A3.** Combien de commandes le module expose-t-il ? Combien pour les utilisateurs,
les groupes, les ordinateurs ?

**A4.** Pourquoi `Get-WindowsFeature` ne fonctionne-t-il pas pour installer RSAT
sur un poste client ?

---

## Partie B : Le vocabulaire (10 min)

**B1.** Complétez : DC, OU, DN, SAMAccountName, UPN, SID, GPO.

**B2.** Décomposez `CN=rlucci,OU=Agents,DC=cipher-pol,DC=org`.

**B3.** Quelle est la longueur maximale d'un `SAMAccountName` ? Pourquoi cette
limite existe-t-elle ?

---

## Partie C : Cartographier le domaine (10 min)

**C1.** Produisez un rapport donnant : nom du domaine, niveau fonctionnel,
nombre d'utilisateurs, de groupes, d'ordinateurs, nombre d'OU.

**C2.** Quelles commandes donnent le domaine courant, la forêt, et les
contrôleurs de domaine ?

**C3.** Quelle commande liste les OU, et comment limiter la recherche à une
branche précise ?

---

## Partie D : Lire les utilisateurs (10 min)

**D1.** Combien de comptes actifs, combien de désactivés ?

**D2.** Citez cinq propriétés renvoyées **par défaut** par `Get-ADUser`, et cinq
propriétés utiles qui ne le sont **pas**.

**D3.** Comment obtenir une propriété non retournée par défaut ? Pourquoi
`-Properties *` est-il déconseillé en production ?

**D4.** Comparez le temps de `Get-ADUser -Filter *` et de la même requête limitée
à une OU. Formulez trois règles pour des requêtes AD efficaces.

---

## Partie E : Filtrer (10 min)

**E1.** Écrivez les filtres AD correspondants, **sans** `Where-Object` :

| Besoin                                           | Filtre |
| ------------------------------------------------ | ------ |
| Utilisateurs activés d'un service donné          |        |
| Utilisateurs dont le nom commence par une lettre |        |
| Comptes sans adresse de messagerie               |        |

**E2.** En quoi la syntaxe du `-Filter` AD diffère-t-elle du `Where-Object` ?
Et du WQL du chapitre 12 ?

**E3.** Pourquoi `Get-ADUser -Filter "LastLogonDate -lt '01/01/2026'"` ne
fonctionne-t-il pas ? Quelles sont les **deux** causes cumulées ?

**E4.** Donnez deux façons correctes de trouver les comptes inactifs depuis
90 jours.

---

## Mission finale F : la carte du registre 🌍

**F1.** Une entreprise de 400 personnes, 3 sites, 6 services, avec des comptes de
service et des postes fixes et portables. Proposez une arborescence d'OU complète,
et justifiez **chaque niveau** par un besoin réel : délégation, GPO, recherche.

**F2.** Quel est le principal défaut d'un découpage purement **géographique** ?
Et d'un découpage purement **organisationnel** ?

**F3.** Produisez un tableau de bord du domaine : utilisateurs totaux, actifs,
désactivés, bloqués, groupes, ordinateurs.

---

## Validation

✅ Vous savez installer et vérifier les outils AD
✅ Vous maîtrisez le vocabulaire de l'annuaire
✅ Vous écrivez des requêtes AD **efficaces**, ciblées et limitées en propriétés
✅ Vous connaissez les pièges du `-Filter` AD
✅ Vous savez concevoir et défendre une arborescence d'OU
