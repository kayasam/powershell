---
title: "Exercice 03 - L'Autopsie du Den Den Mushi - Débutant"
publier: true
parcours-tssr: true
parcours-pro: false
---

# Exercice 03 - L'Autopsie du Den Den Mushi 🐌 — Débutant

> Chapitre associé : [[03-objets/03-objets]]

## Contexte

Un escargophone saisi sur un navire pirate est posé sur votre bureau. Vous ne
savez pas ce qu'il contient — mais vous savez le démonter.

En PowerShell, tout ce qui sort d'une commande est un **objet** : il a des
propriétés (ce qu'il _est_) et des méthodes (ce qu'il _sait faire_).

> _"Tout objet raconte son histoire, si on sait l'interroger."_ — Nico Robin

**Durée : 25 min**

## Objectif

Ne plus jamais dire « je ne sais pas quoi mettre après le point ».

---

## Partie A : Texte ou objet ? (5 min)

Tapez ces deux commandes :

```powershell
Get-Process -Name explorer
Get-Process -Name explorer | Get-Member
```

**A1.** La première affiche un tableau. Est-ce du texte ?

**A2.** Quel **TypeName** la seconde affiche-t-elle en haut ?

**A3.** Combien de membres de type `Property` voyez-vous ?

> 💡 **Indice** : pour compter, entourez de parenthèses et ajoutez `.Count`.

---

## Partie B : Accéder aux propriétés (5 min)

```powershell
# On range l'objet dans une variable
$fichier = Get-Item "C:\Windows\notepad.exe"

$fichier.Name
$fichier.Length
$fichier.LastWriteTime
```

**B1.** Que valent ces trois propriétés sur votre machine ?

**B2.** Trouvez et affichez trois **autres** propriétés de `$fichier`.

**B3.** Quelle propriété donne le **chemin complet** du fichier ?

> 💡 **Indice** : `$fichier | Get-Member -MemberType Property` liste tout ce qui existe.

---

## Partie C : Filtrer ce que montre Get-Member (5 min)

```powershell
# Uniquement les propriétés
Get-Service -Name Spooler | Get-Member -MemberType Property

# Uniquement les méthodes
Get-Service -Name Spooler | Get-Member -MemberType Method
```

**C1.** Quelle propriété donne l'**état** du service ?

**C2.** Quelle méthode permettrait de l'**arrêter** ?

> ⚠️ Ne lancez pas la méthode d'arrêt : contentez-vous de la trouver.

---

## Partie D : Les méthodes (5 min)

Une méthode s'appelle avec des **parenthèses** :

```powershell
$nom = "Monkey D. Luffy"

$nom.Length          # propriété -> 15
$nom.ToUpper()       # méthode   -> MONKEY D. LUFFY
$nom.Split(" ")      # méthode   -> 3 morceaux
```

**D1.** Que renvoie `$nom.Split(" ")` exactement ?

**D2.** À partir de `$nom`, produisez `LUFFY` en une seule ligne.

> 💡 **Indice** : `Split` renvoie un tableau. Le premier élément porte l'index `0`.

---

## Mission finale E : la fiche du suspect 🔍

**E1.** À partir de `Get-Process -Name explorer`, affichez **une seule ligne**
contenant le nom du processus, son identifiant (PID), et sa mémoire de travail
en **mégaoctets**.

> 💡 **Indice** : la propriété `WorkingSet64` est en octets, et `1MB` est un
> raccourci valide en PowerShell : `$p.WorkingSet64 / 1MB`. Peu importe le
> nombre de décimales affichées. Pour coller les morceaux en une seule ligne
> de texte, utilisez `+` (comme une addition, mais avec du texte) :
> `"Nom : " + $p.Name`.

---

> [!success] Validation
>
> - Vous savez que PowerShell renvoie des **objets**, pas du texte
> - Vous utilisez `Get-Member` pour explorer un objet inconnu
> - Vous accédez à une propriété avec `$objet.Propriete`
> - Vous appelez une méthode avec `$objet.Methode()`
> - Vous savez faire la différence entre une **propriété** et une **méthode**
