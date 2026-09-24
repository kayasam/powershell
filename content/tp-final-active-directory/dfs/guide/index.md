---
title: "Procedure de deploiement DFS -- Fournil"
---

## Présentation générale

Ce document décrit en détail la procédure de déploiement du système de fichiers distribués (DFS) pour l'infrastructure Active Directory de l'entreprise **Fournil**, une boulangerie dont le domaine est `ad.fournil.lab`.

L'infrastructure repose sur deux serveurs :

| Serveur  | Rôle                             | Description                                                                                                                                                                             |
| -------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **DC01** | Contrôleur de domaine principal  | Héberge les espaces de noms DFS (DFSn) et la réplication (DFSr). Contient les dossiers partagés et les dossiers personnels (homes). Membre primaire de tous les groupes de réplication. |
| **DC02** | Contrôleur de domaine secondaire | Héberge la réplication DFS (DFSr) uniquement. Reçoit les réplicas des dossiers partagés et des homes.                                                                                   |

### Fichiers CSV requis

Le script s'appuie sur deux fichiers CSV :

- **`orga-fournil.csv`** : décrit l'organigramme de l'entreprise avec les colonnes `Entreprise`, `Entite`, `Poles`, `Service`.
- **`utilisateurs-fournil.csv`** : liste les utilisateurs avec leurs informations (dont le login et l'entité de rattachement).

### Structure organisationnelle

L'entreprise Fournil est divisée en deux entités, chacune regroupant plusieurs pôles :

| Entité          | Pôles                                                                                                                     |
| --------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **Laboratoire** | fabrication, approvisionnement, conditionnement, qualite-hygiene, maintenance, direction-laboratoire, communs-laboratoire |
| **Vente**       | boutique, commercial, livraisons, ressources, direction-vente, communs-vente                                              |

---

## Phases de deploiement

| Phase   | Titre                                           | Note                                                                                                 |
| ------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Phase 1 | Installation des rôles DFS                      | [[tp-final-active-directory/dfs/guide/dfs-01-installer-roles\|DFS-01-Installer-Roles]]               |
| Phase 2 | Création des dossiers et partages sur DC02      | [[tp-final-active-directory/dfs/guide/dfs-02-dossiers-partages-dc02\|DFS-02-Dossiers-Partages-DC02]] |
| Phase 3 | Création des partages par pôle sur DC01         | [[tp-final-active-directory/dfs/guide/dfs-03-partages-dc01\|DFS-03-Partages-DC01]]                   |
| Phase 4 | Création des espaces de noms DFS                | [[tp-final-active-directory/dfs/guide/dfs-04-espaces-noms-dfs\|DFS-04-Espaces-Noms-DFS]]             |
| Phase 5 | Configuration de la réplication DFS (DFSr)      | [[tp-final-active-directory/dfs/guide/dfs-05-replication-dfsr\|DFS-05-Replication-DFSr]]             |
| Phase 6 | Configuration des dossiers personnels (Homes)   | [[tp-final-active-directory/dfs/guide/dfs-06-homes\|DFS-06-Homes]]                                   |
| Phase 7 | Configuration du HomeDirectory des utilisateurs | [[tp-final-active-directory/dfs/guide/dfs-07-homedirectory\|DFS-07-HomeDirectory]]                   |
| --      | Vérification et dépannage                       | [[tp-final-active-directory/dfs/guide/dfs-08-verification-depannage\|DFS-08-Verification-Depannage]] |

---

## Recapitulatif des commandes principales

| Commande                                    | Description                                               | Phase                                                                               |
| ------------------------------------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `Install-WindowsFeature`                    | Installe les rôles DFS sur les serveurs                   | [[tp-final-active-directory/dfs/guide/dfs-01-installer-roles\|Phase 1]]             |
| `Import-Csv`                                | Lecture des fichiers CSV d'organigramme et d'utilisateurs | [[tp-final-active-directory/dfs/guide/dfs-02-dossiers-partages-dc02\|Phase 2]]      |
| `Invoke-Command`                            | Exécution distante de commandes sur DC02 via WinRM        | [[tp-final-active-directory/dfs/guide/dfs-02-dossiers-partages-dc02\|Phase 2]]      |
| `New-Item -ItemType Directory`              | Création de l'arborescence de dossiers                    | [[tp-final-active-directory/dfs/guide/dfs-02-dossiers-partages-dc02\|Phase 2]]      |
| `New-SmbShare`                              | Création des partages SMB (masqués et visibles)           | [[tp-final-active-directory/dfs/guide/dfs-03-partages-dc01\|Phase 3]]               |
| `New-DfsnRoot`                              | Création des racines d'espaces de noms DFS                | [[tp-final-active-directory/dfs/guide/dfs-04-espaces-noms-dfs\|Phase 4]]            |
| `New-DfsnFolder`                            | Création des dossiers virtuels DFS                        | [[tp-final-active-directory/dfs/guide/dfs-04-espaces-noms-dfs\|Phase 4]]            |
| `New-DfsnFolderTarget`                      | Ajout de cibles supplémentaires aux dossiers DFS          | [[tp-final-active-directory/dfs/guide/dfs-04-espaces-noms-dfs\|Phase 4]]            |
| `New-DfsReplicationGroup`                   | Création des groupes de réplication                       | [[tp-final-active-directory/dfs/guide/dfs-05-replication-dfsr\|Phase 5]]            |
| `New-DfsReplicatedFolder`                   | Ajout de dossiers répliqués aux groupes                   | [[tp-final-active-directory/dfs/guide/dfs-05-replication-dfsr\|Phase 5]]            |
| `Add-DfsrMember`                            | Ajout de serveurs membres aux groupes de réplication      | [[tp-final-active-directory/dfs/guide/dfs-05-replication-dfsr\|Phase 5]]            |
| `Add-DfsrConnection`                        | Création des connexions de réplication entre serveurs     | [[tp-final-active-directory/dfs/guide/dfs-05-replication-dfsr\|Phase 5]]            |
| `Set-DfsrMembership`                        | Configuration du membership et du membre primaire         | [[tp-final-active-directory/dfs/guide/dfs-05-replication-dfsr\|Phase 5]]            |
| `Set-DfsReplicatedFolder`                   | Liaison du dossier répliqué avec l'espace de noms DFS     | [[tp-final-active-directory/dfs/guide/dfs-05-replication-dfsr\|Phase 5]]            |
| `Get-Acl` / `Set-Acl`                       | Configuration des permissions NTFS sur les homes          | [[tp-final-active-directory/dfs/guide/dfs-06-homes\|Phase 6]]                       |
| `robocopy /MIR /COPYALL`                    | Copie miroir des homes vers DC02 avec permissions         | [[tp-final-active-directory/dfs/guide/dfs-06-homes\|Phase 6]]                       |
| `Set-ADUser -HomeDirectory -HomeDrive`      | Association du dossier personnel et du lecteur H:         | [[tp-final-active-directory/dfs/guide/dfs-07-homedirectory\|Phase 7]]               |
| `Get-DfsnRoot` / `Get-DfsnFolder`           | Vérification des espaces de noms DFS                      | [[tp-final-active-directory/dfs/guide/dfs-08-verification-depannage\|Verification]] |
| `Get-DfsReplicationGroup` / `Get-DfsrState` | Vérification de la réplication DFS                        | [[tp-final-active-directory/dfs/guide/dfs-08-verification-depannage\|Verification]] |
| `Write-DfsrHealthReport`                    | Rapport de diagnostic de la réplication                   | [[tp-final-active-directory/dfs/guide/dfs-08-verification-depannage\|Verification]] |
