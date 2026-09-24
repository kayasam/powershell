---
title: Correction 11 - Le Scanner de la Flotte
publier: true
parcours-tssr: true
parcours-pro: true
---

# Correction - Exercice 11 : Le Scanner de la Flotte 🛸

> Chapitre associé : [[cours/11-boucles/11-boucles]]
> Énoncé de la version [[11-boucles-avance|avancée]], **réponse sous chaque
> question**. Les questions non marquées _(avancé)_ figurent aussi dans la
> version [[11-boucles-debutant|débutant]].
>
> 💡 Les blocs verts se **replient** : cliquez sur le titre pour masquer une
> réponse pendant la séance.

## Contexte

Vous êtes dans l'équipe de **Nami**, responsable des systèmes de navigation du
Thousand Sunny.

> _"Même les meilleurs pirates ont besoin de bons outils."_ — Nami

**Durée : 45 min**

## Les données

```powershell
$bases = @(
    [PSCustomObject]@{ Nom="Dressrosa";  IP="10.0.1.1"; Actif=$true;  Stockage=85 }
    [PSCustomObject]@{ Nom="Zou";        IP="10.0.1.2"; Actif=$true;  Stockage=42 }
    [PSCustomObject]@{ Nom="Whole Cake"; IP="10.0.1.3"; Actif=$false; Stockage=0  }
    [PSCustomObject]@{ Nom="Wano";       IP="10.0.1.4"; Actif=$true;  Stockage=93 }
    [PSCustomObject]@{ Nom="Egghead";    IP="10.0.1.5"; Actif=$true;  Stockage=17 }
    [PSCustomObject]@{ Nom="Elbaf";      IP="10.0.1.6"; Actif=$false; Stockage=0  }
)
```

---

## Partie A : Boucle de démarrage (10 min)

**A1.** Écrivez un compte à rebours de 5 à 1 suivi de « GO ! », avec une pause
entre chaque affichage. Que font les trois parties du `for` ?

> [!check]+ Réponse A1
>
> ```powershell
> for ($i = 5; $i -ge 1; $i--) {
>     Write-Host "Demarrage dans $i..."
>     Start-Sleep -Milliseconds 300
> }
> Write-Host "GO !" -ForegroundColor Green
> ```
>
> | Partie     | Rôle                   | Quand                    |
> | ---------- | ---------------------- | ------------------------ |
> | `$i = 5`   | initialisation         | une seule fois, au début |
> | `$i -ge 1` | condition de poursuite | avant **chaque** tour    |
> | `$i--`     | incrément              | après chaque tour        |

**A2.** Affichez la table de multiplication de 7, de 1 à 10.

> [!check]+ Réponse A2
>
> ```powershell
> for ($i = 1; $i -le 10; $i++) {
>     Write-Host "7 x $i = $(7 * $i)"
> }
> ```
>
> Variante plus lisible avec une plage :
>
> ```powershell
> foreach ($i in 1..10) { Write-Host "7 x $i = $(7 * $i)" }
> ```

**A3.** Pour chaque besoin, indiquez la boucle adaptée. _(avancé)_

> [!check]+ Réponse A3
>
> | Besoin                                             | Boucle           |
> | -------------------------------------------------- | ---------------- |
> | Parcourir une liste déjà récupérée                 | `foreach`        |
> | Compter de 1 à 100                                 | `for`            |
> | Attendre qu'un service démarre                     | `while`          |
> | Traiter chaque objet sortant d'un pipeline         | `ForEach-Object` |
> | Demander une saisie jusqu'à ce qu'elle soit valide | `do / while`     |

> 📘 **À comprendre**
> `1..10` crée directement une plage de nombres : `foreach ($i in 1..10)` est
> souvent plus lisible qu'un `for` classique.
>
> Le `for` garde son intérêt quand vous avez besoin de **l'index** lui-même.

---

## Partie B : Parcourir les bases (15 min)

**B1.** Affichez le statut de chaque base, en vert si elle est en ligne, en rouge
sinon. Combien sont en ligne ?

