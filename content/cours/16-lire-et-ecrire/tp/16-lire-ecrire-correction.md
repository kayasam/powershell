---
title: Correction 16 - Le Journal de Bord de Nami
publier: true
parcours-tssr: true
parcours-pro: true
---

# Correction - Exercice 16 : Le Journal de Bord de Nami 🗺️

> Chapitre associé : [[cours/16-lire-et-ecrire/16-lire-et-ecrire]]
> Correction des versions [[16-lire-ecrire-debutant|débutant]] et [[16-lire-ecrire-avance|avancé]].
> Les questions marquées _(avancé)_ ne figurent que dans la version avancée.

---

> [!info] Enonce allege - correspondance des numeros
> Six questions ont ete retirees de l'enonce (bandeau orange ci-dessous).
>
> | Enonce actuel | Correction                                         |
> | ------------- | -------------------------------------------------- |
> | E3            | E3 (reformule : ecrire ET relire en UTF-8)         |
> | F2            | nouvelle question - voir F1 de la version debutant |
>
> Les mesures de performance (`Measure-Command`) et la classe `[System.IO.File]`
> relevent du **chapitre 14**, que le parcours TSSR ne suit pas.

---

## Partie A : Lire le journal

```powershell
Get-Content $journalPath
Get-Content $journalPath -Tail 3
(Get-Content $journalPath).Count
```

**A1. Combien d'entrées, hors ligne de titre ?**

Le fichier contient **6 lignes** au total, donc **5 entrées** (la première est le titre).

**A2. Quelle est la dernière entrée ?**

```
2026-01-19 | Cap : Est | Meteo : Degage | Arrivee a Elbaf
```

**A3. Les 2 premières lignes.**

```powershell
Get-Content $journalPath -TotalCount 2
```

> [!warning] Retire de l'enonce - notion non vue a ce stade
> Cette question ne figure plus dans le TP. La reponse est conservee ici :
> reintegrez-la si vous ajoutez la notion au cours.

**A4. Lire en une seule chaîne.** _(avancé)_

```powershell
Get-Content $journalPath -Raw
```

| Lecture            | Type obtenu                       |
| ------------------ | --------------------------------- |
| `Get-Content`      | `Object[]` — un tableau de lignes |
| `Get-Content -Raw` | `String` — une seule chaîne       |

`-Raw` est préférable quand on veut appliquer une **expression régulière sur
plusieurs lignes**, ou quand on manipule le fichier comme un bloc unique.

> 📘 **À comprendre**
> Par défaut, `Get-Content` renvoie un **tableau** : une ligne = un élément.
> C'est ce qui permet `.Count`, `[0]`, `Where-Object`…
>
> | Paramètre       | Effet                                                   |
> | --------------- | ------------------------------------------------------- |
> | `-TotalCount n` | les **n premières** lignes                              |
> | `-Tail n`       | les **n dernières** — indispensable sur un gros journal |
> | `-Raw`          | tout en une seule chaîne                                |

---

## Partie B : Ajouter une entrée

**B1. La ligne s'ajoute-t-elle sans effacer ?**

Oui. `Add-Content` **ajoute à la fin**, le contenu existant est préservé.

**B2. Et avec `Set-Content` ?**

Le fichier aurait été **entièrement écrasé** : il ne resterait que la nouvelle ligne.

| Cmdlet        | Effet                      |
| ------------- | -------------------------- |
| `Set-Content` | **écrase** tout le contenu |
| `Add-Content` | **ajoute** à la fin        |

**B3. `Out-File` ou `Set-Content` ?** _(avancé)_

| Cmdlet        | Reçoit                     | Usage                                      |
| ------------- | -------------------------- | ------------------------------------------ |
| `Set-Content` | du **texte**               | écrire une chaîne ou un tableau de chaînes |
| `Out-File`    | des **objets** du pipeline | capturer une sortie telle qu'affichée      |

`Out-File -Append` est l'équivalent de `Add-Content`.

> 📘 **À comprendre**
> ⚠️ La confusion `Set-Content` / `Add-Content` est **la** cause n°1 de journaux
> effacés par accident.
>
> Moyen mnémotechnique : **Set** remet à zéro (comme « définir »),
> **Add** ajoute.

---

## Partie C : Chercher dans le journal

```powershell
Get-Content $journalPath | Where-Object { $_ -like "*Orageux*" -or $_ -like "*Brumeux*" }
```

**C1. Combien de journées à météo dégradée ?**

**2** — le 16 (orageux) et le 17 (brumeux).

**C2. Les jours où le cap était `Nord`.**

```powershell
Get-Content $journalPath | Where-Object { $_ -like "*Nord*" }
```

**1** seule journée : le 17 janvier.

**C3. Les lignes contenant `Degage`.**

```powershell
@(Get-Content $journalPath | Where-Object { $_ -like "*Degage*" }).Count
```

**3** journées.

> [!warning] Retire de l'enonce - notion non vue a ce stade
> Cette question ne figure plus dans le TP. La reponse est conservee ici :
> reintegrez-la si vous ajoutez la notion au cours.

