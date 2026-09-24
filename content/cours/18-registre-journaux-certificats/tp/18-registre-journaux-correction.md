---
title: Correction 18 - Les Archives Secrètes d'Ohara
publier: true
parcours-tssr: true
parcours-pro: true
---

# Correction guidée - Exercice 18 : Les Archives Secrètes d'Ohara

## Énoncés complets des trois parcours

Les parcours débutant et avancé sont des **alternatives**. La démonstration guidée sert à préparer le TP, pas à ajouter un troisième travail obligatoire.

### Mode débutant — énoncé intégral

**Mission :** lire trois sources Windows sans modifier les zones sensibles. Le travail d'écriture, s'il est fait, reste sous `HKCU:\Software\FormationPowerShell`.

#### Énoncé

1. Vérifiez que les lecteurs `HKCU:`, `Cert:` et `Env:` existent avec `Get-PSDrive`.
2. Relevez `ProductName` dans `HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion` sans rien modifier.
3. Comptez les événements d'erreur (`Level = 2`) du journal `System` sur les sept derniers jours.
4. Comptez les certificats du magasin `Cert:\CurrentUser\Root` qui expirent dans les 90 jours.
5. Rassemblez `ProductName`, `ErreursSystem7J` et `RacinesExpirant90J` dans un objet, puis exportez-le en CSV.

#### Indices progressifs

1. Une valeur de registre se lit avec `Get-ItemProperty -Path ... -Name ProductName`.
2. Pour les journaux, utilisez `Get-WinEvent -FilterHashtable @{ LogName='System'; Level=2; StartTime=(Get-Date).AddDays(-7) }` ; `-ErrorAction SilentlyContinue` permet de traiter un journal vide.
3. Un certificat possède une propriété `NotAfter` ; comparez-la à `(Get-Date).AddDays(90)`.
4. Pour compter correctement même zéro ou une seule valeur : `@($résultat).Count`.
5. Pour éviter les effets de bord, ne créez aucune clé ni certificat pour cette variante.

**Livrable :** objet d'audit, CSV et relevé des valeurs observées.

---

### Mode avancé — énoncé intégral

#### Énoncé

Écrivez un script d'audit qui croise registre (`ProductName`, `CurrentBuild`, `RegisteredOwner`), CIM (`Win32_OperatingSystem.Caption`), journal `System` (erreurs des sept derniers jours) et certificats racines (expiration sous 90 jours). Sortez un seul `[PSCustomObject]` et exportez un CSV.

1. Pour chaque source indisponible, conservez un champ `$null` et un avertissement plutôt que d'arrêter tout l'audit.
2. Utilisez le filtrage des journaux **à la source** ; expliquez le gain par rapport à un `Where-Object` après lecture complète.
3. Ajoutez un horodatage et un champ `SourcesManquantes` au rapport.
4. Vérifiez l'absence de modification dans `HKLM:` et `Cert:` ; votre script est strictement en lecture.

**Livrable :** script, exemple de rapport, test d'une source absente et justification du filtrage.

---

### Démonstration guidée — énoncé intégral

#### Contexte

Ohara conservait tout : les registres du royaume, le journal des événements,
les sceaux d'authenticité. Trois archives distinctes, une seule méthode de lecture.

Windows fonctionne pareil — et vous connaissez déjà les commandes.

> _"Tout est écrit quelque part. Il suffit de savoir où regarder."_ — Nico Robin

**Durée : 30 min**

#### Partie 1 : La carte des archives (5 min)

```powershell
Get-PSDrive
```

**Questions** :

- Combien de lecteurs de type `Registry` voyez-vous ?
- Que contient le lecteur `Env:` ?
- Testez : `Get-ChildItem Env:` puis `Get-ChildItem Cert:`. Les commandes changent-elles ?

#### Partie 2 : Interroger le registre (5 min)

```powershell
$cle = "HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion"

Get-ItemProperty $cle | Select-Object ProductName, CurrentBuild, RegisteredOwner
Get-ItemPropertyValue $cle -Name ProductName
```

**Questions** :

- Quelle différence entre `Get-ItemProperty` et `Get-ItemPropertyValue` ?
- Comparez `ProductName` avec `(Get-CimInstance Win32_OperatingSystem).Caption`.
  Sont-ils d'accord ? Lequel croire ?

