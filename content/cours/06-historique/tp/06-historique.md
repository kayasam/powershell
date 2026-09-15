---
title: "Exercice 06 - Le Journal de Bord du Terminal"
---

# Exercice 06 - Le Journal de Bord du Terminal 📜

## Contexte

Tout ce que vous tapez est consigné. Un agent efficace ne retape jamais deux fois
la même commande : il la retrouve.
Objectif : ne plus jamais perdre une commande déjà écrite.

> _"Ce qui est écrit reste."_ — Nico Robin

**Durée : 10 min**

## Partie 1 : Naviguer avec les flèches

- Tapez quelques commandes
- **↑** pour remonter dans l'historique
- **↓** pour redescendre
- Modifiez une ancienne commande et réexécutez-la

## Partie 2 : Afficher l'historique

```powershell
# Tout l'historique
Get-History

# Les 5 dernières commandes
Get-History -Count 5
```

**Question** : Combien de commandes avez-vous tapées depuis le début ?

## Partie 3 : Réexécuter une commande

```powershell
# Afficher les IDs
Get-History

# Réexécuter la commande n°5
Invoke-History -Id 5

# Raccourci
r 5
```

## Partie 4 : Recherche rapide avec Ctrl+R

1. Appuyez sur **Ctrl+R**
2. Tapez "Get" pour filtrer
3. Appuyez à nouveau sur **Ctrl+R** pour passer au suivant
4. **Entrée** pour exécuter

## Mission : Défi de rapidité 🏆

Récapitulatif des chapitres 04, 05 et 06.
Accomplissez ces 5 tâches le plus vite possible, en utilisant **Tab**, **alias** et **historique** :

1. Lister les fichiers du dossier `C:\Windows` (avec un alias)
2. Afficher votre dossier actuel (avec un alias)
3. Chercher une cmdlet avec le verbe "Stop" (Tab pour compléter)
4. Afficher les 5 premières lignes de votre historique
5. Effacer l'écran (avec un alias)

Puis, sans retaper : **relancez la tâche 1** en utilisant `Invoke-History`.

## Validation

✅ Vous naviguez dans l'historique avec **↑** et **↓**
✅ Vous savez lister l'historique avec `Get-History`
✅ Vous savez relancer une commande avec `Invoke-History` (ou `r`)
✅ Vous utilisez **Ctrl+R** pour rechercher dans l'historique
