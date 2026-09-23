---
title: "TP Débutant — GPO Emplacement réseau"
---

> Durée estimée : 1h
> Prérequis : TP AD et TP DFS terminés (homes configurés)
> Niveau : Débutant

---

## Contexte

Les utilisateurs du Fournil ont maintenant un dossier personnel accessible via `\\ad.fournil.lab\HOMES\<Entite>\<Login>` et un lecteur `H:`. Vous allez créer une GPO qui ajoute automatiquement un raccourci "Mon Dossier Personnel" dans l'Explorateur de chaque utilisateur.

---

## Exercice 1 — Comprendre le script de connexion

### Consigne

Lisez le script `Set-NetworkLocation.ps1` et répondez aux questions.

### Questions

1. Quelle commande récupère le chemin du home depuis l'AD ?
2. Que représente `0x13` dans `Namespace(0x13)` ?
3. Qu'est-ce qu'un fichier `Desktop.ini` et à quoi sert le CLSID dedans ?
4. Pourquoi le script vérifie `Test-Path "target.lnk"` avant de créer le raccourci ?
5. Pourquoi `Desktop.ini` doit-il avoir les attributs System + Hidden ?

> [!tip]- Besoin d'aide ? Cliquez ici
> Consultez : [[tp-final-active-directory/gpo/guide/gpo-01-script-connexion\|GPO-01-Script-Connexion]]

---

## Exercice 2 — Créer la GPO

### Consigne

1. Créez une GPO nommée `GPO_Emplacement_Home`
2. Liez-la à l'OU `OU=fournil,DC=ad,DC=fournil,DC=lab`
3. Vérifiez que le lien est actif

### Questions

- Quelle est la différence entre **créer** une GPO et la **lier** ?
- La GPO s'applique-t-elle aux utilisateurs de `OU=Utilisateurs,OU=fournil,...` ? Pourquoi ?
- Que fait `-LinkEnabled Yes` ?

### Vérification

```powershell
Get-GPO -Name "GPO_Emplacement_Home" | Select-Object DisplayName, Id
Get-GPInheritance -Target "OU=fournil,DC=ad,DC=fournil,DC=lab" | Select-Object -ExpandProperty GpoLinks
```

> [!tip]- Besoin d'aide ? Cliquez ici
> Consultez : [[tp-final-active-directory/gpo/guide/gpo-02-creer-lier-gpo\|GPO-02-Creer-Lier-GPO]]

---

## Exercice 3 — Déployer dans SYSVOL

### Consigne

1. Trouvez le GUID de la GPO que vous avez créée
2. Construisez le chemin SYSVOL correspondant
3. Copiez le script `Set-NetworkLocation.ps1` dans le bon dossier
4. Créez le fichier `psscripts.ini` pour enregistrer le script

### Questions

- Qu'est-ce que SYSVOL ? Pourquoi y mettre le script ?
- Que signifie le format `ToString("B")` pour un GUID ?
- Pourquoi `psscripts.ini` doit-il être en Unicode ?
- Que signifie `0CmdLine=` dans le fichier INI ?

> [!tip]- Besoin d'aide ? Cliquez ici
> Consultez : [[tp-final-active-directory/gpo/guide/gpo-03-deploiement-sysvol\|GPO-03-Deploiement-SYSVOL]] et [[tp-final-active-directory/gpo/guide/gpo-04-enregistrer-script\|GPO-04-Enregistrer-Script]]

---

## Exercice 4 — Tester

### Consigne

1. Sur un poste client, forcez la mise à jour des GPO
2. Déconnectez-vous et reconnectez-vous avec `mlebrun`
3. Vérifiez que "Mon Dossier Personnel" apparait dans l'Explorateur
4. Vérifiez en ligne de commande que `target.lnk` existe

### Questions

- Pourquoi `gpupdate /force` ne suffit-il pas pour voir le raccourci ?
- Où se trouve physiquement le raccourci sur le disque du poste client ?

### Si ça ne marche pas

```powershell
# La GPO s'applique-t-elle ?
gpresult /r /scope:user

# Le HomeDirectory est-il configuré ?
Get-ADUser -Identity "mlebrun" -Properties HomeDirectory | Select-Object HomeDirectory

# Le script est-il sur les 2 DC ?
Test-Path "\\DC01\SYSVOL\ad.fournil.lab\Policies\*\User\Scripts\Logon\Set-NetworkLocation.ps1"
```

> [!tip]- Besoin d'aide ? Cliquez ici
> Consultez : [[tp-final-active-directory/gpo/guide/gpo-05-verification-depannage\|GPO-05-Verification-Depannage]]

---

## Bonus — Automatisation
