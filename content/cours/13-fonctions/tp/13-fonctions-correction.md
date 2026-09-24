---
title: Correction 13 - La Boite à Outils de Franky
publier: true
parcours-tssr: true
parcours-pro: true
---

# Correction - Exercice 13 : La Boite à Outils de Franky ⚙️

> Chapitre associé : [[cours/13-fonctions/13-fonctions]]
> Énoncé de la version [[13-fonctions-avance|avancée]], **réponse sous chaque
> question**.
>
> 💡 Les blocs verts se **replient** : cliquez sur le titre pour masquer une
> réponse pendant la séance.

> [!info] Correspondance avec la version débutant
> La version [[13-fonctions-debutant|débutant]] pose les **mêmes notions**, mais
> découpées en étapes plus petites et dans un ordre différent :
>
> | Débutant | Correspond à | Remarque                                        |
> | -------- | ------------ | ----------------------------------------------- |
> | A1 · A2  | —            | prise en main, pas de piège                     |
> | A3       | **A1**       | valeur par défaut                               |
> | A4       | —            | voir l'encadré _Réponse débutant A4_ ci-dessous |
> | B1 · B2  | **A2**       | `ConvertTo-Millions`                            |
> | B3       | **B1 · B2**  | afficher vs retourner                           |
> | C1 · C2  | **B3 · B4**  | fiche pirate + réutilisation                    |
> | C3       | —            | voir l'encadré _Réponse débutant C3_ ci-dessous |
> | D1 · D2  | **D1**       | rapport d'équipage                              |
>
> La partie **C** (objet retourné) et la section **hors programme** n'existent
> que dans la version avancée.

## Contexte

**Franky** ne fait jamais deux fois la même chose à la main. Il fabrique des
outils réutilisables.

> _"SUPER ! Un bon outil, c'est fait une fois et utilisé mille fois."_ — Franky

**Durée : 35 min**

---

## Partie A : Vos premiers outils (10 min)

**A1.** Écrivez une fonction qui salue une personne passée en paramètre.
Donnez à ce paramètre une **valeur par défaut**.

> [!check]+ Réponse A1
>
> ```powershell
> function Show-Bonjour {
>     param($Prenom = "moussaillon")
>
>     Write-Host "SUPER, $Prenom !"
> }
>
> Show-Bonjour -Prenom "Franky"   # SUPER, Franky !
> Show-Bonjour                    # SUPER, moussaillon !
> ```
>
> Sans argument, c'est la valeur déclarée dans le `param()` qui s'applique.
> Le paramètre devient **optionnel**.

> [!check]- Réponse débutant A4 — `Show-Alerte`
>
> ```powershell
> function Show-Alerte {
>     param($Message)
>
>     Write-Host $Message -ForegroundColor Red
> }
>
> Show-Alerte -Message "Marine en approche !"
> ```

**A2.** Écrivez une fonction `ConvertTo-Millions` qui convertit un montant en
millions et **retourne** le résultat. Prouvez qu'il est réutilisable.

> [!check]+ Réponse A2
>
> ```powershell
> function ConvertTo-Millions {
>     param($Montant)
>
>     return $Montant / 1000000
> }
>
> ConvertTo-Millions -Montant 500000000     # 500
>
> $prime = ConvertTo-Millions -Montant 1111000000
> Write-Host "Prime de Zoro : $prime millions de Berrys"
> ```
>
> La fonction **retourne** une valeur : on peut donc la ranger dans une variable
> et la réutiliser. C'est ce qui la distingue d'une fonction qui se contente
> d'afficher.

**A3.** Ces noms de fonctions sont mauvais. Corrigez-les et expliquez pourquoi.
Quelle commande vérifie qu'un verbe est autorisé ?

> [!check]+ Réponse A3
>
> | Nom proposé        | Nom correct    | Problème                               |
> | ------------------ | -------------- | -------------------------------------- |
> | `calculTVA`        | `Get-TVA`      | pas de tiret, pas de Verbe-Nom         |
> | `Afficher-Rapport` | `Show-Rapport` | `Afficher` n'est pas un verbe approuvé |
> | `Verifier-Disque`  | `Test-Disque`  | `Verifier` n'est pas un verbe approuvé |
>
> ```powershell
> Get-Verb              # la liste officielle, environ 100 verbes
> Get-Verb Get, Set     # verifier des verbes precis
> ```

