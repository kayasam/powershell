window.powerShellQuizBank = {
  id: "31-recherche-et-rapports",
  title: "Quiz — 31. Recherche et rapports AD",
  chapter: "31. Recherche et rapports AD",
  intro:
    "20 questions, dont deux situations concrètes, pour vérifier vos repères avant les travaux pratiques.",
  chapterLink: "../31-recherche-et-rapports/",
  questions: [
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « -Filter » ?",
      choices: [
        "Paramètre qui sélectionne des objets AD selon une condition",
        "Paramètre qui limite la recherche à une partie de l'annuaire",
        "Commande qui trouve notamment des comptes désactivés ou expirés",
        "Commande qui écrit un rapport tabulaire réutilisable",
      ],
      answer: 0,
      explanation:
        "« -Filter » : Paramètre qui sélectionne des objets AD selon une condition. Les autres choix renvoient à « -SearchBase », « Search-ADAccount », « Export-Csv » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Paramètre qui sélectionne des objets AD selon une condition » ?",
      choices: ["-SearchBase", "-Filter", "Search-ADAccount", "Export-Csv"],
      answer: 1,
      explanation:
        "« -Filter » : Paramètre qui sélectionne des objets AD selon une condition. Les autres choix renvoient à « -SearchBase », « Search-ADAccount », « Export-Csv » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « -SearchBase » ?",
      choices: [
        "Paramètre qui charge les attributs supplémentaires nécessaires au rapport",
        "Commande qui fournit les comptes utilisateur à analyser",
        "Paramètre qui limite la recherche à une partie de l'annuaire",
        "Commande qui classe les lignes d'un rapport selon une propriété",
      ],
      answer: 2,
      explanation:
        "« -SearchBase » : Paramètre qui limite la recherche à une partie de l'annuaire. Les autres choix renvoient à « -Properties », « Get-ADUser », « Sort-Object » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Ton rapport doit se limiter aux comptes d’une OU précise et ignorer le reste du domaine. Quel paramètre ajoutes-tu ?",
      choices: ["-Properties", "Get-ADUser", "Sort-Object", "-SearchBase"],
      answer: 3,
      explanation:
        "« -SearchBase » : Paramètre qui limite la recherche à une partie de l'annuaire. Les autres choix renvoient à « -Properties », « Get-ADUser », « Sort-Object » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « -Properties » ?",
      choices: [
        "Paramètre qui charge les attributs supplémentaires nécessaires au rapport",
        "Commande qui trouve notamment des comptes désactivés ou expirés",
        "Commande qui choisit les colonnes utiles dans un rapport",
        "Unité d'organisation qui peut servir de périmètre d'une recherche",
      ],
      answer: 0,
      explanation:
        "« -Properties » : Paramètre qui charge les attributs supplémentaires nécessaires au rapport. Les autres choix renvoient à « Search-ADAccount », « Select-Object », « OU » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Paramètre qui charge les attributs supplémentaires nécessaires au rapport » ?",
      choices: ["Search-ADAccount", "-Properties", "Select-Object", "OU"],
      answer: 1,
      explanation:
        "« -Properties » : Paramètre qui charge les attributs supplémentaires nécessaires au rapport. Les autres choix renvoient à « Search-ADAccount », « Select-Object », « OU » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Search-ADAccount » ?",
      choices: [
        "Commande qui fournit les comptes utilisateur à analyser",
        "Commande qui écrit un rapport tabulaire réutilisable",
        "Commande qui trouve notamment des comptes désactivés ou expirés",
        "Vue synthétique qui rassemble plusieurs indicateurs du domaine",
      ],
      answer: 2,
      explanation:
        "« Search-ADAccount » : Commande qui trouve notamment des comptes désactivés ou expirés. Les autres choix renvoient à « Get-ADUser », « Export-Csv », « Tableau de bord » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui trouve notamment des comptes désactivés ou expirés » ?",
      choices: ["Get-ADUser", "Export-Csv", "Tableau de bord", "Search-ADAccount"],
      answer: 3,
      explanation:
        "« Search-ADAccount » : Commande qui trouve notamment des comptes désactivés ou expirés. Les autres choix renvoient à « Get-ADUser », « Export-Csv », « Tableau de bord » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Get-ADUser » ?",
      choices: [
        "Commande qui fournit les comptes utilisateur à analyser",
        "Commande qui choisit les colonnes utiles dans un rapport",
        "Commande qui classe les lignes d'un rapport selon une propriété",
        "Paramètre qui sélectionne des objets AD selon une condition",
      ],
      answer: 0,
      explanation:
        "« Get-ADUser » : Commande qui fournit les comptes utilisateur à analyser. Les autres choix renvoient à « Select-Object », « Sort-Object », « -Filter » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui fournit les comptes utilisateur à analyser » ?",
      choices: ["Select-Object", "Get-ADUser", "Sort-Object", "-Filter"],
      answer: 1,
      explanation:
        "« Get-ADUser » : Commande qui fournit les comptes utilisateur à analyser. Les autres choix renvoient à « Select-Object », « Sort-Object », « -Filter » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Select-Object » ?",
      choices: [
        "Commande qui écrit un rapport tabulaire réutilisable",
        "Unité d'organisation qui peut servir de périmètre d'une recherche",
        "Commande qui choisit les colonnes utiles dans un rapport",
        "Paramètre qui limite la recherche à une partie de l'annuaire",
      ],
      answer: 2,
      explanation:
        "« Select-Object » : Commande qui choisit les colonnes utiles dans un rapport. Les autres choix renvoient à « Export-Csv », « OU », « -SearchBase » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui choisit les colonnes utiles dans un rapport » ?",
      choices: ["Export-Csv", "OU", "-SearchBase", "Select-Object"],
      answer: 3,
      explanation:
        "« Select-Object » : Commande qui choisit les colonnes utiles dans un rapport. Les autres choix renvoient à « Export-Csv », « OU », « -SearchBase » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Export-Csv » ?",
      choices: [
        "Commande qui écrit un rapport tabulaire réutilisable",
        "Commande qui classe les lignes d'un rapport selon une propriété",
        "Vue synthétique qui rassemble plusieurs indicateurs du domaine",
        "Paramètre qui charge les attributs supplémentaires nécessaires au rapport",
      ],
      answer: 0,
      explanation:
        "« Export-Csv » : Commande qui écrit un rapport tabulaire réutilisable. Les autres choix renvoient à « Sort-Object », « Tableau de bord », « -Properties » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Situation concrète",
      question:
        "Le résultat trié doit être transmis à un collègue qui travaille dans un tableur. Quelle cmdlet termine le pipeline ?",
      choices: ["Sort-Object", "Export-Csv", "Tableau de bord", "-Properties"],
      answer: 1,
      explanation:
        "« Export-Csv » : Commande qui écrit un rapport tabulaire réutilisable. Les autres choix renvoient à « Sort-Object », « Tableau de bord », « -Properties » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Sort-Object » ?",
      choices: [
        "Unité d'organisation qui peut servir de périmètre d'une recherche",
        "Paramètre qui sélectionne des objets AD selon une condition",
        "Commande qui classe les lignes d'un rapport selon une propriété",
        "Commande qui trouve notamment des comptes désactivés ou expirés",
      ],
      answer: 2,
      explanation:
        "« Sort-Object » : Commande qui classe les lignes d'un rapport selon une propriété. Les autres choix renvoient à « OU », « -Filter », « Search-ADAccount » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Commande qui classe les lignes d'un rapport selon une propriété » ?",
      choices: ["OU", "-Filter", "Search-ADAccount", "Sort-Object"],
      answer: 3,
      explanation:
        "« Sort-Object » : Commande qui classe les lignes d'un rapport selon une propriété. Les autres choix renvoient à « OU », « -Filter », « Search-ADAccount » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « OU » ?",
      choices: [
        "Unité d'organisation qui peut servir de périmètre d'une recherche",
        "Vue synthétique qui rassemble plusieurs indicateurs du domaine",
        "Paramètre qui limite la recherche à une partie de l'annuaire",
        "Commande qui fournit les comptes utilisateur à analyser",
      ],
      answer: 0,
      explanation:
        "« OU » : Unité d'organisation qui peut servir de périmètre d'une recherche. Les autres choix renvoient à « Tableau de bord », « -SearchBase », « Get-ADUser » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Unité d'organisation qui peut servir de périmètre d'une recherche » ?",
      choices: ["Tableau de bord", "OU", "-SearchBase", "Get-ADUser"],
      answer: 1,
      explanation:
        "« OU » : Unité d'organisation qui peut servir de périmètre d'une recherche. Les autres choix renvoient à « Tableau de bord », « -SearchBase », « Get-ADUser » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Comprendre la notion",
      question: "Quelle définition correspond à « Tableau de bord » ?",
      choices: [
        "Paramètre qui sélectionne des objets AD selon une condition",
        "Paramètre qui charge les attributs supplémentaires nécessaires au rapport",
        "Vue synthétique qui rassemble plusieurs indicateurs du domaine",
        "Commande qui choisit les colonnes utiles dans un rapport",
      ],
      answer: 2,
      explanation:
        "« Tableau de bord » : Vue synthétique qui rassemble plusieurs indicateurs du domaine. Les autres choix renvoient à « -Filter », « -Properties », « Select-Object » ; comparez leur rôle avant de continuer.",
    },
    {
      theme: "Retrouver la commande ou le concept",
      question:
        "Quel concept correspond à cette description : « Vue synthétique qui rassemble plusieurs indicateurs du domaine » ?",
      choices: ["-Filter", "-Properties", "Select-Object", "Tableau de bord"],
      answer: 3,
      explanation:
        "« Tableau de bord » : Vue synthétique qui rassemble plusieurs indicateurs du domaine. Les autres choix renvoient à « -Filter », « -Properties », « Select-Object » ; comparez leur rôle avant de continuer.",
    },
  ],
}
