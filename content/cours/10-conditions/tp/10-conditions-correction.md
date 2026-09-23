---
title: Correction 10 - L'Analyseur d'Intrusion
publier: true
parcours-tssr: true
parcours-pro: true
---

# Correction - Exercice 10 : L'Analyseur d'Intrusion 🔐

> Chapitre associé : [[10-conditions/10-conditions]]
> Énoncé de la version [[10-conditions-avance|avancée]], **réponse sous chaque
> question**. Les questions non marquées _(avancé)_ figurent aussi dans la
> version [[10-conditions-debutant|débutant]].
>
> 💡 Les blocs verts se **replient** : cliquez sur le titre pour masquer une
> réponse pendant la séance.

## Contexte

Vous êtes analyste pour la **Cipher Pol**. Des connexions suspectes sont détectées
sur les serveurs.

> _"Une seule faille peut tout faire tomber."_ — Rob Lucci

**Durée : 45 min**

## Objectif

Maîtriser les pièges du `switch`, comprendre ce que PowerShell considère comme
vrai, et écrire des conditions sûres.

---

## Partie A : Système de niveaux d'alerte (15 min)

| Tentatives | Niveau   |
| ---------- | -------- |
| moins de 3 | Normal   |
| 3 à 9      | Suspect  |
| 10 à 49    | Alerte   |
| 50 et plus | CRITIQUE |

**A1.** Écrivez ce classement avec `if / elseif / else`, avec une couleur par
niveau. Testez avec 1, 5, 23 et 99.

> [!check]+ Réponse A1
>
> ```powershell
> $tentatives = 23
>
> if ($tentatives -lt 3) {
>     Write-Host "Normal" -ForegroundColor Green
> } elseif ($tentatives -lt 10) {
>     Write-Host "Suspect" -ForegroundColor Yellow
> } elseif ($tentatives -lt 50) {
>     Write-Host "Alerte" -ForegroundColor DarkYellow
> } else {
>     Write-Host "CRITIQUE" -ForegroundColor Red
> }
> ```
>
> | Valeur | Niveau   |
> | ------ | -------- |
> | 1      | Normal   |
> | 5      | Suspect  |
> | 23     | Alerte   |
> | 99     | CRITIQUE |

**A2.** Pourquoi l'ordre des `elseif` est-il important ?

> [!check]+ Réponse A2
> Parce que le `if` s'arrête au **premier** test vrai. Si l'on testait `-lt 50`
> en premier, la valeur 1 déclencherait « Alerte » : elle est bien inférieure à 50.
>
> **La règle : du test le plus restrictif au plus large.**

**A3.** Réécrivez la même logique avec `switch`. Testez avec `2` **sans** `break`.
Que se passe-t-il, et pourquoi ?

> [!check]+ Réponse A3
>
> ```powershell
> switch ($tentatives) {
>     { $_ -lt 3 }  { Write-Host "Normal"   -ForegroundColor Green;      break }
>     { $_ -lt 10 } { Write-Host "Suspect"  -ForegroundColor Yellow;     break }
>     { $_ -lt 50 } { Write-Host "Alerte"   -ForegroundColor DarkYellow; break }
>     default       { Write-Host "CRITIQUE" -ForegroundColor Red }
> }
> ```
>
> **Sans `break`, avec la valeur 2**, trois lignes s'affichent :
>
> ```
> Normal
> Suspect
> Alerte
> ```
>
> Le `switch` n'arrête **pas** au premier cas trouvé : il teste toutes les
> clauses, et 2 est à la fois inférieur à 3, à 10 et à 50.
>
> Avec `break` dans chaque clause, seul « Normal » s'affiche.

**A4.** Dans quel cas l'absence de `break` est-elle au contraire **souhaitable** ?
_(avancé)_

> [!check]+ Réponse A4
> Quand on veut **cumuler** des actions. Exemple : un compte qui déclenche à la
> fois une alerte mail, une entrée de journal et un blocage — trois clauses qui
> doivent toutes s'exécuter.

