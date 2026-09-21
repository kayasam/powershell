---
title: "Cours"
parcours-tssr: true
parcours-pro: true
---

<nav class="ps-chapter-path" aria-label="Parcours du chapitre">
  <a href="https://kayasam.github.io/powershell/cours/28-introduction-ad/cours"><b>01 · Cours</b><small>Comprendre les notions</small></a>
  <a href="https://kayasam.github.io/powershell/cours/28-introduction-ad/cours-interactif"><b>02 · Cours interactif</b><small>Schéma et défi rapide</small></a>
  <a href="https://kayasam.github.io/powershell/cours/28-introduction-ad/quiz"><b>03 · Quiz</b><small>Vérifier ses acquis</small></a>
  <a href="https://kayasam.github.io/powershell/cours/28-introduction-ad/tp/"><b>04 · Travaux pratiques</b><small>Appliquer en autonomie</small></a>
</nav>

# 28. Introduction à Active Directory

> [!TIP] Ressources du chapitre
>
> - [[28-introduction-ad/tp/index|Exercices pratiques]]
> - [[Memo-Commandes|Mémo des commandes]]

## Qu'est-ce qu'Active Directory ?

Active Directory (AD) est la base de données centrale d'une infrastructure Windows.
Elle stocke les **utilisateurs**, **groupes**, **ordinateurs** et **politiques** d'un réseau d'entreprise.

Tout passe par AD :

- L'authentification ("est-ce que cet utilisateur a le droit de se connecter ?")
- Les autorisations ("quels dossiers peut-il ouvrir ?")
- Les stratégies ("quel fond d'écran s'applique ?")

```
Forest : monde.gouvernement.org
└── Domain : cipher-pol.monde.gouvernement.org
    ├── OU=Utilisateurs
    │   ├── OU=Agents
    │   └── OU=Administrateurs
    ├── OU=Groupes
    └── OU=Ordinateurs
```

## Vocabulaire essentiel

| Terme                        | Signification                                                             |
| ---------------------------- | ------------------------------------------------------------------------- |
| **DC** (Domain Controller)   | Le serveur qui héberge l'AD                                               |
| **OU** (Organizational Unit) | Un dossier de rangement dans l'AD                                         |
| **DN** (Distinguished Name)  | L'adresse complète d'un objet : `CN=lucci,OU=Agents,DC=cipher-pol,DC=org` |
| **SAMAccountName**           | Le login court de l'utilisateur (`lucci`)                                 |
| **UPN**                      | L'adresse email-like : `lucci@cipher-pol.org`                             |
| **SID**                      | L'identifiant unique numérique de l'objet                                 |
| **GPO**                      | Politique de groupe (stratégies appliquées aux OUs)                       |

## Prérequis : installer le module

Le module `ActiveDirectory` s'installe via les **RSAT** (Remote Server Administration Tools).

```powershell
# Sur Windows 10/11 (fonctionnalité optionnelle)
Add-WindowsCapability -Online -Name "Rsat.ActiveDirectory.DS-LDS.Tools~~~~0.0.1.0"

# Vérifier l'installation
Get-Module -ListAvailable -Name ActiveDirectory

# Charger le module
Import-Module ActiveDirectory
```

> **En formation** : si vous n'avez pas de domaine disponible, les exercices indiquent
> une version "simulation" qui utilise des objets PowerShell normaux.

## Les grandes familles de cmdlets

```powershell
# Tout ce qui concerne les UTILISATEURS
Get-ADUser        # Lire
New-ADUser        # Créer
Set-ADUser        # Modifier
Remove-ADUser     # Supprimer
Enable-ADAccount  # Activer
Disable-ADAccount # Désactiver

# Tout ce qui concerne les GROUPES
Get-ADGroup          # Lire
New-ADGroup          # Créer
Add-ADGroupMember    # Ajouter un membre
Remove-ADGroupMember # Retirer un membre
Get-ADGroupMember    # Lister les membres

# Tout ce qui concerne les ORDINATEURS
Get-ADComputer    # Lire
New-ADComputer    # Créer

# Recherche et organisation
Get-ADOrganizationalUnit  # Lister les OUs
Search-ADAccount          # Comptes bloqués, expirés, inactifs...
```

## Tester la connexion au domaine

```powershell
# Voir le domaine courant
Get-ADDomain

# Voir les contrôleurs de domaine
Get-ADDomainController -Filter *

# Voir qui je suis
$env:USERDOMAIN    # Nom du domaine
$env:USERNAME      # Mon login
whoami             # DOMAINE\login
```

## À retenir

- ✅ AD = annuaire central : utilisateurs, groupes, ordinateurs, politiques
- ✅ Une OU est un conteneur de rangement (comme un dossier)
- ✅ Le module `ActiveDirectory` est nécessaire (inclus avec RSAT)
- ✅ Toutes les cmdlets AD suivent la convention `Verbe-ADObjet`
- ✅ Le `SAMAccountName` est le login court, le `DN` est l'adresse complète

> **Liens**
>
> - [Module ActiveDirectory](https://learn.microsoft.com/fr-fr/powershell/module/activedirectory/)
> - [Installer RSAT](https://learn.microsoft.com/fr-fr/troubleshoot/windows-server/system-management-components/remote-server-administration-tools)

---

## Fiche récapitulative

![28_Introduction_Active_Directory](https://kayasam.github.io/powershell/ressources/images/28_Introduction_Active_Directory.png)
