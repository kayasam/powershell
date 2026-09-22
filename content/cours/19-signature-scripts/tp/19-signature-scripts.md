---
title: "Exercice 19 - Le Sceau du Gouvernement Mondial"
parcours-tssr: false
parcours-pro: true
---

# Exercice 19 - Le Sceau du Gouvernement Mondial 🔏

## Contexte

Un ordre non scellé n'est qu'un bout de papier. À Marijoa, aucun document ne circule
sans le sceau du Gouvernement Mondial — et un sceau brisé signifie document falsifié.

Vos scripts méritent le même traitement.

> _"Un ordre sans sceau, c'est un ordre que personne n'exécutera."_ — Cinq Doyens

**Durée : 30 min**

> ⚠️ Cet exercice crée un certificat de test dans **votre** magasin personnel.
> La dernière partie vous fait tout nettoyer.

## Partie 1 : L'état des lieux (5 min)

```powershell
Get-ExecutionPolicy
Get-ExecutionPolicy -List
```

**Questions** :

- Quelle est votre politique **effective** ?
- Quelle portée l'impose ? (`LocalMachine`, `CurrentUser`, `Process`… ?)
- Si `MachinePolicy` était définie par une GPO, votre `Set-ExecutionPolicy -Scope
CurrentUser` changerait-il quelque chose ?
- Quelle commande autorise les scripts **pour la session en cours uniquement** ?

## Partie 2 : La marque du web (5 min)

Créez un script, puis simulez un téléchargement :

```powershell
$s = Join-Path $env:TEMP ("ordre-marijoa-" + [guid]::NewGuid().ToString('N') + ".ps1")
'Write-Host "Ordre execute"' | Set-Content $s -Encoding UTF8

# Simuler la marque d'un fichier telecharge
Set-Content -Path $s -Stream Zone.Identifier -Value "[ZoneTransfer]`nZoneId=3"
```

**Exercices** :

1. Affichez la marque avec `Get-Item ... -Stream Zone.Identifier`
2. Retirez-la avec `Unblock-File`
3. Vérifiez qu'elle a disparu

**Question** : pourquoi un script « local » peut-il être refusé sous `RemoteSigned` ?

## Partie 3 : Forger le sceau (10 min)

```powershell
$cert = New-SelfSignedCertificate `
    -Subject "CN=Sceau Marijoa TEST" `
    -Type CodeSigningCert `
    -CertStoreLocation "Cert:\CurrentUser\My" `
    -NotAfter (Get-Date).AddDays(30)

$cert.Thumbprint
```

**Exercices** :

1. Retrouvez ce certificat avec `Get-ChildItem Cert:\CurrentUser\My -CodeSigningCert`
2. Vérifiez le statut du script **avant** signature
3. Signez-le avec `Set-AuthenticodeSignature`
4. Vérifiez le statut **après** signature

**Question piège** : le statut est-il `Valid` ? Sinon, que vaut-il, et pourquoi ?

## Partie 4 : Faire reconnaître le sceau (5 min)

Le script est signé mais le signataire est inconnu. Il faut l'approuver :

```powershell
foreach ($magasin in 'Root', 'TrustedPublisher') {
    $store = [System.Security.Cryptography.X509Certificates.X509Store]::new(
        $magasin, "CurrentUser")
    $store.Open("ReadWrite")
    try { $store.Add($cert) }
    finally { $store.Close() }
}
```

**Exercices** :

1. Revérifiez le statut. A-t-il changé ?
2. Expliquez le rôle de chacun des deux magasins

## Partie 5 : Le sceau brisé (5 min)

```powershell
Add-Content $s "`nWrite-Host 'ligne ajoutee apres coup'"
Get-AuthenticodeSignature $s | Select-Object Status
```

**Questions** :

- Que vaut le statut maintenant ?
- Qu'est-ce que cela garantit concrètement ?
- À quel moment doit-on signer un script dans un processus de livraison ?

## Mission finale : l'ordre officiel 🏴‍☠️

Écrivez `Invoke-OrdreMarijoa.ps1`, un script **prêt à être distribué** :

1. un bloc d'**aide intégrée** (`.SYNOPSIS`, `.DESCRIPTION`, `.PARAMETER`, `.EXAMPLE`,
   `.NOTES` avec la version et les codes de sortie) ;
2. `[CmdletBinding(SupportsShouldProcess)]` et un paramètre **obligatoire validé** ;
3. `Set-StrictMode -Version Latest` et `$ErrorActionPreference = 'Stop'` ;
4. un `try/catch` avec des **codes de sortie** distincts (chapitre 21) ;
5. **signez-le** en dernier, et vérifiez que `Get-Help` fonctionne toujours.

**Question finale** : vous corrigez une faute de frappe dans le script après l'avoir
signé. Que devez-vous faire ?

## Nettoyage obligatoire 🧹

```powershell
if ($null -eq $cert -or [string]::IsNullOrWhiteSpace($cert.Thumbprint)) {
    throw 'Certificat du TP absent : nettoyage refusé.'
}
if ((Split-Path -Path $s -Parent) -ne $env:TEMP -or
    (Split-Path -Path $s -Leaf) -notmatch '^ordre-marijoa-[0-9a-f]{32}\.ps1$') {
    throw 'Chemin du script de test inattendu : nettoyage refusé.'
}
$empreinteTP = $cert.Thumbprint
foreach ($magasin in 'My', 'Root', 'TrustedPublisher') {
    $store = [System.Security.Cryptography.X509Certificates.X509Store]::new(
        $magasin, "CurrentUser")
    $store.Open("ReadWrite")
    try {
        $cibles = @($store.Certificates | Where-Object Thumbprint -eq $empreinteTP)
        if ($cibles.Count -gt 1) { throw "Empreinte dupliquée dans $magasin : arrêt." }
        foreach ($cible in $cibles) { $store.Remove($cible) }
    }
    finally { $store.Close() }
}
if (Test-Path -LiteralPath $s) { Remove-Item -LiteralPath $s }
```

Vérifiez qu'il ne reste rien dans les trois magasins.

> [!success] Validation
>
> - Vous lisez `Get-ExecutionPolicy -List` et comprenez l'ordre des portées
> - Vous savez que la politique d'exécution n'est **pas** une sécurité
> - Vous utilisez `Unblock-File` sur un fichier marqué comme téléchargé
> - Vous créez un certificat de signature avec `New-SelfSignedCertificate`
> - Vous signez avec `Set-AuthenticodeSignature` et vérifiez avec `Get-AuthenticodeSignature`
> - Vous savez que signer ne suffit pas : il faut `Root` **et** `TrustedPublisher`
> - Vous savez qu'une modification invalide la signature → signer en dernier
> - Vous connaissez la checklist d'un script livrable
