---
title: "18. Registre, journaux et certificats"
parcours-tssr: false
parcours-pro: true
---

<nav class="ps-chapter-path" aria-label="Parcours du chapitre">
  <a href="https://kayasam.github.io/powershell/cours/18-registre-journaux-certificats/cours"><b>01 · Cours</b><small>Comprendre les notions</small></a>
  <a href="https://kayasam.github.io/powershell/cours/18-registre-journaux-certificats/cours-interactif"><b>02 · Cours interactif</b><small>Schéma et défi rapide</small></a>
  <a href="https://kayasam.github.io/powershell/cours/18-registre-journaux-certificats/quiz"><b>03 · Quiz</b><small>Vérifier ses acquis</small></a>
  <a href="https://kayasam.github.io/powershell/cours/18-registre-journaux-certificats/tp/"><b>04 · Travaux pratiques</b><small>Appliquer en autonomie</small></a>
</nav>

> [!TIP] Ressources du chapitre
>
> - [[18-registre-journaux-certificats/tp/index|Exercices pratiques]]
> - [[Memo-Commandes|Mémo des commandes]]

Vous savez lire et écrire des fichiers. Windows range pourtant beaucoup d'informations
ailleurs : la **configuration** dans le registre, l'**historique** dans les journaux
d'événements, l'**identité** dans le magasin de certificats.

Bonne nouvelle : pour deux de ces trois, vous connaissez déjà les commandes.

## Les PSDrives : tout ressemble à un disque

PowerShell présente ces magasins comme des **lecteurs**. On y navigue avec les mêmes
cmdlets qu'un dossier.

```powershell
Get-PSDrive
```

| Lecteur                            | Contenu                                       |
| ---------------------------------- | --------------------------------------------- |
| `C:`, `D:`                         | système de fichiers                           |
| `HKLM:`                            | registre — `HKEY_LOCAL_MACHINE` (la machine)  |
| `HKCU:`                            | registre — `HKEY_CURRENT_USER` (votre profil) |
| `Cert:`                            | magasin de certificats                        |
| `Env:`                             | variables d'environnement                     |
| `Function:`, `Alias:`, `Variable:` | contenu de la session                         |

C'est **la** idée du chapitre : `Get-ChildItem`, `Get-Item`, `Test-Path`, `Remove-Item`
fonctionnent partout.

```powershell
Get-ChildItem C:\Windows          # des fichiers
Get-ChildItem HKLM:\SOFTWARE      # des clés de registre
Get-ChildItem Cert:\CurrentUser   # des magasins de certificats
Get-ChildItem Env:                # des variables d'environnement
```

## Le registre

### Lire

Attention à la distinction : une **clé** est un dossier, une **valeur** est une
propriété de ce dossier.

```powershell
# Les sous-clés (= les "dossiers")
Get-ChildItem "HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion"

# Toutes les valeurs d'une clé
Get-ItemProperty "HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion"

# Une seule valeur, directement
Get-ItemPropertyValue "HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion" -Name ProductName
```

> [!WARNING] Le registre peut mentir
> Sur une machine **Windows 11**, cette clé affiche encore `Windows 10 Pro` :
>
> ```powershell
> Get-ItemPropertyValue 'HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion' -Name ProductName
> # Windows 10 Pro          <-- sur un vrai Windows 11 !
>
> (Get-CimInstance Win32_OperatingSystem).Caption
> # Microsoft Windows 11 Professionnel
> ```
>
> Microsoft n'a jamais mis `ProductName` à jour. Pour détecter Windows 11, utilisez
> **`CurrentBuild`** (≥ 22000 = Windows 11) ou, plus simplement, **CIM** (chapitre 12).
>
> Leçon générale : le registre est une source de vérité **pour ce qui n'existe que là**.
> Quand une cmdlet ou une classe CIM existe, préférez-la.

### Écrire

```powershell
$cle = "HKCU:\Software\MonOutil"

# Créer la clé
New-Item -Path $cle -Force

# Créer une valeur
New-ItemProperty -Path $cle -Name "Serveur" -Value "SRV-01" -PropertyType String -Force
New-ItemProperty -Path $cle -Name "Seuil"   -Value 80 -PropertyType DWord -Force

# Modifier une valeur existante
Set-ItemProperty -Path $cle -Name "Seuil" -Value 90

# Supprimer
Remove-ItemProperty -Path $cle -Name "Seuil"
Remove-Item -Path $cle -Recurse
```

