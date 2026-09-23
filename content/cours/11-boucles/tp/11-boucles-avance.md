---
title: "Exercice 11 - Le Scanner de la Flotte - Avancé"
publier: true
parcours-tssr: true
parcours-pro: true
---

# Exercice 11 - Le Scanner de la Flotte 🛸 — Avancé

> Chapitre associé : [[cours/11-boucles/11-boucles]]
> Mêmes parties que la version débutant, mais **sans les commandes**. À vous de les trouver.

## Contexte

Vous êtes dans l'équipe de **Nami**, responsable des systèmes de navigation du
Thousand Sunny.

> _"Même les meilleurs pirates ont besoin de bons outils."_ — Nami

**Durée : 45 min**

## Les données

```powershell
$bases = @(
    [PSCustomObject]@{ Nom="Dressrosa";  IP="10.0.1.1"; Actif=$true;  Stockage=85 }
    [PSCustomObject]@{ Nom="Zou";        IP="10.0.1.2"; Actif=$true;  Stockage=42 }
    [PSCustomObject]@{ Nom="Whole Cake"; IP="10.0.1.3"; Actif=$false; Stockage=0  }
    [PSCustomObject]@{ Nom="Wano";       IP="10.0.1.4"; Actif=$true;  Stockage=93 }
    [PSCustomObject]@{ Nom="Egghead";    IP="10.0.1.5"; Actif=$true;  Stockage=17 }
    [PSCustomObject]@{ Nom="Elbaf";      IP="10.0.1.6"; Actif=$false; Stockage=0  }
)
```

---

## Partie A : Boucle de démarrage (10 min)

**A1.** Écrivez un compte à rebours de 5 à 1 suivi de « GO ! », avec une pause
entre chaque affichage. Que font les trois parties du `for` ?

**A2.** Affichez la table de multiplication de 7, de 1 à 10.

**A3.** Pour chaque besoin, indiquez la boucle adaptée :

| Besoin                                             | Boucle |
| -------------------------------------------------- | ------ |
| Parcourir une liste déjà récupérée                 |        |
| Compter de 1 à 100                                 |        |
| Attendre qu'un service démarre                     |        |
| Traiter chaque objet sortant d'un pipeline         |        |
| Demander une saisie jusqu'à ce qu'elle soit valide |        |

---

## Partie B : Parcourir les bases (15 min)

**B1.** Affichez le statut de chaque base, en vert si elle est en ligne, en rouge
sinon. Combien sont en ligne ?

**B2.** Alertez sur les bases **actives** dont le stockage dépasse 80 %.
Lesquelles sont en alerte ?

**B3.** Comment ignorer les bases hors ligne sans imbriquer un `if` sur tout le corps ?

---

## Partie C : ForEach-Object dans le pipeline (10 min)

**C1.** Refaites la partie B en pipeline plutôt qu'avec `foreach`.

**C2.** Quelle différence entre `foreach` et `ForEach-Object` ? Quand préférer l'un
ou l'autre ?

**C3.** Sur 100 000 itérations, mesurez et classez ces quatre constructions :

```
foreach ($i in 1..100000) { }
for ($i=0; $i -lt 100000; $i++) { }
1..100000 | ForEach-Object { }
(1..100000).ForEach({ })
```

Quel est le plus lent ? De combien ? Expliquez l'écart.

**C4.** Que fait `foreach ($f in Get-ChildItem C:\Windows -Recurse)` **avant**
d'entrer dans la boucle ? Et la version pipeline ? Laquelle risque de saturer la
mémoire sur un très gros dossier ?

---

## Partie D : Générer un rapport (10 min)

**D1.** Produisez un rapport texte listant toutes les bases avec leur statut et
leur stockage. Combien de lignes ?

**D2.** Combien de bases sont en ligne ?

**D3.** Le rapport est construit avec `+=` sur un tableau. Pourquoi est-ce une
mauvaise habitude, et par quoi le remplacer ?

**D4.** Produisez le même rapport sous forme d'**objets** plutôt que de chaînes,
exportable en CSV sans retouche.

---

## Mission finale E : la boucle contrôlée 🌟

**E1.** Affichez les nombres de 1 à 15 en sautant le 7 et en vous arrêtant à 12.
Prédisez la sortie avant d'exécuter.

**E2.** Écrivez une surveillance qui affiche l'état des bases actives toutes les
2 secondes, avec un **délai maximal de 30 secondes** au-delà duquel elle abandonne
et le signale.

**E3.** Deux boucles imbriquées parcourent les bases et leurs disques. Vous voulez
sortir **complètement** dès qu'un disque critique est trouvé. `break` seul
suffit-il ? Sinon, quelle syntaxe l'permet ?

---

> [!success] Validation
>
> - Vous choisissez la boucle adaptée au besoin
> - Vous connaissez le coût relatif des différentes boucles
> - Vous distinguez chargement en mémoire et traitement au fil de l'eau
> - Vous savez sortir de boucles imbriquées
> - Vous savez borner une attente dans le temps
