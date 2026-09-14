# Exercice 02 - Les Outils de la Marine 🌊

## Contexte

Vous venez d'intégrer le **Bureau d'Analyse de la Marine**.
Votre supérieur vous remet votre premier outil : PowerShell.
Mission du jour : apprendre à trouver une commande, lire son aide, et explorer ce qu'elle retourne.

> _"Un Marine qui ne connaît pas ses outils est un Marine inutile."_ — Vice-Amiral Tsuru

## Partie 1 : Get-Command — Trouver les outils (10 min)

### 1. Combien d'armes avons-nous ?

```powershell
# Lister toutes les commandes disponibles
Get-Command

# Combien y en a-t-il ?
(Get-Command).Count
```

### 2. Chercher par verbe

Quels outils permettent d'**obtenir** des informations ?

```powershell
Get-Command -Verb Get
Get-Command -Verb Stop
Get-Command -Verb New
```

**Question** : Quel verbe a le plus de commandes associées ?

### 3. Chercher par nom

Toutes les commandes liées aux **processus** :

```powershell
Get-Command -Noun Process
```

**Question** : Quelles sont les 3 commandes trouvées ? Devinez leur rôle d'après leur nom.

### 4. Recherche avec joker

```powershell
# Trouver tout ce qui parle de "Service"
Get-Command *Service*

# Trouver tout ce qui parle de fichiers
Get-Command *Item*
```

## Partie 2 : Get-Help — Lire le manuel (10 min)

### 1. Aide de base

```powershell
Get-Help Get-Process
```

### 2. Voir des exemples concrets

```powershell
Get-Help Get-Process -Examples
```

**Exercice** : Exécutez 2 exemples de l'aide. Observez la sortie.

### 3. Aide détaillée

```powershell
Get-Help Get-Process -Detailed
```

**Question** : Quels sont les 3 paramètres les plus utiles de `Get-Process` ?

## Partie 3 : Get-Member — Inspecter un objet (10 min)

### 1. Explorer ce que retourne Get-Process

```powershell
Get-Process | Get-Member
```

**Questions** :

- Combien de propriétés un processus a-t-il ?
- Combien de méthodes ?
- Quel est le type exact de l'objet (ligne `TypeName`) ?

### 2. Filtrer par type de membre

```powershell
# Voir uniquement les propriétés
Get-Process | Get-Member -MemberType Property

# Voir uniquement les méthodes
Get-Process | Get-Member -MemberType Method
```

### 3. Explorer d'autres objets

```powershell
Get-Service | Get-Member
Get-Date    | Get-Member
```

**Exercice** : Pour chaque objet, notez 3 propriétés qui vous semblent utiles.

## Mission finale : Rapport d'espionnage

Affichez les processus actifs avec leur nom, leur ID et leur mémoire utilisée (`WorkingSet`).

```powershell
Get-Process | Format-Table Name, Id, WorkingSet -AutoSize
```

Essayez aussi sur les services :

```powershell
Get-Service | Format-Table Name, Status, DisplayName -AutoSize
```

**Bonus** : Utilisez `Select-Object -First 5` pour n'afficher que les 5 premiers résultats.

## Validation

✅ Vous savez chercher une commande avec `Get-Command`
✅ Vous savez lire l'aide avec `Get-Help`
✅ Vous savez explorer un objet avec `Get-Member`
✅ Vous comprenez la différence entre propriétés et méthodes
