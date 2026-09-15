---
title: "30. Groupes Active Directory"
parcours-tssr: true
parcours-pro: true
---

# 30. Groupes Active Directory

> [!TIP] Ressources du chapitre
>
> - [[30-groupes-ad/tp/index|Exercices pratiques]]
> - [[Memo-Commandes|Mémo des commandes]]

## Les types de groupes

Avant de créer un groupe, deux choix à faire :

### GroupScope (portée)

| Portée        | Usage                                                        |
| ------------- | ------------------------------------------------------------ |
| `DomainLocal` | Accès aux ressources **dans** le domaine                     |
| `Global`      | Regrouper des utilisateurs du **même domaine**               |
| `Universal`   | Regrouper des utilisateurs de **plusieurs domaines** (forêt) |

> En pratique dans un domaine unique : utilisez `Global` pour les groupes d'utilisateurs.

### GroupCategory (catégorie)

| Catégorie      | Usage                                          |
| -------------- | ---------------------------------------------- |
| `Security`     | Gérer les **droits d'accès** (le plus courant) |
| `Distribution` | Listes de **diffusion email** uniquement       |

## Lire des groupes

```powershell
# Tous les groupes
Get-ADGroup -Filter *

# Un groupe précis
Get-ADGroup -Identity "CP-Agents"

# Groupes qui contiennent "Cipher" dans le nom
Get-ADGroup -Filter "Name -like '*Cipher*'"

# Membres d'un groupe
Get-ADGroupMember -Identity "CP-Agents"

# Membres récursifs (incluant les sous-groupes)
Get-ADGroupMember -Identity "CP-Agents" -Recursive
```

## Créer un groupe

```powershell
# Groupe de sécurité standard
New-ADGroup `
    -Name        "CP-Agents" `
    -SamAccountName "CP-Agents" `
    -GroupScope  "Global" `
    -GroupCategory "Security" `
    -Description "Agents de la Cipher Pol" `
    -Path        "OU=Groupes,DC=cipher-pol,DC=org"

# Groupe de distribution
New-ADGroup `
    -Name          "DL-Equipe-CP9" `
    -SamAccountName "DL-Equipe-CP9" `
    -GroupScope    "DomainLocal" `
    -GroupCategory "Distribution" `
    -Description   "Liste de diffusion Cipher Pol 9"
```

## Gérer les membres

```powershell
# Ajouter un utilisateur
Add-ADGroupMember -Identity "CP-Agents" -Members "rlucci"

# Ajouter plusieurs utilisateurs d'un coup
Add-ADGroupMember -Identity "CP-Agents" -Members "rlucci", "kkaku", "khalifa"

# Ajouter depuis un pipeline
Get-ADUser -Filter "Department -eq 'CP-9'" |
    ForEach-Object { Add-ADGroupMember -Identity "CP-Agents" -Members $_ }

# Retirer un membre
Remove-ADGroupMember -Identity "CP-Agents" -Members "rlucci" -Confirm:$false
```

## Lister les groupes d'un utilisateur

```powershell
# Groupes directs d'un utilisateur
(Get-ADUser -Identity "rlucci" -Properties MemberOf).MemberOf

# Affichage lisible
Get-ADUser -Identity "rlucci" -Properties MemberOf |
    Select-Object -ExpandProperty MemberOf |
    ForEach-Object { (Get-ADGroup $_).Name }

# Tous les groupes (récursifs)
Get-ADPrincipalGroupMembership -Identity "rlucci" |
    Select-Object Name, GroupScope, GroupCategory
```

## Supprimer un groupe

```powershell
Remove-ADGroup -Identity "CP-Agents" -Confirm:$false
```

## Exemple : organiser une équipe

```powershell
# 1. Créer les groupes
$groupes = @("CP-Agents", "CP-Admins", "CP-Lecture-Seule")

foreach ($groupe in $groupes) {
    New-ADGroup `
        -Name          $groupe `
        -SamAccountName $groupe `
        -GroupScope    "Global" `
        -GroupCategory "Security" `
        -Path          "OU=Groupes,DC=cipher-pol,DC=org"
    Write-Host "Groupe créé : $groupe" -ForegroundColor Green
}

# 2. Remplir les groupes selon le département
Get-ADUser -Filter "Department -eq 'CP-9'" |
    ForEach-Object { Add-ADGroupMember -Identity "CP-Agents" -Members $_ }

Get-ADUser -Filter "Title -eq 'Administrateur'" |
    ForEach-Object { Add-ADGroupMember -Identity "CP-Admins" -Members $_ }
```

## À retenir

- ✅ Deux dimensions : `GroupScope` (portée) et `GroupCategory` (sécurité ou distribution)
- ✅ `Get-ADGroupMember` liste les membres d'un groupe
- ✅ `Add-ADGroupMember -Members` accepte une liste de logins
- ✅ `Get-ADPrincipalGroupMembership` donne tous les groupes d'un utilisateur
- ✅ `-Recursive` pour inclure les membres des sous-groupes

> **Lien**
>
> - [New-ADGroup](https://learn.microsoft.com/fr-fr/powershell/module/activedirectory/new-adgroup)
