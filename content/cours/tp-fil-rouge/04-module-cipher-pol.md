# TP4 - Le Module Officiel de la Cipher Pol 🕵️

## Contexte

Vous avez maintenant 3 scripts qui fonctionnent :

- **TP1** : Rapport système basique
- **TP2** : Dashboard d'alertes
- **TP3** : Archivage CSV/JSON

Le problème : les mêmes fonctions (`Write-Log`, `Write-Section`...) sont copiées dans chaque script.
C'est du code dupliqué. C'est fragile. C'est amateur.

Rob Lucci vous ordonne de **tout refactoriser en un module professionnel**.
Un module, des paramètres solides, et une tâche planifiée.

> _"La Cipher Pol n'utilise pas des outils de second ordre."_ — Rob Lucci

**Ce que vous allez construire :**

- Un module `.psm1` avec toutes les fonctions communes
- Un script principal qui l'utilise, avec des paramètres avancés
- Une tâche planifiée pour l'automatiser

---

## Étape 1 : Créer la structure du module (10 min)

```powershell
$dossierModule = "C:\Temp\CipherPolModule"
New-Item -Path $dossierModule -ItemType Directory -Force
```

Créez le fichier `CipherPol.psm1` avec les fonctions communes.

**Mission** : Implémentez ces 4 fonctions dans le module :

```powershell
# CipherPol.psm1

# ---- Fonction 1 : Write-Log ----
# Paramètres : $Message, $Niveau (ValidateSet INFO/WARN/ERREUR), $FichierLog (Mandatory)
# Comportement : Crée le dossier si nécessaire, écrit + affiche en couleur

# ---- Fonction 2 : Write-Titre ----
# Paramètres : $Texte, $Couleur (défaut = Cyan)
# Comportement : Affiche le texte encadré de "="

# ---- Fonction 3 : ConvertTo-Berrys ----
# Paramètres : $Montant [long]
# Comportement : Retourne "3 Mrd", "500 M" ou "1000 Berrys"

# ---- Fonction 4 : Get-ScoreSysteme ----
# Paramètres : $CpuCritiques [int], $RamCritique [bool]
# Comportement : Calcule un score /100 (-20 par CPU critique, -30 si RAM critique)
# Retourne un objet [PSCustomObject] avec Score, Verdict, Couleur

Export-ModuleMember -Function Write-Log, Write-Titre, ConvertTo-Berrys, Get-ScoreSysteme
```

<details>
<summary>💡 Solution du module</summary>

```powershell
function Write-Log {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory)]
        [string]$Message,

        [ValidateSet("INFO", "WARN", "ERREUR")]
        [string]$Niveau = "INFO",

        [Parameter(Mandatory)]
        [string]$FichierLog
    )

    $dossier = Split-Path $FichierLog -Parent
    if (-not (Test-Path $dossier)) {
        New-Item -Path $dossier -ItemType Directory | Out-Null
    }

    $date  = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $ligne = "[$date] [$Niveau] $Message"
    Add-Content -Path $FichierLog -Value $ligne

    $couleur = switch ($Niveau) {
        "ERREUR" { "Red"    }
        "WARN"   { "Yellow" }
        default  { "White"  }
    }
    Write-Host $ligne -ForegroundColor $couleur
}

function Write-Titre {
    param([string]$Texte, [string]$Couleur = "Cyan")
    $ligne = "=" * ($Texte.Length + 6)
    Write-Host "`n$ligne"     -ForegroundColor $Couleur
    Write-Host "   $Texte"    -ForegroundColor $Couleur
    Write-Host "$ligne"       -ForegroundColor $Couleur
}

function ConvertTo-Berrys {
    param([long]$Montant)
    if ($Montant -ge 1000000000) { return "$([math]::Round($Montant/1e9, 2)) Mrd" }
    if ($Montant -ge 1000000)    { return "$([math]::Round($Montant/1e6, 1)) M" }
    return "$Montant Berrys"
}

