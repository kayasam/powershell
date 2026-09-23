---
title: "00.4 — Joindre DC2 et le promouvoir en DC additionnel"
---

> Durée : **30 min**
> Où : 💻 **SUR VOTRE POSTE**, via PowerShell Direct
> Précédent : [[tp-final-active-directory/preparation/03-promouvoir-dc01\|00.3-Promouvoir-DC01]]

---

## Ce qu'on fait, et pourquoi dans cet ordre

DC2 doit franchir **trois portes**, dans l'ordre. Sauter une marche = message d'erreur incompréhensible.

| #   | Action                         | Sans ça...                                                               |
| --- | ------------------------------ | ------------------------------------------------------------------------ |
| 1   | Pointer son DNS vers DC01      | Il ne **trouve** pas le domaine — il ne sait pas où est `ad.fournil.lab` |
| 2   | Rejoindre le domaine           | Il ne peut pas **s'authentifier** pour devenir DC                        |
| 3   | Installer le rôle + promouvoir | Il reste un simple serveur membre                                        |

> [!question] Pourquoi un deuxième contrôleur de domaine ?
>
> - **Tolérance de panne** : si DC01 tombe, plus personne ne peut ouvrir de session. Avec DC2, l'entreprise continue de tourner.
> - **Réplication** : vous allez voir concrètement un objet créé sur DC01 apparaître sur DC2.
> - Et pour le TP DFS : DC2 hébergera la **deuxième copie** des données, avec DFS-R qui les synchronise.

---

## Étape 1 — Faire pointer le DNS de DC2 vers DC01

> 💻 **SUR VOTRE POSTE**