> 📘 **À comprendre**
> Un verbe hors liste **fonctionne**, mais déclenche un avertissement dès que la
> fonction part dans un module (chapitre 23) :
> `WARNING: The names of some imported commands include unapproved verbs`.
>
> Les verbes les plus utiles : `Get` (lire), `Set` (modifier), `New` (créer),
> `Remove` (supprimer), `Test` (vérifier), `ConvertTo` / `ConvertFrom`,
> `Show` (afficher), `Write` (émettre), `Invoke` (exécuter).

---

## Partie B : Afficher ou retourner (10 min)

**B1.** Que contiendrait `$r` dans chaque cas ? Expliquez.

```powershell
function Test-A { Write-Host "bonjour" }
function Test-B { "bonjour" }
function Test-C { "un"; Write-Host "deux"; return "trois"; "quatre" }
```

> [!check]+ Réponse B1
>
> ```powershell
> $r = Test-A ; $r     # vide
> $r = Test-B ; $r     # bonjour
> $r = Test-C ; $r     # un, trois
> ```
>
> | Fonction                          | Écran     | Variable                       |
> | --------------------------------- | --------- | ------------------------------ |
> | `Test-A` — `Write-Host "bonjour"` | `bonjour` | **vide**                       |
> | `Test-B` — `"bonjour"`            | rien      | `bonjour`                      |
> | `Test-C`                          | `deux`    | **`un`, `trois`** (2 éléments) |

**B2.** Que fait réellement `return` en PowerShell ?

> [!check]+ Réponse B2
> `return` ne fait que **sortir** de la fonction. Il n'est pas le seul moyen de
> renvoyer une valeur : **tout ce qui part dans le flux de sortie est retourné**.
>
> Dans `Test-C`, `"un"` est retourné sans `return`, et `"quatre"` ne l'est jamais
> car il se trouve après le `return`.

> 📘 **À comprendre**
> C'est **le** piège des fonctions PowerShell :
>
> | Commande                        | Va où ?               | Capturable ? |
> | ------------------------------- | --------------------- | ------------ |
> | `Write-Host`                    | directement à l'écran | **non**      |
> | `Write-Output` ou une ligne nue | flux de sortie        | **oui**      |
>
> Une fonction qui n'utilise que `Write-Host` **ne retourne rien** de réutilisable.
> C'est acceptable pour un affichage décoratif, jamais pour un outil.
>
> D'où la différence entre `Show-FichePirate` (qui affiche) et `Get-InfoServeur`
> (qui retourne). Le **verbe** annonce déjà l'intention.

**B3.** Écrivez une fonction qui affiche la fiche d'un pirate : nom, prime
formatée, niveau de danger.

> [!check]+ Réponse B3
>
> ```powershell
> function Show-FichePirate {
>     param(
>         $Nom,
>         $Prime
>     )
>
>     Write-Host "--- $Nom ---" -ForegroundColor Yellow
>
>     $millions = ConvertTo-Millions -Montant $Prime
>     Write-Host "Prime  : $millions millions"
>
>     if ($Prime -ge 1000000000) {
>         Write-Host "Danger : Extremement dangereux"
>     }
>     elseif ($Prime -ge 100000000) {
>         Write-Host "Danger : Dangereux"
>     }
>     elseif ($Prime -ge 10000000) {
>         Write-Host "Danger : Modere"
>     }
>     else {
>         Write-Host "Danger : Faible"
>     }
> }
> ```
>
> | Pirate       | Prime         | Danger                    |
> | ------------ | ------------- | ------------------------- |
> | Roronoa Zoro | 1 111 000 000 | **Extrêmement dangereux** |
> | Nami         | 366 000 000   | **Dangereux**             |
>
> 💡 Une écriture plus courte existe (`$danger = if (...) {...}`), mais elle n'a
> pas été vue en cours. Un `if/elseif` classique est parfaitement correct.

**B4.** Faites-lui **réutiliser** `ConvertTo-Millions`. Pourquoi est-ce préférable
à recopier le code ?

> [!check]+ Réponse B4
> C'est la ligne `$millions = ConvertTo-Millions -Montant $Prime` : elle
> **réutilise** la fonction de la partie A à l'intérieur d'une autre fonction.
>
> C'est le principe de la boîte à outils : on empile les outils au lieu de
> recopier le code. Si demain le format des primes change, on modifie **un seul**
> endroit.

> [!check]- Réponse débutant C3 — fonction non chargée
> Dans un terminal neuf, `Show-FichePirate` échoue sur :
>
> ```
> Le terme « ConvertTo-Millions » n'est pas reconnu...
> ```
>
> Une fonction doit être **définie avant** d'être appelée. Dans un script, on place
> donc toutes les fonctions en haut du fichier.

