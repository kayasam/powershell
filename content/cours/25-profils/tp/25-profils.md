---
title: "Exercice 25 - Le Poste de Pilotage de Nami"
parcours-tssr: false
parcours-pro: false
---

# Exercice 25 - Le Poste de Pilotage de Nami 🧭

## Contexte

Nami ne refait pas ses réglages de navigation à chaque départ : sa table de cartes
est disposée une fois pour toutes, et tout est à portée de main au réveil.

Votre console mérite le même traitement. Fini de retaper vos alias à chaque ouverture.

> _"Un bon navigateur prépare sa table avant de lever l'ancre."_ — Nami

**Durée : 25 min**

## Partie 1 : Localiser son profil (5 min)

```powershell
# Le chemin du profil personnel
$PROFILE

# Existe-t-il ?
Test-Path $PROFILE

# Les quatre profils
$PROFILE | Format-List *
```

**Questions** :

- Votre profil existe-t-il déjà ?
- Dans quel dossier se trouve-t-il ?
- Quelle différence entre `CurrentUserAllHosts` et `CurrentUserCurrentHost` ?
- Que vaut `$Host.Name` dans votre console ?

## Partie 2 : Créer le profil (5 min)

```powershell
if (-not (Test-Path $PROFILE)) {
    New-Item -Path $PROFILE -ItemType File -Force
}

notepad $PROFILE
```

**Question** : pourquoi `-Force` est-il nécessaire ici ?

> ⚠️ Si vous êtes sur un poste partagé de formation, créez plutôt votre profil
> dans un fichier de test (`$env:TEMP\profil-test.ps1`) et chargez-le à la main.

## Partie 3 : Équiper la table de cartes (10 min)

Ajoutez dans votre profil :

1. **Deux alias** qui vous seraient utiles au quotidien
2. **Une fonction** `Get-Duree` qui affiche depuis combien de temps la machine tourne
   _(indice : `Win32_OperatingSystem` et sa propriété `LastBootUpTime`, chapitre 12)_
3. **Une fonction** `Set-Cartes` qui vous emmène dans un dossier de travail
4. **Un message** de confirmation au chargement

Puis rechargez **sans fermer la console** :

```powershell
. $PROFILE
```

**Exercice** : testez vos trois raccourcis. Fonctionnent-ils ?

## Partie 4 : Le piège du point (5 min)

Testez les deux formes et expliquez la différence :

```powershell
# A
. $PROFILE

# B
& $PROFILE
```

**Questions** :

- Après **B**, vos alias sont-ils disponibles ?
- Pourquoi ?
- Laquelle des deux PowerShell utilise-t-il au démarrage ?

## Partie 5 : Naviguer sans instruments

```powershell
pwsh -NoProfile
```

**Questions** :

- Vos alias personnels sont-ils encore là ?
- Citez deux situations où démarrer sans profil est **indispensable**.

## Mission finale : le piège du nom masqué 🏴‍☠️

Un collègue a mis ceci dans son profil :

```powershell
function Get-Uptime {
    "Machine allumee depuis un bon moment"
}
```

Depuis, une commande native de PowerShell ne fonctionne plus chez lui.

**Questions** :

1. Laquelle, et pourquoi ?
2. Quelle commande lui aurait permis de s'en rendre compte **avant** d'écrire sa fonction ?
3. Proposez-lui un nom de remplacement correct.

> [!success] Validation
>
> - Vous savez trouver votre profil avec `$PROFILE` et le créer s'il manque
> - Vous connaissez les **quatre** profils et leur portée
> - Vous savez qu'un hôte (console, VS Code, ISE) a son propre fichier
> - Vous savez que PowerShell 7 et 5.1 ont des profils séparés
> - Vous rechargez avec `. $PROFILE` (**dot-sourcing**), pas `& $PROFILE`
> - Vous utilisez `pwsh -NoProfile` pour diagnostiquer
> - Vous vérifiez avec `Get-Command` qu'un nom de fonction est libre
