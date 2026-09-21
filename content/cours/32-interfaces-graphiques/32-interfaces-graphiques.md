---
title: "32. Interfaces graphiques (WinForms)"
parcours-tssr: false
parcours-pro: true
---

<nav class="ps-chapter-path" aria-label="Parcours du chapitre">
  <a href="https://kayasam.github.io/powershell/cours/32-interfaces-graphiques/cours"><b>01 · Cours</b><small>Comprendre les notions</small></a>
  <a href="https://kayasam.github.io/powershell/cours/32-interfaces-graphiques/cours-interactif"><b>02 · Cours interactif</b><small>Schéma et défi rapide</small></a>
  <a href="https://kayasam.github.io/powershell/cours/32-interfaces-graphiques/quiz"><b>03 · Quiz</b><small>Vérifier ses acquis</small></a>
  <a href="https://kayasam.github.io/powershell/cours/32-interfaces-graphiques/tp/"><b>04 · Travaux pratiques</b><small>Appliquer en autonomie</small></a>
</nav>

> [!TIP] Ressources du chapitre
>
> - [[32-interfaces-graphiques/tp/index|Exercices pratiques]]
> - [[Memo-Commandes|Mémo des commandes]]

Jusqu'ici vos scripts s'adressaient à des administrateurs. Parfois, l'utilisateur
final n'est pas censé ouvrir une console : un technicien du support, une personne
des RH qui crée un compte, un collègue qui lance une procédure.

PowerShell peut alors afficher une **fenêtre**, grâce à Windows Forms.

## Quand NE PAS faire d'interface

Autant le dire tout de suite — c'est ce qui distingue un bon script d'un gadget.

| Situation                                    | Interface ?                   |
| -------------------------------------------- | ----------------------------- |
| Script planifié, sans utilisateur            | **non**, jamais               |
| Script lancé par un administrateur           | non, des paramètres suffisent |
| Traitement en lot, pipeline, CI              | **non**, ça bloquerait        |
| Utilisateur non technique, saisie ponctuelle | oui                           |
| Formulaire de création de compte au support  | oui                           |

> [!WARNING] Une fenêtre bloque le script
> `ShowDialog()` **suspend l'exécution** jusqu'à la fermeture de la fenêtre.
> Dans une tâche planifiée (chapitre 27), le script reste figé indéfiniment :
> personne ne cliquera jamais.
>
> Règle : une interface se lance **toujours** de façon interactive, et un script
> destiné à être planifié ne doit en contenir aucune.

## Charger les bibliothèques

Windows Forms fait partie de .NET. On l'ajoute à la session avec `Add-Type` :

```powershell
Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing
```

- `System.Windows.Forms` : les fenêtres et les contrôles
- `System.Drawing` : les tailles, positions et couleurs

> [!NOTE] Windows uniquement
> Testé sur **PowerShell 7.6** : les deux assemblies se chargent sans problème.
> Mais WinForms reste une technologie **Windows** : sur Linux ou macOS,
> `Add-Type -AssemblyName System.Windows.Forms` échoue. Vos scripts graphiques ne
> sont donc pas multiplateformes, contrairement au reste de PowerShell 7.

## La fenêtre

```powershell
$form               = New-Object System.Windows.Forms.Form
$form.Text          = "Création de compte"
$form.Size          = New-Object System.Drawing.Size(420, 320)
$form.StartPosition = "CenterScreen"
$form.FormBorderStyle = "FixedDialog"   # empêche le redimensionnement
$form.MaximizeBox   = $false
```

Propriétés utiles : `Text` (titre), `Size`, `StartPosition`, `Topmost`,
`FormBorderStyle`, `MinimizeBox` / `MaximizeBox`.

## Les contrôles

Le principe est toujours le même en trois temps : **créer**, **positionner**,
**ajouter au formulaire**.

```powershell
$label          = New-Object System.Windows.Forms.Label
$label.Text     = "Nom de l'agent :"
$label.Location = New-Object System.Drawing.Point(20, 25)
$label.Size     = New-Object System.Drawing.Size(140, 20)
$form.Controls.Add($label)
```

