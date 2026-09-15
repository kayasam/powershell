window.powerShellQuizBank = {
  id: "25-profils",
  title: "Quiz — 25. Les profils PowerShell",
  chapter: "25. Les profils PowerShell",
  intro:
    "20 questions, dont deux situations concrètes, pour vérifier vos repères avant les travaux pratiques.",
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
      theme: "Situation concrète",
      question:
        "Tu veux savoir quel fichier de démarrage est utilisé par ta session PowerShell actuelle. Quelle variable consultes-tu ?",
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
      theme: "Situation concrète",
      question:
        "Avant de modifier ton profil, tu dois savoir si son fichier existe déjà. Que lances-tu ?",
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
}
