window.powerShellQuizBank = {
  id: "05-alias",
  title: "Quiz — 05. Alias",
  chapter: "05. Alias",
  intro:
    "20 questions, dont deux situations concrètes, pour vérifier vos repères avant les travaux pratiques.",
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
      theme: "Situation concrète",
      question:
        "Un ancien script utilise gci et tu veux vérifier la cmdlet réelle derrière ce raccourci. Que lances-tu ?",
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
      question: "Quel concept correspond à cette description : « Alias courant de Get-Process » ?",
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
      question: "Quel concept correspond à cette description : « Alias courant de Set-Location » ?",
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
      theme: "Situation concrète",
      question:
        "Tu partages un script avec une équipe et hésites entre gci et Get-ChildItem. Quel principe doit guider ton choix ?",
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
}
