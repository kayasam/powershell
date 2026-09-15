window.powerShellQuizBank = {
  id: "02-cmdlets",
  title: "Quiz — 02. Cmdlets",
  chapter: "02. Cmdlets",
  intro:
    "20 questions, dont deux situations concrètes, pour vérifier vos repères avant les travaux pratiques.",
  chapterLink: "../02-cmdlets/",
  questions: [
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Cmdlet » ?",
      choices: [
        "Commande PowerShell nommée selon la convention Verbe-Nom",
        "Convention de nommage qui rend l'action et la ressource lisibles",
        "Commande qui explique la syntaxe, les paramètres et les exemples",
        "Commande qui obtient la date et l'heure",
      ],
      answer: 0,
      explanation:
        "« Cmdlet » : Commande PowerShell nommée selon la convention Verbe-Nom. Les autres choix renvoient à « Verbe-Nom », « Get-Help », « Get-Date » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande PowerShell nommée selon la convention Verbe-Nom » ?",
      choices: ["Verbe-Nom", "Cmdlet", "Get-Help", "Get-Date"],
      answer: 1,
      explanation:
        "« Cmdlet » : Commande PowerShell nommée selon la convention Verbe-Nom. Les autres choix renvoient à « Verbe-Nom », « Get-Help », « Get-Date » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Verbe-Nom » ?",
      choices: [
        "Commande qui recherche les cmdlets disponibles",
        "Commande qui affiche des services",
        "Convention de nommage qui rend l'action et la ressource lisibles",
        "Commande qui liste le contenu d'un emplacement",
      ],
      answer: 2,
      explanation:
        "« Verbe-Nom » : Convention de nommage qui rend l'action et la ressource lisibles. Les autres choix renvoient à « Get-Command », « Get-Service », « Get-ChildItem » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Convention de nommage qui rend l'action et la ressource lisibles » ?",
      choices: ["Get-Command", "Get-Service", "Get-ChildItem", "Verbe-Nom"],
      answer: 3,
      explanation:
        "« Verbe-Nom » : Convention de nommage qui rend l'action et la ressource lisibles. Les autres choix renvoient à « Get-Command », « Get-Service », « Get-ChildItem » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Get-Command » ?",
      choices: [
        "Commande qui recherche les cmdlets disponibles",
        "Commande qui explique la syntaxe, les paramètres et les exemples",
        "Commande qui affiche des processus",
        "Option nommée qui précise le comportement d'une cmdlet",
      ],
      answer: 0,
      explanation:
        "« Get-Command » : Commande qui recherche les cmdlets disponibles. Les autres choix renvoient à « Get-Help », « Get-Process », « Paramètre » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Tu ne connais pas le nom exact de la commande pour gérer les services. Par quoi commences-tu ta recherche ?",
      choices: ["Get-Help", "Get-Command", "Get-Process", "Paramètre"],
      answer: 1,
      explanation:
        "« Get-Command » : Commande qui recherche les cmdlets disponibles. Les autres choix renvoient à « Get-Help », « Get-Process », « Paramètre » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Get-Help » ?",
      choices: [
        "Commande qui affiche des services",
        "Commande qui obtient la date et l'heure",
        "Commande qui explique la syntaxe, les paramètres et les exemples",
        "Option de Get-Help qui affiche des exemples d'utilisation",
      ],
      answer: 2,
      explanation:
        "« Get-Help » : Commande qui explique la syntaxe, les paramètres et les exemples. Les autres choix renvoient à « Get-Service », « Get-Date », « -Examples » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Tu as trouvé une cmdlet, mais tu veux ses paramètres et des exemples fiables. Quelle commande utilises-tu ?",
      choices: ["Get-Service", "Get-Date", "-Examples", "Get-Help"],
      answer: 3,
      explanation:
        "« Get-Help » : Commande qui explique la syntaxe, les paramètres et les exemples. Les autres choix renvoient à « Get-Service », « Get-Date », « -Examples » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Get-Service » ?",
      choices: [
        "Commande qui affiche des services",
        "Commande qui affiche des processus",
        "Commande qui liste le contenu d'un emplacement",
        "Commande PowerShell nommée selon la convention Verbe-Nom",
      ],
      answer: 0,
      explanation:
        "« Get-Service » : Commande qui affiche des services. Les autres choix renvoient à « Get-Process », « Get-ChildItem », « Cmdlet » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui affiche des services » ?",
      choices: ["Get-Process", "Get-Service", "Get-ChildItem", "Cmdlet"],
      answer: 1,
      explanation:
        "« Get-Service » : Commande qui affiche des services. Les autres choix renvoient à « Get-Process », « Get-ChildItem », « Cmdlet » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Get-Process » ?",
      choices: [
        "Commande qui obtient la date et l'heure",
        "Option nommée qui précise le comportement d'une cmdlet",
        "Commande qui affiche des processus",
        "Convention de nommage qui rend l'action et la ressource lisibles",
      ],
      answer: 2,
      explanation:
        "« Get-Process » : Commande qui affiche des processus. Les autres choix renvoient à « Get-Date », « Paramètre », « Verbe-Nom » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui affiche des processus » ?",
      choices: ["Get-Date", "Paramètre", "Verbe-Nom", "Get-Process"],
      answer: 3,
      explanation:
        "« Get-Process » : Commande qui affiche des processus. Les autres choix renvoient à « Get-Date », « Paramètre », « Verbe-Nom » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Get-Date » ?",
      choices: [
        "Commande qui obtient la date et l'heure",
        "Commande qui liste le contenu d'un emplacement",
        "Option de Get-Help qui affiche des exemples d'utilisation",
        "Commande qui recherche les cmdlets disponibles",
      ],
      answer: 0,
      explanation:
        "« Get-Date » : Commande qui obtient la date et l'heure. Les autres choix renvoient à « Get-ChildItem », « -Examples », « Get-Command » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui obtient la date et l'heure » ?",
      choices: ["Get-ChildItem", "Get-Date", "-Examples", "Get-Command"],
      answer: 1,
      explanation:
        "« Get-Date » : Commande qui obtient la date et l'heure. Les autres choix renvoient à « Get-ChildItem », « -Examples », « Get-Command » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Get-ChildItem » ?",
      choices: [
        "Option nommée qui précise le comportement d'une cmdlet",
        "Commande PowerShell nommée selon la convention Verbe-Nom",
        "Commande qui liste le contenu d'un emplacement",
        "Commande qui explique la syntaxe, les paramètres et les exemples",
      ],
      answer: 2,
      explanation:
        "« Get-ChildItem » : Commande qui liste le contenu d'un emplacement. Les autres choix renvoient à « Paramètre », « Cmdlet », « Get-Help » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui liste le contenu d'un emplacement » ?",
      choices: ["Paramètre", "Cmdlet", "Get-Help", "Get-ChildItem"],
      answer: 3,
      explanation:
        "« Get-ChildItem » : Commande qui liste le contenu d'un emplacement. Les autres choix renvoient à « Paramètre », « Cmdlet », « Get-Help » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Paramètre » ?",
      choices: [
        "Option nommée qui précise le comportement d'une cmdlet",
        "Option de Get-Help qui affiche des exemples d'utilisation",
        "Convention de nommage qui rend l'action et la ressource lisibles",
        "Commande qui affiche des services",
      ],
      answer: 0,
      explanation:
        "« Paramètre » : Option nommée qui précise le comportement d'une cmdlet. Les autres choix renvoient à « -Examples », « Verbe-Nom », « Get-Service » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Option nommée qui précise le comportement d'une cmdlet » ?",
      choices: ["-Examples", "Paramètre", "Verbe-Nom", "Get-Service"],
      answer: 1,
      explanation:
        "« Paramètre » : Option nommée qui précise le comportement d'une cmdlet. Les autres choix renvoient à « -Examples », « Verbe-Nom », « Get-Service » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « -Examples » ?",
      choices: [
        "Commande PowerShell nommée selon la convention Verbe-Nom",
        "Commande qui recherche les cmdlets disponibles",
        "Option de Get-Help qui affiche des exemples d'utilisation",
        "Commande qui affiche des processus",
      ],
      answer: 2,
      explanation:
        "« -Examples » : Option de Get-Help qui affiche des exemples d'utilisation. Les autres choix renvoient à « Cmdlet », « Get-Command », « Get-Process » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Option de Get-Help qui affiche des exemples d'utilisation » ?",
      choices: ["Cmdlet", "Get-Command", "Get-Process", "-Examples"],
      answer: 3,
      explanation:
        "« -Examples » : Option de Get-Help qui affiche des exemples d'utilisation. Les autres choix renvoient à « Cmdlet », « Get-Command », « Get-Process » ; comparez leur rôle avant de continuer.",
    },
  ],
}
