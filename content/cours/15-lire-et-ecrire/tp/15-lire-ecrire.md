# Exercice 15 - Le Journal de Bord de Nami 🗺️

## Contexte

**Nami** tient un journal de bord minutieux.
Chaque événement de la traversée y est consigné : météo, cap, incidents, îles repérées.
Elle vous demande d'automatiser la lecture et l'écriture de ce journal avec PowerShell.

> _"Si tu es perdu en mer, c'est que tu n'as pas écouté ta navigatrice."_ — Nami

## Mise en place

```powershell
# Créer le dossier de navigation
New-Item -Path "C:\Temp\Navigation" -ItemType Directory -Force

# Créer le journal avec les premières entrées
$journalPath = "C:\Temp\Navigation\journal-de-bord.txt"

Set-Content -Path $journalPath -Value "=== JOURNAL DE BORD - THOUSAND SUNNY ==="
Add-Content -Path $journalPath -Value "2024-01-15 | Cap : Est | Météo : Dégagé | Événement : Départ de Wano"
Add-Content -Path $journalPath -Value "2024-01-16 | Cap : Est | Météo : Orageux | Événement : Tempête évitée"
Add-Content -Path $journalPath -Value "2024-01-17 | Cap : Nord | Météo : Brumeux | Événement : Île fantôme aperçue"
Add-Content -Path $journalPath -Value "2024-01-18 | Cap : Est | Météo : Dégagé | Événement : Banc de poissons volants"
Add-Content -Path $journalPath -Value "2024-01-19 | Cap : Est | Météo : Dégagé | Événement : Arrivée à Elbaf"
```

## Mission 1 : Lire le journal (5 min)

```powershell
# Afficher tout le journal
Get-Content $journalPath

# Afficher seulement les 3 dernières entrées
Get-Content $journalPath -Tail 3

# Compter le nombre de lignes
(Get-Content $journalPath).Count
```

**Questions** :

- Combien d'entrées contient le journal (hors titre) ?
- Quelle est la dernière entrée ?

## Mission 2 : Ajouter une entrée (5 min)

Nami vous demande d'ajouter l'entrée d'aujourd'hui :

```powershell
$date       = Get-Date -Format "yyyy-MM-dd"
$nouvelleEntree = "$date | Cap : Nord | Météo : Dégagé | Événement : Rencontre avec des dauphins"

Add-Content -Path $journalPath -Value $nouvelleEntree

Write-Host "Entrée ajoutée !" -ForegroundColor Green

# Vérifier que l'entrée est bien là
Get-Content $journalPath -Tail 1
```

## Mission 3 : Chercher dans le journal (10 min)

Nami cherche tous les jours où il y a eu de l'orage ou du brouillard.

```powershell
$journal = Get-Content $journalPath

# Chercher les entrées avec "Orageux" ou "Brumeux"
$journal | Where-Object { $_ -like "*Orageux*" -or $_ -like "*Brumeux*" }
```

**Exercice** : Trouvez tous les jours où le cap était "Nord".

## Mission 4 : Créer un résumé météo (10 min)

Générez un rapport séparé avec uniquement les événements :

```powershell
$journal    = Get-Content $journalPath
$evenements = $journal | Where-Object { $_ -like "*Événement*" }

# Sauvegarder dans un nouveau fichier
$evenements | Out-File "C:\Temp\Navigation\evenements.txt"

Write-Host "$($evenements.Count) événements exportés"

# Vérifier
Get-Content "C:\Temp\Navigation\evenements.txt"
```

## Mission 5 : Corriger une entrée (10 min)

Nami a fait une faute : "Île fantôme" doit s'appeler "Île de Thriller Bark".
Corrigez-la sans réécrire tout le fichier :

```powershell
$contenu = Get-Content $journalPath

# Remplacer dans tout le contenu
$contenuCorrige = $contenu -replace "Île fantôme", "Île de Thriller Bark"

# Sauvegarder
$contenuCorrige | Set-Content $journalPath

Write-Host "Correction effectuée !" -ForegroundColor Green

# Vérifier
Get-Content $journalPath
```

## Mission Bonus : Le rapport de traversée 🌟

Créez un script qui lit le journal, compte combien de jours ont eu chaque type de météo, et affiche un résumé.

## Validation

- ✅ Vous savez lire un fichier avec `Get-Content`
- ✅ Vous savez écrire avec `Set-Content` et ajouter avec `Add-Content`
- ✅ Vous savez chercher dans un contenu avec `Where-Object`
- ✅ Vous savez corriger du texte avec `-replace`
- ✅ Vous savez rediriger vers un fichier avec `Out-File`