function Get-ScoreSysteme {
    param(
        [int]$CpuCritiques = 0,
        [bool]$RamCritique = $false
    )

    $score = 100
    $score -= ($CpuCritiques * 20)
    if ($RamCritique) { $score -= 30 }
    $score = [math]::Max(0, $score)

    $verdict = if ($score -ge 80) { "OPTIMAL" } elseif ($score -ge 50) { "DEGRADE" } else { "CRITIQUE" }
    $couleur = if ($score -ge 80) { "Green"   } elseif ($score -ge 50) { "Yellow"  } else { "Red"      }

    return [PSCustomObject]@{ Score=$score; Verdict=$verdict; Couleur=$couleur }
}

Export-ModuleMember -Function Write-Log, Write-Titre, ConvertTo-Berrys, Get-ScoreSysteme
```

</details>

---

## Étape 2 : Le script principal avec paramètres (25 min)

Créez `Invoke-CipherPol.ps1` qui utilise le module et accepte des paramètres.

Le script fait ce que vous savez déjà faire (processus et services) — mais proprement,
avec des paramètres validés et le module pour les logs.

**Paramètres à implémenter :**

```powershell
param(
    [Parameter(Mandatory)]
    [string]$NomServeur,

    [ValidateSet("Processus", "Services", "Tout")]
    [string]$Mode = "Tout",

    [switch]$ExporterCSV,

    [string]$DossierSortie = "C:\Temp\CipherPol"
)
```

**Mission** : Le script doit :

1. Importer le module `CipherPol.psm1`
2. Créer le dossier de sortie s'il n'existe pas
3. Définir le fichier log : `"$DossierSortie\rapport.log"`
4. Selon `$Mode` :
   - `"Processus"` ou `"Tout"` → afficher les 5 processus qui consomment le plus de RAM
   - `"Services"` ou `"Tout"` → afficher les services arrêtés
5. Si `-ExporterCSV`, exporter les processus dans `processus.csv`
6. Afficher le score final avec `Get-ScoreSysteme`

<details>
<summary>💡 Solution complète</summary>

```powershell
# Invoke-CipherPol.ps1
param(
    [Parameter(Mandatory)]
    [string]$NomServeur,

    [ValidateSet("Processus", "Services", "Tout")]
    [string]$Mode = "Tout",

    [switch]$ExporterCSV,

    [string]$DossierSortie = "C:\Temp\CipherPol"
)

# Importer le module
Import-Module "$PSScriptRoot\CipherPol.psm1" -Force

# Initialisation
if (-not (Test-Path $DossierSortie)) {
    New-Item -Path $DossierSortie -ItemType Directory | Out-Null
}
$fichierLog = "$DossierSortie\rapport.log"

Clear-Host
Write-Titre "CIPHER POL - $NomServeur"
Write-Log -Message "Démarrage — Mode : $Mode" -FichierLog $fichierLog

$cpuCritiques = 0