> [!check]+ Réponse B1
>
> ```powershell
> foreach ($base in $bases) {
>     if ($base.Actif) {
>         Write-Host "[$($base.Nom)] En ligne" -ForegroundColor Green
>     } else {
>         Write-Host "[$($base.Nom)] Hors ligne" -ForegroundColor Red
>     }
> }
> ```
>
> **4** bases en ligne : Dressrosa, Zou, Wano, Egghead. Whole Cake et Elbaf sont
> hors ligne.
>
> Pour le vérifier sans compter à la main :
>
> ```powershell
> @($bases | Where-Object Actif).Count
> ```

**B2.** Alertez sur les bases **actives** dont le stockage dépasse 80 %.
Lesquelles sont en alerte ?

> [!check]+ Réponse B2
>
> ```powershell
> foreach ($base in $bases) {
>     if (-not $base.Actif) { continue }
>
>     if ($base.Stockage -gt 80) {
>         Write-Host "ALERTE [$($base.Nom)] Stockage critique : $($base.Stockage)%" -ForegroundColor Red
>     } else {
>         Write-Host "OK     [$($base.Nom)] Stockage : $($base.Stockage)%" -ForegroundColor Green
>     }
> }
> ```
>
> **Dressrosa** (85 %) et **Wano** (93 %) — les deux seules bases actives
> au-dessus de 80 % de stockage.

**B3.** Comment ignorer les bases hors ligne sans imbriquer un `if` sur tout le corps ?

> [!check]+ Réponse B3
>
> ```powershell
> if (-not $base.Actif) { continue }
> ```
>
> C'est une **clause de garde** : si la base est hors ligne, `continue` passe
> immédiatement au tour suivant, sans exécuter la suite du corps de boucle.
>
> Sans elle, il faudrait imbriquer tout le corps dans un `if ($base.Actif) { ... }`,
> ce qui décale le code vers la droite et le rend moins lisible.

> 📘 **À comprendre**
> La clause de garde en début de boucle est une habitude à prendre : elle traite
> les cas à exclure **tout de suite**, et laisse le corps principal à plat.
>
> On retrouvera le même motif dans les fonctions (chapitre 13) pour valider les
> paramètres avant de travailler.

---

## Partie C : ForEach-Object dans le pipeline (10 min)

**C1.** Refaites la partie B en pipeline plutôt qu'avec `foreach`.

> [!check]+ Réponse C1
>
> ```powershell
> $bases |
>     Where-Object Actif -eq $true |
>     ForEach-Object {
>         $etat = if ($_.Stockage -gt 80) { "ALERTE" } else { "OK" }
>         "$etat - $($_.Nom) : $($_.Stockage)%"
>     }
> ```
>
> Le résultat est le même qu'en partie B : mêmes bases, même classement. Seule
> l'écriture change.

**C2.** Quelle différence entre `foreach` et `ForEach-Object` ? Quand préférer l'un
ou l'autre ?

> [!check]+ Réponse C2
>
> |               | `foreach`                               | `ForEach-Object`         |
> | ------------- | --------------------------------------- | ------------------------ |
> | Écriture      | mot-clé du langage                      | cmdlet dans un pipeline  |
> | Objet courant | vous le nommez (`$base`)                | c'est `$_`               |
> | Données       | **toute** la collection chargée d'abord | traitées **une par une** |
> | Vitesse       | plus rapide                             | plus lent                |
> | Mémoire       | tout en mémoire                         | au fil de l'eau          |
>
> `foreach` pour une collection déjà en mémoire et de taille raisonnable ;
> `ForEach-Object` dans un pipeline, ou sur un volume qui ne tient pas en mémoire.

**C3.** Sur 100 000 itérations, mesurez et classez ces quatre constructions.
Quel est le plus lent ? De combien ? Expliquez l'écart. _(avancé)_

```
foreach ($i in 1..100000) { }
for ($i=0; $i -lt 100000; $i++) { }
1..100000 | ForEach-Object { }
(1..100000).ForEach({ })
```

> [!check]+ Réponse C3
>
> ```powershell
> Measure-Command { foreach ($i in 1..100000) { } }
> Measure-Command { for ($i=0; $i -lt 100000; $i++) { } }
> Measure-Command { (1..100000).ForEach({ }) }
> Measure-Command { 1..100000 | ForEach-Object { } }
> ```
>
> | Construction                      | Temps mesuré |
> | --------------------------------- | ------------ |
> | `foreach ($i in 1..100000)`       | **32 ms**    |
> | `for ($i=0; ...)`                 | 55 ms        |
> | `(1..100000).ForEach({ })`        | 86 ms        |
> | `1..100000 \| ForEach-Object { }` | **215 ms**   |
>
> `ForEach-Object` est environ **7 fois plus lent** que `foreach`.
>
> **Cause** : chaque objet traverse le pipeline, ce qui implique une machinerie
> complète à chaque tour. `foreach` est une simple boucle du langage.