> 📘 **À comprendre**
> **Une fonction peut appeler une autre fonction.** C'est ce qui transforme des
> scripts en véritable outillage.
>
> ⚠️ Passez les arguments par **nom**, pas par virgules :
> `Show-FichePirate "Zoro", 1111000000` est une **erreur** — c'est
> `-Nom "Zoro" -Prime 1111000000`.

---

## Partie C : Une fonction qui retourne un objet (10 min)

**C1.** Écrivez une fonction qui renvoie un **objet** décrivant la machine :
nom du serveur, RAM totale, RAM libre, modèle de CPU, heure du relevé.

> [!check]+ Réponse C1
>
> ```powershell
> function Get-InfoServeur {
>     param($NomServeur)
>
>     $memoire = Get-CimInstance Win32_OperatingSystem
>     $cpu     = Get-CimInstance Win32_Processor | Select-Object -First 1
>
>     return [PSCustomObject]@{
>         Serveur    = $NomServeur
>         RAM_Total  = $memoire.TotalVisibleMemorySize / 1MB
>         RAM_Libre  = $memoire.FreePhysicalMemory / 1MB
>         CPU_Modele = $cpu.Name
>         Heure      = Get-Date -Format "HH:mm:ss"
>     }
> }
>
> $info = Get-InfoServeur -NomServeur "Thousand-Sunny"
> $info | Format-List
> ```
>
> Sortie type :
>
> ```
> Serveur    : Thousand-Sunny
> RAM_Total  : 31,6952362060547
> RAM_Libre  : 10,2158203125
> CPU_Modele : 12th Gen Intel(R) Core(TM) i7-12700H
> Heure      : 14:32:07
> ```

**C2.** Prouvez que le résultat est un vrai objet : triez-le, filtrez-le, exportez-le.

> [!check]+ Réponse C2
>
> ```powershell
> $info.RAM_Libre                  # acces direct a une propriete
> $info | Export-Csv "$env:TEMP\serveur.csv" -NoTypeInformation -Encoding UTF8
> ```
>
> C'est possible parce que la fonction renvoie un **objet**, pas du texte. On peut
> donc accéder à chacune de ses propriétés — et le trier, le filtrer, l'exporter
> (chapitre 08).

**C3.** Pourquoi est-ce meilleur qu'une fonction qui afficherait le rapport ?

> [!check]+ Réponse C3
> Un objet peut être **réutilisé** : trié, filtré, exporté, agrégé sur cinquante
> machines, envoyé dans un tableau de bord.
>
> Un affichage `Write-Host` ne peut être que **lu par un humain**. Dès qu'on veut
> en faire quelque chose, il faut tout réécrire.
>
> La règle : `Show-` affiche, `Get-` retourne. En cas de doute, **retournez** —
> l'appelant pourra toujours afficher.

---

## Mission finale D : la boîte à outils complète 🌟

**D1.** Écrivez `Show-RapportEquipage` qui affiche l'analyse de chaque pirate
puis le total des primes.

> [!check]+ Réponse D1
>
> ```powershell
> function Show-RapportEquipage {
>     param($Liste)
>
>     $total = 0
>
>     foreach ($pirate in $Liste) {
>         Show-FichePirate -Nom $pirate.Nom -Prime $pirate.Prime
>         $total = $total + $pirate.Prime
>     }
>
>     $totalMillions = ConvertTo-Millions -Montant $total
>     Write-Host ""
>     Write-Host "TOTAL EQUIPAGE : $totalMillions millions" -ForegroundColor Green
> }
>
> Show-RapportEquipage -Liste $equipage
> ```
>
> Sur les trois pirates de l'énoncé : total **4 477 millions**.
>
> 💡 Variante avec le pipeline (chapitre 09), si le groupe est à l'aise :
> `$total = ($Liste | Measure-Object Prime -Sum).Sum`

**D2.** Faites-la renvoyer **aussi** un objet de synthèse.

> [!check]+ Réponse D2
>
> ```powershell
> function Show-RapportEquipage {
>     param($Liste)
>
>     foreach ($p in $Liste) {
>         Show-FichePirate -Nom $p.Nom -Prime $p.Prime
>     }
>
>     $m = $Liste | Measure-Object Prime -Sum -Average
>
>     return [PSCustomObject]@{
>         NbPirates    = $Liste.Count
>         PrimeTotale  = $m.Sum
>         PrimeMoyenne = $m.Average
>     }
> }
> ```
>
> Résultat : 3 pirates · total 4 477 000 000 · moyenne ≈ 1 492 333 333.

