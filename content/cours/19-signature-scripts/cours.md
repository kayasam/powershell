---
title: "Cours"
---

# 19. Sécurité et signature des scripts

> [!TIP] Ressources du chapitre
>
> - [[19-signature-scripts/tp/index|Exercices pratiques]]
> - [[Memo-Commandes|Mémo des commandes]]

Au chapitre 01 vous avez tapé `Set-ExecutionPolicy RemoteSigned` pour pouvoir lancer
vos scripts. Au chapitre 18 vous avez découvert le magasin `Cert:`.

Ce chapitre relie les deux : comment Windows décide qu'un script est **digne de
confiance**, et comment signer les vôtres.

## Les politiques d'exécution

```powershell
# Voir la politique effective
Get-ExecutionPolicy

# Voir le détail par portée — plus utile
Get-ExecutionPolicy -List
```

Sortie type :

```
        Scope ExecutionPolicy
        ----- ---------------
MachinePolicy       Undefined
   UserPolicy       Undefined
      Process          Bypass
  CurrentUser       Undefined
 LocalMachine    RemoteSigned
```

| Politique      | Effet                                                   |
| -------------- | ------------------------------------------------------- |
| `Restricted`   | aucun script — défaut sur Windows client                |
| `AllSigned`    | **tout** script doit être signé par un éditeur approuvé |
| `RemoteSigned` | scripts locaux libres, scripts **téléchargés** à signer |
| `Unrestricted` | tout passe, avertissement sur les fichiers distants     |
| `Bypass`       | tout passe, aucun avertissement                         |
| `Undefined`    | pas de réglage à cette portée                           |

### L'ordre de priorité des portées

C'est ce qui explique les situations « j'ai changé la politique et rien n'a changé » :

1. `MachinePolicy` (GPO ordinateur) — **la plus forte**
2. `UserPolicy` (GPO utilisateur)
3. `Process` (session en cours)
4. `CurrentUser`
5. `LocalMachine` — la plus faible

Une GPO d'entreprise écrase donc systématiquement votre réglage local.

```powershell
# Autoriser uniquement pour la session en cours (ne modifie rien durablement)
Set-ExecutionPolicy Bypass -Scope Process

# Réglage personnel persistant
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

> [!WARNING] Ce n'est PAS une barrière de sécurité
> La politique d'exécution empêche un **double-clic accidentel** sur un `.ps1`
> hostile. Elle n'arrête personne de déterminé :
>
> ```powershell
> pwsh -ExecutionPolicy Bypass -File script.ps1
> Get-Content script.ps1 | Invoke-Expression
> ```
>
> Microsoft la décrit comme un garde-fou, pas comme un contrôle de sécurité.
> La vraie protection, c'est `AllSigned` **plus** un magasin de certificats maîtrisé.

## La marque du web

Un fichier téléchargé porte une marque invisible qui déclenche le blocage sous
`RemoteSigned`.

```powershell
# Voir la marque
Get-Item .\script.ps1 -Stream Zone.Identifier -ErrorAction SilentlyContinue

# La retirer, après avoir vérifié la source
Unblock-File .\script.ps1
```

C'est la cause n°1 du message « le fichier n'est pas signé numériquement » sur un
script pourtant local : il vient d'un téléchargement ou d'une pièce jointe.

## Signer un script

### 1. Obtenir un certificat de signature de code

En formation ou en test, on en fabrique un :

```powershell
$cert = New-SelfSignedCertificate `
    -Subject "CN=Formation PowerShell" `
    -Type CodeSigningCert `
    -CertStoreLocation "Cert:\CurrentUser\My" `
    -NotAfter (Get-Date).AddYears(1)

