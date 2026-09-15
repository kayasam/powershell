---
title: "Exercice 11 - Le Scanner de la Flotte"
parcours-tssr: true
parcours-pro: true
---

# Exercice 11 - Le Scanner de la Flotte 🛸

**Durée : 45 min**

## Contexte

Vous êtes dans l'équipe de **Nami**, responsable des systèmes de navigation du Thousand Sunny.
La flotte des Chapeaux de Paille possède plusieurs îles-bases dans le Nouveau Monde. Chaque base a des serveurs à surveiller.
Votre mission : automatiser les vérifications avec des boucles.

> _"Même les meilleurs pirates ont besoin de bons outils."_ — Nami

## Partie 1 : Boucle de démarrage (10 min)

Le protocole de démarrage affiche un compte à rebours avant le lancement.

### Exercice 1a : Compte à rebours

```powershell
# Affichez : "Démarrage dans 5...", puis 4, 3, 2, 1, "GO !"

for ($i = 5; $i -ge 1; $i--) {
    Write-Host "Démarrage dans $i..."
    Start-Sleep -Milliseconds 300  # Pause pour l'effet !
}
Write-Host "GO !" -ForegroundColor Green
```

### Exercice 1b : La table de multiplication de Zoro

Zoro s'entraîne et vous demande d'afficher la table de multiplication de 7.

```powershell
for ($i = 1; $i -le 10; $i++) {
    Write-Host "7 x $i = $(7 * $i)"
}
```

## Partie 2 : Parcourir les bases de la flotte (15 min)

Voici les bases de la flotte :

```powershell
$bases = @(
    [PSCustomObject]@{ Nom="Dressrosa";   IP="10.0.1.1";  Actif=$true;  Stockage=85 }
    [PSCustomObject]@{ Nom="Zou";         IP="10.0.1.2";  Actif=$true;  Stockage=42 }
    [PSCustomObject]@{ Nom="Whole Cake";  IP="10.0.1.3";  Actif=$false; Stockage=0  }
    [PSCustomObject]@{ Nom="Wano";        IP="10.0.1.4";  Actif=$true;  Stockage=93 }
    [PSCustomObject]@{ Nom="Egghead";     IP="10.0.1.5";  Actif=$true;  Stockage=17 }
    [PSCustomObject]@{ Nom="Elbaf";       IP="10.0.1.6";  Actif=$false; Stockage=0  }
)
```

### Exercice 2a : Rapport de statut

Parcourez chaque base et affichez son statut :

```powershell
foreach ($base in $bases) {
    if ($base.Actif) {
        Write-Host "[$($base.Nom)] En ligne" -ForegroundColor Green
    } else {
        Write-Host "[$($base.Nom)] Hors ligne" -ForegroundColor Red
    }
}
```

### Exercice 2b : Alerte stockage critique

Parcourez les bases actives et alertez si le stockage dépasse 80%.

```powershell
foreach ($base in $bases) {
    if (-not $base.Actif) { continue }  # Ignorer les bases hors ligne

    if ($base.Stockage -gt 80) {
        Write-Host "ALERTE [$($base.Nom)] Stockage critique : $($base.Stockage)%" -ForegroundColor Red
    } else {
        Write-Host "OK    [$($base.Nom)] Stockage : $($base.Stockage)%" -ForegroundColor Green
    }
}
```

**Question** : Quelles bases sont en alerte ?

## Partie 3 : ForEach-Object dans le pipeline (10 min)

Même logique, mais en utilisant le pipeline :

```powershell
$bases |
    Where-Object Actif -eq $true |
    ForEach-Object {
        $icone = if ($_.Stockage -gt 80) { "ALERTE" } else { "OK" }
        "$icone - $($_.Nom) : $($_.Stockage)%"
    }
```

**Question** : Quelle différence avec `foreach` ? Quand préférer l'un ou l'autre ?

## Partie 4 : Générer un fichier de rapport (10 min)

Créez un rapport textuel de toutes les bases :

```powershell
$rapport = @()

foreach ($base in $bases) {
    $statut   = if ($base.Actif)         { "En ligne"  } else { "Hors ligne" }
    $stockage = if ($base.Actif)         { "$($base.Stockage)%" } else { "N/A" }

    $rapport += "$($base.Nom) | $statut | Stockage: $stockage"
}

# Afficher le rapport
$rapport | ForEach-Object { Write-Host $_ }

# Compter
Write-Host "`nTotal : $($rapport.Count) bases"
Write-Host "En ligne : $(($bases | Where-Object Actif).Count)"
```

## Mission Bonus : La boucle infinie contrôlée 🌟

Simulez un système de monitoring qui tourne jusqu'à ce qu'on l'arrête.
Affichez l'état de toutes les bases actives, puis attendez 2 secondes, et recommencez.
(Arrêtez avec **Ctrl+C**)

## Validation

✅ Vous savez utiliser `for` avec un compteur
✅ Vous savez utiliser `foreach` sur une collection
✅ Vous savez utiliser `ForEach-Object` dans le pipeline
✅ Vous savez utiliser `break` et `continue`
✅ Vous savez construire un tableau de résultats
