# ============================================
# Invoke-CipherPol.ps1
# Script principal - Cipher Pol Enies Lobby
# Utilise le module CipherPol.psm1
# ============================================
#
# EXEMPLES D'UTILISATION :
#   .\Invoke-CipherPol.ps1 -NomServeur "Enies-Lobby-01"
#   .\Invoke-CipherPol.ps1 -NomServeur "Enies-Lobby-01" -Mode CPU -TopProcessus 10
#   .\Invoke-CipherPol.ps1 -NomServeur "Enies-Lobby-01" -Mode Tout -ExporterCSV
#   .\Invoke-CipherPol.ps1 -NomServeur "Enies-Lobby-01" -DossierSortie "D:\Rapports"
# ============================================

[CmdletBinding()]
param(
    [Parameter(Mandatory)]
    [string]$NomServeur,

    [ValidateSet("CPU", "RAM", "Disque", "Tout")]
    [string]$Mode = "Tout",

    [ValidateRange(3, 20)]
    [int]$TopProcessus = 5,

    [switch]$ExporterCSV,

    [string]$DossierSortie = "C:\Temp\CipherPol"
)

# ============================================
# Import du module
# ============================================
$modulePath = Join-Path $PSScriptRoot "CipherPol.psm1"
Import-Module $modulePath -Force

# ============================================
# Initialisation
# ============================================
$date           = Get-Date -Format "yyyy-MM-dd"
$dossierRapport = Join-Path $DossierSortie $date
$fichierLog     = Join-Path $dossierRapport "rapport.log"

if (-not (Test-Path $dossierRapport)) {
    New-Item -Path $dossierRapport -ItemType Directory | Out-Null
}

# Compteurs pour le score final
$cpuCritiques = 0
$ramCritique  = $false

# ============================================
# En-tête
# ============================================
Clear-Host
Write-Titre "CIPHER POL — $NomServeur"
Write-Host "  Mode      : $Mode" -ForegroundColor DarkGray
Write-Host "  Processus : Top $TopProcessus" -ForegroundColor DarkGray
Write-Host "  Export CSV: $($ExporterCSV.IsPresent)" -ForegroundColor DarkGray
Write-Host "  Dossier   : $dossierRapport`n" -ForegroundColor DarkGray

