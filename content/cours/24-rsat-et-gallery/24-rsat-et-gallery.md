---
title: "24. RSAT et PowerShell Gallery"
parcours-tssr: false
parcours-pro: true
---

<nav class="ps-chapter-path" aria-label="Parcours du chapitre">
  <a href="https://kayasam.github.io/powershell/cours/24-rsat-et-gallery/cours"><b>01 · Cours</b><small>Comprendre les notions</small></a>
  <a href="https://kayasam.github.io/powershell/cours/24-rsat-et-gallery/cours-interactif"><b>02 · Cours interactif</b><small>Schéma et défi rapide</small></a>
  <a href="https://kayasam.github.io/powershell/cours/24-rsat-et-gallery/quiz"><b>03 · Quiz</b><small>Vérifier ses acquis</small></a>
  <a href="https://kayasam.github.io/powershell/cours/24-rsat-et-gallery/tp/"><b>04 · Travaux pratiques</b><small>Appliquer en autonomie</small></a>
</nav>

> [!TIP] Ressources du chapitre
>
> - [[24-rsat-et-gallery/tp/index|Exercices pratiques]]
> - [[Memo-Commandes|Mémo des commandes]]

Au chapitre 23 vous avez appris à **écrire** un module. Ici, vous apprenez à
**consommer** ceux des autres : les outils d'administration livrés par Microsoft
(RSAT) et les milliers de modules publiés sur la PowerShell Gallery.

C'est le passage de « je code mes outils » à « je monte mon poste d'admin ».

## RSAT : les outils d'administration à distance

**RSAT** (_Remote Server Administration Tools_) installe sur votre **poste client**
les modules qui servent à piloter un serveur : Active Directory, DNS, DHCP, GPO…

### Installer RSAT sur Windows 10/11

```powershell
# Voir ce qui est disponible (droits administrateur requis)
Get-WindowsCapability -Online -Name "Rsat*"

# Installer un outil précis
Add-WindowsCapability -Online -Name "Rsat.ActiveDirectory.DS-LDS.Tools~~~~0.0.1.0"
Add-WindowsCapability -Online -Name "Rsat.DNS.Tools~~~~0.0.1.0"
Add-WindowsCapability -Online -Name "Rsat.GroupPolicy.Management.Tools~~~~0.0.1.0"

# Vérifier
Get-Module -ListAvailable ActiveDirectory, DnsServer, GroupPolicy
```

> [!WARNING] Élévation obligatoire
> `Get-WindowsCapability -Online` et `Get-WindowsOptionalFeature -Online` échouent
> sans droits administrateur :
>
> ```
> L'opération demandée nécessite une élévation.
> ```
>
> Ouvrez PowerShell **en tant qu'administrateur** pour toute la partie RSAT.

### Le Gestionnaire de serveur : `Get-WindowsFeature`

Sur un **Windows Server**, le module `ServerManager` pilote les rôles et fonctionnalités.

```powershell
# Lister les rôles et leur état
Get-WindowsFeature | Where-Object InstallState -eq Installed

# Chercher un rôle
Get-WindowsFeature -Name *DNS*

# Installer un rôle, avec ses outils d'administration
Install-WindowsFeature -Name DNS -IncludeManagementTools

# Installer à distance
Install-WindowsFeature -Name Web-Server -ComputerName "SRV-02" -IncludeManagementTools

# Désinstaller
Uninstall-WindowsFeature -Name Web-Server
```

