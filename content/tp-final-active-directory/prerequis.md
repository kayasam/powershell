---
title: "Prérequis — Préparer l'environnement de travail"
---

> À faire **avant** de commencer les TP (Débutant ou Avancé).
> Durée estimée : 15 min

---

## 1 — Se connecter à DC01 avec VSCode

Vous allez travailler sur **DC01** à distance via VSCode et l'extension **Remote - SSH**.

### Activer SSH sur DC01

Sur **DC01**, ouvrez une console PowerShell **en tant qu'administrateur** :

```powershell
# Vérifier si OpenSSH Server est déjà installé
Get-WindowsCapability -Online | Where-Object Name -like 'OpenSSH.Server*'
```

> **Windows Server 2025** : OpenSSH Server est installé par défaut (`State : Installed`).
> Si c'est le cas, passez directement au démarrage du service ci-dessous.

```powershell
# Installer le serveur OpenSSH (uniquement si State = NotPresent)
Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0

# Démarrer le service et le configurer en démarrage automatique
Start-Service sshd
Set-Service -Name sshd -StartupType Automatic

# Vérifier que la règle de pare-feu SSH existe (créée automatiquement à l'installation)
Get-NetFirewallRule -Name *ssh*
```

> Si la règle de pare-feu n'existe pas :
>
> ```powershell
> New-NetFirewallRule -DisplayName "OpenSSH-Server-In" `
>     -Direction Inbound -Protocol TCP -LocalPort 22 `
>     -Action Allow -Profile Domain
> ```

### Configurer le shell par défaut en PowerShell

Par défaut, SSH ouvre `cmd.exe`. Pour que VSCode utilise PowerShell :

```powershell
New-ItemProperty -Path "HKLM:\SOFTWARE\OpenSSH" `
    -Name DefaultShell `
    -Value "C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe" `
    -PropertyType String -Force
```

### Sur votre poste — Installer VSCode et les extensions

```powershell
# Installer VSCode (scope machine = disponible pour tous les utilisateurs)
winget install Microsoft.VisualStudioCode --scope machine --accept-source-agreements

# Redémarrer le terminal pour que 'code' soit dans le PATH, puis :
code --install-extension ms-vscode-remote.remote-ssh
code --install-extension ms-vscode.powershell
```

### Générer une clé SSH

Sur votre poste, ouvrez un terminal PowerShell :

```powershell
# Générer une paire de clés (appuyez Entrée pour accepter le chemin par défaut et pas de passphrase)
ssh-keygen -t ed25519 -C "admin-fournil"
```

> Les clés sont créées dans `C:\Users\<votre-login>\.ssh\` :
>
> - `id_ed25519` — clé privée (ne jamais la partager)
> - `id_ed25519.pub` — clé publique (à copier sur DC01)

### Copier la clé publique sur DC01

```powershell
# Lire la clé publique
$pubKey = Get-Content "$env:USERPROFILE\.ssh\id_ed25519.pub"

# La copier dans le fichier authorized_keys de l'administrateur sur DC01
# (Pour un compte administrateur, c'est administrators_authorized_keys)
ssh administrateur@192.168.3.1 "
    if (-not (Test-Path 'C:\ProgramData\ssh')) { New-Item -ItemType Directory -Path 'C:\ProgramData\ssh' -Force }
    Add-Content -Path 'C:\ProgramData\ssh\administrators_authorized_keys' -Value '$pubKey'
    icacls 'C:\ProgramData\ssh\administrators_authorized_keys' /inheritance:r /grant 'Administrateurs:F' /grant 'SYSTEM:F'
"
```

> Entrez le mot de passe une dernière fois. Après ça, les connexions SSH seront **sans mot de passe**.

### Configurer le fichier SSH config

Créez ou éditez le fichier `C:\Users\<votre-login>\.ssh\config` :

```
Host dc01
    HostName <IP-de-DC01>
    User administrateur
    IdentityFile ~/.ssh/id_ed25519
```

> Remplacez `<IP-de-DC01>` par l'adresse IP réelle du serveur.

### Connexion VSCode

1. `Ctrl+Shift+P` → **Remote-SSH: Connect to Host...**
2. Sélectionnez **dc01** (le host apparaît grâce au fichier config)
3. Choisissez **Windows** comme type de plateforme
4. La connexion se fait **sans mot de passe** grâce à la clé SSH

### Dossier à ouvrir dans VSCode

Une fois connecté, ouvrez le dossier suivant :

```
C:\Deploy
```

Ce dossier contient tout le nécessaire :

```
C:\Deploy\
├── orga-fournil.csv              ← organigramme
├── utilisateurs-fournil.csv      ← liste des 30 utilisateurs
└── Set-NetworkLocation.ps1       ← script de connexion GPO
```

> Copiez les fichiers du dossier `scripts/` du TP dans `C:\Deploy` sur DC01 avant de commencer.

---

## 2 — Configurer le pare-feu pour Invoke-Command

Les scripts DFS utilisent `Invoke-Command` pour exécuter des commandes à distance sur DC2. Cela nécessite **WinRM** (Windows Remote Management) qui doit être autorisé dans le pare-feu des deux serveurs.

### Vérifier le profil réseau

Les deux serveurs doivent être en profil **Domaine** (pas Privé ni Public) :

```powershell
Get-NetConnectionProfile
```

> Le champ `NetworkCategory` doit afficher `DomainAuthenticated`.
> Si ce n'est pas le cas, vérifiez que le serveur est bien joint au domaine et que le DNS pointe vers le DC.

### Sur DC01 — Règles pare-feu

Exécutez ces commandes **en tant qu'administrateur** :

```powershell
# Activer WinRM (si pas déjà fait)
Enable-PSRemoting -Force

