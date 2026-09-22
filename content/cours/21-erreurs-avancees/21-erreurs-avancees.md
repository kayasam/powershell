---
title: "21. Gestion des erreurs avancée"
parcours-tssr: false
parcours-pro: true
---

<nav class="ps-chapter-path" aria-label="Parcours du chapitre">
  <a href="https://kayasam.github.io/powershell/cours/21-erreurs-avancees/cours"><b>01 · Cours</b><small>Comprendre les notions</small></a>
  <a href="https://kayasam.github.io/powershell/cours/21-erreurs-avancees/cours-interactif"><b>02 · Cours interactif</b><small>Schéma et défi rapide</small></a>
  <a href="https://kayasam.github.io/powershell/cours/21-erreurs-avancees/quiz"><b>03 · Quiz</b><small>Vérifier ses acquis</small></a>
  <a href="https://kayasam.github.io/powershell/cours/21-erreurs-avancees/tp/"><b>04 · Travaux pratiques</b><small>Appliquer en autonomie</small></a>
</nav>

> [!TIP] Ressources du chapitre
>
> - [[21-erreurs-avancees/tp/index|Exercices pratiques]]
> - [[Memo-Commandes|Mémo des commandes]]

Au chapitre 20 vous avez appris à **attraper** une erreur avec `try/catch`.
Ici vous apprenez à en **provoquer** une proprement, à choisir **où elle s'affiche**,
et à rendre compte du résultat à celui qui appelle votre script.

C'est ce qui sépare un script qui marche sur votre poste d'un script qu'on peut
mettre en production.

## Les deux familles d'erreurs

C'est la distinction fondamentale, et celle qui piège le plus.

|                            | Erreur **non terminante** | Erreur **terminante** |
| -------------------------- | ------------------------- | --------------------- |
| Le script continue ?       | oui                       | non                   |
| Produite par               | `Write-Error`             | `throw`               |
| Attrapée par `try/catch` ? | **non**                   | oui                   |

```powershell
function Test-NonTerminante {
    Write-Error "problème signalé"
    "cette ligne s'exécute quand même"
}

function Test-Terminante {
    throw "problème bloquant"
    "cette ligne n'est JAMAIS atteinte"
}
```

> [!WARNING] Le piège n°1 de la gestion d'erreurs
> Un `try/catch` autour d'un `Write-Error` **ne déclenche pas** le `catch` :
> l'erreur est signalée, mais le script poursuit son chemin.
>
> Pour rendre une erreur non terminante attrapable, il faut le demander :
>
> ```powershell
> try { Write-Error "boum" -ErrorAction Stop }
> catch { "capturée -> $($_.Exception.Message)" }
> ```
>
> C'est exactement la raison du `-ErrorAction Stop` vu au chapitre 20.

## throw : lever sa propre erreur

```powershell
function Get-Fichier {
    param([string]$Chemin)

    if (-not (Test-Path $Chemin)) {
        throw "Le fichier '$Chemin' est introuvable."
    }

    Get-Content $Chemin
}
```

`throw` interrompt immédiatement et remonte à l'appelant. C'est l'outil des
**contrôles de validité** en début de fonction.

### Lever une erreur typée

On peut préciser la _nature_ de l'erreur, pour que l'appelant puisse la distinguer :

```powershell
throw [System.IO.FileNotFoundException]::new("Archive absente")
```

Le `catch` peut alors filtrer par type :

```powershell
try {
    throw [System.IO.FileNotFoundException]::new("Archive absente")
}
catch [System.IO.FileNotFoundException] {
    "Fichier manquant : on peut le recréer"
}
catch {
    "Toute autre erreur"
}
```

> [!TIP] Ordre des `catch`
> Du **plus précis au plus général** : le `catch` sans type doit être le **dernier**.
> PowerShell est strict là-dessus — ce n'est même pas un piège à l'exécution, c'est
> une erreur de syntaxe :
>
> ```
> ParserError: Le bloc catch doit être le dernier bloc catch.
> ```
>
> Le script refuse de démarrer, ce qui est une bonne nouvelle : l'erreur se voit tout de suite.

## Régler le comportement sans toucher au code

### Par commande : `-ErrorAction`

```powershell
Get-Item "absent.txt" -ErrorAction Stop              # devient terminante
Get-Item "absent.txt" -ErrorAction SilentlyContinue  # silence total
Get-Item "absent.txt" -ErrorAction Continue          # défaut : affiche et continue
Get-Item "absent.txt" -ErrorAction Ignore            # ni affichage, ni trace dans $Error
```

### Pour tout le script : `$ErrorActionPreference`

```powershell
$ErrorActionPreference = 'Stop'

# Désormais toute erreur est terminante, sans avoir à répéter -ErrorAction
try { Get-Item "absent.txt" } catch { "capturée" }
```

> [!NOTE] `SilentlyContinue` ou `Ignore` ?
> `SilentlyContinue` masque l'erreur **mais la range dans `$Error`** : vous pouvez
> l'inspecter après coup. `Ignore` ne laisse aucune trace.
> En pratique, préférez `SilentlyContinue` : une erreur qu'on ne peut plus retrouver
> est une erreur qu'on ne corrigera jamais.

