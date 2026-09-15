---
title: "Exercice 22 - Les Recettes de Sanji"
parcours-tssr: false
parcours-pro: true
---

# Exercice 22 - Les Recettes de Sanji 🍳

**Durée : 40 min**

## Contexte

**Sanji** est le cuisinier du Thousand Sunny.
Il ne laisse rien au hasard : chaque recette a ses ingrédients obligatoires, ses options, et ses contraintes.

Aujourd'hui vous allez coder ses recettes sous forme de fonctions PowerShell avec des paramètres solides comme le Black Leg.

> _"Je ne cuisine jamais deux fois la même chose à la va-vite."_ — Sanji

## Partie 1 : La fonction de base (10 min)

### 1a. Votre première recette avec paramètres

Créez une fonction `New-Plat` avec :

- `$Ingredient` : obligatoire
- `$Quantite` : optionnel, défaut = 1
- `$Temperature` : optionnel, défaut = "Chaud"

```powershell
function New-Plat {
    param(
        [Parameter(Mandatory)]
        [string]$Ingredient,

        [int]$Quantite = 1,

        [string]$Temperature = "Chaud"
    )

    Write-Host "Préparation : $Quantite x $Ingredient ($Temperature)"
}

# Testez
New-Plat -Ingredient "Viande"
New-Plat -Ingredient "Poisson" -Quantite 3 -Temperature "Froid"
New-Plat  # PowerShell demande l'ingrédient !
```

### 1b. Observer le comportement Mandatory

Tapez juste `New-Plat` sans paramètre.
**Que se passe-t-il ?**

## Partie 2 : ValidateSet — seulement ce que Sanji autorise (10 min)

Sanji ne cuisine que certains types de plats. Limitez les valeurs autorisées.

```powershell
function New-Commande {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory)]
        [string]$NomClient,

        [ValidateSet("Viande", "Poisson", "Légumes", "Dessert")]
        [string]$Categorie = "Viande",

        [ValidateRange(1, 10)]
        [int]$Portions = 1
    )

    Write-Host "$NomClient commande $Portions portion(s) de : $Categorie"
}

# Testez ces appels
New-Commande -NomClient "Luffy" -Categorie "Viande" -Portions 5
New-Commande -NomClient "Nami"  -Categorie "Dessert"
New-Commande -NomClient "Zoro"  -Categorie "Alcool"   # Erreur ?
New-Commande -NomClient "Luffy" -Portions 20           # Erreur ?
```

**Questions** :

- Quel message d'erreur apparaît pour "Alcool" ?
- Testez la complétion Tab sur `-Categorie`. Que voyez-vous ?

## Partie 3 : Switch et CmdletBinding (10 min)

```powershell
function New-PlatSpecial {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory)]
        [string]$Plat,

        [ValidateSet("Epice", "Doux", "Neutre")]
        [string]$Assaisonnement = "Neutre",

        [switch]$PourNami,       # Plat spécial pour Nami
        [switch]$SansViande      # Version végétarienne
    )

    $description = $Plat

    if ($SansViande)  { $description += " (végétarien)" }
    if ($PourNami)    { $description += " avec fleurs" }

    Write-Host "Plat : $description | Assaisonnement : $Assaisonnement" -ForegroundColor Cyan
}

# Testez
New-PlatSpecial -Plat "Ramen"
New-PlatSpecial -Plat "Salade" -SansViande -PourNami -Assaisonnement "Doux"
New-PlatSpecial -Plat "Steak" -Assaisonnement "Epice"
```

## Partie 4 : Aide intégrée (10 min)

Documentez la fonction `New-Commande` avec des commentaires d'aide :

```powershell
function New-Commande {
    <#
    .SYNOPSIS
        Prend la commande d'un client du Thousand Sunny.
    .DESCRIPTION
        Enregistre une commande avec la catégorie de plat et le nombre de portions.
        Sanji refuse catégoriquement les commandes hors catégorie.
    .PARAMETER NomClient
        Le nom du membre d'équipage qui commande.
    .PARAMETER Categorie
        Le type de plat. Valeurs : Viande, Poisson, Légumes, Dessert.
    .PARAMETER Portions
        Le nombre de portions (1 à 10).
    .EXAMPLE
        New-Commande -NomClient "Luffy" -Categorie "Viande" -Portions 5
    .EXAMPLE
        New-Commande -NomClient "Nami" -Categorie "Dessert"
    #>
    [CmdletBinding()]
    param(
        [Parameter(Mandatory)]
        [string]$NomClient,
        [ValidateSet("Viande", "Poisson", "Légumes", "Dessert")]
        [string]$Categorie = "Viande",
        [ValidateRange(1, 10)]
        [int]$Portions = 1
    )

    Write-Host "$NomClient commande $Portions portion(s) de : $Categorie"
}

# Testez l'aide
Get-Help New-Commande
Get-Help New-Commande -Examples
```

## Mission Finale : Le Menu Complet 🌟

Créez une fonction `Get-MenuDuJour` qui :

1. Affiche un menu avec 3 plats proposés (tableau de hashtables)
2. Prend en paramètre un `$Budget` (ValidateRange 100 à 10000 Berrys)
3. Prend un switch `-VegetarienSeulement`
4. Filtre les plats selon le budget et l'option végétarienne

## Validation

- ✅ Vous savez rendre un paramètre obligatoire avec `[Parameter(Mandatory)]`
- ✅ Vous savez limiter les valeurs avec `[ValidateSet()]`
- ✅ Vous savez limiter les plages avec `[ValidateRange()]`
- ✅ Vous savez créer des flags avec `[switch]`
- ✅ Vous savez documenter avec les commentaires d'aide
