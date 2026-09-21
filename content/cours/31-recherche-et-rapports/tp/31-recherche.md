---
title: "Exercice 31 - La Carte des Agents"
parcours-tssr: false
parcours-pro: true
---

# Exercice 31 - La Carte des Agents 🗺️

**Durée : 35 min**

## Contexte

**Nami** veut une vue complète sur tous les agents du Gouvernement Mondial.
Quels comptes sont inactifs ? Qui a un mot de passe qui n'expire jamais ?
Quels agents n'ont pas de groupe ?
Elle veut des **rapports exportés**, prêts à être présentés à Rob Lucci.

> _"La connaissance, c'est comme la cartographie : il faut tout couvrir, aucun angle mort."_ — Nami

---

## Les données de l'exercice

```powershell
# Utilisez ces données pour la simulation
# (ou votre vrai AD si disponible)

$agentsAD = @(
    [PSCustomObject]@{ Name="Rob Lucci";  SamAccountName="rlucci";   Department="CP-9"; Title="Agent Spécial";   Enabled=$true;  PasswordNeverExpires=$false; LastLogonDate=(Get-Date).AddDays(-2);  LockedOut=$false }
    [PSCustomObject]@{ Name="Kaku";       SamAccountName="kkaku";    Department="CP-9"; Title="Agent";           Enabled=$true;  PasswordNeverExpires=$false; LastLogonDate=(Get-Date).AddDays(-1);  LockedOut=$false }
    [PSCustomObject]@{ Name="Kalifa";     SamAccountName="khalifa";  Department="CP-9"; Title="Agent";           Enabled=$true;  PasswordNeverExpires=$false; LastLogonDate=(Get-Date).AddDays(-5);  LockedOut=$false }
    [PSCustomObject]@{ Name="Blueno";     SamAccountName="blueno";   Department="CP-9"; Title="Agent";           Enabled=$true;  PasswordNeverExpires=$true;  LastLogonDate=(Get-Date).AddDays(-45); LockedOut=$false }
    [PSCustomObject]@{ Name="Fukurou";    SamAccountName="fukurou";  Department="CP-9"; Title="Messager";        Enabled=$false; PasswordNeverExpires=$false; LastLogonDate=(Get-Date).AddDays(-120);LockedOut=$false }
    [PSCustomObject]@{ Name="Spandam";    SamAccountName="spandam";  Department="CP-5"; Title="Directeur";       Enabled=$true;  PasswordNeverExpires=$true;  LastLogonDate=(Get-Date).AddDays(-3);  LockedOut=$true  }
    [PSCustomObject]@{ Name="Hattori";    SamAccountName="hattori";  Department="CP-5"; Title="Pigeon";          Enabled=$true;  PasswordNeverExpires=$true;  LastLogonDate=(Get-Date).AddDays(-200);LockedOut=$false }
    [PSCustomObject]@{ Name="Lucci-Bot";  SamAccountName="luccibot"; Department="";     Title="Compte Service";  Enabled=$true;  PasswordNeverExpires=$true;  LastLogonDate=(Get-Date).AddDays(-7);  LockedOut=$false }
)
```

---

## Mission 1 : Comptes en anomalie (15 min)

### Avec AD réel

Uniquement dans un **domaine de laboratoire autorisé** : renseignez une OU précise dans `$ou` avant toute requête. Ne lancez pas ces exemples sur tout un domaine de production.

```powershell
# Comptes bloqués
Write-Host "=== COMPTES BLOQUÉS ===" -ForegroundColor Red
if ([string]::IsNullOrWhiteSpace($ou)) { throw 'OU de laboratoire obligatoire.' }
Search-ADAccount -LockedOut -UsersOnly -SearchBase $ou |
    Select-Object Name, SamAccountName, LastLogonDate

# Comptes dont le mot de passe n'expire jamais
Write-Host "`n=== MOT DE PASSE PERMANENT ===" -ForegroundColor Yellow
Get-ADUser -SearchBase $ou -Filter 'PasswordNeverExpires -eq $true' -Properties PasswordNeverExpires, Department |
    Select-Object Name, SamAccountName, Department

