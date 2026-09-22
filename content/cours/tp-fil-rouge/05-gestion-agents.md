---
title: "TP5 - Le Système d'Administration des Agents"
parcours-tssr: true
parcours-pro: true
---

# TP5 - Le Système d'Administration des Agents 🕵️

## Choisissez votre mode

Les deux modes utilisent le même CSV et le même rapport. **Simulation par défaut** : la présence du module AD ne doit jamais suffire à autoriser une écriture.

### Débutant — indices progressifs

- Testez d'abord `Import-Csv` sur cinq recrues fictives ; vérifiez colonnes et valeurs obligatoires avant la boucle.
- Séparez lecture, création/simulation, ajout aux groupes et rapport ; un `try/catch` **par recrue** évite qu'un échec arrête les suivantes.
- `-Simulation` est explicite mais facultatif dans la solution sécurisée : un lancement sans `-Executer` ne touche pas à AD.
- Vérifiez le CSV du rapport après `Import-Csv`, puis le journal ; ne journalisez jamais un mot de passe.

### Avancé — défi autonome

- Sur un domaine de **laboratoire autorisé seulement**, exigez `-Executer`, une OU de labo et une prévisualisation `-WhatIf` avant les écritures.
- Rendez le traitement relançable : détectez logins et appartenances déjà présents, puis classez `Créé`, `Ignoré`, `Erreur` sans doublons.
- Les secrets doivent venir d'une source cryptographique ; un échec d'utilisateur interdit l'ajout aux groupes pour cet utilisateur.

**Correction formateur :** [[tp-fil-rouge/05-gestion-agents-correction|énoncé et solution réunis]].

## Contexte

Rob Lucci est satisfait des progrès.
Cipher Pol vient de recruter une nouvelle vague d'agents et doit les intégrer rapidement :

- Créer les comptes dans Active Directory
- Les affecter aux bons groupes
- Générer un rapport de l'opération

Votre mission : écrire un script **professionnel** qui automatise toute cette intégration,
en utilisant les paramètres, le module CipherPol, et la gestion d'erreurs.

> _"Un agent efficace ne fait pas les choses deux fois. Il automatise."_ — Rob Lucci

---

> **Note** : Ce TP s'exécute en **simulation par défaut**, même si le module AD est disponible.
> Un vrai domaine de **laboratoire autorisé** requiert `-Executer` et les paramètres explicites du domaine/des OU. `-WhatIf` garde la simulation.

---

## Ce que vous allez construire

Un script `Invoke-IntegrationAgents.ps1` qui :

1. Lit un fichier CSV de nouvelles recrues
2. Crée les comptes AD (ou simule)
3. Les ajoute aux groupes appropriés
4. Génère un rapport de synthèse
5. Logue toutes les opérations via le module CipherPol

---

## Étape 1 : Le fichier CSV des recrues (5 min)

Créez `C:\Temp\CipherPol\recrues.csv` :

```powershell
$recruesCSV = @"
Prenom,Nom,Login,Departement,Title,Unite
Jewelry,Bonney,jbonney,CP-0,Agente,CP-0
Trafalgar,Law,tlaw,CP-0,Chirurgien,CP-0
Eustass,Kidd,ekidd,CP-9,Agent,CP-9
Killer,Killer,killer,CP-9,Agent,CP-9
Basil,Hawkins,bhawkins,CP-0,Stratège,CP-0
"@

$dossier = "C:\Temp\CipherPol"
New-Item -Path $dossier -ItemType Directory -Force | Out-Null
$recruesCSV | Out-File "$dossier\recrues.csv" -Encoding UTF8

Write-Host "Fichier recrues.csv créé." -ForegroundColor Green
Import-Csv "$dossier\recrues.csv" | Format-Table -AutoSize
```

---

## Étape 2 : La structure du script (10 min)

Créez `Invoke-IntegrationAgents.ps1` avec ces paramètres :