Les `-PropertyType` courants : `String`, `ExpandString`, `DWord`, `QWord`, `Binary`, `MultiString`.

> [!WARNING] HKCU sans risque, HKLM avec précaution
> `HKCU:` ne concerne que votre profil : une erreur reste réparable.
> `HKLM:` affecte **toute la machine**, exige des droits administrateur, et une
> mauvaise manipulation peut empêcher Windows de démarrer.
>
> Réflexes :
>
> - s'entraîner dans `HKCU:\Software\...`
> - `-WhatIf` avant tout `Remove-Item` (chapitre 22)
> - exporter avant de modifier : `reg export "HKLM\SOFTWARE\Cle" sauvegarde.reg`

## Les journaux d'événements

C'est le premier réflexe de diagnostic : _« qu'est-ce qui s'est passé sur cette machine ? »_

### Explorer les journaux

```powershell
# Tous les journaux, les plus remplis d'abord
Get-WinEvent -ListLog * | Sort-Object RecordCount -Descending | Select-Object -First 10

# Les trois journaux classiques
Get-WinEvent -ListLog Application, System, Security
```

| Journal       | Contenu                                                     |
| ------------- | ----------------------------------------------------------- |
| `System`      | pilotes, services, démarrage, matériel                      |
| `Application` | applications installées                                     |
| `Security`    | connexions, échecs d'authentification (droits admin requis) |
| `Setup`       | installations et mises à jour                               |

### Lire des événements

```powershell
# Les 20 derniers du journal Système
Get-WinEvent -LogName System -MaxEvents 20

# Un événement complet
Get-WinEvent -LogName System -MaxEvents 1 | Format-List *
```

### Filtrer efficacement : `-FilterHashtable`

```powershell
# Les erreurs du journal Système
Get-WinEvent -FilterHashtable @{ LogName='System'; Level=2 } -MaxEvents 10

# Erreurs ET avertissements, depuis 2 jours
Get-WinEvent -FilterHashtable @{
    LogName   = 'System'
    Level     = 2, 3
    StartTime = (Get-Date).AddDays(-2)
} -MaxEvents 50

# Un identifiant précis (6008 = arrêt inattendu)
Get-WinEvent -FilterHashtable @{ LogName='System'; Id=6008 }
```

**Niveaux** : `1` Critique · `2` Erreur · `3` Avertissement · `4` Information · `5` Verbeux

Clés acceptées : `LogName`, `ProviderName`, `Id`, `Level`, `StartTime`, `EndTime`, `Keywords`.

> [!TIP] Filtrez côté journal, pas côté PowerShell
>
> ```powershell
> # BIEN : Windows filtre avant d'envoyer
> Get-WinEvent -FilterHashtable @{LogName='System'; Level=2} -MaxEvents 20
>
> # MAL : on rapatrie tout, puis on jette
> Get-WinEvent -LogName System | Where-Object Level -eq 2 | Select-Object -First 20
> ```
>
> Mesuré sur un journal de ~24 000 entrées : **72 ms** contre **106 ms** — et encore,
> la seconde version était déjà bridée par `-MaxEvents 2000`. Sans bride, elle lit
> **tout le journal** : l'écart se compte en dizaines de secondes.
>
> C'est la même logique que le `-Filter` de CIM au chapitre 12.

### Propriétés utiles

```powershell
Get-WinEvent -FilterHashtable @{LogName='System'; Level=2} -MaxEvents 5 |
    Select-Object TimeCreated, Id, LevelDisplayName, ProviderName, Message |
    Format-List
```

> [!NOTE] `Get-EventLog` : même histoire que `Get-WmiObject`
> L'ancienne cmdlet `Get-EventLog` ne lit pas les journaux modernes et ne gère pas
> `-FilterHashtable`. Retirée de PowerShell 6, elle réapparaît en **7.6** comme
> simple **fonction de compatibilité** :
>
> ```powershell
> Get-Command Get-EventLog | Select-Object Name, CommandType
> # Get-EventLog   Function
> ```
>
> Écrivez `Get-WinEvent`.

### Écrire dans un journal

