---
title: "TP Débutant — Active Directory"
---

> Durée estimée : 2h
> Prérequis : un serveur DC01 promu contrôleur de domaine `ad.fournil.lab`
> Fichiers fournis : `orga-fournil.csv`, `utilisateurs-fournil.csv`
> Niveau : Débutant — commandes manuelles, pas de script

---

## Contexte

Vous êtes administrateur système dans une boulangerie artisanale **Le Fournil**. L'entreprise a deux entités : le **Laboratoire** (production) et la **Vente** (commerce + administration). Votre mission est de créer toute l'infrastructure Active Directory à la main.

> Consultez l'organigramme : [Organigramme-Fournil](https://kayasam.github.io/powershell/ressources/images/organigramme-fournil.svg)

---

## Exercice 1 — Créer les OUs

### Consigne

1. Chargez le module Active Directory
2. Créez une OU racine `fournil` sous le domaine
3. Sous `fournil`, créez 3 OUs : `Utilisateurs`, `Groupes`, `Ordinateurs`
4. Sous `Utilisateurs`, créez les OUs pour l'entité `Laboratoire` et ses pôles : `fabrication`, `approvisionnement`, `conditionnement`, `qualite-hygiene`, `maintenance`
5. Sous `fabrication`, créez les services : `boulangerie`, `patisserie`, `viennoiserie`

### Questions

- Quelle est la commande pour créer une OU ?
- Que signifie le paramètre `-Path` ?
- Pourquoi séparer Utilisateurs, Groupes et Ordinateurs dans des OUs différentes ?

### Vérification

```powershell
Get-ADOrganizationalUnit -SearchBase "OU=fournil,DC=ad,DC=fournil,DC=lab" -Filter * | Select-Object Name
```

> Combien d'OUs devez-vous obtenir au minimum ?

> [!tip]- Besoin d'aide ? Cliquez ici
> Consultez la procédure : [[tp-final-active-directory/ad/guide/manuel-02-creer-les-ous\|Manuel-02-Creer-les-OUs]]

---

## Exercice 2 — Créer les groupes de sécurité

### Consigne

Pour le service `boulangerie`, créez les 3 groupes de sécurité :

1. `G_Laboratoire_fabrication_boulangerie` — portée **Global**
2. `DL_Laboratoire_fabrication_boulangerie_L` — portée **DomainLocal** (lecture)
3. `DL_Laboratoire_fabrication_boulangerie_M` — portée **DomainLocal** (modification)

Les groupes doivent être créés dans `OU=boulangerie,OU=fabrication,OU=Laboratoire,OU=Groupes,OU=fournil,...`

### Questions

- Quelle est la différence entre un groupe **Global** et **DomainLocal** ?
- Pourquoi crée-t-on un groupe `_L` (lecture) ET un groupe `_M` (modification) ?
- Que signifie le paramètre `-GroupCategory Security` ?

### Vérification

```powershell
Get-ADGroup -Filter * -SearchBase "OU=Groupes,OU=fournil,DC=ad,DC=fournil,DC=lab" |
    Where-Object { $_.Name -like "*boulangerie*" } | Select-Object Name, GroupScope
```

> [!tip]- Besoin d'aide ? Cliquez ici
> Consultez la procédure : [[tp-final-active-directory/ad/guide/manuel-03-creer-les-groupes\|Manuel-03-Creer-les-Groupes]]

---

## Exercice 3 — Comprendre l'AGDLP

> Etudiez ce schema avant de commencer :

