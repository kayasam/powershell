# TP3 - Le Système d'Archives de la Cipher Pol 🕵️

## Contexte

Rob Lucci n'est pas content.
Les rapports de surveillance du TP2 s'affichaient bien à l'écran — mais à la fermeture du terminal, tout disparaissait.

Votre nouvelle mission : **persister les données**.
Chaque rapport doit être sauvegardé, archivé, et consultable à tout moment.

**Ce que vous allez construire :**

- Une fonction de logging réutilisable
- Un export CSV des données système
- Un système d'archivage automatique par date
- Une gestion robuste des erreurs

> _"Une information perdue est une information inutile."_ — Rob Lucci

---

## Étape 1 : La fonction de logging (15 min)

Première brique : tout ce qui se passe doit être tracé dans un fichier log.

```powershell
# ============================================
# Invoke-ArchivesCipherPol.ps1
# ============================================

$DOSSIER_BASE = "C:\Temp\CipherPol"
$DATE_RAPPORT = Get-Date -Format "yyyy-MM-dd"
$DOSSIER_RAPPORT = "$DOSSIER_BASE\$DATE_RAPPORT"
$FICHIER_LOG     = "$DOSSIER_RAPPORT\rapport.log"
```

**Mission** : Créez la fonction `Write-Log` qui :

1. Crée le dossier `$DOSSIER_RAPPORT` s'il n'existe pas
2. Écrit la ligne `[DATE] [NIVEAU] Message` dans `$FICHIER_LOG`
3. Affiche la même ligne en couleur (vert=INFO, jaune=WARN, rouge=ERREUR)

<details>
<summary>💡 Solution</summary>

```powershell
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
        "ERREUR" { "Red" }
        "WARN"   { "Yellow" }
        default  { "White" }
    }
    Write-Host $ligne -ForegroundColor $couleur
}
```

</details>

---

## Étape 2 : Export CSV des processus (20 min)

Créez `Export-Processus` qui :

1. Récupère les 10 processus qui consomment le plus de mémoire
2. Les exporte en CSV dans `$DOSSIER_RAPPORT\processus.csv`
3. Logue le succès ou l'erreur

**Résultat attendu** : Un fichier `processus.csv` avec les colonnes `Nom`, `Id`, `RAM_MB`, `CPU`.

**Indices** :

- `-NoTypeInformation` pour un CSV propre
- `[math]::Round($_.WorkingSet/1MB, 1)` pour la RAM en MB
- Wrappez dans un `try/catch`

<details>
<summary>💡 Solution</summary>

