---
title: "16. Lire et écrire"
parcours-tssr: true
parcours-pro: true
---

<nav class="ps-chapter-path" aria-label="Parcours du chapitre">
  <a href="https://kayasam.github.io/powershell/cours/16-lire-et-ecrire/cours"><b>01 · Cours</b><small>Comprendre les notions</small></a>
  <a href="https://kayasam.github.io/powershell/cours/16-lire-et-ecrire/cours-interactif"><b>02 · Cours interactif</b><small>Schéma et défi rapide</small></a>
  <a href="https://kayasam.github.io/powershell/cours/16-lire-et-ecrire/quiz"><b>03 · Quiz</b><small>Vérifier ses acquis</small></a>
  <a href="https://kayasam.github.io/powershell/cours/16-lire-et-ecrire/tp/"><b>04 · Travaux pratiques</b><small>Appliquer en autonomie</small></a>
</nav>

> [!TIP] Ressources du chapitre
>
> - [[16-lire-et-ecrire/tp/index|Exercices pratiques]]
> - [[Memo-Commandes|Mémo des commandes]]

## Lire un fichier

```powershell
# Lire tout le contenu (retourne un tableau de lignes)
Get-Content "C:\Logs\rapport.txt"

# Lire et stocker dans une variable
$lignes = Get-Content "C:\Logs\rapport.txt"

# Lire les 10 premières lignes
Get-Content "C:\Logs\rapport.txt" -TotalCount 10

# Lire les 5 dernières lignes
Get-Content "C:\Logs\rapport.txt" -Tail 5
```

**Raccourci** : `cat` ou `gc`

## Écrire dans un fichier

```powershell
# Écrire (écrase le contenu existant)
Set-Content -Path "C:\Logs\rapport.txt" -Value "Nouveau contenu"

# Ajouter à la fin (sans écraser)
Add-Content -Path "C:\Logs\rapport.txt" -Value "Ligne ajoutée"
```

## Out-File : rediriger la sortie

```powershell
# Sauvegarder la sortie d'une commande dans un fichier
Get-Process | Out-File "C:\Logs\processus.txt"

# Ajouter à un fichier existant
Get-Date | Out-File "C:\Logs\journal.txt" -Append
```

**Différence avec Set-Content** :

- `Out-File` → reçoit des objets du pipeline, les convertit en texte
- `Set-Content` → écrit du texte directement

## Exemple complet : Journal de bord

```powershell
$date    = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
$message = "[$date] Connexion établie"

# Ajouter au journal
Add-Content -Path "C:\Logs\journal.txt" -Value $message

# Vérifier le journal
Get-Content "C:\Logs\journal.txt" -Tail 5
```

## Manipuler le contenu

```powershell
$contenu = Get-Content "C:\Logs\rapport.txt"

# Nombre de lignes
$contenu.Count

# Chercher les lignes contenant un mot
$contenu | Where-Object { $_ -like "*ERREUR*" }

# Remplacer dans le fichier
(Get-Content "C:\Logs\rapport.txt") -replace "ancien", "nouveau" |
    Set-Content "C:\Logs\rapport.txt"
```

## Encodage (si caractères spéciaux)

```powershell
# Lire avec encodage UTF-8
Get-Content "C:\Logs\rapport.txt" -Encoding UTF8

# Écrire en UTF-8
Set-Content "C:\Logs\rapport.txt" -Value $contenu -Encoding UTF8
```

> [!success] À retenir
>
> - `Get-Content` pour lire un fichier ligne par ligne
> - `Set-Content` pour écrire (écrase)
> - `Add-Content` pour ajouter à la fin
> - `Out-File` pour rediriger la sortie d'une commande
> - `-Tail` pour lire les dernières lignes (utile pour les logs)

> **Lien**
>
> - [Get-Content](https://learn.microsoft.com/fr-fr/powershell/module/microsoft.powershell.management/get-content)

---

## Fiche récapitulative

![16_Lire_et_ecrire](https://kayasam.github.io/powershell/ressources/images/16_lire_et_ecrire.png)
