window.powerShellQuizBank = {
  id: "04-completion",
  title: "Quiz — 04. Complétion",
  chapter: "04. Complétion",
  intro:
    "20 questions, dont deux situations concrètes, pour vérifier vos repères avant les travaux pratiques.",
  chapterLink: "../04-completion/",
  questions: [
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Tab » ?",
      choices: [
        "Touche qui complète une commande ou un paramètre à partir du contexte",
        "Combinaison qui parcourt les propositions de complétion dans l'autre sens",
        "Aide qui propose les options compatibles avec la commande saisie",
        "Commande utile pour découvrir un nom quand la complétion ne suffit pas",
      ],
      answer: 0,
      explanation:
        "« Tab » : Touche qui complète une commande ou un paramètre à partir du contexte. Les autres choix renvoient à « Shift+Tab », « Complétion des paramètres », « Get-Command » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Touche qui complète une commande ou un paramètre à partir du contexte » ?",
      choices: ["Shift+Tab", "Tab", "Complétion des paramètres", "Get-Command"],
      answer: 1,
      explanation:
        "« Tab » : Touche qui complète une commande ou un paramètre à partir du contexte. Les autres choix renvoient à « Shift+Tab », « Complétion des paramètres », « Get-Command » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Shift+Tab » ?",
      choices: [
        "Aide qui termine le nom d'une commande commencée",
        "Aide qui termine des noms de dossiers ou de fichiers existants",
        "Combinaison qui parcourt les propositions de complétion dans l'autre sens",
        "Commande qui confirme le sens d'un paramètre proposé par la complétion",
      ],
      answer: 2,
      explanation:
        "« Shift+Tab » : Combinaison qui parcourt les propositions de complétion dans l'autre sens. Les autres choix renvoient à « Complétion des cmdlets », « Complétion des chemins », « Get-Help » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Combinaison qui parcourt les propositions de complétion dans l'autre sens » ?",
      choices: ["Complétion des cmdlets", "Complétion des chemins", "Get-Help", "Shift+Tab"],
      answer: 3,
      explanation:
        "« Shift+Tab » : Combinaison qui parcourt les propositions de complétion dans l'autre sens. Les autres choix renvoient à « Complétion des cmdlets », « Complétion des chemins », « Get-Help » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Complétion des cmdlets » ?",
      choices: [
        "Aide qui termine le nom d'une commande commencée",
        "Aide qui propose les options compatibles avec la commande saisie",
        "Aide qui propose les membres accessibles sur un objet",
        "Liste des commandes déjà exécutées, différente de la complétion",
      ],
      answer: 0,
      explanation:
        "« Complétion des cmdlets » : Aide qui termine le nom d'une commande commencée. Les autres choix renvoient à « Complétion des paramètres », « Complétion des propriétés », « Historique » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Aide qui termine le nom d'une commande commencée » ?",
      choices: [
        "Complétion des paramètres",
        "Complétion des cmdlets",
        "Complétion des propriétés",
        "Historique",
      ],
      answer: 1,
      explanation:
        "« Complétion des cmdlets » : Aide qui termine le nom d'une commande commencée. Les autres choix renvoient à « Complétion des paramètres », « Complétion des propriétés », « Historique » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Complétion des paramètres » ?",
      choices: [
        "Aide qui termine des noms de dossiers ou de fichiers existants",
        "Commande utile pour découvrir un nom quand la complétion ne suffit pas",
        "Aide qui propose les options compatibles avec la commande saisie",
        "Avantage de la complétion qui évite de ressaisir les noms longs",
      ],
      answer: 2,
      explanation:
        "« Complétion des paramètres » : Aide qui propose les options compatibles avec la commande saisie. Les autres choix renvoient à « Complétion des chemins », « Get-Command », « Réduction des fautes de frappe » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Tu connais la cmdlet mais hésites sur l’écriture de son paramètre. Quelle aide au clavier est adaptée ?",
      choices: [
        "Complétion des chemins",
        "Get-Command",
        "Réduction des fautes de frappe",
        "Complétion des paramètres",
      ],
      answer: 3,
      explanation:
        "« Complétion des paramètres » : Aide qui propose les options compatibles avec la commande saisie. Les autres choix renvoient à « Complétion des chemins », « Get-Command », « Réduction des fautes de frappe » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Complétion des chemins » ?",
      choices: [
        "Aide qui termine des noms de dossiers ou de fichiers existants",
        "Aide qui propose les membres accessibles sur un objet",
        "Commande qui confirme le sens d'un paramètre proposé par la complétion",
        "Touche qui complète une commande ou un paramètre à partir du contexte",
      ],
      answer: 0,
      explanation:
        "« Complétion des chemins » : Aide qui termine des noms de dossiers ou de fichiers existants. Les autres choix renvoient à « Complétion des propriétés », « Get-Help », « Tab » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Tu dois saisir un long chemin de dossier sans faute de frappe. Quelle aide utilises-tu ?",
      choices: ["Complétion des propriétés", "Complétion des chemins", "Get-Help", "Tab"],
      answer: 1,
      explanation:
        "« Complétion des chemins » : Aide qui termine des noms de dossiers ou de fichiers existants. Les autres choix renvoient à « Complétion des propriétés », « Get-Help », « Tab » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Complétion des propriétés » ?",
      choices: [
        "Commande utile pour découvrir un nom quand la complétion ne suffit pas",
        "Liste des commandes déjà exécutées, différente de la complétion",
        "Aide qui propose les membres accessibles sur un objet",
        "Combinaison qui parcourt les propositions de complétion dans l'autre sens",
      ],
      answer: 2,
      explanation:
        "« Complétion des propriétés » : Aide qui propose les membres accessibles sur un objet. Les autres choix renvoient à « Get-Command », « Historique », « Shift+Tab » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Aide qui propose les membres accessibles sur un objet » ?",
      choices: ["Get-Command", "Historique", "Shift+Tab", "Complétion des propriétés"],
      answer: 3,
      explanation:
        "« Complétion des propriétés » : Aide qui propose les membres accessibles sur un objet. Les autres choix renvoient à « Get-Command », « Historique », « Shift+Tab » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Get-Command » ?",
      choices: [
        "Commande utile pour découvrir un nom quand la complétion ne suffit pas",
        "Commande qui confirme le sens d'un paramètre proposé par la complétion",
        "Avantage de la complétion qui évite de ressaisir les noms longs",
        "Aide qui termine le nom d'une commande commencée",
      ],
      answer: 0,
      explanation:
        "« Get-Command » : Commande utile pour découvrir un nom quand la complétion ne suffit pas. Les autres choix renvoient à « Get-Help », « Réduction des fautes de frappe », « Complétion des cmdlets » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande utile pour découvrir un nom quand la complétion ne suffit pas » ?",
      choices: [
        "Get-Help",
        "Get-Command",
        "Réduction des fautes de frappe",
        "Complétion des cmdlets",
      ],
      answer: 1,
      explanation:
        "« Get-Command » : Commande utile pour découvrir un nom quand la complétion ne suffit pas. Les autres choix renvoient à « Get-Help », « Réduction des fautes de frappe », « Complétion des cmdlets » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Get-Help » ?",
      choices: [
        "Liste des commandes déjà exécutées, différente de la complétion",
        "Touche qui complète une commande ou un paramètre à partir du contexte",
        "Commande qui confirme le sens d'un paramètre proposé par la complétion",
        "Aide qui propose les options compatibles avec la commande saisie",
      ],
      answer: 2,
      explanation:
        "« Get-Help » : Commande qui confirme le sens d'un paramètre proposé par la complétion. Les autres choix renvoient à « Historique », « Tab », « Complétion des paramètres » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui confirme le sens d'un paramètre proposé par la complétion » ?",
      choices: ["Historique", "Tab", "Complétion des paramètres", "Get-Help"],
      answer: 3,
      explanation:
        "« Get-Help » : Commande qui confirme le sens d'un paramètre proposé par la complétion. Les autres choix renvoient à « Historique », « Tab », « Complétion des paramètres » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Historique » ?",
      choices: [
        "Liste des commandes déjà exécutées, différente de la complétion",
        "Avantage de la complétion qui évite de ressaisir les noms longs",
        "Combinaison qui parcourt les propositions de complétion dans l'autre sens",
        "Aide qui termine des noms de dossiers ou de fichiers existants",
      ],
      answer: 0,
      explanation:
        "« Historique » : Liste des commandes déjà exécutées, différente de la complétion. Les autres choix renvoient à « Réduction des fautes de frappe », « Shift+Tab », « Complétion des chemins » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Liste des commandes déjà exécutées, différente de la complétion » ?",
      choices: [
        "Réduction des fautes de frappe",
        "Historique",
        "Shift+Tab",
        "Complétion des chemins",
      ],
      answer: 1,
      explanation:
        "« Historique » : Liste des commandes déjà exécutées, différente de la complétion. Les autres choix renvoient à « Réduction des fautes de frappe », « Shift+Tab », « Complétion des chemins » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Réduction des fautes de frappe » ?",
      choices: [
        "Touche qui complète une commande ou un paramètre à partir du contexte",
        "Aide qui termine le nom d'une commande commencée",
        "Avantage de la complétion qui évite de ressaisir les noms longs",
        "Aide qui propose les membres accessibles sur un objet",
      ],
      answer: 2,
      explanation:
        "« Réduction des fautes de frappe » : Avantage de la complétion qui évite de ressaisir les noms longs. Les autres choix renvoient à « Tab », « Complétion des cmdlets », « Complétion des propriétés » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Avantage de la complétion qui évite de ressaisir les noms longs » ?",
      choices: [
        "Tab",
        "Complétion des cmdlets",
        "Complétion des propriétés",
        "Réduction des fautes de frappe",
      ],
      answer: 3,
      explanation:
        "« Réduction des fautes de frappe » : Avantage de la complétion qui évite de ressaisir les noms longs. Les autres choix renvoient à « Tab », « Complétion des cmdlets », « Complétion des propriétés » ; comparez leur rôle avant de continuer.",
    },
  ],
}
