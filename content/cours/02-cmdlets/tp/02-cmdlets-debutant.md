---
title: "Exercice 02 - Les Outils de la Marine - Débutant"
publier: true
parcours-tssr: true
parcours-pro: false
---

# Exercice 02 - Les Outils de la Marine 🌊 — Débutant

> Chapitre associé : [[02-cmdlets/02-cmdlets]]

## Contexte

Vous venez d'intégrer le **Bureau d'Analyse de la Marine**. Votre supérieur vous
remet votre premier outil : PowerShell.

Mission du jour : apprendre à trouver une commande, lire son aide, et explorer ce
qu'elle retourne.

> _"Un Marine qui ne connaît pas ses outils est un Marine inutile."_ — Vice-Amiral Tsuru

**Durée : 30 min**

## Objectif

Savoir chercher une commande sans la connaître, lire son aide, et inspecter ce
qu'elle renvoie.

---

## Partie A : Get-Command — Trouver les outils (10 min)

```powershell
# Lister toutes les commandes disponibles
Get-Command

# Combien y en a-t-il ?
(Get-Command).Count
```

**A1.** Combien de commandes votre poste propose-t-il ?

Cherchez maintenant par **verbe** :

```powershell
Get-Command -Verb Get
Get-Command -Verb Stop
Get-Command -Verb New
```

**A2.** Combien de commandes pour chacun de ces trois verbes ?

**A3.** Quel verbe a le plus de commandes associées ?

Cherchez par **nom** :

```powershell
Get-Command -Noun Process
```

**A4.** Quelles commandes trouvez-vous ? Devinez leur rôle d'après leur nom.

Cherchez avec un **joker** :

```powershell
Get-Command *Service*
Get-Command *Item*
```

**A5.** Combien de commandes parlent de `Service` ?

> 💡 **Indice** : `(Get-Command *Service*).Count` compte directement le résultat.

---

## Partie B : Get-Help — Lire le manuel (10 min)

```powershell
Get-Help Get-Process
Get-Help Get-Process -Examples
Get-Help Get-Process -Detailed
```

**B1.** Exécutez deux exemples proposés par l'aide. Que font-ils ?

**B2.** Quel paramètre permet de filtrer les processus par **nom** ?

**B3.** Quel paramètre permet d'interroger une machine **distante** ?

> 💡 **Indice** : `-Examples` donne des commandes prêtes à copier. `-Detailed`
> décrit chaque paramètre un par un.

---

## Partie C : Get-Member — Inspecter un objet (10 min)

```powershell
Get-Process | Get-Member
```

**C1.** Quel est le type exact de l'objet ? (ligne `TypeName`, tout en haut)

Filtrez maintenant par type de membre :

```powershell
# Voir uniquement les propriétés
Get-Process | Get-Member -MemberType Property

# Voir uniquement les méthodes
Get-Process | Get-Member -MemberType Method
```

**C2.** Combien de propriétés un processus a-t-il ? Combien de méthodes ?

Explorez d'autres objets :

```powershell
Get-Service | Get-Member
Get-Date    | Get-Member
```

**C3.** Pour `Get-Service` et `Get-Date`, notez trois propriétés qui vous semblent utiles.

> 💡 **Indice** : pour compter, entourez la commande de parenthèses et ajoutez
> `.Count`, comme en partie A.

---

## Mission finale D : rapport d'espionnage 🏴‍☠️

**D1.** Affichez les processus actifs avec leur nom, leur identifiant et leur
mémoire utilisée.

```powershell
Get-Process | Format-Table Name, Id, WorkingSet -AutoSize
```

**D2.** Faites la même chose sur les services, avec nom, statut et nom affiché.

```powershell
Get-Service | Format-Table Name, Status, DisplayName -AutoSize
```

**D3.** N'affichez que les 5 premiers résultats.

> 💡 **Indice** : `Select-Object -First 5` se place **avant** le `Format-Table`.

---

> [!success] Validation
>
> - Vous savez chercher une commande avec `Get-Command`
> - Vous savez lire l'aide avec `Get-Help`
> - Vous savez explorer un objet avec `Get-Member`
> - Vous comprenez la différence entre propriétés et méthodes
