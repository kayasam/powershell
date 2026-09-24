---
title: Correction 17 - Les Plans de Franky
publier: true
parcours-tssr: true
parcours-pro: true
---

# Correction - Exercice 17 : Les Plans de Franky 📐

> Chapitre associé : [[cours/17-export-import/17-export-import]]
> Correction des versions [[17-export-import-debutant|débutant]] et [[17-export-import-avance|avancé]].
> Les questions marquées _(avancé)_ ne figurent que dans la version avancée.

---

> [!info] Enonce allege - correspondance des numeros
> Trois questions ont ete retirees de l'enonce (bandeau orange ci-dessous).
>
> | Enonce actuel | Correction                                   |
> | ------------- | -------------------------------------------- |
> | D3            | D3 (simplifie : `Test-Path`, sans try/catch) |
> | E1            | E1 sans la ligne CLIXML                      |
>
> `try/catch` arrive au **chapitre 20** et `Export-Clixml` n'est pas au programme.
> Cote debutant, la mission E a ete decoupee en E1/E2/E3 et n'utilise plus de
> colonne calculee : la syntaxe `@{Name=;Expression=}` n'a jamais ete enseignee.

---

## Partie A : Export CSV

```powershell
$pieces | Export-Csv -Path "$env:TEMP\Franky\inventaire.csv" -NoTypeInformation -Encoding UTF8
Get-Content "$env:TEMP\Franky\inventaire.csv"
```

**A1. À quoi ressemble le CSV brut ? Y a-t-il un en-tête ?**

**Oui**, la première ligne contient les noms de colonnes :

```
"Nom","Type","Energie","Puissance","Operationnel"
"Coup de Burst","Propulsion","Cola","100","True"
```

Chaque valeur est **entre guillemets**, séparée par des virgules. Les noms de
colonnes viennent des propriétés de l'objet.

**A2. Réimport et affichage.**

```powershell
Import-Csv "$env:TEMP\Franky\inventaire.csv" | Format-Table -AutoSize
```

Les 5 pièces sont bien là.

**A3. Que fait `-NoTypeInformation` ?** _(avancé)_

Il supprime une première ligne parasite `#TYPE System.Management.Automation.PSCustomObject`
qui gêne Excel.

En **PowerShell 7**, c'est le comportement par défaut : le paramètre est accepté
mais **sans effet**. En **5.1**, il reste nécessaire. On le garde par réflexe,
pour que le script fonctionne dans les deux versions.

> [!warning] Retire de l'enonce - notion non vue a ce stade
> Cette question ne figure plus dans le TP. La reponse est conservee ici :
> reintegrez-la si vous ajoutez la notion au cours.

**A4. Séparateur et culture.** _(avancé)_

|                                | Séparateur           |
| ------------------------------ | -------------------- |
| `Export-Csv` par défaut        | la **virgule**       |
| Excel sur Windows **français** | le **point-virgule** |

D'où les CSV qui s'ouvrent « en une seule colonne » dans Excel.

```powershell
$pieces | Export-Csv $csv -Delimiter ";" -NoTypeInformation -Encoding UTF8
$pieces | Export-Csv $csv -UseCulture -NoTypeInformation -Encoding UTF8
```

⚠️ `-UseCulture` rend le script **dépendant du poste** : un script partagé entre
plusieurs pays produira des fichiers différents.

> 📘 **À comprendre**
> `Export-Csv` transforme des **objets** en texte tabulaire. Chaque propriété
> devient une colonne.
>
> Deux paramètres à mettre par réflexe :
> **`-NoTypeInformation`** (compatibilité 5.1) et **`-Encoding UTF8`** (accents).

---

## Partie B : Import et analyse CSV

**B1. Combien de pièces opérationnelles ?**

**4** — seule la Gaon Cannon est hors service.

**B2. Combien utilisent du Cola ?**

**2** : Coup de Burst et Gaon Cannon.

**B3. La pièce la plus puissante ?**

**Gaon Cannon** (200).

```powershell
$importees | Sort-Object { [int]$_.Puissance } -Descending | Select-Object -First 1
```

**B4. Le tri sans `[int]`.**

```powershell
$importees | Sort-Object Puissance -Descending
```

Résultat obtenu : **50, 30, 200, 100, 0**

C'est un tri **alphabétique** : `"50"` passe avant `"30"`, qui passe avant `"200"`.
Après un import CSV, `Puissance` n'est plus un nombre mais une **chaîne**.

```powershell
$importees[0].Puissance.GetType().Name     # String
```

**B5. Additionner après import.** _(avancé)_

```powershell
($importees | Measure-Object Puissance -Sum).Sum     # 380
```

Ici `Measure-Object` **convertit tout seul** et donne le bon résultat — mais ne
comptez pas dessus : `Sort-Object` et les comparaisons `-gt` / `-lt`, eux,
travaillent sur du texte et se trompent.

