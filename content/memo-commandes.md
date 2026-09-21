# Mémo PowerShell — Toutes les commandes par jour

---

## JOUR 1 — Prise en main

### Installation et environnement

| Commande                              | Arguments clés                                       | Description                               | Alias |
| ------------------------------------- | ---------------------------------------------------- | ----------------------------------------- | ----- |
| `$PSVersionTable`                     | —                                                    | Affiche la version de PowerShell          | —     |
| `winget install Microsoft.PowerShell` | —                                                    | Installe PowerShell 7                     | —     |
| `Get-ExecutionPolicy`                 | —                                                    | Affiche la politique d'exécution actuelle | —     |
| `Set-ExecutionPolicy`                 | `-ExecutionPolicy RemoteSigned` `-Scope CurrentUser` | Autorise les scripts locaux               | —     |

### Découvrir les cmdlets

| Commande      | Arguments clés                    | Description                       | Alias  |
| ------------- | --------------------------------- | --------------------------------- | ------ |
| `Get-Command` | `*Process*` `-Verb Get`           | Chercher des cmdlets              | `gcm`  |
| `Get-Help`    | `-Examples` `-Detailed` `-Online` | Aide sur une cmdlet               | `help` |
| `Get-Member`  | —                                 | Propriétés et méthodes d'un objet | `gm`   |

### Cmdlets essentielles

| Commande        | Arguments clés                        | Description                  | Alias            |
| --------------- | ------------------------------------- | ---------------------------- | ---------------- |
| `Get-Process`   | `nom`                                 | Lister les processus         | `gps`            |
| `Get-Service`   | `nom` `-Name`                         | Lister les services          | `gsv`            |
| `Get-ChildItem` | `-Recurse` `-Filter "*.log"` `-Force` | Lister fichiers/dossiers     | `dir` `ls` `gci` |
| `Get-Item`      | `chemin`                              | Détails d'un fichier/dossier | `gi`             |
| `Set-Location`  | `chemin`                              | Changer de dossier           | `cd` `sl`        |
| `Get-Location`  | —                                     | Dossier courant              | `pwd` `gl`       |
| `Clear-Host`    | —                                     | Effacer l'écran              | `cls` `clear`    |

### Alias et historique

| Commande         | Arguments clés   | Description              | Alias |
| ---------------- | ---------------- | ------------------------ | ----- |
| `Get-Alias`      | `nom`            | Lister les alias         | `gal` |
| `New-Alias`      | `-Name` `-Value` | Créer un alias           | —     |
| `Get-History`    | —                | Historique des commandes | `h`   |
| `Invoke-History` | `numéro`         | Relancer une commande    | `r`   |
| `Clear-History`  | —                | Vider l'historique       | —     |

### Variables — syntaxe

| Élément           | Exemple                | Description                               |
| ----------------- | ---------------------- | ----------------------------------------- |
| Déclaration       | `$nom = "Luffy"`       | Toujours avec `$`                         |
| String            | `"Bonjour $nom"`       | Guillemets doubles = variables remplacées |
| String brute      | `'Pas $remplacé'`      | Guillemets simples = texte brut           |
| Int               | `$age = 19`            | Entier                                    |
| Bool              | `$actif = $true`       | Vrai/Faux                                 |
| Tableau           | `$t = @("A","B","C")`  | `$t[0]` pour le 1er élément               |
| Hashtable         | `$h = @{Clé="Valeur"}` | `$h.Clé` pour accéder                     |
| Variable spéciale | `$_`                   | Objet courant dans le pipeline            |
| Variable spéciale | `$env:COMPUTERNAME`    | Variable d'environnement                  |

### Formatage de la sortie

| Commande        | Arguments clés                      | Description                           | Alias    |
| --------------- | ----------------------------------- | ------------------------------------- | -------- |
| `Format-Table`  | `Col1, Col2` `-AutoSize`            | Affichage en tableau                  | `ft`     |
| `Format-List`   | `*`                                 | Affichage en liste (tous les détails) | `fl`     |
| `Select-Object` | `Col1, Col2` `-First 5` `-Last 3`   | Choisir colonnes/lignes               | `select` |
| `Out-GridView`  | `-Title "Titre"`                    | Fenêtre graphique interactive         | `ogv`    |
| `Write-Host`    | `-ForegroundColor Red` `-NoNewline` | Afficher du texte coloré              | —        |

---

## JOUR 2 — Scripting de base

### Pipeline

| Commande         | Arguments clés                                               | Description                       | Alias       |
| ---------------- | ------------------------------------------------------------ | --------------------------------- | ----------- |
| `Where-Object`   | `Propriété -eq Valeur` `{ $_.CPU -gt 10 }`                   | Filtrer des objets                | `where` `?` |
| `Sort-Object`    | `Propriété` `-Descending`                                    | Trier des objets                  | `sort`      |
| `Select-Object`  | `-First 10` `-Unique` `@{Name=""; Expression={}}`            | Sélectionner / colonnes calculées | `select`    |
| `Group-Object`   | `Propriété`                                                  | Regrouper par valeur              | `group`     |
| `Measure-Object` | `Propriété` `-Sum` `-Average` `-Maximum` `-Minimum` `-Count` | Statistiques                      | `measure`   |
| `ForEach-Object` | `{ traitement de $_ }`                                       | Traiter chaque objet du pipeline  | `%`         |