![Schema-AGDLP](https://kayasam.github.io/powershell/ressources/images/schema-agdlp.svg)

### Consigne

1. Imbriquez `G_Laboratoire_fabrication_boulangerie` dans `G_Laboratoire_fabrication`
2. Imbriquez `G_Laboratoire_fabrication` dans `G_Laboratoire`
3. Imbriquez `G_Laboratoire` dans `G_fournil`
4. Imbriquez `G_Laboratoire_fabrication_boulangerie` dans `DL_Laboratoire_fabrication_boulangerie_M` (modification)
5. Imbriquez `G_Laboratoire_fabrication` dans `DL_Laboratoire_fabrication_L` (lecture)

### Questions

- Que signifie AGDLP ? Détaillez chaque lettre.
- Pourquoi le dernier niveau va dans `_M` et les niveaux parents dans `_L` ?
- Un boulanger pourra-t-il modifier des fichiers dans le dossier `fabrication` ? Pourquoi ?

### Schéma à compléter

```
mlebrun (compte)
  └── G_Laboratoire_fabrication_boulangerie    → DL_..._M → ________ sur boulangerie
        └── G_Laboratoire_fabrication          → DL_..._L → ________ sur fabrication
              └── G_Laboratoire                → DL_..._L → ________ sur Laboratoire
                    └── G_fournil
```

> Remplacez les `________` par le bon droit (Modification ou Lecture).

> [!tip]- Besoin d'aide ? Cliquez ici
> Consultez la procédure : [[tp-final-active-directory/ad/guide/manuel-04-imbriquer-groupes-agdlp\|Manuel-04-Imbriquer-Groupes-AGDLP]]

---

## Exercice 4 — Permissions NTFS

> Les 5 etapes a suivre :

![Schema-Permissions-NTFS](https://kayasam.github.io/powershell/ressources/images/schema-permissions-ntfs.svg)

### Consigne

1. Créez le dossier `C:\fournil\Laboratoire\fabrication\boulangerie`
2. Sur ce dossier :
   - Désactivez l'héritage des permissions
   - Supprimez toutes les permissions existantes
   - Ajoutez : `Administrateurs` en contrôle total, `SYSTEM` en contrôle total
   - Ajoutez : `DL_Laboratoire_fabrication_boulangerie_L` en lecture
   - Ajoutez : `DL_Laboratoire_fabrication_boulangerie_M` en modification
3. Appliquez les nouvelles permissions

### Questions

- Qu'est-ce qu'une ACL ?
- Que fait `SetAccessRuleProtection($true, $false)` ? Que signifient les 2 paramètres ?
- Que signifie `ContainerInherit,ObjectInherit` dans `FileSystemAccessRule` ?

### Vérification

```powershell
(Get-Acl "C:\fournil\Laboratoire\fabrication\boulangerie").Access |
    Select-Object IdentityReference, FileSystemRights | Format-Table
```

> Vous devez voir exactement 4 lignes.

> [!tip]- Besoin d'aide ? Cliquez ici
> Consultez la procédure : [[tp-final-active-directory/ad/guide/manuel-05-permissions-ntfs\|Manuel-05-Permissions-NTFS]]

---

## Exercice 5 — Créer un utilisateur

### Consigne

Créez le compte de **Marc Lebrun** (Chef Boulanger) :

- Login : `mlebrun`
- Email : `mlebrun@ad.fournil.lab`
- Mot de passe : `a12345!` (changement obligatoire à la 1ère connexion)
- OU : `boulangerie` sous `Utilisateurs`
- Ajoutez-le au groupe `G_Laboratoire_fabrication_boulangerie`

### Questions

- Pourquoi le mot de passe doit-il être un `SecureString` ?
- Que fait le paramètre `-ChangePasswordAtLogon $true` ?
- Quelle est la différence entre `-SamAccountName` et `-UserPrincipalName` ?

### Vérification

```powershell
Get-ADUser -Identity "mlebrun" -Properties Description, MemberOf |
    Select-Object Name, SamAccountName, Description, @{N='Groupes';E={($_.MemberOf | ForEach-Object { ($_ -split ',')[0] -replace 'CN=' }) -join ', '}}
```

> [!tip]- Besoin d'aide ? Cliquez ici
> Consultez la procédure : [[tp-final-active-directory/ad/guide/manuel-06-creer-les-utilisateurs\|Manuel-06-Creer-les-Utilisateurs]]

---

## Exercice 6 — Vérification globale

### Consigne

Répondez à ces questions en utilisant des commandes PowerShell :

1. Combien d'OUs avez-vous créées au total sous `fournil` ?
2. Combien de groupes globaux (`G_`) existent ?
3. Combien de groupes domaine local (`DL_`) existent ?
4. De quels groupes `mlebrun` est-il membre (direct + hérités) ?
5. Quelles sont les permissions NTFS sur `C:\fournil\Laboratoire\fabrication\boulangerie` ?

> [!tip]- Commandes utiles
>
> ```powershell
> # 1. Compter les OUs
> (Get-ADOrganizationalUnit -SearchBase "OU=fournil,DC=ad,DC=fournil,DC=lab" -Filter *).Count
>
> # 2. Compter les groupes G_
> (Get-ADGroup -Filter 'Name -like "G_*"' -SearchBase "OU=Groupes,OU=fournil,DC=ad,DC=fournil,DC=lab").Count
>
> # 3. Compter les groupes DL_
> (Get-ADGroup -Filter 'Name -like "DL_*"' -SearchBase "OU=Groupes,OU=fournil,DC=ad,DC=fournil,DC=lab").Count
>
> # 4. Groupes de mlebrun
> Get-ADPrincipalGroupMembership -Identity "mlebrun" | Select-Object Name, GroupScope
>
> # 5. Permissions
> (Get-Acl "C:\fournil\Laboratoire\fabrication\boulangerie").Access | Select-Object IdentityReference, FileSystemRights
> ```

---

## Bonus — Automatisation

| Exercice                  | Fonction du script      |
| ------------------------- | ----------------------- |
| Exercice 1 (OUs)          | `New-OUIfNotExists`     |
| Exercice 2 (Groupes)      | `New-GroupIfNotExists`  |
| Exercice 3 (AGDLP)        | `Add-MemberToGroupSafe` |
| Exercice 4 (NTFS)         | `Set-NTFSPermissions`   |
| Exercice 5 (Utilisateurs) | `New-UserIfNotExists`   |
