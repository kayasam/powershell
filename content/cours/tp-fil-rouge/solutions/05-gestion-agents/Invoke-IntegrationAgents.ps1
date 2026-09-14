# ============================================
# Invoke-IntegrationAgents.ps1
# Script d'intégration des agents - Cipher Pol
# Formation PowerShell Jour 5
# ============================================
#
# EXEMPLES :
#   .\Invoke-IntegrationAgents.ps1 -FichierCSV "C:\Temp\CipherPol\recrues.csv" -Simulation
#   .\Invoke-IntegrationAgents.ps1 -FichierCSV "C:\Temp\CipherPol\recrues.csv" `
#                                  -DomaineDNS "mondomaine.local"
# ============================================

[CmdletBinding()]
param(
    [Parameter(Mandatory)]
    [string]$FichierCSV,

    [string]$DomaineDNS     = "cipher-pol.org",
    [string]$OUUtilisateurs = "OU=Agents,DC=cipher-pol,DC=org",
    [string]$OUGroupes      = "OU=Groupes,DC=cipher-pol,DC=org",
    [string]$DossierSortie  = "C:\Temp\CipherPol",

    [switch]$Simulation
)

# ============================================
# Import du module CipherPol
# ============================================
$modulePath = Join-Path $PSScriptRoot "..\..\..\Jour4\TP\TP4-Solution\CipherPol.psm1"

if (Test-Path $modulePath) {
    Import-Module $modulePath -Force
} else {
    # Fallback si le module n'est pas trouvé
    function Write-Log {
        param(
            [Parameter(Mandatory)] [string]$Message,
            [ValidateSet("INFO","WARN","ERREUR")] [string]$Niveau = "INFO",
            [Parameter(Mandatory)] [string]$FichierLog
        )
        $dossier = Split-Path $FichierLog -Parent
        if (-not (Test-Path $dossier)) { New-Item -Path $dossier -ItemType Directory | Out-Null }
        $date  = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
        $ligne = "[$date] [$Niveau] $Message"
        Add-Content -Path $FichierLog -Value $ligne
        $couleur = switch ($Niveau) {
            "ERREUR" { "Red" } "WARN" { "Yellow" } default { "White" }
        }
        Write-Host $ligne -ForegroundColor $couleur
    }
    function Write-Titre {
        param([Parameter(Mandatory)][string]$Texte, [string]$Couleur = "Cyan")
        $ligne = "=" * ($Texte.Length + 6)
        Write-Host "`n$ligne`n   $Texte`n$ligne" -ForegroundColor $Couleur
    }
}

# ============================================
# Initialisation
# ============================================
$date       = Get-Date -Format "yyyy-MM-dd"
$fichierLog = Join-Path $DossierSortie "integration-$date.log"
New-Item -Path $DossierSortie -ItemType Directory -Force | Out-Null

# ============================================
# Vérification du module ActiveDirectory
# ============================================
$adDisponible = Get-Module -ListAvailable -Name ActiveDirectory

if (-not $adDisponible) {
    Write-Log -Message "Module ActiveDirectory non disponible — mode simulation forcé" `
              -Niveau "WARN" -FichierLog $fichierLog
    $Simulation = $true
}

if ($Simulation) {
    Write-Log -Message "Mode SIMULATION activé — aucune modification AD" `
              -FichierLog $fichierLog
} else {
    Import-Module ActiveDirectory -ErrorAction Stop
    Write-Log -Message "Module ActiveDirectory chargé" -FichierLog $fichierLog
}

# ============================================
# Fonctions
# ============================================

function New-AgentAD {
    <#
    .SYNOPSIS
        Crée un utilisateur AD (ou simule la création).
    #>
    param(
        [PSCustomObject]$Recrue,
        [string]$Domaine,
        [string]$OU,
        [bool]$SimulationMode,
        [string]$FichierLog
    )

    $nomComplet = "$($Recrue.Prenom) $($Recrue.Nom)"

    if ($SimulationMode) {
        Write-Log -Message "[SIM] Création utilisateur : $nomComplet ($($Recrue.Login)) [Dept: $($Recrue.Departement)]" `
                  -FichierLog $FichierLog
        return [PSCustomObject]@{
            Nom       = $nomComplet
            Login     = $Recrue.Login
            Unite     = $Recrue.Unite
            Status    = "SIMULÉ"
        }
    }

    # Vérifier si l'utilisateur existe déjà
    $existant = Get-ADUser -Filter "SamAccountName -eq '$($Recrue.Login)'" -ErrorAction SilentlyContinue
    if ($existant) {
        Write-Log -Message "Compte déjà existant : $($Recrue.Login)" -Niveau "WARN" -FichierLog $FichierLog
        return [PSCustomObject]@{
            Nom    = $nomComplet
            Login  = $Recrue.Login
            Unite  = $Recrue.Unite
            Status = "EXISTANT"
        }
    }

    try {
        New-ADUser `
            -Name                  $nomComplet `
            -SamAccountName        $Recrue.Login `
            -UserPrincipalName     "$($Recrue.Login)@$Domaine" `
            -GivenName             $Recrue.Prenom `
            -Surname               $Recrue.Nom `
            -Department            $Recrue.Departement `
            -Title                 $Recrue.Title `
            -Path                  $OU `
            -AccountPassword       (ConvertTo-SecureString "CP@2024!" -AsPlainText -Force) `
            -Enabled               $true `
            -ChangePasswordAtLogon $true `
            -ErrorAction           Stop

        Write-Log -Message "Créé : $nomComplet ($($Recrue.Login))" -FichierLog $FichierLog

        return [PSCustomObject]@{
            Nom    = $nomComplet
            Login  = $Recrue.Login
            Unite  = $Recrue.Unite
            Status = "CRÉÉ"
        }
    }
    catch {
        Write-Log -Message "Erreur création $nomComplet : $($_.Exception.Message)" `
                  -Niveau "ERREUR" -FichierLog $FichierLog

        return [PSCustomObject]@{
            Nom    = $nomComplet
            Login  = $Recrue.Login
            Unite  = $Recrue.Unite
            Status = "ERREUR"
        }
    }
}

