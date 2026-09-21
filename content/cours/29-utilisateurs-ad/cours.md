---
title: "Cours"
parcours-tssr: true
parcours-pro: true
---

<nav class="ps-chapter-path" aria-label="Parcours du chapitre">
  <a href="https://kayasam.github.io/powershell/cours/29-utilisateurs-ad/cours"><b>01 · Cours</b><small>Comprendre les notions</small></a>
  <a href="https://kayasam.github.io/powershell/cours/29-utilisateurs-ad/cours-interactif"><b>02 · Cours interactif</b><small>Schéma et défi rapide</small></a>
  <a href="https://kayasam.github.io/powershell/cours/29-utilisateurs-ad/quiz"><b>03 · Quiz</b><small>Vérifier ses acquis</small></a>
  <a href="https://kayasam.github.io/powershell/cours/29-utilisateurs-ad/tp/"><b>04 · Travaux pratiques</b><small>Appliquer en autonomie</small></a>
</nav>

# 29. Utilisateurs Active Directory

> [!TIP] Ressources du chapitre
>
> - [[29-utilisateurs-ad/tp/index|Exercices pratiques]]
> - [[Memo-Commandes|Mémo des commandes]]

## Lire des utilisateurs

### Chercher un utilisateur précis

```powershell
# Par SAMAccountName (login)
Get-ADUser -Identity "lucci"

# Affichage par défaut : seulement les propriétés de base
# Pour tout voir :
Get-ADUser -Identity "lucci" -Properties *

# Propriétés utiles à demander explicitement
Get-ADUser -Identity "lucci" -Properties DisplayName, EmailAddress, Department, Title, LastLogonDate
```

### Chercher plusieurs utilisateurs

```powershell
# Tous les utilisateurs du domaine
Get-ADUser -Filter *

# Avec un filtre simple
Get-ADUser -Filter "Department -eq 'Cipher Pol'"

# Utilisateurs activés seulement
Get-ADUser -Filter "Enabled -eq $true"

# Utilisateurs dont le nom commence par "K"
Get-ADUser -Filter "SurName -like 'K*'"
```

### Limiter la recherche à une OU

```powershell
Get-ADUser -Filter * -SearchBase "OU=Agents,DC=cipher-pol,DC=org"
```

## Créer un utilisateur

```powershell
New-ADUser `
    -Name            "Rob Lucci" `
    -SamAccountName  "rlucci" `
    -UserPrincipalName "rlucci@cipher-pol.org" `
    -GivenName       "Rob" `
    -Surname         "Lucci" `
    -Department      "Cipher Pol 9" `
    -Title           "Agent" `
    -Path            "OU=Agents,DC=cipher-pol,DC=org" `
    -AccountPassword (ConvertTo-SecureString "P@ssword123!" -AsPlainText -Force) `
    -Enabled         $true
```

> **Astuce** : `-Path` définit dans quelle OU l'utilisateur est créé.
> Sans `-Path`, l'utilisateur va dans le conteneur par défaut (CN=Users).

### Paramètres essentiels

| Paramètre                | Description                           |
| ------------------------ | ------------------------------------- |
| `-Name`                  | Nom complet (affiché dans l'AD)       |
| `-SamAccountName`        | Login Windows (max 20 caractères)     |
| `-UserPrincipalName`     | Adresse UPN (format email)            |
| `-AccountPassword`       | Mot de passe (doit être SecureString) |
| `-Enabled`               | Activer le compte dès la création     |
| `-Path`                  | OU de destination                     |
| `-ChangePasswordAtLogon` | Forcer le changement au 1er login     |

## Modifier un utilisateur

```powershell
# Changer un attribut
Set-ADUser -Identity "rlucci" -Title "Agent Spécial"
Set-ADUser -Identity "rlucci" -Department "Cipher Pol 0"
Set-ADUser -Identity "rlucci" -Description "Spécialiste infiltration"

# Changer plusieurs attributs d'un coup
Set-ADUser -Identity "rlucci" `
    -Title      "Directeur" `
    -Department "CP-0" `
    -Office     "Enies Lobby"
```

## Activer / désactiver un compte

```powershell
# Désactiver (départ, suspension)
Disable-ADAccount -Identity "rlucci"

# Réactiver
Enable-ADAccount -Identity "rlucci"

# Vérifier l'état
(Get-ADUser -Identity "rlucci").Enabled
```

## Changer le mot de passe

```powershell
# Réinitialiser le mot de passe
Set-ADAccountPassword -Identity "rlucci" `
    -NewPassword (ConvertTo-SecureString "NouveauP@ss!" -AsPlainText -Force) `
    -Reset

# Forcer le changement au prochain login
Set-ADUser -Identity "rlucci" -ChangePasswordAtLogon $true
```

## Supprimer un utilisateur

```powershell
# Avec confirmation
Remove-ADUser -Identity "rlucci"

# Sans confirmation (scripts automatisés)
Remove-ADUser -Identity "rlucci" -Confirm:$false
```

## Créer plusieurs utilisateurs depuis un tableau

```powershell
$agents = @(
    @{ Prenom="Rob";    Nom="Lucci"; Login="rlucci"; Departement="CP-9" }
    @{ Prenom="Kaku";   Nom="Kaku";  Login="kkaku";  Departement="CP-9" }
    @{ Prenom="Kalifa"; Nom="Kalifa";Login="khalifa"; Departement="CP-9" }
)

foreach ($agent in $agents) {
    New-ADUser `
        -Name              "$($agent.Prenom) $($agent.Nom)" `
        -SamAccountName    $agent.Login `
        -UserPrincipalName "$($agent.Login)@cipher-pol.org" `
        -GivenName         $agent.Prenom `
        -Surname           $agent.Nom `
        -Department        $agent.Departement `
        -AccountPassword   (ConvertTo-SecureString "P@ssword123!" -AsPlainText -Force) `
        -Enabled           $true

    Write-Host "Créé : $($agent.Prenom) $($agent.Nom)" -ForegroundColor Green
}
```

## À retenir

- ✅ `Get-ADUser -Filter *` retourne tous les utilisateurs (attention au volume !)
- ✅ `-Properties *` pour accéder aux attributs supplémentaires
- ✅ `New-ADUser` requiert `-AccountPassword` en SecureString
- ✅ `Enable-ADAccount` / `Disable-ADAccount` pour gérer l'accès
- ✅ Toujours utiliser `-Confirm:$false` avec précaution dans les scripts

> **Lien**
>
> - [New-ADUser](https://learn.microsoft.com/fr-fr/powershell/module/activedirectory/new-aduser)

---

## Fiche récapitulative

![29_Utilisateurs_Active_Directory](https://kayasam.github.io/powershell/ressources/images/29_Utilisateurs_Active_Directory.png)
