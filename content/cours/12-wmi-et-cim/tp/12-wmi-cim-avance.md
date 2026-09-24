---
title: "Exercice 12 - L'Inventaire du Thousand Sunny - Avancé"
publier: true
parcours-tssr: true
parcours-pro: true
---

# Exercice 12 - L'Inventaire du Thousand Sunny 🛠️ — Avancé

> Chapitre associé : [[cours/12-wmi-et-cim/12-wmi-et-cim]]
> Mêmes parties que la version débutant, mais **sans les commandes**. À vous de les trouver.

## Contexte

Franky doit établir la fiche technique complète du navire. Un inventaire d'un
poste, c'est une curiosité. D'un parc de cinquante, c'est un outil de décision.

> _"Un bon charpentier connaît chaque planche de son navire."_ — Franky

**Durée : 30 min**

---

## Boîte à outils

Deux syntaxes vous seront utiles et n'ont pas encore été vues en cours.
Les voici : ne perdez pas de temps à les deviner.

**La colonne calculée** — créer une colonne qui n'existe pas dans les données :

```powershell
Get-CimInstance Win32_LogicalDisk -Filter "DriveType=3" |
    Select-Object DeviceID,
        @{Name="Taille_Go"; Expression={ [math]::Round($_.Size / 1GB, 1) }}
```

**L'objet personnalisé** — regrouper des informations de sources différentes :

```powershell
[PSCustomObject]@{
    Machine = $cs.Name
    Systeme = $os.Caption
}
```

> Vous en trouverez un exemple complet à la fin du chapitre, section
> **« Exemple complet : une fiche machine »**.

---

## Partie A : Le carnet de bord du navire (5 min)

Trouvez la classe WMI qui décrit le système d'exploitation.

**A1.** Quelle propriété donne le nom de Windows ?

**A2.** Quelle propriété donne la date du dernier démarrage ?

**A3.** Combien de propriétés cette classe possède-t-elle ?

---

## Partie B : Le moteur (5 min)

**B1.** Affichez le modèle du processeur, son nombre de cœurs et sa charge
instantanée.

**B2.** Pourquoi `Select-Object -First 1` peut-il être utile ici ?

---

## Partie C : Les cales (10 min)

**C1.** Produisez un tableau des disques durs **locaux uniquement** avec : lettre,
taille en Go, espace libre en Go, pourcentage libre.

**C2.** Que se passe-t-il si un lecteur CD vide est présent et que vous oubliez de
filtrer ? Comment vous en prémunir ?

---

## Partie D : Explorer l'inconnu (5 min)

Vous ne connaissez pas la classe qui contient le numéro de série du BIOS.
Trouvez-la **sans chercher sur Internet**.

**D1.** Affichez le numéro de série et le fabricant du BIOS.

**D2.** Quelle commande liste les propriétés d'une classe **sans** l'interroger ?
Pourquoi est-ce plus rapide ?

**D3.** Combien de classes `Win32_*` votre poste expose-t-il ?

---

## Partie E : WQL, la syntaxe piégeuse (5 min)

**E1.** Entre `-Filter "State='Running'"` et `-Filter "State -eq 'Running'"`,
laquelle fonctionne ?

**E2.** Pourquoi l'autre échoue-t-elle ? Quel est le message exact ?

**E3.** Écrivez les filtres WQL correspondants, **sans** `Where-Object` :

| Besoin                                       | Filtre WQL |
| -------------------------------------------- | ---------- |
| Services arrêtés au démarrage automatique    |            |
| Disques durs locaux de moins de 10 Go libres |            |

---

## Mission finale F : la fiche du Thousand Sunny 🏴‍☠️

**F1.** Produisez un objet unique regroupant : nom de machine, fabricant, modèle,
numéro de série, système, version, RAM totale et libre en Go, nombre de disques,
espace libre total en Go, date de dernier démarrage.

Le résultat doit s'exporter en CSV sans retouche (chapitre 08).

**F2.** Adaptez la commande pour interroger **trois machines distantes** d'un coup.

**F3.** Écrivez la version qui ouvre une **session réutilisable** et la referme.
Quel avantage si vous posez dix questions à la même machine ?

> [!note] F2 et F3 : à écrire, pas à exécuter
> Vous n'avez pas de machines distantes en salle. Ce qui compte ici, c'est la
> commande juste — pas son exécution.

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
> Ces questions portent sur des notions **non abordées en cours**. Traitez-les
> seulement si vous avez terminé en avance.

**G1.** Quelle différence entre `NumberOfCores` et `NumberOfLogicalProcessors` ?

**G2.** Que vaut `DriveType` pour un lecteur réseau ? Pour un CD-ROM ?

**G3.** La classe qui liste les logiciels installés est réputée dangereuse.
Laquelle est-ce, quel effet de bord provoque-t-elle, et quelle alternative fiable
existe ?

**G4.** Depuis combien de **jours** la machine tourne-t-elle ?
_(Nécessite le calcul sur les dates.)_

**G5.** Comparez le temps d'un filtrage WQL et d'un `Where-Object` équivalent.
_(Nécessite `Measure-Command`.)_
