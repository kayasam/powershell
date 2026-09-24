---
title: "Exercice 20 - Le Courage d'Usopp - Avancé"
publier: true
parcours-tssr: true
parcours-pro: true
---

# Exercice 20 - Le Courage d'Usopp 🎯 — Avancé

> Chapitre associé : [[cours/20-gestion-des-erreurs/20-gestion-des-erreurs]]
> Mêmes parties que la version débutant, mais **sans les commandes**. À vous de les trouver.

## Contexte

En production, ce n'est pas l'erreur qui coûte cher : c'est l'erreur qu'on ne
comprend pas, trois semaines après, dans un journal illisible.

> _"Le courage, ce n'est pas l'absence de peur. C'est agir malgré elle."_ — Usopp

**Durée : 35 min**

---

## Partie A : Sans protection (5 min)

**A1.** Lisez un fichier inexistant. Que se passe-t-il à l'écran ?

**A2.** Le script s'arrête-t-il, ou continue-t-il ?

**A3.** Testez chacune de ces situations dans un `try/catch` **sans**
`-ErrorAction Stop`, et notez si le `catch` se déclenche :

| Situation                        | `catch` se déclenche ? |
| -------------------------------- | ---------------------- |
| `Get-Item` sur un fichier absent |                        |
| Division par zéro                |                        |
| Appel d'une cmdlet inexistante   |                        |

Que faut-il ajouter pour que la première soit interceptée ?

---

## Partie B : Attraper les erreurs (15 min)

**B1.** Entourez la lecture d'un `try/catch` de façon à ce que le `catch` se
déclenche réellement. Quel paramètre est indispensable ?

**B2.** Sans ce paramètre, le `catch` part-il ? Expliquez.

**B3.** Le bloc `finally` s'exécute-t-il dans les deux cas ? À quoi sert-il ?

**B4.** Dans le `catch`, affichez le message, le **type** de l'exception et la
**ligne** où elle est survenue.

---

## Partie C : Les patterns de survie (15 min)

**C1.** Écrivez une fonction qui teste l'existence **avant** d'agir et renvoie
`$null` proprement si le fichier manque.

**C2.** Écrivez une fonction de configuration qui renvoie des **valeurs par
défaut** si le fichier est absent ou corrompu.

**C3.** Quel est l'intérêt d'une valeur de repli plutôt qu'une erreur ?
Dans quel cas est-ce au contraire **dangereux** ?

**C4.** Écrivez une fonction de journalisation horodatée, qui crée son dossier si
besoin, écrit dans un fichier **et** affiche à l'écran avec une couleur par niveau.

**C5.** Quelles informations minimales un journal d'erreur doit-il contenir pour
être exploitable trois semaines plus tard ?

---

## Partie D : Traiter un lot sans s'arrêter

**D1.** Écrivez une boucle qui traite dix chemins, dont quatre invalides, et qui :
ne s'arrête jamais, compte succès et échecs séparément, et affiche un bilan final.

**D2.** Collectez le détail de chaque échec dans un objet, puis exportez le
rapport en CSV (chapitre 17).

---

## Mission finale E : le script indestructible 🌟

**E1.** Écrivez une fonction de lecture robuste : contenu si tout va bien,
message clair et `$null` sinon, jamais d'interruption, journalisation des erreurs.

**E2.** Testez-la sur un fichier existant puis sur un fichier absent. Vérifiez
que le script appelant va **jusqu'au bout** dans les deux cas, et que le journal
contient bien les deux passages.

---

> [!success] Validation
>
> - Vous distinguez erreur **terminante** et **non terminante**
> - Vous savez qu'il faut `-ErrorAction Stop` pour attraper la seconde
> - Vous connaissez les trois patterns : tester, replier, journaliser
> - Vous produisez un journal d'erreur exploitable
> - Vous traitez un lot d'éléments sans jamais interrompre le script
