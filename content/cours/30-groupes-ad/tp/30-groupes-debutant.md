---
title: "TP débutant : les groupes Active Directory"
publier: true
parcours-tssr: true
parcours-pro: false
---

# Exercice 30 - Les Unités de la Cipher Pol - Version débutant

> Chapitre associé : [[cours/30-groupes-ad/30-groupes-ad]]

## Objectifs

- Créer un groupe avec la bonne portée et la bonne catégorie
- Gérer les membres
- Retrouver les appartenances d'un utilisateur

**Durée : 35 min**

> Sans domaine, rédigez les commandes sans les exécuter et décrivez le résultat attendu.
> Avec un domaine, utilisez uniquement des groupes et membres de **l'OU de laboratoire autorisée** ; prévisualisez toute modification avec `-WhatIf`.

## Contexte

Les agents sont recrutés. Il faut maintenant les répartir dans les unités et leur
donner les bons accès.

## Travail demandé

### Partie 1 - Portée et catégorie

Complétez :

| Choix          | Quand l'utiliser |
| -------------- | ---------------- |
| `Global`       |                  |
| `DomainLocal`  |                  |
| `Universal`    |                  |
| `Security`     |                  |
| `Distribution` |                  |

Pour un groupe d'utilisateurs d'un domaine unique à qui donner des droits sur un
partage, quelle combinaison choisissez-vous ?

### Partie 2 - Créer

Créez trois groupes de sécurité dans une OU dédiée :

- `CP-Agents`
- `CP-Admins`
- `CP-Lecture-Seule`

Chacun avec un nom, un login de groupe, une portée, une catégorie, une description
et une OU de destination.

### Partie 3 - Peupler

1. Ajoutez un utilisateur à `CP-Agents`.
2. Ajoutez trois utilisateurs d'un coup.
3. Ajoutez tous les utilisateurs d'un service donné, via le pipeline.
4. Retirez un utilisateur sans confirmation interactive.

### Partie 4 - Consulter

Écrivez la commande pour :

1. lister les membres d'un groupe
2. lister les membres en incluant ceux des sous-groupes
3. lister les groupes d'un utilisateur
4. compter les membres d'un groupe
5. vérifier si un utilisateur précis appartient à un groupe

### Partie 5 - Imbrication

1. Ajoutez le groupe `CP-Admins` comme membre de `CP-Agents`.
2. Un membre de `CP-Admins` apparaît-il dans les membres directs de `CP-Agents` ?
3. Et avec le paramètre récursif ?
4. Quel intérêt pratique à imbriquer des groupes ?

### Partie 6 - Nettoyer

1. Videz un groupe de tous ses membres.
2. Supprimez les trois groupes créés.
3. Vérifiez qu'ils n'existent plus.

### Indices et commandes utiles

- `Get-ADGroupMember <groupe> -Recursive` révèle les membres imbriqués.
- Tester d'abord les modifications du labo avec `-WhatIf` sur `New-ADGroup`, `Add-ADGroupMember` et les retraits.

## Livrable attendu

- Le tableau portée / catégorie et votre choix justifié
- Les commandes de création des trois groupes
- Les opérations d'ajout et de retrait
- Les cinq commandes de consultation
- Vos observations sur l'imbrication

## Coup de pouce

- Deux dimensions indépendantes : la portée et la catégorie.
- Un paramètre permet d'inclure les membres des sous-groupes.
- Une cmdlet renvoie tous les groupes d'un utilisateur, y compris par imbrication.
