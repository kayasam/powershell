---
title: "Exercice 12 - L'Inventaire du Thousand Sunny"
---

# Exercice 12 - L'Inventaire du Thousand Sunny 🛠️

## Contexte

Franky doit établir la fiche technique complète du navire avant le grand départ.
Coque, moteur, réservoirs, cales : tout doit être inventorié.

Vos cmdlets habituelles ne suffisent plus — `Get-Process` ne dit rien sur la RAM
installée ni sur la taille des disques. Il faut interroger **WMI**.

> _"Un bon charpentier connaît chaque planche de son navire."_ — Franky

**Durée : 30 min**

## Partie 1 : Le carnet de bord du navire (5 min)

```powershell
# La classe qui décrit le système
Get-CimInstance Win32_OperatingSystem
```

**Questions** :

- Quelle propriété donne le nom de Windows ?
- Quelle propriété donne la date du dernier démarrage ?
- Affichez **toutes** les propriétés de cette classe. Combien y en a-t-il ?

> Indice : `Format-List *`, et `Measure-Object` pour compter.

## Partie 2 : Le moteur (5 min)

```powershell
Get-CimInstance Win32_Processor
```

**Exercice** : affichez en une seule commande le **modèle** du processeur,
son **nombre de cœurs** et sa **charge instantanée**.

**Question** : pourquoi ajouter `Select-Object -First 1` peut-il être utile ici ?

## Partie 3 : Les cales (10 min)

```powershell
Get-CimInstance Win32_LogicalDisk
```

Vous obtenez tous les lecteurs, y compris les clés USB et les lecteurs réseau.
Pour ne garder que les **disques durs locaux**, filtrez sur `DriveType=3`.

```powershell
Get-CimInstance Win32_LogicalDisk -Filter "DriveType=3"
```

**Exercice** : produisez un tableau avec, pour chaque disque local :

| Lecteur | Taille (Go) | Libre (Go) | % libre |
| ------- | ----------- | ---------- | ------- |

Indices :

- `Size` et `FreeSpace` sont en **octets** → diviser par `1GB`
- `[math]::Round(..., 1)` pour arrondir
- une propriété calculée : `@{Name="Taille_Go"; Expression={ ... }}`

> ⚠️ Piège : un lecteur peut avoir une taille de 0. Prévoyez le cas avant de diviser.

## Partie 4 : Explorer l'inconnu (5 min)

Vous ne connaissez pas la classe qui contient le numéro de série du BIOS.
Trouvez-la sans chercher sur Internet.

```powershell
# Quelles classes parlent de BIOS ?
Get-CimClass -ClassName Win32_*BIOS*

# Quelles propriétés contient-elle ?
(Get-CimClass Win32_BIOS).CimClassProperties.Name
```

**Exercice** : affichez le **numéro de série** et le **fabricant** du BIOS de votre machine.

## Partie 5 : WQL, la syntaxe piégeuse (5 min)

Le `-Filter` de CIM n'est **pas** du PowerShell. Testez et expliquez :

```powershell
# A
Get-CimInstance Win32_Service -Filter "State='Running'"

# B
Get-CimInstance Win32_Service -Filter "State -eq 'Running'"
```

**Questions** :

- Laquelle fonctionne ?
- Pourquoi l'autre échoue-t-elle ?
- Écrivez un filtre WQL qui renvoie les services **arrêtés** dont le démarrage est automatique
  (propriétés `State` et `StartMode`).

## Mission finale : la fiche du Thousand Sunny 🏴‍☠️

Écrivez un script qui affiche une fiche unique regroupant :

- le **nom de la machine** et son **fabricant** (`Win32_ComputerSystem`)
- le **système** et sa **version** (`Win32_OperatingSystem`)
- le **processeur** et son nombre de cœurs (`Win32_Processor`)
- la **RAM totale** et la **RAM libre** en Go (`Win32_OperatingSystem`)
- le **numéro de série** du BIOS (`Win32_BIOS`)

Le tout dans un seul `[PSCustomObject]`, affiché avec `Format-List`.

> ⚠️ Rappel : la RAM de `Win32_OperatingSystem` est en **kilooctets**, pas en octets.
> Le diviseur n'est donc pas le même que pour les disques.

## Validation

✅ Vous savez qu'une classe WMI commence par `Win32_`
✅ Vous utilisez `Get-CimClass` pour découvrir classes et propriétés
✅ Vous filtrez avec `-Filter` en syntaxe **WQL** (`=`, guillemets simples)
✅ Vous connaissez la différence d'unité entre RAM (Ko) et disques (octets)
✅ Vous savez assembler plusieurs classes dans un seul `[PSCustomObject]`
✅ Vous écrivez `Get-CimInstance`, jamais `Get-WmiObject`