#### Partie 3 : Écrire dans le registre (10 min)

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

#### Partie 4 : Le journal des événements (10 min)

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

#### Partie 5 : Les sceaux (5 min)

```powershell
Get-ChildItem Cert:\LocalMachine\Root | Select-Object -First 5 Subject, NotAfter
```

**Exercices** :

1. Comptez les autorités racines installées
2. Listez celles qui **expirent dans les 90 jours**, triées par date

#### Mission finale : le rapport d'Ohara 🏴‍☠️

Écrivez un script qui produit une fiche d'audit de la machine, contenant :

- **depuis le registre** : `ProductName`, `CurrentBuild`, `RegisteredOwner`
- **depuis CIM** : le vrai nom du système (`Win32_OperatingSystem.Caption`)
- **depuis les journaux** : le nombre d'erreurs `System` des 7 derniers jours
- **depuis les certificats** : le nombre d'autorités racines expirant sous 90 jours

Assemblez le tout dans un `[PSCustomObject]` et exportez-le en CSV.

> Indice : `@(...).Count` pour compter de façon fiable (chapitre 21).

> [!success] Validation
>
> - Vous savez que registre, certificats et variables sont des **PSDrives**
> - Vous naviguez dedans avec `Get-ChildItem` et `Test-Path`
> - Vous distinguez une **clé** (dossier) d'une **valeur** (propriété)
> - Vous créez, modifiez et supprimez des valeurs dans `HKCU:`
> - Vous filtrez les journaux avec `-FilterHashtable`, pas avec `Where-Object`
> - Vous connaissez les niveaux (`2` erreur, `3` avertissement)
> - Vous savez auditer les certificats qui vont expirer

---

## Corrigés

### Correction du mode débutant

`Get-PSDrive HKCU, Cert, Env` montre trois lecteurs PowerShell. `HKCU:` et `Cert:` ne sont pas des dossiers ordinaires. Exemple de rapport, sans écriture dans les magasins :

```powershell
$maintenant = Get-Date
$os = Get-ItemProperty -Path 'HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion' -Name ProductName
$evenements = @(Get-WinEvent -FilterHashtable @{
    LogName='System'; Level=2; StartTime=$maintenant.AddDays(-7)
} -ErrorAction SilentlyContinue)
$racines = @(Get-ChildItem 'Cert:\CurrentUser\Root' |
    Where-Object { $_.NotAfter -ge $maintenant -and $_.NotAfter -lt $maintenant.AddDays(90) })
$rapport = [PSCustomObject]@{
    ProductName = $os.ProductName
    ErreursSystem7J = $evenements.Count
    RacinesExpirant90J = $racines.Count
}
$rapport | Export-Csv -Path (Join-Path $env:TEMP 'audit-ohara.csv') -NoTypeInformation
```

Les nombres varient selon le poste. Si `System` est inaccessible, noter la limite au lieu de présenter `0` comme preuve d'absence d'erreurs.

### Correction du mode avancé

Le rapport reste un seul objet. Chaque source a son propre bloc de lecture : une source absente vaut null et figure dans SourcesManquantes ; un journal disponible sans erreur sur la période vaut **zéro**, pas « source manquante ».

