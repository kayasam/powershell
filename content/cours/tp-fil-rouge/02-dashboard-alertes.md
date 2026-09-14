# TP2 - Le Dashboard d'Alerte de la Cipher Pol 🕵️

## Contexte

Vous êtes recruté(e) par **Rob Lucci** dans la **Cipher Pol n°9**.
Votre première mission : automatiser la surveillance des serveurs d'Enies Lobby.

Le script du Jour 1 affichait des données brutes. C'était un début.
Maintenant, il faut qu'il soit **intelligent** : qu'il détecte les anomalies, classe les alertes, et présente un tableau de bord clair.

> _"La perfection ou rien."_ — Rob Lucci

**Ce que vous allez construire :**

- Des fonctions réutilisables
- Un système d'alertes coloré selon la sévérité
- Un tableau de bord complet avec score de santé

---

## Étape 1 : La structure du script (5 min)

Créez un fichier `Watch-CipherPol.ps1` et commencez par :

```powershell
# ============================================
# Watch-CipherPol.ps1
# Dashboard d'alerte - Cipher Pol Enies Lobby
# ============================================

# Seuils d'alerte (modifiables ici)
$SEUIL_CPU_ALERTE    = 70
$SEUIL_CPU_CRITIQUE  = 90
$SEUIL_RAM_ALERTE    = 75
$SEUIL_RAM_CRITIQUE  = 90
$SEUIL_DISQUE_ALERTE = 80
```

---

## Étape 2 : Fonction d'affichage (10 min)

Créez une fonction pour afficher les titres de section.

**Mission** : Écrivez `function Write-Section` qui prend un `$Titre` et l'affiche encadré avec `=`.

**Indice** :

```powershell
function Write-Section {
    param($Titre)
    # Créez une ligne de = de la même longueur que le titre + marges
    # Affichez en Cyan
}
```

**Ce que ça doit afficher** :

```
========================
  SURVEILLANCE CPU
========================
```

<details>
<summary>💡 Solution</summary>

