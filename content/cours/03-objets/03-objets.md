---
title: "03. Objets"
parcours-tssr: true
parcours-pro: true
---

<nav class="ps-chapter-path" aria-label="Parcours du chapitre">
  <a href="https://kayasam.github.io/powershell/cours/03-objets/cours"><b>01 · Cours</b><small>Comprendre les notions</small></a>
  <a href="https://kayasam.github.io/powershell/cours/03-objets/cours-interactif"><b>02 · Cours interactif</b><small>Schéma et défi rapide</small></a>
  <a href="https://kayasam.github.io/powershell/cours/03-objets/quiz"><b>03 · Quiz</b><small>Vérifier ses acquis</small></a>
  <a href="https://kayasam.github.io/powershell/cours/03-objets/tp/"><b>04 · Travaux pratiques</b><small>Appliquer en autonomie</small></a>
</nav>

> [!TIP] Ressources du chapitre
>
> - [[03-objets/tp/index|Exercices pratiques]]
> - [[Memo-Commandes|Mémo des commandes]]

## PowerShell manipule des objets

**Différence clé avec CMD/Bash** :

- CMD/Bash → retourne du texte à analyser
- PowerShell → retourne des objets structurés

## Qu'est-ce qu'un objet ?

Un objet = données organisées avec :

- **Propriétés** : Les informations (nom, taille, date...)
- **Méthodes** : Les actions possibles (ouvrir, fermer, copier...)

## Exemple simple

```powershell
# Obtenir un fichier
$fichier = Get-Item "C:\Windows\notepad.exe"

# Voir ses propriétés
$fichier.Name          # notepad.exe
$fichier.Length        # Taille en octets
$fichier.LastWriteTime # Date de modification
```

## Découvrir un objet avec Get-Member

```powershell
Get-Process | Get-Member
```

Cela montre :

- Toutes les propriétés disponibles
- Toutes les méthodes disponibles

## Pourquoi c'est utile ?

**Avant (Bash)** :

```bash
ps aux | grep firefox | awk '{print $2}'  # Compliqué!
```

**Maintenant (PowerShell)** :

```powershell
Get-Process firefox | Select-Object Id  # Simple!
```

## À retenir

✅ PowerShell travaille avec des objets, pas du texte
✅ Chaque objet a des propriétés et des méthodes
✅ Utilisez `Get-Member` pour explorer un objet
✅ Accédez aux propriétés avec le point : `$objet.Propriete`

> **Lien**
>
> - [Comprendre les objets PowerShell](https://learn.microsoft.com/fr-fr/powershell/scripting/learn/ps101/03-discovering-objects)
