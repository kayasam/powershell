---
title: "Exercice 09 - Le Pipeline des Pirates - Débutant"
publier: true
parcours-tssr: true
parcours-pro: false
---

# Exercice 09 - Le Pipeline des Pirates 🏴‍☠️ — Débutant

> Chapitre associé : [[09-pipeline/09-pipeline]]

## Contexte

La Marine a intercepté la liste complète des primes des membres du Thousand Sunny.
Votre mission : analyser ces données pour préparer le briefing de la semaine.

**Durée : 35 min**

## Les données

Commencez par créer cette liste dans votre terminal :

```powershell
$equipage = @(
    [PSCustomObject]@{ Nom="Monkey D. Luffy";   Role="Capitaine";   Prime=3000000000; DevilFruit=$true  }
    [PSCustomObject]@{ Nom="Roronoa Zoro";      Role="Combattant";  Prime=1111000000; DevilFruit=$false }
    [PSCustomObject]@{ Nom="Nami";              Role="Navigatrice"; Prime=366000000;  DevilFruit=$false }
    [PSCustomObject]@{ Nom="Usopp";             Role="Tireur";      Prime=500000000;  DevilFruit=$false }
    [PSCustomObject]@{ Nom="Sanji";             Role="Cuisinier";   Prime=1032000000; DevilFruit=$false }
    [PSCustomObject]@{ Nom="Tony Tony Chopper"; Role="Medecin";     Prime=1000;       DevilFruit=$true  }
    [PSCustomObject]@{ Nom="Nico Robin";        Role="Archeologue"; Prime=930000000;  DevilFruit=$true  }
    [PSCustomObject]@{ Nom="Franky";            Role="Charpentier"; Prime=394000000;  DevilFruit=$false }
    [PSCustomObject]@{ Nom="Brook";             Role="Musicien";    Prime=383000000;  DevilFruit=$true  }
    [PSCustomObject]@{ Nom="Jinbe";             Role="Barreur";     Prime=1100000000; DevilFruit=$false }
)
```

---

## Partie A : Trier par danger (5 min)

La Marine veut la liste triée du plus dangereux au moins dangereux.

```powershell
$equipage | Sort-Object Prime -Descending
```

**A1.** Qui arrive en premier ? Qui arrive en dernier ?

**A2.** Enlevez `-Descending`. Que se passe-t-il ?

---

## Partie B : Les Devil Fruits (5 min)

```powershell
# Filtrer ceux qui ont un Devil Fruit
$equipage | Where-Object DevilFruit -eq $true

# Les compter
($equipage | Where-Object DevilFruit -eq $true).Count
```

**B1.** Combien de membres ont mangé un Devil Fruit ?

**B2.** Affichez au contraire ceux qui n'en ont **pas**.

> 💡 **Indice** : l'opérateur « différent de » s'écrit `-ne`.

---

## Partie C : Les grosses primes (5 min)

```powershell
# Les primes supérieures à 500 millions
$equipage | Where-Object { $_.Prime -gt 500000000 }

# On ne garde que deux colonnes
$equipage |
    Where-Object { $_.Prime -gt 500000000 } |
    Select-Object Nom, Prime
```

**C1.** Combien de pirates dépassent 500 millions ?

**C2.** Affichez uniquement ceux qui dépassent **un milliard**, avec leur nom et
leur rôle.

> 💡 **Indice** : dans `Where-Object { ... }`, `$_` désigne le pirate en cours
> d'examen. `$_.Prime` est donc sa prime.

---

## Partie D : Le rapport de la Marine (10 min)

```powershell
$equipage | Measure-Object Prime -Sum
$equipage | Measure-Object Prime -Average
$equipage | Measure-Object Prime -Maximum
```

**D1.** Quel est le total des primes de l'équipage ?

**D2.** Quelle est la prime moyenne ?

**D3.** La prime totale dépasse-t-elle 8 milliards de berrys ?

> 💡 **Indice** : `Measure-Object` accepte plusieurs calculs d'un coup :
> `-Sum -Average -Maximum`.

---

## Partie E : Le classement par rôle (5 min)

```powershell
$equipage | Group-Object Role
```

**E1.** Combien de groupes obtenez-vous ? Pourquoi ?

**E2.** Regroupez plutôt par `DevilFruit`. Que donne le résultat ?

---

## Mission finale F : le rapport complet 🌟

**F1.** Combinez tout pour produire le rapport que la Marine enverra au
Gouvernement Mondial :

- uniquement les pirates avec une prime supérieure à 500 millions
- colonnes : nom, rôle, prime, présence d'un Devil Fruit
- trié par prime décroissante
- affiché proprement en tableau

> 💡 **Indice** : enchaînez `Where-Object`, `Sort-Object`, `Select-Object`, puis
> `Format-Table -AutoSize` **en dernier**.

---

> [!success] Validation
>
> - Vous savez filtrer avec `Where-Object`
> - Vous savez trier avec `Sort-Object`
> - Vous savez choisir les colonnes avec `Select-Object`
> - Vous savez grouper avec `Group-Object`
> - Vous savez mesurer avec `Measure-Object`
> - Vous savez enchaîner plusieurs étapes dans un seul pipeline