```powershell
function Write-Section {
    param($Titre)
    $ligne = "=" * ($Titre.Length + 6)
    Write-Host "`n$ligne" -ForegroundColor Cyan
    Write-Host "   $Titre" -ForegroundColor Cyan
    Write-Host "$ligne" -ForegroundColor Cyan
}
```

</details>

---

## Étape 3 : Surveillance CPU (20 min)

Créez `function Get-AlerteCPU` qui :

1. Récupère les **5 processus** qui consomment le plus de CPU
2. Pour chaque processus, **classe l'alerte** selon son niveau de CPU :
   - Rouge si `CPU > $SEUIL_CPU_CRITIQUE`
   - Jaune si `CPU > $SEUIL_CPU_ALERTE`
   - Vert sinon
3. **Retourne** le nombre de processus en état critique

**Indices** :

```powershell
function Get-AlerteCPU {

    Write-Section "SURVEILLANCE CPU"

    $critiques = 0

    Get-Process |
        Sort-Object CPU -Descending |
        Select-Object -First 5 |
        ForEach-Object {

            $cpu = [math]::Round($_.CPU, 1)

            # À vous : ajoutez le if/elseif pour les couleurs
            # et incrémentez $critiques si CPU > $SEUIL_CPU_CRITIQUE

            Write-Host "  $($_.Name.PadRight(20)) CPU: $cpu s"
        }

    return $critiques
}
```

<details>
<summary>💡 Solution complète</summary>

```powershell
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
```

</details>

---

## Étape 4 : Surveillance RAM (15 min)

Créez `function Get-AlerteRAM` qui :

1. Récupère les infos mémoire avec `Win32_OperatingSystem`
2. Calcule le **pourcentage de RAM utilisée**
3. Affiche un indicateur visuel coloré selon le seuil
4. Retourne `$true` si la RAM est en état critique

**Indicateur visuel attendu** :

```
  RAM : [##########          ] 48% (7.8 GB / 16 GB)
```

**Indice** :

```powershell
# Créer une barre de progression
$rempli  = [math]::Round($pourcentage / 5)  # sur 20 caractères
$vide    = 20 - $rempli
$barre   = "#" * $rempli + " " * $vide
Write-Host "  RAM : [$barre] $pourcentage%"
```

<details>
<summary>💡 Solution complète</summary>

```powershell
function Get-AlerteRAM {

    Write-Section "SURVEILLANCE RAM"

    $os      = Get-CimInstance Win32_OperatingSystem   # cf. chapitre 12
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
```

</details>

---

## Étape 5 : Surveillance Disque (15 min)

Créez `function Get-AlerteDisque` qui :

1. Récupère **tous les disques fixes** (pas seulement C:)
2. Pour chaque disque, affiche l'espace utilisé en %
3. Alerte en rouge si proche de la saturation

**Indice** :

```powershell
Get-CimInstance Win32_LogicalDisk -Filter "DriveType=3"
```

<details>
<summary>💡 Solution complète</summary>

```powershell
function Get-AlerteDisque {

    Write-Section "SURVEILLANCE DISQUES"

    $disques = Get-CimInstance Win32_LogicalDisk -Filter "DriveType=3"

    foreach ($disque in $disques) {
        $total   = [math]::Round($disque.Size / 1GB, 1)
        $libre   = [math]::Round($disque.FreeSpace / 1GB, 1)
        $utilise = [math]::Round($total - $libre, 1)
        $pct     = [math]::Round((($total - $libre) / $total) * 100)

        $couleur = if ($pct -gt $SEUIL_DISQUE_ALERTE) { "Red" } else { "Green" }

        Write-Host "  $($disque.DeviceID)  $utilise GB / $total GB  ($pct% utilisé)" -ForegroundColor $couleur
    }
}
```

</details>

---

## Étape 6 : Score de santé et assemblage (15 min)

Maintenant, assemblez tout. Le script doit :

1. Afficher un en-tête avec date et heure
2. Appeler chaque fonction de surveillance
3. Calculer un **score de santé** de 0 à 100
4. Afficher le verdict final

**Score de santé** :

- Démarre à 100
- `-20` par processus CPU critique
- `-30` si la RAM est critique
- Affichez : `OPTIMAL`, `DÉGRADÉ` ou `CRITIQUE` selon le score

```powershell
# En-tête
Clear-Host
Write-Host "╔══════════════════════════════════════╗" -ForegroundColor DarkCyan
Write-Host "║   CIPHER POL - DASHBOARD ENIES LOBBY  ║" -ForegroundColor DarkCyan
Write-Host "║   $(Get-Date -Format 'dd/MM/yyyy HH:mm:ss')                  ║" -ForegroundColor DarkCyan
Write-Host "╚══════════════════════════════════════╝" -ForegroundColor DarkCyan

# Appels des fonctions
$cpuCritiques = Get-AlerteCPU
$ramCritique  = Get-AlerteRAM
Get-AlerteDisque

# Score de santé
Write-Section "SCORE DE SANTE"

$score = 100
$score -= ($cpuCritiques * 20)
if ($ramCritique) { $score -= 30 }
$score = [math]::Max(0, $score)  # Ne descend pas sous 0

$verdict = if ($score -ge 80)    { "OPTIMAL"  }
      elseif ($score -ge 50)     { "DEGRADE"  }
      else                       { "CRITIQUE" }

$couleurScore = if ($score -ge 80) { "Green" } elseif ($score -ge 50) { "Yellow" } else { "Red" }

Write-Host "  Score : $score/100 - $verdict" -ForegroundColor $couleurScore
Write-Host ""
```

---

## Validation

### Exécuter le script

```powershell
.\Watch-CipherPol.ps1
```

### Checklist

- [ ] L'en-tête s'affiche avec la date et l'heure
- [ ] Les 5 top processus CPU s'affichent avec les bonnes couleurs
- [ ] La barre RAM s'affiche avec le bon pourcentage
- [ ] Tous les disques s'affichent
- [ ] Le score de santé est calculé et affiché

---

## Bonus : Mode Live (si vous avez du temps) 🌟

Transformez le dashboard en mode **live** qui se rafraîchit toutes les 5 secondes.

```powershell
while ($true) {
    # Mettez tout le code ici
    Start-Sleep -Seconds 5
}
```

---

## Ce que vous avez appris

✅ Structurer un script avec des fonctions
✅ Utiliser des variables globales pour les seuils
✅ Créer des indicateurs visuels avec des couleurs
✅ Calculer des scores à partir de conditions
✅ Récupérer des métriques système réelles

## La solution complète

**Fichier** : `TP2-Solution.ps1`

Ne regardez la solution que si vous êtes vraiment bloqué(e) !