```powershell
function Get-AuditPoste {
    param(
        [string]$CheminRegistre = 'HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion',
        [string]$NomJournal = 'System',
        [string]$MagasinCert = 'Cert:\LocalMachine\Root'
    )

    $manquantes = [System.Collections.Generic.List[string]]::new()
    $rapport = [ordered]@{
        Horodatage       = Get-Date
        ProductName      = $null
        CurrentBuild     = $null
        RegisteredOwner  = $null
        CaptionCim       = $null
        ErreursSystem7J  = $null
        RacinesSous90J   = $null
        SourcesManquantes = ''
    }

    try {
        $registre = Get-ItemProperty -LiteralPath $CheminRegistre -ErrorAction Stop
        $rapport.ProductName = $registre.ProductName
        $rapport.CurrentBuild = $registre.CurrentBuild
        $rapport.RegisteredOwner = $registre.RegisteredOwner
    }
    catch {
        $manquantes.Add('Registre')
        Write-Warning "Registre indisponible : $($_.Exception.Message)"
    }

    try {
        $os = Get-CimInstance -ClassName Win32_OperatingSystem -ErrorAction Stop
        $rapport.CaptionCim = $os.Caption
    }
    catch {
        $manquantes.Add('CIM')
        Write-Warning "CIM indisponible : $($_.Exception.Message)"
    }

    try {
        Get-WinEvent -ListLog $NomJournal -ErrorAction Stop | Out-Null
        try {
            $evenements = @(Get-WinEvent -FilterHashtable @{
                LogName = $NomJournal
                Level = 2
                StartTime = (Get-Date).AddDays(-7)
            } -ErrorAction Stop)
            $rapport.ErreursSystem7J = $evenements.Count
        }
        catch {
            if ($_.FullyQualifiedErrorId -like 'NoMatchingEventsFound*') {
                $rapport.ErreursSystem7J = 0
            }
            else { throw }
        }
    }
    catch {
        $manquantes.Add('Journal')
        Write-Warning "Journal indisponible : $($_.Exception.Message)"
    }

    try {
        $certificats = @(Get-ChildItem -LiteralPath $MagasinCert -ErrorAction Stop |
            Where-Object { $_.NotAfter -le (Get-Date).AddDays(90) })
        $rapport.RacinesSous90J = $certificats.Count
    }
    catch {
        $manquantes.Add('Certificats')
        Write-Warning "Magasin de certificats indisponible : $($_.Exception.Message)"
    }

    $rapport.SourcesManquantes = $manquantes -join ';'
    [PSCustomObject]$rapport
}

$rapport = Get-AuditPoste
$rapport | Format-List
$rapport | Export-Csv -LiteralPath '.\rapport-audit.csv' -NoTypeInformation -Encoding UTF8
```

Test d'une source absente dans le laboratoire : Get-AuditPoste -CheminRegistre 'HKLM:\SOFTWARE\TP18\Absent'. Le rapport doit conserver les trois champs du registre à null et contenir Registre dans SourcesManquantes ; les autres sources continuent. Le CSV est l'unique écriture de cet audit : aucune commande ne modifie HKLM: ou Cert:.

Get-WinEvent -FilterHashtable interroge le journal avec ses critères de date et de niveau **avant** de renvoyer les événements. Un filtrage par Where-Object après un chargement complet transfère davantage d'événements et consomme inutilement du temps et de la mémoire.

## Déroulé rapide (~30 min)

Chapitre rassurant : les stagiaires découvrent qu'ils savent déjà faire.
Le fil rouge à marteler : **un PSDrive, ce sont les mêmes cmdlets**.

---

### Partie 1 : La carte des archives (5 min)

**Réponses :**

- **Deux** lecteurs de type `Registry` : `HKLM` et `HKCU`
- `Env:` contient les variables d'environnement (`PATH`, `TEMP`, `USERNAME`…)
- Non, les commandes ne changent pas : `Get-ChildItem` fonctionne partout

**Ce qu'il faut leur dire :**

- C'est le concept central du chapitre. Faire taper les trois à la suite :
  `Get-ChildItem C:\`, `Get-ChildItem HKCU:\Software`, `Get-ChildItem Env:`
- Seuls `HKLM` et `HKCU` sont montés par défaut. Les autres ruches demandent un `New-PSDrive`.
- `Get-ChildItem Env:` est un bon rappel : `$env:USERNAME` n'est qu'un raccourci vers ce lecteur

---

### Partie 2 : Interroger le registre (5 min)

**Réponses :**

- `Get-ItemProperty` renvoie **toutes** les valeurs de la clé (un objet complet).
  `Get-ItemPropertyValue` renvoie **une seule valeur**, brute, directement utilisable.
- Ils ne sont **pas** d'accord :

```
Registre  ProductName : Windows 10 Pro
CIM       Caption     : Microsoft Windows 11 Professionnel
```

C'est **CIM** qu'il faut croire. Microsoft n'a jamais mis `ProductName` à jour lors
du passage à Windows 11.

**Ce qu'il faut leur dire :**

- Moment fort du chapitre : montrer les deux commandes côte à côte sur un vrai
  Windows 11, l'effet est garanti
- Pour détecter Windows 11 depuis le registre : `CurrentBuild -ge 22000`
- Règle générale : **le registre est la source de vérité seulement quand rien
  d'autre ne porte l'information**. Dès qu'une cmdlet ou une classe CIM existe,
  elle est plus fiable et plus lisible.
- `Get-ItemProperty` renvoie aussi des propriétés parasites (`PSPath`, `PSProvider`…)
  → d'où l'intérêt de `Select-Object` ou de `Get-ItemPropertyValue`

---

### Partie 3 : Écrire dans le registre (10 min)

```powershell
$cle = "HKCU:\Software\Ohara"
New-Item -Path $cle -Force | Out-Null

