---
title: Correction 12 - L'Inventaire du Thousand Sunny
publier: true
parcours-tssr: true
parcours-pro: true
---

# Correction - Exercice 12 : L'Inventaire du Thousand Sunny 🛠️

> Chapitre associé : [[cours/12-wmi-et-cim/12-wmi-et-cim]]
> Énoncé de la version [[12-wmi-cim-avance|avancée]], **réponse sous chaque
> question**. Les questions non marquées _(avancé)_ figurent aussi dans la
> version [[12-wmi-cim-debutant|débutant]].
>
> 📌 La version **débutant** découpe la partie C différemment : elle fait d'abord
> afficher les propriétés brutes, puis convertir un seul disque en Go, avant
> d'arriver au tableau complet ci-dessous. La réponse C1 reste la cible.
>
> 📌 Les questions **G1 à G5**, en fin de correction, sortent du programme du
> chapitre. Elles ne figurent que dans la version avancée, en bonus non évalué.
>
> ⚠️ Les valeurs ci-dessous viennent d'un poste de référence : les vôtres différeront.
>
> 💡 Les blocs verts se **replient** : cliquez sur le titre pour masquer une
> réponse pendant la séance.

## Contexte

Franky doit établir la fiche technique complète du navire. Un inventaire d'un
poste, c'est une curiosité. D'un parc de cinquante, c'est un outil de décision.

> _"Un bon charpentier connaît chaque planche de son navire."_ — Franky

**Durée : 35 min**

---

## Partie A : Le carnet de bord du navire (5 min)

Trouvez la classe WMI qui décrit le système d'exploitation.

**A1.** Quelle propriété donne le nom de Windows ?

> [!check]+ Réponse A1
>
> ```powershell
> Get-CimInstance Win32_OperatingSystem
> Get-CimInstance Win32_OperatingSystem | Format-List *
> ```
>
> `Caption` → `Microsoft Windows 11 Professionnel`
>
> ⚠️ Préférez `Caption` à `Name` : cette dernière contient le chemin
> d'installation collé au nom, ce qui la rend peu lisible.

**A2.** Quelle propriété donne la date du dernier démarrage ?

> [!check]+ Réponse A2
> `LastBootUpTime` → `16/09/2026 10:19:08`

**A3.** Combien de propriétés cette classe possède-t-elle ?

> [!check]+ Réponse A3
>
> ```powershell
> (Get-CimInstance Win32_OperatingSystem | Get-Member -MemberType Property).Count
> ```
>
> **65**.

> 📘 **À comprendre**
> L'affichage par défaut ne montre que 5 ou 6 propriétés sur **65**. `Format-List *`
> révèle tout — c'est le réflexe devant une classe inconnue.
>
> `LastBootUpTime` n'est pas du texte : c'est un vrai objet **`[datetime]`**.
> On pourra donc le manipuler comme une date — voir la question **G4** en fin de
> correction.

---

## Partie B : Le moteur (5 min)

**B1.** Affichez le modèle du processeur, son nombre de cœurs et sa charge
instantanée.

> [!check]+ Réponse B1
>
> ```powershell
> Get-CimInstance Win32_Processor | Select-Object Name, NumberOfCores, LoadPercentage
> ```
>
> ```
> Name           : 12th Gen Intel(R) Core(TM) i7-12700H
> NumberOfCores  : 14
> LoadPercentage : 1
> ```

**B2.** Pourquoi `Select-Object -First 1` peut-il être utile ici ?

> [!check]+ Réponse B2
> Parce qu'une machine **multi-socket** renvoie une instance **par processeur
> physique**. Sur un poste classique il n'y en a qu'une, mais sur un serveur
> bi-processeur le script afficherait deux lignes là où on en attend une.

> 📘 **À comprendre**
> `LoadPercentage` est une **photo instantanée**, pas une moyenne : deux appels
> successifs donnent deux valeurs différentes. Ce n'est pas un bug.
>
> Pour une vraie mesure de charge, il faut échantillonner dans le temps.

---

## Partie C : Les cales (10 min)

**C1.** Produisez un tableau des disques durs **locaux uniquement** avec : lettre,
taille en Go, espace libre en Go, pourcentage libre.