![Schema-DNS-Etapes](https://kayasam.github.io/powershell/ressources/images/schema-dns-etapes.svg)

```powershell
Invoke-Command -VMName DC2 -Credential $credDC2 -ScriptBlock {
    $if = Get-NetAdapter | Where-Object Status -eq "Up" | Select-Object -First 1

    Set-DnsClientServerAddress -InterfaceIndex $if.ifIndex -ServerAddresses "192.168.3.1"

    # Vider le cache DNS, sinon les anciennes réponses traînent
    Clear-DnsClientCache
}
```

### Vérification — l'étape à ne surtout pas sauter

```powershell
Invoke-Command -VMName DC2 -Credential $credDC2 -ScriptBlock {
    Resolve-DnsName ad.fournil.lab
    Resolve-DnsName _ldap._tcp.dc._msdcs.ad.fournil.lab -Type SRV
}
```

**Résultat attendu :** la première renvoie `192.168.3.1`, la seconde renvoie un enregistrement **SRV** pointant vers `DC01.ad.fournil.lab`.

> [!question] C'est quoi cet enregistrement bizarre `_ldap._tcp.dc._msdcs` ?
> C'est **l'annuaire des contrôleurs de domaine dans le DNS**. Quand une machine veut rejoindre `ad.fournil.lab`, elle ne cherche pas une adresse : elle demande au DNS _« qui sont les DC de ce domaine ? »_ via ces enregistrements **SRV**.
> Si cette requête échoue, `Add-Computer` répondra _« le domaine spécifié n'existe pas »_ — alors que le domaine existe très bien. **Le problème est toujours le DNS.**

> [!failure] `Resolve-DnsName : DNS name does not exist`
> Trois causes possibles, dans cet ordre :
>
> 1. Le DNS de DC2 ne pointe pas vers `192.168.3.1` → revérifiez la commande ci-dessus
> 2. DC01 n'est pas démarré → `Get-VM DC01`
> 3. Le pare-feu de DC01 bloque le port 53 → testez depuis DC2 :
>
> ```powershell
> Invoke-Command -VMName DC2 -Credential $credDC2 -ScriptBlock {
>     Test-NetConnection 192.168.3.1 -Port 53
> }
> ```

---

## Étape 2 — Joindre DC2 au domaine

```powershell
# Identifiants d'un admin du domaine (créé à la promotion de DC01)
$credDom = Get-Credential -Message "Admin du DOMAINE (login : AD\Administrateur)"

Invoke-Command -VMName DC2 -Credential $credDC2 -ArgumentList $credDom -ScriptBlock {
    param($credDom)
    Add-Computer -DomainName "ad.fournil.lab" -Credential $credDom -Force
}
```

> [!tip] Le `-ArgumentList` / `param()`, c'est quoi ?
> Le bloc `{ }` s'exécute **sur DC2** : il n'a aucune idée de ce que contient votre variable `$credDom`, qui vit sur votre PC.
> `-ArgumentList` la fait passer de l'autre côté, et `param()` la récupère. C'est un réflexe à prendre avec `Invoke-Command`.

```powershell
Restart-VM -Name DC2 -Force -Wait -For Heartbeat
```

### Vérification

```powershell
Invoke-Command -VMName DC2 -Credential $credDom -ScriptBlock {
    (Get-CimInstance Win32_ComputerSystem) | Select-Object Name, Domain, PartOfDomain
}
```

**Résultat attendu :**

```
Name Domain         PartOfDomain
---- ------         ------------
DC2  ad.fournil.lab         True
```

> [!success] Checkpoint 2
> `PartOfDomain = True`. Notez qu'à partir de maintenant, vous utilisez `$credDom` et non plus `$credDC2` : le compte local a cédé la place au compte de domaine.

> [!failure] `Le domaine spécifié n'existe pas ou n'a pas pu être contacté`
> **Ce n'est presque jamais un problème de domaine, c'est le DNS.** Retournez à l'étape 1 et refaites le `Resolve-DnsName`.

> [!failure] `L'horodatage de la demande est en dehors de la plage autorisée`
> Kerberos refuse un écart de plus de **5 minutes** entre les machines. Resynchronisez :
>
> ```powershell
> Invoke-Command -VMName DC2 -Credential $credDC2 -ScriptBlock {
>     w32tm /config /syncfromflags:manual /manualpeerlist:"192.168.3.1" /update
>     Restart-Service w32time
>     w32tm /resync
> }
> ```

---

## Étape 3 — Installer le rôle AD DS sur DC2

```powershell
Invoke-Command -VMName DC2 -Credential $credDom -ScriptBlock {
    Install-WindowsFeature AD-Domain-Services, DNS -IncludeManagementTools
}
```

---

## Étape 4 — Promouvoir DC2 en contrôleur de domaine additionnel

Attention : la commande n'est **pas** la même qu'à l'étape 00.3.

| Situation                               | Commande                       |
| --------------------------------------- | ------------------------------ |
| Créer un **nouveau** domaine (DC01)     | `Install-ADDSForest`           |
| Rejoindre un domaine **existant** (DC2) | `Install-ADDSDomainController` |

```powershell
Invoke-Command -VMName DC2 -Credential $credDom -ArgumentList $credDom -ScriptBlock {
    param($credDom)

    Import-Module ADDSDeployment

    Install-ADDSDomainController `
        -DomainName "ad.fournil.lab" `
        -Credential $credDom `
        -InstallDns `
        -NoGlobalCatalog:$false `
        -SafeModeAdministratorPassword (ConvertTo-SecureString "Fournil@2026" -AsPlainText -Force) `
        -SiteName "Default-First-Site-Name" `
        -NoRebootOnCompletion:$false `
        -Force
}
```

### Les paramètres qui comptent

| Paramètre                 | Rôle                                                                                 |
| ------------------------- | ------------------------------------------------------------------------------------ |
| `-Credential $credDom`    | Il faut être **Admin du domaine** pour ajouter un DC. Un admin local ne suffit pas.  |
| `-InstallDns`             | DC2 devient aussi serveur DNS : la zone se réplique automatiquement depuis DC01      |
| `-NoGlobalCatalog:$false` | DC2 sera **catalogue global** — il peut répondre aux ouvertures de session tout seul |
| `-SiteName`               | Le site AD. Un seul ici, celui par défaut.                                           |

> [!note] La promotion est plus longue que la première
> DC2 doit **télécharger toute la base d'annuaire** depuis DC01. Comptez 5 à 15 minutes, puis un redémarrage automatique.

```powershell
Wait-VM -Name DC2 -For Heartbeat
```

---

## Étape 5 — Vérifier la réplication

> [!important] C'est le test le plus satisfaisant du montage
> Vous allez voir un objet traverser le réseau.

### 5.1 — Les deux DC sont-ils reconnus ?

```powershell
Invoke-Command -VMName DC01 -Credential $credDom -ScriptBlock {
    Get-ADDomainController -Filter * |
        Select-Object Name, IPv4Address, IsGlobalCatalog, Site
}
```

**Résultat attendu — deux lignes :**

```
Name IPv4Address   IsGlobalCatalog Site
---- -----------   --------------- ----
DC01 192.168.3.1              True Default-First-Site-Name
DC2  192.168.3.2              True Default-First-Site-Name
```

### 5.2 — L'état de la réplication

```powershell
Invoke-Command -VMName DC01 -Credential $credDom -ScriptBlock {
    repadmin /replsummary
}
```

> Attendu : `largest delta` faible et **`fails/total = 0 / x`**. Aucune erreur.

### 5.3 — Le test concret

```powershell
# On crée un utilisateur bidon sur DC01...
Invoke-Command -VMName DC01 -Credential $credDom -ScriptBlock {
    New-ADUser -Name "test-replication" -SamAccountName "testrepl" -Enabled $false
}

# On force la réplication au lieu d'attendre 15 minutes
Invoke-Command -VMName DC01 -Credential $credDom -ScriptBlock {
    repadmin /syncall /AdeP
}

# ...et on le cherche sur DC2
Invoke-Command -VMName DC2 -Credential $credDom -ScriptBlock {
    Get-ADUser -Identity "testrepl" -Server "DC2" | Select-Object Name, SamAccountName
}
```

> [!success] Checkpoint 5 — la réplication fonctionne
> `test-replication` a été créé sur DC01 et apparaît sur DC2. Votre domaine est réellement redondant.

```powershell
# Nettoyer
Invoke-Command -VMName DC01 -Credential $credDom -ScriptBlock {
    Remove-ADUser -Identity "testrepl" -Confirm:$false
}
```

---

## Étape 6 — Config DNS finale des deux DC

Chaque DC s'interroge lui-même en premier, et prend l'autre en secours. C'est la configuration recommandée par Microsoft.

```powershell
Invoke-Command -VMName DC01 -Credential $credDom -ScriptBlock {
    $if = Get-NetAdapter | Where-Object Status -eq "Up" | Select-Object -First 1
    Set-DnsClientServerAddress -InterfaceIndex $if.ifIndex -ServerAddresses "127.0.0.1","192.168.3.2"
}

Invoke-Command -VMName DC2 -Credential $credDom -ScriptBlock {
    $if = Get-NetAdapter | Where-Object Status -eq "Up" | Select-Object -First 1
    Set-DnsClientServerAddress -InterfaceIndex $if.ifIndex -ServerAddresses "127.0.0.1","192.168.3.1"

    # Même redirecteur que DC01, pour garder Internet
    Set-DnsServerForwarder -IPAddress "8.8.8.8" -PassThru
}
```

### Vérification du profil réseau

```powershell
foreach ($vm in "DC01","DC2") {
    Invoke-Command -VMName $vm -Credential $credDom -ScriptBlock {
        "$env:COMPUTERNAME : " + (Get-NetConnectionProfile).NetworkCategory
    }
}
```

**Résultat attendu :**

```
DC01 : DomainAuthenticated
DC2 : DomainAuthenticated
```

> [!warning] Si vous voyez `Private` ou `Public`
> Ne passez pas à la suite. Toutes les règles de pare-feu de l'étape 00.5 sont en `-Profile Domain` : elles ne s'appliqueraient pas, et vous perdriez l'après-midi sur le TP DFS.
>
> ```powershell
> Invoke-Command -VMName DC2 -Credential $credDom -ScriptBlock {
>     Restart-NetAdapter -Name (Get-NetAdapter | Where-Object Status -eq "Up").Name
>     Start-Sleep 15
>     Get-NetConnectionProfile | Select-Object NetworkCategory
> }
> ```

---

## Étape 7 — Point de contrôle (le plus important du lab)

```powershell
Checkpoint-VM -Name DC01 -SnapshotName "04-Domaine-operationnel"
Checkpoint-VM -Name DC2  -SnapshotName "04-Domaine-operationnel"
```

> [!important] Faites-les **tous les deux en même temps**
> Deux DC répliqués forment un ensemble cohérent. Restaurer un seul des deux crée une désynchronisation de l'annuaire, et la réplication tombera en erreur.

---

## Checkpoint final de l'étape 00.4

| Vérification        | Commande                               | Attendu                       |
| ------------------- | -------------------------------------- | ----------------------------- |
| DC2 dans le domaine | `Get-CimInstance Win32_ComputerSystem` | `PartOfDomain = True`         |
| Deux DC             | `Get-ADDomainController -Filter *`     | `DC01` et `DC2`               |
| Réplication saine   | `repadmin /replsummary`                | `fails = 0`                   |
| Catalogue global    | `Get-ADDomainController -Filter *`     | `IsGlobalCatalog = True` (×2) |
| Profil réseau       | `Get-NetConnectionProfile`             | `DomainAuthenticated` (×2)    |
| Résolution interne  | `Resolve-DnsName ad.fournil.lab`       | 2 IP : `.1` et `.2`           |

> [!success] Votre infrastructure est debout
> Un domaine, deux contrôleurs, une réplication qui fonctionne, Internet.
> Il ne reste qu'à brancher votre poste de travail dessus, et vous pourrez enfin commencer le vrai TP.

---

| ← Précédent                                                                        | Suivant →                                                                            |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| [[tp-final-active-directory/preparation/03-promouvoir-dc01\|00.3-Promouvoir-DC01]] | [[tp-final-active-directory/preparation/05-poste-de-travail\|00.5-Poste-de-Travail]] |
