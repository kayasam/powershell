# Exercice 09 - Le Pipeline des Pirates 🏴‍☠️

## Contexte

La Marine a intercepté la liste complète des primes des membres du Thousand Sunny.
Votre mission : analyser ces données avec PowerShell pour préparer le briefing de la semaine.

## Les données

Commencez par créer cette liste dans votre terminal :

```powershell
$equipage = @(
    [PSCustomObject]@{ Nom="Monkey D. Luffy";  Role="Capitaine";      Prime=3000000000; DevilFruit=$true  }
    [PSCustomObject]@{ Nom="Roronoa Zoro";     Role="Combattant";     Prime=1111000000; DevilFruit=$false }
    [PSCustomObject]@{ Nom="Nami";             Role="Navigatrice";    Prime=366000000;  DevilFruit=$false }
    [PSCustomObject]@{ Nom="Usopp";            Role="Tireur";         Prime=500000000;  DevilFruit=$false }
    [PSCustomObject]@{ Nom="Sanji";            Role="Cuisinier";      Prime=1032000000; DevilFruit=$false }
    [PSCustomObject]@{ Nom="Tony Tony Chopper";Role="Medecin";        Prime=1000;       DevilFruit=$true  }
    [PSCustomObject]@{ Nom="Nico Robin";       Role="Archeologue";    Prime=930000000;  DevilFruit=$true  }
    [PSCustomObject]@{ Nom="Franky";           Role="Charpentier";    Prime=394000000;  DevilFruit=$false }
    [PSCustomObject]@{ Nom="Brook";            Role="Musicien";       Prime=383000000;  DevilFruit=$true  }
    [PSCustomObject]@{ Nom="Jinbe";            Role="Barreur";        Prime=1100000000; DevilFruit=$false }
)
```

## Mission 1 : Trier par danger (5 min)

La Marine veut la liste triée du plus dangereux au moins dangereux (par prime).

```powershell
# À vous de compléter...
$equipage | Sort-Object ??? -Descending
```

**Résultat attendu** : Luffy en premier (3 milliards), Chopper en dernier (1 000 berrys).

## Mission 2 : Les Devil Fruits (5 min)

Combien de membres ont mangé un Devil Fruit ?

```powershell
# Filtrer ceux qui ont un Devil Fruit
$equipage | Where-Object ???

# Compter combien ils sont
$equipage | Where-Object ??? | Measure-Object
```

**Réponse attendue** : 5 membres ont un Devil Fruit.

## Mission 3 : Les primes en milliards (5 min)

Affichez uniquement les membres avec une prime supérieure à 500 millions, avec leur prime en milliards (arrondie à 2 décimales).

```powershell
$equipage |
    Where-Object { $_.Prime -gt 500000000 } |
    Select-Object Nom, @{Name="Prime (Mrd)"; Expression={ [math]::Round($_.Prime / 1000000000, 2) }}
```

**Lancez-le** et observez la sortie. Qui a plus d'un milliard de prime ?

## Mission 4 : Le rapport de la Marine (10 min)

Créez un rapport complet :

1. Total des primes combinées de l'équipage
2. Prime moyenne par membre
3. La prime la plus haute

```powershell
# Total des primes
$equipage | Measure-Object Prime -Sum

# Moyenne
$equipage | Measure-Object Prime -Average

# Maximum
$equipage | Measure-Object Prime -Maximum
```

**Question** : La prime totale de l'équipage dépasse-t-elle 8 milliards de berrys ?

## Mission 5 : Le classement par rôle (10 min)

Regroupez l'équipage par rôle et comptez combien il y a de membres dans chaque rôle.

```powershell
$equipage | Group-Object ???
```

## Mission Bonus : Le rapport complet 🌟

Combinez tout pour afficher le rapport que la Marine enverra au Gouvernement Mondial.
Affichez pour chaque pirate avec une prime > 500M : leur nom, rôle, prime en milliards, et si ils ont un Devil Fruit.
Triez par prime décroissante, et formatez proprement en tableau.

<details>
<summary>💡 Solution de la Mission Bonus</summary>

```powershell
$equipage |
    Where-Object { $_.Prime -gt 500000000 } |
    Sort-Object Prime -Descending |
    Select-Object Nom, Role,
        @{Name="Prime (Mrd)"; Expression={ [math]::Round($_.Prime / 1000000000, 2) }},
        @{Name="Devil Fruit"; Expression={ if ($_.DevilFruit) { "Oui" } else { "Non" } }} |
    Format-Table -AutoSize
```

</details>

## Validation

✅ Vous savez filtrer avec `Where-Object`
✅ Vous savez trier avec `Sort-Object`
✅ Vous savez créer des colonnes calculées avec `Select-Object`
✅ Vous savez grouper avec `Group-Object`
✅ Vous savez mesurer avec `Measure-Object`
