# Exercice 07 - La Fiche des Pirates 📋

## Contexte

La Marine tient des fiches sur chaque pirate connu.
Votre mission : apprendre à stocker et manipuler des informations en PowerShell,
pour alimenter la base de données de la Marine.

> _"Connais ton ennemi."_ — Amiral Sengoku

## Partie 1 : Variables simples (15 min)

### 1. Créer la fiche d'un pirate

```powershell
$nom        = "Monkey D. Luffy"
$surnom     = "Chapeau de Paille"
$prime      = 3000000000
$devilFruit = $true
$age        = 19
```

**Exercice** : Créez les variables pour un autre pirate de votre choix (Zoro, Nami, Sanji...).

### 2. Afficher la fiche

```powershell
Write-Host "Nom    : $nom"
Write-Host "Surnom : $surnom"
Write-Host "Prime  : $prime Berrys"
Write-Host "Age    : $age ans"
Write-Host "Devil Fruit : $devilFruit"
```

### 3. Vérifier le type de chaque variable

```powershell
$nom.GetType()
$prime.GetType()
$devilFruit.GetType()
```

**Question** : Quels sont les types de vos 5 variables ?

### 4. Forcer un type

```powershell
[string]$primeTexte = 1000000   # Convertit en texte
[int]$ageNombre     = "19"      # Convertit en nombre
```

## Partie 2 : Opérations (10 min)

### 1. Calculs de prime

```powershell
$prime       = 3000000000
$augmentation = 0.20   # +20% après Wano

$nouvellePrime    = $prime + ($prime * $augmentation)
$primeEnMilliards = $prime / 1000000000

Write-Host "Ancienne prime : $prime"
Write-Host "Nouvelle prime : $nouvellePrime"
Write-Host "Soit $primeEnMilliards milliards de Berrys"
```

**Exercice** :

- Calculez la prime de Luffy après une augmentation de 50%
- Calculez la différence de prime entre Luffy (3 Mrd) et Zoro (1,111 Mrd)

### 2. Manipulation de texte

```powershell
$prenom = "Monkey D."
$nom    = "Luffy"

# Concaténation
$nomComplet = "$prenom $nom"
Write-Host "Pirate : $nomComplet"

# Méthodes sur le texte
$nomComplet.ToUpper()                     # MONKEY D. LUFFY
$nomComplet.Length                        # Nombre de caractères
$nomComplet.Contains("Luffy")             # True
$nomComplet.Replace("Monkey", "Monkey D.")   # Monkey D. Luffy
```

**Exercice** :

- Mettez un nom de pirate en majuscules
- Vérifiez si le nom contient "D." (famille D !)
- Remplacez un mot dans le nom

## Partie 3 : Tableaux (10 min)

### 1. La liste des membres de l'équipage

```powershell
$equipage = @("Luffy", "Zoro", "Nami", "Usopp", "Sanji")
```

### 2. Accéder aux membres

```powershell
$equipage[0]     # Luffy (le capitaine, index 0)
$equipage[-1]    # Sanji (le dernier)
$equipage.Count  # 5 membres
```

**Exercice** : Affichez le premier et le dernier membre de l'équipage.

### 3. Agrandir l'équipage

```powershell
$equipage += "Chopper"
$equipage += @("Robin", "Franky", "Brook", "Jinbe")

Write-Host "Nombre de membres : $($equipage.Count)"
```

**Exercice** : Affichez combien de membres il y a après chaque ajout.

> **Note** : Pour parcourir chaque membre un par un, on utilisera les **boucles** — c'est le programme de demain !

## Partie 4 : Tables de hachage (10 min)

### 1. Fiche complète d'un pirate

```powershell
$luffy = @{
    Nom        = "Monkey D. Luffy"
    Surnom     = "Chapeau de Paille"
    Prime      = 3000000000
    DevilFruit = "Hito Hito no Mi, Modèle Nika"
    Equipage   = "Chapeaux de Paille"
}
```

### 2. Accéder aux informations

```powershell
$luffy.Nom         # Monkey D. Luffy
$luffy["Prime"]    # 3000000000
$luffy.DevilFruit  # Hito Hito no Mi...
```

**Exercice** : Créez la fiche complète d'un autre membre de l'équipage.

### 3. Mettre à jour une fiche

```powershell
# La prime augmente après un grand combat
$luffy.Prime = 3500000000

# Ajouter une nouvelle info
$luffy.Ile = "Elbaf"
```

**Exercice** : Mettez à jour 2 propriétés et ajoutez 1 nouvelle propriété.

## Mission finale : L'Avis de Recherche

Créez un mini-rapport qui affiche la fiche complète d'un pirate avec `Write-Host` et des couleurs :

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
Write-Host "Surnom : $($pirate.Surnom)"
Write-Host "Prime  : $($pirate.Prime) Berrys" -ForegroundColor Yellow
Write-Host "Rang   : $($pirate.Rang)"
Write-Host "=============================" -ForegroundColor Red
```

Adaptez ce script pour afficher la fiche du pirate que vous avez créé.

## Validation

✅ Vous savez créer des variables de différents types
✅ Vous savez faire des calculs et manipuler du texte
✅ Vous savez créer et accéder à un tableau
✅ Vous savez créer et accéder à une table de hachage
✅ Vous savez afficher du texte coloré avec `Write-Host`
