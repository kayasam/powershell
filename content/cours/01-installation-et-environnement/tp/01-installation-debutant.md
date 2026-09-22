---
title: Exercice 01 - L'Équipement de la Recrue - Débutant
publier: true
parcours-tssr: false
parcours-pro: false
---

# Exercice 01 - L'Équipement de la Recrue 🎖️ — Débutant

> Chapitre associé : [[01-installation-et-environnement/01-installation-et-environnement]]

## Contexte

Avant d'embarquer, toute recrue passe à l'armurerie : on vérifie son équipement,
on s'assure qu'il est de la bonne génération, et qu'il est autorisé à servir.

Votre équipement, c'est PowerShell. Vérifions qu'il est opérationnel.

> _"Une arme qu'on n'a pas vérifiée est une arme qui trahit."_ — Vice-Amiral Garp

**Durée : 20 min**

## Objectif

Vérifier que PowerShell est correctement installé, identifier sa version, et
autoriser l'exécution de vos futurs scripts.

## Prérequis

- Accès administrateur sur la machine
- Connexion Internet

---

## Partie A : Identifier son équipement (5 min)

Ouvrez PowerShell et exécutez :

```powershell
$PSVersionTable
```

**A1.** Quelle version de PowerShell utilisez-vous ?

**A2.** Quelle est votre édition : `Core` ou `Desktop` ?

**A3.** Sur quel système d'exploitation êtes-vous ?

> 💡 **Indice** : `PSVersion` donne le numéro, `PSEdition` donne l'édition.

---

## Partie B : Les deux générations (5 min)

Windows embarque **deux** PowerShell différents. Ouvrez-les tous les deux depuis
le menu Démarrer :

- **Windows PowerShell** (icône bleue)
- **PowerShell 7** (icône noire) — s'il est absent, installez-le :

```powershell
winget install --id Microsoft.PowerShell --source winget
```

Dans **chacune** des deux consoles, relevez la version :

```powershell
$PSVersionTable.PSVersion
```

**B1.** Quelle version affiche la console bleue ? Et la noire ?

**B2.** Pourquoi les deux cohabitent-elles sur la même machine ?

> 💡 **Indice** : la console bleue est l'ancienne génération, figée par Microsoft.
> La noire est la version moderne et multiplateforme.

---

## Partie C : Le droit d'exécuter (5 min)

Par défaut, Windows **bloque** l'exécution des scripts `.ps1`.

```powershell
# Voir la politique actuelle
Get-ExecutionPolicy

# Voir le détail par portée
Get-ExecutionPolicy -List
```

**C1.** Quelle est la politique actuellement appliquée ?

**C2.** Dans le tableau, quelle **portée** impose cette valeur ?

Autorisez ensuite vos propres scripts :

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

**C3.** Vérifiez que la valeur a changé. Quelle ligne du tableau a bougé ?

> 💡 **Indice** : `RemoteSigned` autorise vos scripts locaux, mais exige une
> signature pour ceux venus d'Internet.

---

## Partie D : Premières commandes (5 min)

Exécutez ces trois commandes et observez :

```powershell
Get-Date
Get-Location
Get-Process | Select-Object -First 5
```

**D1.** Que renvoie `Get-Location` ?

**D2.** Que fait la partie `| Select-Object -First 5` ?

---

## Mission finale E : votre premier script 🏴‍☠️

**E1.** Créez un fichier `bonjour-marine.ps1` dans votre dossier Documents.

```powershell
New-Item -Path "$env:USERPROFILE\Documents\bonjour-marine.ps1" -ItemType File -Force
notepad "$env:USERPROFILE\Documents\bonjour-marine.ps1"
```

**E2.** Faites-lui afficher votre nom de recrue **et** la date du jour.

Contenu à écrire dedans :

```powershell
$nom = "Monkey D. Luffy"
Write-Host "Recrue $nom, engagee le $(Get-Date -Format 'dd/MM/yyyy')"
```

**E3.** Exécutez-le depuis la console.

```powershell
& "$env:USERPROFILE\Documents\bonjour-marine.ps1"
```

> 💡 **Indice** : si le script est refusé, relisez la partie C.

---

> [!success] Validation
>
> - Vous savez afficher votre version de PowerShell
> - Vous distinguez Windows PowerShell 5.1 de PowerShell 7
> - Vous savez lire la politique d'exécution et la modifier
> - Vous avez créé et exécuté un premier script `.ps1`
