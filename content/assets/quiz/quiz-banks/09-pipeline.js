window.powerShellQuizBank = {
  id: "09-pipeline",
  title: "Quiz — 09. Pipeline",
  chapter: "09. Pipeline",
  intro:
    "20 questions, dont deux situations concrètes, pour vérifier vos repères avant les travaux pratiques.",
  chapterLink: "../09-pipeline/",
  questions: [
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « | » ?",
      choices: [
        "Opérateur qui transmet la sortie d'une commande à la suivante",
        "Commande qui filtre des objets selon une condition",
        "Commande qui choisit des propriétés ou limite le nombre de résultats",
        "Variable qui représente l'objet courant dans un bloc de pipeline",
      ],
      answer: 0,
      explanation:
        "« | » : Opérateur qui transmet la sortie d'une commande à la suivante. Les autres choix renvoient à « Where-Object », « Select-Object », « $_ » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Opérateur qui transmet la sortie d'une commande à la suivante » ?",
      choices: ["Where-Object", "|", "Select-Object", "$_"],
      answer: 1,
      explanation:
        "« | » : Opérateur qui transmet la sortie d'une commande à la suivante. Les autres choix renvoient à « Where-Object », « Select-Object », « $_ » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Where-Object » ?",
      choices: [
        "Commande qui trie les objets sur une propriété",
        "Commande qui regroupe les objets par valeur d'une propriété",
        "Commande qui filtre des objets selon une condition",
        "Commande qui inspecte les membres des objets transmis",
      ],
      answer: 2,
      explanation:
        "« Where-Object » : Commande qui filtre des objets selon une condition. Les autres choix renvoient à « Sort-Object », « Group-Object », « Get-Member » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "La Marine cherche uniquement les services arrêtés parmi tous les services retournés. Quelle étape du pipeline filtre ?",
      choices: ["Sort-Object", "Group-Object", "Get-Member", "Where-Object"],
      answer: 3,
      explanation:
        "« Where-Object » : Commande qui filtre des objets selon une condition. Les autres choix renvoient à « Sort-Object », « Group-Object », « Get-Member » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Sort-Object » ?",
      choices: [
        "Commande qui trie les objets sur une propriété",
        "Commande qui choisit des propriétés ou limite le nombre de résultats",
        "Commande qui calcule un compte, une somme ou d'autres mesures",
        "Tri qui place les valeurs les plus grandes en premier",
      ],
      answer: 0,
      explanation:
        "« Sort-Object » : Commande qui trie les objets sur une propriété. Les autres choix renvoient à « Select-Object », « Measure-Object », « Sort-Object -Descending » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui trie les objets sur une propriété » ?",
      choices: ["Select-Object", "Sort-Object", "Measure-Object", "Sort-Object -Descending"],
      answer: 1,
      explanation:
        "« Sort-Object » : Commande qui trie les objets sur une propriété. Les autres choix renvoient à « Select-Object », « Measure-Object », « Sort-Object -Descending » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Select-Object » ?",
      choices: [
        "Commande qui regroupe les objets par valeur d'une propriété",
        "Variable qui représente l'objet courant dans un bloc de pipeline",
        "Commande qui choisit des propriétés ou limite le nombre de résultats",
        "Chaîne de commandes qui conserve les propriétés plutôt que de parser du texte",
      ],
      answer: 2,
      explanation:
        "« Select-Object » : Commande qui choisit des propriétés ou limite le nombre de résultats. Les autres choix renvoient à « Group-Object », « $_ », « Pipeline d'objets » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui choisit des propriétés ou limite le nombre de résultats » ?",
      choices: ["Group-Object", "$_", "Pipeline d'objets", "Select-Object"],
      answer: 3,
      explanation:
        "« Select-Object » : Commande qui choisit des propriétés ou limite le nombre de résultats. Les autres choix renvoient à « Group-Object », « $_ », « Pipeline d'objets » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Group-Object » ?",
      choices: [
        "Commande qui regroupe les objets par valeur d'une propriété",
        "Commande qui calcule un compte, une somme ou d'autres mesures",
        "Commande qui inspecte les membres des objets transmis",
        "Opérateur qui transmet la sortie d'une commande à la suivante",
      ],
      answer: 0,
      explanation:
        "« Group-Object » : Commande qui regroupe les objets par valeur d'une propriété. Les autres choix renvoient à « Measure-Object », « Get-Member », « | » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui regroupe les objets par valeur d'une propriété » ?",
      choices: ["Measure-Object", "Group-Object", "Get-Member", "|"],
      answer: 1,
      explanation:
        "« Group-Object » : Commande qui regroupe les objets par valeur d'une propriété. Les autres choix renvoient à « Measure-Object », « Get-Member », « | » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Measure-Object » ?",
      choices: [
        "Variable qui représente l'objet courant dans un bloc de pipeline",
        "Tri qui place les valeurs les plus grandes en premier",
        "Commande qui calcule un compte, une somme ou d'autres mesures",
        "Commande qui filtre des objets selon une condition",
      ],
      answer: 2,
      explanation:
        "« Measure-Object » : Commande qui calcule un compte, une somme ou d'autres mesures. Les autres choix renvoient à « $_ », « Sort-Object -Descending », « Where-Object » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Tu as filtré des fichiers et veux compter combien correspondent au critère. Quelle cmdlet ajoutes-tu ?",
      choices: ["$_", "Sort-Object -Descending", "Where-Object", "Measure-Object"],
      answer: 3,
      explanation:
        "« Measure-Object » : Commande qui calcule un compte, une somme ou d'autres mesures. Les autres choix renvoient à « $_ », « Sort-Object -Descending », « Where-Object » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « $_ » ?",
      choices: [
        "Variable qui représente l'objet courant dans un bloc de pipeline",
        "Commande qui inspecte les membres des objets transmis",
        "Chaîne de commandes qui conserve les propriétés plutôt que de parser du texte",
        "Commande qui trie les objets sur une propriété",
      ],
      answer: 0,
      explanation:
        "« $_ » : Variable qui représente l'objet courant dans un bloc de pipeline. Les autres choix renvoient à « Get-Member », « Pipeline d'objets », « Sort-Object » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Variable qui représente l'objet courant dans un bloc de pipeline » ?",
      choices: ["Get-Member", "$_", "Pipeline d'objets", "Sort-Object"],
      answer: 1,
      explanation:
        "« $_ » : Variable qui représente l'objet courant dans un bloc de pipeline. Les autres choix renvoient à « Get-Member », « Pipeline d'objets », « Sort-Object » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Get-Member » ?",
      choices: [
        "Tri qui place les valeurs les plus grandes en premier",
        "Opérateur qui transmet la sortie d'une commande à la suivante",
        "Commande qui inspecte les membres des objets transmis",
        "Commande qui choisit des propriétés ou limite le nombre de résultats",
      ],
      answer: 2,
      explanation:
        "« Get-Member » : Commande qui inspecte les membres des objets transmis. Les autres choix renvoient à « Sort-Object -Descending », « | », « Select-Object » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui inspecte les membres des objets transmis » ?",
      choices: ["Sort-Object -Descending", "|", "Select-Object", "Get-Member"],
      answer: 3,
      explanation:
        "« Get-Member » : Commande qui inspecte les membres des objets transmis. Les autres choix renvoient à « Sort-Object -Descending », « | », « Select-Object » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Sort-Object -Descending » ?",
      choices: [
        "Tri qui place les valeurs les plus grandes en premier",
        "Chaîne de commandes qui conserve les propriétés plutôt que de parser du texte",
        "Commande qui filtre des objets selon une condition",
        "Commande qui regroupe les objets par valeur d'une propriété",
      ],
      answer: 0,
      explanation:
        "« Sort-Object -Descending » : Tri qui place les valeurs les plus grandes en premier. Les autres choix renvoient à « Pipeline d'objets », « Where-Object », « Group-Object » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Tri qui place les valeurs les plus grandes en premier » ?",
      choices: ["Pipeline d'objets", "Sort-Object -Descending", "Where-Object", "Group-Object"],
      answer: 1,
      explanation:
        "« Sort-Object -Descending » : Tri qui place les valeurs les plus grandes en premier. Les autres choix renvoient à « Pipeline d'objets », « Where-Object », « Group-Object » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Pipeline d'objets » ?",
      choices: [
        "Opérateur qui transmet la sortie d'une commande à la suivante",
        "Commande qui trie les objets sur une propriété",
        "Chaîne de commandes qui conserve les propriétés plutôt que de parser du texte",
        "Commande qui calcule un compte, une somme ou d'autres mesures",
      ],
      answer: 2,
      explanation:
        "« Pipeline d'objets » : Chaîne de commandes qui conserve les propriétés plutôt que de parser du texte. Les autres choix renvoient à « | », « Sort-Object », « Measure-Object » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Chaîne de commandes qui conserve les propriétés plutôt que de parser du texte » ?",
      choices: ["|", "Sort-Object", "Measure-Object", "Pipeline d'objets"],
      answer: 3,
      explanation:
        "« Pipeline d'objets » : Chaîne de commandes qui conserve les propriétés plutôt que de parser du texte. Les autres choix renvoient à « | », « Sort-Object », « Measure-Object » ; comparez leur rôle avant de continuer.",
    },
  ],
}
