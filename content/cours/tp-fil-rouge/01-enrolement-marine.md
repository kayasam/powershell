---
title: "TP1 - L'Enrôlement à la Marine"
parcours-tssr: true
parcours-pro: true
---

# TP1 - L'Enrôlement à la Marine 🌊

## Choisissez votre mode

Le même énoncé ci-dessous sert aux deux modes : choisissez **un** niveau, sans refaire la mission deux fois.

### Débutant — indices progressifs

- Fiche : `$nom.GetType().Name` pour le type, `$nom.ToUpper()` pour les majuscules.
- Solde : partez de `50000`, ajoutez `2000 * [math]::Max(0, $age - 18)`, puis `10000` seulement si le fruit est présent.
- Escouade : `$escouade=@('Luffy','Zoro',...)`, puis `[0]`, `[-1]`, `.Count` et `+=` pour les recrues.
- Badge : commencez par `Write-Host ('=' * 30) -ForegroundColor Blue`, puis ajoutez une couleur à la fois. Testez le fichier avec `.\Badge-Marine.ps1`.

### Avancé — défi autonome

- Construisez le badge **sans recopier** les exemples de l'énoncé ; séparez calcul de solde et affichage.
- Validez âge positif et division entre 1 et 12 avant le calcul ; testez deux valeurs invalides.
- N'inscrivez ni nom, ni date, ni solde en dur dans le badge : le résultat doit changer quand la fiche change.

**Correction formateur :** [[tp-fil-rouge/01-enrolement-marine-correction|énoncé et solution réunis]].

## Contexte

Bienvenue, recrue.

Aujourd'hui est votre premier jour au **QG de la Marine**. Chaque nouvelle recrue doit passer par le Bureau d'Enrôlement pour :

1. Remplir sa **fiche d'identité Marine**
2. Passer un **test de connaissances PowerShell**
3. Créer le **dossier de son escouade**
4. Afficher son **badge officiel** dans le terminal

Votre mission : accomplir ces 4 étapes en PowerShell.

> _"Un bon Marine commence par bien remplir ses papiers."_ — Vice-Amiral Tsuru

**Durée estimée : 45-60 min**

---

## Étape 1 : Votre fiche d'identité Marine (15 min)

### Mission

Créez votre fiche de recrue en PowerShell. Tout se fait dans le terminal, commande par commande.

### 1a. Informations de base

Créez ces variables avec vos propres informations (ou inventez un personnage) :

- `$nom` → votre nom complet (texte)
- `$grade` → "Matelot" (texte)
- `$age` → votre âge (nombre)
- `$division` → un numéro de 1 à 12 (nombre)
- `$devilFruit` → avez-vous mangé un Devil Fruit ? (booléen)

### 1b. Vérifications

- Affichez le **type** de chaque variable avec `.GetType()`
- Vérifiez que `$age` est bien un nombre et `$nom` bien du texte

### 1c. Calculs de solde

La Marine paie ses recrues selon cette grille :

- Solde de base : **50 000 Berrys** par mois
- Bonus par année d'âge au-dessus de 18 ans : **2 000 Berrys**
- Bonus Devil Fruit : **10 000 Berrys** (si `$devilFruit` est vrai)

Créez les variables `$soldeBase`, `$bonusAge`, `$bonusFruit` et `$soldeTotal` puis affichez :

```
Solde mensuelle de [nom] : [total] Berrys
```

### 1d. Manipulation du nom

En utilisant les **méthodes de chaîne** :

- Affichez votre nom en **majuscules**
- Affichez le **nombre de caractères** de votre nom
- Vérifiez si votre nom **contient** la lettre "D" (comme la famille D.)
- Remplacez votre grade "Matelot" par "Sergent" (dans une nouvelle variable)

---

## Étape 2 : Le test de connaissances (10 min)

### Mission

Le Bureau d'Enrôlement vérifie que vous savez utiliser l'aide de PowerShell.
Répondez à chaque question **en tapant une commande**, pas en cherchant sur Google.

### Questions

**Q1.** Combien de commandes PowerShell commencent par le verbe `Set` ?
_(Indice : une commande permet de chercher par verbe...)_