`Location` se compte en pixels depuis le **coin supérieur gauche** de la fenêtre.

### Les contrôles à connaître

| Contrôle                    | Usage                         | Lire la valeur   |
| --------------------------- | ----------------------------- | ---------------- |
| `Label`                     | texte fixe                    | —                |
| `TextBox`                   | saisie libre                  | `.Text`          |
| `MaskedTextBox`             | saisie masquée (mot de passe) | `.Text`          |
| `ComboBox`                  | liste déroulante              | `.SelectedItem`  |
| `CheckBox`                  | case à cocher                 | `.Checked`       |
| `Button`                    | action                        | —                |
| `ListView` / `DataGridView` | tableau de résultats          | `.SelectedItems` |
| `ProgressBar`               | avancement                    | `.Value`         |

```powershell
# Zone de saisie
$txtNom          = New-Object System.Windows.Forms.TextBox
$txtNom.Location = New-Object System.Drawing.Point(170, 22)
$txtNom.Size     = New-Object System.Drawing.Size(210, 20)
$form.Controls.Add($txtNom)

# Liste déroulante
$cmbService          = New-Object System.Windows.Forms.ComboBox
$cmbService.Location = New-Object System.Drawing.Point(170, 62)
$cmbService.Size     = New-Object System.Drawing.Size(210, 20)
$cmbService.DropDownStyle = "DropDownList"   # interdit la saisie libre
$cmbService.Items.AddRange(@("CP-0", "CP-9", "Marine", "Direction"))
$form.Controls.Add($cmbService)

# Case à cocher
$chkActif          = New-Object System.Windows.Forms.CheckBox
$chkActif.Text     = "Activer le compte"
$chkActif.Location = New-Object System.Drawing.Point(170, 100)
$chkActif.Checked  = $true
$form.Controls.Add($chkActif)
```

## Les boutons et les événements

Un bouton seul ne fait rien : il faut lui attacher un **événement**.

```powershell
$btnOK          = New-Object System.Windows.Forms.Button
$btnOK.Text     = "Créer"
$btnOK.Location = New-Object System.Drawing.Point(170, 200)
$btnOK.Size     = New-Object System.Drawing.Size(100, 30)
$form.Controls.Add($btnOK)

$btnOK.Add_Click({
    Write-Host "Bouton cliqué, nom saisi : $($txtNom.Text)"
})
```

Tous les événements suivent ce modèle `Add_<Événement>` : `Add_Click`,
`Add_TextChanged`, `Add_SelectedIndexChanged`, `Add_FormClosing`…

> [!WARNING] Le piège de la portée dans un événement
> Le bloc `{ }` passé à `Add_Click` s'exécute **plus tard**, quand l'utilisateur
> clique. Il voit les variables du script, mais ce qu'il y **écrit** ne remonte pas
> forcément là où vous l'attendez.
>
> Deux solutions propres :
>
> - faire porter le résultat par le formulaire lui-même (`$form.Tag = ...`) ;
> - ou préférer le mécanisme `DialogResult` ci-dessous, qui évite le problème.

## Afficher la fenêtre

Deux méthodes, et une seule est raisonnable dans un script :

```powershell
$form.ShowDialog()   # bloquant : le script attend la fermeture -> à utiliser
$form.Show()         # non bloquant : le script continue et la fenêtre disparaît
```

### Le mécanisme `DialogResult`

C'est la façon canonique de récupérer « OK » ou « Annuler », sans bricoler avec
des variables globales.

```powershell
$btnOK.DialogResult     = [System.Windows.Forms.DialogResult]::OK
$btnAnnuler.DialogResult = [System.Windows.Forms.DialogResult]::Cancel

$form.AcceptButton = $btnOK        # la touche Entrée valide
$form.CancelButton = $btnAnnuler   # la touche Échap annule

$resultat = $form.ShowDialog()

if ($resultat -eq [System.Windows.Forms.DialogResult]::OK) {
    $nom     = $txtNom.Text
    $service = $cmbService.SelectedItem
    $actif   = $chkActif.Checked
}
else {
    Write-Host "Opération annulée."
    return
}
```

