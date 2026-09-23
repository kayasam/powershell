---
title: "TP avancé : les groupes Active Directory"
publier: true
parcours-tssr: false
parcours-pro: true
---

# Exercice 30 - Les Unités de la Cipher Pol - Version avancée

> Chapitre associé : [[cours/30-groupes-ad/30-groupes-ad]]

## Objectifs

- Appliquer une stratégie de groupes tenable
- Auditer les appartenances
- Automatiser l'affectation

**Durée : 40 min**

> Sans domaine, rédigez les scripts et raisonnez sur les résultats attendus.
> Avec un domaine, limitez les changements à l'**OU de laboratoire autorisée**, en simulation par défaut.

## Contexte

Un annuaire vieux de dix ans contient des groupes vides, des groupes doublons et
des utilisateurs membres de trente groupes dont personne ne connaît l'usage.

## Travail demandé

### Partie 1 - La stratégie AGDLP

1. Que signifie ce sigle ?
2. Expliquez le principe en trois phrases.
3. Appliquez-le à ce cas : les comptables des trois sites doivent accéder en
   écriture au partage `Compta`. Détaillez les groupes créés et leur imbrication.
4. Quel est l'avantage concret par rapport à des droits posés directement sur les comptes ?

### Partie 2 - Audit de l'existant

Produisez un rapport identifiant :

- les groupes vides
- les groupes dont le nom ne suit pas une convention donnée
- les groupes contenant d'autres groupes, avec la profondeur d'imbrication
- les utilisateurs membres de plus de 15 groupes
- les groupes sans description

### Partie 3 - Appartenances effectives

1. Écrivez une fonction qui liste **toutes** les appartenances d'un utilisateur,
   directes et héritées, avec l'indication du chemin d'héritage.
2. Pourquoi une simple lecture de l'attribut d'appartenance ne suffit-elle pas ?
3. Comment détecter une imbrication circulaire ?

### Partie 4 - Affectation automatique

Écrivez un script qui synchronise l'appartenance à un groupe selon un attribut
utilisateur, par exemple le service.

Contraintes :

1. ajoute les utilisateurs manquants
2. retire ceux qui ne correspondent plus au critère
3. ne touche pas à ceux qui sont déjà corrects
4. mode simulation
5. rapport détaillé des trois catégories d'action

### Partie 5 - Le groupe primaire

1. Qu'est-ce que le groupe primaire d'un utilisateur ?
2. Apparaît-il dans les résultats de `Get-ADGroupMember` ? Vérifiez.
3. Quelle conséquence pour un audit d'appartenance ?
4. Comment l'obtenir malgré tout ?

## Livrable attendu

- L'explication d'AGDLP et son application au cas concret
- Le rapport d'audit
- La fonction d'appartenances effectives
- Le script de synchronisation avec son mode simulation
- Les quatre réponses sur le groupe primaire

## Coup de pouce

- AGDLP décrit une chaîne : comptes, puis groupe global, puis groupe local, puis permission.
- Le groupe primaire est stocké par un identifiant numérique, pas par appartenance classique.
- Pour comparer deux listes de membres, une cmdlet de comparaison indique le sens de la différence.
