---
title: "Exercice 07 - La Fiche des Pirates - Débutant"
publier: true
parcours-tssr: true
parcours-pro: false
---

# Exercice 07 - La Fiche des Pirates 📋 — Débutant

> Chapitre associé : [[07-variables/07-variables]]

## Contexte

La Marine tient des fiches sur chaque pirate connu. Votre mission : apprendre à
stocker et manipuler des informations en PowerShell, pour alimenter la base de
données de la Marine.

> _"Connais ton ennemi."_ — Amiral Sengoku

**Durée : 45 min**

## Objectif

Créer des variables de tous types, faire des calculs, et structurer des données
en tableaux et en tables de hachage.

---

## Partie A : Variables simples (15 min)

```powershell
$nom        = "Monkey D. Luffy"
$surnom     = "Chapeau de Paille"
$prime      = 3000000000
$devilFruit = $true
$age        = 19
```

**A1.** Créez les variables pour un autre pirate de votre choix (Zoro, Nami, Sanji…).

Affichez votre fiche :

```powershell
Write-Host "Nom    : $nom"
Write-Host "Prime  : $prime Berrys"
Write-Host "Age    : $age ans"
```

**A2.** Vérifiez le type de chaque variable. Quels sont les types de vos 5 variables ?

```powershell
$nom.GetType()
$prime.GetType()
$devilFruit.GetType()
```

**A3.** Un nombre entre guillemets n'est **pas** un nombre. Testez :

```powershell
$primeTexte  = "1000"    # avec guillemets  -> du TEXTE
$primeNombre = 1000      # sans guillemets  -> un NOMBRE

$primeTexte.GetType().Name     # ?
$primeNombre.GetType().Name    # ?
```

**A4.** Maintenant, comparez. Prédisez le résultat **avant** d'exécuter :

```powershell
"10" -gt "9"     # ?
10 -gt 9         # ?
```

Pourquoi le premier est-il faux ? Triez ces deux listes pour mieux voir :

```powershell
"10", "9", "100", "2" | Sort-Object
10, 9, 100, 2 | Sort-Object
```

**A5.** Réparez le problème : convertissez le texte en nombre avec `[int]`.

> 💡 **Indice** : `[int]"10"` transforme le texte `"10"` en nombre 10.
> `GetType()` est une **méthode** — d'où les parenthèses (chapitre 03).

---

## Partie B : Opérations (10 min)

```powershell
$prime        = 3000000000
$augmentation = 0.20

$nouvellePrime    = $prime + ($prime * $augmentation)
$primeEnMilliards = $prime / 1000000000
```

**B1.** Calculez la prime de Luffy après une augmentation de **50 %**.

**B2.** Calculez la différence de prime entre Luffy (3 Mrd) et Zoro (1,111 Mrd).

Manipulation de texte :

```powershell
$prenom     = "Monkey D."
$nom        = "Luffy"
$nomComplet = "$prenom $nom"

$nomComplet.ToUpper()
$nomComplet.Length
$nomComplet.Contains("Luffy")
```

**B3.** Mettez un nom de pirate en majuscules, vérifiez s'il contient `D.`,
et comptez ses caractères.

> 💡 **Indice** : les guillemets **doubles** remplacent les variables par leur
> valeur. Les guillemets simples affichent le texte brut.

---

## Partie C : Tableaux (10 min)

```powershell
$equipage = @("Luffy", "Zoro", "Nami", "Usopp", "Sanji")

$equipage[0]     # Luffy — le premier, index 0
$equipage[-1]    # Sanji — le dernier
$equipage.Count  # 5
```

**C1.** Affichez le premier et le dernier membre de l'équipage.

Agrandissez l'équipage :

```powershell
$equipage += "Chopper"
$equipage += @("Robin", "Franky", "Brook", "Jinbe")
```

**C2.** Combien de membres après chaque ajout ?

**C3.** Affichez les membres 2 à 4.

> 💡 **Indice** : on indexe une plage avec `$equipage[1..3]`.

---

## Partie D : Tables de hachage (10 min)

```powershell
$luffy = @{
    Nom        = "Monkey D. Luffy"
    Surnom     = "Chapeau de Paille"
    Prime      = 3000000000
    DevilFruit = "Hito Hito no Mi, Modele Nika"
    Equipage   = "Chapeaux de Paille"
}

$luffy.Nom
$luffy["Prime"]
```

**D1.** Créez la fiche complète d'un autre membre de l'équipage.

**D2.** Mettez à jour deux propriétés et ajoutez-en une nouvelle :

```powershell
$luffy.Prime = 3500000000
$luffy.Ile   = "Elbaf"
```

**D3.** Listez toutes les **clés** de votre fiche.

> 💡 **Indice** : une table de hachage expose une propriété `Keys`.

---

## Mission finale E : l'avis de recherche 🏴‍☠️

**E1.** Créez un mini-rapport affichant la fiche complète d'un pirate, avec des couleurs.

```powershell
$pirate = @{
    Nom    = "Roronoa Zoro"
    Surnom = "Chasseur de pirates"
    Prime  = 1111000000
    Rang   = "Combattant"
}

Write-Host "=============================" -ForegroundColor Red
Write-Host "        AVIS DE RECHERCHE"    -ForegroundColor Red
Write-Host "=============================" -ForegroundColor Red
Write-Host "Nom    : $($pirate.Nom)"
Write-Host "Prime  : $($pirate.Prime) Berrys" -ForegroundColor Yellow
Write-Host "=============================" -ForegroundColor Red
```

**E2.** Adaptez ce script pour afficher la fiche du pirate que vous avez créé.

> 💡 **Indice** : `$($pirate.Nom)` — les `$( )` sont nécessaires pour insérer une
> **propriété** dans une chaîne. `"$pirate.Nom"` seul ne fonctionnerait pas.

---

> [!success] Validation
>
> - Vous savez créer des variables de différents types
> - Vous savez vérifier un type avec `GetType().Name`
> - Vous savez qu'un nombre entre guillemets se comporte comme du **texte**
> - Vous savez faire des calculs et manipuler du texte
> - Vous savez créer et accéder à un tableau
> - Vous savez créer et accéder à une table de hachage
> - Vous savez afficher du texte coloré avec `Write-Host`