**C4.** Que fait `foreach ($f in Get-ChildItem C:\Windows -Recurse)` **avant**
d'entrer dans la boucle ? Et la version pipeline ? Laquelle risque de saturer la
mémoire sur un très gros dossier ? _(avancé)_

> [!check]+ Réponse C4
>
> ```powershell
> # Charge TOUT en memoire avant le premier tour
> foreach ($f in Get-ChildItem C:\Windows -Recurse) { }
>
> # Traite les objets au fur et a mesure
> Get-ChildItem C:\Windows -Recurse | ForEach-Object { }
> ```
>
> C'est la version `foreach` qui risque de saturer la mémoire sur un dossier de
> plusieurs centaines de milliers de fichiers.

> 📘 **À comprendre**
> Le paradoxe à retenir : **`foreach` est plus rapide, `ForEach-Object` est plus
> économe en mémoire.**
>
> En pratique : `foreach` par défaut, `ForEach-Object` quand la collection est
> énorme ou quand vous êtes déjà dans un pipeline.

---

## Partie D : Générer un rapport (10 min)

**D1.** Produisez un rapport texte listant toutes les bases avec leur statut et
leur stockage. Combien de lignes ?

> [!check]+ Réponse D1
>
> ```powershell
> $rapport = @()
>
> foreach ($base in $bases) {
>     $statut   = if ($base.Actif) { "En ligne" }            else { "Hors ligne" }
>     $stockage = if ($base.Actif) { "$($base.Stockage)%" }  else { "N/A" }
>
>     $rapport += "$($base.Nom) | $statut | Stockage: $stockage"
> }
>
> $rapport | ForEach-Object { Write-Host $_ }
> ```
>
> **6 lignes** — une par base, actives et inactives confondues.

**D2.** Combien de bases sont en ligne ?

> [!check]+ Réponse D2
>
> ```powershell
> @($bases | Where-Object Actif).Count
> ```
>
> **4**.

**D3.** Le rapport est construit avec `+=` sur un tableau. Pourquoi est-ce une
mauvaise habitude, et par quoi le remplacer ? _(avancé)_

> [!check]+ Réponse D3
> Parce qu'un tableau PowerShell a une **taille fixe**. `+=` ne l'agrandit pas :
> il crée un **nouveau** tableau, y recopie tout l'ancien, puis ajoute l'élément.
> Sur 6 bases c'est indolore ; sur 20 000 lignes, c'est des centaines de fois
> plus lent.
>
> Les remplacements :
>
> ```powershell
> # 1. Laisser la boucle construire la collection
> $rapport = foreach ($base in $bases) { "$($base.Nom) | ..." }
>
> # 2. Ou utiliser une liste .NET
> $rapport = [System.Collections.Generic.List[string]]::new()
> $rapport.Add("...")
> ```

**D4.** Produisez le même rapport sous forme d'**objets** plutôt que de chaînes,
exportable en CSV sans retouche. _(avancé)_

> [!check]+ Réponse D4
>
> ```powershell
> $rapport = foreach ($base in $bases) {
>     [PSCustomObject]@{
>         Nom      = $base.Nom
>         Statut   = if ($base.Actif) { "En ligne" } else { "Hors ligne" }
>         Stockage = if ($base.Actif) { $base.Stockage } else { $null }
>         Alerte   = ($base.Actif -and $base.Stockage -gt 80)
>     }
> }
>
> $rapport | Export-Csv "$env:TEMP\bases.csv" -NoTypeInformation -Encoding UTF8
> ```

> 📘 **À comprendre**
> Remarquez : `$rapport = foreach (...) { ... }` — une boucle **renvoie** tout ce
> que son corps produit. Pas besoin de `+=` ni d'initialiser `@()`.
>
> C'est l'écriture idiomatique en PowerShell, et de loin la plus rapide.
>
> Différence D1 / D4 : le premier produit du **texte** (bon pour l'écran, mort
> ensuite), le second des **objets** (triables, filtrables, exportables).

