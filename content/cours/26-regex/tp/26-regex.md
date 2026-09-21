---
title: "Exercice 26 - Les Poneglyphes de Robin"
parcours-tssr: false
parcours-pro: true
---

# Exercice 26 - Les Poneglyphes de Robin 📖

**Durée : 40 min**

## Contexte

**Nico Robin** analyse des journaux de transmission interceptés.
Elle doit trouver rapidement les messages critiques, extraire des informations clés,
et chercher des motifs dans des fichiers.

PowerShell propose deux outils pour ça :

- **`-match`** : pour tester si une chaîne contient un motif
- **`Select-String`** : pour chercher dans des fichiers (comme un `grep`)

> _"Les mots ont un sens. Les motifs ont une histoire."_ — Robin

---

## Les transmissions interceptées

```powershell
$transmissions = @(
    "[2024-01-15 08:42] [INFO] Agent Lucci connecté depuis 10.0.0.1"
    "[2024-01-15 09:15] [WARN] Tentatives échouées : 7 depuis 172.16.0.42"
    "[2024-01-15 09:18] [ERREUR] Connexion refusée depuis 192.168.1.99"
    "[2024-01-15 10:00] [INFO] Rapport envoyé à cipher-pol@marine.gov"
    "[2024-01-15 10:45] [WARN] CPU à 87% sur serveur Enies-Lobby"
    "[2024-01-15 11:02] [ERREUR] Fichier manquant : /logs/mission-777.log"
    "[2024-01-15 11:30] [INFO] Agent Kaku connecté depuis 10.0.0.5"
    "[2024-01-15 12:00] [CRITIQUE] Intrusion détectée ! IP source : 66.6.6.6"
)
```

---

## Mission 1 : Filtrer par niveau avec -match (10 min)

`-match` retourne `$true` si la chaîne contient le motif, `$false` sinon.

```powershell
# Tester sur une ligne
"[ERREUR] Problème détecté" -match "ERREUR"   # True
"[INFO] Tout va bien"       -match "ERREUR"   # False

# Trouver toutes les transmissions ERREUR
$transmissions | Where-Object { $_ -match "ERREUR" }

# Trouver les WARN
$transmissions | Where-Object { $_ -match "WARN" }

# Trouver WARN ou CRITIQUE (le | signifie "ou" dans un motif)
$transmissions | Where-Object { $_ -match "WARN|CRITIQUE" }
```

**Questions** :

- Combien de transmissions sont en ERREUR ?
- Combien nécessitent une action (WARN, ERREUR ou CRITIQUE) ?

---

## Mission 2 : Chercher des motifs simples (10 min)

```powershell
# Chercher les lignes qui contiennent une adresse email
$transmissions | Where-Object { $_ -match "@" }

# Chercher les lignes qui parlent d'un agent
$transmissions | Where-Object { $_ -match "Agent" }

# Chercher les lignes qui contiennent un chiffre
$transmissions | Where-Object { $_ -match "\d" }
# \d = n'importe quel chiffre (0-9)

# Chercher les lignes qui contiennent "777" ou "87"
$transmissions | Where-Object { $_ -match "777|87" }
```

**Exercice** : Trouvez toutes les transmissions qui mentionnent une adresse IP
(une IP contient des chiffres séparés par des points).

```powershell
# Indice : une IP ressemble à "10.0.0.1"
# Le motif \d+ signifie "un ou plusieurs chiffres"
$transmissions | Where-Object { $_ -match "\d+\.\d+\.\d+\.\d+" }
```

---

## Mission 3 : Remplacer avec -replace (10 min)

`-replace` remplace toutes les occurrences d'un motif dans une chaîne.

```powershell
# Remplacer un mot fixe
"Agent Lucci connecté" -replace "Lucci", "Kaku"

# Masquer les IPs dans les logs (remplace par **.***.***.***)
$transmissions | ForEach-Object {
    $_ -replace "\d+\.\d+\.\d+\.\d+", "***.***.***.***"
}

# Supprimer les crochets des niveaux
"[INFO] Message important" -replace "\[|\]", ""
# \[ = crochet ouvrant (le \ est nécessaire car [ est un caractère spécial)
# \] = crochet fermant
# |  = ou
```

**Exercice** : Transformez toutes les transmissions pour remplacer `[INFO]` par `[OK]`.

---

## Mission 4 : Select-String — chercher dans des fichiers (10 min)

`Select-String` fonctionne comme un `grep` : il cherche un motif dans des fichiers.

```powershell
# Sauvegarder les transmissions dans un fichier
$transmissions | Out-File "C:\Temp\transmissions.log" -Encoding UTF8

# Chercher toutes les ERREURS dans le fichier
Select-String -Path "C:\Temp\transmissions.log" -Pattern "ERREUR"

# Chercher et afficher uniquement la ligne et son numéro
Select-String -Path "C:\Temp\transmissions.log" -Pattern "WARN|ERREUR" |
    Select-Object LineNumber, Line

# Chercher dans plusieurs fichiers (wildcard *)
Select-String -Path "C:\Temp\*.log" -Pattern "CRITIQUE"
```

**Exercice** : Cherchez toutes les lignes qui contiennent une adresse email dans le fichier.

---

## Mission Bonus : Rapport d'alerte 🌟

Créez un script qui analyse les transmissions et affiche un résumé coloré.

> Solution complète : voir la correction de ce TP.

---

## Les motifs essentiels à retenir

| Motif     | Signification                              | Exemple          |
| --------- | ------------------------------------------ | ---------------- |
| `abc`     | Texte exact                                | `"abc"`          |
| `\|`      | Ou (l'un ou l'autre)                       | `"WARN\|ERREUR"` |
| `\d`      | Un chiffre                                 | `"ref\d\d\d"`    |
| `\d+`     | Un ou plusieurs chiffres                   | `"\d+"`          |
| `\w`      | Une lettre, chiffre ou _                   |                  |
| `\.`      | Un point littéral (le . doit être échappé) | `"\d+\.\d+"`     |
| `\[` `\]` | Crochet littéral                           | `"\[INFO\]"`     |

---

## Validation

- ✅ Vous savez utiliser `-match` pour filtrer avec `Where-Object`
- ✅ Vous savez combiner des motifs avec `|` (ou)
- ✅ Vous savez utiliser `-replace` pour transformer du texte
- ✅ Vous savez chercher dans des fichiers avec `Select-String`
- ✅ Vous connaissez `\d`, `\d+`, `\.` pour les motifs de base