New-ItemProperty -Path $cle -Name Archiviste -Value "Nico Robin" -PropertyType String -Force
New-ItemProperty -Path $cle -Name NbLivres   -Value 5000        -PropertyType DWord  -Force
New-ItemProperty -Path $cle -Name Actif      -Value "oui"       -PropertyType String -Force

Get-ItemProperty $cle | Select-Object Archiviste, NbLivres, Actif

Set-ItemProperty    -Path $cle -Name NbLivres -Value 1000000
Remove-ItemProperty -Path $cle -Name Actif
Remove-Item         -Path $cle -Recurse -Force

Test-Path $cle
```

Sortie intermédiaire attendue :

```
Archiviste : Nico Robin
NbLivres   : 5000
Actif      : oui
```

**Ce qu'il faut leur dire :**

- `New-Item` crée la **clé** (le dossier), `New-ItemProperty` crée la **valeur**.
  C'est la confusion n°1 du chapitre.
- `-Force` sur `New-ItemProperty` écrase si la valeur existe déjà : pratique pour
  un script idempotent
- `DWord` est un entier 32 bits : au-delà de 4 294 967 295, utiliser `QWord`
- Insister : on reste dans `HKCU:`. Le jour où ils toucheront `HKLM:` en production,
  ce sera avec `-WhatIf` et un `reg export` préalable.

---

### Partie 4 : Le journal des événements (10 min)

```powershell
# 1
Get-WinEvent -FilterHashtable @{LogName='System'; Level=2} -MaxEvents 5

# 2
Get-WinEvent -FilterHashtable @{
    LogName   = 'System'
    Level     = 2, 3
    StartTime = (Get-Date).AddDays(-2)
}

# 3
Get-WinEvent -FilterHashtable @{LogName='System'; Id=6008} -ErrorAction SilentlyContinue

# 4
Get-WinEvent -FilterHashtable @{LogName='System'; Level=2} -MaxEvents 1 |
    Select-Object TimeCreated, Id, LevelDisplayName, Message | Format-List
```

**Réponse à la question de fond :** **A** est meilleure.
`-FilterHashtable` demande à **Windows** de filtrer avant d'envoyer les données.
**B** rapatrie l'intégralité du journal dans PowerShell, puis jette 99 % de ce
qu'elle vient de lire.

Mesure faite en préparation, sur un journal de ~24 000 entrées :
**72 ms** (A) contre **106 ms** (B) — et B était déjà bridée à 2 000 événements.
Sans bride, l'écart se compte en dizaines de secondes.

**Ce qu'il faut leur dire :**

- Exactement la même leçon que le `-Filter` de CIM (chapitre 12) : **filtrer à la
  source**. Ce réflexe sépare un script qui passe à l'échelle d'un autre.
- Si `-FilterHashtable` ne renvoie rien, PowerShell lève une erreur « Aucun événement
  trouvé » → `-ErrorAction SilentlyContinue` dans les scripts
- L'événement **6008** = arrêt inattendu (coupure, plantage). Sur les postes de
  formation il y en a souvent 1 ou 2 : bon moment pour raconter un vrai diagnostic.
- Le journal `Security` exige des droits administrateur — prévoir la question

---

### Partie 5 : Les sceaux (5 min)

```powershell
# 1
@(Get-ChildItem Cert:\LocalMachine\Root).Count

# 2
$limite = (Get-Date).AddDays(90)
Get-ChildItem Cert:\LocalMachine\Root |
    Where-Object { $_.NotAfter -lt $limite } |
    Select-Object Subject, NotAfter |
    Sort-Object NotAfter