> [!WARNING] Ces cmdlets ne fonctionnent PAS sur un poste client
> C'est le piège le plus déroutant du chapitre. Sur Windows 10/11, RSAT installe
> bien le module `ServerManager` — donc `Get-Command Get-WindowsFeature` **trouve
> la commande**. Mais à l'exécution :
>
> ```
> La cible de l'applet de commande spécifiée ne peut pas être
> un système d'exploitation basé sur un client Windows.
> ```
>
> Vérifié sur un Windows 11 avec RSAT installé. La commande existe, elle refuse
> simplement de s'exécuter ailleurs que sur un Server.
>
> **Sur un poste client**, les équivalents sont :
>
> | Besoin                   | Sur Server           | Sur client                                  |
> | ------------------------ | -------------------- | ------------------------------------------- |
> | Rôles et fonctionnalités | `Get-WindowsFeature` | `Get-WindowsOptionalFeature -Online`        |
> | Outils RSAT              | —                    | `Get-WindowsCapability -Online -Name Rsat*` |

### Fonctionnalités Windows côté client

```powershell
# Lister les fonctionnalités activées
Get-WindowsOptionalFeature -Online | Where-Object State -eq Enabled

# Activer Hyper-V, WSL, le client Telnet…
Enable-WindowsOptionalFeature -Online -FeatureName "Microsoft-Windows-Subsystem-Linux"
Disable-WindowsOptionalFeature -Online -FeatureName "TelnetClient"
```

## La PowerShell Gallery

C'est le dépôt public de Microsoft : des milliers de modules publiés par la
communauté et par des éditeurs.

### Chercher avant d'installer

```powershell
# Par nom
Find-Module -Name ImportExcel

# Par mot-clé
Find-Module -Tag Excel
Find-Module -Filter "Active Directory"

# Voir les détails, dont la date de publication
Find-Module -Name PSWindowsUpdate | Format-List Name, Version, Author, PublishedDate, ProjectUri
```

> [!TIP] Toujours regarder la date de publication
> Un module abandonné depuis huit ans est un risque, pas une solution.
> `PublishedDate` et `ProjectUri` (le dépôt GitHub) vous disent si le projet vit encore.

### Installer

```powershell
# Pour vous seul : ne demande pas les droits admin
Install-Module -Name ImportExcel -Scope CurrentUser

# Pour toute la machine : administrateur requis
Install-Module -Name ImportExcel -Scope AllUsers

# Mettre à jour / désinstaller
Update-Module  -Name ImportExcel
Uninstall-Module -Name ImportExcel

# Télécharger sans installer (poste hors ligne)
Save-Module -Name ImportExcel -Path "D:\Modules"
```

> [!NOTE] Pourquoi une confirmation au premier `Install-Module` ?
> Le dépôt PSGallery est marqué **Untrusted** par défaut :
>
> ```powershell
> Get-PSRepository
> # Name      InstallationPolicy  SourceLocation
> # PSGallery Untrusted           https://www.powershellgallery.com/api/v2
> ```
>
> D'où l'avertissement « dépôt non approuvé ». Sur un poste de travail personnel
> on peut le passer en `Trusted` :
>
> ```powershell
> Set-PSRepository -Name PSGallery -InstallationPolicy Trusted
> ```
>
> En entreprise, on fait l'inverse : on héberge un **dépôt interne** validé, et
> on retire PSGallery.

### Deux gestionnaires cohabitent

```powershell
Get-Command Install-Module, Install-PSResource | Select-Object Name, Source, Version
```

| Ancien (PowerShellGet) | Moderne (PSResourceGet) |
| ---------------------- | ----------------------- |
| `Find-Module`          | `Find-PSResource`       |
| `Install-Module`       | `Install-PSResource`    |
| `Update-Module`        | `Update-PSResource`     |

`Microsoft.PowerShell.PSResourceGet` est le remplaçant, livré avec PowerShell 7 :
plus rapide et mieux conçu. Les deux fonctionnent — les exemples de ce cours
utilisent les anciennes cmdlets, encore majoritaires dans la documentation existante.

## Atelier : les modules à connaître

Voici l'état **réel** de ces modules, relevé sur la Gallery :

