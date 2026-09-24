---
title: "Cours"
parcours-tssr: true
parcours-pro: true
---

<nav class="ps-chapter-path" aria-label="Parcours du chapitre">
  <a href="https://kayasam.github.io/powershell/cours/20-gestion-des-erreurs/cours"><b>01 · Cours</b><small>Comprendre les notions</small></a>
  <a href="https://kayasam.github.io/powershell/cours/20-gestion-des-erreurs/cours-interactif"><b>02 · Cours interactif</b><small>Schéma et défi rapide</small></a>
  <a href="https://kayasam.github.io/powershell/cours/20-gestion-des-erreurs/quiz"><b>03 · Quiz</b><small>Vérifier ses acquis</small></a>
  <a href="https://kayasam.github.io/powershell/cours/20-gestion-des-erreurs/tp/"><b>04 · Travaux pratiques</b><small>Appliquer en autonomie</small></a>
</nav>

# 20. Gestion des erreurs

> [!TIP] Ressources du chapitre
>
> - [[cours/20-gestion-des-erreurs/tp/index|Exercices pratiques]]
> - [[Memo-Commandes|Mémo des commandes]]

## Pourquoi gérer les erreurs ?

Sans gestion d'erreur, certaines erreurs arrêtent le traitement ; d'autres affichent un message puis laissent le script continuer. Avec `try/catch` et, lorsque c'est nécessaire, `-ErrorAction Stop`, vous décidez comment réagir proprement.