```powershell
[CmdletBinding(SupportsShouldProcess)]
param(
    [Parameter(Mandatory)]
    [string]$FichierCSV,

    [string]$DomaineDNS     = "cipher-pol.org",
    [string]$OUUtilisateurs = "OU=Agents,DC=cipher-pol,DC=org",
    [string]$OUGroupes      = "OU=Groupes,DC=cipher-pol,DC=org",
    [string]$DossierSortie  = "C:\Temp\CipherPol",

    [switch]$Simulation,
    [switch]$Executer
)
if ($Simulation -and $Executer) { throw 'Choisissez un seul mode.' }
if ($Executer -and -not $WhatIfPreference) {
    foreach ($nom in 'DomaineDNS','OUUtilisateurs','OUGroupes') {
        if (-not $PSBoundParameters.ContainsKey($nom)) {
            throw "Écriture refusée : fournissez explicitement -$nom pour le laboratoire."
        }
    }
}
$Simulation = (-not $Executer.IsPresent) -or [bool]$WhatIfPreference
```

**Paramètres clés** : sans `-Executer`, le script simule ; `-Simulation` l'indique explicitement. `-Executer` est réservé au domaine de laboratoire autorisé, après un passage `-WhatIf`. Les deux switches ne doivent pas être employés ensemble.

---

## Étape 3 : Import du module et initialisation (10 min)

```powershell
# Import du module CipherPol
# Adaptez le chemin vers VOTRE module du TP4
$modulePath = "C:\Scripts\CipherPol.psm1"
if (Test-Path $modulePath) {
    Import-Module $modulePath -Force
} else {
    # Fallback : définir Write-Log et Write-Titre localement si module introuvable
    function Write-Log {
        param([string]$Message, [string]$Niveau = "INFO", [string]$FichierLog)
        $date  = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
        $ligne = "[$date] [$Niveau] $Message"
        if ($FichierLog) { Add-Content -Path $FichierLog -Value $ligne }
        $couleur = switch ($Niveau) {
            "ERREUR" { "Red" } "WARN" { "Yellow" } default { "White" }
        }
        Write-Host $ligne -ForegroundColor $couleur
    }
    function Write-Titre {
        param([string]$Texte, [string]$Couleur = "Cyan")
        $ligne = "=" * ($Texte.Length + 6)
        Write-Host "`n$ligne`n   $Texte`n$ligne" -ForegroundColor $Couleur
    }
}

# Initialisation du log
$date       = Get-Date -Format "yyyy-MM-dd"
$dossierLog = $DossierSortie
$fichierLog = Join-Path $dossierLog "integration-$date.log"
New-Item -Path $dossierLog -ItemType Directory -Force | Out-Null
```

<details>
<summary>💡 Pourquoi le chemin relatif avec $PSScriptRoot ?</summary>

`$PSScriptRoot` contient le dossier du script en cours d'exécution.
Cela permet de construire des chemins relatifs robustes — le script
fonctionne quel que soit l'endroit depuis lequel vous le lancez.

</details>

---

## Étape 4 : Vérifier le module AD (5 min)

```powershell
# Vérifier si le module AD est disponible
$adDisponible = Get-Module -ListAvailable -Name ActiveDirectory

