window.powerShellQuizBank = {
  id: "10-conditions",
  title: "Quiz — 10. Conditions",
  chapter: "10. Conditions",
  intro:
    "20 questions, dont deux situations concrètes, pour vérifier vos repères avant les travaux pratiques.",
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
      theme: "Situation concrète",
      question:
        "Une alerte peut avoir quatre niveaux distincts et chaque niveau déclenche une action différente. Quelle construction est adaptée ?",
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
      question: "Quel concept correspond à cette description : « Opérateur qui teste l'égalité » ?",
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
      theme: "Situation concrète",
      question:
        "Avant de lire une archive, le script doit vérifier que son fichier existe. Quelle commande utiliser ?",
      choices: ["if", "elseif", "-ne", "Test-Path"],
      answer: 3,
      explanation:
        "« Test-Path » : Commande qui vérifie l'existence d'un chemin avant d'agir. Les autres choix renvoient à « if », « elseif », « -ne » ; comparez leur rôle avant de continuer.",
    },
  ],
}