Deux façons de restaurer les types :

```powershell
# 1. Conversion a la volee
$importees | Sort-Object { [int]$_.Puissance }

# 2. Reconstruction typee des l'import
$importees = Import-Csv $csv | ForEach-Object {
    [PSCustomObject]@{
        Nom          = $_.Nom
        Type         = $_.Type
        Energie      = $_.Energie
        Puissance    = [int]$_.Puissance
        Operationnel = [bool]::Parse($_.Operationnel)
    }
}
```

> 📘 **À comprendre**
> ⚠️ **C'est LE piège du CSV** : le format est **plat et non typé**. À l'import,
> tout redevient du `String`, y compris les nombres, les dates et les booléens.
>
> Conséquence concrète : un rapport trié par montant qui classe 50 € avant 30 €.
> Le bug est silencieux — aucune erreur, juste un résultat faux.
>
> Le réflexe : **dès qu'on trie ou compare après un import CSV, on convertit.**

---

## Partie C : Export JSON

```powershell
$pieces | ConvertTo-Json | Out-File "$env:TEMP\Franky\inventaire.json" -Encoding UTF8
```

**C1. En quoi le JSON diffère-t-il du CSV ?**

Il est **structuré et indenté**, avec des accolades et des crochets. Chaque objet
est un bloc, chaque propriété une paire `"cle": valeur`. Les nombres ne sont
**pas** entre guillemets — le type est conservé dans le format.

**C2. Réimport et première pièce.**

```powershell
$json = Get-Content "$env:TEMP\Franky\inventaire.json" | ConvertFrom-Json
$json[0]
```

**C3. Les types après import JSON.**

| Propriété      | Après import **CSV** | Après import **JSON** |
| -------------- | -------------------- | --------------------- |
| `Puissance`    | `String`             | **`Int64`**           |
| `Operationnel` | `String` (`"True"`)  | **`Boolean`**         |

**Le JSON conserve les types, le CSV non.** C'est sa principale supériorité.

**C4. Une liste dans une pièce.** _(avancé)_

```powershell
$piece = [PSCustomObject]@{
    Nom        = "Coup de Burst"
    Composants = @("Reservoir", "Injecteur", "Tuyere")
}

$piece | ConvertTo-Json          # la liste est preservee
$piece | Export-Csv $csv         # la colonne affiche System.Object[]
```

Le **CSV est plat** : il ne sait pas représenter une liste dans une case. Il
écrit le _type_ de l'objet au lieu de son contenu.

> [!warning] Retire de l'enonce - notion non vue a ce stade
> Cette question ne figure plus dans le TP. La reponse est conservee ici :
> reintegrez-la si vous ajoutez la notion au cours.

**C5. La profondeur de sérialisation.** _(avancé)_

`ConvertTo-Json` s'arrête à une profondeur de **2 niveaux** par défaut, **sans
erreur** — les niveaux plus profonds sont remplacés par le nom du type.

```powershell
$objet | ConvertTo-Json -Depth 10
```

> 📘 **À comprendre**
>
> | Format   | Types conservés | Données imbriquées | Lisible dans Excel |
> | -------- | --------------- | ------------------ | ------------------ |
> | **CSV**  | non             | non                | **oui**            |
> | **JSON** | **oui**         | **oui**            | non                |
>
> Le choix se fait sur l'usage : CSV pour ce qui finit dans un tableur,
> JSON pour une configuration, une API ou des données structurées.

---

## Partie D : Fichier de configuration

**D1. Recharger et afficher le capitaine.**

```powershell
$chargee = Get-Content "$env:TEMP\Franky\config.json" | ConvertFrom-Json
$chargee.Capitaine
```

**D2. La modification tient-elle ?**

Oui, à condition de **réécrire** le fichier après modification :

```powershell
$chargee.SeuilCola = 90
$chargee | ConvertTo-Json | Out-File "$env:TEMP\Franky\config.json" -Encoding UTF8
```

Modifier l'objet en mémoire ne suffit pas.

**D3. Les fonctions de configuration.** _(avancé)_

```powershell
function New-ConfigParDefaut {
    param([string]$Chemin)

    if (Test-Path $Chemin) { return }

    @{
        Navire    = "Thousand Sunny"
        Capitaine = "Monkey D. Luffy"
        SeuilCola = 80
        Alertes   = $true
    } | ConvertTo-Json | Out-File $Chemin -Encoding UTF8
}

function Get-Config {
    param([string]$Chemin)

    if (-not (Test-Path $Chemin)) {
        throw "Configuration introuvable : $Chemin"
    }

    try {
        $config = Get-Content $Chemin -Raw | ConvertFrom-Json
    } catch {
        throw "Fichier de configuration illisible ou corrompu : $Chemin"
    }

    foreach ($cle in 'Navire','Capitaine','SeuilCola') {
        if (-not $config.PSObject.Properties.Name.Contains($cle)) {
            throw "Cle obligatoire manquante : $cle"
        }
    }

    return $config
}
```

