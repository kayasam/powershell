window.powerShellQuizBank = {
  id: "24-rsat-et-gallery",
  title: "Quiz — 24. RSAT et PowerShell Gallery",
  chapter: "24. RSAT et PowerShell Gallery",
  intro:
    "20 questions, dont deux situations concrètes, pour vérifier vos repères avant les travaux pratiques.",
  chapterLink: "../24-rsat-et-gallery/",
  questions: [
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « RSAT » ?",
      choices: [
        "Ensemble d'outils d'administration à distance pour des rôles Windows",
        "Module qui fournit les cmdlets d'administration d'Active Directory",
        "Commande qui recherche un module disponible dans la Gallery",
        "Recherche des commandes fournies par un module donné",
      ],
      answer: 0,
      explanation:
        "« RSAT » : Ensemble d'outils d'administration à distance pour des rôles Windows. Les autres choix renvoient à « Module ActiveDirectory », « Find-Module », « Get-Command -Module » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Tu dois gérer Active Directory depuis un poste d’administration Windows sans te connecter directement au serveur. Quel prérequis installes-tu ?",
      choices: ["Module ActiveDirectory", "RSAT", "Find-Module", "Get-Command -Module"],
      answer: 1,
      explanation:
        "« RSAT » : Ensemble d'outils d'administration à distance pour des rôles Windows. Les autres choix renvoient à « Module ActiveDirectory », « Find-Module », « Get-Command -Module » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Module ActiveDirectory » ?",
      choices: [
        "Dépôt public de modules et scripts PowerShell",
        "Commande qui installe un module depuis un dépôt configuré",
        "Module qui fournit les cmdlets d'administration d'Active Directory",
        "Origine et éditeur à vérifier avant d'installer du code tiers",
      ],
      answer: 2,
      explanation:
        "« Module ActiveDirectory » : Module qui fournit les cmdlets d'administration d'Active Directory. Les autres choix renvoient à « PowerShell Gallery », « Install-Module », « Source de confiance » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Module qui fournit les cmdlets d'administration d'Active Directory » ?",
      choices: [
        "PowerShell Gallery",
        "Install-Module",
        "Source de confiance",
        "Module ActiveDirectory",
      ],
      answer: 3,
      explanation:
        "« Module ActiveDirectory » : Module qui fournit les cmdlets d'administration d'Active Directory. Les autres choix renvoient à « PowerShell Gallery », « Install-Module », « Source de confiance » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « PowerShell Gallery » ?",
      choices: [
        "Dépôt public de modules et scripts PowerShell",
        "Commande qui recherche un module disponible dans la Gallery",
        "Commande qui liste des modules installés via PowerShellGet",
        "Information à contrôler pour éviter un changement de comportement inattendu",
      ],
      answer: 0,
      explanation:
        "« PowerShell Gallery » : Dépôt public de modules et scripts PowerShell. Les autres choix renvoient à « Find-Module », « Get-InstalledModule », « Version » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Dépôt public de modules et scripts PowerShell » ?",
      choices: ["Find-Module", "PowerShell Gallery", "Get-InstalledModule", "Version"],
      answer: 1,
      explanation:
        "« PowerShell Gallery » : Dépôt public de modules et scripts PowerShell. Les autres choix renvoient à « Find-Module », « Get-InstalledModule », « Version » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Find-Module » ?",
      choices: [
        "Commande qui installe un module depuis un dépôt configuré",
        "Recherche des commandes fournies par un module donné",
        "Commande qui recherche un module disponible dans la Gallery",
        "Modules et fonctionnalités à installer avant d'utiliser certaines cmdlets d'administration",
      ],
      answer: 2,
      explanation:
        "« Find-Module » : Commande qui recherche un module disponible dans la Gallery. Les autres choix renvoient à « Install-Module », « Get-Command -Module », « Prérequis » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui recherche un module disponible dans la Gallery » ?",
      choices: ["Install-Module", "Get-Command -Module", "Prérequis", "Find-Module"],
      answer: 3,
      explanation:
        "« Find-Module » : Commande qui recherche un module disponible dans la Gallery. Les autres choix renvoient à « Install-Module », « Get-Command -Module », « Prérequis » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Install-Module » ?",
      choices: [
        "Commande qui installe un module depuis un dépôt configuré",
        "Commande qui liste des modules installés via PowerShellGet",
        "Origine et éditeur à vérifier avant d'installer du code tiers",
        "Ensemble d'outils d'administration à distance pour des rôles Windows",
      ],
      answer: 0,
      explanation:
        "« Install-Module » : Commande qui installe un module depuis un dépôt configuré. Les autres choix renvoient à « Get-InstalledModule », « Source de confiance », « RSAT » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui installe un module depuis un dépôt configuré » ?",
      choices: ["Get-InstalledModule", "Install-Module", "Source de confiance", "RSAT"],
      answer: 1,
      explanation:
        "« Install-Module » : Commande qui installe un module depuis un dépôt configuré. Les autres choix renvoient à « Get-InstalledModule », « Source de confiance », « RSAT » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Get-InstalledModule » ?",
      choices: [
        "Recherche des commandes fournies par un module donné",
        "Information à contrôler pour éviter un changement de comportement inattendu",
        "Commande qui liste des modules installés via PowerShellGet",
        "Module qui fournit les cmdlets d'administration d'Active Directory",
      ],
      answer: 2,
      explanation:
        "« Get-InstalledModule » : Commande qui liste des modules installés via PowerShellGet. Les autres choix renvoient à « Get-Command -Module », « Version », « Module ActiveDirectory » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui liste des modules installés via PowerShellGet » ?",
      choices: ["Get-Command -Module", "Version", "Module ActiveDirectory", "Get-InstalledModule"],
      answer: 3,
      explanation:
        "« Get-InstalledModule » : Commande qui liste des modules installés via PowerShellGet. Les autres choix renvoient à « Get-Command -Module », « Version », « Module ActiveDirectory » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Get-Command -Module » ?",
      choices: [
        "Recherche des commandes fournies par un module donné",
        "Origine et éditeur à vérifier avant d'installer du code tiers",
        "Modules et fonctionnalités à installer avant d'utiliser certaines cmdlets d'administration",
        "Dépôt public de modules et scripts PowerShell",
      ],
      answer: 0,
      explanation:
        "« Get-Command -Module » : Recherche des commandes fournies par un module donné. Les autres choix renvoient à « Source de confiance », « Prérequis », « PowerShell Gallery » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Un module vient d’être installé et tu veux voir exactement les commandes qu’il propose. Que lances-tu ?",
      choices: ["Source de confiance", "Get-Command -Module", "Prérequis", "PowerShell Gallery"],
      answer: 1,
      explanation:
        "« Get-Command -Module » : Recherche des commandes fournies par un module donné. Les autres choix renvoient à « Source de confiance », « Prérequis », « PowerShell Gallery » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Source de confiance » ?",
      choices: [
        "Information à contrôler pour éviter un changement de comportement inattendu",
        "Ensemble d'outils d'administration à distance pour des rôles Windows",
        "Origine et éditeur à vérifier avant d'installer du code tiers",
        "Commande qui recherche un module disponible dans la Gallery",
      ],
      answer: 2,
      explanation:
        "« Source de confiance » : Origine et éditeur à vérifier avant d'installer du code tiers. Les autres choix renvoient à « Version », « RSAT », « Find-Module » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Origine et éditeur à vérifier avant d'installer du code tiers » ?",
      choices: ["Version", "RSAT", "Find-Module", "Source de confiance"],
      answer: 3,
      explanation:
        "« Source de confiance » : Origine et éditeur à vérifier avant d'installer du code tiers. Les autres choix renvoient à « Version », « RSAT », « Find-Module » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Version » ?",
      choices: [
        "Information à contrôler pour éviter un changement de comportement inattendu",
        "Modules et fonctionnalités à installer avant d'utiliser certaines cmdlets d'administration",
        "Module qui fournit les cmdlets d'administration d'Active Directory",
        "Commande qui installe un module depuis un dépôt configuré",
      ],
      answer: 0,
      explanation:
        "« Version » : Information à contrôler pour éviter un changement de comportement inattendu. Les autres choix renvoient à « Prérequis », « Module ActiveDirectory », « Install-Module » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Information à contrôler pour éviter un changement de comportement inattendu » ?",
      choices: ["Prérequis", "Version", "Module ActiveDirectory", "Install-Module"],
      answer: 1,
      explanation:
        "« Version » : Information à contrôler pour éviter un changement de comportement inattendu. Les autres choix renvoient à « Prérequis », « Module ActiveDirectory », « Install-Module » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Prérequis » ?",
      choices: [
        "Ensemble d'outils d'administration à distance pour des rôles Windows",
        "Dépôt public de modules et scripts PowerShell",
        "Modules et fonctionnalités à installer avant d'utiliser certaines cmdlets d'administration",
        "Commande qui liste des modules installés via PowerShellGet",
      ],
      answer: 2,
      explanation:
        "« Prérequis » : Modules et fonctionnalités à installer avant d'utiliser certaines cmdlets d'administration. Les autres choix renvoient à « RSAT », « PowerShell Gallery », « Get-InstalledModule » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Modules et fonctionnalités à installer avant d'utiliser certaines cmdlets d'administration » ?",
      choices: ["RSAT", "PowerShell Gallery", "Get-InstalledModule", "Prérequis"],
      answer: 3,
      explanation:
        "« Prérequis » : Modules et fonctionnalités à installer avant d'utiliser certaines cmdlets d'administration. Les autres choix renvoient à « RSAT », « PowerShell Gallery », « Get-InstalledModule » ; comparez leur rôle avant de continuer.",
    },
  ],
}
