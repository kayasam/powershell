# ============================================
# CipherPol.psm1
# Module officiel - Cipher Pol Enies Lobby
# Formation PowerShell Jour 4
# ============================================

function Write-Log {
    <#
    .SYNOPSIS
        Écrit un message dans un fichier log et l'affiche en console.
    .PARAMETER Message
        Le message à logger.
    .PARAMETER Niveau
        Le niveau de sévérité : INFO, WARN ou ERREUR.
    .PARAMETER FichierLog
        Chemin complet vers le fichier log.
    #>
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
    <#
    .SYNOPSIS
        Affiche un titre encadré.
    #>
    param(
        [Parameter(Mandatory)]
        [string]$Texte,
        [string]$Couleur = "Cyan"
    )
    $ligne = "=" * ($Texte.Length + 6)
    Write-Host "`n$ligne"  -ForegroundColor $Couleur
    Write-Host "   $Texte" -ForegroundColor $Couleur
    Write-Host "$ligne"    -ForegroundColor $Couleur
}

function ConvertTo-Berrys {
    <#
    .SYNOPSIS
        Convertit un montant en Berrys dans une unité lisible.
    #>
    param([long]$Montant)
    if ($Montant -ge 1000000000) { return "$([math]::Round($Montant/1e9, 2)) Mrd" }
    if ($Montant -ge 1000000)    { return "$([math]::Round($Montant/1e6, 1)) M" }
    return "$Montant Berrys"
}

function Get-ScoreSysteme {
    <#
    .SYNOPSIS
        Calcule un score de santé système.
    .PARAMETER CpuCritiques
        Nombre de processus en état critique CPU.
    .PARAMETER RamCritique
        True si la RAM est en état critique.
    #>
    param(
        [int]$CpuCritiques = 0,
        [bool]$RamCritique = $false
    )

    $score = 100
    $score -= ($CpuCritiques * 20)
    if ($RamCritique) { $score -= 30 }
    $score = [math]::Max(0, $score)

    $verdict = if ($score -ge 80) { "OPTIMAL"  } elseif ($score -ge 50) { "DEGRADE"  } else { "CRITIQUE" }
    $couleur = if ($score -ge 80) { "Green"    } elseif ($score -ge 50) { "Yellow"   } else { "Red"      }

    return [PSCustomObject]@{
        Score   = $score
        Verdict = $verdict
        Couleur = $couleur
    }
}

Export-ModuleMember -Function Write-Log, Write-Titre, ConvertTo-Berrys, Get-ScoreSysteme
