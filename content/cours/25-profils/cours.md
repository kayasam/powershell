---
title: "Cours"
parcours-tssr: false
parcours-pro: false
---

<nav class="ps-chapter-path" aria-label="Parcours du chapitre">
  <a href="https://kayasam.github.io/powershell/cours/25-profils/cours"><b>01 · Cours</b><small>Comprendre les notions</small></a>
  <a href="https://kayasam.github.io/powershell/cours/25-profils/cours-interactif"><b>02 · Cours interactif</b><small>Schéma et défi rapide</small></a>
  <a href="https://kayasam.github.io/powershell/cours/25-profils/quiz"><b>03 · Quiz</b><small>Vérifier ses acquis</small></a>
  <a href="https://kayasam.github.io/powershell/cours/25-profils/tp/"><b>04 · Travaux pratiques</b><small>Appliquer en autonomie</small></a>
</nav>

# 25. Les profils PowerShell

> [!TIP] Ressources du chapitre
>
> - [[cours/25-profils/tp/index|Exercices pratiques]]
> - [[Memo-Commandes|Mémo des commandes]]

Au chapitre 05 vous avez créé des alias. Au chapitre 13, des fonctions. Au chapitre 23,
un module. À chaque fois, le même constat : **tout disparaît à la fermeture de la console**.

Le **profil** règle ce problème. C'est un script `.ps1` que PowerShell exécute
automatiquement à chaque démarrage.

## Où est mon profil ?

La variable `$PROFILE` contient son chemin.

```powershell
$PROFILE
# C:\Users\<vous>\Documents\PowerShell\Microsoft.PowerShell_profile.ps1

# Est-ce qu'il existe déjà ?
Test-Path $PROFILE
```

> [!NOTE] Le fichier n'existe pas par défaut
> `$PROFILE` donne un chemin _attendu_, pas un fichier existant. Sur une machine
> neuve, `Test-Path $PROFILE` renvoie `False` : c'est normal, il faut le créer.

## Créer son profil

```powershell
# Créer le fichier (et le dossier parent s'il manque)
if (-not (Test-Path $PROFILE)) {
    New-Item -Path $PROFILE -ItemType File -Force
}

# L'ouvrir pour l'éditer
notepad $PROFILE
# ou, mieux :
code $PROFILE
```

Le `-Force` sur `New-Item` sert ici à créer l'arborescence `Documents\PowerShell\`
si elle n'existe pas encore.

## Il n'y a pas un profil, mais quatre

PowerShell cherche **quatre** fichiers et les exécute tous, dans l'ordre.

```powershell
$PROFILE | Format-List *
```

| Portée                                | Variable                          | Qui est concerné                    |
| ------------------------------------- | --------------------------------- | ----------------------------------- |
| Tous les utilisateurs, tous les hôtes | `$PROFILE.AllUsersAllHosts`       | toute la machine                    |
| Tous les utilisateurs, hôte courant   | `$PROFILE.AllUsersCurrentHost`    | toute la machine, console seulement |
| Utilisateur courant, tous les hôtes   | `$PROFILE.CurrentUserAllHosts`    | vous, partout                       |
| Utilisateur courant, hôte courant     | `$PROFILE.CurrentUserCurrentHost` | vous, dans la console               |

Le dernier est celui que `$PROFILE` seul désigne — c'est le profil personnel classique.

> [!TIP] Le bon réflexe
>
> - Un réglage **personnel** (vos alias, vos raccourcis) → `$PROFILE`
> - Un réglage **pour toute l'entreprise** (module maison, lecteur réseau) →
>   `$PROFILE.AllUsersAllHosts`, qui demande les droits administrateur

## Cibler un profil par application

C'est le sens de « hôte » (_host_) : l'application qui héberge PowerShell.
Chaque hôte a son propre nom de fichier de profil.

```powershell
$Host.Name        # ConsoleHost dans un terminal classique
```

| Hôte                       | `$Host.Name`                  | Fichier de profil                     |
| -------------------------- | ----------------------------- | ------------------------------------- |
| Console / Windows Terminal | `ConsoleHost`                 | `Microsoft.PowerShell_profile.ps1`    |
| VS Code                    | `Visual Studio Code Host`     | `Microsoft.VSCode_profile.ps1`        |
| ISE (PS 5.1)               | `Windows PowerShell ISE Host` | `Microsoft.PowerShellISE_profile.ps1` |

Concrètement : vous pouvez charger un affichage coloré dans la console, et
tout autre chose dans VS Code. Ce qui doit s'appliquer **partout** va dans
`profile.ps1` (le profil _AllHosts_).

## PowerShell 7 et 5.1 ne partagent pas leur profil

Piège classique en formation : on configure son profil, on ouvre l'autre console,
et rien ne fonctionne.

| Version                | Dossier                        |
| ---------------------- | ------------------------------ |
| PowerShell 7           | `Documents\PowerShell\`        |
| Windows PowerShell 5.1 | `Documents\WindowsPowerShell\` |

Deux dossiers différents, donc deux profils indépendants. C'est volontaire : les
deux versions n'ont pas les mêmes modules disponibles.

## Que met-on dans un profil ?

### Des alias personnels

```powershell
Set-Alias np   notepad
Set-Alias ll   Get-ChildItem
Set-Alias grep Select-String
```

### Des fonctions raccourcis

```powershell
function Get-Duree {
    (Get-Date) - (Get-CimInstance Win32_OperatingSystem).LastBootUpTime
}

