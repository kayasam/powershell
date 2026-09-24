---
title: "Exercice 16 - Le Journal de Bord de Nami - Avancé"
publier: true
parcours-tssr: true
parcours-pro: true
---

# Exercice 16 - Le Journal de Bord de Nami 🗺️ — Avancé

> Chapitre associé : [[cours/16-lire-et-ecrire/16-lire-et-ecrire]]
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

---

## Partie D : Créer un résumé (10 min)

**D1.** Créez un fichier ne contenant que les journées dégagées. Combien de lignes ?

**D2.** Pourquoi `Set-Content` et non `Add-Content` ici ?

---

## Partie E : Corriger une entrée (10 min)

**E1.** Remplacez un texte dans tout le fichier et réenregistrez.

**E2.** Pourquoi faut-il des **parenthèses** autour de la lecture ? Testez sans.

**E3.** Écrivez un fichier contenant « Élève à Ohara » en forçant l'encodage
UTF-8, puis relisez-le. Que se passe-t-il si vous omettez `-Encoding` des deux
côtés ?

---

## Mission finale F : le rapport de traversée 🌟

**F1.** Écrivez une fonction de journalisation horodatée acceptant un message et
un niveau, qui écrit dans le fichier **et** affiche à l'écran.

**F2.** Appelez-la trois fois avec des niveaux différents, puis relisez les
5 dernières lignes du journal.

---

> [!success] Validation
>
> - Vous lisez un fichier en entier, par le début ou par la fin
> - Vous distinguez écraser et ajouter
> - Vous savez chercher et remplacer du texte dans un fichier
> - Vous savez pourquoi les parenthèses sont nécessaires avant de réécrire
> - Vous produisez un journal horodaté
