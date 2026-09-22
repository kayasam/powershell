---
title: "Cours"
parcours-tssr: true
parcours-pro: true
---

<nav class="ps-chapter-path" aria-label="Parcours du chapitre">
  <a href="https://kayasam.github.io/powershell/cours/13-fonctions/cours"><b>01 · Cours</b><small>Comprendre les notions</small></a>
  <a href="https://kayasam.github.io/powershell/cours/13-fonctions/cours-interactif"><b>02 · Cours interactif</b><small>Schéma et défi rapide</small></a>
  <a href="https://kayasam.github.io/powershell/cours/13-fonctions/quiz"><b>03 · Quiz</b><small>Vérifier ses acquis</small></a>
  <a href="https://kayasam.github.io/powershell/cours/13-fonctions/tp/"><b>04 · Travaux pratiques</b><small>Appliquer en autonomie</small></a>
</nav>

# 13. Fonctions

> [!TIP] Ressources du chapitre
>
> - [[13-fonctions/tp/index|Exercices pratiques]]
> - [[Memo-Commandes|Mémo des commandes]]

## Pourquoi des fonctions ?

Sans fonctions : vous répétez le même code partout.
Avec fonctions : vous l'écrivez une fois, vous l'appelez quand vous voulez.

## Créer une fonction simple

```powershell
function Show-Bonjour {
    Write-Host "Bonjour !"
}

# Appeler la fonction
Show-Bonjour
```

## Fonction avec paramètres

```powershell
function Show-Salutation {
    param($Prenom)
    Write-Host "Bonjour, $Prenom !"
}

Show-Salutation "Marie"    # Bonjour, Marie !
Show-Salutation "Jean"     # Bonjour, Jean !
```

## Plusieurs paramètres

```powershell
function Get-IMC {
    param($Poids, $Taille)

    $imc = $Poids / ($Taille * $Taille)
    Write-Host "IMC : $([math]::Round($imc, 1))"
}

Get-IMC -Poids 70 -Taille 1.75
```

## Valeurs par défaut

```powershell
function Show-Salutation {
    param(
        $Prenom,
        $Langue = "FR"    # Valeur par défaut
    )

    if ($Langue -eq "FR") { Write-Host "Bonjour, $Prenom !" }
    if ($Langue -eq "EN") { Write-Host "Hello, $Prenom !" }
}

Show-Salutation "Marie"           # Bonjour, Marie !
Show-Salutation "John" -Langue EN # Hello, John !
```

## Retourner une valeur

```powershell
function ConvertTo-GB {
    param($Octets)
    return [math]::Round($Octets / 1GB, 2)
}

$taille = ConvertTo-GB -Octets 107374182400
Write-Host "$taille GB"  # 100 GB
```

> [!NOTE] Ce qui sort vraiment d'une fonction
> Une fonction retourne **tout ce qui part dans le flux de sortie**, pas seulement ce qui suit `return`.
>
> ```powershell
> function Test-Sortie {
>     "ligne A"              # part dans le flux de sortie -> retournée
>     Write-Host "ligne B"   # va directement à l'écran -> PAS retournée
> }
>
> $r = Test-Sortie
> # affiche  : ligne B
> # $r vaut  : "ligne A"
> ```
>
> C'est le piège classique : une fonction qui n'utilise que `Write-Host` **ne retourne rien**
> de réutilisable. Pour afficher ET retourner, utilisez `Write-Output` (ou une ligne nue).

## Paramètres avancés

```powershell
function Get-EtatService {
    param(
        [string]$Nom,           # Contraint le type : la valeur sera convertie en texte
        [switch]$Detaille       # Paramètre booléen (flag)
    )

    $service = Get-Service -Name $Nom

    Write-Host "$Nom : $($service.Status)"

    if ($Detaille) {
        $service | Format-List *
    }
}

Get-EtatService -Nom "Spooler"
Get-EtatService -Nom "Spooler" -Detaille
```

## Bonne pratique : nommer ses fonctions

Respectez la convention **Verbe-Nom** comme les cmdlets :

```powershell
function Get-RapportDisque { ... }
function Test-Connexion    { ... }
function Send-Alerte       { ... }
```

> [!TIP] Vérifiez que votre verbe est approuvé
>
> ```powershell
> Get-Verb            # la liste officielle (~100 verbes)
> Get-Verb Get, Set   # vérifier des verbes précis
> ```
>
> Un verbe hors liste (`Dire-`, `Calculer-`, `Analyser-`...) fonctionne, mais déclenche
> un avertissement dès que la fonction part dans un module :
> `WARNING: The names of some imported commands include unapproved verbs`.
>
> Équivalents approuvés les plus utiles : `Get` (lire), `Set` (modifier), `New` (créer),
> `Remove` (supprimer), `Test` (vérifier), `ConvertTo` / `ConvertFrom` (convertir),
> `Invoke` (exécuter), `Write` (émettre), `Send` (envoyer).

> [!success] À retenir
>
> - `function Nom { ... }` pour définir
> - `param($A, $B)` pour les paramètres
> - `return $valeur` pour retourner
> - Suivez la convention **Verbe-Nom**
> - Définissez toujours avant d'appeler

> **Lien**
>
> - [À propos des fonctions](https://learn.microsoft.com/fr-fr/powershell/module/microsoft.powershell.core/about/about_functions)

---

## Fiche récapitulative

![13_Fonctions](https://kayasam.github.io/powershell/ressources/images/13_Fonctions.png)