# Comptes inactifs depuis 60 jours
$seuil = (Get-Date).AddDays(-60)
Write-Host "`n=== INACTIFS (>60 jours) ===" -ForegroundColor Yellow
Get-ADUser -SearchBase $ou -Filter 'Enabled -eq $true' -Properties LastLogonDate |
    Where-Object { $null -ne $_.LastLogonDate -and $_.LastLogonDate -lt $seuil } |
    Select-Object Name, SamAccountName, LastLogonDate |
    Sort-Object LastLogonDate
```

### Avec simulation

```powershell
Write-Host "=== COMPTES BLOQUÉS ===" -ForegroundColor Red
$agentsAD | Where-Object LockedOut -eq $true |
    Select-Object Name, SamAccountName, LastLogonDate | Format-Table

Write-Host "=== MOT DE PASSE PERMANENT ===" -ForegroundColor Yellow
$agentsAD | Where-Object PasswordNeverExpires -eq $true |
    Select-Object Name, SamAccountName, Department | Format-Table

$seuil = (Get-Date).AddDays(-60)
Write-Host "=== INACTIFS (>60 jours) ===" -ForegroundColor Yellow
$agentsAD |
    Where-Object { $_.Enabled -eq $true -and $_.LastLogonDate -lt $seuil } |
    Select-Object Name, SamAccountName, LastLogonDate |
    Sort-Object LastLogonDate | Format-Table
```

---

## Mission 2 : Rapport par département (10 min)

Nami veut un tableau récapitulatif par département.

```powershell
# Version AD réel :
# Get-ADUser -Filter * -Properties Department, Enabled, LastLogonDate

# Version simulation (même logique) :
$agentsAD |
    Group-Object Department |
    ForEach-Object {
        $membres  = $_.Group
        $actifs   = ($membres | Where-Object Enabled -eq $true).Count
        $inactifs = ($membres | Where-Object Enabled -eq $false).Count

        [PSCustomObject]@{
            Departement = if ($_.Name -eq "") { "(aucun)" } else { $_.Name }
            Total       = $membres.Count
            Actifs      = $actifs
            Inactifs    = $inactifs
        }
    } |
    Sort-Object Total -Descending |
    Format-Table -AutoSize
```

---

## Mission 3 : Export des rapports (10 min)

Créez un dossier `C:\Temp\Rapports-AD` et exportez trois fichiers CSV.

```powershell
$dossier = "C:\Temp\Rapports-AD"
New-Item -Path $dossier -ItemType Directory -Force | Out-Null

# 1. Tous les agents
$agentsAD |
    Select-Object Name, SamAccountName, Department, Title, Enabled, LastLogonDate |
    Export-Csv "$dossier\tous-les-agents.csv" -NoTypeInformation -Encoding UTF8

# 2. Comptes à risque
$agentsAD |
    Where-Object { $_.PasswordNeverExpires -eq $true -or $_.LockedOut -eq $true } |
    Select-Object Name, SamAccountName, PasswordNeverExpires, LockedOut |
    Export-Csv "$dossier\comptes-a-risque.csv" -NoTypeInformation -Encoding UTF8

# 3. Comptes inactifs
$seuil = (Get-Date).AddDays(-60)
$agentsAD |
    Where-Object { $_.Enabled -eq $true -and $_.LastLogonDate -lt $seuil } |
    Select-Object Name, SamAccountName, LastLogonDate |
    Export-Csv "$dossier\comptes-inactifs.csv" -NoTypeInformation -Encoding UTF8

Write-Host "Rapports exportés dans $dossier :" -ForegroundColor Cyan
Get-ChildItem $dossier | Format-Table Name, Length, LastWriteTime -AutoSize
```

---

## Mission Bonus : Tableau de bord complet 🌟

Créez une fonction `Get-RapportAD` qui affiche en couleur un résumé du domaine.

> Solution complète : voir la correction de ce TP.

---

## Validation

- ✅ Vous savez utiliser `Search-ADAccount` pour trouver les anomalies
- ✅ Vous savez filtrer avec `-Filter` et les conditions `-and`
- ✅ Vous savez construire des rapports par département avec `Group-Object`
- ✅ Vous savez exporter des rapports CSV avec `Export-Csv`
- ✅ Vous savez afficher un tableau de bord coloré en console
