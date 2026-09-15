window.powerShellQuizBank = {
  id: "06-historique",
  title: "Quiz — 06. Historique",
  chapter: "06. Historique",
  intro:
    "20 questions, dont deux situations concrètes, pour vérifier vos repères avant les travaux pratiques.",
  chapterLink: "../06-historique/",
  questions: [
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Get-History » ?",
      choices: [
        "Commande qui affiche l'historique des commandes de la session",
        "Commande qui réexécute une entrée de l'historique",
        "Touche qui rappelle une commande précédente",
        "Module qui enrichit l'édition de ligne et l'historique du terminal",
      ],
      answer: 0,
      explanation:
        "« Get-History » : Commande qui affiche l'historique des commandes de la session. Les autres choix renvoient à « Invoke-History », « Flèche Haut », « PSReadLine » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui affiche l'historique des commandes de la session » ?",
      choices: ["Invoke-History", "Get-History", "Flèche Haut", "PSReadLine"],
      answer: 1,
      explanation:
        "« Get-History » : Commande qui affiche l'historique des commandes de la session. Les autres choix renvoient à « Invoke-History », « Flèche Haut », « PSReadLine » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Invoke-History » ?",
      choices: [
        "Commande qui efface l'historique de la session",
        "Touche qui avance dans les commandes rappelées",
        "Commande qui réexécute une entrée de l'historique",
        "Numéro utilisé pour rappeler une commande précise",
      ],
      answer: 2,
      explanation:
        "« Invoke-History » : Commande qui réexécute une entrée de l'historique. Les autres choix renvoient à « Clear-History », « Flèche Bas », « Identifiant d'historique » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui réexécute une entrée de l'historique » ?",
      choices: ["Clear-History", "Flèche Bas", "Identifiant d'historique", "Invoke-History"],
      answer: 3,
      explanation:
        "« Invoke-History » : Commande qui réexécute une entrée de l'historique. Les autres choix renvoient à « Clear-History », « Flèche Bas », « Identifiant d'historique » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Clear-History » ?",
      choices: [
        "Commande qui efface l'historique de la session",
        "Touche qui rappelle une commande précédente",
        "Recherche interactive dans les commandes déjà saisies",
        "Action que l'historique évite de retaper intégralement",
      ],
      answer: 0,
      explanation:
        "« Clear-History » : Commande qui efface l'historique de la session. Les autres choix renvoient à « Flèche Haut », « Ctrl+R », « Commande répétitive » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui efface l'historique de la session » ?",
      choices: ["Flèche Haut", "Clear-History", "Ctrl+R", "Commande répétitive"],
      answer: 1,
      explanation:
        "« Clear-History » : Commande qui efface l'historique de la session. Les autres choix renvoient à « Flèche Haut », « Ctrl+R », « Commande répétitive » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Flèche Haut » ?",
      choices: [
        "Touche qui avance dans les commandes rappelées",
        "Module qui enrichit l'édition de ligne et l'historique du terminal",
        "Touche qui rappelle une commande précédente",
        "Secret qu'il vaut mieux ne pas saisir directement dans une commande historisée",
      ],
      answer: 2,
      explanation:
        "« Flèche Haut » : Touche qui rappelle une commande précédente. Les autres choix renvoient à « Flèche Bas », « PSReadLine », « Information sensible » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Touche qui rappelle une commande précédente » ?",
      choices: ["Flèche Bas", "PSReadLine", "Information sensible", "Flèche Haut"],
      answer: 3,
      explanation:
        "« Flèche Haut » : Touche qui rappelle une commande précédente. Les autres choix renvoient à « Flèche Bas », « PSReadLine », « Information sensible » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Flèche Bas » ?",
      choices: [
        "Touche qui avance dans les commandes rappelées",
        "Recherche interactive dans les commandes déjà saisies",
        "Numéro utilisé pour rappeler une commande précise",
        "Commande qui affiche l'historique des commandes de la session",
      ],
      answer: 0,
      explanation:
        "« Flèche Bas » : Touche qui avance dans les commandes rappelées. Les autres choix renvoient à « Ctrl+R », « Identifiant d'historique », « Get-History » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Touche qui avance dans les commandes rappelées » ?",
      choices: ["Ctrl+R", "Flèche Bas", "Identifiant d'historique", "Get-History"],
      answer: 1,
      explanation:
        "« Flèche Bas » : Touche qui avance dans les commandes rappelées. Les autres choix renvoient à « Ctrl+R », « Identifiant d'historique », « Get-History » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Ctrl+R » ?",
      choices: [
        "Module qui enrichit l'édition de ligne et l'historique du terminal",
        "Action que l'historique évite de retaper intégralement",
        "Recherche interactive dans les commandes déjà saisies",
        "Commande qui réexécute une entrée de l'historique",
      ],
      answer: 2,
      explanation:
        "« Ctrl+R » : Recherche interactive dans les commandes déjà saisies. Les autres choix renvoient à « PSReadLine », « Commande répétitive », « Invoke-History » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Tu as tapé une longue commande hier dans le même terminal et veux la retrouver par quelques caractères. Quel raccourci choisis-tu ?",
      choices: ["PSReadLine", "Commande répétitive", "Invoke-History", "Ctrl+R"],
      answer: 3,
      explanation:
        "« Ctrl+R » : Recherche interactive dans les commandes déjà saisies. Les autres choix renvoient à « PSReadLine », « Commande répétitive », « Invoke-History » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « PSReadLine » ?",
      choices: [
        "Module qui enrichit l'édition de ligne et l'historique du terminal",
        "Numéro utilisé pour rappeler une commande précise",
        "Secret qu'il vaut mieux ne pas saisir directement dans une commande historisée",
        "Commande qui efface l'historique de la session",
      ],
      answer: 0,
      explanation:
        "« PSReadLine » : Module qui enrichit l'édition de ligne et l'historique du terminal. Les autres choix renvoient à « Identifiant d'historique », « Information sensible », « Clear-History » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Module qui enrichit l'édition de ligne et l'historique du terminal » ?",
      choices: ["Identifiant d'historique", "PSReadLine", "Information sensible", "Clear-History"],
      answer: 1,
      explanation:
        "« PSReadLine » : Module qui enrichit l'édition de ligne et l'historique du terminal. Les autres choix renvoient à « Identifiant d'historique », « Information sensible », « Clear-History » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Identifiant d'historique » ?",
      choices: [
        "Action que l'historique évite de retaper intégralement",
        "Commande qui affiche l'historique des commandes de la session",
        "Numéro utilisé pour rappeler une commande précise",
        "Touche qui rappelle une commande précédente",
      ],
      answer: 2,
      explanation:
        "« Identifiant d'historique » : Numéro utilisé pour rappeler une commande précise. Les autres choix renvoient à « Commande répétitive », « Get-History », « Flèche Haut » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Numéro utilisé pour rappeler une commande précise » ?",
      choices: ["Commande répétitive", "Get-History", "Flèche Haut", "Identifiant d'historique"],
      answer: 3,
      explanation:
        "« Identifiant d'historique » : Numéro utilisé pour rappeler une commande précise. Les autres choix renvoient à « Commande répétitive », « Get-History », « Flèche Haut » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Commande répétitive » ?",
      choices: [
        "Action que l'historique évite de retaper intégralement",
        "Secret qu'il vaut mieux ne pas saisir directement dans une commande historisée",
        "Commande qui réexécute une entrée de l'historique",
        "Touche qui avance dans les commandes rappelées",
      ],
      answer: 0,
      explanation:
        "« Commande répétitive » : Action que l'historique évite de retaper intégralement. Les autres choix renvoient à « Information sensible », « Invoke-History », « Flèche Bas » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Action que l'historique évite de retaper intégralement » ?",
      choices: ["Information sensible", "Commande répétitive", "Invoke-History", "Flèche Bas"],
      answer: 1,
      explanation:
        "« Commande répétitive » : Action que l'historique évite de retaper intégralement. Les autres choix renvoient à « Information sensible », « Invoke-History », « Flèche Bas » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Information sensible » ?",
      choices: [
        "Commande qui affiche l'historique des commandes de la session",
        "Commande qui efface l'historique de la session",
        "Secret qu'il vaut mieux ne pas saisir directement dans une commande historisée",
        "Recherche interactive dans les commandes déjà saisies",
      ],
      answer: 2,
      explanation:
        "« Information sensible » : Secret qu'il vaut mieux ne pas saisir directement dans une commande historisée. Les autres choix renvoient à « Get-History », « Clear-History », « Ctrl+R » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Avant de rappeler une ancienne commande contenant un mot de passe, à quel risque dois-tu penser ?",
      choices: ["Get-History", "Clear-History", "Ctrl+R", "Information sensible"],
      answer: 3,
      explanation:
        "« Information sensible » : Secret qu'il vaut mieux ne pas saisir directement dans une commande historisée. Les autres choix renvoient à « Get-History », « Clear-History », « Ctrl+R » ; comparez leur rôle avant de continuer.",
    },
  ],
}