Write-Log -Message "=== Démarrage analyse : NomServeur=$NomServeur Mode=$Mode ===" `
          -FichierLog $fichierLog

# ============================================
# Analyse CPU
# ============================================
if ($Mode -eq "CPU" -or $Mode -eq "Tout") {

    Write-Titre "TOP $TopProcessus PROCESSUS (CPU)" -Couleur "Yellow"

    $processus = Get-Process |
        Sort-Object CPU -Descending |
        Select-Object -First $TopProcessus `
            @{Name="Nom";    Expression={$_.Name}},
            @{Name="Id";     Expression={$_.Id}},
            @{Name="RAM_MB"; Expression={[math]::Round($_.WorkingSet/1MB, 1)}},
            @{Name="CPU_s";  Expression={[math]::Round($_.CPU, 1)}}

    $processus | Format-Table -AutoSize

    # Détecter les processus critiques
    foreach ($proc in $processus) {
        if ($proc.CPU_s -gt 50) {
            Write-Log -Message "CPU CRITIQUE : $($proc.Nom) — $($proc.CPU_s)s" `
                      -Niveau "ERREUR" -FichierLog $fichierLog
            $cpuCritiques++
        }
    }

    if ($cpuCritiques -eq 0) {
        Write-Log -Message "CPU OK — aucun processus critique" -FichierLog $fichierLog
    }

    if ($ExporterCSV) {
        $csvPath = Join-Path $dossierRapport "processus.csv"
        $processus | Export-Csv $csvPath -NoTypeInformation -Encoding UTF8
        Write-Log -Message "Export CSV processus : $csvPath" -FichierLog $fichierLog
    }
}

# ============================================
# Analyse RAM
# ============================================
if ($Mode -eq "RAM" -or $Mode -eq "Tout") {

    Write-Titre "MÉMOIRE RAM" -Couleur "Magenta"

    try {
        $os      = Get-CimInstance Win32_OperatingSystem -ErrorAction Stop
        $total   = [math]::Round($os.TotalVisibleMemorySize / 1MB, 1)
        $libre   = [math]::Round($os.FreePhysicalMemory     / 1MB, 1)
        $utilise = [math]::Round($total - $libre, 1)
        $pct     = [math]::Round(($utilise / $total) * 100, 1)

        $couleurRAM = if ($pct -ge 90) { "Red" } elseif ($pct -ge 75) { "Yellow" } else { "Green" }

        Write-Host "  Total   : $total GB"                         -ForegroundColor White
        Write-Host "  Utilisé : $utilise GB ($pct%)"               -ForegroundColor $couleurRAM
        Write-Host "  Libre   : $libre GB"                         -ForegroundColor White

        $nbBlocs = [int]($pct / 5)
        $barre   = "#" * $nbBlocs
        $vide    = "-" * (20 - $nbBlocs)
        Write-Host "  [$barre$vide] $pct%`n"                       -ForegroundColor $couleurRAM

        if ($pct -ge 90) {
            $ramCritique = $true
            Write-Log -Message "RAM CRITIQUE : $pct% utilisée" -Niveau "ERREUR" -FichierLog $fichierLog
        } elseif ($pct -ge 75) {
            Write-Log -Message "RAM AVERTISSEMENT : $pct% utilisée" -Niveau "WARN" -FichierLog $fichierLog
        } else {
            Write-Log -Message "RAM OK : $pct% utilisée" -FichierLog $fichierLog
        }
    }
    catch {
        Write-Log -Message "Erreur lecture RAM : $($_.Exception.Message)" `
                  -Niveau "ERREUR" -FichierLog $fichierLog
    }
}

# ============================================
# Analyse Disques
# ============================================
if ($Mode -eq "Disque" -or $Mode -eq "Tout") {

    Write-Titre "DISQUES" -Couleur "Cyan"

    try {
        $disques = Get-CimInstance Win32_LogicalDisk -Filter "DriveType=3" -ErrorAction Stop

        foreach ($disque in $disques) {
            $total   = [math]::Round($disque.Size / 1GB, 1)
            $libre   = [math]::Round($disque.FreeSpace / 1GB, 1)
            $pct     = [math]::Round((($total - $libre) / $total) * 100, 1)
            $couleur = if ($pct -ge 90) { "Red" } elseif ($pct -ge 75) { "Yellow" } else { "Green" }

            Write-Host ("  {0}  Total={1} GB  Libre={2} GB  Utilisé={3}%" -f `
                $disque.DeviceID, $total, $libre, $pct) -ForegroundColor $couleur

            if ($pct -ge 90) {
                Write-Log -Message "DISQUE CRITIQUE : $($disque.DeviceID) — $pct% utilisé" `
                          -Niveau "ERREUR" -FichierLog $fichierLog
            } elseif ($pct -ge 75) {
                Write-Log -Message "DISQUE WARN : $($disque.DeviceID) — $pct% utilisé" `
                          -Niveau "WARN" -FichierLog $fichierLog
            } else {
                Write-Log -Message "DISQUE OK : $($disque.DeviceID) — $pct% utilisé" `
                          -FichierLog $fichierLog
            }
        }

        Write-Host ""

        if ($ExporterCSV) {
            $csvPath = Join-Path $dossierRapport "disques.csv"
            $disques | Select-Object DeviceID,
                @{Name="Total_GB";    Expression={[math]::Round($_.Size/1GB, 1)}},
                @{Name="Libre_GB";    Expression={[math]::Round($_.FreeSpace/1GB, 1)}},
                @{Name="Utilise_Pct"; Expression={[math]::Round((($_.Size-$_.FreeSpace)/$_.Size)*100, 1)}} |
                Export-Csv $csvPath -NoTypeInformation -Encoding UTF8
            Write-Log -Message "Export CSV disques : $csvPath" -FichierLog $fichierLog
        }
    }
    catch {
        Write-Log -Message "Erreur lecture disques : $($_.Exception.Message)" `
                  -Niveau "ERREUR" -FichierLog $fichierLog
    }
}

# ============================================
# Score de santé final
# ============================================
Write-Titre "SCORE DE SANTÉ — $(ConvertTo-Berrys 500000000)" -Couleur "White"

$score = Get-ScoreSysteme -CpuCritiques $cpuCritiques -RamCritique $ramCritique

Write-Host "  Serveur  : $NomServeur"                    -ForegroundColor White
Write-Host "  Score    : $($score.Score)/100"            -ForegroundColor $score.Couleur
Write-Host "  Verdict  : $($score.Verdict)`n"            -ForegroundColor $score.Couleur

Write-Log -Message "Score final : $($score.Score)/100 — $($score.Verdict)" -FichierLog $fichierLog
Write-Log -Message "=== Fin analyse ===" -FichierLog $fichierLog

Write-Host "  Log sauvegardé : $fichierLog`n" -ForegroundColor DarkGray
