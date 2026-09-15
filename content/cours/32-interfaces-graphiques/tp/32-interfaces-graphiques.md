---
title: "Exercice 32 - Le Poste de Commandement de Franky"
parcours-tssr: false
parcours-pro: true
---

# Exercice 32 - Le Poste de Commandement de Franky 🔧

## Contexte

Franky a construit le Thousand Sunny, mais l'équipage ne sait pas manœuvrer :
personne ne veut taper de commandes. Il leur faut **des boutons**.

Votre mission : construire le tableau de bord.

> _"Si c'est pas SUPER simple à utiliser, c'est pas fini."_ — Franky

**Durée : 35 min**

> ⚠️ Cet exercice ouvre de vraies fenêtres. Travaillez en console interactive,
> jamais dans une tâche planifiée.

## Partie 1 : Une fenêtre vide (5 min)

```powershell
Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

$form               = New-Object System.Windows.Forms.Form
$form.Text          = "Poste de commandement"
$form.Size          = New-Object System.Drawing.Size(400, 250)
$form.StartPosition = "CenterScreen"

$form.ShowDialog()
$form.Dispose()
```

**Questions** :

- Que se passe-t-il dans la console pendant que la fenêtre est ouverte ?
- Essayez `$form.Show()` à la place. Quelle différence ?
- À quoi sert `StartPosition` ?

## Partie 2 : Ajouter des contrôles (10 min)

Construisez une fenêtre contenant :

1. Un **Label** « Nom du navire : »
2. Une **TextBox** en face
3. Une **ComboBox** « Destination » avec `Water Seven`, `Enies Lobby`, `Wano`
4. Une **CheckBox** « Mode Coup de Burst »
5. Un **Button** « Larguer les amarres »

> Indice : pour chaque contrôle → créer, `Location`, `Size`, `$form.Controls.Add()`

**Question** : que fait `$cmb.DropDownStyle = "DropDownList"` ?

## Partie 3 : Réagir au clic (5 min)

```powershell
$btn.Add_Click({
    [System.Windows.Forms.MessageBox]::Show("Amarres larguées !", "Départ")
})
```

**Exercices** :

1. Faites afficher le contenu de la TextBox dans la boîte de message
2. Ajoutez un événement `Add_TextChanged` sur la TextBox qui écrit dans la console

## Partie 4 : OK / Annuler proprement (10 min)

Remplacez votre gestion par le mécanisme `DialogResult` :

```powershell
$btnOK.DialogResult      = [System.Windows.Forms.DialogResult]::OK
$btnAnnuler.DialogResult = [System.Windows.Forms.DialogResult]::Cancel
$form.AcceptButton       = $btnOK
$form.CancelButton       = $btnAnnuler

$resultat = $form.ShowDialog()
```

**Exercices** :

1. Après fermeture, affichez les valeurs saisies **seulement** si l'utilisateur a validé
2. Testez la touche **Entrée**, puis la touche **Échap**. Que font-elles ?

**Question** : pourquoi récupérer les valeurs **après** `ShowDialog()` plutôt que
dans un `Add_Click` ?

## Partie 5 : Les boîtes toutes faites (5 min)

```powershell
$reponse = [System.Windows.Forms.MessageBox]::Show(
    "Vraiment quitter Water Seven ?",
    "Confirmation",
    [System.Windows.Forms.MessageBoxButtons]::YesNo,
    [System.Windows.Forms.MessageBoxIcon]::Question
)
```

**Exercices** :

1. Traitez les deux réponses possibles
2. Ouvrez un `OpenFileDialog` filtré sur les `.csv` et affichez le chemin choisi

## Mission finale : l'enrôlement graphique 🏴‍☠️

Reprenez le TP fil rouge 05 (création d'agents) et donnez-lui une interface :

1. un formulaire avec **Prénom**, **Nom**, **Login**, **Service** (liste) et
   **Activer le compte** (case) ;
2. boutons **Créer** / **Annuler** avec `DialogResult` ;
3. après validation : **vérifier que les champs obligatoires sont remplis** —
   sinon `MessageBox` d'erreur et arrêt ;
4. afficher un récapitulatif dans une `MessageBox` ;
5. **sans domaine AD** : remplacez `New-ADUser` par un `Write-Host` du récapitulatif.

**Contrainte** : l'appel de création ne doit **pas** être dans un `Add_Click`.
Le script doit rester linéaire : saisir → fermer → valider → agir.

## Validation

✅ Vous chargez les assemblies avec `Add-Type` avant tout
✅ Vous créez un contrôle en trois temps : créer, positionner, `Controls.Add()`
✅ Vous savez que `ShowDialog()` **bloque** et `Show()` non
✅ Vous utilisez `DialogResult` plutôt que des variables globales
✅ Vous lisez les valeurs **après** la fermeture, puis `Dispose()`
✅ Vous validez les saisies **avant** d'agir sur le système
✅ Vous savez qu'une interface n'a pas sa place dans un script planifié
