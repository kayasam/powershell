---
title: "Exercice 10 - L'Analyseur d'Intrusion - Avancé"
publier: true
parcours-tssr: true
parcours-pro: true
---

# Exercice 10 - L'Analyseur d'Intrusion 🔐 — Avancé

> Chapitre associé : [[10-conditions/10-conditions]]
> Mêmes parties que la version débutant, mais **sans les commandes**. À vous de les trouver.

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

**A2.** Pourquoi l'ordre des `elseif` est-il important ?

**A3.** Réécrivez la même logique avec `switch`. Testez avec `2` **sans** `break`.
Que se passe-t-il, et pourquoi ?

**A4.** Dans quel cas l'absence de `break` est-elle au contraire **souhaitable** ?

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

**B2.** Quel utilisateur est le plus suspect ?

**B3.** Affichez les connexions sur le port 22 **et** avec plus de 10 tentatives.

**B4.** Affichez les connexions dont le port est **dans** la liste 22, 3389, 5985.

---

## Partie C : Le rapport automatique (15 min)

**C1.** Écrivez un script qui parcourt tous les logs et affiche, pour chaque
connexion, son niveau et sa couleur. Sans dupliquer la logique de classement.

**C2.** En PowerShell, que renvoie un `if` ? Quelle écriture cela permet-il ?

**C3.** PowerShell 7 propose une écriture condensée pour une affectation
conditionnelle simple. Laquelle ? Donnez un exemple, et dites quand elle devient
moins lisible qu'un `if`.

---

## Mission finale D : l'alerte intelligente 🌟

**D1.** Affichez `>>> BLOQUÉ` pour toute IP avec plus de 100 tentatives sur le
port 22.

**D2.** Affichez à la fin le nombre total de connexions CRITIQUES.

**D3.** Prédisez le résultat de chacun de ces tests, puis vérifiez. Expliquez
chaque surprise.

```powershell
if ("")    { "A" }
if ("   ") { "B" }
if (0)     { "C" }
if ("0")   { "D" }
if (@())   { "E" }
if (@(0))  { "F" }
```

**D4.** Quelle est la façon **sûre** de tester « cette saisie est-elle vide ? »

**D5.** Réécrivez cette condition pour la rendre lisible, sans changer son
comportement. Citez ses trois défauts.

```powershell
if (((Get-Service W32Time).Status -eq "Running") -and ((Get-CimInstance Win32_LogicalDisk -Filter "DeviceID='C:'").FreeSpace / (Get-CimInstance Win32_LogicalDisk -Filter "DeviceID='C:'").Size * 100 -lt 15)) { "ALERTE" }
```

---

## Validation

✅ Vous maîtrisez `if / elseif / else` et l'ordre des tests
✅ Vous savez pourquoi un `switch` a besoin de `break`
✅ Vous connaissez les valeurs que PowerShell considère comme vraies
✅ Vous savez tester une saisie vide de façon fiable
✅ Vous savez rendre lisible une condition complexe
