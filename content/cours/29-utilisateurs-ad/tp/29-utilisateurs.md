---
title: "Exercice 29 - Le Recrutement de la Cipher Pol"
---

# Exercice 29 - Le Recrutement de la Cipher Pol 🕵️

## Contexte

**Robin** a intercepté une liste de nouvelles recrues.
Elle vous demande de les enregistrer dans Active Directory,
de les affecter aux bons départements, et de gérer les cas particuliers.

> _"Même les ombres ont besoin d'un dossier officiel."_ — Nico Robin

---

> **Prérequis** : Cet exercice crée de vrais objets AD.
> Utilisez un **domaine de test** ou suivez le **Mode Simulation**.

---

## Les données de recrutement

```powershell
$nouvellesRecrues = @(
    @{ Prenom="Jinbe";   Nom="Jinbe";   Login="jjinbe";   Departement="CP-0"; Title="Ancien Shichibukai"; Actif=$true  }
    @{ Prenom="Yamato";  Nom="Yamato";  Login="yyamato";  Departement="CP-0"; Title="Recrue";            Actif=$true  }
    @{ Prenom="Carrot";  Nom="Carrot";  Login="ccarrot";  Departement="CP-9"; Title="Observatrice";      Actif=$true  }
    @{ Prenom="Vivi";    Nom="Nefertari";Login="vnefertari";Departement="CP-0";Title="Princesse Alliée"; Actif=$false }
)
```

---

## Mission 1 : Créer les utilisateurs (20 min)

### Avec AD réel

Créez une fonction `New-AgentCipherPol` qui crée un utilisateur AD à partir d'un hashtable :

```powershell
function New-AgentCipherPol {
    param(
        [Parameter(Mandatory)]
        [hashtable]$Agent,

        [string]$Domaine = "cipher-pol.org",
        [string]$OUBase  = "OU=Agents,DC=cipher-pol,DC=org"
    )

    try {
        New-ADUser `
            -Name              "$($Agent.Prenom) $($Agent.Nom)" `
            -SamAccountName    $Agent.Login `
            -UserPrincipalName "$($Agent.Login)@$Domaine" `
            -GivenName         $Agent.Prenom `
            -Surname           $Agent.Nom `
            -Department        $Agent.Departement `
            -Title             $Agent.Title `
            -Path              $OUBase `
            -AccountPassword   (ConvertTo-SecureString "CP@2024!" -AsPlainText -Force) `
            -Enabled           $Agent.Actif `
            -ErrorAction       Stop

        Write-Host "✓ Créé : $($Agent.Prenom) $($Agent.Nom) [$($Agent.Departement)]" `
                   -ForegroundColor Green
    }
    catch {
        Write-Host "✗ Erreur pour $($Agent.Prenom) $($Agent.Nom) : $($_.Exception.Message)" `
                   -ForegroundColor Red
    }
}

# Créer toutes les recrues
foreach ($recrue in $nouvellesRecrues) {
    New-AgentCipherPol -Agent $recrue
}
```

### Avec simulation

```powershell
# On simule la création dans une liste
$agentsCreés = [System.Collections.Generic.List[PSObject]]::new()

foreach ($recrue in $nouvellesRecrues) {
    $nouvelAgent = [PSCustomObject]@{
        Name           = "$($recrue.Prenom) $($recrue.Nom)"
        SamAccountName = $recrue.Login
        Department     = $recrue.Departement
        Title          = $recrue.Title
        Enabled        = $recrue.Actif
        CreatedAt      = Get-Date
    }
    $agentsCreés.Add($nouvelAgent)
    Write-Host "Simulé : $($recrue.Prenom) $($recrue.Nom)" -ForegroundColor Cyan
}

Write-Host "`n$($agentsCreés.Count) agents simulés :" -ForegroundColor Yellow
$agentsCreés | Format-Table -AutoSize
```

---

## Mission 2 : Vérifier la création (10 min)

### Avec AD réel

```powershell
# Vérifier que les comptes existent
foreach ($recrue in $nouvellesRecrues) {
    $user = Get-ADUser -Filter "SamAccountName -eq '$($recrue.Login)'" -ErrorAction SilentlyContinue

    if ($user) {
        $status = if ($user.Enabled) { "Actif" } else { "Désactivé" }
        Write-Host "$($recrue.Login) → $status" -ForegroundColor $(if ($user.Enabled) {"Green"} else {"Yellow"})
    } else {
        Write-Host "$($recrue.Login) → INTROUVABLE" -ForegroundColor Red
    }
}
```

### Avec simulation

```powershell
foreach ($recrue in $nouvellesRecrues) {
    $agent = $agentsCreés | Where-Object SamAccountName -eq $recrue.Login
    if ($agent) {
        $status = if ($agent.Enabled) { "Actif" } else { "Désactivé" }
        Write-Host "$($recrue.Login) → $status" -ForegroundColor $(if ($agent.Enabled) {"Green"} else {"Yellow"})
    }
}
```

---

## Mission 3 : Modifier un utilisateur (10 min)

Vivi a finalement accepté le poste. Activez son compte et mettez à jour son titre.

### Avec AD réel

```powershell
# Activer le compte
Enable-ADAccount -Identity "vnefertari"

# Mettre à jour le titre
Set-ADUser -Identity "vnefertari" -Title "Ambassadrice Alliée"

# Forcer le changement de mot de passe
Set-ADUser -Identity "vnefertari" -ChangePasswordAtLogon $true

# Vérifier
Get-ADUser -Identity "vnefertari" -Properties Title, Enabled |
    Select-Object Name, Title, Enabled
```

### Avec simulation

```powershell
$vivi = $agentsCreés | Where-Object SamAccountName -eq "vnefertari"
$vivi.Enabled = $true
$vivi.Title   = "Ambassadrice Alliée"

Write-Host "Vivi mise à jour :" -ForegroundColor Green
$vivi | Format-List
```

---

## Mission 4 : Désactiver un départ (5 min)

Carrot repart chez les Minks. Désactivez son compte sans le supprimer.

### Avec AD réel

```powershell
Disable-ADAccount -Identity "ccarrot"
Write-Host "Compte de Carrot désactivé." -ForegroundColor Yellow

# Vérifier
(Get-ADUser -Identity "ccarrot").Enabled
```

### Avec simulation

```powershell
($agentsCreés | Where-Object SamAccountName -eq "ccarrot").Enabled = $false
Write-Host "Compte de Carrot désactivé (simulation)." -ForegroundColor Yellow
```

---

## Validation

- ✅ Vous savez créer des utilisateurs avec `New-ADUser`
- ✅ Vous savez convertir un mot de passe avec `ConvertTo-SecureString`
- ✅ Vous savez modifier des attributs avec `Set-ADUser`
- ✅ Vous savez activer/désactiver avec `Enable-ADAccount` / `Disable-ADAccount`
- ✅ Vous savez entourer les opérations dans un `try/catch`