![schema gestion erreurs](https://kayasam.github.io/powershell/ressources/images/schema-gestion-erreurs.svg)

[Suivre les chemins try, catch et finally →](https://kayasam.github.io/powershell/cours/20-gestion-des-erreurs/schema-gestion-erreurs-interactif.html)

`catch` ne reçoit que les **erreurs terminantes**. `finally` s'exécute dans les deux chemins pour nettoyer ou signaler la fin de la tentative.

## Try / Catch / Finally

```powershell
try {
    # Code qui peut échouer
    Get-Item "C:\fichier-inexistant.txt"
}
catch {
    # Ce qui se passe si ça échoue
    Write-Host "Erreur : $($_.Exception.Message)" -ForegroundColor Red
}
finally {
    # Toujours exécuté (facultatif)
    Write-Host "Fin de la tentative"
}
```

## Exemple concret

```powershell
function Get-ContenuFichier {
    param($Chemin)

    try {
        $contenu = Get-Content $Chemin -ErrorAction Stop
        Write-Host "Fichier lu : $($contenu.Count) lignes" -ForegroundColor Green
        return $contenu
    }
    catch {
        Write-Host "Impossible de lire $Chemin" -ForegroundColor Red
        Write-Host "Raison : $($_.Exception.Message)"
        return $null
    }
}

Get-ContenuFichier "C:\Logs\rapport.txt"
Get-ContenuFichier "C:\inexistant.txt"    # Gérée proprement
```

## -ErrorAction : contrôler le comportement

```powershell
# Stop : transforme l'erreur en exception (nécessaire pour catch)
Get-Item "inexistant.txt" -ErrorAction Stop

# SilentlyContinue : ignore l'erreur silencieusement
Get-Item "inexistant.txt" -ErrorAction SilentlyContinue

# Continue : affiche l'erreur mais continue (défaut)
Get-Item "inexistant.txt" -ErrorAction Continue
```

**Important** : Sans `-ErrorAction Stop`, certaines erreurs ne sont pas interceptées par `catch`.

## Tester avant d'agir

Souvent, mieux vaut prévenir que guérir :

```powershell
# Tester avant de lire
if (Test-Path "C:\Logs\rapport.txt") {
    $contenu = Get-Content "C:\Logs\rapport.txt"
} else {
    Write-Host "Le fichier n'existe pas" -ForegroundColor Yellow
}

# Tester avant de supprimer
if (Test-Path "C:\Logs\vieux.log") {
    Remove-Item "C:\Logs\vieux.log"
    Write-Host "Fichier supprimé"
}
```

## `if` ou `try/catch` : lequel choisir ?

Les deux évitent un plantage, mais ils ne répondent pas à la même question.

|                           | `if` (ex. `Test-Path`)                                                                                                                | `try/catch`                                                                                                     |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Question posée            | "Est-ce que la condition est vraie **avant** d'agir ?"                                                                                | "Est-ce que l'action a **échoué** pendant qu'elle s'exécutait ?"                                                |
| Moment de la vérification | Avant l'action                                                                                                                        | Pendant/après l'action                                                                                          |
| Ce qu'il gère             | Une condition prévisible, testable à l'avance                                                                                         | Une erreur imprévisible ou impossible à anticiper                                                               |
| Exemple typique           | Le fichier existe-t-il ? Le dossier est-il vide ?                                                                                     | Le disque réseau se déconnecte en cours de copie, permission refusée, fichier verrouillé par un autre processus |
| Limite                    | Ne protège pas contre un problème qui survient **entre** le test et l'action (ex. le fichier est supprimé juste après le `Test-Path`) | Ne remplace pas un test simple : plus lourd à lire pour un cas prévisible                                       |

**Règle pratique** :

- Si vous pouvez vérifier la condition _avant_ d'agir → `if` / `Test-Path`.
- Si l'erreur ne peut survenir _que pendant_ l'exécution de la commande (réseau, droits, verrou) → `try/catch`.
- Dans le doute, ou pour du code robuste (script de prod), combinez les deux : `Test-Path` pour éviter les cas évidents, `try/catch` pour rattraper ce qui reste possible malgré tout.

```powershell
# Combinaison : Test-Path pour le cas évident, try/catch pour le reste
if (Test-Path "C:\Logs\rapport.txt") {
    try {
        $contenu = Get-Content "C:\Logs\rapport.txt" -ErrorAction Stop
    }
    catch {
        # Ex. : le fichier a été verrouillé ou supprimé juste après le Test-Path
        Write-Host "Le fichier existe mais n'a pas pu être lu : $($_.Exception.Message)" -ForegroundColor Red
    }
} else {
    Write-Host "Le fichier n'existe pas" -ForegroundColor Yellow
}
```

## $_ dans le catch : l'objet d'erreur

```powershell
catch {
    Write-Host "Message : $($_.Exception.Message)"
    Write-Host "Type    : $($_.Exception.GetType().Name)"
    Write-Host "Ligne   : $($_.InvocationInfo.ScriptLineNumber)"
}
```

## Écrire les erreurs dans un log

```powershell
function Write-Log {
    param($Message, $Niveau = "INFO")

    $date   = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $ligne  = "[$date] [$Niveau] $Message"

    Add-Content -Path "C:\Logs\app.log" -Value $ligne
    Write-Host $ligne
}

try {
    Get-Item "C:\inexistant.txt" -ErrorAction Stop
}
catch {
    Write-Log -Message $_.Exception.Message -Niveau "ERREUR"
}
```

> [!success] À retenir
>
> - `try/catch` pour intercepter les erreurs
> - `-ErrorAction Stop` pour que `catch` fonctionne
> - `$_.Exception.Message` pour lire le message d'erreur
> - `Test-Path` pour éviter les erreurs prévisibles
> - `finally` pour le code qui s'exécute toujours

> **Lien**
>
> - [À propos de Try/Catch](https://learn.microsoft.com/fr-fr/powershell/module/microsoft.powershell.core/about/about_try_catch_finally)

---

## Fiche récapitulative

![20_Gestion_des_erreurs](https://kayasam.github.io/powershell/ressources/images/20_gestion_des_erreurs.webp)

<nav class="ps-course-pagination" aria-label="Navigation entre les chapitres">
  <a href="https://kayasam.github.io/powershell/cours/19-signature-scripts/"><small>← Chapitre précédent</small><b>19. Sécurité et signature des scripts</b></a>
  <a href="https://kayasam.github.io/powershell/cours/21-erreurs-avancees/"><small>Chapitre suivant →</small><b>21. Gestion des erreurs avancée</b></a>
</nav>
