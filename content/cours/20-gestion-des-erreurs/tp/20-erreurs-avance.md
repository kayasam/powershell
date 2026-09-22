---
title: "Exercice 20 - Le Courage d'Usopp - Avancé"
publier: true
parcours-tssr: true
parcours-pro: true
---

# Exercice 20 - Le Courage d'Usopp 🎯 — Avancé

> Chapitre associé : [[20-gestion-des-erreurs/20-gestion-des-erreurs]]
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

**A3.** Classez ces situations et vérifiez chacune :

| Situation                        | Terminante ? | `catch` se déclenche ? |
| -------------------------------- | ------------ | ---------------------- |
| `Get-Item` sur un fichier absent |              |                        |
| Division par zéro                |              |                        |
| Appel d'une cmdlet inexistante   |              |                        |
| `Write-Error`                    |              |                        |
| Erreur de syntaxe dans le script |              |                        |

Laquelle ne peut **jamais** être interceptée par `try/catch` ? Pourquoi ?

---

## Partie B : Attraper les erreurs (15 min)

**B1.** Entourez la lecture d'un `try/catch` de façon à ce que le `catch` se
déclenche réellement. Quel paramètre est indispensable ?

**B2.** Sans ce paramètre, le `catch` part-il ? Expliquez.

**B3.** Le bloc `finally` s'exécute-t-il dans les deux cas ? À quoi sert-il ?

**B4.** Dans le `catch`, affichez le message, le **type** de l'exception, la
**ligne** et la **commande** fautive.

**B5.** Écrivez un `try/catch` distinguant « fichier absent » de « accès refusé ».
Dans quel ordre les blocs `catch` doivent-ils être écrits ? Que se passe-t-il sinon ?

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

## Partie D : Préférences et flux

**D1.** Que fait `$ErrorActionPreference = 'Stop'` en tête de script ?
Quel est le risque de le mettre sans réfléchir ?

**D2.** Quelle différence entre `SilentlyContinue` et `Ignore` ? Comment inspecter
une erreur qu'on a volontairement rendue silencieuse ?

**D3.** Que fait `2>&1` ? Quel type d'objet obtient-on ?

**D4.** Écrivez une boucle qui traite dix chemins, dont quatre invalides, et qui :
ne s'arrête jamais, compte succès et échecs séparément, collecte le détail de
chaque échec dans un objet, et produit un rapport CSV.

---

## Mission finale E : le script indestructible 🌟

**E1.** Écrivez une fonction de lecture robuste : contenu si tout va bien,
message clair et `$null` sinon, jamais d'interruption, journalisation des erreurs.

**E2.** Complétez-la avec un **code de sortie** : `0` si tout s'est bien passé,
`1` s'il y a eu des erreurs partielles, `2` en cas d'échec bloquant.

**E3.** Comment l'appelant récupère-t-il ce code ? Pourquoi est-ce indispensable
pour une tâche planifiée ?

---

> [!success] Validation
>
> - Vous distinguez erreur **terminante** et **non terminante**
> - Vous savez qu'il faut `-ErrorAction Stop` pour attraper la seconde
> - Vous écrivez des `catch` typés, dans le bon ordre
> - Vous produisez un journal d'erreur exploitable
> - Vous terminez vos scripts par un `exit` explicite
