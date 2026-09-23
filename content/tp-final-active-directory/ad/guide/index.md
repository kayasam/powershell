---
title: "Procédure manuelle — Créer l'arborescence AD Fournil"
---

> Cette procédure permet de créer **à la main** toute l'infrastructure Active Directory.
> Chaque étape est une note séparée, avec les commandes copiables-collables et expliquées.

**Domaine** : `ad.fournil.lab` | **Serveur** : DC01

> Voir l'organigramme complet : [Organigramme-Fournil](https://kayasam.github.io/powershell/ressources/images/organigramme-fournil.svg)

---

## Étapes

| #   | Note                                                                                                        | Ce qu'on fait                                                           |
| --- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| 1   | [[tp-final-active-directory/ad/guide/manuel-01-charger-module-ad\|Manuel-01-Charger-Module-AD]]             | Charger le module PowerShell Active Directory                           |
| 2   | [[tp-final-active-directory/ad/guide/manuel-02-creer-les-ous\|Manuel-02-Creer-les-OUs]]                     | Créer les OUs (fournil, Utilisateurs/Groupes/Ordinateurs, arborescence) |
| 3   | [[tp-final-active-directory/ad/guide/manuel-03-creer-les-groupes\|Manuel-03-Creer-les-Groupes]]             | Créer les groupes de sécurité G_ et DL_ à chaque niveau                 |
| 4   | [[tp-final-active-directory/ad/guide/manuel-04-imbriquer-groupes-agdlp\|Manuel-04-Imbriquer-Groupes-AGDLP]] | Imbriquer les groupes selon le modèle AGDLP                             |
| 5   | [[tp-final-active-directory/ad/guide/manuel-05-permissions-ntfs\|Manuel-05-Permissions-NTFS]]               | Créer les dossiers C:\fournil\... et appliquer les permissions          |
| 6   | [[tp-final-active-directory/ad/guide/manuel-06-creer-les-utilisateurs\|Manuel-06-Creer-les-Utilisateurs]]   | Créer les 30 comptes et les ajouter aux groupes                         |

---

## Récapitulatif des commandes

| Étape | Commande clé                                             | Ce qu'elle fait                   |
| ----- | -------------------------------------------------------- | --------------------------------- |
| 1     | `Import-Module ActiveDirectory`                          | Charge les commandes AD           |
| 2     | `New-ADOrganizationalUnit -Name ... -Path ...`           | Crée une OU                       |
| 3     | `New-ADGroup -Name ... -GroupScope ... -Path ...`        | Crée un groupe de sécurité        |
| 4     | `Add-ADGroupMember -Identity "parent" -Members "enfant"` | Imbrique un groupe ou utilisateur |
| 5     | `Get-Acl` / `Set-Acl` + `FileSystemAccessRule`           | Gère les permissions NTFS         |
| 6     | `New-ADUser -Name ... -SamAccountName ... -Path ...`     | Crée un compte utilisateur        |
