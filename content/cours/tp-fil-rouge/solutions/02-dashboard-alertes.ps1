# ============================================
# Watch-CipherPol.ps1
# Dashboard d'alerte - Cipher Pol Enies Lobby
# Solution TP2 - Formation PowerShell Jour 2
# ============================================

# Seuils d'alerte (modifiables ici)
$SEUIL_CPU_ALERTE    = 70
$SEUIL_CPU_CRITIQUE  = 90
$SEUIL_RAM_ALERTE    = 75
$SEUIL_RAM_CRITIQUE  = 90
$SEUIL_DISQUE_ALERTE = 80

# ============================================
# FONCTIONS
# ============================================

function Write-Section {
    param($Titre)
    $ligne = "=" * ($Titre.Length + 6)
    Write-Host "`n$ligne" -ForegroundColor Cyan
    Write-Host "   $Titre" -ForegroundColor Cyan
    Write-Host "$ligne" -ForegroundColor Cyan
}

function Get-AlerteCPU {

    Write-Section "SURVEILLANCE CPU"

    $critiques = 0

    Get-Process |
        Sort-Object CPU -Descending |
        Select-Object -First 5 |
        ForEach-Object {

            $cpu     = [math]::Round($_.CPU, 1)
            $couleur = if ($cpu -gt $SEUIL_CPU_CRITIQUE)  { $critiques++; "Red" }
                  elseif ($cpu -gt $SEUIL_CPU_ALERTE)     { "Yellow" }
                  else                                     { "Green" }

            Write-Host "  $($_.Name.PadRight(20)) CPU: $cpu s" -ForegroundColor $couleur
        }

    return $critiques
}

function Get-AlerteRAM {

    Write-Section "SURVEILLANCE RAM"

    $os      = Get-CimInstance Win32_OperatingSystem
    $total   = [math]::Round($os.TotalVisibleMemorySize / 1MB, 1)
    $libre   = [math]::Round($os.FreePhysicalMemory / 1MB, 1)
    $utilise = [math]::Round($total - $libre, 1)
    $pct     = [math]::Round(($utilise / $total) * 100)

    $rempli  = [math]::Round($pct / 5)
    $vide    = 20 - $rempli
    $barre   = "#" * $rempli + " " * $vide

    $couleur = if ($pct -gt $SEUIL_RAM_CRITIQUE)  { "Red" }
          elseif ($pct -gt $SEUIL_RAM_ALERTE)     { "Yellow" }
          else                                     { "Green" }

    Write-Host "  RAM : [$barre] $pct% ($utilise GB / $total GB)" -ForegroundColor $couleur

    return ($pct -gt $SEUIL_RAM_CRITIQUE)
}

function Get-AlerteDisque {

    Write-Section "SURVEILLANCE DISQUES"

    $disques = Get-CimInstance Win32_LogicalDisk -Filter "DriveType=3"

    foreach ($disque in $disques) {
        if ($disque.Size -eq 0) { continue }

        $total   = [math]::Round($disque.Size / 1GB, 1)
        $libre   = [math]::Round($disque.FreeSpace / 1GB, 1)
        $utilise = [math]::Round($total - $libre, 1)
        $pct     = [math]::Round((($total - $libre) / $total) * 100)

        $couleur = if ($pct -gt $SEUIL_DISQUE_ALERTE) { "Red" } else { "Green" }

        Write-Host "  $($disque.DeviceID)  $utilise GB / $total GB  ($pct% utilisé)" -ForegroundColor $couleur
    }
}

# ============================================
# PROGRAMME PRINCIPAL
# ============================================

Clear-Host
Write-Host "╔════════════════════════════════════════╗" -ForegroundColor DarkCyan
Write-Host "║  CIPHER POL - DASHBOARD ENIES LOBBY    ║" -ForegroundColor DarkCyan
Write-Host "║  $(Get-Date -Format 'dd/MM/yyyy HH:mm:ss')                    ║" -ForegroundColor DarkCyan
Write-Host "╚════════════════════════════════════════╝" -ForegroundColor DarkCyan

# Surveillance
$cpuCritiques = Get-AlerteCPU
$ramCritique  = Get-AlerteRAM
Get-AlerteDisque

# Score de santé
Write-Section "SCORE DE SANTE"

$score = 100
$score -= ($cpuCritiques * 20)
if ($ramCritique) { $score -= 30 }
$score = [math]::Max(0, $score)

$verdict      = if ($score -ge 80) { "OPTIMAL"  } elseif ($score -ge 50) { "DEGRADE"  } else { "CRITIQUE" }
$couleurScore = if ($score -ge 80) { "Green"    } elseif ($score -ge 50) { "Yellow"   } else { "Red"      }

Write-Host "`n  Score systeme : $score/100" -ForegroundColor $couleurScore
Write-Host "  Etat          : $verdict"     -ForegroundColor $couleurScore
Write-Host ""
