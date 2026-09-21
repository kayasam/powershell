---
title: "TP débutant : registre, journaux et certificats"
publier: true
parcours-tssr: true
parcours-pro: false
---

# Les Archives Secrètes d'Ohara — mode débutant

**Mission :** lire trois sources Windows sans modifier les zones sensibles. Le travail d'écriture, s'il est fait, reste sous `HKCU:\Software\FormationPowerShell`.

## Énoncé

1. Vérifiez que les lecteurs `HKCU:`, `Cert:` et `Env:` existent avec `Get-PSDrive`.
2. Relevez `ProductName` dans `HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion` sans rien modifier.
3. Comptez les événements d'erreur (`Level = 2`) du journal `System` sur les sept derniers jours.
4. Comptez les certificats du magasin `Cert:\CurrentUser\Root` qui expirent dans les 90 jours.
5. Rassemblez `ProductName`, `ErreursSystem7J` et `RacinesExpirant90J` dans un objet, puis exportez-le en CSV.

## Indices progressifs

1. Une valeur de registre se lit avec `Get-ItemProperty -Path ... -Name ProductName`.
2. Pour les journaux, utilisez `Get-WinEvent -FilterHashtable @{ LogName='System'; Level=2; StartTime=(Get-Date).AddDays(-7) }` ; `-ErrorAction SilentlyContinue` permet de traiter un journal vide.
3. Un certificat possède une propriété `NotAfter` ; comparez-la à `(Get-Date).AddDays(90)`.
4. Pour compter correctement même zéro ou une seule valeur : `@($résultat).Count`.
5. Pour éviter les effets de bord, ne créez aucune clé ni certificat pour cette variante.

**Livrable :** objet d'audit, CSV et relevé des valeurs observées.