$cert.Thumbprint
```

En entreprise, il vient de l'autorité interne (AD CS) ou d'une autorité publique.

```powershell
# Retrouver un certificat de signature déjà présent
Get-ChildItem Cert:\CurrentUser\My -CodeSigningCert
```

### 2. Signer

```powershell
Set-AuthenticodeSignature -FilePath .\MonScript.ps1 -Certificate $cert
```

La cmdlet ajoute un bloc de signature à la fin du fichier :

```
# SIG # Begin signature block
# MIIFxxx...
# SIG # End signature block
```

### 3. Vérifier

```powershell
Get-AuthenticodeSignature .\MonScript.ps1 | Select-Object Status, SignerCertificate
```

## Les statuts, et le piège du certificat auto-signé

C'est l'étape qui surprend tout le monde. Voici ce que donne la manipulation
complète, testée :

| Étape                                           | `Status`       |
| ----------------------------------------------- | -------------- |
| Script non signé                                | `NotSigned`    |
| Script signé, certificat **non approuvé**       | `UnknownError` |
| Certificat ajouté à `Root` + `TrustedPublisher` | **`Valid`**    |
| Une ligne ajoutée après la signature            | `NotSigned`    |

> [!WARNING] Signer ne suffit pas : il faut être approuvé
> Juste après `Set-AuthenticodeSignature`, le statut est `UnknownError` et **non**
> `Valid`. Le script est bien signé, mais Windows ne connaît pas le signataire.
>
> Il faut installer le certificat dans deux magasins :
>
> - **`Root`** — pour que la chaîne de confiance se valide ;
> - **`TrustedPublisher`** — pour que PowerShell accepte de l'exécuter sans demander.
>
> ```powershell
> $store = [System.Security.Cryptography.X509Certificates.X509Store]::new(
>     "Root", "CurrentUser")
> $store.Open("ReadWrite"); $store.Add($cert); $store.Close()
>
> $store = [System.Security.Cryptography.X509Certificates.X509Store]::new(
>     "TrustedPublisher", "CurrentUser")
> $store.Open("ReadWrite"); $store.Add($cert); $store.Close()
> ```
>
> Le statut passe alors à `Valid`. C'est du `[System.Security...]` — les classes
> .NET du chapitre 14, faute de cmdlet dédiée.

> [!NOTE] La signature détecte toute modification
> Ajoutez ne serait-ce qu'un espace après avoir signé : le statut retombe à
> `NotSigned`. C'est tout l'intérêt — la signature garantit que le script exécuté
> est **exactement** celui qui a été validé.
>
> Conséquence pratique : on signe **en dernier**, juste avant de distribuer.
> Toute correction impose une nouvelle signature.

## `AllSigned` : le mode entreprise

```powershell
Set-ExecutionPolicy AllSigned -Scope CurrentUser
```

Désormais, seuls les scripts signés par un éditeur de `TrustedPublisher` démarrent.
Un script non signé est refusé net, même écrit par vous, même local.

Le déploiement type en entreprise :

1. l'autorité interne (AD CS) délivre un certificat de signature de code ;
2. une **GPO** pousse ce certificat dans `TrustedPublisher` sur tous les postes ;
3. une **GPO** force `ExecutionPolicy = AllSigned` ;
4. les scripts validés sont signés avant publication.

Résultat : un script déposé par un attaquant ne s'exécute pas.

## Méthodologie : un script prêt à être distribué

Au-delà de la signature, quelques règles qui font la différence entre un script
personnel et un script livrable.

```powershell
<#
.SYNOPSIS
    Archive les rapports de la Cipher Pol.
.DESCRIPTION
    Exporte les données système en CSV et les range par date.
.PARAMETER Dossier
    Dossier de destination des archives.
.EXAMPLE
    .\Invoke-Archives.ps1 -Dossier "D:\Archives"
.NOTES
    Auteur  : Cipher Pol
    Version : 1.2.0
    Codes de sortie : 0 succès, 1 erreurs partielles, 2 échec bloquant
#>
[CmdletBinding(SupportsShouldProcess)]
param(
    [Parameter(Mandatory)]
    [ValidateScript({ Test-Path $_ })]
    [string]$Dossier
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
```

La checklist :

- **aide intégrée** `<# .SYNOPSIS ... #>` — `Get-Help` fonctionne (chapitre 22) ;
- **paramètres validés** plutôt que des valeurs en dur (chapitre 22) ;
- `Set-StrictMode -Version Latest` — signale les variables non déclarées ;
- `$ErrorActionPreference = 'Stop'` — les erreurs deviennent visibles (chapitre 21) ;
- **codes de sortie documentés** (chapitre 21) ;
- `SupportsShouldProcess` si le script modifie quelque chose ;
- **signature en dernier**, après les tests.

> [!TIP] `Set-StrictMode`, le filet de sécurité gratuit
>
> ```powershell
> Set-StrictMode -Version Latest
> $total = $comtpeur + 1     # faute de frappe
> # Sans StrictMode : $comtpeur vaut $null, $total vaut 1, personne ne voit rien
> # Avec StrictMode : erreur immédiate
> #   Impossible de récupérer la variable « $comtpeur », car elle n’a pas été définie.
> ```

## À retenir

- ✅ `Get-ExecutionPolicy -List` : la politique dépend de **cinq portées**, GPO prioritaire
- ✅ La politique d'exécution est un garde-fou, **pas** une sécurité
- ✅ `Unblock-File` retire la marque du web sur un fichier téléchargé
- ✅ `New-SelfSignedCertificate -Type CodeSigningCert` pour un certificat de test
- ✅ `Set-AuthenticodeSignature` signe, `Get-AuthenticodeSignature` vérifie
- ✅ Signé mais non approuvé → `UnknownError`. Il faut `Root` **et** `TrustedPublisher`
- ✅ Toute modification après signature invalide le script → signer **en dernier**
- ✅ `AllSigned` + certificat déployé par GPO = le vrai modèle d'entreprise
- ✅ Un script livrable a une aide, des paramètres validés, `Set-StrictMode` et des codes de sortie

> **Liens**
>
> - [À propos de la signature](https://learn.microsoft.com/fr-fr/powershell/module/microsoft.powershell.core/about/about_signing)
> - [À propos des politiques d'exécution](https://learn.microsoft.com/fr-fr/powershell/module/microsoft.powershell.core/about/about_execution_policies)
