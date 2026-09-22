---
title: "Exercice 06 - Le Journal de Bord du Terminal - Débutant"
publier: true
parcours-tssr: true
parcours-pro: false
---

# Exercice 06 - Le Journal de Bord du Terminal 📜 — Débutant

> Chapitre associé : [[06-historique/06-historique]]

## Contexte

Tout ce que vous tapez est consigné. Un agent efficace ne retape jamais deux fois
la même commande : il la retrouve.

> _"Ce qui est écrit reste."_ — Nico Robin

**Durée : 15 min**

## Objectif

Ne plus jamais perdre une commande déjà écrite.

---

## Partie A : Naviguer avec les flèches (3 min)

Tapez cinq ou six commandes variées, puis :

- **↑** pour remonter dans l'historique
- **↓** pour redescendre

**A1.** Remontez jusqu'à une ancienne commande, modifiez-la, et réexécutez-la.
Que se passe-t-il pour l'originale ?

---

## Partie B : Afficher l'historique (4 min)

```powershell
# Tout l'historique
Get-History

# Les 5 dernières commandes
Get-History -Count 5
```

**B1.** Combien de commandes avez-vous tapées depuis l'ouverture de la console ?

**B2.** À quoi sert la colonne `Id` ?

> 💡 **Indice** : `(Get-History).Count` compte directement.

---

## Partie C : Réexécuter une commande (4 min)

```powershell
# Afficher les identifiants
Get-History

# Réexécuter la commande n°5
Invoke-History -Id 5

# Raccourci
r 5
```

**C1.** Relancez la commande n°3 de votre historique. Qu'affiche-t-elle ?

**C2.** `r` est un raccourci. De quelle cmdlet est-ce l'alias ?

---

## Partie D : Recherche rapide (4 min)

1. Appuyez sur **Ctrl+R**
2. Tapez `Get` pour filtrer
3. Appuyez à nouveau sur **Ctrl+R** pour passer au suivant
4. **Entrée** pour exécuter

**D1.** Retrouvez ainsi une commande tapée il y a plusieurs minutes. Laquelle ?

**D2.** En quoi est-ce plus rapide que la flèche haut ?

---

## Mission finale E : défi de rapidité 🏆

Récapitulatif des chapitres 04, 05 et 06. Accomplissez ces tâches le plus vite
possible, en utilisant **Tab**, **alias** et **historique** :

**E1.** Lister les fichiers de `C:\Windows` — avec un alias.

**E2.** Afficher votre dossier actuel — avec un alias.

**E3.** Chercher une cmdlet avec le verbe `Stop` — Tab pour compléter.

**E4.** Afficher les 5 dernières lignes de votre historique.

**E5.** Effacer l'écran — avec un alias.

**E6.** Sans retaper : relancez la tâche E1 avec `Invoke-History`.

---

> [!success] Validation
>
> - Vous naviguez dans l'historique avec **↑** et **↓**
> - Vous savez lister l'historique avec `Get-History`
> - Vous savez relancer une commande avec `Invoke-History` (ou `r`)
> - Vous utilisez **Ctrl+R** pour rechercher dans l'historique
