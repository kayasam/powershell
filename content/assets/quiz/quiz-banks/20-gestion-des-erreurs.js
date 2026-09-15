window.powerShellQuizBank = {
  id: "20-gestion-des-erreurs",
  title: "Quiz — 20. Gestion des erreurs",
  chapter: "20. Gestion des erreurs",
  intro:
    "20 questions, dont deux situations concrètes, pour vérifier vos repères avant les travaux pratiques.",
  chapterLink: "../20-gestion-des-erreurs/",
  questions: [
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « try » ?",
      choices: [
        "Bloc dans lequel on exécute une opération susceptible d'échouer",
        "Bloc qui traite une erreur interceptée",
        "Option qui transforme certaines erreurs non bloquantes en erreurs interceptables",
        "Erreur qui interrompt l'opération en cours et peut être interceptée",
      ],
      answer: 0,
      explanation:
        "« try » : Bloc dans lequel on exécute une opération susceptible d'échouer. Les autres choix renvoient à « catch », « -ErrorAction Stop », « Erreur terminante » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Bloc dans lequel on exécute une opération susceptible d'échouer » ?",
      choices: ["catch", "try", "-ErrorAction Stop", "Erreur terminante"],
      answer: 1,
      explanation:
        "« try » : Bloc dans lequel on exécute une opération susceptible d'échouer. Les autres choix renvoient à « catch », « -ErrorAction Stop », « Erreur terminante » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « catch » ?",
      choices: [
        "Bloc de nettoyage exécuté après try et catch",
        "Objet de l'erreur actuellement interceptée",
        "Bloc qui traite une erreur interceptée",
        "Erreur signalée sans forcément arrêter tout le pipeline",
      ],
      answer: 2,
      explanation:
        "« catch » : Bloc qui traite une erreur interceptée. Les autres choix renvoient à « finally », « $_ dans catch », « Erreur non terminante » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Bloc qui traite une erreur interceptée » ?",
      choices: ["finally", "$_ dans catch", "Erreur non terminante", "catch"],
      answer: 3,
      explanation:
        "« catch » : Bloc qui traite une erreur interceptée. Les autres choix renvoient à « finally », « $_ dans catch », « Erreur non terminante » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « finally » ?",
      choices: [
        "Bloc de nettoyage exécuté après try et catch",
        "Option qui transforme certaines erreurs non bloquantes en erreurs interceptables",
        "Vérification préalable de l'existence d'un chemin",
        "Retour qui explique ce qui a échoué et ce que l'utilisateur peut faire",
      ],
      answer: 0,
      explanation:
        "« finally » : Bloc de nettoyage exécuté après try et catch. Les autres choix renvoient à « -ErrorAction Stop », « Test-Path », « Message d'erreur utile » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Que le traitement réussisse ou échoue, une ressource ouverte doit être fermée. Dans quel bloc places-tu ce nettoyage ?",
      choices: ["-ErrorAction Stop", "finally", "Test-Path", "Message d'erreur utile"],
      answer: 1,
      explanation:
        "« finally » : Bloc de nettoyage exécuté après try et catch. Les autres choix renvoient à « -ErrorAction Stop », « Test-Path », « Message d'erreur utile » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « -ErrorAction Stop » ?",
      choices: [
        "Objet de l'erreur actuellement interceptée",
        "Erreur qui interrompt l'opération en cours et peut être interceptée",
        "Option qui transforme certaines erreurs non bloquantes en erreurs interceptables",
        "Action qui libère des ressources ou remet le contexte en ordre après une tentative",
      ],
      answer: 2,
      explanation:
        "« -ErrorAction Stop » : Option qui transforme certaines erreurs non bloquantes en erreurs interceptables. Les autres choix renvoient à « $_ dans catch », « Erreur terminante », « Nettoyage » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Une erreur non terminante doit déclencher ton bloc catch pour éviter une suite dangereuse. Quel paramètre ajoutes-tu ?",
      choices: ["$_ dans catch", "Erreur terminante", "Nettoyage", "-ErrorAction Stop"],
      answer: 3,
      explanation:
        "« -ErrorAction Stop » : Option qui transforme certaines erreurs non bloquantes en erreurs interceptables. Les autres choix renvoient à « $_ dans catch », « Erreur terminante », « Nettoyage » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « $_ dans catch » ?",
      choices: [
        "Objet de l'erreur actuellement interceptée",
        "Vérification préalable de l'existence d'un chemin",
        "Erreur signalée sans forcément arrêter tout le pipeline",
        "Bloc dans lequel on exécute une opération susceptible d'échouer",
      ],
      answer: 0,
      explanation:
        "« $_ dans catch » : Objet de l'erreur actuellement interceptée. Les autres choix renvoient à « Test-Path », « Erreur non terminante », « try » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Objet de l'erreur actuellement interceptée » ?",
      choices: ["Test-Path", "$_ dans catch", "Erreur non terminante", "try"],
      answer: 1,
      explanation:
        "« $_ dans catch » : Objet de l'erreur actuellement interceptée. Les autres choix renvoient à « Test-Path », « Erreur non terminante », « try » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Test-Path » ?",
      choices: [
        "Erreur qui interrompt l'opération en cours et peut être interceptée",
        "Retour qui explique ce qui a échoué et ce que l'utilisateur peut faire",
        "Vérification préalable de l'existence d'un chemin",
        "Bloc qui traite une erreur interceptée",
      ],
      answer: 2,
      explanation:
        "« Test-Path » : Vérification préalable de l'existence d'un chemin. Les autres choix renvoient à « Erreur terminante », « Message d'erreur utile », « catch » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Vérification préalable de l'existence d'un chemin » ?",
      choices: ["Erreur terminante", "Message d'erreur utile", "catch", "Test-Path"],
      answer: 3,
      explanation:
        "« Test-Path » : Vérification préalable de l'existence d'un chemin. Les autres choix renvoient à « Erreur terminante », « Message d'erreur utile », « catch » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Erreur terminante » ?",
      choices: [
        "Erreur qui interrompt l'opération en cours et peut être interceptée",
        "Erreur signalée sans forcément arrêter tout le pipeline",
        "Action qui libère des ressources ou remet le contexte en ordre après une tentative",
        "Bloc de nettoyage exécuté après try et catch",
      ],
      answer: 0,
      explanation:
        "« Erreur terminante » : Erreur qui interrompt l'opération en cours et peut être interceptée. Les autres choix renvoient à « Erreur non terminante », « Nettoyage », « finally » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Erreur qui interrompt l'opération en cours et peut être interceptée » ?",
      choices: ["Erreur non terminante", "Erreur terminante", "Nettoyage", "finally"],
      answer: 1,
      explanation:
        "« Erreur terminante » : Erreur qui interrompt l'opération en cours et peut être interceptée. Les autres choix renvoient à « Erreur non terminante », « Nettoyage », « finally » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Erreur non terminante » ?",
      choices: [
        "Retour qui explique ce qui a échoué et ce que l'utilisateur peut faire",
        "Bloc dans lequel on exécute une opération susceptible d'échouer",
        "Erreur signalée sans forcément arrêter tout le pipeline",
        "Option qui transforme certaines erreurs non bloquantes en erreurs interceptables",
      ],
      answer: 2,
      explanation:
        "« Erreur non terminante » : Erreur signalée sans forcément arrêter tout le pipeline. Les autres choix renvoient à « Message d'erreur utile », « try », « -ErrorAction Stop » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Erreur signalée sans forcément arrêter tout le pipeline » ?",
      choices: ["Message d'erreur utile", "try", "-ErrorAction Stop", "Erreur non terminante"],
      answer: 3,
      explanation:
        "« Erreur non terminante » : Erreur signalée sans forcément arrêter tout le pipeline. Les autres choix renvoient à « Message d'erreur utile », « try », « -ErrorAction Stop » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Message d'erreur utile » ?",
      choices: [
        "Retour qui explique ce qui a échoué et ce que l'utilisateur peut faire",
        "Action qui libère des ressources ou remet le contexte en ordre après une tentative",
        "Bloc qui traite une erreur interceptée",
        "Objet de l'erreur actuellement interceptée",
      ],
      answer: 0,
      explanation:
        "« Message d'erreur utile » : Retour qui explique ce qui a échoué et ce que l'utilisateur peut faire. Les autres choix renvoient à « Nettoyage », « catch », « $_ dans catch » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Retour qui explique ce qui a échoué et ce que l'utilisateur peut faire » ?",
      choices: ["Nettoyage", "Message d'erreur utile", "catch", "$_ dans catch"],
      answer: 1,
      explanation:
        "« Message d'erreur utile » : Retour qui explique ce qui a échoué et ce que l'utilisateur peut faire. Les autres choix renvoient à « Nettoyage », « catch », « $_ dans catch » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Nettoyage » ?",
      choices: [
        "Bloc dans lequel on exécute une opération susceptible d'échouer",
        "Bloc de nettoyage exécuté après try et catch",
        "Action qui libère des ressources ou remet le contexte en ordre après une tentative",
        "Vérification préalable de l'existence d'un chemin",
      ],
      answer: 2,
      explanation:
        "« Nettoyage » : Action qui libère des ressources ou remet le contexte en ordre après une tentative. Les autres choix renvoient à « try », « finally », « Test-Path » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Action qui libère des ressources ou remet le contexte en ordre après une tentative » ?",
      choices: ["try", "finally", "Test-Path", "Nettoyage"],
      answer: 3,
      explanation:
        "« Nettoyage » : Action qui libère des ressources ou remet le contexte en ordre après une tentative. Les autres choix renvoient à « try », « finally », « Test-Path » ; comparez leur rôle avant de continuer.",
    },
  ],
}
