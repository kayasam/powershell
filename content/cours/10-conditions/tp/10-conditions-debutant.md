---
title: "Exercice 10 - L'Analyseur d'Intrusion - Débutant"
publier: true
parcours-tssr: true
parcours-pro: false
---

# Exercice 10 - L'Analyseur d'Intrusion 🔐 — Débutant

> Chapitre associé : [[cours/10-conditions/10-conditions]]

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

## Partie C : Analyser une connexion précise (15 min)

On sort **une** connexion de la liste pour l'examiner :

```powershell
# La 2e ligne du tableau (on compte à partir de 0)
$connexion = $logs[1]

$connexion.IP
$connexion.Tentatives
```

Reprenez maintenant votre `if` de la partie A, mais sur cette connexion :

```powershell
if ($connexion.Tentatives -lt 3) {
    Write-Host "Normal" -ForegroundColor Green
} elseif ($connexion.Tentatives -lt 10) {
    Write-Host "Suspect" -ForegroundColor Yellow
} elseif ($connexion.Tentatives -lt 50) {
    Write-Host "Alerte" -ForegroundColor DarkYellow
} else {
    Write-Host "CRITIQUE" -ForegroundColor Red
}
```

**C1.** Quel niveau obtenez-vous pour `$logs[1]` ?

**C2.** Changez l'index (`$logs[0]`, `$logs[3]`…) et relancez. Testez les quatre
niveaux.

**C3.** Affichez un message complet indiquant l'IP **et** le nombre de tentatives.

> 💡 **Indice** : `Write-Host "IP : $($connexion.IP)"` — les `$( )` sont
> nécessaires pour insérer une propriété dans un texte.

---

## Mission finale D : l'alerte intelligente 🌟

**D1.** Écrivez un `if` qui affiche `>>> BLOQUÉ` si la connexion a plus de
100 tentatives **et** vise le port 22 (SSH). Testez-le sur `$logs[3]`.

<details>
<summary>💡 Indice</summary>

```powershell
if ($connexion.Tentatives -gt 100 -and $connexion.Port -eq 22) {
    Write-Host ">>> BLOQUE : $($connexion.IP)" -ForegroundColor Red -BackgroundColor Black
}
```

</details>

**D2.** Affichez le nombre total de connexions CRITIQUES (50 tentatives ou plus).

> 💡 **Indice** : pas besoin de `if` ici — un `Where-Object` suivi de `.Count`
> suffit (chapitre 09).

---

> [!success] Validation
>
> - Vous savez utiliser `if / elseif / else`
> - Vous savez utiliser `switch` et pourquoi il faut `break`
> - Vous connaissez les opérateurs `-lt`, `-ge`, `-eq`, `-and`
> - Vous savez tester les propriétés d'un objet dans une condition
