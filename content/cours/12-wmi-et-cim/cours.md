---
title: "Cours"
---

# 12. WMI et CIM

> [!TIP] Ressources du chapitre
>
> - [[12-wmi-et-cim/tp/index|Exercices pratiques]]
> - [[Memo-Commandes|Mémo des commandes]]

`Get-Process` et `Get-Service` couvrent les processus et les services. Mais pour la RAM
installée, le numéro de série du BIOS, l'espace disque ou la configuration réseau,
il n'existe pas de cmdlet dédiée.

Ces informations viennent de **WMI** — l'inventaire interne de Windows. On l'interroge
avec les cmdlets **CIM**.

## WMI, CIM : de quoi parle-t-on ?

- **WMI** (_Windows Management Instrumentation_) est la **base de données** : Windows y
  publie en permanence l'état du matériel, du système et des logiciels installés.
- **CIM** (_Common Information Model_) est le **standard** qui décrit comment ranger
  et interroger ces informations. C'est une norme ouverte, pas une invention Microsoft.

Autrement dit : WMI est l'entrepôt, CIM est la langue dans laquelle on lui parle.

## Une seule cmdlet à retenir

```powershell
Get-CimInstance <NomDeClasse>
```

Une **classe** = une catégorie d'information. Leur nom commence presque toujours par `Win32_`.

```powershell
# Le système d'exploitation
Get-CimInstance Win32_OperatingSystem

# Le ou les processeurs
Get-CimInstance Win32_Processor

# Les disques
Get-CimInstance Win32_LogicalDisk
```

## Les classes utiles au quotidien

| Classe                              | Ce qu'elle contient                                        |
| ----------------------------------- | ---------------------------------------------------------- |
| `Win32_OperatingSystem`             | Version de Windows, RAM totale et libre, date de démarrage |
| `Win32_ComputerSystem`              | Nom de la machine, fabricant, modèle, domaine              |
| `Win32_Processor`                   | Modèle du CPU, nombre de cœurs, charge instantanée         |
| `Win32_LogicalDisk`                 | Lettres de lecteur, taille, espace libre                   |
| `Win32_BIOS`                        | Numéro de série, version du BIOS                           |
| `Win32_NetworkAdapterConfiguration` | IP, masque, passerelle, DNS                                |
| `Win32_Service`                     | Services, avec leur compte de démarrage et leur chemin     |
| `Win32_UserAccount`                 | Comptes locaux                                             |

## Le résultat est un objet comme les autres

C'est tout l'intérêt : ce qui sort de `Get-CimInstance` se manipule avec tout ce que
vous savez déjà — `Select-Object`, `Where-Object`, le pipeline.

```powershell
$os = Get-CimInstance Win32_OperatingSystem

$os.Caption                    # Microsoft Windows 11 Professionnel
$os.TotalVisibleMemorySize     # RAM totale, en Ko
$os.FreePhysicalMemory         # RAM libre, en Ko
```

> [!WARNING] Attention aux unités
> `Win32_OperatingSystem` exprime la mémoire en **kilooctets**, alors que
> `Win32_LogicalDisk` exprime les tailles en **octets**. Les diviseurs ne sont donc
> pas les mêmes :
>
> ```powershell
> $os = Get-CimInstance Win32_OperatingSystem
> [math]::Round($os.TotalVisibleMemorySize / 1MB, 1)   # Ko -> Go  (32,4)
>
> $d = Get-CimInstance Win32_LogicalDisk -Filter "DeviceID='C:'"
> [math]::Round($d.Size / 1GB, 1)                      # octets -> Go  (296,9)
> ```
>
> Le réflexe : vérifiez toujours l'unité avec `Get-CimInstance <classe> | Format-List *`
> avant de faire un calcul.

## Filtrer : côté serveur, pas côté client

`Get-CimInstance` accepte `-Filter`, qui filtre **avant** de renvoyer les données.

```powershell
# Seulement les disques durs locaux (DriveType 3)
Get-CimInstance Win32_LogicalDisk -Filter "DriveType=3"

# Seulement les services démarrés
Get-CimInstance Win32_Service -Filter "State='Running'"
```

C'est plus efficace que `| Where-Object` : on ne transporte que ce dont on a besoin.
La différence est invisible en local, mais très nette sur une machine distante.

> [!NOTE] La syntaxe de `-Filter` n'est pas du PowerShell
> C'est du **WQL**, un mini-langage proche du SQL. Il a ses propres règles :
> `=` et non `-eq`, les valeurs texte entre **guillemets simples**, et pas de `$_`.
>
> ```powershell
> -Filter "DriveType=3"            # nombre : sans guillemets
> -Filter "State='Running'"        # texte  : guillemets simples
> -Filter "DriveType=3 AND FreeSpace < 10000000000"   # AND / OR, pas -and
> ```
>
> Vous retrouverez exactement le même piège au chapitre 27 avec le `-Filter` d'Active Directory.

## Explorer quand on ne sait pas

Deux questions reviennent toujours : _quelle classe ?_ et _quelles propriétés ?_