### Conditions — syntaxe

| Élément     | Exemple                                         | Description                        |
| ----------- | ----------------------------------------------- | ---------------------------------- |
| `if`        | `if ($x -gt 5) { ... }`                         | Condition simple                   |
| `elseif`    | `elseif ($x -eq 5) { ... }`                     | Condition alternative              |
| `else`      | `else { ... }`                                  | Cas par défaut                     |
| `switch`    | `switch ($val) { "A" { } "B" { } default { } }` | Tester plusieurs valeurs           |
| `Test-Path` | `"C:\chemin"`                                   | Retourne $true si le chemin existe |

### Opérateurs de comparaison

| Opérateur    | Signification             | Opérateur | Signification      |
| ------------ | ------------------------- | --------- | ------------------ |
| `-eq`        | Égal                      | `-ne`     | Différent          |
| `-gt`        | Supérieur                 | `-lt`     | Inférieur          |
| `-ge`        | Supérieur ou égal         | `-le`     | Inférieur ou égal  |
| `-like`      | Motif avec wildcard (`*`) | `-match`  | Motif regex        |
| `-and`       | ET logique                | `-or`     | OU logique         |
| `-not` / `!` | NON logique               | `-in`     | Contenu dans liste |

### Boucles — syntaxe

| Boucle           | Syntaxe                           | Utilisation                   |
| ---------------- | --------------------------------- | ----------------------------- |
| `foreach`        | `foreach ($x in $liste) { }`      | Parcourir une collection      |
| `for`            | `for ($i=0; $i -lt 10; $i++) { }` | Compteur                      |
| `while`          | `while ($condition) { }`          | Tant que vrai                 |
| `do/while`       | `do { } while ($condition)`       | Au moins une fois             |
| `ForEach-Object` | `$liste \| ForEach-Object { $_ }` | Dans le pipeline              |
| `break`          | `break`                           | Sortir de la boucle           |
| `continue`       | `continue`                        | Passer à l'itération suivante |
| `1..10`          | —                                 | Plage de nombres              |

### Fonctions — syntaxe

| Élément    | Exemple                    | Description                       |
| ---------- | -------------------------- | --------------------------------- |
| Définir    | `function Nom { }`         | Créer une fonction                |
| Paramètres | `param($A, $B = "défaut")` | Paramètres avec valeur par défaut |
| Type       | `[string]$Nom` `[int]$Age` | Typer un paramètre                |
| Switch     | `[switch]$Verbose`         | Paramètre booléen (flag)          |
| Retour     | `return $valeur`           | Retourner une valeur              |
| Appel      | `MaFonction -Param1 "val"` | Appeler la fonction               |
| Convention | `Verbe-Nom`                | Nommage recommandé                |

---

### WMI et CIM

| Commande                                   | Arguments clés                                          | Description                               | Alias  |
| ------------------------------------------ | ------------------------------------------------------- | ----------------------------------------- | ------ |
| `Get-CimInstance`                          | `Win32_OperatingSystem` `-Filter "..."` `-ComputerName` | Interroger WMI                            | `gcim` |
| `Get-CimClass`                             | `Win32_*Disk*`                                          | Découvrir les classes disponibles         | —      |
| `(Get-CimClass X).CimClassProperties.Name` | —                                                       | Lister les propriétés sans interroger     | —      |
| `Invoke-CimMethod`                         | `-MethodName GetOwner`                                  | Appeler une méthode d'une classe          | `icim` |
| `New-CimSession`                           | `-ComputerName "SRV-01"`                                | Session réutilisable (machines distantes) | —      |

**Classes utiles** : `Win32_OperatingSystem` (RAM, version) · `Win32_ComputerSystem` (nom, modèle) ·
`Win32_Processor` (CPU) · `Win32_LogicalDisk` (disques) · `Win32_BIOS` (n° de série) · `Win32_Service`

**Filtre WQL** (≠ PowerShell) : `=` et non `-eq`, guillemets simples, `AND`/`OR`
→ `-Filter "DriveType=3 AND FreeSpace < 10000000000"`

**Unités** : RAM en **Ko** (`/1MB` → Go) · disques en **octets** (`/1GB` → Go)

---

## JOUR 3 — Fichiers et données

### Classes .NET

| Syntaxe                        | Sens                                     |
| ------------------------------ | ---------------------------------------- |
| `[Classe]::Membre`             | membre **statique** — pas besoin d'objet |
| `$objet.Membre`                | membre **d'instance**                    |
| `[Classe]::new(...)`           | créer un objet (remplace `New-Object`)   |
| `[math] \| Get-Member -Static` | explorer une classe                      |

