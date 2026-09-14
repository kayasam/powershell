---
title: "TP fil rouge — PowerShell"
---

# TP fil rouge — De la recrue à l'administrateur

Les cinq TP forment **un seul projet** qui grandit de jour en jour.
Chaque TP reprend le script du précédent et lui ajoute les notions du jour.

| Jour | TP                                                                   | Ce qu'on ajoute                                       | Chapitres mobilisés |
| ---- | -------------------------------------------------------------------- | ----------------------------------------------------- | ------------------- |
| 1    | [[tp-fil-rouge/01-enrolement-marine\|01 — L'Enrôlement à la Marine]] | Premier script, variables, affichage formaté          | 01 → 08             |
| 2    | [[tp-fil-rouge/02-dashboard-alertes\|02 — Le Dashboard d'Alerte]]    | Pipeline, conditions, boucles, WMI/CIM, fonctions     | 09 → 13             |
| 3    | [[tp-fil-rouge/03-archives-cipher-pol\|03 — Le Système d'Archives]]  | Fichiers, export CSV/JSON, gestion d'erreurs          | 14 → 17             |
| 4    | [[tp-fil-rouge/04-module-cipher-pol\|04 — Le Module Officiel]]       | Paramètres, module réutilisable, regex, planification | 18 → 21             |
| 5    | [[tp-fil-rouge/05-gestion-agents\|05 — L'Administration des Agents]] | Active Directory, rapports                            | 22 → 25             |

## Corrections formateur

Les solutions sont dans `tp-fil-rouge/solutions/` :

| TP  | Solution                                                                  |
| --- | ------------------------------------------------------------------------- |
| 01  | `solutions/01-enrolement-marine.ps1`                                      |
| 02  | `solutions/02-dashboard-alertes.ps1`                                      |
| 03  | `solutions/03-archives-cipher-pol.ps1`                                    |
| 04  | `solutions/04-module-cipher-pol/` (CipherPol.psm1 + Invoke-CipherPol.ps1) |
| 05  | `solutions/05-gestion-agents/` (Invoke-IntegrationAgents.ps1)             |

> [!warning] Ne pas distribuer
> Le dossier `solutions/` reste dans le coffre du formateur.