> 📘 **À comprendre**
> Le JSON est **le** format de configuration en PowerShell : lisible par un humain,
> modifiable à la main, et il conserve les types.
>
> La fonction `Get-Config` illustre trois réflexes du chapitre 21 : vérifier
> l'existence, intercepter le fichier corrompu, et **valider les clés obligatoires**
> avant de rendre l'objet.

---

## Partie E : Choisir son format _(avancé)_

**E1. Le tableau des formats.**

| Format     | Cmdlets                               | Quand l'utiliser                                    | Limite                          |
| ---------- | ------------------------------------- | --------------------------------------------------- | ------------------------------- |
| **CSV**    | `Export-Csv` / `Import-Csv`           | tableur, rapport plat                               | pas de types, pas d'imbrication |
| **JSON**   | `ConvertTo-Json` / `ConvertFrom-Json` | configuration, API, données imbriquées              | illisible dans Excel            |
| **CLIXML** | `Export-Clixml` / `Import-Clixml`     | sauvegarder des objets PowerShell **à l'identique** | propre à PowerShell             |

> [!warning] Retire de l'enonce - notion non vue a ce stade
> Cette question ne figure plus dans le TP. La reponse est conservee ici :
> reintegrez-la si vous ajoutez la notion au cours.

**E2. Quel format conserve fidèlement les types ?**

**CLIXML**.

```powershell
$pieces | Export-Clixml "$env:TEMP\Franky\pieces.xml"
$relu = Import-Clixml "$env:TEMP\Franky\pieces.xml"

$relu[0].Puissance.GetType().Name       # Int32 — identique a l'origine
$relu[0].Operationnel.GetType().Name    # Boolean
```

Le JSON conserve les types **de base** ; CLIXML conserve l'objet **complet**,
type .NET inclus. C'est le format des sauvegardes d'état entre deux exécutions
d'un script.

---

## Mission finale F : le rapport d'inventaire

**F1. Le rapport par énergie.**

```powershell
Import-Csv "$env:TEMP\Franky\inventaire.csv" |
    Group-Object Energie |
    ForEach-Object {
        [PSCustomObject]@{
            Energie         = $_.Name
            Nb              = $_.Count
            PuissanceTotale = ($_.Group | Measure-Object { [int]$_.Puissance } -Sum).Sum
        }
    } |
    Sort-Object PuissanceTotale -Descending |
    Export-Csv "$env:TEMP\Franky\rapport-energie.csv" -NoTypeInformation -Encoding UTF8
```

Résultat :

```
Energie   Nb PuissanceTotale
-------   -- ---------------
Cola       2             300
Mecanique  2              80
Aucun      1               0
```

**F2. Ajouter les pièces opérationnelles par énergie.** _(avancé)_

```powershell
Operationnelles = @($_.Group | Where-Object Operationnel -eq "True").Count
```

**F3. Le même rapport en JSON.** _(avancé)_

```powershell
$rapport | ConvertTo-Json | Out-File "$env:TEMP\Franky\rapport.json" -Encoding UTF8

$relu = Get-Content "$env:TEMP\Franky\rapport.json" -Raw | ConvertFrom-Json
$relu[0].PuissanceTotale.GetType().Name     # Int64 — le type est conserve
```

> 📘 **À comprendre**
> Remarquez le `{ [int]$_.Puissance }` dans le `Measure-Object` : c'est la
> conversion de la partie B qui revient. **Après un import CSV, on convertit
> toujours avant de calculer.**
>
> Et notez la fin de pipeline : `Export-Csv` pour un fichier réutilisable,
> `Format-Table` pour l'écran. Comme au chapitre 08, c'est la **dernière étape**
> qui décide de la destination.

---

## Ce qu'il faut retenir

| Commande                                       | Rôle                                  |
| ---------------------------------------------- | ------------------------------------- |
| `Export-Csv -NoTypeInformation -Encoding UTF8` | objets → CSV                          |
| `Import-Csv`                                   | CSV → objets **tous en texte**        |
| `ConvertTo-Json -Depth 10`                     | objets → JSON, types conservés        |
| `ConvertFrom-Json`                             | JSON → objets                         |
| `Export-Clixml` / `Import-Clixml`              | objets PowerShell **à l'identique**   |
| `-Delimiter ";"`                               | séparateur attendu par Excel français |

**CSV pour Excel, JSON pour la configuration, CLIXML pour les objets.**
Après un import CSV, tout est du texte : convertissez avant de trier ou comparer.