**[math]** : `Round(v, n)` · `Ceiling` · `Floor` · `Abs` · `Pow(a,b)` · `Sqrt` · `Max` · `Min` · `PI`

> ⚠️ `[math]::Round(2.5)` = **2** (arrondi bancaire, vers le pair).
> Arrondi scolaire : `[math]::Round(2.5, 0, [MidpointRounding]::AwayFromZero)` = 3

**[System.IO.Path]** (travaille sur du texte, ne touche pas au disque)
`GetFileName` · `GetFileNameWithoutExtension` · `GetExtension` · `GetDirectoryName` ·
`Combine(a,b,c)` · `GetTempPath()`

**[System.IO.File]** : `Exists` · `ReadAllText` · `ReadAllLines` · `WriteAllText` ·
`AppendAllText` · `Delete` → **~9x plus rapide** que `Get-Content` sur gros volumes

**Divers** : `[guid]::NewGuid()` · `[datetime]::Now` · `[int]::Parse("42")` ·
`[string]::IsNullOrWhiteSpace($x)` · `[string]::Join(", ", $tab)` ·
`[System.Environment]::MachineName`

> ⚠️ .NET ignore `-WhatIf`, `-ErrorAction` et les PSDrives (`HKCU:`, `Cert:`).
> Cmdlet d'abord, .NET quand elle manque ou qu'elle rame.

---

### Fichiers et dossiers

| Commande        | Arguments clés                                        | Description                     | Alias       |
| --------------- | ----------------------------------------------------- | ------------------------------- | ----------- |
| `New-Item`      | `-Path` `-ItemType Directory\|File` `-Value` `-Force` | Créer fichier ou dossier        | `ni`        |
| `Copy-Item`     | `source dest` `-Recurse` `-Force`                     | Copier                          | `cp` `copy` |
| `Move-Item`     | `source dest`                                         | Déplacer / renommer             | `mv` `move` |
| `Remove-Item`   | `chemin` `-Recurse` `-Force` `-Confirm:$false`        | Supprimer                       | `rm` `del`  |
| `Test-Path`     | `chemin`                                              | Tester si existe → $true/$false | —           |
| `Get-Item`      | `chemin`                                              | Infos sur un fichier/dossier    | `gi`        |
| `Get-ChildItem` | `-Recurse` `-Filter "*.txt"` `-Force`                 | Lister le contenu               | `dir` `ls`  |
| `Split-Path`    | `-Parent` `-Leaf`                                     | Décomposer un chemin            | —           |
| `Join-Path`     | `"C:\Temp"` `"fichier.log"`                           | Construire un chemin            | —           |

### Lire et écrire dans des fichiers

| Commande      | Arguments clés                                       | Description                | Alias      |
| ------------- | ---------------------------------------------------- | -------------------------- | ---------- |
| `Get-Content` | `chemin` `-Tail 10` `-TotalCount 5` `-Encoding UTF8` | Lire un fichier            | `gc` `cat` |
| `Set-Content` | `-Path` `-Value` `-Encoding UTF8`                    | Écrire (écrase le contenu) | `sc`       |
| `Add-Content` | `-Path` `-Value` `-Encoding UTF8`                    | Ajouter à la fin           | `ac`       |
| `Out-File`    | `-FilePath` `-Append` `-Encoding UTF8`               | Rediriger vers un fichier  | —          |
| `-replace`    | `"ancien","nouveau"`                                 | Remplacer dans une chaîne  | —          |

### Export et import de données

| Commande              | Arguments clés                                          | Description                 | Alias |
| --------------------- | ------------------------------------------------------- | --------------------------- | ----- |
| `Export-Csv`          | `-Path` `-NoTypeInformation` `-Encoding UTF8` `-Append` | Exporter en CSV             | —     |
| `Import-Csv`          | `-Path` `-Encoding UTF8` `-Delimiter ";"`               | Importer un CSV             | —     |
| `ConvertTo-Json`      | `-Depth 3`                                              | Convertir en JSON           | —     |
| `ConvertFrom-Json`    | —                                                       | Convertir depuis JSON       | —     |
| `[PSCustomObject]@{}` | —                                                       | Créer un objet personnalisé | —     |

### Gestion des erreurs

| Élément                         | Exemple                                     | Description                        |
| ------------------------------- | ------------------------------------------- | ---------------------------------- |
| `try { }`                       | `try { Get-Content "x" -ErrorAction Stop }` | Bloc à surveiller                  |
| `catch { }`                     | `catch { Write-Host $_.Exception.Message }` | Si une erreur se produit           |
| `finally { }`                   | `finally { Write-Host "Fin" }`              | Toujours exécuté                   |
| `-ErrorAction Stop`             | Ajouté à une cmdlet                         | Force l'erreur à être attrapable   |
| `-ErrorAction SilentlyContinue` | Ajouté à une cmdlet                         | Ignore les erreurs silencieusement |
| `$_.Exception.Message`          | Dans le `catch`                             | Message d'erreur                   |
| `$_.Exception.GetType()`        | Dans le `catch`                             | Type d'exception                   |

