---
title: Correction 14 - L'Atelier de Vegapunk
publier: true
parcours-tssr: false
parcours-pro: true
---

# Correction - Exercice 14 : L'Atelier de Vegapunk 🔬

> Chapitre associé : [[cours/14-classes-dotnet/14-classes-dotnet]]
> Énoncé de l'[[14-classes-dotnet|exercice]], **réponse sous chaque question**.
>
> 💡 Les blocs verts se **replient** : cliquez sur le titre pour masquer une
> réponse pendant la séance.
>
> 🎓 Les notes de conduite de séance sont regroupées **en fin de document**.

## Contexte

Vegapunk ne se contente pas des outils du commerce : quand il a besoin de précision
ou de vitesse, il descend au niveau des composants.

> _"Tout outil a une limite. Le savant sait ce qu'il y a en dessous."_ — Dr Vegapunk

**Durée : 30 min**

---

## Partie A : Statique ou instance ? (5 min)

```powershell
# Statique : la classe travaille
[math]::Sqrt(64)

# Instance : l'objet travaille
$d = Get-Date
$d.AddDays(7)
```

**A1.** Quelle est la différence entre `::` et `.` ?

> [!check]+ Réponse A1
> `::` appelle un membre **statique** — la classe travaille, pas besoin d'objet.
> `.` appelle un membre **d'instance** — il faut un objet existant.
>
> **Analogie** : `[math]::Sqrt(64)` = « Mathématiques, calcule-moi une racine ».
> `$d.AddDays(7)` = « toi, cette date précise, ajoute 7 jours ».
>
> `[math]::Sqrt(64)` renvoie `8`. `$d.AddDays(7)` renvoie une **nouvelle** date :
> `$d` reste inchangée.

**A2.** Que renvoie `(Get-Date).GetType().FullName` ?

> [!check]+ Réponse A2
> `System.DateTime`

**A3.** Explorez `[math]` avec `Get-Member -Static`. Combien de méthodes trouvez-vous ?

> [!check]+ Réponse A3
>
> ```powershell
> [math] | Get-Member -Static -MemberType Method
> ([math] | Get-Member -Static -MemberType Method).Count
> ```
>
> Environ **45 méthodes**.

> 📘 **À comprendre**
> `[math]` est un raccourci de `[System.Math]` : l'espace de noms `System` est
> implicite.
>
> Même réflexe qu'au chapitre 03 : on **inspecte avant d'utiliser**, avec
> `Get-Member` (instance) ou `Get-Member -Static` (classe).

---

## Partie B : L'atelier Math (10 min)

**B1.** Calculez l'aire d'un disque de rayon 5.

> [!check]+ Réponse B1
>
> ```powershell
> [math]::Round([math]::PI * [math]::Pow(5, 2), 2)      # 78,54
> ```

**B2.** Convertissez 3 500 000 000 octets en Go, arrondi à 2 décimales.

> [!check]+ Réponse B2
>
> ```powershell
> [math]::Round(3500000000 / 1GB, 2)                    # 3,26
> ```
>
> `1GB` est compris nativement par PowerShell — inutile d'écrire `1073741824`.

**B3.** Trouvez la plus grande de trois valeurs.

> [!check]+ Réponse B3
>
> ```powershell
> [math]::Max(12, [math]::Max(47, 33))                  # 47
> ```
>
> `[math]::Max` ne prend que **deux** arguments → on imbrique. Sur une collection,
> `Measure-Object -Maximum` est plus lisible.

**B4.** Le résultat de `[math]::Round(2.5)` vous surprend-il ? Pourquoi ce comportement ?

> [!check]+ Réponse B4
>
> ```powershell
> [math]::Round(2.5)   # 2
> [math]::Round(3.5)   # 4
> [math]::Round(4.5)   # 4
> ```
>
> Oui, c'est surprenant : on attend 3, 4 et 5.
>
> C'est l'**arrondi bancaire** : en cas d'égalité parfaite (`.5`), .NET arrondit
> vers le nombre **pair** le plus proche. Le but est d'éviter le biais
> systématique vers le haut quand on additionne beaucoup de valeurs.

