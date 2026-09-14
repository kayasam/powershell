# Exercice 26 - Les Unités de la Cipher Pol 🔧

## Contexte

**Franky** a redessiné l'organigramme de la Cipher Pol.
Chaque unité doit avoir son groupe AD, ses membres, et ses accès aux ressources.
Votre mission : construire cette structure depuis PowerShell.

> _"SUPER ! Une infra bien organisée, c'est comme un bon bateau — tout à sa place !"_ — Franky

---

> **Prérequis** : Cet exercice crée de vrais groupes AD.
> Utilisez un **domaine de test** ou suivez le **Mode Simulation**.

---

## La structure à créer

```
Groupes à créer :
├── CP-Agents-Actifs      (tous les agents en poste)
├── CP-Unite-CP0          (agents du CP-0)
├── CP-Unite-CP9          (agents du CP-9)
└── CP-Admins-Systeme     (accès aux serveurs)
```

---

## Mission 1 : Créer les groupes (15 min)

### Avec AD réel

```powershell
$groupesACreer = @(
    @{ Nom="CP-Agents-Actifs";  Description="Tous les agents actifs de la Cipher Pol" }
    @{ Nom="CP-Unite-CP0";      Description="Agents de la Cipher Pol 0 - élite secrète" }
    @{ Nom="CP-Unite-CP9";      Description="Agents de la Cipher Pol 9 - Enies Lobby" }
    @{ Nom="CP-Admins-Systeme"; Description="Accès administrateur aux systèmes" }
)

foreach ($grp in $groupesACreer) {
    try {
        New-ADGroup `
            -Name           $grp.Nom `
            -SamAccountName $grp.Nom `
            -GroupScope     "Global" `
            -GroupCategory  "Security" `
            -Description    $grp.Description `
            -Path           "OU=Groupes,DC=cipher-pol,DC=org" `
            -ErrorAction    Stop

        Write-Host "Groupe créé : $($grp.Nom)" -ForegroundColor Green
    }
    catch {
        Write-Host "Erreur : $($grp.Nom) — $($_.Exception.Message)" -ForegroundColor Red
    }
}
```

### Avec simulation

```powershell
$groupesSimules = [System.Collections.Generic.List[PSObject]]::new()

foreach ($grp in $groupesACreer) {
    $groupesSimules.Add([PSCustomObject]@{
        Name        = $grp.Nom
        Description = $grp.Description
        GroupScope  = "Global"
        Membres     = [System.Collections.Generic.List[string]]::new()
    })
    Write-Host "Groupe simulé : $($grp.Nom)" -ForegroundColor Cyan
}
```

---

## Mission 2 : Ajouter des membres (15 min)

### Avec AD réel

```powershell
# Remplir CP-Unite-CP9 avec les agents du département CP-9
Get-ADUser -Filter "Department -eq 'CP-9'" |
    ForEach-Object {
        Add-ADGroupMember -Identity "CP-Unite-CP9" -Members $_ -ErrorAction SilentlyContinue
        Write-Host "  + $($_.Name) → CP-Unite-CP9" -ForegroundColor DarkGreen
    }

# Remplir CP-Unite-CP0
Get-ADUser -Filter "Department -eq 'CP-0'" |
    ForEach-Object {
        Add-ADGroupMember -Identity "CP-Unite-CP0" -Members $_ -ErrorAction SilentlyContinue
        Write-Host "  + $($_.Name) → CP-Unite-CP0" -ForegroundColor DarkGreen
    }

# CP-Agents-Actifs = tous les comptes activés
Get-ADUser -Filter "Enabled -eq $true" |
    ForEach-Object {
        Add-ADGroupMember -Identity "CP-Agents-Actifs" -Members $_ -ErrorAction SilentlyContinue
    }

# CP-Admins-Systeme : ajouter manuellement
Add-ADGroupMember -Identity "CP-Admins-Systeme" -Members "rlucci", "spandam"
```

### Avec simulation

```powershell
# On réutilise $agentsAD de l'Exercice 1
# (recréez le tableau si besoin)
$agentsAD = @(
    [PSCustomObject]@{ Name="Rob Lucci"; SamAccountName="rlucci"; Department="CP-9"; Enabled=$true  }
    [PSCustomObject]@{ Name="Kaku";      SamAccountName="kkaku";  Department="CP-9"; Enabled=$true  }
    [PSCustomObject]@{ Name="Spandam";   SamAccountName="spandam";Department="CP-5"; Enabled=$true  }
    [PSCustomObject]@{ Name="Fukurou";   SamAccountName="fukurou";Department="CP-9"; Enabled=$false }
)

# CP-Unite-CP9
$grpCP9 = $groupesSimules | Where-Object Name -eq "CP-Unite-CP9"
$agentsAD | Where-Object Department -eq "CP-9" | ForEach-Object {
    $grpCP9.Membres.Add($_.SamAccountName)
    Write-Host "  + $($_.Name) → CP-Unite-CP9" -ForegroundColor DarkGreen
}

# CP-Agents-Actifs
$grpActifs = $groupesSimules | Where-Object Name -eq "CP-Agents-Actifs"
$agentsAD | Where-Object Enabled -eq $true | ForEach-Object {
    $grpActifs.Membres.Add($_.SamAccountName)
}
```

---

## Mission 3 : Auditer les groupes (10 min)

### Avec AD réel

```powershell
# Lister tous les groupes CP avec leur nombre de membres
Get-ADGroup -Filter "Name -like 'CP-*'" |
    ForEach-Object {
        $membres = (Get-ADGroupMember -Identity $_.Name -ErrorAction SilentlyContinue).Count
        [PSCustomObject]@{
            Groupe   = $_.Name
            Membres  = $membres
            Portee   = $_.GroupScope
        }
    } |
    Sort-Object Membres -Descending |
    Format-Table -AutoSize
```

### Avec simulation

```powershell
$groupesSimules |
    Select-Object Name, Description,
        @{Name="Membres"; Expression={$_.Membres.Count}} |
    Sort-Object Membres -Descending |
    Format-Table -AutoSize
```

---

## Mission 4 : Retirer un membre (5 min)

Spandam est muté. Retirez-le de `CP-Admins-Systeme`.

### Avec AD réel

```powershell
Remove-ADGroupMember -Identity "CP-Admins-Systeme" -Members "spandam" -Confirm:$false
Write-Host "Spandam retiré de CP-Admins-Systeme" -ForegroundColor Yellow

# Vérifier
Get-ADGroupMember -Identity "CP-Admins-Systeme" | Select-Object Name
```

### Avec simulation

```powershell
$grpAdmins = $groupesSimules | Where-Object Name -eq "CP-Admins-Systeme"
$grpAdmins.Membres.Remove("spandam") | Out-Null
Write-Host "Spandam retiré (simulation)" -ForegroundColor Yellow
Write-Host "Membres restants : $($grpAdmins.Membres -join ', ')"
```

---

## Validation

- ✅ Vous savez créer des groupes avec `New-ADGroup` (Scope + Category)
- ✅ Vous savez ajouter des membres depuis un pipeline ou manuellement
- ✅ Vous savez lister les membres avec `Get-ADGroupMember`
- ✅ Vous savez retirer un membre avec `Remove-ADGroupMember`
- ✅ Vous savez faire un audit des groupes avec un rapport formaté