> [!check]+ Réponse C1
>
> ```powershell
> Get-CimInstance Win32_LogicalDisk -Filter "DriveType=3" |
>     Select-Object DeviceID,
>         @{Name="Taille_Go"; Expression={[math]::Round($_.Size/1GB, 1)}},
>         @{Name="Libre_Go";  Expression={[math]::Round($_.FreeSpace/1GB, 1)}},
>         @{Name="Pct_Libre"; Expression={
>             if ($_.Size -gt 0) { [math]::Round($_.FreeSpace/$_.Size*100, 1) } else { 0 }
>         }} |
>     Format-Table -AutoSize
> ```
>
> ```
> DeviceID Taille_Go Libre_Go Pct_Libre
> -------- --------- -------- ---------
> C:           296,9     22,8       7,7
> D:           399,6     97,0      24,3
> ```

**C2.** Que se passe-t-il si un lecteur CD vide est présent et que vous oubliez de
filtrer ? Comment vous en prémunir ?

> [!check]+ Réponse C2
> Sa propriété `Size` vaut **0**. Le calcul du pourcentage provoque alors une
> **division par zéro**.
>
> Deux protections, complémentaires : le filtre `DriveType=3`, **et** le test
> `if ($_.Size -gt 0)` malgré tout.

> 📘 **À comprendre**
> C'est exactement le bug que vous rencontrerez au **TP fil rouge 02**.
> La protection `if ($_.Size -gt 0)` n'est pas de la coquetterie.

> [!warning] Syntaxe non vue en cours à ce stade
> La **colonne calculée** `@{Name='Titre'; Expression={ ... $_ ... }}` crée une
> colonne qui n'existe pas dans les données d'origine. Elle n'a **pas** été
> enseignée avant le chapitre 12.
>
> - Version **débutant** : la question est découpée pour s'en passer (C1 affiche
>   les propriétés brutes, C2 et C3 convertissent un seul disque avec une variable).
> - Version **avancée** : la syntaxe est fournie dans l'encadré **Boîte à outils**
>   en tête d'énoncé.
>
> Si vous introduisez les colonnes calculées en cours magistral avant ce TP,
> vous pouvez rendre C1 directement exigible aux deux niveaux.

---

## Partie D : Explorer l'inconnu (5 min)

Vous ne connaissez pas la classe qui contient le numéro de série du BIOS.
Trouvez-la **sans chercher sur Internet**.

**D1.** Affichez le numéro de série et le fabricant du BIOS.

> [!check]+ Réponse D1
>
> ```powershell
> Get-CimClass -ClassName Win32_*BIOS*
> (Get-CimClass Win32_BIOS).CimClassProperties.Name
> Get-CimInstance Win32_BIOS | Select-Object SerialNumber, Manufacturer
> ```
>
> ```
> SerialNumber : CWXQNS3
> Manufacturer : Dell Inc.
> ```

**D2.** Quelle commande liste les propriétés d'une classe **sans** l'interroger ?
Pourquoi est-ce plus rapide ? _(avancé)_

> [!check]+ Réponse D2
>
> ```powershell
> (Get-CimClass Win32_BIOS).CimClassProperties.Name
> ```
>
> `Get-CimClass` interroge le **schéma**, pas les données : la réponse est
> instantanée, même sur une classe très lourde.

**D3.** Combien de classes `Win32_*` votre poste expose-t-il ? _(avancé)_

> [!check]+ Réponse D3
>
> ```powershell
> (Get-CimClass -ClassName Win32_*).Count
> ```
>
> **863** sur le poste de référence.

> 📘 **À comprendre**
> C'est **la** compétence du chapitre : on ne retient pas 863 classes,
> **on sait chercher**.
>
> Le réflexe en deux temps :
>
> 1. `Get-CimClass -ClassName Win32_*motcle*` pour trouver la classe ;
> 2. `(Get-CimClass X).CimClassProperties.Name` pour voir ce qu'elle contient.
>
> Le numéro de série du BIOS est ce qu'on utilise en vrai pour un inventaire de parc.

---

## Partie E : WQL, la syntaxe piégeuse (5 min)

**E1.** Entre `-Filter "State='Running'"` et `-Filter "State -eq 'Running'"`,
laquelle fonctionne ?

> [!check]+ Réponse E1
> La **première** : `-Filter "State='Running'"`
>
> ```powershell
> Get-CimInstance Win32_Service -Filter "State='Running'"
> ```

**E2.** Pourquoi l'autre échoue-t-elle ? Quel est le message exact ?

> [!check]+ Réponse E2
>
> ```
> La requête n'est pas valide pour le langage de requête spécifié.
> ```
>
> Parce que `-Filter` attend du **WQL**, pas du PowerShell. L'opérateur d'égalité
> y est `=`, pas `-eq`.

**E3.** Écrivez les filtres WQL correspondants, **sans** `Where-Object`.

