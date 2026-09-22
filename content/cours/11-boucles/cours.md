---
title: "Cours"
parcours-tssr: true
parcours-pro: true
---

<nav class="ps-chapter-path" aria-label="Parcours du chapitre">
  <a href="https://kayasam.github.io/powershell/cours/11-boucles/cours"><b>01 · Cours</b><small>Comprendre les notions</small></a>
  <a href="https://kayasam.github.io/powershell/cours/11-boucles/cours-interactif"><b>02 · Cours interactif</b><small>Schéma et défi rapide</small></a>
  <a href="https://kayasam.github.io/powershell/cours/11-boucles/quiz"><b>03 · Quiz</b><small>Vérifier ses acquis</small></a>
  <a href="https://kayasam.github.io/powershell/cours/11-boucles/tp/"><b>04 · Travaux pratiques</b><small>Appliquer en autonomie</small></a>
</nav>

# 11. Boucles

> [!TIP] Ressources du chapitre
>
> - [[11-boucles/tp/index|Exercices pratiques]]
> - [[Memo-Commandes|Mémo des commandes]]

## ForEach-Object : dans le pipeline

Pour traiter chaque élément qui passe dans le pipeline.

```powershell
Get-Service | ForEach-Object {
    Write-Host "$($_.Name) : $($_.Status)"
}
```

**Raccourci** : `foreach` ou `%`

```powershell
Get-Process | % { Write-Host $_.Name }
```

## foreach : boucle classique

Pour parcourir une collection déjà stockée.

```powershell
$fruits = @("Pomme", "Banane", "Cerise")

foreach ($fruit in $fruits) {
    Write-Host "J'aime les $fruit"
}
```

### Différence entre les deux

```powershell
# ForEach-Object : dans le pipeline (traite un par un)
Get-Process | ForEach-Object { Write-Host $_.Name }

# foreach : sur une variable (collection en mémoire)
$processus = Get-Process
foreach ($p in $processus) { Write-Host $p.Name }
```

## for : boucle avec compteur

Quand vous avez besoin d'un index.

```powershell
for ($i = 1; $i -le 5; $i++) {
    Write-Host "Tentative $i"
}
```

## while : tant que

Répète tant que la condition est vraie.

```powershell
$compteur = 0

while ($compteur -lt 3) {
    Write-Host "Tour $compteur"
    $compteur++
}
```

## do/while : au moins une fois

```powershell
do {
    $reponse = Read-Host "Entrez 'oui' pour continuer"
} while ($reponse -ne "oui")
```

## Contrôler une boucle

```powershell
foreach ($n in 1..10) {
    if ($n -eq 5) { continue }  # Passe au suivant
    if ($n -eq 8) { break }     # Sort de la boucle
    Write-Host $n
}
# Affiche : 1 2 3 4 6 7
```

## Astuces utiles

```powershell
# Créer un tableau de 1 à 10
1..10

# Itérer dessus
foreach ($i in 1..10) { Write-Host $i }

# Parcourir les fichiers d'un dossier
foreach ($fichier in Get-ChildItem "C:\Logs") {
    Write-Host $fichier.Name
}
```

> [!success] À retenir
>
> - `ForEach-Object` (ou `%`) dans le pipeline
> - `foreach` pour parcourir une collection
> - `for` quand vous avez besoin d'un compteur
> - `while` tant qu'une condition est vraie
> - `break` pour sortir, `continue` pour sauter

> **Lien**
>
> - [À propos des boucles](https://learn.microsoft.com/fr-fr/powershell/module/microsoft.powershell.core/about/about_foreach)

---

## Fiche récapitulative

![11_Boucles](https://kayasam.github.io/powershell/ressources/images/11_Boucles.png)