> 📘 **À comprendre**
> C'est **la** différence entre `if` et `switch`, et le piège n°1 du chapitre :
>
> | Structure     | Comportement                               |
> | ------------- | ------------------------------------------ |
> | `if / elseif` | s'arrête au premier test vrai              |
> | `switch`      | teste **toutes** les clauses, sauf `break` |
>
> Dès que les conditions d'un `switch` peuvent se **chevaucher**, mettez `break`.
> Sur des valeurs exactes qui s'excluent naturellement, ce n'est pas nécessaire.

---

## Partie B : Analyser un log réel (15 min)

```powershell
$logs = @(
    [PSCustomObject]@{ IP="10.0.0.1";    Port=22;   Tentatives=2;   Utilisateur="nami"  }
    [PSCustomObject]@{ IP="10.0.0.15";   Port=3389; Tentatives=47;  Utilisateur="admin" }
    [PSCustomObject]@{ IP="192.168.1.5"; Port=80;   Tentatives=1;   Utilisateur="zoro"  }
    [PSCustomObject]@{ IP="172.16.0.99"; Port=22;   Tentatives=312; Utilisateur="root"  }
    [PSCustomObject]@{ IP="10.0.0.42";   Port=443;  Tentatives=8;   Utilisateur="sanji" }
    [PSCustomObject]@{ IP="10.0.1.1";    Port=22;   Tentatives=55;  Utilisateur="luffy" }
)
```

**B1.** Quelles IP sont critiques (50 tentatives ou plus) ?

> [!check]+ Réponse B1
>
> ```powershell
> $logs | Where-Object { $_.Tentatives -ge 50 }
> ```
>
> | IP            | Tentatives | Utilisateur |
> | ------------- | ---------- | ----------- |
> | `172.16.0.99` | 312        | root        |
> | `10.0.1.1`    | 55         | luffy       |
>
> ⚠️ `-ge` et non `-gt` : l'énoncé dit « 50 **ou plus** ».

**B2.** Quel utilisateur est le plus suspect ?

> [!check]+ Réponse B2
> **`root`**, depuis `172.16.0.99` : 312 tentatives sur le port **22** (SSH).
> C'est le profil typique d'une attaque par force brute.

**B3.** Affichez les connexions sur le port 22 **et** avec plus de 10 tentatives.

> [!check]+ Réponse B3
>
> ```powershell
> $logs | Where-Object { $_.Port -eq 22 -and $_.Tentatives -gt 10 }
> ```
>
> → `172.16.0.99` et `10.0.1.1`

**B4.** Affichez les connexions dont le port est **dans** la liste 22, 3389, 5985.
_(avancé)_

> [!check]+ Réponse B4
>
> ```powershell
> $logs | Where-Object { $_.Port -in 22, 3389, 5985 }
> ```
>
> → 4 connexions : `10.0.0.1`, `10.0.0.15`, `172.16.0.99`, `10.0.1.1`

> 📘 **À comprendre**
> Les opérateurs à retenir :
>
> | Opérateur               | Sens                                  |
> | ----------------------- | ------------------------------------- |
> | `-eq` / `-ne`           | égal / différent                      |
> | `-lt` / `-le`           | inférieur / inférieur ou égal         |
> | `-gt` / `-ge`           | supérieur / supérieur ou égal         |
> | `-and` / `-or` / `-not` | et / ou / non                         |
> | `-in` / `-contains`     | appartenance à une liste              |
> | `-like` / `-match`      | motif avec `*` / expression régulière |
>
> ⚠️ PowerShell n'utilise **jamais** `=`, `>` ou `<` pour comparer. `=` est une
> affectation, `>` est une redirection de fichier.

---

## Partie C : Analyser une connexion précise (15 min)

**C1.** Sortez la **2e** connexion de la liste dans une variable, puis appliquez-lui
le classement de la partie A. Quel niveau obtenez-vous ?