Les contrôles restent lisibles **après** la fermeture : c'est là qu'on récupère
les valeurs saisies.

> [!TIP] Libérez la fenêtre
> Une fois les valeurs récupérées, appelez `$form.Dispose()`. Sans cela, les
> ressources graphiques restent réservées — anecdotique pour un script ponctuel,
> gênant dans une console qui ouvre des dizaines de fenêtres.

## Les boîtes de dialogue toutes faites

Pour un simple message ou une confirmation, inutile de construire un formulaire :

```powershell
# Message simple
[System.Windows.Forms.MessageBox]::Show("Compte créé.", "Succès")

# Confirmation
$reponse = [System.Windows.Forms.MessageBox]::Show(
    "Supprimer définitivement ce compte ?",
    "Confirmation",
    [System.Windows.Forms.MessageBoxButtons]::YesNo,
    [System.Windows.Forms.MessageBoxIcon]::Warning
)

if ($reponse -eq [System.Windows.Forms.DialogResult]::Yes) {
    # ...
}
```

Et pour choisir un fichier ou un dossier :

```powershell
$dlg = New-Object System.Windows.Forms.OpenFileDialog
$dlg.Filter = "CSV (*.csv)|*.csv|Tous (*.*)|*.*"

if ($dlg.ShowDialog() -eq [System.Windows.Forms.DialogResult]::OK) {
    $agents = Import-Csv $dlg.FileName
}
```

## Atelier : formulaire de création de compte AD

C'est l'assemblage des chapitres 29 (utilisateurs AD) et 30.

```powershell
Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

# --- La fenêtre ---
$form                 = New-Object System.Windows.Forms.Form
$form.Text            = "Cipher Pol - Nouvel agent"
$form.Size            = New-Object System.Drawing.Size(430, 290)
$form.StartPosition   = "CenterScreen"
$form.FormBorderStyle = "FixedDialog"
$form.MaximizeBox     = $false

# --- Fabrique de libellés, pour éviter la répétition ---
function New-Libelle {
    param([string]$Texte, [int]$Y)
    $l          = New-Object System.Windows.Forms.Label
    $l.Text     = $Texte
    $l.Location = New-Object System.Drawing.Point(20, $Y)
    $l.Size     = New-Object System.Drawing.Size(130, 20)
    $form.Controls.Add($l)
}

function New-Saisie {
    param([int]$Y)
    $t          = New-Object System.Windows.Forms.TextBox
    $t.Location = New-Object System.Drawing.Point(160, ($Y - 3))
    $t.Size     = New-Object System.Drawing.Size(230, 20)
    $form.Controls.Add($t)
    return $t
}

New-Libelle "Prénom :"  25 ; $txtPrenom = New-Saisie 25
New-Libelle "Nom :"     60 ; $txtNom    = New-Saisie 60
New-Libelle "Login :"   95 ; $txtLogin  = New-Saisie 95

New-Libelle "Service :" 130
$cmbService               = New-Object System.Windows.Forms.ComboBox
$cmbService.Location      = New-Object System.Drawing.Point(160, 127)
$cmbService.Size          = New-Object System.Drawing.Size(230, 20)
$cmbService.DropDownStyle = "DropDownList"
$cmbService.Items.AddRange(@("CP-0", "CP-9", "Marine"))
$cmbService.SelectedIndex = 0
$form.Controls.Add($cmbService)

$chkActif          = New-Object System.Windows.Forms.CheckBox
$chkActif.Text     = "Activer le compte"
$chkActif.Location = New-Object System.Drawing.Point(160, 160)
$chkActif.Size     = New-Object System.Drawing.Size(230, 20)
$chkActif.Checked  = $true
$form.Controls.Add($chkActif)

# --- Boutons ---
$btnOK              = New-Object System.Windows.Forms.Button
$btnOK.Text         = "Créer"
$btnOK.Location     = New-Object System.Drawing.Point(160, 200)
$btnOK.Size         = New-Object System.Drawing.Size(100, 30)
$btnOK.DialogResult = [System.Windows.Forms.DialogResult]::OK
$form.Controls.Add($btnOK)

$btnAnnuler              = New-Object System.Windows.Forms.Button
$btnAnnuler.Text         = "Annuler"
$btnAnnuler.Location     = New-Object System.Drawing.Point(290, 200)
$btnAnnuler.Size         = New-Object System.Drawing.Size(100, 30)
$btnAnnuler.DialogResult = [System.Windows.Forms.DialogResult]::Cancel
$form.Controls.Add($btnAnnuler)

$form.AcceptButton = $btnOK
$form.CancelButton = $btnAnnuler

# --- Affichage et récupération ---
$resultat = $form.ShowDialog()

if ($resultat -ne [System.Windows.Forms.DialogResult]::OK) {
    Write-Host "Création annulée."
    $form.Dispose()
    return
}

$prenom  = $txtPrenom.Text.Trim()
$nom     = $txtNom.Text.Trim()
$login   = $txtLogin.Text.Trim()
$service = $cmbService.SelectedItem
$actif   = $chkActif.Checked
$form.Dispose()

# --- Validation AVANT d'écrire dans l'annuaire ---
if (-not $prenom -or -not $nom -or -not $login) {
    [System.Windows.Forms.MessageBox]::Show("Tous les champs sont obligatoires.", "Erreur")
    return
}

# --- Création effective (chapitre 29) ---
try {
    New-ADUser -Name "$prenom $nom" -GivenName $prenom -Surname $nom `
               -SamAccountName $login -UserPrincipalName "$login@cipher-pol.org" `
               -Department $service -Enabled $actif `
               -AccountPassword (Read-Host "Mot de passe" -AsSecureString) `
               -ErrorAction Stop

    [System.Windows.Forms.MessageBox]::Show("Compte $login créé.", "Succès")
}
catch {
    [System.Windows.Forms.MessageBox]::Show("Échec : $($_.Exception.Message)", "Erreur")
}
```

