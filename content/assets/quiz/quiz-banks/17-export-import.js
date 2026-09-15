window.powerShellQuizBank = {
  id: "17-export-import",
  title: "Quiz — 17. Export et Import",
  chapter: "17. Export et Import",
  intro:
    "20 questions, dont deux situations concrètes, pour vérifier vos repères avant les travaux pratiques.",
  chapterLink: "../17-export-import/",
  questions: [
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Export-Csv » ?",
      choices: [
        "Commande qui écrit des objets en lignes de fichier CSV",
        "Commande qui recrée des objets à partir des lignes d'un CSV",
        "Commande qui transforme du texte JSON en objets",
        "Option d'Export-Csv qui évite une ligne de métadonnées de type dans certains environnements",
      ],
      answer: 0,
      explanation:
        "« Export-Csv » : Commande qui écrit des objets en lignes de fichier CSV. Les autres choix renvoient à « Import-Csv », « ConvertFrom-Json », « -NoTypeInformation » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Un collègue veut ouvrir la liste des agents dans un tableur. Quelle cmdlet exporte les objets dans ce format ?",
      choices: ["Import-Csv", "Export-Csv", "ConvertFrom-Json", "-NoTypeInformation"],
      answer: 1,
      explanation:
        "« Export-Csv » : Commande qui écrit des objets en lignes de fichier CSV. Les autres choix renvoient à « Import-Csv », « ConvertFrom-Json », « -NoTypeInformation » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Import-Csv » ?",
      choices: [
        "Commande qui transforme des objets en texte JSON",
        "Format tabulaire pratique pour des lignes et des colonnes simples",
        "Commande qui recrée des objets à partir des lignes d'un CSV",
        "Paramètre qui choisit le séparateur des colonnes CSV",
      ],
      answer: 2,
      explanation:
        "« Import-Csv » : Commande qui recrée des objets à partir des lignes d'un CSV. Les autres choix renvoient à « ConvertTo-Json », « CSV », « -Delimiter » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui recrée des objets à partir des lignes d'un CSV » ?",
      choices: ["ConvertTo-Json", "CSV", "-Delimiter", "Import-Csv"],
      answer: 3,
      explanation:
        "« Import-Csv » : Commande qui recrée des objets à partir des lignes d'un CSV. Les autres choix renvoient à « ConvertTo-Json », « CSV », « -Delimiter » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « ConvertTo-Json » ?",
      choices: [
        "Commande qui transforme des objets en texte JSON",
        "Commande qui transforme du texte JSON en objets",
        "Format qui peut représenter des structures et des collections imbriquées",
        "Choix qui préserve les caractères spéciaux lors d'un export ou import",
      ],
      answer: 0,
      explanation:
        "« ConvertTo-Json » : Commande qui transforme des objets en texte JSON. Les autres choix renvoient à « ConvertFrom-Json », « JSON », « Encodage » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui transforme des objets en texte JSON » ?",
      choices: ["ConvertFrom-Json", "ConvertTo-Json", "JSON", "Encodage"],
      answer: 1,
      explanation:
        "« ConvertTo-Json » : Commande qui transforme des objets en texte JSON. Les autres choix renvoient à « ConvertFrom-Json », « JSON », « Encodage » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « ConvertFrom-Json » ?",
      choices: [
        "Format tabulaire pratique pour des lignes et des colonnes simples",
        "Option d'Export-Csv qui évite une ligne de métadonnées de type dans certains environnements",
        "Commande qui transforme du texte JSON en objets",
        "Résultat qu'on peut à nouveau filtrer ou sélectionner après la lecture du fichier",
      ],
      answer: 2,
      explanation:
        "« ConvertFrom-Json » : Commande qui transforme du texte JSON en objets. Les autres choix renvoient à « CSV », « -NoTypeInformation », « Objet importé » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Une API renvoie une chaîne JSON et tu dois retrouver des propriétés manipulables dans PowerShell. Que fais-tu ?",
      choices: ["CSV", "-NoTypeInformation", "Objet importé", "ConvertFrom-Json"],
      answer: 3,
      explanation:
        "« ConvertFrom-Json » : Commande qui transforme du texte JSON en objets. Les autres choix renvoient à « CSV », « -NoTypeInformation », « Objet importé » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « CSV » ?",
      choices: [
        "Format tabulaire pratique pour des lignes et des colonnes simples",
        "Format qui peut représenter des structures et des collections imbriquées",
        "Paramètre qui choisit le séparateur des colonnes CSV",
        "Commande qui écrit des objets en lignes de fichier CSV",
      ],
      answer: 0,
      explanation:
        "« CSV » : Format tabulaire pratique pour des lignes et des colonnes simples. Les autres choix renvoient à « JSON », « -Delimiter », « Export-Csv » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Format tabulaire pratique pour des lignes et des colonnes simples » ?",
      choices: ["JSON", "CSV", "-Delimiter", "Export-Csv"],
      answer: 1,
      explanation:
        "« CSV » : Format tabulaire pratique pour des lignes et des colonnes simples. Les autres choix renvoient à « JSON », « -Delimiter », « Export-Csv » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « JSON » ?",
      choices: [
        "Option d'Export-Csv qui évite une ligne de métadonnées de type dans certains environnements",
        "Choix qui préserve les caractères spéciaux lors d'un export ou import",
        "Format qui peut représenter des structures et des collections imbriquées",
        "Commande qui recrée des objets à partir des lignes d'un CSV",
      ],
      answer: 2,
      explanation:
        "« JSON » : Format qui peut représenter des structures et des collections imbriquées. Les autres choix renvoient à « -NoTypeInformation », « Encodage », « Import-Csv » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Format qui peut représenter des structures et des collections imbriquées » ?",
      choices: ["-NoTypeInformation", "Encodage", "Import-Csv", "JSON"],
      answer: 3,
      explanation:
        "« JSON » : Format qui peut représenter des structures et des collections imbriquées. Les autres choix renvoient à « -NoTypeInformation », « Encodage », « Import-Csv » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « -NoTypeInformation » ?",
      choices: [
        "Option d'Export-Csv qui évite une ligne de métadonnées de type dans certains environnements",
        "Paramètre qui choisit le séparateur des colonnes CSV",
        "Résultat qu'on peut à nouveau filtrer ou sélectionner après la lecture du fichier",
        "Commande qui transforme des objets en texte JSON",
      ],
      answer: 0,
      explanation:
        "« -NoTypeInformation » : Option d'Export-Csv qui évite une ligne de métadonnées de type dans certains environnements. Les autres choix renvoient à « -Delimiter », « Objet importé », « ConvertTo-Json » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Option d'Export-Csv qui évite une ligne de métadonnées de type dans certains environnements » ?",
      choices: ["-Delimiter", "-NoTypeInformation", "Objet importé", "ConvertTo-Json"],
      answer: 1,
      explanation:
        "« -NoTypeInformation » : Option d'Export-Csv qui évite une ligne de métadonnées de type dans certains environnements. Les autres choix renvoient à « -Delimiter », « Objet importé », « ConvertTo-Json » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « -Delimiter » ?",
      choices: [
        "Choix qui préserve les caractères spéciaux lors d'un export ou import",
        "Commande qui écrit des objets en lignes de fichier CSV",
        "Paramètre qui choisit le séparateur des colonnes CSV",
        "Commande qui transforme du texte JSON en objets",
      ],
      answer: 2,
      explanation:
        "« -Delimiter » : Paramètre qui choisit le séparateur des colonnes CSV. Les autres choix renvoient à « Encodage », « Export-Csv », « ConvertFrom-Json » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Paramètre qui choisit le séparateur des colonnes CSV » ?",
      choices: ["Encodage", "Export-Csv", "ConvertFrom-Json", "-Delimiter"],
      answer: 3,
      explanation:
        "« -Delimiter » : Paramètre qui choisit le séparateur des colonnes CSV. Les autres choix renvoient à « Encodage », « Export-Csv », « ConvertFrom-Json » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Encodage » ?",
      choices: [
        "Choix qui préserve les caractères spéciaux lors d'un export ou import",
        "Résultat qu'on peut à nouveau filtrer ou sélectionner après la lecture du fichier",
        "Commande qui recrée des objets à partir des lignes d'un CSV",
        "Format tabulaire pratique pour des lignes et des colonnes simples",
      ],
      answer: 0,
      explanation:
        "« Encodage » : Choix qui préserve les caractères spéciaux lors d'un export ou import. Les autres choix renvoient à « Objet importé », « Import-Csv », « CSV » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Choix qui préserve les caractères spéciaux lors d'un export ou import » ?",
      choices: ["Objet importé", "Encodage", "Import-Csv", "CSV"],
      answer: 1,
      explanation:
        "« Encodage » : Choix qui préserve les caractères spéciaux lors d'un export ou import. Les autres choix renvoient à « Objet importé », « Import-Csv », « CSV » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Objet importé » ?",
      choices: [
        "Commande qui écrit des objets en lignes de fichier CSV",
        "Commande qui transforme des objets en texte JSON",
        "Résultat qu'on peut à nouveau filtrer ou sélectionner après la lecture du fichier",
        "Format qui peut représenter des structures et des collections imbriquées",
      ],
      answer: 2,
      explanation:
        "« Objet importé » : Résultat qu'on peut à nouveau filtrer ou sélectionner après la lecture du fichier. Les autres choix renvoient à « Export-Csv », « ConvertTo-Json », « JSON » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Résultat qu'on peut à nouveau filtrer ou sélectionner après la lecture du fichier » ?",
      choices: ["Export-Csv", "ConvertTo-Json", "JSON", "Objet importé"],
      answer: 3,
      explanation:
        "« Objet importé » : Résultat qu'on peut à nouveau filtrer ou sélectionner après la lecture du fichier. Les autres choix renvoient à « Export-Csv », « ConvertTo-Json », « JSON » ; comparez leur rôle avant de continuer.",
    },
  ],
}
