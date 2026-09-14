# Exercice 04 - Le Reflexe Tab ⚡

## Contexte

La Marine a des centaines de commandes à saisir chaque jour.
Les meilleurs agents ne tapent pas tout — ils laissent la console finir à leur place.
Objectif : ne plus jamais écrire un nom de cmdlet en entier.

> _"La vitesse, c'est aussi une forme de puissance."_ — Kizaru

**Durée : 10 min**

## Partie 1 : Compléter les cmdlets

Tapez ces débuts, puis appuyez sur **Tab** :

```powershell
Get-Proc<Tab>      # → Get-Process
Get-Ser<Tab>       # → Get-Service
Get-Ch<Tab>        # → parcourt Get-ChildItem, etc.
```

**Exercice** : Trouvez 5 cmdlets en utilisant uniquement Tab. Notez-les.

## Partie 2 : Compléter les paramètres

```powershell
Get-Process -N<Tab>     # → -Name
Get-Service -D<Tab>     # → parcourt les paramètres en D
```

**Exercice** : Utilisez Tab pour découvrir tous les paramètres de `Get-Process`.

## Partie 3 : Compléter les chemins

```powershell
cd C:\Win<Tab>              # → C:\Windows\
Get-ChildItem C:\Prog<Tab>  # → Program Files, etc.
```

**Exercice** : Naviguez jusqu'à `C:\Windows\System32` en utilisant uniquement Tab.

## Mission : zéro faute de frappe 🏆

Sans jamais taper un nom complet, produisez ces trois commandes :

1. La liste des processus nommés `explorer`
2. Le contenu de `C:\Windows\System32\drivers`
3. Le service `Spooler` avec son statut

## Validation

✅ Vous utilisez **Tab** systématiquement pour compléter
✅ Vous savez que Tab fonctionne aussi sur les **paramètres**
✅ Vous savez que Tab fonctionne aussi sur les **chemins**
✅ Vous appuyez plusieurs fois sur Tab pour faire défiler les possibilités
