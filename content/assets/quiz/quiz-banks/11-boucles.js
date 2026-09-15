window.powerShellQuizBank = {
  id: "11-boucles",
  title: "Quiz — 11. Boucles",
  chapter: "11. Boucles",
  intro:
    "20 questions, dont deux situations concrètes, pour vérifier vos repères avant les travaux pratiques.",
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
      theme: "Situation concrète",
      question:
        "Tu connais déjà la liste de cinq agents et dois appliquer la même action à chacun. Quelle boucle choisir ?",
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
      theme: "Situation concrète",
      question:
        "Pendant une recherche répétée, tu trouves enfin le bon élément et veux arrêter immédiatement la boucle. Que fais-tu ?",
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
}
