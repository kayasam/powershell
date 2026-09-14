# Exercice 05 - Les Noms de Code de la Marine 🏷️

## Contexte

Chaque agent de la Marine a un nom officiel... et un surnom sur le terrain.
PowerShell fonctionne pareil : `Get-ChildItem` sur les rapports, `dir` dans le feu de l'action.
Objectif : connaître les surnoms sans oublier les vrais noms.

> _"Un bon agent répond aux deux."_ — Vice-Amiral Garp

**Durée : 10 min**

## Partie 1 : Découvrir les alias existants

```powershell
# Lister tous les alias
Get-Alias

# Quelle cmdlet se cache derrière "dir" ?
Get-Alias dir

# Quels alias pointent vers Get-ChildItem ?
Get-Alias -Definition Get-ChildItem
```

**Questions** :

- Combien d'alias existent par défaut ?
- Quels sont les 3 alias de `Get-ChildItem` ?

## Partie 2 : Utiliser les alias courants

```powershell
dir       # = Get-ChildItem
ls        # = Get-ChildItem
cd C:\    # = Set-Location
pwd       # = Get-Location
cls       # = Clear-Host
```

**Exercice** : Retrouvez la cmdlet réelle derrière `cat`, `cp`, `mv` et `rm`.

## Partie 3 : Créer vos propres alias

```powershell
# Un alias pour notepad
New-Alias -Name np -Value notepad
np  # Lance notepad !

# Supprimer un alias
Remove-Alias -Name np
```

**Note** : Ces alias sont temporaires — ils disparaissent à la fermeture de PowerShell.

**Exercice** : Créez 2 alias qui vous seraient utiles.

## Mission : le rapport bilingue 📋

Écrivez la même commande deux fois — en version "terrain" (alias) puis en version "rapport officiel" (noms complets) :

1. Lister les fichiers de `C:\Windows`
2. Afficher le dossier courant
3. Effacer l'écran

Laquelle des deux versions mettriez-vous dans un script partagé à toute l'équipe ? Pourquoi ?

## Validation

✅ Vous connaissez les alias courants (`dir`, `ls`, `cd`, `cls`, `pwd`)
✅ Vous savez retrouver la cmdlet derrière un alias avec `Get-Alias`
✅ Vous savez créer un alias avec `New-Alias`
✅ Vous savez que les alias créés sont **temporaires**
✅ Vous savez qu'on n'utilise **pas** d'alias dans un script partagé
