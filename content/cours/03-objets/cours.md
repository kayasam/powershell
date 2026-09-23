---
title: "Cours"
parcours-tssr: true
parcours-pro: true
---

<nav class="ps-chapter-path" aria-label="Parcours du chapitre">
  <a href="https://kayasam.github.io/powershell/cours/03-objets/cours"><b>01 · Cours</b><small>Comprendre les notions</small></a>
  <a href="https://kayasam.github.io/powershell/cours/03-objets/cours-interactif"><b>02 · Cours interactif</b><small>Schéma et défi rapide</small></a>
  <a href="https://kayasam.github.io/powershell/cours/03-objets/quiz"><b>03 · Quiz</b><small>Vérifier ses acquis</small></a>
  <a href="https://kayasam.github.io/powershell/cours/03-objets/tp/"><b>04 · Travaux pratiques</b><small>Appliquer en autonomie</small></a>
</nav>

# 03. Objets

> [!TIP] Ressources du chapitre
>
> - [[cours/03-objets/tp/index|Exercices pratiques]]
> - [[Memo-Commandes|Mémo des commandes]]

## PowerShell manipule des objets

**Différence clé avec CMD/Bash** :

- CMD/Bash → retourne du texte à analyser
- PowerShell → retourne des objets structurés

## Qu'est-ce qu'un objet ?

Un objet = données organisées avec :

- **Propriétés** : Les informations (nom, taille, date...)
- **Méthodes** : Les actions possibles (ouvrir, fermer, copier...)

![schema objet proprietes methodes](https://kayasam.github.io/powershell/ressources/images/schema-objet-proprietes-methodes.png)

## Exemple simple

```powershell
# Obtenir un fichier
$fichier = Get-Item "C:\Windows\notepad.exe"

# Voir ses propriétés
$fichier.Name          # notepad.exe
$fichier.Length        # Taille en octets
$fichier.LastWriteTime # Date de modification
```

## Propriété ou méthode ?

- **Propriété** : une information, on la lit — **sans parenthèses**.
- **Méthode** : une action, on l'exécute — **avec parenthèses**, même vides.

```powershell
$nom = "Jean Dupont"

$nom.Length       # Propriété -> 11 (le nombre de caractères)
$nom.ToUpper()    # Méthode   -> JEAN DUPONT
```

> [!TIP] Le réflexe
> Pas de parenthèses = propriété. Des parenthèses = méthode. Si vous tapez
> `$nom.ToUpper` sans les `()`, PowerShell affiche la définition de la
> méthode au lieu de l'exécuter — c'est l'erreur la plus fréquente.

## Découvrir un objet avec Get-Member

```powershell
Get-Process | Get-Member
```

Cela montre :

- Toutes les propriétés disponibles
- Toutes les méthodes disponibles

La liste peut être longue. Pour filtrer :

```powershell
Get-Process | Get-Member -MemberType Property   # Uniquement les propriétés
Get-Process | Get-Member -MemberType Method      # Uniquement les méthodes
```

## Pourquoi c'est utile ?

**Avant (Bash)** :

```bash
ps aux | grep firefox | awk '{print $2}'  # Compliqué!
```

**Maintenant (PowerShell)** :

```powershell
Get-Process firefox | Select-Object Id  # Simple!
```

> [!success] À retenir
>
> - PowerShell travaille avec des objets, pas du texte
> - Chaque objet a des propriétés (infos) et des méthodes (actions)
> - Propriété = sans parenthèses, méthode = avec parenthèses `()`
> - `Get-Member` pour explorer un objet, `-MemberType Property`/`Method` pour filtrer
> - Accédez aux propriétés avec le point : `$objet.Propriete`

> **Lien**
>
> - [Comprendre les objets PowerShell](https://learn.microsoft.com/fr-fr/powershell/scripting/learn/ps101/03-discovering-objects)

---

## Fiche récapitulative

![03_Objets](https://kayasam.github.io/powershell/ressources/images/03_objets.webp)

<nav class="ps-course-pagination" aria-label="Navigation entre les chapitres">
  <a href="https://kayasam.github.io/powershell/cours/02-cmdlets/"><small>← Chapitre précédent</small><b>02. Cmdlets</b></a>
  <a href="https://kayasam.github.io/powershell/cours/04-completion/"><small>Chapitre suivant →</small><b>04. Complétion</b></a>
</nav>
