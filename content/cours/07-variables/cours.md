---
title: "Cours"
parcours-tssr: true
parcours-pro: true
---

<nav class="ps-chapter-path" aria-label="Parcours du chapitre">
  <a href="https://kayasam.github.io/powershell/cours/07-variables/cours"><b>01 · Cours</b><small>Comprendre les notions</small></a>
  <a href="https://kayasam.github.io/powershell/cours/07-variables/cours-interactif"><b>02 · Cours interactif</b><small>Schéma et défi rapide</small></a>
  <a href="https://kayasam.github.io/powershell/cours/07-variables/quiz"><b>03 · Quiz</b><small>Vérifier ses acquis</small></a>
  <a href="https://kayasam.github.io/powershell/cours/07-variables/tp/"><b>04 · Travaux pratiques</b><small>Appliquer en autonomie</small></a>
</nav>

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

## Connaître le type d'une variable

PowerShell devine le type, mais on peut toujours le vérifier avec la méthode
`GetType()` :

```powershell
$nom = "Marie"
$age = 30

$nom.GetType().Name    # String
$age.GetType().Name    # Int32
```

> [!TIP] Le réflexe quand un résultat surprend
> `"10" + 5` donne `105` et non `15` : PowerShell a collé deux textes au lieu
> d'additionner. Un `GetType().Name` sur la variable explique tout de suite le
> problème.
>
> `GetType()` est une **méthode** : d'où les parenthèses (voir chapitre 03).

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

## Les variables d'environnement

Ce sont les variables de **Windows**, pas celles de PowerShell. On les lit avec
le préfixe **`$env:`** :

```powershell
$env:USERNAME       # Votre nom d'utilisateur
$env:COMPUTERNAME   # Le nom du poste
$env:USERPROFILE    # C:\Users\jean
$env:TEMP           # Le dossier temporaire
$env:PATH           # Les dossiers où Windows cherche les programmes
```

Pour les lister toutes :

```powershell
Get-ChildItem Env:
```

Très utile en dépannage : un script qui doit écrire un log ira dans
`$env:TEMP` plutôt que dans un chemin écrit en dur.

> [!NOTE] Variable locale ou variable d'environnement ?
> Deux choses différentes, malgré le `$` commun :
>
> |             | Variable PowerShell                     | Variable d'environnement   |
> | ----------- | --------------------------------------- | -------------------------- |
> | Écriture    | `$nom`                                  | `$env:NOM`                 |
> | Créée par   | vous, dans la console                   | Windows                    |
> | Portée      | **uniquement votre session** PowerShell | tout le système            |
> | Visible par | PowerShell seul                         | tous les programmes lancés |
>
> Dans les deux cas, ce que vous tapez dans la console **disparaît à la
> fermeture**. Pour qu'une variable d'environnement soit permanente, il faut
> la définir dans les paramètres système de Windows — pas depuis la console.

> [!success] À retenir
>
> - Les variables commencent par **$**
> - Pas sensibles à la casse : `$nom` = `$Nom` = `$NOM`
> - PowerShell devine le type automatiquement
> - `$variable.GetType().Name` pour connaître le type réel
> - Types principaux : String, Int, Bool, Array, Hashtable
> - `$env:NOM` pour les variables Windows, `Get-ChildItem Env:` pour les lister

> **Lien**
>
> - [À propos des variables](https://learn.microsoft.com/fr-fr/powershell/module/microsoft.powershell.core/about/about_variables)

---

## Fiche récapitulative

![07_Variables](https://kayasam.github.io/powershell/ressources/images/07_Variables.png)
