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

**Durée : 40 min**

---

## Partie A : Vos premiers outils (15 min)

**A1.** Écrivez une fonction qui convertit un montant en texte lisible :
« Milliards » au-delà du milliard, « Millions » au-delà du million, « Berrys »
sinon. Testez sur 3 000 000 000, 500 000 000 et 1 000.

**A2.** Vérifiez que son résultat est **réutilisable** dans une variable.

**A3.** Écrivez une fonction qui affiche un titre encadré, avec une couleur
**par défaut** modifiable par paramètre.

**A4.** Ces noms de fonctions sont mauvais. Corrigez-les et expliquez pourquoi.
Quelle commande vérifie qu'un verbe est autorisé ?

| Nom proposé        | Nom correct | Problème |
| ------------------ | ----------- | -------- |
| `calculTVA`        |             |          |
| `Afficher-Rapport` |             |          |
| `Verifier-Disque`  |             |          |

---

## Partie B : Analyser un pirate (15 min)

**B1.** Écrivez une fonction qui affiche la fiche d'un pirate : nom, prime
formatée, niveau de danger, présence d'un Devil Fruit.

Seuils de danger : ≥ 1 Md « Extrêmement dangereux », ≥ 100 M « Dangereux »,
≥ 10 M « Modéré », sinon « Faible ».

**B2.** Faites-lui **réutiliser** la fonction de conversion de la partie A.
Pourquoi est-ce préférable à recopier le code ?

**B3.** Rendez le paramètre `Nom` **obligatoire**, et limitez `DevilFruit` à
`$true` ou `$false`.

---

## Partie C : Une fonction qui retourne un objet (10 min)

**C1.** Écrivez une fonction qui renvoie un **objet** décrivant la machine :
nom du serveur, RAM totale, RAM libre, modèle de CPU, heure du relevé.

**C2.** Prouvez que le résultat se trie, se filtre et s'exporte en CSV.

**C3.** Que contiendrait `$r` dans chaque cas ? Expliquez.

```powershell
function Test-A { Write-Host "bonjour" }
function Test-B { "bonjour" }
function Test-C { "un"; Write-Host "deux"; return "trois"; "quatre" }
```

**C4.** Que fait réellement `return` en PowerShell ?

---

## Partie D : Fonction et pipeline

**D1.** Rendez votre fonction de conversion utilisable **des deux** façons :

```powershell
ConvertTo-Berrys -Montant 2500000
$primes | ConvertTo-Berrys
```

Quel attribut de paramètre le permet ? Quels blocs faut-il ?

**D2.** Que se passe-t-il si vous oubliez l'un de ces blocs ? Vérifiez.

**D3.** Ajoutez à votre fonction une **aide intégrée** complète, et vérifiez que
`Get-Help` l'affiche.

---

## Mission finale E : la boîte à outils complète 🌟

**E1.** Écrivez `Get-RapportEquipage` qui affiche l'analyse de chaque pirate puis
le total des primes formaté.

**E2.** Faites-la renvoyer **aussi** un objet de synthèse (nombre de pirates,
prime totale, prime moyenne, nombre de porteurs de Devil Fruit), exploitable
par un autre script.

**E3.** Une fonction peut-elle modifier durablement une variable définie à
l'extérieur ? Vérifiez, puis donnez les **deux** façons propres de faire remonter
une valeur.

---

> [!success] Validation
>
> - Vous nommez vos fonctions en Verbe-Nom **approuvé**
> - Vous composez des fonctions entre elles
> - Vous distinguez afficher et retourner
> - Vous écrivez une fonction compatible pipeline
> - Vous documentez vos fonctions pour `Get-Help`