**C4. Le numéro de ligne d'un mot.** _(avancé)_

```powershell
Select-String -Path $journalPath -Pattern "Nord"
```

`Select-String` affiche le fichier, le **numéro de ligne** et la ligne trouvée —
c'est le `grep` de PowerShell (chapitre 23).

> 📘 **À comprendre**
> Deux façons de chercher, à ne pas confondre :
>
> | Commande                      | Renvoie                                               |
> | ----------------------------- | ----------------------------------------------------- |
> | `Get-Content \| Where-Object` | les **lignes** correspondantes                        |
> | `Select-String`               | des objets avec **fichier + numéro de ligne + ligne** |
>
> Pour du dépannage, `Select-String` est bien plus pratique : il dit **où** c'est.

---

## Partie D : Créer un résumé

```powershell
$resume = Get-Content $journalPath | Where-Object { $_ -like "*Degage*" }
Set-Content -Path "$env:TEMP\Navigation\resume-meteo.txt" -Value $resume
```

**D1. Combien de lignes contient le résumé ?**

**3**.

**D2. Pourquoi `Set-Content` et non `Add-Content` ?**

Parce qu'on veut un fichier **neuf** à chaque génération. Avec `Add-Content`,
relancer le script deux fois donnerait 6 lignes, puis 9, etc.

> [!warning] Retire de l'enonce - notion non vue a ce stade
> Cette question ne figure plus dans le TP. La reponse est conservee ici :
> reintegrez-la si vous ajoutez la notion au cours.

**D3. Transformer le journal en objets.** _(avancé)_

```powershell
$entrees = Get-Content $journalPath |
    Select-Object -Skip 1 |
    ForEach-Object {
        $champs = $_ -split '\s*\|\s*'
        [PSCustomObject]@{
            Date      = $champs[0]
            Cap       = ($champs[1] -replace 'Cap : ', '').Trim()
            Meteo     = ($champs[2] -replace 'Meteo : ', '').Trim()
            Evenement = $champs[3]
        }
    }

$entrees | Where-Object Cap -eq "Nord"
$entrees | Group-Object Meteo | Select-Object Count, Name
$entrees | Export-Csv "$env:TEMP\Navigation\journal.csv" -NoTypeInformation -Encoding UTF8
```

> 📘 **À comprendre**
> D3 est le vrai saut qualitatif du chapitre : passer du **texte** aux **objets**.
>
> Une fois transformé, le journal se filtre, se groupe, se trie et s'exporte comme
> n'importe quelle donnée. `-split` découpe, `Select-Object -Skip 1` saute le titre.
>
> C'est exactement ce qu'on fera au chapitre 18 sur les journaux d'événements.

---

## Partie E : Corriger une entrée

```powershell
(Get-Content $journalPath) -replace "Ile fantome apercue", "Ile de Skypiea apercue" |
    Set-Content $journalPath
```

**E1. La correction a-t-elle fonctionné ?**

Oui — relisez le fichier, la ligne du 17 janvier est modifiée.

**E2. Pourquoi les parenthèses ?**

Elles forcent PowerShell à **lire tout le fichier d'abord**, et à le refermer,
avant d'écrire.

Sans elles, le fichier serait encore **ouvert en lecture** au moment où
`Set-Content` tente d'écrire dedans : erreur d'accès, ou fichier vidé.

**E3. Le piège de l'encodage.** _(avancé)_

```powershell
Set-Content "$env:TEMP\acc.txt" -Value "Eleve a Ohara"
Get-Content "$env:TEMP\acc.txt" -Encoding Unicode
```

Relu avec le mauvais encodage, le texte devient illisible : des caractères
chinois ou des losanges. Le fichier n'est pas corrompu — c'est la **lecture**
qui est mal paramétrée.

> [!warning] Retire de l'enonce - notion non vue a ce stade
> Cette question ne figure plus dans le TP. La reponse est conservee ici :
> reintegrez-la si vous ajoutez la notion au cours.

**E4. Les encodages par défaut.** _(avancé)_

| Version                    | Encodage par défaut                             |
| -------------------------- | ----------------------------------------------- |
| **PowerShell 7**           | UTF-8 **sans BOM**                              |
| **Windows PowerShell 5.1** | UTF-16 LE (« Unicode ») ou ANSI selon la cmdlet |

Vérification faite sur le poste : en PS 7, les premiers octets du fichier sont
directement le texte (`69 108 101` = « Ele ») — **aucun BOM**.

Pour garantir la compatibilité entre les deux versions :

```powershell
Set-Content $fichier -Value $contenu -Encoding UTF8
```

> 📘 **À comprendre**
> ⚠️ **Le piège d'encodage le plus coûteux** : un script écrit en PS 7 produit un
> fichier UTF-8 ; le même script en 5.1 produit de l'UTF-16. Un outil tiers qui
> lit ce fichier va casser dans un cas sur deux.
>
> **La règle : toujours préciser `-Encoding UTF8`** dès qu'un fichier sort de
> votre machine. Le BOM est ce marqueur invisible en tête de fichier : certains
> outils Unix le prennent pour du contenu.