---

### Gestion des erreurs avancée

| Élément                                             | Effet                                                               |
| --------------------------------------------------- | ------------------------------------------------------------------- |
| `Write-Error "msg"`                                 | Erreur **non terminante** — le script continue, `catch` ne part pas |
| `throw "msg"`                                       | Erreur **terminante** — interrompt et remonte à l'appelant          |
| `throw [System.IO.FileNotFoundException]::new("x")` | Erreur typée, filtrable par `catch [Type]`                          |
| `-ErrorAction Stop`                                 | Rend une erreur non terminante attrapable par `catch`               |
| `$ErrorActionPreference = 'Stop'`                   | Applique la règle à tout le script                                  |
| `exit 0` / `exit 1` / `exit 2`                      | Code de sortie lu par le Planificateur et la CI                     |
| `$LASTEXITCODE`                                     | Code de sortie du script/processus appelé                           |
| `$?`                                                | La **dernière** commande a-t-elle réussi ? (écrasé aussitôt)        |
| `$Error[0]`                                         | Dernière erreur de la session · `$Error.Clear()` pour vider         |

**Les 6 flux** : `1` Output · `2` Error · `3` Warning · `4` Verbose · `5` Debug · `6` Information

| Redirection                    | Effet                                                    |
| ------------------------------ | -------------------------------------------------------- |
| `2>$null`                      | Jeter les erreurs                                        |
| `2>"log.txt"` / `2>>"log.txt"` | Écrire / ajouter les erreurs dans un fichier             |
| `2>&1`                         | L'erreur devient un objet `ErrorRecord` dans le pipeline |
| `*>"complet.txt"`              | Les 6 flux dans un fichier                               |

**Débogage**

| Commande                                                 | Description                                             |
| -------------------------------------------------------- | ------------------------------------------------------- |
| `Set-PSBreakpoint -Script s.ps1 -Line 12`                | Point d'arrêt sur une ligne                             |
| `Set-PSBreakpoint -Script s.ps1 -Variable x -Mode Write` | Espion sur une variable                                 |
| `Set-PSBreakpoint -Script s.ps1 -Command Remove-Item`    | Arrêt avant une commande                                |
| `Get-PSBreakpoint` / `Remove-PSBreakpoint`               | Lister / supprimer                                      |
| `s` `v` `c` `q`                                          | stepInto · stepOver · continue · quit (invite `[DBG]>`) |
| `Write-Verbose` / `Write-Debug`                          | Traces invisibles sauf `-Verbose` / `-Debug`            |

**Pièges** : `catch` générique doit être le **dernier** (sinon _ParserError_) ·
`2>&1` n'accepte **aucun espace** · `exit` dans une fonction termine tout le script ·
`@()` autour d'un `Where-Object` pour que `.Count` soit fiable.

---

### Registre, journaux et certificats

**PSDrives** : `C:` fichiers · `HKLM:` / `HKCU:` registre · `Cert:` certificats · `Env:` variables
→ mêmes cmdlets partout (`Get-ChildItem`, `Get-Item`, `Test-Path`, `Remove-Item`)

| Commande                                                             | Description                      |
| -------------------------------------------------------------------- | -------------------------------- |
| `Get-ChildItem HKLM:\SOFTWARE`                                       | Lister les **clés** (= dossiers) |
| `Get-ItemProperty <clé>`                                             | **Toutes** les valeurs de la clé |
| `Get-ItemPropertyValue <clé> -Name X`                                | **Une** valeur, directement      |
| `New-Item -Path <clé> -Force`                                        | Créer une clé                    |
| `New-ItemProperty -Path <clé> -Name X -Value v -PropertyType String` | Créer une valeur                 |
| `Set-ItemProperty` / `Remove-ItemProperty`                           | Modifier / supprimer une valeur  |

`-PropertyType` : `String` · `ExpandString` · `DWord` · `QWord` · `Binary` · `MultiString`

> ⚠️ `HKCU:` = votre profil (sans risque) · `HKLM:` = toute la machine (admin + `reg export` avant)
> ⚠️ `ProductName` affiche **Windows 10** sur Windows 11 → utiliser `CurrentBuild` (≥ 22000) ou CIM

**Journaux d'événements**

| Commande                                                     | Description                         |
| ------------------------------------------------------------ | ----------------------------------- |
| `Get-WinEvent -ListLog *`                                    | Lister les journaux                 |
| `Get-WinEvent -LogName System -MaxEvents 20`                 | Les 20 derniers                     |
| `Get-WinEvent -FilterHashtable @{LogName='System'; Level=2}` | **Filtrer à la source**             |
| `New-EventLog` / `Write-EventLog`                            | Créer une source / écrire une trace |