function Add-MembreGroupe {
    <#
    .SYNOPSIS
        Ajoute un utilisateur à un groupe AD (ou simule l'ajout).
    #>
    param(
        [string]$Login,
        [string]$NomGroupe,
        [bool]$SimulationMode,
        [string]$FichierLog
    )

    if ($SimulationMode) {
        Write-Log -Message "[SIM] Ajout $Login → $NomGroupe" -FichierLog $FichierLog
        return
    }

    # Vérifier si le groupe existe
    $groupe = Get-ADGroup -Filter "Name -eq '$NomGroupe'" -ErrorAction SilentlyContinue
    if (-not $groupe) {
        Write-Log -Message "Groupe introuvable : $NomGroupe" -Niveau "WARN" -FichierLog $FichierLog
        return
    }

    try {
        Add-ADGroupMember -Identity $NomGroupe -Members $Login -ErrorAction Stop
        Write-Log -Message "Ajouté $Login → $NomGroupe" -FichierLog $FichierLog
    }
    catch {
        Write-Log -Message "Erreur ajout $Login → $NomGroupe : $($_.Exception.Message)" `
                  -Niveau "WARN" -FichierLog $FichierLog
    }
}

# ============================================
# Programme principal
# ============================================

Clear-Host
Write-Titre "INTÉGRATION AGENTS — CIPHER POL"
Write-Log -Message "=== Démarrage intégration ===" -FichierLog $fichierLog
Write-Log -Message "Fichier source : $FichierCSV" -FichierLog $fichierLog
Write-Log -Message "Mode : $(if ($Simulation) {'SIMULATION'} else {'PRODUCTION'})" `
          -FichierLog $fichierLog

# --- Lecture du CSV ---
try {
    $recrues = Import-Csv -Path $FichierCSV -Encoding UTF8 -ErrorAction Stop
    Write-Log -Message "$($recrues.Count) recrues chargées depuis $FichierCSV" `
              -FichierLog $fichierLog
}
catch {
    Write-Log -Message "Impossible de lire $FichierCSV : $($_.Exception.Message)" `
              -Niveau "ERREUR" -FichierLog $fichierLog
    exit 1
}

# --- Traitement de chaque recrue ---
Write-Titre "CRÉATION DES COMPTES" -Couleur "Yellow"

$resultats = foreach ($recrue in $recrues) {
    $resultat = New-AgentAD `
        -Recrue         $recrue `
        -Domaine        $DomaineDNS `
        -OU             $OUUtilisateurs `
        -SimulationMode $Simulation.IsPresent `
        -FichierLog     $fichierLog

    # Ajouter au groupe de l'unité
    Add-MembreGroupe `
        -Login          $recrue.Login `
        -NomGroupe      "CP-Unite-$($recrue.Unite)" `
        -SimulationMode $Simulation.IsPresent `
        -FichierLog     $fichierLog

    # Ajouter au groupe global des agents actifs
    Add-MembreGroupe `
        -Login          $recrue.Login `
        -NomGroupe      "CP-Agents-Actifs" `
        -SimulationMode $Simulation.IsPresent `
        -FichierLog     $fichierLog

    $resultat
}

# --- Rapport console ---
Write-Titre "RÉSULTATS DE L'INTÉGRATION" -Couleur "Cyan"
$resultats | Format-Table Nom, Login, Unite, Status -AutoSize

# --- Export CSV ---
$rapportPath = Join-Path $DossierSortie "rapport-integration-$date.csv"
$resultats | Export-Csv $rapportPath -NoTypeInformation -Encoding UTF8
Write-Log -Message "Rapport exporté : $rapportPath" -FichierLog $fichierLog

# --- Synthèse finale ---
$crees    = ($resultats | Where-Object Status -in @("CRÉÉ","SIMULÉ")).Count
$existant = ($resultats | Where-Object Status -eq "EXISTANT").Count
$erreurs  = ($resultats | Where-Object Status -eq "ERREUR").Count

Write-Host ""
Write-Host "  Créés/Simulés : $crees"   -ForegroundColor Green
Write-Host "  Déjà existants: $existant" -ForegroundColor Yellow
Write-Host "  Erreurs       : $erreurs"  -ForegroundColor $(if ($erreurs -gt 0) {"Red"} else {"Green"})
Write-Host ""

Write-Log -Message "=== Fin intégration : $crees OK | $existant existants | $erreurs erreurs ===" `
          -FichierLog $fichierLog
Write-Host "  Log : $fichierLog" -ForegroundColor DarkGray
Write-Host "  Rapport : $rapportPath`n" -ForegroundColor DarkGray