**Q2.** Quels sont les 3 alias de `Get-ChildItem` ?
_(Indice : une commande permet de chercher les alias d'une cmdlet...)_

**Q3.** Quel est le **type** de l'objet retourné par `Get-Date` ?
_(Indice : une commande permet d'inspecter ce qu'un objet contient...)_

**Q4.** Trouvez une commande PowerShell qui permet d'**arrêter** un processus.
_(Indice : cherchez par verbe et nom...)_

**Q5.** Affichez les **exemples** d'utilisation de `Get-Process`.

Notez vos réponses dans des variables :

```powershell
$reponse1 = "..."
$reponse2 = "..."
# etc.
```

---

## Étape 3 : Le registre de l'escouade (15 min)

### Mission

Vous êtes nommé responsable de la 3ème Escouade. Créez le registre complet.

### 3a. La liste des membres

Créez un **tableau** `$escouade` contenant 5 noms de personnages One Piece de votre choix.

Puis affichez :

- Le **premier** membre (le chef d'escouade)
- Le **dernier** membre (la recrue la plus récente)
- Le **nombre total** de membres

### 3b. Recrutement

- Ajoutez **2 nouveaux membres** au tableau
- Affichez le nouveau nombre total

### 3c. La fiche du chef d'escouade

Créez une **table de hachage** `$chef` avec ces clés :

- `Nom` → le premier membre de votre escouade
- `Grade` → "Capitaine"
- `Specialite` → inventez (ex: "Combat", "Navigation", "Espionnage"...)
- `AnnéesService` → un nombre
- `Actif` → `$true`

Puis :

- Affichez le nom et le grade du chef
- Modifiez son grade en "Commandant" (promotion !)
- Ajoutez une nouvelle clé `Medailles` avec la valeur 3

---

## Étape 4 : Le Badge Officiel (15 min)

### Mission

Créez un script `Badge-Marine.ps1` qui affiche votre badge officiel dans le terminal, en **couleurs**.

Le badge doit afficher :

1. Un cadre en couleur
2. Le texte "MARINE" en grand
3. Votre nom, grade, division
4. Votre solde calculée à l'Étape 1
5. La date et l'heure actuelles (avec `Get-Date`)
6. Le nom de votre ordinateur (avec `$env:COMPUTERNAME`)

**Contraintes :**

- Utilisez au moins **3 couleurs différentes**
- Le cadre doit faire au moins **30 caractères de large**
- Utilisez la **répétition de caractères** pour le cadre (ex: `"=" * 30`)

**Exemple de rendu** (le vôtre sera différent) :

```
==============================
     MARINE - QG ENROLMENT
==============================
Nom      : Monkey D. Garp
Grade    : Commandant
Division : 3
Solde    : 62 000 Berrys/mois
------------------------------
Poste    : DESKTOP-MARINE01
Date     : 10/02/2026 14:30
==============================
```

### Comment exécuter

```powershell
# Si erreur "script non signé" :
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Exécuter
.\Badge-Marine.ps1
```

---

## Validation

- [ ] Vous avez créé des variables de types différents (texte, nombre, booléen)
- [ ] Vous avez fait des calculs avec des variables
- [ ] Vous avez utilisé des méthodes de chaîne (.ToUpper(), .Length, .Contains(), .Replace())
- [ ] Vous avez trouvé des commandes avec `Get-Command`
- [ ] Vous avez lu l'aide avec `Get-Help`
- [ ] Vous avez inspecté un objet avec `Get-Member`
- [ ] Vous avez créé un tableau et accédé à ses éléments
- [ ] Vous avez créé une table de hachage et modifié ses valeurs
- [ ] Vous avez écrit et exécuté un script .ps1
- [ ] Votre badge s'affiche en couleurs

---

## Bonus : La Base de Données des Primes 🌟

Pour ceux qui ont terminé en avance.

Créez un script `Primes-Marine.ps1` qui :

1. Crée **3 tables de hachage** — une par pirate recherché — avec les clés : `Nom`, `Surnom`, `Prime`, `DevilFruit`, `Dangereux` (booléen)

2. Stocke ces 3 tables dans un **tableau** `$avisRecherche`

3. Affiche un **Avis de Recherche** complet pour chaque pirate, avec :
   - Un cadre en rouge
   - Le nom et surnom
   - La prime en Berrys
   - "DEVIL FRUIT : OUI" ou "NON"
   - Un message "EXTRÊMEMENT DANGEREUX" en rouge si `Dangereux` est vrai

4. À la fin, affichez la **prime totale** des 3 pirates combinés

_(Indice : vous pouvez accéder au premier pirate avec `$avisRecherche[0]` et à son nom avec `$avisRecherche[0].Nom`)_

<details>
<summary>💡 Indice structure</summary>

```powershell
$pirate1 = @{
    Nom        = "..."
    Surnom     = "..."
    Prime      = ...
    DevilFruit = $true
    Dangereux  = $true
}

$avisRecherche = @($pirate1, $pirate2, $pirate3)

# Pour accéder :
$avisRecherche[0].Nom     # Nom du premier pirate
$avisRecherche[1].Prime   # Prime du deuxième
```

</details>

---

## Ce que vous avez appris

- ✅ Créer et exécuter un script `.ps1`
- ✅ Manipuler des variables, tableaux et tables de hachage
- ✅ Faire des calculs et manipuler du texte
- ✅ Utiliser `Get-Command`, `Get-Help` et `Get-Member`
- ✅ Afficher du texte coloré avec `Write-Host`

## Pour la suite — Mission 2

La mission suivante introduit le **pipeline** (`|`), qui permet d'enchaîner les commandes entre elles.
Vous verrez aussi les **conditions**, les **boucles** et les **fonctions**.
