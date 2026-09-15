window.powerShellQuizBank = {
  id: "07-variables",
  title: "Quiz — 07. Variables",
  chapter: "07. Variables",
  intro:
    "20 questions, dont deux situations concrètes, pour vérifier vos repères avant les travaux pratiques.",
  chapterLink: "../07-variables/",
  questions: [
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Variable » ?",
      choices: [
        "Nom précédé de $ qui conserve une valeur pour la réutiliser",
        "Opération avec = qui donne une valeur à une variable",
        "Valeur booléenne vraie",
        "Collection de paires clé-valeur",
      ],
      answer: 0,
      explanation:
        "« Variable » : Nom précédé de $ qui conserve une valeur pour la réutiliser. Les autres choix renvoient à « Affectation », « $true », « Hashtable » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Nom précédé de $ qui conserve une valeur pour la réutiliser » ?",
      choices: ["Affectation", "Variable", "$true", "Hashtable"],
      answer: 1,
      explanation:
        "« Variable » : Nom précédé de $ qui conserve une valeur pour la réutiliser. Les autres choix renvoient à « Affectation », « $true », « Hashtable » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Affectation » ?",
      choices: [
        "Valeur qui représente l'absence d'objet",
        "Valeur booléenne fausse",
        "Opération avec = qui donne une valeur à une variable",
        "Type qui représente un nombre entier",
      ],
      answer: 2,
      explanation:
        "« Affectation » : Opération avec = qui donne une valeur à une variable. Les autres choix renvoient à « $null », « $false », « [int] » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Opération avec = qui donne une valeur à une variable » ?",
      choices: ["$null", "$false", "[int]", "Affectation"],
      answer: 3,
      explanation:
        "« Affectation » : Opération avec = qui donne une valeur à une variable. Les autres choix renvoient à « $null », « $false », « [int] » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « $null » ?",
      choices: [
        "Valeur qui représente l'absence d'objet",
        "Valeur booléenne vraie",
        "Collection de valeurs accessible par indice",
        "Type qui représente du texte",
      ],
      answer: 0,
      explanation:
        "« $null » : Valeur qui représente l'absence d'objet. Les autres choix renvoient à « $true », « Tableau », « [string] » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Valeur qui représente l'absence d'objet » ?",
      choices: ["$true", "$null", "Tableau", "[string]"],
      answer: 1,
      explanation:
        "« $null » : Valeur qui représente l'absence d'objet. Les autres choix renvoient à « $true », « Tableau », « [string] » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « $true » ?",
      choices: [
        "Valeur booléenne fausse",
        "Collection de paires clé-valeur",
        "Valeur booléenne vraie",
        "Préfixe qui donne accès aux variables d'environnement",
      ],
      answer: 2,
      explanation:
        "« $true » : Valeur booléenne vraie. Les autres choix renvoient à « $false », « Hashtable », « $env: » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question: "Quel concept correspond à cette description : « Valeur booléenne vraie » ?",
      choices: ["$false", "Hashtable", "$env:", "$true"],
      answer: 3,
      explanation:
        "« $true » : Valeur booléenne vraie. Les autres choix renvoient à « $false », « Hashtable », « $env: » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « $false » ?",
      choices: [
        "Valeur booléenne fausse",
        "Collection de valeurs accessible par indice",
        "Type qui représente un nombre entier",
        "Nom précédé de $ qui conserve une valeur pour la réutiliser",
      ],
      answer: 0,
      explanation:
        "« $false » : Valeur booléenne fausse. Les autres choix renvoient à « Tableau », « [int] », « Variable » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question: "Quel concept correspond à cette description : « Valeur booléenne fausse » ?",
      choices: ["Tableau", "$false", "[int]", "Variable"],
      answer: 1,
      explanation:
        "« $false » : Valeur booléenne fausse. Les autres choix renvoient à « Tableau », « [int] », « Variable » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Tableau » ?",
      choices: [
        "Collection de paires clé-valeur",
        "Type qui représente du texte",
        "Collection de valeurs accessible par indice",
        "Opération avec = qui donne une valeur à une variable",
      ],
      answer: 2,
      explanation:
        "« Tableau » : Collection de valeurs accessible par indice. Les autres choix renvoient à « Hashtable », « [string] », « Affectation » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Collection de valeurs accessible par indice » ?",
      choices: ["Hashtable", "[string]", "Affectation", "Tableau"],
      answer: 3,
      explanation:
        "« Tableau » : Collection de valeurs accessible par indice. Les autres choix renvoient à « Hashtable », « [string] », « Affectation » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Hashtable » ?",
      choices: [
        "Collection de paires clé-valeur",
        "Type qui représente un nombre entier",
        "Préfixe qui donne accès aux variables d'environnement",
        "Valeur qui représente l'absence d'objet",
      ],
      answer: 0,
      explanation:
        "« Hashtable » : Collection de paires clé-valeur. Les autres choix renvoient à « [int] », « $env: », « $null » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Tu dois mémoriser pour chaque agent son nom et son rôle sous forme de paires clé–valeur. Quelle structure convient ?",
      choices: ["[int]", "Hashtable", "$env:", "$null"],
      answer: 1,
      explanation:
        "« Hashtable » : Collection de paires clé-valeur. Les autres choix renvoient à « [int] », « $env: », « $null » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « [int] » ?",
      choices: [
        "Type qui représente du texte",
        "Nom précédé de $ qui conserve une valeur pour la réutiliser",
        "Type qui représente un nombre entier",
        "Valeur booléenne vraie",
      ],
      answer: 2,
      explanation:
        "« [int] » : Type qui représente un nombre entier. Les autres choix renvoient à « [string] », « Variable », « $true » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Type qui représente un nombre entier » ?",
      choices: ["[string]", "Variable", "$true", "[int]"],
      answer: 3,
      explanation:
        "« [int] » : Type qui représente un nombre entier. Les autres choix renvoient à « [string] », « Variable », « $true » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « [string] » ?",
      choices: [
        "Type qui représente du texte",
        "Préfixe qui donne accès aux variables d'environnement",
        "Opération avec = qui donne une valeur à une variable",
        "Valeur booléenne fausse",
      ],
      answer: 0,
      explanation:
        "« [string] » : Type qui représente du texte. Les autres choix renvoient à « $env: », « Affectation », « $false » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question: "Quel concept correspond à cette description : « Type qui représente du texte » ?",
      choices: ["$env:", "[string]", "Affectation", "$false"],
      answer: 1,
      explanation:
        "« [string] » : Type qui représente du texte. Les autres choix renvoient à « $env: », « Affectation », « $false » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « $env: » ?",
      choices: [
        "Nom précédé de $ qui conserve une valeur pour la réutiliser",
        "Valeur qui représente l'absence d'objet",
        "Préfixe qui donne accès aux variables d'environnement",
        "Collection de valeurs accessible par indice",
      ],
      answer: 2,
      explanation:
        "« $env: » : Préfixe qui donne accès aux variables d'environnement. Les autres choix renvoient à « Variable », « $null », « Tableau » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Un script doit lire un chemin défini dans les variables d’environnement du poste. Quel préfixe emploies-tu ?",
      choices: ["Variable", "$null", "Tableau", "$env:"],
      answer: 3,
      explanation:
        "« $env: » : Préfixe qui donne accès aux variables d'environnement. Les autres choix renvoient à « Variable », « $null », « Tableau » ; comparez leur rôle avant de continuer.",
    },
  ],
}