Pour qu'un script planifié laisse une trace visible dans l'Observateur d'événements :

```powershell
# Une seule fois, en administrateur
New-EventLog -LogName Application -Source "CipherPol"

# Ensuite, depuis vos scripts
Write-EventLog -LogName Application -Source "CipherPol" `
               -EventId 1000 -EntryType Information `
               -Message "Archivage terminé : 42 dossiers traités"
```

## Les certificats

Même principe : un lecteur, et les cmdlets habituelles.

```powershell
# Les deux magasins principaux
Get-ChildItem Cert:\CurrentUser     # vos certificats personnels
Get-ChildItem Cert:\LocalMachine    # ceux de la machine
```

| Magasin            | Contenu                                         |
| ------------------ | ----------------------------------------------- |
| `My`               | certificats personnels (avec clé privée)        |
| `Root`             | autorités de certification racines de confiance |
| `CA`               | autorités intermédiaires                        |
| `TrustedPublisher` | éditeurs approuvés (signature de scripts)       |

```powershell
# Mes certificats personnels
Get-ChildItem Cert:\CurrentUser\My | Select-Object Thumbprint, Subject, NotAfter

# Les autorités racines installées
Get-ChildItem Cert:\LocalMachine\Root | Measure-Object
```

### Cas pratique : ce qui va expirer

```powershell
$limite = (Get-Date).AddDays(90)

Get-ChildItem Cert:\LocalMachine\Root |
    Where-Object { $_.NotAfter -lt $limite } |
    Select-Object Subject, NotAfter, Thumbprint |
    Sort-Object NotAfter |
    Format-Table -AutoSize
```

C'est un contrôle de supervision classique : un certificat expiré, et c'est un service
entier qui tombe.

### Lien avec la signature de scripts

Le `RemoteSigned` du chapitre 01 s'appuie sur ce magasin : pour signer vos propres
scripts, il vous faut un certificat de signature de code.

```powershell
# Un certificat capable de signer du code
$cert = Get-ChildItem Cert:\CurrentUser\My -CodeSigningCert | Select-Object -First 1

# Signer un script
Set-AuthenticodeSignature -FilePath .\MonScript.ps1 -Certificate $cert

# Vérifier une signature
Get-AuthenticodeSignature .\MonScript.ps1 | Select-Object Status, SignerCertificate
```

> [!NOTE] En entreprise
> Le certificat vient de l'autorité interne (AD CS), il est déployé par GPO dans
> `TrustedPublisher`, et la stratégie d'exécution passe à `AllSigned`. Seuls les
> scripts signés par l'entreprise s'exécutent alors.

## À retenir

- ✅ Registre, certificats, variables d'environnement : des **PSDrives**, pilotés
  par les cmdlets de fichiers (`Get-ChildItem`, `Test-Path`, `Remove-Item`…)
- ✅ Registre : une **clé** est un dossier, une **valeur** est une propriété
- ✅ `Get-ItemProperty` (tout) vs `Get-ItemPropertyValue` (une valeur précise)
- ✅ `HKCU:` pour s'entraîner, `HKLM:` avec droits admin et sauvegarde préalable
- ✅ Le registre peut être périmé (`ProductName` dit « Windows 10 » sur Windows 11) —
  préférez CIM quand la donnée existe des deux côtés
- ✅ `Get-WinEvent -FilterHashtable` et **jamais** `| Where-Object` sur un gros journal
- ✅ Niveaux : `1` critique, `2` erreur, `3` avertissement, `4` information
- ✅ `Get-WinEvent` remplace `Get-EventLog`
- ✅ `Cert:` pour auditer les certificats ; `Set-AuthenticodeSignature` pour signer

> **Liens**
>
> - [Get-WinEvent](https://learn.microsoft.com/fr-fr/powershell/module/microsoft.powershell.diagnostics/get-winevent)
> - [Travailler avec le registre](https://learn.microsoft.com/fr-fr/powershell/scripting/samples/working-with-registry-entries)
> - [About Signing](https://learn.microsoft.com/fr-fr/powershell/module/microsoft.powershell.core/about/about_signing)

---

## Fiche récapitulative

![18_Registre_journaux_certificats](https://kayasam.github.io/powershell/ressources/images/18_Registre_journaux_certificats.png)
