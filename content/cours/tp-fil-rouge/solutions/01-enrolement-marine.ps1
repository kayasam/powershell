# ============================================
# Badge-Marine.ps1
# Solution TP1 - L'Enrôlement à la Marine
# Formation PowerShell - Jour 1
# ============================================

# === ÉTAPE 1 : Fiche d'identité ===

# 1a. Informations de base
$nom        = "Monkey D. Garp"
$grade      = "Matelot"
$age        = 25
$division   = 3
$devilFruit = $false

# 1b. Vérifications
$nom.GetType()         # String
$age.GetType()         # Int32
$devilFruit.GetType()  # Boolean

# 1c. Calculs de solde
$soldeBase  = 50000
$bonusAge   = ($age - 18) * 2000          # 7 ans * 2000 = 14 000
$bonusFruit = if ($devilFruit) { 10000 } else { 0 }
$soldeTotal = $soldeBase + $bonusAge + $bonusFruit

Write-Host "Solde mensuelle de $nom : $soldeTotal Berrys"

# 1d. Manipulation du nom
$nom.ToUpper()                  # MONKEY D. GARP
$nom.Length                     # 14
$nom.Contains("D.")            # True
$gradePromu = $grade.Replace("Matelot", "Sergent")


# === ÉTAPE 2 : Test de connaissances ===

# Q1. Commandes avec le verbe Set
(Get-Command -Verb Set).Count

# Q2. Alias de Get-ChildItem
Get-Alias -Definition Get-ChildItem    # dir, ls, gci

# Q3. Type de Get-Date
(Get-Date).GetType()                    # System.DateTime

# Q4. Commande pour arrêter un processus
Get-Command -Verb Stop -Noun Process   # Stop-Process

# Q5. Exemples de Get-Process
Get-Help Get-Process -Examples


# === ÉTAPE 3 : Registre de l'escouade ===

# 3a. Liste des membres
$escouade = @("Luffy", "Zoro", "Nami", "Usopp", "Sanji")

$escouade[0]      # Luffy (chef)
$escouade[-1]     # Sanji (dernier)
$escouade.Count   # 5

# 3b. Recrutement
$escouade += "Chopper"
$escouade += "Robin"
Write-Host "Membres : $($escouade.Count)"   # 7

# 3c. Fiche du chef
$chef = @{
    Nom            = $escouade[0]
    Grade          = "Capitaine"
    Specialite     = "Combat"
    AnnéesService  = 12
    Actif          = $true
}

Write-Host "$($chef.Nom) - $($chef.Grade)"
$chef.Grade    = "Commandant"
$chef.Medailles = 3


# === ÉTAPE 4 : Le Badge Officiel ===

$largeur = 34
$cadre   = "=" * $largeur
$ligne   = "-" * $largeur

Write-Host ""
Write-Host $cadre                           -ForegroundColor Blue
Write-Host "     MARINE - QG ENROLMENT"     -ForegroundColor Blue
Write-Host $cadre                           -ForegroundColor Blue
Write-Host "Nom      : $nom"               -ForegroundColor White
Write-Host "Grade    : $grade"             -ForegroundColor White
Write-Host "Division : $division"          -ForegroundColor White
Write-Host "Solde    : $soldeTotal Berrys/mois" -ForegroundColor Yellow
Write-Host $ligne                           -ForegroundColor Blue
Write-Host "Poste    : $env:COMPUTERNAME"  -ForegroundColor Cyan
Write-Host "Date     : $(Get-Date -Format 'dd/MM/yyyy HH:mm')" -ForegroundColor Cyan
Write-Host $cadre                           -ForegroundColor Blue
Write-Host ""
