window.powerShellQuizBank = {
  id: "14-classes-dotnet",
  title: "Quiz — 14. Les classes du framework .NET",
  chapter: "14. Les classes du framework .NET",
  intro:
    "20 questions, dont deux situations concrètes, pour vérifier vos repères avant les travaux pratiques.",
  chapterLink: "../14-classes-dotnet/",
  questions: [
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Classe .NET » ?",
      choices: [
        "Type dont les membres peuvent être utilisés directement depuis PowerShell",
        "Donnée portée par une instance d'objet",
        "Syntaxe qui accède à un membre statique sans créer d'instance",
        "Commande qui révèle les membres statiques d'une classe",
      ],
      answer: 0,
      explanation:
        "« Classe .NET » : Type dont les membres peuvent être utilisés directement depuis PowerShell. Les autres choix renvoient à « Propriété », « [Classe]::Membre », « Get-Member -Static » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Type dont les membres peuvent être utilisés directement depuis PowerShell » ?",
      choices: ["Propriété", "Classe .NET", "[Classe]::Membre", "Get-Member -Static"],
      answer: 1,
      explanation:
        "« Classe .NET » : Type dont les membres peuvent être utilisés directement depuis PowerShell. Les autres choix renvoient à « Propriété », « [Classe]::Membre », « Get-Member -Static » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Propriété » ?",
      choices: [
        "Action callable sur une classe ou un objet",
        "Syntaxe qui accède à un membre d'une instance existante",
        "Donnée portée par une instance d'objet",
        "Méthode d'arrondi de la classe Math",
      ],
      answer: 2,
      explanation:
        "« Propriété » : Donnée portée par une instance d'objet. Les autres choix renvoient à « Méthode », « $objet.Membre », « [math]::Round » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Donnée portée par une instance d'objet » ?",
      choices: ["Méthode", "$objet.Membre", "[math]::Round", "Propriété"],
      answer: 3,
      explanation:
        "« Propriété » : Donnée portée par une instance d'objet. Les autres choix renvoient à « Méthode », « $objet.Membre », « [math]::Round » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Méthode » ?",
      choices: [
        "Action callable sur une classe ou un objet",
        "Syntaxe qui accède à un membre statique sans créer d'instance",
        "Syntaxe moderne pour créer une instance d'une classe",
        "Appel statique qui fabrique un nouvel identifiant GUID",
      ],
      answer: 0,
      explanation:
        "« Méthode » : Action callable sur une classe ou un objet. Les autres choix renvoient à « [Classe]::Membre », « ::new() », « [guid]::NewGuid() » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Action callable sur une classe ou un objet » ?",
      choices: ["[Classe]::Membre", "Méthode", "::new()", "[guid]::NewGuid()"],
      answer: 1,
      explanation:
        "« Méthode » : Action callable sur une classe ou un objet. Les autres choix renvoient à « [Classe]::Membre », « ::new() », « [guid]::NewGuid() » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « [Classe]::Membre » ?",
      choices: [
        "Syntaxe qui accède à un membre d'une instance existante",
        "Commande qui révèle les membres statiques d'une classe",
        "Syntaxe qui accède à un membre statique sans créer d'instance",
        "Classe qui aide à manipuler des chemins et des extensions",
      ],
      answer: 2,
      explanation:
        "« [Classe]::Membre » : Syntaxe qui accède à un membre statique sans créer d'instance. Les autres choix renvoient à « $objet.Membre », « Get-Member -Static », « [System.IO.Path] » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Syntaxe qui accède à un membre statique sans créer d'instance » ?",
      choices: ["$objet.Membre", "Get-Member -Static", "[System.IO.Path]", "[Classe]::Membre"],
      answer: 3,
      explanation:
        "« [Classe]::Membre » : Syntaxe qui accède à un membre statique sans créer d'instance. Les autres choix renvoient à « $objet.Membre », « Get-Member -Static », « [System.IO.Path] » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « $objet.Membre » ?",
      choices: [
        "Syntaxe qui accède à un membre d'une instance existante",
        "Syntaxe moderne pour créer une instance d'une classe",
        "Méthode d'arrondi de la classe Math",
        "Type dont les membres peuvent être utilisés directement depuis PowerShell",
      ],
      answer: 0,
      explanation:
        "« $objet.Membre » : Syntaxe qui accède à un membre d'une instance existante. Les autres choix renvoient à « ::new() », « [math]::Round », « Classe .NET » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Syntaxe qui accède à un membre d'une instance existante » ?",
      choices: ["::new()", "$objet.Membre", "[math]::Round", "Classe .NET"],
      answer: 1,
      explanation:
        "« $objet.Membre » : Syntaxe qui accède à un membre d'une instance existante. Les autres choix renvoient à « ::new() », « [math]::Round », « Classe .NET » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « ::new() » ?",
      choices: [
        "Commande qui révèle les membres statiques d'une classe",
        "Appel statique qui fabrique un nouvel identifiant GUID",
        "Syntaxe moderne pour créer une instance d'une classe",
        "Donnée portée par une instance d'objet",
      ],
      answer: 2,
      explanation:
        "« ::new() » : Syntaxe moderne pour créer une instance d'une classe. Les autres choix renvoient à « Get-Member -Static », « [guid]::NewGuid() », « Propriété » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Syntaxe moderne pour créer une instance d'une classe » ?",
      choices: ["Get-Member -Static", "[guid]::NewGuid()", "Propriété", "::new()"],
      answer: 3,
      explanation:
        "« ::new() » : Syntaxe moderne pour créer une instance d'une classe. Les autres choix renvoient à « Get-Member -Static », « [guid]::NewGuid() », « Propriété » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Get-Member -Static » ?",
      choices: [
        "Commande qui révèle les membres statiques d'une classe",
        "Méthode d'arrondi de la classe Math",
        "Classe qui aide à manipuler des chemins et des extensions",
        "Action callable sur une classe ou un objet",
      ],
      answer: 0,
      explanation:
        "« Get-Member -Static » : Commande qui révèle les membres statiques d'une classe. Les autres choix renvoient à « [math]::Round », « [System.IO.Path] », « Méthode » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui révèle les membres statiques d'une classe » ?",
      choices: ["[math]::Round", "Get-Member -Static", "[System.IO.Path]", "Méthode"],
      answer: 1,
      explanation:
        "« Get-Member -Static » : Commande qui révèle les membres statiques d'une classe. Les autres choix renvoient à « [math]::Round », « [System.IO.Path] », « Méthode » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « [math]::Round » ?",
      choices: [
        "Appel statique qui fabrique un nouvel identifiant GUID",
        "Type dont les membres peuvent être utilisés directement depuis PowerShell",
        "Méthode d'arrondi de la classe Math",
        "Syntaxe qui accède à un membre statique sans créer d'instance",
      ],
      answer: 2,
      explanation:
        "« [math]::Round » : Méthode d'arrondi de la classe Math. Les autres choix renvoient à « [guid]::NewGuid() », « Classe .NET », « [Classe]::Membre » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Méthode d'arrondi de la classe Math » ?",
      choices: ["[guid]::NewGuid()", "Classe .NET", "[Classe]::Membre", "[math]::Round"],
      answer: 3,
      explanation:
        "« [math]::Round » : Méthode d'arrondi de la classe Math. Les autres choix renvoient à « [guid]::NewGuid() », « Classe .NET », « [Classe]::Membre » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « [guid]::NewGuid() » ?",
      choices: [
        "Appel statique qui fabrique un nouvel identifiant GUID",
        "Classe qui aide à manipuler des chemins et des extensions",
        "Donnée portée par une instance d'objet",
        "Syntaxe qui accède à un membre d'une instance existante",
      ],
      answer: 0,
      explanation:
        "« [guid]::NewGuid() » : Appel statique qui fabrique un nouvel identifiant GUID. Les autres choix renvoient à « [System.IO.Path] », « Propriété », « $objet.Membre » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Chaque dossier d’archive doit recevoir un identifiant unique. Quel appel .NET convient ?",
      choices: ["[System.IO.Path]", "[guid]::NewGuid()", "Propriété", "$objet.Membre"],
      answer: 1,
      explanation:
        "« [guid]::NewGuid() » : Appel statique qui fabrique un nouvel identifiant GUID. Les autres choix renvoient à « [System.IO.Path] », « Propriété », « $objet.Membre » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « [System.IO.Path] » ?",
      choices: [
        "Type dont les membres peuvent être utilisés directement depuis PowerShell",
        "Action callable sur une classe ou un objet",
        "Classe qui aide à manipuler des chemins et des extensions",
        "Syntaxe moderne pour créer une instance d'une classe",
      ],
      answer: 2,
      explanation:
        "« [System.IO.Path] » : Classe qui aide à manipuler des chemins et des extensions. Les autres choix renvoient à « Classe .NET », « Méthode », « ::new() » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Tu dois combiner des morceaux de chemin proprement plutôt que concaténer des séparateurs à la main. Quelle classe emploies-tu ?",
      choices: ["Classe .NET", "Méthode", "::new()", "[System.IO.Path]"],
      answer: 3,
      explanation:
        "« [System.IO.Path] » : Classe qui aide à manipuler des chemins et des extensions. Les autres choix renvoient à « Classe .NET », « Méthode », « ::new() » ; comparez leur rôle avant de continuer.",
    },
  ],
}
