---
title: "Exercice 17 - Les Plans de Franky - Avancé"
publier: true
parcours-tssr: true
parcours-pro: true
---

# Exercice 17 - Les Plans de Franky 📐 — Avancé

> Chapitre associé : [[cours/17-export-import/17-export-import]]
> Mêmes parties que la version débutant, mais **sans les commandes**. À vous de les trouver.

## Contexte

Un CSV mal réimporté, c'est un tri alphabétique sur des nombres et un rapport
faux que personne ne remarque avant trois mois.

> _"SUPER ! Un plan dans la tête, c'est un plan perdu."_ — Franky

**Durée : 40 min**

## Les données techniques

```powershell
$pieces = @(
    [PSCustomObject]@{ Nom="Coup de Burst";  Type="Propulsion"; Energie="Cola";      Puissance=100; Operationnel=$true  }
    [PSCustomObject]@{ Nom="Soldier Dock";   Type="Hangar";     Energie="Aucun";     Puissance=0;   Operationnel=$true  }
    [PSCustomObject]@{ Nom="Mini Merry II";  Type="Sous-marin"; Energie="Mecanique"; Puissance=30;  Operationnel=$true  }
    [PSCustomObject]@{ Nom="Gaon Cannon";    Type="Armement";   Energie="Cola";      Puissance=200; Operationnel=$false }
    [PSCustomObject]@{ Nom="Chicken Voyage"; Type="Navigation"; Energie="Mecanique"; Puissance=50;  Operationnel=$true  }
)
```

---

## Partie A : Export CSV (10 min)

**A1.** Exportez l'inventaire en CSV. À quoi ressemble le fichier brut ?
Y a-t-il une ligne d'en-tête ?

**A2.** Réimportez et affichez en tableau.

**A3.** Que fait `-NoTypeInformation` ? Est-il encore utile en PowerShell 7 ?

**A4.** Sur un Windows français, quel séparateur Excel attend-il ? Quel séparateur
`Export-Csv` utilise-t-il par défaut ? Quel paramètre permet de s'adapter ?

---

## Partie B : Import et analyse CSV (10 min)

**B1.** Combien de pièces sont opérationnelles ?

**B2.** Combien utilisent du Cola ?

**B3.** Quelle est la pièce la plus puissante ?

**B4.** Triez par puissance **sans** convertir le type. Que constatez-vous ?
Expliquez.

**B5.** Additionnez la colonne `Puissance` après import. Que se passe-t-il ?
Donnez **deux** façons de restaurer les bons types.

---

## Partie C : Export JSON (10 min)

**C1.** Exportez en JSON. En quoi le fichier diffère-t-il du CSV ?

**C2.** Réimportez et affichez la première pièce.

**C3.** Après import JSON, `Puissance` est-il un nombre ou du texte ?
Et `Operationnel` ? Comparez avec le CSV.

**C4.** Ajoutez à une pièce une **liste** de sous-composants, puis réexportez en
JSON. Essayez la même chose en CSV. Que se passe-t-il ?

**C5.** `ConvertTo-Json` tronque au-delà d'une certaine profondeur. Laquelle,
et comment la régler ?

---

## Partie D : Fichier de configuration (10 min)

**D1.** Créez un fichier de configuration JSON et rechargez-le.

**D2.** Modifiez une valeur, réenregistrez, rechargez. La modification tient-elle ?

**D3.** Écrivez un couple de fonctions : l'une crée une configuration par défaut
si le fichier n'existe pas, l'autre le charge, **valide** la présence des clés
obligatoires et renvoie un objet. Aucune exception non gérée.

---

## Partie E : Choisir son format

**E1.** Complétez ce tableau :

| Format | Cmdlets | Quand l'utiliser | Limite |
| ------ | ------- | ---------------- | ------ |
| CSV    |         |                  |        |
| JSON   |         |                  |        |
| CLIXML |         |                  |        |

**E2.** Quel format conserve **fidèlement** les types PowerShell à l'aller-retour ?
Prouvez-le.

---

## Mission finale F : le rapport d'inventaire 🌟

**F1.** Produisez un rapport groupé par type d'énergie : nombre de pièces et
puissance totale. Exportez-le en CSV.

**F2.** Ajoutez une colonne `Operationnelles` comptant, par énergie, les pièces
en état de marche.

**F3.** Produisez le même rapport en JSON, et vérifiez qu'un rechargement redonne
exactement les mêmes valeurs et les mêmes types.

---

> [!success] Validation
>
> - Vous exportez et réimportez en CSV et en JSON
> - Vous savez qu'un import CSV rend **tout** en texte, et comment y remédier
> - Vous connaissez les limites du CSV sur les données imbriquées
> - Vous maîtrisez la profondeur de sérialisation JSON
> - Vous savez quel format conserve les types
