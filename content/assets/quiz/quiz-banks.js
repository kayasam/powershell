window.powerShellQuizBanks = {
  "01-installation-et-environnement": {
    id: "01-installation-et-environnement",
    title: "Quiz — 01. Installation et environnement",
    chapter: "01. Installation et environnement",
    intro: "20 questions pour vérifier vos repères avant de passer aux exercices pratiques.",
    chapterLink: "../01-installation-et-environnement/",
    questions: [
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « PowerShell 7 » ?",
        choices: [
          "Version moderne et multiplateforme à privilégier pour un nouveau projet",
          "Version historique intégrée à Windows et encore utilisée pour certaines tâches héritées",
          "Commande qui démarre une session PowerShell 7",
          "Réglage qui contrôle le lancement des scripts sans remplacer une véritable frontière de sécurité",
        ],
        answer: 0,
        explanation:
          "« PowerShell 7 » : Version moderne et multiplateforme à privilégier pour un nouveau projet. Les autres choix renvoient à « Windows PowerShell 5.1 », « pwsh », « Politique d'exécution » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Version moderne et multiplateforme à privilégier pour un nouveau projet » ?",
        choices: ["Windows PowerShell 5.1", "PowerShell 7", "pwsh", "Politique d'exécution"],
        answer: 1,
        explanation:
          "« PowerShell 7 » : Version moderne et multiplateforme à privilégier pour un nouveau projet. Les autres choix renvoient à « Windows PowerShell 5.1 », « pwsh », « Politique d'exécution » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Windows PowerShell 5.1 » ?",
        choices: [
          "Variable qui affiche notamment la version et l'édition de PowerShell",
          "Cmdlet qui permet de découvrir les commandes disponibles",
          "Version historique intégrée à Windows et encore utilisée pour certaines tâches héritées",
          "Politique qui demande une signature pour les scripts téléchargés tout en autorisant les scripts locaux",
        ],
        answer: 2,
        explanation:
          "« Windows PowerShell 5.1 » : Version historique intégrée à Windows et encore utilisée pour certaines tâches héritées. Les autres choix renvoient à « $PSVersionTable », « Get-Command », « RemoteSigned » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Version historique intégrée à Windows et encore utilisée pour certaines tâches héritées » ?",
        choices: ["$PSVersionTable", "Get-Command", "RemoteSigned", "Windows PowerShell 5.1"],
        answer: 3,
        explanation:
          "« Windows PowerShell 5.1 » : Version historique intégrée à Windows et encore utilisée pour certaines tâches héritées. Les autres choix renvoient à « $PSVersionTable », « Get-Command », « RemoteSigned » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « $PSVersionTable » ?",
        choices: [
          "Variable qui affiche notamment la version et l'édition de PowerShell",
          "Commande qui démarre une session PowerShell 7",
          "Cmdlet qui affiche l'aide et les exemples d'une commande",
          "Éditeur dans lequel on peut écrire et déboguer des scripts PowerShell",
        ],
        answer: 0,
        explanation:
          "« $PSVersionTable » : Variable qui affiche notamment la version et l'édition de PowerShell. Les autres choix renvoient à « pwsh », « Get-Help », « VS Code » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Variable qui affiche notamment la version et l'édition de PowerShell » ?",
        choices: ["pwsh", "$PSVersionTable", "Get-Help", "VS Code"],
        answer: 1,
        explanation:
          "« $PSVersionTable » : Variable qui affiche notamment la version et l'édition de PowerShell. Les autres choix renvoient à « pwsh », « Get-Help », « VS Code » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « pwsh » ?",
        choices: [
          "Cmdlet qui permet de découvrir les commandes disponibles",
          "Réglage qui contrôle le lancement des scripts sans remplacer une véritable frontière de sécurité",
          "Commande qui démarre une session PowerShell 7",
          "Interface dans laquelle on saisit puis exécute les commandes",
        ],
        answer: 2,
        explanation:
          "« pwsh » : Commande qui démarre une session PowerShell 7. Les autres choix renvoient à « Get-Command », « Politique d'exécution », « Terminal » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui démarre une session PowerShell 7 » ?",
        choices: ["Get-Command", "Politique d'exécution", "Terminal", "pwsh"],
        answer: 3,
        explanation:
          "« pwsh » : Commande qui démarre une session PowerShell 7. Les autres choix renvoient à « Get-Command », « Politique d'exécution », « Terminal » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Get-Command » ?",
        choices: [
          "Cmdlet qui permet de découvrir les commandes disponibles",
          "Cmdlet qui affiche l'aide et les exemples d'une commande",
          "Politique qui demande une signature pour les scripts téléchargés tout en autorisant les scripts locaux",
          "Version moderne et multiplateforme à privilégier pour un nouveau projet",
        ],
        answer: 0,
        explanation:
          "« Get-Command » : Cmdlet qui permet de découvrir les commandes disponibles. Les autres choix renvoient à « Get-Help », « RemoteSigned », « PowerShell 7 » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Cmdlet qui permet de découvrir les commandes disponibles » ?",
        choices: ["Get-Help", "Get-Command", "RemoteSigned", "PowerShell 7"],
        answer: 1,
        explanation:
          "« Get-Command » : Cmdlet qui permet de découvrir les commandes disponibles. Les autres choix renvoient à « Get-Help », « RemoteSigned », « PowerShell 7 » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Get-Help » ?",
        choices: [
          "Réglage qui contrôle le lancement des scripts sans remplacer une véritable frontière de sécurité",
          "Éditeur dans lequel on peut écrire et déboguer des scripts PowerShell",
          "Cmdlet qui affiche l'aide et les exemples d'une commande",
          "Version historique intégrée à Windows et encore utilisée pour certaines tâches héritées",
        ],
        answer: 2,
        explanation:
          "« Get-Help » : Cmdlet qui affiche l'aide et les exemples d'une commande. Les autres choix renvoient à « Politique d'exécution », « VS Code », « Windows PowerShell 5.1 » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Cmdlet qui affiche l'aide et les exemples d'une commande » ?",
        choices: ["Politique d'exécution", "VS Code", "Windows PowerShell 5.1", "Get-Help"],
        answer: 3,
        explanation:
          "« Get-Help » : Cmdlet qui affiche l'aide et les exemples d'une commande. Les autres choix renvoient à « Politique d'exécution », « VS Code », « Windows PowerShell 5.1 » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Politique d'exécution » ?",
        choices: [
          "Réglage qui contrôle le lancement des scripts sans remplacer une véritable frontière de sécurité",
          "Politique qui demande une signature pour les scripts téléchargés tout en autorisant les scripts locaux",
          "Interface dans laquelle on saisit puis exécute les commandes",
          "Variable qui affiche notamment la version et l'édition de PowerShell",
        ],
        answer: 0,
        explanation:
          "« Politique d'exécution » : Réglage qui contrôle le lancement des scripts sans remplacer une véritable frontière de sécurité. Les autres choix renvoient à « RemoteSigned », « Terminal », « $PSVersionTable » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Réglage qui contrôle le lancement des scripts sans remplacer une véritable frontière de sécurité » ?",
        choices: ["RemoteSigned", "Politique d'exécution", "Terminal", "$PSVersionTable"],
        answer: 1,
        explanation:
          "« Politique d'exécution » : Réglage qui contrôle le lancement des scripts sans remplacer une véritable frontière de sécurité. Les autres choix renvoient à « RemoteSigned », « Terminal », « $PSVersionTable » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « RemoteSigned » ?",
        choices: [
          "Éditeur dans lequel on peut écrire et déboguer des scripts PowerShell",
          "Version moderne et multiplateforme à privilégier pour un nouveau projet",
          "Politique qui demande une signature pour les scripts téléchargés tout en autorisant les scripts locaux",
          "Commande qui démarre une session PowerShell 7",
        ],
        answer: 2,
        explanation:
          "« RemoteSigned » : Politique qui demande une signature pour les scripts téléchargés tout en autorisant les scripts locaux. Les autres choix renvoient à « VS Code », « PowerShell 7 », « pwsh » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Politique qui demande une signature pour les scripts téléchargés tout en autorisant les scripts locaux » ?",
        choices: ["VS Code", "PowerShell 7", "pwsh", "RemoteSigned"],
        answer: 3,
        explanation:
          "« RemoteSigned » : Politique qui demande une signature pour les scripts téléchargés tout en autorisant les scripts locaux. Les autres choix renvoient à « VS Code », « PowerShell 7 », « pwsh » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « VS Code » ?",
        choices: [
          "Éditeur dans lequel on peut écrire et déboguer des scripts PowerShell",
          "Interface dans laquelle on saisit puis exécute les commandes",
          "Version historique intégrée à Windows et encore utilisée pour certaines tâches héritées",
          "Cmdlet qui permet de découvrir les commandes disponibles",
        ],
        answer: 0,
        explanation:
          "« VS Code » : Éditeur dans lequel on peut écrire et déboguer des scripts PowerShell. Les autres choix renvoient à « Terminal », « Windows PowerShell 5.1 », « Get-Command » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Éditeur dans lequel on peut écrire et déboguer des scripts PowerShell » ?",
        choices: ["Terminal", "VS Code", "Windows PowerShell 5.1", "Get-Command"],
        answer: 1,
        explanation:
          "« VS Code » : Éditeur dans lequel on peut écrire et déboguer des scripts PowerShell. Les autres choix renvoient à « Terminal », « Windows PowerShell 5.1 », « Get-Command » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Terminal » ?",
        choices: [
          "Version moderne et multiplateforme à privilégier pour un nouveau projet",
          "Variable qui affiche notamment la version et l'édition de PowerShell",
          "Interface dans laquelle on saisit puis exécute les commandes",
          "Cmdlet qui affiche l'aide et les exemples d'une commande",
        ],
        answer: 2,
        explanation:
          "« Terminal » : Interface dans laquelle on saisit puis exécute les commandes. Les autres choix renvoient à « PowerShell 7 », « $PSVersionTable », « Get-Help » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Interface dans laquelle on saisit puis exécute les commandes » ?",
        choices: ["PowerShell 7", "$PSVersionTable", "Get-Help", "Terminal"],
        answer: 3,
        explanation:
          "« Terminal » : Interface dans laquelle on saisit puis exécute les commandes. Les autres choix renvoient à « PowerShell 7 », « $PSVersionTable », « Get-Help » ; comparez leur rôle avant de continuer.",
      },
    ],
  },
  "02-cmdlets": {
    id: "02-cmdlets",
    title: "Quiz — 02. Cmdlets",
    chapter: "02. Cmdlets",
    intro: "20 questions pour vérifier vos repères avant de passer aux exercices pratiques.",
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
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui recherche les cmdlets disponibles » ?",
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
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui explique la syntaxe, les paramètres et les exemples » ?",
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
  },
  "03-objets": {
    id: "03-objets",
    title: "Quiz — 03. Objets",
    chapter: "03. Objets",
    intro: "20 questions pour vérifier vos repères avant de passer aux exercices pratiques.",
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
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui révèle les propriétés et les méthodes d'un objet » ?",
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
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui choisit les propriétés à conserver » ?",
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
  },
  "04-completion": {
    id: "04-completion",
    title: "Quiz — 04. Complétion",
    chapter: "04. Complétion",
    intro: "20 questions pour vérifier vos repères avant de passer aux exercices pratiques.",
    chapterLink: "../04-completion/",
    questions: [
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Tab » ?",
        choices: [
          "Touche qui complète une commande ou un paramètre à partir du contexte",
          "Combinaison qui parcourt les propositions de complétion dans l'autre sens",
          "Aide qui propose les options compatibles avec la commande saisie",
          "Commande utile pour découvrir un nom quand la complétion ne suffit pas",
        ],
        answer: 0,
        explanation:
          "« Tab » : Touche qui complète une commande ou un paramètre à partir du contexte. Les autres choix renvoient à « Shift+Tab », « Complétion des paramètres », « Get-Command » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Touche qui complète une commande ou un paramètre à partir du contexte » ?",
        choices: ["Shift+Tab", "Tab", "Complétion des paramètres", "Get-Command"],
        answer: 1,
        explanation:
          "« Tab » : Touche qui complète une commande ou un paramètre à partir du contexte. Les autres choix renvoient à « Shift+Tab », « Complétion des paramètres », « Get-Command » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Shift+Tab » ?",
        choices: [
          "Aide qui termine le nom d'une commande commencée",
          "Aide qui termine des noms de dossiers ou de fichiers existants",
          "Combinaison qui parcourt les propositions de complétion dans l'autre sens",
          "Commande qui confirme le sens d'un paramètre proposé par la complétion",
        ],
        answer: 2,
        explanation:
          "« Shift+Tab » : Combinaison qui parcourt les propositions de complétion dans l'autre sens. Les autres choix renvoient à « Complétion des cmdlets », « Complétion des chemins », « Get-Help » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Combinaison qui parcourt les propositions de complétion dans l'autre sens » ?",
        choices: ["Complétion des cmdlets", "Complétion des chemins", "Get-Help", "Shift+Tab"],
        answer: 3,
        explanation:
          "« Shift+Tab » : Combinaison qui parcourt les propositions de complétion dans l'autre sens. Les autres choix renvoient à « Complétion des cmdlets », « Complétion des chemins », « Get-Help » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Complétion des cmdlets » ?",
        choices: [
          "Aide qui termine le nom d'une commande commencée",
          "Aide qui propose les options compatibles avec la commande saisie",
          "Aide qui propose les membres accessibles sur un objet",
          "Liste des commandes déjà exécutées, différente de la complétion",
        ],
        answer: 0,
        explanation:
          "« Complétion des cmdlets » : Aide qui termine le nom d'une commande commencée. Les autres choix renvoient à « Complétion des paramètres », « Complétion des propriétés », « Historique » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Aide qui termine le nom d'une commande commencée » ?",
        choices: [
          "Complétion des paramètres",
          "Complétion des cmdlets",
          "Complétion des propriétés",
          "Historique",
        ],
        answer: 1,
        explanation:
          "« Complétion des cmdlets » : Aide qui termine le nom d'une commande commencée. Les autres choix renvoient à « Complétion des paramètres », « Complétion des propriétés », « Historique » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Complétion des paramètres » ?",
        choices: [
          "Aide qui termine des noms de dossiers ou de fichiers existants",
          "Commande utile pour découvrir un nom quand la complétion ne suffit pas",
          "Aide qui propose les options compatibles avec la commande saisie",
          "Avantage de la complétion qui évite de ressaisir les noms longs",
        ],
        answer: 2,
        explanation:
          "« Complétion des paramètres » : Aide qui propose les options compatibles avec la commande saisie. Les autres choix renvoient à « Complétion des chemins », « Get-Command », « Réduction des fautes de frappe » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Aide qui propose les options compatibles avec la commande saisie » ?",
        choices: [
          "Complétion des chemins",
          "Get-Command",
          "Réduction des fautes de frappe",
          "Complétion des paramètres",
        ],
        answer: 3,
        explanation:
          "« Complétion des paramètres » : Aide qui propose les options compatibles avec la commande saisie. Les autres choix renvoient à « Complétion des chemins », « Get-Command », « Réduction des fautes de frappe » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Complétion des chemins » ?",
        choices: [
          "Aide qui termine des noms de dossiers ou de fichiers existants",
          "Aide qui propose les membres accessibles sur un objet",
          "Commande qui confirme le sens d'un paramètre proposé par la complétion",
          "Touche qui complète une commande ou un paramètre à partir du contexte",
        ],
        answer: 0,
        explanation:
          "« Complétion des chemins » : Aide qui termine des noms de dossiers ou de fichiers existants. Les autres choix renvoient à « Complétion des propriétés », « Get-Help », « Tab » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Aide qui termine des noms de dossiers ou de fichiers existants » ?",
        choices: ["Complétion des propriétés", "Complétion des chemins", "Get-Help", "Tab"],
        answer: 1,
        explanation:
          "« Complétion des chemins » : Aide qui termine des noms de dossiers ou de fichiers existants. Les autres choix renvoient à « Complétion des propriétés », « Get-Help », « Tab » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Complétion des propriétés » ?",
        choices: [
          "Commande utile pour découvrir un nom quand la complétion ne suffit pas",
          "Liste des commandes déjà exécutées, différente de la complétion",
          "Aide qui propose les membres accessibles sur un objet",
          "Combinaison qui parcourt les propositions de complétion dans l'autre sens",
        ],
        answer: 2,
        explanation:
          "« Complétion des propriétés » : Aide qui propose les membres accessibles sur un objet. Les autres choix renvoient à « Get-Command », « Historique », « Shift+Tab » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Aide qui propose les membres accessibles sur un objet » ?",
        choices: ["Get-Command", "Historique", "Shift+Tab", "Complétion des propriétés"],
        answer: 3,
        explanation:
          "« Complétion des propriétés » : Aide qui propose les membres accessibles sur un objet. Les autres choix renvoient à « Get-Command », « Historique », « Shift+Tab » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Get-Command » ?",
        choices: [
          "Commande utile pour découvrir un nom quand la complétion ne suffit pas",
          "Commande qui confirme le sens d'un paramètre proposé par la complétion",
          "Avantage de la complétion qui évite de ressaisir les noms longs",
          "Aide qui termine le nom d'une commande commencée",
        ],
        answer: 0,
        explanation:
          "« Get-Command » : Commande utile pour découvrir un nom quand la complétion ne suffit pas. Les autres choix renvoient à « Get-Help », « Réduction des fautes de frappe », « Complétion des cmdlets » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande utile pour découvrir un nom quand la complétion ne suffit pas » ?",
        choices: [
          "Get-Help",
          "Get-Command",
          "Réduction des fautes de frappe",
          "Complétion des cmdlets",
        ],
        answer: 1,
        explanation:
          "« Get-Command » : Commande utile pour découvrir un nom quand la complétion ne suffit pas. Les autres choix renvoient à « Get-Help », « Réduction des fautes de frappe », « Complétion des cmdlets » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Get-Help » ?",
        choices: [
          "Liste des commandes déjà exécutées, différente de la complétion",
          "Touche qui complète une commande ou un paramètre à partir du contexte",
          "Commande qui confirme le sens d'un paramètre proposé par la complétion",
          "Aide qui propose les options compatibles avec la commande saisie",
        ],
        answer: 2,
        explanation:
          "« Get-Help » : Commande qui confirme le sens d'un paramètre proposé par la complétion. Les autres choix renvoient à « Historique », « Tab », « Complétion des paramètres » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui confirme le sens d'un paramètre proposé par la complétion » ?",
        choices: ["Historique", "Tab", "Complétion des paramètres", "Get-Help"],
        answer: 3,
        explanation:
          "« Get-Help » : Commande qui confirme le sens d'un paramètre proposé par la complétion. Les autres choix renvoient à « Historique », « Tab », « Complétion des paramètres » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Historique » ?",
        choices: [
          "Liste des commandes déjà exécutées, différente de la complétion",
          "Avantage de la complétion qui évite de ressaisir les noms longs",
          "Combinaison qui parcourt les propositions de complétion dans l'autre sens",
          "Aide qui termine des noms de dossiers ou de fichiers existants",
        ],
        answer: 0,
        explanation:
          "« Historique » : Liste des commandes déjà exécutées, différente de la complétion. Les autres choix renvoient à « Réduction des fautes de frappe », « Shift+Tab », « Complétion des chemins » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Liste des commandes déjà exécutées, différente de la complétion » ?",
        choices: [
          "Réduction des fautes de frappe",
          "Historique",
          "Shift+Tab",
          "Complétion des chemins",
        ],
        answer: 1,
        explanation:
          "« Historique » : Liste des commandes déjà exécutées, différente de la complétion. Les autres choix renvoient à « Réduction des fautes de frappe », « Shift+Tab », « Complétion des chemins » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Réduction des fautes de frappe » ?",
        choices: [
          "Touche qui complète une commande ou un paramètre à partir du contexte",
          "Aide qui termine le nom d'une commande commencée",
          "Avantage de la complétion qui évite de ressaisir les noms longs",
          "Aide qui propose les membres accessibles sur un objet",
        ],
        answer: 2,
        explanation:
          "« Réduction des fautes de frappe » : Avantage de la complétion qui évite de ressaisir les noms longs. Les autres choix renvoient à « Tab », « Complétion des cmdlets », « Complétion des propriétés » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Avantage de la complétion qui évite de ressaisir les noms longs » ?",
        choices: [
          "Tab",
          "Complétion des cmdlets",
          "Complétion des propriétés",
          "Réduction des fautes de frappe",
        ],
        answer: 3,
        explanation:
          "« Réduction des fautes de frappe » : Avantage de la complétion qui évite de ressaisir les noms longs. Les autres choix renvoient à « Tab », « Complétion des cmdlets », « Complétion des propriétés » ; comparez leur rôle avant de continuer.",
      },
    ],
  },
  "05-alias": {
    id: "05-alias",
    title: "Quiz — 05. Alias",
    chapter: "05. Alias",
    intro: "20 questions pour vérifier vos repères avant de passer aux exercices pratiques.",
    chapterLink: "../05-alias/",
    questions: [
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Alias » ?",
        choices: [
          "Nom court qui pointe vers une commande existante",
          "Commande qui liste ou recherche les alias",
          "Alias courant de Get-ChildItem",
          "Alias courant de Get-ChildItem dans PowerShell",
        ],
        answer: 0,
        explanation:
          "« Alias » : Nom court qui pointe vers une commande existante. Les autres choix renvoient à « Get-Alias », « gci », « ls » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Nom court qui pointe vers une commande existante » ?",
        choices: ["Get-Alias", "Alias", "gci", "ls"],
        answer: 1,
        explanation:
          "« Alias » : Nom court qui pointe vers une commande existante. Les autres choix renvoient à « Get-Alias », « gci », « ls » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Get-Alias » ?",
        choices: [
          "Commande qui crée un alias pour la session",
          "Alias courant de Get-Process",
          "Commande qui liste ou recherche les alias",
          "Script qui préfère les noms complets des cmdlets aux alias ambigus",
        ],
        answer: 2,
        explanation:
          "« Get-Alias » : Commande qui liste ou recherche les alias. Les autres choix renvoient à « Set-Alias », « gps », « Script lisible » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui liste ou recherche les alias » ?",
        choices: ["Set-Alias", "gps", "Script lisible", "Get-Alias"],
        answer: 3,
        explanation:
          "« Get-Alias » : Commande qui liste ou recherche les alias. Les autres choix renvoient à « Set-Alias », « gps », « Script lisible » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Set-Alias » ?",
        choices: [
          "Commande qui crée un alias pour la session",
          "Alias courant de Get-ChildItem",
          "Alias courant de Set-Location",
          "Fichier dans lequel on peut recréer ses alias à chaque nouvelle session",
        ],
        answer: 0,
        explanation:
          "« Set-Alias » : Commande qui crée un alias pour la session. Les autres choix renvoient à « gci », « cd », « Profil PowerShell » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui crée un alias pour la session » ?",
        choices: ["gci", "Set-Alias", "cd", "Profil PowerShell"],
        answer: 1,
        explanation:
          "« Set-Alias » : Commande qui crée un alias pour la session. Les autres choix renvoient à « gci », « cd », « Profil PowerShell » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « gci » ?",
        choices: [
          "Alias courant de Get-Process",
          "Alias courant de Get-ChildItem dans PowerShell",
          "Alias courant de Get-ChildItem",
          "Période qui se termine quand la session PowerShell se ferme",
        ],
        answer: 2,
        explanation:
          "« gci » : Alias courant de Get-ChildItem. Les autres choix renvoient à « gps », « ls », « Durée d'un alias de session » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Alias courant de Get-ChildItem » ?",
        choices: ["gps", "ls", "Durée d'un alias de session", "gci"],
        answer: 3,
        explanation:
          "« gci » : Alias courant de Get-ChildItem. Les autres choix renvoient à « gps », « ls », « Durée d'un alias de session » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « gps » ?",
        choices: [
          "Alias courant de Get-Process",
          "Alias courant de Set-Location",
          "Script qui préfère les noms complets des cmdlets aux alias ambigus",
          "Nom court qui pointe vers une commande existante",
        ],
        answer: 0,
        explanation:
          "« gps » : Alias courant de Get-Process. Les autres choix renvoient à « cd », « Script lisible », « Alias » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Alias courant de Get-Process » ?",
        choices: ["cd", "gps", "Script lisible", "Alias"],
        answer: 1,
        explanation:
          "« gps » : Alias courant de Get-Process. Les autres choix renvoient à « cd », « Script lisible », « Alias » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « cd » ?",
        choices: [
          "Alias courant de Get-ChildItem dans PowerShell",
          "Fichier dans lequel on peut recréer ses alias à chaque nouvelle session",
          "Alias courant de Set-Location",
          "Commande qui liste ou recherche les alias",
        ],
        answer: 2,
        explanation:
          "« cd » : Alias courant de Set-Location. Les autres choix renvoient à « ls », « Profil PowerShell », « Get-Alias » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Alias courant de Set-Location » ?",
        choices: ["ls", "Profil PowerShell", "Get-Alias", "cd"],
        answer: 3,
        explanation:
          "« cd » : Alias courant de Set-Location. Les autres choix renvoient à « ls », « Profil PowerShell », « Get-Alias » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « ls » ?",
        choices: [
          "Alias courant de Get-ChildItem dans PowerShell",
          "Script qui préfère les noms complets des cmdlets aux alias ambigus",
          "Période qui se termine quand la session PowerShell se ferme",
          "Commande qui crée un alias pour la session",
        ],
        answer: 0,
        explanation:
          "« ls » : Alias courant de Get-ChildItem dans PowerShell. Les autres choix renvoient à « Script lisible », « Durée d'un alias de session », « Set-Alias » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Alias courant de Get-ChildItem dans PowerShell » ?",
        choices: ["Script lisible", "ls", "Durée d'un alias de session", "Set-Alias"],
        answer: 1,
        explanation:
          "« ls » : Alias courant de Get-ChildItem dans PowerShell. Les autres choix renvoient à « Script lisible », « Durée d'un alias de session », « Set-Alias » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Script lisible » ?",
        choices: [
          "Fichier dans lequel on peut recréer ses alias à chaque nouvelle session",
          "Nom court qui pointe vers une commande existante",
          "Script qui préfère les noms complets des cmdlets aux alias ambigus",
          "Alias courant de Get-ChildItem",
        ],
        answer: 2,
        explanation:
          "« Script lisible » : Script qui préfère les noms complets des cmdlets aux alias ambigus. Les autres choix renvoient à « Profil PowerShell », « Alias », « gci » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Script qui préfère les noms complets des cmdlets aux alias ambigus » ?",
        choices: ["Profil PowerShell", "Alias", "gci", "Script lisible"],
        answer: 3,
        explanation:
          "« Script lisible » : Script qui préfère les noms complets des cmdlets aux alias ambigus. Les autres choix renvoient à « Profil PowerShell », « Alias », « gci » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Profil PowerShell » ?",
        choices: [
          "Fichier dans lequel on peut recréer ses alias à chaque nouvelle session",
          "Période qui se termine quand la session PowerShell se ferme",
          "Commande qui liste ou recherche les alias",
          "Alias courant de Get-Process",
        ],
        answer: 0,
        explanation:
          "« Profil PowerShell » : Fichier dans lequel on peut recréer ses alias à chaque nouvelle session. Les autres choix renvoient à « Durée d'un alias de session », « Get-Alias », « gps » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Fichier dans lequel on peut recréer ses alias à chaque nouvelle session » ?",
        choices: ["Durée d'un alias de session", "Profil PowerShell", "Get-Alias", "gps"],
        answer: 1,
        explanation:
          "« Profil PowerShell » : Fichier dans lequel on peut recréer ses alias à chaque nouvelle session. Les autres choix renvoient à « Durée d'un alias de session », « Get-Alias », « gps » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Durée d'un alias de session » ?",
        choices: [
          "Nom court qui pointe vers une commande existante",
          "Commande qui crée un alias pour la session",
          "Période qui se termine quand la session PowerShell se ferme",
          "Alias courant de Set-Location",
        ],
        answer: 2,
        explanation:
          "« Durée d'un alias de session » : Période qui se termine quand la session PowerShell se ferme. Les autres choix renvoient à « Alias », « Set-Alias », « cd » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Période qui se termine quand la session PowerShell se ferme » ?",
        choices: ["Alias", "Set-Alias", "cd", "Durée d'un alias de session"],
        answer: 3,
        explanation:
          "« Durée d'un alias de session » : Période qui se termine quand la session PowerShell se ferme. Les autres choix renvoient à « Alias », « Set-Alias », « cd » ; comparez leur rôle avant de continuer.",
      },
    ],
  },
  "06-historique": {
    id: "06-historique",
    title: "Quiz — 06. Historique",
    chapter: "06. Historique",
    intro: "20 questions pour vérifier vos repères avant de passer aux exercices pratiques.",
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
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Recherche interactive dans les commandes déjà saisies » ?",
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
        choices: [
          "Identifiant d'historique",
          "PSReadLine",
          "Information sensible",
          "Clear-History",
        ],
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
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Secret qu'il vaut mieux ne pas saisir directement dans une commande historisée » ?",
        choices: ["Get-History", "Clear-History", "Ctrl+R", "Information sensible"],
        answer: 3,
        explanation:
          "« Information sensible » : Secret qu'il vaut mieux ne pas saisir directement dans une commande historisée. Les autres choix renvoient à « Get-History », « Clear-History », « Ctrl+R » ; comparez leur rôle avant de continuer.",
      },
    ],
  },
  "07-variables": {
    id: "07-variables",
    title: "Quiz — 07. Variables",
    chapter: "07. Variables",
    intro: "20 questions pour vérifier vos repères avant de passer aux exercices pratiques.",
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
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Collection de paires clé-valeur » ?",
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
        question:
          "Quel concept correspond à cette description : « Type qui représente du texte » ?",
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
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Préfixe qui donne accès aux variables d'environnement » ?",
        choices: ["Variable", "$null", "Tableau", "$env:"],
        answer: 3,
        explanation:
          "« $env: » : Préfixe qui donne accès aux variables d'environnement. Les autres choix renvoient à « Variable », « $null », « Tableau » ; comparez leur rôle avant de continuer.",
      },
    ],
  },
  "08-formatage": {
    id: "08-formatage",
    title: "Quiz — 08. Formatage",
    chapter: "08. Formatage",
    intro: "20 questions pour vérifier vos repères avant de passer aux exercices pratiques.",
    chapterLink: "../08-formatage/",
    questions: [
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Format-Table » ?",
        choices: [
          "Commande qui présente des propriétés en colonnes pour l'affichage",
          "Commande qui présente les propriétés sur des lignes séparées",
          "Commande qui affiche une grille interactive lorsque l'environnement le permet",
          "Bonne pratique qui évite d'envoyer un rendu d'affichage aux commandes de traitement",
        ],
        answer: 0,
        explanation:
          "« Format-Table » : Commande qui présente des propriétés en colonnes pour l'affichage. Les autres choix renvoient à « Format-List », « Out-GridView », « Formatage en fin de pipeline » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui présente des propriétés en colonnes pour l'affichage » ?",
        choices: ["Format-List", "Format-Table", "Out-GridView", "Formatage en fin de pipeline"],
        answer: 1,
        explanation:
          "« Format-Table » : Commande qui présente des propriétés en colonnes pour l'affichage. Les autres choix renvoient à « Format-List », « Out-GridView », « Formatage en fin de pipeline » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Format-List » ?",
        choices: [
          "Commande qui choisit des propriétés tout en conservant des objets exploitables",
          "Espace disponible qui peut tronquer une valeur dans un tableau",
          "Commande qui présente les propriétés sur des lignes séparées",
          "Champ d'un objet que Select-Object ou Format-Table peut afficher",
        ],
        answer: 2,
        explanation:
          "« Format-List » : Commande qui présente les propriétés sur des lignes séparées. Les autres choix renvoient à « Select-Object », « Largeur de colonne », « Propriété » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui présente les propriétés sur des lignes séparées » ?",
        choices: ["Select-Object", "Largeur de colonne", "Propriété", "Format-List"],
        answer: 3,
        explanation:
          "« Format-List » : Commande qui présente les propriétés sur des lignes séparées. Les autres choix renvoient à « Select-Object », « Largeur de colonne », « Propriété » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Select-Object » ?",
        choices: [
          "Commande qui choisit des propriétés tout en conservant des objets exploitables",
          "Commande qui affiche une grille interactive lorsque l'environnement le permet",
          "Résultat à conserver avant de filtrer, exporter ou poursuivre le pipeline",
          "Commande qui aide à trouver les propriétés disponibles avant l'affichage",
        ],
        answer: 0,
        explanation:
          "« Select-Object » : Commande qui choisit des propriétés tout en conservant des objets exploitables. Les autres choix renvoient à « Out-GridView », « Objet non formaté », « Get-Member » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui choisit des propriétés tout en conservant des objets exploitables » ?",
        choices: ["Out-GridView", "Select-Object", "Objet non formaté", "Get-Member"],
        answer: 1,
        explanation:
          "« Select-Object » : Commande qui choisit des propriétés tout en conservant des objets exploitables. Les autres choix renvoient à « Out-GridView », « Objet non formaté », « Get-Member » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Out-GridView » ?",
        choices: [
          "Espace disponible qui peut tronquer une valeur dans un tableau",
          "Bonne pratique qui évite d'envoyer un rendu d'affichage aux commandes de traitement",
          "Commande qui affiche une grille interactive lorsque l'environnement le permet",
          "Commande qui présente une propriété sous forme de colonnes compactes",
        ],
        answer: 2,
        explanation:
          "« Out-GridView » : Commande qui affiche une grille interactive lorsque l'environnement le permet. Les autres choix renvoient à « Largeur de colonne », « Formatage en fin de pipeline », « Format-Wide » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui affiche une grille interactive lorsque l'environnement le permet » ?",
        choices: [
          "Largeur de colonne",
          "Formatage en fin de pipeline",
          "Format-Wide",
          "Out-GridView",
        ],
        answer: 3,
        explanation:
          "« Out-GridView » : Commande qui affiche une grille interactive lorsque l'environnement le permet. Les autres choix renvoient à « Largeur de colonne », « Formatage en fin de pipeline », « Format-Wide » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Largeur de colonne » ?",
        choices: [
          "Espace disponible qui peut tronquer une valeur dans un tableau",
          "Résultat à conserver avant de filtrer, exporter ou poursuivre le pipeline",
          "Champ d'un objet que Select-Object ou Format-Table peut afficher",
          "Commande qui présente des propriétés en colonnes pour l'affichage",
        ],
        answer: 0,
        explanation:
          "« Largeur de colonne » : Espace disponible qui peut tronquer une valeur dans un tableau. Les autres choix renvoient à « Objet non formaté », « Propriété », « Format-Table » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Espace disponible qui peut tronquer une valeur dans un tableau » ?",
        choices: ["Objet non formaté", "Largeur de colonne", "Propriété", "Format-Table"],
        answer: 1,
        explanation:
          "« Largeur de colonne » : Espace disponible qui peut tronquer une valeur dans un tableau. Les autres choix renvoient à « Objet non formaté », « Propriété », « Format-Table » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Objet non formaté » ?",
        choices: [
          "Bonne pratique qui évite d'envoyer un rendu d'affichage aux commandes de traitement",
          "Commande qui aide à trouver les propriétés disponibles avant l'affichage",
          "Résultat à conserver avant de filtrer, exporter ou poursuivre le pipeline",
          "Commande qui présente les propriétés sur des lignes séparées",
        ],
        answer: 2,
        explanation:
          "« Objet non formaté » : Résultat à conserver avant de filtrer, exporter ou poursuivre le pipeline. Les autres choix renvoient à « Formatage en fin de pipeline », « Get-Member », « Format-List » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Résultat à conserver avant de filtrer, exporter ou poursuivre le pipeline » ?",
        choices: ["Formatage en fin de pipeline", "Get-Member", "Format-List", "Objet non formaté"],
        answer: 3,
        explanation:
          "« Objet non formaté » : Résultat à conserver avant de filtrer, exporter ou poursuivre le pipeline. Les autres choix renvoient à « Formatage en fin de pipeline », « Get-Member », « Format-List » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Formatage en fin de pipeline » ?",
        choices: [
          "Bonne pratique qui évite d'envoyer un rendu d'affichage aux commandes de traitement",
          "Champ d'un objet que Select-Object ou Format-Table peut afficher",
          "Commande qui présente une propriété sous forme de colonnes compactes",
          "Commande qui choisit des propriétés tout en conservant des objets exploitables",
        ],
        answer: 0,
        explanation:
          "« Formatage en fin de pipeline » : Bonne pratique qui évite d'envoyer un rendu d'affichage aux commandes de traitement. Les autres choix renvoient à « Propriété », « Format-Wide », « Select-Object » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Bonne pratique qui évite d'envoyer un rendu d'affichage aux commandes de traitement » ?",
        choices: ["Propriété", "Formatage en fin de pipeline", "Format-Wide", "Select-Object"],
        answer: 1,
        explanation:
          "« Formatage en fin de pipeline » : Bonne pratique qui évite d'envoyer un rendu d'affichage aux commandes de traitement. Les autres choix renvoient à « Propriété », « Format-Wide », « Select-Object » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Propriété » ?",
        choices: [
          "Commande qui aide à trouver les propriétés disponibles avant l'affichage",
          "Commande qui présente des propriétés en colonnes pour l'affichage",
          "Champ d'un objet que Select-Object ou Format-Table peut afficher",
          "Commande qui affiche une grille interactive lorsque l'environnement le permet",
        ],
        answer: 2,
        explanation:
          "« Propriété » : Champ d'un objet que Select-Object ou Format-Table peut afficher. Les autres choix renvoient à « Get-Member », « Format-Table », « Out-GridView » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Champ d'un objet que Select-Object ou Format-Table peut afficher » ?",
        choices: ["Get-Member", "Format-Table", "Out-GridView", "Propriété"],
        answer: 3,
        explanation:
          "« Propriété » : Champ d'un objet que Select-Object ou Format-Table peut afficher. Les autres choix renvoient à « Get-Member », « Format-Table », « Out-GridView » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Get-Member » ?",
        choices: [
          "Commande qui aide à trouver les propriétés disponibles avant l'affichage",
          "Commande qui présente une propriété sous forme de colonnes compactes",
          "Commande qui présente les propriétés sur des lignes séparées",
          "Espace disponible qui peut tronquer une valeur dans un tableau",
        ],
        answer: 0,
        explanation:
          "« Get-Member » : Commande qui aide à trouver les propriétés disponibles avant l'affichage. Les autres choix renvoient à « Format-Wide », « Format-List », « Largeur de colonne » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui aide à trouver les propriétés disponibles avant l'affichage » ?",
        choices: ["Format-Wide", "Get-Member", "Format-List", "Largeur de colonne"],
        answer: 1,
        explanation:
          "« Get-Member » : Commande qui aide à trouver les propriétés disponibles avant l'affichage. Les autres choix renvoient à « Format-Wide », « Format-List », « Largeur de colonne » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Format-Wide » ?",
        choices: [
          "Commande qui présente des propriétés en colonnes pour l'affichage",
          "Commande qui choisit des propriétés tout en conservant des objets exploitables",
          "Commande qui présente une propriété sous forme de colonnes compactes",
          "Résultat à conserver avant de filtrer, exporter ou poursuivre le pipeline",
        ],
        answer: 2,
        explanation:
          "« Format-Wide » : Commande qui présente une propriété sous forme de colonnes compactes. Les autres choix renvoient à « Format-Table », « Select-Object », « Objet non formaté » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui présente une propriété sous forme de colonnes compactes » ?",
        choices: ["Format-Table", "Select-Object", "Objet non formaté", "Format-Wide"],
        answer: 3,
        explanation:
          "« Format-Wide » : Commande qui présente une propriété sous forme de colonnes compactes. Les autres choix renvoient à « Format-Table », « Select-Object », « Objet non formaté » ; comparez leur rôle avant de continuer.",
      },
    ],
  },
  "09-pipeline": {
    id: "09-pipeline",
    title: "Quiz — 09. Pipeline",
    chapter: "09. Pipeline",
    intro: "20 questions pour vérifier vos repères avant de passer aux exercices pratiques.",
    chapterLink: "../09-pipeline/",
    questions: [
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « | » ?",
        choices: [
          "Opérateur qui transmet la sortie d'une commande à la suivante",
          "Commande qui filtre des objets selon une condition",
          "Commande qui choisit des propriétés ou limite le nombre de résultats",
          "Variable qui représente l'objet courant dans un bloc de pipeline",
        ],
        answer: 0,
        explanation:
          "« | » : Opérateur qui transmet la sortie d'une commande à la suivante. Les autres choix renvoient à « Where-Object », « Select-Object », « $_ » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Opérateur qui transmet la sortie d'une commande à la suivante » ?",
        choices: ["Where-Object", "|", "Select-Object", "$_"],
        answer: 1,
        explanation:
          "« | » : Opérateur qui transmet la sortie d'une commande à la suivante. Les autres choix renvoient à « Where-Object », « Select-Object », « $_ » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Where-Object » ?",
        choices: [
          "Commande qui trie les objets sur une propriété",
          "Commande qui regroupe les objets par valeur d'une propriété",
          "Commande qui filtre des objets selon une condition",
          "Commande qui inspecte les membres des objets transmis",
        ],
        answer: 2,
        explanation:
          "« Where-Object » : Commande qui filtre des objets selon une condition. Les autres choix renvoient à « Sort-Object », « Group-Object », « Get-Member » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui filtre des objets selon une condition » ?",
        choices: ["Sort-Object", "Group-Object", "Get-Member", "Where-Object"],
        answer: 3,
        explanation:
          "« Where-Object » : Commande qui filtre des objets selon une condition. Les autres choix renvoient à « Sort-Object », « Group-Object », « Get-Member » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Sort-Object » ?",
        choices: [
          "Commande qui trie les objets sur une propriété",
          "Commande qui choisit des propriétés ou limite le nombre de résultats",
          "Commande qui calcule un compte, une somme ou d'autres mesures",
          "Tri qui place les valeurs les plus grandes en premier",
        ],
        answer: 0,
        explanation:
          "« Sort-Object » : Commande qui trie les objets sur une propriété. Les autres choix renvoient à « Select-Object », « Measure-Object », « Sort-Object -Descending » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui trie les objets sur une propriété » ?",
        choices: ["Select-Object", "Sort-Object", "Measure-Object", "Sort-Object -Descending"],
        answer: 1,
        explanation:
          "« Sort-Object » : Commande qui trie les objets sur une propriété. Les autres choix renvoient à « Select-Object », « Measure-Object », « Sort-Object -Descending » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Select-Object » ?",
        choices: [
          "Commande qui regroupe les objets par valeur d'une propriété",
          "Variable qui représente l'objet courant dans un bloc de pipeline",
          "Commande qui choisit des propriétés ou limite le nombre de résultats",
          "Chaîne de commandes qui conserve les propriétés plutôt que de parser du texte",
        ],
        answer: 2,
        explanation:
          "« Select-Object » : Commande qui choisit des propriétés ou limite le nombre de résultats. Les autres choix renvoient à « Group-Object », « $_ », « Pipeline d'objets » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui choisit des propriétés ou limite le nombre de résultats » ?",
        choices: ["Group-Object", "$_", "Pipeline d'objets", "Select-Object"],
        answer: 3,
        explanation:
          "« Select-Object » : Commande qui choisit des propriétés ou limite le nombre de résultats. Les autres choix renvoient à « Group-Object », « $_ », « Pipeline d'objets » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Group-Object » ?",
        choices: [
          "Commande qui regroupe les objets par valeur d'une propriété",
          "Commande qui calcule un compte, une somme ou d'autres mesures",
          "Commande qui inspecte les membres des objets transmis",
          "Opérateur qui transmet la sortie d'une commande à la suivante",
        ],
        answer: 0,
        explanation:
          "« Group-Object » : Commande qui regroupe les objets par valeur d'une propriété. Les autres choix renvoient à « Measure-Object », « Get-Member », « | » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui regroupe les objets par valeur d'une propriété » ?",
        choices: ["Measure-Object", "Group-Object", "Get-Member", "|"],
        answer: 1,
        explanation:
          "« Group-Object » : Commande qui regroupe les objets par valeur d'une propriété. Les autres choix renvoient à « Measure-Object », « Get-Member », « | » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Measure-Object » ?",
        choices: [
          "Variable qui représente l'objet courant dans un bloc de pipeline",
          "Tri qui place les valeurs les plus grandes en premier",
          "Commande qui calcule un compte, une somme ou d'autres mesures",
          "Commande qui filtre des objets selon une condition",
        ],
        answer: 2,
        explanation:
          "« Measure-Object » : Commande qui calcule un compte, une somme ou d'autres mesures. Les autres choix renvoient à « $_ », « Sort-Object -Descending », « Where-Object » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui calcule un compte, une somme ou d'autres mesures » ?",
        choices: ["$_", "Sort-Object -Descending", "Where-Object", "Measure-Object"],
        answer: 3,
        explanation:
          "« Measure-Object » : Commande qui calcule un compte, une somme ou d'autres mesures. Les autres choix renvoient à « $_ », « Sort-Object -Descending », « Where-Object » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « $_ » ?",
        choices: [
          "Variable qui représente l'objet courant dans un bloc de pipeline",
          "Commande qui inspecte les membres des objets transmis",
          "Chaîne de commandes qui conserve les propriétés plutôt que de parser du texte",
          "Commande qui trie les objets sur une propriété",
        ],
        answer: 0,
        explanation:
          "« $_ » : Variable qui représente l'objet courant dans un bloc de pipeline. Les autres choix renvoient à « Get-Member », « Pipeline d'objets », « Sort-Object » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Variable qui représente l'objet courant dans un bloc de pipeline » ?",
        choices: ["Get-Member", "$_", "Pipeline d'objets", "Sort-Object"],
        answer: 1,
        explanation:
          "« $_ » : Variable qui représente l'objet courant dans un bloc de pipeline. Les autres choix renvoient à « Get-Member », « Pipeline d'objets », « Sort-Object » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Get-Member » ?",
        choices: [
          "Tri qui place les valeurs les plus grandes en premier",
          "Opérateur qui transmet la sortie d'une commande à la suivante",
          "Commande qui inspecte les membres des objets transmis",
          "Commande qui choisit des propriétés ou limite le nombre de résultats",
        ],
        answer: 2,
        explanation:
          "« Get-Member » : Commande qui inspecte les membres des objets transmis. Les autres choix renvoient à « Sort-Object -Descending », « | », « Select-Object » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui inspecte les membres des objets transmis » ?",
        choices: ["Sort-Object -Descending", "|", "Select-Object", "Get-Member"],
        answer: 3,
        explanation:
          "« Get-Member » : Commande qui inspecte les membres des objets transmis. Les autres choix renvoient à « Sort-Object -Descending », « | », « Select-Object » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Sort-Object -Descending » ?",
        choices: [
          "Tri qui place les valeurs les plus grandes en premier",
          "Chaîne de commandes qui conserve les propriétés plutôt que de parser du texte",
          "Commande qui filtre des objets selon une condition",
          "Commande qui regroupe les objets par valeur d'une propriété",
        ],
        answer: 0,
        explanation:
          "« Sort-Object -Descending » : Tri qui place les valeurs les plus grandes en premier. Les autres choix renvoient à « Pipeline d'objets », « Where-Object », « Group-Object » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Tri qui place les valeurs les plus grandes en premier » ?",
        choices: ["Pipeline d'objets", "Sort-Object -Descending", "Where-Object", "Group-Object"],
        answer: 1,
        explanation:
          "« Sort-Object -Descending » : Tri qui place les valeurs les plus grandes en premier. Les autres choix renvoient à « Pipeline d'objets », « Where-Object », « Group-Object » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Pipeline d'objets » ?",
        choices: [
          "Opérateur qui transmet la sortie d'une commande à la suivante",
          "Commande qui trie les objets sur une propriété",
          "Chaîne de commandes qui conserve les propriétés plutôt que de parser du texte",
          "Commande qui calcule un compte, une somme ou d'autres mesures",
        ],
        answer: 2,
        explanation:
          "« Pipeline d'objets » : Chaîne de commandes qui conserve les propriétés plutôt que de parser du texte. Les autres choix renvoient à « | », « Sort-Object », « Measure-Object » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Chaîne de commandes qui conserve les propriétés plutôt que de parser du texte » ?",
        choices: ["|", "Sort-Object", "Measure-Object", "Pipeline d'objets"],
        answer: 3,
        explanation:
          "« Pipeline d'objets » : Chaîne de commandes qui conserve les propriétés plutôt que de parser du texte. Les autres choix renvoient à « | », « Sort-Object », « Measure-Object » ; comparez leur rôle avant de continuer.",
      },
    ],
  },
  "10-conditions": {
    id: "10-conditions",
    title: "Quiz — 10. Conditions",
    chapter: "10. Conditions",
    intro: "20 questions pour vérifier vos repères avant de passer aux exercices pratiques.",
    chapterLink: "../10-conditions/",
    questions: [
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « if » ?",
        choices: [
          "Branche exécutée quand une condition est vraie",
          "Branche exécutée quand la condition précédente est fausse",
          "Structure adaptée à plusieurs cas possibles pour une même valeur",
          "Opérateur qui teste si une valeur est supérieure à une autre",
        ],
        answer: 0,
        explanation:
          "« if » : Branche exécutée quand une condition est vraie. Les autres choix renvoient à « else », « switch », « -gt » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Branche exécutée quand une condition est vraie » ?",
        choices: ["else", "if", "switch", "-gt"],
        answer: 1,
        explanation:
          "« if » : Branche exécutée quand une condition est vraie. Les autres choix renvoient à « else », « switch », « -gt » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « else » ?",
        choices: [
          "Branche qui teste une nouvelle condition après un if non satisfait",
          "Opérateur qui teste l'égalité",
          "Branche exécutée quand la condition précédente est fausse",
          "Opérateur logique qui exige que deux conditions soient vraies",
        ],
        answer: 2,
        explanation:
          "« else » : Branche exécutée quand la condition précédente est fausse. Les autres choix renvoient à « elseif », « -eq », « -and » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Branche exécutée quand la condition précédente est fausse » ?",
        choices: ["elseif", "-eq", "-and", "else"],
        answer: 3,
        explanation:
          "« else » : Branche exécutée quand la condition précédente est fausse. Les autres choix renvoient à « elseif », « -eq », « -and » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « elseif » ?",
        choices: [
          "Branche qui teste une nouvelle condition après un if non satisfait",
          "Structure adaptée à plusieurs cas possibles pour une même valeur",
          "Opérateur qui teste la différence",
          "Opérateur logique qui accepte qu'au moins une condition soit vraie",
        ],
        answer: 0,
        explanation:
          "« elseif » : Branche qui teste une nouvelle condition après un if non satisfait. Les autres choix renvoient à « switch », « -ne », « -or » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Branche qui teste une nouvelle condition après un if non satisfait » ?",
        choices: ["switch", "elseif", "-ne", "-or"],
        answer: 1,
        explanation:
          "« elseif » : Branche qui teste une nouvelle condition après un if non satisfait. Les autres choix renvoient à « switch », « -ne », « -or » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « switch » ?",
        choices: [
          "Opérateur qui teste l'égalité",
          "Opérateur qui teste si une valeur est supérieure à une autre",
          "Structure adaptée à plusieurs cas possibles pour une même valeur",
          "Commande qui vérifie l'existence d'un chemin avant d'agir",
        ],
        answer: 2,
        explanation:
          "« switch » : Structure adaptée à plusieurs cas possibles pour une même valeur. Les autres choix renvoient à « -eq », « -gt », « Test-Path » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Structure adaptée à plusieurs cas possibles pour une même valeur » ?",
        choices: ["-eq", "-gt", "Test-Path", "switch"],
        answer: 3,
        explanation:
          "« switch » : Structure adaptée à plusieurs cas possibles pour une même valeur. Les autres choix renvoient à « -eq », « -gt », « Test-Path » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « -eq » ?",
        choices: [
          "Opérateur qui teste l'égalité",
          "Opérateur qui teste la différence",
          "Opérateur logique qui exige que deux conditions soient vraies",
          "Branche exécutée quand une condition est vraie",
        ],
        answer: 0,
        explanation:
          "« -eq » : Opérateur qui teste l'égalité. Les autres choix renvoient à « -ne », « -and », « if » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Opérateur qui teste l'égalité » ?",
        choices: ["-ne", "-eq", "-and", "if"],
        answer: 1,
        explanation:
          "« -eq » : Opérateur qui teste l'égalité. Les autres choix renvoient à « -ne », « -and », « if » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « -ne » ?",
        choices: [
          "Opérateur qui teste si une valeur est supérieure à une autre",
          "Opérateur logique qui accepte qu'au moins une condition soit vraie",
          "Opérateur qui teste la différence",
          "Branche exécutée quand la condition précédente est fausse",
        ],
        answer: 2,
        explanation:
          "« -ne » : Opérateur qui teste la différence. Les autres choix renvoient à « -gt », « -or », « else » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Opérateur qui teste la différence » ?",
        choices: ["-gt", "-or", "else", "-ne"],
        answer: 3,
        explanation:
          "« -ne » : Opérateur qui teste la différence. Les autres choix renvoient à « -gt », « -or », « else » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « -gt » ?",
        choices: [
          "Opérateur qui teste si une valeur est supérieure à une autre",
          "Opérateur logique qui exige que deux conditions soient vraies",
          "Commande qui vérifie l'existence d'un chemin avant d'agir",
          "Branche qui teste une nouvelle condition après un if non satisfait",
        ],
        answer: 0,
        explanation:
          "« -gt » : Opérateur qui teste si une valeur est supérieure à une autre. Les autres choix renvoient à « -and », « Test-Path », « elseif » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Opérateur qui teste si une valeur est supérieure à une autre » ?",
        choices: ["-and", "-gt", "Test-Path", "elseif"],
        answer: 1,
        explanation:
          "« -gt » : Opérateur qui teste si une valeur est supérieure à une autre. Les autres choix renvoient à « -and », « Test-Path », « elseif » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « -and » ?",
        choices: [
          "Opérateur logique qui accepte qu'au moins une condition soit vraie",
          "Branche exécutée quand une condition est vraie",
          "Opérateur logique qui exige que deux conditions soient vraies",
          "Structure adaptée à plusieurs cas possibles pour une même valeur",
        ],
        answer: 2,
        explanation:
          "« -and » : Opérateur logique qui exige que deux conditions soient vraies. Les autres choix renvoient à « -or », « if », « switch » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Opérateur logique qui exige que deux conditions soient vraies » ?",
        choices: ["-or", "if", "switch", "-and"],
        answer: 3,
        explanation:
          "« -and » : Opérateur logique qui exige que deux conditions soient vraies. Les autres choix renvoient à « -or », « if », « switch » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « -or » ?",
        choices: [
          "Opérateur logique qui accepte qu'au moins une condition soit vraie",
          "Commande qui vérifie l'existence d'un chemin avant d'agir",
          "Branche exécutée quand la condition précédente est fausse",
          "Opérateur qui teste l'égalité",
        ],
        answer: 0,
        explanation:
          "« -or » : Opérateur logique qui accepte qu'au moins une condition soit vraie. Les autres choix renvoient à « Test-Path », « else », « -eq » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Opérateur logique qui accepte qu'au moins une condition soit vraie » ?",
        choices: ["Test-Path", "-or", "else", "-eq"],
        answer: 1,
        explanation:
          "« -or » : Opérateur logique qui accepte qu'au moins une condition soit vraie. Les autres choix renvoient à « Test-Path », « else », « -eq » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Test-Path » ?",
        choices: [
          "Branche exécutée quand une condition est vraie",
          "Branche qui teste une nouvelle condition après un if non satisfait",
          "Commande qui vérifie l'existence d'un chemin avant d'agir",
          "Opérateur qui teste la différence",
        ],
        answer: 2,
        explanation:
          "« Test-Path » : Commande qui vérifie l'existence d'un chemin avant d'agir. Les autres choix renvoient à « if », « elseif », « -ne » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui vérifie l'existence d'un chemin avant d'agir » ?",
        choices: ["if", "elseif", "-ne", "Test-Path"],
        answer: 3,
        explanation:
          "« Test-Path » : Commande qui vérifie l'existence d'un chemin avant d'agir. Les autres choix renvoient à « if », « elseif », « -ne » ; comparez leur rôle avant de continuer.",
      },
    ],
  },
  "11-boucles": {
    id: "11-boucles",
    title: "Quiz — 11. Boucles",
    chapter: "11. Boucles",
    intro: "20 questions pour vérifier vos repères avant de passer aux exercices pratiques.",
    chapterLink: "../11-boucles/",
    questions: [
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « foreach » ?",
        choices: [
          "Boucle qui parcourt directement une collection",
          "Commande qui traite chaque objet reçu du pipeline",
          "Boucle qui teste sa condition avant chaque passage",
          "Instruction qui passe à l'itération suivante",
        ],
        answer: 0,
        explanation:
          "« foreach » : Boucle qui parcourt directement une collection. Les autres choix renvoient à « ForEach-Object », « while », « continue » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Boucle qui parcourt directement une collection » ?",
        choices: ["ForEach-Object", "foreach", "while", "continue"],
        answer: 1,
        explanation:
          "« foreach » : Boucle qui parcourt directement une collection. Les autres choix renvoient à « ForEach-Object », « while », « continue » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « ForEach-Object » ?",
        choices: [
          "Boucle utile lorsqu'un compteur contrôle les itérations",
          "Boucle qui exécute son corps au moins une fois avant de tester",
          "Commande qui traite chaque objet reçu du pipeline",
          "Objet courant à l'intérieur d'un bloc ForEach-Object",
        ],
        answer: 2,
        explanation:
          "« ForEach-Object » : Commande qui traite chaque objet reçu du pipeline. Les autres choix renvoient à « for », « do/while », « $_ » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui traite chaque objet reçu du pipeline » ?",
        choices: ["for", "do/while", "$_", "ForEach-Object"],
        answer: 3,
        explanation:
          "« ForEach-Object » : Commande qui traite chaque objet reçu du pipeline. Les autres choix renvoient à « for », « do/while », « $_ » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « for » ?",
        choices: [
          "Boucle utile lorsqu'un compteur contrôle les itérations",
          "Boucle qui teste sa condition avant chaque passage",
          "Instruction qui quitte une boucle",
          "Variable dont l'évolution peut limiter une boucle for ou while",
        ],
        answer: 0,
        explanation:
          "« for » : Boucle utile lorsqu'un compteur contrôle les itérations. Les autres choix renvoient à « while », « break », « Compteur » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Boucle utile lorsqu'un compteur contrôle les itérations » ?",
        choices: ["while", "for", "break", "Compteur"],
        answer: 1,
        explanation:
          "« for » : Boucle utile lorsqu'un compteur contrôle les itérations. Les autres choix renvoient à « while », « break », « Compteur » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « while » ?",
        choices: [
          "Boucle qui exécute son corps au moins une fois avant de tester",
          "Instruction qui passe à l'itération suivante",
          "Boucle qui teste sa condition avant chaque passage",
          "Boucle qui ne s'arrête pas si sa condition ne devient jamais fausse",
        ],
        answer: 2,
        explanation:
          "« while » : Boucle qui teste sa condition avant chaque passage. Les autres choix renvoient à « do/while », « continue », « Boucle infinie » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Boucle qui teste sa condition avant chaque passage » ?",
        choices: ["do/while", "continue", "Boucle infinie", "while"],
        answer: 3,
        explanation:
          "« while » : Boucle qui teste sa condition avant chaque passage. Les autres choix renvoient à « do/while », « continue », « Boucle infinie » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « do/while » ?",
        choices: [
          "Boucle qui exécute son corps au moins une fois avant de tester",
          "Instruction qui quitte une boucle",
          "Objet courant à l'intérieur d'un bloc ForEach-Object",
          "Boucle qui parcourt directement une collection",
        ],
        answer: 0,
        explanation:
          "« do/while » : Boucle qui exécute son corps au moins une fois avant de tester. Les autres choix renvoient à « break », « $_ », « foreach » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Boucle qui exécute son corps au moins une fois avant de tester » ?",
        choices: ["break", "do/while", "$_", "foreach"],
        answer: 1,
        explanation:
          "« do/while » : Boucle qui exécute son corps au moins une fois avant de tester. Les autres choix renvoient à « break », « $_ », « foreach » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « break » ?",
        choices: [
          "Instruction qui passe à l'itération suivante",
          "Variable dont l'évolution peut limiter une boucle for ou while",
          "Instruction qui quitte une boucle",
          "Commande qui traite chaque objet reçu du pipeline",
        ],
        answer: 2,
        explanation:
          "« break » : Instruction qui quitte une boucle. Les autres choix renvoient à « continue », « Compteur », « ForEach-Object » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Instruction qui quitte une boucle » ?",
        choices: ["continue", "Compteur", "ForEach-Object", "break"],
        answer: 3,
        explanation:
          "« break » : Instruction qui quitte une boucle. Les autres choix renvoient à « continue », « Compteur », « ForEach-Object » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « continue » ?",
        choices: [
          "Instruction qui passe à l'itération suivante",
          "Objet courant à l'intérieur d'un bloc ForEach-Object",
          "Boucle qui ne s'arrête pas si sa condition ne devient jamais fausse",
          "Boucle utile lorsqu'un compteur contrôle les itérations",
        ],
        answer: 0,
        explanation:
          "« continue » : Instruction qui passe à l'itération suivante. Les autres choix renvoient à « $_ », « Boucle infinie », « for » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Instruction qui passe à l'itération suivante » ?",
        choices: ["$_", "continue", "Boucle infinie", "for"],
        answer: 1,
        explanation:
          "« continue » : Instruction qui passe à l'itération suivante. Les autres choix renvoient à « $_ », « Boucle infinie », « for » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « $_ » ?",
        choices: [
          "Variable dont l'évolution peut limiter une boucle for ou while",
          "Boucle qui parcourt directement une collection",
          "Objet courant à l'intérieur d'un bloc ForEach-Object",
          "Boucle qui teste sa condition avant chaque passage",
        ],
        answer: 2,
        explanation:
          "« $_ » : Objet courant à l'intérieur d'un bloc ForEach-Object. Les autres choix renvoient à « Compteur », « foreach », « while » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Objet courant à l'intérieur d'un bloc ForEach-Object » ?",
        choices: ["Compteur", "foreach", "while", "$_"],
        answer: 3,
        explanation:
          "« $_ » : Objet courant à l'intérieur d'un bloc ForEach-Object. Les autres choix renvoient à « Compteur », « foreach », « while » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Compteur » ?",
        choices: [
          "Variable dont l'évolution peut limiter une boucle for ou while",
          "Boucle qui ne s'arrête pas si sa condition ne devient jamais fausse",
          "Commande qui traite chaque objet reçu du pipeline",
          "Boucle qui exécute son corps au moins une fois avant de tester",
        ],
        answer: 0,
        explanation:
          "« Compteur » : Variable dont l'évolution peut limiter une boucle for ou while. Les autres choix renvoient à « Boucle infinie », « ForEach-Object », « do/while » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Variable dont l'évolution peut limiter une boucle for ou while » ?",
        choices: ["Boucle infinie", "Compteur", "ForEach-Object", "do/while"],
        answer: 1,
        explanation:
          "« Compteur » : Variable dont l'évolution peut limiter une boucle for ou while. Les autres choix renvoient à « Boucle infinie », « ForEach-Object », « do/while » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Boucle infinie » ?",
        choices: [
          "Boucle qui parcourt directement une collection",
          "Boucle utile lorsqu'un compteur contrôle les itérations",
          "Boucle qui ne s'arrête pas si sa condition ne devient jamais fausse",
          "Instruction qui quitte une boucle",
        ],
        answer: 2,
        explanation:
          "« Boucle infinie » : Boucle qui ne s'arrête pas si sa condition ne devient jamais fausse. Les autres choix renvoient à « foreach », « for », « break » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Boucle qui ne s'arrête pas si sa condition ne devient jamais fausse » ?",
        choices: ["foreach", "for", "break", "Boucle infinie"],
        answer: 3,
        explanation:
          "« Boucle infinie » : Boucle qui ne s'arrête pas si sa condition ne devient jamais fausse. Les autres choix renvoient à « foreach », « for », « break » ; comparez leur rôle avant de continuer.",
      },
    ],
  },
  "12-wmi-et-cim": {
    id: "12-wmi-et-cim",
    title: "Quiz — 12. WMI et CIM",
    chapter: "12. WMI et CIM",
    intro: "20 questions pour vérifier vos repères avant de passer aux exercices pratiques.",
    chapterLink: "../12-wmi-et-cim/",
    questions: [
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « WMI » ?",
        choices: [
          "Technologie Windows historique d'interrogation des informations de gestion",
          "Modèle utilisé pour décrire les ressources administrables",
          "Classe contenant des informations sur le système d'exploitation",
          "Paramètre qui choisit la classe CIM à interroger",
        ],
        answer: 0,
        explanation:
          "« WMI » : Technologie Windows historique d'interrogation des informations de gestion. Les autres choix renvoient à « CIM », « Win32_OperatingSystem », « -ClassName » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Technologie Windows historique d'interrogation des informations de gestion » ?",
        choices: ["CIM", "WMI", "Win32_OperatingSystem", "-ClassName"],
        answer: 1,
        explanation:
          "« WMI » : Technologie Windows historique d'interrogation des informations de gestion. Les autres choix renvoient à « CIM », « Win32_OperatingSystem », « -ClassName » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « CIM » ?",
        choices: [
          "Cmdlet qui interroge une classe CIM et renvoie des objets",
          "Classe contenant des informations sur le firmware BIOS",
          "Modèle utilisé pour décrire les ressources administrables",
          "Paramètre qui filtre côté fournisseur avant de transmettre les résultats",
        ],
        answer: 2,
        explanation:
          "« CIM » : Modèle utilisé pour décrire les ressources administrables. Les autres choix renvoient à « Get-CimInstance », « Win32_BIOS », « -Filter » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Modèle utilisé pour décrire les ressources administrables » ?",
        choices: ["Get-CimInstance", "Win32_BIOS", "-Filter", "CIM"],
        answer: 3,
        explanation:
          "« CIM » : Modèle utilisé pour décrire les ressources administrables. Les autres choix renvoient à « Get-CimInstance », « Win32_BIOS », « -Filter » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Get-CimInstance » ?",
        choices: [
          "Cmdlet qui interroge une classe CIM et renvoie des objets",
          "Classe contenant des informations sur le système d'exploitation",
          "Classe contenant des informations sur l'ordinateur",
          "Cmdlet qui aide à explorer les classes CIM disponibles",
        ],
        answer: 0,
        explanation:
          "« Get-CimInstance » : Cmdlet qui interroge une classe CIM et renvoie des objets. Les autres choix renvoient à « Win32_OperatingSystem », « Win32_ComputerSystem », « Get-CimClass » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Cmdlet qui interroge une classe CIM et renvoie des objets » ?",
        choices: [
          "Win32_OperatingSystem",
          "Get-CimInstance",
          "Win32_ComputerSystem",
          "Get-CimClass",
        ],
        answer: 1,
        explanation:
          "« Get-CimInstance » : Cmdlet qui interroge une classe CIM et renvoie des objets. Les autres choix renvoient à « Win32_OperatingSystem », « Win32_ComputerSystem », « Get-CimClass » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Win32_OperatingSystem » ?",
        choices: [
          "Classe contenant des informations sur le firmware BIOS",
          "Paramètre qui choisit la classe CIM à interroger",
          "Classe contenant des informations sur le système d'exploitation",
          "Cmdlet qui inspecte les propriétés d'un objet CIM reçu",
        ],
        answer: 2,
        explanation:
          "« Win32_OperatingSystem » : Classe contenant des informations sur le système d'exploitation. Les autres choix renvoient à « Win32_BIOS », « -ClassName », « Get-Member » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Classe contenant des informations sur le système d'exploitation » ?",
        choices: ["Win32_BIOS", "-ClassName", "Get-Member", "Win32_OperatingSystem"],
        answer: 3,
        explanation:
          "« Win32_OperatingSystem » : Classe contenant des informations sur le système d'exploitation. Les autres choix renvoient à « Win32_BIOS », « -ClassName », « Get-Member » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Win32_BIOS » ?",
        choices: [
          "Classe contenant des informations sur le firmware BIOS",
          "Classe contenant des informations sur l'ordinateur",
          "Paramètre qui filtre côté fournisseur avant de transmettre les résultats",
          "Technologie Windows historique d'interrogation des informations de gestion",
        ],
        answer: 0,
        explanation:
          "« Win32_BIOS » : Classe contenant des informations sur le firmware BIOS. Les autres choix renvoient à « Win32_ComputerSystem », « -Filter », « WMI » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Classe contenant des informations sur le firmware BIOS » ?",
        choices: ["Win32_ComputerSystem", "Win32_BIOS", "-Filter", "WMI"],
        answer: 1,
        explanation:
          "« Win32_BIOS » : Classe contenant des informations sur le firmware BIOS. Les autres choix renvoient à « Win32_ComputerSystem », « -Filter », « WMI » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Win32_ComputerSystem » ?",
        choices: [
          "Paramètre qui choisit la classe CIM à interroger",
          "Cmdlet qui aide à explorer les classes CIM disponibles",
          "Classe contenant des informations sur l'ordinateur",
          "Modèle utilisé pour décrire les ressources administrables",
        ],
        answer: 2,
        explanation:
          "« Win32_ComputerSystem » : Classe contenant des informations sur l'ordinateur. Les autres choix renvoient à « -ClassName », « Get-CimClass », « CIM » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Classe contenant des informations sur l'ordinateur » ?",
        choices: ["-ClassName", "Get-CimClass", "CIM", "Win32_ComputerSystem"],
        answer: 3,
        explanation:
          "« Win32_ComputerSystem » : Classe contenant des informations sur l'ordinateur. Les autres choix renvoient à « -ClassName », « Get-CimClass », « CIM » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « -ClassName » ?",
        choices: [
          "Paramètre qui choisit la classe CIM à interroger",
          "Paramètre qui filtre côté fournisseur avant de transmettre les résultats",
          "Cmdlet qui inspecte les propriétés d'un objet CIM reçu",
          "Cmdlet qui interroge une classe CIM et renvoie des objets",
        ],
        answer: 0,
        explanation:
          "« -ClassName » : Paramètre qui choisit la classe CIM à interroger. Les autres choix renvoient à « -Filter », « Get-Member », « Get-CimInstance » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Paramètre qui choisit la classe CIM à interroger » ?",
        choices: ["-Filter", "-ClassName", "Get-Member", "Get-CimInstance"],
        answer: 1,
        explanation:
          "« -ClassName » : Paramètre qui choisit la classe CIM à interroger. Les autres choix renvoient à « -Filter », « Get-Member », « Get-CimInstance » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « -Filter » ?",
        choices: [
          "Cmdlet qui aide à explorer les classes CIM disponibles",
          "Technologie Windows historique d'interrogation des informations de gestion",
          "Paramètre qui filtre côté fournisseur avant de transmettre les résultats",
          "Classe contenant des informations sur le système d'exploitation",
        ],
        answer: 2,
        explanation:
          "« -Filter » : Paramètre qui filtre côté fournisseur avant de transmettre les résultats. Les autres choix renvoient à « Get-CimClass », « WMI », « Win32_OperatingSystem » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Paramètre qui filtre côté fournisseur avant de transmettre les résultats » ?",
        choices: ["Get-CimClass", "WMI", "Win32_OperatingSystem", "-Filter"],
        answer: 3,
        explanation:
          "« -Filter » : Paramètre qui filtre côté fournisseur avant de transmettre les résultats. Les autres choix renvoient à « Get-CimClass », « WMI », « Win32_OperatingSystem » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Get-CimClass » ?",
        choices: [
          "Cmdlet qui aide à explorer les classes CIM disponibles",
          "Cmdlet qui inspecte les propriétés d'un objet CIM reçu",
          "Modèle utilisé pour décrire les ressources administrables",
          "Classe contenant des informations sur le firmware BIOS",
        ],
        answer: 0,
        explanation:
          "« Get-CimClass » : Cmdlet qui aide à explorer les classes CIM disponibles. Les autres choix renvoient à « Get-Member », « CIM », « Win32_BIOS » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Cmdlet qui aide à explorer les classes CIM disponibles » ?",
        choices: ["Get-Member", "Get-CimClass", "CIM", "Win32_BIOS"],
        answer: 1,
        explanation:
          "« Get-CimClass » : Cmdlet qui aide à explorer les classes CIM disponibles. Les autres choix renvoient à « Get-Member », « CIM », « Win32_BIOS » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Get-Member » ?",
        choices: [
          "Technologie Windows historique d'interrogation des informations de gestion",
          "Cmdlet qui interroge une classe CIM et renvoie des objets",
          "Cmdlet qui inspecte les propriétés d'un objet CIM reçu",
          "Classe contenant des informations sur l'ordinateur",
        ],
        answer: 2,
        explanation:
          "« Get-Member » : Cmdlet qui inspecte les propriétés d'un objet CIM reçu. Les autres choix renvoient à « WMI », « Get-CimInstance », « Win32_ComputerSystem » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Cmdlet qui inspecte les propriétés d'un objet CIM reçu » ?",
        choices: ["WMI", "Get-CimInstance", "Win32_ComputerSystem", "Get-Member"],
        answer: 3,
        explanation:
          "« Get-Member » : Cmdlet qui inspecte les propriétés d'un objet CIM reçu. Les autres choix renvoient à « WMI », « Get-CimInstance », « Win32_ComputerSystem » ; comparez leur rôle avant de continuer.",
      },
    ],
  },
  "13-fonctions": {
    id: "13-fonctions",
    title: "Quiz — 13. Fonctions",
    chapter: "13. Fonctions",
    intro: "20 questions pour vérifier vos repères avant de passer aux exercices pratiques.",
    chapterLink: "../13-fonctions/",
    questions: [
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « function » ?",
        choices: [
          "Mot-clé qui définit un bloc de commandes réutilisable",
          "Bloc qui déclare les valeurs reçues par une fonction",
          "Valeur utilisée lorsqu'un argument facultatif est omis",
          "Contexte où une variable créée dans la fonction n'affecte pas nécessairement l'extérieur",
        ],
        answer: 0,
        explanation:
          "« function » : Mot-clé qui définit un bloc de commandes réutilisable. Les autres choix renvoient à « param », « Valeur par défaut », « Portée locale » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Mot-clé qui définit un bloc de commandes réutilisable » ?",
        choices: ["param", "function", "Valeur par défaut", "Portée locale"],
        answer: 1,
        explanation:
          "« function » : Mot-clé qui définit un bloc de commandes réutilisable. Les autres choix renvoient à « param », « Valeur par défaut », « Portée locale » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « param » ?",
        choices: [
          "Valeur fournie à une fonction pour adapter son comportement",
          "Instruction qui termine une fonction en renvoyant une valeur",
          "Bloc qui déclare les valeurs reçues par une fonction",
          "Convention recommandée pour nommer une fonction comme une cmdlet",
        ],
        answer: 2,
        explanation:
          "« param » : Bloc qui déclare les valeurs reçues par une fonction. Les autres choix renvoient à « Paramètre », « return », « Nom Verbe-Nom » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Bloc qui déclare les valeurs reçues par une fonction » ?",
        choices: ["Paramètre", "return", "Nom Verbe-Nom", "param"],
        answer: 3,
        explanation:
          "« param » : Bloc qui déclare les valeurs reçues par une fonction. Les autres choix renvoient à « Paramètre », « return », « Nom Verbe-Nom » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Paramètre » ?",
        choices: [
          "Valeur fournie à une fonction pour adapter son comportement",
          "Valeur utilisée lorsqu'un argument facultatif est omis",
          "Mécanisme par lequel une fonction PowerShell émet des objets",
          "Attribut qui donne à une fonction des comportements de cmdlet avancée",
        ],
        answer: 0,
        explanation:
          "« Paramètre » : Valeur fournie à une fonction pour adapter son comportement. Les autres choix renvoient à « Valeur par défaut », « Pipeline de sortie », « [CmdletBinding()] » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Valeur fournie à une fonction pour adapter son comportement » ?",
        choices: ["Valeur par défaut", "Paramètre", "Pipeline de sortie", "[CmdletBinding()]"],
        answer: 1,
        explanation:
          "« Paramètre » : Valeur fournie à une fonction pour adapter son comportement. Les autres choix renvoient à « Valeur par défaut », « Pipeline de sortie », « [CmdletBinding()] » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Valeur par défaut » ?",
        choices: [
          "Instruction qui termine une fonction en renvoyant une valeur",
          "Contexte où une variable créée dans la fonction n'affecte pas nécessairement l'extérieur",
          "Valeur utilisée lorsqu'un argument facultatif est omis",
          "Avantage de la fonction qui évite de recopier le même bloc de commandes",
        ],
        answer: 2,
        explanation:
          "« Valeur par défaut » : Valeur utilisée lorsqu'un argument facultatif est omis. Les autres choix renvoient à « return », « Portée locale », « Réutilisation » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Valeur utilisée lorsqu'un argument facultatif est omis » ?",
        choices: ["return", "Portée locale", "Réutilisation", "Valeur par défaut"],
        answer: 3,
        explanation:
          "« Valeur par défaut » : Valeur utilisée lorsqu'un argument facultatif est omis. Les autres choix renvoient à « return », « Portée locale », « Réutilisation » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « return » ?",
        choices: [
          "Instruction qui termine une fonction en renvoyant une valeur",
          "Mécanisme par lequel une fonction PowerShell émet des objets",
          "Convention recommandée pour nommer une fonction comme une cmdlet",
          "Mot-clé qui définit un bloc de commandes réutilisable",
        ],
        answer: 0,
        explanation:
          "« return » : Instruction qui termine une fonction en renvoyant une valeur. Les autres choix renvoient à « Pipeline de sortie », « Nom Verbe-Nom », « function » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Instruction qui termine une fonction en renvoyant une valeur » ?",
        choices: ["Pipeline de sortie", "return", "Nom Verbe-Nom", "function"],
        answer: 1,
        explanation:
          "« return » : Instruction qui termine une fonction en renvoyant une valeur. Les autres choix renvoient à « Pipeline de sortie », « Nom Verbe-Nom », « function » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Pipeline de sortie » ?",
        choices: [
          "Contexte où une variable créée dans la fonction n'affecte pas nécessairement l'extérieur",
          "Attribut qui donne à une fonction des comportements de cmdlet avancée",
          "Mécanisme par lequel une fonction PowerShell émet des objets",
          "Bloc qui déclare les valeurs reçues par une fonction",
        ],
        answer: 2,
        explanation:
          "« Pipeline de sortie » : Mécanisme par lequel une fonction PowerShell émet des objets. Les autres choix renvoient à « Portée locale », « [CmdletBinding()] », « param » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Mécanisme par lequel une fonction PowerShell émet des objets » ?",
        choices: ["Portée locale", "[CmdletBinding()]", "param", "Pipeline de sortie"],
        answer: 3,
        explanation:
          "« Pipeline de sortie » : Mécanisme par lequel une fonction PowerShell émet des objets. Les autres choix renvoient à « Portée locale », « [CmdletBinding()] », « param » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Portée locale » ?",
        choices: [
          "Contexte où une variable créée dans la fonction n'affecte pas nécessairement l'extérieur",
          "Convention recommandée pour nommer une fonction comme une cmdlet",
          "Avantage de la fonction qui évite de recopier le même bloc de commandes",
          "Valeur fournie à une fonction pour adapter son comportement",
        ],
        answer: 0,
        explanation:
          "« Portée locale » : Contexte où une variable créée dans la fonction n'affecte pas nécessairement l'extérieur. Les autres choix renvoient à « Nom Verbe-Nom », « Réutilisation », « Paramètre » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Contexte où une variable créée dans la fonction n'affecte pas nécessairement l'extérieur » ?",
        choices: ["Nom Verbe-Nom", "Portée locale", "Réutilisation", "Paramètre"],
        answer: 1,
        explanation:
          "« Portée locale » : Contexte où une variable créée dans la fonction n'affecte pas nécessairement l'extérieur. Les autres choix renvoient à « Nom Verbe-Nom », « Réutilisation », « Paramètre » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Nom Verbe-Nom » ?",
        choices: [
          "Attribut qui donne à une fonction des comportements de cmdlet avancée",
          "Mot-clé qui définit un bloc de commandes réutilisable",
          "Convention recommandée pour nommer une fonction comme une cmdlet",
          "Valeur utilisée lorsqu'un argument facultatif est omis",
        ],
        answer: 2,
        explanation:
          "« Nom Verbe-Nom » : Convention recommandée pour nommer une fonction comme une cmdlet. Les autres choix renvoient à « [CmdletBinding()] », « function », « Valeur par défaut » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Convention recommandée pour nommer une fonction comme une cmdlet » ?",
        choices: ["[CmdletBinding()]", "function", "Valeur par défaut", "Nom Verbe-Nom"],
        answer: 3,
        explanation:
          "« Nom Verbe-Nom » : Convention recommandée pour nommer une fonction comme une cmdlet. Les autres choix renvoient à « [CmdletBinding()] », « function », « Valeur par défaut » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « [CmdletBinding()] » ?",
        choices: [
          "Attribut qui donne à une fonction des comportements de cmdlet avancée",
          "Avantage de la fonction qui évite de recopier le même bloc de commandes",
          "Bloc qui déclare les valeurs reçues par une fonction",
          "Instruction qui termine une fonction en renvoyant une valeur",
        ],
        answer: 0,
        explanation:
          "« [CmdletBinding()] » : Attribut qui donne à une fonction des comportements de cmdlet avancée. Les autres choix renvoient à « Réutilisation », « param », « return » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Attribut qui donne à une fonction des comportements de cmdlet avancée » ?",
        choices: ["Réutilisation", "[CmdletBinding()]", "param", "return"],
        answer: 1,
        explanation:
          "« [CmdletBinding()] » : Attribut qui donne à une fonction des comportements de cmdlet avancée. Les autres choix renvoient à « Réutilisation », « param », « return » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Réutilisation » ?",
        choices: [
          "Mot-clé qui définit un bloc de commandes réutilisable",
          "Valeur fournie à une fonction pour adapter son comportement",
          "Avantage de la fonction qui évite de recopier le même bloc de commandes",
          "Mécanisme par lequel une fonction PowerShell émet des objets",
        ],
        answer: 2,
        explanation:
          "« Réutilisation » : Avantage de la fonction qui évite de recopier le même bloc de commandes. Les autres choix renvoient à « function », « Paramètre », « Pipeline de sortie » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Avantage de la fonction qui évite de recopier le même bloc de commandes » ?",
        choices: ["function", "Paramètre", "Pipeline de sortie", "Réutilisation"],
        answer: 3,
        explanation:
          "« Réutilisation » : Avantage de la fonction qui évite de recopier le même bloc de commandes. Les autres choix renvoient à « function », « Paramètre », « Pipeline de sortie » ; comparez leur rôle avant de continuer.",
      },
    ],
  },
  "14-classes-dotnet": {
    id: "14-classes-dotnet",
    title: "Quiz — 14. Les classes du framework .NET",
    chapter: "14. Les classes du framework .NET",
    intro: "20 questions pour vérifier vos repères avant de passer aux exercices pratiques.",
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
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Appel statique qui fabrique un nouvel identifiant GUID » ?",
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
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Classe qui aide à manipuler des chemins et des extensions » ?",
        choices: ["Classe .NET", "Méthode", "::new()", "[System.IO.Path]"],
        answer: 3,
        explanation:
          "« [System.IO.Path] » : Classe qui aide à manipuler des chemins et des extensions. Les autres choix renvoient à « Classe .NET », « Méthode », « ::new() » ; comparez leur rôle avant de continuer.",
      },
    ],
  },
  "15-fichiers-et-dossiers": {
    id: "15-fichiers-et-dossiers",
    title: "Quiz — 15. Fichiers et dossiers",
    chapter: "15. Fichiers et dossiers",
    intro: "20 questions pour vérifier vos repères avant de passer aux exercices pratiques.",
    chapterLink: "../15-fichiers-et-dossiers/",
    questions: [
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Get-Location » ?",
        choices: [
          "Commande qui affiche le dossier courant",
          "Commande qui change le dossier courant",
          "Commande qui crée un fichier ou un dossier",
          "Commande qui supprime un élément et nécessite de contrôler la cible",
        ],
        answer: 0,
        explanation:
          "« Get-Location » : Commande qui affiche le dossier courant. Les autres choix renvoient à « Set-Location », « New-Item », « Remove-Item » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui affiche le dossier courant » ?",
        choices: ["Set-Location", "Get-Location", "New-Item", "Remove-Item"],
        answer: 1,
        explanation:
          "« Get-Location » : Commande qui affiche le dossier courant. Les autres choix renvoient à « Set-Location », « New-Item », « Remove-Item » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Set-Location » ?",
        choices: [
          "Commande qui liste les fichiers et dossiers",
          "Commande qui copie un élément",
          "Commande qui change le dossier courant",
          "Commande qui vérifie qu'un chemin existe",
        ],
        answer: 2,
        explanation:
          "« Set-Location » : Commande qui change le dossier courant. Les autres choix renvoient à « Get-ChildItem », « Copy-Item », « Test-Path » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui change le dossier courant » ?",
        choices: ["Get-ChildItem", "Copy-Item", "Test-Path", "Set-Location"],
        answer: 3,
        explanation:
          "« Set-Location » : Commande qui change le dossier courant. Les autres choix renvoient à « Get-ChildItem », « Copy-Item », « Test-Path » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Get-ChildItem » ?",
        choices: [
          "Commande qui liste les fichiers et dossiers",
          "Commande qui crée un fichier ou un dossier",
          "Commande qui déplace ou renomme un élément",
          "Commande qui obtient les informations d'un élément précis",
        ],
        answer: 0,
        explanation:
          "« Get-ChildItem » : Commande qui liste les fichiers et dossiers. Les autres choix renvoient à « New-Item », « Move-Item », « Get-Item » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui liste les fichiers et dossiers » ?",
        choices: ["New-Item", "Get-ChildItem", "Move-Item", "Get-Item"],
        answer: 1,
        explanation:
          "« Get-ChildItem » : Commande qui liste les fichiers et dossiers. Les autres choix renvoient à « New-Item », « Move-Item », « Get-Item » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « New-Item » ?",
        choices: [
          "Commande qui copie un élément",
          "Commande qui supprime un élément et nécessite de contrôler la cible",
          "Commande qui crée un fichier ou un dossier",
          "Paramètre qui traite le chemin tel quel sans interpréter les caractères génériques",
        ],
        answer: 2,
        explanation:
          "« New-Item » : Commande qui crée un fichier ou un dossier. Les autres choix renvoient à « Copy-Item », « Remove-Item », « -LiteralPath » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui crée un fichier ou un dossier » ?",
        choices: ["Copy-Item", "Remove-Item", "-LiteralPath", "New-Item"],
        answer: 3,
        explanation:
          "« New-Item » : Commande qui crée un fichier ou un dossier. Les autres choix renvoient à « Copy-Item », « Remove-Item », « -LiteralPath » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Copy-Item » ?",
        choices: [
          "Commande qui copie un élément",
          "Commande qui déplace ou renomme un élément",
          "Commande qui vérifie qu'un chemin existe",
          "Commande qui affiche le dossier courant",
        ],
        answer: 0,
        explanation:
          "« Copy-Item » : Commande qui copie un élément. Les autres choix renvoient à « Move-Item », « Test-Path », « Get-Location » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui copie un élément » ?",
        choices: ["Move-Item", "Copy-Item", "Test-Path", "Get-Location"],
        answer: 1,
        explanation:
          "« Copy-Item » : Commande qui copie un élément. Les autres choix renvoient à « Move-Item », « Test-Path », « Get-Location » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Move-Item » ?",
        choices: [
          "Commande qui supprime un élément et nécessite de contrôler la cible",
          "Commande qui obtient les informations d'un élément précis",
          "Commande qui déplace ou renomme un élément",
          "Commande qui change le dossier courant",
        ],
        answer: 2,
        explanation:
          "« Move-Item » : Commande qui déplace ou renomme un élément. Les autres choix renvoient à « Remove-Item », « Get-Item », « Set-Location » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui déplace ou renomme un élément » ?",
        choices: ["Remove-Item", "Get-Item", "Set-Location", "Move-Item"],
        answer: 3,
        explanation:
          "« Move-Item » : Commande qui déplace ou renomme un élément. Les autres choix renvoient à « Remove-Item », « Get-Item », « Set-Location » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Remove-Item » ?",
        choices: [
          "Commande qui supprime un élément et nécessite de contrôler la cible",
          "Commande qui vérifie qu'un chemin existe",
          "Paramètre qui traite le chemin tel quel sans interpréter les caractères génériques",
          "Commande qui liste les fichiers et dossiers",
        ],
        answer: 0,
        explanation:
          "« Remove-Item » : Commande qui supprime un élément et nécessite de contrôler la cible. Les autres choix renvoient à « Test-Path », « -LiteralPath », « Get-ChildItem » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui supprime un élément et nécessite de contrôler la cible » ?",
        choices: ["Test-Path", "Remove-Item", "-LiteralPath", "Get-ChildItem"],
        answer: 1,
        explanation:
          "« Remove-Item » : Commande qui supprime un élément et nécessite de contrôler la cible. Les autres choix renvoient à « Test-Path », « -LiteralPath », « Get-ChildItem » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Test-Path » ?",
        choices: [
          "Commande qui obtient les informations d'un élément précis",
          "Commande qui affiche le dossier courant",
          "Commande qui vérifie qu'un chemin existe",
          "Commande qui crée un fichier ou un dossier",
        ],
        answer: 2,
        explanation:
          "« Test-Path » : Commande qui vérifie qu'un chemin existe. Les autres choix renvoient à « Get-Item », « Get-Location », « New-Item » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui vérifie qu'un chemin existe » ?",
        choices: ["Get-Item", "Get-Location", "New-Item", "Test-Path"],
        answer: 3,
        explanation:
          "« Test-Path » : Commande qui vérifie qu'un chemin existe. Les autres choix renvoient à « Get-Item », « Get-Location », « New-Item » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Get-Item » ?",
        choices: [
          "Commande qui obtient les informations d'un élément précis",
          "Paramètre qui traite le chemin tel quel sans interpréter les caractères génériques",
          "Commande qui change le dossier courant",
          "Commande qui copie un élément",
        ],
        answer: 0,
        explanation:
          "« Get-Item » : Commande qui obtient les informations d'un élément précis. Les autres choix renvoient à « -LiteralPath », « Set-Location », « Copy-Item » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui obtient les informations d'un élément précis » ?",
        choices: ["-LiteralPath", "Get-Item", "Set-Location", "Copy-Item"],
        answer: 1,
        explanation:
          "« Get-Item » : Commande qui obtient les informations d'un élément précis. Les autres choix renvoient à « -LiteralPath », « Set-Location », « Copy-Item » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « -LiteralPath » ?",
        choices: [
          "Commande qui affiche le dossier courant",
          "Commande qui liste les fichiers et dossiers",
          "Paramètre qui traite le chemin tel quel sans interpréter les caractères génériques",
          "Commande qui déplace ou renomme un élément",
        ],
        answer: 2,
        explanation:
          "« -LiteralPath » : Paramètre qui traite le chemin tel quel sans interpréter les caractères génériques. Les autres choix renvoient à « Get-Location », « Get-ChildItem », « Move-Item » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Paramètre qui traite le chemin tel quel sans interpréter les caractères génériques » ?",
        choices: ["Get-Location", "Get-ChildItem", "Move-Item", "-LiteralPath"],
        answer: 3,
        explanation:
          "« -LiteralPath » : Paramètre qui traite le chemin tel quel sans interpréter les caractères génériques. Les autres choix renvoient à « Get-Location », « Get-ChildItem », « Move-Item » ; comparez leur rôle avant de continuer.",
      },
    ],
  },
  "16-lire-et-ecrire": {
    id: "16-lire-et-ecrire",
    title: "Quiz — 16. Lire et écrire",
    chapter: "16. Lire et écrire",
    intro: "20 questions pour vérifier vos repères avant de passer aux exercices pratiques.",
    chapterLink: "../16-lire-et-ecrire/",
    questions: [
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Get-Content » ?",
        choices: [
          "Commande qui lit le contenu d'un fichier",
          "Commande qui remplace le contenu d'un fichier",
          "Commande qui écrit la sortie d'un pipeline dans un fichier",
          "Encodage adapté aux caractères accentués et au partage de fichiers texte",
        ],
        answer: 0,
        explanation:
          "« Get-Content » : Commande qui lit le contenu d'un fichier. Les autres choix renvoient à « Set-Content », « Out-File », « UTF-8 » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui lit le contenu d'un fichier » ?",
        choices: ["Set-Content", "Get-Content", "Out-File", "UTF-8"],
        answer: 1,
        explanation:
          "« Get-Content » : Commande qui lit le contenu d'un fichier. Les autres choix renvoient à « Set-Content », « Out-File », « UTF-8 » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Set-Content » ?",
        choices: [
          "Commande qui ajoute du texte à la fin d'un fichier",
          "Option de Get-Content qui lit le texte comme une seule chaîne",
          "Commande qui remplace le contenu d'un fichier",
          "Fichier auquel on ajoute des événements successifs",
        ],
        answer: 2,
        explanation:
          "« Set-Content » : Commande qui remplace le contenu d'un fichier. Les autres choix renvoient à « Add-Content », « -Raw », « Fichier journal » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui remplace le contenu d'un fichier » ?",
        choices: ["Add-Content", "-Raw", "Fichier journal", "Set-Content"],
        answer: 3,
        explanation:
          "« Set-Content » : Commande qui remplace le contenu d'un fichier. Les autres choix renvoient à « Add-Content », « -Raw », « Fichier journal » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Add-Content » ?",
        choices: [
          "Commande qui ajoute du texte à la fin d'un fichier",
          "Commande qui écrit la sortie d'un pipeline dans un fichier",
          "Paramètre qui choisit l'encodage de lecture ou d'écriture",
          "Méthode qui redirige le résultat d'une commande vers un fichier",
        ],
        answer: 0,
        explanation:
          "« Add-Content » : Commande qui ajoute du texte à la fin d'un fichier. Les autres choix renvoient à « Out-File », « -Encoding », « Pipeline vers Out-File » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui ajoute du texte à la fin d'un fichier » ?",
        choices: ["Out-File", "Add-Content", "-Encoding", "Pipeline vers Out-File"],
        answer: 1,
        explanation:
          "« Add-Content » : Commande qui ajoute du texte à la fin d'un fichier. Les autres choix renvoient à « Out-File », « -Encoding », « Pipeline vers Out-File » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Out-File » ?",
        choices: [
          "Option de Get-Content qui lit le texte comme une seule chaîne",
          "Encodage adapté aux caractères accentués et au partage de fichiers texte",
          "Commande qui écrit la sortie d'un pipeline dans un fichier",
          "Étape qui récupère le texte avant de le modifier puis de l'écrire",
        ],
        answer: 2,
        explanation:
          "« Out-File » : Commande qui écrit la sortie d'un pipeline dans un fichier. Les autres choix renvoient à « -Raw », « UTF-8 », « Lecture avant transformation » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui écrit la sortie d'un pipeline dans un fichier » ?",
        choices: ["-Raw", "UTF-8", "Lecture avant transformation", "Out-File"],
        answer: 3,
        explanation:
          "« Out-File » : Commande qui écrit la sortie d'un pipeline dans un fichier. Les autres choix renvoient à « -Raw », « UTF-8 », « Lecture avant transformation » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « -Raw » ?",
        choices: [
          "Option de Get-Content qui lit le texte comme une seule chaîne",
          "Paramètre qui choisit l'encodage de lecture ou d'écriture",
          "Fichier auquel on ajoute des événements successifs",
          "Commande qui lit le contenu d'un fichier",
        ],
        answer: 0,
        explanation:
          "« -Raw » : Option de Get-Content qui lit le texte comme une seule chaîne. Les autres choix renvoient à « -Encoding », « Fichier journal », « Get-Content » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Option de Get-Content qui lit le texte comme une seule chaîne » ?",
        choices: ["-Encoding", "-Raw", "Fichier journal", "Get-Content"],
        answer: 1,
        explanation:
          "« -Raw » : Option de Get-Content qui lit le texte comme une seule chaîne. Les autres choix renvoient à « -Encoding », « Fichier journal », « Get-Content » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « -Encoding » ?",
        choices: [
          "Encodage adapté aux caractères accentués et au partage de fichiers texte",
          "Méthode qui redirige le résultat d'une commande vers un fichier",
          "Paramètre qui choisit l'encodage de lecture ou d'écriture",
          "Commande qui remplace le contenu d'un fichier",
        ],
        answer: 2,
        explanation:
          "« -Encoding » : Paramètre qui choisit l'encodage de lecture ou d'écriture. Les autres choix renvoient à « UTF-8 », « Pipeline vers Out-File », « Set-Content » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Paramètre qui choisit l'encodage de lecture ou d'écriture » ?",
        choices: ["UTF-8", "Pipeline vers Out-File", "Set-Content", "-Encoding"],
        answer: 3,
        explanation:
          "« -Encoding » : Paramètre qui choisit l'encodage de lecture ou d'écriture. Les autres choix renvoient à « UTF-8 », « Pipeline vers Out-File », « Set-Content » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « UTF-8 » ?",
        choices: [
          "Encodage adapté aux caractères accentués et au partage de fichiers texte",
          "Fichier auquel on ajoute des événements successifs",
          "Étape qui récupère le texte avant de le modifier puis de l'écrire",
          "Commande qui ajoute du texte à la fin d'un fichier",
        ],
        answer: 0,
        explanation:
          "« UTF-8 » : Encodage adapté aux caractères accentués et au partage de fichiers texte. Les autres choix renvoient à « Fichier journal », « Lecture avant transformation », « Add-Content » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Encodage adapté aux caractères accentués et au partage de fichiers texte » ?",
        choices: ["Fichier journal", "UTF-8", "Lecture avant transformation", "Add-Content"],
        answer: 1,
        explanation:
          "« UTF-8 » : Encodage adapté aux caractères accentués et au partage de fichiers texte. Les autres choix renvoient à « Fichier journal », « Lecture avant transformation », « Add-Content » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Fichier journal » ?",
        choices: [
          "Méthode qui redirige le résultat d'une commande vers un fichier",
          "Commande qui lit le contenu d'un fichier",
          "Fichier auquel on ajoute des événements successifs",
          "Commande qui écrit la sortie d'un pipeline dans un fichier",
        ],
        answer: 2,
        explanation:
          "« Fichier journal » : Fichier auquel on ajoute des événements successifs. Les autres choix renvoient à « Pipeline vers Out-File », « Get-Content », « Out-File » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Fichier auquel on ajoute des événements successifs » ?",
        choices: ["Pipeline vers Out-File", "Get-Content", "Out-File", "Fichier journal"],
        answer: 3,
        explanation:
          "« Fichier journal » : Fichier auquel on ajoute des événements successifs. Les autres choix renvoient à « Pipeline vers Out-File », « Get-Content », « Out-File » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Pipeline vers Out-File » ?",
        choices: [
          "Méthode qui redirige le résultat d'une commande vers un fichier",
          "Étape qui récupère le texte avant de le modifier puis de l'écrire",
          "Commande qui remplace le contenu d'un fichier",
          "Option de Get-Content qui lit le texte comme une seule chaîne",
        ],
        answer: 0,
        explanation:
          "« Pipeline vers Out-File » : Méthode qui redirige le résultat d'une commande vers un fichier. Les autres choix renvoient à « Lecture avant transformation », « Set-Content », « -Raw » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Méthode qui redirige le résultat d'une commande vers un fichier » ?",
        choices: ["Lecture avant transformation", "Pipeline vers Out-File", "Set-Content", "-Raw"],
        answer: 1,
        explanation:
          "« Pipeline vers Out-File » : Méthode qui redirige le résultat d'une commande vers un fichier. Les autres choix renvoient à « Lecture avant transformation », « Set-Content », « -Raw » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Lecture avant transformation » ?",
        choices: [
          "Commande qui lit le contenu d'un fichier",
          "Commande qui ajoute du texte à la fin d'un fichier",
          "Étape qui récupère le texte avant de le modifier puis de l'écrire",
          "Paramètre qui choisit l'encodage de lecture ou d'écriture",
        ],
        answer: 2,
        explanation:
          "« Lecture avant transformation » : Étape qui récupère le texte avant de le modifier puis de l'écrire. Les autres choix renvoient à « Get-Content », « Add-Content », « -Encoding » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Étape qui récupère le texte avant de le modifier puis de l'écrire » ?",
        choices: ["Get-Content", "Add-Content", "-Encoding", "Lecture avant transformation"],
        answer: 3,
        explanation:
          "« Lecture avant transformation » : Étape qui récupère le texte avant de le modifier puis de l'écrire. Les autres choix renvoient à « Get-Content », « Add-Content », « -Encoding » ; comparez leur rôle avant de continuer.",
      },
    ],
  },
  "17-export-import": {
    id: "17-export-import",
    title: "Quiz — 17. Export et Import",
    chapter: "17. Export et Import",
    intro: "20 questions pour vérifier vos repères avant de passer aux exercices pratiques.",
    chapterLink: "../17-export-import/",
    questions: [
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Export-Csv » ?",
        choices: [
          "Commande qui écrit des objets en lignes de fichier CSV",
          "Commande qui recrée des objets à partir des lignes d'un CSV",
          "Commande qui transforme du texte JSON en objets",
          "Option d'Export-Csv qui évite une ligne de métadonnées de type dans certains environnements",
        ],
        answer: 0,
        explanation:
          "« Export-Csv » : Commande qui écrit des objets en lignes de fichier CSV. Les autres choix renvoient à « Import-Csv », « ConvertFrom-Json », « -NoTypeInformation » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui écrit des objets en lignes de fichier CSV » ?",
        choices: ["Import-Csv", "Export-Csv", "ConvertFrom-Json", "-NoTypeInformation"],
        answer: 1,
        explanation:
          "« Export-Csv » : Commande qui écrit des objets en lignes de fichier CSV. Les autres choix renvoient à « Import-Csv », « ConvertFrom-Json », « -NoTypeInformation » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Import-Csv » ?",
        choices: [
          "Commande qui transforme des objets en texte JSON",
          "Format tabulaire pratique pour des lignes et des colonnes simples",
          "Commande qui recrée des objets à partir des lignes d'un CSV",
          "Paramètre qui choisit le séparateur des colonnes CSV",
        ],
        answer: 2,
        explanation:
          "« Import-Csv » : Commande qui recrée des objets à partir des lignes d'un CSV. Les autres choix renvoient à « ConvertTo-Json », « CSV », « -Delimiter » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui recrée des objets à partir des lignes d'un CSV » ?",
        choices: ["ConvertTo-Json", "CSV", "-Delimiter", "Import-Csv"],
        answer: 3,
        explanation:
          "« Import-Csv » : Commande qui recrée des objets à partir des lignes d'un CSV. Les autres choix renvoient à « ConvertTo-Json », « CSV », « -Delimiter » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « ConvertTo-Json » ?",
        choices: [
          "Commande qui transforme des objets en texte JSON",
          "Commande qui transforme du texte JSON en objets",
          "Format qui peut représenter des structures et des collections imbriquées",
          "Choix qui préserve les caractères spéciaux lors d'un export ou import",
        ],
        answer: 0,
        explanation:
          "« ConvertTo-Json » : Commande qui transforme des objets en texte JSON. Les autres choix renvoient à « ConvertFrom-Json », « JSON », « Encodage » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui transforme des objets en texte JSON » ?",
        choices: ["ConvertFrom-Json", "ConvertTo-Json", "JSON", "Encodage"],
        answer: 1,
        explanation:
          "« ConvertTo-Json » : Commande qui transforme des objets en texte JSON. Les autres choix renvoient à « ConvertFrom-Json », « JSON », « Encodage » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « ConvertFrom-Json » ?",
        choices: [
          "Format tabulaire pratique pour des lignes et des colonnes simples",
          "Option d'Export-Csv qui évite une ligne de métadonnées de type dans certains environnements",
          "Commande qui transforme du texte JSON en objets",
          "Résultat qu'on peut à nouveau filtrer ou sélectionner après la lecture du fichier",
        ],
        answer: 2,
        explanation:
          "« ConvertFrom-Json » : Commande qui transforme du texte JSON en objets. Les autres choix renvoient à « CSV », « -NoTypeInformation », « Objet importé » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui transforme du texte JSON en objets » ?",
        choices: ["CSV", "-NoTypeInformation", "Objet importé", "ConvertFrom-Json"],
        answer: 3,
        explanation:
          "« ConvertFrom-Json » : Commande qui transforme du texte JSON en objets. Les autres choix renvoient à « CSV », « -NoTypeInformation », « Objet importé » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « CSV » ?",
        choices: [
          "Format tabulaire pratique pour des lignes et des colonnes simples",
          "Format qui peut représenter des structures et des collections imbriquées",
          "Paramètre qui choisit le séparateur des colonnes CSV",
          "Commande qui écrit des objets en lignes de fichier CSV",
        ],
        answer: 0,
        explanation:
          "« CSV » : Format tabulaire pratique pour des lignes et des colonnes simples. Les autres choix renvoient à « JSON », « -Delimiter », « Export-Csv » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Format tabulaire pratique pour des lignes et des colonnes simples » ?",
        choices: ["JSON", "CSV", "-Delimiter", "Export-Csv"],
        answer: 1,
        explanation:
          "« CSV » : Format tabulaire pratique pour des lignes et des colonnes simples. Les autres choix renvoient à « JSON », « -Delimiter », « Export-Csv » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « JSON » ?",
        choices: [
          "Option d'Export-Csv qui évite une ligne de métadonnées de type dans certains environnements",
          "Choix qui préserve les caractères spéciaux lors d'un export ou import",
          "Format qui peut représenter des structures et des collections imbriquées",
          "Commande qui recrée des objets à partir des lignes d'un CSV",
        ],
        answer: 2,
        explanation:
          "« JSON » : Format qui peut représenter des structures et des collections imbriquées. Les autres choix renvoient à « -NoTypeInformation », « Encodage », « Import-Csv » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Format qui peut représenter des structures et des collections imbriquées » ?",
        choices: ["-NoTypeInformation", "Encodage", "Import-Csv", "JSON"],
        answer: 3,
        explanation:
          "« JSON » : Format qui peut représenter des structures et des collections imbriquées. Les autres choix renvoient à « -NoTypeInformation », « Encodage », « Import-Csv » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « -NoTypeInformation » ?",
        choices: [
          "Option d'Export-Csv qui évite une ligne de métadonnées de type dans certains environnements",
          "Paramètre qui choisit le séparateur des colonnes CSV",
          "Résultat qu'on peut à nouveau filtrer ou sélectionner après la lecture du fichier",
          "Commande qui transforme des objets en texte JSON",
        ],
        answer: 0,
        explanation:
          "« -NoTypeInformation » : Option d'Export-Csv qui évite une ligne de métadonnées de type dans certains environnements. Les autres choix renvoient à « -Delimiter », « Objet importé », « ConvertTo-Json » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Option d'Export-Csv qui évite une ligne de métadonnées de type dans certains environnements » ?",
        choices: ["-Delimiter", "-NoTypeInformation", "Objet importé", "ConvertTo-Json"],
        answer: 1,
        explanation:
          "« -NoTypeInformation » : Option d'Export-Csv qui évite une ligne de métadonnées de type dans certains environnements. Les autres choix renvoient à « -Delimiter », « Objet importé », « ConvertTo-Json » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « -Delimiter » ?",
        choices: [
          "Choix qui préserve les caractères spéciaux lors d'un export ou import",
          "Commande qui écrit des objets en lignes de fichier CSV",
          "Paramètre qui choisit le séparateur des colonnes CSV",
          "Commande qui transforme du texte JSON en objets",
        ],
        answer: 2,
        explanation:
          "« -Delimiter » : Paramètre qui choisit le séparateur des colonnes CSV. Les autres choix renvoient à « Encodage », « Export-Csv », « ConvertFrom-Json » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Paramètre qui choisit le séparateur des colonnes CSV » ?",
        choices: ["Encodage", "Export-Csv", "ConvertFrom-Json", "-Delimiter"],
        answer: 3,
        explanation:
          "« -Delimiter » : Paramètre qui choisit le séparateur des colonnes CSV. Les autres choix renvoient à « Encodage », « Export-Csv », « ConvertFrom-Json » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Encodage » ?",
        choices: [
          "Choix qui préserve les caractères spéciaux lors d'un export ou import",
          "Résultat qu'on peut à nouveau filtrer ou sélectionner après la lecture du fichier",
          "Commande qui recrée des objets à partir des lignes d'un CSV",
          "Format tabulaire pratique pour des lignes et des colonnes simples",
        ],
        answer: 0,
        explanation:
          "« Encodage » : Choix qui préserve les caractères spéciaux lors d'un export ou import. Les autres choix renvoient à « Objet importé », « Import-Csv », « CSV » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Choix qui préserve les caractères spéciaux lors d'un export ou import » ?",
        choices: ["Objet importé", "Encodage", "Import-Csv", "CSV"],
        answer: 1,
        explanation:
          "« Encodage » : Choix qui préserve les caractères spéciaux lors d'un export ou import. Les autres choix renvoient à « Objet importé », « Import-Csv », « CSV » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Objet importé » ?",
        choices: [
          "Commande qui écrit des objets en lignes de fichier CSV",
          "Commande qui transforme des objets en texte JSON",
          "Résultat qu'on peut à nouveau filtrer ou sélectionner après la lecture du fichier",
          "Format qui peut représenter des structures et des collections imbriquées",
        ],
        answer: 2,
        explanation:
          "« Objet importé » : Résultat qu'on peut à nouveau filtrer ou sélectionner après la lecture du fichier. Les autres choix renvoient à « Export-Csv », « ConvertTo-Json », « JSON » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Résultat qu'on peut à nouveau filtrer ou sélectionner après la lecture du fichier » ?",
        choices: ["Export-Csv", "ConvertTo-Json", "JSON", "Objet importé"],
        answer: 3,
        explanation:
          "« Objet importé » : Résultat qu'on peut à nouveau filtrer ou sélectionner après la lecture du fichier. Les autres choix renvoient à « Export-Csv », « ConvertTo-Json », « JSON » ; comparez leur rôle avant de continuer.",
      },
    ],
  },
  "18-registre-journaux-certificats": {
    id: "18-registre-journaux-certificats",
    title: "Quiz — 18. Registre, journaux et certificats",
    chapter: "18. Registre, journaux et certificats",
    intro: "20 questions pour vérifier vos repères avant de passer aux exercices pratiques.",
    chapterLink: "../18-registre-journaux-certificats/",
    questions: [
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « PSDrive » ?",
        choices: [
          "Lecteur PowerShell qui expose un fournisseur avec une navigation semblable aux dossiers",
          "Commande qui liste les lecteurs PowerShell disponibles",
          "Lecteur qui donne accès à la ruche registre de l'utilisateur courant",
          "Historique des événements enregistrés par Windows et les applications",
        ],
        answer: 0,
        explanation:
          "« PSDrive » : Lecteur PowerShell qui expose un fournisseur avec une navigation semblable aux dossiers. Les autres choix renvoient à « Get-PSDrive », « HKCU: », « Journal d'événements » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Lecteur PowerShell qui expose un fournisseur avec une navigation semblable aux dossiers » ?",
        choices: ["Get-PSDrive", "PSDrive", "HKCU:", "Journal d'événements"],
        answer: 1,
        explanation:
          "« PSDrive » : Lecteur PowerShell qui expose un fournisseur avec une navigation semblable aux dossiers. Les autres choix renvoient à « Get-PSDrive », « HKCU: », « Journal d'événements » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Get-PSDrive » ?",
        choices: [
          "Lecteur qui donne accès à la ruche registre de la machine",
          "Commande qui lit les propriétés d'une clé du registre",
          "Commande qui liste les lecteurs PowerShell disponibles",
          "Lecteur PowerShell qui permet d'explorer les magasins de certificats",
        ],
        answer: 2,
        explanation:
          "« Get-PSDrive » : Commande qui liste les lecteurs PowerShell disponibles. Les autres choix renvoient à « HKLM: », « Get-ItemProperty », « Cert: » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui liste les lecteurs PowerShell disponibles » ?",
        choices: ["HKLM:", "Get-ItemProperty", "Cert:", "Get-PSDrive"],
        answer: 3,
        explanation:
          "« Get-PSDrive » : Commande qui liste les lecteurs PowerShell disponibles. Les autres choix renvoient à « HKLM: », « Get-ItemProperty », « Cert: » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « HKLM: » ?",
        choices: [
          "Lecteur qui donne accès à la ruche registre de la machine",
          "Lecteur qui donne accès à la ruche registre de l'utilisateur courant",
          "Commande qui lit les événements des journaux Windows",
          "Objet associé notamment à une identité et à une clé publique",
        ],
        answer: 0,
        explanation:
          "« HKLM: » : Lecteur qui donne accès à la ruche registre de la machine. Les autres choix renvoient à « HKCU: », « Get-WinEvent », « Certificat » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Lecteur qui donne accès à la ruche registre de la machine » ?",
        choices: ["HKCU:", "HKLM:", "Get-WinEvent", "Certificat"],
        answer: 1,
        explanation:
          "« HKLM: » : Lecteur qui donne accès à la ruche registre de la machine. Les autres choix renvoient à « HKCU: », « Get-WinEvent », « Certificat » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « HKCU: » ?",
        choices: [
          "Commande qui lit les propriétés d'une clé du registre",
          "Historique des événements enregistrés par Windows et les applications",
          "Lecteur qui donne accès à la ruche registre de l'utilisateur courant",
          "Précaution indispensable avant de toucher au registre ou aux certificats",
        ],
        answer: 2,
        explanation:
          "« HKCU: » : Lecteur qui donne accès à la ruche registre de l'utilisateur courant. Les autres choix renvoient à « Get-ItemProperty », « Journal d'événements », « Lecture avant modification » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Lecteur qui donne accès à la ruche registre de l'utilisateur courant » ?",
        choices: [
          "Get-ItemProperty",
          "Journal d'événements",
          "Lecture avant modification",
          "HKCU:",
        ],
        answer: 3,
        explanation:
          "« HKCU: » : Lecteur qui donne accès à la ruche registre de l'utilisateur courant. Les autres choix renvoient à « Get-ItemProperty », « Journal d'événements », « Lecture avant modification » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Get-ItemProperty » ?",
        choices: [
          "Commande qui lit les propriétés d'une clé du registre",
          "Commande qui lit les événements des journaux Windows",
          "Lecteur PowerShell qui permet d'explorer les magasins de certificats",
          "Lecteur PowerShell qui expose un fournisseur avec une navigation semblable aux dossiers",
        ],
        answer: 0,
        explanation:
          "« Get-ItemProperty » : Commande qui lit les propriétés d'une clé du registre. Les autres choix renvoient à « Get-WinEvent », « Cert: », « PSDrive » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui lit les propriétés d'une clé du registre » ?",
        choices: ["Get-WinEvent", "Get-ItemProperty", "Cert:", "PSDrive"],
        answer: 1,
        explanation:
          "« Get-ItemProperty » : Commande qui lit les propriétés d'une clé du registre. Les autres choix renvoient à « Get-WinEvent », « Cert: », « PSDrive » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Get-WinEvent » ?",
        choices: [
          "Historique des événements enregistrés par Windows et les applications",
          "Objet associé notamment à une identité et à une clé publique",
          "Commande qui lit les événements des journaux Windows",
          "Commande qui liste les lecteurs PowerShell disponibles",
        ],
        answer: 2,
        explanation:
          "« Get-WinEvent » : Commande qui lit les événements des journaux Windows. Les autres choix renvoient à « Journal d'événements », « Certificat », « Get-PSDrive » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui lit les événements des journaux Windows » ?",
        choices: ["Journal d'événements", "Certificat", "Get-PSDrive", "Get-WinEvent"],
        answer: 3,
        explanation:
          "« Get-WinEvent » : Commande qui lit les événements des journaux Windows. Les autres choix renvoient à « Journal d'événements », « Certificat », « Get-PSDrive » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Journal d'événements » ?",
        choices: [
          "Historique des événements enregistrés par Windows et les applications",
          "Lecteur PowerShell qui permet d'explorer les magasins de certificats",
          "Précaution indispensable avant de toucher au registre ou aux certificats",
          "Lecteur qui donne accès à la ruche registre de la machine",
        ],
        answer: 0,
        explanation:
          "« Journal d'événements » : Historique des événements enregistrés par Windows et les applications. Les autres choix renvoient à « Cert: », « Lecture avant modification », « HKLM: » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Historique des événements enregistrés par Windows et les applications » ?",
        choices: ["Cert:", "Journal d'événements", "Lecture avant modification", "HKLM:"],
        answer: 1,
        explanation:
          "« Journal d'événements » : Historique des événements enregistrés par Windows et les applications. Les autres choix renvoient à « Cert: », « Lecture avant modification », « HKLM: » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Cert: » ?",
        choices: [
          "Objet associé notamment à une identité et à une clé publique",
          "Lecteur PowerShell qui expose un fournisseur avec une navigation semblable aux dossiers",
          "Lecteur PowerShell qui permet d'explorer les magasins de certificats",
          "Lecteur qui donne accès à la ruche registre de l'utilisateur courant",
        ],
        answer: 2,
        explanation:
          "« Cert: » : Lecteur PowerShell qui permet d'explorer les magasins de certificats. Les autres choix renvoient à « Certificat », « PSDrive », « HKCU: » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Lecteur PowerShell qui permet d'explorer les magasins de certificats » ?",
        choices: ["Certificat", "PSDrive", "HKCU:", "Cert:"],
        answer: 3,
        explanation:
          "« Cert: » : Lecteur PowerShell qui permet d'explorer les magasins de certificats. Les autres choix renvoient à « Certificat », « PSDrive », « HKCU: » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Certificat » ?",
        choices: [
          "Objet associé notamment à une identité et à une clé publique",
          "Précaution indispensable avant de toucher au registre ou aux certificats",
          "Commande qui liste les lecteurs PowerShell disponibles",
          "Commande qui lit les propriétés d'une clé du registre",
        ],
        answer: 0,
        explanation:
          "« Certificat » : Objet associé notamment à une identité et à une clé publique. Les autres choix renvoient à « Lecture avant modification », « Get-PSDrive », « Get-ItemProperty » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Objet associé notamment à une identité et à une clé publique » ?",
        choices: ["Lecture avant modification", "Certificat", "Get-PSDrive", "Get-ItemProperty"],
        answer: 1,
        explanation:
          "« Certificat » : Objet associé notamment à une identité et à une clé publique. Les autres choix renvoient à « Lecture avant modification », « Get-PSDrive », « Get-ItemProperty » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Lecture avant modification » ?",
        choices: [
          "Lecteur PowerShell qui expose un fournisseur avec une navigation semblable aux dossiers",
          "Lecteur qui donne accès à la ruche registre de la machine",
          "Précaution indispensable avant de toucher au registre ou aux certificats",
          "Commande qui lit les événements des journaux Windows",
        ],
        answer: 2,
        explanation:
          "« Lecture avant modification » : Précaution indispensable avant de toucher au registre ou aux certificats. Les autres choix renvoient à « PSDrive », « HKLM: », « Get-WinEvent » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Précaution indispensable avant de toucher au registre ou aux certificats » ?",
        choices: ["PSDrive", "HKLM:", "Get-WinEvent", "Lecture avant modification"],
        answer: 3,
        explanation:
          "« Lecture avant modification » : Précaution indispensable avant de toucher au registre ou aux certificats. Les autres choix renvoient à « PSDrive », « HKLM: », « Get-WinEvent » ; comparez leur rôle avant de continuer.",
      },
    ],
  },
  "19-signature-scripts": {
    id: "19-signature-scripts",
    title: "Quiz — 19. Sécurité et signature des scripts",
    chapter: "19. Sécurité et signature des scripts",
    intro: "20 questions pour vérifier vos repères avant de passer aux exercices pratiques.",
    chapterLink: "../19-signature-scripts/",
    questions: [
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Get-ExecutionPolicy » ?",
        choices: [
          "Commande qui affiche la politique d'exécution effective",
          "Commande qui change une politique d'exécution dans une portée choisie",
          "Politique qui exige une signature pour tous les scripts",
          "Commande qui appose une signature Authenticode sur un script",
        ],
        answer: 0,
        explanation:
          "« Get-ExecutionPolicy » : Commande qui affiche la politique d'exécution effective. Les autres choix renvoient à « Set-ExecutionPolicy », « AllSigned », « Set-AuthenticodeSignature » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui affiche la politique d'exécution effective » ?",
        choices: [
          "Set-ExecutionPolicy",
          "Get-ExecutionPolicy",
          "AllSigned",
          "Set-AuthenticodeSignature",
        ],
        answer: 1,
        explanation:
          "« Get-ExecutionPolicy » : Commande qui affiche la politique d'exécution effective. Les autres choix renvoient à « Set-ExecutionPolicy », « AllSigned », « Set-AuthenticodeSignature » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Set-ExecutionPolicy » ?",
        choices: [
          "Politique qui demande la signature des scripts portant la marque du web",
          "Marque qui indique qu'un fichier provient d'une zone distante",
          "Commande qui change une politique d'exécution dans une portée choisie",
          "Commande qui inspecte l'état de signature d'un script",
        ],
        answer: 2,
        explanation:
          "« Set-ExecutionPolicy » : Commande qui change une politique d'exécution dans une portée choisie. Les autres choix renvoient à « RemoteSigned », « Mark of the Web », « Get-AuthenticodeSignature » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui change une politique d'exécution dans une portée choisie » ?",
        choices: [
          "RemoteSigned",
          "Mark of the Web",
          "Get-AuthenticodeSignature",
          "Set-ExecutionPolicy",
        ],
        answer: 3,
        explanation:
          "« Set-ExecutionPolicy » : Commande qui change une politique d'exécution dans une portée choisie. Les autres choix renvoient à « RemoteSigned », « Mark of the Web », « Get-AuthenticodeSignature » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « RemoteSigned » ?",
        choices: [
          "Politique qui demande la signature des scripts portant la marque du web",
          "Politique qui exige une signature pour tous les scripts",
          "Commande qui retire la marque du web d'un fichier vérifié",
          "Certificat adapté pour signer un script et identifier son signataire",
        ],
        answer: 0,
        explanation:
          "« RemoteSigned » : Politique qui demande la signature des scripts portant la marque du web. Les autres choix renvoient à « AllSigned », « Unblock-File », « Certificat de signature de code » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Politique qui demande la signature des scripts portant la marque du web » ?",
        choices: ["AllSigned", "RemoteSigned", "Unblock-File", "Certificat de signature de code"],
        answer: 1,
        explanation:
          "« RemoteSigned » : Politique qui demande la signature des scripts portant la marque du web. Les autres choix renvoient à « AllSigned », « Unblock-File », « Certificat de signature de code » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « AllSigned » ?",
        choices: [
          "Marque qui indique qu'un fichier provient d'une zone distante",
          "Commande qui appose une signature Authenticode sur un script",
          "Politique qui exige une signature pour tous les scripts",
          "Condition qui compte en plus de la présence technique d'une signature valide",
        ],
        answer: 2,
        explanation:
          "« AllSigned » : Politique qui exige une signature pour tous les scripts. Les autres choix renvoient à « Mark of the Web », « Set-AuthenticodeSignature », « Confiance dans l'émetteur » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Politique qui exige une signature pour tous les scripts » ?",
        choices: [
          "Mark of the Web",
          "Set-AuthenticodeSignature",
          "Confiance dans l'émetteur",
          "AllSigned",
        ],
        answer: 3,
        explanation:
          "« AllSigned » : Politique qui exige une signature pour tous les scripts. Les autres choix renvoient à « Mark of the Web », « Set-AuthenticodeSignature », « Confiance dans l'émetteur » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Mark of the Web » ?",
        choices: [
          "Marque qui indique qu'un fichier provient d'une zone distante",
          "Commande qui retire la marque du web d'un fichier vérifié",
          "Commande qui inspecte l'état de signature d'un script",
          "Commande qui affiche la politique d'exécution effective",
        ],
        answer: 0,
        explanation:
          "« Mark of the Web » : Marque qui indique qu'un fichier provient d'une zone distante. Les autres choix renvoient à « Unblock-File », « Get-AuthenticodeSignature », « Get-ExecutionPolicy » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Marque qui indique qu'un fichier provient d'une zone distante » ?",
        choices: [
          "Unblock-File",
          "Mark of the Web",
          "Get-AuthenticodeSignature",
          "Get-ExecutionPolicy",
        ],
        answer: 1,
        explanation:
          "« Mark of the Web » : Marque qui indique qu'un fichier provient d'une zone distante. Les autres choix renvoient à « Unblock-File », « Get-AuthenticodeSignature », « Get-ExecutionPolicy » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Unblock-File » ?",
        choices: [
          "Commande qui appose une signature Authenticode sur un script",
          "Certificat adapté pour signer un script et identifier son signataire",
          "Commande qui retire la marque du web d'un fichier vérifié",
          "Commande qui change une politique d'exécution dans une portée choisie",
        ],
        answer: 2,
        explanation:
          "« Unblock-File » : Commande qui retire la marque du web d'un fichier vérifié. Les autres choix renvoient à « Set-AuthenticodeSignature », « Certificat de signature de code », « Set-ExecutionPolicy » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui retire la marque du web d'un fichier vérifié » ?",
        choices: [
          "Set-AuthenticodeSignature",
          "Certificat de signature de code",
          "Set-ExecutionPolicy",
          "Unblock-File",
        ],
        answer: 3,
        explanation:
          "« Unblock-File » : Commande qui retire la marque du web d'un fichier vérifié. Les autres choix renvoient à « Set-AuthenticodeSignature », « Certificat de signature de code », « Set-ExecutionPolicy » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Set-AuthenticodeSignature » ?",
        choices: [
          "Commande qui appose une signature Authenticode sur un script",
          "Commande qui inspecte l'état de signature d'un script",
          "Condition qui compte en plus de la présence technique d'une signature valide",
          "Politique qui demande la signature des scripts portant la marque du web",
        ],
        answer: 0,
        explanation:
          "« Set-AuthenticodeSignature » : Commande qui appose une signature Authenticode sur un script. Les autres choix renvoient à « Get-AuthenticodeSignature », « Confiance dans l'émetteur », « RemoteSigned » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui appose une signature Authenticode sur un script » ?",
        choices: [
          "Get-AuthenticodeSignature",
          "Set-AuthenticodeSignature",
          "Confiance dans l'émetteur",
          "RemoteSigned",
        ],
        answer: 1,
        explanation:
          "« Set-AuthenticodeSignature » : Commande qui appose une signature Authenticode sur un script. Les autres choix renvoient à « Get-AuthenticodeSignature », « Confiance dans l'émetteur », « RemoteSigned » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Get-AuthenticodeSignature » ?",
        choices: [
          "Certificat adapté pour signer un script et identifier son signataire",
          "Commande qui affiche la politique d'exécution effective",
          "Commande qui inspecte l'état de signature d'un script",
          "Politique qui exige une signature pour tous les scripts",
        ],
        answer: 2,
        explanation:
          "« Get-AuthenticodeSignature » : Commande qui inspecte l'état de signature d'un script. Les autres choix renvoient à « Certificat de signature de code », « Get-ExecutionPolicy », « AllSigned » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui inspecte l'état de signature d'un script » ?",
        choices: [
          "Certificat de signature de code",
          "Get-ExecutionPolicy",
          "AllSigned",
          "Get-AuthenticodeSignature",
        ],
        answer: 3,
        explanation:
          "« Get-AuthenticodeSignature » : Commande qui inspecte l'état de signature d'un script. Les autres choix renvoient à « Certificat de signature de code », « Get-ExecutionPolicy », « AllSigned » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Certificat de signature de code » ?",
        choices: [
          "Certificat adapté pour signer un script et identifier son signataire",
          "Condition qui compte en plus de la présence technique d'une signature valide",
          "Commande qui change une politique d'exécution dans une portée choisie",
          "Marque qui indique qu'un fichier provient d'une zone distante",
        ],
        answer: 0,
        explanation:
          "« Certificat de signature de code » : Certificat adapté pour signer un script et identifier son signataire. Les autres choix renvoient à « Confiance dans l'émetteur », « Set-ExecutionPolicy », « Mark of the Web » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Certificat adapté pour signer un script et identifier son signataire » ?",
        choices: [
          "Confiance dans l'émetteur",
          "Certificat de signature de code",
          "Set-ExecutionPolicy",
          "Mark of the Web",
        ],
        answer: 1,
        explanation:
          "« Certificat de signature de code » : Certificat adapté pour signer un script et identifier son signataire. Les autres choix renvoient à « Confiance dans l'émetteur », « Set-ExecutionPolicy », « Mark of the Web » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Confiance dans l'émetteur » ?",
        choices: [
          "Commande qui affiche la politique d'exécution effective",
          "Politique qui demande la signature des scripts portant la marque du web",
          "Condition qui compte en plus de la présence technique d'une signature valide",
          "Commande qui retire la marque du web d'un fichier vérifié",
        ],
        answer: 2,
        explanation:
          "« Confiance dans l'émetteur » : Condition qui compte en plus de la présence technique d'une signature valide. Les autres choix renvoient à « Get-ExecutionPolicy », « RemoteSigned », « Unblock-File » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Condition qui compte en plus de la présence technique d'une signature valide » ?",
        choices: [
          "Get-ExecutionPolicy",
          "RemoteSigned",
          "Unblock-File",
          "Confiance dans l'émetteur",
        ],
        answer: 3,
        explanation:
          "« Confiance dans l'émetteur » : Condition qui compte en plus de la présence technique d'une signature valide. Les autres choix renvoient à « Get-ExecutionPolicy », « RemoteSigned », « Unblock-File » ; comparez leur rôle avant de continuer.",
      },
    ],
  },
  "20-gestion-des-erreurs": {
    id: "20-gestion-des-erreurs",
    title: "Quiz — 20. Gestion des erreurs",
    chapter: "20. Gestion des erreurs",
    intro: "20 questions pour vérifier vos repères avant de passer aux exercices pratiques.",
    chapterLink: "../20-gestion-des-erreurs/",
    questions: [
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « try » ?",
        choices: [
          "Bloc dans lequel on exécute une opération susceptible d'échouer",
          "Bloc qui traite une erreur interceptée",
          "Option qui transforme certaines erreurs non bloquantes en erreurs interceptables",
          "Erreur qui interrompt l'opération en cours et peut être interceptée",
        ],
        answer: 0,
        explanation:
          "« try » : Bloc dans lequel on exécute une opération susceptible d'échouer. Les autres choix renvoient à « catch », « -ErrorAction Stop », « Erreur terminante » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Bloc dans lequel on exécute une opération susceptible d'échouer » ?",
        choices: ["catch", "try", "-ErrorAction Stop", "Erreur terminante"],
        answer: 1,
        explanation:
          "« try » : Bloc dans lequel on exécute une opération susceptible d'échouer. Les autres choix renvoient à « catch », « -ErrorAction Stop », « Erreur terminante » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « catch » ?",
        choices: [
          "Bloc de nettoyage exécuté après try et catch",
          "Objet de l'erreur actuellement interceptée",
          "Bloc qui traite une erreur interceptée",
          "Erreur signalée sans forcément arrêter tout le pipeline",
        ],
        answer: 2,
        explanation:
          "« catch » : Bloc qui traite une erreur interceptée. Les autres choix renvoient à « finally », « $_ dans catch », « Erreur non terminante » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Bloc qui traite une erreur interceptée » ?",
        choices: ["finally", "$_ dans catch", "Erreur non terminante", "catch"],
        answer: 3,
        explanation:
          "« catch » : Bloc qui traite une erreur interceptée. Les autres choix renvoient à « finally », « $_ dans catch », « Erreur non terminante » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « finally » ?",
        choices: [
          "Bloc de nettoyage exécuté après try et catch",
          "Option qui transforme certaines erreurs non bloquantes en erreurs interceptables",
          "Vérification préalable de l'existence d'un chemin",
          "Retour qui explique ce qui a échoué et ce que l'utilisateur peut faire",
        ],
        answer: 0,
        explanation:
          "« finally » : Bloc de nettoyage exécuté après try et catch. Les autres choix renvoient à « -ErrorAction Stop », « Test-Path », « Message d'erreur utile » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Bloc de nettoyage exécuté après try et catch » ?",
        choices: ["-ErrorAction Stop", "finally", "Test-Path", "Message d'erreur utile"],
        answer: 1,
        explanation:
          "« finally » : Bloc de nettoyage exécuté après try et catch. Les autres choix renvoient à « -ErrorAction Stop », « Test-Path », « Message d'erreur utile » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « -ErrorAction Stop » ?",
        choices: [
          "Objet de l'erreur actuellement interceptée",
          "Erreur qui interrompt l'opération en cours et peut être interceptée",
          "Option qui transforme certaines erreurs non bloquantes en erreurs interceptables",
          "Action qui libère des ressources ou remet le contexte en ordre après une tentative",
        ],
        answer: 2,
        explanation:
          "« -ErrorAction Stop » : Option qui transforme certaines erreurs non bloquantes en erreurs interceptables. Les autres choix renvoient à « $_ dans catch », « Erreur terminante », « Nettoyage » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Option qui transforme certaines erreurs non bloquantes en erreurs interceptables » ?",
        choices: ["$_ dans catch", "Erreur terminante", "Nettoyage", "-ErrorAction Stop"],
        answer: 3,
        explanation:
          "« -ErrorAction Stop » : Option qui transforme certaines erreurs non bloquantes en erreurs interceptables. Les autres choix renvoient à « $_ dans catch », « Erreur terminante », « Nettoyage » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « $_ dans catch » ?",
        choices: [
          "Objet de l'erreur actuellement interceptée",
          "Vérification préalable de l'existence d'un chemin",
          "Erreur signalée sans forcément arrêter tout le pipeline",
          "Bloc dans lequel on exécute une opération susceptible d'échouer",
        ],
        answer: 0,
        explanation:
          "« $_ dans catch » : Objet de l'erreur actuellement interceptée. Les autres choix renvoient à « Test-Path », « Erreur non terminante », « try » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Objet de l'erreur actuellement interceptée » ?",
        choices: ["Test-Path", "$_ dans catch", "Erreur non terminante", "try"],
        answer: 1,
        explanation:
          "« $_ dans catch » : Objet de l'erreur actuellement interceptée. Les autres choix renvoient à « Test-Path », « Erreur non terminante », « try » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Test-Path » ?",
        choices: [
          "Erreur qui interrompt l'opération en cours et peut être interceptée",
          "Retour qui explique ce qui a échoué et ce que l'utilisateur peut faire",
          "Vérification préalable de l'existence d'un chemin",
          "Bloc qui traite une erreur interceptée",
        ],
        answer: 2,
        explanation:
          "« Test-Path » : Vérification préalable de l'existence d'un chemin. Les autres choix renvoient à « Erreur terminante », « Message d'erreur utile », « catch » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Vérification préalable de l'existence d'un chemin » ?",
        choices: ["Erreur terminante", "Message d'erreur utile", "catch", "Test-Path"],
        answer: 3,
        explanation:
          "« Test-Path » : Vérification préalable de l'existence d'un chemin. Les autres choix renvoient à « Erreur terminante », « Message d'erreur utile », « catch » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Erreur terminante » ?",
        choices: [
          "Erreur qui interrompt l'opération en cours et peut être interceptée",
          "Erreur signalée sans forcément arrêter tout le pipeline",
          "Action qui libère des ressources ou remet le contexte en ordre après une tentative",
          "Bloc de nettoyage exécuté après try et catch",
        ],
        answer: 0,
        explanation:
          "« Erreur terminante » : Erreur qui interrompt l'opération en cours et peut être interceptée. Les autres choix renvoient à « Erreur non terminante », « Nettoyage », « finally » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Erreur qui interrompt l'opération en cours et peut être interceptée » ?",
        choices: ["Erreur non terminante", "Erreur terminante", "Nettoyage", "finally"],
        answer: 1,
        explanation:
          "« Erreur terminante » : Erreur qui interrompt l'opération en cours et peut être interceptée. Les autres choix renvoient à « Erreur non terminante », « Nettoyage », « finally » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Erreur non terminante » ?",
        choices: [
          "Retour qui explique ce qui a échoué et ce que l'utilisateur peut faire",
          "Bloc dans lequel on exécute une opération susceptible d'échouer",
          "Erreur signalée sans forcément arrêter tout le pipeline",
          "Option qui transforme certaines erreurs non bloquantes en erreurs interceptables",
        ],
        answer: 2,
        explanation:
          "« Erreur non terminante » : Erreur signalée sans forcément arrêter tout le pipeline. Les autres choix renvoient à « Message d'erreur utile », « try », « -ErrorAction Stop » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Erreur signalée sans forcément arrêter tout le pipeline » ?",
        choices: ["Message d'erreur utile", "try", "-ErrorAction Stop", "Erreur non terminante"],
        answer: 3,
        explanation:
          "« Erreur non terminante » : Erreur signalée sans forcément arrêter tout le pipeline. Les autres choix renvoient à « Message d'erreur utile », « try », « -ErrorAction Stop » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Message d'erreur utile » ?",
        choices: [
          "Retour qui explique ce qui a échoué et ce que l'utilisateur peut faire",
          "Action qui libère des ressources ou remet le contexte en ordre après une tentative",
          "Bloc qui traite une erreur interceptée",
          "Objet de l'erreur actuellement interceptée",
        ],
        answer: 0,
        explanation:
          "« Message d'erreur utile » : Retour qui explique ce qui a échoué et ce que l'utilisateur peut faire. Les autres choix renvoient à « Nettoyage », « catch », « $_ dans catch » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Retour qui explique ce qui a échoué et ce que l'utilisateur peut faire » ?",
        choices: ["Nettoyage", "Message d'erreur utile", "catch", "$_ dans catch"],
        answer: 1,
        explanation:
          "« Message d'erreur utile » : Retour qui explique ce qui a échoué et ce que l'utilisateur peut faire. Les autres choix renvoient à « Nettoyage », « catch », « $_ dans catch » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Nettoyage » ?",
        choices: [
          "Bloc dans lequel on exécute une opération susceptible d'échouer",
          "Bloc de nettoyage exécuté après try et catch",
          "Action qui libère des ressources ou remet le contexte en ordre après une tentative",
          "Vérification préalable de l'existence d'un chemin",
        ],
        answer: 2,
        explanation:
          "« Nettoyage » : Action qui libère des ressources ou remet le contexte en ordre après une tentative. Les autres choix renvoient à « try », « finally », « Test-Path » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Action qui libère des ressources ou remet le contexte en ordre après une tentative » ?",
        choices: ["try", "finally", "Test-Path", "Nettoyage"],
        answer: 3,
        explanation:
          "« Nettoyage » : Action qui libère des ressources ou remet le contexte en ordre après une tentative. Les autres choix renvoient à « try », « finally », « Test-Path » ; comparez leur rôle avant de continuer.",
      },
    ],
  },
  "21-erreurs-avancees": {
    id: "21-erreurs-avancees",
    title: "Quiz — 21. Gestion des erreurs avancée",
    chapter: "21. Gestion des erreurs avancée",
    intro: "20 questions pour vérifier vos repères avant de passer aux exercices pratiques.",
    chapterLink: "../21-erreurs-avancees/",
    questions: [
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « throw » ?",
        choices: [
          "Instruction qui déclenche volontairement une erreur terminante",
          "Réglage qui influence le traitement par défaut des erreurs non terminantes",
          "Commande qui écrit dans le flux d'erreur",
          "Commande qui émet un message de débogage",
        ],
        answer: 0,
        explanation:
          "« throw » : Instruction qui déclenche volontairement une erreur terminante. Les autres choix renvoient à « $ErrorActionPreference », « Write-Error », « Write-Debug » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Instruction qui déclenche volontairement une erreur terminante » ?",
        choices: ["$ErrorActionPreference", "throw", "Write-Error", "Write-Debug"],
        answer: 1,
        explanation:
          "« throw » : Instruction qui déclenche volontairement une erreur terminante. Les autres choix renvoient à « $ErrorActionPreference », « Write-Error », « Write-Debug » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « $ErrorActionPreference » ?",
        choices: [
          "Collection des erreurs récentes de la session",
          "Commande qui écrit un avertissement distinct d'une erreur",
          "Réglage qui influence le traitement par défaut des erreurs non terminantes",
          "Code de sortie de la dernière application native exécutée",
        ],
        answer: 2,
        explanation:
          "« $ErrorActionPreference » : Réglage qui influence le traitement par défaut des erreurs non terminantes. Les autres choix renvoient à « $Error », « Write-Warning », « $LASTEXITCODE » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Réglage qui influence le traitement par défaut des erreurs non terminantes » ?",
        choices: ["$Error", "Write-Warning", "$LASTEXITCODE", "$ErrorActionPreference"],
        answer: 3,
        explanation:
          "« $ErrorActionPreference » : Réglage qui influence le traitement par défaut des erreurs non terminantes. Les autres choix renvoient à « $Error », « Write-Warning », « $LASTEXITCODE » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « $Error » ?",
        choices: [
          "Collection des erreurs récentes de la session",
          "Commande qui écrit dans le flux d'erreur",
          "Commande qui émet un détail facultatif de diagnostic",
          "Instruction qui fixe le code de fin d'un script ou processus",
        ],
        answer: 0,
        explanation:
          "« $Error » : Collection des erreurs récentes de la session. Les autres choix renvoient à « Write-Error », « Write-Verbose », « exit » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Collection des erreurs récentes de la session » ?",
        choices: ["Write-Error", "$Error", "Write-Verbose", "exit"],
        answer: 1,
        explanation:
          "« $Error » : Collection des erreurs récentes de la session. Les autres choix renvoient à « Write-Error », « Write-Verbose », « exit » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Write-Error » ?",
        choices: [
          "Commande qui écrit un avertissement distinct d'une erreur",
          "Commande qui émet un message de débogage",
          "Commande qui écrit dans le flux d'erreur",
          "Canal qui sépare résultats, erreurs et messages de diagnostic",
        ],
        answer: 2,
        explanation:
          "« Write-Error » : Commande qui écrit dans le flux d'erreur. Les autres choix renvoient à « Write-Warning », « Write-Debug », « Flux de sortie » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui écrit dans le flux d'erreur » ?",
        choices: ["Write-Warning", "Write-Debug", "Flux de sortie", "Write-Error"],
        answer: 3,
        explanation:
          "« Write-Error » : Commande qui écrit dans le flux d'erreur. Les autres choix renvoient à « Write-Warning », « Write-Debug », « Flux de sortie » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Write-Warning » ?",
        choices: [
          "Commande qui écrit un avertissement distinct d'une erreur",
          "Commande qui émet un détail facultatif de diagnostic",
          "Code de sortie de la dernière application native exécutée",
          "Instruction qui déclenche volontairement une erreur terminante",
        ],
        answer: 0,
        explanation:
          "« Write-Warning » : Commande qui écrit un avertissement distinct d'une erreur. Les autres choix renvoient à « Write-Verbose », « $LASTEXITCODE », « throw » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui écrit un avertissement distinct d'une erreur » ?",
        choices: ["Write-Verbose", "Write-Warning", "$LASTEXITCODE", "throw"],
        answer: 1,
        explanation:
          "« Write-Warning » : Commande qui écrit un avertissement distinct d'une erreur. Les autres choix renvoient à « Write-Verbose », « $LASTEXITCODE », « throw » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Write-Verbose » ?",
        choices: [
          "Commande qui émet un message de débogage",
          "Instruction qui fixe le code de fin d'un script ou processus",
          "Commande qui émet un détail facultatif de diagnostic",
          "Réglage qui influence le traitement par défaut des erreurs non terminantes",
        ],
        answer: 2,
        explanation:
          "« Write-Verbose » : Commande qui émet un détail facultatif de diagnostic. Les autres choix renvoient à « Write-Debug », « exit », « $ErrorActionPreference » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui émet un détail facultatif de diagnostic » ?",
        choices: ["Write-Debug", "exit", "$ErrorActionPreference", "Write-Verbose"],
        answer: 3,
        explanation:
          "« Write-Verbose » : Commande qui émet un détail facultatif de diagnostic. Les autres choix renvoient à « Write-Debug », « exit », « $ErrorActionPreference » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Write-Debug » ?",
        choices: [
          "Commande qui émet un message de débogage",
          "Code de sortie de la dernière application native exécutée",
          "Canal qui sépare résultats, erreurs et messages de diagnostic",
          "Collection des erreurs récentes de la session",
        ],
        answer: 0,
        explanation:
          "« Write-Debug » : Commande qui émet un message de débogage. Les autres choix renvoient à « $LASTEXITCODE », « Flux de sortie », « $Error » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui émet un message de débogage » ?",
        choices: ["$LASTEXITCODE", "Write-Debug", "Flux de sortie", "$Error"],
        answer: 1,
        explanation:
          "« Write-Debug » : Commande qui émet un message de débogage. Les autres choix renvoient à « $LASTEXITCODE », « Flux de sortie », « $Error » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « $LASTEXITCODE » ?",
        choices: [
          "Instruction qui fixe le code de fin d'un script ou processus",
          "Instruction qui déclenche volontairement une erreur terminante",
          "Code de sortie de la dernière application native exécutée",
          "Commande qui écrit dans le flux d'erreur",
        ],
        answer: 2,
        explanation:
          "« $LASTEXITCODE » : Code de sortie de la dernière application native exécutée. Les autres choix renvoient à « exit », « throw », « Write-Error » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Code de sortie de la dernière application native exécutée » ?",
        choices: ["exit", "throw", "Write-Error", "$LASTEXITCODE"],
        answer: 3,
        explanation:
          "« $LASTEXITCODE » : Code de sortie de la dernière application native exécutée. Les autres choix renvoient à « exit », « throw », « Write-Error » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « exit » ?",
        choices: [
          "Instruction qui fixe le code de fin d'un script ou processus",
          "Canal qui sépare résultats, erreurs et messages de diagnostic",
          "Réglage qui influence le traitement par défaut des erreurs non terminantes",
          "Commande qui écrit un avertissement distinct d'une erreur",
        ],
        answer: 0,
        explanation:
          "« exit » : Instruction qui fixe le code de fin d'un script ou processus. Les autres choix renvoient à « Flux de sortie », « $ErrorActionPreference », « Write-Warning » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Instruction qui fixe le code de fin d'un script ou processus » ?",
        choices: ["Flux de sortie", "exit", "$ErrorActionPreference", "Write-Warning"],
        answer: 1,
        explanation:
          "« exit » : Instruction qui fixe le code de fin d'un script ou processus. Les autres choix renvoient à « Flux de sortie », « $ErrorActionPreference », « Write-Warning » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Flux de sortie » ?",
        choices: [
          "Instruction qui déclenche volontairement une erreur terminante",
          "Collection des erreurs récentes de la session",
          "Canal qui sépare résultats, erreurs et messages de diagnostic",
          "Commande qui émet un détail facultatif de diagnostic",
        ],
        answer: 2,
        explanation:
          "« Flux de sortie » : Canal qui sépare résultats, erreurs et messages de diagnostic. Les autres choix renvoient à « throw », « $Error », « Write-Verbose » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Canal qui sépare résultats, erreurs et messages de diagnostic » ?",
        choices: ["throw", "$Error", "Write-Verbose", "Flux de sortie"],
        answer: 3,
        explanation:
          "« Flux de sortie » : Canal qui sépare résultats, erreurs et messages de diagnostic. Les autres choix renvoient à « throw », « $Error », « Write-Verbose » ; comparez leur rôle avant de continuer.",
      },
    ],
  },
  "22-parametres-scripts": {
    id: "22-parametres-scripts",
    title: "Quiz — 22. Paramètres de scripts",
    chapter: "22. Paramètres de scripts",
    intro: "20 questions pour vérifier vos repères avant de passer aux exercices pratiques.",
    chapterLink: "../22-parametres-scripts/",
    questions: [
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « param » ?",
        choices: [
          "Bloc qui déclare les paramètres d'un script ou d'une fonction",
          "Attribut qui apporte notamment les paramètres communs et des comportements de cmdlet",
          "Validation qui limite une valeur à une liste autorisée",
          "Valeur utilisée si l'appelant omet un paramètre facultatif",
        ],
        answer: 0,
        explanation:
          "« param » : Bloc qui déclare les paramètres d'un script ou d'une fonction. Les autres choix renvoient à « [CmdletBinding()] », « ValidateSet », « Valeur par défaut » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Bloc qui déclare les paramètres d'un script ou d'une fonction » ?",
        choices: ["[CmdletBinding()]", "param", "ValidateSet", "Valeur par défaut"],
        answer: 1,
        explanation:
          "« param » : Bloc qui déclare les paramètres d'un script ou d'une fonction. Les autres choix renvoient à « [CmdletBinding()] », « ValidateSet », « Valeur par défaut » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « [CmdletBinding()] » ?",
        choices: [
          "Option qui rend un paramètre obligatoire",
          "Validation qui impose une plage de valeurs",
          "Attribut qui apporte notamment les paramètres communs et des comportements de cmdlet",
          "Déclaration qui aide PowerShell à vérifier ou convertir une valeur reçue",
        ],
        answer: 2,
        explanation:
          "« [CmdletBinding()] » : Attribut qui apporte notamment les paramètres communs et des comportements de cmdlet. Les autres choix renvoient à « Mandatory », « ValidateRange », « Type de paramètre » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Attribut qui apporte notamment les paramètres communs et des comportements de cmdlet » ?",
        choices: ["Mandatory", "ValidateRange", "Type de paramètre", "[CmdletBinding()]"],
        answer: 3,
        explanation:
          "« [CmdletBinding()] » : Attribut qui apporte notamment les paramètres communs et des comportements de cmdlet. Les autres choix renvoient à « Mandatory », « ValidateRange », « Type de paramètre » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Mandatory » ?",
        choices: [
          "Option qui rend un paramètre obligatoire",
          "Validation qui limite une valeur à une liste autorisée",
          "Type adapté à une option activée par sa présence",
          "Paramètre commun qui simule certaines actions avant de les exécuter",
        ],
        answer: 0,
        explanation:
          "« Mandatory » : Option qui rend un paramètre obligatoire. Les autres choix renvoient à « ValidateSet », « [switch] », « -WhatIf » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Option qui rend un paramètre obligatoire » ?",
        choices: ["ValidateSet", "Mandatory", "[switch]", "-WhatIf"],
        answer: 1,
        explanation:
          "« Mandatory » : Option qui rend un paramètre obligatoire. Les autres choix renvoient à « ValidateSet », « [switch] », « -WhatIf » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « ValidateSet » ?",
        choices: [
          "Validation qui impose une plage de valeurs",
          "Valeur utilisée si l'appelant omet un paramètre facultatif",
          "Validation qui limite une valeur à une liste autorisée",
          "Paramètre commun qui peut demander confirmation avant une action",
        ],
        answer: 2,
        explanation:
          "« ValidateSet » : Validation qui limite une valeur à une liste autorisée. Les autres choix renvoient à « ValidateRange », « Valeur par défaut », « -Confirm » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Validation qui limite une valeur à une liste autorisée » ?",
        choices: ["ValidateRange", "Valeur par défaut", "-Confirm", "ValidateSet"],
        answer: 3,
        explanation:
          "« ValidateSet » : Validation qui limite une valeur à une liste autorisée. Les autres choix renvoient à « ValidateRange », « Valeur par défaut », « -Confirm » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « ValidateRange » ?",
        choices: [
          "Validation qui impose une plage de valeurs",
          "Type adapté à une option activée par sa présence",
          "Déclaration qui aide PowerShell à vérifier ou convertir une valeur reçue",
          "Bloc qui déclare les paramètres d'un script ou d'une fonction",
        ],
        answer: 0,
        explanation:
          "« ValidateRange » : Validation qui impose une plage de valeurs. Les autres choix renvoient à « [switch] », « Type de paramètre », « param » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Validation qui impose une plage de valeurs » ?",
        choices: ["[switch]", "ValidateRange", "Type de paramètre", "param"],
        answer: 1,
        explanation:
          "« ValidateRange » : Validation qui impose une plage de valeurs. Les autres choix renvoient à « [switch] », « Type de paramètre », « param » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « [switch] » ?",
        choices: [
          "Valeur utilisée si l'appelant omet un paramètre facultatif",
          "Paramètre commun qui simule certaines actions avant de les exécuter",
          "Type adapté à une option activée par sa présence",
          "Attribut qui apporte notamment les paramètres communs et des comportements de cmdlet",
        ],
        answer: 2,
        explanation:
          "« [switch] » : Type adapté à une option activée par sa présence. Les autres choix renvoient à « Valeur par défaut », « -WhatIf », « [CmdletBinding()] » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Type adapté à une option activée par sa présence » ?",
        choices: ["Valeur par défaut", "-WhatIf", "[CmdletBinding()]", "[switch]"],
        answer: 3,
        explanation:
          "« [switch] » : Type adapté à une option activée par sa présence. Les autres choix renvoient à « Valeur par défaut », « -WhatIf », « [CmdletBinding()] » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Valeur par défaut » ?",
        choices: [
          "Valeur utilisée si l'appelant omet un paramètre facultatif",
          "Déclaration qui aide PowerShell à vérifier ou convertir une valeur reçue",
          "Paramètre commun qui peut demander confirmation avant une action",
          "Option qui rend un paramètre obligatoire",
        ],
        answer: 0,
        explanation:
          "« Valeur par défaut » : Valeur utilisée si l'appelant omet un paramètre facultatif. Les autres choix renvoient à « Type de paramètre », « -Confirm », « Mandatory » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Valeur utilisée si l'appelant omet un paramètre facultatif » ?",
        choices: ["Type de paramètre", "Valeur par défaut", "-Confirm", "Mandatory"],
        answer: 1,
        explanation:
          "« Valeur par défaut » : Valeur utilisée si l'appelant omet un paramètre facultatif. Les autres choix renvoient à « Type de paramètre », « -Confirm », « Mandatory » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Type de paramètre » ?",
        choices: [
          "Paramètre commun qui simule certaines actions avant de les exécuter",
          "Bloc qui déclare les paramètres d'un script ou d'une fonction",
          "Déclaration qui aide PowerShell à vérifier ou convertir une valeur reçue",
          "Validation qui limite une valeur à une liste autorisée",
        ],
        answer: 2,
        explanation:
          "« Type de paramètre » : Déclaration qui aide PowerShell à vérifier ou convertir une valeur reçue. Les autres choix renvoient à « -WhatIf », « param », « ValidateSet » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Déclaration qui aide PowerShell à vérifier ou convertir une valeur reçue » ?",
        choices: ["-WhatIf", "param", "ValidateSet", "Type de paramètre"],
        answer: 3,
        explanation:
          "« Type de paramètre » : Déclaration qui aide PowerShell à vérifier ou convertir une valeur reçue. Les autres choix renvoient à « -WhatIf », « param », « ValidateSet » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « -WhatIf » ?",
        choices: [
          "Paramètre commun qui simule certaines actions avant de les exécuter",
          "Paramètre commun qui peut demander confirmation avant une action",
          "Attribut qui apporte notamment les paramètres communs et des comportements de cmdlet",
          "Validation qui impose une plage de valeurs",
        ],
        answer: 0,
        explanation:
          "« -WhatIf » : Paramètre commun qui simule certaines actions avant de les exécuter. Les autres choix renvoient à « -Confirm », « [CmdletBinding()] », « ValidateRange » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Paramètre commun qui simule certaines actions avant de les exécuter » ?",
        choices: ["-Confirm", "-WhatIf", "[CmdletBinding()]", "ValidateRange"],
        answer: 1,
        explanation:
          "« -WhatIf » : Paramètre commun qui simule certaines actions avant de les exécuter. Les autres choix renvoient à « -Confirm », « [CmdletBinding()] », « ValidateRange » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « -Confirm » ?",
        choices: [
          "Bloc qui déclare les paramètres d'un script ou d'une fonction",
          "Option qui rend un paramètre obligatoire",
          "Paramètre commun qui peut demander confirmation avant une action",
          "Type adapté à une option activée par sa présence",
        ],
        answer: 2,
        explanation:
          "« -Confirm » : Paramètre commun qui peut demander confirmation avant une action. Les autres choix renvoient à « param », « Mandatory », « [switch] » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Paramètre commun qui peut demander confirmation avant une action » ?",
        choices: ["param", "Mandatory", "[switch]", "-Confirm"],
        answer: 3,
        explanation:
          "« -Confirm » : Paramètre commun qui peut demander confirmation avant une action. Les autres choix renvoient à « param », « Mandatory », « [switch] » ; comparez leur rôle avant de continuer.",
      },
    ],
  },
  "23-modules": {
    id: "23-modules",
    title: "Quiz — 23. Modules",
    chapter: "23. Modules",
    intro: "20 questions pour vérifier vos repères avant de passer aux exercices pratiques.",
    chapterLink: "../23-modules/",
    questions: [
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Module » ?",
        choices: [
          "Paquet qui regroupe des commandes et peut être importé dans une session",
          "Commande qui inspecte les modules chargés ou disponibles",
          "Commande qui installe un module depuis un dépôt compatible",
          "Extension d'un fichier de module de script PowerShell",
        ],
        answer: 0,
        explanation:
          "« Module » : Paquet qui regroupe des commandes et peut être importé dans une session. Les autres choix renvoient à « Get-Module », « Install-Module », « .psm1 » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Paquet qui regroupe des commandes et peut être importé dans une session » ?",
        choices: ["Get-Module", "Module", "Install-Module", ".psm1"],
        answer: 1,
        explanation:
          "« Module » : Paquet qui regroupe des commandes et peut être importé dans une session. Les autres choix renvoient à « Get-Module », « Install-Module », « .psm1 » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Get-Module » ?",
        choices: [
          "Commande qui charge un module",
          "Commande qui recherche un module dans un dépôt configuré",
          "Commande qui inspecte les modules chargés ou disponibles",
          "Extension d'un manifeste qui décrit un module",
        ],
        answer: 2,
        explanation:
          "« Get-Module » : Commande qui inspecte les modules chargés ou disponibles. Les autres choix renvoient à « Import-Module », « Find-Module », « .psd1 » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui inspecte les modules chargés ou disponibles » ?",
        choices: ["Import-Module", "Find-Module", ".psd1", "Get-Module"],
        answer: 3,
        explanation:
          "« Get-Module » : Commande qui inspecte les modules chargés ou disponibles. Les autres choix renvoient à « Import-Module », « Find-Module », « .psd1 » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Import-Module » ?",
        choices: [
          "Commande qui charge un module",
          "Commande qui installe un module depuis un dépôt compatible",
          "Commande qui décharge un module de la session",
          "Commande qui choisit les membres publics d'un module de script",
        ],
        answer: 0,
        explanation:
          "« Import-Module » : Commande qui charge un module. Les autres choix renvoient à « Install-Module », « Remove-Module », « Export-ModuleMember » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui charge un module » ?",
        choices: ["Install-Module", "Import-Module", "Remove-Module", "Export-ModuleMember"],
        answer: 1,
        explanation:
          "« Import-Module » : Commande qui charge un module. Les autres choix renvoient à « Install-Module », « Remove-Module », « Export-ModuleMember » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Install-Module » ?",
        choices: [
          "Commande qui recherche un module dans un dépôt configuré",
          "Extension d'un fichier de module de script PowerShell",
          "Commande qui installe un module depuis un dépôt compatible",
          "Information à vérifier avant de dépendre d'un module dans un script",
        ],
        answer: 2,
        explanation:
          "« Install-Module » : Commande qui installe un module depuis un dépôt compatible. Les autres choix renvoient à « Find-Module », « .psm1 », « Version du module » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui installe un module depuis un dépôt compatible » ?",
        choices: ["Find-Module", ".psm1", "Version du module", "Install-Module"],
        answer: 3,
        explanation:
          "« Install-Module » : Commande qui installe un module depuis un dépôt compatible. Les autres choix renvoient à « Find-Module », « .psm1 », « Version du module » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Find-Module » ?",
        choices: [
          "Commande qui recherche un module dans un dépôt configuré",
          "Commande qui décharge un module de la session",
          "Extension d'un manifeste qui décrit un module",
          "Paquet qui regroupe des commandes et peut être importé dans une session",
        ],
        answer: 0,
        explanation:
          "« Find-Module » : Commande qui recherche un module dans un dépôt configuré. Les autres choix renvoient à « Remove-Module », « .psd1 », « Module » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui recherche un module dans un dépôt configuré » ?",
        choices: ["Remove-Module", "Find-Module", ".psd1", "Module"],
        answer: 1,
        explanation:
          "« Find-Module » : Commande qui recherche un module dans un dépôt configuré. Les autres choix renvoient à « Remove-Module », « .psd1 », « Module » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Remove-Module » ?",
        choices: [
          "Extension d'un fichier de module de script PowerShell",
          "Commande qui choisit les membres publics d'un module de script",
          "Commande qui décharge un module de la session",
          "Commande qui inspecte les modules chargés ou disponibles",
        ],
        answer: 2,
        explanation:
          "« Remove-Module » : Commande qui décharge un module de la session. Les autres choix renvoient à « .psm1 », « Export-ModuleMember », « Get-Module » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui décharge un module de la session » ?",
        choices: [".psm1", "Export-ModuleMember", "Get-Module", "Remove-Module"],
        answer: 3,
        explanation:
          "« Remove-Module » : Commande qui décharge un module de la session. Les autres choix renvoient à « .psm1 », « Export-ModuleMember », « Get-Module » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « .psm1 » ?",
        choices: [
          "Extension d'un fichier de module de script PowerShell",
          "Extension d'un manifeste qui décrit un module",
          "Information à vérifier avant de dépendre d'un module dans un script",
          "Commande qui charge un module",
        ],
        answer: 0,
        explanation:
          "« .psm1 » : Extension d'un fichier de module de script PowerShell. Les autres choix renvoient à « .psd1 », « Version du module », « Import-Module » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Extension d'un fichier de module de script PowerShell » ?",
        choices: [".psd1", ".psm1", "Version du module", "Import-Module"],
        answer: 1,
        explanation:
          "« .psm1 » : Extension d'un fichier de module de script PowerShell. Les autres choix renvoient à « .psd1 », « Version du module », « Import-Module » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « .psd1 » ?",
        choices: [
          "Commande qui choisit les membres publics d'un module de script",
          "Paquet qui regroupe des commandes et peut être importé dans une session",
          "Extension d'un manifeste qui décrit un module",
          "Commande qui installe un module depuis un dépôt compatible",
        ],
        answer: 2,
        explanation:
          "« .psd1 » : Extension d'un manifeste qui décrit un module. Les autres choix renvoient à « Export-ModuleMember », « Module », « Install-Module » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Extension d'un manifeste qui décrit un module » ?",
        choices: ["Export-ModuleMember", "Module", "Install-Module", ".psd1"],
        answer: 3,
        explanation:
          "« .psd1 » : Extension d'un manifeste qui décrit un module. Les autres choix renvoient à « Export-ModuleMember », « Module », « Install-Module » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Export-ModuleMember » ?",
        choices: [
          "Commande qui choisit les membres publics d'un module de script",
          "Information à vérifier avant de dépendre d'un module dans un script",
          "Commande qui inspecte les modules chargés ou disponibles",
          "Commande qui recherche un module dans un dépôt configuré",
        ],
        answer: 0,
        explanation:
          "« Export-ModuleMember » : Commande qui choisit les membres publics d'un module de script. Les autres choix renvoient à « Version du module », « Get-Module », « Find-Module » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui choisit les membres publics d'un module de script » ?",
        choices: ["Version du module", "Export-ModuleMember", "Get-Module", "Find-Module"],
        answer: 1,
        explanation:
          "« Export-ModuleMember » : Commande qui choisit les membres publics d'un module de script. Les autres choix renvoient à « Version du module », « Get-Module », « Find-Module » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Version du module » ?",
        choices: [
          "Paquet qui regroupe des commandes et peut être importé dans une session",
          "Commande qui charge un module",
          "Information à vérifier avant de dépendre d'un module dans un script",
          "Commande qui décharge un module de la session",
        ],
        answer: 2,
        explanation:
          "« Version du module » : Information à vérifier avant de dépendre d'un module dans un script. Les autres choix renvoient à « Module », « Import-Module », « Remove-Module » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Information à vérifier avant de dépendre d'un module dans un script » ?",
        choices: ["Module", "Import-Module", "Remove-Module", "Version du module"],
        answer: 3,
        explanation:
          "« Version du module » : Information à vérifier avant de dépendre d'un module dans un script. Les autres choix renvoient à « Module », « Import-Module », « Remove-Module » ; comparez leur rôle avant de continuer.",
      },
    ],
  },
  "24-rsat-et-gallery": {
    id: "24-rsat-et-gallery",
    title: "Quiz — 24. RSAT et PowerShell Gallery",
    chapter: "24. RSAT et PowerShell Gallery",
    intro: "20 questions pour vérifier vos repères avant de passer aux exercices pratiques.",
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
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Ensemble d'outils d'administration à distance pour des rôles Windows » ?",
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
        choices: [
          "Get-Command -Module",
          "Version",
          "Module ActiveDirectory",
          "Get-InstalledModule",
        ],
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
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Recherche des commandes fournies par un module donné » ?",
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
  },
  "25-profils": {
    id: "25-profils",
    title: "Quiz — 25. Les profils PowerShell",
    chapter: "25. Les profils PowerShell",
    intro: "20 questions pour vérifier vos repères avant de passer aux exercices pratiques.",
    chapterLink: "../25-profils/",
    questions: [
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « $PROFILE » ?",
        choices: [
          "Variable qui indique le chemin d'un profil PowerShell",
          "Script exécuté à l'ouverture d'une session PowerShell correspondant à sa portée",
          "Commande qui peut créer le fichier de profil après création de son dossier",
          "Profil propre à un hôte comme la console ou un éditeur",
        ],
        answer: 0,
        explanation:
          "« $PROFILE » : Variable qui indique le chemin d'un profil PowerShell. Les autres choix renvoient à « Profil », « New-Item $PROFILE », « Profil par application » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Variable qui indique le chemin d'un profil PowerShell » ?",
        choices: ["Profil", "$PROFILE", "New-Item $PROFILE", "Profil par application"],
        answer: 1,
        explanation:
          "« $PROFILE » : Variable qui indique le chemin d'un profil PowerShell. Les autres choix renvoient à « Profil », « New-Item $PROFILE », « Profil par application » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Profil » ?",
        choices: [
          "Vérification qui dit si le fichier de profil courant existe",
          "Profil qui personnalise les sessions d'un seul utilisateur",
          "Script exécuté à l'ouverture d'une session PowerShell correspondant à sa portée",
          "Versions dont les chemins de profil ne sont pas automatiquement les mêmes",
        ],
        answer: 2,
        explanation:
          "« Profil » : Script exécuté à l'ouverture d'une session PowerShell correspondant à sa portée. Les autres choix renvoient à « Test-Path $PROFILE », « Profil utilisateur », « PowerShell 7 vs 5.1 » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Script exécuté à l'ouverture d'une session PowerShell correspondant à sa portée » ?",
        choices: ["Test-Path $PROFILE", "Profil utilisateur", "PowerShell 7 vs 5.1", "Profil"],
        answer: 3,
        explanation:
          "« Profil » : Script exécuté à l'ouverture d'une session PowerShell correspondant à sa portée. Les autres choix renvoient à « Test-Path $PROFILE », « Profil utilisateur », « PowerShell 7 vs 5.1 » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Test-Path $PROFILE » ?",
        choices: [
          "Vérification qui dit si le fichier de profil courant existe",
          "Commande qui peut créer le fichier de profil après création de son dossier",
          "Profil qui concerne les sessions de plusieurs utilisateurs sur la machine",
          "Définition recréée automatiquement lors de l'ouverture de la session",
        ],
        answer: 0,
        explanation:
          "« Test-Path $PROFILE » : Vérification qui dit si le fichier de profil courant existe. Les autres choix renvoient à « New-Item $PROFILE », « Profil tous utilisateurs », « Alias dans le profil » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Vérification qui dit si le fichier de profil courant existe » ?",
        choices: [
          "New-Item $PROFILE",
          "Test-Path $PROFILE",
          "Profil tous utilisateurs",
          "Alias dans le profil",
        ],
        answer: 1,
        explanation:
          "« Test-Path $PROFILE » : Vérification qui dit si le fichier de profil courant existe. Les autres choix renvoient à « New-Item $PROFILE », « Profil tous utilisateurs », « Alias dans le profil » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « New-Item $PROFILE » ?",
        choices: [
          "Profil qui personnalise les sessions d'un seul utilisateur",
          "Profil propre à un hôte comme la console ou un éditeur",
          "Commande qui peut créer le fichier de profil après création de son dossier",
          "Conséquence possible d'un profil trop chargé ou de commandes longues",
        ],
        answer: 2,
        explanation:
          "« New-Item $PROFILE » : Commande qui peut créer le fichier de profil après création de son dossier. Les autres choix renvoient à « Profil utilisateur », « Profil par application », « Démarrage lent » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui peut créer le fichier de profil après création de son dossier » ?",
        choices: [
          "Profil utilisateur",
          "Profil par application",
          "Démarrage lent",
          "New-Item $PROFILE",
        ],
        answer: 3,
        explanation:
          "« New-Item $PROFILE » : Commande qui peut créer le fichier de profil après création de son dossier. Les autres choix renvoient à « Profil utilisateur », « Profil par application », « Démarrage lent » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Profil utilisateur » ?",
        choices: [
          "Profil qui personnalise les sessions d'un seul utilisateur",
          "Profil qui concerne les sessions de plusieurs utilisateurs sur la machine",
          "Versions dont les chemins de profil ne sont pas automatiquement les mêmes",
          "Variable qui indique le chemin d'un profil PowerShell",
        ],
        answer: 0,
        explanation:
          "« Profil utilisateur » : Profil qui personnalise les sessions d'un seul utilisateur. Les autres choix renvoient à « Profil tous utilisateurs », « PowerShell 7 vs 5.1 », « $PROFILE » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Profil qui personnalise les sessions d'un seul utilisateur » ?",
        choices: [
          "Profil tous utilisateurs",
          "Profil utilisateur",
          "PowerShell 7 vs 5.1",
          "$PROFILE",
        ],
        answer: 1,
        explanation:
          "« Profil utilisateur » : Profil qui personnalise les sessions d'un seul utilisateur. Les autres choix renvoient à « Profil tous utilisateurs », « PowerShell 7 vs 5.1 », « $PROFILE » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Profil tous utilisateurs » ?",
        choices: [
          "Profil propre à un hôte comme la console ou un éditeur",
          "Définition recréée automatiquement lors de l'ouverture de la session",
          "Profil qui concerne les sessions de plusieurs utilisateurs sur la machine",
          "Script exécuté à l'ouverture d'une session PowerShell correspondant à sa portée",
        ],
        answer: 2,
        explanation:
          "« Profil tous utilisateurs » : Profil qui concerne les sessions de plusieurs utilisateurs sur la machine. Les autres choix renvoient à « Profil par application », « Alias dans le profil », « Profil » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Profil qui concerne les sessions de plusieurs utilisateurs sur la machine » ?",
        choices: [
          "Profil par application",
          "Alias dans le profil",
          "Profil",
          "Profil tous utilisateurs",
        ],
        answer: 3,
        explanation:
          "« Profil tous utilisateurs » : Profil qui concerne les sessions de plusieurs utilisateurs sur la machine. Les autres choix renvoient à « Profil par application », « Alias dans le profil », « Profil » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Profil par application » ?",
        choices: [
          "Profil propre à un hôte comme la console ou un éditeur",
          "Versions dont les chemins de profil ne sont pas automatiquement les mêmes",
          "Conséquence possible d'un profil trop chargé ou de commandes longues",
          "Vérification qui dit si le fichier de profil courant existe",
        ],
        answer: 0,
        explanation:
          "« Profil par application » : Profil propre à un hôte comme la console ou un éditeur. Les autres choix renvoient à « PowerShell 7 vs 5.1 », « Démarrage lent », « Test-Path $PROFILE » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Profil propre à un hôte comme la console ou un éditeur » ?",
        choices: [
          "PowerShell 7 vs 5.1",
          "Profil par application",
          "Démarrage lent",
          "Test-Path $PROFILE",
        ],
        answer: 1,
        explanation:
          "« Profil par application » : Profil propre à un hôte comme la console ou un éditeur. Les autres choix renvoient à « PowerShell 7 vs 5.1 », « Démarrage lent », « Test-Path $PROFILE » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « PowerShell 7 vs 5.1 » ?",
        choices: [
          "Définition recréée automatiquement lors de l'ouverture de la session",
          "Variable qui indique le chemin d'un profil PowerShell",
          "Versions dont les chemins de profil ne sont pas automatiquement les mêmes",
          "Commande qui peut créer le fichier de profil après création de son dossier",
        ],
        answer: 2,
        explanation:
          "« PowerShell 7 vs 5.1 » : Versions dont les chemins de profil ne sont pas automatiquement les mêmes. Les autres choix renvoient à « Alias dans le profil », « $PROFILE », « New-Item $PROFILE » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Versions dont les chemins de profil ne sont pas automatiquement les mêmes » ?",
        choices: ["Alias dans le profil", "$PROFILE", "New-Item $PROFILE", "PowerShell 7 vs 5.1"],
        answer: 3,
        explanation:
          "« PowerShell 7 vs 5.1 » : Versions dont les chemins de profil ne sont pas automatiquement les mêmes. Les autres choix renvoient à « Alias dans le profil », « $PROFILE », « New-Item $PROFILE » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Alias dans le profil » ?",
        choices: [
          "Définition recréée automatiquement lors de l'ouverture de la session",
          "Conséquence possible d'un profil trop chargé ou de commandes longues",
          "Script exécuté à l'ouverture d'une session PowerShell correspondant à sa portée",
          "Profil qui personnalise les sessions d'un seul utilisateur",
        ],
        answer: 0,
        explanation:
          "« Alias dans le profil » : Définition recréée automatiquement lors de l'ouverture de la session. Les autres choix renvoient à « Démarrage lent », « Profil », « Profil utilisateur » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Définition recréée automatiquement lors de l'ouverture de la session » ?",
        choices: ["Démarrage lent", "Alias dans le profil", "Profil", "Profil utilisateur"],
        answer: 1,
        explanation:
          "« Alias dans le profil » : Définition recréée automatiquement lors de l'ouverture de la session. Les autres choix renvoient à « Démarrage lent », « Profil », « Profil utilisateur » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Démarrage lent » ?",
        choices: [
          "Variable qui indique le chemin d'un profil PowerShell",
          "Vérification qui dit si le fichier de profil courant existe",
          "Conséquence possible d'un profil trop chargé ou de commandes longues",
          "Profil qui concerne les sessions de plusieurs utilisateurs sur la machine",
        ],
        answer: 2,
        explanation:
          "« Démarrage lent » : Conséquence possible d'un profil trop chargé ou de commandes longues. Les autres choix renvoient à « $PROFILE », « Test-Path $PROFILE », « Profil tous utilisateurs » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Conséquence possible d'un profil trop chargé ou de commandes longues » ?",
        choices: ["$PROFILE", "Test-Path $PROFILE", "Profil tous utilisateurs", "Démarrage lent"],
        answer: 3,
        explanation:
          "« Démarrage lent » : Conséquence possible d'un profil trop chargé ou de commandes longues. Les autres choix renvoient à « $PROFILE », « Test-Path $PROFILE », « Profil tous utilisateurs » ; comparez leur rôle avant de continuer.",
      },
    ],
  },
  "26-regex": {
    id: "26-regex",
    title: "Quiz — 26. Expressions régulières (Regex)",
    chapter: "26. Expressions régulières (Regex)",
    intro: "20 questions pour vérifier vos repères avant de passer aux exercices pratiques.",
    chapterLink: "../26-regex/",
    questions: [
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Regex » ?",
        choices: [
          "Motif de recherche qui décrit une famille de chaînes de caractères",
          "Opérateur qui teste une chaîne avec une expression régulière",
          "Variable contenant les captures de la dernière correspondance -match scalaire",
          "Ancre qui désigne le début d'une chaîne ou d'une ligne selon le mode",
        ],
        answer: 0,
        explanation:
          "« Regex » : Motif de recherche qui décrit une famille de chaînes de caractères. Les autres choix renvoient à « -match », « $Matches », « ^ » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Motif de recherche qui décrit une famille de chaînes de caractères » ?",
        choices: ["-match", "Regex", "$Matches", "^"],
        answer: 1,
        explanation:
          "« Regex » : Motif de recherche qui décrit une famille de chaînes de caractères. Les autres choix renvoient à « -match », « $Matches », « ^ » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « -match » ?",
        choices: [
          "Opérateur qui compare avec des jokers plutôt qu'avec une regex",
          "Commande qui recherche un motif dans des lignes ou des fichiers",
          "Opérateur qui teste une chaîne avec une expression régulière",
          "Ancre qui désigne la fin d'une chaîne ou d'une ligne selon le mode",
        ],
        answer: 2,
        explanation:
          "« -match » : Opérateur qui teste une chaîne avec une expression régulière. Les autres choix renvoient à « -like », « Select-String », « $ » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Opérateur qui teste une chaîne avec une expression régulière » ?",
        choices: ["-like", "Select-String", "$", "-match"],
        answer: 3,
        explanation:
          "« -match » : Opérateur qui teste une chaîne avec une expression régulière. Les autres choix renvoient à « -like », « Select-String », « $ » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « -like » ?",
        choices: [
          "Opérateur qui compare avec des jokers plutôt qu'avec une regex",
          "Variable contenant les captures de la dernière correspondance -match scalaire",
          "Opérateur qui remplace les parties correspondant à une regex",
          "Classe de caractères qui correspond à un chiffre",
        ],
        answer: 0,
        explanation:
          "« -like » : Opérateur qui compare avec des jokers plutôt qu'avec une regex. Les autres choix renvoient à « $Matches », « -replace », « [0-9] » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Opérateur qui compare avec des jokers plutôt qu'avec une regex » ?",
        choices: ["$Matches", "-like", "-replace", "[0-9]"],
        answer: 1,
        explanation:
          "« -like » : Opérateur qui compare avec des jokers plutôt qu'avec une regex. Les autres choix renvoient à « $Matches », « -replace », « [0-9] » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « $Matches » ?",
        choices: [
          "Commande qui recherche un motif dans des lignes ou des fichiers",
          "Ancre qui désigne le début d'une chaîne ou d'une ligne selon le mode",
          "Variable contenant les captures de la dernière correspondance -match scalaire",
          "Symbole qui demande une ou plusieurs répétitions de l'élément précédent",
        ],
        answer: 2,
        explanation:
          "« $Matches » : Variable contenant les captures de la dernière correspondance -match scalaire. Les autres choix renvoient à « Select-String », « ^ », « Quantificateur + » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Variable contenant les captures de la dernière correspondance -match scalaire » ?",
        choices: ["Select-String", "^", "Quantificateur +", "$Matches"],
        answer: 3,
        explanation:
          "« $Matches » : Variable contenant les captures de la dernière correspondance -match scalaire. Les autres choix renvoient à « Select-String », « ^ », « Quantificateur + » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Select-String » ?",
        choices: [
          "Commande qui recherche un motif dans des lignes ou des fichiers",
          "Opérateur qui remplace les parties correspondant à une regex",
          "Ancre qui désigne la fin d'une chaîne ou d'une ligne selon le mode",
          "Motif de recherche qui décrit une famille de chaînes de caractères",
        ],
        answer: 0,
        explanation:
          "« Select-String » : Commande qui recherche un motif dans des lignes ou des fichiers. Les autres choix renvoient à « -replace », « $ », « Regex » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui recherche un motif dans des lignes ou des fichiers » ?",
        choices: ["-replace", "Select-String", "$", "Regex"],
        answer: 1,
        explanation:
          "« Select-String » : Commande qui recherche un motif dans des lignes ou des fichiers. Les autres choix renvoient à « -replace », « $ », « Regex » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « -replace » ?",
        choices: [
          "Ancre qui désigne le début d'une chaîne ou d'une ligne selon le mode",
          "Classe de caractères qui correspond à un chiffre",
          "Opérateur qui remplace les parties correspondant à une regex",
          "Opérateur qui teste une chaîne avec une expression régulière",
        ],
        answer: 2,
        explanation:
          "« -replace » : Opérateur qui remplace les parties correspondant à une regex. Les autres choix renvoient à « ^ », « [0-9] », « -match » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Opérateur qui remplace les parties correspondant à une regex » ?",
        choices: ["^", "[0-9]", "-match", "-replace"],
        answer: 3,
        explanation:
          "« -replace » : Opérateur qui remplace les parties correspondant à une regex. Les autres choix renvoient à « ^ », « [0-9] », « -match » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « ^ » ?",
        choices: [
          "Ancre qui désigne le début d'une chaîne ou d'une ligne selon le mode",
          "Ancre qui désigne la fin d'une chaîne ou d'une ligne selon le mode",
          "Symbole qui demande une ou plusieurs répétitions de l'élément précédent",
          "Opérateur qui compare avec des jokers plutôt qu'avec une regex",
        ],
        answer: 0,
        explanation:
          "« ^ » : Ancre qui désigne le début d'une chaîne ou d'une ligne selon le mode. Les autres choix renvoient à « $ », « Quantificateur + », « -like » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Ancre qui désigne le début d'une chaîne ou d'une ligne selon le mode » ?",
        choices: ["$", "^", "Quantificateur +", "-like"],
        answer: 1,
        explanation:
          "« ^ » : Ancre qui désigne le début d'une chaîne ou d'une ligne selon le mode. Les autres choix renvoient à « $ », « Quantificateur + », « -like » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « $ » ?",
        choices: [
          "Classe de caractères qui correspond à un chiffre",
          "Motif de recherche qui décrit une famille de chaînes de caractères",
          "Ancre qui désigne la fin d'une chaîne ou d'une ligne selon le mode",
          "Variable contenant les captures de la dernière correspondance -match scalaire",
        ],
        answer: 2,
        explanation:
          "« $ » : Ancre qui désigne la fin d'une chaîne ou d'une ligne selon le mode. Les autres choix renvoient à « [0-9] », « Regex », « $Matches » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Ancre qui désigne la fin d'une chaîne ou d'une ligne selon le mode » ?",
        choices: ["[0-9]", "Regex", "$Matches", "$"],
        answer: 3,
        explanation:
          "« $ » : Ancre qui désigne la fin d'une chaîne ou d'une ligne selon le mode. Les autres choix renvoient à « [0-9] », « Regex », « $Matches » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « [0-9] » ?",
        choices: [
          "Classe de caractères qui correspond à un chiffre",
          "Symbole qui demande une ou plusieurs répétitions de l'élément précédent",
          "Opérateur qui teste une chaîne avec une expression régulière",
          "Commande qui recherche un motif dans des lignes ou des fichiers",
        ],
        answer: 0,
        explanation:
          "« [0-9] » : Classe de caractères qui correspond à un chiffre. Les autres choix renvoient à « Quantificateur + », « -match », « Select-String » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Classe de caractères qui correspond à un chiffre » ?",
        choices: ["Quantificateur +", "[0-9]", "-match", "Select-String"],
        answer: 1,
        explanation:
          "« [0-9] » : Classe de caractères qui correspond à un chiffre. Les autres choix renvoient à « Quantificateur + », « -match », « Select-String » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Quantificateur + » ?",
        choices: [
          "Motif de recherche qui décrit une famille de chaînes de caractères",
          "Opérateur qui compare avec des jokers plutôt qu'avec une regex",
          "Symbole qui demande une ou plusieurs répétitions de l'élément précédent",
          "Opérateur qui remplace les parties correspondant à une regex",
        ],
        answer: 2,
        explanation:
          "« Quantificateur + » : Symbole qui demande une ou plusieurs répétitions de l'élément précédent. Les autres choix renvoient à « Regex », « -like », « -replace » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Symbole qui demande une ou plusieurs répétitions de l'élément précédent » ?",
        choices: ["Regex", "-like", "-replace", "Quantificateur +"],
        answer: 3,
        explanation:
          "« Quantificateur + » : Symbole qui demande une ou plusieurs répétitions de l'élément précédent. Les autres choix renvoient à « Regex », « -like », « -replace » ; comparez leur rôle avant de continuer.",
      },
    ],
  },
  "27-planification": {
    id: "27-planification",
    title: "Quiz — 27. Planification des tâches",
    chapter: "27. Planification des tâches",
    intro: "20 questions pour vérifier vos repères avant de passer aux exercices pratiques.",
    chapterLink: "../27-planification/",
    questions: [
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Tâche planifiée » ?",
        choices: [
          "Exécution automatique d'un programme selon un déclencheur",
          "Commande qui décrit le programme lancé par une tâche",
          "Commande qui enregistre une nouvelle tâche planifiée",
          "Commande qui retire une tâche après vérification de sa cible",
        ],
        answer: 0,
        explanation:
          "« Tâche planifiée » : Exécution automatique d'un programme selon un déclencheur. Les autres choix renvoient à « New-ScheduledTaskAction », « Register-ScheduledTask », « Unregister-ScheduledTask » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Exécution automatique d'un programme selon un déclencheur » ?",
        choices: [
          "New-ScheduledTaskAction",
          "Tâche planifiée",
          "Register-ScheduledTask",
          "Unregister-ScheduledTask",
        ],
        answer: 1,
        explanation:
          "« Tâche planifiée » : Exécution automatique d'un programme selon un déclencheur. Les autres choix renvoient à « New-ScheduledTaskAction », « Register-ScheduledTask », « Unregister-ScheduledTask » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « New-ScheduledTaskAction » ?",
        choices: [
          "Commande qui définit quand la tâche se déclenche",
          "Commande qui liste ou inspecte des tâches planifiées",
          "Commande qui décrit le programme lancé par une tâche",
          "Événement ou horaire qui décide du moment de lancement",
        ],
        answer: 2,
        explanation:
          "« New-ScheduledTaskAction » : Commande qui décrit le programme lancé par une tâche. Les autres choix renvoient à « New-ScheduledTaskTrigger », « Get-ScheduledTask », « Déclencheur » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui décrit le programme lancé par une tâche » ?",
        choices: [
          "New-ScheduledTaskTrigger",
          "Get-ScheduledTask",
          "Déclencheur",
          "New-ScheduledTaskAction",
        ],
        answer: 3,
        explanation:
          "« New-ScheduledTaskAction » : Commande qui décrit le programme lancé par une tâche. Les autres choix renvoient à « New-ScheduledTaskTrigger », « Get-ScheduledTask », « Déclencheur » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « New-ScheduledTaskTrigger » ?",
        choices: [
          "Commande qui définit quand la tâche se déclenche",
          "Commande qui enregistre une nouvelle tâche planifiée",
          "Commande qui lance une tâche existante à la demande",
          "Identité dont les droits déterminent ce que la tâche peut faire",
        ],
        answer: 0,
        explanation:
          "« New-ScheduledTaskTrigger » : Commande qui définit quand la tâche se déclenche. Les autres choix renvoient à « Register-ScheduledTask », « Start-ScheduledTask », « Compte d'exécution » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui définit quand la tâche se déclenche » ?",
        choices: [
          "Register-ScheduledTask",
          "New-ScheduledTaskTrigger",
          "Start-ScheduledTask",
          "Compte d'exécution",
        ],
        answer: 1,
        explanation:
          "« New-ScheduledTaskTrigger » : Commande qui définit quand la tâche se déclenche. Les autres choix renvoient à « Register-ScheduledTask », « Start-ScheduledTask », « Compte d'exécution » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Register-ScheduledTask » ?",
        choices: [
          "Commande qui liste ou inspecte des tâches planifiées",
          "Commande qui retire une tâche après vérification de sa cible",
          "Commande qui enregistre une nouvelle tâche planifiée",
          "Trace utile pour comprendre le succès ou l'échec d'une tâche sans console visible",
        ],
        answer: 2,
        explanation:
          "« Register-ScheduledTask » : Commande qui enregistre une nouvelle tâche planifiée. Les autres choix renvoient à « Get-ScheduledTask », « Unregister-ScheduledTask », « Journal de résultat » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui enregistre une nouvelle tâche planifiée » ?",
        choices: [
          "Get-ScheduledTask",
          "Unregister-ScheduledTask",
          "Journal de résultat",
          "Register-ScheduledTask",
        ],
        answer: 3,
        explanation:
          "« Register-ScheduledTask » : Commande qui enregistre une nouvelle tâche planifiée. Les autres choix renvoient à « Get-ScheduledTask », « Unregister-ScheduledTask », « Journal de résultat » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Get-ScheduledTask » ?",
        choices: [
          "Commande qui liste ou inspecte des tâches planifiées",
          "Commande qui lance une tâche existante à la demande",
          "Événement ou horaire qui décide du moment de lancement",
          "Exécution automatique d'un programme selon un déclencheur",
        ],
        answer: 0,
        explanation:
          "« Get-ScheduledTask » : Commande qui liste ou inspecte des tâches planifiées. Les autres choix renvoient à « Start-ScheduledTask », « Déclencheur », « Tâche planifiée » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui liste ou inspecte des tâches planifiées » ?",
        choices: ["Start-ScheduledTask", "Get-ScheduledTask", "Déclencheur", "Tâche planifiée"],
        answer: 1,
        explanation:
          "« Get-ScheduledTask » : Commande qui liste ou inspecte des tâches planifiées. Les autres choix renvoient à « Start-ScheduledTask », « Déclencheur », « Tâche planifiée » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Start-ScheduledTask » ?",
        choices: [
          "Commande qui retire une tâche après vérification de sa cible",
          "Identité dont les droits déterminent ce que la tâche peut faire",
          "Commande qui lance une tâche existante à la demande",
          "Commande qui décrit le programme lancé par une tâche",
        ],
        answer: 2,
        explanation:
          "« Start-ScheduledTask » : Commande qui lance une tâche existante à la demande. Les autres choix renvoient à « Unregister-ScheduledTask », « Compte d'exécution », « New-ScheduledTaskAction » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui lance une tâche existante à la demande » ?",
        choices: [
          "Unregister-ScheduledTask",
          "Compte d'exécution",
          "New-ScheduledTaskAction",
          "Start-ScheduledTask",
        ],
        answer: 3,
        explanation:
          "« Start-ScheduledTask » : Commande qui lance une tâche existante à la demande. Les autres choix renvoient à « Unregister-ScheduledTask », « Compte d'exécution », « New-ScheduledTaskAction » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Unregister-ScheduledTask » ?",
        choices: [
          "Commande qui retire une tâche après vérification de sa cible",
          "Événement ou horaire qui décide du moment de lancement",
          "Trace utile pour comprendre le succès ou l'échec d'une tâche sans console visible",
          "Commande qui définit quand la tâche se déclenche",
        ],
        answer: 0,
        explanation:
          "« Unregister-ScheduledTask » : Commande qui retire une tâche après vérification de sa cible. Les autres choix renvoient à « Déclencheur », « Journal de résultat », « New-ScheduledTaskTrigger » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui retire une tâche après vérification de sa cible » ?",
        choices: [
          "Déclencheur",
          "Unregister-ScheduledTask",
          "Journal de résultat",
          "New-ScheduledTaskTrigger",
        ],
        answer: 1,
        explanation:
          "« Unregister-ScheduledTask » : Commande qui retire une tâche après vérification de sa cible. Les autres choix renvoient à « Déclencheur », « Journal de résultat », « New-ScheduledTaskTrigger » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Déclencheur » ?",
        choices: [
          "Identité dont les droits déterminent ce que la tâche peut faire",
          "Exécution automatique d'un programme selon un déclencheur",
          "Événement ou horaire qui décide du moment de lancement",
          "Commande qui enregistre une nouvelle tâche planifiée",
        ],
        answer: 2,
        explanation:
          "« Déclencheur » : Événement ou horaire qui décide du moment de lancement. Les autres choix renvoient à « Compte d'exécution », « Tâche planifiée », « Register-ScheduledTask » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Événement ou horaire qui décide du moment de lancement » ?",
        choices: ["Compte d'exécution", "Tâche planifiée", "Register-ScheduledTask", "Déclencheur"],
        answer: 3,
        explanation:
          "« Déclencheur » : Événement ou horaire qui décide du moment de lancement. Les autres choix renvoient à « Compte d'exécution », « Tâche planifiée », « Register-ScheduledTask » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Compte d'exécution » ?",
        choices: [
          "Identité dont les droits déterminent ce que la tâche peut faire",
          "Trace utile pour comprendre le succès ou l'échec d'une tâche sans console visible",
          "Commande qui décrit le programme lancé par une tâche",
          "Commande qui liste ou inspecte des tâches planifiées",
        ],
        answer: 0,
        explanation:
          "« Compte d'exécution » : Identité dont les droits déterminent ce que la tâche peut faire. Les autres choix renvoient à « Journal de résultat », « New-ScheduledTaskAction », « Get-ScheduledTask » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Identité dont les droits déterminent ce que la tâche peut faire » ?",
        choices: [
          "Journal de résultat",
          "Compte d'exécution",
          "New-ScheduledTaskAction",
          "Get-ScheduledTask",
        ],
        answer: 1,
        explanation:
          "« Compte d'exécution » : Identité dont les droits déterminent ce que la tâche peut faire. Les autres choix renvoient à « Journal de résultat », « New-ScheduledTaskAction », « Get-ScheduledTask » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Journal de résultat » ?",
        choices: [
          "Exécution automatique d'un programme selon un déclencheur",
          "Commande qui définit quand la tâche se déclenche",
          "Trace utile pour comprendre le succès ou l'échec d'une tâche sans console visible",
          "Commande qui lance une tâche existante à la demande",
        ],
        answer: 2,
        explanation:
          "« Journal de résultat » : Trace utile pour comprendre le succès ou l'échec d'une tâche sans console visible. Les autres choix renvoient à « Tâche planifiée », « New-ScheduledTaskTrigger », « Start-ScheduledTask » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Trace utile pour comprendre le succès ou l'échec d'une tâche sans console visible » ?",
        choices: [
          "Tâche planifiée",
          "New-ScheduledTaskTrigger",
          "Start-ScheduledTask",
          "Journal de résultat",
        ],
        answer: 3,
        explanation:
          "« Journal de résultat » : Trace utile pour comprendre le succès ou l'échec d'une tâche sans console visible. Les autres choix renvoient à « Tâche planifiée », « New-ScheduledTaskTrigger », « Start-ScheduledTask » ; comparez leur rôle avant de continuer.",
      },
    ],
  },
  "28-introduction-ad": {
    id: "28-introduction-ad",
    title: "Quiz — 28. Introduction à Active Directory",
    chapter: "28. Introduction à Active Directory",
    intro: "20 questions pour vérifier vos repères avant de passer aux exercices pratiques.",
    chapterLink: "../28-introduction-ad/",
    questions: [
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Active Directory » ?",
        choices: [
          "Annuaire qui organise les identités et ressources d'un domaine Windows",
          "Périmètre d'administration partagé par des utilisateurs et ordinateurs",
          "Unité d'organisation qui regroupe des objets pour déléguer et organiser",
          "Commande qui obtient des informations sur le domaine",
        ],
        answer: 0,
        explanation:
          "« Active Directory » : Annuaire qui organise les identités et ressources d'un domaine Windows. Les autres choix renvoient à « Domaine », « OU », « Get-ADDomain » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Annuaire qui organise les identités et ressources d'un domaine Windows » ?",
        choices: ["Domaine", "Active Directory", "OU", "Get-ADDomain"],
        answer: 1,
        explanation:
          "« Active Directory » : Annuaire qui organise les identités et ressources d'un domaine Windows. Les autres choix renvoient à « Domaine », « OU », « Get-ADDomain » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Domaine » ?",
        choices: [
          "Serveur qui héberge les services d'annuaire et d'authentification du domaine",
          "Nom distinctif qui indique l'emplacement complet d'un objet dans l'annuaire",
          "Périmètre d'administration partagé par des utilisateurs et ordinateurs",
          "Commande qui recherche ou lit des comptes utilisateurs",
        ],
        answer: 2,
        explanation:
          "« Domaine » : Périmètre d'administration partagé par des utilisateurs et ordinateurs. Les autres choix renvoient à « Contrôleur de domaine », « DN », « Get-ADUser » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Périmètre d'administration partagé par des utilisateurs et ordinateurs » ?",
        choices: ["Contrôleur de domaine", "DN", "Get-ADUser", "Domaine"],
        answer: 3,
        explanation:
          "« Domaine » : Périmètre d'administration partagé par des utilisateurs et ordinateurs. Les autres choix renvoient à « Contrôleur de domaine », « DN », « Get-ADUser » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Contrôleur de domaine » ?",
        choices: [
          "Serveur qui héberge les services d'annuaire et d'authentification du domaine",
          "Unité d'organisation qui regroupe des objets pour déléguer et organiser",
          "Module PowerShell qui fournit les cmdlets AD",
          "Commande qui recherche ou lit des groupes",
        ],
        answer: 0,
        explanation:
          "« Contrôleur de domaine » : Serveur qui héberge les services d'annuaire et d'authentification du domaine. Les autres choix renvoient à « OU », « Module ActiveDirectory », « Get-ADGroup » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Serveur qui héberge les services d'annuaire et d'authentification du domaine » ?",
        choices: ["OU", "Contrôleur de domaine", "Module ActiveDirectory", "Get-ADGroup"],
        answer: 1,
        explanation:
          "« Contrôleur de domaine » : Serveur qui héberge les services d'annuaire et d'authentification du domaine. Les autres choix renvoient à « OU », « Module ActiveDirectory », « Get-ADGroup » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « OU » ?",
        choices: [
          "Nom distinctif qui indique l'emplacement complet d'un objet dans l'annuaire",
          "Commande qui obtient des informations sur le domaine",
          "Unité d'organisation qui regroupe des objets pour déléguer et organiser",
          "Domaine joignable, module disponible et permissions adaptées aux opérations demandées",
        ],
        answer: 2,
        explanation:
          "« OU » : Unité d'organisation qui regroupe des objets pour déléguer et organiser. Les autres choix renvoient à « DN », « Get-ADDomain », « Prérequis d'accès » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Unité d'organisation qui regroupe des objets pour déléguer et organiser » ?",
        choices: ["DN", "Get-ADDomain", "Prérequis d'accès", "OU"],
        answer: 3,
        explanation:
          "« OU » : Unité d'organisation qui regroupe des objets pour déléguer et organiser. Les autres choix renvoient à « DN », « Get-ADDomain », « Prérequis d'accès » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « DN » ?",
        choices: [
          "Nom distinctif qui indique l'emplacement complet d'un objet dans l'annuaire",
          "Module PowerShell qui fournit les cmdlets AD",
          "Commande qui recherche ou lit des comptes utilisateurs",
          "Annuaire qui organise les identités et ressources d'un domaine Windows",
        ],
        answer: 0,
        explanation:
          "« DN » : Nom distinctif qui indique l'emplacement complet d'un objet dans l'annuaire. Les autres choix renvoient à « Module ActiveDirectory », « Get-ADUser », « Active Directory » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Nom distinctif qui indique l'emplacement complet d'un objet dans l'annuaire » ?",
        choices: ["Module ActiveDirectory", "DN", "Get-ADUser", "Active Directory"],
        answer: 1,
        explanation:
          "« DN » : Nom distinctif qui indique l'emplacement complet d'un objet dans l'annuaire. Les autres choix renvoient à « Module ActiveDirectory », « Get-ADUser », « Active Directory » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Module ActiveDirectory » ?",
        choices: [
          "Commande qui obtient des informations sur le domaine",
          "Commande qui recherche ou lit des groupes",
          "Module PowerShell qui fournit les cmdlets AD",
          "Périmètre d'administration partagé par des utilisateurs et ordinateurs",
        ],
        answer: 2,
        explanation:
          "« Module ActiveDirectory » : Module PowerShell qui fournit les cmdlets AD. Les autres choix renvoient à « Get-ADDomain », « Get-ADGroup », « Domaine » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Module PowerShell qui fournit les cmdlets AD » ?",
        choices: ["Get-ADDomain", "Get-ADGroup", "Domaine", "Module ActiveDirectory"],
        answer: 3,
        explanation:
          "« Module ActiveDirectory » : Module PowerShell qui fournit les cmdlets AD. Les autres choix renvoient à « Get-ADDomain », « Get-ADGroup », « Domaine » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Get-ADDomain » ?",
        choices: [
          "Commande qui obtient des informations sur le domaine",
          "Commande qui recherche ou lit des comptes utilisateurs",
          "Domaine joignable, module disponible et permissions adaptées aux opérations demandées",
          "Serveur qui héberge les services d'annuaire et d'authentification du domaine",
        ],
        answer: 0,
        explanation:
          "« Get-ADDomain » : Commande qui obtient des informations sur le domaine. Les autres choix renvoient à « Get-ADUser », « Prérequis d'accès », « Contrôleur de domaine » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui obtient des informations sur le domaine » ?",
        choices: ["Get-ADUser", "Get-ADDomain", "Prérequis d'accès", "Contrôleur de domaine"],
        answer: 1,
        explanation:
          "« Get-ADDomain » : Commande qui obtient des informations sur le domaine. Les autres choix renvoient à « Get-ADUser », « Prérequis d'accès », « Contrôleur de domaine » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Get-ADUser » ?",
        choices: [
          "Commande qui recherche ou lit des groupes",
          "Annuaire qui organise les identités et ressources d'un domaine Windows",
          "Commande qui recherche ou lit des comptes utilisateurs",
          "Unité d'organisation qui regroupe des objets pour déléguer et organiser",
        ],
        answer: 2,
        explanation:
          "« Get-ADUser » : Commande qui recherche ou lit des comptes utilisateurs. Les autres choix renvoient à « Get-ADGroup », « Active Directory », « OU » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui recherche ou lit des comptes utilisateurs » ?",
        choices: ["Get-ADGroup", "Active Directory", "OU", "Get-ADUser"],
        answer: 3,
        explanation:
          "« Get-ADUser » : Commande qui recherche ou lit des comptes utilisateurs. Les autres choix renvoient à « Get-ADGroup », « Active Directory », « OU » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Get-ADGroup » ?",
        choices: [
          "Commande qui recherche ou lit des groupes",
          "Domaine joignable, module disponible et permissions adaptées aux opérations demandées",
          "Périmètre d'administration partagé par des utilisateurs et ordinateurs",
          "Nom distinctif qui indique l'emplacement complet d'un objet dans l'annuaire",
        ],
        answer: 0,
        explanation:
          "« Get-ADGroup » : Commande qui recherche ou lit des groupes. Les autres choix renvoient à « Prérequis d'accès », « Domaine », « DN » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui recherche ou lit des groupes » ?",
        choices: ["Prérequis d'accès", "Get-ADGroup", "Domaine", "DN"],
        answer: 1,
        explanation:
          "« Get-ADGroup » : Commande qui recherche ou lit des groupes. Les autres choix renvoient à « Prérequis d'accès », « Domaine », « DN » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Prérequis d'accès » ?",
        choices: [
          "Annuaire qui organise les identités et ressources d'un domaine Windows",
          "Serveur qui héberge les services d'annuaire et d'authentification du domaine",
          "Domaine joignable, module disponible et permissions adaptées aux opérations demandées",
          "Module PowerShell qui fournit les cmdlets AD",
        ],
        answer: 2,
        explanation:
          "« Prérequis d'accès » : Domaine joignable, module disponible et permissions adaptées aux opérations demandées. Les autres choix renvoient à « Active Directory », « Contrôleur de domaine », « Module ActiveDirectory » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Domaine joignable, module disponible et permissions adaptées aux opérations demandées » ?",
        choices: [
          "Active Directory",
          "Contrôleur de domaine",
          "Module ActiveDirectory",
          "Prérequis d'accès",
        ],
        answer: 3,
        explanation:
          "« Prérequis d'accès » : Domaine joignable, module disponible et permissions adaptées aux opérations demandées. Les autres choix renvoient à « Active Directory », « Contrôleur de domaine », « Module ActiveDirectory » ; comparez leur rôle avant de continuer.",
      },
    ],
  },
  "29-utilisateurs-ad": {
    id: "29-utilisateurs-ad",
    title: "Quiz — 29. Utilisateurs Active Directory",
    chapter: "29. Utilisateurs Active Directory",
    intro: "20 questions pour vérifier vos repères avant de passer aux exercices pratiques.",
    chapterLink: "../29-utilisateurs-ad/",
    questions: [
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Get-ADUser » ?",
        choices: [
          "Commande qui lit un ou plusieurs comptes utilisateur AD",
          "Commande qui crée un compte utilisateur AD",
          "Commande qui réactive un compte désactivé",
          "Commande qui supprime un compte et exige une cible vérifiée",
        ],
        answer: 0,
        explanation:
          "« Get-ADUser » : Commande qui lit un ou plusieurs comptes utilisateur AD. Les autres choix renvoient à « New-ADUser », « Enable-ADAccount », « Remove-ADUser » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui lit un ou plusieurs comptes utilisateur AD » ?",
        choices: ["New-ADUser", "Get-ADUser", "Enable-ADAccount", "Remove-ADUser"],
        answer: 1,
        explanation:
          "« Get-ADUser » : Commande qui lit un ou plusieurs comptes utilisateur AD. Les autres choix renvoient à « New-ADUser », « Enable-ADAccount », « Remove-ADUser » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « New-ADUser » ?",
        choices: [
          "Commande qui modifie les attributs d'un utilisateur",
          "Commande qui désactive un compte sans le supprimer",
          "Commande qui crée un compte utilisateur AD",
          "Paramètre qui désigne l'objet AD précis à traiter",
        ],
        answer: 2,
        explanation:
          "« New-ADUser » : Commande qui crée un compte utilisateur AD. Les autres choix renvoient à « Set-ADUser », « Disable-ADAccount », « -Identity » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui crée un compte utilisateur AD » ?",
        choices: ["Set-ADUser", "Disable-ADAccount", "-Identity", "New-ADUser"],
        answer: 3,
        explanation:
          "« New-ADUser » : Commande qui crée un compte utilisateur AD. Les autres choix renvoient à « Set-ADUser », « Disable-ADAccount », « -Identity » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Set-ADUser » ?",
        choices: [
          "Commande qui modifie les attributs d'un utilisateur",
          "Commande qui réactive un compte désactivé",
          "Commande qui change ou réinitialise un mot de passe AD",
          "Paramètre qui demande des attributs supplémentaires lors de la lecture",
        ],
        answer: 0,
        explanation:
          "« Set-ADUser » : Commande qui modifie les attributs d'un utilisateur. Les autres choix renvoient à « Enable-ADAccount », « Set-ADAccountPassword », « -Properties » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui modifie les attributs d'un utilisateur » ?",
        choices: ["Enable-ADAccount", "Set-ADUser", "Set-ADAccountPassword", "-Properties"],
        answer: 1,
        explanation:
          "« Set-ADUser » : Commande qui modifie les attributs d'un utilisateur. Les autres choix renvoient à « Enable-ADAccount », « Set-ADAccountPassword », « -Properties » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Enable-ADAccount » ?",
        choices: [
          "Commande qui désactive un compte sans le supprimer",
          "Commande qui supprime un compte et exige une cible vérifiée",
          "Commande qui réactive un compte désactivé",
          "Identifiant de connexion historique d'un compte dans le domaine",
        ],
        answer: 2,
        explanation:
          "« Enable-ADAccount » : Commande qui réactive un compte désactivé. Les autres choix renvoient à « Disable-ADAccount », « Remove-ADUser », « SamAccountName » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui réactive un compte désactivé » ?",
        choices: ["Disable-ADAccount", "Remove-ADUser", "SamAccountName", "Enable-ADAccount"],
        answer: 3,
        explanation:
          "« Enable-ADAccount » : Commande qui réactive un compte désactivé. Les autres choix renvoient à « Disable-ADAccount », « Remove-ADUser », « SamAccountName » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Disable-ADAccount » ?",
        choices: [
          "Commande qui désactive un compte sans le supprimer",
          "Commande qui change ou réinitialise un mot de passe AD",
          "Paramètre qui désigne l'objet AD précis à traiter",
          "Commande qui lit un ou plusieurs comptes utilisateur AD",
        ],
        answer: 0,
        explanation:
          "« Disable-ADAccount » : Commande qui désactive un compte sans le supprimer. Les autres choix renvoient à « Set-ADAccountPassword », « -Identity », « Get-ADUser » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui désactive un compte sans le supprimer » ?",
        choices: ["Set-ADAccountPassword", "Disable-ADAccount", "-Identity", "Get-ADUser"],
        answer: 1,
        explanation:
          "« Disable-ADAccount » : Commande qui désactive un compte sans le supprimer. Les autres choix renvoient à « Set-ADAccountPassword », « -Identity », « Get-ADUser » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Set-ADAccountPassword » ?",
        choices: [
          "Commande qui supprime un compte et exige une cible vérifiée",
          "Paramètre qui demande des attributs supplémentaires lors de la lecture",
          "Commande qui change ou réinitialise un mot de passe AD",
          "Commande qui crée un compte utilisateur AD",
        ],
        answer: 2,
        explanation:
          "« Set-ADAccountPassword » : Commande qui change ou réinitialise un mot de passe AD. Les autres choix renvoient à « Remove-ADUser », « -Properties », « New-ADUser » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui change ou réinitialise un mot de passe AD » ?",
        choices: ["Remove-ADUser", "-Properties", "New-ADUser", "Set-ADAccountPassword"],
        answer: 3,
        explanation:
          "« Set-ADAccountPassword » : Commande qui change ou réinitialise un mot de passe AD. Les autres choix renvoient à « Remove-ADUser », « -Properties », « New-ADUser » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Remove-ADUser » ?",
        choices: [
          "Commande qui supprime un compte et exige une cible vérifiée",
          "Paramètre qui désigne l'objet AD précis à traiter",
          "Identifiant de connexion historique d'un compte dans le domaine",
          "Commande qui modifie les attributs d'un utilisateur",
        ],
        answer: 0,
        explanation:
          "« Remove-ADUser » : Commande qui supprime un compte et exige une cible vérifiée. Les autres choix renvoient à « -Identity », « SamAccountName », « Set-ADUser » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui supprime un compte et exige une cible vérifiée » ?",
        choices: ["-Identity", "Remove-ADUser", "SamAccountName", "Set-ADUser"],
        answer: 1,
        explanation:
          "« Remove-ADUser » : Commande qui supprime un compte et exige une cible vérifiée. Les autres choix renvoient à « -Identity », « SamAccountName », « Set-ADUser » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « -Identity » ?",
        choices: [
          "Paramètre qui demande des attributs supplémentaires lors de la lecture",
          "Commande qui lit un ou plusieurs comptes utilisateur AD",
          "Paramètre qui désigne l'objet AD précis à traiter",
          "Commande qui réactive un compte désactivé",
        ],
        answer: 2,
        explanation:
          "« -Identity » : Paramètre qui désigne l'objet AD précis à traiter. Les autres choix renvoient à « -Properties », « Get-ADUser », « Enable-ADAccount » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Paramètre qui désigne l'objet AD précis à traiter » ?",
        choices: ["-Properties", "Get-ADUser", "Enable-ADAccount", "-Identity"],
        answer: 3,
        explanation:
          "« -Identity » : Paramètre qui désigne l'objet AD précis à traiter. Les autres choix renvoient à « -Properties », « Get-ADUser », « Enable-ADAccount » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « -Properties » ?",
        choices: [
          "Paramètre qui demande des attributs supplémentaires lors de la lecture",
          "Identifiant de connexion historique d'un compte dans le domaine",
          "Commande qui crée un compte utilisateur AD",
          "Commande qui désactive un compte sans le supprimer",
        ],
        answer: 0,
        explanation:
          "« -Properties » : Paramètre qui demande des attributs supplémentaires lors de la lecture. Les autres choix renvoient à « SamAccountName », « New-ADUser », « Disable-ADAccount » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Paramètre qui demande des attributs supplémentaires lors de la lecture » ?",
        choices: ["SamAccountName", "-Properties", "New-ADUser", "Disable-ADAccount"],
        answer: 1,
        explanation:
          "« -Properties » : Paramètre qui demande des attributs supplémentaires lors de la lecture. Les autres choix renvoient à « SamAccountName », « New-ADUser », « Disable-ADAccount » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « SamAccountName » ?",
        choices: [
          "Commande qui lit un ou plusieurs comptes utilisateur AD",
          "Commande qui modifie les attributs d'un utilisateur",
          "Identifiant de connexion historique d'un compte dans le domaine",
          "Commande qui change ou réinitialise un mot de passe AD",
        ],
        answer: 2,
        explanation:
          "« SamAccountName » : Identifiant de connexion historique d'un compte dans le domaine. Les autres choix renvoient à « Get-ADUser », « Set-ADUser », « Set-ADAccountPassword » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Identifiant de connexion historique d'un compte dans le domaine » ?",
        choices: ["Get-ADUser", "Set-ADUser", "Set-ADAccountPassword", "SamAccountName"],
        answer: 3,
        explanation:
          "« SamAccountName » : Identifiant de connexion historique d'un compte dans le domaine. Les autres choix renvoient à « Get-ADUser », « Set-ADUser », « Set-ADAccountPassword » ; comparez leur rôle avant de continuer.",
      },
    ],
  },
  "30-groupes-ad": {
    id: "30-groupes-ad",
    title: "Quiz — 30. Groupes Active Directory",
    chapter: "30. Groupes Active Directory",
    intro: "20 questions pour vérifier vos repères avant de passer aux exercices pratiques.",
    chapterLink: "../30-groupes-ad/",
    questions: [
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Get-ADGroup » ?",
        choices: [
          "Commande qui lit des groupes Active Directory",
          "Commande qui crée un groupe Active Directory",
          "Commande qui retire un membre d'un groupe",
          "Groupe utilisable pour attribuer des permissions",
        ],
        answer: 0,
        explanation:
          "« Get-ADGroup » : Commande qui lit des groupes Active Directory. Les autres choix renvoient à « New-ADGroup », « Remove-ADGroupMember », « Groupe de sécurité » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui lit des groupes Active Directory » ?",
        choices: ["New-ADGroup", "Get-ADGroup", "Remove-ADGroupMember", "Groupe de sécurité"],
        answer: 1,
        explanation:
          "« Get-ADGroup » : Commande qui lit des groupes Active Directory. Les autres choix renvoient à « New-ADGroup », « Remove-ADGroupMember », « Groupe de sécurité » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « New-ADGroup » ?",
        choices: [
          "Commande qui ajoute un objet comme membre d'un groupe",
          "Commande qui liste les membres d'un groupe",
          "Commande qui crée un groupe Active Directory",
          "Groupe destiné aux listes de diffusion plutôt qu'aux permissions",
        ],
        answer: 2,
        explanation:
          "« New-ADGroup » : Commande qui crée un groupe Active Directory. Les autres choix renvoient à « Add-ADGroupMember », « Get-ADGroupMember », « Groupe de distribution » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui crée un groupe Active Directory » ?",
        choices: [
          "Add-ADGroupMember",
          "Get-ADGroupMember",
          "Groupe de distribution",
          "New-ADGroup",
        ],
        answer: 3,
        explanation:
          "« New-ADGroup » : Commande qui crée un groupe Active Directory. Les autres choix renvoient à « Add-ADGroupMember », « Get-ADGroupMember », « Groupe de distribution » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Add-ADGroupMember » ?",
        choices: [
          "Commande qui ajoute un objet comme membre d'un groupe",
          "Commande qui retire un membre d'un groupe",
          "Commande qui liste les groupes auxquels appartient un principal",
          "Réglage qui détermine où un groupe peut être utilisé et quels membres il accepte",
        ],
        answer: 0,
        explanation:
          "« Add-ADGroupMember » : Commande qui ajoute un objet comme membre d'un groupe. Les autres choix renvoient à « Remove-ADGroupMember », « Get-ADPrincipalGroupMembership », « Portée de groupe » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui ajoute un objet comme membre d'un groupe » ?",
        choices: [
          "Remove-ADGroupMember",
          "Add-ADGroupMember",
          "Get-ADPrincipalGroupMembership",
          "Portée de groupe",
        ],
        answer: 1,
        explanation:
          "« Add-ADGroupMember » : Commande qui ajoute un objet comme membre d'un groupe. Les autres choix renvoient à « Remove-ADGroupMember », « Get-ADPrincipalGroupMembership », « Portée de groupe » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Remove-ADGroupMember » ?",
        choices: [
          "Commande qui liste les membres d'un groupe",
          "Groupe utilisable pour attribuer des permissions",
          "Commande qui retire un membre d'un groupe",
          "Action à vérifier soigneusement car elle peut retirer des droits liés au groupe",
        ],
        answer: 2,
        explanation:
          "« Remove-ADGroupMember » : Commande qui retire un membre d'un groupe. Les autres choix renvoient à « Get-ADGroupMember », « Groupe de sécurité », « Suppression de groupe » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui retire un membre d'un groupe » ?",
        choices: [
          "Get-ADGroupMember",
          "Groupe de sécurité",
          "Suppression de groupe",
          "Remove-ADGroupMember",
        ],
        answer: 3,
        explanation:
          "« Remove-ADGroupMember » : Commande qui retire un membre d'un groupe. Les autres choix renvoient à « Get-ADGroupMember », « Groupe de sécurité », « Suppression de groupe » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Get-ADGroupMember » ?",
        choices: [
          "Commande qui liste les membres d'un groupe",
          "Commande qui liste les groupes auxquels appartient un principal",
          "Groupe destiné aux listes de diffusion plutôt qu'aux permissions",
          "Commande qui lit des groupes Active Directory",
        ],
        answer: 0,
        explanation:
          "« Get-ADGroupMember » : Commande qui liste les membres d'un groupe. Les autres choix renvoient à « Get-ADPrincipalGroupMembership », « Groupe de distribution », « Get-ADGroup » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui liste les membres d'un groupe » ?",
        choices: [
          "Get-ADPrincipalGroupMembership",
          "Get-ADGroupMember",
          "Groupe de distribution",
          "Get-ADGroup",
        ],
        answer: 1,
        explanation:
          "« Get-ADGroupMember » : Commande qui liste les membres d'un groupe. Les autres choix renvoient à « Get-ADPrincipalGroupMembership », « Groupe de distribution », « Get-ADGroup » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Get-ADPrincipalGroupMembership » ?",
        choices: [
          "Groupe utilisable pour attribuer des permissions",
          "Réglage qui détermine où un groupe peut être utilisé et quels membres il accepte",
          "Commande qui liste les groupes auxquels appartient un principal",
          "Commande qui crée un groupe Active Directory",
        ],
        answer: 2,
        explanation:
          "« Get-ADPrincipalGroupMembership » : Commande qui liste les groupes auxquels appartient un principal. Les autres choix renvoient à « Groupe de sécurité », « Portée de groupe », « New-ADGroup » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui liste les groupes auxquels appartient un principal » ?",
        choices: [
          "Groupe de sécurité",
          "Portée de groupe",
          "New-ADGroup",
          "Get-ADPrincipalGroupMembership",
        ],
        answer: 3,
        explanation:
          "« Get-ADPrincipalGroupMembership » : Commande qui liste les groupes auxquels appartient un principal. Les autres choix renvoient à « Groupe de sécurité », « Portée de groupe », « New-ADGroup » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Groupe de sécurité » ?",
        choices: [
          "Groupe utilisable pour attribuer des permissions",
          "Groupe destiné aux listes de diffusion plutôt qu'aux permissions",
          "Action à vérifier soigneusement car elle peut retirer des droits liés au groupe",
          "Commande qui ajoute un objet comme membre d'un groupe",
        ],
        answer: 0,
        explanation:
          "« Groupe de sécurité » : Groupe utilisable pour attribuer des permissions. Les autres choix renvoient à « Groupe de distribution », « Suppression de groupe », « Add-ADGroupMember » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Groupe utilisable pour attribuer des permissions » ?",
        choices: [
          "Groupe de distribution",
          "Groupe de sécurité",
          "Suppression de groupe",
          "Add-ADGroupMember",
        ],
        answer: 1,
        explanation:
          "« Groupe de sécurité » : Groupe utilisable pour attribuer des permissions. Les autres choix renvoient à « Groupe de distribution », « Suppression de groupe », « Add-ADGroupMember » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Groupe de distribution » ?",
        choices: [
          "Réglage qui détermine où un groupe peut être utilisé et quels membres il accepte",
          "Commande qui lit des groupes Active Directory",
          "Groupe destiné aux listes de diffusion plutôt qu'aux permissions",
          "Commande qui retire un membre d'un groupe",
        ],
        answer: 2,
        explanation:
          "« Groupe de distribution » : Groupe destiné aux listes de diffusion plutôt qu'aux permissions. Les autres choix renvoient à « Portée de groupe », « Get-ADGroup », « Remove-ADGroupMember » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Groupe destiné aux listes de diffusion plutôt qu'aux permissions » ?",
        choices: [
          "Portée de groupe",
          "Get-ADGroup",
          "Remove-ADGroupMember",
          "Groupe de distribution",
        ],
        answer: 3,
        explanation:
          "« Groupe de distribution » : Groupe destiné aux listes de diffusion plutôt qu'aux permissions. Les autres choix renvoient à « Portée de groupe », « Get-ADGroup », « Remove-ADGroupMember » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Portée de groupe » ?",
        choices: [
          "Réglage qui détermine où un groupe peut être utilisé et quels membres il accepte",
          "Action à vérifier soigneusement car elle peut retirer des droits liés au groupe",
          "Commande qui crée un groupe Active Directory",
          "Commande qui liste les membres d'un groupe",
        ],
        answer: 0,
        explanation:
          "« Portée de groupe » : Réglage qui détermine où un groupe peut être utilisé et quels membres il accepte. Les autres choix renvoient à « Suppression de groupe », « New-ADGroup », « Get-ADGroupMember » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Réglage qui détermine où un groupe peut être utilisé et quels membres il accepte » ?",
        choices: ["Suppression de groupe", "Portée de groupe", "New-ADGroup", "Get-ADGroupMember"],
        answer: 1,
        explanation:
          "« Portée de groupe » : Réglage qui détermine où un groupe peut être utilisé et quels membres il accepte. Les autres choix renvoient à « Suppression de groupe », « New-ADGroup », « Get-ADGroupMember » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Suppression de groupe » ?",
        choices: [
          "Commande qui lit des groupes Active Directory",
          "Commande qui ajoute un objet comme membre d'un groupe",
          "Action à vérifier soigneusement car elle peut retirer des droits liés au groupe",
          "Commande qui liste les groupes auxquels appartient un principal",
        ],
        answer: 2,
        explanation:
          "« Suppression de groupe » : Action à vérifier soigneusement car elle peut retirer des droits liés au groupe. Les autres choix renvoient à « Get-ADGroup », « Add-ADGroupMember », « Get-ADPrincipalGroupMembership » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Action à vérifier soigneusement car elle peut retirer des droits liés au groupe » ?",
        choices: [
          "Get-ADGroup",
          "Add-ADGroupMember",
          "Get-ADPrincipalGroupMembership",
          "Suppression de groupe",
        ],
        answer: 3,
        explanation:
          "« Suppression de groupe » : Action à vérifier soigneusement car elle peut retirer des droits liés au groupe. Les autres choix renvoient à « Get-ADGroup », « Add-ADGroupMember », « Get-ADPrincipalGroupMembership » ; comparez leur rôle avant de continuer.",
      },
    ],
  },
  "31-recherche-et-rapports": {
    id: "31-recherche-et-rapports",
    title: "Quiz — 31. Recherche et rapports AD",
    chapter: "31. Recherche et rapports AD",
    intro: "20 questions pour vérifier vos repères avant de passer aux exercices pratiques.",
    chapterLink: "../31-recherche-et-rapports/",
    questions: [
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « -Filter » ?",
        choices: [
          "Paramètre qui sélectionne des objets AD selon une condition",
          "Paramètre qui limite la recherche à une partie de l'annuaire",
          "Commande qui trouve notamment des comptes désactivés ou expirés",
          "Commande qui écrit un rapport tabulaire réutilisable",
        ],
        answer: 0,
        explanation:
          "« -Filter » : Paramètre qui sélectionne des objets AD selon une condition. Les autres choix renvoient à « -SearchBase », « Search-ADAccount », « Export-Csv » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Paramètre qui sélectionne des objets AD selon une condition » ?",
        choices: ["-SearchBase", "-Filter", "Search-ADAccount", "Export-Csv"],
        answer: 1,
        explanation:
          "« -Filter » : Paramètre qui sélectionne des objets AD selon une condition. Les autres choix renvoient à « -SearchBase », « Search-ADAccount », « Export-Csv » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « -SearchBase » ?",
        choices: [
          "Paramètre qui charge les attributs supplémentaires nécessaires au rapport",
          "Commande qui fournit les comptes utilisateur à analyser",
          "Paramètre qui limite la recherche à une partie de l'annuaire",
          "Commande qui classe les lignes d'un rapport selon une propriété",
        ],
        answer: 2,
        explanation:
          "« -SearchBase » : Paramètre qui limite la recherche à une partie de l'annuaire. Les autres choix renvoient à « -Properties », « Get-ADUser », « Sort-Object » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Paramètre qui limite la recherche à une partie de l'annuaire » ?",
        choices: ["-Properties", "Get-ADUser", "Sort-Object", "-SearchBase"],
        answer: 3,
        explanation:
          "« -SearchBase » : Paramètre qui limite la recherche à une partie de l'annuaire. Les autres choix renvoient à « -Properties », « Get-ADUser », « Sort-Object » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « -Properties » ?",
        choices: [
          "Paramètre qui charge les attributs supplémentaires nécessaires au rapport",
          "Commande qui trouve notamment des comptes désactivés ou expirés",
          "Commande qui choisit les colonnes utiles dans un rapport",
          "Unité d'organisation qui peut servir de périmètre d'une recherche",
        ],
        answer: 0,
        explanation:
          "« -Properties » : Paramètre qui charge les attributs supplémentaires nécessaires au rapport. Les autres choix renvoient à « Search-ADAccount », « Select-Object », « OU » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Paramètre qui charge les attributs supplémentaires nécessaires au rapport » ?",
        choices: ["Search-ADAccount", "-Properties", "Select-Object", "OU"],
        answer: 1,
        explanation:
          "« -Properties » : Paramètre qui charge les attributs supplémentaires nécessaires au rapport. Les autres choix renvoient à « Search-ADAccount », « Select-Object », « OU » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Search-ADAccount » ?",
        choices: [
          "Commande qui fournit les comptes utilisateur à analyser",
          "Commande qui écrit un rapport tabulaire réutilisable",
          "Commande qui trouve notamment des comptes désactivés ou expirés",
          "Vue synthétique qui rassemble plusieurs indicateurs du domaine",
        ],
        answer: 2,
        explanation:
          "« Search-ADAccount » : Commande qui trouve notamment des comptes désactivés ou expirés. Les autres choix renvoient à « Get-ADUser », « Export-Csv », « Tableau de bord » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui trouve notamment des comptes désactivés ou expirés » ?",
        choices: ["Get-ADUser", "Export-Csv", "Tableau de bord", "Search-ADAccount"],
        answer: 3,
        explanation:
          "« Search-ADAccount » : Commande qui trouve notamment des comptes désactivés ou expirés. Les autres choix renvoient à « Get-ADUser », « Export-Csv », « Tableau de bord » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Get-ADUser » ?",
        choices: [
          "Commande qui fournit les comptes utilisateur à analyser",
          "Commande qui choisit les colonnes utiles dans un rapport",
          "Commande qui classe les lignes d'un rapport selon une propriété",
          "Paramètre qui sélectionne des objets AD selon une condition",
        ],
        answer: 0,
        explanation:
          "« Get-ADUser » : Commande qui fournit les comptes utilisateur à analyser. Les autres choix renvoient à « Select-Object », « Sort-Object », « -Filter » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui fournit les comptes utilisateur à analyser » ?",
        choices: ["Select-Object", "Get-ADUser", "Sort-Object", "-Filter"],
        answer: 1,
        explanation:
          "« Get-ADUser » : Commande qui fournit les comptes utilisateur à analyser. Les autres choix renvoient à « Select-Object », « Sort-Object », « -Filter » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Select-Object » ?",
        choices: [
          "Commande qui écrit un rapport tabulaire réutilisable",
          "Unité d'organisation qui peut servir de périmètre d'une recherche",
          "Commande qui choisit les colonnes utiles dans un rapport",
          "Paramètre qui limite la recherche à une partie de l'annuaire",
        ],
        answer: 2,
        explanation:
          "« Select-Object » : Commande qui choisit les colonnes utiles dans un rapport. Les autres choix renvoient à « Export-Csv », « OU », « -SearchBase » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui choisit les colonnes utiles dans un rapport » ?",
        choices: ["Export-Csv", "OU", "-SearchBase", "Select-Object"],
        answer: 3,
        explanation:
          "« Select-Object » : Commande qui choisit les colonnes utiles dans un rapport. Les autres choix renvoient à « Export-Csv », « OU », « -SearchBase » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Export-Csv » ?",
        choices: [
          "Commande qui écrit un rapport tabulaire réutilisable",
          "Commande qui classe les lignes d'un rapport selon une propriété",
          "Vue synthétique qui rassemble plusieurs indicateurs du domaine",
          "Paramètre qui charge les attributs supplémentaires nécessaires au rapport",
        ],
        answer: 0,
        explanation:
          "« Export-Csv » : Commande qui écrit un rapport tabulaire réutilisable. Les autres choix renvoient à « Sort-Object », « Tableau de bord », « -Properties » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui écrit un rapport tabulaire réutilisable » ?",
        choices: ["Sort-Object", "Export-Csv", "Tableau de bord", "-Properties"],
        answer: 1,
        explanation:
          "« Export-Csv » : Commande qui écrit un rapport tabulaire réutilisable. Les autres choix renvoient à « Sort-Object », « Tableau de bord », « -Properties » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Sort-Object » ?",
        choices: [
          "Unité d'organisation qui peut servir de périmètre d'une recherche",
          "Paramètre qui sélectionne des objets AD selon une condition",
          "Commande qui classe les lignes d'un rapport selon une propriété",
          "Commande qui trouve notamment des comptes désactivés ou expirés",
        ],
        answer: 2,
        explanation:
          "« Sort-Object » : Commande qui classe les lignes d'un rapport selon une propriété. Les autres choix renvoient à « OU », « -Filter », « Search-ADAccount » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Commande qui classe les lignes d'un rapport selon une propriété » ?",
        choices: ["OU", "-Filter", "Search-ADAccount", "Sort-Object"],
        answer: 3,
        explanation:
          "« Sort-Object » : Commande qui classe les lignes d'un rapport selon une propriété. Les autres choix renvoient à « OU », « -Filter », « Search-ADAccount » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « OU » ?",
        choices: [
          "Unité d'organisation qui peut servir de périmètre d'une recherche",
          "Vue synthétique qui rassemble plusieurs indicateurs du domaine",
          "Paramètre qui limite la recherche à une partie de l'annuaire",
          "Commande qui fournit les comptes utilisateur à analyser",
        ],
        answer: 0,
        explanation:
          "« OU » : Unité d'organisation qui peut servir de périmètre d'une recherche. Les autres choix renvoient à « Tableau de bord », « -SearchBase », « Get-ADUser » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Unité d'organisation qui peut servir de périmètre d'une recherche » ?",
        choices: ["Tableau de bord", "OU", "-SearchBase", "Get-ADUser"],
        answer: 1,
        explanation:
          "« OU » : Unité d'organisation qui peut servir de périmètre d'une recherche. Les autres choix renvoient à « Tableau de bord », « -SearchBase », « Get-ADUser » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Tableau de bord » ?",
        choices: [
          "Paramètre qui sélectionne des objets AD selon une condition",
          "Paramètre qui charge les attributs supplémentaires nécessaires au rapport",
          "Vue synthétique qui rassemble plusieurs indicateurs du domaine",
          "Commande qui choisit les colonnes utiles dans un rapport",
        ],
        answer: 2,
        explanation:
          "« Tableau de bord » : Vue synthétique qui rassemble plusieurs indicateurs du domaine. Les autres choix renvoient à « -Filter », « -Properties », « Select-Object » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Vue synthétique qui rassemble plusieurs indicateurs du domaine » ?",
        choices: ["-Filter", "-Properties", "Select-Object", "Tableau de bord"],
        answer: 3,
        explanation:
          "« Tableau de bord » : Vue synthétique qui rassemble plusieurs indicateurs du domaine. Les autres choix renvoient à « -Filter », « -Properties », « Select-Object » ; comparez leur rôle avant de continuer.",
      },
    ],
  },
  "32-interfaces-graphiques": {
    id: "32-interfaces-graphiques",
    title: "Quiz — 32. Interfaces graphiques (WinForms)",
    chapter: "32. Interfaces graphiques (WinForms)",
    intro: "20 questions pour vérifier vos repères avant de passer aux exercices pratiques.",
    chapterLink: "../32-interfaces-graphiques/",
    questions: [
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « WinForms » ?",
        choices: [
          "Bibliothèque .NET utilisée pour construire une fenêtre Windows",
          "Objet qui représente une fenêtre d'application",
          "Contrôle dans lequel l'utilisateur saisit du texte",
          "Méthode qui associe un bloc de code à l'événement Click",
        ],
        answer: 0,
        explanation:
          "« WinForms » : Bibliothèque .NET utilisée pour construire une fenêtre Windows. Les autres choix renvoient à « Form », « TextBox », « Add_Click » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Bibliothèque .NET utilisée pour construire une fenêtre Windows » ?",
        choices: ["Form", "WinForms", "TextBox", "Add_Click"],
        answer: 1,
        explanation:
          "« WinForms » : Bibliothèque .NET utilisée pour construire une fenêtre Windows. Les autres choix renvoient à « Form », « TextBox », « Add_Click » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Form » ?",
        choices: [
          "Contrôle qui affiche du texte non modifiable",
          "Contrôle sur lequel l'utilisateur clique pour déclencher une action",
          "Objet qui représente une fenêtre d'application",
          "Méthode qui affiche une fenêtre et attend sa fermeture",
        ],
        answer: 2,
        explanation:
          "« Form » : Objet qui représente une fenêtre d'application. Les autres choix renvoient à « Label », « Button », « ShowDialog() » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Objet qui représente une fenêtre d'application » ?",
        choices: ["Label", "Button", "ShowDialog()", "Form"],
        answer: 3,
        explanation:
          "« Form » : Objet qui représente une fenêtre d'application. Les autres choix renvoient à « Label », « Button », « ShowDialog() » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Label » ?",
        choices: [
          "Contrôle qui affiche du texte non modifiable",
          "Contrôle dans lequel l'utilisateur saisit du texte",
          "Événement lié à l'appui sur un bouton",
          "Vérification nécessaire avant d'utiliser une valeur reçue de l'interface",
        ],
        answer: 0,
        explanation:
          "« Label » : Contrôle qui affiche du texte non modifiable. Les autres choix renvoient à « TextBox », « Événement Click », « Validation de saisie » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Contrôle qui affiche du texte non modifiable » ?",
        choices: ["TextBox", "Label", "Événement Click", "Validation de saisie"],
        answer: 1,
        explanation:
          "« Label » : Contrôle qui affiche du texte non modifiable. Les autres choix renvoient à « TextBox », « Événement Click », « Validation de saisie » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « TextBox » ?",
        choices: [
          "Contrôle sur lequel l'utilisateur clique pour déclencher une action",
          "Méthode qui associe un bloc de code à l'événement Click",
          "Contrôle dans lequel l'utilisateur saisit du texte",
          "Interface souvent plus simple et plus portable qu'une fenêtre pour un script court",
        ],
        answer: 2,
        explanation:
          "« TextBox » : Contrôle dans lequel l'utilisateur saisit du texte. Les autres choix renvoient à « Button », « Add_Click », « Console » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Contrôle dans lequel l'utilisateur saisit du texte » ?",
        choices: ["Button", "Add_Click", "Console", "TextBox"],
        answer: 3,
        explanation:
          "« TextBox » : Contrôle dans lequel l'utilisateur saisit du texte. Les autres choix renvoient à « Button », « Add_Click », « Console » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Button » ?",
        choices: [
          "Contrôle sur lequel l'utilisateur clique pour déclencher une action",
          "Événement lié à l'appui sur un bouton",
          "Méthode qui affiche une fenêtre et attend sa fermeture",
          "Bibliothèque .NET utilisée pour construire une fenêtre Windows",
        ],
        answer: 0,
        explanation:
          "« Button » : Contrôle sur lequel l'utilisateur clique pour déclencher une action. Les autres choix renvoient à « Événement Click », « ShowDialog() », « WinForms » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Contrôle sur lequel l'utilisateur clique pour déclencher une action » ?",
        choices: ["Événement Click", "Button", "ShowDialog()", "WinForms"],
        answer: 1,
        explanation:
          "« Button » : Contrôle sur lequel l'utilisateur clique pour déclencher une action. Les autres choix renvoient à « Événement Click », « ShowDialog() », « WinForms » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Événement Click » ?",
        choices: [
          "Méthode qui associe un bloc de code à l'événement Click",
          "Vérification nécessaire avant d'utiliser une valeur reçue de l'interface",
          "Événement lié à l'appui sur un bouton",
          "Objet qui représente une fenêtre d'application",
        ],
        answer: 2,
        explanation:
          "« Événement Click » : Événement lié à l'appui sur un bouton. Les autres choix renvoient à « Add_Click », « Validation de saisie », « Form » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Événement lié à l'appui sur un bouton » ?",
        choices: ["Add_Click", "Validation de saisie", "Form", "Événement Click"],
        answer: 3,
        explanation:
          "« Événement Click » : Événement lié à l'appui sur un bouton. Les autres choix renvoient à « Add_Click », « Validation de saisie », « Form » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Add_Click » ?",
        choices: [
          "Méthode qui associe un bloc de code à l'événement Click",
          "Méthode qui affiche une fenêtre et attend sa fermeture",
          "Interface souvent plus simple et plus portable qu'une fenêtre pour un script court",
          "Contrôle qui affiche du texte non modifiable",
        ],
        answer: 0,
        explanation:
          "« Add_Click » : Méthode qui associe un bloc de code à l'événement Click. Les autres choix renvoient à « ShowDialog() », « Console », « Label » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Méthode qui associe un bloc de code à l'événement Click » ?",
        choices: ["ShowDialog()", "Add_Click", "Console", "Label"],
        answer: 1,
        explanation:
          "« Add_Click » : Méthode qui associe un bloc de code à l'événement Click. Les autres choix renvoient à « ShowDialog() », « Console », « Label » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « ShowDialog() » ?",
        choices: [
          "Vérification nécessaire avant d'utiliser une valeur reçue de l'interface",
          "Bibliothèque .NET utilisée pour construire une fenêtre Windows",
          "Méthode qui affiche une fenêtre et attend sa fermeture",
          "Contrôle dans lequel l'utilisateur saisit du texte",
        ],
        answer: 2,
        explanation:
          "« ShowDialog() » : Méthode qui affiche une fenêtre et attend sa fermeture. Les autres choix renvoient à « Validation de saisie », « WinForms », « TextBox » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Méthode qui affiche une fenêtre et attend sa fermeture » ?",
        choices: ["Validation de saisie", "WinForms", "TextBox", "ShowDialog()"],
        answer: 3,
        explanation:
          "« ShowDialog() » : Méthode qui affiche une fenêtre et attend sa fermeture. Les autres choix renvoient à « Validation de saisie », « WinForms », « TextBox » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Validation de saisie » ?",
        choices: [
          "Vérification nécessaire avant d'utiliser une valeur reçue de l'interface",
          "Interface souvent plus simple et plus portable qu'une fenêtre pour un script court",
          "Objet qui représente une fenêtre d'application",
          "Contrôle sur lequel l'utilisateur clique pour déclencher une action",
        ],
        answer: 0,
        explanation:
          "« Validation de saisie » : Vérification nécessaire avant d'utiliser une valeur reçue de l'interface. Les autres choix renvoient à « Console », « Form », « Button » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Vérification nécessaire avant d'utiliser une valeur reçue de l'interface » ?",
        choices: ["Console", "Validation de saisie", "Form", "Button"],
        answer: 1,
        explanation:
          "« Validation de saisie » : Vérification nécessaire avant d'utiliser une valeur reçue de l'interface. Les autres choix renvoient à « Console », « Form », « Button » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Comprendre la notion",
        question: "Quelle définition correspond à « Console » ?",
        choices: [
          "Bibliothèque .NET utilisée pour construire une fenêtre Windows",
          "Contrôle qui affiche du texte non modifiable",
          "Interface souvent plus simple et plus portable qu'une fenêtre pour un script court",
          "Événement lié à l'appui sur un bouton",
        ],
        answer: 2,
        explanation:
          "« Console » : Interface souvent plus simple et plus portable qu'une fenêtre pour un script court. Les autres choix renvoient à « WinForms », « Label », « Événement Click » ; comparez leur rôle avant de continuer.",
      },
      {
        theme: "Retrouver la commande ou le concept",
        question:
          "Quel concept correspond à cette description : « Interface souvent plus simple et plus portable qu'une fenêtre pour un script court » ?",
        choices: ["WinForms", "Label", "Événement Click", "Console"],
        answer: 3,
        explanation:
          "« Console » : Interface souvent plus simple et plus portable qu'une fenêtre pour un script court. Les autres choix renvoient à « WinForms », « Label », « Événement Click » ; comparez leur rôle avant de continuer.",
      },
    ],
  },
}
