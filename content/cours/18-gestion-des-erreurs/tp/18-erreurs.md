# Exercice 18 - Le Courage d'Usopp 🎯

## Contexte

**Usopp** est le tireur d'élite du Thousand Sunny.
Il a peur de tout. Mais il va quand même de l'avant — et ça, c'est du vrai courage.

En PowerShell, un script sans gestion d'erreur c'est pareil : au moindre problème, tout s'arrête.
Votre mission : apprendre à avancer **même quand ça échoue**.

> _"J'ai peur ! Mais je vais y aller quand même !"_ — Usopp

## Partie 1 : Voir ce qui se passe sans protection (5 min)

Testez ces commandes qui vont échouer :

```powershell
# Lire un fichier inexistant
Get-Content "C:\inexistant.txt"

# Supprimer un dossier inexistant
Remove-Item "C:\dossier-fantome" -Recurse
```

Observez : le script s'arrête avec un message rouge. Pas terrible pour un script de production.

## Partie 2 : Attraper les erreurs (15 min)

### 2a. La structure de base

```powershell
try {
    Get-Content "C:\inexistant.txt" -ErrorAction Stop
    Write-Host "Fichier lu !"
}
catch {
    Write-Host "Erreur attrapée : $($_.Exception.Message)" -ForegroundColor Red
}
Write-Host "Le script continue..." -ForegroundColor Green
```

**Lancez-le** : le script continue après l'erreur !

### 2b. L'importance de -ErrorAction Stop

Comparez ces deux versions :

```powershell
# Version 1 : catch ne fonctionne PAS (erreur non-terminante)
try {
    Get-Content "C:\inexistant.txt"
}
catch {
    Write-Host "Jamais affiché..."
}

# Version 2 : catch fonctionne
try {
    Get-Content "C:\inexistant.txt" -ErrorAction Stop
}
catch {
    Write-Host "Erreur attrapée !" -ForegroundColor Red
}
```

**Conclusion** : Ajoutez toujours `-ErrorAction Stop` dans un `try`.

## Partie 3 : Patterns de survie (15 min)

### Pattern 1 : Tester avant d'agir

```powershell
function Get-ContenuFichierSecurise {
    param($Chemin)

    if (-not (Test-Path $Chemin)) {
        Write-Host "Fichier introuvable : $Chemin" -ForegroundColor Yellow
        return $null
    }

    return Get-Content $Chemin
}

# Testez
Get-ContenuFichierSecurise "C:\inexistant.txt"
Get-ContenuFichierSecurise "C:\Windows\win.ini"
```

### Pattern 2 : Valeur de repli

```powershell
function Get-Config {
    param($Chemin)

    try {
        $config = Get-Content $Chemin -ErrorAction Stop | ConvertFrom-Json
        Write-Host "Config chargée depuis $Chemin" -ForegroundColor Green
        return $config
    }
    catch {
        Write-Host "Config introuvable, utilisation des valeurs par défaut" -ForegroundColor Yellow
        return [PSCustomObject]@{
            SeuilCPU = 80
            SeuilRAM = 90
            Alertes  = $true
        }
    }
}

# Testez : le fichier n'existe pas mais la fonction retourne quand même quelque chose
$cfg = Get-Config "C:\config-imaginaire.json"
Write-Host "Seuil CPU : $($cfg.SeuilCPU)%"
```

### Pattern 3 : Log des erreurs

```powershell
function Write-Log {
    param($Message, $Niveau = "INFO")

    $date  = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $ligne = "[$date] [$Niveau] $Message"

    # Créer le dossier de logs si nécessaire
    if (-not (Test-Path "C:\Temp\Logs")) {
        New-Item -Path "C:\Temp\Logs" -ItemType Directory | Out-Null
    }

    Add-Content -Path "C:\Temp\Logs\application.log" -Value $ligne
    Write-Host $ligne -ForegroundColor $(if ($Niveau -eq "ERREUR") { "Red" } else { "White" })
}

try {
    Get-Content "C:\inexistant.txt" -ErrorAction Stop
}
catch {
    Write-Log -Message $_.Exception.Message -Niveau "ERREUR"
}

Write-Log -Message "Script terminé" -Niveau "INFO"
```

**Vérifiez le log** :

```powershell
Get-Content "C:\Temp\Logs\application.log"
```

## Mission Finale : Le script indestructible 🌟

Créez un script qui essaie de lire 3 fichiers (dont certains n'existent pas).
Pour chaque fichier, il doit :

- Afficher le contenu si le fichier existe
- Logger l'erreur si le fichier est introuvable
- **Toujours** continuer jusqu'au bout

```powershell
$fichiers = @(
    "C:\Windows\win.ini",
    "C:\fichier-de-luffy.txt",
    "C:\Windows\system.ini",
    "C:\fichier-de-zoro.txt"
)

foreach ($fichier in $fichiers) {
    # À vous de compléter avec try/catch...
}
```

## Validation

- ✅ Vous comprenez pourquoi `-ErrorAction Stop` est nécessaire
- ✅ Vous savez écrire un bloc `try/catch`
- ✅ Vous savez récupérer le message d'erreur avec `$_.Exception.Message`
- ✅ Vous utilisez `Test-Path` pour les erreurs prévisibles
- ✅ Vous savez écrire des erreurs dans un fichier log
