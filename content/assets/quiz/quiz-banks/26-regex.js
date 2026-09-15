window.powerShellQuizBank = {
  id: "26-regex",
  title: "Quiz — 26. Expressions régulières (Regex)",
  chapter: "26. Expressions régulières (Regex)",
  intro:
    "20 questions, dont deux situations concrètes, pour vérifier vos repères avant les travaux pratiques.",
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
      theme: "Situation concrète",
      question:
        "Tu dois rechercher une expression dans des centaines de lignes de journal. Quelle cmdlet choisis-tu ?",
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
      theme: "Situation concrète",
      question:
        "Tu veux qu’un motif ne corresponde qu’au début d’une ligne d’alerte. Quel ancrage utilises-tu ?",
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
}
