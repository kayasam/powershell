window.powerShellQuizBank = {
  id: "21-erreurs-avancees",
  title: "Quiz — 21. Gestion des erreurs avancée",
  chapter: "21. Gestion des erreurs avancée",
  intro:
    "20 questions, dont deux situations concrètes, pour vérifier vos repères avant les travaux pratiques.",
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
      theme: "Situation concrète",
      question:
        "Tu veux afficher des détails de diagnostic seulement quand l’utilisateur active le mode verbeux. Quelle sortie utilises-tu ?",
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
      theme: "Situation concrète",
      question:
        "Un outil externe vient de finir : tu dois lire son code de sortie avant de décider si le script continue. Quelle variable consultes-tu ?",
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
}
