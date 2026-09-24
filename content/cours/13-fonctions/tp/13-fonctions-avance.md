---
title: "Exercice 13 - La Boite à Outils de Franky - Avancé"
publier: true
parcours-tssr: true
parcours-pro: true
---

# Exercice 13 - La Boite à Outils de Franky ⚙️ — Avancé

> Chapitre associé : [[cours/13-fonctions/13-fonctions]]
> Mêmes parties que la version débutant, mais **sans les commandes**. À vous de les trouver.

## Contexte

**Franky** ne fait jamais deux fois la même chose à la main. Il fabrique des
outils réutilisables.

> _"SUPER ! Un bon outil, c'est fait une fois et utilisé mille fois."_ — Franky

**Durée : 35 min**

---

## Partie A : Vos premiers outils (10 min)

**A1.** Écrivez une fonction qui salue une personne passée en paramètre.
Donnez à ce paramètre une **valeur par défaut**, et vérifiez qu'elle s'applique
quand on appelle la fonction sans argument.

**A2.** Écrivez une fonction `ConvertTo-Millions` qui convertit un montant en
millions et **retourne** le résultat. Prouvez qu'il est réutilisable dans une
variable.

**A3.** Ces noms de fonctions sont mauvais. Corrigez-les et expliquez pourquoi.
Quelle commande vérifie qu'un verbe est autorisé ?

| Nom proposé        | Nom correct | Problème |
| ------------------ | ----------- | -------- |
| `calculTVA`        |             |          |
| `Afficher-Rapport` |             |          |
| `Verifier-Disque`  |             |          |

---

## Partie B : Afficher ou retourner (10 min)

**B1.** Que contiendrait `$r` dans chaque cas ? Expliquez.

```powershell
function Test-A { Write-Host "bonjour" }
function Test-B { "bonjour" }
function Test-C { "un"; Write-Host "deux"; return "trois"; "quatre" }
```

**B2.** Que fait réellement `return` en PowerShell ?

**B3.** Écrivez une fonction qui affiche la fiche d'un pirate : nom, prime
formatée, niveau de danger.

Seuils : ≥ 1 Md « Extrêmement dangereux », ≥ 100 M « Dangereux »,
≥ 10 M « Modéré », sinon « Faible ».

**B4.** Faites-lui **réutiliser** `ConvertTo-Millions` de la partie A.
Pourquoi est-ce préférable à recopier le code ?

---

## Partie C : Une fonction qui retourne un objet (10 min)

**C1.** Écrivez une fonction qui renvoie un **objet** décrivant la machine :
nom du serveur, RAM totale, RAM libre, modèle de CPU, heure du relevé.

> 💡 Un objet se construit avec `[PSCustomObject]@{ Cle = Valeur; ... }`.
> Vous en avez vu un exemple complet à la fin du **chapitre 12**.

**C2.** Prouvez que le résultat est un vrai objet : triez-le, filtrez-le, et
exportez-le en CSV (chapitre 08).

**C3.** Pourquoi ce choix est-il meilleur qu'une fonction qui afficherait
directement le rapport à l'écran ?

---

## Mission finale D : la boîte à outils complète 🌟

**D1.** Écrivez `Show-RapportEquipage` qui affiche l'analyse de chaque pirate
puis le total des primes formaté.

```powershell
$equipage = @(
    @{ Nom = "Monkey D. Luffy"; Prime = 3000000000 }
    @{ Nom = "Roronoa Zoro";    Prime = 1111000000 }
    @{ Nom = "Nami";            Prime = 366000000  }
)
```

**D2.** Faites-la renvoyer **aussi** un objet de synthèse (nombre de pirates,
prime totale, prime moyenne), exploitable par un autre script.

---

> [!success] Validation
>
> - Vous nommez vos fonctions en Verbe-Nom **approuvé**
> - Vous composez des fonctions entre elles
> - Vous distinguez **afficher** et **retourner**
> - Vous faites retourner à vos fonctions des objets réutilisables

---

## Pour aller plus loin — hors programme

> [!info] Non évalué
> Ces questions portent sur des notions **non abordées au chapitre 13**.
> Traitez-les seulement si vous avez terminé en avance.

**E1.** Rendez le paramètre `Nom` **obligatoire**, et limitez `DevilFruit` aux
seules valeurs `$true` / `$false`.
_(Nécessite les attributs de paramètre.)_

**E2.** Rendez votre fonction de conversion utilisable **des deux** façons :

```powershell
ConvertTo-Millions -Montant 2500000
$primes | ConvertTo-Millions
```

Quel attribut de paramètre le permet ? Quels blocs faut-il ?
_(Nécessite le pipeline dans les fonctions.)_

**E3.** Ajoutez à votre fonction une **aide intégrée**, et vérifiez que
`Get-Help` l'affiche.
_(Nécessite l'aide basée sur les commentaires.)_

**E4.** Une fonction peut-elle modifier durablement une variable définie à
l'extérieur ? Vérifiez, puis donnez les **deux** façons propres de faire remonter
une valeur.
_(Nécessite la notion de portée.)_
