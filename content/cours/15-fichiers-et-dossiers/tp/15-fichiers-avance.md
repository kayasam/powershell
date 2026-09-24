---
title: "Exercice 15 - Les Archives de Robin - Avancé"
publier: true
parcours-tssr: true
parcours-pro: true
---

# Exercice 15 - Les Archives de Robin 📚 — Avancé

> Chapitre associé : [[cours/15-fichiers-et-dossiers/15-fichiers-et-dossiers]]
> Mêmes parties que la version débutant, mais **sans les commandes**. À vous de les trouver.

## Contexte

**Nico Robin** est l'archéologue du Thousand Sunny. Tout doit être classé, copié,
déplacé avec précision.

> _"L'histoire ne disparaît pas. Elle attend qu'on la retrouve."_ — Robin

**Durée : 45 min**

## Mise en place

Créez un dossier de travail `Archives-Robin` dans votre dossier temporaire.

---

## Partie A : Organiser les dossiers (10 min)

**A1.** Créez cette arborescence : `Alabasta`, `Skypiea`, `Enies-Lobby`,
`Fishman-Island`, `Wano`. Vérifiez le résultat.

**A2.** Créez-les **en une seule commande**.

**A3.** Créez un dossier imbriqué `Wano\Onigashima\Salle-du-tresor` dont les
parents n'existent pas. Quel paramètre est nécessaire ?

---

## Partie B : Créer des fichiers de notes (10 min)

**B1.** Créez un fichier de notes avec du contenu dans chaque île.

**B2.** Que change `-Recurse` sur `Get-ChildItem` ?

---

## Partie C : Copier, déplacer, renommer (10 min)

**C1.** Copiez un fichier vers une autre île, puis renommez-en un autre.

**C2.** Quelle différence entre `Copy-Item` et `Move-Item` ?

**C3.** Copiez un **dossier entier** avec son contenu. Quel paramètre faut-il ?

---

## Partie D : Chercher dans les archives (10 min)

**D1.** Combien de fichiers `.txt` dans l'arborescence ?

**D2.** Quel est le fichier le plus récent ?

**D3.** Pour un fichier, relevez nom, extension, taille et chemin complet.

**D4.** Trouvez les fichiers de plus de 100 octets, puis ceux modifiés
aujourd'hui.

---

## Partie E : Tester avant d'agir (5 min)

**E1.** Pourquoi tester l'existence avant de supprimer ?

**E2.** **Simulez** une suppression avant de l'exécuter. Quel paramètre ?

---

## Mission finale F : le catalogue complet 🌟

**F1.** Générez un rapport par île : pour chaque dossier, le nombre de fichiers
et la taille totale en octets.

**F2.** Ajoutez au rapport les 3 plus gros fichiers de toute l'arborescence.

---

> [!success] Validation
>
> - Vous créez une arborescence complète, parents compris
> - Vous copiez, déplacez et renommez, dossiers inclus
> - Vous cherchez récursivement et filtrez sur les propriétés d'un fichier
> - Vous simulez systématiquement avant une suppression
