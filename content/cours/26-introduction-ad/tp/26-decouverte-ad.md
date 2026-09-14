# Exercice 26 - Le Registre du Gouvernement Mondial 🌍

## Contexte

Le **Gouvernement Mondial** tient un registre de tous ses agents.
Chopper vient d'être recruté comme médecin officiel — il doit prendre ses marques
dans ce système et comprendre comment lire les données d'Active Directory.

> _"Je ne suis pas fier d'être un pirate... mais je veux quand même apprendre !"_ — Tony Tony Chopper

---

> **Prérequis** : Cet exercice nécessite l'accès à un domaine Active Directory
> et le module RSAT installé.
> Si vous n'avez pas d'environnement AD, utilisez le **Mode Simulation** fourni ci-dessous.

---

## Mode Simulation (sans domaine AD)

Si vous n'avez pas accès à un domaine, créez ces données fictives pour suivre l'exercice :

```powershell
# Données simulées - équivalent des objets AD
$agentsAD = @(
    [PSCustomObject]@{ Name="Rob Lucci";  SamAccountName="rlucci";  Department="CP-9"; Title="Agent";        Enabled=$true;  LastLogonDate=(Get-Date).AddDays(-2)  }
    [PSCustomObject]@{ Name="Kaku";       SamAccountName="kkaku";   Department="CP-9"; Title="Agent";        Enabled=$true;  LastLogonDate=(Get-Date).AddDays(-1)  }
    [PSCustomObject]@{ Name="Kalifa";     SamAccountName="khalifa"; Department="CP-9"; Title="Agent";        Enabled=$true;  LastLogonDate=(Get-Date).AddDays(-5)  }
    [PSCustomObject]@{ Name="Blueno";     SamAccountName="blueno";  Department="CP-9"; Title="Agent";        Enabled=$true;  LastLogonDate=(Get-Date).AddDays(-10) }
    [PSCustomObject]@{ Name="Fukurou";    SamAccountName="fukurou"; Department="CP-9"; Title="Messager";     Enabled=$false; LastLogonDate=(Get-Date).AddDays(-90) }
    [PSCustomObject]@{ Name="Spandam";    SamAccountName="spandam"; Department="CP-5"; Title="Directeur";    Enabled=$true;  LastLogonDate=(Get-Date).AddDays(-3)  }
    [PSCustomObject]@{ Name="Hattori";    SamAccountName="hattori"; Department="CP-5"; Title="Pigeon";       Enabled=$true;  LastLogonDate=(Get-Date).AddDays(-50) }
)
```

---

## Mission 1 : Explorer le domaine (10 min)

### Avec AD réel

```powershell
Import-Module ActiveDirectory

# 1. Voir les informations du domaine
Get-ADDomain

# 2. Lister les contrôleurs de domaine
Get-ADDomainController -Filter * | Select-Object Name, IPv4Address, Site

# 3. Lister toutes les OUs
Get-ADOrganizationalUnit -Filter * | Select-Object Name, DistinguishedName
```

### Avec simulation

```powershell
# Afficher tous les agents
$agentsAD | Format-Table -AutoSize

# Compter les agents
Write-Host "Total agents : $($agentsAD.Count)"
```

---

## Mission 2 : Lire les utilisateurs (15 min)

### Avec AD réel

```powershell
# 1. Tous les utilisateurs (propriétés de base)
Get-ADUser -Filter * | Select-Object Name, SamAccountName, Enabled

# 2. Un utilisateur précis
Get-ADUser -Identity "rlucci" -Properties Department, Title, LastLogonDate

# 3. Seulement les comptes actifs
Get-ADUser -Filter "Enabled -eq $true" | Select-Object Name, SamAccountName
```

### Avec simulation

```powershell
# 1. Tous les agents
$agentsAD | Select-Object Name, SamAccountName, Enabled

# 2. Un agent précis
$agentsAD | Where-Object SamAccountName -eq "rlucci"

# 3. Seulement les comptes actifs
$agentsAD | Where-Object Enabled -eq $true | Select-Object Name, SamAccountName
```

**Questions** :

- Combien d'agents sont actifs ?
- Quel est le titre de Spandam ?

---

## Mission 3 : Filtrer les données (15 min)

### Avec AD réel

```powershell
# Agents du département CP-9
Get-ADUser -Filter "Department -eq 'CP-9'" -Properties Department |
    Select-Object Name, SamAccountName, Department

# Agents actifs du CP-9
Get-ADUser -Filter "Department -eq 'CP-9' -and Enabled -eq $true" -Properties Department |
    Select-Object Name, SamAccountName

# Comptes désactivés
Get-ADUser -Filter "Enabled -eq $false" | Select-Object Name, SamAccountName
```

### Avec simulation

```powershell
# Agents du département CP-9
$agentsAD | Where-Object Department -eq "CP-9" |
    Select-Object Name, SamAccountName, Department

# Agents actifs du CP-9
$agentsAD | Where-Object { $_.Department -eq "CP-9" -and $_.Enabled -eq $true }

# Comptes désactivés
$agentsAD | Where-Object Enabled -eq $false | Select-Object Name, SamAccountName
```

---

## Mission 4 : Statistiques (10 min)

### Avec AD ou simulation

```powershell
# Remplacez Get-ADUser -Filter * -Properties Department
# par $agentsAD si vous utilisez la simulation

# Répartition par département
Get-ADUser -Filter * -Properties Department |
    Group-Object Department |
    Select-Object Name, Count |
    Sort-Object Count -Descending

# Version simulation :
$agentsAD | Group-Object Department | Select-Object Name, Count | Sort-Object Count -Descending

# Ratio actifs/désactivés
$actifs     = ($agentsAD | Where-Object Enabled -eq $true).Count
$desactives = ($agentsAD | Where-Object Enabled -eq $false).Count
Write-Host "Actifs : $actifs | Désactivés : $desactives"
```

---

## Validation

- ✅ Vous savez importer le module AD et vérifier la connexion au domaine
- ✅ Vous savez lire les utilisateurs avec `Get-ADUser -Filter`
- ✅ Vous savez demander des propriétés supplémentaires avec `-Properties`
- ✅ Vous savez filtrer et grouper les résultats
