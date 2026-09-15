---
title: "Exercice 18 - Les Archives Secrètes d'Ohara"
---

# Exercice 18 - Les Archives Secrètes d'Ohara 📜

## Contexte

Ohara conservait tout : les registres du royaume, le journal des événements,
les sceaux d'authenticité. Trois archives distinctes, une seule méthode de lecture.

Windows fonctionne pareil — et vous connaissez déjà les commandes.

> _"Tout est écrit quelque part. Il suffit de savoir où regarder."_ — Nico Robin

**Durée : 30 min**

## Partie 1 : La carte des archives (5 min)

```powershell
Get-PSDrive
```

**Questions** :

- Combien de lecteurs de type `Registry` voyez-vous ?
- Que contient le lecteur `Env:` ?
- Testez : `Get-ChildItem Env:` puis `Get-ChildItem Cert:`. Les commandes changent-elles ?

## Partie 2 : Interroger le registre (5 min)

```powershell
$cle = "HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion"

Get-ItemProperty $cle | Select-Object ProductName, CurrentBuild, RegisteredOwner
Get-ItemPropertyValue $cle -Name ProductName
```

**Questions** :

- Quelle différence entre `Get-ItemProperty` et `Get-ItemPropertyValue` ?
- Comparez `ProductName` avec `(Get-CimInstance Win32_OperatingSystem).Caption`.
  Sont-ils d'accord ? Lequel croire ?

## Partie 3 : Écrire dans le registre (10 min)

> ⚠️ On travaille dans `HKCU:` — votre profil uniquement, aucun risque pour la machine.

```powershell
$cle = "HKCU:\Software\Ohara"
New-Item -Path $cle -Force
```

**Exercices** :

1. Créez trois valeurs : `Archiviste` (texte), `NbLivres` (DWord), `Actif` (texte `"oui"`)
2. Relisez-les toutes d'un coup
3. Passez `NbLivres` à `1000000`
4. Supprimez la valeur `Actif`
5. Supprimez toute la clé et vérifiez avec `Test-Path`

## Partie 4 : Le journal des événements (10 min)

```powershell
Get-WinEvent -ListLog * | Sort-Object RecordCount -Descending | Select-Object -First 5
```

**Exercices** :

1. Affichez les **5 dernières erreurs** du journal `System`
   _(indice : `-FilterHashtable @{LogName='System'; Level=2}`)_
2. Affichez les erreurs **et** avertissements des **2 derniers jours**
3. Cherchez l'identifiant `6008` (arrêt inattendu). Votre machine en a-t-elle ?
4. Pour un événement, affichez `TimeCreated`, `Id`, `LevelDisplayName` et `Message`

**Question de fond** : comparez ces deux approches et expliquez laquelle est meilleure.

```powershell
# A
Get-WinEvent -FilterHashtable @{LogName='System'; Level=2} -MaxEvents 20

# B
Get-WinEvent -LogName System | Where-Object Level -eq 2 | Select-Object -First 20
```

## Partie 5 : Les sceaux (5 min)

```powershell
Get-ChildItem Cert:\LocalMachine\Root | Select-Object -First 5 Subject, NotAfter
```

**Exercices** :

1. Comptez les autorités racines installées
2. Listez celles qui **expirent dans les 90 jours**, triées par date

## Mission finale : le rapport d'Ohara 🏴‍☠️

Écrivez un script qui produit une fiche d'audit de la machine, contenant :

- **depuis le registre** : `ProductName`, `CurrentBuild`, `RegisteredOwner`
- **depuis CIM** : le vrai nom du système (`Win32_OperatingSystem.Caption`)
- **depuis les journaux** : le nombre d'erreurs `System` des 7 derniers jours
- **depuis les certificats** : le nombre d'autorités racines expirant sous 90 jours

Assemblez le tout dans un `[PSCustomObject]` et exportez-le en CSV.

> Indice : `@(...).Count` pour compter de façon fiable (chapitre 21).

## Validation

✅ Vous savez que registre, certificats et variables sont des **PSDrives**
✅ Vous naviguez dedans avec `Get-ChildItem` et `Test-Path`
✅ Vous distinguez une **clé** (dossier) d'une **valeur** (propriété)
✅ Vous créez, modifiez et supprimez des valeurs dans `HKCU:`
✅ Vous filtrez les journaux avec `-FilterHashtable`, pas avec `Where-Object`
✅ Vous connaissez les niveaux (`2` erreur, `3` avertissement)
✅ Vous savez auditer les certificats qui vont expirer
