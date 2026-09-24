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

> [!tip] Tout ce dont vous avez besoin, vous l'avez déjà vu
> Une seule cmdlet nouvelle : `Get-CimInstance`. Pour le reste, ce sont vos outils
> habituels — `Select-Object`, `Where-Object`, `Format-List`, les variables.

---

## Partie A : Le carnet de bord du navire (5 min)

```powershell
# La classe qui décrit le système
Get-CimInstance Win32_OperatingSystem
```

**A1.** Quelle propriété donne le nom de Windows ?

**A2.** Quelle propriété donne la date du dernier démarrage ?

**A3.** Affichez **toutes** les propriétés de cette classe. Combien y en a-t-il ?

> 💡 **Indice** : `| Format-List *` révèle tout, et `Measure-Object` compte
> (chapitre 09).

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

Vous obtenez tous les lecteurs, y compris les clés USB et les lecteurs CD. Pour ne
garder que les **disques durs locaux**, filtrez sur `DriveType=3` :

```powershell
Get-CimInstance Win32_LogicalDisk -Filter "DriveType=3"
```

**C1.** Affichez, pour les disques durs locaux uniquement, la **lettre du lecteur**,
la **taille** et l'**espace libre**.

> 💡 **Indice** : les propriétés sont `DeviceID`, `Size` et `FreeSpace`.
> Un simple `Select-Object` suffit.

**C2.** Les tailles s'affichent en **octets** — illisible. Mettez le disque `C:`
dans une variable, puis affichez sa taille **en Go**, arrondie à 1 décimale.

```powershell
# On récupère un seul disque
$c = Get-CimInstance Win32_LogicalDisk -Filter "DeviceID='C:'"

# À vous : affichez $c.Size converti en Go
```

> 💡 **Indice** : diviser par `1GB`, et arrondir avec `[math]::Round(<valeur>, 1)`.

**C3.** Faites la même chose pour l'espace libre, puis calculez le **pourcentage
d'espace libre** du disque `C:`.

> ⚠️ Avant de diviser, demandez-vous ce qui se passerait si `Size` valait `0`
> (c'est le cas d'un lecteur CD vide).

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

Le chapitre se termine par un exemple appelé **« une fiche machine »**.
Ouvrez-le : c'est votre point de départ.

**F1.** Recopiez cet exemple, exécutez-le, et vérifiez que vous comprenez chaque ligne.

**F2.** Complétez-le pour qu'il affiche **en plus** :

- le **fabricant** de la machine (`Win32_ComputerSystem`, propriété `Manufacturer`)
- le **numéro de série du BIOS** (celui trouvé en D1)

Affichez le résultat avec `Format-List`.

> 💡 **Indice** : il suffit d'ajouter deux lignes dans le bloc du cours, sur le
> modèle de celles qui existent déjà.

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