if (-not $adDisponible) {
    if (-not $Simulation) { throw 'Module ActiveDirectory absent : écriture impossible' }
    Write-Log -Message "Module ActiveDirectory absent — simulation uniquement" `
              -Niveau "WARN" -FichierLog $fichierLog
}

if ($Simulation) {
    Write-Log -Message "Mode SIMULATION activé — aucune modification AD" -FichierLog $fichierLog
    $resultatsSimulation = [System.Collections.Generic.List[PSObject]]::new()
} else {
    Import-Module ActiveDirectory
    Write-Log -Message "Module ActiveDirectory chargé" -FichierLog $fichierLog
}
```

---

## Étape 5 : Lire et valider le CSV (10 min)

```powershell
try {
    $recrues = Import-Csv -Path $FichierCSV -Encoding UTF8 -ErrorAction Stop
    if (@($recrues).Count -eq 0) { throw 'CSV vide : aucune recrue à traiter.' }
    $colonnes = @($recrues[0].PSObject.Properties.Name)
    foreach ($nom in 'Prenom','Nom','Login','Departement','Title','Unite') {
        if ($colonnes -notcontains $nom) { throw "Colonne obligatoire absente : $nom" }
    }
    foreach ($recrue in $recrues) {
        foreach ($nom in 'Prenom','Nom','Login','Unite') {
            if ([string]::IsNullOrWhiteSpace($recrue.$nom)) {
                throw "Valeur obligatoire vide ($nom), ligne $($recrue.Login)"
            }
        }
    }
    if (@($recrues | Group-Object Login | Where-Object Count -gt 1).Count -gt 0) {
        throw 'Login présent plusieurs fois dans le CSV.'
    }
    Write-Log -Message "$($recrues.Count) recrues chargées depuis $FichierCSV" `
              -FichierLog $fichierLog
}
catch {
    Write-Log -Message "Impossible de lire $FichierCSV : $($_.Exception.Message)" `
              -Niveau "ERREUR" -FichierLog $fichierLog
    exit 1
}
```

---

## Étape 6 : Créer les utilisateurs (20 min)

Écrivez la fonction `New-AgentAD` :

```powershell
function New-AgentAD {
    param(
        [PSCustomObject]$Recrue,
        [string]$Domaine,
        [string]$OU,
        [bool]$SimulationMode,
        [string]$FichierLog
    )

    $nomComplet = "$($Recrue.Prenom) $($Recrue.Nom)"

    if ($SimulationMode) {
        Write-Log -Message "[SIM] Création : $nomComplet ($($Recrue.Login))" `
                  -FichierLog $FichierLog
        return [PSCustomObject]@{
            Nom    = $nomComplet
            Login  = $Recrue.Login
            Unite  = $Recrue.Unite
            Status = "SIMULÉ"
        }
    }

    try {
        New-ADUser `
            -Name              $nomComplet `
            -SamAccountName    $Recrue.Login `
            -UserPrincipalName "$($Recrue.Login)@$Domaine" `
            -GivenName         $Recrue.Prenom `
            -Surname           $Recrue.Nom `
            -Department        $Recrue.Departement `
            -Title             $Recrue.Title `
            -Path              $OU `
            -AccountPassword   (Read-Host "Secret initial UNIQUE pour $($Recrue.Login)" -AsSecureString) `
            -Enabled           $true `
            -ChangePasswordAtLogon $true `
            -ErrorAction       Stop

        Write-Log -Message "Créé : $nomComplet ($($Recrue.Login))" `
                  -FichierLog $FichierLog

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
            Erreur = $_.Exception.Message
        }
    }
}
```

---

## Étape 7 : Ajouter aux groupes (10 min)

```powershell
function Add-MembreGroupe {
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

    try {
        Add-ADGroupMember -Identity $NomGroupe -Members $Login -ErrorAction Stop
        Write-Log -Message "Ajouté $Login → $NomGroupe" -FichierLog $FichierLog
    }
    catch {
        Write-Log -Message "Erreur ajout $Login → $NomGroupe : $($_.Exception.Message)" `
                  -Niveau "WARN" -FichierLog $FichierLog
    }
}
```

---

## Étape 8 : Assemblage et rapport final (15 min)

```powershell
# En-tête
Write-Titre "INTÉGRATION AGENTS - CIPHER POL"
Write-Log -Message "=== Démarrage intégration ===" -FichierLog $fichierLog