# --- Processus ---
if ($Mode -in "Processus", "Tout") {
    Write-Titre "TOP 5 PROCESSUS (RAM)" -Couleur "Yellow"

    $processus = Get-Process |
        Sort-Object WorkingSet -Descending |
        Select-Object -First 5 `
            @{Name="Nom";    Expression={$_.Name}},
            @{Name="RAM_MB"; Expression={[math]::Round($_.WorkingSet/1MB, 1)}},
            @{Name="CPU_s";  Expression={[math]::Round($_.CPU, 1)}}

    $processus | Format-Table -AutoSize

    # Compter les processus qui consomment beaucoup de CPU
    $cpuCritiques = (Get-Process | Where-Object CPU -gt 50).Count

    Write-Log -Message "Processus analysés. CPU critiques : $cpuCritiques" -FichierLog $fichierLog

    if ($ExporterCSV) {
        $csvPath = "$DossierSortie\processus.csv"
        $processus | Export-Csv $csvPath -NoTypeInformation -Encoding UTF8
        Write-Log -Message "Export CSV : $csvPath" -FichierLog $fichierLog
    }
}

# --- Services ---
if ($Mode -in "Services", "Tout") {
    Write-Titre "SERVICES ARRÊTÉS" -Couleur "Magenta"

    $arretes = Get-Service | Where-Object Status -eq "Stopped" |
        Select-Object Name, DisplayName, Status

    Write-Host "  Services arrêtés : $($arretes.Count)" -ForegroundColor Yellow
    $arretes | Select-Object -First 10 | Format-Table -AutoSize

    Write-Log -Message "Services arrêtés : $($arretes.Count)" -FichierLog $fichierLog
}

# --- Score final ---
Write-Titre "SCORE DE SANTÉ" -Couleur "White"
$score = Get-ScoreSysteme -CpuCritiques $cpuCritiques
Write-Host "  Serveur : $NomServeur"          -ForegroundColor White
Write-Host "  Score   : $($score.Score)/100"  -ForegroundColor $score.Couleur
Write-Host "  Verdict : $($score.Verdict)"    -ForegroundColor $score.Couleur

Write-Log -Message "Score final : $($score.Score)/100 — $($score.Verdict)" -FichierLog $fichierLog
Write-Log -Message "=== Fin analyse ===" -FichierLog $fichierLog
Write-Host "`n  Log : $fichierLog`n" -ForegroundColor DarkGray
```

</details>

---

## Étape 3 : Tester avec différents paramètres (10 min)

```powershell
# Mode CPU uniquement
.\Invoke-CipherPol.ps1 -NomServeur "Enies-Lobby" -Mode CPU

# Top 10 processus avec export CSV
.\Invoke-CipherPol.ps1 -NomServeur "Enies-Lobby" -TopProcessus 10 -ExporterCSV

# Analyse complète
.\Invoke-CipherPol.ps1 -NomServeur "Enies-Lobby"
```

---

## Étape 4 : Planifier (Bonus ⭐)

> Si vous avez terminé les étapes 1-3 et qu'il vous reste du temps.

```powershell
$scriptPath = "C:\Temp\CipherPolModule\Invoke-CipherPol.ps1"

$action = New-ScheduledTaskAction `
    -Execute "pwsh.exe" `
    -Argument "-NonInteractive -File `"$scriptPath`" -NomServeur Enies-Lobby -ExporterCSV"

$trigger = New-ScheduledTaskTrigger -Daily -At "06:30"

Register-ScheduledTask `
    -TaskName "CipherPol-Analyse-Quotidienne" `
    -Action $action `
    -Trigger $trigger `
    -Description "Analyse système quotidienne - Cipher Pol"

# Tester
Start-ScheduledTask -TaskName "CipherPol-Analyse-Quotidienne"
Start-Sleep -Seconds 5
(Get-ScheduledTask "CipherPol-Analyse-Quotidienne" | Get-ScheduledTaskInfo).LastTaskResult
```

---

## Validation

### Checklist

- [ ] Le fichier `CipherPol.psm1` contient les 4 fonctions et les exporte
- [ ] `Import-Module "$PSScriptRoot\CipherPol.psm1"` fonctionne sans erreur
- [ ] `Get-Help Write-Log` affiche une aide utile
- [ ] Le script accepte les 4 paramètres (NomServeur, Mode, ExporterCSV, DossierSortie)
- [ ] `-Mode Services` n'affiche que les services arrêtés
- [ ] `-ExporterCSV` crée bien un fichier `processus.csv`
- [ ] Le score s'affiche en couleur selon le verdict
- [ ] **Bonus** : La tâche planifiée s'exécute sans erreur

---

## Ce que vous avez appris

- ✅ Créer un module `.psm1` avec des fonctions documentées
- ✅ Utiliser `CmdletBinding`, `Mandatory`, `ValidateSet`, `ValidateRange`
- ✅ Structurer un script principal qui importe un module
- ✅ Automatiser avec `Register-ScheduledTask`

## Pour la suite — Jour 5

Dernier jour : **Active Directory**.
Vous apprendrez à gérer les utilisateurs, groupes et permissions directement depuis PowerShell.

**La solution complète est dans :** `TP4-Solution.ps1`
