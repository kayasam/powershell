---
title: "Exercice 10 - L'Analyseur d'Intrusion"
---

# Exercice 10 - L'Analyseur d'Intrusion 🔐

## Contexte

Vous êtes analyste pour la **Cipher Pol**, l'organisation secrète qui protège le Gouvernement Mondial.
Des connexions suspectes sont détectées sur les serveurs. Votre mission : coder un système qui classe automatiquement chaque alerte.

> _"Une seule faille peut tout faire tomber."_ — Rob Lucci

## Partie 1 : Système de niveaux d'alerte (15 min)

Vous recevez des logs avec le nombre de tentatives de connexion ratées.
Écrivez un système qui classe chaque tentative :

| Tentatives | Niveau   |
| ---------- | -------- |
| < 3        | Normal   |
| 3 à 9      | Suspect  |
| 10 à 49    | Alerte   |
| 50 et +    | CRITIQUE |

### Étape 1 : Testez avec une valeur

```powershell
$tentatives = 23

if ($tentatives -lt 3) {
    Write-Host "Normal" -ForegroundColor Green
} elseif ($tentatives -lt 10) {
    Write-Host "Suspect" -ForegroundColor Yellow
} elseif ($tentatives -lt 50) {
    Write-Host "Alerte" -ForegroundColor DarkYellow
} else {
    Write-Host "CRITIQUE" -ForegroundColor Red
}
```

Testez avec différentes valeurs : 1, 5, 23, 99.

### Étape 2 : Convertir en Switch

Même logique, mais avec `switch` :

```powershell
$tentatives = 23

switch ($tentatives) {
    { $_ -lt 3 }  { Write-Host "Normal"   -ForegroundColor Green }
    { $_ -lt 10 } { Write-Host "Suspect"  -ForegroundColor Yellow }
    { $_ -lt 50 } { Write-Host "Alerte"   -ForegroundColor DarkYellow }
    default        { Write-Host "CRITIQUE" -ForegroundColor Red }
}
```

Quelle version vous semble plus lisible ?

## Partie 2 : Analyser un log réel (15 min)

Voici des connexions interceptées. Analysez-les :

```powershell
$logs = @(
    [PSCustomObject]@{ IP="10.0.0.1";   Port=22;   Tentatives=2;  Utilisateur="nami"    }
    [PSCustomObject]@{ IP="10.0.0.15";  Port=3389; Tentatives=47; Utilisateur="admin"   }
    [PSCustomObject]@{ IP="192.168.1.5";Port=80;   Tentatives=1;  Utilisateur="zoro"    }
    [PSCustomObject]@{ IP="172.16.0.99";Port=22;   Tentatives=312;Utilisateur="root"    }
    [PSCustomObject]@{ IP="10.0.0.42";  Port=443;  Tentatives=8;  Utilisateur="sanji"   }
    [PSCustomObject]@{ IP="10.0.1.1";   Port=22;   Tentatives=55; Utilisateur="luffy"   }
)
```

**Mission** : Affichez uniquement les connexions critiques (50 tentatives ou plus) :

```powershell
$logs | Where-Object { $_.Tentatives -ge 50 }
```

**Question** : Quelles IP sont critiques ? Quel utilisateur est le plus suspect ?

## Partie 3 : Le rapport automatique (15 min)

Créez un script qui parcourt tous les logs et affiche un rapport coloré :

```powershell
foreach ($connexion in $logs) {

    $niveau = if ($connexion.Tentatives -lt 3)  { "Normal"   }
         elseif ($connexion.Tentatives -lt 10)  { "Suspect"  }
         elseif ($connexion.Tentatives -lt 50)  { "Alerte"   }
         else                                    { "CRITIQUE" }

    $couleur = switch ($niveau) {
        "Normal"   { "Green"     }
        "Suspect"  { "Yellow"    }
        "Alerte"   { "DarkYellow"}
        "CRITIQUE" { "Red"       }
    }

    Write-Host "[$niveau] $($connexion.IP) - $($connexion.Tentatives) tentatives ($($connexion.Utilisateur))" -ForegroundColor $couleur
}
```

## Mission Bonus : L'alerte intelligente 🌟

Améliorez le rapport pour :

1. Bloquer automatiquement (afficher "BLOQUÉ") toute IP avec plus de 100 tentatives sur le port 22 (SSH)
2. Afficher à la fin le nombre total de connexions CRITIQUES

<details>
<summary>💡 Indice</summary>

```powershell
if ($connexion.Tentatives -gt 100 -and $connexion.Port -eq 22) {
    Write-Host ">>> BLOQUÉ : $($connexion.IP)" -ForegroundColor Red -BackgroundColor Black
}
```

</details>

## Validation

✅ Vous savez utiliser `if / elseif / else`
✅ Vous savez utiliser `switch`
✅ Vous savez combiner conditions avec `-and` et `-or`
✅ Vous savez utiliser `Write-Host` avec des couleurs