# Traitement de chaque recrue
$resultats = foreach ($recrue in $recrues) {
    $resultat = New-AgentAD -Recrue $recrue `
                            -Domaine $DomaineDNS `
                            -OU $OUUtilisateurs `
                            -SimulationMode $Simulation `
                            -FichierLog $fichierLog

    if ($resultat.Status -eq 'ERREUR') {
        # Ne pas rattacher aux groupes un compte qui n'a pas été créé.
        $resultat
        continue
    }

    # Ajouter au groupe de l'unité
    $nomGroupe = "CP-Unite-$($recrue.Unite)"
    Add-MembreGroupe -Login $recrue.Login `
                     -NomGroupe $nomGroupe `
                     -SimulationMode $Simulation `
                     -FichierLog $fichierLog

    # Ajouter au groupe global
    Add-MembreGroupe -Login $recrue.Login `
                     -NomGroupe "CP-Agents-Actifs" `
                     -SimulationMode $Simulation `
                     -FichierLog $fichierLog

    $resultat
}

# Rapport console
Write-Titre "RÉSULTATS DE L'INTÉGRATION" -Couleur "Yellow"
$resultats | Format-Table Nom, Login, Unite, Status -AutoSize

# Export CSV du rapport
$rapportPath = Join-Path $DossierSortie "rapport-integration-$date.csv"
$resultats | Export-Csv $rapportPath -NoTypeInformation -Encoding UTF8
Write-Log -Message "Rapport exporté : $rapportPath" -FichierLog $fichierLog

# Résumé
$succes  = @($resultats | Where-Object { $_.Status -in @('CRÉÉ','SIMULÉ') }).Count
$erreurs = @($resultats | Where-Object { $_.Status -eq 'ERREUR' }).Count
Write-Host "`n  Créés/Simulés : $succes" -ForegroundColor Green
Write-Host "  Erreurs       : $erreurs" -ForegroundColor $(if ($erreurs -gt 0) {"Red"} else {"Green"})
Write-Log -Message "=== Fin intégration : $succes OK, $erreurs erreurs ===" -FichierLog $fichierLog
```

---

## Étape 9 : Tester le script (10 min)

```powershell
# Test en mode simulation (sûr, sans modification AD)
.\Invoke-IntegrationAgents.ps1 -FichierCSV "C:\Temp\CipherPol\recrues.csv" -Simulation

# Si vous avez un domaine de laboratoire autorisé : prévisualisez d'abord.
.\Invoke-IntegrationAgents.ps1 `
    -FichierCSV      "C:\Temp\CipherPol\recrues.csv" `
    -DomaineDNS      "mondomaine.local" `
    -OUUtilisateurs  "OU=Formation-Agents,DC=mondomaine,DC=local" `
    -OUGroupes       "OU=Formation-Groupes,DC=mondomaine,DC=local" `
    -DossierSortie   "C:\Temp\CipherPol" -Executer -WhatIf

# Retirez -WhatIf seulement après vérification de l'OU, des recrues et du rapport simulé.
```

---

## Validation

### Checklist

- [ ] Le script accepte `-Simulation` pour fonctionner sans AD
- [ ] `New-AgentAD` retourne un objet avec le statut de l'opération
- [ ] Les erreurs sont loguées sans arrêter le script
- [ ] Un rapport CSV est généré dans `$DossierSortie`
- [ ] Le module CipherPol est utilisé pour `Write-Log` et `Write-Titre`

---

## Bonus 🌟

### Bonus 1 : Vérification avant création

Avant de créer un compte, vérifiez s'il existe déjà (via `Get-ADUser`) et loguez un `WARN` si c'est le cas.

### Bonus 2 : Rapport HTML

Utilisez `ConvertTo-Html` pour générer un rapport `.html` coloré à la place du CSV.

### Bonus 3 : Mode suppression

Ajoutez un paramètre `-Supprimer` qui, au lieu de créer, désactive tous les comptes du CSV.

---

> [!success] Ce que vous avez appris
>
> - Orchestrer une intégration complète avec PowerShell
> - Combiner lecture CSV, création AD, ajout aux groupes et logging
> - Utiliser `$PSScriptRoot` pour des chemins relatifs fiables
> - Implémenter un mode simulation pour tester sans risque
> - Générer un rapport d'exécution exportable

La correction formateur réunit l'énoncé et le script de référence ; le lien est en haut de cette mission.
