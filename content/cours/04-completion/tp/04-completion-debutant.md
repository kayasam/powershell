---
title: "Exercice 04 - Le Reflexe Tab - Débutant"
publier: true
parcours-tssr: true
parcours-pro: false
---

# Exercice 04 - Le Reflexe Tab ⚡ — Débutant

> Chapitre associé : [[04-completion/04-completion]]

## Contexte

La Marine a des centaines de commandes à saisir chaque jour. Les meilleurs agents
ne tapent pas tout — ils laissent la console finir à leur place.

> _"La vitesse, c'est aussi une forme de puissance."_ — Kizaru

**Durée : 15 min**

## Objectif

Ne plus jamais écrire un nom de cmdlet en entier.

---

## Partie A : Compléter les cmdlets (5 min)

Tapez ces débuts, puis appuyez sur **Tab** :

```powershell
Get-Proc<Tab>      # devient Get-Process
Get-Ser<Tab>       # devient Get-Service
Get-Ch<Tab>        # parcourt Get-ChildItem, etc.
```

**A1.** Trouvez 5 cmdlets en utilisant uniquement Tab. Lesquelles ?

**A2.** Que se passe-t-il si vous appuyez **plusieurs fois** sur Tab ?

> 💡 **Indice** : **Shift+Tab** revient à la proposition précédente.

---

## Partie B : Compléter les paramètres (5 min)

```powershell
Get-Process -N<Tab>     # devient -Name
Get-Service -D<Tab>     # parcourt les paramètres en D
```

**B1.** Utilisez Tab pour découvrir les paramètres de `Get-Process`. Citez-en cinq.

**B2.** La complétion propose-t-elle aussi les **valeurs** possibles ? Testez avec
`Get-Service -Name <Tab>`.

---

## Partie C : Compléter les chemins (5 min)

```powershell
cd C:\Win<Tab>              # devient C:\Windows\
Get-ChildItem C:\Prog<Tab>  # propose Program Files, etc.
```

**C1.** Naviguez jusqu'à `C:\Windows\System32` en utilisant uniquement Tab.
Combien de fois avez-vous appuyé ?

**C2.** Que se passe-t-il si le début du chemin que vous tapez n'existe pas ?

---

## Mission finale D : zéro faute de frappe 🏆

Sans jamais taper un nom complet, produisez ces trois commandes :

**D1.** La liste des processus nommés `explorer`.

**D2.** Le contenu de `C:\Windows\System32\drivers`.

**D3.** Le service `Spooler` avec son statut.

> 💡 **Indice** : l'objectif n'est pas le résultat, c'est le **geste**. Comptez
> vos appuis sur Tab : vous devriez dépasser la dizaine.

---

## Validation

✅ Vous utilisez **Tab** systématiquement pour compléter
✅ Vous savez que Tab fonctionne aussi sur les **paramètres**
✅ Vous savez que Tab fonctionne aussi sur les **chemins**
✅ Vous appuyez plusieurs fois sur Tab pour faire défiler les possibilités
