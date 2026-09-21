---
title: "TP avancé : enrôlement graphique"
publier: true
parcours-tssr: false
parcours-pro: true
---

# Le Poste de Commandement de Franky — mode avancé

## Énoncé

Reprenez le formulaire d'enrôlement du fil rouge avec `Prénom`, `Nom`, `Login`, `Service` (liste fermée) et `Activer` (case). Ajoutez boutons `Créer`/`Annuler` avec `DialogResult`.

1. L'événement `Add_Click` ne doit **pas** créer un utilisateur : il ferme la fenêtre. Le script principal lit les valeurs après `ShowDialog()`, valide puis agit.
2. Vérifiez les champs obligatoires et les doublons de login avant l'action. Sans domaine de laboratoire, remplacez la création AD par un simple récapitulatif ; ne créez jamais un vrai compte par défaut.
3. Séparez la collecte des données de leur validation et de l'action AD ; expliquez comment tester ces deux dernières sans GUI.
4. Libérez le formulaire dans tous les cas, y compris Annuler et erreur.

**Livrable :** script, trois scénarios de validation et démonstration de la séparation GUI/action.