---

## Mission finale F : le rapport de traversée

**F1. La fonction de journalisation.**

Réponse attendue — uniquement des notions vues (chapitres 13 et 16) :

```powershell
function Write-Journal {
    param(
        $Message,
        $Niveau  = "INFO",
        $Fichier = "$env:TEMP\Navigation\journal-de-bord.txt"
    )

    $date  = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $ligne = "[$date] [$Niveau] $Message"

    Add-Content -Path $Fichier -Value $ligne -Encoding UTF8
    Write-Host $ligne
}

Write-Journal -Message "Escale a Water Seven"
Write-Journal -Message "Reserves d'eau basses" -Niveau "ALERTE"
Write-Journal -Message "Voie d'eau dans la cale" -Niveau "ERREUR"
```

> [!note]- Variante enrichie — pour le formateur
> Paramètre obligatoire, liste de valeurs autorisées et couleur par niveau.
> `[Parameter(Mandatory)]` et `[ValidateSet]` relèvent du **chapitre 22** :
> à ne pas exiger des élèves ici.
>
> ```powershell
> function Write-Journal {
>     param(
>         [Parameter(Mandatory)]
>         [string]$Message,
>
>         [ValidateSet('INFO','ALERTE','ERREUR')]
>         [string]$Niveau = 'INFO',
>
>         [string]$Fichier = "$env:TEMP\Navigation\journal-de-bord.txt"
>     )
>
>     $ligne = "[{0}] [{1}] {2}" -f (Get-Date -Format 'yyyy-MM-dd HH:mm:ss'), $Niveau, $Message
>
>     Add-Content -Path $Fichier -Value $ligne -Encoding UTF8
>
>     $couleur = switch ($Niveau) {
>         'INFO'   { 'Gray'   }
>         'ALERTE' { 'Yellow' }
>         'ERREUR' { 'Red'    }
>     }
>     Write-Host $ligne -ForegroundColor $couleur
> }
> ```

> [!warning] Retire de l'enonce - notion non vue a ce stade
> Cette question ne figure plus dans le TP. La reponse est conservee ici :
> reintegrez-la si vous ajoutez la notion au cours.

**F2. Comparer trois lectures sur 200 000 lignes.** _(avancé)_

| Approche                           | Temps mesuré |
| ---------------------------------- | ------------ |
| `Get-Content`                      | **1 228 ms** |
| `[System.IO.File]::ReadAllLines()` | **18 ms**    |

Soit environ **68 fois plus rapide**. `Get-Content` crée un objet enrichi par
ligne ; la méthode .NET renvoie un simple tableau de chaînes.

Sur un fichier de 2 Go, c'est le **chargement complet en mémoire** qui pose
problème. La version au fil de l'eau évite cela :

```powershell
Get-Content $gros -ReadCount 1000 | ForEach-Object { ... }
```

> [!warning] Retire de l'enonce - notion non vue a ce stade
> Cette question ne figure plus dans le TP. La reponse est conservee ici :
> reintegrez-la si vous ajoutez la notion au cours.

**F3. Écriture en boucle contre écriture unique.** _(avancé)_

```powershell
# LENT : ouvre et ferme le fichier a chaque tour
foreach ($i in 1..10000) { Add-Content $f -Value "ligne $i" }

# RAPIDE : une seule ouverture
$lignes = foreach ($i in 1..10000) { "ligne $i" }
Set-Content $f -Value $lignes
```

**Bonne pratique pour un script qui journalise en continu** : accumuler les
messages en mémoire et écrire par lots, ou garder un flux ouvert. `Add-Content`
à chaque ligne est acceptable pour quelques dizaines d'entrées, pas pour des
milliers.

> 📘 **À comprendre**
> La fonction F1 combine presque tout le cours :
> paramètre **obligatoire**, **`ValidateSet`** pour limiter les niveaux (chapitre 22),
> valeur par défaut, opérateur de formatage `-f`, `switch` pour la couleur,
> et `-Encoding UTF8` par sécurité.
>
> C'est le `Write-Log` que vous réutiliserez dans tous vos scripts — et
> précisément celui du **TP fil rouge 03**.

---

## Ce qu'il faut retenir

| Commande                                        | Rôle                                            |
| ----------------------------------------------- | ----------------------------------------------- |
| `Get-Content`                                   | lire — renvoie un **tableau de lignes**         |
| `-TotalCount n` / `-Tail n`                     | n premières / n dernières lignes                |
| `-Raw`                                          | tout le fichier en une seule chaîne             |
| `Set-Content`                                   | **écrase** le contenu                           |
| `Add-Content`                                   | **ajoute** à la fin                             |
| `Out-File -Append`                              | rediriger une sortie d'objets                   |
| `(Get-Content f) -replace a,b \| Set-Content f` | remplacer dans un fichier                       |
| `Select-String -Path f -Pattern x`              | chercher **avec le numéro de ligne**            |
| `-Encoding UTF8`                                | à préciser dès qu'un fichier sort de la machine |

**Les parenthèses avant de réécrire ne sont pas décoratives : elles ferment le fichier.**
