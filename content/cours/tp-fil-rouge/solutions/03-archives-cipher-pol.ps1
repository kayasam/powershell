# ============================================
# Invoke-ArchivesCipherPol.ps1
# Système d'archivage - Cipher Pol Enies Lobby
# Solution TP3 - Formation PowerShell Jour 3
# ============================================

$DOSSIER_BASE    = "C:\Temp\CipherPol"
$DATE_RAPPORT    = Get-Date -Format "yyyy-MM-dd"
$DOSSIER_RAPPORT = "$DOSSIER_BASE\$DATE_RAPPORT"
$FICHIER_LOG     = "$DOSSIER_RAPPORT\rapport.log"

# ============================================
# FONCTIONS
# ============================================

function Write-Log {
    param(
        $Message,
        $Niveau = "INFO"
    )

    if (-not (Test-Path $DOSSIER_RAPPORT)) {
        New-Item -Path $DOSSIER_RAPPORT -ItemType Directory | Out-Null
    }

    $date  = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $ligne = "[$date] [$Niveau] $Message"

    Add-Content -Path $FICHIER_LOG -Value $ligne

    $couleur = switch ($Niveau) {
        "ERREUR" { "Red"    }
        "WARN"   { "Yellow" }
        default  { "White"  }
    }
    Write-Host $ligne -ForegroundColor $couleur
}

function Export-Processus {

    Write-Log "Debut export processus"

    try {
        Get-Process |
            Sort-Object WorkingSet -Descending |
            Select-Object -First 10 `
                @{Name="Nom";    Expression={$_.Name}},
                @{Name="Id";     Expression={$_.Id}},
                @{Name="RAM_MB"; Expression={[math]::Round($_.WorkingSet/1MB, 1)}},
                @{Name="CPU";    Expression={[math]::Round($_.CPU, 1)}} |
            Export-Csv "$DOSSIER_RAPPORT\processus.csv" -NoTypeInformation -Encoding UTF8

        Write-Log "Export processus : OK"
    }
    catch {
        Write-Log "Export processus ECHEC : $($_.Exception.Message)" "ERREUR"
    }
}

function Export-Services {

    Write-Log "Debut export services"

    try {
        Get-Service |
            Select-Object `
                @{Name="Nom";       Expression={$_.Name}},
                @{Name="NomComplet";Expression={$_.DisplayName}},
                @{Name="Statut";    Expression={$_.Status}},
                @{Name="Niveau";    Expression={
                    if ($_.Status -eq "Running") { "OK" } else { "Arrete" }
                }} |
            Export-Csv "$DOSSIER_RAPPORT\services.csv" -NoTypeInformation -Encoding UTF8

        Write-Log "Export services : OK"
    }
    catch {
        Write-Log "Export services ECHEC : $($_.Exception.Message)" "ERREUR"
    }
}

function Export-Synthese {

    Write-Log "Creation de la synthese"

    try {
        $nbProcessus = (Import-Csv "$DOSSIER_RAPPORT\processus.csv").Count
        $services    = Import-Csv "$DOSSIER_RAPPORT\services.csv"
        $nbActifs    = ($services | Where-Object Statut -eq "Running").Count
        $nbArretes   = ($services | Where-Object Statut -ne "Running").Count

        # Bonus : alerte si trop de services arrêtés
        $pctArretes = if ($services.Count -gt 0) {
            [math]::Round(($nbArretes / $services.Count) * 100)
        } else { 0 }

        if ($pctArretes -gt 50) {
            Write-Log "Plus de 50% des services sont arretes ($pctArretes%)" "WARN"
        }

        $synthese = @{
            Date            = $DATE_RAPPORT
            Serveur         = $env:COMPUTERNAME
            NbProcessus     = $nbProcessus
            ServicesActifs  = $nbActifs
            ServicesArretes = $nbArretes
            GenerePar       = "Cipher Pol - Invoke-ArchivesCipherPol"
        }

        $synthese | ConvertTo-Json | Out-File "$DOSSIER_RAPPORT\synthese.json" -Encoding UTF8
        Write-Log "Synthese creee : OK"
    }
    catch {
        Write-Log "Synthese ECHEC : $($_.Exception.Message)" "ERREUR"
    }
}

# ============================================
# PROGRAMME PRINCIPAL
# ============================================

Clear-Host
Write-Host "╔══════════════════════════════════════╗" -ForegroundColor DarkCyan
Write-Host "║   CIPHER POL - ARCHIVAGE QUOTIDIEN   ║" -ForegroundColor DarkCyan
Write-Host "║   $DATE_RAPPORT                            ║" -ForegroundColor DarkCyan
Write-Host "╚══════════════════════════════════════╝" -ForegroundColor DarkCyan

Write-Log "=== Demarrage archivage ==="

Export-Processus
Export-Services
Export-Synthese

Write-Log "=== Archivage termine ==="

Write-Host "`nFichiers crees dans $DOSSIER_RAPPORT :" -ForegroundColor Cyan
Get-ChildItem $DOSSIER_RAPPORT | Format-Table Name, Length, LastWriteTime -AutoSize