Clés du filtre : `LogName` `ProviderName` `Id` `Level` `StartTime` `EndTime` `Keywords`
Niveaux : `1` critique · `2` erreur · `3` avertissement · `4` information

> ⚠️ **Jamais** `Get-WinEvent -LogName System | Where-Object ...` sur un gros journal
> ⚠️ `Get-EventLog` est obsolète (fonction de compatibilité en PS 7.6) → `Get-WinEvent`

**Certificats**

| Commande                                                    | Description            |
| ----------------------------------------------------------- | ---------------------- |
| `Get-ChildItem Cert:\LocalMachine\Root`                     | Autorités racines      |
| `Get-ChildItem Cert:\CurrentUser\My`                        | Certificats personnels |
| `Set-AuthenticodeSignature -FilePath s.ps1 -Certificate $c` | Signer un script       |
| `Get-AuthenticodeSignature s.ps1`                           | Vérifier une signature |

> ⚠️ Pour « expire bientôt » : `NotAfter -gt (Get-Date) -and NotAfter -lt $limite`
> (sinon on remonte aussi les certificats **déjà** expirés)

---

### Sécurité et signature des scripts

| Commande                                                    | Description                                  |
| ----------------------------------------------------------- | -------------------------------------------- |
| `Get-ExecutionPolicy -List`                                 | Politique **par portée** (GPO prioritaire)   |
| `Set-ExecutionPolicy Bypass -Scope Process`                 | Débloquer la session seulement               |
| `Unblock-File script.ps1`                                   | Retirer la marque du web (`Zone.Identifier`) |
| `New-SelfSignedCertificate -Type CodeSigningCert`           | Certificat de test                           |
| `Get-ChildItem Cert:\CurrentUser\My -CodeSigningCert`       | Trouver un certificat de signature           |
| `Set-AuthenticodeSignature -FilePath x.ps1 -Certificate $c` | Signer                                       |
| `Get-AuthenticodeSignature x.ps1`                           | Vérifier (`Status`)                          |

**Portées, de la plus forte à la plus faible** :
`MachinePolicy` → `UserPolicy` → `Process` → `CurrentUser` → `LocalMachine`

**Politiques** : `Restricted` · `AllSigned` · `RemoteSigned` · `Unrestricted` · `Bypass`

**Statuts de signature**

| Situation                                        | `Status`       |
| ------------------------------------------------ | -------------- |
| non signé                                        | `NotSigned`    |
| signé, certificat non approuvé                   | `UnknownError` |
| certificat dans `Root` **et** `TrustedPublisher` | `Valid`        |
| modifié après signature                          | `NotSigned`    |

> ⚠️ La politique d'exécution **n'est pas une sécurité** (contournable par `-ExecutionPolicy Bypass`)
> ⚠️ Signer ne suffit pas : il faut approuver le certificat dans **deux** magasins
> ⚠️ Toute modification invalide la signature → **signer en dernier**

**Script livrable** : aide `<# .SYNOPSIS #>` · paramètres validés ·
`Set-StrictMode -Version Latest` · `$ErrorActionPreference = 'Stop'` ·
codes de sortie documentés · signature finale

---

## JOUR 4 — Outils professionnels

### Paramètres avancés de scripts

| Élément                             | Exemple                | Description                            |
| ----------------------------------- | ---------------------- | -------------------------------------- |
| `[CmdletBinding()]`                 | Au-dessus de `param()` | Active `-Verbose`, `-Debug`, `-WhatIf` |
| `[Parameter(Mandatory)]`            | Sur un paramètre       | Rend le paramètre obligatoire          |
| `[ValidateSet("A","B")]`            | Sur un paramètre       | Limite les valeurs autorisées          |
| `[ValidateRange(1,100)]`            | Sur un paramètre       | Limite la plage numérique              |
| `[switch]$Flag`                     | Paramètre              | Flag booléen (`-Flag` pour activer)    |
| `$PSScriptRoot`                     | —                      | Dossier du script en cours             |
| `.SYNOPSIS` `.PARAMETER` `.EXAMPLE` | Dans `<# #>`           | Commentaires d'aide (`Get-Help`)       |

### Modules

| Commande              | Arguments clés                         | Description                                 |
| --------------------- | -------------------------------------- | ------------------------------------------- |
| `Import-Module`       | `chemin.psm1` `-Force`                 | Charger un module                           |
| `Export-ModuleMember` | `-Function F1, F2`                     | Rendre des fonctions publiques (dans .psm1) |
| `Get-Module`          | `-ListAvailable` `-Name "AD*"`         | Lister les modules installés/chargés        |
| `Find-Module`         | `-Name "nom"` `-Tag "tag"`             | Chercher sur la PowerShell Gallery          |
| `Install-Module`      | `-Name "nom"` `-Scope CurrentUser`     | Installer un module                         |
| `Update-Module`       | `-Name "nom"`                          | Mettre à jour un module                     |
| `New-ModuleManifest`  | `-Path` `-RootModule` `-ModuleVersion` | Créer un fichier .psd1                      |

