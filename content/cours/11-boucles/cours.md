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
> - [[cours/11-boucles/tp/index|Exercices pratiques]]
> - [[Memo-Commandes|Mémo des commandes]]

## Qu'est-ce qu'une boucle ?

Une **boucle** permet de répéter une action plusieurs fois, sans avoir à recopier le même code à chaque fois.

> [!EXAMPLE] Analogie
> Imaginez que vous devez arroser 10 plantes. Sans boucle, vous écririez "arroser la plante 1", "arroser la plante 2", etc. jusqu'à 10. Avec une boucle, vous dites simplement : **"pour chaque plante, arroser"** — une seule instruction qui se répète toute seule.

En pseudocode, ça donne toujours la même idée :

```
TANT QUE (ou POUR CHAQUE) une condition est vraie :
    faire une action
```

PowerShell propose plusieurs façons d'écrire cette idée, selon ce que vous parcourez :

| Vous voulez...                                                   | Utilisez         |
| ---------------------------------------------------------------- | ---------------- |
| Parcourir chaque élément d'une liste déjà stockée                | `foreach`        |
| Traiter chaque élément qui arrive dans un pipeline               | `ForEach-Object` |
| Répéter un nombre précis de fois (avec un compteur)              | `for`            |
| Répéter tant qu'une condition est vraie (nombre inconnu de fois) | `while`          |
| Répéter au moins une fois, puis vérifier la condition            | `do/while`       |

## ForEach-Object : dans le pipeline

Pour traiter chaque élément qui passe dans le pipeline.

En pseudocode :

```
POUR CHAQUE service reçu du pipeline :
    afficher son nom et son statut
```

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

En pseudocode :

```
POUR CHAQUE fruit dans la liste des fruits :
    afficher "J'aime les " + fruit
```

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

Quand vous avez besoin d'un index, ou que vous savez à l'avance combien de fois répéter.

En pseudocode :

```
i = 1
TANT QUE i <= 5 :
    afficher "Tentative " + i
    i = i + 1
```

La boucle `for` regroupe ces 3 étapes (initialisation, condition, incrémentation) sur une seule ligne :

```powershell
for ($i = 1; $i -le 5; $i++) {
    Write-Host "Tentative $i"
}
```

> [!INFO] Décomposition de `for ($i = 1; $i -le 5; $i++)`
>
> - `$i = 1` → **initialisation** : on part de 1
> - `$i -le 5` → **condition** : on continue tant que $i est inférieur ou égal à 5
> - `$i++` → **incrémentation** : on ajoute 1 à $i à chaque tour

## while : tant que

Répète tant que la condition est vraie. On l'utilise quand on **ne sait pas à l'avance** combien de tours seront nécessaires.

En pseudocode :

```
compteur = 0
TANT QUE compteur < 3 :
    afficher "Tour " + compteur
    compteur = compteur + 1
```

```powershell
$compteur = 0

while ($compteur -lt 3) {
    Write-Host "Tour $compteur"
    $compteur++
}
```

## do/while : au moins une fois

Différence avec `while` : ici, l'action est exécutée **une première fois avant même de vérifier la condition**. Utile quand on doit forcément faire l'action au moins une fois (par exemple demander une saisie à l'utilisateur).

En pseudocode :

```
FAIRE :
    demander une réponse à l'utilisateur
TANT QUE la réponse n'est pas "oui"
```

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

![11_Boucles](https://kayasam.github.io/powershell/ressources/images/11_boucles.webp)

<nav class="ps-course-pagination" aria-label="Navigation entre les chapitres">
  <a href="https://kayasam.github.io/powershell/cours/10-conditions/"><small>← Chapitre précédent</small><b>10. Conditions</b></a>
  <a href="https://kayasam.github.io/powershell/cours/12-wmi-et-cim/"><small>Chapitre suivant →</small><b>12. WMI et CIM</b></a>
</nav>