```

Environ **48** autorités racines sur un Windows 11 standard.

> [!WARNING] Piège à exploiter en direct
> Ce filtre remonte aussi les certificats **déjà expirés** :
>
> ```
> CN=Microsoft Root Certificate Authority   10/05/2021
> CN=Thawte Timestamping CA                 01/01/2021
> ```
>
> `NotAfter -lt $limite` signifie « expire avant dans 90 jours » — ce qui inclut
> « a expiré il y a cinq ans ». Pour ne garder que ce qui va **bientôt** expirer :
>
> ```powershell
> Where-Object { $_.NotAfter -gt (Get-Date) -and $_.NotAfter -lt $limite }
> ```
>
> Excellente occasion de rappeler qu'un filtre juste syntaxiquement peut être
> faux métier. Laissez-les tomber dedans avant de le montrer.

**Ce qu'il faut leur dire :**

- Des racines expirées dans le magasin, c'est normal : Windows les conserve pour
  valider d'anciennes signatures
- Le vrai cas d'usage en entreprise, c'est `Cert:\LocalMachine\My` : un certificat
  serveur expiré = service HTTPS à terre

---

### Mission finale : le rapport d'Ohara

**Réponse attendue :**

```powershell
$cle = "HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion"
$reg = Get-ItemProperty $cle

$erreurs7j = @(Get-WinEvent -FilterHashtable @{
    LogName='System'; Level=2; StartTime=(Get-Date).AddDays(-7)
} -ErrorAction SilentlyContinue).Count

$certsExpirant = @(Get-ChildItem Cert:\LocalMachine\Root |
    Where-Object { $_.NotAfter -gt (Get-Date) -and $_.NotAfter -lt (Get-Date).AddDays(90) }).Count

[PSCustomObject]@{
    Registre_ProductName = $reg.ProductName
    Registre_Build       = $reg.CurrentBuild
    Proprietaire         = $reg.RegisteredOwner
    CIM_Caption          = (Get-CimInstance Win32_OperatingSystem).Caption
    Erreurs_7j           = $erreurs7j
    Certs_Expirant_90j   = $certsExpirant
} | Export-Csv "$env:TEMP\audit-ohara.csv" -NoTypeInformation -Encoding UTF8
```

Sortie type (poste Windows 11) :

```
Registre_ProductName : Windows 10 Pro
Registre_Build       : 26200
Proprietaire         : <propriétaire enregistré>
CIM_Caption          : Microsoft Windows 11 Professionnel
Erreurs_7j           : 209
Certs_Expirant_90j   : 8
```

**Ce qu'il faut leur dire :**

- Trois sources hétérogènes réunies dans **un seul objet** : c'est le principe de
  tout script d'audit de parc
- Faire remarquer les lignes `ProductName` et `CIM_Caption` dans le CSV final :
  le rapport contient sa propre démonstration du piège
- Le `@(...)` autour des `Count` : sans lui, zéro ou un résultat cassent le compte
  (rappel du chapitre 21)
- Deux cents erreurs en sept jours n'est pas alarmant : beaucoup sont bénignes
  (pilotes Bluetooth, services différés). Le chiffre sert de **tendance**, pas de verdict.

## Erreurs courantes à anticiper

- Confondre `New-Item` (la clé) et `New-ItemProperty` (la valeur)
- `Get-ItemProperty` sans `Select-Object` → noyé sous `PSPath`, `PSParentPath`, etc.
- Écrire `HKEY_LOCAL_MACHINE\...` au lieu de `HKLM:\...` → chemin invalide
- Oublier les deux-points : `HKCU\Software` ne fonctionne pas, il faut `HKCU:\Software`
- `Get-WinEvent` sans `-ErrorAction SilentlyContinue` quand aucun événement ne
  correspond → erreur rouge alors que le script est correct
- `Where-Object` sur un journal complet → lenteur, et incompréhension du pourquoi
- Filtre de certificats qui remonte les déjà-expirés (cf. Partie 5)
- Tenter d'ouvrir le journal `Security` sans être administrateur

## Phrase clé à retenir

> "Fichiers, registre, certificats, variables : quatre magasins, un seul jeu de commandes."