```powershell
function Export-Processus {

    Write-Log "Début export processus"

    try {
        Get-Process |
            Sort-Object WorkingSet -Descending |
            Select-Object -First 10 `
                @{Name="Nom";    Expression={$_.Name}},
                @{Name="Id";     Expression={$_.Id}},
                @{Name="RAM_MB"; Expression={[math]::Round($_.WorkingSet/1MB, 1)}},
                @{Name="CPU";    Expression={[math]::Round($_.CPU, 1)}} |
            Export-Csv "$DOSSIER_RAPPORT\processus.csv" -NoTypeInformation -Encoding UTF8

        Write-Log "Export processus : OK ($DOSSIER_RAPPORT\processus.csv)"
    }
    catch {
        Write-Log "Export processus : ECHEC - $($_.Exception.Message)" "ERREUR"
    }
}
```

</details>

---

## Étape 3 : Export CSV des services (15 min)

Créez `Export-Services` qui exporte **tous les services** (actifs et arrêtés) dans `services.csv`.

Colonnes : `Nom`, `NomComplet`, `Statut`.

**Challenge** : Ajoutez une colonne `Niveau` :

- `"OK"` si le service tourne
- `"Arrêté"` si le service est arrêté

<details>
<summary>💡 Solution</summary>

```powershell
function Export-Services {

    Write-Log "Début export services"

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
        Write-Log "Export services : ECHEC - $($_.Exception.Message)" "ERREUR"
    }
}
```

</details>

---

## Étape 4 : Rapport JSON de synthèse (15 min)

Créez `Export-Synthese` qui crée un fichier `synthese.json` contenant :

- La date du rapport
- Le nom du serveur (`$env:COMPUTERNAME`)
- Le nombre de processus exportés
- Le nombre de services actifs
- Le nombre de services arrêtés

<details>
<summary>💡 Solution</summary>

```powershell
function Export-Synthese {

    Write-Log "Création de la synthèse"

    try {
        $nbProcessus = (Import-Csv "$DOSSIER_RAPPORT\processus.csv").Count
        $services    = Import-Csv "$DOSSIER_RAPPORT\services.csv"
        $nbActifs    = ($services | Where-Object Statut -eq "Running").Count
        $nbArretes   = ($services | Where-Object Statut -eq "Stopped").Count

        $synthese = @{
            Date           = $DATE_RAPPORT
            Serveur        = $env:COMPUTERNAME
            NbProcessus    = $nbProcessus
            ServicesActifs = $nbActifs
            ServicesArretes= $nbArretes
            GenerePar      = "Cipher Pol - Invoke-ArchivesCipherPol"
        }

        $synthese | ConvertTo-Json | Out-File "$DOSSIER_RAPPORT\synthese.json" -Encoding UTF8
        Write-Log "Synthèse créée : OK"
    }
    catch {
        Write-Log "Synthèse : ECHEC - $($_.Exception.Message)" "ERREUR"
    }
}
```

</details>

---

## Étape 5 : Archivage et assemblage (10 min)

Assemblez tout le script. À la fin, affichez un résumé de ce qui a été produit :

```powershell
# En-tête
Clear-Host
Write-Host "╔══════════════════════════════════════╗" -ForegroundColor DarkCyan
Write-Host "║   CIPHER POL - ARCHIVAGE QUOTIDIEN   ║" -ForegroundColor DarkCyan
Write-Host "║   $DATE_RAPPORT                            ║" -ForegroundColor DarkCyan
Write-Host "╚══════════════════════════════════════╝" -ForegroundColor DarkCyan

Write-Log "=== Démarrage archivage ==="

# Appels des fonctions
Export-Processus
Export-Services
Export-Synthese

# Résumé
Write-Log "=== Archivage terminé ==="
Write-Host "`nFichiers créés :" -ForegroundColor Cyan
Get-ChildItem $DOSSIER_RAPPORT | Format-Table Name, Length, LastWriteTime -AutoSize
```

---

## Validation

### Checklist

- [ ] Le dossier `C:\Temp\CipherPol\YYYY-MM-DD\` est créé
- [ ] `rapport.log` contient tous les événements
- [ ] `processus.csv` contient les 10 top processus
- [ ] `services.csv` contient tous les services avec leur niveau
- [ ] `synthese.json` est valide (vérifiez avec `Get-Content | ConvertFrom-Json`)
- [ ] Le script ne plante pas même si un export échoue

---

## Bonus 🌟

### Bonus 1 : Archivage des anciens rapports

Si un rapport du même jour existe déjà, déplacez-le dans un sous-dossier `Historique/`.

### Bonus 2 : Consulter un rapport passé

Créez une fonction `Get-RapportDate` qui prend une date en paramètre et affiche la synthèse JSON de ce jour-là.

### Bonus 3 : Alerte par seuil

Au moment de la synthèse, si plus de 50% des services sont arrêtés, loguez une alerte `WARN`.

---

## Ce que vous avez appris

- ✅ Créer une arborescence de dossiers automatiquement
- ✅ Écrire dans des fichiers log avec `Add-Content`
- ✅ Exporter des données structurées en CSV et JSON
- ✅ Protéger chaque opération avec `try/catch`
- ✅ Assembler des fonctions en un script cohérent

## Pour la suite — Jour 4

Vous apprendrez à interroger **Active Directory** et à gérer les **utilisateurs et groupes** directement depuis PowerShell.

**La solution complète est dans :** `TP3-Solution.ps1`
