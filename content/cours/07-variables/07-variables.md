---
title: "07. Variables"
parcours-tssr: true
parcours-pro: true
---

# 07. Variables

> [!TIP] Ressources du chapitre
>
> - [[07-variables/tp/index|Exercices pratiques]]
> - [[Memo-Commandes|Mémo des commandes]]

## Créer une variable

Une variable stocke une valeur. Elle commence toujours par **$**.

```powershell
$nom = "Jean"
$age = 30
$actif = $true
```

## Les types de variables

PowerShell devine automatiquement le type de vos variables :

### Texte (String)

```powershell
$prenom = "Marie"
$message = "Bonjour $prenom"  # Bonjour Marie
```

**Astuce** : Guillemets doubles (") → remplace les variables, guillemets simples (') → texte brut.

### Nombres

```powershell
$age = 30              # Entier (Int)
$prix = 19.99          # Décimal (Double)
$total = $age + 5      # 35
```

### Booléen (Vrai/Faux)

```powershell
$actif = $true
$archive = $false
```

### Tableau (Liste)

```powershell
$couleurs = @("Rouge", "Vert", "Bleu")
$couleurs[0]    # Rouge (le premier élément)
$couleurs.Count # 3 (nombre d'éléments)
```

### Table de hachage (Dictionnaire)

```powershell
$personne = @{
    Nom = "Dupont"
    Prenom = "Jean"
    Age = 30
}
$personne.Nom   # Dupont
```

## Opérations

```powershell
# Mathématiques
$a = 10
$b = 5
$a + $b    # 15
$a * $b    # 50

# Texte
$prenom = "Jean"
$nom = "Dupont"
$complet = "$prenom $nom"  # Jean Dupont
```

## Variables spéciales

```powershell
$_              # Objet actuel dans le pipeline
$HOME           # Votre dossier personnel
$PWD            # Dossier actuel
$true / $false  # Valeurs booléennes
```

## À retenir

✅ Les variables commencent par **$**
✅ Pas sensibles à la casse : `$nom`=`$Nom` = `$NOM`
✅ PowerShell devine le type automatiquement
✅ Types principaux : String, Int, Bool, Array, Hashtable

> **Lien**
>
> - [À propos des variables](https://learn.microsoft.com/fr-fr/powershell/module/microsoft.powershell.core/about/about_variables)