> [!check]+ Réponse C1
>
> ```powershell
> $connexion = $logs[1]     # la 2e ligne — on compte à partir de 0
>
> $connexion.IP             # 10.0.0.15
> $connexion.Tentatives     # 47
>
> if ($connexion.Tentatives -lt 3) {
>     Write-Host "Normal" -ForegroundColor Green
> } elseif ($connexion.Tentatives -lt 10) {
>     Write-Host "Suspect" -ForegroundColor Yellow
> } elseif ($connexion.Tentatives -lt 50) {
>     Write-Host "Alerte" -ForegroundColor DarkYellow
> } else {
>     Write-Host "CRITIQUE" -ForegroundColor Red
> }
> ```
>
> 47 tentatives → **Alerte**.

**C2.** Changez d'index pour atteindre les quatre niveaux. Quelle connexion donne
`CRITIQUE` ?

> [!check]+ Réponse C2
>
> | Index      | IP          | Tentatives | Niveau       |
> | ---------- | ----------- | ---------- | ------------ |
> | `$logs[2]` | 192.168.1.5 | 1          | Normal       |
> | `$logs[4]` | 10.0.0.42   | 8          | Suspect      |
> | `$logs[1]` | 10.0.0.15   | 47         | Alerte       |
> | `$logs[3]` | 172.16.0.99 | 312        | **CRITIQUE** |
>
> `$logs[5]` (55 tentatives) est également CRITIQUE.

**C3.** Affichez un message complet contenant l'IP, l'utilisateur et le nombre de
tentatives, sur une seule ligne.

> [!check]+ Réponse C3
>
> ```powershell
> Write-Host "IP : $($connexion.IP) - $($connexion.Utilisateur) - $($connexion.Tentatives) tentatives"
> ```
>
> Les `$( )` sont **obligatoires** dès qu'il y a un point : `"$connexion.IP"`
> afficherait le type de l'objet suivi de `.IP`.

**C4.** À partir d'un niveau (`"Normal"`, `"Suspect"`…), utilisez un `switch` pour
obtenir le nom de la couleur correspondante dans une variable. _(avancé)_

> [!check]+ Réponse C4
>
> ```powershell
> $niveau = "Alerte"
>
> $couleur = switch ($niveau) {
>     "Normal"   { "Green"      }
>     "Suspect"  { "Yellow"     }
>     "Alerte"   { "DarkYellow" }
>     "CRITIQUE" { "Red"        }
> }
>
> Write-Host "Niveau : $niveau" -ForegroundColor $couleur
> ```

> 📘 **À comprendre**
> Ce `switch` n'a **pas** besoin de `break` : les quatre valeurs s'excluent
> mutuellement, une seule peut correspondre. Le `break` ne devient nécessaire que
> lorsque les conditions peuvent se **chevaucher** (comme les `{ $_ -lt ... }` de
> la partie A).
>
> Notez que `-ForegroundColor` accepte une **variable** : la couleur est décidée
> avant l'affichage, pas écrite en dur.
>
> Pour appliquer tout cela aux **six** connexions d'un coup, il faudra une
> **boucle** — c'est l'objet du chapitre 11.

---

## Mission finale D : l'alerte intelligente 🌟

**D1.** Écrivez la condition qui affiche `>>> BLOQUÉ` pour une IP avec plus de
100 tentatives **et** sur le port 22. Testez-la sur la connexion concernée.

> [!check]+ Réponse D1
>
> ```powershell
> $connexion = $logs[3]
>
> if ($connexion.Tentatives -gt 100 -and $connexion.Port -eq 22) {
>     Write-Host ">>> BLOQUE : $($connexion.IP)" -ForegroundColor Red -BackgroundColor Black
> }
> ```
>
> Une seule IP est concernée : `172.16.0.99` (312 tentatives, port 22). Testez
> avec un autre index : rien ne s'affiche, les **deux** conditions doivent être
> vraies.

**D2.** Affichez le nombre total de connexions CRITIQUES (50 tentatives ou plus).

> [!check]+ Réponse D2
>
> ```powershell
> $critiques = @($logs | Where-Object { $_.Tentatives -ge 50 }).Count
> Write-Host "Total CRITIQUES : $critiques" -ForegroundColor Red
> ```
>
> → **2**
>
> ⚠️ Le `@( )` autour du `Where-Object` n'est pas décoratif : sans lui, un
> résultat unique n'aurait pas de `.Count` fiable.