```powershell
# Quelles classes parlent de disque ?
Get-CimClass -ClassName Win32_*Disk*

# Quelles propriétés a cette classe, sans même l'interroger ?
(Get-CimClass Win32_LogicalDisk).CimClassProperties.Name

# Tout voir sur une instance réelle
Get-CimInstance Win32_BIOS | Format-List *
```

C'est le même réflexe qu'au chapitre 03 avec `Get-Member` : on inspecte avant d'utiliser.

## Exemple complet : une fiche machine

```powershell
$os  = Get-CimInstance Win32_OperatingSystem
$cs  = Get-CimInstance Win32_ComputerSystem
$cpu = Get-CimInstance Win32_Processor | Select-Object -First 1

[PSCustomObject]@{
    Machine     = $cs.Name
    Systeme     = $os.Caption
    Processeur  = $cpu.Name
    Coeurs      = $cpu.NumberOfCores
    RAM_Go      = [math]::Round($os.TotalVisibleMemorySize / 1MB, 1)
    RAM_Libre   = [math]::Round($os.FreePhysicalMemory / 1MB, 1)
    Demarre_Le  = $os.LastBootUpTime
}
```

## Interroger une machine distante

C'est là que CIM devient un outil d'administration.

```powershell
# Une machine
Get-CimInstance Win32_OperatingSystem -ComputerName "SRV-01"

# Plusieurs machines d'un coup
Get-CimInstance Win32_LogicalDisk -Filter "DriveType=3" -ComputerName "SRV-01", "SRV-02"
```

Si vous interrogez les mêmes serveurs plusieurs fois, ouvrez une **session** :
la connexion est négociée une seule fois.

```powershell
$session = New-CimSession -ComputerName "SRV-01", "SRV-02"

Get-CimInstance Win32_OperatingSystem -CimSession $session
Get-CimInstance Win32_Service -Filter "State='Stopped'" -CimSession $session

Remove-CimSession -CimSession $session
```

> [!NOTE] Prérequis réseau
> L'accès distant CIM passe par **WinRM** (port 5985), à activer sur la cible avec
> `Enable-PSRemoting -Force`. L'ancien WMI utilisait DCOM, beaucoup plus pénible à
> faire passer dans un pare-feu — c'est l'une des raisons du passage à CIM.

## Et `Get-WmiObject` ?

Vous le croiserez dans quantité de scripts et de tutoriels. C'est l'**ancienne** famille
de cmdlets, dépréciée depuis PowerShell 3.0 (2012) au profit des cmdlets CIM.

| Ancien (à ne plus écrire) | Moderne              |
| ------------------------- | -------------------- |
| `Get-WmiObject`           | `Get-CimInstance`    |
| `Invoke-WmiMethod`        | `Invoke-CimMethod`   |
| `Remove-WmiObject`        | `Remove-CimInstance` |

Pourquoi CIM est meilleur : il utilise WinRM au lieu de DCOM, respecte un standard
ouvert, et gère proprement les sessions réutilisables.

> [!TIP] Ce que vous verrez vraiment sur votre poste
> `Get-WmiObject` a été **retiré** de PowerShell 6 et des premières versions 7.
> Dans PowerShell 7.6 il est de nouveau présent, sous forme de **fonction de
> compatibilité** :
>
> ```powershell
> Get-Command Get-WmiObject | Select-Object Name, CommandType, Source
> # Get-WmiObject   Function   Microsoft.PowerShell.Management
> ```
>
> Notez `Function` et non `Cmdlet` : c'est un vestige de compatibilité, pas un retour
> en grâce. Ne l'utilisez pas dans du code neuf — sa présence n'est garantie sur
> aucune version.

## Appeler une méthode

Les classes CIM n'exposent pas que des propriétés : elles ont aussi des **méthodes**.

```powershell
# Quelles méthodes offre cette classe ?
(Get-CimClass Win32_Process).CimClassMethods.Name
# Create, Terminate, GetOwner, SetPriority...

# Qui a lancé ce processus ?
Get-CimInstance Win32_Process -Filter "Name='notepad.exe'" | Invoke-CimMethod -MethodName GetOwner
```

En pratique on préfère les cmdlets natives quand elles existent (`Stop-Process` plutôt
que `Terminate`) : elles sont plus lisibles et gèrent `-WhatIf`.

## À retenir

- ✅ WMI est l'inventaire de Windows, CIM est la façon standard de l'interroger
- ✅ `Get-CimInstance <Classe>` : une seule cmdlet pour tout le matériel et le système
- ✅ Les noms de classes commencent par `Win32_`
- ✅ `-Filter` utilise du **WQL** (`=`, guillemets simples, `AND`), pas de la syntaxe PowerShell
- ✅ `Get-CimClass` pour découvrir classes et propriétés avant de les utiliser
- ✅ Attention aux unités : Ko pour la RAM, octets pour les disques
- ✅ `-ComputerName` / `New-CimSession` pour interroger des machines distantes
- ✅ `Get-CimInstance` remplace `Get-WmiObject` : n'écrivez plus de `*-WmiObject`

> **Liens**
>
> - [Get-CimInstance](https://learn.microsoft.com/fr-fr/powershell/module/cimcmdlets/get-ciminstance)
> - [Classes WMI Win32](https://learn.microsoft.com/fr-fr/windows/win32/cimwin32prov/win32-provider)