### Les mêmes réglages existent pour les autres flux

`-WarningAction` / `$WarningPreference`, `-InformationAction`, `-Verbose`, `-Debug`
fonctionnent exactement sur le même modèle.

```powershell
Import-Module MonModule -WarningAction SilentlyContinue
```

## Les six flux de sortie

PowerShell ne sort pas tout par le même tuyau. Chaque flux a un **numéro**,
et chacun peut être redirigé séparément.

| N°  | Flux                     | Cmdlet              | Visible par défaut |
| --- | ------------------------ | ------------------- | ------------------ |
| 1   | Success (sortie normale) | `Write-Output`      | oui                |
| 2   | Error                    | `Write-Error`       | oui                |
| 3   | Warning                  | `Write-Warning`     | oui                |
| 4   | Verbose                  | `Write-Verbose`     | non (`-Verbose`)   |
| 5   | Debug                    | `Write-Debug`       | non (`-Debug`)     |
| 6   | Information              | `Write-Information` | non                |

> [!NOTE] Et `Write-Host` ?
> `Write-Host` écrit _à travers_ le flux 6 mais va directement à l'écran : son texte
> n'est ni capturable dans une variable, ni redirigeable simplement.
> C'est le piège vu au chapitre 13 : pour qu'une fonction **retourne** quelque chose,
> utilisez `Write-Output` — gardez `Write-Host` pour la décoration.

### Rediriger un flux

```powershell
# Jeter les erreurs
Get-Item "absent.txt" 2>$null

# Envoyer les erreurs dans un fichier
Get-Item "absent.txt" 2>"C:\Logs\erreurs.txt"

# Ajouter au lieu d'écraser
Get-Item "absent.txt" 2>>"C:\Logs\erreurs.txt"

# Tout (les 6 flux) dans un fichier
.\MonScript.ps1 *>"C:\Logs\complet.txt"
```

### `2>&1` : transformer une erreur en donnée

C'est la redirection la plus utile : elle fait passer le flux d'erreur **dans** le
flux de sortie, ce qui rend l'erreur manipulable comme un objet.

```powershell
$resultat = Get-Item "absent.txt" 2>&1

$resultat.GetType().Name      # ErrorRecord
$resultat -is [System.Management.Automation.ErrorRecord]   # True
```

Usage typique : collecter tous les résultats, succès et échecs mélangés, puis trier.

```powershell
$tout = foreach ($s in "SRV-01", "SRV-02") {
    Get-CimInstance Win32_OperatingSystem -ComputerName $s 2>&1
}

$erreurs = $tout | Where-Object { $_ -is [System.Management.Automation.ErrorRecord] }
$ok      = $tout | Where-Object { $_ -isnot [System.Management.Automation.ErrorRecord] }
```

## Rendre compte : les codes de sortie

Un script qui tourne dans une tâche planifiée ou un pipeline CI n'a personne pour
lire ses messages. Ce qu'on lit, c'est son **code de sortie** : `0` = succès,
toute autre valeur = problème.

```powershell
# À la fin de votre script
if ($erreurs.Count -gt 0) {
    exit 1
}
exit 0
```

Côté appelant, on le récupère dans `$LASTEXITCODE` :

```powershell
pwsh -NoProfile -File .\MonScript.ps1
if ($LASTEXITCODE -ne 0) {
    Write-Warning "Le script a échoué (code $LASTEXITCODE)"
}
```

> [!TIP] Convention de codes
> `0` succès · `1` erreur générale · `2` mauvais paramètres · et au-delà, ce que
> vous voulez, **à condition de le documenter** dans l'en-tête du script.
> Le chapitre 27 (planification) s'appuie dessus : `LastTaskResult` d'une tâche
> planifiée n'est rien d'autre que ce code.

### `$?` : la dernière commande a-t-elle réussi ?

```powershell
Get-Item "absent.txt" -ErrorAction SilentlyContinue
$?      # False
```

Pratique pour un test rapide, mais attention : `$?` est écrasé par **chaque**
commande suivante, y compris un simple `Write-Host`. Pour un vrai contrôle,
préférez `try/catch`.

## `$Error` : l'historique des erreurs

```powershell
$Error.Count          # nombre d'erreurs depuis le début de la session
$Error[0]             # la plus récente
$Error[0].Exception.Message
$Error.Clear()        # vider l'historique
```

`$Error` est un tampon de session : il s'accumule tant que la console reste ouverte.
Très utile en dépannage — « qu'est-ce qui a échoué tout à l'heure ? ».

## Déboguer un script

Quand la lecture ne suffit plus, on arrête le script en vol pour regarder les variables.

### Points d'arrêt sur une ligne

```powershell
# Poser un point d'arrêt ligne 12
Set-PSBreakpoint -Script .\MonScript.ps1 -Line 12

# Les lister
Get-PSBreakpoint

# Les enlever
Get-PSBreakpoint | Remove-PSBreakpoint
```

