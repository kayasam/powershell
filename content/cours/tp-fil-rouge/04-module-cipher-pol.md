---
title: "TP4 - Le Module Officiel de la Cipher Pol"
parcours-tssr: false
parcours-pro: true
---

# TP4 - Le Module Officiel de la Cipher Pol 🕵️

## Choisissez votre mode

Le module et le script principal sont communs aux deux modes ; choisissez **un** niveau.

### Débutant — indices progressifs

- Commencez par un fichier `CipherPol.psm1` contenant une fonction, puis testez `Import-Module <chemin> -Force` avant d'ajouter les autres.
- `Export-ModuleMember -Function ...` déclare les fonctions publiques ; `Get-Command -Module CipherPol` vérifie les exports.
- Pour le script principal : `[ValidateSet(...)]` limite un mode, `[switch]` active un export optionnel, `Get-Help` lit l'aide commentée.
- La tâche planifiée est un **bonus** : préparer action/déclencheur ne l'enregistre pas.

### Avancé — défi autonome

- Gardez les fonctions du module indépendantes des variables globales du script principal ; prouvez leur usage depuis une nouvelle session.
- Retournez des objets pour les métriques et le score ; réservez `Write-Host` à la présentation.
- Testez les paramètres valides/invalides et le rechargement du module ; planifiez seulement sur un Windows de laboratoire autorisé, avec nettoyage ciblé.

**Correction formateur :** [[tp-fil-rouge/04-module-cipher-pol-correction|énoncé et solution réunis]].

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

> [!success] Ce que vous avez appris
>
> - Créer un module `.psm1` avec des fonctions documentées
> - Utiliser `CmdletBinding`, `Mandatory`, `ValidateSet`, `ValidateRange`
> - Structurer un script principal qui importe un module
> - Automatiser avec `Register-ScheduledTask`

## Pour la suite — Mission 5

Dernier jour : **Active Directory**.
Vous apprendrez à gérer les utilisateurs, groupes et permissions directement depuis PowerShell.

La correction formateur réunit l'énoncé, le module et le script de référence ; le lien est en haut de cette mission.
