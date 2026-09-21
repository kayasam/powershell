---
title: "Exercice 29 - Le Recrutement de la Cipher Pol - Avancé"
publier: true
parcours-tssr: true
parcours-pro: true
---

# Exercice 29 - Le Recrutement de la Cipher Pol 🕵️ — Avancé

> Chapitre associé : [[29-utilisateurs-ad/29-utilisateurs-ad]]
> Mêmes parties que la version débutant, mais **sans les commandes**. À vous de les trouver.

## Contexte

Cinquante arrivées le même lundi. Le script doit être idempotent, traçable, et ne
jamais laisser l'annuaire dans un état incohérent.

> _"Un agent sans dossier n'existe pas."_ — Spandam

**Durée : 45 min**

> ⚠️ Utilisez un **domaine de test**, ou rédigez les commandes sans les exécuter.

## Les données de recrutement

Reprenez le tableau `$nouvellesRecrues` de la version débutant.

---

## Partie A : Lire un utilisateur (5 min)

**A1.** Quelle différence entre `Get-ADUser -Identity`, la même commande avec
`-Properties`, et avec `-Properties *` ?

**A2.** Pourquoi certaines propriétés n'apparaissent-elles pas par défaut ?

**A3.** Comment vérifier si un compte est activé, sans afficher tout l'objet ?

**A4.** Comment savoir si une propriété est **stockée** dans l'annuaire ou
**construite** par le module ? Pourquoi est-ce important ?

---

## Partie B : Créer un agent (15 min)

**B1.** Créez un compte complet : nom, login, UPN, prénom, nom, service, titre,
OU de destination, mot de passe, compte activé.

**B2.** Quel type le mot de passe doit-il être ? Pourquoi ?

**B3.** Que se passe-t-il si vous omettez le paramètre d'OU ?

**B4.** Quel paramètre force le changement de mot de passe à la première connexion ?

**B5.** Écrivez une fonction qui génère un **mot de passe aléatoire** de 16
caractères avec majuscules, minuscules, chiffres et symboles. Comment le passer
à la création sans jamais l'écrire en clair dans un journal ?

---

## Partie C : Recruter en série (15 min)

**C1.** Créez les quatre recrues dans une boucle, avec un message de confirmation.

**C2.** Que se passe-t-il si un login existe déjà ? Comment rendre le script
**idempotent** — relançable sans erreur ni doublon ?

**C3.** Écrivez une fonction qui génère un login à partir d'un prénom et d'un nom :

- format `p.nom`, en minuscules ;
- accents et cédilles convertis en caractères simples ;
- espaces, apostrophes et traits d'union supprimés ;
- tronqué à 20 caractères ;
- suffixé d'un chiffre en cas de collision.

Testez sur : « Éloïse Dupont-Martin », « Jean-François O'Brien », « Anne Le Hénaff ».

**C4.** Écrivez le script d'import de masse depuis un CSV, avec : validation des
colonnes obligatoires avant de commencer, comptes existants ignorés sans erreur,
journalisation de chaque action, rapport final (créés / ignorés / en erreur),
et un mode simulation.

---

## Partie D : Modifier un utilisateur (5 min)

**D1.** Modifiez plusieurs attributs en une seule commande.

**D2.** Vérifiez les modifications.

**D3.** Comment modifier un attribut qui n'a pas de paramètre dédié dans
`Set-ADUser` ?

---

## Partie E : Gérer un départ (5 min)

**E1.** Quelle différence entre désactiver et supprimer un compte ?

**E2.** Laquelle faut-il faire en premier lors d'un départ ? Pourquoi ?

**E3.** Écrivez une procédure de départ complète : désactiver, déplacer dans une
OU d'archivage, vider les appartenances aux groupes, et journaliser l'opération.

---

## Mission finale F : l'audit des comptes à risque 🕵️

**F1.** Produisez un rapport identifiant :

- les comptes activés jamais utilisés ;
- les comptes inactifs depuis plus de 90 jours ;
- les comptes dont le mot de passe n'expire jamais ;
- les comptes verrouillés ;
- les comptes sans responsable renseigné.

Pour chacun, indiquez la commande **et** pourquoi c'est un risque.

**F2.** Pourquoi `Get-ADUser -Filter "LastLogonDate -lt '01/01/2026'"` ne
fonctionne-t-il pas ? Donnez deux façons correctes d'obtenir le même résultat.

---

## Validation

✅ Vous créez des comptes complets et correctement rangés
✅ Vous générez des logins normalisés et gérez les collisions
✅ Vous écrivez un script d'import **idempotent** et traçable
✅ Vous ne journalisez jamais un mot de passe en clair
✅ Vous savez auditer les comptes à risque d'un annuaire