### RSAT et PowerShell Gallery

**RSAT — outils d'administration (console administrateur obligatoire)**

| Commande                                                                             | Description                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------- |
| `Get-WindowsCapability -Online -Name "Rsat*"`                                        | Lister les outils RSAT disponibles        |
| `Add-WindowsCapability -Online -Name "Rsat.ActiveDirectory.DS-LDS.Tools~~~~0.0.1.0"` | Installer les outils AD                   |
| `Get-WindowsOptionalFeature -Online`                                                 | Fonctionnalités Windows (**côté client**) |
| `Enable-WindowsOptionalFeature -Online -FeatureName X`                               | Activer une fonctionnalité                |

**Windows Server uniquement**

| Commande                                                   | Description                   |
| ---------------------------------------------------------- | ----------------------------- |
| `Get-WindowsFeature`                                       | Lister les rôles et leur état |
| `Install-WindowsFeature -Name DNS -IncludeManagementTools` | Installer un rôle             |
| `Install-WindowsFeature -Name X -ComputerName SRV-02`      | Installer à distance          |

> ⚠️ Sur un poste **client**, `Get-WindowsFeature` existe (via RSAT) mais **refuse de
> s'exécuter** : « La cible … ne peut pas être un système d'exploitation basé sur un
> client Windows ». Utiliser `Get-WindowsOptionalFeature -Online`.

**PowerShell Gallery**

| Commande                                                                   | Description                                      |
| -------------------------------------------------------------------------- | ------------------------------------------------ |
| `Find-Module -Name X`                                                      | Chercher **avant** d'installer                   |
| `Find-Module -Name X \| Format-List Name,Version,PublishedDate,ProjectUri` | Vérifier la vitalité                             |
| `Install-Module X -Scope CurrentUser`                                      | Installer sans droits admin                      |
| `Install-Module X -Scope AllUsers`                                         | Toute la machine (**admin**)                     |
| `Update-Module` / `Uninstall-Module`                                       | Mettre à jour / retirer                          |
| `Save-Module X -Path D:\Modules`                                           | Télécharger sans installer (hors ligne)          |
| `Get-PSRepository`                                                         | Dépôts enregistrés (`PSGallery` = **Untrusted**) |

Moderne (PS 7) : `Find-PSResource` · `Install-PSResource` · `Update-PSResource`

**Modules utiles — état réel**

| Module            | Publication | Verdict                               |
| ----------------- | ----------- | ------------------------------------- |
| `Carbon`          | 2026-08     | maintenu                              |
| `ImportExcel`     | 2024-10     | maintenu (remplace `PSExcel`)         |
| `PSWindowsUpdate` | 2024-07     | maintenu                              |
| `NTFSSecurity`    | 2019-07     | **abandonné** → `Get-Acl` / `Set-Acl` |
| `PSExcel`         | 2016-08     | **abandonné** → `ImportExcel`         |

---

### Profils PowerShell

| Commande                    | Arguments clés            | Description                                              | Alias |
| --------------------------- | ------------------------- | -------------------------------------------------------- | ----- |
| `$PROFILE`                  | —                         | Chemin du profil personnel (console)                     | —     |
| `$PROFILE \| Format-List *` | —                         | Les 4 profils : utilisateur/machine, hôte courant/tous   | —     |
| `Test-Path $PROFILE`        | —                         | Le profil existe-t-il ? (souvent `False` au départ)      | —     |
| `New-Item $PROFILE`         | `-ItemType File` `-Force` | Créer le profil (`-Force` crée le dossier parent)        | `ni`  |
| `. $PROFILE`                | —                         | **Recharger** le profil dans la session (dot-sourcing)   | —     |
| `pwsh -NoProfile`           | —                         | Démarrer sans profil (diagnostic, tâches planifiées)     | —     |
| `$Host.Name`                | —                         | Hôte courant : `ConsoleHost`, `Visual Studio Code Host`… | —     |

