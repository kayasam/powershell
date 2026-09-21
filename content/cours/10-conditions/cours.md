---
title: "Cours"
parcours-tssr: true
parcours-pro: true
---

<nav class="ps-chapter-path" aria-label="Parcours du chapitre">
  <a href="https://kayasam.github.io/powershell/cours/10-conditions/cours"><b>01 · Cours</b><small>Comprendre les notions</small></a>
  <a href="https://kayasam.github.io/powershell/cours/10-conditions/cours-interactif"><b>02 · Cours interactif</b><small>Schéma et défi rapide</small></a>
  <a href="https://kayasam.github.io/powershell/cours/10-conditions/quiz"><b>03 · Quiz</b><small>Vérifier ses acquis</small></a>
  <a href="https://kayasam.github.io/powershell/cours/10-conditions/tp/"><b>04 · Travaux pratiques</b><small>Appliquer en autonomie</small></a>
</nav>

# 10. Conditions

> [!TIP] Ressources du chapitre
>
> - [[10-conditions/tp/index|Exercices pratiques]]
> - [[Memo-Commandes|Mémo des commandes]]

## If / Else : prendre une décision

```powershell
if ($condition) {
    # Si vrai
} else {
    # Sinon
}
```

### Exemple simple

```powershell
$temperature = 35

if ($temperature -gt 30) {
    Write-Host "Il fait chaud !"
} else {
    Write-Host "Température normale."
}
```

## ElseIf : plusieurs cas

```powershell
$score = 75

if ($score -ge 90) {
    Write-Host "Excellent"
} elseif ($score -ge 70) {
    Write-Host "Bien"
} elseif ($score -ge 50) {
    Write-Host "Passable"
} else {
    Write-Host "Insuffisant"
}
```

## Les opérateurs de comparaison

| Opérateur | Signification       | Exemple            |
| --------- | ------------------- | ------------------ |
| `-eq`     | Égal                | `$a -eq 5`         |
| `-ne`     | Différent           | `$a -ne 5`         |
| `-gt`     | Supérieur à         | `$a -gt 5`         |
| `-lt`     | Inférieur à         | `$a -lt 5`         |
| `-ge`     | Supérieur ou égal   | `$a -ge 5`         |
| `-le`     | Inférieur ou égal   | `$a -le 5`         |
| `-like`   | Correspond au motif | `$s -like "Get-*"` |
| `-match`  | Correspond à regex  | `$s -match "^\d+"` |

## Les opérateurs logiques

```powershell
# ET : les deux conditions doivent être vraies
if ($age -ge 18 -and $aPermis -eq $true) { ... }

# OU : au moins une condition vraie
if ($role -eq "Admin" -or $role -eq "Manager") { ... }

# NON : inverse la condition
if (-not $estConnecte) { ... }
```

## Switch : tester plusieurs valeurs

Plus lisible que plusieurs `elseif` :

```powershell
$jour = "Lundi"

switch ($jour) {
    "Lundi"    { Write-Host "Début de semaine" }
    "Vendredi" { Write-Host "Fin de semaine !" }
    "Samedi"   { Write-Host "Weekend !" }
    "Dimanche" { Write-Host "Weekend !" }
    default    { Write-Host "Milieu de semaine" }
}
```

### Switch avec conditions

```powershell
$cpu = 85

switch ($cpu) {
    { $_ -lt 50 }  { Write-Host "CPU : OK" -ForegroundColor Green;         break }
    { $_ -lt 80 }  { Write-Host "CPU : Attention" -ForegroundColor Yellow; break }
    default        { Write-Host "CPU : CRITIQUE" -ForegroundColor Red }
}
```

> [!WARNING] Le `break` est obligatoire ici
> Contrairement au `if/elseif`, `switch` **n'arrête pas au premier cas trouvé** :
> il teste _toutes_ les clauses et exécute _toutes_ celles qui correspondent.
>
> Sans `break`, avec `$cpu = 30` :
>
> ```
> CPU : OK
> CPU : Attention      <-- les deux s'affichent !
> ```
>
> Car 30 est à la fois `-lt 50` **et** `-lt 80`. Le `break` sort du `switch`
> dès qu'une clause a été exécutée, et on retrouve le comportement attendu.
>
> À retenir : dès que les conditions d'un `switch` peuvent se chevaucher, mettez `break`.

## Tester si quelque chose existe

```powershell
# Tester si un fichier existe
if (Test-Path "C:\Logs\app.log") {
    Write-Host "Le fichier existe"
}

# Tester si une variable est vide
if (-not $nom) {
    Write-Host "Le nom est vide"
}

# Tester si un service tourne
$service = Get-Service -Name "Spooler"
if ($service.Status -eq "Running") {
    Write-Host "Le service tourne"
}
```

## À retenir

✅ `if / elseif / else` pour les décisions
✅ `switch` pour tester de nombreuses valeurs
✅ `-eq`, `-gt`, `-lt`, `-like` pour comparer
✅ `-and`, `-or`, `-not` pour combiner

> **Lien**
>
> - [À propos des if](https://learn.microsoft.com/fr-fr/powershell/module/microsoft.powershell.core/about/about_if)

---

## Fiche récapitulative

![10_Conditions](https://kayasam.github.io/powershell/ressources/images/10_Conditions.png)
