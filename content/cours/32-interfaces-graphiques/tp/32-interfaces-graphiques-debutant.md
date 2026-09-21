---
title: "TP débutant : formulaire PowerShell"
publier: true
parcours-tssr: true
parcours-pro: false
---

# Le Poste de Commandement de Franky — mode débutant

**Environnement :** Windows interactif uniquement. Ne lancez pas ce TP dans une tâche planifiée ni sur un poste sans interface graphique.

## Énoncé

1. Chargez Windows Forms, créez un formulaire avec un champ `Nom` et un bouton `Valider`.
2. Au clic, fermez le formulaire avec `DialogResult.OK` ; ajoutez un bouton `Annuler` qui renvoie `Cancel`.
3. Après `ShowDialog()`, vérifiez le résultat, puis vérifiez que `Nom` n'est pas vide ou seulement composé d'espaces.
4. Si tout est correct, affichez un récapitulatif dans une `MessageBox` ; sinon une erreur. Aucun compte AD n'est créé.
5. Libérez le formulaire avec `Dispose()`.

## Indices progressifs

- `Add-Type -AssemblyName System.Windows.Forms` doit précéder `[Windows.Forms.Form]::new()`.
- Pour chaque contrôle : créer, positionner, puis `$form.Controls.Add($controle)`.
- `$form.ShowDialog()` bloque jusqu'à fermeture ; `[string]::IsNullOrWhiteSpace($txtNom.Text)` valide après fermeture.
- Ne mettez **pas** l'action métier dans `Add_Click` ; l'événement ne fait que fermer la fenêtre.

**Livrable :** script, tests Valider/Annuler/nom vide et preuve qu'aucune action n'est faite sur Annuler.
