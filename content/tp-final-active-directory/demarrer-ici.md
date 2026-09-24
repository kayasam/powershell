---
title: "DÉMARRER ICI — TP Le Fournil"
aliases:
  - /tp-final-active-directory/prerequis
---

> [!important] Vous êtes au bon endroit
> C'est la **première note à lire**. Elle prend 5 minutes et vous évite de perdre une heure.
> N'ouvrez aucune autre note avant d'avoir fini celle-ci.

---

## 1 — En une phrase, on fait quoi ?

Vous êtes l'administrateur système d'une boulangerie artisanale, **Le Fournil**, qui a 30 salariés.
Votre mission : **construire de zéro toute son infrastructure Windows** — les comptes, les groupes, les dossiers partagés, les droits d'accès et un raccourci automatique sur les PC.

À la fin, quand Marc Lebrun (chef boulanger) ouvre une session, il trouve tout seul :

- un lecteur **H:** avec son dossier personnel,
- un raccourci vers les dossiers de son service,
- l'accès **en écriture** à son dossier métier, **en lecture seule** aux dossiers des autres.

---

## 2 — Le parcours complet, en un coup d'œil

![Schema-Parcours-TP](https://kayasam.github.io/powershell/ressources/images/schema-parcours-tp.svg)

---

## 3 — La maquette : qui est qui

Avant de taper la moindre commande, vous devez savoir **sur quelle machine vous êtes**.
C'est la source de confusion n°1 du TP.

![Schema-Reseau-Lab](https://kayasam.github.io/powershell/ressources/images/schema-reseau-lab.svg)

> [!tip] La règle simple
> Vous n'ouvrez **jamais** la console directement sur DC02.
> Vous travaillez depuis **votre poste**, connecté en SSH à **DC01**, et DC01 pilote DC02 à distance.

Dans toutes les notes du TP, chaque bloc de commandes est précédé d'un badge qui dit où le taper :

| Badge                  | Signification                                                        |
| ---------------------- | -------------------------------------------------------------------- |
| 💻 **SUR VOTRE POSTE** | PowerShell ouvert sur votre Windows 10/11                            |
| 🖥️ **SUR DC01**        | Terminal VSCode connecté en SSH à DC01 (ou console directe)          |
| 🖧 **VERS DC02**        | Vous tapez sur DC01, mais ça s'exécute sur DC02 via `Invoke-Command` |

---

## 4 — Vérifiez que vous avez tout

On part vraiment de **zéro** : vous allez créer les deux serveurs vous-même.
Il vous faut donc seulement ceci. S'il manque une ligne, appelez le formateur **maintenant**, pas dans 2 heures.

- [ ] Un PC en **Windows 10/11 Pro, Entreprise ou Éducation** (Famille n'a pas Hyper-V)
- [ ] La **virtualisation activée** dans le BIOS (Intel VT-x / AMD-V)
- [ ] **8 Go de RAM** minimum, 16 Go de préférence
- [ ] **80 Go d'espace disque libre** minimum, 150 Go de préférence
- [ ] Les **droits administrateur** sur ce PC
- [ ] L'**ISO de Windows Server 2025** (version d'évaluation, 180 jours, gratuite)
- [ ] Le dossier `scripts/` du TP (les 2 CSV + les 4 .ps1)

> [!note] Rien n'est préinstallé, et c'est le but
> Vous montez l'infrastructure de A à Z : les machines virtuelles, le réseau, les serveurs, le domaine.
> C'est exactement ce qu'on vous demandera de faire en entreprise. Comptez **3 h** pour cette phase.

---

## 5 — Ce que vous allez monter avant de commencer le TP

![Schema-Montage-Lab](https://kayasam.github.io/powershell/ressources/images/schema-montage-lab.svg)

Deux machines virtuelles sur votre PC, reliées par un réseau virtuel privé, avec un accès Internet via NAT.
À la fin de la phase de montage, `ad.fournil.lab` existera et vous en serez l'administrateur.

---

## 6 — L'ordre à suivre, sans exception

### Phase A — Monter le lab (≈ 3 h, une seule fois)

| Ordre     | Note                                                                                           | Durée  | C'est quoi                                           |
| --------- | ---------------------------------------------------------------------------------------------- | ------ | ---------------------------------------------------- |
| **1**     | [[tp-final-active-directory/preparation/01-installer-les-vm\|00.1-Installer-les-VM]]           | 1 h    | Hyper-V, le réseau virtuel, les 2 VM, Windows Server |
| **1 bis** | [[tp-final-active-directory/preparation/01-vmware-workstation\|00.1-VMware-Workstation]]       | 1 h    | Variante pour un poste équipé de VMware Workstation  |
| **2**     | [[tp-final-active-directory/preparation/02-preparer-les-serveurs\|00.2-Preparer-les-Serveurs]] | 45 min | Nommer, adresser, mettre à jour les 2 serveurs       |
| **3**     | [[tp-final-active-directory/preparation/03-promouvoir-dc01\|00.3-Promouvoir-DC01]]             | 30 min | Installer AD DS et créer le domaine `ad.fournil.lab` |
| **4**     | [[tp-final-active-directory/preparation/04-joindre-dc02\|00.4-Joindre-DC02]]                   | 30 min | Joindre DC02 et le promouvoir en DC additionnel      |
| **5**     | [[tp-final-active-directory/preparation/05-poste-de-travail\|00.5-Poste-de-Travail]]           | 30 min | Brancher VSCode en SSH + ouvrir le pare-feu          |

### Phase B — Le TP proprement dit (≈ 5 h)

| Ordre | Note                                                           | Durée | C'est quoi                                   |
| ----- | -------------------------------------------------------------- | ----- | -------------------------------------------- |
| **6** | [[tp-final-active-directory/ad/debutant\|01.TP-Debutant-AD]]   | 2 h   | Les OUs, groupes, permissions, utilisateurs  |
| **7** | [[tp-final-active-directory/dfs/debutant\|02.TP-Debutant-DFS]] | 2 h   | Les partages, DFS, la réplication, les homes |
| **8** | [[tp-final-active-directory/gpo/debutant\|03.TP-Debutant-GPO]] | 1 h   | La GPO qui pousse le raccourci réseau        |

> [!info] Trois niveaux pour la partie PowerShell AD
>
> - **Débutant** : commandes une par une sur un seul service — [[tp-final-active-directory/ad/debutant\|01.TP-Debutant-AD]]
> - **Intermédiaire** : import des CSV et boucles simples, sans fonction — [[tp-final-active-directory/ad/intermediaire\|01.TP-Intermediaire-AD]]
> - **Avancé** : script complet avec fonctions, contrôles et cache — [[tp-final-active-directory/ad/avance\|01.TP-Avance-AD]]

> [!tip] Le réflexe qui sauve : les points de contrôle Hyper-V
> À la fin de chaque note de la phase A, on vous fait créer un **snapshot**.
> Si vous cassez quelque chose, vous revenez à l'état précédent en 30 secondes au lieu de tout réinstaller.
> Ne sautez jamais ces commandes.

> [!info] Le lab est déjà monté par le formateur ?
> Sautez directement à [[tp-final-active-directory/preparation/05-poste-de-travail\|00.5-Poste-de-Travail]]. Mais lisez quand même [[tp-final-active-directory/preparation/03-promouvoir-dc01\|00.3-Promouvoir-DC01]] en diagonale : la distinction **rôle / promotion** et la logique **DNS** y sont expliquées, et elles tombent en évaluation.

> Le **TP intermédiaire** utilise les CSV avec des boucles simples, sans fonction.
> Le **parcours Avancé** ([[tp-final-active-directory/ad/avance\|01.TP-Avance-AD]] et suivants) consiste ensuite à réécrire le déploiement sous forme de scripts structurés et réutilisables.

---

## 7 — Comment lire une note de TP

Chaque exercice est construit pareil :

```
Objectif       → ce que vous devez obtenir, en français
Consigne       → ce qu'il faut faire
Questions      → à quoi réfléchir pendant que vous le faites
Vérification   → la commande qui prouve que c'est bon + le résultat attendu
Besoin d'aide  → un bloc repliable avec la procédure détaillée
```

> [!tip] La règle des 10 minutes
> Bloqué plus de **10 minutes** sur un exercice ? Ouvrez le bloc **Besoin d'aide ?** et lisez le Manuel.
> Ce n'est pas tricher : le Manuel fait partie du TP. Ce qui compte, c'est que vous compreniez la commande, pas que vous la deviniez.

---

## 8 — Le vocabulaire minimum

Si un de ces mots ne vous dit rien, lisez la ligne avant de commencer :

| Mot                           | En une phrase                                                                                    |
| ----------------------------- | ------------------------------------------------------------------------------------------------ |
| **Domaine**                   | L'annuaire central : la liste des comptes et des machines de l'entreprise. Ici `ad.fournil.lab`. |
| **DC** (Domain Controller)    | Le serveur qui héberge cet annuaire. Ici DC01.                                                   |
| **OU** (Unité d'Organisation) | Un dossier dans l'annuaire, pour ranger les comptes par service.                                 |
| **Groupe G_**                 | Un groupe _Global_ : il regroupe **des personnes** (les boulangers).                             |
| **Groupe DL_**                | Un groupe _DomainLocal_ : il porte **un droit** sur un dossier (lecture ou modification).        |
| **AGDLP**                     | La règle qui relie les deux : Account → Global → DomainLocal → Permission.                       |
| **NTFS**                      | Les droits posés sur un dossier du disque (qui peut lire, écrire...).                            |
| **DFS**                       | Un système qui donne un seul chemin réseau unique, même si les données sont sur 2 serveurs.      |
| **GPO**                       | Une règle appliquée automatiquement à tous les postes ou utilisateurs d'une OU.                  |
| **SYSVOL**                    | Un partage spécial du DC où l'on dépose les scripts distribués par les GPO.                      |

---

## 9 — Vous êtes prêt

> [!success] Étape suivante
> → **[[tp-final-active-directory/preparation/01-installer-les-vm\|00.1-Installer-les-VM]]** — on crée les deux machines virtuelles.

> Vue d'ensemble de toute la doc du projet : [[tp-final-active-directory/index\|Accueil du TP final]]