function Set-Projets { Set-Location "D:\Projets" }
```

### Charger ses modules automatiquement

C'est le prolongement direct du chapitre 23 (Modules) :

```powershell
Import-Module ActiveDirectory -ErrorAction SilentlyContinue
Import-Module "D:\Scripts\CipherPol.psm1" -ErrorAction SilentlyContinue
```

### Personnaliser l'invite

La fonction `prompt` est spéciale : PowerShell l'appelle avant chaque ligne saisie.

```powershell
function prompt {
    $chemin = (Get-Location).Path.Replace($HOME, "~")
    Write-Host "PS " -NoNewline -ForegroundColor DarkGray
    Write-Host $chemin -NoNewline -ForegroundColor Cyan
    return "> "
}
```

## Exemple de profil complet

```powershell
# ---- Profil PowerShell ----

# Alias
Set-Alias np notepad
Set-Alias ll Get-ChildItem

# Modules maison
Import-Module "D:\Scripts\CipherPol.psm1" -ErrorAction SilentlyContinue

# Raccourcis
function Set-Projets { Set-Location "D:\Projets" }
function Get-Duree {
    (Get-Date) - (Get-CimInstance Win32_OperatingSystem).LastBootUpTime
}

# Invite personnalisée
function prompt {
    Write-Host "PS " -NoNewline -ForegroundColor DarkGray
    Write-Host (Get-Location).Path -NoNewline -ForegroundColor Cyan
    return "> "
}

Write-Host "Profil chargé." -ForegroundColor DarkGray
```

## Recharger sans fermer la console

Après une modification, pas besoin de quitter : **sourcez** le profil avec un point.

```powershell
. $PROFILE
```

> [!WARNING] Le point n'est pas décoratif
> `. $PROFILE` (_dot-sourcing_) exécute le script **dans la session courante**.
> `& $PROFILE` l'exécute dans une portée enfant : tout ce qu'il définit est perdu
> dès qu'il se termine.
>
> Vérifié : avec un profil contenant `Set-Alias zz notepad`,
>
> ```
> & profil.ps1   ->  alias zz ABSENT
> . profil.ps1   ->  alias zz présent
> ```
>
> PowerShell source lui-même votre profil au démarrage — c'est pour cela que ses
> alias et fonctions restent disponibles.

## Démarrer sans profil

```powershell
pwsh -NoProfile
```

Indispensable dans trois cas :

- **diagnostiquer** : si une commande se comporte bizarrement, `-NoProfile` dit
  immédiatement si le profil est en cause ;
- **les tâches planifiées** (chapitre 27) : le profil peut ne pas être accessible
  au compte de service, et ralentit le démarrage ;
- **les scripts partagés** : ils ne doivent jamais dépendre de votre profil.

## Pièges à connaître

> [!WARNING] Ne masquez pas une cmdlet existante
> Une fonction de profil **écrase** silencieusement une cmdlet du même nom.
>
> ```powershell
> function Get-Uptime { ... }   # mauvaise idée
> ```
>
> `Get-Uptime` est une **vraie cmdlet** de PowerShell 7
> (module `Microsoft.PowerShell.Utility`). La redéfinir dans votre profil la rend
> inaccessible pour toute la session, sans le moindre avertissement.
>
> Le réflexe avant de nommer une fonction de profil :
>
> ```powershell
> Get-Command Get-Duree -ErrorAction SilentlyContinue   # rien ? le nom est libre
> ```

Deux autres points de vigilance :

- **Un profil lent ralentit chaque ouverture de console.** Un `Import-Module`
  de module lourd se paie à chaque démarrage — mesurez avec
  `Measure-Command { . $PROFILE }`.
- **Une erreur dans le profil s'affiche à chaque lancement.** D'où le
  `-ErrorAction SilentlyContinue` sur les imports de modules qui peuvent manquer.

> [!success] À retenir
>
> - Le profil est un `.ps1` exécuté automatiquement au démarrage de PowerShell
> - `$PROFILE` donne son chemin — le fichier n'existe pas par défaut, il faut le créer
> - Quatre profils : utilisateur ou machine, hôte courant ou tous les hôtes
> - Chaque hôte (console, VS Code, ISE) a son propre fichier de profil
> - PowerShell 7 (`Documents\PowerShell`) et 5.1 (`Documents\WindowsPowerShell`) sont séparés
> - `. $PROFILE` pour recharger, avec le **point** (dot-sourcing)
> - `pwsh -NoProfile` pour démarrer sans, et diagnostiquer
> - Vérifiez avec `Get-Command` qu'un nom de fonction est libre avant de l'utiliser

> **Liens**
>
> - [À propos des profils](https://learn.microsoft.com/fr-fr/powershell/module/microsoft.powershell.core/about/about_profiles)
> - [À propos du prompt](https://learn.microsoft.com/fr-fr/powershell/module/microsoft.powershell.core/about/about_prompts)

---

## Fiche récapitulative

![25_Profils](https://kayasam.github.io/powershell/ressources/images/25_profils.webp)

<nav class="ps-course-pagination" aria-label="Navigation entre les chapitres">
  <a href="https://kayasam.github.io/powershell/cours/24-rsat-et-gallery/"><small>← Chapitre précédent</small><b>24. RSAT et PowerShell Gallery</b></a>
  <a href="https://kayasam.github.io/powershell/cours/26-regex/"><small>Chapitre suivant →</small><b>26. Expressions régulières (Regex)</b></a>
</nav>