| Module            | Version | Dernière publication | Verdict       |
| ----------------- | ------- | -------------------- | ------------- |
| `Carbon`          | 2.16.0  | 2026-08              | maintenu      |
| `PSWindowsUpdate` | 2.2.1.5 | 2024-07              | maintenu      |
| `ImportExcel`     | 7.8.10  | 2024-10              | maintenu      |
| `NTFSSecurity`    | 4.2.6   | 2019-07              | **abandonné** |
| `PSExcel`         | 1.0.2   | 2016-08              | **abandonné** |

### PSWindowsUpdate — les mises à jour

```powershell
Install-Module PSWindowsUpdate -Scope CurrentUser

Get-WindowsUpdate                              # ce qui est disponible
Install-WindowsUpdate -AcceptAll -AutoReboot   # tout installer
Get-WUHistory                                  # historique
```

### ImportExcel — Excel sans Excel

Le remplaçant moderne de `PSExcel`. Il ne nécessite **pas** Office installé.

```powershell
Install-Module ImportExcel -Scope CurrentUser

Get-Process | Select-Object Name, Id, WorkingSet |
    Export-Excel "C:\Temp\processus.xlsx" -AutoSize -TableName "Processus"

$donnees = Import-Excel "C:\Temp\processus.xlsx"
```

> [!WARNING] `PSExcel` est obsolète
> Le programme de formation mentionne `PSExcel`, mais sa dernière publication
> date de **2016**. Utilisez `ImportExcel`, activement maintenu et bien plus riche.

### NTFSSecurity — les permissions

```powershell
Get-NTFSAccess "C:\Partage"
Add-NTFSAccess -Path "C:\Partage" -Account "DOMAINE\CP-Agents" -AccessRights Modify
```

> [!NOTE] Module figé depuis 2019
> `NTFSSecurity` reste très pratique, mais n'évolue plus. L'alternative native
> existe et ne dépend de personne :
>
> ```powershell
> $acl = Get-Acl "C:\Partage"
> $regle = New-Object System.Security.AccessControl.FileSystemAccessRule(
>     "DOMAINE\CP-Agents", "Modify", "ContainerInherit,ObjectInherit", "None", "Allow")
> $acl.SetAccessRule($regle)
> Set-Acl "C:\Partage" $acl
> ```
>
> Plus verbeux, mais garanti dans le temps.

### Carbon — configuration système

Boîte à outils pour l'automatisation de configuration : permissions, services,
IIS, tâches planifiées, registre.

```powershell
Install-Module Carbon -Scope CurrentUser
Get-Command -Module Carbon | Measure-Object
```

## À retenir

- ✅ **RSAT** installe sur un poste client les outils de gestion des serveurs
- ✅ `Get-WindowsCapability -Online -Name Rsat*` + `Add-WindowsCapability`, **en admin**
- ✅ `Get-WindowsFeature` / `Install-WindowsFeature` : **Windows Server uniquement**
- ✅ Côté client, l'équivalent est `Get-WindowsOptionalFeature -Online`
- ✅ `Find-Module` **avant** `Install-Module` — vérifiez `PublishedDate`
- ✅ `-Scope CurrentUser` évite d'avoir besoin des droits administrateur
- ✅ PSGallery est `Untrusted` par défaut : d'où la demande de confirmation
- ✅ `Install-PSResource` remplace progressivement `Install-Module`
- ✅ Préférez `ImportExcel` à `PSExcel`, et `Get-Acl`/`Set-Acl` à `NTFSSecurity`

> **Liens**
>
> - [PowerShell Gallery](https://www.powershellgallery.com/)
> - [Installer RSAT](https://learn.microsoft.com/fr-fr/troubleshoot/windows-server/system-management-components/remote-server-administration-tools)
> - [PSResourceGet](https://learn.microsoft.com/fr-fr/powershell/gallery/powershellget/overview)

---

## Fiche récapitulative

![24_RSAT_et_Gallery](https://kayasam.github.io/powershell/ressources/images/24_RSAT_et_Gallery.png)
