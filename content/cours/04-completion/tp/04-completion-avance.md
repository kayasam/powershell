---
title: "Exercice 04 - Le Reflexe Tab - Avancé"
publier: true
parcours-tssr: true
parcours-pro: true
---

# Exercice 04 - Le Reflexe Tab ⚡ — Avancé

> Chapitre associé : [[04-completion/04-completion]]
> Mêmes parties que la version débutant, mais **sans les commandes**. À vous de les trouver.

## Contexte

La Marine a des centaines de commandes à saisir chaque jour. Les meilleurs agents
ne tapent pas tout — ils laissent la console finir à leur place.

> _"La vitesse, c'est aussi une forme de puissance."_ — Kizaru

**Durée : 15 min**

## Objectif

Ne plus jamais écrire un nom de cmdlet en entier, et savoir régler la complétion.

---

## Partie A : Compléter les cmdlets (5 min)

**A1.** Trouvez 5 cmdlets en utilisant uniquement Tab. Lesquelles ?

**A2.** Que se passe-t-il si vous appuyez **plusieurs fois** sur Tab ? Et comment
revenir en arrière ?

**A3.** Le mode par défaut fait défiler les propositions une à une. Il existe un
mode qui affiche un **menu**. Trouvez comment l'activer.

---

## Partie B : Compléter les paramètres (5 min)

**B1.** Utilisez Tab pour découvrir les paramètres de `Get-Process`. Citez-en cinq.

**B2.** La complétion propose-t-elle aussi les **valeurs** possibles ? Testez sur
un nom de service, puis sur `Set-ExecutionPolicy`.

**B3.** Qu'est-ce que cela implique sur ce que PowerShell fait pendant que vous tapez ?

---

## Partie C : Compléter les chemins (5 min)

**C1.** Naviguez jusqu'à `C:\Windows\System32` en utilisant uniquement Tab.

**C2.** Que se passe-t-il si le début du chemin n'existe pas ?

**C3.** Établissez ce tableau en testant chaque cas :

| Situation           | La complétion fonctionne-t-elle ? |
| ------------------- | --------------------------------- |
| Nom de cmdlet       |                                   |
| Nom de paramètre    |                                   |
| Valeur de paramètre |                                   |
| Chemin existant     |                                   |
| Chemin inexistant   |                                   |
| Nom de variable     |                                   |

---

## Mission finale D : zéro faute de frappe 🏆

Sans jamais taper un nom complet :

**D1.** La liste des processus nommés `explorer`.

**D2.** Le contenu de `C:\Windows\System32\drivers`.

**D3.** Le service `Spooler` avec son statut.

**D4.** Écrivez une fonction avec un paramètre limité à quatre valeurs au choix,
et vérifiez que Tab propose ces quatre valeurs. Quel intérêt pour l'utilisateur ?

---

## Validation

✅ Vous utilisez **Tab** systématiquement pour compléter
✅ Vous savez que Tab fonctionne sur cmdlets, paramètres, valeurs et chemins
✅ Vous savez activer le mode menu de PSReadLine
✅ Vous savez qu'un attribut de validation alimente la complétion
