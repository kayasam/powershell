---
title: "Exercice 03 - L'Autopsie du Den Den Mushi - Avancé"
publier: true
parcours-tssr: true
parcours-pro: true
---

# Exercice 03 - L'Autopsie du Den Den Mushi 🐌 — Avancé

> Chapitre associé : [[03-objets/03-objets]]
> Mêmes parties que la version débutant, mais **sans les commandes**. À vous de les trouver.

## Contexte

Un escargophone saisi sur un navire pirate est posé sur votre bureau. Vous ne
savez pas ce qu'il contient — mais vous savez le démonter.

> _"Tout objet raconte son histoire, si on sait l'interroger."_ — Nico Robin

**Durée : 25 min**

## Objectif

Ne plus jamais dire « je ne sais pas quoi mettre après le point ».

---

## Partie A : Texte ou objet ? (5 min)

Affichez les informations du processus `explorer`.

**A1.** Le résultat ressemble à un tableau. Prouvez qu'il ne s'agit **pas** de texte.

**A2.** Quel est le **type exact** de ce que vous avez obtenu ?

**A3.** Combien de propriétés cet objet possède-t-il ?

**A4.** Pourquoi PowerShell n'affiche-t-il qu'une partie des propriétés à l'écran ?

---

## Partie B : Accéder aux propriétés (5 min)

Rangez le fichier `C:\Windows\notepad.exe` dans une variable.

**B1.** Affichez son nom, sa taille en octets et sa date de dernière modification.

**B2.** Trouvez et affichez trois **autres** propriétés.

**B3.** Quelle propriété donne le **chemin complet** ?

**B4.** Affichez sa taille en **kilooctets**.

---

## Partie C : Filtrer ce que montre Get-Member (5 min)

**C1.** Sur le service `Spooler`, quelle propriété donne son **état** ?

**C2.** Quelle méthode permettrait de l'**arrêter** ?

> ⚠️ Ne lancez pas la méthode d'arrêt : contentez-vous de la trouver.

**C3.** Pourquoi préfère-t-on la cmdlet `Stop-Service` à cette méthode ?

---

## Partie D : Les méthodes (5 min)

Soit `$nom = "Monkey D. Luffy"`.

**D1.** Que renvoie la découpe de cette chaîne sur l'espace ? Quel est son type ?

**D2.** Produisez `LUFFY` en une seule ligne.

**D3.** Classez ces membres en propriétés et méthodes, puis vérifiez :
`Length` · `ToUpper()` · `Substring()` · `Trim()` · `Replace()`

À quoi reconnaît-on une méthode à l'écrit ?

---

## Mission finale E : la fiche du suspect 🔍

**E1.** À partir du processus `explorer`, affichez **une seule ligne** contenant
son nom, son identifiant (PID), et sa mémoire de travail en **mégaoctets**.

> 💡 Pour coller plusieurs valeurs en une seule ligne de texte, `+` fonctionne
> aussi entre du texte et un nombre.

**E2 (bonus — notions vues aux chapitres 8 et 9).** Le résultat de E1 est du
texte : une fois affiché, on ne peut plus le trier ni l'exporter. Si vous êtes
curieux, cherchez comment `Select-Object` permet de garder un **objet**
(plutôt qu'une ligne de texte) tout en ajoutant une colonne « mémoire en Mo ».
Ce n'est pas exigé ici — la réponse est en correction.

---

## Validation

✅ Vous savez que PowerShell renvoie des **objets**, pas du texte
✅ Vous utilisez `Get-Member` pour explorer un objet inconnu
✅ Vous accédez à une propriété avec `$objet.Propriete`
✅ Vous appelez une méthode avec `$objet.Methode()`
✅ (bonus) Vous entrevoyez la différence entre du texte et un objet exploitable
