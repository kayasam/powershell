---
title: "Exercice 13 - La Boite à Outils de Franky - Débutant"
publier: true
parcours-tssr: true
parcours-pro: false
---

# Exercice 13 - La Boite à Outils de Franky ⚙️ — Débutant

> Chapitre associé : [[cours/13-fonctions/13-fonctions]]

## Contexte

**Franky**, le charpentier du Thousand Sunny, ne fait jamais deux fois la même
chose à la main. Il fabrique des outils réutilisables.

Chaque fonction = un outil dans la boîte à outils.

> _"SUPER ! Un bon outil, c'est fait une fois et utilisé mille fois."_ — Franky

**Durée : 40 min**

> [!tip] Comment travailler
> On construit **un outil à la fois**, du plus simple au plus complet.
> Tapez chaque bout de code, exécutez-le, regardez ce qui sort. Ne lisez pas :
> faites tourner.

> [!warning] La règle qui fait perdre 10 minutes à tout le monde
> Une fonction doit être **définie avant d'être appelée**.
> Dans VSCode, sélectionnez le bloc `function { ... }` et faites **F8** pour le
> charger, _puis_ appelez-la. Sinon : `Le terme ... n'est pas reconnu`.

---

## Partie A : Votre premier outil (10 min)

### A1 — Une fonction sans rien

Tapez ceci, puis appelez-la :

```powershell
function Show-Bonjour {
    Write-Host "SUPER !"
}

Show-Bonjour
```

**A1.** Que se passe-t-il si vous appelez `Show-Bonjour` **trois fois** de suite ?

### A2 — Une fonction avec un paramètre

Modifiez votre fonction pour qu'elle salue quelqu'un :

```powershell
function Show-Bonjour {
    param($Prenom)

    Write-Host "SUPER, $Prenom !"
}

Show-Bonjour -Prenom "Franky"
Show-Bonjour -Prenom "Nami"
```

**A2.** Écrivez l'appel qui affiche `SUPER, Zoro !`

### A3 — Une valeur par défaut

```powershell
function Show-Bonjour {
    param($Prenom = "moussaillon")

    Write-Host "SUPER, $Prenom !"
}
```

**A3.** Qu'affiche `Show-Bonjour` appelée **sans aucun paramètre** ? Pourquoi ?

### A4 — À vous

**A4.** Écrivez une fonction `Show-Alerte` qui prend un paramètre `$Message` et
l'affiche en rouge.

> 💡 **Indice** : `Write-Host "texte" -ForegroundColor Red`

---

## Partie B : Une fonction qui RETOURNE une valeur (10 min)

Jusqu'ici vos fonctions **affichent**. Maintenant, on va en fabriquer une qui
**rend un résultat**, pour pouvoir s'en resservir.

### B1 — Convertir une prime

```powershell
function ConvertTo-Millions {
    param($Montant)

    return $Montant / 1000000
}

ConvertTo-Millions -Montant 500000000
```

**B1.** Quel nombre obtenez-vous ?

**B2.** Rangez le résultat dans une variable et réutilisez-le :

```powershell
$prime = ConvertTo-Millions -Montant 1111000000

Write-Host "Prime de Zoro : $prime millions de Berrys"
```

Est-ce que ça fonctionne ? Pourquoi ?

### B3 — Le piège à connaître

Testez ces deux fonctions, puis regardez ce que valent `$a` et `$b` :

```powershell
function Test-Affiche {
    Write-Host "bonjour"
}

function Test-Retourne {
    return "bonjour"
}

$a = Test-Affiche
$b = Test-Retourne

Write-Host "a vaut : [$a]"
Write-Host "b vaut : [$b]"
```

**B3.** Laquelle des deux variables est vide ? Expliquez avec vos mots.

> 📘 Une fonction qui n'utilise que `Write-Host` **ne rend rien** : elle parle à
> l'écran, mais ne donne rien à réutiliser. C'est le piège n°1 des fonctions.

---

## Partie C : Un outil qui en utilise un autre (10 min)

C'est tout l'intérêt de la boîte à outils : les outils se combinent.

```powershell
function Show-FichePirate {
    param(
        $Nom,
        $Prime
    )

    Write-Host "--- $Nom ---" -ForegroundColor Yellow

    # On réutilise l'outil de la partie B
    $millions = ConvertTo-Millions -Montant $Prime
    Write-Host "Prime  : $millions millions"

    if ($Prime -ge 1000000000) {
        Write-Host "Danger : Extremement dangereux"
    }
    elseif ($Prime -ge 100000000) {
        Write-Host "Danger : Dangereux"
    }
    else {
        Write-Host "Danger : Faible"
    }
}

Show-FichePirate -Nom "Roronoa Zoro" -Prime 1111000000
Show-FichePirate -Nom "Nami"         -Prime 366000000
```

**C1.** Quel niveau de danger obtient Zoro ? Et Nami ?

**C2.** Repérez la ligne `$millions = ConvertTo-Millions -Montant $Prime`.
Que fait-elle de remarquable ?

**C3.** Que se passe-t-il si vous exécutez `Show-FichePirate` dans un terminal
neuf, **sans** avoir chargé `ConvertTo-Millions` avant ?

---

## Mission finale D : le rapport d'équipage 🌟

Voici l'équipage. Chaque pirate est une **table de hachage** (chapitre 07) :

```powershell
$equipage = @(
    @{ Nom = "Monkey D. Luffy"; Prime = 3000000000 }
    @{ Nom = "Roronoa Zoro";    Prime = 1111000000 }
    @{ Nom = "Nami";            Prime = 366000000  }
)

# Pour lire un pirate :
$equipage[0].Nom      # Monkey D. Luffy
$equipage[0].Prime    # 3000000000
```

**D1.** Écrivez une fonction `Show-RapportEquipage` qui prend `$Liste` en
paramètre et affiche la fiche de **chaque** pirate.

```powershell
function Show-RapportEquipage {
    param($Liste)

    foreach ($pirate in $Liste) {
        # À vous : appelez Show-FichePirate avec $pirate.Nom et $pirate.Prime
    }
}

Show-RapportEquipage -Liste $equipage
```

**D2.** Complétez votre fonction pour qu'elle affiche, **à la fin**, le total des
primes de l'équipage.

```powershell
    $total = 0

    foreach ($pirate in $Liste) {
        # ... l'affichage de la fiche ...
        $total = $total + $pirate.Prime
    }

    # Après la boucle : affichez le total
```

> 💡 **Indice** : pour afficher le total en millions, réutilisez encore
> `ConvertTo-Millions`. Trois outils qui travaillent ensemble : c'est ça, une
> boîte à outils.

---

> [!success] Validation
>
> - Vous savez créer une fonction avec `function` et `param()`
> - Vous savez donner une **valeur par défaut** à un paramètre
> - Vous faites la différence entre **afficher** (`Write-Host`) et **retourner** (`return`)
> - Vous savez appeler une fonction **depuis** une autre fonction
> - Vous savez qu'une fonction doit être **définie avant** d'être appelée
> - Vous nommez vos fonctions en **Verbe-Nom**
