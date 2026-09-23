---
title: "Etape 4 — Imbriquer les groupes (modèle AGDLP)"
---

> Retour vers l'index : [[tp-final-active-directory/ad/guide/index\|Index AD Manuel]]
> Etape précédente : [[tp-final-active-directory/ad/guide/manuel-03-creer-les-groupes\|Manuel-03-Creer-les-Groupes]] | Etape suivante : [[tp-final-active-directory/ad/guide/manuel-05-permissions-ntfs\|Manuel-05-Permissions-NTFS]]

**Domaine** : `ad.fournil.lab` | **Serveur** : DC01

---

![Schema-AGDLP](https://kayasam.github.io/powershell/ressources/images/schema-agdlp.svg)

---

## Qu'est-ce que l'AGDLP ?

C'est le modèle Microsoft pour gérer les permissions :

```
A  = Account         → Le compte utilisateur (mlebrun)
G  = Global group    → Regroupe les utilisateurs par fonction (G_Laboratoire_fabrication_boulangerie)
DL = DomainLocal     → Lié à une ressource (DL_Laboratoire_fabrication_boulangerie_M)
P  = Permission      → Le droit NTFS sur le dossier (Modification)
```

On ne donne **jamais** de permissions directement à un utilisateur. On l'ajoute à un groupe G_, qui est membre d'un groupe DL_, et c'est le DL_ qui a les permissions sur le dossier.

## La commande expliquée

```powershell
Add-ADGroupMember -Identity "G_Laboratoire" -Members "G_Laboratoire_fabrication"
```

| Paramètre   | Rôle                                                 |
| ----------- | ---------------------------------------------------- |
| `-Identity` | Le groupe qui **reçoit** le membre (le parent)       |
| `-Members`  | Le groupe ou utilisateur qu'on **ajoute** (l'enfant) |

---

## 4.1 — Imbriquer les G_ enfants dans les G_ parents

```powershell
# G_Laboratoire est membre de G_fournil
Add-ADGroupMember -Identity "G_fournil" -Members "G_Laboratoire"
Add-ADGroupMember -Identity "G_fournil" -Members "G_Vente"

# G_Laboratoire_fabrication est membre de G_Laboratoire
Add-ADGroupMember -Identity "G_Laboratoire" -Members "G_Laboratoire_fabrication"

# G_Laboratoire_fabrication_boulangerie est membre de G_Laboratoire_fabrication
Add-ADGroupMember -Identity "G_Laboratoire_fabrication" -Members "G_Laboratoire_fabrication_boulangerie"

# Faire de même pour tous les sous-groupes...
Add-ADGroupMember -Identity "G_Vente" -Members "G_Vente_boutique"
Add-ADGroupMember -Identity "G_Vente_boutique" -Members "G_Vente_boutique_accueil-boutique"
# etc. pour chaque niveau
```

## 4.2 — Imbriquer les G_ dans les DL_

Règle simple :

- **Dernier niveau** (le plus profond) → dans `DL_..._M` (droits de **modification**)
- **Niveaux parents** → dans `DL_..._L` (droits de **lecture** seulement)

```powershell
# Dernier niveau = Modification
Add-ADGroupMember -Identity "DL_Laboratoire_fabrication_boulangerie_M" -Members "G_Laboratoire_fabrication_boulangerie"

# Niveaux parents = Lecture
Add-ADGroupMember -Identity "DL_Laboratoire_fabrication_L" -Members "G_Laboratoire_fabrication"
Add-ADGroupMember -Identity "DL_Laboratoire_L" -Members "G_Laboratoire"
```

> **Pourquoi ?** Un boulanger (mlebrun) doit pouvoir **modifier** les fichiers de boulangerie, mais seulement **lire** ceux du niveau fabrication ou Laboratoire.

## Vérification

```powershell
# Voir les membres directs d'un groupe
Get-ADGroupMember -Identity "G_Laboratoire_fabrication" | Select-Object Name

# Voir tous les groupes d'un utilisateur (après l'étape 6)
Get-ADPrincipalGroupMembership -Identity "mlebrun" | Select-Object Name
```