**B5.** Comment obtenir l'arrondi « scolaire » (2,5 → 3) ?

> [!check]+ Réponse B5
>
> ```powershell
> [math]::Round(2.5, 0, [MidpointRounding]::AwayFromZero)   # 3
> [math]::Round(4.5, 0, [MidpointRounding]::AwayFromZero)   # 5
> ```

**B6.** Dans quel type de script cette différence serait-elle **grave** ?

> [!check]+ Réponse B6
> Dans tout script **financier** : facturation, TVA, paie, remboursements.
> Sur des millions d'opérations l'écart devient réel, et un contrôleur de gestion
> le verra.
>
> Sans conséquence, en revanche, sur des Go d'espace disque ou des pourcentages
> CPU — d'où son usage tranquille dans les chapitres précédents.

> 📘 **À comprendre**
> Ce n'est ni un bug ni une bizarrerie de PowerShell : c'est une norme appliquée
> par tout .NET.

---

## Partie C : L'atelier FileIO (10 min)

**C1.** Ce chemin n'existe pas sur votre machine. Les commandes fonctionnent
quand même — pourquoi ?

> [!check]+ Réponse C1
> `[System.IO.Path]` travaille sur des **chaînes de caractères**. Il découpe du
> texte, il n'accède jamais au disque — le chemin peut donc être totalement fictif.

**C2.** À partir de `"D:\Data\2026\export-final.xlsx"`, extrayez le nom **sans
extension**.

> [!check]+ Réponse C2
>
> ```powershell
> [System.IO.Path]::GetFileNameWithoutExtension("D:\Data\2026\export-final.xlsx")
> # export-final
> ```

**C3.** Construisez proprement le chemin `<dossier temp>\cipher-pol\rapport.log`.

> [!check]+ Réponse C3
>
> ```powershell
> [System.IO.Path]::Combine([System.IO.Path]::GetTempPath(), "cipher-pol", "rapport.log")
> # C:\Users\<vous>\AppData\Local\Temp\cipher-pol\rapport.log
> ```
>
> `Combine` gère les séparateurs : fini les `"$dossier\$fichier"` qui produisent
> un double antislash.
>
> ⚠️ `Combine` ne **crée** rien : c'est du calcul de chaîne.

**C4.** Quel écart mesurez-vous entre les deux ?

> [!check]+ Réponse C4
> Mesure de référence sur **20 000 lignes** :
>
> | Méthode                            | Temps     |
> | ---------------------------------- | --------- |
> | `Get-Content`                      | **79 ms** |
> | `[System.IO.File]::ReadAllLines()` | **9 ms**  |
>
> Environ **9× plus rapide** — les chiffres varient selon la machine, la
> conclusion non.

**C5.** Pourquoi `Get-Content` est-il plus lent ?

> [!check]+ Réponse C5
> `Get-Content` construit un **objet enrichi par ligne** (avec `PSPath`,
> `ReadCount`…). La méthode .NET renvoie un simple tableau de chaînes.

**C6.** Faut-il pour autant abandonner `Get-Content` ?

> [!check]+ Réponse C6
> **Non.** Il est plus lisible, s'intègre au pipeline, gère les PSDrives et
> `-Encoding`. On bascule sur .NET **uniquement** quand le volume le justifie.

> 📘 **À comprendre**
> `[System.IO.Path]` analyse une chaîne même si le fichier n'existe pas ;
> `[System.IO.File]` ouvre ou modifie le disque directement et n'offre **pas**
> le mécanisme de simulation `-WhatIf` de PowerShell.

---

## Partie D : Valider une saisie (5 min)

**D1.** Lequel des deux tests se déclenche ?

> [!check]+ Réponse D1
> Seul le test **.NET**. `"   "` est une chaîne non vide : pour PowerShell, elle
> est « vraie », donc `if (-not $saisie)` ne se déclenche pas.

**D2.** Quelle différence entre `IsNullOrEmpty` et `IsNullOrWhiteSpace` ?

