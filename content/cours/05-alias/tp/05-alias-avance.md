---
title: "Exercice 05 - Les Noms de Code de la Marine - Avancé"
publier: true
parcours-tssr: true
parcours-pro: true
---

# Exercice 05 - Les Noms de Code de la Marine 🏷️ — Avancé

> Chapitre associé : [[cours/05-alias/05-alias]]
> Mêmes parties que la version débutant, mais **sans les commandes**. À vous de les trouver.

## Contexte

Chaque agent de la Marine a un nom officiel... et un surnom sur le terrain.

> _"Un bon agent répond aux deux."_ — Vice-Amiral Garp

**Durée : 15 min**

## Objectif

Connaître les surnoms, savoir lequel employer, et mesurer le risque qu'ils font
courir à un script.

---

## Partie A : Découvrir les alias existants (5 min)

**A1.** Combien d'alias existent par défaut sur votre poste ?

**A2.** Quels sont les trois alias de `Get-ChildItem` ?

**A3.** Complétez ce tableau, en vérifiant chaque réponse :

| Alias | Cmdlet réelle |
| ----- | ------------- |
| `cat` |               |
| `cp`  |               |
| `rm`  |               |
| `%`   |               |
| `?`   |               |

**A4.** Quels alias pointent vers `ForEach-Object` ? Et vers `Where-Object` ?

---

## Partie B : Utiliser les alias courants (5 min)

**B1.** Testez `dir`, `ls`, `cd`, `pwd`, `cls`. Fonctionnent-ils tous ?

**B2.** Pourquoi `dir` (venu de CMD) **et** `ls` (venu de Linux) existent-ils
tous les deux ?

**B3.** `ls` sous PowerShell se comporte-t-il exactement comme `ls` sous Linux ?
Testez `ls -l` et concluez.

---

## Partie C : Créer vos propres alias (5 min)

**C1.** Créez deux alias qui vous seraient utiles. Lesquels ?

**C2.** Fermez la console, rouvrez-la : vos alias existent-ils encore ? Pourquoi ?

**C3.** Où faudrait-il déclarer un alias pour qu'il survive au redémarrage ?

**C4.** Créez un alias `dir` qui pointe vers `Get-Process` au lieu de
`Get-ChildItem`. Que se passe-t-il ensuite pour un script qui utilise `dir` ?
Rétablissez la situation.

---

## Mission finale D : le rapport bilingue 📋

**D1.** Lister les fichiers de `C:\Windows` — version terrain et version officielle.

**D2.** Afficher le dossier courant — les deux versions.

**D3.** Effacer l'écran — les deux versions.

**D4.** Laquelle mettriez-vous dans un script partagé ? Donnez **trois** raisons.

**D5.** Réécrivez ce script en noms complets :

```powershell
gci C:\Logs | ? { $_.Length -gt 1mb } | % { $_.Name }
```

---

> [!success] Validation
>
> - Vous savez retrouver la cmdlet derrière un alias, et l'inverse
> - Vous savez créer et supprimer un alias
> - Vous savez que les alias créés sont **temporaires**
> - Vous savez qu'un alias peut être **détourné**, et pourquoi c'est un risque
> - Vous savez réécrire un script en noms complets
