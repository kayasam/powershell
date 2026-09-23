---
title: "TP2 - Le Dashboard d'Alerte de la Cipher Pol"
parcours-tssr: true
parcours-pro: true
---

# TP2 - Le Dashboard d'Alerte de la Cipher Pol 🕵️

## Choisissez votre mode

Le même dashboard est à construire dans les deux modes ; choisissez **un** niveau.

### Débutant — indices progressifs

- Découpez le script : une fonction d'affichage, puis une fonction ou section par métrique CPU, RAM et disque.
- `Get-CimInstance Win32_Processor` aide pour le CPU ; `Win32_OperatingSystem` pour la RAM ; `Win32_LogicalDisk -Filter "DeviceID='C:'"` pour le disque.
- Vérifiez les **unités** avant de diviser : mémoire OS en Ko, disque en octets. Calculez le score à partir de variables intermédiaires, pas d'une très longue condition.
- Testez d'abord chaque indicateur séparément ; assemblez-les seulement quand leurs valeurs sont cohérentes.

### Avancé — défi autonome

- Ne recopiez pas les blocs de solution de l'énoncé : créez des fonctions qui **renvoient des objets** de métriques, puis une seule fonction de verdict.
- Rendez les seuils paramétrables et testez le verdict avec trois jeux de données simulées, sans dépendre du poste.
- Le bonus live doit avoir un arrêt contrôlé ; évitez une boucle infinie sans délai ni sortie.

**Correction formateur :** [[cours/tp-fil-rouge/02-dashboard-alertes-correction|énoncé et solution réunis]].

## Contexte

Vous êtes recruté(e) par **Rob Lucci** dans la **Cipher Pol n°9**.
Votre première mission : automatiser la surveillance des serveurs d'Enies Lobby.

Le script de la Mission 1 affichait des données brutes. C'était un début.
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

> [!success] Ce que vous avez appris
>
> - Structurer un script avec des fonctions
> - Utiliser des variables globales pour les seuils
> - Créer des indicateurs visuels avec des couleurs
> - Calculer des scores à partir de conditions
> - Récupérer des métriques système réelles

La correction formateur réunit l'énoncé et le script de référence ; le lien est en haut de cette mission.