> [!check]+ Réponse E3
>
> | Besoin                                             | Filtre                                      |
> | -------------------------------------------------- | ------------------------------------------- |
> | Services arrêtés au démarrage automatique          | `"State='Stopped' AND StartMode='Auto'"`    |
> | Disques locaux de moins de 10 Go libres _(avancé)_ | `"DriveType=3 AND FreeSpace < 10737418240"` |
>
> ```powershell
> Get-CimInstance Win32_Service -Filter "State='Stopped' AND StartMode='Auto'"
> ```
>
> Sur le poste de référence : **7** services arrêtés au démarrage automatique.

> 📘 **À comprendre**
> WQL filtre **côté Windows**, avant l'envoi des données. `Where-Object` rapatrie
> tout, puis jette. En local la différence est faible ; sur une **machine
> distante**, elle est décisive : on ne transporte que ce dont on a besoin.
>
> Par ailleurs, trois mini-langages de filtrage cohabitent dans cette formation.
> Ne les mélangez pas :
>
> | Contexte                | Égalité | Et                               |
> | ----------------------- | ------- | -------------------------------- |
> | PowerShell              | `-eq`   | `-and`                           |
> | **WQL** (CIM)           | `=`     | `AND`                            |
> | Filtre AD (chapitre 29) | `-eq`   | `-and`, mais dans une **chaîne** |
>
> En WQL, le joker est `%` avec l'opérateur `LIKE`, pas `*`.

---

## Mission finale F : la fiche du Thousand Sunny 🏴‍☠️

**F1.** Produisez un objet unique regroupant : nom de machine, fabricant, modèle,
numéro de série, système, version, RAM totale et libre en Go, nombre de disques,
espace libre total en Go, date de dernier démarrage. Le résultat doit s'exporter
en CSV sans retouche.

