---
title: "Exercice 12 - L'Inventaire du Thousand Sunny - Débutant"
publier: true
parcours-tssr: true
parcours-pro: false
---

# Exercice 12 - L'Inventaire du Thousand Sunny 🛠️ — Débutant

> Chapitre associé : [[cours/12-wmi-et-cim/12-wmi-et-cim]]

## Contexte

Franky doit établir la fiche technique complète du navire avant le grand départ.
Coque, moteur, réservoirs, cales : tout doit être inventorié.

Vos cmdlets habituelles ne suffisent plus — `Get-Process` ne dit rien sur la RAM
installée ni sur la taille des disques. Il faut interroger **WMI**.

> _"Un bon charpentier connaît chaque planche de son navire."_ — Franky

**Durée : 30 min**

---

## Partie A : Le carnet de bord du navire (5 min)

```powershell
# La classe qui décrit le système
Get-CimInstance Win32_OperatingSystem
```

**A1.** Quelle propriété donne le nom de Windows ?

**A2.** Quelle propriété donne la date du dernier démarrage ?

**A3.** Affichez **toutes** les propriétés de cette classe. Combien y en a-t-il ?

> 💡 **Indice** : `| Format-List *` révèle tout, et `Measure-Object` compte.

---

## Partie B : Le moteur (5 min)

```powershell
Get-CimInstance Win32_Processor
```

**B1.** Affichez en une seule commande le **modèle** du processeur, son **nombre
de cœurs** et sa **charge instantanée**.

**B2.** Pourquoi ajouter `Select-Object -First 1` peut-il être utile ici ?

> 💡 **Indice** : les propriétés s'appellent `Name`, `NumberOfCores`, `LoadPercentage`.

---

## Partie C : Les cales (10 min)

```powershell
Get-CimInstance Win32_LogicalDisk
```

Vous obtenez tous les lecteurs, y compris les clés USB. Pour ne garder que les
**disques durs locaux**, filtrez sur `DriveType=3` :

```powershell
Get-CimInstance Win32_LogicalDisk -Filter "DriveType=3"
```

**C1.** Produisez un tableau avec, pour chaque disque local : lettre, taille en Go,
espace libre en Go, pourcentage libre.

> ⚠️ Un lecteur peut avoir une taille de 0. Prévoyez le cas avant de diviser.

> 💡 **Indice** : `Size` et `FreeSpace` sont en **octets** → diviser par `1GB`.
> Une colonne calculée s'écrit `@{Name="Titre"; Expression={ ... }}` (chapitre 08).

---

## Partie D : Explorer l'inconnu (5 min)

Vous ne connaissez pas la classe qui contient le numéro de série du BIOS.
Trouvez-la **sans chercher sur Internet**.

```powershell
# Quelles classes parlent de BIOS ?
Get-CimClass -ClassName Win32_*BIOS*

# Quelles propriétés contient-elle ?
(Get-CimClass Win32_BIOS).CimClassProperties.Name
```

**D1.** Affichez le **numéro de série** et le **fabricant** du BIOS de votre machine.

---

## Partie E : WQL, la syntaxe piégeuse (5 min)

Le `-Filter` de CIM n'est **pas** du PowerShell. Testez ces deux commandes :

```powershell
# A
Get-CimInstance Win32_Service -Filter "State='Running'"

# B
Get-CimInstance Win32_Service -Filter "State -eq 'Running'"
```

**E1.** Laquelle fonctionne ?

**E2.** Pourquoi l'autre échoue-t-elle ?

**E3.** Écrivez un filtre WQL qui renvoie les services **arrêtés** dont le
démarrage est **automatique**.

> 💡 **Indice** : les propriétés sont `State` et `StartMode`. En WQL, l'opérateur
> « et » s'écrit `AND`.

---

## Mission finale F : la fiche du Thousand Sunny 🏴‍☠️

**F1.** Écrivez un script qui affiche une fiche unique regroupant :

- le **nom de la machine** et son **fabricant** (`Win32_ComputerSystem`)
- le **système** et sa **version** (`Win32_OperatingSystem`)
- le **processeur** et son nombre de cœurs (`Win32_Processor`)
- la **RAM totale** et la **RAM libre** en Go
- le **numéro de série** du BIOS (`Win32_BIOS`)

Le tout dans un seul `[PSCustomObject]`, affiché avec `Format-List`.

> ⚠️ **Rappel** : la RAM de `Win32_OperatingSystem` est en **kilooctets**, pas en
> octets. Le diviseur n'est donc pas le même que pour les disques.

---

> [!success] Validation
>
> - Vous savez qu'une classe WMI commence par `Win32_`
> - Vous utilisez `Get-CimClass` pour découvrir classes et propriétés
> - Vous filtrez avec `-Filter` en syntaxe **WQL**
> - Vous connaissez la différence d'unité entre RAM (Ko) et disques (octets)
> - Vous écrivez `Get-CimInstance`, jamais `Get-WmiObject`
