---
title: "Exercice 05 - Les Noms de Code de la Marine - Débutant"
publier: true
parcours-tssr: true
parcours-pro: false
---

# Exercice 05 - Les Noms de Code de la Marine 🏷️ — Débutant

> Chapitre associé : [[cours/05-alias/05-alias]]

## Contexte

Chaque agent de la Marine a un nom officiel... et un surnom sur le terrain.
PowerShell fonctionne pareil : `Get-ChildItem` sur les rapports, `dir` dans le
feu de l'action.

> _"Un bon agent répond aux deux."_ — Vice-Amiral Garp

**Durée : 15 min**

## Objectif

Connaître les surnoms sans oublier les vrais noms — et savoir lequel employer.

---

## Partie A : Découvrir les alias existants (5 min)

```powershell
# Lister tous les alias
Get-Alias

# Quelle cmdlet se cache derrière "dir" ?
Get-Alias dir

# Quels alias pointent vers Get-ChildItem ?
Get-Alias -Definition Get-ChildItem
```

**A1.** Combien d'alias existent par défaut sur votre poste ?

**A2.** Quels sont les trois alias de `Get-ChildItem` ?

**A3.** Complétez ce tableau en vérifiant chaque réponse dans la console :

| Alias | Cmdlet réelle |
| ----- | ------------- |
| `cat` |               |
| `cp`  |               |
| `rm`  |               |
| `%`   |               |
| `?`   |               |

---

## Partie B : Utiliser les alias courants (5 min)

```powershell
dir       # = Get-ChildItem
ls        # = Get-ChildItem
cd C:\    # = Set-Location
pwd       # = Get-Location
cls       # = Clear-Host
```

**B1.** Testez ces cinq alias. Fonctionnent-ils tous ?

**B2.** À votre avis, pourquoi `dir` (venu de CMD) **et** `ls` (venu de Linux)
existent-ils tous les deux ?

---

## Partie C : Créer vos propres alias (5 min)

```powershell
# Un alias pour notepad
New-Alias -Name np -Value notepad
np    # lance notepad

# Supprimer un alias
Remove-Alias -Name np
```

**C1.** Créez deux alias qui vous seraient utiles. Lesquels ?

**C2.** Fermez la console, rouvrez-la : vos alias existent-ils encore ? Pourquoi ?

---

## Mission finale D : le rapport bilingue 📋

Écrivez la même commande deux fois — version « terrain » (alias) puis version
« rapport officiel » (noms complets) :

**D1.** Lister les fichiers de `C:\Windows`.

**D2.** Afficher le dossier courant.

**D3.** Effacer l'écran.

**D4.** Laquelle des deux versions mettriez-vous dans un script partagé à toute
l'équipe ? Pourquoi ?

---

> [!success] Validation
>
> - Vous connaissez les alias courants (`dir`, `ls`, `cd`, `cls`, `pwd`)
> - Vous savez retrouver la cmdlet derrière un alias avec `Get-Alias`
> - Vous savez créer un alias avec `New-Alias`
> - Vous savez que les alias créés sont **temporaires**
> - Vous savez qu'on n'utilise **pas** d'alias dans un script partagé
