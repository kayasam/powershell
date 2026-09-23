---
title: Exercice 01 - L'Équipement de la Recrue - Avancé
publier: true
parcours-tssr: false
parcours-pro: false
---

# Exercice 01 - L'Équipement de la Recrue 🎖️ — Avancé

> Chapitre associé : [[cours/01-installation-et-environnement/01-installation-et-environnement]]
> Mêmes parties que la version débutant, mais **sans les commandes**. À vous de les trouver.

## Contexte

Avant d'embarquer, toute recrue passe à l'armurerie : on vérifie son équipement,
on s'assure qu'il est de la bonne génération, et qu'il est autorisé à servir.

> _"Une arme qu'on n'a pas vérifiée est une arme qui trahit."_ — Vice-Amiral Garp

**Durée : 20 min**

## Objectif

Vérifier que PowerShell est correctement installé, identifier sa version, et
autoriser l'exécution de vos futurs scripts.

## Prérequis

- Accès administrateur sur la machine
- Connexion Internet

---

## Partie A : Identifier son équipement (5 min)

Trouvez la variable automatique qui contient toutes les informations de version
de PowerShell, puis répondez :

**A1.** Quelle version de PowerShell utilisez-vous ?

**A2.** Quelle est votre édition : `Core` ou `Desktop` ?

**A3.** Sur quel système d'exploitation êtes-vous ?

---

## Partie B : Les deux générations (5 min)

Windows embarque **deux** PowerShell différents. Ouvrez-les tous les deux depuis
le menu Démarrer et relevez la version dans chacun.

Si PowerShell 7 est absent, installez-le en ligne de commande avec le gestionnaire
de paquets intégré à Windows.

**B1.** Quelle version affiche la console bleue ? Et la noire ?

**B2.** Pourquoi les deux cohabitent-elles sur la même machine ?

**B3.** Où sont installés leurs exécutables respectifs ?

---

## Partie C : Le droit d'exécuter (5 min)

Par défaut, Windows bloque l'exécution des scripts `.ps1`.

**C1.** Affichez la politique d'exécution actuellement appliquée. Laquelle est-ce ?

**C2.** Affichez le détail **par portée**. Quelle portée impose la valeur effective ?

**C3.** Autorisez vos propres scripts locaux, pour votre compte uniquement, sans
toucher au réglage de la machine. Vérifiez que la valeur a changé.

**C4.** Citez les cinq portées, de la plus prioritaire à la moins prioritaire.

---

## Partie D : Premières commandes (5 min)

Sans qu'on vous les donne, trouvez les commandes qui affichent la date et l'heure,
le dossier courant, et les cinq premiers processus en cours.

**D1.** Que renvoie la commande du dossier courant ?

**D2.** Comment avez-vous limité l'affichage aux cinq premiers processus ?

**D3.** Quelle cmdlet sert à chercher les autres commandes ? Donnez deux façons
de s'en servir.

---

## Mission finale E : votre premier script 🏴‍☠️

**E1.** Créez un fichier `bonjour-marine.ps1` dans votre dossier Documents,
**en ligne de commande**.

**E2.** Faites-lui afficher votre nom de recrue et la date du jour au format
`JJ/MM/AAAA`.

**E3.** Exécutez-le depuis la console.

**E4.** Faites-lui afficher en plus le nom de la machine et la version de
PowerShell qui l'exécute.

**E5.** Si le script est refusé, identifiez la cause exacte et corrigez-la.
Quelles sont les **deux** causes possibles, et comment trancher entre elles ?

---

> [!success] Validation
>
> - Vous savez afficher votre version de PowerShell
> - Vous distinguez Windows PowerShell 5.1 de PowerShell 7
> - Vous savez lire la politique d'exécution par portée et la modifier au bon niveau
> - Vous avez créé et exécuté un premier script `.ps1`
> - Vous savez retrouver une commande sans la connaître à l'avance
