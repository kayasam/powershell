window.powerShellQuizBank = {
  id: "23-modules",
  title: "Quiz — 23. Modules",
  chapter: "23. Modules",
  intro:
    "20 questions, dont deux situations concrètes, pour vérifier vos repères avant les travaux pratiques.",
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
      theme: "Situation concrète",
      question:
        "Un module existe déjà sur le poste mais ses commandes ne sont pas chargées dans la session. Que fais-tu ?",
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
      theme: "Situation concrète",
      question:
        "Ton module contient des fonctions internes et une seule fonction doit être publique. Quelle commande contrôle cette exposition ?",
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
}
