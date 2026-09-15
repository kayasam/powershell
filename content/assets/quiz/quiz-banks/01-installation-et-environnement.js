window.powerShellQuizBank = {
  id: "01-installation-et-environnement",
  title: "Quiz — 01. Installation et environnement",
  chapter: "01. Installation et environnement",
  intro:
    "20 questions, dont deux situations concrètes, pour vérifier vos repères avant les travaux pratiques.",
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
      theme: "Situation concrète",
      question:
        "Sur un poste inconnu, tu dois savoir quelle édition et quelle version de PowerShell sont ouvertes. Que consultes-tu ?",
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
      theme: "Situation concrète",
      question:
        "Une élève veut exécuter ses scripts locaux sans autoriser sans contrôle ceux téléchargés. Quelle politique choisir ?",
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
}
