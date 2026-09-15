---
title: "Exercice 03 - L'Autopsie du Den Den Mushi"
---

# Exercice 03 - L'Autopsie du Den Den Mushi 🐌

## Contexte

Un escargophone saisi sur un navire pirate est posé sur votre bureau.
Vous ne savez pas ce qu'il contient — mais vous savez le démonter.
En PowerShell, tout ce qui sort d'une commande est un **objet** : il a des
propriétés (ce qu'il _est_) et des méthodes (ce qu'il _sait faire_).

Objectif : ne plus jamais dire "je ne sais pas quoi mettre après le point".

> _"Tout objet raconte son histoire, si on sait l'interroger."_ — Nico Robin

**Durée : 20 min**

## Partie 1 : Texte ou objet ? (5 min)

Tapez ces deux commandes :

```powershell
Get-Process -Name explorer
Get-Process -Name explorer | Get-Member
```

**Questions** :

- La première affiche un tableau. Est-ce du texte ?
- Quel **TypeName** la seconde affiche-t-elle en haut ?
- Combien de membres de type `Property` voyez-vous ?

## Partie 2 : Accéder aux propriétés (5 min)

```powershell
# On range l'objet dans une variable
$fichier = Get-Item "C:\Windows\notepad.exe"

$fichier.Name
$fichier.Length
$fichier.LastWriteTime
```

**Exercice** : trouvez et affichez 3 autres propriétés de `$fichier`
(indice : `$fichier | Get-Member -MemberType Property`).

**Question** : quelle propriété donne le chemin complet du fichier ?

## Partie 3 : Filtrer ce que montre Get-Member (5 min)

```powershell
# Uniquement les propriétés
Get-Service | Get-Member -MemberType Property

# Uniquement les méthodes
Get-Service | Get-Member -MemberType Method
```

**Exercice** : sur un objet `Get-Service -Name Spooler`, répondez :

- Quelle propriété donne l'état du service ?
- Quelle méthode permettrait de l'arrêter ?

> ⚠️ Ne lancez pas la méthode d'arrêt, contentez-vous de la trouver.

## Partie 4 : Les méthodes (5 min)

Une méthode s'appelle avec des **parenthèses** :

```powershell
$nom = "Monkey D. Luffy"

$nom.Length          # propriété → 15
$nom.ToUpper()       # méthode   → MONKEY D. LUFFY
$nom.Split(" ")      # méthode   → 3 morceaux
```

**Exercice** : à partir de `$nom`, produisez `LUFFY` en une seule ligne.

## Mission finale : la fiche du suspect 🔍

À partir de `Get-Process -Name explorer`, affichez **une seule ligne** contenant :

- le nom du processus
- son identifiant (PID)
- sa mémoire de travail en **mégaoctets** (arrondie)

Indice : la propriété `WorkingSet64` est en octets, et `1MB` est un raccourci valide en PowerShell.

## Validation

✅ Vous savez que PowerShell renvoie des **objets**, pas du texte
✅ Vous utilisez `Get-Member` pour explorer un objet inconnu
✅ Vous accédez à une propriété avec `$objet.Propriete`
✅ Vous appelez une méthode avec `$objet.Methode()`
✅ Vous savez faire la différence entre une **propriété** et une **méthode**