**Emplacements** — PS 7 : `Documents\PowerShell\` · PS 5.1 : `Documents\WindowsPowerShell\` (séparés !)

**Pièges** : `. $PROFILE` avec un **espace** après le point · `&` au lieu de `.` ne garde rien ·
vérifier avec `Get-Command <nom>` qu'une fonction ne masque pas une cmdlet native.

---

### Expressions régulières (regex)

| Élément                           | Signification                             | Exemple                            |
| --------------------------------- | ----------------------------------------- | ---------------------------------- |
| `-match "motif"`                  | Teste si contient le motif → $true/$false | `"ERREUR" -match "ERR"`            |
| `-replace "motif","remplacement"` | Remplace toutes les occurrences           | `"abc" -replace "b","X"`           |
| `Select-String`                   | `-Path "*.log"` `-Pattern "motif"`        | Chercher dans des fichiers         |
| `\|`                              | OU dans le motif                          | `"WARN\|ERREUR"`                   |
| `\d`                              | Un chiffre                                | `"\d+"` = un ou plusieurs chiffres |
| `\w`                              | Lettre, chiffre ou _                      | —                                  |
| `\.`                              | Point littéral                            | `"\d+\.\d+"`                       |
| `\[` `\]`                         | Crochet littéral                          | `"\[INFO\]"`                       |

### Planification des tâches

| Commande                   | Arguments clés                                                                             | Description                   |
| -------------------------- | ------------------------------------------------------------------------------------------ | ----------------------------- |
| `New-ScheduledTaskAction`  | `-Execute "pwsh.exe"` `-Argument "-File script.ps1"`                                       | Définir l'action              |
| `New-ScheduledTaskTrigger` | `-Daily -At "06:00"` `-Weekly -DaysOfWeek Monday` `-AtStartup` `-Once -RepetitionInterval` | Définir le déclencheur        |
| `Register-ScheduledTask`   | `-TaskName` `-Action` `-Trigger` `-RunLevel Highest`                                       | Créer/enregistrer la tâche    |
| `Get-ScheduledTask`        | `-TaskName "nom"`                                                                          | Voir une tâche                |
| `Start-ScheduledTask`      | `-TaskName "nom"`                                                                          | Lancer manuellement           |
| `Disable-ScheduledTask`    | `-TaskName "nom"`                                                                          | Désactiver                    |
| `Enable-ScheduledTask`     | `-TaskName "nom"`                                                                          | Réactiver                     |
| `Unregister-ScheduledTask` | `-TaskName "nom"` `-Confirm:$false`                                                        | Supprimer                     |
| `Get-ScheduledTaskInfo`    | —                                                                                          | Dernier résultat (0 = succès) |

---

## JOUR 5 — Active Directory

### Prérequis

| Commande                                                        | Description                       |
| --------------------------------------------------------------- | --------------------------------- |
| `Add-WindowsCapability -Online -Name "Rsat.ActiveDirectory..."` | Installer les RSAT                |
| `Import-Module ActiveDirectory`                                 | Charger le module AD              |
| `Get-ADDomain`                                                  | Voir les infos du domaine         |
| `Get-ADDomainController -Filter *`                              | Lister les contrôleurs de domaine |

### Utilisateurs AD

| Commande                 | Arguments clés                                                                                      | Description                               |
| ------------------------ | --------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| `Get-ADUser`             | `-Identity "login"` `-Filter "Dept -eq 'IT'"` `-Properties *` `-SearchBase "OU=..."`                | Lire un/des utilisateurs                  |
| `New-ADUser`             | `-Name` `-SamAccountName` `-UserPrincipalName` `-AccountPassword` `-Enabled $true` `-Path "OU=..."` | Créer un utilisateur                      |
| `Set-ADUser`             | `-Identity "login"` `-Title "val"` `-Department "val"`                                              | Modifier des attributs                    |
| `Remove-ADUser`          | `-Identity "login"` `-Confirm:$false`                                                               | Supprimer                                 |
| `Enable-ADAccount`       | `-Identity "login"`                                                                                 | Activer un compte                         |
| `Disable-ADAccount`      | `-Identity "login"`                                                                                 | Désactiver un compte                      |
| `Set-ADAccountPassword`  | `-Identity "login"` `-NewPassword (ConvertTo-SecureString "P@ss" -AsPlainText -Force)` `-Reset`     | Changer le mot de passe                   |
| `ConvertTo-SecureString` | `"mot de passe"` `-AsPlainText -Force`                                                              | Convertir un mot de passe en SecureString |

### Groupes AD

| Commande                         | Arguments clés                                                                                                                  | Description              |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `Get-ADGroup`                    | `-Identity "nom"` `-Filter "Name -like 'GRP*'"`                                                                                 | Lire un/des groupes      |
| `New-ADGroup`                    | `-Name` `-SamAccountName` `-GroupScope Global\|DomainLocal\|Universal` `-GroupCategory Security\|Distribution` `-Path "OU=..."` | Créer un groupe          |
| `Add-ADGroupMember`              | `-Identity "groupe"` `-Members "login1","login2"`                                                                               | Ajouter des membres      |
| `Remove-ADGroupMember`           | `-Identity "groupe"` `-Members "login"` `-Confirm:$false`                                                                       | Retirer un membre        |
| `Get-ADGroupMember`              | `-Identity "groupe"` `-Recursive`                                                                                               | Lister les membres       |
| `Get-ADPrincipalGroupMembership` | `-Identity "login"`                                                                                                             | Groupes d'un utilisateur |

### Recherche AD

| Commande             | Arguments clés                                                                                          | Description                            |
| -------------------- | ------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| `Get-ADUser -Filter` | `"Dept -eq 'IT'"` `"Enabled -eq $true"` `"Name -like 'L*'"`                                             | Rechercher avec filtre                 |
| `-Properties`        | `LastLogonDate, PasswordLastSet, LockedOut`                                                             | Demander des attributs supplémentaires |
| `-SearchBase`        | `"OU=Agents,DC=domaine,DC=org"`                                                                         | Limiter la recherche à une OU          |
| `Search-ADAccount`   | `-LockedOut` `-PasswordExpired` `-AccountInactive -TimeSpan (New-TimeSpan -Days 90)` `-AccountDisabled` | Comptes en anomalie                    |

---

### Interfaces graphiques (WinForms)

```powershell
Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing
```

| Élément                                 | Rôle                                                |
| --------------------------------------- | --------------------------------------------------- |
| `New-Object System.Windows.Forms.Form`  | La fenêtre                                          |
| `.Text` `.Size` `.StartPosition`        | Titre, taille, position (`CenterScreen`)            |
| `New-Object System.Drawing.Point(x, y)` | Position d'un contrôle                              |
| `$form.Controls.Add($ctrl)`             | **Indispensable** : sinon le contrôle est invisible |
| `$btn.Add_Click({ ... })`               | Attacher un événement                               |
| `$form.ShowDialog()`                    | Affiche et **bloque** jusqu'à fermeture             |
| `$form.Dispose()`                       | Libère les ressources                               |

**Contrôles** : `Label` · `TextBox` (`.Text`) · `MaskedTextBox` · `ComboBox` (`.SelectedItem`) ·
`CheckBox` (`.Checked`) · `Button` · `ListView` · `ProgressBar`

**Valider proprement**

```powershell
$btnOK.DialogResult      = [System.Windows.Forms.DialogResult]::OK
$btnAnnuler.DialogResult = [System.Windows.Forms.DialogResult]::Cancel
$form.AcceptButton = $btnOK       # touche Entrée
$form.CancelButton = $btnAnnuler  # touche Échap

