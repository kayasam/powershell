---
title: "Exercice 08 - Le Rapport pour l'Amiral - Débutant"
publier: true
parcours-tssr: true
parcours-pro: false
---

# Exercice 08 - Le Rapport pour l'Amiral 📊 — Débutant

> Chapitre associé : [[08-formatage/08-formatage]]

## Contexte

Vous avez toutes les données. Mais l'Amiral ne lit pas les écrans de 200 lignes.
Un bon rapport montre **peu de colonnes, bien choisies**.

> _"Un rapport qu'on ne lit pas est un rapport qui n'existe pas."_ — Sengoku

**Durée : 25 min**

## Objectif

Passer d'un déluge de données à un tableau lisible.

---

## Partie A : Format-Table (5 min)

```powershell
# Tableau brut
Get-Process | Format-Table

# Choisir les colonnes
Get-Process | Format-Table Name, Id, CPU

# Ajuster la largeur
Get-Process | Format-Table Name, Id, CPU -AutoSize
```

**A1.** Que change `-AutoSize` sur l'affichage ?

**A2.** Quel est le raccourci de `Format-Table` ?

> 💡 **Indice** : `Get-Alias -Definition Format-Table` donne la réponse.

---

## Partie B : Format-List (5 min)

```powershell
Get-Service -Name Spooler | Format-List

# Toutes les propriétés, même celles cachées dans le tableau
Get-Service -Name Spooler | Format-List *
```

**B1.** Comparez `Format-Table` et `Format-List` sur le service `Spooler`.
Laquelle utiliseriez-vous pour **un seul** service ? Et pour **cinquante** ?

**B2.** Combien de propriétés `Format-List *` révèle-t-il, par rapport à
l'affichage par défaut ?

---

## Partie C : Select-Object (5 min)

> ⚠️ `Select-Object` **choisit les données**, `Format-*` **choisit l'affichage**.
> Ce n'est pas pareil.

```powershell
Get-Process | Select-Object Name, Id, CPU
Get-Process | Select-Object -First 5
Get-Process | Select-Object -Last 3
```

**C1.** Affichez les **10 premiers** processus avec uniquement les colonnes
`Name` et `Id`.

---

## Partie D : Le piège de l'ordre (5 min)

Testez ces deux commandes :

```powershell
# A
Get-Process | Select-Object -First 5 | Format-Table

# B
Get-Process | Format-Table | Select-Object -First 5
```

**D1.** Laquelle donne le résultat attendu ?

**D2.** Pourquoi l'autre échoue-t-elle ?

Vérifiez votre intuition :

```powershell
Get-Process | Format-Table | Get-Member
```

**D3.** Formulez la règle en une phrase.

> 💡 **Indice** : regardez le `TypeName` renvoyé — ce ne sont plus des processus.

---

## Mission finale E : le tableau de bord de l'Amiral 🏆

**E1.** Produisez **un seul tableau** affichant les **5 processus** consommant le
plus de mémoire, avec trois colonnes : le nom, le PID, la mémoire en Mo.

```powershell
Get-Process |
    Sort-Object WorkingSet64 -Descending |
    Select-Object -First 5 Name, Id, @{Name='Mo'; Expression={[math]::Round($_.WorkingSet64/1MB)}} |
    Format-Table -AutoSize
```

**E2.** Affichez le même résultat dans une fenêtre interactive.

> 💡 **Indice** : `Out-GridView` remplace `Format-Table` en fin de pipeline.
> `WorkingSet64` est en **octets** — `1MB` est un raccourci valide.

---

> [!success] Validation
>
> - Vous utilisez `Format-Table` pour beaucoup d'objets, `Format-List` pour un seul
> - Vous savez que `Select-Object` filtre la **donnée** et `Format-*` l'**affichage**
> - Vous placez toujours les `Format-*` **en fin de pipeline**
> - Vous savez expliquer pourquoi on ne peut rien faire après un `Format-Table`
