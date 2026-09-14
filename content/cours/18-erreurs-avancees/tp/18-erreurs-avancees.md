# Exercice 18 - Le Rapport d'Incident de Chopper 🩺

## Contexte

Chopper est le médecin de bord. Quand un membre d'équipage est blessé, il doit
distinguer l'écorchure — on continue la mission — de la fracture — on s'arrête
immédiatement. Et à la fin, son rapport doit dire en un chiffre si tout va bien.

Vos scripts, c'est pareil : toutes les erreurs ne se valent pas.

> _"Un bon diagnostic, c'est savoir ce qui peut attendre."_ — Tony Tony Chopper

**Durée : 30 min**

## Partie 1 : Écorchure ou fracture ? (5 min)

```powershell
function Test-Ecorchure {
    Write-Error "égratignure"
    "APRÈS Write-Error"
}

function Test-Fracture {
    throw "fracture ouverte"
    "APRÈS throw"
}
```

Exécutez les deux.

**Questions** :

- Laquelle affiche la ligne qui suit ?
- Entourez chacune d'un `try/catch`. Lequel des deux `catch` se déclenche ?
- Comment forcer le `catch` à attraper aussi la première ?

## Partie 2 : Le diagnostic typé (5 min)

```powershell
try {
    throw [System.IO.FileNotFoundException]::new("Dossier médical introuvable")
}
catch [System.IO.FileNotFoundException] {
    "Diagnostic précis : $($_.Exception.Message)"
}
catch {
    "Diagnostic générique"
}
```

**Exercice** : ajoutez un `catch [System.UnauthorizedAccessException]` et testez-le
en levant ce type d'exception.

**Question** : que se passe-t-il si vous placez le `catch` générique **en premier** ?

## Partie 3 : Trier les flux (10 min)

```powershell
function Write-Bulletin {
    Write-Output      "1 - Etat general : stable"
    Write-Error       "2 - Blessure detectee"
    Write-Warning     "3 - Surveiller la fievre"
    Write-Verbose     "4 - Pouls 72" -Verbose
    Write-Information "5 - Note interne" -InformationAction Continue
}
```

**Exercices** :

1. Exécutez la fonction telle quelle. Combien de lignes voyez-vous ?
2. Faites disparaître **uniquement** le message d'erreur.
3. Faites disparaître l'erreur **et** l'avertissement.
4. Envoyez le bulletin complet (tous les flux) dans `$env:TEMP\bulletin.txt`.

> Indice : chaque flux a un numéro. `2>$null`, `3>$null`, `*>fichier`.

## Partie 4 : L'erreur qui devient une donnée (5 min)

```powershell
$resultat = Get-Item "C:\dossier-inexistant-xyz" 2>&1
```

**Questions** :

- Quel est le **type** de `$resultat` ?
- Le script s'est-il arrêté ?
- Pourquoi est-ce utile quand on interroge 50 serveurs d'affilée ?

**Exercice** : parcourez une liste de trois chemins (dont deux inexistants),
collectez tout avec `2>&1`, puis séparez les succès des échecs.

## Partie 5 : Le code de sortie (5 min)

Créez `$env:TEMP\bilan.ps1` :

```powershell
param([int]$Blesses = 0)

if ($Blesses -eq 0) {
    "Equipage au complet"
    exit 0
}

Write-Warning "$Blesses blesse(s)"
exit 1
```

Lancez-le puis lisez le code :

```powershell
pwsh -NoProfile -File "$env:TEMP\bilan.ps1" -Blesses 0
$LASTEXITCODE

pwsh -NoProfile -File "$env:TEMP\bilan.ps1" -Blesses 2
$LASTEXITCODE
```

**Question** : pourquoi une tâche planifiée a-t-elle besoin de ce code plutôt que
d'un `Write-Host` ?

## Mission finale : l'infirmerie qui ne tombe jamais 🏴‍☠️

Écrivez `Invoke-Infirmerie.ps1` qui :

1. prend un paramètre **obligatoire** `-Dossier` ;
2. **lève** une erreur terminante si le dossier n'existe pas (sortie code `2`) ;
3. parcourt les fichiers du dossier ; pour chacun, un `try/catch` **interne** :
   un fichier en échec ne doit pas arrêter les autres ;
4. compte les échecs et les signale avec `Write-Warning` ;
5. trace son avancement avec `Write-Verbose` (invisible sans `-Verbose`) ;
6. termine par `exit 1` s'il y a eu au moins un échec, `exit 0` sinon.

Testez avec un dossier valide, puis avec un dossier inexistant, en vérifiant
`$LASTEXITCODE` à chaque fois.

## Validation

✅ Vous distinguez erreur **non terminante** (`Write-Error`) et **terminante** (`throw`)
✅ Vous savez qu'il faut `-ErrorAction Stop` pour attraper la première
✅ Vous connaissez les numéros des flux et savez les rediriger
✅ Vous savez transformer une erreur en objet avec `2>&1`
✅ Vous terminez vos scripts par un `exit` explicite
✅ Vous savez lire `$LASTEXITCODE` côté appelant
✅ Vous imbriquez les `try/catch` pour isoler un échec sans tout arrêter
