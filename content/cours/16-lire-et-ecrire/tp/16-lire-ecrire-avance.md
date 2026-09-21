---
title: "Exercice 16 - Le Journal de Bord de Nami - Avancé"
publier: true
parcours-tssr: true
parcours-pro: true
---

# Exercice 16 - Le Journal de Bord de Nami 🗺️ — Avancé

> Chapitre associé : [[16-lire-et-ecrire/16-lire-et-ecrire]]
> Mêmes parties que la version débutant, mais **sans les commandes**. À vous de les trouver.

## Contexte

**Nami** tient le journal de bord du Thousand Sunny. En production, un journal
fait plusieurs centaines de mégaoctets et vient parfois d'un système qui n'a pas
le même encodage que vous.

> _"Un bon navigateur note tout."_ — Nami

**Durée : 40 min**

## Mise en place

Créez un fichier `journal-de-bord.txt` dans un dossier de travail, contenant une
ligne de titre et cinq entrées au format
`AAAA-MM-JJ | Cap : X | Meteo : Y | Evenement`.

---

## Partie A : Lire le journal (5 min)

**A1.** Combien d'entrées, hors ligne de titre ?

**A2.** Quelle est la dernière entrée ?

**A3.** Affichez les 2 premières lignes, puis les 3 dernières.

**A4.** Lisez le fichier en **une seule chaîne** plutôt qu'en tableau de lignes.
Quel paramètre, et dans quel cas est-ce préférable ?

---

## Partie B : Ajouter une entrée (5 min)

**B1.** Ajoutez une ligne **sans effacer** les précédentes.

**B2.** Quelle est la différence entre les deux cmdlets d'écriture ?

**B3.** Quelle est la différence entre `Out-File` et `Set-Content` ?

---

## Partie C : Chercher dans le journal (10 min)

**C1.** Combien de journées ont eu une météo dégradée (orageux ou brumeux) ?

**C2.** Trouvez tous les jours où le cap était `Nord`.

**C3.** Comptez les lignes contenant `Degage`.

**C4.** Affichez le **numéro de ligne** où apparaît un mot donné.

---

## Partie D : Créer un résumé (10 min)

**D1.** Créez un fichier ne contenant que les journées dégagées. Combien de lignes ?

**D2.** Pourquoi `Set-Content` et non `Add-Content` ici ?

**D3.** Transformez le journal en **objets** : une propriété par champ
(date, cap, météo, événement), exploitable avec `Where-Object` et exportable en CSV.

---

## Partie E : Corriger une entrée (10 min)

**E1.** Remplacez un texte dans tout le fichier et réenregistrez.

**E2.** Pourquoi faut-il des **parenthèses** autour de la lecture ? Testez sans.

**E3.** Écrivez un fichier contenant « Élève à Ohara » sans préciser d'encodage,
puis relisez-le en forçant un encodage différent. Que constatez-vous ?

**E4.** Quel est l'encodage par défaut en PowerShell 7 ? Et en 5.1 ? Comment
garantir qu'un fichier sera lisible par les deux ?

---

## Mission finale F : le rapport de traversée 🌟

**F1.** Écrivez une fonction de journalisation horodatée acceptant un message et
un niveau, qui écrit dans le fichier **et** affiche à l'écran.

**F2.** Créez un fichier de 200 000 lignes, puis comparez trois approches de
lecture : tout charger en mémoire, lire au fil de l'eau dans le pipeline, et
utiliser la classe .NET. Quel écart de temps ? Laquelle risque de saturer la
mémoire sur 2 Go ?

**F3.** Écrivez 10 000 lignes avec une écriture par tour de boucle, puis en une
seule opération. Mesurez. Quelle est la bonne pratique pour un script qui
journalise en continu ?

---

## Validation

✅ Vous lisez un fichier en entier, par le début ou par la fin
✅ Vous distinguez écraser et ajouter
✅ Vous transformez un fichier texte en objets exploitables
✅ Vous maîtrisez les encodages et leurs pièges
✅ Vous savez traiter un gros fichier sans saturer la mémoire