> 📘 **À comprendre**
> Regardez la différence entre **D1** et **D2** : le premier ne fait
> qu'**afficher**, le second **retourne** en plus un objet exploitable.
>
> C'est la marque d'un outil professionnel : il informe l'humain **et** alimente
> le script suivant.

---

> [!success] Validation
>
> - Vous nommez vos fonctions en Verbe-Nom **approuvé**
> - Vous composez des fonctions entre elles
> - Vous distinguez **afficher** et **retourner**
> - Vous faites retourner à vos fonctions des objets réutilisables

---

## Pour aller plus loin — hors programme

> [!info] Non évalué
> Ces questions portent sur des notions **non abordées au chapitre 13**.
> Elles ne figurent que dans la version avancée.

**E1.** Rendez le paramètre `Nom` **obligatoire**, et limitez `DevilFruit` à
`$true` / `$false`.

> [!check]+ Réponse E1
>
> ```powershell
> function Show-FichePirate {
>     param(
>         [Parameter(Mandatory)]
>         [string]$Nom,
>
>         [Parameter(Mandatory)]
>         [long]$Prime,
>
>         [bool]$DevilFruit = $false
>     )
> }
> ```
>
> Sans `-Nom`, PowerShell **demande la valeur** de façon interactive.

**E2.** Rendez la fonction de conversion utilisable aussi par le pipeline.

> [!check]+ Réponse E2
>
> ```powershell
> function ConvertTo-Millions {
>     param(
>         [Parameter(ValueFromPipeline)]
>         $Montant
>     )
>
>     process {
>         $Montant / 1000000
>     }
> }
>
> ConvertTo-Millions -Montant 2500000
> 3000000000, 500000000, 1000 | ConvertTo-Millions
> ```
>
> L'attribut **`[Parameter(ValueFromPipeline)]`** autorise l'entrée par pipeline,
> et le bloc **`process { }`** s'exécute **une fois par objet reçu**.
>
> Sans le bloc `process`, seul le **dernier** objet est traité : les précédents
> sont silencieusement ignorés.
>
> | Bloc      | Quand                            |
> | --------- | -------------------------------- |
> | `begin`   | une fois, avant le premier objet |
> | `process` | **une fois par objet**           |
> | `end`     | une fois, après le dernier       |

**E3.** Ajoutez une **aide intégrée**, vérifiez avec `Get-Help`.

> [!check]+ Réponse E3
>
> ```powershell
> function ConvertTo-Millions {
>     <#
>     .SYNOPSIS
>         Convertit un montant en millions.
>     .PARAMETER Montant
>         Le montant en berrys.
>     .EXAMPLE
>         ConvertTo-Millions -Montant 3000000000
>     #>
>     param($Montant)
> }
>
> Get-Help ConvertTo-Millions -Full
> ```

**E4.** Une fonction peut-elle modifier durablement une variable extérieure ?

> [!check]+ Réponse E4
> Elle peut la **lire**, mais pas la **modifier durablement** : l'affectation crée
> une copie locale.
>
> ```powershell
> $compteur = 0
> function Add-Un { $compteur = $compteur + 1 }
> Add-Un
> $compteur        # toujours 0
> ```
>
> Les deux façons propres de faire remonter une valeur :
>
> 1. **retourner** la valeur et l'affecter à l'appel — `$x = Ma-Fonction` ;
> 2. passer la variable **par référence** avec `[ref]`, rarement nécessaire.
>
> ⚠️ `$global:` fonctionne mais est déconseillé : il crée des dépendances
> invisibles entre les parties du script.

---

## Ce qu'il faut retenir

| Écriture                            | Rôle                              |
| ----------------------------------- | --------------------------------- |
| `function Verbe-Nom { param(...) }` | définir une fonction              |
| `$Param = "valeur"` dans `param()`  | valeur par défaut                 |
| `return`                            | sortir de la fonction             |
| `Get-Verb`                          | vérifier qu'un verbe est approuvé |
| `[switch]$Flag`                     | paramètre booléen sans valeur     |

**`Write-Host` affiche. Une ligne nue ou `Write-Output` retourne.**
Le verbe du nom annonce déjà l'intention : `Show-` affiche, `Get-` retourne.

**Une fonction doit être définie avant d'être appelée.**
