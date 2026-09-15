window.powerShellQuizBank = {
  id: "16-lire-et-ecrire",
  title: "Quiz — 16. Lire et écrire",
  chapter: "16. Lire et écrire",
  intro:
    "20 questions, dont deux situations concrètes, pour vérifier vos repères avant les travaux pratiques.",
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
      theme: "Situation concrète",
      question:
        "Un journal existe déjà et tu dois lui ajouter une nouvelle ligne sans effacer les précédentes. Quelle cmdlet choisir ?",
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
      theme: "Situation concrète",
      question:
        "Un fichier avec accents sera lu sur plusieurs machines : quel paramètre te permet de préciser UTF-8 à l’écriture ?",
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
}
