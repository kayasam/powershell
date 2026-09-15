window.powerShellQuizBank = {
  id: "15-fichiers-et-dossiers",
  title: "Quiz — 15. Fichiers et dossiers",
  chapter: "15. Fichiers et dossiers",
  intro:
    "20 questions, dont deux situations concrètes, pour vérifier vos repères avant les travaux pratiques.",
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
      question: "Quel concept correspond à cette description : « Commande qui copie un élément » ?",
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
      theme: "Situation concrète",
      question:
        "Avant de copier un rapport, tu dois vérifier la présence exacte du fichier source. Que lances-tu ?",
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
      theme: "Situation concrète",
      question:
        "Un nom de fichier contient des crochets que PowerShell pourrait interpréter comme un motif. Quel paramètre protège ce nom exact ?",
      choices: ["Get-Location", "Get-ChildItem", "Move-Item", "-LiteralPath"],
      answer: 3,
      explanation:
        "« -LiteralPath » : Paramètre qui traite le chemin tel quel sans interpréter les caractères génériques. Les autres choix renvoient à « Get-Location », « Get-ChildItem », « Move-Item » ; comparez leur rôle avant de continuer.",
    },
  ],
}
