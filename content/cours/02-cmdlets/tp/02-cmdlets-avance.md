---
title: "Exercice 02 - Les Outils de la Marine - Avancé"
publier: true
parcours-tssr: true
parcours-pro: true
---

# Exercice 02 - Les Outils de la Marine 🌊 — Avancé

> Chapitre associé : [[cours/02-cmdlets/02-cmdlets]]
> Mêmes parties que la version débutant, mais **sans les commandes**. À vous de les trouver.

## Contexte

Vous venez d'intégrer le **Bureau d'Analyse de la Marine**. Votre supérieur vous
remet votre premier outil : PowerShell.

> _"Un Marine qui ne connaît pas ses outils est un Marine inutile."_ — Vice-Amiral Tsuru

**Durée : 30 min**

## Objectif

Savoir chercher une commande sans la connaître, lire son aide, et inspecter ce
qu'elle renvoie.

---

## Partie A : Trouver les outils (10 min)

Trouvez la cmdlet qui permet de chercher toutes les autres, puis répondez :

**A1.** Combien de commandes votre poste propose-t-il ?

**A2.** Combien de commandes pour les verbes `Get`, `Stop` et `New` ?

**A3.** Quel verbe a le plus de commandes associées ? Établissez le classement des
trois premiers, avec leur nombre.

**A4.** Quelles commandes existent pour le nom `Process` ? Devinez leur rôle.

**A5.** Combien de commandes parlent de `Service` ?

**A6.** Quels **types** de commandes cette cmdlet renvoie-t-elle ? Donnez leur
nombre respectif.

---

## Partie B : Lire le manuel (10 min)

Trouvez la cmdlet qui affiche l'aide d'une commande.

**B1.** Comment obtenir uniquement des **exemples** d'utilisation ? Exécutez-en deux.

**B2.** Quel paramètre de `Get-Process` permet de filtrer par **nom** ?

**B3.** Quel paramètre permet d'interroger une machine **distante** ?

**B4.** L'aide affichée est-elle complète sur votre poste ? Sinon, quelle commande
la télécharge, et que faire sans accès Internet ?

---

## Partie C : Inspecter un objet (10 min)

Trouvez la cmdlet qui liste les propriétés et méthodes d'un objet.

**C1.** Quel est le type exact de ce que renvoie `Get-Process` ?

**C2.** Combien de propriétés un processus a-t-il ? Combien de méthodes ?

**C3.** Pour un service et pour une date, notez trois propriétés utiles.

**C4.** Quelle différence entre une **propriété** et une **méthode** ? À quoi les
reconnaît-on à l'écrit ?

---

## Mission finale D : rapport d'espionnage 🏴‍☠️

**D1.** Affichez les processus actifs avec leur nom, leur identifiant et leur
mémoire utilisée.

**D2.** Faites la même chose sur les services, avec nom, statut et nom affiché.

**D3.** N'affichez que les 5 premiers résultats.

**D4.** À l'aide de `Get-Member`, trouvez la propriété qui donne le **chemin de
l'exécutable** d'un processus, puis affichez nom et chemin pour les 5 premiers.

---

> [!success] Validation
>
> - Vous savez chercher une commande avec la cmdlet dédiée
> - Vous savez lire l'aide et en tirer un exemple utilisable
> - Vous savez explorer un objet inconnu
> - Vous distinguez propriété et méthode
> - Vous savez trouver une propriété utile et l'afficher en colonne