Remarquez la structure : **on saisit, on ferme, on valide, puis on agit**.
L'appel à `New-ADUser` n'est pas dans un `Add_Click` — le code reste linéaire et
lisible, et la gestion d'erreurs du chapitre 21 s'applique normalement.

## Et WPF ?

WinForms est la voie la plus simple et suffit largement pour des formulaires
d'administration. **WPF** (`PresentationFramework`) permet des interfaces plus
modernes, décrites en XAML, mais demande nettement plus de code pour démarrer.

```powershell
Add-Type -AssemblyName PresentationFramework
```

Pour un script d'admin : restez sur WinForms.

## À retenir

- ✅ `Add-Type -AssemblyName System.Windows.Forms` et `System.Drawing` d'abord
- ✅ Trois temps par contrôle : créer, positionner (`Location`), `Controls.Add()`
- ✅ Les événements s'attachent avec `Add_Click { }`, `Add_TextChanged { }`…
- ✅ `ShowDialog()` **bloque** — jamais dans un script planifié
- ✅ `DialogResult` + `AcceptButton` / `CancelButton` : la façon propre de valider
- ✅ On lit les valeurs **après** la fermeture, puis on appelle `Dispose()`
- ✅ `MessageBox::Show` et `OpenFileDialog` pour les cas simples
- ✅ WinForms est **Windows uniquement**, même en PowerShell 7

> **Liens**
>
> - [Windows Forms](https://learn.microsoft.com/fr-fr/dotnet/desktop/winforms/)
> - [Add-Type](https://learn.microsoft.com/fr-fr/powershell/module/microsoft.powershell.utility/add-type)

---

## Fiche récapitulative

![32_Interfaces_graphiques_WinForms](https://kayasam.github.io/powershell/ressources/images/32_Interfaces_graphiques_WinForms.png)