> [!check]+ Réponse F1
>
> ```powershell
> $os     = Get-CimInstance Win32_OperatingSystem
> $cs     = Get-CimInstance Win32_ComputerSystem
> $cpu    = Get-CimInstance Win32_Processor | Select-Object -First 1
> $bios   = Get-CimInstance Win32_BIOS
> $disques = Get-CimInstance Win32_LogicalDisk -Filter "DriveType=3"
>
> [PSCustomObject]@{
>     Machine       = $cs.Name
>     Fabricant     = $cs.Manufacturer
>     Modele        = $cs.Model
>     Systeme       = $os.Caption
>     Version       = $os.Version
>     Processeur    = $cpu.Name
>     Coeurs        = $cpu.NumberOfCores
>     RAM_Totale_Go = [math]::Round($os.TotalVisibleMemorySize / 1MB, 1)
>     RAM_Libre_Go  = [math]::Round($os.FreePhysicalMemory / 1MB, 1)
>     Nb_Disques    = @($disques).Count
>     Libre_Total_Go = [math]::Round(($disques | Measure-Object FreeSpace -Sum).Sum / 1GB, 1)
>     BIOS_Serie    = $bios.SerialNumber
>     Demarre_Le    = $os.LastBootUpTime
> } | Export-Csv "$env:TEMP\fiche-machine.csv" -NoTypeInformation -Encoding UTF8
> ```
>
> Sortie type (avec `Format-List` au lieu de l'export) :
>
> ```
> Machine       : LPSAM
> Fabricant     : Dell Inc.
> Modele        : Dell G15 5520
> Systeme       : Microsoft Windows 11 Professionnel
> Processeur    : 12th Gen Intel(R) Core(TM) i7-12700H
> Coeurs        : 14
> RAM_Totale_Go : 31,7
> RAM_Libre_Go  : 10,2
> BIOS_Serie    : CWXQNS3
> ```
>
> ⚠️ C'est un `[PSCustomObject]` et non une table de hachage : c'est ce qui rend
> l'export CSV exploitable.

**F2.** Adaptez la commande pour interroger **trois machines distantes** d'un coup.
_(avancé)_

> [!check]+ Réponse F2
>
> ```powershell
> Get-CimInstance Win32_OperatingSystem -ComputerName "SRV-01", "SRV-02", "SRV-03"
> ```

**F3.** Écrivez la version qui ouvre une **session réutilisable** et la referme.
Quel avantage si vous posez dix questions à la même machine ? _(avancé)_

> [!check]+ Réponse F3
>
> ```powershell
> $session = New-CimSession -ComputerName "SRV-01", "SRV-02"
>
> Get-CimInstance Win32_OperatingSystem -CimSession $session
> Get-CimInstance Win32_LogicalDisk -Filter "DriveType=3" -CimSession $session
>
> Remove-CimSession -CimSession $session
> ```
>
> **Avantage** : la connexion et l'authentification sont négociées **une seule
> fois**. Sur dix questions, on économise neuf ouvertures de session.

> 📘 **À comprendre**
> Le piège des **unités**, à ne jamais oublier :
>
> | Classe                        | Unité          | Diviseur pour des Go |
> | ----------------------------- | -------------- | -------------------- |
> | `Win32_OperatingSystem` (RAM) | **kilooctets** | `/ 1MB`              |
> | `Win32_LogicalDisk` (disques) | **octets**     | `/ 1GB`              |
>
> Le réflexe : vérifiez toujours l'unité avec `Format-List *` **avant** de calculer.
>
> Une machine de 32 Go affichera ~31,7 : le reste est réservé au matériel, c'est normal.

---

> [!success] Validation
>
> - Vous découvrez une classe et ses propriétés sans documentation
> - Vous filtrez en WQL plutôt qu'avec `Where-Object`
> - Vous maîtrisez les unités (Ko pour la RAM, octets pour les disques)
> - Vous savez interroger des machines distantes, avec ou sans session

---

## Pour aller plus loin — hors programme

> [!info] Non évalué
> Ces questions portent sur des notions **non abordées au chapitre 12**.
> Elles figurent uniquement dans la version avancée, après la mission F.

**G1.** Quelle différence entre `NumberOfCores` et `NumberOfLogicalProcessors` ?

> [!check]+ Réponse G1
>
> | Propriété                   | Valeur | Sens                      |
> | --------------------------- | ------ | ------------------------- |
> | `NumberOfCores`             | 14     | cœurs **physiques**       |
> | `NumberOfLogicalProcessors` | 20     | avec l'**hyperthreading** |

**G2.** Que vaut `DriveType` pour un lecteur réseau ? Pour un CD-ROM ?

> [!check]+ Réponse G2
>
> | Valeur | Type de lecteur    |
> | ------ | ------------------ |
> | 2      | amovible (clé USB) |
> | **3**  | **disque fixe**    |
> | 4      | lecteur réseau     |
> | 5      | CD-ROM             |

**G3.** La classe qui liste les logiciels installés est réputée dangereuse.
Laquelle est-ce, quel effet de bord provoque-t-elle, et quelle alternative fiable
existe ?

> [!check]+ Réponse G3
> C'est **`Win32_Product`**. Elle est très lente, et surtout elle déclenche une
> **vérification de cohérence MSI sur chaque paquet installé** — ce qui peut
> provoquer des réparations automatiques et générer des entrées dans les journaux.
>
> L'alternative fiable, et bien plus rapide, passe par le **registre**
> (chapitre 18) :
>
> ```powershell
> Get-ItemProperty "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\*" |
>     Where-Object DisplayName |
>     Select-Object DisplayName, DisplayVersion, Publisher
> ```

**G4.** Depuis combien de **jours** la machine tourne-t-elle ?

> [!check]+ Réponse G4
>
> ```powershell
> $os = Get-CimInstance Win32_OperatingSystem
> ((Get-Date) - $os.LastBootUpTime).TotalDays
> ```
>
> `LastBootUpTime` étant un vrai objet `[datetime]`, on peut le soustraire à
> `Get-Date` : le résultat est une durée. C'est tout l'intérêt des objets face à
> du texte.

**G5.** Comparez le temps d'un filtrage WQL et d'un `Where-Object` équivalent.

> [!check]+ Réponse G5
>
> ```powershell
> Measure-Command { Get-CimInstance Win32_Service -Filter "State='Running'" }
> Measure-Command { Get-CimInstance Win32_Service | Where-Object State -eq 'Running' }
> ```
>
> En local l'écart est faible. Sur une machine **distante**, il devient décisif.

---

## Ce qu'il faut retenir

| Commande                                   | Rôle                              |
| ------------------------------------------ | --------------------------------- |
| `Get-CimInstance <Classe>`                 | interroger WMI                    |
| `Get-CimClass -ClassName Win32_*X*`        | **trouver** une classe            |
| `(Get-CimClass X).CimClassProperties.Name` | ses propriétés, sans l'interroger |
| `-Filter "Prop='valeur'"`                  | filtrer en **WQL**, côté Windows  |
| `-ComputerName` / `New-CimSession`         | machines distantes                |
| `Invoke-CimMethod`                         | appeler une méthode d'une classe  |

**Classes utiles** : `Win32_OperatingSystem` · `Win32_ComputerSystem` ·
`Win32_Processor` · `Win32_LogicalDisk` · `Win32_BIOS` · `Win32_Service`

**Pour les processus, `Get-Process`. Pour tout le reste de la machine, `Get-CimInstance`.**
