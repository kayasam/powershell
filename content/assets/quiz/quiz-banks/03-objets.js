window.powerShellQuizBank = {
  id: "03-objets",
  title: "Quiz — 03. Objets",
  chapter: "03. Objets",
  intro:
    "20 questions, dont deux situations concrètes, pour vérifier vos repères avant les travaux pratiques.",
  chapterLink: "../03-objets/",
  questions: [
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Objet » ?",
      choices: [
        "Valeur structurée qui transporte des propriétés et des méthodes",
        "Information lisible portée par un objet",
        "Commande qui révèle les propriétés et les méthodes d'un objet",
        "Propriété qui identifie un processus",
      ],
      answer: 0,
      explanation:
        "« Objet » : Valeur structurée qui transporte des propriétés et des méthodes. Les autres choix renvoient à « Propriété », « Get-Member », « Id » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Valeur structurée qui transporte des propriétés et des méthodes » ?",
      choices: ["Propriété", "Objet", "Get-Member", "Id"],
      answer: 1,
      explanation:
        "« Objet » : Valeur structurée qui transporte des propriétés et des méthodes. Les autres choix renvoient à « Propriété », « Get-Member », « Id » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Propriété » ?",
      choices: [
        "Action que l'on peut demander à un objet",
        "Commande dont chaque résultat est un objet processus",
        "Information lisible portée par un objet",
        "Commande qui choisit les propriétés à conserver",
      ],
      answer: 2,
      explanation:
        "« Propriété » : Information lisible portée par un objet. Les autres choix renvoient à « Méthode », « Get-Process », « Select-Object » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Information lisible portée par un objet » ?",
      choices: ["Méthode", "Get-Process", "Select-Object", "Propriété"],
      answer: 3,
      explanation:
        "« Propriété » : Information lisible portée par un objet. Les autres choix renvoient à « Méthode », « Get-Process », « Select-Object » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Méthode » ?",
      choices: [
        "Action que l'on peut demander à un objet",
        "Commande qui révèle les propriétés et les méthodes d'un objet",
        "Propriété courante qui donne le nom d'un processus ou d'un service",
        "Transmission de vrais objets entre commandes plutôt que de simples lignes de texte",
      ],
      answer: 0,
      explanation:
        "« Méthode » : Action que l'on peut demander à un objet. Les autres choix renvoient à « Get-Member », « Name », « Pipeline d'objets » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Action que l'on peut demander à un objet » ?",
      choices: ["Get-Member", "Méthode", "Name", "Pipeline d'objets"],
      answer: 1,
      explanation:
        "« Méthode » : Action que l'on peut demander à un objet. Les autres choix renvoient à « Get-Member », « Name », « Pipeline d'objets » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Get-Member » ?",
      choices: [
        "Commande dont chaque résultat est un objet processus",
        "Propriété qui identifie un processus",
        "Commande qui révèle les propriétés et les méthodes d'un objet",
        "Méthode qui révèle le type .NET d'une valeur",
      ],
      answer: 2,
      explanation:
        "« Get-Member » : Commande qui révèle les propriétés et les méthodes d'un objet. Les autres choix renvoient à « Get-Process », « Id », « GetType() » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Après Get-Process, tu veux découvrir les propriétés et méthodes des objets renvoyés. Quel outil utilises-tu ?",
      choices: ["Get-Process", "Id", "GetType()", "Get-Member"],
      answer: 3,
      explanation:
        "« Get-Member » : Commande qui révèle les propriétés et les méthodes d'un objet. Les autres choix renvoient à « Get-Process », « Id », « GetType() » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Get-Process » ?",
      choices: [
        "Commande dont chaque résultat est un objet processus",
        "Propriété courante qui donne le nom d'un processus ou d'un service",
        "Commande qui choisit les propriétés à conserver",
        "Valeur structurée qui transporte des propriétés et des méthodes",
      ],
      answer: 0,
      explanation:
        "« Get-Process » : Commande dont chaque résultat est un objet processus. Les autres choix renvoient à « Name », « Select-Object », « Objet » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande dont chaque résultat est un objet processus » ?",
      choices: ["Name", "Get-Process", "Select-Object", "Objet"],
      answer: 1,
      explanation:
        "« Get-Process » : Commande dont chaque résultat est un objet processus. Les autres choix renvoient à « Name », « Select-Object », « Objet » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Name » ?",
      choices: [
        "Propriété qui identifie un processus",
        "Transmission de vrais objets entre commandes plutôt que de simples lignes de texte",
        "Propriété courante qui donne le nom d'un processus ou d'un service",
        "Information lisible portée par un objet",
      ],
      answer: 2,
      explanation:
        "« Name » : Propriété courante qui donne le nom d'un processus ou d'un service. Les autres choix renvoient à « Id », « Pipeline d'objets », « Propriété » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Propriété courante qui donne le nom d'un processus ou d'un service » ?",
      choices: ["Id", "Pipeline d'objets", "Propriété", "Name"],
      answer: 3,
      explanation:
        "« Name » : Propriété courante qui donne le nom d'un processus ou d'un service. Les autres choix renvoient à « Id », « Pipeline d'objets », « Propriété » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Id » ?",
      choices: [
        "Propriété qui identifie un processus",
        "Commande qui choisit les propriétés à conserver",
        "Méthode qui révèle le type .NET d'une valeur",
        "Action que l'on peut demander à un objet",
      ],
      answer: 0,
      explanation:
        "« Id » : Propriété qui identifie un processus. Les autres choix renvoient à « Select-Object », « GetType() », « Méthode » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Propriété qui identifie un processus » ?",
      choices: ["Select-Object", "Id", "GetType()", "Méthode"],
      answer: 1,
      explanation:
        "« Id » : Propriété qui identifie un processus. Les autres choix renvoient à « Select-Object », « GetType() », « Méthode » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Select-Object » ?",
      choices: [
        "Transmission de vrais objets entre commandes plutôt que de simples lignes de texte",
        "Valeur structurée qui transporte des propriétés et des méthodes",
        "Commande qui choisit les propriétés à conserver",
        "Commande qui révèle les propriétés et les méthodes d'un objet",
      ],
      answer: 2,
      explanation:
        "« Select-Object » : Commande qui choisit les propriétés à conserver. Les autres choix renvoient à « Pipeline d'objets », « Objet », « Get-Member » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Un rapport ne doit afficher que Name et Id parmi toutes les propriétés d’un processus. Quelle cmdlet choisis-tu ?",
      choices: ["Pipeline d'objets", "Objet", "Get-Member", "Select-Object"],
      answer: 3,
      explanation:
        "« Select-Object » : Commande qui choisit les propriétés à conserver. Les autres choix renvoient à « Pipeline d'objets », « Objet », « Get-Member » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Pipeline d'objets » ?",
      choices: [
        "Transmission de vrais objets entre commandes plutôt que de simples lignes de texte",
        "Méthode qui révèle le type .NET d'une valeur",
        "Information lisible portée par un objet",
        "Commande dont chaque résultat est un objet processus",
      ],
      answer: 0,
      explanation:
        "« Pipeline d'objets » : Transmission de vrais objets entre commandes plutôt que de simples lignes de texte. Les autres choix renvoient à « GetType() », « Propriété », « Get-Process » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Transmission de vrais objets entre commandes plutôt que de simples lignes de texte » ?",
      choices: ["GetType()", "Pipeline d'objets", "Propriété", "Get-Process"],
      answer: 1,
      explanation:
        "« Pipeline d'objets » : Transmission de vrais objets entre commandes plutôt que de simples lignes de texte. Les autres choix renvoient à « GetType() », « Propriété », « Get-Process » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « GetType() » ?",
      choices: [
        "Valeur structurée qui transporte des propriétés et des méthodes",
        "Action que l'on peut demander à un objet",
        "Méthode qui révèle le type .NET d'une valeur",
        "Propriété courante qui donne le nom d'un processus ou d'un service",
      ],
      answer: 2,
      explanation:
        "« GetType() » : Méthode qui révèle le type .NET d'une valeur. Les autres choix renvoient à « Objet », « Méthode », « Name » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Méthode qui révèle le type .NET d'une valeur » ?",
      choices: ["Objet", "Méthode", "Name", "GetType()"],
      answer: 3,
      explanation:
        "« GetType() » : Méthode qui révèle le type .NET d'une valeur. Les autres choix renvoient à « Objet », « Méthode », « Name » ; comparez leur rôle avant de continuer.",
    },
  ],
}
