---
title: "TP fil rouge — PowerShell"
---

# TP fil rouge — De la recrue à l'administrateur

Les cinq missions forment **un seul projet** qui évolue progressivement.
Chaque mission reprend le script de la précédente et lui ajoute de nouvelles notions.

Fil narratif : recrue à la Marine, puis recruté par la **Cipher Pol** sous les ordres
de Rob Lucci — de l'affichage brut au script d'administration industrialisé.

| Mission | TP                                                                         | Ce que le TP construit                                                 | Module  |
| ------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------- |
| 1       | [[cours/tp-fil-rouge/01-enrolement-marine\|01 — L'Enrôlement à la Marine]] | Premier script, variables, affichage formaté                           | 01 → 08 |
| 2       | [[cours/tp-fil-rouge/02-dashboard-alertes\|02 — Le Dashboard d'Alerte]]    | Fonctions, alertes conditionnelles, données CIM, score de santé        | 09 → 13 |
| 3       | [[cours/tp-fil-rouge/03-archives-cipher-pol\|03 — Le Système d'Archives]]  | Fonction de logging, export CSV/JSON, archivage par date, `try/catch`  | 14 → 21 |
| 4       | [[cours/tp-fil-rouge/04-module-cipher-pol\|04 — Le Module Officiel]]       | Refactorisation en module `.psm1`, paramètres validés, tâche planifiée | 22 → 27 |
| 5       | [[cours/tp-fil-rouge/05-gestion-agents\|05 — L'Administration des Agents]] | Import CSV, création de comptes AD, affectation aux groupes, rapport   | 28 → 32 |

> [!NOTE] Le TP ne couvre pas tout son module
> Chaque mission mobilise les notions **centrales** de son module, pas la totalité
> des chapitres. Les sujets non repris par le fil rouge (classes .NET, registre et
> journaux, signature de scripts, RSAT et Gallery, profils, regex, interfaces graphiques) sont travaillés dans les
> **exercices de chapitre** correspondants.
>
> Deux prolongements sont d'ailleurs prévus dans ces exercices :
>
> - chapitre 27 — planifier le script du TP3 ;
> - chapitre 32 — donner une **interface graphique** au TP5.
