---
title: "Exercice 28 - Le Registre du Gouvernement Mondial - Débutant"
publier: true
parcours-tssr: true
parcours-pro: false
---

# Exercice 28 - Le Registre du Gouvernement Mondial 🌍 — Débutant

> Chapitre associé : [[28-introduction-ad/28-introduction-ad]]

## Contexte

Le Gouvernement Mondial tient le registre de tous ses agents. Avant d'y toucher,
il faut savoir comment il est organisé.

> _"Tout est écrit. Encore faut-il savoir lire."_ — Cinq Doyens

**Durée : 50 min**

## Mode simulation

Sans domaine AD disponible, créez ces données fictives. Les commandes AD réelles
sont données à chaque partie, à titre de référence.

```powershell
$agentsAD = @(
    [PSCustomObject]@{ Name="Rob Lucci"; SamAccountName="rlucci";  Department="CP-9"; Title="Agent";     Enabled=$true;  LastLogonDate=(Get-Date).AddDays(-2)  }
    [PSCustomObject]@{ Name="Kaku";      SamAccountName="kkaku";   Department="CP-9"; Title="Agent";     Enabled=$true;  LastLogonDate=(Get-Date).AddDays(-1)  }
    [PSCustomObject]@{ Name="Kalifa";    SamAccountName="khalifa"; Department="CP-9"; Title="Agent";     Enabled=$true;  LastLogonDate=(Get-Date).AddDays(-5)  }
    [PSCustomObject]@{ Name="Blueno";    SamAccountName="blueno";  Department="CP-9"; Title="Agent";     Enabled=$true;  LastLogonDate=(Get-Date).AddDays(-10) }
    [PSCustomObject]@{ Name="Fukurou";   SamAccountName="fukurou"; Department="CP-9"; Title="Messager";  Enabled=$false; LastLogonDate=(Get-Date).AddDays(-90) }
    [PSCustomObject]@{ Name="Spandam";   SamAccountName="spandam"; Department="CP-5"; Title="Directeur"; Enabled=$true;  LastLogonDate=(Get-Date).AddDays(-3)  }
    [PSCustomObject]@{ Name="Hattori";   SamAccountName="hattori"; Department="CP-5"; Title="Pigeon";    Enabled=$true;  LastLogonDate=(Get-Date).AddDays(-50) }
)
```

---

## Partie A : Les outils (10 min)

```powershell
# Le module ActiveDirectory est-il disponible ?
Get-Module -ListAvailable -Name ActiveDirectory

# Combien de commandes expose-t-il ?
(Get-Command -Module ActiveDirectory).Count
```

**A1.** Le module `ActiveDirectory` est-il présent sur votre poste ?

**A2.** Si non, quelle commande l'installerait ?

**A3.** Combien de commandes concernent les **utilisateurs** ? Les **groupes** ?

> 💡 **Indice** : `Get-Command -Module ActiveDirectory -Noun ADUser`

---

## Partie B : Le vocabulaire (10 min)

**B1.** Complétez ce tableau :

| Terme          | Signification | Exemple |
| -------------- | ------------- | ------- |
| DC             |               |         |
| OU             |               |         |
| DN             |               |         |
| SAMAccountName |               |         |
| UPN            |               |         |

**B2.** Dans `CN=rlucci,OU=Agents,DC=cipher-pol,DC=org`, que désigne chaque partie ?

---

## Partie C : Explorer le domaine (10 min)

**Avec un domaine réel :**

```powershell
Get-ADDomain
Get-ADDomainController -Filter * | Select-Object Name, IPv4Address, Site
Get-ADOrganizationalUnit -Filter '*' | Select-Object Name, DistinguishedName
```

**En simulation :**

```powershell
$agentsAD | Format-Table -AutoSize
$agentsAD.Count
```

**C1.** Combien d'agents le registre contient-il ?

**C2.** Quelles sont les commandes qui donnent le nom du domaine et la liste des
contrôleurs de domaine ?

---

## Partie D : Lire les utilisateurs (10 min)

**Avec un domaine réel :**

```powershell
Get-ADUser -Filter '*' | Select-Object Name, SamAccountName, Enabled
Get-ADUser -Identity "rlucci" -Properties Department, Title
Get-ADUser -Filter 'Enabled -eq $true'
```

**En simulation :**

```powershell
$agentsAD | Select-Object Name, SamAccountName, Enabled
$agentsAD | Where-Object SamAccountName -eq "rlucci"
$agentsAD | Where-Object Enabled -eq $true
```

**D1.** Combien de comptes sont **actifs** ? Combien sont **désactivés** ?

**D2.** Quel est le service (`Department`) de Rob Lucci ?

**D3.** Affichez les agents du service `CP-9`.

---

## Partie E : Filtrer (10 min)

**E1.** Affichez les agents dont le titre est `Agent`.

**E2.** Affichez les agents qui ne se sont pas connectés depuis plus de 30 jours.

**E3.** Comptez les agents par service.

> 💡 **Indice** : `Group-Object Department` pour la dernière question.

---

## Mission finale F : la carte du registre 🌍

**F1.** Une entreprise a trois services et deux sites. Proposez une arborescence
d'OU et justifiez-la en trois lignes. Dessinez-la sous forme d'arborescence texte.

**F2.** Produisez un tableau de bord du registre : nombre total d'agents, actifs,
désactivés, et répartition par service.

---

## Validation

✅ Vous savez vérifier la présence du module `ActiveDirectory`
✅ Vous connaissez le vocabulaire : DC, OU, DN, SAMAccountName, UPN
✅ Vous savez lire les utilisateurs d'un domaine
✅ Vous savez filtrer sur les propriétés d'un compte
✅ Vous savez proposer une arborescence d'OU justifiée
