---
title: "Exercice 29 - Le Recrutement de la Cipher Pol - Débutant"
publier: true
parcours-tssr: true
parcours-pro: false
---

# Exercice 29 - Le Recrutement de la Cipher Pol 🕵️ — Débutant

> Chapitre associé : [[29-utilisateurs-ad/29-utilisateurs-ad]]

## Contexte

La Cipher Pol recrute. Chaque agent doit avoir son compte, correctement renseigné
et rangé dans la bonne OU.

> _"Un agent sans dossier n'existe pas."_ — Spandam

**Durée : 45 min**

> ⚠️ Utilisez un **domaine de test**, ou suivez le **mode simulation**.

## Les données de recrutement

```powershell
$nouvellesRecrues = @(
    @{ Prenom="Jinbe";  Nom="Jinbe";      Login="jjinbe";     Departement="CP-0"; Title="Ancien Shichibukai"; Actif=$true  }
    @{ Prenom="Yamato"; Nom="Yamato";     Login="yyamato";    Departement="CP-0"; Title="Recrue";             Actif=$true  }
    @{ Prenom="Carrot"; Nom="Carrot";     Login="ccarrot";    Departement="CP-9"; Title="Observatrice";       Actif=$true  }
    @{ Prenom="Vivi";   Nom="Nefertari";  Login="vnefertari"; Departement="CP-0"; Title="Princesse Alliee";   Actif=$false }
)
```

---

## Partie A : Lire un utilisateur (5 min)

```powershell
Get-ADUser -Identity "rlucci"
Get-ADUser -Identity "rlucci" -Properties Department, Title, EmailAddress
Get-ADUser -Identity "rlucci" -Properties *
```

**A1.** Quelle différence entre les trois commandes ?

**A2.** Pourquoi `Department` n'apparaît-il pas dans la première ?

**A3.** Comment vérifier si un compte est **activé** ?

> 💡 **Indice** : `(Get-ADUser -Identity "rlucci").Enabled`

---

## Partie B : Créer un agent (15 min)

```powershell
New-ADUser `
    -Name              "Rob Lucci" `
    -SamAccountName    "rlucci" `
    -UserPrincipalName "rlucci@cipher-pol.org" `
    -GivenName         "Rob" `
    -Surname           "Lucci" `
    -Department        "CP-9" `
    -Title             "Agent" `
    -Path              "OU=Agents,DC=cipher-pol,DC=org" `
    -AccountPassword   (ConvertTo-SecureString "P@ssword123!" -AsPlainText -Force) `
    -Enabled           $true
```

**B1.** Quel **type** le mot de passe doit-il être ? Pourquoi pas une chaîne simple ?

**B2.** Que se passe-t-il si vous omettez `-Path` ?

**B3.** Quel paramètre force le changement de mot de passe à la première connexion ?

---

## Partie C : Recruter en série (15 min)

```powershell
foreach ($recrue in $nouvellesRecrues) {
    New-ADUser `
        -Name              "$($recrue.Prenom) $($recrue.Nom)" `
        -SamAccountName    $recrue.Login `
        -UserPrincipalName "$($recrue.Login)@cipher-pol.org" `
        -GivenName         $recrue.Prenom `
        -Surname           $recrue.Nom `
        -Department        $recrue.Departement `
        -Title             $recrue.Title `
        -AccountPassword   (ConvertTo-SecureString "P@ssword123!" -AsPlainText -Force) `
        -Enabled           $recrue.Actif

    Write-Host "Cree : $($recrue.Login)" -ForegroundColor Green
}
```

**C1.** Combien de comptes sont créés ? Combien sont **activés** ?

**C2.** Que se passe-t-il si un login existe déjà ? Comment l'anticiper ?

> 💡 **Indice** : testez l'existence avant de créer, avec un `try/catch` autour
> de `Get-ADUser`.

**En simulation**, remplacez `New-ADUser` par :

```powershell
Write-Host "Creerait : $($recrue.Login) - $($recrue.Departement) - Actif=$($recrue.Actif)"
```

---

## Partie D : Modifier un utilisateur (5 min)

```powershell
Set-ADUser -Identity "yyamato" -Title "Agent confirme"
Set-ADUser -Identity "yyamato" -Department "CP-0" -Office "Enies Lobby"
Set-ADUser -Identity "yyamato" -Description "Promue apres Wano"

Get-ADUser -Identity "yyamato" -Properties Title, Department, Office, Description
```

**D1.** Peut-on modifier plusieurs attributs en une seule commande ?

**D2.** Vérifiez que les modifications ont été prises en compte.

---

## Partie E : Gérer un départ (5 min)

```powershell
Disable-ADAccount -Identity "vnefertari"
(Get-ADUser -Identity "vnefertari").Enabled

Enable-ADAccount -Identity "vnefertari"

Set-ADAccountPassword -Identity "vnefertari" `
    -NewPassword (ConvertTo-SecureString "NouveauP@ss!" -AsPlainText -Force) -Reset
```

**E1.** Quelle est la différence entre **désactiver** et **supprimer** un compte ?

**E2.** Laquelle des deux faut-il faire en premier lors d'un départ ? Pourquoi ?

---

## Mission finale F : le rapport de recrutement 🕵️

**F1.** Après la création des quatre recrues, produisez un rapport indiquant :
le nombre de comptes créés, combien sont actifs, et la répartition par service.

**F2.** Exportez ce rapport en CSV.

---

## Validation

✅ Vous savez lire un utilisateur et demander ses propriétés manquantes
✅ Vous savez créer un compte complet avec `New-ADUser`
✅ Vous savez que le mot de passe doit être un `SecureString`
✅ Vous savez créer plusieurs comptes dans une boucle
✅ Vous distinguez désactiver et supprimer
