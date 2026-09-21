---
title: "Exercice 10 - L'Analyseur d'Intrusion - Débutant"
publier: true
parcours-tssr: true
parcours-pro: false
---

# Exercice 10 - L'Analyseur d'Intrusion 🔐 — Débutant

> Chapitre associé : [[10-conditions/10-conditions]]

## Contexte

Vous êtes analyste pour la **Cipher Pol**. Des connexions suspectes sont détectées
sur les serveurs. Votre mission : coder un système qui classe automatiquement
chaque alerte.

> _"Une seule faille peut tout faire tomber."_ — Rob Lucci

**Durée : 45 min**

## Objectif

Écrire une décision à plusieurs branches, choisir entre `if` et `switch`, et
combiner des conditions.

---

## Partie A : Système de niveaux d'alerte (15 min)

Vous recevez des logs avec le nombre de tentatives de connexion ratées.

| Tentatives | Niveau   |
| ---------- | -------- |
| moins de 3 | Normal   |
| 3 à 9      | Suspect  |
| 10 à 49    | Alerte   |
| 50 et plus | CRITIQUE |

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

**A1.** Testez avec 1, 5, 23 puis 99. Obtenez-vous les quatre niveaux ?

**A2.** Pourquoi l'ordre des `elseif` est-il important ? Que se passerait-il si
vous testiez `-lt 50` en premier ?

Même logique en `switch` :

```powershell
switch ($tentatives) {
    { $_ -lt 3 }  { Write-Host "Normal"   -ForegroundColor Green;      break }
    { $_ -lt 10 } { Write-Host "Suspect"  -ForegroundColor Yellow;     break }
    { $_ -lt 50 } { Write-Host "Alerte"   -ForegroundColor DarkYellow; break }
    default       { Write-Host "CRITIQUE" -ForegroundColor Red }
}
```

**A3.** Enlevez les `break` et testez avec `$tentatives = 2`. Que se passe-t-il ?

> 💡 **Indice** : contrairement au `if`, le `switch` n'arrête **pas** au premier
> cas trouvé. Il teste toutes les clauses.

---

## Partie B : Analyser un log réel (15 min)

```powershell
$logs = @(
    [PSCustomObject]@{ IP="10.0.0.1";    Port=22;   Tentatives=2;   Utilisateur="nami"  }
    [PSCustomObject]@{ IP="10.0.0.15";   Port=3389; Tentatives=47;  Utilisateur="admin" }
    [PSCustomObject]@{ IP="192.168.1.5"; Port=80;   Tentatives=1;   Utilisateur="zoro"  }
    [PSCustomObject]@{ IP="172.16.0.99"; Port=22;   Tentatives=312; Utilisateur="root"  }
    [PSCustomObject]@{ IP="10.0.0.42";   Port=443;  Tentatives=8;   Utilisateur="sanji" }
    [PSCustomObject]@{ IP="10.0.1.1";    Port=22;   Tentatives=55;  Utilisateur="luffy" }
)

$logs | Where-Object { $_.Tentatives -ge 50 }
```

**B1.** Quelles IP sont critiques ?

**B2.** Quel utilisateur est le plus suspect ?

**B3.** Affichez les connexions sur le port 22 **et** avec plus de 10 tentatives.

> 💡 **Indice** : l'opérateur « et » s'écrit `-and`.

---

## Partie C : Le rapport automatique (15 min)

```powershell
foreach ($connexion in $logs) {

    $niveau = if     ($connexion.Tentatives -lt 3)  { "Normal"   }
              elseif ($connexion.Tentatives -lt 10) { "Suspect"  }
              elseif ($connexion.Tentatives -lt 50) { "Alerte"   }
              else                                  { "CRITIQUE" }

    $couleur = switch ($niveau) {
        "Normal"   { "Green"      }
        "Suspect"  { "Yellow"     }
        "Alerte"   { "DarkYellow" }
        "CRITIQUE" { "Red"        }
    }

    Write-Host "[$niveau] $($connexion.IP) - $($connexion.Tentatives) tentatives ($($connexion.Utilisateur))" -ForegroundColor $couleur
}
```

**C1.** Lancez ce script. Combien de lignes obtenez-vous ?

**C2.** Remarquez la ligne `$niveau = if (...)`. Que fait-elle exactement ?

> 💡 **Indice** : en PowerShell, un `if` **renvoie une valeur** — on peut donc
> l'affecter directement à une variable.

---

## Mission finale D : l'alerte intelligente 🌟

**D1.** Améliorez le rapport pour afficher `>>> BLOQUÉ` pour toute IP avec plus
de 100 tentatives **sur le port 22** (SSH).

**D2.** Affichez à la fin le nombre total de connexions CRITIQUES.

<details>
<summary>💡 Indice</summary>

```powershell
if ($connexion.Tentatives -gt 100 -and $connexion.Port -eq 22) {
    Write-Host ">>> BLOQUE : $($connexion.IP)" -ForegroundColor Red -BackgroundColor Black
}
```

</details>

---

## Validation

✅ Vous savez utiliser `if / elseif / else`
✅ Vous savez utiliser `switch` et pourquoi il faut `break`
✅ Vous connaissez les opérateurs `-lt`, `-ge`, `-eq`, `-and`
✅ Vous savez qu'un `if` renvoie une valeur affectable