if ($form.ShowDialog() -eq [System.Windows.Forms.DialogResult]::OK) { ... }
```

**Boîtes toutes faites** : `[System.Windows.Forms.MessageBox]::Show(msg, titre)` ·
`New-Object System.Windows.Forms.OpenFileDialog`

> ⚠️ `ShowDialog()` **bloque** → jamais dans une tâche planifiée
> ⚠️ `ComboBox.DropDownStyle = "DropDownList"` interdit la saisie libre
> ⚠️ `SelectedIndex = 0` sinon `SelectedItem` vaut `$null`
> ⚠️ WinForms = **Windows uniquement**, même en PowerShell 7
> ⚠️ Le formulaire saisit, le script décide : pas de logique métier dans `Add_Click`

---

## Aide-mémoire global

### Alias les plus utiles

| Alias        | Cmdlet complète  |
| ------------ | ---------------- |
| `?`          | `Where-Object`   |
| `%`          | `ForEach-Object` |
| `sort`       | `Sort-Object`    |
| `select`     | `Select-Object`  |
| `group`      | `Group-Object`   |
| `measure`    | `Measure-Object` |
| `ft`         | `Format-Table`   |
| `fl`         | `Format-List`    |
| `ogv`        | `Out-GridView`   |
| `dir` / `ls` | `Get-ChildItem`  |
| `cd`         | `Set-Location`   |
| `pwd`        | `Get-Location`   |
| `cat`        | `Get-Content`    |
| `cls`        | `Clear-Host`     |

### Opérateurs essentiels

| Opérateur                           | Usage                               |
| ----------------------------------- | ----------------------------------- |
| `\|`                                | Pipeline                            |
| `\|>`                               | Redirection vers fichier (Out-File) |
| `-eq` `-ne` `-gt` `-lt` `-ge` `-le` | Comparaison                         |
| `-like` `-match`                    | Correspondance (wildcard / regex)   |
| `-and` `-or` `-not`                 | Logique                             |
| `-replace`                          | Remplacement de texte               |
| `1..10`                             | Plage numérique                     |
| `$_`                                | Objet courant dans pipeline         |
| `$?`                                | Succès de la dernière commande      |

### Structures de contrôle en un coup d'œil

```powershell
# Condition
if ($x -gt 5) { } elseif ($x -eq 5) { } else { }

# Switch
switch ($val) { "A" { } "B" { } default { } }

# Boucle foreach
foreach ($item in $collection) { }

# Boucle pipeline
$collection | ForEach-Object { $_ }

# Gestion d'erreur
try { Cmdlet -ErrorAction Stop } catch { $_.Exception.Message }

# Fonction avec paramètres avancés  (Verbe-Nom : verbe issu de Get-Verb)
function Get-Rapport {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory)] [string]$Param1,
        [ValidateSet("A","B")] [string]$Param2 = "A",
        [switch]$Flag
    )
}
```

---
