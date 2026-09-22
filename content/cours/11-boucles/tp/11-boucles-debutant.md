---
title: "Exercice 11 - Le Scanner de la Flotte - Débutant"
publier: true
parcours-tssr: true
parcours-pro: false
---

# Exercice 11 - Le Scanner de la Flotte 🛸 — Débutant

> Chapitre associé : [[11-boucles/11-boucles]]

## Contexte

Vous êtes dans l'équipe de **Nami**, responsable des systèmes de navigation du
Thousand Sunny. La flotte possède plusieurs îles-bases à surveiller.

> _"Même les meilleurs pirates ont besoin de bons outils."_ — Nami

**Durée : 45 min**

## Objectif

Automatiser des vérifications répétitives avec les différentes boucles.

## Les données

```powershell
$bases = @(
    [PSCustomObject]@{ Nom="Dressrosa";  IP="10.0.1.1"; Actif=$true;  Stockage=85 }
    [PSCustomObject]@{ Nom="Zou";        IP="10.0.1.2"; Actif=$true;  Stockage=42 }
    [PSCustomObject]@{ Nom="Whole Cake"; IP="10.0.1.3"; Actif=$false; Stockage=0  }
    [PSCustomObject]@{ Nom="Wano";       IP="10.0.1.4"; Actif=$true;  Stockage=93 }
    [PSCustomObject]@{ Nom="Egghead";    IP="10.0.1.5"; Actif=$true;  Stockage=17 }
    [PSCustomObject]@{ Nom="Elbaf";      IP="10.0.1.6"; Actif=$false; Stockage=0  }
)
```

---

## Partie A : Boucle de démarrage (10 min)

Le protocole de démarrage affiche un compte à rebours.

```powershell
for ($i = 5; $i -ge 1; $i--) {
    Write-Host "Demarrage dans $i..."
    Start-Sleep -Milliseconds 300
}
Write-Host "GO !" -ForegroundColor Green
```

**A1.** Que font les trois parties entre parenthèses du `for` ?

**A2.** Affichez la table de multiplication de 7, de 1 à 10.

> 💡 **Indice** : `$(7 * $i)` insère un calcul dans une chaîne.

---

## Partie B : Parcourir les bases (15 min)

```powershell
foreach ($base in $bases) {
    if ($base.Actif) {
        Write-Host "[$($base.Nom)] En ligne" -ForegroundColor Green
    } else {
        Write-Host "[$($base.Nom)] Hors ligne" -ForegroundColor Red
    }
}
```

**B1.** Combien de bases sont en ligne ?

Alerte si le stockage dépasse 80 % :

```powershell
foreach ($base in $bases) {
    if (-not $base.Actif) { continue }

    if ($base.Stockage -gt 80) {
        Write-Host "ALERTE [$($base.Nom)] Stockage critique : $($base.Stockage)%" -ForegroundColor Red
    } else {
        Write-Host "OK     [$($base.Nom)] Stockage : $($base.Stockage)%" -ForegroundColor Green
    }
}
```

**B2.** Quelles bases sont en alerte ?

**B3.** Que fait la ligne `if (-not $base.Actif) { continue }` ?

> 💡 **Indice** : `continue` passe au tour suivant sans exécuter la suite.

---

## Partie C : ForEach-Object dans le pipeline (10 min)

```powershell
$bases |
    Where-Object Actif -eq $true |
    ForEach-Object {
        $etat = if ($_.Stockage -gt 80) { "ALERTE" } else { "OK" }
        "$etat - $($_.Nom) : $($_.Stockage)%"
    }
```

**C1.** Le résultat est-il le même qu'en partie B ?

**C2.** Quelle différence entre `foreach` et `ForEach-Object` ? Quand préférer l'un
ou l'autre ?

> 💡 **Indice** : dans le pipeline, l'objet courant s'appelle `$_`.
> Dans un `foreach`, c'est vous qui le nommez.

---

## Partie D : Générer un rapport (10 min)

```powershell
$rapport = @()

foreach ($base in $bases) {
    $statut   = if ($base.Actif) { "En ligne" }        else { "Hors ligne" }
    $stockage = if ($base.Actif) { "$($base.Stockage)%" } else { "N/A" }

    $rapport += "$($base.Nom) | $statut | Stockage: $stockage"
}

$rapport | ForEach-Object { Write-Host $_ }

Write-Host "Total    : $($rapport.Count) bases"
Write-Host "En ligne : $(@($bases | Where-Object Actif).Count)"
```

**D1.** Combien de lignes contient le rapport ?

**D2.** Combien de bases sont en ligne ?

---

## Mission finale E : la boucle contrôlée 🌟

**E1.** Écrivez une boucle qui affiche les nombres de 1 à 15, mais **saute** le 7
et **s'arrête** à 12. Prédisez la sortie avant d'exécuter.

**E2.** Simulez un système de surveillance qui affiche l'état des bases actives,
attend 2 secondes, et recommence. Arrêtez-le avec **Ctrl+C**.

> 💡 **Indice** : `continue` saute un tour, `break` sort de la boucle.
> `while ($true) { }` tourne indéfiniment.

---

> [!success] Validation
>
> - Vous savez utiliser `for` avec un compteur
> - Vous savez utiliser `foreach` sur une collection
> - Vous savez utiliser `ForEach-Object` dans un pipeline
> - Vous savez contrôler une boucle avec `break` et `continue`
