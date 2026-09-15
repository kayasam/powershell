window.powerShellQuizBank = {
  id: "13-fonctions",
  title: "Quiz — 13. Fonctions",
  chapter: "13. Fonctions",
  intro:
    "20 questions, dont deux situations concrètes, pour vérifier vos repères avant les travaux pratiques.",
  chapterLink: "../13-fonctions/",
  questions: [
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « function » ?",
      choices: [
        "Mot-clé qui définit un bloc de commandes réutilisable",
        "Bloc qui déclare les valeurs reçues par une fonction",
        "Valeur utilisée lorsqu'un argument facultatif est omis",
        "Contexte où une variable créée dans la fonction n'affecte pas nécessairement l'extérieur",
      ],
      answer: 0,
      explanation:
        "« function » : Mot-clé qui définit un bloc de commandes réutilisable. Les autres choix renvoient à « param », « Valeur par défaut », « Portée locale » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Mot-clé qui définit un bloc de commandes réutilisable » ?",
      choices: ["param", "function", "Valeur par défaut", "Portée locale"],
      answer: 1,
      explanation:
        "« function » : Mot-clé qui définit un bloc de commandes réutilisable. Les autres choix renvoient à « param », « Valeur par défaut », « Portée locale » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « param » ?",
      choices: [
        "Valeur fournie à une fonction pour adapter son comportement",
        "Instruction qui termine une fonction en renvoyant une valeur",
        "Bloc qui déclare les valeurs reçues par une fonction",
        "Convention recommandée pour nommer une fonction comme une cmdlet",
      ],
      answer: 2,
      explanation:
        "« param » : Bloc qui déclare les valeurs reçues par une fonction. Les autres choix renvoient à « Paramètre », « return », « Nom Verbe-Nom » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Une fonction doit accepter un nom d’agent fourni par l’utilisateur. Quel bloc déclares-tu au début ?",
      choices: ["Paramètre", "return", "Nom Verbe-Nom", "param"],
      answer: 3,
      explanation:
        "« param » : Bloc qui déclare les valeurs reçues par une fonction. Les autres choix renvoient à « Paramètre », « return », « Nom Verbe-Nom » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Paramètre » ?",
      choices: [
        "Valeur fournie à une fonction pour adapter son comportement",
        "Valeur utilisée lorsqu'un argument facultatif est omis",
        "Mécanisme par lequel une fonction PowerShell émet des objets",
        "Attribut qui donne à une fonction des comportements de cmdlet avancée",
      ],
      answer: 0,
      explanation:
        "« Paramètre » : Valeur fournie à une fonction pour adapter son comportement. Les autres choix renvoient à « Valeur par défaut », « Pipeline de sortie », « [CmdletBinding()] » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Valeur fournie à une fonction pour adapter son comportement » ?",
      choices: ["Valeur par défaut", "Paramètre", "Pipeline de sortie", "[CmdletBinding()]"],
      answer: 1,
      explanation:
        "« Paramètre » : Valeur fournie à une fonction pour adapter son comportement. Les autres choix renvoient à « Valeur par défaut », « Pipeline de sortie », « [CmdletBinding()] » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Valeur par défaut » ?",
      choices: [
        "Instruction qui termine une fonction en renvoyant une valeur",
        "Contexte où une variable créée dans la fonction n'affecte pas nécessairement l'extérieur",
        "Valeur utilisée lorsqu'un argument facultatif est omis",
        "Avantage de la fonction qui évite de recopier le même bloc de commandes",
      ],
      answer: 2,
      explanation:
        "« Valeur par défaut » : Valeur utilisée lorsqu'un argument facultatif est omis. Les autres choix renvoient à « return », « Portée locale », « Réutilisation » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Valeur utilisée lorsqu'un argument facultatif est omis » ?",
      choices: ["return", "Portée locale", "Réutilisation", "Valeur par défaut"],
      answer: 3,
      explanation:
        "« Valeur par défaut » : Valeur utilisée lorsqu'un argument facultatif est omis. Les autres choix renvoient à « return », « Portée locale », « Réutilisation » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « return » ?",
      choices: [
        "Instruction qui termine une fonction en renvoyant une valeur",
        "Mécanisme par lequel une fonction PowerShell émet des objets",
        "Convention recommandée pour nommer une fonction comme une cmdlet",
        "Mot-clé qui définit un bloc de commandes réutilisable",
      ],
      answer: 0,
      explanation:
        "« return » : Instruction qui termine une fonction en renvoyant une valeur. Les autres choix renvoient à « Pipeline de sortie », « Nom Verbe-Nom », « function » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Instruction qui termine une fonction en renvoyant une valeur » ?",
      choices: ["Pipeline de sortie", "return", "Nom Verbe-Nom", "function"],
      answer: 1,
      explanation:
        "« return » : Instruction qui termine une fonction en renvoyant une valeur. Les autres choix renvoient à « Pipeline de sortie », « Nom Verbe-Nom », « function » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Pipeline de sortie » ?",
      choices: [
        "Contexte où une variable créée dans la fonction n'affecte pas nécessairement l'extérieur",
        "Attribut qui donne à une fonction des comportements de cmdlet avancée",
        "Mécanisme par lequel une fonction PowerShell émet des objets",
        "Bloc qui déclare les valeurs reçues par une fonction",
      ],
      answer: 2,
      explanation:
        "« Pipeline de sortie » : Mécanisme par lequel une fonction PowerShell émet des objets. Les autres choix renvoient à « Portée locale », « [CmdletBinding()] », « param » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Mécanisme par lequel une fonction PowerShell émet des objets » ?",
      choices: ["Portée locale", "[CmdletBinding()]", "param", "Pipeline de sortie"],
      answer: 3,
      explanation:
        "« Pipeline de sortie » : Mécanisme par lequel une fonction PowerShell émet des objets. Les autres choix renvoient à « Portée locale », « [CmdletBinding()] », « param » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Portée locale » ?",
      choices: [
        "Contexte où une variable créée dans la fonction n'affecte pas nécessairement l'extérieur",
        "Convention recommandée pour nommer une fonction comme une cmdlet",
        "Avantage de la fonction qui évite de recopier le même bloc de commandes",
        "Valeur fournie à une fonction pour adapter son comportement",
      ],
      answer: 0,
      explanation:
        "« Portée locale » : Contexte où une variable créée dans la fonction n'affecte pas nécessairement l'extérieur. Les autres choix renvoient à « Nom Verbe-Nom », « Réutilisation », « Paramètre » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Contexte où une variable créée dans la fonction n'affecte pas nécessairement l'extérieur » ?",
      choices: ["Nom Verbe-Nom", "Portée locale", "Réutilisation", "Paramètre"],
      answer: 1,
      explanation:
        "« Portée locale » : Contexte où une variable créée dans la fonction n'affecte pas nécessairement l'extérieur. Les autres choix renvoient à « Nom Verbe-Nom », « Réutilisation », « Paramètre » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Nom Verbe-Nom » ?",
      choices: [
        "Attribut qui donne à une fonction des comportements de cmdlet avancée",
        "Mot-clé qui définit un bloc de commandes réutilisable",
        "Convention recommandée pour nommer une fonction comme une cmdlet",
        "Valeur utilisée lorsqu'un argument facultatif est omis",
      ],
      answer: 2,
      explanation:
        "« Nom Verbe-Nom » : Convention recommandée pour nommer une fonction comme une cmdlet. Les autres choix renvoient à « [CmdletBinding()] », « function », « Valeur par défaut » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Convention recommandée pour nommer une fonction comme une cmdlet » ?",
      choices: ["[CmdletBinding()]", "function", "Valeur par défaut", "Nom Verbe-Nom"],
      answer: 3,
      explanation:
        "« Nom Verbe-Nom » : Convention recommandée pour nommer une fonction comme une cmdlet. Les autres choix renvoient à « [CmdletBinding()] », « function », « Valeur par défaut » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « [CmdletBinding()] » ?",
      choices: [
        "Attribut qui donne à une fonction des comportements de cmdlet avancée",
        "Avantage de la fonction qui évite de recopier le même bloc de commandes",
        "Bloc qui déclare les valeurs reçues par une fonction",
        "Instruction qui termine une fonction en renvoyant une valeur",
      ],
      answer: 0,
      explanation:
        "« [CmdletBinding()] » : Attribut qui donne à une fonction des comportements de cmdlet avancée. Les autres choix renvoient à « Réutilisation », « param », « return » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Attribut qui donne à une fonction des comportements de cmdlet avancée » ?",
      choices: ["Réutilisation", "[CmdletBinding()]", "param", "return"],
      answer: 1,
      explanation:
        "« [CmdletBinding()] » : Attribut qui donne à une fonction des comportements de cmdlet avancée. Les autres choix renvoient à « Réutilisation », « param », « return » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Réutilisation » ?",
      choices: [
        "Mot-clé qui définit un bloc de commandes réutilisable",
        "Valeur fournie à une fonction pour adapter son comportement",
        "Avantage de la fonction qui évite de recopier le même bloc de commandes",
        "Mécanisme par lequel une fonction PowerShell émet des objets",
      ],
      answer: 2,
      explanation:
        "« Réutilisation » : Avantage de la fonction qui évite de recopier le même bloc de commandes. Les autres choix renvoient à « function », « Paramètre », « Pipeline de sortie » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Le même calcul figure dans trois scripts et chaque correction est répétée trois fois. Quel objectif motive sa mise en fonction ?",
      choices: ["function", "Paramètre", "Pipeline de sortie", "Réutilisation"],
      answer: 3,
      explanation:
        "« Réutilisation » : Avantage de la fonction qui évite de recopier le même bloc de commandes. Les autres choix renvoient à « function », « Paramètre », « Pipeline de sortie » ; comparez leur rôle avant de continuer.",
    },
  ],
}
