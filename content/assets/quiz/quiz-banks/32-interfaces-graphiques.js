window.powerShellQuizBank = {
  id: "32-interfaces-graphiques",
  title: "Quiz — 32. Interfaces graphiques (WinForms)",
  chapter: "32. Interfaces graphiques (WinForms)",
  intro:
    "20 questions, dont deux situations concrètes, pour vérifier vos repères avant les travaux pratiques.",
  chapterLink: "../32-interfaces-graphiques/",
  questions: [
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « WinForms » ?",
      choices: [
        "Bibliothèque .NET utilisée pour construire une fenêtre Windows",
        "Objet qui représente une fenêtre d'application",
        "Contrôle dans lequel l'utilisateur saisit du texte",
        "Méthode qui associe un bloc de code à l'événement Click",
      ],
      answer: 0,
      explanation:
        "« WinForms » : Bibliothèque .NET utilisée pour construire une fenêtre Windows. Les autres choix renvoient à « Form », « TextBox », « Add_Click » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Bibliothèque .NET utilisée pour construire une fenêtre Windows » ?",
      choices: ["Form", "WinForms", "TextBox", "Add_Click"],
      answer: 1,
      explanation:
        "« WinForms » : Bibliothèque .NET utilisée pour construire une fenêtre Windows. Les autres choix renvoient à « Form », « TextBox », « Add_Click » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Form » ?",
      choices: [
        "Contrôle qui affiche du texte non modifiable",
        "Contrôle sur lequel l'utilisateur clique pour déclencher une action",
        "Objet qui représente une fenêtre d'application",
        "Méthode qui affiche une fenêtre et attend sa fermeture",
      ],
      answer: 2,
      explanation:
        "« Form » : Objet qui représente une fenêtre d'application. Les autres choix renvoient à « Label », « Button », « ShowDialog() » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Objet qui représente une fenêtre d'application » ?",
      choices: ["Label", "Button", "ShowDialog()", "Form"],
      answer: 3,
      explanation:
        "« Form » : Objet qui représente une fenêtre d'application. Les autres choix renvoient à « Label », « Button », « ShowDialog() » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Label » ?",
      choices: [
        "Contrôle qui affiche du texte non modifiable",
        "Contrôle dans lequel l'utilisateur saisit du texte",
        "Événement lié à l'appui sur un bouton",
        "Vérification nécessaire avant d'utiliser une valeur reçue de l'interface",
      ],
      answer: 0,
      explanation:
        "« Label » : Contrôle qui affiche du texte non modifiable. Les autres choix renvoient à « TextBox », « Événement Click », « Validation de saisie » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Contrôle qui affiche du texte non modifiable » ?",
      choices: ["TextBox", "Label", "Événement Click", "Validation de saisie"],
      answer: 1,
      explanation:
        "« Label » : Contrôle qui affiche du texte non modifiable. Les autres choix renvoient à « TextBox », « Événement Click », « Validation de saisie » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « TextBox » ?",
      choices: [
        "Contrôle sur lequel l'utilisateur clique pour déclencher une action",
        "Méthode qui associe un bloc de code à l'événement Click",
        "Contrôle dans lequel l'utilisateur saisit du texte",
        "Interface souvent plus simple et plus portable qu'une fenêtre pour un script court",
      ],
      answer: 2,
      explanation:
        "« TextBox » : Contrôle dans lequel l'utilisateur saisit du texte. Les autres choix renvoient à « Button », « Add_Click », « Console » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Contrôle dans lequel l'utilisateur saisit du texte » ?",
      choices: ["Button", "Add_Click", "Console", "TextBox"],
      answer: 3,
      explanation:
        "« TextBox » : Contrôle dans lequel l'utilisateur saisit du texte. Les autres choix renvoient à « Button », « Add_Click », « Console » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Button » ?",
      choices: [
        "Contrôle sur lequel l'utilisateur clique pour déclencher une action",
        "Événement lié à l'appui sur un bouton",
        "Méthode qui affiche une fenêtre et attend sa fermeture",
        "Bibliothèque .NET utilisée pour construire une fenêtre Windows",
      ],
      answer: 0,
      explanation:
        "« Button » : Contrôle sur lequel l'utilisateur clique pour déclencher une action. Les autres choix renvoient à « Événement Click », « ShowDialog() », « WinForms » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Contrôle sur lequel l'utilisateur clique pour déclencher une action » ?",
      choices: ["Événement Click", "Button", "ShowDialog()", "WinForms"],
      answer: 1,
      explanation:
        "« Button » : Contrôle sur lequel l'utilisateur clique pour déclencher une action. Les autres choix renvoient à « Événement Click », « ShowDialog() », « WinForms » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Événement Click » ?",
      choices: [
        "Méthode qui associe un bloc de code à l'événement Click",
        "Vérification nécessaire avant d'utiliser une valeur reçue de l'interface",
        "Événement lié à l'appui sur un bouton",
        "Objet qui représente une fenêtre d'application",
      ],
      answer: 2,
      explanation:
        "« Événement Click » : Événement lié à l'appui sur un bouton. Les autres choix renvoient à « Add_Click », « Validation de saisie », « Form » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Événement lié à l'appui sur un bouton » ?",
      choices: ["Add_Click", "Validation de saisie", "Form", "Événement Click"],
      answer: 3,
      explanation:
        "« Événement Click » : Événement lié à l'appui sur un bouton. Les autres choix renvoient à « Add_Click », « Validation de saisie », « Form » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Add_Click » ?",
      choices: [
        "Méthode qui associe un bloc de code à l'événement Click",
        "Méthode qui affiche une fenêtre et attend sa fermeture",
        "Interface souvent plus simple et plus portable qu'une fenêtre pour un script court",
        "Contrôle qui affiche du texte non modifiable",
      ],
      answer: 0,
      explanation:
        "« Add_Click » : Méthode qui associe un bloc de code à l'événement Click. Les autres choix renvoient à « ShowDialog() », « Console », « Label » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Quand l’utilisateur appuie sur un bouton, ton interface doit lancer une vérification. Quel branchement d’événement utilises-tu ?",
      choices: ["ShowDialog()", "Add_Click", "Console", "Label"],
      answer: 1,
      explanation:
        "« Add_Click » : Méthode qui associe un bloc de code à l'événement Click. Les autres choix renvoient à « ShowDialog() », « Console », « Label » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « ShowDialog() » ?",
      choices: [
        "Vérification nécessaire avant d'utiliser une valeur reçue de l'interface",
        "Bibliothèque .NET utilisée pour construire une fenêtre Windows",
        "Méthode qui affiche une fenêtre et attend sa fermeture",
        "Contrôle dans lequel l'utilisateur saisit du texte",
      ],
      answer: 2,
      explanation:
        "« ShowDialog() » : Méthode qui affiche une fenêtre et attend sa fermeture. Les autres choix renvoient à « Validation de saisie », « WinForms », « TextBox » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "La fenêtre est construite, mais rien ne s’affiche encore à l’écran. Quelle méthode l’ouvre ?",
      choices: ["Validation de saisie", "WinForms", "TextBox", "ShowDialog()"],
      answer: 3,
      explanation:
        "« ShowDialog() » : Méthode qui affiche une fenêtre et attend sa fermeture. Les autres choix renvoient à « Validation de saisie », « WinForms », « TextBox » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Validation de saisie » ?",
      choices: [
        "Vérification nécessaire avant d'utiliser une valeur reçue de l'interface",
        "Interface souvent plus simple et plus portable qu'une fenêtre pour un script court",
        "Objet qui représente une fenêtre d'application",
        "Contrôle sur lequel l'utilisateur clique pour déclencher une action",
      ],
      answer: 0,
      explanation:
        "« Validation de saisie » : Vérification nécessaire avant d'utiliser une valeur reçue de l'interface. Les autres choix renvoient à « Console », « Form », « Button » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Vérification nécessaire avant d'utiliser une valeur reçue de l'interface » ?",
      choices: ["Console", "Validation de saisie", "Form", "Button"],
      answer: 1,
      explanation:
        "« Validation de saisie » : Vérification nécessaire avant d'utiliser une valeur reçue de l'interface. Les autres choix renvoient à « Console », « Form », « Button » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Console » ?",
      choices: [
        "Bibliothèque .NET utilisée pour construire une fenêtre Windows",
        "Contrôle qui affiche du texte non modifiable",
        "Interface souvent plus simple et plus portable qu'une fenêtre pour un script court",
        "Événement lié à l'appui sur un bouton",
      ],
      answer: 2,
      explanation:
        "« Console » : Interface souvent plus simple et plus portable qu'une fenêtre pour un script court. Les autres choix renvoient à « WinForms », « Label », « Événement Click » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Interface souvent plus simple et plus portable qu'une fenêtre pour un script court » ?",
      choices: ["WinForms", "Label", "Événement Click", "Console"],
      answer: 3,
      explanation:
        "« Console » : Interface souvent plus simple et plus portable qu'une fenêtre pour un script court. Les autres choix renvoient à « WinForms », « Label », « Événement Click » ; comparez leur rôle avant de continuer.",
    },
  ],
}
