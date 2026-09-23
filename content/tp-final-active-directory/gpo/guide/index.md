---
title: "Procédure GPO — Emplacement réseau Home"
---

> Cette procédure déploie une GPO qui crée automatiquement un raccourci **"Mon Dossier Personnel"** dans l'Explorateur Windows de chaque utilisateur, pointant vers son dossier personnel `\\ad.fournil.lab\HOMES\<Entite>\<Login>`.

**Domaine** : `ad.fournil.lab` | **Serveur** : DC01

**Serveurs concernés :**

| Rôle       | Nom  | Description                             |
| ---------- | ---- | --------------------------------------- |
| Principal  | DC01 | Crée la GPO et le script                |
| Secondaire | DC2  | Reçoit le script via réplication SYSVOL |

---

## Phases

| #   | Note                                                                                                 | Ce qu'on fait                                                                                                    |
| --- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 1   | [[tp-final-active-directory/gpo/guide/gpo-01-script-connexion\|GPO-01-Script-Connexion]]             | Créer le script `Set-NetworkLocation.ps1` (lecture HomeDirectory AD, raccourci réseau, Desktop.ini, idempotence) |
| 2   | [[tp-final-active-directory/gpo/guide/gpo-02-creer-lier-gpo\|GPO-02-Creer-Lier-GPO]]                 | Créer la GPO `GPO_Emplacement_Home` et la lier à `OU=fournil`                                                    |
| 3   | [[tp-final-active-directory/gpo/guide/gpo-03-deploiement-sysvol\|GPO-03-Deploiement-SYSVOL]]         | Copier le script dans le SYSVOL de la GPO (répliqué vers DC2)                                                    |
| 4   | [[tp-final-active-directory/gpo/guide/gpo-04-enregistrer-script\|GPO-04-Enregistrer-Script]]         | Créer `psscripts.ini` pour que Windows exécute le script à la connexion                                          |
| 5   | [[tp-final-active-directory/gpo/guide/gpo-05-verification-depannage\|GPO-05-Verification-Depannage]] | Tester le raccourci + résoudre les problèmes courants                                                            |

---

## Résumé des commandes

| Commande                                            | Ce qu'elle fait                   | Phase                                                                                                |
| --------------------------------------------------- | --------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `New-GPO -Name "GPO_Emplacement_Home"`              | Crée la GPO                       | [[tp-final-active-directory/gpo/guide/gpo-02-creer-lier-gpo\|GPO-02-Creer-Lier-GPO]]                 |
| `New-GPLink -Name ... -Target ... -LinkEnabled Yes` | Lie la GPO à l'OU                 | [[tp-final-active-directory/gpo/guide/gpo-02-creer-lier-gpo\|GPO-02-Creer-Lier-GPO]]                 |
| `Copy-Item ... -Destination $sysvolPath`            | Copie le script dans SYSVOL       | [[tp-final-active-directory/gpo/guide/gpo-03-deploiement-sysvol\|GPO-03-Deploiement-SYSVOL]]         |
| `Set-Content -Path psscripts.ini -Encoding Unicode` | Enregistre le script de connexion | [[tp-final-active-directory/gpo/guide/gpo-04-enregistrer-script\|GPO-04-Enregistrer-Script]]         |
| `gpupdate /force` + déconnexion/reconnexion         | Teste la GPO                      | [[tp-final-active-directory/gpo/guide/gpo-05-verification-depannage\|GPO-05-Verification-Depannage]] |

---

## Ce que l'utilisateur voit après

```
Explorateur Windows
├── Ce PC
├── Réseau
│   └── Mon Dossier Personnel    ← raccourci vers \\ad.fournil.lab\HOMES\<entite>\<login>
└── Lecteur H:                   ← mappé automatiquement (HomeDirectory AD)
```