**D3.** Prédisez le résultat de chacun de ces tests, puis vérifiez. Expliquez
chaque surprise. _(avancé)_

```powershell
if ("")    { "A" }
if ("   ") { "B" }
if (0)     { "C" }
if ("0")   { "D" }
if (@())   { "E" }
if (@(0))  { "F" }
```

> [!check]+ Réponse D3
>
> | Test         | Résultat | Explication                                                             |
> | ------------ | -------- | ----------------------------------------------------------------------- |
> | `if ("")`    | **faux** | chaîne vide                                                             |
> | `if ("   ")` | **VRAI** | ⚠️ des espaces, c'est une chaîne **non vide**                           |
> | `if (0)`     | **faux** | zéro numérique                                                          |
> | `if ("0")`   | **VRAI** | ⚠️ c'est du **texte**, pas le nombre zéro                               |
> | `if (@())`   | **faux** | tableau vide                                                            |
> | `if (@(0))`  | **faux** | ⚠️ tableau à un élément : PowerShell le **déballe**, on retombe sur `0` |

**D4.** Quelle est la façon **sûre** de tester « cette saisie est-elle vide ? »
_(avancé)_

> [!check]+ Réponse D4
>
> ```powershell
> if ([string]::IsNullOrWhiteSpace($saisie)) { "vide" }
> ```
>
> C'est le seul test qui attrape à la fois `$null`, une chaîne vide **et** une
> chaîne d'espaces.

**D5.** Réécrivez cette condition pour la rendre lisible, sans changer son
comportement. Citez ses deux défauts. _(avancé)_

```powershell
if (((Get-Service W32Time).Status -eq "Running") -and ((Get-Service Spooler).Status -eq "Running") -and ((Get-Service W32Time).StartType -eq "Automatic")) { "OK" }
```

> [!check]+ Réponse D5
> **Ses deux défauts :**
>
> 1. elle interroge **deux fois** le même service `W32Time` — inutile ;
> 2. elle tient sur une ligne illisible, sans aucun nom qui explique ce qui est testé.
>
> Version corrigée :
>
> ```powershell
> $heure    = Get-Service W32Time
> $spouleur = Get-Service Spooler
>
> $heureActive      = $heure.Status -eq "Running"
> $heureAutomatique = $heure.StartType -eq "Automatic"
> $spouleurActif    = $spouleur.Status -eq "Running"
>
> if ($heureActive -and $spouleurActif -and $heureAutomatique) {
>     Write-Host "OK : les deux services tournent" -ForegroundColor Green
> }
> ```

> 📘 **À comprendre**
> Deux réflexes à garder de cette mission :
>
> - **Nommer les conditions intermédiaires.** `$heureActive` se relit six mois
>   plus tard ; un `.Status -eq "Running"` noyé dans un `-and`, non.
> - **Ne jamais interroger deux fois la même source.** On range le résultat dans
>   une variable, puis on l'exploite.
>
> Ces deux habitudes coûtent trois lignes de plus et font gagner des heures de
> dépannage.

---

> [!success] Validation
>
> - Vous maîtrisez `if / elseif / else` et l'ordre des tests
> - Vous savez pourquoi un `switch` a besoin de `break`
> - Vous connaissez les valeurs que PowerShell considère comme vraies
> - Vous savez tester une saisie vide de façon fiable
> - Vous savez rendre lisible une condition complexe

---

## Ce qu'il faut retenir

| Structure                          | Usage                                       |
| ---------------------------------- | ------------------------------------------- |
| `if / elseif / else`               | quelques branches, s'arrête au premier vrai |
| `switch`                           | beaucoup de valeurs — **pensez au `break`** |
| `-and` · `-or` · `-not`            | combiner plusieurs conditions               |
| `$objet.Propriete -eq ...`         | tester la propriété d'un objet              |
| `[string]::IsNullOrWhiteSpace($x)` | tester une saisie vide **de façon sûre**    |
| `@(...).Count`                     | compter de façon fiable                     |

**`if` s'arrête au premier vrai. `switch` teste tout — sauf si vous mettez `break`.**