---

## Mission finale E : la boucle contrôlée 🌟

**E1.** Affichez les nombres de 1 à 15 en sautant le 7 et en vous arrêtant à 12.
Prédisez la sortie avant d'exécuter.

> [!check]+ Réponse E1
>
> ```powershell
> foreach ($n in 1..15) {
>     if ($n -eq 7)  { continue }
>     if ($n -eq 12) { break }
>     Write-Host $n
> }
> ```
>
> Sortie :
>
> ```
> 1 2 3 4 5 6 8 9 10 11
> ```
>
> Le 7 est **sauté** (`continue`), et la boucle **s'arrête avant** d'afficher 12
> (`break`) — 12, 13, 14 et 15 n'apparaissent jamais.

**E2.** Écrivez une surveillance qui affiche l'état des bases actives toutes les
2 secondes, avec un **délai maximal de 30 secondes** au-delà duquel elle abandonne
et le signale. _(avancé)_

> [!check]+ Réponse E2
>
> ```powershell
> $chrono = [System.Diagnostics.Stopwatch]::StartNew()
>
> while ($chrono.Elapsed.TotalSeconds -lt 30) {
>     Clear-Host
>     Write-Host "Surveillance - $(Get-Date -Format 'HH:mm:ss')" -ForegroundColor Cyan
>
>     foreach ($base in $bases) {
>         if (-not $base.Actif) { continue }
>         $couleur = if ($base.Stockage -gt 80) { "Red" } else { "Green" }
>         Write-Host "  $($base.Nom) : $($base.Stockage)%" -ForegroundColor $couleur
>     }
>
>     Start-Sleep -Seconds 2
> }
>
> Write-Host "Delai maximal atteint, surveillance interrompue." -ForegroundColor Yellow
> ```
>
> 💡 En version débutant, la boucle est un simple `while ($true)` qu'on arrête
> avec **Ctrl+C**.

**E3.** Deux boucles imbriquées parcourent les bases et leurs disques. Vous voulez
sortir **complètement** dès qu'un disque critique est trouvé. `break` seul
suffit-il ? Sinon, quelle syntaxe le permet ? _(avancé)_

> [!check]+ Réponse E3
> **Non**, `break` seul ne suffit pas : il ne sort que de la boucle **la plus
> interne**. Il faut une **étiquette** :
>
> ```powershell
> :recherche foreach ($base in $bases) {
>     foreach ($disque in $base.Disques) {
>         if ($disque.Critique) {
>             Write-Host "Disque critique sur $($base.Nom)"
>             break recherche
>         }
>     }
> }
> ```

> 📘 **À comprendre**
> Les trois mots de contrôle :
>
> | Mot                 | Effet                        |
> | ------------------- | ---------------------------- |
> | `continue`          | passe au tour suivant        |
> | `break`             | sort de la boucle courante   |
> | `break <etiquette>` | sort de la boucle **nommée** |
>
> ⚠️ Pour une attente, un **chronomètre** est bien plus fiable qu'un compteur de
> tours : si chaque tour prend un temps variable, compter 15 tours de 2 secondes
> ne garantit pas 30 secondes.

---

> [!success] Validation
>
> - Vous choisissez la boucle adaptée au besoin
> - Vous connaissez le coût relatif des différentes boucles
> - Vous distinguez chargement en mémoire et traitement au fil de l'eau
> - Vous savez sortir de boucles imbriquées
> - Vous savez borner une attente dans le temps

---

## Ce qu'il faut retenir

| Boucle                          | Usage                                         |
| ------------------------------- | --------------------------------------------- |
| `for ($i=0; $i -lt 10; $i++)`   | quand on a besoin de l'index                  |
| `foreach ($x in $collection)`   | parcourir une collection — **le plus rapide** |
| `$col \| ForEach-Object { $_ }` | dans un pipeline, au fil de l'eau             |
| `while ($condition)`            | tant que, test **avant**                      |
| `do { } while ($condition)`     | au moins une fois, test **après**             |
| `1..10`                         | créer une plage de nombres                    |
| `$var = foreach (...) { }`      | collecter sans `+=`                           |

**`foreach` est plus rapide, `ForEach-Object` est plus économe en mémoire.**