> [!check]+ Réponse D2
>
> | Méthode              | Vrai quand…                                                   |
> | -------------------- | ------------------------------------------------------------- |
> | `IsNullOrEmpty`      | `$null` ou chaîne vide                                        |
> | `IsNullOrWhiteSpace` | en plus : uniquement espaces, tabulations, retours à la ligne |

> 📘 **À comprendre**
> Un utilisateur qui appuie sur la barre d'espace dans un formulaire, ça arrive
> tous les jours → `IsNullOrWhiteSpace` est le bon réflexe.
>
> Directement réutilisé au chapitre 32 pour valider les champs d'une interface.

---

## Mission finale E : le rapport de Vegapunk 🏴‍☠️

**E1.** Écrivez `Get-InfoFichier` : validation du chemin, objet de sortie complet,
erreur claire si le fichier est absent.

> [!check]+ Réponse E1
>
> ```powershell
> function Get-InfoFichier {
>     param([string]$Chemin)
>
>     if ([string]::IsNullOrWhiteSpace($Chemin)) {
>         throw "Le chemin est vide."
>     }
>     if (-not [System.IO.File]::Exists($Chemin)) {
>         throw "Fichier introuvable : $Chemin"
>     }
>
>     $info = [System.IO.FileInfo]::new($Chemin)
>
>     [PSCustomObject]@{
>         Nom       = [System.IO.Path]::GetFileNameWithoutExtension($Chemin)
>         Extension = [System.IO.Path]::GetExtension($Chemin)
>         Dossier   = [System.IO.Path]::GetDirectoryName($Chemin)
>         Taille_Ko = [math]::Round($info.Length / 1KB, 1, [MidpointRounding]::AwayFromZero)
>         Lignes    = [System.IO.File]::ReadAllLines($Chemin).Count
>         TraceId   = [guid]::NewGuid()
>     }
> }
> ```
>
> Sortie type sur un fichier de 250 lignes :
>
> ```
> Nom       : vegapunk-test
> Extension : .txt
> Dossier   : C:\Users\<vous>\AppData\Local\Temp
> Taille_Ko : 2,6
> Lignes    : 250
> TraceId   : c7ad7de3-1358-4407-90c6-d3a72a248216
> ```
>
> Cas d'erreur attendus :
>
> ```
> Get-InfoFichier "   "                 ->  Le chemin est vide.
> Get-InfoFichier "C:\absent-xyz.txt"   ->  Fichier introuvable : C:\absent-xyz.txt
> ```

> [!check]- Variante robuste (lecture séquentielle, gros fichiers)
> Sur un fichier très volumineux, `ReadAllLines` charge **tout** en mémoire.
> Un lecteur séquentiel compte les lignes sans saturer la RAM :
>
> ```powershell
> function Get-InfoFichier {
>     param([AllowNull()][AllowEmptyString()][string]$Chemin)
>
>     if ([string]::IsNullOrWhiteSpace($Chemin)) {
>         throw 'Chemin obligatoire : null, vide ou espaces refusés.'
>     }
>     if (-not (Test-Path -LiteralPath $Chemin -PathType Leaf)) {
>         throw "Fichier absent : $Chemin"
>     }
>
>     $fichier = Get-Item -LiteralPath $Chemin -ErrorAction Stop
>     $lecteur = [System.IO.File]::OpenText($fichier.FullName)
>     $nombreLignes = 0
>     try {
>         while ($null -ne $lecteur.ReadLine()) { $nombreLignes++ }
>     }
>     finally { $lecteur.Dispose() }
>
>     [PSCustomObject]@{
>         NomSansExtension = [System.IO.Path]::GetFileNameWithoutExtension($fichier.Name)
>         Extension        = $fichier.Extension
>         DossierParent    = $fichier.DirectoryName
>         TailleKo         = [math]::Round($fichier.Length / 1KB, 1, [System.MidpointRounding]::AwayFromZero)
>         NombreLignes     = $nombreLignes
>         Guid             = [guid]::NewGuid()
>     }
> }
> ```
>
> Le `finally` garantit que le lecteur est libéré **même si** la lecture échoue.