Au déclenchement, l'invite devient `[DBG]>`. Les commandes utiles :

| Commande   | Raccourci | Effet                                         |
| ---------- | --------- | --------------------------------------------- |
| `stepInto` | `s`       | ligne suivante, en entrant dans les fonctions |
| `stepOver` | `v`       | ligne suivante, sans entrer                   |
| `continue` | `c`       | reprendre jusqu'au prochain arrêt             |
| `quit`     | `q`       | arrêter le débogage                           |

À l'arrêt, la console est normale : tapez `$maVariable` pour voir son contenu.

### Espionner une variable

C'est souvent plus efficace qu'un point d'arrêt sur une ligne : on demande à
PowerShell de s'arrêter **quand une variable change**.

```powershell
# S'arrêter à chaque écriture dans $total
Set-PSBreakpoint -Script .\MonScript.ps1 -Variable total -Mode Write

# Modes : Read, Write, ReadWrite
```

### Points d'arrêt sur une commande

```powershell
# S'arrêter avant chaque Remove-Item du script
Set-PSBreakpoint -Script .\MonScript.ps1 -Command Remove-Item
```

### Dans VS Code

L'extension PowerShell permet de cliquer dans la marge pour poser un point d'arrêt,
puis **F5** pour lancer, **F10** pas à pas, **F11** pas à pas détaillé.
Les variables sont affichées dans le panneau de gauche. C'est la même mécanique,
en version graphique.

### Le débogage du pauvre : `Write-Debug`

Pas besoin de débogueur pour des vérifications simples :

```powershell
function Get-Rapport {
    [CmdletBinding()]
    param([int]$Seuil)

    Write-Debug "Seuil reçu : $Seuil"
    Write-Verbose "Démarrage de l'analyse"
    # ...
}

Get-Rapport -Seuil 80 -Debug      # affiche les messages de debug
Get-Rapport -Seuil 80 -Verbose    # affiche les messages verbeux
```

L'avantage sur `Write-Host` : ces messages sont **invisibles par défaut**. On les
laisse dans le code sans polluer la sortie normale, et on les rallume à la demande.

## Un script robuste, de bout en bout

```powershell
[CmdletBinding()]
param(
    [Parameter(Mandatory)]
    [string]$Dossier
)

$ErrorActionPreference = 'Stop'
$erreurs = 0

try {
    if (-not (Test-Path $Dossier)) {
        throw "Le dossier '$Dossier' n'existe pas."
    }

    Write-Verbose "Analyse de $Dossier"
    $fichiers = Get-ChildItem $Dossier -File

    foreach ($f in $fichiers) {
        try {
            Write-Debug "Traitement de $($f.Name)"
            # ... traitement ...
        }
        catch {
            Write-Warning "Échec sur $($f.Name) : $($_.Exception.Message)"
            $erreurs++
        }
    }

    Write-Output "$($fichiers.Count) fichier(s), $erreurs erreur(s)"
}
catch {
    Write-Error "Échec bloquant : $($_.Exception.Message)"
    exit 2
}
finally {
    Write-Verbose "Fin du traitement"
}

if ($erreurs -gt 0) { exit 1 }
exit 0
```

Les trois niveaux à remarquer :

- le `try` **intérieur** isole un fichier en échec sans faire tomber tout le lot ;
- le `try` **extérieur** attrape ce qui empêche de continuer, et sort en code 2 ;
- le `finally` s'exécute dans tous les cas — même après un `throw`.

> [!success] À retenir
>
> - `Write-Error` = non terminante (le script continue), `throw` = terminante
> - `try/catch` n'attrape une erreur non terminante **que** avec `-ErrorAction Stop`
> - `$ErrorActionPreference = 'Stop'` applique la règle à tout le script
> - Six flux numérotés : `2` erreur, `3` warning, `4` verbose, `5` debug, `6` information
> - `2>$null` pour jeter, `2>&1` pour transformer l'erreur en objet manipulable
> - `exit 0` / `exit 1` : c'est ce que lit une tâche planifiée ou un pipeline CI
> - `$LASTEXITCODE` côté appelant, `$Error` pour l'historique de session
> - `Set-PSBreakpoint -Variable ... -Mode Write` pour espionner une variable
> - `Write-Verbose` / `Write-Debug` : des traces qu'on rallume à la demande

> **Liens**
>
> - [À propos des préférences](https://learn.microsoft.com/fr-fr/powershell/module/microsoft.powershell.core/about/about_preference_variables)
> - [À propos des redirections](https://learn.microsoft.com/fr-fr/powershell/module/microsoft.powershell.core/about/about_redirection)
> - [À propos du débogueur](https://learn.microsoft.com/fr-fr/powershell/module/microsoft.powershell.core/about/about_debuggers)

---

## Fiche récapitulative

![21_Erreurs_avancees](https://kayasam.github.io/powershell/ressources/images/21_Erreurs_avancees.png)
