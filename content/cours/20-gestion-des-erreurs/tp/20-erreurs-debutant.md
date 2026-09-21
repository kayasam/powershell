---
title: "Exercice 20 - Le Courage d'Usopp - Débutant"
publier: true
parcours-tssr: true
parcours-pro: false
---

# Exercice 20 - Le Courage d'Usopp 🎯 — Débutant

> Chapitre associé : [[20-gestion-des-erreurs/20-gestion-des-erreurs]]

## Contexte

Usopp a peur de tout — c'est pour ça qu'il prévoit toujours le pire. Vos scripts
devraient lui ressembler.

> _"Le courage, ce n'est pas l'absence de peur. C'est agir malgré elle."_ — Usopp

**Durée : 35 min**

---

## Partie A : Sans protection (5 min)

```powershell
# Lire un fichier inexistant
Get-Content "C:\inexistant.txt"

# Supprimer un dossier inexistant
Remove-Item "C:\dossier-fantome" -Recurse
```

**A1.** Que se passe-t-il à l'écran ?

**A2.** Le script s'arrête-t-il, ou continue-t-il ?

---

## Partie B : Attraper les erreurs (15 min)

```powershell
try {
    Get-Content "C:\inexistant.txt" -ErrorAction Stop
}
catch {
    Write-Host "Erreur attrapee : $($_.Exception.Message)" -ForegroundColor Red
}
finally {
    Write-Host "Fin de la tentative"
}
```

**B1.** Le bloc `catch` s'est-il déclenché ?

**B2.** Retirez `-ErrorAction Stop` et relancez. Le `catch` part-il encore ?
Pourquoi ?

**B3.** Le bloc `finally` s'exécute-t-il quand tout va bien ? Et quand ça échoue ?

**B4.** Dans le `catch`, affichez aussi le **type** de l'exception et la **ligne**
où elle est survenue.

> 💡 **Indice** : `$_.Exception.GetType().Name` et `$_.InvocationInfo.ScriptLineNumber`.

---

## Partie C : Les trois patterns de survie (15 min)

### Pattern 1 — Tester avant d'agir

```powershell
function Get-ContenuFichierSecurise {
    param($Chemin)

    if (-not (Test-Path $Chemin)) {
        Write-Host "Fichier introuvable : $Chemin" -ForegroundColor Yellow
        return $null
    }

    return Get-Content $Chemin
}

Get-ContenuFichierSecurise "C:\inexistant.txt"
Get-ContenuFichierSecurise "C:\Windows\win.ini"
```

**C1.** Que renvoie la fonction dans chacun des deux cas ?

### Pattern 2 — Valeur de repli

```powershell
function Get-Config {
    param($Chemin)

    try {
        $config = Get-Content $Chemin -ErrorAction Stop | ConvertFrom-Json
        return $config
    }
    catch {
        Write-Host "Config introuvable, valeurs par defaut" -ForegroundColor Yellow
        return [PSCustomObject]@{ SeuilCPU = 80; SeuilRAM = 90; Alertes = $true }
    }
}

$cfg = Get-Config "C:\config-imaginaire.json"
Write-Host "Seuil CPU : $($cfg.SeuilCPU)%"
```

**C2.** Le fichier n'existe pas, et pourtant le script continue. Que renvoie la
fonction ?

**C3.** Quel est l'intérêt d'une valeur de repli plutôt qu'une erreur ?

### Pattern 3 — Journaliser les erreurs

```powershell
function Write-Log {
    param($Message, $Niveau = "INFO")

    $date  = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $ligne = "[$date] [$Niveau] $Message"

    $dossier = "$env:TEMP\Logs"
    if (-not (Test-Path $dossier)) { New-Item -Path $dossier -ItemType Directory | Out-Null }

    Add-Content -Path "$dossier\application.log" -Value $ligne
    Write-Host $ligne -ForegroundColor $(if ($Niveau -eq "ERREUR") { "Red" } else { "White" })
}

try   { Get-Content "C:\inexistant.txt" -ErrorAction Stop }
catch { Write-Log -Message $_.Exception.Message -Niveau "ERREUR" }

Write-Log -Message "Script termine" -Niveau "INFO"
```

**C4.** Vérifiez le contenu du journal. Combien de lignes contient-il ?

---

## Mission finale D : le script indestructible 🌟

**D1.** Écrivez une fonction qui lit un fichier et qui :

1. renvoie son contenu si tout va bien ;
2. affiche un message clair et renvoie `$null` si le fichier est absent ;
3. n'interrompt **jamais** le script appelant ;
4. journalise chaque erreur dans un fichier.

**D2.** Testez-la sur un fichier existant, puis sur un fichier absent. Le script
va-t-il jusqu'au bout dans les deux cas ?

---

## Validation

✅ Vous savez qu'une erreur non gérée affiche du rouge mais ne stoppe pas forcément
✅ Vous utilisez `try / catch / finally`
✅ Vous savez que `-ErrorAction Stop` est **indispensable** pour que `catch` parte
✅ Vous connaissez les trois patterns : tester, replier, journaliser