# Autoriser WinRM entrant (déjà actif par défaut sur un DC, mais on s'assure)
Set-NetFirewallRule -Name "WINRM-HTTP-In-TCP" -Enabled True -Profile Domain

# Autoriser le trafic SMB (partages, DFS, SYSVOL)
New-NetFirewallRule -DisplayName "SMB-In" `
    -Direction Inbound -Protocol TCP -LocalPort 445 `
    -Action Allow -Profile Domain -ErrorAction SilentlyContinue

# Autoriser DCOM/RPC pour la gestion DFS
New-NetFirewallRule -DisplayName "DFS-RPC-In" `
    -Direction Inbound -Protocol TCP -LocalPort 135 `
    -Action Allow -Profile Domain -ErrorAction SilentlyContinue

# Autoriser les ports dynamiques RPC (49152-65535)
New-NetFirewallRule -DisplayName "RPC-Dynamic-In" `
    -Direction Inbound -Protocol TCP -LocalPort 49152-65535 `
    -Action Allow -Profile Domain -ErrorAction SilentlyContinue

# Autoriser ICMPv4 (ping) pour le diagnostic
New-NetFirewallRule -DisplayName "ICMPv4-In" `
    -Direction Inbound -Protocol ICMPv4 -IcmpType 8 `
    -Action Allow -Profile Domain -ErrorAction SilentlyContinue
```

### Sur DC2 — Mêmes règles

Depuis DC01, exécutez les mêmes règles à distance :

```powershell
Invoke-Command -ComputerName DC2 -ScriptBlock {
    Enable-PSRemoting -Force

    Set-NetFirewallRule -Name "WINRM-HTTP-In-TCP" -Enabled True -Profile Domain

    New-NetFirewallRule -DisplayName "SMB-In" `
        -Direction Inbound -Protocol TCP -LocalPort 445 `
        -Action Allow -Profile Domain -ErrorAction SilentlyContinue

    New-NetFirewallRule -DisplayName "DFS-RPC-In" `
        -Direction Inbound -Protocol TCP -LocalPort 135 `
        -Action Allow -Profile Domain -ErrorAction SilentlyContinue

    New-NetFirewallRule -DisplayName "RPC-Dynamic-In" `
        -Direction Inbound -Protocol TCP -LocalPort 49152-65535 `
        -Action Allow -Profile Domain -ErrorAction SilentlyContinue

    New-NetFirewallRule -DisplayName "ICMPv4-In" `
        -Direction Inbound -Protocol ICMPv4 -IcmpType 8 `
        -Action Allow -Profile Domain -ErrorAction SilentlyContinue
}
```

> Si `Invoke-Command` échoue pour exécuter ces règles sur DC2, connectez-vous directement à DC2 et exécutez les commandes localement.

### Vérification

```powershell
# Tester la connexion WinRM vers DC2
Test-WSMan -ComputerName DC2

# Tester Invoke-Command
Invoke-Command -ComputerName DC2 -ScriptBlock { $env:COMPUTERNAME }
# Doit retourner : DC2

# Vérifier les règles de pare-feu actives (profil Domaine)
Get-NetFirewallRule -Direction Inbound -Enabled True |
    Where-Object { $_.Profile -match "Domain" } |
    Select-Object DisplayName, Enabled, Direction | Sort-Object DisplayName
```

---

## 3 — Vérifier les prérequis AD

```powershell
# Le serveur est-il un contrôleur de domaine ?
Get-ADDomain

# Le module AD est-il disponible ?
Get-Module -ListAvailable ActiveDirectory

# Si le module AD manque :
Install-WindowsFeature RSAT-AD-PowerShell

# DC2 est-il joignable ?
Test-Connection DC2 -Count 2
Resolve-DnsName DC2
```

---

## Récapitulatif des ports

| Port        | Protocole | Service             | Nécessaire pour                      |
| ----------- | --------- | ------------------- | ------------------------------------ |
| 22          | TCP       | SSH                 | VSCode Remote-SSH                    |
| 5985        | TCP       | WinRM (HTTP)        | `Invoke-Command`, `Enter-PSSession`  |
| 445         | TCP       | SMB                 | Partages, DFS, SYSVOL, `Robocopy`    |
| 135         | TCP       | RPC Endpoint Mapper | DFS, réplication, gestion à distance |
| 49152-65535 | TCP       | RPC dynamiques      | Toutes les communications AD/DFS     |
| ICMP type 8 | ICMPv4    | Ping                | Diagnostic réseau                    |

> Toutes les règles sont restreintes au profil **Domaine** — elles ne s'appliquent pas sur des réseaux publics ou privés.

---

## Vous êtes prêt !

| Parcours | Premier TP                                                   |
| -------- | ------------------------------------------------------------ |
| Débutant | [[tp-final-active-directory/ad/debutant\|01.TP-Debutant-AD]] |
| Avancé   | [[tp-final-active-directory/ad/avance\|01.TP-Avance-AD]]     |