> 📘 **À comprendre**
>
> - **Deux validations distinctes** = deux messages distincts. Un `throw` générique
>   « chemin invalide » ferait perdre du temps au dépannage (chapitre 21).
> - `[System.IO.FileInfo]::new()` est la version .NET de `Get-Item` : les deux
>   conviennent ici, l'un s'intègre au pipeline, l'autre est plus direct.
> - L'ordre compte : valider **avant** d'accéder au disque.
> - `[guid]::NewGuid()` sert d'identifiant de corrélation : on le retrouve dans
>   les logs pour relier plusieurs traces d'une même exécution.

---

> [!success] Validation
>
> - Vous distinguez membre **statique** (`::`) et membre **d'instance** (`.`)
> - Vous explorez une classe avec `Get-Member -Static`
> - Vous connaissez les méthodes clés de `[math]`
> - Vous savez que `[math]::Round` fait de l'**arrondi bancaire**
> - Vous manipulez des chemins avec `[System.IO.Path]` sans toucher au disque
> - Vous savez quand `[System.IO.File]` vaut mieux que `Get-Content`
> - Vous validez une saisie avec `[string]::IsNullOrWhiteSpace`
> - Vous savez que .NET ignore `-WhatIf` et les PSDrives

---

## 🎓 Notes de séance (formateur)

### Angle d'attaque

Ce chapitre répond à une question que les stagiaires se posent depuis le
chapitre 12 : « c'est quoi ces crochets bizarres ? ». Le dire d'entrée capte
l'attention.

**Message à faire passer** : .NET n'est **pas** le niveau normal de travail.
C'est la sortie de secours quand la cmdlet manque ou quand la performance coince.

### Points à souligner

- **Partie B** : faire tester `4.5` en plus de `2.5` — deux `.5` d'affilée qui
  donnent le même résultat, c'est là que l'ampoule s'allume.
- **Partie C** : faire lancer la mesure sur leur propre poste. Les chiffres
  diffèrent, la conclusion non. C'est l'occasion de présenter `Measure-Command`,
  utile bien au-delà de ce chapitre.

### Banc de test reproductible

```powershell
$fichierTest = Join-Path ([System.IO.Path]::GetTempPath()) (
    'tp14-' + [guid]::NewGuid().ToString('N') + '.txt'
)
try {
    [System.IO.File]::WriteAllLines(
        $fichierTest, [string[]]@(1..20000 | ForEach-Object { "ligne $_" })
    )
    Get-InfoFichier -Chemin $fichierTest

    foreach ($cheminInvalide in @('   ', ($fichierTest + '.absent'))) {
        try { Get-InfoFichier -Chemin $cheminInvalide }
        catch { "Refus attendu : $($_.Exception.Message)" }
    }

    $tempsCmdlet = Measure-Command { $null = @(Get-Content -LiteralPath $fichierTest) }
    $tempsDotNet = Measure-Command { $null = [System.IO.File]::ReadAllLines($fichierTest) }

    [PSCustomObject]@{
        GetContentMs   = [math]::Round($tempsCmdlet.TotalMilliseconds, 2)
        ReadAllLinesMs = [math]::Round($tempsDotNet.TotalMilliseconds, 2)
    }
}
finally {
    if ([System.IO.File]::Exists($fichierTest)) {
        [System.IO.File]::Delete($fichierTest)
    }
}
```

### Erreurs courantes à anticiper

- Écrire `[math].Round(...)` avec un point → `::` pour un membre statique
- Croire que `[System.IO.Path]::Combine` crée le dossier
- Oublier que `[math]::Max` ne prend que deux arguments
- Croire que `[math]::Round(2.5)` est un bug de PowerShell
- `if (-not $saisie)` sur une chaîne d'espaces → ne détecte rien
- Utiliser `[System.IO.File]` sur un PSDrive (`HKCU:`, `Cert:`) → échoue, ces
  lecteurs n'existent que pour PowerShell (chapitre 18)
- Passer à .NET « parce que c'est plus pro » alors qu'une cmdlet suffit : c'est
  perdre `-WhatIf`, `-ErrorAction` et la lisibilité

---

## Phrase clé à retenir

> **"La cmdlet d'abord. .NET quand la cmdlet manque, ou quand elle rame."**
